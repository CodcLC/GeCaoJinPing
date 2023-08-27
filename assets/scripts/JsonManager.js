var e = require;
var t = module;
var o = exports;
var n =
        (this && this.__awaiter) ||
        function (e, t, o, n) {
            return new (o || (o = Promise))(function (a, i) {
                function r(e) {
                    try {
                        c(n.next(e));
                    } catch (t) {
                        i(t);
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e));
                    } catch (t) {
                        i(t);
                    }
                }
                function c(e) {
                    var t;
                    e.done
                        ? a(e.value)
                        : ((t = e.value),
                          t instanceof o
                              ? t
                              : new o(function (e) {
                                    e(t);
                                })).then(r, s);
                }
                c((n = n.apply(e, t || [])).next());
            });
        },
    a =
        (this && this.__generator) ||
        function (e, t) {
            var o,
                n,
                a,
                i,
                r = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                };
            return (
                (i = {next: s(0), throw: s(1), return: s(2)}),
                "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                i
            );
            function s(e) {
                return function (t) {
                    return c([e, t]);
                };
            }
            function c(i) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; r; )
                    try {
                        if (
                            ((o = 1),
                            n &&
                                (a =
                                    2 & i[0]
                                        ? n.return
                                        : i[0]
                                        ? n.throw || ((a = n.return) && a.call(n), 0)
                                        : n.next) &&
                                !(a = a.call(n, i[1])).done)
                        )
                            return a;
                        switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return r.label++, {value: i[1], done: !1};
                            case 5:
                                r.label++, (n = i[1]), (i = [0]);
                                continue;
                            case 7:
                                (i = r.ops.pop()), r.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    r = 0;
                                    continue;
                                }
                                if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                    r.label = i[1];
                                    break;
                                }
                                if (6 === i[0] && r.label < a[1]) {
                                    (r.label = a[1]), (a = i);
                                    break;
                                }
                                if (a && r.label < a[2]) {
                                    (r.label = a[2]), r.ops.push(i);
                                    break;
                                }
                                a[2] && r.ops.pop(), r.trys.pop();
                                continue;
                        }
                        i = t.call(e, r);
                    } catch (s) {
                        (i = [6, s]), (n = 0);
                    } finally {
                        o = a = 0;
                    }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0};
            }
        };
