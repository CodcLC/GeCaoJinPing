var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.heroData = o.HeroData = void 0);
var n = e("LocalStorage"),
    a = e("UIManager"),
    i = e("ClientEvents"),
    r = e("LocalConst"),
    s = e("ViewUrl"),
    c = e("EquipManager"),
    l = e("EquipmentConfig"),
    p = e("HeroManager"),
    u = e("JsonManager"),
    d = e("LanguageManager"),
    h = e("PlayerData"),
    g = e("ReporterBridge"),
    m = e("TalentAddManager"),
    f = e("AnalyticsManager"),
    y = e("TaskTypeManager"),
    v = e("TaskManager"),
    M = e("RoleData"),
    _ = (function () {
        function e() {
            (this.heroJson = null),
                (this.heroData = []),
                (this.dressData = []),
                (this.mapData = []),
                (this.dressAddMight = 0),
                (this.dressAddHp = 0);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.init = function () {
                var e = JSON.parse(JSON.stringify(n.LocalStorage.getData(r.LocalConst.HERO_DATA_NEW)));
                e
                    ? this.initEquipData(e)
                    : (e = JSON.parse(JSON.stringify(n.LocalStorage.getData(r.LocalConst.HERO_DATA))))
                    ? (this.initEquipData(e), n.LocalStorage.delete(r.LocalConst.HERO_DATA))
                    : (this.heroData = []);
                var t = n.LocalStorage.getData(r.LocalConst.HERO_DRESS_NEW);
                t
                    ? this.initDressData(t)
                    : (t = n.LocalStorage.getData(r.LocalConst.HERO_DRESS))
                    ? (this.initDressData(t), n.LocalStorage.delete(r.LocalConst.HERO_DRESS))
                    : (this.dressData = []);
                var o = n.LocalStorage.getData(r.LocalConst.MAP_DATA_NEW);
                o
                    ? (this.mapData = Object.values(o))
                    : (o = n.LocalStorage.getData(r.LocalConst.MAP_DATA))
                    ? ((this.mapData = Object.values(o)), n.LocalStorage.delete(r.LocalConst.MAP_DATA))
                    : (this.mapData = []),
                    this.saveHeroData(),
                    this.saveMapData(),
                    this.saveDressData(),
                    this.initDressAllHp(),
                    this.initDressAllMight();
            }),
            (e.prototype.initEquipData = function (e) {
                var t = this;
                Object.keys(e).map(function (o) {
                    var n = e[o];
                    if (n) {
                        var a = new l.EquipmentConfig();
                        a.init(n.id), (n.equipment = a), t.heroData.push(n);
                    }
                });
            }),
            (e.prototype.initDressData = function (e) {
                for (var t in e) {
                    var o = e[t];
                    if (o) {
                        var n = new l.EquipmentConfig();
                        n.init(o.id), (o.equipment = n), this.dressData.push(o);
                    }
                }
            }),
            (e.prototype.saveHeroData = function () {
                n.LocalStorage.setData(r.LocalConst.HERO_DATA_NEW, this.heroData), i.ClientEvents.EquipChange.emit();
            }),
            (e.prototype.saveMapData = function () {
                n.LocalStorage.setData(r.LocalConst.MAP_DATA_NEW, this.mapData), i.ClientEvents.DressChange.emit();
            }),
            (e.prototype.saveDressData = function () {
                n.LocalStorage.setData(r.LocalConst.HERO_DRESS_NEW, this.dressData),
                    i.ClientEvents.DressChange.emit(),
                    c.equipMgr.initAttrGrowth(),
                    this.checkDressDataInTask();
            }),
            (e.prototype.getHeroJson = function () {
                return this.heroJson;
            }),
            (e.prototype.getHeroIcon = function () {
                return this.heroJson.itemicon;
            }),
            (e.prototype.initHeroJson = function (e) {
                this.heroJson = u.JsonMgr.getHeroJson(e);
            }),
            (e.prototype.addEquip = function (e) {
                var t = new l.EquipmentConfig();
                t.init(e), this.heroData.push({id: e, equipment: t, count: 1, dress: !1}), this.saveHeroData();
            }),
            (e.prototype.getAllEquip = function () {
                return Object.values(this.heroData);
            }),
            (e.prototype.getAllDress = function () {
                return this.dressData;
            }),
            (e.prototype.getAllMap = function () {
                return Object.values(this.mapData);
            }),
            (e.prototype.addMap = function (e, t) {
                var o = !1;
                this.mapData.forEach(function (n) {
                    if (n.id == e) return (o = !0), void (n.num += t);
                }),
                    o ||
                        this.mapData.push({
                            id: e,
                            name: u.JsonMgr.getJsonById("item", e).name,
                            nameid: u.JsonMgr.getJsonById("item", e).nameid,
                            type: u.JsonMgr.getJsonById("item", e).type,
                            num: t
                        }),
                    this.saveMapData(),
                    g.ReporterBridge.setUserProperty({Blueprint: this.getMapCount()}),
                    g.ReporterBridge.setUserProperty({Blueprint_wuqi: this.getMapTypeCount(10)}),
                    g.ReporterBridge.setUserProperty({Blueprint_yifu: this.getMapTypeCount(11)}),
                    g.ReporterBridge.setUserProperty({Blueprint_xianglian: this.getMapTypeCount(12)}),
                    g.ReporterBridge.setUserProperty({Blueprint_yaodai: this.getMapTypeCount(13)}),
                    g.ReporterBridge.setUserProperty({Blueprint_shoutao: this.getMapTypeCount(14)}),
                    g.ReporterBridge.setUserProperty({Blueprint_xiezi: this.getMapTypeCount(15)});
            }),
            (e.prototype.dressUp = function (e) {
                if (e) {
                    for (var t = e.equipment.getIndex(), o = this.dressData.length - 1; o >= 0; o--) {
                        var n = this.dressData[o];
                        n && n.equipment.getIndex() === t && this.unloadDress(t);
                    }
                    (e.dress = !0), this.dressData.push(e);
                }
                var a = "";
                this.dressData.forEach(function (e) {
                    e && e.equipment && (a += e.equipment.getId());
                }),
                    this.initDressAllMight(),
                    this.initDressAllHp(),
                    this.saveDressData(),
                    this.saveHeroData(),
                    i.ClientEvents.LIST_CHANGE.emit(),
                    g.ReporterBridge.setUserProperty({Wear: a}),
                    f.analyMgr.reportEquipDress(e);
            }),
            (e.prototype.unloadDress = function (e) {
                for (var t = this.dressData.length - 1; t >= 0; t--) {
                    var o = this.dressData[t];
                    o &&
                        o.equipment.getIndex() == e &&
                        1 == o.dress &&
                        ((o.dress = !1), this.heroData.push(o), this.dressData.splice(t, 1));
                }
                this.initDressAllMight(),
                    this.initDressAllHp(),
                    this.saveDressData(),
                    this.saveHeroData(),
                    i.ClientEvents.LIST_CHANGE.emit();
            }),
            (e.prototype.getDressByPos = function (e) {
                return this.dressData[e].equipment;
            }),
            (e.prototype.initDressAllMight = function () {
                var e = this;
                return (
                    (this.dressAddMight = 0),
                    this.dressData.forEach(function (t) {
                        t && (e.dressAddMight += t.equipment.getMight());
                    }),
                    this.dressAddMight
                );
            }),
            (e.prototype.getHeroMight = function () {
                var e =
                    (c.equipMgr.addMightPercent +
                        c.equipMgr.roleAttackAddition +
                        p.heroMgr.getGrowthPercentById(h.playData.getHeroId()).atk) /
                        100 +
                    1;
                return (
                    (p.heroMgr.getHeroAtk(this.heroJson) +
                        this.initDressAllMight() +
                        (M.roleData.getRole() ? M.roleData.getRole().tryAdd : 0) +
                        m.talentAddMgr.mightAdd) *
                    e
                );
            }),
            (e.prototype.getCrit = function () {
                return p.heroMgr.getHeroCirt(this.heroJson) + c.equipMgr.addCritPercent + m.talentAddMgr.critRateAdd;
            }),
            (e.prototype.initDressAllHp = function () {
                var e = this;
                return (
                    (this.dressAddHp = 0),
                    this.dressData.forEach(function (t) {
                        t && (e.dressAddHp += t.equipment.getHp());
                    }),
                    this.dressAddHp
                );
            }),
            (e.prototype.getHeroHp = function () {
                var e =
                    (c.equipMgr.addPercentLife +
                        m.talentAddMgr.addLifePercent +
                        p.heroMgr.getGrowthPercentById(h.playData.getHeroId()).hp) /
                        100 +
                    1;
                return (p.heroMgr.getHeroHp(this.heroJson) + this.initDressAllHp() + m.talentAddMgr.lifeAdd) * e;
            }),
            (e.prototype.addHeroData = function (e) {
                this.heroData.push(e);
            }),
            (e.prototype.refreshAllData = function () {}),
            (e.prototype.getMapById = function (e) {
                var t = this.getAllMap(),
                    o = 0;
                return (
                    t.forEach(function (t) {
                        t.id == e && (o = t.num);
                    }),
                    o
                );
            }),
            (e.prototype.useMap = function (e, t) {
                this.getAllMap().forEach(function (o) {
                    o.id == e && (o.num >= t ? (o.num -= t) : (o.num = 0));
                }),
                    this.saveMapData(),
                    g.ReporterBridge.setUserProperty({Blueprint: this.getMapCount()}),
                    g.ReporterBridge.setUserProperty({Blueprint_wuqi: this.getMapTypeCount(10)}),
                    g.ReporterBridge.setUserProperty({Blueprint_yifu: this.getMapTypeCount(11)}),
                    g.ReporterBridge.setUserProperty({Blueprint_xianglian: this.getMapTypeCount(12)}),
                    g.ReporterBridge.setUserProperty({Blueprint_yaodai: this.getMapTypeCount(13)}),
                    g.ReporterBridge.setUserProperty({Blueprint_shoutao: this.getMapTypeCount(14)}),
                    g.ReporterBridge.setUserProperty({Blueprint_xiezi: this.getMapTypeCount(15)});
            }),
            (e.prototype.saveUnDress = function (e) {
                (this.heroData = []), this.initEquipData(e), this.saveHeroData();
            }),
            (e.prototype.saveDress = function (e) {
                (this.dressData = []), this.initDressData(e), this.saveDressData();
            }),
            (e.prototype.getMapCount = function () {
                var e = this.getAllMap(),
                    t = 0;
                return (
                    e.forEach(function (e) {
                        t += e.num;
                    }),
                    t
                );
            }),
            (e.prototype.getMapTypeCount = function (e) {
                var t = this.getAllMap(),
                    o = 0;
                return (
                    t.forEach(function (t) {
                        Number(t.type) == e && (o += t.num);
                    }),
                    o
                );
            }),
            (e.prototype.autoDressAll = function () {
                for (var e = [], t = [], o = this.dressData.length - 1; o >= 0; o--) {
                    var n = this.dressData[o];
                    e.push(n.id),
                        n && 1 == n.dress && ((n.dress = !1), this.heroData.push(n), this.dressData.splice(o, 1));
                }
                var r = [],
                    c = [];
                c = c.concat(this.heroData, this.dressData);
                var l = function (e) {
                    for (var t = [], o = 0; o < c.length; o++) {
                        var n = c[o];
                        n.equipment.getType() == e && t.push(n);
                    }
                    return t;
                };
                for (o = 1; o <= 6; o++) {
                    var p = {postion: o, dataArray: l(o)};
                    r.push(p);
                }
                for (o = 0; o < r.length; o++) {
                    for (var u = r[o], h = (u.postion, u.dataArray), g = -1, m = 0, f = 0; f < h.length; f++) {
                        var y = h[f].equipment.getAddProperty();
                        y > m && ((m = y), (g = f));
                    }
                    if (-1 != g) {
                        var v = h[g];
                        v && ((v.dress = !0), this.dressData.push(v), t.push(v.id));
                    }
                }
                for (o = this.heroData.length - 1; o >= 0; o--) this.heroData[o].dress && this.heroData.splice(o, 1);
                (t.length === e.length &&
                    0 ==
                        t.filter(function (t) {
                            return !e.includes(t);
                        }).length) ||
                    a.UIMgr.showView(s.ViewUrl.commonTip, null, d.langMgr.getStr("DressUpSuccess")),
                    this.initDressAllMight(),
                    this.initDressAllHp(),
                    this.saveDressData(),
                    this.saveHeroData(),
                    i.ClientEvents.DRESS_CHANGE.emit(),
                    i.ClientEvents.LIST_CHANGE.emit();
            }),
            (e.prototype.autoLevelUpAll = function () {
                for (var e = 0, t = [], o = 0; o < this.dressData.length; o++) {
                    var n = {
                        index: o,
                        before: (m = this.dressData[o]).equipment.getId(),
                        after: m.equipment.getId(),
                        useGold: 0,
                        useMapId: 0,
                        useMapNum: 0
                    };
                    t.push(n);
                }
                var r = h.playData.getGold(),
                    l = {};
                this.mapData.forEach(function (e) {
                    l["" + e.id] = Number(e.num);
                });
                for (
                    var p = function (t) {
                            e = 0;
                            for (
                                var o = function (o) {
                                        var n = t[o],
                                            a = c.equipMgr.getEquipConfigById2(n.after);
                                        if (a.isLevelMax()) return e++, "continue";
                                        var i = a.getWorth().split(","),
                                            s = [];
                                        i.forEach(function (e) {
                                            var t = e.split("|");
                                            s.push(t);
                                        }),
                                            l["" + s[1][0]] >= Number(s[1][1]) && r >= Number(s[0][1])
                                                ? ((l["" + s[1][0]] -= Number(s[1][1])),
                                                  (r -= Number(s[0][1])),
                                                  (n.useGold += Number(s[0][1])),
                                                  (n.useMapId = Number(s[1][0])),
                                                  (n.useMapNum += Number(s[1][1])),
                                                  n.after++)
                                                : e++;
                                    },
                                    n = 0;
                                n < t.length;
                                n++
                            )
                                o(n);
                        },
                        u = 0;
                    e != this.dressData.length && u < 100;

                )
                    u++, p(t);
                var g = !1;
                for (o = 0; o < t.length; o++) {
                    var m;
                    if ((m = t[o]).after - m.before > 0) {
                        g = !0;
                        var f = this.dressData[m.index];
                        f.equipment.init(m.after),
                            (f.id = m.after),
                            c.equipMgr.useMap(m.useMapId, m.useMapNum),
                            h.playData.useGold(m.useGold),
                            y.TaskTypeMgr.equitLevelUpTimesTask(m.after - m.before),
                            v.TaskMgr.addActivityTaskPro(6, m.after - m.before);
                    }
                }
                g &&
                    (a.UIMgr.showView(s.ViewUrl.commonTip, null, d.langMgr.getStr("LevelUpSuccess")),
                    this.initDressAllMight(),
                    this.initDressAllHp(),
                    this.saveDressData(),
                    this.saveHeroData(),
                    i.ClientEvents.DRESS_CHANGE.emit(),
                    i.ClientEvents.LIST_CHANGE.emit());
            }),
            (e.prototype.autoCompoundAll = function () {
                var e = this,
                    t = [],
                    n = {gold: 0, map: {}},
                    r = [];
                r = r.concat(this.dressData, this.heroData);
                for (
                    var l = [],
                        p = function () {
                            var e = {},
                                t = r.shift();
                            if (r.length <= 0) cc.log("装备不足以完成一次计算");
                            else if (-1 !== t.equipment.getNextId()) {
                                e.upItem = t;
                                var o = c.equipMgr.getDataEarlyId(t),
                                    a = Number(c.equipMgr.getUpGradeNum(t));
                                e.sacrifice = [];
                                for (var i = 0, s = 0; s < a; s++)
                                    for (; i < r.length; i++) {
                                        var p = r[i];
                                        if (c.equipMgr.getDataEarlyId(p) === o) {
                                            e.sacrifice.push(p.equipment.getId());
                                            var u = c.equipMgr.getDecompose(p);
                                            if (u) {
                                                n.gold += u.goldNum;
                                                var d = u.mapid;
                                                n.map[d] ? (n.map[d] += u.mapNum) : (n.map[d] = u.mapNum);
                                            }
                                            r.splice(i, 1);
                                            break;
                                        }
                                        if (i === r.length) return;
                                    }
                                Number(e.sacrifice.length) === a && ((e.nextId = t.equipment.getNextId()), l.push(e));
                            } else cc.log("没有可以合成的");
                        };
                    r.length > 0;

                )
                    p();
                l.forEach(function (o) {
                    var n = [];
                    if (
                        (y.TaskTypeMgr.equitMergeTimesTask(1),
                        t.push({id: o.nextId, count: 1}),
                        o.sacrifice.forEach(function (t) {
                            for (var o = 0; o < e.heroData.length; o++) {
                                var a = e.heroData[o];
                                if (a.equipment.getId() === Number(t)) {
                                    e.heroData.splice(o, 1),
                                        n.push(a.equipment.getId()),
                                        f.analyMgr.reportUseItem("Weapon", a.equipment.getId(), 1, "Mix");
                                    break;
                                }
                            }
                        }),
                        o.upItem.dress)
                    ) {
                        for (var a = 0; a < e.dressData.length; a++)
                            if (e.dressData[a].equipment.getId() === o.upItem.equipment.getId()) {
                                e.dressData[a] = c.equipMgr.getDataById(o.nextId, !0);
                                break;
                            }
                    } else
                        for (a = 0; a < e.heroData.length; a++)
                            if (e.heroData[a].equipment.getId() === o.upItem.equipment.getId()) {
                                e.heroData[a] = c.equipMgr.getDataById(o.nextId, !1);
                                break;
                            }
                    f.analyMgr.reportEquipMerge(c.equipMgr.getDataById(o.nextId), n.join(), !0);
                }),
                    l.length &&
                        (n.gold &&
                            (t.push({id: 1001, count: n.gold}),
                            h.playData.addGold(Number(n.gold)),
                            f.analyMgr.reportGetGold(Number(n.gold), "Compound"),
                            Object.keys(n.map).forEach(function (e) {
                                t.push({id: Number(e), count: n.map[e]}),
                                    o.heroData.addMap(Number(e), Number(n.map[e])),
                                    c.equipMgr.addMap(Number(e), Number(n.map[e]));
                            })),
                        a.UIMgr.showView(s.ViewUrl.ScrollRewardView, null, t),
                        this.saveDress(this.dressData),
                        this.saveUnDress(this.heroData),
                        i.ClientEvents.COMPOUND_CHANGE.emit(null),
                        i.ClientEvents.CompoundChange.emit(),
                        i.ClientEvents.DRESS_CHANGE.emit());
            }),
            (e.prototype.getCanCompound = function () {
                var e = [];
                if ((e = e.concat(this.dressData, this.heroData)).length <= 1) return !1;
                for (; e.length > 0; ) {
                    var t = e.shift();
                    if (e.length <= 0) return !1;
                    if (-1 !== t.equipment.getNextId()) {
                        for (
                            var o = c.equipMgr.getDataEarlyId(t),
                                n = Number(c.equipMgr.getUpGradeNum(t)),
                                a = 0,
                                i = 0,
                                r = 0;
                            r < n;
                            r++
                        )
                            for (; a < e.length; a++) {
                                var s = e[a];
                                if (c.equipMgr.getDataEarlyId(s) === o) {
                                    i++, e.splice(a, 1);
                                    break;
                                }
                                if (a === e.length) break;
                            }
                        if (i === n) return !0;
                    }
                }
                return !1;
            }),
            (e.prototype.checkDressDataInTask = function () {
                var e = 0,
                    t = 0,
                    o = 0,
                    n = 0,
                    a = 0,
                    i = [];
                this.dressData.forEach(function (r) {
                    if (r && r.equipment) {
                        var s = r.equipment.getQualityIndex();
                        s >= 6 ? a++ : s >= 3 ? n++ : s >= 2 ? o++ : s >= 1 ? t++ : e++;
                        var c = r.equipment.getLevel();
                        i.push(c);
                    }
                });
                var r = {qualityLv1: e, qualityLv2: t, qualityLv3: o, qualityLv4: n, qualityLv5: a, levelArray: i};
                y.TaskTypeMgr.setContentTypeNumQuipTask(r);
            }),
            (e._instance = new e()),
            e
        );
    })();
(o.HeroData = _), (o.heroData = _.instance());
