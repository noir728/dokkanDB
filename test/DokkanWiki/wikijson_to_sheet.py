#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
wikijson_to_sheet.py - DokkanWiki JSONデータ → スプレッドシート変換ツール

DokkanWiki APIから取得したJSON/CSVデータを、
スプレッドシートのCharacters/Formsシートの形式に変換し、TSVとして出力する。

使い方:
  python wikijson_to_sheet.py input.json [--gemini-key YOUR_API_KEY]
  python wikijson_to_sheet.py input.csv  [--gemini-key YOUR_API_KEY]

出力:
  characters_output.tsv  - Charactersシート用
  forms_output.tsv       - Formsシート用
"""

import json
import csv
import sys
import os
import re
import argparse
import time
from datetime import datetime

# ============================================================
# 定数マッピング
# ============================================================

RARITY_MAP = {0: "N", 1: "R", 2: "SR", 3: "SSR", 4: "UR", 5: "LR"}

# element の 1の位 → 属性
TYPE_MAP = {0: "AGL", 1: "TEQ", 2: "INT", 3: "STR", 4: "PHY"}

# element の 10の位 → クラス
CLASS_MAP = {0: "", 1: "Super", 2: "Extreme"}

# Characters シートのヘッダー
CHAR_HEADERS = [
    "id", "title", "name", "yomi", "rarity", "cost", "type", "class",
    "release", "eza", "seza",
    "leaderSkill", "leaderSkill_eza", "leaderSkill_seza",
    "categories", "awakening_json", "source_type"
]

# Forms シートのヘッダー
FORM_HEADERS = [
    "char_id", "mode", "label", "name", "form_id", "links",
    "stats_json", "attacks_json", "passive_json", "active_json",
    "standby_json", "field_json", "reversible", "unitSuperAttack_json"
]


# ============================================================
# ユーティリティ関数
# ============================================================

def format_date(date_str):
    """ISO日付文字列 → yyyy/MM/dd 形式に変換"""
    if not date_str:
        return ""
    try:
        dt = datetime.strptime(str(date_str).strip(), "%Y-%m-%d %H:%M:%S")
        return dt.strftime("%Y/%m/%d")
    except:
        try:
            dt = datetime.strptime(str(date_str).strip()[:10], "%Y-%m-%d")
            return dt.strftime("%Y/%m/%d")
        except:
            return str(date_str)


def get_type_from_element(element):
    """element値 → 属性文字列"""
    if element is None:
        return ""
    return TYPE_MAP.get(int(element) % 10, "")


def get_class_from_element(element):
    """element値 → Super/Extreme"""
    if element is None:
        return ""
    return CLASS_MAP.get(int(element) // 10, "")


def get_rarity_str(rarity_num):
    """数値レアリティ → 文字列"""
    if rarity_num is None:
        return ""
    return RARITY_MAP.get(int(rarity_num), "")


def get_source_type(card):
    """is_dokkan_fes, is_carnival_only, is_f2p → source_type"""
    if card.get("is_dokkan_fes"):
        return "fes"
    if card.get("is_carnival_only"):
        return "matsuri"
    if card.get("is_f2p"):
        return "event"
    return "gasha"


def normalize_id(id_val):
    """IDの下一桁が1の場合は0に変換（例: 1002801→1002800）"""
    if not id_val:
        return id_val
    id_str = str(id_val)
    if id_str.endswith('1'):
        return int(id_str[:-1] + '0')
    return int(id_str) if id_str.isdigit() else id_val


def json_str(obj):
    """オブジェクトをJSON文字列に変換（スプレッドシートセル用）"""
    if obj is None:
        return ""
    return json.dumps(obj, ensure_ascii=False, separators=(',', ':'))


# ============================================================
# データ読み込み
# ============================================================

def load_input(filepath):
    """JSONまたはCSVファイルからデータを読み込む"""
    ext = os.path.splitext(filepath)[1].lower()

    if ext == '.json':
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return process_rows(data)

    elif ext == '.csv':
        return load_csv(filepath)

    else:
        raise ValueError(f"未対応のファイル形式: {ext}")


def load_csv(filepath):
    """CSVファイルからJSON的なオブジェクトリストに変換"""
    rows = []
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows.append(row)
    return process_rows(rows)


def process_rows(rows):
    """行データの変換処理（文字列JSONパース、型変換）"""
    processed = []
    for row in rows:
        # JSON文字列のフィールドをパース
        for key in ['categories', 'specials', 'awakening_routes',
                    'transformations', 'optimal_awakening_growths', 'card_links']:
            if key in row and row[key]:
                if isinstance(row[key], str):  # 文字列の場合のみパース
                    try:
                        row[key] = json.loads(row[key])
                    except json.JSONDecodeError:
                        try:
                            # CSVのダブルクォート内のエスケープを修正
                            val = row[key].replace('""', '"')
                            row[key] = json.loads(val)
                        except:
                            row[key] = []

        # 数値フィールドの変換
        for key in ['id', 'cost', 'rarity', 'element', 'hp_max', 'atk_max',
                    'def_max', 'skill_level_max']:
            if key in row and row[key]:
                try:
                    row[key] = int(row[key])
                except:
                    pass

        # ブール値の変換
        for key in ['is_dokkan_fes', 'is_carnival_only', 'is_f2p']:
            if key in row:
                if isinstance(row[key], bool):
                    continue
                row[key] = str(row[key]).lower() in ('true', '1', 'yes')

        processed.append(row)

    return processed


# ============================================================
# EZA/SEZA ヘルパー
# ============================================================

def find_eza_growth(growths):
    """optimal_awakening_growths から EZA (step 3 or 7) を取得"""
    if not growths:
        return None
    for g in growths:
        if g.get("step") in [3, 7]:
            return g
    return None


def find_seza_growth(growths):
    """optimal_awakening_growths から SEZA (step 4 or 8) を取得"""
    if not growths:
        return None
    for g in growths:
        if g.get("step") in [4, 8]:
            return g
    return None


# ============================================================
# awakening_json 構築
# ============================================================

def build_awakening_json(card):
    """awakening_routes + optimal_awakening_growths → awakening_json"""
    routes = card.get("awakening_routes", [])
    growths = card.get("optimal_awakening_growths", [])

    if not routes:
        return ""

    result = []

    for i, route in enumerate(routes):
        awaked = route.get("awaked_card", {})
        entry = {
            "rank": get_rarity_str(awaked.get("rarity")),
            "id": awaked.get("base_id", awaked.get("id"))
        }

        # 覚醒メダル情報 (Z覚醒・ドッカン覚醒)
        awaken_items = awaked.get("awaken_items")
        if awaken_items and len(awaken_items) > 0:
            medals = []
            for item in awaken_items:
                item_rarity = item.get("rarity", 0)
                item_id = item.get("item_id", 0)
                medals.append({
                    "name": f"id/{item_rarity}/{item_id}",
                    "bg": f"rarity/{item_rarity}",
                    "count": item.get("quantity", 0)
                })
            entry["medals"] = medals

        result.append(entry)

    # 極限Z覚醒 (EZA)
    eza_growth = find_eza_growth(growths)
    if eza_growth and routes:
        last_route = routes[-1]
        last_awaked = last_route.get("awaked_card", {})

        eza_entry = {
            "rank": "EZA",
            "id": last_awaked.get("base_id", last_awaked.get("id"))
        }

        # EZAメダル情報 (optimal_awakening_growths から参照)
        eza_items = eza_growth.get("awaken_items", [])
        medals = []
        if eza_items:
            for item in eza_items:
                item_rarity = item.get("rarity", 0)
                item_id = item.get("item_id", 0)
                medals.append({
                    "name": f"id/{item_rarity}/{item_id}",
                    "bg": f"rarity/{item_rarity}",
                    "count": item.get("quantity", 0)
                })
        eza_entry["medals"] = medals

        result.append(eza_entry)

    # 超極限Z覚醒 (SEZA)
    seza_growth = find_seza_growth(growths)
    if seza_growth and routes:
        last_route = routes[-1]
        last_awaked = last_route.get("awaked_card", {})

        seza_entry = {
            "rank": "SEZA",
            "id": last_awaked.get("base_id", last_awaked.get("id"))
        }

        # SEZAメダル情報 (optimal_awakening_growths から参照)
        seza_items = seza_growth.get("awaken_items", [])
        medals = []
        if seza_items:
            for item in seza_items:
                item_rarity = item.get("rarity", 0)
                item_id = item.get("item_id", 0)
                medals.append({
                    "name": f"id/{item_rarity}/{item_id}",
                    "bg": f"rarity/{item_rarity}",
                    "count": item.get("quantity", 0)
                })
        seza_entry["medals"] = medals

        result.append(seza_entry)

    return json_str(result)


# ============================================================
# attacks_json 構築
# ============================================================

def build_attacks_json(specials, skill_level_max, mode="normal"):
    """specials配列 → attacks_json"""
    if not specials:
        return ""

    attacks = []
    for s in specials:
        atk_name = s.get("name", "")

        # mode による必殺技フィルタリング（必殺技名の「(極限)」有無で判定）
        if mode == "normal" and "(極限)" in atk_name:
            continue  # 通常モードでは(極限)付きの必殺技はスキップ
        if mode in ("eza", "seza") and "(極限)" not in atk_name:
            # EZA/SEZAモードでは(極限)付きがあればそちらを優先
            # ただし(極限)版がない場合はノーマル版を使用
            has_eza_version = any(
                "(極限)" in (ss.get("name", "")) and
                ss.get("eball_num_start") == s.get("eball_num_start") and
                ss.get("style") == s.get("style")
                for ss in specials
            )
            if has_eza_version:
                continue

        ki_str = f"{s.get('eball_num_start', 12)}~"
        atk = {
            "ki": ki_str,
            "maxLv": skill_level_max or 10,
            "type": (s.get("special_category_name") or "その他").replace("系", ""),
            "name": s.get("name", ""),
            "style": s.get("style", "Normal"),
            "effect": s.get("description", ""),
        }

        # causality_description があれば condition として追加
        causality = s.get("causality_description")
        if causality:
            atk["condition"] = causality

        atk["specs"] = {}
        attacks.append(atk)

    return json_str(attacks) if attacks else ""


# ============================================================
# passive_json 構築（ルールベース版）
# ============================================================

def build_passive_json_simple(passive_name, passive_desc):
    """passive_skill_itemized_desc → passive_json (シンプル版: name + raw)"""
    if not passive_name and not passive_desc:
        return ""

    result = {
        "name": passive_name or "",
        "details": [],
        "maxValues": {}
    }

    if passive_desc:
        # セクション分割: *xxx* でタイトル区切り
        sections = parse_passive_sections(passive_desc)
        result["details"] = sections

    return json_str(result)


def parse_passive_sections(desc):
    """passive_skill_itemized_desc をセクションに分割"""
    if not desc:
        return []

    details = []
    lines = str(desc).split('\n')

    current_title = ""
    current_effects = []

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # *xxx* 形式のタイトル行
        title_match = re.match(r'^\*(.+)\*$', line)
        if title_match:
            # 前のセクションを保存
            if current_title or current_effects:
                details.append({
                    "title": current_title,
                    "effects": current_effects
                })
            current_title = title_match.group(1)
            current_effects = []
        elif line.startswith('・') or line.startswith('　'):
            # 効果行
            effect_text = line.lstrip('・').lstrip('　').strip()
            if effect_text:
                current_effects.append(effect_text)
        else:
            # タイトルでも箇条書きでもない行は前の効果に結合
            if current_effects:
                current_effects[-1] += line
            elif line:
                current_effects.append(line)

    # 最後のセクションを保存
    if current_title or current_effects:
        details.append({
            "title": current_title,
            "effects": current_effects
        })

    return details


# ============================================================
# Gemini API による passive_json 分解
# ============================================================

def build_passive_json_with_gemini(passive_name, passive_desc, api_key,
                                   model="gemini-2.0-flash"):
    """Gemini APIを使ってpassive_jsonをintro/details/maxValuesに分解する"""
    if not passive_desc:
        return build_passive_json_simple(passive_name, passive_desc)

    try:
        import urllib.request
        import urllib.error

        prompt = f"""あなたはドッカンバトルのパッシブスキルデータを構造化するエキスパートです。
