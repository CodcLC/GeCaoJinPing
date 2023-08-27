var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.RDMgr = o.RedDotManager = void 0);
var n = e("HeroData"),
    a = e("JsonManager"),
    i = e("PlayerData"),
    r = e("EquipManager"),
    s = e("talentManager"),
    c = e("HeroManager"),
    l = e("TaskManager"),
    p = e("ActivityManager"),
    u = (function () {
        function e() {}
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.checkNextTalent = function () {
                var e = 1010001,
                    t = 2010001,
                    n = s.talentMgr.getLeftTalent(),
                    a = s.talentMgr.getRightTalent();
                0 != n.length && (e = Number(Math.max.apply(null, n)) + 1),
                    0 != a.length && (t = Number(Math.max.apply(null, a)) + 1);
                var i = o.RDMgr.checkCurTalent(e),
                    r = o.RDMgr.checkCurTalent(t);
                if (i || r) return !0;
            }),
            (e.prototype.checkCurTalent = function (e) {
                var t = i.playData.getLevel(),
                    o = a.JsonMgr.getTalent()[e];
                if (!o) return !1;
                if (o.openlevel >= t) return !1;
                var n = o.demand.split("|");
                return "1001" === n[0]
                    ? i.playData.getGold() >= Number(n[1])
                    : "1014" === n[0]
                    ? i.playData.getPropeller() >= Number(n[1])
                    : void 0;
            }),
            (e.prototype.canTalentUp = function (e) {
                var t = !1;
                if (i.playData.checkTalentHasOpen(e.id.toString())) t = !1;
                else if (
                    i.playData.getLevel() - 1 >= e.openlevel &&
                    (i.playData.checkTalentHasOpen((e.id - 1).toString()) || 1010001 === e.id || 2010001 === e.id)
                ) {
                    var o = e.demand.split("|");
                    "1001" === o[0]
                        ? i.playData.getGold() >= Number(o[1]) && (t = !0)
                        : "1014" === o[0] && i.playData.getPropeller() >= Number(o[1]) && (t = !0);
                }
                return t;
            }),
            (e.prototype.checkEquipWear = function () {
                var e = !1,
                    t = n.heroData.getAllDress();
                if (6 === t.length) return !1;
                var o = [];
                t.forEach(function (e) {
                    o.push(e.equipment.getDressPos());
                });
                var a = n.heroData.getAllEquip();
                return (
                    (a.length > 0 && 0 == t.length) ||
                    (a.forEach(function (t) {
                        var n = t.equipment.getDressPos();
                        o.includes(n) || (e = !0);
                    }),
                    e)
                );
            }),
            (e.prototype.canEquipWear = function (e) {
                var t = n.heroData.getAllDress();
                if (6 === t.length) return !1;
                if (0 === t.length) return !0;
                var o = [];
                t.forEach(function (e) {
                    o.push(e.equipment.getDressPos());
                });
                var a = e.equipment.getDressPos();
                return !o.includes(a);
            }),
            (e.prototype.checkEquipUpLevel = function () {
                var e = !1;
                return (
                    n.heroData.getAllDress().forEach(function (t) {
                        r.equipMgr.checkLevelUp(t) && (e = !0);
                    }),
                    e
                );
            }),
            (e.prototype.checkEuipAutoDress = function () {
                for (var e = n.heroData.getAllDress(), t = n.heroData.getAllEquip(), o = [], a = 0; a < e.length; a++) {
                    var i = (s = e[a]).equipment.getType();
                    o.includes(i) || o.push(i);
                }
                for (var r = 0; r < t.length; r++)
                    if (((i = (p = t[r]).equipment.getType()), !o.includes(i))) return !0;
                for (a = 0; a < e.length; a++) {
                    var s,
                        c = (s = e[a]).equipment.getType(),
                        l = s.equipment.getAddProperty();
                    for (r = 0; r < t.length; r++) {
                        var p;
                        if (c == (p = t[r]).equipment.getType() && p.equipment.getAddProperty() > l) return !0;
                    }
                }
                return !1;
            }),
            (e.prototype.checkEquipUpGrade = function () {}),
            (e.prototype.checkShop = function () {}),
            (e.prototype.checkHeroLevelUp = function () {
                if (i.playData.getCompleteLevel() < Number(a.JsonMgr.getDefineConstantByName("HeroUnlockLevel")))
                    return !1;
                var e = c.heroMgr.getUnlockHero();
                if (!e) return !1;
                for (var t = 0; t < e.length; t++) {
                    var o = e[t];
                    if (!(o.level >= 100)) {
                        var n = a.JsonMgr.getHeroLossById(o.level);
                        if (i.playData.getGold() >= n.gold && i.playData.getHeroExperence() >= n.heroexp) return !0;
                    }
                }
                return !1;
            }),
            (e.prototype.checkHeroGradeUp = function () {
                if (i.playData.getCompleteLevel() < Number(a.JsonMgr.getDefineConstantByName("HeroUnlockLevel")))
                    return !1;
                var e = c.heroMgr.getUnlockHero();
                if (!e) return !1;
                for (var t = 0; t < e.length; t++) {
                    var o = e[t];
                    if (!(o.grade >= 5)) {
                        var n = a.JsonMgr.getHeroJson(o.id),
                            r = i.playData.getHeroDebris(Number(n.heropieceid)),
                            s = n.costheropiece.split(",")[o.grade];
                        if (s && Number(s) <= r) return !0;
                    }
                }
                return !1;
            }),
            (e.prototype.checkActivityRed = function (e) {
                return (
                    !!l.TaskMgr.checkActivityTaskCanGet(e) ||
                    !!p.activityManager.checkCanConvert(1) ||
                    p.activityManager.checkHasChest(1019) >= 1 ||
                    void 0
                );
            }),
            (e._instance = null),
            e
        );
    })();
(o.RedDotManager = u), (o.RDMgr = u.instance());
