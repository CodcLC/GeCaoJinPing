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
Object.defineProperty(o, "__esModule", {value: !0}), (o.SevenLoginMgr = void 0);
var i = e("LocalStorage"),
    r = e("AutoPopManager"),
    s = e("UIManager"),
    c = e("ClientEvents"),
    l = e("LocalConst"),
    p = e("ViewUrl"),
    u = e("CommonUtil"),
    d = e("AnalyticsManager"),
    h = e("challengeManager"),
    g = e("HeroData"),
    m = e("JsonManager"),
    f = e("PlayerData"),
    y = (function () {
        function e() {
            (this._allJson = null),
                (this._allJsonKeys = null),
                (this._sevenLoginDatas = null),
                (this._nextRewardTime = -1),
                (this.drawIdArr = []),
                (this.drawRateArr = []),
                (this.equipIdArr = []),
                (this.equipRateArr = []);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.initSevenLoginData = function () {
                return n(this, void 0, void 0, function () {
                    return a(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (
                                    (this._allJson = m.JsonMgr.getJson("sevenlogin")),
                                    (this._allJsonKeys = Object.keys(this._allJson).sort(function (e, t) {
                                        return Number(e) - Number(t);
                                    })),
                                    [4, this._initSevenLoginData()]
                                );
                            case 1:
                                return (
                                    e.sent(), (this._nextRewardTime = this._getNextRewardTime()), this.initRate(), [2]
                                );
                        }
                    });
                });
            }),
            (e.prototype._initSevenLoginData = function () {
                return n(this, void 0, void 0, function () {
                    var e;
                    return a(this, function () {
                        return (
                            (e = i.LocalStorage.getData(l.LocalConst.SEVEN_LOGIN_DATAS_NEW))
                                ? (this._sevenLoginDatas = e)
                                : ((e = i.LocalStorage.getData(l.LocalConst.SEVEN_LOGIN_DATAS))
                                      ? ((this._sevenLoginDatas = e),
                                        i.LocalStorage.delete(l.LocalConst.SEVEN_LOGIN_DATAS))
                                      : this._initBaseDatas(),
                                  this._saveDatas()),
                            [2]
                        );
                    });
                });
            }),
            (e.prototype._initBaseDatas = function () {
                var e = this;
                (this._sevenLoginDatas = {}),
                    Object.keys(this._allJson).map(function (t) {
                        var o = e._allJson[t];
                        e._sevenLoginDatas["" + o.id] = {id: o.id, rewardTime: ""};
                    });
            }),
            (e.prototype._saveDatas = function () {
                i.LocalStorage.setData(l.LocalConst.SEVEN_LOGIN_DATAS_NEW, this._sevenLoginDatas);
            }),
            (e.prototype._getFormatTime = function (e) {
                return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate();
            }),
            (e.prototype._getNextRewardTime = function () {
                if (!this.isTodayRewarded() || !this.isLeftCanReward()) return -1;
                var e = Date.now() + 864e5,
                    t = this._getFormatTime(new Date(e));
                return Date.parse(t);
            }),
            (e.prototype.getRewardsById = function (e) {
                return this._allJson.hasOwnProperty(e)
                    ? this._allJson["" + e]
                    : (console.error("can not find id in json! id:" + e), null);
            }),
            (e.prototype.isTodayRewarded = function () {
                for (var e = this._getFormatTime(new Date()), t = 0; t < this._allJsonKeys.length; t++) {
                    var o = this._allJsonKeys[t];
                    if (this._sevenLoginDatas[o].rewardTime === e) return !0;
                }
                return !1;
            }),
            (e.prototype.isTodayIn = function () {
                for (var e = this._getFormatTime(new Date()), t = 0; t < this._allJsonKeys.length; t++) {
                    var o = this._allJsonKeys[t];
                    if (this._sevenLoginDatas[o].rewardTime === e) return !0;
                }
                return !1;
            }),
            (e.prototype.isTodayRewardedExtra = function () {
                for (var e = this._getFormatTime(new Date()), t = 0; t < this._allJsonKeys.length; t++) {
                    var o = this._allJsonKeys[t],
                        n = this._sevenLoginDatas[o];
                    if (n.rewardTime === e && n.isExtra) return !0;
                }
                return !1;
            }),
            (e.prototype.isLeftCanReward = function () {
                for (var e = 0; e < this._allJsonKeys.length; e++) {
                    var t = this._allJsonKeys[e];
                    if (!this._sevenLoginDatas[t].rewardTime) return !0;
                }
                return !1;
            }),
            (e.prototype.getCanNextReward = function () {
                for (var e = 0; e < this._allJsonKeys.length; e++) {
                    var t = this._allJsonKeys[e],
                        o = this._sevenLoginDatas[t];
                    if (!o.rewardTime) return o;
                }
                return null;
            }),
            (e.prototype.getTodayExtraReward = function () {
                for (var e = this._getFormatTime(new Date()), t = 0; t < this._allJsonKeys.length; t++) {
                    var o = this._allJsonKeys[t],
                        n = this._sevenLoginDatas[o];
                    if (n.rewardTime === e) return n;
                }
                return null;
            }),
            (e.prototype.isRewardIdGet = function (e) {
                for (var t = 0; t < this._allJsonKeys.length; t++) {
                    var o = this._allJsonKeys[t],
                        n = this._sevenLoginDatas[o];
                    if (n.id == e) return n;
                }
                return console.error("can not find id: " + e + " in json"), null;
            }),
            (e.prototype.getNextRewardTime = function () {
                return this._nextRewardTime;
            }),
            (e.prototype.doReceive = function (e, t, n) {
                void 0 === t && (t = 1), void 0 === n && (n = !1);
                for (
                    var a = [],
                        i = function (n) {
                            var i = e[n];
                            if (i) {
                                var r = i.split("|");
                                if (2 != r.length) return console.error("reward config error!"), {value: void 0};
                                var s = Number(r[0]),
                                    c = Number(r[1]);
                                if (1001 == s)
                                    a.push({id: s, count: c * t}),
                                        f.playData.addGold(c * t),
                                        d.analyMgr.reportGetGold(c * t, "SevenLogin");
                                else if (1002 == s)
                                    a.push({id: s, count: c * t}),
                                        f.playData.addGem(c * t),
                                        d.analyMgr.reportGetGem(c * t, "SevenLogin");
                                else if (1003 == s)
                                    a.push({id: s, count: c * t}),
                                        f.playData.addEnergy(c * t),
                                        d.analyMgr.reportGetEnergy(c * t, "SevenLogin");
                                else if (1014 == s)
                                    a.push({id: s, count: c * t}),
                                        h.challengeMgr.addPropeller(c),
                                        d.analyMgr.reportGetItem("Booster", s, c * t, "SevenChallenge");
                                else if (1017 == s)
                                    a.push({id: s, count: c * t}),
                                        f.playData.addHeroExperience(c * t),
                                        d.analyMgr.reportGetItem("HeroExp", s, c * t, "SevenChallenge");
                                else if (2001 == s)
                                    a.push({id: s, count: c * t}),
                                        f.playData.addNormalKey(c),
                                        d.analyMgr.reportGetItem("Key", s, c * t, "SevenChallenge");
                                else if (2002 == s)
                                    a.push({id: s, count: c * t}),
                                        f.playData.addSuperKey(c),
                                        d.analyMgr.reportGetItem("Key", s, c * t, "SevenChallenge");
                                else if (2003 == s)
                                    a.push({id: s, count: c * t}),
                                        f.playData.addSSRKey(c),
                                        d.analyMgr.reportGetItem("Key", s, c * t, "SevenChallenge");
                                else if (3001 == s || 3002 == s || 3003 == s)
                                    a.push({id: s, count: c * t}),
                                        f.playData.addHeroDebris(s, c),
                                        d.analyMgr.reportGetItem("Hero", s, c * t, "SevenChallenge");
                                else if (s > 1e4 && s < 10010)
                                    a.push({id: s, count: c * t}),
                                        g.heroData.addMap(s, c * t),
                                        d.analyMgr.reportGetItem("Blueprint", s, t * c, "SevenLogin");
                                else if (s > 1e5 && s < 9e5) {
                                    for (var l = 0; l < c; l++)
                                        for (var p = 0; p < t; p++)
                                            a.push({id: s, count: 1}), g.heroData.addEquip(s, 1);
                                    d.analyMgr.reportGetItem("Weapon", s, t * c, "SevenLogin");
                                } else if (1010303 == s) {
                                    var m = {};
                                    for (l = 0; l < c * t; l++) {
                                        var y = u.CommonUtil.getWeightRandom(o.SevenLoginMgr.drawRateArr),
                                            v = o.SevenLoginMgr.drawIdArr[y];
                                        m[v] ? (m[v] = m[v] + 1) : (m[v] = 1);
                                    }
                                    Object.keys(m).map(function (e) {
                                        var t = m[e];
                                        a.push({id: Number(e), count: t}), g.heroData.addMap(Number(e), t);
                                    });
                                } else if (1010304 == s)
                                    for (l = 0; l < c * t; l++) {
                                        y = u.CommonUtil.getWeightRandom(o.SevenLoginMgr.equipRateArr);
                                        var M = o.SevenLoginMgr.equipIdArr[y];
                                        a.push({id: Number(M), count: 1}), g.heroData.addEquip(Number(M), 1);
                                    }
                            }
                        },
                        c = 0;
                    c < e.length;
                    c++
                ) {
                    var l = i(c);
                    if ("object" == typeof l) return l.value;
                }
                if (n) {
                    var m = {id: r.DIALOGPOP.COMMON_REWARD, url: p.ViewUrl.commonRewardView, param: a};
                    r.AutoPopMgr.addAutoPop(m, !0);
                } else s.UIMgr.showView(p.ViewUrl.commonRewardView, null, a);
            }),
            (e.prototype.GetReward = function (e, t) {
                void 0 === t && (t = !1);
                for (var o = 0; o < this._allJsonKeys.length; o++) {
                    var n = this._allJsonKeys[o],
                        a = this._sevenLoginDatas[n];
                    if (a.id == e) {
                        (a.rewardTime = this._getFormatTime(new Date())), (a.isExtra = t);
                        break;
                    }
                }
                (this._nextRewardTime = this._getNextRewardTime()),
                    this._saveDatas(),
                    c.ClientEvents.SEVEN_LOGIN_REFRESH.emit();
            }),
            (e.prototype.GetRewardExtra = function (e) {
                for (var t = 0; t < this._allJsonKeys.length; t++) {
                    var o = this._allJsonKeys[t],
                        n = this._sevenLoginDatas[o];
                    if (n.id == e) {
                        n.isExtra = !0;
                        break;
                    }
                }
                this._saveDatas(), c.ClientEvents.SEVEN_LOGIN_REFRESH.emit();
            }),
            (e.prototype.initRate = function () {
                var e = this;
                (this.drawIdArr = []),
                    (this.drawRateArr = []),
                    (this.equipIdArr = []),
                    (this.equipRateArr = []),
                    m.JsonMgr.getPoolById(1010303)
                        .idrate.split(";")
                        .forEach(function (t) {
                            e.drawIdArr.push(Number(t.split("|")[0])), e.drawRateArr.push(Number(t.split("|")[2]));
                        }),
                    m.JsonMgr.getPoolById(1010304)
                        .idrate.split(";")
                        .forEach(function (t) {
                            e.equipIdArr.push(Number(t.split("|")[0])), e.equipRateArr.push(Number(t.split("|")[2]));
                        });
            }),
            (e._instance = null),
            e
        );
    })();
o.SevenLoginMgr = y.instance();
