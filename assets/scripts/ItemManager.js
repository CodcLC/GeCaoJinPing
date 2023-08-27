var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.itemMgr = o.ItemManager = void 0);
var n = e("CommonUtil"),
    a = e("AnalyticsManager"),
    i = e("AchieveManager"),
    r = e("ActivityLevelManager"),
    s = e("HeroData"),
    c = e("JsonManager"),
    l = e("PlayerData"),
    p = e("SevenChallengeManager"),
    u = (function () {
        function e() {}
        return (
            (e.getInstance = function () {
                return this.instance || (this.instance = new e()), this.instance;
            }),
            (e.prototype.addItemData = function (e, t, u) {
                u || (cc.warn("通用获得缺少获得方式参数"), (u = ""));
                var d = Number(e),
                    h = Number(t);
                if (1001 === d) l.playData.addGold(h), a.analyMgr.reportGetGold(h, u);
                else if (1002 === d) l.playData.addGem(h), a.analyMgr.reportGetGem(h, u);
                else if (1003 === d) l.playData.addEnergy(h), a.analyMgr.reportGetEnergy(h, u);
                else if (1014 === d) l.playData.addPropeller(h), a.analyMgr.reportGetItem("Booster", d, h, u);
                else if (1015 === d) p.SevenChallengeMgr.addChallengePoint(h);
                else if (1016 === d);
                else if (1017 === d) l.playData.addHeroExperience(h);
                else if (d > 1017 && d < 1020) r.activityMgr.saveItemToMap(d, h);
                else if (1020 == d) i.AchieveMgr.addAchieveExp(h);
                else if (2001 === d) l.playData.addNormalKey(h), a.analyMgr.reportGetItem("Key", d, h, u);
                else if (2002 === d) l.playData.addSuperKey(h), a.analyMgr.reportGetItem("Key", d, h, u);
                else if (2003 === d) l.playData.addSSRKey(h), a.analyMgr.reportGetItem("Key", d, h, u);
                else if (d > 3e3 && d < 3005) l.playData.addHeroDebris(d, h), a.analyMgr.reportGetItem("Hero", d, h, u);
                else if (d > 1e5 && d < 9e5) {
                    if (1 === h) s.heroData.addEquip(d, 1), a.analyMgr.reportGetItem("Weapon", d, h, u);
                    else
                        for (var g = 0; g < h; g++)
                            s.heroData.addEquip(d, 1), a.analyMgr.reportGetItem("Weapon", d, h, u);
                } else if (d > 1e4 && d < 10010)
                    s.heroData.addMap(d, h), a.analyMgr.reportGetItem("Blueprint", d, h, u);
                else if (1017 === d) l.playData.addHeroExperience(h), a.analyMgr.reportGetItem("HeroExp", d, h, u);
                else if (d > 1017 && d < 1020) r.activityMgr.saveItemToMap(d, h);
                else if (
                    3e3 === d ||
                    1010303 === d ||
                    1010304 === d ||
                    1010305 === d ||
                    1010306 === d ||
                    1010307 === d
                ) {
                    var m = [],
                        f = {},
                        y = c.JsonMgr.getPoolById(d),
                        v = [],
                        M = [],
                        _ = [];
                    for (this.analyseRate(y, v, M, _), g = 0; g < h; g++) {
                        var C = n.CommonUtil.getWeightRandom(_),
                            b = v[C],
                            T = M[C];
                        f[b] = f[b] ? f[b] + T : T;
                    }
                    return (
                        Object.keys(f).map(function (e) {
                            var t = Number(e),
                                n = Number(f[e]);
                            300 !== t &&
                            1010303 !== t &&
                            1010304 !== t &&
                            1010305 !== t &&
                            1010306 !== t &&
                            1010307 !== t
                                ? (o.itemMgr.addItemData(t, n, u), m.push({id: t, count: n}))
                                : cc.warn("随机奖池id异常：", t);
                        }),
                        m
                    );
                }
            }),
            (e.prototype.analyseRate = function (e, t, o, n) {
                e.idrate.split(";").forEach(function (e) {
                    var a = e.split("|");
                    t.push(Number(a[0])), o.push(Number(a[1])), n.push(Number(a[2]));
                });
            }),
            (e.instance = null),
            e
        );
    })();
(o.ItemManager = u), (o.itemMgr = u.getInstance());