Object.defineProperty(o, "__esModule", {value: !0}), (o.JsonMgr = o.JsonManager = void 0);
var i = e("LoadManager"),
    r = e("GameManager"),
    s = (function () {
        function e() {
            this.json = {};
        }
        return (
            (e.prototype.loadJson = function (e) {
                return n(this, void 0, void 0, function () {
                    var t = this;
                    return a(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return [4, i.LoadManager.loadResDirAwait("json", e)];
                            case 1:
                                return (
                                    o.sent().forEach(function (e) {
                                        t.json[e._name] = e.json;
                                    }),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (e.prototype.getJson = function (e) {
                return this.json[e];
            }),
            (e.prototype.getJsonById = function (e, t) {
                return this.json[e][t];
            }),
            (e.prototype.getInitUser = function () {
                return this.json.inituser[0];
            }),
            (e.prototype.getHeroJson = function (e) {
                return this.getJson("hero")[e];
            }),
            (e.prototype.getHeroSkillJson = function (e) {
                return this.getJson("heroskill")[e];
            }),
            (e.prototype.getLevelJson = function (e) {
                return this.getJson(r.gameMgr.isIos ? "mapios" : "map")[e];
            }),
            (e.prototype.getActivityLevelJson = function (e) {
                return this.getJson("zonemap")[e];
            }),
            (e.prototype.getLevelLen = function () {
                return Object.keys(this.getJson(r.gameMgr.isIos ? "mapios" : "map")).length;
            }),
            (e.prototype.getMonsterById = function (e) {
                return this.json.monster[e];
            }),
            (e.prototype.getEquipById = function (e) {
                return this.getJson("equipment")[e];
            }),
            (e.prototype.getSkillById = function (e) {
                return this.getJson("skill")[e];
            }),
            (e.prototype.getChapterLevelExp = function (e) {
                return this.getJson("chapterlevel")[e];
            }),
            (e.prototype.getAudioById = function (e) {
                return this.getJson("audio")[e];
            }),
            (e.prototype.getDefineConstantByName = function (e) {
                var t = this.getJson("defineconstant");
                for (var o in t) if (t[o].fieldname === e) return t[o].value;
                return null;
            }),
            (e.prototype.getBossSkillById = function (e) {
                return this.getJson("bossskill")[e];
            }),
            (e.prototype.getItemJsonById = function (e) {
                return this.getJson("item")[e];
            }),
            (e.prototype.getPoolById = function (e) {
                return this.getJson("rewardpool")[e];
            }),
            (e.prototype.getWeaponById = function (e) {
                return this.getJson("weapon")[e];
            }),
            (e.prototype.getWeaponLossById = function (e) {
                return this.getJson("weaponloss")[e];
            }),
            (e.prototype.getWeaponSkillById = function (e) {
                return this.getJson("weaponskill")[e];
            }),
            (e.prototype.getPatrolById = function (e) {
                return this.getJson("itemdrop")[e];
            }),
            (e.prototype.getChallenge = function () {
                return this.getJson("challengemap");
            }),
            (e.prototype.getMapById = function (e) {
                return this.getJson("challengemap")[e];
            }),
            (e.prototype.getTalent = function () {
                return this.getJson("science");
            }),
            (e.prototype.getAllZone = function () {
                var e = this.getJson("zone"),
                    t = [];
                return (
                    Object.keys(e).map(function (o) {
                        "0" !== o && t.push(e[o]);
                    }),
                    t
                );
            }),
            (e.prototype.getHeroLossById = function (e) {
                return this.getJson("heroloss")[e];
            }),
            (e.prototype.getCodeJson = function () {
                return this.getJson("code");
            }),
            (e.prototype.getZoneDrop = function (e) {
                return this.getJson("zonedrop")[e];
            }),
            (e.prototype.getAllActivity = function () {
                return this.getJson("activity");
            }),
            (e.prototype.getOpenActivity = function () {
                var e = this.getAllActivity(),
                    t = [];
                return (
                    Object.keys(e).map(function (o) {
                        var n = e[o],
                            a = n.opentime.split("-"),
                            i = new Date(a[0]).getTime(),
                            r = new Date(a[1]).getTime(),
                            s = new Date().getTime();
                        s >= i && s < r && t.push(n);
                    }),
                    t
                );
            }),
            (e.prototype.getActivityTaskById = function (e) {
                var t = this.getJson("exchangetask"),
                    o = [];
                return (
                    Object.keys(t).map(function (n) {
                        var a = t[n];
                        a.exchangeid === e && o.push(a);
                    }),
                    o
                );
            }),
            (e.prototype.getTask = function (e) {
                return this.getJson("exchangetask")[e];
            }),
            (e.prototype.getActivityTaskByTime = function () {
                var e = this,
                    t = new Map();
                return (
                    this.getOpenActivity().forEach(function (o) {
                        t.set(o.activityid, e.getActivityTaskById(o.activityid));
                    }),
                    t
                );
            }),
            (e.prototype.getActivityConvertByTime = function () {
                var e = this,
                    t = new Map();
                return (
                    this.getOpenActivity().forEach(function (o) {
                        t.set(o.activityid, e.getActivityShopById(o.activityid));
                    }),
                    t
                );
            }),
            (e.prototype.getActivityConvertById = function (e) {
                return this.getJson("exchangeshop")[e];
            }),
            (e.prototype.getActivityBingoByTime = function () {
                var e = this,
                    t = new Map();
                return (
                    this.getOpenActivity().forEach(function (o) {
                        t.set(o.activityid, e.getActivityBingoById(o.activityid));
                    }),
                    t
                );
            }),
            (e.prototype.getActivityShopById = function (e) {
                var t = this.getJson("exchangeshop"),
                    o = [];
                return (
                    Object.keys(t).map(function (n) {
                        var a = t[n];
                        a.exchangeid === e && o.push(a);
                    }),
                    o
                );
            }),
            (e.prototype.getExchangeShopById = function (e) {
                var t = this.getJson("exchangeshop"),
                    o = [];
                return (
                    Object.keys(t).map(function (n) {
                        var a = t[n];
                        a.exchangeid === e && o.push(a);
                    }),
                    o
                );
            }),
            (e.prototype.getActivityBingoById = function (e) {
                var t = this.getJson("exchangelottery"),
                    o = [];
                return (
                    Object.keys(t).map(function (n) {
                        t[n].activityid === e && o.push(t[n]);
                    }),
                    o
                );
            }),
            (e.prototype.getTryOutJson = function () {
                var e = this.getJson("trialplay"),
                    t = new Map();
                return (
                    Object.keys(e).map(function (o) {
                        var n = e[o],
                            a = Number(n.type),
                            i = t.get(a);
                        i ? i.push(n) : t.set(a, [n]);
                    }),
                    t
                );
            }),
            (e.instance = new e()),
            e
        );
    })();
(o.JsonManager = s), (o.JsonMgr = s.instance);
