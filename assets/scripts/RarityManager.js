var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.rarityMgr = o.RarityManager = void 0);
var n = e("CommonUtil"),
    a = e("RoleData"),
    i = e("JsonManager"),
    r = e("EquipManager"),
    s = (function () {
        function e() {
            this.rarityJson = [];
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.getRarityJson = function () {
                var e = this;
                if (0 === this.rarityJson.length) {
                    var t = i.JsonMgr.getJson("rarity");
                    Object.keys(t).map(function (o) {
                        var n = t[o];
                        e.rarityJson.push(n);
                    });
                }
                return Object.assign([], this.rarityJson);
            }),
            (e.prototype.diffWeaponJson = function (e) {
                for (var t = i.JsonMgr.getEquipById(r.equipMgr.getEquipSkillId()), o = e.length - 1; o >= 0; o--) {
                    var n = e[o];
                    t.type === n.type && n.id - t.id > 10 && e.splice(o, 1);
                }
                return e;
            }),
            (e.prototype.generateRarity = function () {
                var e = [],
                    t = i.JsonMgr.getDefineConstantByName("RarityFormula"),
                    o = this.getRarityJson();
                o = this.diffWeaponJson(o);
                var r = [],
                    s = [],
                    c = a.roleData.getRole();
                o.forEach(function (e) {
                    var o;
                    if (1 === e.type) {
                        o = i.JsonMgr.getEquipById(e.skillid);
                        var l = c.getFromEqpMap(o.type),
                            p = void 0;
                        if (
                            (l && (p = i.JsonMgr.getEquipById(l.id + 1)),
                            14 === o.type && c.getFromEqpMap(15) && c.getFromEqpMap(15).issuper)
                        )
                            return;
                        if (l && l.issuper) return;
                        if (l && 5 === l.level) {
                            if (!p) return;
                            var u = i.JsonMgr.getSkillById(l.link),
                                d = i.JsonMgr.getEquipById(l.link);
                            if (
                                !(
                                    (u && c.checkHasSkill(u.type)) ||
                                    (d && c.getFromEqpMap(d.type) && c.getFromEqpMap(d.type).level === d.level)
                                )
                            )
                                return;
                        }
                        6 === Array.from(a.roleData.getRole().getEquips()).length
                            ? l &&
                              (s.push(
                                  n.CommonUtil.calculateExe(t, {
                                      rate: e.rate,
                                      level: l ? p.level + 1 : 1,
                                      value: e.value
                                  })
                              ),
                              r.push(p))
                            : Array.from(a.roleData.getRole().getEquips()).length < 6 &&
                              (s.push(
                                  n.CommonUtil.calculateExe(t, {
                                      rate: e.rate,
                                      level: l ? p.level + 1 : 1,
                                      value: e.value
                                  })
                              ),
                              r.push(l ? p : o));
                    } else {
                        if (c.getRoleLevel() && 1 === c.getRoleLevel().level) return;
                        o = i.JsonMgr.getSkillById(e.skillid);
                        var h = c.getSkillLevel(o.type),
                            g = void 0;
                        if ((h && (g = i.JsonMgr.getSkillById(h.id + 1)), h && h.ismax)) return;
                        if (h && h.level >= 5) return;
                        6 === Array.from(a.roleData.getRole().getSkillArr()).length
                            ? h &&
                              (s.push(
                                  n.CommonUtil.calculateExe(t, {
                                      rate: e.rate,
                                      level: o ? o.level + 1 : 1,
                                      value: e.value
                                  })
                              ),
                              r.push(g))
                            : Array.from(a.roleData.getRole().getSkillArr()).length < 6 &&
                              (s.push(
                                  n.CommonUtil.calculateExe(t, {
                                      rate: e.rate,
                                      level: o ? o.level + 1 : 1,
                                      value: e.value
                                  })
                              ),
                              r.push(h ? g : o));
                    }
                });
                for (var l = 0; l < 3; l++)
                    if (!(r.length <= 0)) {
                        var p = n.CommonUtil.getWeightRandom(s);
                        e.push(r[p]), r.splice(p, 1), s.splice(p, 1);
                    }
                return e;
            }),
            (e.prototype.generateLanternViewData = function () {
                var e = a.roleData.getRole(),
                    t = e.getEquips(),
                    o = e.getSkillArr(),
                    r = this.getRarityJson(),
                    s = [],
                    c = [],
                    l = [],
                    p = [],
                    u = [],
                    d = [],
                    h = i.JsonMgr.getDefineConstantByName("RarityFormula");
                r.forEach(function (e) {
                    if (1 === e.type) {
                        var a = i.JsonMgr.getEquipById(e.skillid),
                            r = t.get(a.type);
                        if (r) {
                            var s = i.JsonMgr.getSkillById(r.link),
                                c = i.JsonMgr.getEquipById(r.link);
                            if (r.issuper) return;
                            if (
                                !(
                                    5 !== r.level ||
                                    (s && (o.get(s.type) || (c && t.get(c.type) && t.get(c.type).id === c.id)))
                                )
                            )
                                return;
                            p.push(e),
                                d.push(r.type),
                                u.push(n.CommonUtil.calculateExe(h, {rate: e.rate, level: 1, value: e.value}));
                        }
                    } else {
                        a = i.JsonMgr.getSkillById(e.skillid);
                        var l = o.get(a.type);
                        l &&
                            !l.ismax &&
                            (p.push(e),
                            d.push(l.type),
                            u.push(n.CommonUtil.calculateExe(h, {rate: e.rate, level: 1, value: e.value})));
                    }
                });
                for (var g = 0; g < 12; g++) {
                    var m = n.CommonUtil.getWeightRandom(u);
                    s.push(p[m]), c.push(u[m]), l.push(d[m]);
                }
                return {result: s, weightArr: c, hasTypeArr: l};
            }),
            (e._instance = null),
            e
        );
    })();
(o.RarityManager = s), (o.rarityMgr = s.instance());