以下のパッシブスキル説明文を分析し、JSON形式で返してください。

パッシブスキル名: {passive_name}
パッシブスキル説明:
{passive_desc}

以下のJSON形式で返してください（```json```で囲んでください）:
{{
  "name": "{passive_name}",
  "intro": {{
    "condition": "登場時演出の条件（なければnull）",
    "effect": "登場時演出の効果（なければnull）"
  }},
  "details": [
    {{
      "title": "セクションタイトル（*xxx*の部分）",
      "effects": ["効果1", "効果2"]
    }}
  ],
  "maxValues": {{
    "crit": "会心率の最大値（例: 100%）なければ省略",
    "add": "追加攻撃の最大回数（例: 5回）なければ省略",
    "reduce": "ダメージ軽減率の最大値（例: 90%）なければ省略",
    "dodge": "回避率の最大値（例: 50%）なければ省略",
    "guard": true/false,
    "effective": true/false,
    "action_break": true/false,
    "revival": true/false,
    "stun": true/false,
    "seal": true/false,
    "counter": true/false,
    "survive_ko": true/false
  }}
}}

ルール:
1. introは「登場時演出」「自身の登場時」等の記述がある場合のみ設定。なければnul(introキーごと省略)
2. detailsは*xxx*で囲まれたセクションごとに分割。・で始まる行は効果として配列に追加
3. maxValuesは説明文中のキーワードから判断:
   - 「会心率」→ crit, 「追加攻撃」→ add, 「ダメージ軽減」→ reduce
   - 「回避」→ dodge, 「ガード」→ guard, 「効果抜群」→ effective
   - 「アクションブレイク」→ action_break, 「復活」→ revival
   - 「気絶」→ stun, 「必殺技封じ」→ seal, 「反撃」→ counter
   - 「残りHP0で耐える」→ survive_ko
   - 「中確率」→ 30%, 「高確率」→ 50%, 「超高確率」→ 70%として計算
   - 該当しない項目はキーごと省略
