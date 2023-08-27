var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.EquipMentPosition =
        o.DamageType =
        o.GameSatet =
        o.Talent =
        o.GrowthType =
        o.GlobalEvent =
        o.Common =
        o.Weapon =
        o.Drawing =
        o.SubscribeID =
        o.Equip =
            void 0),
    (function (e) {
        (e.EQUIP_PART_ = "texture/equipment/EquipUI_Part_"),
            (e.EQUIP_TYPE_ = "texture/equipment/EquipUI_Type_"),
            (e.EQUIP_QUALITY_ = "texture/equipment/EquipUI_Quality_"),
            (e.EQUIP_GRADE_ = "texture/equipment/EquipUI_Quality_Grade"),
            (e.EQUIP_LOCK_ = "texture/equipment/EquipInfoUI_Lock_"),
            (e.EQUIP_UNLOCK_ = "texture/equipment/EquipUI_Part_");
    })(o.Equip || (o.Equip = {})),
    (function (e) {
        (e.STORE = "4AgJs7cx8utKJOFPzV0XdrOuo2RQKBcYb-ebeLmZ4KA"),
            (e.PATROL = "F0wQueqGxjmJBUXSz5bjpzIfATtTy-k1-ebxD-SUIqU"),
            (e.ENERGY = "o395E-t2UyTA_mjTEaAUK39BrJVHX4L-wf32VAOPWc0"),
            (e.VERSION = "72TtY6epyopLc8EPSwO4iRjo5l46ketwNYhkGWQ8vOI");
    })(o.SubscribeID || (o.SubscribeID = {})),
    ((o.Drawing || (o.Drawing = {})).DRAWING_ = "texture/equipment/map_"),
    ((o.Weapon || (o.Weapon = {})).TEXTURE_ = "texture/icon/equipment/"),
    (function (e) {
        (e.GOLD_ICON = "texture/common/1001"), (e.MAP_ICON_ = "texture/equipment/map_");
    })(o.Common || (o.Common = {})),
    (function (e) {
        (e.EquipChange = "equipChange"),
            (e.GoldChange = "goldChange"),
            (e.ShopChange = "shopChange"),
            (e.DressChange = "dressChange");
    })(o.GlobalEvent || (o.GlobalEvent = {})),
    (function (e) {
        (e[(e.HP = 1)] = "HP"),
            (e[(e.RECOVER = 2)] = "RECOVER"),
            (e[(e.ARMOR = 3)] = "ARMOR"),
            (e[(e.MOVE_SPEED = 4)] = "MOVE_SPEED"),
            (e[(e.ATTACK = 5)] = "ATTACK"),
            (e[(e.CRITICAL_CHANCE = 6)] = "CRITICAL_CHANCE"),
            (e[(e.BULLET_SPEED = 7)] = "BULLET_SPEED"),
            (e[(e.BULLET_DURATION = 8)] = "BULLET_DURATION"),
            (e[(e.BULLET_THROUGH = 9)] = "BULLET_THROUGH"),
            (e[(e.REPEL = 10)] = "REPEL"),
            (e[(e.ATTACK_RANGE = 11)] = "ATTACK_RANGE"),
            (e[(e.SKILL_CD = 12)] = "SKILL_CD"),
            (e[(e.BULLET_NUM = 13)] = "BULLET_NUM"),
            (e[(e.PICK_SCOPE = 14)] = "PICK_SCOPE"),
            (e[(e.LUCKY = 15)] = "LUCKY"),
            (e[(e.GROWTH = 16)] = "GROWTH"),
            (e[(e.GREED = 17)] = "GREED"),
            (e[(e.LEVEL_GROWTH = 18)] = "LEVEL_GROWTH"),
            (e[(e.FOOD_GROWTH = 19)] = "FOOD_GROWTH"),
            (e[(e.SKILL_ATTACK = 20)] = "SKILL_ATTACK");
    })(o.GrowthType || (o.GrowthType = {})),
    (function (e) {
        (e[(e.FOOD_GROWTH = 19)] = "FOOD_GROWTH"),
            (e[(e.ATK_ADD = 21)] = "ATK_ADD"),
            (e[(e.HP_ADD = 22)] = "HP_ADD"),
            (e[(e.DEF_ADD = 23)] = "DEF_ADD"),
            (e[(e.FOOD_ADD = 24)] = "FOOD_ADD"),
            (e[(e.SPEED_ADD = 25)] = "SPEED_ADD"),
            (e[(e.GET_SKILL = 26)] = "GET_SKILL"),
            (e[(e.DROP_GOLD = 27)] = "DROP_GOLD"),
            (e[(e.DROP_FOOD = 28)] = "DROP_FOOD"),
            (e[(e.DROP_MAP = 29)] = "DROP_MAP"),
            (e[(e.RECOVER_HP = 30)] = "RECOVER_HP"),
            (e[(e.PROTECT = 31)] = "PROTECT");
    })(o.Talent || (o.Talent = {}));
var n = (function () {
    function e() {}
    return (e.LEADERBOARD = "lv"), e;
})();
(o.default = n),
    (function (e) {
        (e.normal = "normal"), (e.challenge = "challenge"), (e.Activity = "activity");
    })(o.GameSatet || (o.GameSatet = {})),
    (function (e) {
        (e[(e.Attacked = 1)] = "Attacked"), (e[(e.Burn = 2)] = "Burn"), (e[(e.Recovery = 3)] = "Recovery");
    })(o.DamageType || (o.DamageType = {})),
    (function (e) {
        (e[(e.Weapon = 1)] = "Weapon"),
            (e[(e.Clothe = 2)] = "Clothe"),
            (e[(e.BowTie = 3)] = "BowTie"),
            (e[(e.Belt = 4)] = "Belt"),
            (e[(e.Gloves = 5)] = "Gloves"),
            (e[(e.Shoe = 6)] = "Shoe");
    })(o.EquipMentPosition || (o.EquipMentPosition = {}));
