const CHARACTER_DATA = [
    {
        "id": 1000000,
        "title": "二つ名",
        "name": "テストキャラ",
        "yomi": "てすときゃら",
        "rarity": "LR",
        "cost": 999,
        "type": "AGL",
        "class": "Super",
        "release": "2025/12/01",
        "eza": "2025/12/01",
        "seza": "2025/12/01",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "クロスオーバー"
        ],
        "leaderSkill": "リーダースキルnormal",
        "leaderSkill_eza": "リーダースキルeza",
        "leaderSkill_seza": "リーダースキルseza",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1000000
            },
            {
                "rank": "UR",
                "id": 1000000,
                "medals": [
                    {
                        "name": "超激戦/最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1000000,
                "medals": [
                    {
                        "name": "超激戦/最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1000000,
                "medals": [
                    {
                        "name": "zb/虹",
                        "count": 45
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1000000,
                "medals": [
                    {
                        "name": "zb/[地獄の羅刹鬼]スーパージャネンバ/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "無限",
                            "def_up": "1ターン"
                        }
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果\n[img:infinity]\n[img:one_time]"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "condition": "条件",
                    "effect": "効果",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "0"
            },
            {
                "label": "変身",
                "name": "変身テスト",
                "id": 1000000,
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "field": {
                    "name": "フィールド名",
                    "icon": "field_Button",
                    "condition": "条件",
                    "effect": "効果"
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "0"
            },
            {
                "label": "",
                "name": "リバチェン先テスト",
                "id": 1000000,
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "1"
            },
            {
                "label": "合体",
                "name": "リバチェン先テスト",
                "id": 1000000,
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "1"
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "field": {
                    "name": "フィールド名",
                    "icon": "field_Button",
                    "condition": "条件",
                    "effect": "効果"
                }
            },
            {
                "label": "融合",
                "name": "融合テスト",
                "id": 1000000,
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "field": {
                    "name": "フィールド名",
                    "icon": "field_Button",
                    "condition": "条件",
                    "effect": "効果"
                }
            }
        ],
        "forms_seza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "field": {
                    "name": "フィールド名",
                    "icon": "field_Button",
                    "condition": "条件",
                    "effect": "効果"
                }
            },
            {
                "label": "合体",
                "name": "合体テスト",
                "id": 1000000,
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "field": {
                    "name": "フィールド名",
                    "icon": "field_Button",
                    "condition": "条件",
                    "effect": "効果"
                }
            }
        ]
    },
    {
        "id": 1002800,
        "title": "邪念の化身",
        "name": "スーパージャネンバ",
        "yomi": "すーぱーじゃねんば",
        "rarity": "SSR",
        "cost": 20,
        "type": "INT",
        "class": "Extreme",
        "release": "2016/02/04",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "劇場版BOSS",
            "変身強化",
            "心身の侵食",
            "高速戦闘",
            "制御不能の力"
        ],
        "leaderSkill": "知属性のATK60%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1002800
            },
            {
                "rank": "UR",
                "id": 1002810,
                "medals": [
                    {
                        "name": "超激戦/悪鬼羅刹/1",
                        "bg": "超激戦/bg",
                        "count": 10
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1002810,
                "medals": [
                    {
                        "name": "zb/地獄の羅刹鬼/1",
                        "count": 15
                    },
                    {
                        "name": "zb/地獄の羅刹鬼/2",
                        "count": 40
                    },
                    {
                        "name": "zb/地獄の羅刹鬼/3",
                        "count": 30
                    },
                    {
                        "name": "zb/地獄の羅刹鬼/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1002810,
                "medals": [
                    {
                        "name": "zb/地獄の羅刹鬼/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "驚異的なスピード",
                    "変身タイプ",
                    "残虐",
                    "恐怖と絶望"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13935,
                        "atk": 15580,
                        "def": 10717
                    },
                    "fifty": {
                        "hp": 8535,
                        "atk": 10180,
                        "def": 5317
                    },
                    "base": {
                        "hp": 6935,
                        "atk": 8580,
                        "def": 3717
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "羅刹爪",
                        "effect": "超特大ダメージ&DEFを低下させる",
                        "specs": {
                            "def_down": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "空間の支配",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF3000[img:up]",
                                "全ての攻撃をガード"
                            ]
                        }
                    ],
                    "maxValues": {
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1002810,
        "title": "地獄の羅刹鬼",
        "name": "スーパージャネンバ",
        "yomi": "すーぱーじゃねんば",
        "rarity": "UR",
        "cost": 42,
        "type": "INT",
        "class": "Extreme",
        "release": "2016/02/04",
        "eza": "2018/12/06",
        "seza": "2025/02/05",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "劇場版BOSS",
            "変身強化",
            "心身の侵食",
            "高速戦闘",
            "制御不能の力"
        ],
        "leaderSkill": "知属性のATK80%UP",
        "leaderSkill_eza": "知属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_seza": "知属性の気力+3、HPとATKとDEF90%UP",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1002800
            },
            {
                "rank": "UR",
                "id": 1002810,
                "medals": [
                    {
                        "name": "超激戦/悪鬼羅刹/1",
                        "bg": "超激戦/bg",
                        "count": 10
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1002810,
                "medals": [
                    {
                        "name": "zb/地獄の羅刹鬼/1",
                        "count": 15
                    },
                    {
                        "name": "zb/地獄の羅刹鬼/2",
                        "count": 40
                    },
                    {
                        "name": "zb/地獄の羅刹鬼/3",
                        "count": 30
                    },
                    {
                        "name": "zb/地獄の羅刹鬼/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1002810,
                "medals": [
                    {
                        "name": "zb/地獄の羅刹鬼/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "驚異的なスピード",
                    "変身タイプ",
                    "残虐",
                    "悪夢",
                    "恐怖と絶望",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14945,
                        "atk": 16219,
                        "def": 11222
                    },
                    "fifty": {
                        "hp": 10745,
                        "atk": 12019,
                        "def": 7022
                    },
                    "base": {
                        "hp": 7945,
                        "atk": 9219,
                        "def": 4222
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ライトニングシャワーレイン",
                        "effect": "超特大ダメージ&DEFを大幅低下させる",
                        "specs": {
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "空間の支配",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF5000[img:up]",
                                "全ての攻撃をガード"
                            ]
                        }
                    ],
                    "maxValues": {
                        "guard": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "驚異的なスピード",
                    "変身タイプ",
                    "残虐",
                    "悪夢",
                    "恐怖と絶望",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 16215,
                        "atk": 18685,
                        "def": 11495
                    },
                    "fifty": {
                        "hp": 11215,
                        "atk": 13685,
                        "def": 6495
                    },
                    "base": {
                        "hp": 9215,
                        "atk": 11685,
                        "def": 4495
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ライトニングシャワーレイン(極限)",
                        "effect": "超絶特大ダメージ&DEFを大幅低下させる",
                        "specs": {
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "空間の支配",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "ガードが決まると",
                            "effects": [
                                "そのターン中、中確率で敵の攻撃を回避",
                                "4ターンの間、ATK40%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "dodge": "30%",
                        "guard": true
                    }
                }
            }
        ],
        "forms_seza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "驚異的なスピード",
                    "変身タイプ",
                    "残虐",
                    "悪夢",
                    "恐怖と絶望",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 16215,
                        "atk": 18685,
                        "def": 11495
                    },
                    "fifty": {
                        "hp": 11215,
                        "atk": 13685,
                        "def": 6495
                    },
                    "base": {
                        "hp": 9215,
                        "atk": 11685,
                        "def": 4495
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ライトニングシャワーレイン(極限)",
                        "effect": "超絶特大ダメージ&DEFを大幅低下させる",
                        "specs": {
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "空間の支配",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2",
                                "ATK/DEF200%[img:up]",
                                "全ての攻撃をガード",
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "自身が攻撃するまで",
                            "effects": [
                                "回避率20%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か3番目で気玉を取得すると",
                            "effects": [
                                "回避率20%[img:up]",
                                "味方全員の気力+2、DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "ATK/DEF200%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるか回避するたび",
                            "effects": [
                                "[img:infinity]ATK50%[img:up](最大200%)"
                            ]
                        },
                        {
                            "title": "敵の攻撃を回避すると",
                            "effects": [
                                "4ターンの間、必ず必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "超系の敵がいるとき",
                            "effects": [
                                "DEF200%[img:up]",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "極系の敵がいるとき",
                            "effects": [
                                "DEF100%[img:up]",
                                "超高確率で全属性に効果抜群で攻撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "dodge": "90%",
                        "guard": true,
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1005270,
        "title": "最強のフュージョン",
        "name": "超ゴジータ",
        "yomi": "すーぱーごじーた",
        "rarity": "SSR",
        "cost": 24,
        "type": "STR",
        "class": "Super",
        "release": "2016/02/04",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "フュージョン",
            "劇場版HERO",
            "超サイヤ人",
            "あの世の戦士",
            "最後の切り札",
            "つながる希望",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "全属性の気力+2、ATK2500UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1005270
            },
            {
                "rank": "UR",
                "id": 1005280,
                "medals": [
                    {
                        "name": "超激戦/空前絶後の最強フュージョン/1",
                        "bg": "超激戦/bg",
                        "count": 10
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1005280,
                "medals": [
                    {
                        "name": "zb/絶対無敵の戦士/1",
                        "count": 15
                    },
                    {
                        "name": "zb/絶対無敵の戦士/2",
                        "count": 40
                    },
                    {
                        "name": "zb/絶対無敵の戦士/3",
                        "count": 30
                    },
                    {
                        "name": "zb/絶対無敵の戦士/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1005280,
                "medals": [
                    {
                        "name": "zb/絶対無敵の戦士/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "かめはめ波",
                    "合体戦士"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 16100,
                        "atk": 16580,
                        "def": 9990
                    },
                    "fifty": {
                        "hp": 10700,
                        "atk": 10620,
                        "def": 5150
                    },
                    "base": {
                        "hp": 9100,
                        "atk": 9020,
                        "def": 3550
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ビッグバンかめはめ波",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "圧倒的な一撃",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "全属性に効果抜群で攻撃",
                                "ATK5000[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1005280,
        "title": "絶対無敵の戦士",
        "name": "超ゴジータ",
        "yomi": "すーぱーごじーた",
        "rarity": "UR",
        "cost": 48,
        "type": "STR",
        "class": "Super",
        "release": "2016/02/04",
        "eza": "2019/01/10",
        "seza": "2025/02/05",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "フュージョン",
            "劇場版HERO",
            "超サイヤ人",
            "あの世の戦士",
            "最後の切り札",
            "つながる希望",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "全属性の気力+3、ATK3000UP",
        "leaderSkill_eza": "全属性の気力+3、HPとATKとDEF77%UP",
        "leaderSkill_seza": "全属性の気力+3、HPとATKとDEF77%UP",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1005270
            },
            {
                "rank": "UR",
                "id": 1005280,
                "medals": [
                    {
                        "name": "超激戦/空前絶後の最強フュージョン/1",
                        "bg": "超激戦/bg",
                        "count": 10
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1005280,
                "medals": [
                    {
                        "name": "zb/絶対無敵の戦士/1",
                        "count": 15
                    },
                    {
                        "name": "zb/絶対無敵の戦士/2",
                        "count": 40
                    },
                    {
                        "name": "zb/絶対無敵の戦士/3",
                        "count": 30
                    },
                    {
                        "name": "zb/絶対無敵の戦士/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1005280,
                "medals": [
                    {
                        "name": "zb/絶対無敵の戦士/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "短期決戦",
                    "合体戦士",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 17750,
                        "atk": 17760,
                        "def": 10565
                    },
                    "fifty": {
                        "hp": 13550,
                        "atk": 13000,
                        "def": 6925
                    },
                    "base": {
                        "hp": 10750,
                        "atk": 10200,
                        "def": 4125
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ソウルパニッシャー",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "圧倒的な一撃",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "全属性に効果抜群で攻撃",
                                "ATK7000[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "effective": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "短期決戦",
                    "合体戦士",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 20075,
                        "atk": 20392,
                        "def": 10871
                    },
                    "fifty": {
                        "hp": 15075,
                        "atk": 14832,
                        "def": 6431
                    },
                    "base": {
                        "hp": 13075,
                        "atk": 12832,
                        "def": 4431
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ソウルパニッシャー(極限)",
                        "effect": "相手に超絶特大ダメージを与え、ATKとDEFを低下させる",
                        "specs": {
                            "atk_down": "30%",
                            "def_down": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "圧倒的な一撃",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF77%[img:up]",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "ATK7%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "effective": true
                    }
                }
            }
        ],
        "forms_seza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "短期決戦",
                    "合体戦士",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 20075,
                        "atk": 20392,
                        "def": 10871
                    },
                    "fifty": {
                        "hp": 15075,
                        "atk": 14832,
                        "def": 6431
                    },
                    "base": {
                        "hp": 13075,
                        "atk": 12832,
                        "def": 4431
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ソウルパニッシャー(極限)",
                        "effect": "相手に超絶特大ダメージを与え、ATKとDEFを低下させる",
                        "specs": {
                            "atk_down": "30%",
                            "def_down": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "圧倒的な一撃",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2",
                                "ATK/DEF200%[img:up]",
                                "全属性に効果抜群で攻撃",
                                "高確率で会心が発動",
                                "必ず追加攻撃し高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "2番目か3番目で気玉を取得すると",
                            "effects": [
                                "必ず必殺技が追加発動",
                                "味方全員の気力+2、ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "ATK/DEF50%[img:up]",
                                "会心率10%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]DEF50%[img:up](最大200%)"
                            ]
                        },
                        {
                            "title": "超系の敵がいるとき",
                            "effects": [
                                "DEF200%[img:up]",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "極系の敵がいるとき",
                            "effects": [
                                "DEF100%[img:up]",
                                "超高確率で全属性に効果抜群で攻撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2回",
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1009420,
        "title": "赤き勇姿",
        "name": "超サイヤ人4孫悟空",
        "yomi": "すーぱーさいやじん4そんごくう",
        "rarity": "SSR",
        "cost": 30,
        "type": "STR",
        "class": "Super",
        "release": "2017/02/01",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "純粋サイヤ人",
            "孫悟空の系譜",
            "かめはめ波",
            "大猿パワー",
            "亀仙流",
            "奇跡の覚醒",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "超力属性の気力+2、HPとATKとDEF100%UP\n&極力属性のHPとATKとDEF40%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1009420
            },
            {
                "rank": "UR",
                "id": 1009430,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 77
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1009430,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編3/01",
                        "count": 15
                    },
                    {
                        "name": "zb/宿命のライバル編3/02",
                        "count": 40
                    },
                    {
                        "name": "zb/宿命のライバル編3/03",
                        "count": 30
                    },
                    {
                        "name": "zb/宿命のライバル編3/04",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1009430,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編3/05",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "かめはめ波",
                    "GT"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14300,
                        "atk": 14600,
                        "def": 8075
                    },
                    "fifty": {
                        "hp": 10900,
                        "atk": 10800,
                        "def": 5075
                    },
                    "base": {
                        "hp": 9300,
                        "atk": 9200,
                        "def": 3475
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "10倍かめはめ波",
                        "effect": "超絶特大ダメージを与え、6ターンDEF30%上昇",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "地球を背負う戦士",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK120%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1009430,
        "title": "究極進化の超サイヤ人",
        "name": "超サイヤ人4孫悟空",
        "yomi": "すーぱーさいやじん4そんごくう",
        "rarity": "UR",
        "cost": 58,
        "type": "STR",
        "class": "Super",
        "release": "2017/02/01",
        "eza": "2021/05/13",
        "seza": "2025/07/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "純粋サイヤ人",
            "孫悟空の系譜",
            "かめはめ波",
            "大猿パワー",
            "亀仙流",
            "奇跡の覚醒",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "超力属性の気力+3、HPとATKとDEF120%UP\n&極力属性の気力+1、HPとATKとDEF50%UP",
        "leaderSkill_eza": "超力属性の気力+3、HPとATKとDEF130%UP\n&極力属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_seza": "超力属性の気力+3、HPとATKとDEF130%UP\n&極力属性の気力+3、HPとATKとDEF90%UP",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1009420
            },
            {
                "rank": "UR",
                "id": 1009430,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 77
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1009430,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編3/01",
                        "count": 15
                    },
                    {
                        "name": "zb/宿命のライバル編3/02",
                        "count": 40
                    },
                    {
                        "name": "zb/宿命のライバル編3/03",
                        "count": 30
                    },
                    {
                        "name": "zb/宿命のライバル編3/04",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1009430,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編3/05",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "かめはめ波",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 16333,
                        "atk": 16856,
                        "def": 9114
                    },
                    "fifty": {
                        "hp": 13333,
                        "atk": 13456,
                        "def": 6514
                    },
                    "base": {
                        "hp": 11333,
                        "atk": 11456,
                        "def": 4514
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "10倍かめはめ波",
                        "effect": "超絶特大ダメージを与え、6ターンDEF30%上昇",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "銀河を救う戦士",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK150%[img:up]",
                                "DEF120%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "一時的にDEF100%[img:up]",
                                "高確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "かめはめ波",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 19324,
                        "atk": 19880,
                        "def": 10306
                    },
                    "fifty": {
                        "hp": 16324,
                        "atk": 16480,
                        "def": 7706
                    },
                    "base": {
                        "hp": 14324,
                        "atk": 14480,
                        "def": 5706
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "10倍かめはめ波(極限)",
                        "effect": "1ターンATKが大幅上昇し、相手に超絶特大ダメージを与え、DEFを大幅に低下させる\n&6ターンDEFが30%上昇",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "30%",
                            "def_down": "50%"
                        }
                    }
                ]
            }
        ],
        "forms_seza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "かめはめ波",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 19324,
                        "atk": 19880,
                        "def": 10306
                    },
                    "fifty": {
                        "hp": 16324,
                        "atk": 16480,
                        "def": 7706
                    },
                    "base": {
                        "hp": 14324,
                        "atk": 14480,
                        "def": 5706
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "10倍かめはめ波(極限)",
                        "effect": "1ターンATKが大幅上昇し、相手に超絶特大ダメージを与え、DEFを大幅に低下させる\n&6ターンDEFが30%上昇",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "30%",
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "銀河を救う戦士",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF200%[img:up]",
                                "超高確率で会心が発動"
                            ]
                        },
                        {
                            "title": "攻撃参加中の超系の味方1体につき",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "極系の敵がいるとき、または自身の他に攻撃参加中の「GTHERO」カテゴリの味方がいるとき",
                            "effects": [
                                "味方全員のATK40%[img:up]",
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK150%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃を受けるとき",
                            "effects": [
                                "DEF200%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "一時的にDEF100%[img:up]",
                                "高確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "70%",
                        "add": "1回",
                        "reduce": "30%",
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1009820,
        "title": "赤き閃光",
        "name": "超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4べじーた",
        "rarity": "SSR",
        "cost": 30,
        "type": "AGL",
        "class": "Super",
        "release": "2017/02/01",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "邪悪龍編",
            "純粋サイヤ人",
            "ベジータの系譜",
            "好敵手",
            "救世主",
            "大猿パワー",
            "奇跡の覚醒",
            "天才戦士",
            "GT HERO",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄",
            "継承する者"
        ],
        "leaderSkill": "超速属性の気力+2、HPとATKとDEF100%UP\n&極速属性のHPとATKとDEF40%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1009820
            },
            {
                "rank": "UR",
                "id": 1009830,
                "medals": [
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 77
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1009830,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編3/11",
                        "count": 15
                    },
                    {
                        "name": "zb/宿命のライバル編3/12",
                        "count": 40
                    },
                    {
                        "name": "zb/宿命のライバル編3/13",
                        "count": 30
                    },
                    {
                        "name": "zb/宿命のライバル編3/14",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1009830,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編3/15",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "サイヤ人の誇り",
                    "GT"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13520,
                        "atk": 13744,
                        "def": 9635
                    },
                    "fifty": {
                        "hp": 10520,
                        "atk": 10344,
                        "def": 5835
                    },
                    "base": {
                        "hp": 8920,
                        "atk": 8744,
                        "def": 4235
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ファイナルシャインアタック",
                        "effect": "相手に超絶特大ダメージを与え、DEFを大幅に低下させる",
                        "specs": {
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "燃え上がるライバル心",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1009830,
        "title": "至高無上の超サイヤ人",
        "name": "超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4べじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "AGL",
        "class": "Super",
        "release": "2017/02/01",
        "eza": "2021/05/13",
        "seza": "2025/07/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "邪悪龍編",
            "純粋サイヤ人",
            "ベジータの系譜",
            "好敵手",
            "救世主",
            "大猿パワー",
            "奇跡の覚醒",
            "天才戦士",
            "GT HERO",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄",
            "継承する者"
        ],
        "leaderSkill": "超速属性の気力+3、HPとATKとDEF120%UP\n&極速属性の気力+1、HPとATKとDEF50%UP",
        "leaderSkill_eza": "超速属性の気力+3、HPとATKとDEF130%UP\n&極速属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_seza": "超速属性の気力+3、HPとATKとDEF130%UP\n&極速属性の気力+3、HPとATKとDEF90%UP",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1009820
            },
            {
                "rank": "UR",
                "id": 1009830,
                "medals": [
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 77
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1009830,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編3/11",
                        "count": 15
                    },
                    {
                        "name": "zb/宿命のライバル編3/12",
                        "count": 40
                    },
                    {
                        "name": "zb/宿命のライバル編3/13",
                        "count": 30
                    },
                    {
                        "name": "zb/宿命のライバル編3/14",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1009830,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編3/15",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 16315,
                        "atk": 15538,
                        "def": 10870
                    },
                    "fifty": {
                        "hp": 13715,
                        "atk": 12538,
                        "def": 7470
                    },
                    "base": {
                        "hp": 11715,
                        "atk": 10538,
                        "def": 5470
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ファイナルシャインアタック",
                        "effect": "超絶特大ダメージを与え、DEFを大幅に低下させる",
                        "specs": {
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "さらなる秘策",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 19407,
                        "atk": 18319,
                        "def": 12314
                    },
                    "fifty": {
                        "hp": 16807,
                        "atk": 15319,
                        "def": 8914
                    },
                    "base": {
                        "hp": 14807,
                        "atk": 13319,
                        "def": 6914
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ファイナルシャインアタック(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に超絶特大ダメージを与え、DEFを大幅に低下させる\n&6ターンATKが30%上昇",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "50%",
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "さらなる秘策",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK150%[img:up]",
                                "DEF120%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "一時的にDEF100%[img:up]",
                                "高確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ],
        "forms_seza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 19407,
                        "atk": 18319,
                        "def": 12314
                    },
                    "fifty": {
                        "hp": 16807,
                        "atk": 15319,
                        "def": 8914
                    },
                    "base": {
                        "hp": 14807,
                        "atk": 13319,
                        "def": 6914
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ファイナルシャインアタック(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に超絶特大ダメージを与え、DEFを大幅に低下させる\n&6ターンATKが30%上昇",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "50%",
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "さらなる秘策",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF200%[img:up]",
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "攻撃参加中の超系の味方1体につき",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "極系の敵がいるとき、または自身の他に攻撃参加中の「GTHERO」カテゴリの味方がいるとき",
                            "effects": [
                                "味方全員のDEF40%[img:up]",
                                "必ず会心が発動"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK100%[img:up]"
                            ]
                        },
                        {
                            "title": "2番目か3番目で攻撃時",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "一時的にDEF100%[img:up]",
                                "高確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "reduce": "30%",
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1012880,
        "title": "永遠のライバル",
        "name": "孫悟空&ベジータ",
        "yomi": "そんごくう&べじーた",
        "rarity": "SSR",
        "cost": 30,
        "type": "INT",
        "class": "Super",
        "release": "2018/01/31",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "魔人ブウ編",
            "コンビネーション",
            "かめはめ波",
            "純粋サイヤ人",
            "親子の絆"
        ],
        "leaderSkill": "知属性の気力+2、HPとATKとDEF70%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012880
            },
            {
                "rank": "UR",
                "id": 1012890,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012900,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/閃光のポタラ/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012900,
                "medals": [
                    {
                        "name": "zb/合体する超パワー/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "かめはめ波",
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "臨戦態勢"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14770,
                        "atk": 13789,
                        "def": 9879
                    },
                    "fifty": {
                        "hp": 11370,
                        "atk": 10389,
                        "def": 6479
                    },
                    "base": {
                        "hp": 9770,
                        "atk": 8789,
                        "def": 4879
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "ふたりのサイヤ人",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF80%[img:up]",
                                "虹気玉取得時の気力上昇量+1"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1012890,
        "title": "黄金のタッグ",
        "name": "超サイヤ人孫悟空&超サイヤ人ベジータ",
        "yomi": "すーぱーさいやじんそんごくう&すーぱーさいやじんべじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "INT",
        "class": "Super",
        "release": "2018/01/31",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "魔人ブウ編",
            "コンビネーション",
            "超サイヤ人",
            "かめはめ波",
            "純粋サイヤ人",
            "親子の絆"
        ],
        "leaderSkill": "知属性の気力+3、HPとATKとDEF80%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012880
            },
            {
                "rank": "UR",
                "id": 1012890,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012900,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/閃光のポタラ/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012900,
                "medals": [
                    {
                        "name": "zb/合体する超パワー/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 17630,
                        "atk": 15466,
                        "def": 11228
                    },
                    "fifty": {
                        "hp": 14630,
                        "atk": 12466,
                        "def": 8228
                    },
                    "base": {
                        "hp": 12630,
                        "atk": 10466,
                        "def": 6228
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "ふたりの超戦士",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1012900,
        "title": "合体する超パワー",
        "name": "超サイヤ人孫悟空&超サイヤ人ベジータ",
        "yomi": "すーぱーさいやじんそんごくう&すーぱーさいやじんべじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "INT",
        "class": "Super",
        "release": "2018/01/31",
        "eza": "2022/02/22",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "魔人ブウ編",
            "ポタラ",
            "コンビネーション",
            "超サイヤ人",
            "かめはめ波",
            "最後の切り札",
            "純粋サイヤ人",
            "頭脳戦",
            "高速戦闘",
            "融合/合体戦士",
            "親子の絆"
        ],
        "leaderSkill": "「ポタラ」カテゴリの\n気力+3、HPとATK170%UP、DEF130%UP\nまたは知属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_eza": "「ポタラ」カテゴリの\n気力+3、HPとATKとDEF180%UP\nまたは知属性の気力+3、HPとATKとDEF120%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012880
            },
            {
                "rank": "UR",
                "id": 1012890,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012900,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/閃光のポタラ/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012900,
                "medals": [
                    {
                        "name": "zb/合体する超パワー/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24663,
                        "atk": 18490,
                        "def": 15931
                    },
                    "fifty": {
                        "hp": 21663,
                        "atk": 15490,
                        "def": 12931
                    },
                    "base": {
                        "hp": 19663,
                        "atk": 13490,
                        "def": 10931
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "最後の秘策",
                        "effect": "1ターンATKが上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "最強のふたり",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "バトル開始から6ターン目以降",
                            "effects": [
                                "HP50%以下のときポタラで合体する"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            },
            {
                "label": "合体",
                "name": "超ベジット",
                "id": 4012900,
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "臨戦態勢",
                    "神から授かりし力",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24663,
                        "atk": 18490,
                        "def": 15931
                    },
                    "fifty": {
                        "hp": 21663,
                        "atk": 15490,
                        "def": 12931
                    },
                    "base": {
                        "hp": 19663,
                        "atk": 13490,
                        "def": 10931
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ビッグ・バン・アタック",
                        "effect": "相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ファイナルかめはめ波",
                        "effect": "相手に超極大ダメージを与える\n&1ターン仲間ATK30%UP",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "起死回生のポタラ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]HPが全回復",
                                "ATK/DEF150%[img:up]",
                                "虹気玉取得時の気力上昇量+3"
                            ]
                        },
                        {
                            "title": "敵の通常攻撃を受けるとき",
                            "effects": [
                                "超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24663,
                        "atk": 18490,
                        "def": 15931
                    },
                    "fifty": {
                        "hp": 21663,
                        "atk": 15490,
                        "def": 12931
                    },
                    "base": {
                        "hp": 19663,
                        "atk": 13490,
                        "def": 10931
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "最後の秘策(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "最強のふたり",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF180%[img:up]",
                                "中確率で会心が発動",
                                "中確率で敵の攻撃を回避",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "バトル開始から6ターン目以降",
                            "effects": [
                                "HP50%以下のときポタラで合体する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "30%",
                        "dodge": "30%"
                    }
                }
            },
            {
                "label": "合体",
                "name": "超ベジット",
                "id": 4012900,
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "臨戦態勢",
                    "神から授かりし力",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24663,
                        "atk": 18490,
                        "def": 15931
                    },
                    "fifty": {
                        "hp": 21663,
                        "atk": 15490,
                        "def": 12931
                    },
                    "base": {
                        "hp": 19663,
                        "atk": 13490,
                        "def": 10931
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ビッグ・バン・アタック(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ファイナルかめはめ波(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に超極大ダメージを与える\n&1ターン仲間ATK30%UP",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "起死回生のポタラ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]HPが全回復",
                                "ATK/DEF200%[img:up]",
                                "虹気玉取得時の気力上昇量+3"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "ダメージ軽減率30%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から4ターン目以降",
                            "effects": [
                                "ダメージ軽減率15%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の通常攻撃を受けるとき",
                            "effects": [
                                "超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "30%",
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1012910,
        "title": "あの世の超戦士たち",
        "name": "孫悟空(天使)&ベジータ(天使)",
        "yomi": "そんごくう(てんし)&べじーた(てんし)",
        "rarity": "SSR",
        "cost": 30,
        "type": "PHY",
        "class": "Super",
        "release": "2018/01/31",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "コンビネーション",
            "劇場版HERO",
            "かめはめ波",
            "あの世の戦士",
            "純粋サイヤ人",
            "親子の絆"
        ],
        "leaderSkill": "体属性の気力+2、HPとATKとDEF70%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012910
            },
            {
                "rank": "UR",
                "id": 1012920,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012930,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/空前絶後の最強フュージョン/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012930,
                "medals": [
                    {
                        "name": "zb/ふたつの力の融合/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "かめはめ波",
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "臨戦態勢"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 15888,
                        "atk": 13174,
                        "def": 9889
                    },
                    "fifty": {
                        "hp": 12088,
                        "atk": 9774,
                        "def": 6889
                    },
                    "base": {
                        "hp": 10488,
                        "atk": 8174,
                        "def": 5289
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "屈指の強者たち",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF80%[img:up]",
                                "虹気玉取得時の気力上昇量+1"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1012920,
        "title": "復活のサイヤ人",
        "name": "超サイヤ人孫悟空(天使)&超サイヤ人ベジータ(天使)",
        "yomi": "すーぱーさいやじんそんごくう(てんし)&すーぱーさいやじんべじーた(てんし)",
        "rarity": "UR",
        "cost": 58,
        "type": "PHY",
        "class": "Super",
        "release": "2018/01/31",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "コンビネーション",
            "劇場版HERO",
            "超サイヤ人",
            "かめはめ波",
            "あの世の戦士",
            "純粋サイヤ人",
            "親子の絆"
        ],
        "leaderSkill": "体属性の気力+3、HPとATKとDEF80%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012910
            },
            {
                "rank": "UR",
                "id": 1012920,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012930,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/空前絶後の最強フュージョン/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012930,
                "medals": [
                    {
                        "name": "zb/ふたつの力の融合/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "かめはめ波",
                    "金色の戦士",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 18975,
                        "atk": 14656,
                        "def": 11368
                    },
                    "fifty": {
                        "hp": 15575,
                        "atk": 11656,
                        "def": 8768
                    },
                    "base": {
                        "hp": 13575,
                        "atk": 9656,
                        "def": 6768
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "あの世での協力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1012930,
        "title": "ふたつの力の融合",
        "name": "超サイヤ人孫悟空(天使)&超サイヤ人ベジータ(天使)",
        "yomi": "すーぱーさいやじんそんごくう(てんし)&すーぱーさいやじんべじーた(てんし)",
        "rarity": "LR",
        "cost": 77,
        "type": "PHY",
        "class": "Super",
        "release": "2018/01/31",
        "eza": "2022/02/22",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "フュージョン",
            "コンビネーション",
            "劇場版HERO",
            "超サイヤ人",
            "かめはめ波",
            "あの世の戦士",
            "最後の切り札",
            "純粋サイヤ人",
            "つながる希望",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "親子の絆",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「フュージョン」カテゴリの\n気力+3、HPとATK170%UP、DEF130%UP\nまたは体属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_eza": "「フュージョン」カテゴリの\n気力+3、HPとATKとDEF180%UP\nまたは体属性の気力+3、HPとATKとDEF120%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012910
            },
            {
                "rank": "UR",
                "id": 1012920,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012930,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/空前絶後の最強フュージョン/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012930,
                "medals": [
                    {
                        "name": "zb/ふたつの力の融合/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "かめはめ波",
                    "金色の戦士",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21663,
                        "atk": 20700,
                        "def": 14469
                    },
                    "fifty": {
                        "hp": 18263,
                        "atk": 17700,
                        "def": 11869
                    },
                    "base": {
                        "hp": 16263,
                        "atk": 15700,
                        "def": 9869
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波&ファイナルフラッシュ",
                        "effect": "1ターンATKが上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "最強のふたり",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "バトル開始から6ターン目以降",
                            "effects": [
                                "HP50%以下のときフュージョンする"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            },
            {
                "label": "融合",
                "name": "超ゴジータ",
                "id": 4012930,
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "かめはめ波",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21663,
                        "atk": 20700,
                        "def": 14469
                    },
                    "fifty": {
                        "hp": 18263,
                        "atk": 17700,
                        "def": 11869
                    },
                    "base": {
                        "hp": 16263,
                        "atk": 15700,
                        "def": 9869
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ビッグバンかめはめ波",
                        "effect": "相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ソウルパニッシャー",
                        "effect": "相手に超極大ダメージを与え、ATKとDEFを大幅低下させる",
                        "specs": {
                            "atk_down": "30%",
                            "def_down": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "起死回生のフュージョン",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]HPが全回復",
                                "ATK/DEF150%[img:up]",
                                "全属性に効果抜群で攻撃",
                                "虹気玉取得時の気力上昇量+3"
                            ]
                        }
                    ],
                    "maxValues": {
                        "effective": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "かめはめ波",
                    "金色の戦士",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21663,
                        "atk": 20700,
                        "def": 14469
                    },
                    "fifty": {
                        "hp": 18263,
                        "atk": 17700,
                        "def": 11869
                    },
                    "base": {
                        "hp": 16263,
                        "atk": 15700,
                        "def": 9869
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波&ファイナルフラッシュ(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "無敵のふたり",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF180%[img:up]",
                                "中確率で会心が発動",
                                "中確率で敵の攻撃を回避",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "バトル開始から6ターン目以降",
                            "effects": [
                                "HP50%以下のときフュージョンする"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "30%",
                        "dodge": "30%"
                    }
                }
            },
            {
                "label": "融合",
                "name": "超ゴジータ",
                "id": 4012930,
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "かめはめ波",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21663,
                        "atk": 20700,
                        "def": 14469
                    },
                    "fifty": {
                        "hp": 18263,
                        "atk": 17700,
                        "def": 11869
                    },
                    "base": {
                        "hp": 16263,
                        "atk": 15700,
                        "def": 9869
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ビッグバンかめはめ波(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ソウルパニッシャー(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に超極大ダメージを与え、ATKとDEFを大幅低下させる",
                        "specs": {
                            "def_up": "50%",
                            "atk_down": "50%",
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "起死回生のフュージョン",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]HPが全回復",
                                "ATK/DEF200%[img:up]",
                                "全属性に効果抜群で攻撃",
                                "虹気玉取得時の気力上昇量+3"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "必ず会心が発動",
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "登場から4ターン目以降",
                            "effects": [
                                "高確率で会心が発動",
                                "中確率で敵の攻撃を回避"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "dodge": "50%",
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1014210,
        "title": "最強サイヤ人の到達点",
        "name": "超サイヤ人4孫悟空",
        "yomi": "すーぱーさいやじん4そんごくう",
        "rarity": "LR",
        "cost": 77,
        "type": "AGL",
        "class": "Super",
        "release": "2019/01/30",
        "eza": "2022/03/01",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "孫悟空の系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "かめはめ波",
            "大猿パワー",
            "亀仙流",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「孫悟空の系譜」カテゴリの\n気力+3、HPとATK170%UP、DEF130%UP、\nまたは超速属性の気力+3、HPとATKとDEF120%UP",
        "leaderSkill_eza": "「孫悟空の系譜」カテゴリの\n気力+3、HPとATKとDEF180%UP、\nまたは超速属性の気力+3、HPとATKとDEF130%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015740
            },
            {
                "rank": "UR",
                "id": 1015750,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014210,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編5/04",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "かめはめ波",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 22988,
                        "atk": 21720,
                        "def": 12931
                    },
                    "fifty": {
                        "hp": 20388,
                        "atk": 18720,
                        "def": 9531
                    },
                    "base": {
                        "hp": 18388,
                        "atk": 16720,
                        "def": 7531
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "メテオスマッシュ",
                        "effect": "1ターンDEFが超大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "def_up": "100%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "100%"
                        }
                    }
                ],
                "passive": {
                    "name": "絶対勝つぞ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK80%[img:up]",
                                "虹気玉取得時の気力上昇量+2",
                                "速気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]DEF20%[img:up](最大80%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                },
                "active": {
                    "name": "10倍かめはめ波",
                    "condition": "バトル開始から4ターン目以降に発動可能 (1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "かめはめ波",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 22988,
                        "atk": 21720,
                        "def": 12931
                    },
                    "fifty": {
                        "hp": 20388,
                        "atk": 18720,
                        "def": 9531
                    },
                    "base": {
                        "hp": 18388,
                        "atk": 16720,
                        "def": 7531
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "メテオスマッシュ(極限)",
                        "effect": "1ターンDEFが超大幅上昇、ATKが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "100%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与え、DEFを大幅低下させる",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "100%",
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "絶対勝つぞ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF140%[img:up]",
                                "虹気玉か速気玉取得時の気力上昇量+2",
                                "速気玉以外の属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]ATK20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        },
                        {
                            "title": "敵が2体以上いるとき",
                            "effects": [
                                "[img:one_time]アクティブスキル発動時または気力メーター24で攻撃時攻撃した敵をアクションブレイク"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true,
                        "action_break": true
                    }
                },
                "active": {
                    "name": "10倍かめはめ波",
                    "condition": "バトル開始から4ターン目以降に発動可能 (1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1014220,
        "title": "無敵を誇るサイヤ人の頂",
        "name": "超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4べじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "STR",
        "class": "Super",
        "release": "2019/01/30",
        "eza": "2022/03/01",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "ベジータの系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "好敵手",
            "救世主",
            "大猿パワー",
            "奇跡の覚醒",
            "天才戦士",
            "GT HERO",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄",
            "継承する者"
        ],
        "leaderSkill": "「ベジータの系譜」カテゴリの\n気力+3、HP130%UP、ATKとDEF170%UP、\nまたは超力属性の気力+3、HPとATKとDEF120%UP",
        "leaderSkill_eza": "「ベジータの系譜」カテゴリの 気力+3、HPとATKとDEF180%UP、\nまたは超力属性の気力+3、HPとATKとDEF130%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015760
            },
            {
                "rank": "UR",
                "id": 1015770,
                "medals": [
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014220,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編5/14",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 22538,
                        "atk": 21780,
                        "def": 12981
                    },
                    "fifty": {
                        "hp": 19538,
                        "atk": 18380,
                        "def": 10381
                    },
                    "base": {
                        "hp": 17538,
                        "atk": 16380,
                        "def": 8381
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "スピリットブレイクキャノン",
                        "effect": "1ターンATKが超大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "100%"
                        }
                    }
                ],
                "passive": {
                    "name": "このままじゃ終わらんぞ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "DEF80%[img:up]",
                                "虹気玉取得時の気力上昇量+2",
                                "速気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]ATK20%[img:up](最大80%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                },
                "active": {
                    "name": "ファイナルシャインアタック",
                    "condition": "バトル開始から4ターン目以降に発動可能 (1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 22538,
                        "atk": 21780,
                        "def": 12981
                    },
                    "fifty": {
                        "hp": 19538,
                        "atk": 18380,
                        "def": 10381
                    },
                    "base": {
                        "hp": 17538,
                        "atk": 16380,
                        "def": 8381
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "スピリットブレイクキャノン(極限)",
                        "effect": "1ターンATKが超大幅上昇、DEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ(極限)",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与え、DEFを大幅低下させる",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "100%",
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "絶対勝つぞ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF140%[img:up]",
                                "虹気玉か力気玉取得時の気力上昇量+2",
                                "力気玉以外の属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]ATK10%[img:up](最大30%)",
                                "[img:infinity]DEF20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        },
                        {
                            "title": "敵が2体以上いるとき",
                            "effects": [
                                "[img:one_time]アクティブスキル発動時または気力メーター24で攻撃時攻撃した敵をアクションブレイク"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true,
                        "action_break": true
                    }
                },
                "active": {
                    "name": "ファイナルシャインアタック",
                    "condition": "バトル開始から4ターン目以降に発動可能 (1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1015740,
        "title": "奇跡の覚醒",
        "name": "超サイヤ人4孫悟空",
        "yomi": "すーぱーさいやじん4そんごくう",
        "rarity": "SSR",
        "cost": 30,
        "type": "AGL",
        "class": "Super",
        "release": "2019/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "孫悟空の系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "大猿パワー",
            "亀仙流",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「孫悟空の系譜」カテゴリの\n気力+2、HPとATK130%UP、DEF100%UP、\nまたは超速属性の気力+2、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015740
            },
            {
                "rank": "UR",
                "id": 1015750,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014210,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編5/04",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "GT"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 12702,
                        "atk": 13885,
                        "def": 8904
                    },
                    "fifty": {
                        "hp": 9702,
                        "atk": 10485,
                        "def": 5104
                    },
                    "base": {
                        "hp": 8102,
                        "atk": 8885,
                        "def": 3504
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "メテオスマッシュ",
                        "effect": "1ターンDEFが超大幅上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "def_up": "100%"
                        }
                    }
                ],
                "passive": {
                    "name": "奇跡の変身",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK50%[img:up]",
                                "虹気玉取得時の気力上昇量+1",
                                "速気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]DEF20%[img:up](最大50%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1015750,
        "title": "最大解放の戦い",
        "name": "超サイヤ人4孫悟空",
        "yomi": "すーぱーさいやじん4そんごくう",
        "rarity": "UR",
        "cost": 58,
        "type": "AGL",
        "class": "Super",
        "release": "2019/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "孫悟空の系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "大猿パワー",
            "亀仙流",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「孫悟空の系譜」カテゴリの\n気力+3、HPとATK150%UP、DEF110%UP、\nまたは超速属性の気力+2、HPとATKとDEF110%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015740
            },
            {
                "rank": "UR",
                "id": 1015750,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014210,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編5/04",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14169,
                        "atk": 14960,
                        "def": 9478
                    },
                    "fifty": {
                        "hp": 11569,
                        "atk": 11960,
                        "def": 6078
                    },
                    "base": {
                        "hp": 9569,
                        "atk": 9960,
                        "def": 4078
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "メテオスマッシュ",
                        "effect": "1ターンDEFが超大幅上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "def_up": "100%"
                        }
                    }
                ],
                "passive": {
                    "name": "最強の戦闘形態",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK60%[img:up]",
                                "虹気玉取得時の気力上昇量+1",
                                "速気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]DEF20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1015760,
        "title": "不屈の覚醒",
        "name": "超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4べじーた",
        "rarity": "SSR",
        "cost": 30,
        "type": "STR",
        "class": "Super",
        "release": "2019/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "ベジータの系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "好敵手",
            "救世主",
            "大猿パワー",
            "奇跡の覚醒",
            "天才戦士",
            "GT HERO",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄",
            "継承する者"
        ],
        "leaderSkill": "「ベジータの系譜」カテゴリの\n気力+2、HP100%UP、ATKとDEF130%UP、\nまたは超力属性の気力+2、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015760
            },
            {
                "rank": "UR",
                "id": 1015770,
                "medals": [
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014220,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編5/14",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "サイヤ人の誇り",
                    "GT"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 12747,
                        "atk": 14144,
                        "def": 8458
                    },
                    "fifty": {
                        "hp": 9347,
                        "atk": 10344,
                        "def": 5458
                    },
                    "base": {
                        "hp": 7747,
                        "atk": 8744,
                        "def": 3858
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "スピリットブレイクキャノン",
                        "effect": "1ターンATKが超大幅上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "100%"
                        }
                    }
                ],
                "passive": {
                    "name": "不屈の変身",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "DEF50%[img:up]",
                                "虹気玉取得時の気力上昇量+1",
                                "速気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]ATK20%[img:up](最大50%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1015770,
        "title": "超レベルの決戦",
        "name": "超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4べじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "STR",
        "class": "Super",
        "release": "2019/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "ベジータの系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "好敵手",
            "救世主",
            "大猿パワー",
            "奇跡の覚醒",
            "天才戦士",
            "GT HERO",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄",
            "継承する者"
        ],
        "leaderSkill": "「ベジータの系譜」カテゴリの\n気力+3、HP110%UP、ATKとDEF150%UP、\nまたは超力属性の気力+2、HPとATKとDEF110%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015760
            },
            {
                "rank": "UR",
                "id": 1015770,
                "medals": [
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/紅蓮を纏う無敵のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014220,
                "medals": [
                    {
                        "name": "zb/宿命のライバル編5/14",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14144,
                        "atk": 15190,
                        "def": 9103
                    },
                    "fifty": {
                        "hp": 11144,
                        "atk": 11790,
                        "def": 6503
                    },
                    "base": {
                        "hp": 9144,
                        "atk": 9790,
                        "def": 4503
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "スピリットブレイクキャノン",
                        "effect": "1ターンATKが超大幅上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "100%"
                        }
                    }
                ],
                "passive": {
                    "name": "無敵の戦闘形態",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "DEF60%[img:up]",
                                "虹気玉取得時の気力上昇量+1",
                                "速気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]ATK20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1018600,
        "title": "地球を守る融合戦士",
        "name": "ゴジータ",
        "yomi": "ごじーた",
        "rarity": "SSR",
        "cost": 26,
        "type": "STR",
        "class": "Super",
        "release": "2020/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "フュージョン",
            "劇場版HERO",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "超HERO",
            "地球を守りし英雄",
            "高速戦闘"
        ],
        "leaderSkill": "「最後の切り札」または「フュージョン」カテゴリの\n気力+2、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018600
            },
            {
                "rank": "UR",
                "id": 1018610,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018620,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/全てを照らす最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018620,
                "medals": [
                    {
                        "name": "./zb/究極最強の融合/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "合体戦士",
                    "臨戦態勢",
                    "短期決戦",
                    "サイヤ人の血",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13378,
                        "atk": 14506,
                        "def": 7709
                    },
                    "fifty": {
                        "hp": 9978,
                        "atk": 10706,
                        "def": 4709
                    },
                    "base": {
                        "hp": 8378,
                        "atk": 9106,
                        "def": 3109
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "メトロアタック",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "フュージョンファイター！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+1",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回"
                    }
                }
            }
        ]
    },
    {
        "id": 1018610,
        "title": "形勢逆転の光炎",
        "name": "ゴジータ",
        "yomi": "ごじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "STR",
        "class": "Super",
        "release": "2020/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "フュージョン",
            "劇場版HERO",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "超HERO",
            "地球を守りし英雄",
            "高速戦闘"
        ],
        "leaderSkill": "「最後の切り札」または「フュージョン」カテゴリの\n気力+3、HPとATKとDEF120%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018600
            },
            {
                "rank": "UR",
                "id": 1018610,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018620,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/全てを照らす最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018620,
                "medals": [
                    {
                        "name": "./zb/究極最強の融合/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "合体戦士",
                    "臨戦態勢",
                    "短期決戦",
                    "サイヤ人の血",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14898,
                        "atk": 15623,
                        "def": 8204
                    },
                    "fifty": {
                        "hp": 11898,
                        "atk": 12223,
                        "def": 5604
                    },
                    "base": {
                        "hp": 9898,
                        "atk": 10223,
                        "def": 3604
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "メトロアタック",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "フュージョンファイター！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF60%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+2",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回"
                    }
                }
            }
        ]
    },
    {
        "id": 1018620,
        "title": "究極最強の融合",
        "name": "ゴジータ",
        "yomi": "ごじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "STR",
        "class": "Super",
        "release": "2020/01/30",
        "eza": "2023/02/24",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "フュージョン",
            "神次元",
            "劇場版HERO",
            "かめはめ波",
            "変身強化",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "超サイヤ人を超えた力",
            "超HERO",
            "地球を守りし英雄",
            "高速戦闘"
        ],
        "leaderSkill": "「最後の切り札」または「フュージョン」カテゴリの\n気力+3、HPとATKとDEF150%UP",
        "leaderSkill_eza": "「最後の切り札」または「フュージョン」カテゴリの\n気力+3、HPとATKとDEF170%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018600
            },
            {
                "rank": "UR",
                "id": 1018610,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018620,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/全てを照らす最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018620,
                "medals": [
                    {
                        "name": "./zb/究極最強の融合/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "合体戦士",
                    "臨戦態勢",
                    "短期決戦",
                    "かめはめ波",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24025,
                        "atk": 22630,
                        "def": 11175
                    },
                    "fifty": {
                        "hp": 21025,
                        "atk": 19230,
                        "def": 8575
                    },
                    "base": {
                        "hp": 19025,
                        "atk": 17230,
                        "def": 6575
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "メトロアタック",
                        "effect": "ATKが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波",
                        "effect": "ATKが上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "アルティメットパワー！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+3",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "バトル開始から4ターン目以降",
                            "effects": [
                                "変身する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "dodge": "50%"
                    }
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSSゴジータ",
                "id": 4017970,
                "links": [
                    "超サイヤ人",
                    "合体戦士",
                    "神戦士",
                    "短期決戦",
                    "かめはめ波",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24025,
                        "atk": 22630,
                        "def": 11175
                    },
                    "fifty": {
                        "hp": 21025,
                        "atk": 19230,
                        "def": 8575
                    },
                    "base": {
                        "hp": 19025,
                        "atk": 17230,
                        "def": 6575
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "スターダストフォール",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "メテオエクスプロージョン",
                        "effect": "1ターンDEFが上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "すごいパワー！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "気力+5",
                                "必ず追加攻撃",
                                "[img:infinity]攻撃するたびにATK/DEF7%[img:up](最大77%)",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "必ず必殺技が追加発動",
                                "高確率で敵の攻撃を回避"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "dodge": "50%",
                        "effective": true
                    }
                },
                "active": {
                    "name": "究極のかめはめ波",
                    "condition": "次の攻撃参加ターン以降、敵が1体で敵のHP50%以下のとき発動可能 (1回のみ)",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "合体戦士",
                    "臨戦態勢",
                    "短期決戦",
                    "かめはめ波",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24025,
                        "atk": 22630,
                        "def": 11175
                    },
                    "fifty": {
                        "hp": 21025,
                        "atk": 19230,
                        "def": 8575
                    },
                    "base": {
                        "hp": 19025,
                        "atk": 17230,
                        "def": 6575
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "アルティメットパワー！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF140%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+4",
                                "DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "必殺技が追加発動",
                                "超高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "バトル開始から4ターン目以降",
                            "effects": [
                                "変身する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "dodge": "70%"
                    }
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSSゴジータ",
                "id": 4017970,
                "links": [
                    "超サイヤ人",
                    "合体戦士",
                    "神戦士",
                    "短期決戦",
                    "かめはめ波",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24025,
                        "atk": 22630,
                        "def": 11175
                    },
                    "fifty": {
                        "hp": 21025,
                        "atk": 19230,
                        "def": 8575
                    },
                    "base": {
                        "hp": 19025,
                        "atk": 17230,
                        "def": 6575
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "スターダストフォール(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "メテオエクスプロージョン(極限)",
                        "effect": "3ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "すごいパワー！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "気力+5",
                                "必ず2回追加攻撃し中確率で必殺技が発動",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "気力+7",
                                "必殺技が追加発動",
                                "超高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)",
                                "[img:infinity]攻撃するたびにATK/DEF22%[img:up](最大88%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時または気力メーター24で攻撃時",
                            "effects": [
                                "必ず会心が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2回",
                        "dodge": "70%",
                        "effective": true
                    }
                },
                "active": {
                    "name": "究極のかめはめ波",
                    "condition": "次の攻撃参加ターン以降、敵が1体で敵のHP50%以下のとき発動可能 (1回のみ)",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1018630,
        "title": "未来を救う合体戦士",
        "name": "ベジット",
        "yomi": "べじっと",
        "rarity": "SSR",
        "cost": 26,
        "type": "TEQ",
        "class": "Super",
        "release": "2020/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "ポタラ",
            "時空を超えし者",
            "未来編",
            "頭脳戦",
            "時間制限",
            "融合/合体戦士",
            "超HERO"
        ],
        "leaderSkill": "「最後の切り札」または「ポタラ」カテゴリの\n気力+2、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018630
            },
            {
                "rank": "UR",
                "id": 1018640,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018650,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/蒼炎に燃える合体/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018650,
                "medals": [
                    {
                        "name": "zb/究極無敵の合体/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "頭脳派",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13333,
                        "atk": 14293,
                        "def": 8197
                    },
                    "fifty": {
                        "hp": 10333,
                        "atk": 10493,
                        "def": 4797
                    },
                    "base": {
                        "hp": 8733,
                        "atk": 8893,
                        "def": 3197
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ベジットコンビネーション",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "オレはベジットだ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+1",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "1回",
                        "dodge": "0%"
                    }
                }
            }
        ]
    },
    {
        "id": 1018640,
        "title": "起死回生の閃光",
        "name": "ベジット",
        "yomi": "べじっと",
        "rarity": "UR",
        "cost": 58,
        "type": "TEQ",
        "class": "Super",
        "release": "2020/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "ポタラ",
            "時空を超えし者",
            "未来編",
            "頭脳戦",
            "時間制限",
            "融合/合体戦士",
            "超HERO"
        ],
        "leaderSkill": "「最後の切り札」または「ポタラ」カテゴリの\n気力+3、HPとATKとDEF120%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018630
            },
            {
                "rank": "UR",
                "id": 1018640,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018650,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/蒼炎に燃える合体/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018650,
                "medals": [
                    {
                        "name": "zb/究極無敵の合体/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "頭脳派",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14924,
                        "atk": 15368,
                        "def": 8710
                    },
                    "fifty": {
                        "hp": 12324,
                        "atk": 11968,
                        "def": 5710
                    },
                    "base": {
                        "hp": 10324,
                        "atk": 9968,
                        "def": 3710
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ベジットコンビネーション",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "決着をつけようぜ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF60%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+2",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "1回",
                        "dodge": "0%"
                    }
                }
            }
        ]
    },
    {
        "id": 1018650,
        "title": "究極無敵の合体",
        "name": "ベジット",
        "yomi": "べじっと",
        "rarity": "LR",
        "cost": 77,
        "type": "TEQ",
        "class": "Super",
        "release": "2020/01/30",
        "eza": "2023/02/24",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "ポタラ",
            "神次元",
            "時空を超えし者",
            "未来編",
            "かめはめ波",
            "変身強化",
            "頭脳戦",
            "時間制限",
            "高速戦闘",
            "命運をかけた戦い",
            "融合/合体戦士",
            "超サイヤ人を超えた力",
            "超HERO"
        ],
        "leaderSkill": "「最後の切り札」または「ポタラ」カテゴリの\n気力+3、HPとATKとDEF150%UP",
        "leaderSkill_eza": "「最後の切り札」または「ポタラ」カテゴリの\n気力+3、HPとATKとDEF170%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018630
            },
            {
                "rank": "UR",
                "id": 1018640,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018650,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/蒼炎に燃える合体/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018650,
                "medals": [
                    {
                        "name": "zb/究極無敵の合体/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "頭脳派",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24475,
                        "atk": 22120,
                        "def": 11788
                    },
                    "fifty": {
                        "hp": 21875,
                        "atk": 18720,
                        "def": 8788
                    },
                    "base": {
                        "hp": 19875,
                        "atk": 16720,
                        "def": 6788
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ベジットコンビネーション",
                        "effect": "ATKが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ビッグ・バン・アタック",
                        "effect": "ATKが上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "くたばりやがれ！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+3",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "バトル開始から4ターン目以降",
                            "effects": [
                                "変身する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "1回",
                        "dodge": "50%"
                    }
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSSベジット",
                "id": 4017980,
                "links": [
                    "超サイヤ人",
                    "かめはめ波",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24475,
                        "atk": 22120,
                        "def": 11788
                    },
                    "fifty": {
                        "hp": 21875,
                        "atk": 18720,
                        "def": 8788
                    },
                    "base": {
                        "hp": 19875,
                        "atk": 16720,
                        "def": 6788
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ベジットソード",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "オメガフィニッシュブロー",
                        "effect": "1ターンDEFが上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "これでおしまいだ！！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "気力+2",
                                "必ず必殺技が追加攻撃",
                                "[img:infinity]攻撃するたびに気力+1(最大+5)、ATK/DEF7%[img:up](最大77%)"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "必ず必殺技が追加発動",
                                "高確率で敵の攻撃を回避"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "1回",
                        "dodge": "50%"
                    }
                },
                "active": {
                    "name": "ファイナルかめはめ波",
                    "condition": "次の攻撃参加ターン以降、敵が1体で敵のHP50%以下のとき発動可能 (1回のみ)",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "頭脳派",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24475,
                        "atk": 22120,
                        "def": 11788
                    },
                    "fifty": {
                        "hp": 21875,
                        "atk": 18720,
                        "def": 8788
                    },
                    "base": {
                        "hp": 19875,
                        "atk": 16720,
                        "def": 6788
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "ベジットコンビネーション(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ビッグ・バン・アタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "くたばりやがれ！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF140%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+4",
                                "DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "必殺技が追加発動",
                                "超高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "バトル開始から4ターン目以降",
                            "effects": [
                                "変身する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "1回",
                        "dodge": "70%"
                    }
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSSベジット",
                "id": 4017980,
                "links": [
                    "超サイヤ人",
                    "かめはめ波",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24475,
                        "atk": 22120,
                        "def": 11788
                    },
                    "fifty": {
                        "hp": 21875,
                        "atk": 18720,
                        "def": 8788
                    },
                    "base": {
                        "hp": 19875,
                        "atk": 16720,
                        "def": 6788
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ベジットソード(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "オメガフィニッシュブロー(極限)",
                        "effect": "3ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "これでおしまいだ！！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "気力+5",
                                "必殺技が追加発動",
                                "中確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "気力+7",
                                "必殺技が追加発動",
                                "超高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)",
                                "[img:infinity]攻撃するたびにATK/DEF22%[img:up](最大88%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時または気力メーター24で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "3回",
                        "dodge": "100%"
                    }
                },
                "active": {
                    "name": "ファイナルかめはめ波",
                    "condition": "次の攻撃参加ターン以降、敵が1体で敵のHP50%以下のとき発動可能 (1回のみ)",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1020290,
        "title": "銀色に輝く新たな姿",
        "name": "孫悟空(身勝手の極意)",
        "yomi": "そんごくう(みがってのごくい)",
        "rarity": "SSR",
        "cost": 26,
        "type": "AGL",
        "class": "Super",
        "release": "2021/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "奇跡の覚醒",
            "第7宇宙代表",
            "神次元",
            "純粋サイヤ人",
            "宇宙サバイバル編",
            "孫悟空の系譜",
            "亀仙流",
            "再起する力",
            "伝説の存在",
            "親友の絆",
            "高速戦闘",
            "託された意思",
            "命運をかけた戦い",
            "親子の絆",
            "地球育ちの戦士",
            "超HERO",
            "大会出場者"
        ],
        "leaderSkill": "「奇跡の覚醒」または「第7宇宙代表」カテゴリの\n気力+2、HPとATKとDEF130%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020290
            },
            {
                "rank": "UR",
                "id": 1020300,
                "medals": [
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020310,
                "medals": [
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020310,
                "medals": [
                    {
                        "name": "zb/真の極意/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "驚異的なスピード",
                    "臨戦態勢",
                    "神の次元",
                    "短期決戦",
                    "力の大会"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 12436,
                        "atk": 13460,
                        "def": 9568
                    },
                    "fifty": {
                        "hp": 9436,
                        "atk": 10060,
                        "def": 5768
                    },
                    "base": {
                        "hp": 7836,
                        "atk": 8460,
                        "def": 4168
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "完全なる極意",
                        "effect": "相手に超特大ダメージを与え、1ターン中確率で会心が発動",
                        "specs": {
                            "crit": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "極意の力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "中確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "回避するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+3)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "dodge": "30%"
                    }
                }
            }
        ]
    },
    {
        "id": 1020300,
        "title": "神領域の極み",
        "name": "孫悟空(身勝手の極意)",
        "yomi": "そんごくう(みがってのごくい)",
        "rarity": "UR",
        "cost": 58,
        "type": "AGL",
        "class": "Super",
        "release": "2021/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "奇跡の覚醒",
            "第7宇宙代表",
            "神次元",
            "純粋サイヤ人",
            "宇宙サバイバル編",
            "孫悟空の系譜",
            "亀仙流",
            "再起する力",
            "伝説の存在",
            "親友の絆",
            "高速戦闘",
            "託された意思",
            "命運をかけた戦い",
            "親子の絆",
            "地球育ちの戦士",
            "超HERO",
            "大会出場者"
        ],
        "leaderSkill": "「奇跡の覚醒」または「第7宇宙代表」カテゴリの\n気力+3、HPとATKとDEF150%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020290
            },
            {
                "rank": "UR",
                "id": 1020300,
                "medals": [
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020310,
                "medals": [
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020310,
                "medals": [
                    {
                        "name": "zb/真の極意/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "驚異的なスピード",
                    "臨戦態勢",
                    "神の次元",
                    "短期決戦",
                    "力の大会",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13850,
                        "atk": 14450,
                        "def": 10275
                    },
                    "fifty": {
                        "hp": 11250,
                        "atk": 11450,
                        "def": 6875
                    },
                    "base": {
                        "hp": 9250,
                        "atk": 9450,
                        "def": 4875
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "完全なる極意",
                        "effect": "相手に超特大ダメージを与え、1ターン中確率で会心が発動",
                        "specs": {
                            "crit": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "限界を超えた神の力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "回避するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+4)"
                            ]
                        },
                        {
                            "title": "回避すると",
                            "effects": [
                                "DEF20%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "dodge": "50%"
                    }
                }
            }
        ]
    },
    {
        "id": 1020310,
        "title": "真の極意",
        "name": "孫悟空(身勝手の極意)",
        "yomi": "そんごくう(みがってのごくい)",
        "rarity": "LR",
        "cost": 77,
        "type": "AGL",
        "class": "Super",
        "release": "2021/01/30",
        "eza": "2024/02/22",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "奇跡の覚醒",
            "第7宇宙代表",
            "神次元",
            "純粋サイヤ人",
            "宇宙サバイバル編",
            "孫悟空の系譜",
            "亀仙流",
            "再起する力",
            "かめはめ波",
            "伝説の存在",
            "親友の絆",
            "高速戦闘",
            "託された意思",
            "命運をかけた戦い",
            "親子の絆",
            "地球育ちの戦士",
            "超HERO",
            "大会出場者"
        ],
        "leaderSkill": "「奇跡の覚醒」または「第7宇宙代表」カテゴリの\n気力+3、HPとATKとDEF170%UP",
        "leaderSkill_eza": "「奇跡の覚醒」または「第7宇宙代表」カテゴリの\n気力+3、HPとATKとDEF180%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020290
            },
            {
                "rank": "UR",
                "id": 1020300,
                "medals": [
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020310,
                "medals": [
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020310,
                "medals": [
                    {
                        "name": "zb/真の極意/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "驚異的なスピード",
                    "臨戦態勢",
                    "神の次元",
                    "かめはめ波",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17750,
                    "atk": 15700,
                    "def": 9125
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "完全なる極意",
                        "effect": "相手に極大ダメージを与え、1ターン高確率で会心が発動",
                        "specs": {
                            "crit": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "超極限かめはめ波",
                        "effect": "相手に超極大ダメージを与え、1ターン高確率で会心が発動",
                        "specs": {
                            "crit": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "仲間から託された力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "超高確率で敵の攻撃を回避",
                                "中確率で必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "回避すると",
                            "effects": [
                                "DEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "回避するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)"
                            ]
                        },
                        {
                            "title": "バトル中自身が3回以上攻撃を受けた後の自身の攻撃参加ターン開始時にHP50%以下のとき攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが70%回復し復活する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "dodge": "70%",
                        "revival": true
                    }
                },
                "active": {
                    "name": "怒りの一閃",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "驚異的なスピード",
                    "臨戦態勢",
                    "神の次元",
                    "かめはめ波",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17750,
                    "atk": 15700,
                    "def": 9125
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "完全なる極意(極限)",
                        "effect": "1ターンATKが大幅上昇し、相手に極大ダメージを与え、1ターン高確率で会心が発動\n&1ターン仲間の会心率7%UP",
                        "specs": {
                            "atk_up": "50%",
                            "crit": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "超極限かめはめ波(極限)",
                        "effect": "1ターンATKが超大幅上昇し、相手に超極大ダメージを与え、1ターン高確率で会心が発動\n&2ターン仲間の会心率7%UP",
                        "specs": {
                            "atk_up": "100%",
                            "crit": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "仲間から託された力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "77%の確率で必殺技が追加発動",
                                "77%の確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "気力+7",
                                "敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "回避するたび",
                            "effects": [
                                "そのターン中、回避率7%[img:up]",
                                "[img:infinity]気力+2(最大+10)",
                                "[img:infinity]DEF30%[img:up](最大150%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時または気力メーター24のとき",
                            "effects": [
                                "ATK77%[img:up]",
                                "必ず会心が発動"
                            ]
                        },
                        {
                            "title": "HP77%以上",
                            "effects": [
                                "ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "HP77%以下のとき攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが77%回復し復活する"
                            ]
                        },
                        {
                            "title": "自身か味方の復活スキルが発動すると",
                            "effects": [
                                "[img:infinity]気力+7",
                                "[img:infinity]ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "自身の復活スキルが発動すると",
                            "effects": [
                                "次の攻撃参加ターン中、敵の攻撃を回避"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "dodge": "100%",
                        "revival": true
                    }
                },
                "active": {
                    "name": "怒りの一閃",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1020320,
        "title": "ブルーを超えた新たな姿",
        "name": "超サイヤ人ゴッドSSベジータ(進化)",
        "yomi": "すーぱーさいやじんごっどすーぱーさいやじんべじーた(しんか)",
        "rarity": "SSR",
        "cost": 26,
        "type": "INT",
        "class": "Super",
        "release": "2021/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "再起する力",
            "第7宇宙代表",
            "宇宙サバイバル編",
            "神次元",
            "純粋サイヤ人",
            "フルパワー",
            "ベジータの系譜",
            "兄弟の絆",
            "好敵手",
            "師弟の絆",
            "力戦奮闘",
            "奇跡の覚醒",
            "天才戦士",
            "超サイヤ人を超えた力",
            "親子の絆",
            "超HERO",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「再起する力」または「第7宇宙代表」カテゴリの\n気力+2、HPとATKとDEF130%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020320
            },
            {
                "rank": "UR",
                "id": 1020330,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020340,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020340,
                "medals": [
                    {
                        "name": "zb/真の戦闘民族/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 12393,
                        "atk": 13106,
                        "def": 9832
                    },
                    "fifty": {
                        "hp": 8993,
                        "atk": 9706,
                        "def": 6432
                    },
                    "base": {
                        "hp": 7393,
                        "atk": 8106,
                        "def": 4832
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "相手に超特大ダメージを与え、1ターン中確率で会心が発動",
                        "specs": {
                            "crit": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "殻をやぶった力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+3)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "10%"
                    }
                }
            }
        ]
    },
    {
        "id": 1020330,
        "title": "神領域の進化",
        "name": "超サイヤ人ゴッドSSベジータ(進化)",
        "yomi": "すーぱーさいやじんごっどすーぱーさいやじんべじーた(しんか)",
        "rarity": "UR",
        "cost": 58,
        "type": "INT",
        "class": "Super",
        "release": "2021/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "再起する力",
            "第7宇宙代表",
            "宇宙サバイバル編",
            "神次元",
            "純粋サイヤ人",
            "フルパワー",
            "ベジータの系譜",
            "兄弟の絆",
            "好敵手",
            "師弟の絆",
            "力戦奮闘",
            "奇跡の覚醒",
            "天才戦士",
            "超サイヤ人を超えた力",
            "親子の絆",
            "超HERO",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「再起する力」または「第7宇宙代表」カテゴリの\n気力+3、HPとATKとDEF150%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020320
            },
            {
                "rank": "UR",
                "id": 1020330,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020340,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020340,
                "medals": [
                    {
                        "name": "zb/真の戦闘民族/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13719,
                        "atk": 14025,
                        "def": 10672
                    },
                    "fifty": {
                        "hp": 10719,
                        "atk": 11025,
                        "def": 7672
                    },
                    "base": {
                        "hp": 8719,
                        "atk": 9025,
                        "def": 5672
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "相手に超特大ダメージを与え、1ターン中確率で会心が発動",
                        "specs": {
                            "crit": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "全てを纏った力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けると",
                            "effects": [
                                "そのターン中、ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+4)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "20%"
                    }
                }
            }
        ]
    },
    {
        "id": 1020340,
        "title": "真の戦闘民族",
        "name": "超サイヤ人ゴッドSSベジータ(進化)",
        "yomi": "すーぱーさいやじんごっどすーぱーさいやじんべじーた(しんか)",
        "rarity": "LR",
        "cost": 77,
        "type": "INT",
        "class": "Super",
        "release": "2021/01/30",
        "eza": "2024/02/22",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "再起する力",
            "第7宇宙代表",
            "宇宙サバイバル編",
            "神次元",
            "純粋サイヤ人",
            "フルパワー",
            "ベジータの系譜",
            "兄弟の絆",
            "好敵手",
            "師弟の絆",
            "力戦奮闘",
            "奇跡の覚醒",
            "天才戦士",
            "超サイヤ人を超えた力",
            "親子の絆",
            "超HERO",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「再起する力」または「第7宇宙代表」カテゴリの\n気力+3、HPとATKとDEF170%UP",
        "leaderSkill_eza": "「再起する力」または「第7宇宙代表」カテゴリの\n気力+3、HPとATKとDEF180%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020320
            },
            {
                "rank": "UR",
                "id": 1020330,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020340,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020340,
                "medals": [
                    {
                        "name": "zb/真の戦闘民族/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21688,
                        "atk": 19850,
                        "def": 15719
                    },
                    "fifty": {
                        "hp": 18688,
                        "atk": 16850,
                        "def": 12719
                    },
                    "base": {
                        "hp": 16688,
                        "atk": 14850,
                        "def": 10719
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "相手に極大ダメージを与え、1ターン高確率で会心が発動",
                        "specs": {
                            "crit": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ",
                        "effect": "相手に超極大ダメージを与え、1ターン高確率で会心が発動",
                        "specs": {
                            "crit": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "約束を守るための力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "ダメージ軽減率10%[img:up]",
                                "中確率で必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "そのターン中、ダメージ軽減率10%[img:up](最大30%)"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)"
                            ]
                        },
                        {
                            "title": "バトル中自身が7回以上攻撃を受けた後の自身の攻撃参加ターン開始時にHP50%以下のとき攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが70%回復し復活する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "reduce": "40%",
                        "revival": true
                    }
                },
                "active": {
                    "name": "ファイナルエクスプロージョン",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ)",
                    "effect": "敵全体に超極大ダメージを与える"
                }
            },
            {
                "label": "ビジュアルチェンジ",
                "name": "",
                "id": 4020340,
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21688,
                        "atk": 19850,
                        "def": 15719
                    },
                    "fifty": {
                        "hp": 18688,
                        "atk": 16850,
                        "def": 12719
                    },
                    "base": {
                        "hp": 16688,
                        "atk": 14850,
                        "def": 10719
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "相手に極大ダメージを与え、1ターン高確率で会心が発動",
                        "specs": {
                            "crit": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ",
                        "effect": "相手に超極大ダメージを与え、1ターン高確率で会心が発動",
                        "specs": {
                            "crit": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "約束を守るための力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "ダメージ軽減率10%[img:up]",
                                "中確率で必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "そのターン中、ダメージ軽減率10%[img:up](最大30%)"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)"
                            ]
                        },
                        {
                            "title": "バトル中自身が7回以上攻撃を受けた後の自身の攻撃参加ターン開始時にHP50%以下のとき攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが70%回復し復活する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "reduce": "40%",
                        "revival": true
                    }
                },
                "active": {
                    "name": "ファイナルエクスプロージョン",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ)",
                    "effect": "敵全体に超極大ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21688,
                        "atk": 19850,
                        "def": 15719
                    },
                    "fifty": {
                        "hp": 18688,
                        "atk": 16850,
                        "def": 12719
                    },
                    "base": {
                        "hp": 16688,
                        "atk": 14850,
                        "def": 10719
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "戦闘民族の誇り(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に極大ダメージを与え、1ターン高確率で会心が発動\n&1ターン仲間の会心率7%UP",
                        "specs": {
                            "def_up": "50%",
                            "crit": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与え、1ターン高確率で会心が発動\n&2ターン仲間の会心率7%UP",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%",
                            "crit": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "約束を守るための力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "77%の確率で必殺技が追加発動",
                                "ダメージ軽減率50%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "気力+7",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "攻撃を受けるか回避するたび",
                            "effects": [
                                "そのターン中、ダメージ軽減率10%[img:up](最大30%)"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+3(最大+10)",
                                "[img:infinity]ATK/DEF30%[img:up](最大120%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時または気力メーター24のとき",
                            "effects": [
                                "ATK77%[img:up]",
                                "必ず会心が発動"
                            ]
                        },
                        {
                            "title": "バトル中自身が5回以上攻撃を受けた次の自身の攻撃参加ターン以降、攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが77%回復し復活する"
                            ]
                        },
                        {
                            "title": "自身か味方の復活スキルが発動すると",
                            "effects": [
                                "[img:infinity]気力+7",
                                "[img:infinity]ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "自身の復活スキルが発動すると",
                            "effects": [
                                "次の攻撃参加ターン中、全ての攻撃をガード"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "reduce": "80%",
                        "guard": true,
                        "revival": true
                    }
                },
                "active": {
                    "name": "ファイナルエクスプロージョン",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ)",
                    "effect": "敵全体に超極大ダメージを与える"
                }
            },
            {
                "label": "ビジュアルチェンジ",
                "name": "",
                "id": 4020340,
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21688,
                        "atk": 19850,
                        "def": 15719
                    },
                    "fifty": {
                        "hp": 18688,
                        "atk": 16850,
                        "def": 12719
                    },
                    "base": {
                        "hp": 16688,
                        "atk": 14850,
                        "def": 10719
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "戦闘民族の誇り(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に極大ダメージを与え、1ターン高確率で会心が発動\n&1ターン仲間の会心率7%UP",
                        "specs": {
                            "def_up": "50%",
                            "crit": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与え、1ターン高確率で会心が発動\n&2ターン仲間の会心率7%UP",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%",
                            "crit": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "約束を守るための力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "77%の確率で必殺技が追加発動",
                                "ダメージ軽減率50%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "気力+7",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "攻撃を受けるか回避するたび",
                            "effects": [
                                "そのターン中、ダメージ軽減率10%[img:up](最大30%)"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+3(最大+10)",
                                "[img:infinity]ATK/DEF30%[img:up](最大120%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時または気力メーター24のとき",
                            "effects": [
                                "ATK77%[img:up]",
                                "必ず会心が発動"
                            ]
                        },
                        {
                            "title": "バトル中自身が5回以上攻撃を受けた次の自身の攻撃参加ターン以降、攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが77%回復し復活する"
                            ]
                        },
                        {
                            "title": "自身か味方の復活スキルが発動すると",
                            "effects": [
                                "[img:infinity]気力+7",
                                "[img:infinity]ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "自身の復活スキルが発動すると",
                            "effects": [
                                "次の攻撃参加ターン中、全ての攻撃をガード"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "reduce": "80%",
                        "guard": true,
                        "revival": true
                    }
                },
                "active": {
                    "name": "ファイナルエクスプロージョン",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ)",
                    "effect": "敵全体に超極大ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1022400,
        "title": "猛き戦闘民族の衝動",
        "name": "超サイヤ人4孫悟空&超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4そんごくう&すーぱーさいやじん4べじーた",
        "rarity": "SSR",
        "cost": 26,
        "type": "PHY",
        "class": "Super",
        "release": "2022/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "融合/合体戦士",
            "GT HERO",
            "邪悪龍編",
            "純粋サイヤ人",
            "コンビネーション",
            "かめはめ波",
            "大猿パワー",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「融合/合体戦士」または「GTHERO」カテゴリの\n気力+2、HPとATKとDEF130%UP、\n「かめはめ波」カテゴリを含む場合は\n更にHPとATKとDEF10%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1022400
            },
            {
                "rank": "UR",
                "id": 1022410,
                "medals": [
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1022420,
                "medals": [
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1022420,
                "medals": [
                    {
                        "name": "zb/究極パワーのサイヤ人戦士/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "かめはめ波",
                    "サイヤの咆哮",
                    "驚異的なスピード",
                    "GT"
                ],
                "stats": {
                    "hp": 7403,
                    "atk": 9212,
                    "def": 3463
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波&ファイナルフラッシュ",
                        "effect": "ATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "20%",
                            "def_up": "20%"
                        }
                    }
                ],
                "passive": {
                    "name": "戦闘民族の共鳴",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率7%up[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "35%"
                    }
                }
            }
        ]
    },
    {
        "id": 1022410,
        "title": "超克のバトル",
        "name": "超サイヤ人4孫悟空&超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4そんごくう&すーぱーさいやじん4べじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "PHY",
        "class": "Super",
        "release": "2022/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "融合/合体戦士",
            "GT HERO",
            "邪悪龍編",
            "純粋サイヤ人",
            "コンビネーション",
            "かめはめ波",
            "大猿パワー",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「融合/合体戦士」または「GTHERO」カテゴリの\n気力+3、HPとATKとDEF150%UP、\n「かめはめ波」カテゴリを含む場合は\n更にHPとATKとDEF20%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1022400
            },
            {
                "rank": "UR",
                "id": 1022410,
                "medals": [
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1022420,
                "medals": [
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1022420,
                "medals": [
                    {
                        "name": "zb/究極パワーのサイヤ人戦士/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "かめはめ波",
                    "サイヤの咆哮",
                    "驚異的なスピード",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "hp": 8728,
                    "atk": 10351,
                    "def": 4029
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波&ファイナルフラッシュ",
                        "effect": "ATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "20%",
                            "def_up": "20%"
                        }
                    }
                ],
                "passive": {
                    "name": "戦闘民族の競演",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率7%up[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "35%"
                    }
                }
            }
        ]
    },
    {
        "id": 1022420,
        "title": "究極パワーのサイヤ人戦士",
        "name": "超サイヤ人4孫悟空&超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4そんごくう&すーぱーさいやじん4べじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "PHY",
        "class": "Super",
        "release": "2022/01/30",
        "eza": "2025/02/26",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "融合/合体戦士",
            "GT HERO",
            "邪悪龍編",
            "純粋サイヤ人",
            "コンビネーション",
            "かめはめ波",
            "大猿パワー",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「融合/合体戦士」または「GTHERO」カテゴリの\n気力+3、HPとATKとDEF170%UP、\n「かめはめ波」カテゴリを含む場合は\n更にHPとATKとDEF30%UP",
        "leaderSkill_eza": "「融合/合体戦士」または「GT HERO」 カテゴリの\n気力+3、HPとATKとDEF170%UP、\n「かめはめ波」カテゴリを含む場合は\n更に気力+1、HPとATKとDEF30%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1022400
            },
            {
                "rank": "UR",
                "id": 1022410,
                "medals": [
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1022420,
                "medals": [
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/最強無敵の究極フュージョン!!/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1022420,
                "medals": [
                    {
                        "name": "zb/究極パワーのサイヤ人戦士/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "かめはめ波",
                    "サイヤの咆哮",
                    "驚異的なスピード",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16688,
                    "atk": 17185,
                    "def": 7425
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波&ファイナルフラッシュ",
                        "effect": "ATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "20%",
                            "def_up": "20%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "龍拳&ファイナルシャインアタック",
                        "effect": "ATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "20%",
                            "def_up": "20%"
                        }
                    }
                ],
                "passive": {
                    "name": "ダブル超サイヤ人4",
                    "intro": {
                        "condition": "自身の登場時、登場時演出が発動",
                        "effect": "[img:one_time]1ターンの間、全ての攻撃をガードする\n[img:one_time]7ターンの間、ATK/DEF77%up[img:up]、属性気玉取得時の気力上昇量+1"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率7%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター20以上で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "気力メーター24で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "35%",
                        "add": "1回",
                        "guard": true,
                        "effective": true
                    }
                },
                "active": {
                    "name": "融合",
                    "condition": "バトル開始から4ターン目以降発動可能 (1回のみ)",
                    "effect": "フュージョンで融合する"
                }
            },
            {
                "label": "融合",
                "name": "超サイヤ人4ゴジータ",
                "id": 4022430,
                "links": [
                    "超サイヤ人",
                    "かめはめ波",
                    "サイヤの咆哮",
                    "驚異的なスピード",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16688,
                    "atk": 17185,
                    "def": 7425
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "分身かめはめ波",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ビッグバンかめはめ波",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与える\n&敵の行動をそのターンのみ1回無効化する",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "100%",
                            "action_break": true
                        }
                    }
                ],
                "passive": {
                    "name": "スーパーゴジータ誕生！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF177%[img:up]",
                                "属性気玉取得時の気力上昇量+2",
                                "全属性に効果抜群で攻撃",
                                "中確率で会心が発動",
                                "高確率で必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率7%[img:up]",
                                "ダメージ軽減率7%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "高確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "65%",
                        "add": "1回",
                        "reduce": "35%",
                        "effective": true,
                        "counter": true
                    }
                },
                "active": {
                    "name": "ウルトラビッグバンかめはめ波",
                    "condition": "自身のHPが50%以下のとき発動可能\nまたは敵が1体のとき敵のHPが50%以下で発動可能(1回のみ)",
                    "effect": "相手に究極ダメージを与え、発動したターン中必ず会心が発動する",
                    "specs": {
                        "crit": "100%"
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "かめはめ波",
                    "サイヤの咆哮",
                    "驚異的なスピード",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16688,
                    "atk": 17185,
                    "def": 7425
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波&ファイナルフラッシュ(極限)",
                        "effect": "ATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "龍拳&ファイナルシャインアタック(極限)",
                        "effect": "ATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "ダブル超サイヤ人4",
                    "intro": {
                        "condition": "自身の登場時、登場時演出が発動",
                        "effect": "[img:one_time]1ターンの間、ダメージ軽減率77%up[img:up]、必殺技が追加発動\n[img:one_time]7ターンの間、気力+2、ATK/DEF100%up[img:up]、全ての攻撃をガード"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "属性気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "取得気玉1個につき",
                            "effects": [
                                "ATK/DEF10%up[img:up](最大77%)"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率10%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター17以上で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "気力メーター20以上で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃",
                                "必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "50%",
                        "add": "3回",
                        "reduce": "77%",
                        "guard": true,
                        "effective": true
                    }
                },
                "active": {
                    "name": "融合",
                    "condition": "バトル開始から4ターン目以降発動可能 (1回のみ)",
                    "effect": "フュージョンで融合する"
                }
            },
            {
                "label": "融合",
                "name": "超サイヤ人4ゴジータ",
                "id": 4022430,
                "links": [
                    "超サイヤ人",
                    "かめはめ波",
                    "サイヤの咆哮",
                    "驚異的なスピード",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16688,
                    "atk": 17185,
                    "def": 7425
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "分身かめはめ波(極限)",
                        "effect": "1ターンATKが超大幅上昇、DEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ビッグバンかめはめ波(極限)",
                        "effect": "4ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与える\n&敵の行動をそのターンのみ1回無効化する",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "100%",
                            "action_break": true
                        }
                    }
                ],
                "passive": {
                    "name": "スーパーゴジータ誕生！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]1ターンの間、ダメージ軽減率77%[img:up]",
                                "ATK/DEF300%[img:up]",
                                "属性気玉取得時の気力上昇量+2",
                                "全属性に効果抜群で攻撃",
                                "全ての攻撃をガード",
                                "高確率で会心が発動",
                                "必殺技が追加発動",
                                "敵の必殺技を見極める"
                            ]
                        },
                        {
                            "title": "登場から4ターンの間",
                            "effects": [
                                "ランダム気玉変化：属性気玉1種→虹"
                            ]
                        },
                        {
                            "title": "取得気玉1個につき",
                            "effects": [
                                "ATK/DEF10%up[img:up](最大100%)"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率/ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時または気力メーター24で攻撃時",
                            "effects": [
                                "ATK50%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "[img:one_time]自身のHP50%以下の場合、そのターン中ダメージ軽減率50%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "超高確率で無効化し超絶大な威力で反撃",
                                "[img:one_time]敵が1体で敵のHPが50%以下の場合、必ず無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "reduce": "100%",
                        "guard": true,
                        "effective": true,
                        "counter": true
                    }
                },
                "active": {
                    "name": "ウルトラビッグバンかめはめ波",
                    "condition": "自身のHPが50%以下のとき発動可能\nまたは敵が1体のとき敵のHPが50%以下で発動可能(1回のみ)",
                    "effect": "相手に究極ダメージを与え、発動したターン中必ず会心が発動する",
                    "specs": {
                        "crit": "100%"
                    }
                }
            }
        ]
    },
    {
        "id": 1022360,
        "title": "紅き神戦士の鼓動",
        "name": "超サイヤ人ゴッド孫悟空&超サイヤ人ゴッドベジータ",
        "yomi": "すーぱーさいやじんごっどそんごくう&すーぱーさいやじんごっどべじーた",
        "rarity": "SSR",
        "cost": 26,
        "type": "TEQ",
        "class": "Super",
        "release": "2022/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超サイヤ人を超えた力",
            "劇場版HERO",
            "神次元",
            "純粋サイヤ人",
            "コンビネーション",
            "親子の絆",
            "超HERO"
        ],
        "leaderSkill": "「超サイヤ人を超えた力」または「劇場版HERO」カテゴリの\n気力+2、HPとATKとDEF130%UP、\n「かめはめ波」カテゴリを含む場合は\n更にHPとATKとDEF10%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1022360
            },
            {
                "rank": "UR",
                "id": 1022370,
                "medals": [
                    {
                        "name": "超激戦/激闘で紡がれたサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1022380,
                "medals": [
                    {
                        "name": "超激戦/激闘で紡がれたサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/全てを照らす最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1022380,
                "medals": [
                    {
                        "name": "zb/無限パワーの神戦士/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "超サイヤ人",
                    "神戦士",
                    "神の次元",
                    "臨戦態勢"
                ],
                "stats": {
                    "hp": 7314,
                    "atk": 8999,
                    "def": 3774
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "神烈炎舞",
                        "effect": "ATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "20%",
                            "def_up": "20%"
                        }
                    }
                ],
                "passive": {
                    "name": "神戦士の呼吸",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率7%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "35%"
                    }
                }
            }
        ]
    },
    {
        "id": 1022370,
        "title": "超克の領域",
        "name": "超サイヤ人ゴッド孫悟空&超サイヤ人ゴッドベジータ",
        "yomi": "すーぱーさいやじんごっどそんごくう&すーぱーさいやじんごっどべじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "TEQ",
        "class": "Super",
        "release": "2022/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超サイヤ人を超えた力",
            "劇場版HERO",
            "神次元",
            "純粋サイヤ人",
            "コンビネーション",
            "親子の絆",
            "超HERO"
        ],
        "leaderSkill": "「超サイヤ人を超えた力」または「劇場版HERO」カテゴリの\n気力+3、HPとATKとDEF150%UP、\n「かめはめ波」カテゴリを含む場合は\n更にHPとATKとDEF20%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1022360
            },
            {
                "rank": "UR",
                "id": 1022370,
                "medals": [
                    {
                        "name": "超激戦/激闘で紡がれたサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1022380,
                "medals": [
                    {
                        "name": "超激戦/激闘で紡がれたサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/全てを照らす最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1022380,
                "medals": [
                    {
                        "name": "zb/無限パワーの神戦士/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "超サイヤ人",
                    "神戦士",
                    "神の次元",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "hp": 8622,
                    "atk": 10095,
                    "def": 4401
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "神烈炎舞",
                        "effect": "ATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "20%",
                            "def_up": "20%"
                        }
                    }
                ],
                "passive": {
                    "name": "神戦士の重奏",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率7%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "35%"
                    }
                }
            }
        ]
    },
    {
        "id": 1022380,
        "title": "無限パワーの神戦士",
        "name": "超サイヤ人ゴッド孫悟空&超サイヤ人ゴッドベジータ",
        "yomi": "すーぱーさいやじんごっどそんごくう&すーぱーさいやじんごっどべじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "TEQ",
        "class": "Super",
        "release": "2022/01/30",
        "eza": "2025/02/26",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超サイヤ人を超えた力",
            "劇場版HERO",
            "神次元",
            "純粋サイヤ人",
            "コンビネーション",
            "フュージョン",
            "変身強化",
            "かめはめ波",
            "最後の切り札",
            "時間制限",
            "体得した進化",
            "融合/合体戦士",
            "親子の絆",
            "超HERO",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「超サイヤ人を超えた力」または「劇場版HERO」カテゴリの\n気力+3、HPとATKとDEF170%UP、\n「かめはめ波」カテゴリを含む場合は\n更にHPとATKとDEF30%UP",
        "leaderSkill_eza": "「超サイヤ人を超えた力」または「劇場版HERO」カテゴリの\n気力+3、HPとATKとDEF170%UP、\n「かめはめ波」カテゴリを含む場合は\n更に気力+1、HPとATKとDEF30%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1022360
            },
            {
                "rank": "UR",
                "id": 1022370,
                "medals": [
                    {
                        "name": "超激戦/激闘で紡がれたサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1022380,
                "medals": [
                    {
                        "name": "超激戦/激闘で紡がれたサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/全てを照らす最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1022380,
                "medals": [
                    {
                        "name": "zb/無限パワーの神戦士/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "神戦士",
                    "神の次元",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16475,
                    "atk": 16675,
                    "def": 8169
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "神烈炎舞",
                        "effect": "ATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "20%",
                            "def_up": "20%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "ATKとDEFが上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "20%",
                            "def_up": "20%"
                        }
                    }
                ],
                "passive": {
                    "name": "ダブル超サイヤ人ゴッド",
                    "intro": {
                        "condition": "自身の登場時、登場時演出が発動",
                        "effect": "[img:one_time]1ターンの間、全ての攻撃をガードする\n[img:one_time]7ターンの間、ATK/DEF77%[img:up]、属性気玉取得時の気力上昇量+1"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率7%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター20以上で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "気力メーター24で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "35%",
                        "add": "1回",
                        "guard": true,
                        "effective": true
                    }
                },
                "active": {
                    "name": "変身",
                    "condition": "バトル開始から4ターン目以降発動可能 (1回のみ)",
                    "effect": "変身する"
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSS孫悟空&超サイヤ人ゴッドSSベジータ",
                "id": 4022390,
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "神戦士",
                    "神の次元",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16475,
                    "atk": 16675,
                    "def": 8169
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "蒼神光牙",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波&ギャリック砲",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与える\n&敵の行動をそのターンのみ1回無効化する",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "100%",
                            "action_break": true
                        }
                    }
                ],
                "passive": {
                    "name": "超サイヤ人ブルー変身！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF177%[img:up]",
                                "属性気玉取得時の気力上昇量+2",
                                "中確率で会心が発動",
                                "中確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率7%[img:up]",
                                "回避率7%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター16以上で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "気力メーター20以上で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "65%",
                        "add": "1回",
                        "dodge": "65%",
                        "effective": true
                    }
                },
                "active": {
                    "name": "フュージョン",
                    "condition": "自身のHPが50%以下のとき発動可能\nまたは敵が1体のとき 敵のHPが50%以下で発動可能(1回のみ)",
                    "effect": "相手に究極ダメージを与え、発動したターン中必ず会心が発動する",
                    "specs": {
                        "crit": "100%"
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "神戦士",
                    "神の次元",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16475,
                    "atk": 16675,
                    "def": 8169
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "神烈炎舞(極限)",
                        "effect": "ATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック(極限)",
                        "effect": "ATKとDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "ダブル超サイヤ人ゴッド",
                    "intro": {
                        "condition": "自身の登場時、登場時演出が発動",
                        "effect": "[img:one_time]1ターンの間、ダメージ軽減率77%[img:up]、必殺技が追加発動\n[img:one_time]7ターンの間、気力+2、ATK/DEF100%[img:up]、全ての攻撃をガード"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "属性気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "取得気玉1個につき",
                            "effects": [
                                "ATK/DEF10%[img:up](最大77%)"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率10%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター17以上で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "気力メーター20以上で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃",
                                "必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "50%",
                        "add": "3回",
                        "reduce": "77%",
                        "guard": true,
                        "effective": true
                    }
                },
                "active": {
                    "name": "変身",
                    "condition": "バトル開始から4ターン目以降発動可能 (1回のみ)",
                    "effect": "変身する"
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSS孫悟空&超サイヤ人ゴッドSSベジータ",
                "id": 4022390,
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "神戦士",
                    "神の次元",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16475,
                    "atk": 16675,
                    "def": 8169
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "蒼神光牙(極限)",
                        "effect": "1ターンATKが超大幅上昇、DEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波&ギャリック砲(極限)",
                        "effect": "4ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与える\n&敵の行動をそのターンのみ1回無効化する",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "100%",
                            "action_break": true
                        }
                    }
                ],
                "passive": {
                    "name": "超サイヤ人ブルー変身！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]1ターンの間、ダメージ軽減率77%[img:up]",
                                "ATK/DEF300%[img:up]",
                                "気玉取得時の気力上昇量+2",
                                "全属性に効果抜群で攻撃",
                                "全ての攻撃をガード",
                                "高確率で会心が発動",
                                "中確率で敵の攻撃を回避",
                                "気玉変化：知→虹"
                            ]
                        },
                        {
                            "title": "登場から4ターンの間",
                            "effects": [
                                "ランダム気玉変化：知を除く属性気玉1種→虹"
                            ]
                        },
                        {
                            "title": "得気玉1個につき",
                            "effects": [
                                "ATK/DEF10%[img:up](最大100%)"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "会心率/回避率10%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉7個以上",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "気力メーター20以上で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時または気力メーター24で攻撃時",
                            "effects": [
                                "ATK50%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "[img:one_time]敵のHP50%以上の場合、必ず会心が発動し、必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "[img:one_time]自身のHP50%以下の場合、敵の攻撃を回避"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "3回",
                        "reduce": "77%",
                        "dodge": "100%",
                        "guard": true,
                        "effective": true
                    }
                },
                "active": {
                    "name": "フュージョン",
                    "condition": "自身のHPが50%以下のとき発動可能\nまたは敵が1体のとき 敵のHPが50%以下で発動可能(1回のみ)",
                    "effect": "相手に究極ダメージを与え、発動したターン中必ず会心が発動する",
                    "specs": {
                        "crit": "100%"
                    }
                }
            }
        ]
    },
    {
        "id": 1025710,
        "title": "結束した超パワー",
        "name": "超サイヤ人3孫悟空&超サイヤ人2ベジータ",
        "yomi": "すーぱーさいやじん3そんごくう&すーぱーさいやじん2べじーた",
        "rarity": "SSR",
        "cost": 26,
        "type": "PHY",
        "class": "Super",
        "release": "2023/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "願いの力",
            "最後の切り札",
            "つながる希望",
            "魔人ブウ編",
            "純粋サイヤ人",
            "コンビネーション",
            "頭脳戦",
            "体得した進化",
            "命運をかけた闘い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「願いの力」または「最後の切り札」カテゴリの\n気力+3、HPとATKとDEF130%UP、\n「つながる希望」または「魔人ブウ編」カテゴリを含む場合は\n更にHPとATKとDEF10%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1025710
            },
            {
                "rank": "UR",
                "id": 1025720,
                "medals": [
                    {
                        "name": "超激戦/勝利の輝き！希望の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1025730,
                "medals": [
                    {
                        "name": "超激戦/勝利の輝き！希望の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/破壊と殺戮の純真/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "金色の戦士",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "臨戦態勢"
                ],
                "stats": {
                    "hp": 7570,
                    "atk": 8602,
                    "def": 4124
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ライバル同士の共闘",
                        "effect": "1ターンATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "激闘開始",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]"
                            ]
                        },
                        {
                            "title": "HP50%以上",
                            "effects": [
                                "ATK/DEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目にいるとき",
                            "effects": [
                                "DEF50%[img:up]",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "ATK50%[img:up]",
                                "気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "必殺技を発動するたび",
                            "effects": [
                                "[img:infinity]会心率10%[img:up](最大30%)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "30%"
                    }
                }
            }
        ]
    },
    {
        "id": 1025720,
        "title": "激化する死闘",
        "name": "超サイヤ人3孫悟空&超サイヤ人2ベジータ",
        "yomi": "すーぱーさいやじん3そんごくう&すーぱーさいやじん2べじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "PHY",
        "class": "Super",
        "release": "2023/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "願いの力",
            "最後の切り札",
            "つながる希望",
            "魔人ブウ編",
            "純粋サイヤ人",
            "コンビネーション",
            "頭脳戦",
            "体得した進化",
            "命運をかけた闘い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「願いの力」または「最後の切り札」カテゴリの\n気力+3、HPとATKとDEF150%UP、「つながる希望」または「魔人ブウ編」カテゴリを含む場合は\n更にHPとATKとDEF20%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1025710
            },
            {
                "rank": "UR",
                "id": 1025720,
                "medals": [
                    {
                        "name": "超激戦/勝利の輝き！希望の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1025730,
                "medals": [
                    {
                        "name": "超激戦/勝利の輝き！希望の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/破壊と殺戮の純真/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "金色の戦士",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "hp": 8931,
                    "atk": 9620,
                    "def": 4822
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ライバル同士の共闘",
                        "effect": "1ターンATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "フルパワー共振",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "HP50%以上",
                            "effects": [
                                "ATK/DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目にいるとき",
                            "effects": [
                                "DEF70%[img:up]",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "ATK70%[img:up]",
                                "気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "必殺技を発動するたび",
                            "effects": [
                                "会心率10%[img:up](最大40%)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "40%"
                    }
                }
            }
        ]
    },
    {
        "id": 1025730,
        "title": "全宇宙最後の希望",
        "name": "超サイヤ人3孫悟空&超サイヤ人2ベジータ",
        "yomi": "すーぱーさいやじん3そんごくう&すーぱーさいやじん2べじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "PHY",
        "class": "Super",
        "release": "2023/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "願いの力",
            "最後の切り札",
            "つながる希望",
            "魔人ブウ編",
            "純粋サイヤ人",
            "コンビネーション",
            "頭脳戦",
            "体得した進化",
            "命運をかけた闘い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "力戦奮闘",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「願いの力」または「最後の切り札」カテゴリの\n気力+3、HPとATKとDEF170%UP、\n「つながる希望」または「魔人ブウ編」カテゴリを含む場合は\n更にHPとATKとDEF30%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1025710
            },
            {
                "rank": "UR",
                "id": 1025720,
                "medals": [
                    {
                        "name": "超激戦/勝利の輝き！希望の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1025730,
                "medals": [
                    {
                        "name": "超激戦/勝利の輝き！希望の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/破壊と殺戮の純真/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "金色の戦士",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17113,
                    "atk": 16040,
                    "def": 9019
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ライバル同士の共闘",
                        "effect": "DEFが上昇、1ターンATKが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "def_up": "30%",
                            "atk_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "フルパワーエネルギーラッシュ",
                        "effect": "DEFが大幅上昇、1ターンATKが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "def_up": "50%",
                            "atk_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "全力のファイナルバトル",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]"
                            ]
                        },
                        {
                            "title": "HP50%以上",
                            "effects": [
                                "ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目にいるとき",
                            "effects": [
                                "DEF100%[img:up]",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "ATK100%[img:up]",
                                "気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "気力メーター18以上で攻撃時",
                            "effects": [
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "気力メーター24で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "必殺技を発動するたび",
                            "effects": [
                                "[img:infinity]気力+1",
                                "[img:infinity]会心率10%[img:up](最大50%)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "50%",
                        "add": "2回"
                    }
                },
                "standby": {
                    "name": "スタンバイに移行する",
                    "condition": "自身のHP50%以下で発動可能、\nまたはバトル開始から4ターン目以降、バトル中自身が4回以上攻撃すると発動可能 (1回のみ)",
                    "effect": "5ターンの間スタンバイし、チームの味方の取得気玉1個につき チャージカウントが1増加する",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "元気玉",
                            "condition": "チャージカウント38以下で発動可能 (1回のみ)",
                            "effect": "チャージカウント1つにつき一時的にATK15%UPし、\n相手に究極ダメージを与える"
                        },
                        {
                            "type": "チャージフィニッシュ",
                            "name": "超元気玉",
                            "condition": "チャージカウント39以上で発動可能 (1回のみ)",
                            "effect": "チャージカウント1つにつき一時的にATK20%UPし、\n相手に超究極ダメージを与える"
                        }
                    ]
                }
            },
            {
                "label": "スタンバイ",
                "name": "孫悟空&ベジータ",
                "id": 4025740,
                "links": [
                    "戦闘民族サイヤ人",
                    "歴戦の戦士",
                    "サイヤ人の血",
                    "タフネス戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17113,
                    "atk": 16040,
                    "def": 9019
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "その他",
                        "name": "なし",
                        "effect": "-",
                        "specs": {}
                    }
                ],
                "passive": {
                    "name": "希望をつなげ！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "フィニッシュ発動時以外",
                            "effects": [
                                "攻撃不可"
                            ]
                        },
                        {
                            "title": "基本効果",
                            "effects": [
                                "DEF250%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から4ターンの間",
                            "effects": [
                                "全ての攻撃をガード",
                                "ランダム気玉変化：属性気玉1種→虹"
                            ]
                        },
                        {
                            "title": "取得気玉1個につき",
                            "effects": [
                                "ダメージ軽減率8%[img:up]"
                            ]
                        },
                        {
                            "title": "フィニッシュ発動時",
                            "effects": [
                                "ATK500%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "100%",
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1025750,
        "title": "死闘のクライマックス",
        "name": "孫悟空(GT)&超サイヤ人4ベジータ",
        "yomi": "そんごくう(GT)&すーぱーさいやじん4べじーた",
        "rarity": "SSR",
        "cost": 26,
        "type": "STR",
        "class": "Super",
        "release": "2023/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "願いの力",
            "命運をかけた闘い",
            "最後の切り札",
            "邪悪龍編",
            "純粋サイヤ人",
            "コンビネーション",
            "力戦奮闘",
            "GT HERO",
            "親子の絆",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「願いの力」または「命運をかけた闘い」カテゴリの\n気力+3、HPとATKとDEF130%UP、\n「最後の切り札」または「邪悪龍編」カテゴリを含む場合は\n更にHPとATKとDEF10%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1025750
            },
            {
                "rank": "UR",
                "id": 1025760,
                "medals": [
                    {
                        "name": "超激戦/みんなの願い！奇跡の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1025770,
                "medals": [
                    {
                        "name": "超激戦/みんなの願い！奇跡の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/絶望を呼ぶ邪悪龍/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "GT",
                    "臨戦態勢"
                ],
                "stats": {
                    "hp": 7482,
                    "atk": 8177,
                    "def": 4699
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ライバル同士の共闘",
                        "effect": "1ターンDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "死闘開幕",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]"
                            ]
                        },
                        {
                            "title": "HP50%以上",
                            "effects": [
                                "ATK/DEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目にいるとき",
                            "effects": [
                                "DEF50%[img:up]",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "ATK50%[img:up]",
                                "気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "必殺技を発動するたび",
                            "effects": [
                                "[img:infinity]ダメージ軽減率10%[img:up](最大30%)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "30%"
                    }
                }
            }
        ]
    },
    {
        "id": 1025760,
        "title": "崩壊に立ち向かう闘志",
        "name": "孫悟空(GT)&超サイヤ人4ベジータ",
        "yomi": "そんごくう(GT)&すーぱーさいやじん4べじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "STR",
        "class": "Super",
        "release": "2023/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "願いの力",
            "命運をかけた闘い",
            "最後の切り札",
            "邪悪龍編",
            "純粋サイヤ人",
            "コンビネーション",
            "力戦奮闘",
            "GT HERO",
            "親子の絆",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「願いの力」または「命運をかけた闘い」カテゴリの\n気力+3、HPとATKとDEF150%UP、\n「最後の切り札」または「邪悪龍編」カテゴリを含む場合は\n更にHPとATKとDEF20%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1025750
            },
            {
                "rank": "UR",
                "id": 1025760,
                "medals": [
                    {
                        "name": "超激戦/みんなの願い！奇跡の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1025770,
                "medals": [
                    {
                        "name": "超激戦/みんなの願い！奇跡の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/絶望を呼ぶ邪悪龍/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "GT",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "hp": 8825,
                    "atk": 9110,
                    "def": 5513
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ライバル同士の共闘",
                        "effect": "1ターンDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "サイヤパワー共鳴",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "HP50%以上",
                            "effects": [
                                "ATK/DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目にいるとき",
                            "effects": [
                                "DEF70%[img:up]",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "ATK70%[img:up]",
                                "気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "必殺技を発動するたび",
                            "effects": [
                                "[img:infinity]ダメージ軽減率10%[img:up](最大40%)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "40%"
                    }
                }
            }
        ]
    },
    {
        "id": 1025770,
        "title": "奇跡を起こす最終決戦",
        "name": "孫悟空(GT)&超サイヤ人4ベジータ",
        "yomi": "そんごくう(GT)&すーぱーさいやじん4べじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "STR",
        "class": "Super",
        "release": "2023/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "願いの力",
            "命運をかけた闘い",
            "最後の切り札",
            "邪悪龍編",
            "純粋サイヤ人",
            "コンビネーション",
            "力戦奮闘",
            "GT HERO",
            "親子の絆",
            "つながる希望",
            "再起する力",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「願いの力」または「命運をかけた闘い」カテゴリの\n気力+3、HPとATKとDEF170%UP、\n「最後の切り札」または「邪悪龍編」カテゴリを含む場合は\n更にHPとATKとDEF30%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1025750
            },
            {
                "rank": "UR",
                "id": 1025760,
                "medals": [
                    {
                        "name": "超激戦/みんなの願い！奇跡の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1025770,
                "medals": [
                    {
                        "name": "超激戦/みんなの願い！奇跡の元気玉/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/絶望を呼ぶ邪悪龍/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "GT",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16900,
                    "atk": 15020,
                    "def": 10400
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ライバル同士の共闘",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "悟空とベジータの二段攻撃",
                        "effect": "ATKが大幅上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "決死のファイナルバトル",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]"
                            ]
                        },
                        {
                            "title": "HP50%以上",
                            "effects": [
                                "ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目にいるとき",
                            "effects": [
                                "DEF100%[img:up]",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "ATK100%[img:up]",
                                "気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "気力メーター18以上で攻撃時",
                            "effects": [
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "気力メーター24で攻撃時",
                            "effects": [
                                "必ず必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "必殺技を発動するたび",
                            "effects": [
                                "[img:infinity]気力+1",
                                "[img:infinity]ダメージ軽減率10%[img:up](最大50%)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "2回",
                        "reduce": "50%"
                    }
                },
                "standby": {
                    "name": "スタンバイに移行する",
                    "condition": "自身のHP50%以下で発動可能、\nまたはバトル開始から4ターン目以降、バトル中自身が4回以上攻撃を受けると発動可能 (1回のみ)",
                    "effect": "5ターンの間、スタンバイする",
                    "finish": [
                        {
                            "type": "復活カウンター",
                            "name": "超ウルトラ元気玉",
                            "condition": "自身の復活スキルが発動したとき発動 (1回のみ)",
                            "effect": "攻撃参加中の自身を含む味方をKOした相手に超激烈な威力で反撃"
                        }
                    ]
                }
            },
            {
                "label": "スタンバイ",
                "name": "超サイヤ人ベジータ(GT)",
                "id": 4025780,
                "links": [
                    "戦闘民族サイヤ人",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "GT",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16900,
                    "atk": 15020,
                    "def": 10400
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "悟空の意志を受け継ぐ闘い",
                        "effect": "1ターンATKが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "地球を守るサイヤの誇り",
                        "effect": "1ターンATKが大幅上昇し、相手に超極大ダメージを与える\n&1ターン超系の仲間ATK40%UP",
                        "specs": {
                            "atk_up": "40%"
                        }
                    }
                ],
                "passive": {
                    "name": "奇跡を起こせ！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK250%[img:up]",
                                "味方全員の気力+8、ATK80%[img:up]"
                            ]
                        },
                        {
                            "title": "HP50%以上",
                            "effects": [
                                "DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが全回復し復活する"
                            ]
                        },
                        {
                            "title": "フィニッシュ発動時",
                            "effects": [
                                "ATK39%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "revival": true
                    }
                }
            }
        ]
    },
    {
        "id": 1027960,
        "title": "圧巻のフュージョン戦士",
        "name": "超サイヤ人ゴジータ",
        "yomi": "すーぱーさいやじんごじーた",
        "rarity": "SSR",
        "cost": 26,
        "type": "PHY",
        "class": "Super",
        "release": "2024/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "劇場版HERO",
            "フュージョン",
            "超サイヤ人",
            "最後の切り札",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "超HERO",
            "地球を守りし英雄",
            "高速戦闘"
        ],
        "leaderSkill": "「劇場版HERO」カテゴリの\n気力+2、HPとATKとDEF150%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1027960
            },
            {
                "rank": "UR",
                "id": 1027970,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/そびえ立つ最大の敵/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1027980,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/激闘で紡がれたサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "短期決戦",
                    "合体戦士"
                ],
                "stats": {
                    "hp": 7570,
                    "atk": 7893,
                    "def": 5009
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "メトロアタック",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "ゴジータの自信",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF100%[img:up]",
                                "全属性に効果抜群で攻撃",
                                "属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個以上",
                            "effects": [
                                "必ず追加攻撃し高確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1027970,
        "title": "泰然たる強者",
        "name": "超サイヤ人ゴジータ",
        "yomi": "すーぱーさいやじんごじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "PHY",
        "class": "Super",
        "release": "2024/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "劇場版HERO",
            "フュージョン",
            "超サイヤ人",
            "最後の切り札",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "超HERO",
            "地球を守りし英雄",
            "高速戦闘"
        ],
        "leaderSkill": "「劇場版HERO」カテゴリの\n気力+3、HPとATKとDEF170%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1027960
            },
            {
                "rank": "UR",
                "id": 1027970,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/そびえ立つ最大の敵/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1027980,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/激闘で紡がれたサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "短期決戦",
                    "合体戦士",
                    "超激戦"
                ],
                "stats": {
                    "hp": 8931,
                    "atk": 8770,
                    "def": 5884
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "メトロアタック",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "ゴジータの気合い",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF120%[img:up]",
                                "全属性に効果抜群で攻撃",
                                "属性気玉取得時の気力上昇量+1",
                                "必ず追加攻撃し高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK/DEF80%[img:up]"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個以上",
                            "effects": [
                                "必ず追加攻撃し高確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "2回",
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1027980,
        "title": "あふれる闘気の乱反射",
        "name": "超サイヤ人ゴジータ",
        "yomi": "すーぱーさいやじんごじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "PHY",
        "class": "Super",
        "release": "2024/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "劇場版HERO",
            "フュージョン",
            "超サイヤ人",
            "最後の切り札",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "超HERO",
            "神次元",
            "変身強化",
            "超サイヤ人を超えた力",
            "地球を守りし英雄",
            "高速戦闘"
        ],
        "leaderSkill": "「劇場版HERO」カテゴリの\n気力+3、HPとATKとDEF200%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1027960
            },
            {
                "rank": "UR",
                "id": 1027970,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/そびえ立つ最大の敵/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1027980,
                "medals": [
                    {
                        "name": "超激戦/全てを照らす最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/激闘で紡がれたサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "短期決戦",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17113,
                    "atk": 14340,
                    "def": 11144
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "メトロアタック",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "スターダストフォール",
                        "effect": "DEFが上昇、1ターンATKが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "ゴジータが放つ光",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF154%[img:up]",
                                "全属性に効果抜群で攻撃",
                                "ランダム気玉変化：体を除く属性気玉1種→虹",
                                "属性気玉取得時の気力上昇量+1",
                                "虹気玉取得時の気力上昇量+2",
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個以上",
                            "effects": [
                                "必ず必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "2回",
                        "guard": true,
                        "effective": true
                    }
                },
                "active": {
                    "name": "変身",
                    "condition": "登場から4ターン目以降発動可能(1回のみ)",
                    "effect": "変身する"
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSSゴジータ",
                "id": 4027990,
                "links": [
                    "神戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "短期決戦",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17113,
                    "atk": 14340,
                    "def": 11144
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ゴッドメテオストライク",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "エクシードブレイザー",
                        "effect": "4ターンATKが超大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%"
                        }
                    }
                ],
                "passive": {
                    "name": "ゴジータの青き光",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+3、ATK/DEF200%[img:up]",
                                "全属性に効果抜群で攻撃",
                                "気玉取得時の気力上昇量+2",
                                "ランダム気玉変化：体を除く属性気玉1種→虹",
                                "必ず必殺技が追加発動",
                                "超高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "登場から4ターンの間",
                            "effects": [
                                "自身の攻撃参加ターン開始時にHP54%回復"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個以上",
                            "effects": [
                                "必ず必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "回避するたび",
                            "effects": [
                                "[img:infinity]会心率20%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の気弾系必殺技を受けるとき",
                            "effects": [
                                "超高確率で無効化し、超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2回",
                        "dodge": "70%",
                        "effective": true,
                        "counter": true
                    }
                },
                "active": {
                    "name": "オレにどこまでついてこれるかな？",
                    "condition": "次の攻撃参加ターンから発動可能 (1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与える\n&1ターンの間、敵の攻撃を自身に集中させ回避する",
                    "specs": {
                        "atk_up": "100%",
                        "dodge": "100%",
                        "target": true
                    }
                }
            }
        ]
    },
    {
        "id": 1028000,
        "title": "混沌の中で覚醒した戦士",
        "name": "超サイヤ人ブロリー",
        "yomi": "すーぱーさいやじんぶろりー",
        "rarity": "SSR",
        "cost": 26,
        "type": "AGL",
        "class": "Extreme",
        "release": "2024/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超BOSS",
            "変身強化",
            "フルパワー",
            "怒り爆発",
            "劇場版BOSS",
            "純粋サイヤ人",
            "超サイヤ人",
            "奇跡の覚醒",
            "天才戦士",
            "制御不能の力"
        ],
        "leaderSkill": "「超BOSS」または「変身強化」または「フルパワー」カテゴリの\n気力+2、HPとATKとDEF130%UP、\n「怒り爆発」または「劇場版BOSS」カテゴリを含む場合は\n更にHPとATKとDEF10%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1028000
            },
            {
                "rank": "UR",
                "id": 1028010,
                "medals": [
                    {
                        "name": "超激戦/そびえ立つ最大の敵/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1028020,
                "medals": [
                    {
                        "name": "超激戦/そびえ立つ最大の敵/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/そびえ立つ最大の敵/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "超サイヤ人",
                    "バーサーカー",
                    "驚異的なスピード",
                    "臨戦態勢"
                ],
                "stats": {
                    "hp": 6242,
                    "atk": 8779,
                    "def": 4567
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ギガンティックインパクト",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "激化する戦況",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF130%[img:up]",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK30%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃すると",
                            "effects": [
                                "気力+1",
                                "高確率で必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃すると",
                            "effects": [
                                "気力+3",
                                "必ず必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "2回",
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1028010,
        "title": "壮烈なる猛者",
        "name": "超サイヤ人ブロリー",
        "yomi": "すーぱーさいやじんぶろりー",
        "rarity": "UR",
        "cost": 58,
        "type": "AGL",
        "class": "Extreme",
        "release": "2024/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超BOSS",
            "変身強化",
            "フルパワー",
            "怒り爆発",
            "劇場版BOSS",
            "純粋サイヤ人",
            "超サイヤ人",
            "奇跡の覚醒",
            "天才戦士",
            "制御不能の力"
        ],
        "leaderSkill": "「超BOSS」または「変身強化」または「フルパワー」カテゴリの\n気力+3、HPとATKとDEF150%UP、\n「怒り爆発」または「劇場版BOSS」カテゴリを含む場合は\n更にHPとATKとDEF20%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1028000
            },
            {
                "rank": "UR",
                "id": 1028010,
                "medals": [
                    {
                        "name": "超激戦/そびえ立つ最大の敵/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1028020,
                "medals": [
                    {
                        "name": "超激戦/そびえ立つ最大の敵/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/そびえ立つ最大の敵/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "超サイヤ人",
                    "バーサーカー",
                    "驚異的なスピード",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "hp": 7338,
                    "atk": 9833,
                    "def": 5353
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ギガンティックインパクト",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "激化する怒り",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF140%[img:up]",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃すると",
                            "effects": [
                                "気力+2",
                                "高確率で必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃すると",
                            "effects": [
                                "気力+4",
                                "必ず必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "2回",
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1028020,
        "title": "高まる戦意の大爆発",
        "name": "超サイヤ人ブロリー",
        "yomi": "すーぱーさいやじんぶろりー",
        "rarity": "LR",
        "cost": 77,
        "type": "AGL",
        "class": "Extreme",
        "release": "2024/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超BOSS",
            "変身強化",
            "フルパワー",
            "怒り爆発",
            "劇場版BOSS",
            "純粋サイヤ人",
            "超サイヤ人",
            "奇跡の覚醒",
            "天才戦士",
            "超サイヤ人を超えた力",
            "制御不能の力"
        ],
        "leaderSkill": "「超BOSS」または「変身強化」または「フルパワー」カテゴリの\n気力+3、HPとATKとDEF170%UP、\n「怒り爆発」または「劇場版BOSS」カテゴリを含む場合は\n更にHPとATKとDEF30%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1028000
            },
            {
                "rank": "UR",
                "id": 1028010,
                "medals": [
                    {
                        "name": "超激戦/そびえ立つ最大の敵/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1028020,
                "medals": [
                    {
                        "name": "超激戦/そびえ立つ最大の敵/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/そびえ立つ最大の敵/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "超サイヤ人",
                    "バーサーカー",
                    "驚異的なスピード",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 13925,
                    "atk": 16465,
                    "def": 10081
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ギガンティックインパクト",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "マッシブブラスター",
                        "effect": "ATKが大幅上昇、4ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "激化する戦闘力",
                    "intro": {
                        "condition": "自身の登場時、登場時演出が発動",
                        "effect": "[img:one_time]4ターンの間、気力+5、ATK/DEF100%[img:up]\n[img:one_time]4ターンの間、必ず必殺技が追加発動"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "全ての攻撃をガード",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK50%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター18以上で攻撃時",
                            "effects": [
                                "DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃すると",
                            "effects": [
                                "気力+2",
                                "必ず必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃すると",
                            "effects": [
                                "気力+6",
                                "必ず必殺技が追加発動し高確率で更に必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "4回",
                        "guard": true
                    }
                },
                "active": {
                    "name": "変身",
                    "condition": "登場から5ターン目以降発動可能(1回のみ)",
                    "effect": "変身する\n&4ターンの間 「異次元空間」フィールドを生成し、極系の味方全員の気力+4"
                },
                "field": {
                    "name": "異次元空間",
                    "icon": "field_Button",
                    "condition": "アクティブスキル発動時",
                    "effect": "極系の敵と味方全員のATKとDEF10%UP\n「怒り爆発」または「劇場版BOSS」カテゴリを含む場合は\n更にATKとDEF10%UP\n&超系の敵と味方全員の受けるダメージ10%UP"
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ブロリー(フルパワー)",
                "id": 4028030,
                "links": [
                    "天才",
                    "超サイヤ人",
                    "バーサーカー",
                    "驚異的なスピード",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 13925,
                    "atk": 16465,
                    "def": 10081
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "アウェイキングテンペスト",
                        "effect": "1ターンATKとDEFが上昇し、敵全体に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ギガンティックカタストロフィ",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "激化する闘争本能",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+6、ATK/DEF300%[img:up]",
                                "全ての攻撃をガード",
                                "気玉取得時の気力上昇量+1",
                                "必ず必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "「異次元空間」フィールドが生成されている間",
                            "effects": [
                                "攻撃するまでダメージ軽減率26%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK50%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "会心率26%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター18以上で攻撃時",
                            "effects": [
                                "必ず必殺技が追加発動",
                                "会心率26%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター24で攻撃時",
                            "effects": [
                                "必ず必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "52%",
                        "add": "3回",
                        "reduce": "26%",
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1028300,
        "title": "目醒めた野獣",
        "name": "孫悟飯(ビースト)",
        "yomi": "そんごはん(びーすと)",
        "rarity": "SSR",
        "cost": 26,
        "type": "STR",
        "class": "Super",
        "release": "2024/02/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超HERO",
            "師弟の絆",
            "奇跡の覚醒",
            "託された意志",
            "劇場版HERO",
            "混血サイヤ人",
            "フルパワー",
            "孫悟空の系譜",
            "兄弟の絆",
            "怒り爆発",
            "つながる希望",
            "命運をかけた闘い",
            "親子の絆",
            "地球育ちの戦士",
            "魔の力",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「超HERO」または「師弟の絆」または「奇跡の覚醒」カテゴリの\n気力+2、HPとATKとDEF130%UP、\n「託された意志」または「劇場版HERO」カテゴリを含む場合は\n更にHPとATKとDEF10%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1028300
            },
            {
                "rank": "UR",
                "id": 1028310,
                "medals": [
                    {
                        "name": "超激戦/究極を凌駕する覚醒/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1028320,
                "medals": [
                    {
                        "name": "超激戦/究極を凌駕する覚醒/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/究極を凌駕する覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "孫一族",
                    "戦闘民族サイヤ人",
                    "インファイター",
                    "驚異的なスピード",
                    "臨戦態勢"
                ],
                "stats": {
                    "hp": 9076,
                    "atk": 7574,
                    "def": 4655
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "魔旋連撃",
                        "effect": "1ターンATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "獣覚醒",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF100%[img:up]",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK30%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けると",
                            "effects": [
                                "必ず追加攻撃し高確率で必殺技が発動",
                                "自身を除く味方全員の気力+1"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "そのターン中、ATK/会心率10%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1028310,
        "title": "巨悪を砕く牙",
        "name": "孫悟飯(ビースト)",
        "yomi": "そんごはん(びーすと)",
        "rarity": "UR",
        "cost": 58,
        "type": "STR",
        "class": "Super",
        "release": "2024/02/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超HERO",
            "師弟の絆",
            "奇跡の覚醒",
            "託された意志",
            "劇場版HERO",
            "混血サイヤ人",
            "フルパワー",
            "孫悟空の系譜",
            "兄弟の絆",
            "怒り爆発",
            "つながる希望",
            "命運をかけた闘い",
            "親子の絆",
            "地球育ちの戦士",
            "魔の力",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「超HERO」または「師弟の絆」または「奇跡の覚醒」カテゴリの\n気力+3、HPとATKとDEF150%UP、\n「託された意志」または「劇場版HERO」カテゴリを含む場合は\n更にHPとATKとDEF20%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1028300
            },
            {
                "rank": "UR",
                "id": 1028310,
                "medals": [
                    {
                        "name": "超激戦/究極を凌駕する覚醒/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1028320,
                "medals": [
                    {
                        "name": "超激戦/究極を凌駕する覚醒/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/究極を凌駕する覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "孫一族",
                    "戦闘民族サイヤ人",
                    "インファイター",
                    "驚異的なスピード",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "hp": 10738,
                    "atk": 8388,
                    "def": 5459
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "魔旋連撃",
                        "effect": "1ターンATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "野獣の力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF120%[img:up]",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "DEF60%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けると",
                            "effects": [
                                "必ず追加攻撃し超高確率で必殺技が発動",
                                "自身を除く味方全員の気力+2"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "そのターン中、ATK/会心率15%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1028320,
        "title": "究極を超えた新たな力",
        "name": "孫悟飯(ビースト)",
        "yomi": "そんごはん(びーすと)",
        "rarity": "LR",
        "cost": 77,
        "type": "STR",
        "class": "Super",
        "release": "2024/02/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超HERO",
            "師弟の絆",
            "奇跡の覚醒",
            "託された意志",
            "劇場版HERO",
            "混血サイヤ人",
            "フルパワー",
            "孫悟空の系譜",
            "兄弟の絆",
            "怒り爆発",
            "つながる希望",
            "命運をかけた闘い",
            "親子の絆",
            "地球育ちの戦士",
            "魔の力",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「超HERO」または「師弟の絆」または「奇跡の覚醒」カテゴリの\n気力+3、HPとATKとDEF170%UP、\n「託された意志」または「劇場版HERO」カテゴリを含む場合は\n更にHPとATKとDEF30%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1028300
            },
            {
                "rank": "UR",
                "id": 1028310,
                "medals": [
                    {
                        "name": "超激戦/究極を凌駕する覚醒/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1028320,
                "medals": [
                    {
                        "name": "超激戦/究極を凌駕する覚醒/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/究極を凌駕する覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "孫一族",
                    "戦闘民族サイヤ人",
                    "インファイター",
                    "驚異的なスピード",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16475,
                    "atk": 15275,
                    "def": 10294
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "斬空魔閃",
                        "effect": "1ターンATKが大幅上昇、DEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "雷靭烈波",
                        "effect": "ATKが大幅上昇、4ターンDEFが上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "師弟魔貫光殺砲",
                        "effect": "ATKが大幅上昇、4ターンDEFが上昇し、相手に超極大ダメージを与え、1ターン仲間の会心率20%UP\n&敵の行動をそのターンのみ1回無効化する\n[発動条件:名称に「ピッコロ」(大魔王、魔人ブウを除く)を含むキャラが攻撃参加中の味方にいるとき気力18以上で発動]",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "30%",
                            "crit": "20%",
                            "action_break": true
                        }
                    }
                ],
                "passive": {
                    "name": "解き放たれた獣",
                    "intro": {
                        "condition": "自身の登場時、登場時演出が発動",
                        "effect": "5ターンの間、気力+8、会心率/ダメージ軽減率40%[img:up]"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+3",
                                "ATK/DEF250%[img:up]",
                                "全ての攻撃をガード",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK50%[img:up]",
                                "気力メーター24の場合、会心率20%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "DEF80%[img:up]",
                                "気力メーター24の場合、ダメージ軽減率20%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けると",
                            "effects": [
                                "必殺技が追加発動",
                                "自身を除く味方全員の気力+3"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)",
                                "そのターン中、ATK/会心率20%[img:up]"
                            ]
                        },
                        {
                            "title": "バトル中5回以上攻撃するか8回以上攻撃を受けると",
                            "effects": [
                                "次の攻撃参加ターン以降、会心率/ダメージ軽減率20%[img:up]、味方全員の気力+2"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2回",
                        "reduce": "80%",
                        "guard": true
                    }
                },
                "active": {
                    "name": "悟飯の自信",
                    "condition": "敵の攻撃を受けると、 次の攻撃参加ターンから発動可能 (1回のみ)",
                    "effect": "1ターン自身の気力+24、 DEF158%UPし、 敵の攻撃を自身に集中させ、 必ず会心が発動",
                    "specs": {
                        "def_up": "158%",
                        "target": true,
                        "crit": "100%"
                    }
                }
            }
        ]
    },
    {
        "id": 1028350,
        "title": "正義を宿した人造人間",
        "name": "ガンマ1号&ガンマ2号",
        "yomi": "がんま1ごう&がんま2ごう",
        "rarity": "SSR",
        "cost": 26,
        "type": "INT",
        "class": "Super",
        "release": "2024/02/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超HERO",
            "人造人間",
            "コンビネーション",
            "劇場版HERO",
            "人工生命体",
            "好敵手",
            "スペシャルポーズ",
            "正義の味方",
            "高速戦闘",
            "任務遂行"
        ],
        "leaderSkill": "「超HERO」カテゴリの\n気力+2、HPとATKとDEF150%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1028350
            },
            {
                "rank": "UR",
                "id": 1028360,
                "medals": [
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ1号の任務-/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    },
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ2号の自信-/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    },
                    {
                        "name": "超激戦/秘めたる力の極限解放/1",
                        "bg": "超激戦/bg",
                        "count": 7
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1028370,
                "medals": [
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ1号の任務-/1",
                        "bg": "超激戦/bg",
                        "count": 28
                    },
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ2号の自信-/1",
                        "bg": "超激戦/bg",
                        "count": 28
                    },
                    {
                        "name": "超激戦/究極を凌駕する覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1028360,
        "title": "飛翔するスーパーヒーロー",
        "name": "ガンマ1号&ガンマ2号",
        "yomi": "がんま1ごう&がんま2ごう",
        "rarity": "UR",
        "cost": 50,
        "type": "INT",
        "class": "Super",
        "release": "2024/02/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超HERO",
            "人造人間",
            "コンビネーション",
            "劇場版HERO",
            "人工生命体",
            "好敵手",
            "スペシャルポーズ",
            "正義の味方",
            "高速戦闘",
            "任務遂行"
        ],
        "leaderSkill": "「超HERO」カテゴリの\n気力+3、HPとATKとDEF170%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1028350
            },
            {
                "rank": "UR",
                "id": 1028360,
                "medals": [
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ1号の任務-/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    },
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ2号の自信-/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    },
                    {
                        "name": "超激戦/秘めたる力の極限解放/1",
                        "bg": "超激戦/bg",
                        "count": 7
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1028370,
                "medals": [
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ1号の任務-/1",
                        "bg": "超激戦/bg",
                        "count": 28
                    },
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ2号の自信-/1",
                        "bg": "超激戦/bg",
                        "count": 28
                    },
                    {
                        "name": "超激戦/究極を凌駕する覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "人造人間",
                    "RR軍",
                    "驚異的なスピード",
                    "正義のヒーロー",
                    "決めポーズ"
                ],
                "stats": {
                    "hp": 6950,
                    "atk": 8354,
                    "def": 4744
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ビクトリーコンビネーション",
                        "effect": "1ターンDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "スーパーヒーローの出番",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF100%[img:up]",
                                "「超HERO」または「コンビネーション」または「正義の味方」カテゴリの味方全員の気力+1、ATK/DEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "取得知気玉1個につき",
                            "effects": [
                                "会心率10%[img:up]",
                                "必ず1回追加攻撃し中確率で必殺技が発動(ターン中最大2回)"
                            ]
                        },
                        {
                            "title": "バトル中3回以上攻撃すると",
                            "effects": [
                                "[img:infinity]ATK/DEF30%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "50%",
                        "add": "2回"
                    }
                }
            },
            {
                "label": "通常",
                "name": "",
                "links": [
                    "人造人間",
                    "RR軍",
                    "驚異的なスピード",
                    "正義のヒーロー",
                    "決めポーズ",
                    "超激戦"
                ],
                "stats": {
                    "hp": 8188,
                    "atk": 9323,
                    "def": 5566
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ビクトリーコンビネーション",
                        "effect": "1ターンDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "スーパーヒーローの連携",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF120%[img:up]",
                                "「超HERO」または「コンビネーション」または「正義の味方」カテゴリの味方全員の気力+2、ATK/DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "取得知気玉1個につき",
                            "effects": [
                                "会心率20%[img:up]",
                                "必ず1回追加攻撃し高確率で必殺技が発動(ターン中最大2回)"
                            ]
                        },
                        {
                            "title": "バトル中3回以上攻撃すると",
                            "effects": [
                                "[img:infinity]ATK/DEF40%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2回"
                    }
                }
            }
        ]
    },
    {
        "id": 1028370,
        "title": "燦然と輝く英雄",
        "name": "ガンマ1号&ガンマ2号/ガンマ1号",
        "yomi": "がんま1ごう&がんま2ごう/がんま1ごう",
        "rarity": "LR",
        "cost": 77,
        "type": "INT",
        "class": "Super",
        "release": "2024/02/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "超HERO",
            "人造人間",
            "コンビネーション",
            "劇場版HERO",
            "人工生命体",
            "好敵手",
            "スペシャルポーズ",
            "正義の味方",
            "高速戦闘",
            "託された意志",
            "力戦奮闘",
            "つながる希望",
            "最後の切り札",
            "フルパワー",
            "命運をかけた闘い",
            "任務遂行"
        ],
        "leaderSkill": "「超HERO」カテゴリの\n気力+3、HPとATKとDEF200%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1028350
            },
            {
                "rank": "UR",
                "id": 1028360,
                "medals": [
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ1号の任務-/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    },
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ2号の自信-/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    },
                    {
                        "name": "超激戦/秘めたる力の極限解放/1",
                        "bg": "超激戦/bg",
                        "count": 7
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1028370,
                "medals": [
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ1号の任務-/1",
                        "bg": "超激戦/bg",
                        "count": 28
                    },
                    {
                        "name": "超激戦/正義のスーパーヒーロー！-ガンマ2号の自信-/1",
                        "bg": "超激戦/bg",
                        "count": 28
                    },
                    {
                        "name": "超激戦/究極を凌駕する覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "人造人間",
                    "RR軍",
                    "驚異的なスピード",
                    "正義のヒーロー",
                    "決めポーズ",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 15625,
                    "atk": 15445,
                    "def": 10506
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ビクトリーコンビネーション",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "物理",
                        "name": "スーパーガンマブラスト",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "スーパーヒーローの力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+3、ATK/DEF125%[img:up]",
                                "「超HERO」または「コンビネーション」または「正義の味方」カテゴリの味方全員の気力+3、ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "HP30%以上",
                            "effects": [
                                "気力+3、ATK/DEF125%[img:up]"
                            ]
                        },
                        {
                            "title": "取得知気玉1個につき",
                            "effects": [
                                "会心率30%[img:up]",
                                "必ず1回必殺技が追加発動(ターン中最大2回)"
                            ]
                        },
                        {
                            "title": "取得速または力気玉1個につき",
                            "effects": [
                                "会心率12%[img:up]",
                                "必ず1回追加攻撃し超高確率で必殺技が発動(ターン中最大2回)"
                            ]
                        },
                        {
                            "title": "バトル中3回以上攻撃すると",
                            "effects": [
                                "[img:infinity]ATK/DEF50%[img:up]",
                                "[img:infinity]ダメージ軽減率30%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2回",
                        "reduce": "30%"
                    }
                },
                "standby": {
                    "name": "スタンバイに移行する",
                    "condition": "自身のHP70%以下で発動可能、またはバトル中自身が3回以上攻撃をすると発動可能(1回のみ)",
                    "effect": "4ターンの間スタンバイしチームの味方が攻撃するたびチャージカウントが1増加する",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "決死の全エネルギー放出",
                            "condition": "チャージカウント1以上で発動可能(1回のみ)",
                            "effect": "チャージカウント1つにつき一時的にATK100%UPし、相手に超究極ダメージを与え、1ターン気絶させる\n&ガンマ1号と交代する"
                        }
                    ]
                }
            },
            {
                "label": "スタンバイ",
                "name": "",
                "id": 4028380,
                "links": [
                    "人造人間",
                    "RR軍",
                    "驚異的なスピード",
                    "正義のヒーロー",
                    "決めポーズ",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 15625,
                    "atk": 15445,
                    "def": 10506
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ヒロイックアサルト",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "スーパーガンマブラスト",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与える\n&1ターン超系の仲間DEF50%UP",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "それぞれの覚悟",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+6、ATK/DEF250%[img:up]",
                                "ダメージ軽減率50%[img:up]",
                                "「超HERO」または「コンビネーション」または「正義の味方」カテゴリの味方全員の気力+3、ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "取得知気玉1個につき",
                            "effects": [
                                "会心率30%[img:up]",
                                "必ず1回必殺技が追加発動(ターン中最大2回)"
                            ]
                        },
                        {
                            "title": "取得速または力気玉1個につき",
                            "effects": [
                                "会心率12%[img:up]",
                                "必ず1回追加攻撃し超高確率で必殺技が発動(ターン中最大2回)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2回",
                        "reduce": "50%"
                    }
                }
            },
            {
                "label": "交代",
                "name": "ガンマ1号",
                "id": 4028390,
                "links": [
                    "人造人間",
                    "RR軍",
                    "驚異的なスピード",
                    "正義のヒーロー",
                    "決めポーズ",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 15625,
                    "atk": 15445,
                    "def": 10506
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ヒロイックアサルト",
                        "effect": "1ターンATKとDEFが上昇し相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "スーパーガンマブラスト",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与える\n&2ターン超系の仲間DEF50%UP",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "託された正義",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+3、ATK/DEF150%[img:up]",
                                "ダメージ軽減率15%[img:up]",
                                "「超HERO」または「コンビネーション」または「正義の味方」カテゴリの味方全員の気力+3、ATK/DEF50%[img:up]",
                                "必ず必殺技が追加発動",
                                "気玉変化：速→知"
                            ]
                        },
                        {
                            "title": "HP30%以上",
                            "effects": [
                                "気力+3",
                                "ATK/DEF150%[img:up]",
                                "ダメージ軽減率15%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "取得知または力気玉1個につき",
                            "effects": [
                                "会心率20%[img:up](最大100%)",
                                "ダメージ軽減率10%[img:up](最大50%)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "reduce": "80%"
                    }
                }
            }
        ]
    },
    {
        "id": 1030320,
        "title": "仲間の心を取り戻す闘い",
        "name": "超サイヤ人3孫悟空(GT)",
        "yomi": "すーぱーさいやじん3そんごくう(GT)",
        "rarity": "SSR",
        "cost": 26,
        "type": "AGL",
        "class": "Super",
        "release": "2025/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "大猿パワー",
            "超サイヤ人3",
            "純粋サイヤ人",
            "孫悟空の系譜",
            "亀仙流",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "リベンジ"
        ],
        "leaderSkill": "「大猿パワー」カテゴリの\n気力+2、HPとATKとDEF160%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030320
            },
            {
                "rank": "UR",
                "id": 1030330,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030340,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/超進化！銀河を駆けるサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "孫一族",
                    "GT"
                ],
                "stats": {
                    "hp": 7482,
                    "atk": 8141,
                    "def": 4744
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "超龍撃拳",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "何度でも闘うぞ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF100%[img:up]",
                                "「超サイヤ人を超えた力」カテゴリの味方全員のDEF30%[img:up]",
                                "速気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "気力メーター3につき攻撃時",
                            "effects": [
                                "ATK/DEF20%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "dodge": "50%"
                    }
                }
            }
        ]
    },
    {
        "id": 1030330,
        "title": "意気衝天の猛反撃",
        "name": "超サイヤ人3孫悟空(GT)",
        "yomi": "すーぱーさいやじん3そんごくう(GT)",
        "rarity": "UR",
        "cost": 50,
        "type": "AGL",
        "class": "Super",
        "release": "2025/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "大猿パワー",
            "超サイヤ人3",
            "純粋サイヤ人",
            "孫悟空の系譜",
            "亀仙流",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "リベンジ"
        ],
        "leaderSkill": "「大猿パワー」カテゴリの\n気力+3、HPとATKとDEF190%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030320
            },
            {
                "rank": "UR",
                "id": 1030330,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030340,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/超進化！銀河を駆けるサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "孫一族",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "hp": 8825,
                    "atk": 9068,
                    "def": 5566
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "超龍撃拳",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "今度は負けねえ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF150%[img:up]",
                                "「超サイヤ人を超えた力」カテゴリの味方全員のDEF40%[img:up]",
                                "速気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "登場から4ターンの間",
                            "effects": [
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "気力メーター3につき攻撃時",
                            "effects": [
                                "ATK/DEF20%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "dodge": "50%"
                    }
                }
            }
        ]
    },
    {
        "id": 1030340,
        "title": "究極サイヤパワーの咆哮",
        "name": "超サイヤ人3孫悟空(GT)(黄金大猿)",
        "yomi": "すーぱーさいやじん3そんごくう(GT)(おうごんおおざる)",
        "rarity": "LR",
        "cost": 77,
        "type": "AGL",
        "class": "Super",
        "release": "2025/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "大猿パワー",
            "超サイヤ人3",
            "純粋サイヤ人",
            "孫悟空の系譜",
            "亀仙流",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "巨大化",
            "変身強化",
            "かめはめ波",
            "力戦奮闘",
            "奇跡の覚醒",
            "託された意志",
            "命運をかけた闘い",
            "願いの力",
            "制御不能の力",
            "地球を守りし英雄",
            "リベンジ"
        ],
        "leaderSkill": "「大猿パワー」カテゴリの\n気力+4、HPとATKとDEF220%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030320
            },
            {
                "rank": "UR",
                "id": 1030330,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030340,
                "medals": [
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/真紅に燃える最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/超進化！銀河を駆けるサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "かめはめ波",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16900,
                    "atk": 14935,
                    "def": 10506
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "超龍撃拳",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "シッポの復活！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+3、ATK/DEF200%[img:up]",
                                "高確率で会心が発動",
                                "速気玉取得時の気力上昇量+2",
                                "速気玉以外の気玉取得時の気力上昇量+1",
                                "「超サイヤ人を超えた力」カテゴリの味方全員のDEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から4ターンの間",
                            "effects": [
                                "超高確率で敵の攻撃を回避",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "気力メーター3につき攻撃時",
                            "effects": [
                                "ATK/DEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター24で攻撃時",
                            "effects": [
                                "必ず会心が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "dodge": "70%",
                        "guard": true
                    }
                },
                "active": {
                    "name": "大猿化",
                    "condition": "HP70%以下のとき発動可能\nまたはバトル開始から5ターン目以降発動可能(1回のみ)",
                    "effect": "1ターンの間、大猿化する",
                    "specs": {}
                }
            },
            {
                "label": "大猿化",
                "name": "超サイヤ人3孫悟空(GT)(黄金大猿)",
                "id": 4030340,
                "links": [],
                "stats": {
                    "hp": 16900,
                    "atk": 60000,
                    "def": 10506
                },
                "superAttacks": [
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "その他",
                        "name": "超火炎砲",
                        "effect": "一時的にATKが超大幅上昇し、相手に破壊的ダメージを与える",
                        "specs": {
                            "atk_up": "100%"
                        }
                    }
                ],
                "passive": {
                    "name": "黄金大猿大暴れ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK300%[img:up]",
                                "気玉取得時の気力上昇量+2",
                                "必ず会心が発動"
                            ]
                        },
                        {
                            "title": "大猿化終了時",
                            "effects": [
                                "超サイヤ人4孫悟空に変身する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%"
                    }
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人4孫悟空",
                "id": 4030350,
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "かめはめ波",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16900,
                    "atk": 14935,
                    "def": 10506
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "龍撃円舞",
                        "effect": "ATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "20%",
                            "def_up": "20%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "怒りのかめはめ波",
                        "effect": "ATKとDEFが上昇し、相手に超極大ダメージを与え、2ターン自身を除く仲間ATKとDEF44%UP",
                        "specs": {
                            "atk_up": "20%",
                            "def_up": "20%"
                        }
                    }
                ],
                "passive": {
                    "name": "新たな姿と力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+4、ATK/DEF200%[img:up]",
                                "気玉取得時の気力上昇量+2",
                                "「超サイヤ人を超えた力」または「大猿パワー」カテゴリの味方全員のDEF70%[img:up]、ダメージ軽減率10%[img:up]",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "登場から4ターンの間",
                            "effects": [
                                "必ず会心が発動"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター4につき攻撃時",
                            "effects": [
                                "ATK/DEF44%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター24で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "ターン開始時にHP44%以下",
                            "effects": [
                                "HP44%回復"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1、会心率20%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "[img:infinity]気力+1、会心率20%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "reduce": "10%",
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1030370,
        "title": "闘志の覚醒",
        "name": "超サイヤ人2孫悟飯(少年期)",
        "yomi": "すーぱーさいやじん2そんごはん(しょうねんき)",
        "rarity": "SSR",
        "cost": 26,
        "type": "PHY",
        "class": "Super",
        "release": "2025/02/15",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "フルパワー",
            "混血サイヤ人",
            "孫悟空の系譜",
            "少年・少女",
            "人造人間/セル編",
            "師弟の絆",
            "超サイヤ人2",
            "怒り爆発",
            "力戦奮闘",
            "奇跡の覚醒",
            "託された意志",
            "命運をかけた闘い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "大会出場者",
            "魔の力",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「フルパワー」カテゴリの\n気力+2、HPとATKとDEF160%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030370
            },
            {
                "rank": "UR",
                "id": 1030380,
                "medals": [
                    {
                        "name": "超激戦/最強を超える超絶覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030390,
                "medals": [
                    {
                        "name": "超激戦/最強を超える超絶覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/恐怖のセルゲーム/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/恐怖のセルゲーム/2",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "戦闘民族サイヤ人",
                    "尊敬の眼差し",
                    "臨戦態勢",
                    "驚異的なスピード"
                ],
                "stats": {
                    "hp": 8013,
                    "atk": 8460,
                    "def": 4079
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "龍翔破",
                        "effect": "1ターンATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "悟飯に集まる期待",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2",
                                "ATK/DEF100%[img:up]",
                                "全ての攻撃をガード",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK80%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "DEF80%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1030380,
        "title": "激変する戦況",
        "name": "超サイヤ人2孫悟飯(少年期)",
        "yomi": "すーぱーさいやじん2そんごはん(しょうねんき)",
        "rarity": "UR",
        "cost": 58,
        "type": "PHY",
        "class": "Super",
        "release": "2025/02/15",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "フルパワー",
            "混血サイヤ人",
            "孫悟空の系譜",
            "少年・少女",
            "人造人間/セル編",
            "師弟の絆",
            "超サイヤ人2",
            "怒り爆発",
            "力戦奮闘",
            "奇跡の覚醒",
            "託された意志",
            "命運をかけた闘い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "大会出場者",
            "魔の力",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「フルパワー」カテゴリの\n気力+3、HPとATKとDEF190%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030370
            },
            {
                "rank": "UR",
                "id": 1030380,
                "medals": [
                    {
                        "name": "超激戦/最強を超える超絶覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030390,
                "medals": [
                    {
                        "name": "超激戦/最強を超える超絶覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/恐怖のセルゲーム/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/恐怖のセルゲーム/2",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "戦闘民族サイヤ人",
                    "尊敬の眼差し",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "超激戦"
                ],
                "stats": {
                    "hp": 9463,
                    "atk": 9450,
                    "def": 4769
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "龍翔破",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "悟飯に集まる希望",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+3",
                                "ATK/DEF150%[img:up]",
                                "全ての攻撃をガード",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK100%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "DEF100%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1030390,
        "title": "命運を託された戦士",
        "name": "超サイヤ人2孫悟飯(少年期)",
        "yomi": "すーぱーさいやじん2そんごはん(しょうねんき)",
        "rarity": "LR",
        "cost": 77,
        "type": "PHY",
        "class": "Super",
        "release": "2025/02/15",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "フルパワー",
            "混血サイヤ人",
            "孫悟空の系譜",
            "少年・少女",
            "人造人間/セル編",
            "師弟の絆",
            "超サイヤ人2",
            "怒り爆発",
            "力戦奮闘",
            "奇跡の覚醒",
            "託された意志",
            "命運をかけた闘い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "大会出場者",
            "魔の力",
            "地球を守りし英雄",
            "変身強化",
            "かめはめ波"
        ],
        "leaderSkill": "「フルパワー」カテゴリの\n気力+4、HPとATKとDEF220%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030370
            },
            {
                "rank": "UR",
                "id": 1030380,
                "medals": [
                    {
                        "name": "超激戦/最強を超える超絶覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030390,
                "medals": [
                    {
                        "name": "超激戦/最強を超える超絶覚醒/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/恐怖のセルゲーム/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/恐怖のセルゲーム/2",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "戦闘民族サイヤ人",
                    "かめはめ波",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 18175,
                    "atk": 15700,
                    "def": 8913
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "龍翔破",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与え、DEFを低下させる",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%",
                            "def_down": "40%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "超かめはめ波",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与え、DEFを大幅低下させる",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%",
                            "def_down": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "悟飯に集まる願い",
                    "intro": {
                        "condition": "自身の登場時、チームに自身の他に「フルパワー」または「人造人間/セル編」カテゴリの味方がいるとき登場時演出が発動",
                        "effect": "[img:one_time]4ターンの間、2回必殺技が追加発動、敵の数1体につき更に1回追加攻撃し中確率で必殺技が発動(ターン中最大5回)"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+5",
                                "ATK/DEF258%[img:up]",
                                "全ての攻撃をガード",
                                "ダメージ軽減率20%[img:up]",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK158%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)",
                                "[img:infinity]ATK/DEF10%[img:up](最大80%)"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "DEF158%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から5ターン目以降",
                            "effects": [
                                "・気力メーター18以上で攻撃時にATK158%[img:up]、DEF58%[img:up]",
                                "アクティブスキル発動時または気力メーター24で攻撃時に必ず会心が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "7回",
                        "reduce": "20%",
                        "guard": true
                    }
                },
                "active": {
                    "name": "親子かめはめ波",
                    "condition": "登場から5ターン目以降、自身の他にチームに「かめはめ波」カテゴリの味方がいるとき発動可能\nまたは登場から5ターン目以降、敵が1体で敵のHP89%以下のとき発動可能(1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与える\n&1ターン自身の気力+24、ATK58%UP",
                    "specs": {
                        "atk_up": "100%"
                    }
                }
            }
        ]
    },
    {
        "id": 1030410,
        "title": "この世によみがえる光",
        "name": "超サイヤ人孫悟空",
        "yomi": "すーぱーさいやじんそんごくう",
        "rarity": "SSR",
        "cost": 26,
        "type": "TEQ",
        "class": "Super",
        "release": "2025/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "地球を守りし英雄",
            "融合/合体戦士",
            "純粋サイヤ人",
            "地球育ちの戦士",
            "ポタラ",
            "魔人ブウ編",
            "孫悟空の系譜",
            "超サイヤ人",
            "亀仙流",
            "親友の絆",
            "高速戦闘",
            "かめはめ波",
            "親子の絆"
        ],
        "leaderSkill": "「地球を守りし英雄」または「融合/合体戦士」または「純粋サイヤ人」カテゴリの\n気力+2、HP150%UP、ATKとDEF130%UP、\n「地球育ちの戦士」または「ポタラ」カテゴリを含む場合は\n更にHPとATKとDEF20%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030320
            },
            {
                "rank": "UR",
                "id": 1030330,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030340,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強タッグ-この世編-/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/最強タッグ-この世編-/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "孫一族",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "かめはめ波",
                    "臨戦態勢"
                ],
                "stats": {
                    "hp": 7393,
                    "atk": 8283,
                    "def": 4611
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "光明",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "属性気玉取得時の気力上昇量+1",
                                "「地球を守りし英雄」カテゴリの味方全員のDEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK100%[img:up]",
                                "ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター10以上で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "ダメージ軽減率10%[img:up]",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "reduce": "20%",
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1030420,
        "title": "希望を守り抜く闘い",
        "name": "超サイヤ人孫悟空",
        "yomi": "すーぱーさいやじんそんごくう",
        "rarity": "UR",
        "cost": 58,
        "type": "TEQ",
        "class": "Super",
        "release": "2025/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "地球を守りし英雄",
            "融合/合体戦士",
            "純粋サイヤ人",
            "地球育ちの戦士",
            "ポタラ",
            "魔人ブウ編",
            "孫悟空の系譜",
            "超サイヤ人",
            "亀仙流",
            "親友の絆",
            "高速戦闘",
            "かめはめ波",
            "親子の絆"
        ],
        "leaderSkill": "「地球を守りし英雄」または「融合/合体戦士」または「純粋サイヤ人」カテゴリの\n気力+3、HP170%UP、ATKとDEF150%UP、\n「地球育ちの戦士」または「ポタラ」カテゴリを含む場合は\n更にHPとATKとDEF30%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030410
            },
            {
                "rank": "UR",
                "id": 1030420,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030430,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強タッグ-この世編-/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/最強タッグ-この世編-/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "孫一族",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "かめはめ波",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "hp": 7755,
                    "atk": 8544,
                    "def": 4828
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "燃える命",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "属性気玉取得時の気力上昇量+1",
                                "「地球を守りし英雄」カテゴリの味方全員の気力+1、DEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK150%up",
                                "ダメージ軽減率15%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター10以上で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "ダメージ軽減率15%[img:up]",
                                "必ず追加攻撃し高確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "reduce": "300%",
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1030430,
        "title": "天下無敵の閃光",
        "name": "超サイヤ人孫悟空+超サイヤ人ベジータ(天使)",
        "yomi": "すーぱーさいやじんそんごくう+すーぱーさいやじんべじーた(てんし)",
        "rarity": "LR",
        "cost": 77,
        "type": "TEQ",
        "class": "Super",
        "release": "2025/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "地球を守りし英雄",
            "融合/合体戦士",
            "純粋サイヤ人",
            "地球育ちの戦士",
            "ポタラ",
            "魔人ブウ編",
            "孫悟空の系譜",
            "超サイヤ人",
            "亀仙流",
            "親友の絆",
            "高速戦闘",
            "かめはめ波",
            "親子の絆",
            "復活戦士",
            "ベジータの系譜",
            "好敵手",
            "あの世の戦士",
            "最後の切り札",
            "頭脳戦",
            "天才戦士",
            "時間制限",
            "体得した進化",
            "継承する者"
        ],
        "leaderSkill": "「地球を守りし英雄」または「融合/合体戦士」または「純粋サイヤ人」カテゴリの\n気力+3、HP200%UP、ATKとDEF170%UP、\n「地球育ちの戦士」または「ポタラ」カテゴリを含む場合は\n更にHPとATKとDEF50%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030410
            },
            {
                "rank": "UR",
                "id": 1030420,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030430,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-この世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強タッグ-この世編-/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/最強タッグ-この世編-/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "孫一族",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "かめはめ波",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16688,
                    "atk": 15275,
                    "def": 10188
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "決死の超サイヤ人3",
                        "effect": "ATKが大幅上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "老界王神の計らい",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "属性気玉取得時の気力上昇量+2",
                                "「地球を守りし英雄」または「ポタラ」カテゴリの味方全員の気力+1、DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "ダメージ軽減率50%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK200%[img:up]",
                                "ダメージ軽減率20%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター10以上で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "気力メーター20以上で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "ダメージ軽減率20%[img:up]",
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "バトル開始から4ターン目以降",
                            "effects": [
                                "超サイヤ人ベジータ(天使)と合流し、リバーシブルチェンジ可能になる"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "2回",
                        "reduce": "90%",
                        "effective": true
                    }
                },
                "active": {
                    "name": "合体",
                    "condition": "バトル開始から5ターン目以降発動可能(リバーシブルチェンジ前後でいずれか1回のみ)",
                    "effect": "4ターンの間、ポタラで合体する"
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "0"
            },
            {
                "label": "合体",
                "name": "超ベジット",
                "id": 4030450,
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "神から授かりし力",
                    "合体戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16688,
                    "atk": 15275,
                    "def": 10188
                },
                "superAttacks": [
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "みなぎる闘志のベジット",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]HPが全回復",
                                "ATK/DEF300%[img:up]",
                                "属性気玉取得時の気力上昇量+3",
                                "全ての攻撃をガード",
                                "ダメージ軽減率60%[img:up]",
                                "超必殺技が追加発動",
                                "「地球を守りし英雄」または「ポタラ」カテゴリの味方全員の気力+2、ATK/DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]会心率20%[img:up](最大100%)"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "そのターン中ATK10%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の通常攻撃を受けるとき",
                            "effects": [
                                "激烈な威力で反撃"
                            ]
                        },
                        {
                            "title": "登場から4ターンの間",
                            "effects": [
                                "敵の必殺技を見極める"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "reduce": "60%",
                        "guard": true,
                        "counter": true
                    }
                },
                "active": {
                    "name": "スピリッツソード",
                    "condition": "攻撃参加ターンになると発動可能(1回のみ)",
                    "effect": "相手に究極ダメージを与える\n&1ターン自身のDEF300%UPし敵の攻撃を自身に集中させ、必ず会心が発動",
                    "specs": {
                        "def_up": "300%",
                        "target": true,
                        "crit": "100%"
                    }
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "0"
            },
            {
                "label": "通常",
                "name": "超サイヤ人ベジータ(天使)+超サイヤ人孫悟空",
                "id": 4030440,
                "links": [
                    "天才",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "戦闘民族サイヤ人",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16688,
                    "atk": 15275,
                    "def": 10188
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ビッグ・バン・アタック",
                        "effect": "DEFが上昇、1ターンATKが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "その他",
                        "name": "アストロファイヤーキャノン",
                        "effect": "DEFが大幅上昇、1ターンATKが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "閻魔大王の計らい",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "超サイヤ人孫悟空とリバーシブルチェンジ可能",
                                "ATK/DEF200%[img:up]",
                                "ダメージ軽減率50%[img:up]",
                                "属性気玉取得時の気力上昇量+2",
                                "「地球を守りし英雄」または「ポタラ」カテゴリの味方全員の気力+1、ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK100%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター10以上で攻撃を受けるとき",
                            "effects": [
                                "ダメージ軽減率20%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター20以上で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "1番目にいるとき",
                            "effects": [
                                "全ての攻撃をガード",
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "2回",
                        "reduce": "70%",
                        "guard": true
                    }
                },
                "active": {
                    "name": "純粋サイヤ人のプライド",
                    "condition": "攻撃参加ターンになると発動可能(リバーシブルチェンジ前後でいずれか1回のみ)",
                    "effect": "バトル中自身の気力+3、ATKとDEF18%UP、全ての攻撃をガード",
                    "specs": {
                        "atk_up": "18%",
                        "def_up": "18%",
                        "guard": true
                    }
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "1"
            }
        ]
    },
    {
        "id": 1030460,
        "title": "あの世をさまよう魂",
        "name": "超サイヤ人ベジータ(天使)",
        "yomi": "すーぱーさいやじんべじーた(てんし)",
        "rarity": "SSR",
        "cost": 26,
        "type": "AGL",
        "class": "Super",
        "release": "2025/02/15",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "継承する者",
            "融合/合体戦士",
            "純粋サイヤ人",
            "天才戦士",
            "フュージョン",
            "劇場版HERO",
            "ベジータの系譜",
            "超サイヤ人",
            "好敵手",
            "あの世の戦士",
            "体得した進化",
            "親子の絆"
        ],
        "leaderSkill": "「継承する者」または「融合/合体戦士」または「純粋サイヤ人」カテゴリの\n気力+2、HP150%UP、ATKとDEF130%UP、\n「天才戦士」または「フュージョン」カテゴリを含む場合は\n更にHPとATKとDEF20%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030460
            },
            {
                "rank": "UR",
                "id": 1030470,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030480,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強タッグ-あの世編-/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/最強タッグ-あの世編-/2",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "戦闘民族サイヤ人",
                    "臨戦態勢"
                ],
                "stats": {
                    "hp": 7393,
                    "atk": 8460,
                    "def": 4389
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ファイナルブリッドアタック",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "天佑",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "虹気玉取得時の気力上昇量+2",
                                "「継承する者」カテゴリの味方全員のDEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK100%[img:up]",
                                "DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター10以上で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "全ての攻撃をガード",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "guard": true,
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1030470,
        "title": "己の誇りを示す闘い",
        "name": "超サイヤ人ベジータ(天使)",
        "yomi": "すーぱーさいやじんべじーた(てんし)",
        "rarity": "UR",
        "cost": 58,
        "type": "AGL",
        "class": "Super",
        "release": "2025/02/15",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "継承する者",
            "融合/合体戦士",
            "純粋サイヤ人",
            "天才戦士",
            "フュージョン",
            "劇場版HERO",
            "ベジータの系譜",
            "超サイヤ人",
            "好敵手",
            "あの世の戦士",
            "体得した進化",
            "親子の絆"
        ],
        "leaderSkill": "「継承する者」または「融合/合体戦士」または「純粋サイヤ人」カテゴリの\n気力+3、HP170%UP、ATKとDEF150%UP、「天才戦士」または「フュージョン」カテゴリを含む場合は\n更にHPとATKとDEF30%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030460
            },
            {
                "rank": "UR",
                "id": 1030470,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030480,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強タッグ-あの世編-/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/最強タッグ-あの世編-/2",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "戦闘民族サイヤ人",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "hp": 7755,
                    "atk": 8730,
                    "def": 4595
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ファイナルブリッドアタック",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "猛る魂",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "虹気玉取得時の気力上昇量+2",
                                "「継承する者」カテゴリの味方全員の気力+1、DEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK150%[img:up]",
                                "DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター10以上で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "全ての攻撃をガード",
                                "必ず追加攻撃し高確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "guard": true,
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1030480,
        "title": "空前絶後の奇跡",
        "name": "超サイヤ人ベジータ(天使)+超サイヤ人孫悟空(天使)",
        "yomi": "すーぱーさいやじんべじーた(てんし)+すーぱーさいやじんそんごくう(てんし)",
        "rarity": "LR",
        "cost": 77,
        "type": "AGL",
        "class": "Super",
        "release": "2025/02/15",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "継承する者",
            "融合/合体戦士",
            "純粋サイヤ人",
            "天才戦士",
            "フュージョン",
            "劇場版HERO",
            "ベジータの系譜",
            "超サイヤ人",
            "好敵手",
            "あの世の戦士",
            "体得した進化",
            "親子の絆",
            "孫悟空の系譜",
            "最後の切り札",
            "つながる希望",
            "亀仙流",
            "再起する力",
            "時間制限",
            "親友の絆",
            "高速戦闘",
            "地球育ちの戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「継承する者」または「融合/合体戦士」または「純粋サイヤ人」カテゴリの\n気力+3、HP200%UP、ATKとDEF170%UP、\n「天才戦士」または「フュージョン」カテゴリを含む場合は\n更にHPとATKとDEF50%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030460
            },
            {
                "rank": "UR",
                "id": 1030470,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030480,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ-あの世編-/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強タッグ-あの世編-/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/最強タッグ-あの世編-/2",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "戦闘民族サイヤ人",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16688,
                    "atk": 15700,
                    "def": 9656
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ファイナルブリッドアタック",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "その他",
                        "name": "ファイナルバーストキャノン",
                        "effect": "ATKが大幅上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "地獄に起きた奇跡",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+5、ATK/DEF200%[img:up]",
                                "虹気玉取得時の気力上昇量+3",
                                "「継承する者」または「フュージョン」カテゴリの味方全員の気力+1、DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "DEF300%[img:up]",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK200%[img:up]",
                                "DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター10以上で攻撃時",
                            "effects": [
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "気力メーター20以上で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "全ての攻撃をガード",
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "バトル開始から4ターン目以降",
                            "effects": [
                                "超サイヤ人孫悟空(天使)と合流し、リバーシブルチェンジ可能になる"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "2回",
                        "guard": true,
                        "effective": true
                    }
                },
                "active": {
                    "name": "融合",
                    "condition": "バトル開始から5ターン目以降発動可能(リバーシブルチェンジ前後でいずれか1回のみ)",
                    "effect": "4ターンの間、フュージョンで融合する"
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "0"
            },
            {
                "label": "融合",
                "name": "超ゴジータ",
                "id": 4030500,
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "短期決戦",
                    "合体戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16688,
                    "atk": 15700,
                    "def": 9656
                },
                "superAttacks": [
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "100%"
                        }
                    }
                ],
                "passive": {
                    "name": "みなぎる闘志のゴジータ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]HPが全回復",
                                "気力+5、ATK/DEF300%[img:up]",
                                "虹気玉取得時の気力上昇量+4",
                                "全ての攻撃をガード",
                                "ダメージ軽減率60%[img:up]",
                                "状態異常を無効化する",
                                "2回超必殺技が追加発動",
                                "必ず会心が発動",
                                "「継承する者」または「フュージョン」カテゴリの味方全員の気力+2、ATK/DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK100%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "ATK50%[img:up]",
                                "ダメージ軽減率5%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から4ターンの間",
                            "effects": [
                                "敵の必殺技を見極める"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2回",
                        "reduce": "85%",
                        "guard": true
                    }
                },
                "active": {
                    "name": "ソウルパニッシャー",
                    "condition": "攻撃参加ターンになると発動可能(1回のみ)",
                    "effect": "相手に究極ダメージを与える\n&1ターン自身を除く味方全員のATKとDEF54%UP、全属性に効果抜群で攻撃\n&速気玉を虹気玉に変化させる"
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "0"
            },
            {
                "label": "通常",
                "name": "超サイヤ人孫悟空(天使)+超サイヤ人ベジータ(天使)",
                "id": 4030490,
                "links": [
                    "孫一族",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "戦闘民族サイヤ人",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 16688,
                    "atk": 15700,
                    "def": 9656
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "激烈連脚",
                        "effect": "DEFが上昇、1ターンATKが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "超龍双拳",
                        "effect": "DEFが大幅上昇、1ターンATKが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "天国で鍛えた力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "超サイヤ人ベジータ(天使)とリバーシブルチェンジ可能",
                                "気力+5、ATK/DEF200%[img:up]",
                                "虹気玉取得時の気力上昇量+3",
                                "「継承する者」または「フュージョン」カテゴリの味方全員の気力+1、ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK100%[img:up]",
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "DEF200%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター10以上で攻撃を受けるとき",
                            "effects": [
                                "回避率10%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター20以上で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "1番目にいるとき",
                            "effects": [
                                "全ての攻撃をガード",
                                "超高確率で敵の攻撃を回避"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "2回",
                        "dodge": "90%",
                        "guard": true
                    }
                },
                "active": {
                    "name": "フュージョン失敗！？",
                    "condition": "攻撃参加ターンになると発動可能(リバーシブルチェンジ前後でいずれか1回のみ)",
                    "effect": "相手に究極ダメージを与え、ターゲットした敵1体の攻撃ターンを1のばす\n&3ターン敵の攻撃を回避する",
                    "specs": {
                        "dodge": "100%"
                    }
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "1"
            }
        ]
    },
    {
        "id": 1030510,
        "title": "危険すぎる助っ人",
        "name": "フリーザ(最終形態)(天使)",
        "yomi": "ふりーざ(さいしゅうけいたい)(てんし)",
        "rarity": "SSR",
        "cost": 26,
        "type": "INT",
        "class": "Extreme",
        "release": "2025/02/15",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "命運をかけた闘い",
            "宇宙サバイバル編",
            "復活戦士",
            "第7宇宙代表",
            "変身強化",
            "最凶の一族",
            "あの世の戦士",
            "天才戦士",
            "時間制限",
            "永遠の宿敵",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「命運をかけた闘い」カテゴリの\n気力+2、HPとATKとDEF160%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030510
            },
            {
                "rank": "UR",
                "id": 1030520,
                "medals": [
                    {
                        "name": "超激戦/極悪非道の宇宙皇帝/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/怒りの戦士!!超サイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030530,
                "medals": [
                    {
                        "name": "超激戦/地獄より舞い戻る最凶最悪/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "宇宙最凶",
                    "驚異的なスピード",
                    "悪夢",
                    "力の大会"
                ],
                "stats": {
                    "hp": 8102,
                    "atk": 8460,
                    "def": 4035
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "デスビーム",
                        "effect": "1ターンDEFが上昇し、相手に超特大ダメージを与え、ATKを低下させる",
                        "specs": {
                            "def_up": "30%",
                            "atk_down": "20%"
                        }
                    }
                ],
                "passive": {
                    "name": "フリーザの思惑",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2",
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "自身を除く攻撃参加中の味方全員が超系の場合",
                            "effects": [
                                "高確率で会心が発動"
                            ]
                        },
                        {
                            "title": "自身を除く攻撃参加中の味方全員が極系の場合",
                            "effects": [
                                "高確率で必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "50%",
                        "add": "1回"
                    }
                }
            }
        ]
    },
    {
        "id": 1030520,
        "title": "野心を秘めたサバイバル",
        "name": "フリーザ(最終形態)(天使)",
        "yomi": "ふりーざ(さいしゅうけいたい)(てんし)",
        "rarity": "UR",
        "cost": 50,
        "type": "INT",
        "class": "Extreme",
        "release": "2025/02/15",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "命運をかけた闘い",
            "宇宙サバイバル編",
            "復活戦士",
            "第7宇宙代表",
            "変身強化",
            "最凶の一族",
            "あの世の戦士",
            "天才戦士",
            "時間制限",
            "永遠の宿敵",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「命運をかけた闘い」カテゴリの\n気力+3、HPとATKとDEF190%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030510
            },
            {
                "rank": "UR",
                "id": 1030520,
                "medals": [
                    {
                        "name": "超激戦/極悪非道の宇宙皇帝/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/怒りの戦士!!超サイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030530,
                "medals": [
                    {
                        "name": "超激戦/地獄より舞い戻る最凶最悪/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "宇宙最凶",
                    "驚異的なスピード",
                    "悪夢",
                    "力の大会",
                    "超激戦"
                ],
                "stats": {
                    "hp": 9569,
                    "atk": 9450,
                    "def": 4716
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "デスビーム",
                        "effect": "1ターンDEFが上昇し、相手に超特大ダメージを与え、ATKを低下させる",
                        "specs": {
                            "def_up": "30%",
                            "atk_down": "20%"
                        }
                    }
                ],
                "passive": {
                    "name": "フリーザの野心",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+3",
                                "ATK/DEF150%[img:up]",
                                "虹気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "自身を除く攻撃参加中の味方全員が超系の場合",
                            "effects": [
                                "超高確率で会心が発動"
                            ]
                        },
                        {
                            "title": "自身を除く攻撃参加中の味方全員が極系の場合",
                            "effects": [
                                "超高確率で必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "70%",
                        "add": "1回"
                    }
                }
            }
        ]
    },
    {
        "id": 1030530,
        "title": "第7宇宙最後の闘志",
        "name": "フリーザ(最終形態)(天使)+孫悟空",
        "yomi": "ふりーざ(さいしゅうけいたい)(てんし)+そんごくう",
        "rarity": "LR",
        "cost": 77,
        "type": "INT",
        "class": "Extreme",
        "release": "2025/02/15",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "命運をかけた闘い",
            "宇宙サバイバル編",
            "復活戦士",
            "第7宇宙代表",
            "変身強化",
            "最凶の一族",
            "あの世の戦士",
            "天才戦士",
            "時間制限",
            "永遠の宿敵",
            "大会出場者",
            "継承する者",
            "純粋サイヤ人",
            "フルパワー",
            "孫悟空の系譜",
            "かめはめ波",
            "力戦奮闘",
            "亀仙流",
            "再起する力",
            "親友の絆",
            "高速戦闘",
            "親子の絆",
            "超HERO",
            "地球育ちの戦士"
        ],
        "leaderSkill": "「命運をかけた闘い」カテゴリの\n気力+4、HPとATKとDEF220%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030510
            },
            {
                "rank": "UR",
                "id": 1030520,
                "medals": [
                    {
                        "name": "超激戦/極悪非道の宇宙皇帝/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/怒りの戦士!!超サイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030530,
                "medals": [
                    {
                        "name": "超激戦/地獄より舞い戻る最凶最悪/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/神越降臨!!身勝手の極意/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "宇宙最凶",
                    "驚異的なスピード",
                    "短期決戦",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 18388,
                    "atk": 15700,
                    "def": 8806
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "デスビーム",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与え、ATKを低下させる",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%",
                            "atk_down": "20%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "恨みっこなしの一発",
                        "effect": "1ターンATKが超大幅上昇、DEFが大幅上昇し、相手に超極大ダメージを与え、超高確率で気絶させる",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "50%",
                            "stun": "70%"
                        }
                    }
                ],
                "passive": {
                    "name": "フリーザの闘志",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+7",
                                "ATK/DEF200%[img:up]",
                                "必ず追加攻撃し超高確率で必殺技が発動",
                                "虹気玉取得時の気力上昇量+2",
                                "登場から2ターンの間",
                                "「第7宇宙代表」または「命運をかけた闘い」カテゴリの味方全員のATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "HP77%以下の場合、気力+7、ATK77%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "HP77%以下の場合、ダメージ軽減率50%[img:up]"
                            ]
                        },
                        {
                            "title": "自身を除く攻撃参加中の味方全員が超系の場合",
                            "effects": [
                                "必ず会心が発動",
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "自身を除く攻撃参加中の味方全員が極系の場合",
                            "effects": [
                                "2回必殺技が追加発動",
                                "バトル開始から4ターン目以降",
                                "孫悟空と合流し、リバーシブルチェンジ可能になる"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "3回",
                        "reduce": "50%"
                    }
                },
                "active": {
                    "name": "第７宇宙の奇跡",
                    "condition": "バトル開始から4ターン目以降発動可能(リバーシブルチェンジ前後でいずれか1回のみ)",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与え、発動したターン中必ず会心が発動",
                    "specs": {
                        "atk_up": "50%",
                        "crit": "100%"
                    }
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "0"
            },
            {
                "label": "通常",
                "name": "孫悟空+フリーザ(最終形態)(天使)",
                "id": 4030540,
                "links": [
                    "臨戦態勢",
                    "歴戦の戦士",
                    "驚異的なスピード",
                    "かめはめ波",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 18388,
                    "atk": 15700,
                    "def": 8806
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波",
                        "effect": "ATKが大幅上昇、1ターンDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "恨みっこなしの一発",
                        "effect": "1ターンATKが大幅上昇、DEFが超大幅上昇し、相手に超極大ダメージを与え、超高確率で気絶させる",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "100%",
                            "stun": "70%"
                        }
                    }
                ],
                "passive": {
                    "name": "悟空の闘志",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "フリーザ(最終形態)(天使)とリバーシブルチェンジ可能",
                                "気力+7、ATK/DEF200%[img:up]",
                                "全ての攻撃をガード",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "HP77%以上の場合、必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "HP77%以上の場合、DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉1個につき",
                            "effects": [
                                "ATK/DEF17%[img:up]"
                            ]
                        },
                        {
                            "title": "虹気玉を取得すると",
                            "effects": [
                                "ダメージ軽減率59%[img:up]",
                                "全属性に効果抜群で攻撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "reduce": "59%",
                        "guard": true,
                        "effective": true
                    }
                },
                "active": {
                    "name": "フリーザからのほどこし",
                    "condition": "攻撃参加ターンになると発動可能(リバーシブルチェンジ前後でいずれか1回のみ)",
                    "effect": "HPを77%回復し、1ターン自身のATK59%UP、体気玉を虹気玉に変化させる",
                    "specs": {
                        "atk_up": "59%"
                    }
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "1"
            }
        ]
    },
    {
        "id": 1030550,
        "title": "蒼く燃える誇りの力",
        "name": "超サイヤ人ゴッドSSベジータ(進化)",
        "yomi": "すーぱーさいやじんごっどすーぱーさいやじんべじーた(しんか)",
        "rarity": "SSR",
        "cost": 26,
        "type": "STR",
        "class": "Super",
        "release": "2025/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "宇宙サバイバル編",
            "神次元",
            "純粋サイヤ人",
            "フルパワー",
            "第7宇宙代表",
            "ベジータの系譜",
            "兄弟の絆",
            "好敵手",
            "師弟の絆",
            "力戦奮闘",
            "奇跡の覚醒",
            "再起する力",
            "天才戦士",
            "超サイヤ人を超えた力",
            "親子の絆",
            "超HERO",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「宇宙サバイバル編」カテゴリの\n気力+2、HPとATKとDEF160%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030550
            },
            {
                "rank": "UR",
                "id": 1030560,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030570,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/全身全霊全力解放！最強を目指す戦士/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/正義をすてた破壊の力/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会"
                ],
                "stats": {
                    "hp": 7659,
                    "atk": 8177,
                    "def": 4611
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "進化を重ねた力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "ランダム気玉変化：力を除く属性気玉1種→虹"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK100%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1",
                                "[img:infinity]DEF20%[img:up](最大100%)",
                                "そのターン中、ダメージ軽減率5%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉2個につき",
                            "effects": [
                                "必ず1回追加攻撃し中確率で必殺技が発動(ターン中最大3回)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "3回",
                        "reduce": "20%"
                    }
                }
            }
        ]
    },
    {
        "id": 1030560,
        "title": "気力をふりしぼった反撃",
        "name": "超サイヤ人ゴッドSSベジータ(進化)",
        "yomi": "すーぱーさいやじんごっどすーぱーさいやじんべじーた(しんか)",
        "rarity": "UR",
        "cost": 58,
        "type": "STR",
        "class": "Super",
        "release": "2025/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "宇宙サバイバル編",
            "神次元",
            "純粋サイヤ人",
            "フルパワー",
            "第7宇宙代表",
            "ベジータの系譜",
            "兄弟の絆",
            "好敵手",
            "師弟の絆",
            "力戦奮闘",
            "奇跡の覚醒",
            "再起する力",
            "天才戦士",
            "超サイヤ人を超えた力",
            "親子の絆",
            "超HERO",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「宇宙サバイバル編」カテゴリの\n気力+3、HPとATKとDEF190%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030550
            },
            {
                "rank": "UR",
                "id": 1030560,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030570,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/全身全霊全力解放！最強を目指す戦士/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/正義をすてた破壊の力/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦"
                ],
                "stats": {
                    "hp": 9038,
                    "atk": 9110,
                    "def": 5406
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "進化を重ねた姿",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "ランダム気玉変化：力を除く属性気玉1種→虹"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK150%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1",
                                "[img:infinity]DEF30%[img:up](最大150%)",
                                "そのターン中、ダメージ軽減率5%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉2個につき",
                            "effects": [
                                "必ず1回追加攻撃し中確率で必殺技が発動(ターン中最大4回)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "4回",
                        "reduce": "25%"
                    }
                }
            }
        ]
    },
    {
        "id": 1030570,
        "title": "誇りと約束を守る挑戦",
        "name": "超サイヤ人ゴッドSSベジータ(進化)",
        "yomi": "すーぱーさいやじんごっどすーぱーさいやじんべじーた(しんか)",
        "rarity": "LR",
        "cost": 77,
        "type": "STR",
        "class": "Super",
        "release": "2025/01/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "宇宙サバイバル編",
            "神次元",
            "純粋サイヤ人",
            "フルパワー",
            "第7宇宙代表",
            "ベジータの系譜",
            "兄弟の絆",
            "好敵手",
            "師弟の絆",
            "力戦奮闘",
            "奇跡の覚醒",
            "再起する力",
            "天才戦士",
            "超サイヤ人を超えた力",
            "親子の絆",
            "超HERO",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「宇宙サバイバル編」カテゴリの\n気力+4、HPとATKとDEF220%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1030550
            },
            {
                "rank": "UR",
                "id": 1030560,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1030570,
                "medals": [
                    {
                        "name": "超激戦/神をも凌ぐサイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/全身全霊全力解放！最強を目指す戦士/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/正義をすてた破壊の力/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17325,
                    "atk": 15020,
                    "def": 10188
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "その他",
                        "name": "ファイナルフラッシュ",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ライバル同士の共闘",
                        "effect": "ATKが大幅上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える\n発動条件\n名称に「孫悟空」を含むキャラ(少年期、ギニュー、Jr.等を除く)が攻撃参加中の味方にいるとき、気力18以上で発動",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "オレのやり方で勝つ！！",
                    "intro": {
                        "condition": "自身の登場時、チームに自身の他に「宇宙サバイバル編」カテゴリの味方がいるとき登場時演出が発動",
                        "effect": "[img:one_time]6ターンの間、ATK60%[img:up]、ダメージ軽減率30%[img:up]"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "ランダム気玉変化：力を除く属性気玉1種→虹"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK200%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1",
                                "[img:infinity]DEF40%[img:up](最大200%)",
                                "そのターン中、ダメージ軽減率7%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉2個につき",
                            "effects": [
                                "必ず1回追加攻撃し中確率で必殺技が発動(ターン中最大5回)"
                            ]
                        },
                        {
                            "title": "バトル中自身が6回以上必殺技を発動すると",
                            "effects": [
                                "[img:infinity]ダメージ軽減率30%[img:up]"
                            ]
                        },
                        {
                            "title": "バトル中自身が7回以上必殺技を発動すると",
                            "effects": [
                                "[img:infinity]必ず会心が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "100%"
                    }
                }
            }
        ]
    },
    {
        "id": 1032100,
        "title": "心火を燃やす戦士",
        "name": "超サイヤ人孫悟飯(未来)",
        "yomi": "すーぱーさいやじんそんごはん(みらい)",
        "rarity": "SSR",
        "cost": 26,
        "type": "INT",
        "class": "Super",
        "release": "2025/12/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "師弟の絆",
            "混血サイヤ人",
            "未来編",
            "孫悟空の系譜",
            "超サイヤ人",
            "人造人間/セル編",
            "力戦奮闘",
            "つながる希望",
            "親子の絆",
            "地球育ちの戦士",
            "魔の力"
        ],
        "leaderSkill": "「師弟の絆」カテゴリの\n気力+2、HPとATKとDEF160%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1032100
            },
            {
                "rank": "UR",
                "id": 1032110,
                "medals": [
                    {
                        "name": "超激戦/戦火の未来に灯る希望/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1032120,
                "medals": [
                    {
                        "name": "超激戦/戦火の未来に灯る希望/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/一刀両断!! 未来から来た超サイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/地獄の未来の人造人間/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "金色の戦士",
                    "孫一族",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "絶望の未来"
                ],
                "stats": {
                    "hp": 8102,
                    "atk": 8106,
                    "def": 4478
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "魔閃光",
                        "effect": "3ターンDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "師匠の重責",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "「師弟の絆」カテゴリの味方全員のATK/DEF30%[img:up]",
                                "必ず追加攻撃し高確率で必殺技が発動",
                                "ランダム気玉変化：速と知を除く属性気玉1種→虹"
                            ]
                        },
                        {
                            "title": "チームの「師弟の絆」カテゴリの味方1体につき",
                            "effects": [
                                "気力+1(最大+3)",
                                "ATK/DEF30%[img:up](最大90%)",
                                "会心率/ダメージ軽減率10%[img:up](最大30%)"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "2回",
                        "crit": "30%",
                        "reduce": "30%"
                    }
                }
            }
        ]
    },
    {
        "id": 1032110,
        "title": "悲劇に立ち向かう力",
        "name": "超サイヤ人孫悟飯(未来)",
        "yomi": "すーぱーさいやじんそんごはん(みらい)",
        "rarity": "UR",
        "cost": 50,
        "type": "INT",
        "class": "Super",
        "release": "2025/12/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "師弟の絆",
            "混血サイヤ人",
            "未来編",
            "孫悟空の系譜",
            "超サイヤ人",
            "人造人間/セル編",
            "力戦奮闘",
            "つながる希望",
            "親子の絆",
            "地球育ちの戦士",
            "魔の力"
        ],
        "leaderSkill": "「師弟の絆」カテゴリの\n気力+3、HPとATKとDEF190%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1032100
            },
            {
                "rank": "UR",
                "id": 1032110,
                "medals": [
                    {
                        "name": "超激戦/戦火の未来に灯る希望/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1032120,
                "medals": [
                    {
                        "name": "超激戦/戦火の未来に灯る希望/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/一刀両断!! 未来から来た超サイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/地獄の未来の人造人間/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "金色の戦士",
                    "孫一族",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "絶望の未来",
                    "超激戦"
                ],
                "stats": {
                    "hp": 9569,
                    "atk": 9025,
                    "def": 5247
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "魔閃光",
                        "effect": "3ターンDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "師匠の決心",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "「師弟の絆」カテゴリの味方全員のATK/DEF40%[img:up]",
                                "必ず追加攻撃し超高確率で必殺技が発動",
                                "ランダム気玉変化：速と知を除く属性気玉1種→虹"
                            ]
                        },
                        {
                            "title": "チームの「師弟の絆」カテゴリの味方1体につき",
                            "effects": [
                                "気力+1(最大+3)",
                                "ATK/DEF40%[img:up](最大120%)",
                                "会心率/ダメージ軽減率15%[img:up](最大45%)"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "必ず追加攻撃し高確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "45%",
                        "reduce": "45%",
                        "add": "2回"
                    }
                }
            }
        ]
    },
    {
        "id": 1032120,
        "title": "未来へとつながる絆",
        "name": "超サイヤ人孫悟飯(未来) /超サイヤ人トランクス(少年期)(未来)",
        "yomi": "すーぱーさいやじんそんごはん(みらい)/すーぱーさいやじんとらんくす(しょうねんき)(みらい)",
        "rarity": "LR",
        "cost": 77,
        "type": "INT",
        "class": "Super",
        "release": "2025/12/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "師弟の絆",
            "混血サイヤ人",
            "未来編",
            "孫悟空の系譜",
            "超サイヤ人",
            "人造人間/セル編",
            "力戦奮闘",
            "つながる希望",
            "親子の絆",
            "地球育ちの戦士",
            "魔の力",
            "再起する力",
            "託された意志"
        ],
        "leaderSkill": "「師弟の絆」カテゴリの\n気力+4、HPとATKとDEF220%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1032100
            },
            {
                "rank": "UR",
                "id": 1032110,
                "medals": [
                    {
                        "name": "超激戦/戦火の未来に灯る希望/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1032120,
                "medals": [
                    {
                        "name": "超激戦/戦火の未来に灯る希望/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/一刀両断!! 未来から来た超サイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/地獄の未来の人造人間/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "金色の戦士",
                    "孫一族",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "絶望の未来",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 18388,
                    "atk": 14850,
                    "def": 9869
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "魔閃光",
                        "effect": "3ターンDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "爆裂乱舞",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与え、ATKを大幅低下させる",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%",
                            "atk_down": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "心と技の研磨",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "「師弟の絆」カテゴリの味方全員のATK/DEF50%[img:up]",
                                "必殺技が追加発動",
                                "ランダム気玉変化：速と知を除く属性気玉1種→虹"
                            ]
                        },
                        {
                            "title": "チームの「師弟の絆」カテゴリの味方1体につき",
                            "effects": [
                                "気力+3(最大+9)",
                                "ATK/DEF50%[img:up](最大150%)",
                                "会心率/ダメージ軽減率20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "気力メーター18以上で攻撃時",
                            "effects": [
                                "ATK200%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "全ての攻撃をガード",
                                "会心率/ダメージ軽減率20%[img:up]、1番目にいるとき更に会心率/ダメージ軽減率10%[img:up]、味方全員のATK30%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "登場から3ターン目以降、チームに自身の他に「師弟の絆」カテゴリの味方がいるとき攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "HPが58%回復し、超サイヤ人トランクス(少年期)(未来)に交代し復活する"
                            ]
                        },
                        {
                            "title": "味方の復活スキルが発動すると",
                            "effects": [
                                "[img:one_time][img:infinity]ATK/DEF200%[img:up]",
                                "[img:one_time][img:infinity]全ての攻撃をガード"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "90%",
                        "crit": "90%",
                        "guard": true,
                        "revival": true,
                        "add": "2回"
                    }
                }
            },
            {
                "label": "交代",
                "name": "超サイヤ人トランクス(少年期)(未来)",
                "id": 4032130,
                "links": [
                    "金色の戦士",
                    "戦闘民族サイヤ人",
                    "超サイヤ人",
                    "王の血筋",
                    "絶望の未来",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 18388,
                    "atk": 14850,
                    "def": 9869
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "バーニングラッシュ",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "物理",
                        "name": "シャイニングスラッシュ",
                        "effect": "1ターンATKが超大幅上昇、DEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "心と技の継承",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+9、ATK/DEF250%[img:up]",
                                "会心率/回避率/ダメージ軽減率30%[img:up]",
                                "「師弟の絆」または「未来編」カテゴリの味方全員のATK/DEF50%[img:up]",
                                "ランダム気玉変化：速と知を除く属性気玉1種→虹"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時または気力メーター18以上で攻撃時",
                            "effects": [
                                "ATK/DEF250%[img:up]"
                            ]
                        },
                        {
                            "title": "2番目か3番目にいるとき",
                            "effects": [
                                "会心率/回避率50%[img:up]",
                                "KOダメージに耐える(ターン中最大1回)"
                            ]
                        },
                        {
                            "title": "2番目か3番目で攻撃時",
                            "effects": [
                                "必ず2回追加攻撃し高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "チームに自身の他に「師弟の絆」または「未来編」カテゴリの味方がいるとき",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "必殺技が追加発動",
                                "[img:one_time][img:infinity]攻撃を受けた後にHP30%以下で味方全員のDEF30%[img:up]",
                                "攻撃を受けるとターン終了時にHP15%回復"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "30%",
                        "dodge": "80%",
                        "crit": "80%",
                        "add": "3回",
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "魔閃光",
                    "condition": "自身の他に攻撃参加中の「師弟の絆」または「未来編」カテゴリの味方がいるとき発動可能、\nまたは次の攻撃参加ターン以降発動可能(1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与え、発動したターン中必ず会心が発動し、敵の攻撃を回避する",
                    "specs": {
                        "crit": "100%",
                        "dodge": "100%"
                    }
                }
            }
        ]
    },
    {
        "id": 1023400,
        "title": "過酷な世界での闘い",
        "name": "超サイヤ人孫悟飯(未来)&トランクス(少年期)(未来)",
        "yomi": "すーぱーさいやじんそんごはん(みらい)&すーぱーさいやじんとらんくす(しょうねんき)(みらい)",
        "rarity": "SSR",
        "cost": 26,
        "type": "AGL",
        "class": "Super",
        "release": "2021/12/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "師弟の絆",
            "混血サイヤ人",
            "未来編",
            "人造人間/セル編",
            "コンビネーション",
            "地球育ちの戦士"
        ],
        "leaderSkill": "「つながる希望」または「師弟の絆」カテゴリの\n気力+2、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": null,
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "インファイター",
                    "臨戦態勢",
                    "絶望の未来"
                ],
                "stats": {
                    "hp": 7747,
                    "atk": 8531,
                    "def": 4124
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "爆裂乱舞",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "残された戦士の挑戦",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "HP58%以上",
                            "effects": [
                                "ランダム気玉変化：速を除く属性気玉1種→速"
                            ]
                        },
                        {
                            "title": "取得気玉5個以上",
                            "effects": [
                                "DEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "取得速気玉5個以上",
                            "effects": [
                                "ATK30%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1023410,
        "title": "反撃の道標",
        "name": "超サイヤ人孫悟飯(未来)&トランクス(少年期)(未来)",
        "yomi": "すーぱーさいやじんそんごはん(みらい)&すーぱーさいやじんとらんくす(しょうねんき)(みらい)",
        "rarity": "UR",
        "cost": 50,
        "type": "AGL",
        "class": "Super",
        "release": "2021/12/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "師弟の絆",
            "混血サイヤ人",
            "未来編",
            "人造人間/セル編",
            "コンビネーション",
            "地球育ちの戦士"
        ],
        "leaderSkill": "「つながる希望」または「師弟の絆」カテゴリの\n気力+3、HPとATKとDEF120%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": null,
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "インファイター",
                    "臨戦態勢",
                    "絶望の未来",
                    "超激戦"
                ],
                "stats": {
                    "hp": 9144,
                    "atk": 9535,
                    "def": 4822
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "爆裂乱舞",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "残された戦士の抵抗",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]"
                            ]
                        },
                        {
                            "title": "HP58%以上",
                            "effects": [
                                "ランダム気玉変化：速を除く属性気玉1種→速"
                            ]
                        },
                        {
                            "title": "取得気玉5個以上",
                            "effects": [
                                "DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "取得速気玉5個以上",
                            "effects": [
                                "ATK40%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1023420,
        "title": "残された希望",
        "name": "超サイヤ人孫悟飯(未来)&トランクス(少年期)(未来)",
        "yomi": "すーぱーさいやじんそんごはん(みらい)&すーぱーさいやじんとらんくす(しょうねんき)(みらい)",
        "rarity": "LR",
        "cost": 77,
        "type": "AGL",
        "class": "Super",
        "release": "2021/12/16",
        "eza": "2025/12/16",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "つながる希望",
            "師弟の絆",
            "混血サイヤ人",
            "未来編",
            "人造人間/セル編",
            "コンビネーション",
            "力戦奮闘",
            "再起する力",
            "地球育ちの戦士"
        ],
        "leaderSkill": "「つながる希望」または「師弟の絆」カテゴリの\n気力+4、HPとATKとDEF150%UP",
        "leaderSkill_eza": "「つながる希望」または「師弟の絆」 カテゴリの\n気力+4、HPとATKとDEF170%UP",
        "leaderSkill_seza": "",
        "awakening": null,
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "インファイター",
                    "臨戦態勢",
                    "絶望の未来",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17538,
                    "atk": 15870,
                    "def": 9019
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "爆裂乱舞",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "その他",
                        "name": "ダブル魔閃光",
                        "effect": "1ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "残された戦士の死闘",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "HP58%以上",
                            "effects": [
                                "ランダム気玉変化：速を除く属性気玉1種→速"
                            ]
                        },
                        {
                            "title": "取得気玉5個以上",
                            "effects": [
                                "DEF58%[img:up]",
                                "会心率8%[img:up]",
                                "ダメージ軽減率8%[img:up]"
                            ]
                        },
                        {
                            "title": "取得速気玉5個以上",
                            "effects": [
                                "ATK58%[img:up]",
                                "会心率8%[img:up]",
                                "ダメージ軽減率8%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉8個以上",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "16%",
                        "reduce": "16%",
                        "add": "1回"
                    }
                },
                "active": {
                    "name": "交代",
                    "condition": "バトル開始から3ターン目以降、HP58%以下のとき発動可能(1回のみ)",
                    "effect": "交代する",
                    "specs": {}
                }
            },
            {
                "label": "交代",
                "name": "超サイヤ人孫悟飯(未来)",
                "id": 4023430,
                "links": [
                    "超サイヤ人",
                    "サイヤ人の血",
                    "冷静な判断",
                    "臨戦態勢",
                    "絶望の未来",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17538,
                    "atk": 15870,
                    "def": 9019
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "激烈魔閃光",
                        "effect": "1ターンATKが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "その他",
                        "name": "爆力魔閃",
                        "effect": "1ターンATKが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "希望の背中",
                    "intro": null,
                    "details": [
                        {
                            "title": "登場から5ターンの間",
                            "effects": [
                                "気力+8"
                            ]
                        },
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK258%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉8個以上",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "HP58%以下",
                            "effects": [
                                "敵の必殺技を見極める"
                            ]
                        },
                        {
                            "title": "自身がKO",
                            "effects": [
                                "[img:one_time]HPが85%回復し復活する"
                            ]
                        },
                        {
                            "title": "自身の復活スキルが発動したターン終了時",
                            "effects": [
                                "[img:infinity]気力+5",
                                "[img:infinity]DEF/ダメージ軽減率58%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "revival": true,
                        "reduce": "58%"
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "インファイター",
                    "臨戦態勢",
                    "絶望の未来",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17538,
                    "atk": 15870,
                    "def": 9019
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "爆裂乱舞(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "その他",
                        "name": "ダブル魔閃光(極限)",
                        "effect": "4ターンDEFが大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "残された戦士の死闘",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+4、ATK/DEF250%[img:up]",
                                "気玉変化：力→速",
                                "気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "HP58%以上または登場から1ターンの間",
                            "effects": [
                                "ランダム気玉変化：速と力を除く属性気玉1種→速",
                                "ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉3個以上",
                            "effects": [
                                "ATK158%[img:up]",
                                "DEF258%[img:up]",
                                "会心率/ダメージ軽減率58%[img:up]"
                            ]
                        },
                        {
                            "title": "取得速気玉3個以上",
                            "effects": [
                                "ATK258%[img:up]",
                                "DEF158%[img:up]",
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "取得気玉6個以上",
                            "effects": [
                                "必殺技が追加発動",
                                "2ターンの間、「つながる希望」または「師弟の絆」カテゴリの味方全員のATK/DEF58%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "58%",
                        "reduce": "58%",
                        "add": "2回"
                    }
                },
                "active": {
                    "name": "交代",
                    "condition": "バトル開始から3ターン目以降、HP58%以下のとき発動可能(1回のみ)",
                    "effect": "交代する",
                    "specs": {}
                }
            },
            {
                "label": "交代",
                "name": "超サイヤ人孫悟飯(未来)",
                "id": 4023430,
                "links": [
                    "超サイヤ人",
                    "サイヤ人の血",
                    "冷静な判断",
                    "臨戦態勢",
                    "絶望の未来",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 17538,
                    "atk": 15870,
                    "def": 9019
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "激烈魔閃光(極限)",
                        "effect": "1ターンATKが超大幅上昇し、相手に極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%"
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "その他",
                        "name": "爆力魔閃(極限)",
                        "effect": "4ターンATKが超大幅上昇し、相手に超極大ダメージを与える",
                        "specs": {
                            "atk_up": "100%"
                        }
                    }
                ],
                "passive": {
                    "name": "希望の背中",
                    "intro": null,
                    "details": [
                        {
                            "title": "登場から5ターンの間",
                            "effects": [
                                "気力+8",
                                "ATK/DEF158%[img:up]",
                                "会心率58%[img:up]"
                            ]
                        },
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF258%[img:up]",
                                "気玉取得時の気力上昇量+1",
                                "ランダム気玉変化：速を除く属性気玉1種→速"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK258%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目にいるとき、またはターン開始時にHP85%以上",
                            "effects": [
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "ターン開始時にHP85%以下",
                            "effects": [
                                "敵の必殺技を見極める"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "ATK/DEF158%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉5個以上",
                            "effects": [
                                "必殺技が追加発動",
                                "2ターンの間、「つながる希望」または「師弟の絆」カテゴリの味方全員のATK/DEF58%[img:up]"
                            ]
                        },
                        {
                            "title": "自身がKO",
                            "effects": [
                                "[img:one_time]HPが全回復し復活する"
                            ]
                        },
                        {
                            "title": "自身か味方の復活スキルが発動すると",
                            "effects": [
                                "[img:infinity]気力+5",
                                "[img:infinity]DEF258%[img:up]",
                                "[img:infinity]会心率/ダメージ軽減率58%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "guard": true,
                        "add": "1回",
                        "revival": true,
                        "reduce": "58%"
                    }
                }
            }
        ]
    },
    {
        "id": 1016970,
        "title": "晴れやかな闘い",
        "name": "トランクス(青年期)",
        "yomi": "とらんくす(せいねんき)",
        "rarity": "SSR",
        "cost": 19,
        "type": "INT",
        "class": "Super",
        "release": "2020/08/07",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "混血サイヤ人",
            "未来編",
            "時空を超えし者",
            "ベジータの系譜",
            "師弟の絆",
            "劇場版HERO",
            "頭脳戦",
            "託された意志",
            "親子の絆",
            "地球育ちの戦士",
            "大会出場者"
        ],
        "leaderSkill": "超知属性の気力+2、HPとATKとDEF70%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "未来からの使者",
                    "サイヤ人の血",
                    "冷静な判断",
                    "王の血筋",
                    "Z戦士",
                    "絶望の未来"
                ],
                "stats": {
                    "hp": 7217,
                    "atk": 8530,
                    "def": 4443
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "バーニングアタック",
                        "effect": "相手に超特大ダメージを与え、中確率で気絶させる",
                        "specs": {
                            "stun": true
                        }
                    }
                ],
                "passive": {
                    "name": "過去の世界での親孝行",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]",
                                "気玉変化：体→虹",
                                "中確率で敵の攻撃を回避",
                                "チームの「劇場版HERO」カテゴリの 味方全員の気力+2、ATK20%[img:up]、DEF10%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "dodge": "中確率"
                    }
                }
            }
        ]
    },
    {
        "id": 1032450,
        "title": "天下一大武道大会での交戦",
        "name": "トランクス(青年期)",
        "yomi": "とらんくす(せいねんき)",
        "rarity": "UR",
        "cost": 36,
        "type": "INT",
        "class": "Super",
        "release": "2025/12/12",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "混血サイヤ人",
            "未来編",
            "時空を超えし者",
            "ベジータの系譜",
            "師弟の絆",
            "劇場版HERO",
            "頭脳戦",
            "託された意志",
            "親子の絆",
            "地球育ちの戦士",
            "大会出場者"
        ],
        "leaderSkill": "超知属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "未来からの使者",
                    "サイヤ人の血",
                    "冷静な判断",
                    "王の血筋",
                    "Z戦士",
                    "絶望の未来",
                    "限界突破"
                ],
                "stats": {
                    "hp": 7475,
                    "atk": 8730,
                    "def": 4595
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "バーニングアタック",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与え、高確率で気絶させる",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%",
                            "stun": true
                        }
                    }
                ],
                "passive": {
                    "name": "銀河戦士との闘い",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "気玉変化：体→虹",
                                "高確率で敵の攻撃を回避",
                                "「劇場版HERO」または 「混血サイヤ人」カテゴリの 味方全員の気力+2、ATK60%[img:up]、DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "ATK/DEF50%[img:up](最大150%)",
                                "会心率10%[img:up](最大30%)",
                                "回避率5%[img:up](最大15%)"
                            ]
                        },
                        {
                            "title": "自身の他に攻撃参加中の「劇場版HERO」または 「混血サイヤ人」カテゴリの味方がいるとき",
                            "effects": [
                                "必殺技が追加発動",
                                "取得虹気玉1個につき ATK/DEF50%[img:up](最大150%)、 会心率10%[img:up](最大30%)、 回避率5%[img:up](最大15%)"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "取得虹気玉1個以上でDEF200%[img:up]",
                                "取得虹気玉2個以上でATK200%[img:up]"
                            ]
                        },
                        {
                            "title": "極系の敵がいるとき",
                            "effects": [
                                "ランダム気玉変化：知と体を除く属性気玉1種→虹"
                            ]
                        }
                    ],
                    "maxValues": {
                        "dodge": "50%",
                        "crit": "30%",
                        "add": "1回"
                    }
                }
            }
        ]
    },
    {
        "id": 1008450,
        "title": "魔族再興の叫び",
        "name": "マジュニア",
        "yomi": "",
        "rarity": "SSR",
        "cost": 19,
        "type": "AGL",
        "class": "Extreme",
        "release": "2021/12/17",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "天下一武道会",
            "ナメック星人",
            "恐怖の征服",
            "ターゲット孫悟空",
            "リベンジ",
            "天才戦士",
            "託された意志",
            "世界の混乱",
            "命運をかけた闘い",
            "地球育chの戦士",
            "大会出場者",
            "魔の力",
            "継承する者"
        ],
        "leaderSkill": "速属性の気力+3、HPとATKとDEF50%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "タフネス戦士",
                    "魔の流儀",
                    "一心同体",
                    "不思議な大冒険",
                    "ドラゴンボールの導き"
                ],
                "stats": {
                    "hp": 6930,
                    "atk": 7146,
                    "def": 4565
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "超爆裂魔波",
                        "effect": "1ターンDEFが上昇し、相手に超特大ダメージを与え、高確率で気絶させる",
                        "specs": {
                            "def_up": "30%",
                            "stun": true
                        }
                    }
                ],
                "passive": {
                    "name": "魔族の報復",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "「亀仙流」カテゴリの敵がいるとき",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から3ターン目以降、気力メーター12以上で攻撃時",
                            "effects": [
                                "[img:one_time]ATK200%[img:up]",
                                "[img:one_time]敵を2ターン気絶させる"
                            ]
                        }
                    ],
                    "maxValues": {
                        "stun": true
                    }
                }
            }
        ]
    },
    {
        "id": 1027190,
        "title": "平和を憎む一閃",
        "name": "マジュニア",
        "yomi": "",
        "rarity": "UR",
        "cost": 36,
        "type": "AGL",
        "class": "Extreme",
        "release": "2023/08/11",
        "eza": "2025/12/12",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "天下一武道会",
            "ナメック星人",
            "恐怖の征服",
            "ターゲット孫悟空",
            "リベンジ",
            "天才戦士",
            "託された意志",
            "世界の混乱",
            "命運をかけた闘い",
            "地球育ちの戦士",
            "大会出場者",
            "魔の力",
            "継承する者"
        ],
        "leaderSkill": "速属性の気力+3、HPとATKとDEF70%UP",
        "leaderSkill_eza": "速属性の気力+3、HPとATKとDEF70%UP",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "タフネス戦士",
                    "魔の流儀",
                    "一心同体",
                    "不思議な大冒険",
                    "ドラゴンボールの導き",
                    "限界突破"
                ],
                "stats": {
                    "hp": 7550,
                    "atk": 7512,
                    "def": 4960
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "超爆裂魔波",
                        "effect": "1ターンDEFが大幅上昇し、相手に超特大ダメージを与え、高確率で気絶させる",
                        "specs": {
                            "def_up": "50%",
                            "stun": true
                        }
                    }
                ],
                "passive": {
                    "name": "魔族の呪縛",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "「亀仙流」カテゴリの敵がいるとき",
                            "effects": [
                                "気力+2、ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "必ず追加攻撃し高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "登場から3ターン目以降、気力メーター12以上で攻撃時",
                            "effects": [
                                "[img:one_time]ATK200%[img:up]",
                                "[img:one_time]攻撃した敵を2ターン気絶させる"
                            ]
                        },
                        {
                            "title": "登場から6ターン目以降、気力メーター12以上で攻撃時",
                            "effects": [
                                "[img:one_time]ATK150%[img:up]",
                                "[img:one_time]攻撃した敵の必殺技を2ターン封じる"
                            ]
                        },
                        {
                            "title": "登場から9ターン目以降、気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK100%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "stun": true,
                        "seal": true,
                        "add": "1",
                        "target": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "タフネス戦士",
                    "魔の流儀",
                    "一心同体",
                    "不思議な大冒険",
                    "ドラゴンボールの導き",
                    "限界突破"
                ],
                "stats": {
                    "hp": 10097,
                    "atk": 10046,
                    "def": 6633
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "超爆裂魔波(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超特大ダメージを与え、高確率で気絶させる",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%",
                            "stun": true
                        }
                    }
                ],
                "passive": {
                    "name": "魔族の呪縛",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF200%[img:up]",
                                "必ず追加攻撃し高確率で必殺技が発動",
                                "高確率で会心が発動"
                            ]
                        },
                        {
                            "title": "「大会出場者」または「亀仙流」カテゴリの敵がいるとき",
                            "effects": [
                                "気力+2、ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "敵が1体のとき",
                            "effects": [
                                "必殺技が追加発動",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃するまで",
                            "effects": [
                                "そのターン中、超高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK/DEF200%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から3ターン目以降、気力メーター12以上で攻撃時",
                            "effects": [
                                "[img:one_time]ATK250%[img:up]、DEF150%[img:up]",
                                "[img:one_time]必ず会心が発動",
                                "[img:one_time]攻撃した敵を2ターン気絶させる"
                            ]
                        },
                        {
                            "title": "登場から6ターン目以降、気力メーター12以上で攻撃時",
                            "effects": [
                                "[img:one_time]ATK200%[img:up]、DEF100%[img:up]",
                                "[img:one_time]必ず会心が発動",
                                "[img:one_time]攻撃した敵の必殺技を2ターン封じる"
                            ]
                        },
                        {
                            "title": "登場から9ターン目以降、気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK150%[img:up]、DEF50%[img:up]",
                                "攻撃した敵の必殺技を封じる"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2",
                        "guard": true,
                        "dodge": "70%",
                        "stun": true,
                        "seal": true
                    }
                }
            }
        ]
    },
    {
        "id": 1025610,
        "title": "無名の武道家",
        "name": "ジャッキー・チュン",
        "yomi": "",
        "rarity": "SSR",
        "cost": 18,
        "type": "INT",
        "class": "Super",
        "release": "2022/11/25",
        "source_type": "event",
        "drop_event": "",
        "categories": [
            "天下一武道会",
            "少年編",
            "地球人",
            "頭脳戦",
            "惑星破壊",
            "高速戦闘",
            "地球育ちの戦士",
            "大会出場者"
        ],
        "leaderSkill": "「天下一武道会」カテゴリの\n気力+2、HPとATKとDEF80%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "頭脳派",
                    "天下一武道会優勝者",
                    "不思議な大冒険",
                    "ドラゴンボールの導き"
                ],
                "stats": {
                    "hp": 6469,
                    "atk": 7313,
                    "def": 3998
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "萬國驚天掌",
                        "effect": "1ターンDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "ひさしぶりのマジ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2",
                                "ATK/DEF80%[img:up]"
                            ]
                        },
                        {
                            "title": "必殺技を発動するたび",
                            "effects": [
                                "[img:infinity]ATK10%[img:up](最大30%)"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "[img:infinity]DEF10%[img:up](最大30%)"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1025620,
        "title": "大決勝戦の始まり",
        "name": "ジャッキー・チュン",
        "yomi": "",
        "rarity": "UR",
        "cost": 38,
        "type": "INT",
        "class": "Super",
        "release": "2022/11/25",
        "source_type": "event",
        "drop_event": "",
        "categories": [
            "天下一武道会",
            "少年編",
            "地球人",
            "頭脳戦",
            "惑星破壊",
            "高速戦闘",
            "地球育ちの戦士",
            "大会出場者"
        ],
        "leaderSkill": "「天下一武道会」カテゴリの\n気力+3、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "頭脳派",
                    "天下一武道会優勝者",
                    "不思議な大冒険",
                    "ドラゴンボールの導き",
                    "限界突破"
                ],
                "stats": {
                    "hp": 8100,
                    "atk": 8400,
                    "def": 4959
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "萬國驚天掌",
                        "effect": "1ターンDEFが上昇し、相手に超特大ダメージを与える",
                        "specs": {
                            "def_up": "30%",
                            "stun": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "頭にきての大反撃",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+3",
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "必殺技を発動するたび",
                            "effects": [
                                "[img:infinity]ATK15%[img:up](最大45%)"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "[img:infinity]DEF15%[img:up](最大45%)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "atk": "45%",
                        "def": "45%"
                    }
                }
            }
        ]
    },
    {
        "id": 1025630,
        "title": "天下一武道会のクライマックス",
        "name": "ジャッキー・チュン",
        "yomi": "",
        "rarity": "LR",
        "cost": 99,
        "type": "INT",
        "class": "Super",
        "release": "2022/11/25",
        "eza": "2025/12/12",
        "source_type": "event",
        "drop_event": "",
        "categories": [
            "天下一武道会",
            "少年編",
            "地球人",
            "頭脳戦",
            "惑星破壊",
            "高速戦闘",
            "フルパワー",
            "かめはめ波",
            "地球育ちの戦士",
            "大会出場者"
        ],
        "leaderSkill": "「天下一武道会」カテゴリの\n気力+4、HPとATKとDEF130%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "頭脳派",
                    "天下一武道会優勝者",
                    "かめはめ波",
                    "不思議な大冒険",
                    "ドラゴンボールの導き",
                    "限界突破",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 15083,
                    "atk": 13355,
                    "def": 9078
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾,格闘,物理",
                        "name": "萬國驚天掌",
                        "effect": "1ターンDEFが上昇し、相手に極大ダメージを与え、高確率で気絶させる",
                        "specs": {
                            "def_up": "30%",
                            "stun": true
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾,格闘,物理",
                        "name": "優勝キック",
                        "effect": "1ターンATKが上昇し、相手に超極大ダメージを与え、高確率で気絶させる",
                        "specs": {
                            "atk_up": "30%",
                            "stun": true
                        }
                    }
                ],
                "passive": {
                    "name": "決勝戦にふさわしい闘い",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+4",
                                "ATK/DEF120%[img:up]",
                                "「天下一武道会」カテゴリの自身を除く味方全員の気力+3、ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "必殺技を発動するたび",
                            "effects": [
                                "[img:infinity]ATK20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "[img:infinity]DEF20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "超必殺技が命中した敵から攻撃を受けるとき",
                            "effects": [
                                "ダメージ軽減率50%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "50%"
                    }
                },
                "active": {
                    "name": "最大出力かめはめ波",
                    "condition": "バトル中自身が6回以上攻撃を受けると 発動可能、またはバトル中必殺技の発動が4回以上で 発動可能(1回のみ)",
                    "description": "一時的にATK610%UPしたダメージを与え、発動したターン中64%の確率で会心が発動",
                    "specs": {
                        "crit": "64%"
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "頭脳派",
                    "天下一武道会優勝者",
                    "かめはめ波",
                    "不思議な大冒険",
                    "ドラゴンボールの導き",
                    "限界突破",
                    "伝説の力"
                ],
                "stats": {
                    "hp": 15083,
                    "atk": 13355,
                    "def": 9078
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾,格闘,物理",
                        "name": "萬國驚天掌(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与え、超高確率で気絶させる",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%",
                            "stun": true
                        }
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾,格闘,物理",
                        "name": "優勝キック(極限)",
                        "effect": "4ターンATKとDEFが上昇し、相手に超極大ダメージを与え、高確率で気絶させる",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%",
                            "stun": true
                        }
                    }
                ],
                "passive": {
                    "name": "決勝戦にふさわしい闘い",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+4、ATK/DEF180%[img:up]",
                                "「天下一武道会」または「頭脳戦」カテゴリの味方全員の気力+3、ATK/DEF50%[img:up]",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "自身の他に攻撃参加中の「天下一武道会」または「頭脳戦」カテゴリの味方がいるとき",
                            "effects": [
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "必殺技を発動するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+4)",
                                "[img:infinity]ATK/DEF50%[img:up](最大150%)"
                            ]
                        },
                        {
                            "title": "攻撃を受けるか回避するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+4)",
                                "[img:infinity]ATK/DEF50%[img:up](最大150%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時または気力メーター24で攻撃時",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "超必殺技が命中した敵から攻撃を受けるとき",
                            "effects": [
                                "DEF100%[img:up]",
                                "ダメージ軽減率50%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "effective": true,
                        "add": "1回",
                        "reduce": "50%"
                    }
                },
                "active": {
                    "name": "最大出力かめはめ波",
                    "condition": "バトル中自身が6回以上攻撃を受けると 発動可能、またはバトル中必殺技の発動が4回以上で 発動可能(1回のみ)",
                    "description": "一時的にATK610%UPしたダメージを与え、発動したターン中64%の確率で会心が発動",
                    "specs": {
                        "crit": "64%"
                    }
                }
            }
        ]
    },
    {
        "id": 1023370,
        "title": "気配を持たぬ殺人鬼",
        "name": "ドクター・ゲロ&人造人間19号",
        "yomi": "",
        "rarity": "SSR",
        "cost": 21,
        "type": "INT",
        "class": "Extreme",
        "release": "2021/11/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "人造人間",
            "人造人間/セル編",
            "ターゲット孫悟空",
            "力の吸収",
            "コンビネーション"
        ],
        "leaderSkill": "「人造人間」カテゴリの\n気力+2、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "人造人間",
                    "エネルギー吸収式",
                    "RR軍",
                    "悪夢",
                    "残虐",
                    "恐怖と絶望"
                ],
                "stats": {
                    "hp": 5039,
                    "atk": 7571,
                    "def": 4296
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾,格闘,物理",
                        "name": "バイオニックパニッシャー",
                        "effect": "相手に超特大ダメージを与え、HPを10%回復",
                        "specs": {}
                    }
                ],
                "passive": {
                    "name": "データの照合",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK140%[img:up]",
                                "DEF130%[img:up]",
                                "「人造人間」カテゴリの味方全員の気力+2、ATK/DEF20%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK/DEF39%[img:up]",
                                "敵のガードを無効化"
                            ]
                        }
                    ],
                    "maxValues": {
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1023380,
        "title": "蓄積された殺意",
        "name": "ドクター・ゲロ&人造人間19号",
        "yomi": "",
        "rarity": "UR",
        "cost": 40,
        "type": "INT",
        "class": "Extreme",
        "release": "2021/11/30",
        "eza": "2025/12/02",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "人造人間",
            "人造人間/セル編",
            "ターゲット孫悟空",
            "力の吸収",
            "コンビネーション"
        ],
        "leaderSkill": "「人造人間」カテゴリの\n気力+3、HPとATKとDEF120%UP",
        "leaderSkill_eza": "「人造人間」カテゴリの\n気力+3、HPとATKとDEF130%UP",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "人造人間",
                    "エネルギー吸収式",
                    "RR軍",
                    "悪夢",
                    "残虐",
                    "恐怖と絶望",
                    "超激戦"
                ],
                "stats": {
                    "hp": 6809,
                    "atk": 9251,
                    "def": 5811
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "バイオニックパニッシャー",
                        "effect": "1ターンATKとDEFが上昇し、相手に超特大ダメージを与え、HPを10%回復",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "エネルギーの掌握",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK200%[img:up]",
                                "DEF190%[img:up]",
                                "「人造人間」カテゴリの味方全員の気力+3、ATK/DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK/DEF39%[img:up]",
                                "敵のガードを無効化"
                            ]
                        },
                        {
                            "title": "HP39%以下",
                            "effects": [
                                "敵の必殺技を見極める"
                            ]
                        },
                        {
                            "title": "敵の気弾系必殺技を受けるとき",
                            "effects": [
                                "吸収し、吸収したダメージの39%回復する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "guard": true,
                        "scouter": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "人造人間",
                    "エネルギー吸収式",
                    "RR軍",
                    "悪夢",
                    "残虐",
                    "恐怖と絶望",
                    "超激戦"
                ],
                "stats": {
                    "hp": 9106,
                    "atk": 12371,
                    "def": 7771
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "バイオニックパニッシャー(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超特大ダメージを与え、HPを15%回復",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%"
                        }
                    }
                ],
                "passive": {
                    "name": "エネルギーの掌握",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF250%[img:up]",
                                "「人造人間」カテゴリの味方全員の気力+3、ATK/DEF60%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK190%[img:up]",
                                "敵のガードを無効化"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "DEF190%[img:up]"
                            ]
                        },
                        {
                            "title": "チームの「人造人間」カテゴリの味方1体につき",
                            "effects": [
                                "ATK/DEF100%[img:up](最大390%)",
                                "会心率/ダメージ軽減率10%[img:up](最大39%)"
                            ]
                        },
                        {
                            "title": "HP39%以下のときまたはHP69%以下で自身の他に攻撃参加中の「人造人間」カテゴリの味方がいるとき",
                            "effects": [
                                "敵の必殺技を見極める"
                            ]
                        },
                        {
                            "title": "敵の気弾系必殺技を受けるとき",
                            "effects": [
                                "吸収し、吸収したダメージの39%回復する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "guard": true,
                        "crit": "39%",
                        "reduce": "39%",
                        "scouter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1023350,
        "title": "荒廃した未来",
        "name": "人造人間17号(未来)&18号(未来)",
        "yomi": "",
        "rarity": "SSR",
        "cost": 30,
        "type": "TEQ",
        "class": "Extreme",
        "release": "2021/11/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "世界の混乱",
            "人造人間",
            "未来編",
            "兄弟の絆",
            "人造人間/セル編",
            "コンビネーション",
            "制御不能の力"
        ],
        "leaderSkill": "「世界の混乱」または「未来編」カテゴリの\n気力+2、HPとATKとDEF140%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "人造人間",
                    "有機質改造",
                    "双子",
                    "悪夢",
                    "残虐",
                    "絶望の未来"
                ],
                "stats": {
                    "hp": 8288,
                    "atk": 10430,
                    "def": 5069
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾,格闘,物理",
                        "name": "ノンストップバイオレンス",
                        "effect": "1ターンATKとDEFが上昇し、相手に超絶特大ダメージを与える",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%"
                        }
                    }
                ],
                "passive": {
                    "name": "退屈しのぎ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK120%[img:up]",
                                "DEF130%[img:up]",
                                "ランダム気玉変化：技を除く属性気玉1種→技"
                            ]
                        },
                        {
                            "title": "取得技気玉1個につき",
                            "effects": [
                                "ATK/DEF20%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉7個以上",
                            "effects": [
                                "ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉8個以上",
                            "effects": [
                                "DEF50%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1023360,
        "title": "命を奪うゲーム",
        "name": "人造人間17号(未来)&18号(未来)",
        "yomi": "",
        "rarity": "UR",
        "cost": 58,
        "type": "TEQ",
        "class": "Extreme",
        "release": "2021/11/30",
        "eza": "2025/12/02",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "世界の混乱",
            "人造人間",
            "未来編",
            "兄弟の絆",
            "人造人間/セル編",
            "コンビネーション",
            "制御不能の力"
        ],
        "leaderSkill": "「世界の混乱」または「未来編」カテゴリの\n気力+3、HPとATKとDEF170%UP",
        "leaderSkill_eza": "「世界の混乱」または「未来編」カテゴリの\n気力+3、HPとATKとDEF180%UP",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "人造人間",
                    "有機質改造",
                    "双子",
                    "悪夢",
                    "残虐",
                    "絶望の未来",
                    "超激戦"
                ],
                "stats": {
                    "hp": 10465,
                    "atk": 12432,
                    "def": 6353
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾,格闘,物理",
                        "name": "ノンストップバイオレンス",
                        "effect": "1ターンATKとDEFが上昇し、相手に超絶特大ダメージを与え、必殺技を封じる",
                        "specs": {
                            "atk_up": "30%",
                            "def_up": "30%",
                            "seal": true
                        }
                    }
                ],
                "passive": {
                    "name": "年月をかけた楽しみ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK170%[img:up]",
                                "DEF180%[img:up]",
                                "ランダム気玉変化：技を除く属性気玉1種→技",
                                "虹気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "取得技気玉1個につき",
                            "effects": [
                                "ATK/DEF35%[img:up]"
                            ]
                        },
                        {
                            "title": "技気玉以外の取得気玉1個につき",
                            "effects": [
                                "ATK18%[img:up]",
                                "DEF17%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉7個以上",
                            "effects": [
                                "ATK70%[img:up]"
                            ]
                        },
                        {
                            "title": "取得気玉8個以上",
                            "effects": [
                                "DEF80%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時にHP35%以下",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "敵の気弾系必殺技を受けるときHP35%以上",
                            "effects": [
                                "無効化する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回"
                    }
                },
                "active": {
                    "name": "地獄のゲーム",
                    "condition": "敵が1体で敵のHP35%以上のとき発動可能、または敵が3体以上のとき発動可能(1回のみ)",
                    "description": "ターゲットした敵1体の攻撃ターンを1のばす",
                    "specs": {
                        "action_break": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常",
                "name": "",
                "links": [
                    "人造人間",
                    "有機質改造",
                    "双子",
                    "悪夢",
                    "残虐",
                    "絶望の未来",
                    "超激戦"
                ],
                "stats": {
                    "hp": 13995,
                    "atk": 16625,
                    "def": 8496
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾,格闘,物理",
                        "name": "ノンストップバイオレンス(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超絶特大ダメージを与え、必殺技を封じる",
                        "specs": {
                            "atk_up": "50%",
                            "def_up": "50%",
                            "seal": true
                        }
                    }
                ],
                "passive": {
                    "name": "年月をかけた楽しみ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "ダメージ軽減率17%[img:up]",
                                "回避率18%[img:up]",
                                "ランダム気玉変化：技を除く属性気玉1種→技",
                                "技気玉か虹気玉取得時の気力上昇量+1",
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "取得気玉1個につき",
                            "effects": [
                                "ATK/DEF35%[img:up]"
                            ]
                        },
                        {
                            "title": "取得技気玉1個につき",
                            "effects": [
                                "ATK18%[img:up]",
                                "DEF17%[img:up]"
                            ]
                        },
                        {
                            "title": "取得技気玉2個以上または取得虹気玉1個以上",
                            "effects": [
                                "会心率/ダメージ軽減率/回避率35%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "HP35%以下",
                            "effects": [
                                "ダメージ軽減率17%[img:up]",
                                "回避率18%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の気弾系必殺技を受けるとき",
                            "effects": [
                                "HP35%以上、または取得気玉7個以上で無効化する",
                                "取得気玉8個以上で2ターンの間、「人造人間」カテゴリの味方全員のATK/DEF15%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "reduce": "17%",
                        "dodge": "18%",
                        "crit": "35%"
                    }
                },
                "active": {
                    "name": "地獄のゲーム",
                    "condition": "敵が1体で敵のHP35%以上のとき発動可能、または敵が3体以上のとき発動可能(1回のみ)",
                    "description": "ターゲットした敵1体の攻撃ターンを1のばす",
                    "specs": {
                        "action_break": true
                    }
                }
            }
        ]
    }
];