4. 置換:
     - "up","up_g" → "[img:up]"
     - "once" → "[img:one_time]"
     - "forever" → "[img:infinity]"
     - "down" → "[img:down]"
6. JSON以外のテキストは出力しない"""

        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"

        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": 0.1,
                "maxOutputTokens": 4096
            }
        }

        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode('utf-8'),
            headers={"Content-Type": "application/json"},
            method="POST"
        )

        with urllib.request.urlopen(req, timeout=30) as resp:
            result = json.loads(resp.read().decode('utf-8'))

        # レスポンスからJSONを抽出
        text = result["candidates"][0]["content"]["parts"][0]["text"]

        # ```json ... ``` を抽出
        json_match = re.search(r'```json\s*([\s\S]*?)\s*```', text)
        if json_match:
            parsed = json.loads(json_match.group(1))
        else:
            # フォールバック: テキスト全体をJSONとしてパース
            parsed = json.loads(text.strip())

        return json_str(parsed)

    except Exception as e:
        print(f"  [WARN] Gemini API Error: {e}")
        # フォールバック: ルールベース版を使用
        return build_passive_json_simple(passive_name, passive_desc)


# ============================================================
# active_json 構築
# ============================================================

def build_active_json(card):
    """active_skill_* → active_json"""
    name = card.get("active_skill_name")
    condition = card.get("active_skill_condition")
    effect = card.get("active_skill_effect")

    if not name and not condition and not effect:
        return ""

    result = {}
    if name:
        result["name"] = name
    if condition:
        result["condition"] = condition
    if effect:
        result["effect"] = effect

    return json_str(result)


# ============================================================
# メイン変換ロジック
# ============================================================

def has_transformations(card):
    """キャラクターが形態変化を持つかどうか判定"""
    transformations = card.get("transformations", [])
    if not transformations:
        return False
    # start_card_id を持つ変身がある = 形態変化あり
    return any(t.get("start_card_id") for t in transformations)


def convert_card_to_character_row(card):
    """1つのカードデータ → Charactersシート1行"""
    growths = card.get("optimal_awakening_growths", [])
    eza_growth = find_eza_growth(growths)
    seza_growth = find_seza_growth(growths)

    # Categories
    categories = card.get("categories", [])
    if isinstance(categories, list):
        if categories and isinstance(categories[0], dict):
            cat_str = ",".join(c.get("name", "") for c in categories)
        else:
            cat_str = ",".join(str(c) for c in categories)
    else:
        cat_str = str(categories)

    # レアリティ判定: UR(4)の場合、awakening_routes[0]のawaked_card_idと
    # 自身のIDが一致（下一桁0/1無視）していればSSR(3)に降格
    rarity_num = card.get("rarity")
    if rarity_num == 4:
        routes = card.get("awakening_routes", [])
        if routes:
            first_awaked_id = routes[0].get("awaked_card_id")
            card_id = card.get("id")
            if first_awaked_id is not None and card_id is not None:
                if normalize_id(first_awaked_id) == normalize_id(card_id):
                    rarity_num = 3  # SSRに降格

    row = {
        "id": normalize_id(card.get("id", "")),
        "title": card.get("title", ""),
        "name": card.get("name", ""),
        "yomi": "",  # 読み仮名は手動 or Gemini API
        "rarity": get_rarity_str(rarity_num),
        "cost": card.get("cost", ""),
        "type": get_type_from_element(card.get("element")),
        "class": get_class_from_element(card.get("element")),
        "release": format_date(card.get("open_at")),
        "eza": format_date(eza_growth.get("open_at")) if eza_growth else "",
        "seza": format_date(seza_growth.get("open_at")) if seza_growth else "",
        "leaderSkill": card.get("leader_skill", ""),
        "leaderSkill_eza": eza_growth.get("leader_skill_description", "") if eza_growth else "",
        "leaderSkill_seza": seza_growth.get("leader_skill_description", "") if seza_growth else "",
        "categories": cat_str,
        "awakening_json": build_awakening_json(card),
        "source_type": get_source_type(card),
    }

    return row


def convert_card_to_form_rows(card, gemini_key=None, gemini_model="gemini-2.0-flash",
                              parent_card_id=None):
    """1つのカードデータ → Formsシート複数行（normal + eza + seza）"""
    rows = []
    growths = card.get("optimal_awakening_growths", [])
    eza_growth = find_eza_growth(growths)
    seza_growth = find_seza_growth(growths)
    raw_id = card.get("id", "")
    is_transform_card = str(raw_id).startswith("4")

    if is_transform_card and parent_card_id:
        # Transform card: char_idは変身前のメインカードID、form_idは自身の4始まりID
        card_id = normalize_id(parent_card_id)
        transform_form_id = normalize_id(raw_id)
    else:
        card_id = normalize_id(raw_id)
        transform_form_id = None
    has_transform = has_transformations(card)

    # === Normal 形態 ===
    normal_row = build_form_row(
        card_id=card_id,
        mode="normal",
        card=card,
        passive_name=card.get("passive_skill_name"),
        passive_desc=card.get("passive_skill_itemized_desc"),
        specials=card.get("specials", []),
        skill_level_max=card.get("skill_level_max"),
        hp=card.get("hp_max"),
        atk=card.get("atk_max"),
        def_val=card.get("def_max"),
        links=card.get("card_links", []),
        transformations=card.get("transformations", []),
        has_transform=has_transform,
        gemini_key=gemini_key,
        gemini_model=gemini_model,
        override_form_id=transform_form_id,
    )
    rows.append(normal_row)

    # === EZA 形態 ===
    if eza_growth:
        eza_row = build_form_row(
            card_id=card_id,
            mode="eza",
            card=card,
            passive_name=eza_growth.get("passive_skill_name", card.get("passive_skill_name")),
            passive_desc=eza_growth.get("passive_skill_itemized_desc", ""),
            specials=card.get("specials", []),
            skill_level_max=eza_growth.get("skill_lv_max", card.get("skill_level_max")),
            hp=eza_growth.get("hp_max", card.get("hp_max")),
            atk=eza_growth.get("atk_max", card.get("atk_max")),
            def_val=eza_growth.get("def_max", card.get("def_max")),
            links=card.get("card_links", []),
            transformations=eza_growth.get("transformations", card.get("transformations", [])),
            has_transform=has_transform,
            gemini_key=gemini_key,
            gemini_model=gemini_model,
        )
        rows.append(eza_row)

    # === SEZA 形態 ===
    if seza_growth:
        seza_row = build_form_row(
            card_id=card_id,
            mode="seza",
            card=card,
            passive_name=seza_growth.get("passive_skill_name", card.get("passive_skill_name")),
            passive_desc=seza_growth.get("passive_skill_itemized_desc", ""),
            specials=card.get("specials", []),
            skill_level_max=seza_growth.get("skill_lv_max", card.get("skill_level_max")),
            hp=seza_growth.get("hp_max", card.get("hp_max")),
            atk=seza_growth.get("atk_max", card.get("atk_max")),
            def_val=seza_growth.get("def_max", card.get("def_max")),
            links=card.get("card_links", []),
            transformations=seza_growth.get("transformations", card.get("transformations", [])),
            has_transform=has_transform,
            gemini_key=gemini_key,
            gemini_model=gemini_model,
        )
        rows.append(seza_row)

    return rows


def build_form_row(card_id, mode, card, passive_name, passive_desc,
                   specials, skill_level_max, hp, atk, def_val,
                   links, transformations, has_transform,
                   gemini_key=None, gemini_model="gemini-2.0-flash",
                   override_form_id=None):
    """Formsシート1行を構築"""

    # Links: card_links[] の name をカンマ区切り
    if isinstance(links, list):
        if links and isinstance(links[0], dict):
            links_str = ",".join(l.get("name", "") for l in links)
        else:
            links_str = ",".join(str(l) for l in links)
    else:
        links_str = str(links) if links else ""

    # Stats JSON
    stats = {"hp": hp or 0, "atk": atk or 0, "def": def_val or 0}

    # Attacks JSON
    attacks_str = build_attacks_json(specials, skill_level_max, mode)

    # Passive JSON (Gemini API or ルールベース)
    if gemini_key and passive_desc:
        passive_str = build_passive_json_with_gemini(
            passive_name, passive_desc, gemini_key, gemini_model
        )
    else:
        passive_str = build_passive_json_simple(passive_name, passive_desc)

    # Active JSON
    active_str = build_active_json(card)

    # Transformation → name / form_id
    trans_name = ""
    trans_form_id = ""
    if override_form_id:
        # Transform card自身のID
        trans_form_id = override_form_id
        trans_name = card.get("name", "")
    elif transformations and has_transform:
        for t in transformations:
            if t.get("start_card_id"):
                next_card = t.get("next_card", {})
                trans_name = next_card.get("name", "")
                trans_form_id = normalize_id(t.get("next_card_id", ""))
                break
            elif t.get("id"):
                trans_name = t.get("name", "")
                trans_form_id = normalize_id(t.get("id", ""))
                break

    # Label: 形態変化がある場合はactive_skill_name/passive_skill_name、なければ「通常」
    label = "通常"
    if has_transform:
        label = card.get("active_skill_name", "") or card.get("passive_skill_name", "")

    row = {
        "char_id": card_id,
        "mode": mode,
        "label": label,
        "name": trans_name,
        "form_id": trans_form_id,
        "links": links_str,
        "stats_json": json_str(stats),
        "attacks_json": attacks_str,
        "passive_json": passive_str,
        "active_json": active_str,
        "standby_json": "",
        "field_json": "",
        "reversible": "",
        "unitSuperAttack_json": "",
    }

    return row


# ============================================================
# グループ化: 同一base_id のカードをまとめる
# ============================================================

def group_cards_by_base(cards):
    """
    最終形態（最高レアリティ）のカードのみをCharactersシートの対象とする。
    変身先（IDが4で始まる）は除外し、Forms側で変身形態として処理する。
    親子マッピング（4始まりID → メインカードID）も構築する。
    """
    main_cards = [c for c in cards if not str(c.get("id", "")).startswith("4")]
    transform_cards = [c for c in cards if str(c.get("id", "")).startswith("4")]

    # 親子マッピング: transformations内の4始まりID → メインカードID
    parent_map = {}
    for card in main_cards:
        card_id = card.get("id", "")
        transformations = card.get("transformations", [])
        if isinstance(transformations, list):
            for t in transformations:
                tid = t.get("id") or t.get("next_card_id")
                if tid and str(tid).startswith("4"):
                    parent_map[int(tid)] = card_id

    return main_cards, transform_cards, parent_map


# ============================================================
# TSV出力
# ============================================================

def write_tsv(filepath, headers, rows):
    """TSVファイルとして出力"""
    with open(filepath, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=headers, delimiter='\t',
                                extrasaction='ignore')
        writer.writeheader()
        for row in rows:
            writer.writerow(row)
    print(f"  [OK] {filepath} ({len(rows)} rows)")


# ============================================================
# メイン処理
# ============================================================

def main():
    parser = argparse.ArgumentParser(
        description='DokkanWiki JSON/CSV → スプレッドシート変換ツール'
    )
    parser.add_argument('input', help='入力ファイル (.json or .csv)')
    parser.add_argument('--gemini-key', default=None,
                        help='Gemini API Key (passive_json分解に使用)')
    parser.add_argument('--gemini-model', default='gemini-2.5-pro',
                        help='Gemini モデル名 (default: gemini-2.0-flash)')
    parser.add_argument('--output-dir', default='.',
                        help='出力ディレクトリ (default: カレント)')
    parser.add_argument('--delay', type=float, default=1.0,
                        help='Gemini API呼び出し間の待機秒数 (default: 1.0)')

    args = parser.parse_args()

    # 入力ファイル読み込み
    print(f"\n[INPUT] {args.input}")
    cards = load_input(args.input)
    print(f"  -> {len(cards)} cards loaded\n")

    # グループ化
    main_cards, transform_cards, parent_map = group_cards_by_base(cards)
    print(f"  Main cards: {len(main_cards)}")
    print(f"  Transform cards: {len(transform_cards)}\n")

    # 変換処理
    char_rows = []
    form_rows = []

    use_gemini = args.gemini_key is not None
    if use_gemini:
        print("  [AI] Using Gemini API for passive_json decomposition\n")

    # --- メインカード ---
    for i, card in enumerate(main_cards):
        card_id = card.get("id", "?")
        card_name = card.get("name", "?")
        print(f"  [{i+1}/{len(main_cards)}] ID:{card_id} {card_name}")

        # Characters行
        char_row = convert_card_to_character_row(card)
        char_rows.append(char_row)

        # Forms行
        forms = convert_card_to_form_rows(
            card,
            gemini_key=args.gemini_key,
            gemini_model=args.gemini_model
        )
        form_rows.extend(forms)

        if use_gemini and i < len(main_cards) - 1:
            time.sleep(args.delay)

    # --- 変身先カード（Formsのみ） ---
    for i, card in enumerate(transform_cards):
        card_id = card.get("id", "?")
        card_name = card.get("name", "?")
        print(f"  [Transform {i+1}/{len(transform_cards)}] ID:{card_id} {card_name}")

        # 親カードIDを取得
        p_id = parent_map.get(card_id)
        forms = convert_card_to_form_rows(
            card,
            gemini_key=args.gemini_key,
            gemini_model=args.gemini_model,
            parent_card_id=p_id
        )
        form_rows.extend(forms)

        if use_gemini and i < len(transform_cards) - 1:
            time.sleep(args.delay)

    print()

    # TSV出力
    os.makedirs(args.output_dir, exist_ok=True)
    char_path = os.path.join(args.output_dir, "characters_output.tsv")
    form_path = os.path.join(args.output_dir, "forms_output.tsv")

    print("[OUTPUT]")
    write_tsv(char_path, CHAR_HEADERS, char_rows)
    write_tsv(form_path, FORM_HEADERS, form_rows)

    print(f"\n[DONE]")
    print(f"  Characters: {char_path}")
    print(f"  Forms:      {form_path}")


if __name__ == "__main__":
    main()
