var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.GameDataQuerier = void 0);
var n = e("TimeUtil"),
    a = e("EquipManager"),
    i = e("PlayerData"),
    r = (function () {
        function e() {}
        return (
            (e.prototype.isNew = function () {
                return n.TimeUtil.isSameUtcDay(i.playData.getCreateDate(), Date.now());
            }),
            (e.prototype.MaxChapter = function () {
                return i.playData.getLevel();
            }),
            (e.prototype.Gold = function () {
                return i.playData.getGold();
            }),
            (e.prototype.Gem = function () {
                return i.playData.getGem();
            }),
            (e.prototype.Talent = function () {
                return i.playData.getTalent().length;
            }),
            (e.prototype.ATK = function () {
                return Number(a.equipMgr.getDamage());
            }),
            (e.prototype.MaxHP = function () {
                return Number(a.equipMgr.getHp());
            }),
            (e.prototype.Ener = function () {
                return i.playData.getEnergy();
            }),
            e
        );
    })();
o.GameDataQuerier = r;
