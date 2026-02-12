// リンクスキル辞書
// キャラデータからは名前だけで参照します
// テンプレート "": { lv1: "", lv10: "" },
const LINK_SKILLS = [
    {
        "id": 50,
        "name": "BOSSキャラ",
        "level1_description": "HP80%以下でATK,DEF25%UP",
        "level10_description": "ATK,DEF25%UP"
    },
    {
        "id": 95,
        "name": "GT",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,DEF10%UP"
    },
    {
        "id": 55,
        "name": "RR軍",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK,DEF10%UP"
    },
    {
        "id": 45,
        "name": "Z戦士",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 129,
        "name": "あの世の戦士",
        "level1_description": "ATK20%UP",
        "level10_description": "ATK20%UP、DEF10%UP"
    },
    {
        "id": 47,
        "name": "かめはめ波",
        "level1_description": "必殺技発動時、ATK5%UP",
        "level10_description": "必殺技発動時、ATK10%UP"
    },
    {
        "id": 46,
        "name": "どどん波",
        "level1_description": "必殺技発動時、ATK10%UP",
        "level10_description": "必殺技発動時、ATK15%UP"
    },
    {
        "id": 1003,
        "name": "ぶっちぎりのパワー",
        "level1_description": "ATK,DEF5%UPし、「貫通」効果を得る",
        "level10_description": "ATK,DEF10%UPし、「貫通」効果を得る"
    },
    {
        "id": 42,
        "name": "インファイター",
        "level1_description": "ATK10%UP、敵全体のDEFを10%DOWN",
        "level10_description": "ATK15%UP、敵全体のDEFを15%DOWN"
    },
    {
        "id": 81,
        "name": "エネルギー吸収式",
        "level1_description": "気力+2",
        "level10_description": "気力+3、HP3%回復"
    },
    {
        "id": 41,
        "name": "ギニュー特戦隊",
        "level1_description": "ATK25%UP",
        "level10_description": "ATK25%UP、会心率5%UP"
    },
    {
        "id": 91,
        "name": "クウラの部下",
        "level1_description": "気力+1",
        "level10_description": "気力+2、会心率5%UP"
    },
    {
        "id": 92,
        "name": "クウラ機甲戦隊",
        "level1_description": "ATK25%UP",
        "level10_description": "ATK,DEF25%UP"
    },
    {
        "id": 79,
        "name": "グルメ",
        "level1_description": "HP5%回復",
        "level10_description": "HP7%回復、DEF7%UP"
    },
    {
        "id": 54,
        "name": "コンビネーション",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 124,
        "name": "サイヤの咆哮",
        "level1_description": "ATK25%UP",
        "level10_description": "ATK25%UP、DEF10%UP"
    },
    {
        "id": 34,
        "name": "サイヤ人の血",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ATK,DEF5%UP"
    },
    {
        "id": 63,
        "name": "サイヤ人の誇り",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 115,
        "name": "サイヤ人への憎しみ",
        "level1_description": "気力+2",
        "level10_description": "気力+3、ATK10%UP"
    },
    {
        "id": 53,
        "name": "スピードタイプ",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK15%UP、回避率5%UP"
    },
    {
        "id": 121,
        "name": "ゼノバース",
        "level1_description": "ATK20%UP",
        "level10_description": "ATK20%UP、DEF10%UP"
    },
    {
        "id": 52,
        "name": "タフネス戦士",
        "level1_description": "DEF15%UP",
        "level10_description": "DEF20%UP、ダメージ軽減率5%UP"
    },
    {
        "id": 100,
        "name": "ターレス軍団",
        "level1_description": "気力+1",
        "level10_description": "気力+2、会心率5%UP"
    },
    {
        "id": 44,
        "name": "チャンピオンの力",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ダメージ軽減率5%UP"
    },
    {
        "id": 24,
        "name": "テレパシー",
        "level1_description": "気力+1",
        "level10_description": "気力+2、会心率5%UP"
    },
    {
        "id": 102,
        "name": "ドラゴンボールの導き",
        "level1_description": "ATK20%UP",
        "level10_description": "ATK20%UP、会心率7%UP"
    },
    {
        "id": 48,
        "name": "ナメック星人",
        "level1_description": "HP5%回復",
        "level10_description": "HP7%回復、ATK,DEF7%UP"
    },
    {
        "id": 49,
        "name": "バーサーカー",
        "level1_description": "HP50%以下でATK20%UP",
        "level10_description": "HP50%以下でATK30%UP"
    },
    {
        "id": 62,
        "name": "バーダックチーム",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ATK,DEF10%UP"
    },
    {
        "id": 1000,
        "name": "バーニングファイト",
        "level1_description": "敵の「暴走」無効化&ATK15%UP",
        "level10_description": "敵の「暴走」無効化&ATK20%UP"
    },
    {
        "id": 69,
        "name": "パトロール",
        "level1_description": "気力+2",
        "level10_description": "気力+2、DEF20%UP"
    },
    {
        "id": 43,
        "name": "フリーザの手下",
        "level1_description": "ATK20%UP",
        "level10_description": "ATK20%UP、DEF10%UP"
    },
    {
        "id": 51,
        "name": "フリーザ軍",
        "level1_description": "DEF20%UP",
        "level10_description": "ATK10%UP、DEF20%UP"
    },
    {
        "id": 87,
        "name": "ヘラー一族",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,会心率5%UP"
    },
    {
        "id": 104,
        "name": "ベジータ王への恨み",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ATK10%UP"
    },
    {
        "id": 128,
        "name": "ペンギン村の大冒険",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 38,
        "name": "メカ系",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ダメージ軽減率5%UP"
    },
    {
        "id": 84,
        "name": "一心同体",
        "level1_description": "気力+1",
        "level10_description": "気力+2、HP3%回復"
    },
    {
        "id": 74,
        "name": "不変の絆",
        "level1_description": "気力+2",
        "level10_description": "気力+2、DEF20%UP"
    },
    {
        "id": 90,
        "name": "不思議な大冒険",
        "level1_description": "気力+2",
        "level10_description": "気力+3、ATK,DEF7%UP"
    },
    {
        "id": 36,
        "name": "亀仙流",
        "level1_description": "ATK,DEF10%UP",
        "level10_description": "気力+2、ATK,DEF20%UP"
    },
    {
        "id": 35,
        "name": "人造人間",
        "level1_description": "DEF10%UP",
        "level10_description": "気力+2、DEF20%UP"
    },
    {
        "id": 125,
        "name": "伝説の力",
        "level1_description": "必殺技発動時、ATK10%UP",
        "level10_description": "必殺技発動時、ATK15%UP"
    },
    {
        "id": 39,
        "name": "冷静な判断",
        "level1_description": "DEF20%UP",
        "level10_description": "DEF25%UP"
    },
    {
        "id": 33,
        "name": "分身",
        "level1_description": "気力+1",
        "level10_description": "気力+2、回避率5%UP"
    },
    {
        "id": 130,
        "name": "力の大会",
        "level1_description": "気力+3",
        "level10_description": "気力+3、ATK,DEF7%UP"
    },
    {
        "id": 2,
        "name": "勇気",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ATK10%UP"
    },
    {
        "id": 32,
        "name": "卑怯者",
        "level1_description": "気力+1",
        "level10_description": "気力+2、会心率5%UP"
    },
    {
        "id": 101,
        "name": "占いババの闘士",
        "level1_description": "気力+2",
        "level10_description": "気力+3、ATK,DEF5%UP"
    },
    {
        "id": 31,
        "name": "双子",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,DEF,回避率5%UP"
    },
    {
        "id": 61,
        "name": "受け継がれる意志",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK10%UP"
    },
    {
        "id": 113,
        "name": "合体失敗",
        "level1_description": "HP3%回復",
        "level10_description": "HP7%回復"
    },
    {
        "id": 112,
        "name": "合体戦士",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,DEF5%UP"
    },
    {
        "id": 58,
        "name": "圧倒的な戦闘力",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK,DEF10%UP"
    },
    {
        "id": 28,
        "name": "変身タイプ",
        "level1_description": "HP5%回復",
        "level10_description": "HP5%回復、ATK,DEF10%UP"
    },
    {
        "id": 27,
        "name": "天下一武道会優勝者",
        "level1_description": "気力+1",
        "level10_description": "気力+2、DEF10%UP"
    },
    {
        "id": 26,
        "name": "天才",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK15%UP"
    },
    {
        "id": 64,
        "name": "女戦士",
        "level1_description": "気力+2",
        "level10_description": "気力+3、回避率5%UP"
    },
    {
        "id": 23,
        "name": "孫一族",
        "level1_description": "DEF15%UP",
        "level10_description": "DEF20%UP"
    },
    {
        "id": 98,
        "name": "宇宙の壊し屋",
        "level1_description": "ATK25%UP",
        "level10_description": "ATK25%UP、DEF15%UP"
    },
    {
        "id": 59,
        "name": "宇宙最凶",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 85,
        "name": "宇宙最強の一族",
        "level1_description": "気力+2",
        "level10_description": "敵全体のDEFを10%DOWNさせ、気力+2"
    },
    {
        "id": 25,
        "name": "尊敬",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 56,
        "name": "尊敬の眼差し",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,DEF10%UP"
    },
    {
        "id": 123,
        "name": "巨大化",
        "level1_description": "気力+2",
        "level10_description": "気力+3、DEF10%UP"
    },
    {
        "id": 82,
        "name": "希望の星",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK15%UP"
    },
    {
        "id": 107,
        "name": "弱点の補強",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 57,
        "name": "強襲",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 86,
        "name": "征服の野望",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK,DEF15%UP"
    },
    {
        "id": 65,
        "name": "復活",
        "level1_description": "気力+2",
        "level10_description": "気力+2、HP50%以下で\nATK,DEF5%UP、HP5%回復"
    },
    {
        "id": 68,
        "name": "復活の「F」",
        "level1_description": "ATK10%UP",
        "level10_description": "気力+1、ATK,DEF10%UP"
    },
    {
        "id": 73,
        "name": "忠誠心",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ダメージ軽減率5%UP"
    },
    {
        "id": 120,
        "name": "恐怖と絶望",
        "level1_description": "気力+2",
        "level10_description": "敵全体のDEFを10%DOWNさせ、気力+2"
    },
    {
        "id": 119,
        "name": "悪夢",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK15%UP"
    },
    {
        "id": 22,
        "name": "戦闘民族サイヤ人",
        "level1_description": "ATK5%UP",
        "level10_description": "ATK10%UP"
    },
    {
        "id": 21,
        "name": "新生",
        "level1_description": "ATK20%UP",
        "level10_description": "ATK,DEF20%UP"
    },
    {
        "id": 72,
        "name": "新生フリーザ軍",
        "level1_description": "ATK,DEF20%UP",
        "level10_description": "ATK,DEF25%UP"
    },
    {
        "id": 20,
        "name": "新生・天下一武道会",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 67,
        "name": "有機質改造",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,DEF,会心率5%UP"
    },
    {
        "id": 19,
        "name": "未来からの使者",
        "level1_description": "ATK5%UP",
        "level10_description": "ATK10%UP"
    },
    {
        "id": 93,
        "name": "正義のヒーロー",
        "level1_description": "ATK25%UP",
        "level10_description": "ATK25%UP、会心率5%UP"
    },
    {
        "id": 30,
        "name": "歴戦の戦士",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK15%UP"
    },
    {
        "id": 18,
        "name": "残虐",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK15%UP"
    },
    {
        "id": 110,
        "name": "永久エネルギー炉",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,DEF,会心率5%UP"
    },
    {
        "id": 94,
        "name": "決めポーズ",
        "level1_description": "気力+2",
        "level10_description": "気力+3、ATK7%UP"
    },
    {
        "id": 4,
        "name": "無邪気",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK15%UP"
    },
    {
        "id": 96,
        "name": "無限の再生",
        "level1_description": "HP3%回復",
        "level10_description": "気力+2、HP3%回復、DEF10%UP"
    },
    {
        "id": 40,
        "name": "王の血筋",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ATK5%UP"
    },
    {
        "id": 75,
        "name": "異世界からの来訪者",
        "level1_description": "気力+1",
        "level10_description": "気力+2、DEF20%UP"
    },
    {
        "id": 37,
        "name": "的確なアシスト",
        "level1_description": "ATK10%UP、敵全体のDEFを15%DOWN",
        "level10_description": "ATK15%UP、敵全体のDEFを20%DOWN"
    },
    {
        "id": 1,
        "name": "相性抜群",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ATK,DEF10%UP"
    },
    {
        "id": 89,
        "name": "短期決戦",
        "level1_description": "気力+3",
        "level10_description": "気力+3、ATK7%UP"
    },
    {
        "id": 103,
        "name": "神から授かりし力",
        "level1_description": "必殺技発動時、ATK5%UP",
        "level10_description": "必殺技発動時、ATK10%UP"
    },
    {
        "id": 80,
        "name": "神の次元",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK15%UP、会心率5%UP"
    },
    {
        "id": 70,
        "name": "神戦士",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK10%UPし、\n必殺技発動時さらにATK5%UP"
    },
    {
        "id": 114,
        "name": "科学者",
        "level1_description": "気力+2",
        "level10_description": "気力+2、DEF20%UP"
    },
    {
        "id": 108,
        "name": "究極生命体への系譜",
        "level1_description": "気力+2",
        "level10_description": "気力+2、HP3%回復、ATK,DEF10%UP"
    },
    {
        "id": 1004,
        "name": "立ちはだかる壁",
        "level1_description": "敵の「真なる力」無効化&ATK15%UP",
        "level10_description": "敵の「真なる力」無効化&ATK20%UP"
    },
    {
        "id": 126,
        "name": "第6宇宙の戦士",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,DEF6%UP"
    },
    {
        "id": 17,
        "name": "紳士",
        "level1_description": "気力+2",
        "level10_description": "気力+2、DEF10%UP"
    },
    {
        "id": 66,
        "name": "絶望の未来",
        "level1_description": "気力+1",
        "level10_description": "気力+2、会心率5%UP"
    },
    {
        "id": 97,
        "name": "臨戦態勢",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,DEF5%UP"
    },
    {
        "id": 105,
        "name": "自己修復機能",
        "level1_description": "HP3%回復",
        "level10_description": "HP5%回復、ダメージ軽減率5%UP"
    },
    {
        "id": 16,
        "name": "至高の戦士",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ATK10%UP"
    },
    {
        "id": 15,
        "name": "英雄",
        "level1_description": "DEF20%UP",
        "level10_description": "DEF25%UP"
    },
    {
        "id": 106,
        "name": "融合",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,DEF10%UP"
    },
    {
        "id": 14,
        "name": "見た目と違って",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK,DEF10%UP"
    },
    {
        "id": 117,
        "name": "覚醒の先駆者",
        "level1_description": "ATK25%UP",
        "level10_description": "ATK25%UP、DEF10%UP"
    },
    {
        "id": 29,
        "name": "超サイヤ人",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK15%UP"
    },
    {
        "id": 111,
        "name": "超強敵",
        "level1_description": "ATK10%UP",
        "level10_description": "ATK15%UP"
    },
    {
        "id": 122,
        "name": "超強襲",
        "level1_description": "ATK20%UP",
        "level10_description": "ATK25%UP"
    },
    {
        "id": 109,
        "name": "超激戦",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 71,
        "name": "超神激戦",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 13,
        "name": "超能力",
        "level1_description": "敵全体のDEFを10%DOWNさせる",
        "level10_description": "敵全体のDEFを20%DOWNさせる"
    },
    {
        "id": 12,
        "name": "逃げ足",
        "level1_description": "HP30%以下で気力+1",
        "level10_description": "HP50%以下で気力+2、回避率10%UP"
    },
    {
        "id": 11,
        "name": "邪念の支配者",
        "level1_description": "気力+1",
        "level10_description": "敵全体のDEFを20%DOWNさせ、気力+2"
    },
    {
        "id": 127,
        "name": "邪悪龍",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK,DEF20%UP"
    },
    {
        "id": 10,
        "name": "金持ち",
        "level1_description": "気力+1",
        "level10_description": "気力+2、DEF20%UP"
    },
    {
        "id": 9,
        "name": "金色の戦士",
        "level1_description": "敵全体のDEFを5%DOWNさせ、気力+1",
        "level10_description": "敵全体のDEFを10%DOWNさせ、気力+1"
    },
    {
        "id": 88,
        "name": "銀河戦士",
        "level1_description": "ATK20%UP",
        "level10_description": "気力+2、ATKとDEF20%UP"
    },
    {
        "id": 3,
        "name": "門下生",
        "level1_description": "DEF20%UP",
        "level10_description": "DEF30%UP"
    },
    {
        "id": 116,
        "name": "限界を超えた姿",
        "level1_description": "必殺技発動時、ATK5%UP",
        "level10_description": "必殺技発動時、ATK10%UP"
    },
    {
        "id": 118,
        "name": "限界突破",
        "level1_description": "気力+2",
        "level10_description": "気力+2、ATK,DEF5%UP"
    },
    {
        "id": 8,
        "name": "頭脳派",
        "level1_description": "ATK,DEF10%UP",
        "level10_description": "ATK,DEF15%UP"
    },
    {
        "id": 60,
        "name": "驚異的なスピード",
        "level1_description": "気力+2",
        "level10_description": "気力+2、DEF5%UP"
    },
    {
        "id": 1001,
        "name": "魂vs魂",
        "level1_description": "敵の「再生」効果減少&気力+1",
        "level10_description": "敵の「再生」効果減少\n&気力+2、ATK,DEF5%UP"
    },
    {
        "id": 7,
        "name": "魔の力",
        "level1_description": "ATK20%UP",
        "level10_description": "ATK20%UP、DEF10%UP"
    },
    {
        "id": 6,
        "name": "魔の流儀",
        "level1_description": "気力+1",
        "level10_description": "気力+2、ATK,DEF10%UP"
    },
    {
        "id": 83,
        "name": "魔人",
        "level1_description": "ATK,DEF10%UP",
        "level10_description": "気力+2、ATK,DEF15%UP"
    },
    {
        "id": 77,
        "name": "魔人復活計画",
        "level1_description": "気力+2",
        "level10_description": "気力+2、DEF20%UP"
    },
    {
        "id": 76,
        "name": "魔術の使い手",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK15%UP、敵全体のDEFを10%DOWN"
    },
    {
        "id": 5,
        "name": "鶴仙流",
        "level1_description": "ATK15%UP",
        "level10_description": "ATK20%UP"
    },
    {
        "id": 1002,
        "name": "黄金のZ戦士",
        "level1_description": "気力+2",
        "level10_description": "気力+3、会心率5%UP"
    }
]