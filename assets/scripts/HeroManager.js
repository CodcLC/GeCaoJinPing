var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.heroMgr = o.HeroManager = void 0);
var n = e("EquipManager"),
    a = e("HeroData"),
    i = e("JsonManager"),
    r = e("PlayerData"),
    s = e("TalentAddManager"),
    c = (function () {
        function e() {
            (this.touchHeroId = null),
                (this.heroData = []),
                (this.addHandWeapon = 0),
                (this.addCritPercent = 0),
                (this.addMightPercent = 0),
                (this.addPercentLife = 0),
                (this.addRecoveryPercent = 0),
                (this.addCdPercent = 0),
                (this.addFoodPercent = 0),
                (this.shieldAddPercent = 0),
                (this.addSpeedPercent = 0),
                (this.addExpPercent = 0),
                (this.shieldRecover = 0),
                (this.shieldDamage = 0),
                (this.addHandWeaponPercent = 0),
                (this.grenadeNum = 0);
        }
        return (
            (e.getInstance = function () {
                return this.instance || (this.instance = new e()), this.instance;
            }),
            (e.prototype.getHeroDataArray = function () {
                var e = this;
                if (!this.heroData.length) {
                    var t = i.JsonMgr.getJson("hero");
                    Object.keys(t).map(function (o) {
                        var n = t[o];
                        n && n.id && e.heroData.push(n);
                    });
                }
                return this.heroData;
            }),
            (e.prototype.getIsBattleHero = function (e) {
                return o.heroMgr.getHeroLocalStorage().hero.id === e;
            }),
            (e.prototype.getBattleHero = function () {
                return o.heroMgr.getHeroLocalStorage().hero;
            }),
            (e.prototype.getHeroLocalStorage = function () {
                return r.playData.getHeroInfo();
            }),
            (e.prototype.getUnlockHero = function () {
                var e = r.playData.getHeroInfo();
                return e && e.allHero ? e.allHero : null;
            }),
            (e.prototype.getIsUnlockHero = function (e) {
                var t = o.heroMgr.getUnlockHero(),
                    n = !1;
                if (t)
                    for (var a = 0; a < t.length; a++)
                        if (t[a].id === e) {
                            n = !0;
                            break;
                        }
                return n;
            }),
            (e.prototype.getHeroOwnDebris = function (e) {
                var t = e.heropieceid;
                return r.playData.getHeroDebris(t);
            }),
            (e.prototype.getHeroOwnVideo = function (e) {
                var t = e.heropieceid;
                return r.playData.getHeroVideo(t);
            }),
            (e.prototype.getHeroUnlockDebris = function (e) {
                return e.unlocktype.split("|");
            }),
            (e.prototype.getHeroStorageInfo = function (e) {
                var t = o.heroMgr.getUnlockHero();
                if (t) for (var n = 0; n < t.length; n++) if (t[n].id === e) return t[n];
                return null;
            }),
            (e.prototype.getHeroAttribute = function (e, t) {
                void 0 === t && (t = !1);
                var r = {atk: 0, hp: 0},
                    c = i.JsonMgr.getHeroJson(e),
                    l = o.heroMgr.getHeroStorageInfo(e);
                if (l) {
                    var p = o.heroMgr.getGrowthPercentById(l.id, !1, !1);
                    if (t) {
                        var u = o.heroMgr.getGrowthPercentById(l.id, !0, !1),
                            d =
                                Number(c.might) +
                                o.heroMgr.getGrowth(
                                    l.level + 1,
                                    c.levelupinterval.split(","),
                                    c.levelupatk.split(",")
                                ) +
                                u.atk,
                            h =
                                Number(c.maxhealth) +
                                o.heroMgr.getGrowth(l.level + 1, c.levelupinterval.split(","), c.leveluphp.split(",")) +
                                u.hp;
                        if (o.heroMgr.getIsBattleHero(e)) {
                            var g = (n.equipMgr.addMightPercent + n.equipMgr.roleAttackAddition + p.atk) / 100 + 1,
                                m = (d + a.heroData.initDressAllMight() + s.talentAddMgr.mightAdd) * g;
                            r.atk = m;
                            var f = (n.equipMgr.addPercentLife + s.talentAddMgr.addLifePercent + p.hp) / 100 + 1,
                                y = (h + a.heroData.initDressAllHp() + s.talentAddMgr.lifeAdd) * f;
                            r.hp = y;
                        } else (r.atk = d + (d * p.atk) / 100), (r.hp = h + (h * p.hp) / 100);
                    } else
                        (d =
                            Number(c.might) +
                            o.heroMgr.getGrowth(l.level, c.levelupinterval.split(","), c.levelupatk.split(","))),
                            (h =
                                Number(c.maxhealth) +
                                o.heroMgr.getGrowth(l.level, c.levelupinterval.split(","), c.leveluphp.split(","))),
                            o.heroMgr.getIsBattleHero(e)
                                ? ((g = (n.equipMgr.addMightPercent + n.equipMgr.roleAttackAddition + p.atk) / 100 + 1),
                                  (m = (d + a.heroData.initDressAllMight() + s.talentAddMgr.mightAdd) * g),
                                  (r.atk = m),
                                  (f = (n.equipMgr.addPercentLife + s.talentAddMgr.addLifePercent + p.hp) / 100 + 1),
                                  (y = (h + a.heroData.initDressAllHp() + s.talentAddMgr.lifeAdd) * f),
                                  (r.hp = y))
                                : ((r.atk = d + (d * p.atk) / 100), (r.hp = h + (h * p.hp) / 100));
                }
                return r;
            }),
            (e.prototype.getHeroStarAttribute = function (e, t) {
                void 0 === t && (t = !1);
                var r = {atk: 0, hp: 0},
                    c = i.JsonMgr.getHeroJson(e),
                    l = o.heroMgr.getHeroStorageInfo(e);
                if (l) {
                    var p = o.heroMgr.getGrowth(l.level, c.levelupinterval.split(","), c.levelupatk.split(",")),
                        u = o.heroMgr.getGrowth(l.level, c.levelupinterval.split(","), c.leveluphp.split(",")),
                        d = o.heroMgr.getGrowthPercentById(l.id, !1, !1);
                    if (t) {
                        var h = o.heroMgr.getGrowthPercentById(l.id, !1, !0);
                        if (o.heroMgr.getIsBattleHero(e)) {
                            var g = (n.equipMgr.addMightPercent + n.equipMgr.roleAttackAddition + h.atk) / 100 + 1,
                                m =
                                    (Number(c.might) + p + a.heroData.initDressAllMight() + s.talentAddMgr.mightAdd) *
                                    g;
                            r.atk = m;
                            var f = (n.equipMgr.addPercentLife + s.talentAddMgr.addLifePercent + h.hp) / 100 + 1,
                                y =
                                    (Number(c.maxhealth) + u + a.heroData.initDressAllHp() + s.talentAddMgr.lifeAdd) *
                                    f;
                            r.hp = y;
                        } else
                            (r.atk = Number(c.might) + p + ((Number(c.might) + p) * h.atk) / 100),
                                (r.hp = Number(c.maxhealth) + u + ((Number(c.maxhealth) + u) * h.hp) / 100);
                    } else
                        o.heroMgr.getIsBattleHero(e)
                            ? ((g = (n.equipMgr.addMightPercent + n.equipMgr.roleAttackAddition + d.atk) / 100 + 1),
                              (m =
                                  (Number(c.might) + p + a.heroData.initDressAllMight() + s.talentAddMgr.mightAdd) * g),
                              (r.atk = m),
                              (f = (n.equipMgr.addPercentLife + s.talentAddMgr.addLifePercent + d.hp) / 100 + 1),
                              (y =
                                  (Number(c.maxhealth) + u + a.heroData.initDressAllHp() + s.talentAddMgr.lifeAdd) * f),
                              (r.hp = y))
                            : ((r.atk = Number(c.might) + p + ((Number(c.might) + p) * d.atk) / 100),
                              (r.hp = Number(c.maxhealth) + u + ((Number(c.maxhealth) + u) * d.hp) / 100));
                }
                return r;
            }),
            (e.prototype.getGrowth = function (e, t, o) {
                var n = 0;
                return e <= 1
                    ? n
                    : ((e -= 1),
                      t.forEach(function (a, i) {
                          var r = Number(a),
                              s = Number(o[i]),
                              c = r - (Number(t[i - 1]) || 1);
                          c <= e
                              ? ((e -= c), (n += (c = c < 0 ? 0 : c) * s))
                              : ((c = e), (e = 0), (n += (c = c < 0 ? 0 : c) * s));
                      }),
                      n);
            }),
            (e.prototype.getHeroLevel = function (e) {
                var t = r.playData.getHeroInfo();
                if (t && t.allHero)
                    for (var o = 0; o < t.allHero.length; o++) if (t.allHero[o].id === e) return t.allHero[o].level;
                return null;
            }),
            (e.prototype.getHeroGrade = function (e) {
                var t = r.playData.getHeroInfo();
                if (t && t.allHero)
                    for (var o = 0; o < t.allHero.length; o++) if (t.allHero[o].id === e) return t.allHero[o].grade;
                return null;
            }),
            (e.prototype.getHeroSkill = function (e) {
                var t = [],
                    n = i.JsonMgr.getHeroJson(e),
                    a = o.heroMgr.getHeroStorageInfo(e);
                if (a) {
                    var r = n.upskillid.split(",");
                    n.uplevel.split(",").forEach(function (e, o) {
                        "0" != e && a.level >= e && t.push(r[o]);
                    }),
                        n.starskillid.split(",").forEach(function (e, o) {
                            a.grade >= o && t.push(e);
                        });
                }
                return t;
            }),
            (e.prototype.getHeroNextLevelSkill = function (e) {
                var t = [],
                    n = i.JsonMgr.getHeroJson(e),
                    a = o.heroMgr.getHeroStorageInfo(e);
                if (a) {
                    var r = n.upskillid.split(",");
                    n.uplevel.split(",").forEach(function (e, o) {
                        "0" != e && a.level + 1 >= e && t.push(r[o]);
                    }),
                        n.starskillid.split(",").forEach(function (e, o) {
                            a.grade >= o && t.push(e);
                        });
                }
                return t;
            }),
            (e.prototype.getHeroNextGradeSkill = function (e) {
                var t = [],
                    n = i.JsonMgr.getHeroJson(e),
                    a = o.heroMgr.getHeroStorageInfo(e);
                if (a) {
                    var r = n.upskillid.split(",");
                    n.uplevel.split(",").forEach(function (e, o) {
                        "0" != e && a.level >= e && t.push(r[o]);
                    }),
                        n.starskillid.split(",").forEach(function (e, o) {
                            a.grade + 1 >= o && t.push(e);
                        });
                }
                return t;
            }),
            (e.prototype.initHeroGrowth = function () {
                var e = this;
                this.resetGrowthData();
                var t = r.playData.getHeroId();
                o.heroMgr.getHeroSkill(t).forEach(function (t) {
                    if (t) {
                        var o = i.JsonMgr.getHeroSkillJson(t);
                        o && e.setTypeAdd(o);
                    }
                });
            }),
            (e.prototype.setTypeAdd = function (e) {
                var t = e.numerical;
                switch (e.type) {
                    case 1:
                        this.addPercentLife += Number(t);
                        break;
                    case 2:
                        this.addRecoveryPercent += Number(t);
                        break;
                    case 4:
                        this.addSpeedPercent += Number(t);
                        break;
                    case 5:
                        this.addMightPercent += Number(t);
                        break;
                    case 6:
                        this.addCritPercent += Number(t);
                        break;
                    case 12:
                        this.addCdPercent += Number(t);
                        break;
                    case 13:
                        this.grenadeNum += Number(t);
                        break;
                    case 16:
                        this.addExpPercent += Number(t);
                        break;
                    case 18:
                        this.addHandWeapon += Number(t);
                        break;
                    case 19:
                        this.addFoodPercent += Number(t);
                        break;
                    case 20:
                        this.addHandWeaponPercent += Number(t);
                }
            }),
            (e.prototype.resetGrowthData = function () {
                (this.addCritPercent = 0),
                    (this.addMightPercent = 0),
                    (this.addPercentLife = 0),
                    (this.addRecoveryPercent = 0),
                    (this.addCdPercent = 0),
                    (this.addFoodPercent = 0),
                    (this.shieldAddPercent = 0),
                    (this.addExpPercent = 0);
            }),
            (e.prototype.getHeroAtk = function (e) {
                var t = o.heroMgr.getHeroStorageInfo(e.id),
                    n = e.might;
                return (
                    t &&
                        (n += Number(
                            o.heroMgr.getGrowth(t.level, e.levelupinterval.split(","), e.levelupatk.split(","))
                        )),
                    Math.floor(n)
                );
            }),
            (e.prototype.getHeroHp = function (e) {
                var t = o.heroMgr.getHeroStorageInfo(e.id),
                    n = e.maxhealth;
                return (
                    t &&
                        (n += Number(
                            o.heroMgr.getGrowth(t.level, e.levelupinterval.split(","), e.leveluphp.split(","))
                        )),
                    Math.floor(n)
                );
            }),
            (e.prototype.getHeroCirt = function (e) {
                var t = o.heroMgr.getHeroStorageInfo(e.id),
                    n = e.crit;
                return t && (n = Number(n + o.heroMgr.addCritPercent)), Math.floor(n);
            }),
            (e.prototype.getGrowthPercentById = function (e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var a = 0,
                    r = 0,
                    s = function (e) {
                        var t = e.numerical;
                        switch (e.type) {
                            case 1:
                                r += Number(t);
                                break;
                            case 5:
                                a += Number(t);
                        }
                    };
                return (
                    (t
                        ? o.heroMgr.getHeroNextLevelSkill(e)
                        : n
                        ? o.heroMgr.getHeroNextGradeSkill(e)
                        : o.heroMgr.getHeroSkill(e)
                    ).forEach(function (e) {
                        if (e) {
                            var t = i.JsonMgr.getHeroSkillJson(e);
                            t && s(t);
                        }
                    }),
                    {atk: a, hp: r}
                );
            }),
            (e.prototype.getTotalHp = function (e) {
                var t =
                    (n.equipMgr.addPercentLife +
                        s.talentAddMgr.addLifePercent +
                        o.heroMgr.getGrowthPercentById(e.id).hp) /
                        100 +
                    1;
                return ((o.heroMgr.getHeroHp(e) + a.heroData.initDressAllHp() + s.talentAddMgr.lifeAdd) * t).toFixed(0);
            }),
            (e.prototype.getTotalAtk = function (e) {
                var t =
                    (n.equipMgr.addMightPercent +
                        n.equipMgr.roleAttackAddition +
                        o.heroMgr.getGrowthPercentById(e.id).atk) /
                        100 +
                    1;
                return (
                    (o.heroMgr.getHeroAtk(e) + a.heroData.initDressAllMight() + s.talentAddMgr.mightAdd) *
                    t
                ).toFixed(0);
            }),
            (e.prototype.checkHeroLevelUp = function (e) {
                var t = o.heroMgr.getHeroLevel(e);
                if (!t || t >= 100) return !1;
                var n = i.JsonMgr.getHeroLossById(t);
                return r.playData.getGold() >= n.gold && r.playData.getHeroExperence() >= n.heroexp;
            }),
            (e.prototype.checkHeroGradeUp = function (e) {
                var t = i.JsonMgr.getHeroJson(e),
                    n = o.heroMgr.getHeroStorageInfo(e);
                if (!o.heroMgr.getIsUnlockHero(e)) return !1;
                if (t && n.grade < 5) {
                    var a = r.playData.getHeroDebris(Number(t.heropieceid)),
                        s = t.costheropiece.split(",")[n.grade];
                    if (s && Number(s) <= a) return !0;
                }
                return !1;
            }),
            (e.prototype.checkHeroCanUnlock = function (e) {
                if (!o.heroMgr.getIsUnlockHero(e)) {
                    var t = i.JsonMgr.getHeroJson(e);
                    if (t) {
                        var n = t.unlocktype.split("|");
                        if (1 == Number(n[0])) return r.playData.getHeroDebris(t.heropieceid) >= Number(n[1]);
                        if (2 == Number(n[0])) return r.playData.getHeroVideo(t.heropieceid) >= Number(n[1]);
                    }
                }
                return !1;
            }),
            (e.prototype.checkHeroLock = function () {
                var e = [],
                    t = o.heroMgr.getUnlockHero();
                t &&
                    t.forEach(function (t) {
                        e.push(t.id);
                    });
                for (var n = i.JsonMgr.getJson("hero"), a = Object.keys(n), r = 0; r < a.length; r++) {
                    var s = a[r];
                    if (!e.includes(Number(s)) && o.heroMgr.checkHeroCanUnlock(Number(s))) return !0;
                }
                return !1;
            }),
            (e.prototype.setTouchHero = function (e) {
                this.touchHeroId = e;
            }),
            (e.prototype.getTouchHero = function () {
                return this.touchHeroId;
            }),
            (e.prototype.resetTouchHero = function () {
                this.touchHeroId = null;
            }),
            (e.instance = null),
            e
        );
    })();
(o.HeroManager = c), (o.heroMgr = c.getInstance());
