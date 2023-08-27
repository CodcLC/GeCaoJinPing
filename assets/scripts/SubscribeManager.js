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
Object.defineProperty(o, "__esModule", {value: !0}), (o.scrMgr = o.SubscribeManager = void 0);
var i = e("LocalStorage"),
    r = e("censtant"),
    s = e("LocalConst"),
    c = e("CommonUtil"),
    l = e("DrawManager"),
    p = e("HomeManager"),
    u = e("JsonManager"),
    d = e("LanguageManager"),
    h = e("PlayerData"),
    g = e("WxManager"),
    m = (function () {
        function e() {
            (this.subscribeData = null), (this.patrolMaxTime = 0), (this.rejectCd = 0), (this.PermissionsCd = 0);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.init = function () {
                var e = i.LocalStorage.getData(s.LocalConst.SUBSCRIBE_DATA);
                e ? (this.subscribeData = e) : ((this.subscribeData = {}), this.saveSubscribeData()),
                    (this.patrolMaxTime = Number(u.JsonMgr.getDefineConstantByName("PatrolTimeMax"))),
                    (this.rejectCd = Number(u.JsonMgr.getDefineConstantByName("NoMessageCd"))),
                    (this.PermissionsCd = Number(u.JsonMgr.getDefineConstantByName("YesMessageCd")));
            }),
            (e.prototype.saveSubscribeTime = function (e, t) {
                var o = Number(Date.now()) + Number(t);
                (this.subscribeData[e] = o.toString()), this.saveSubscribeData();
            }),
            (e.prototype.saveSubscribeData = function () {
                i.LocalStorage.setData(s.LocalConst.SUBSCRIBE_DATA, this.subscribeData);
            }),
            (e.prototype.getSubscribeTime = function (e) {
                var t = "";
                return this.subscribeData[e] && (t = this.subscribeData[e]), t;
            }),
            (e.prototype.checkInitialSubscribe = function () {
                var e = o.scrMgr.getSubscribeTime(r.SubscribeID.ENERGY),
                    t = o.scrMgr.getSubscribeTime(r.SubscribeID.PATROL),
                    n = o.scrMgr.getSubscribeTime(r.SubscribeID.STORE);
                return "" === e && "" === t && "" === n;
            }),
            (e.prototype.getPatrolRemainTime = function () {
                var e = h.playData.getLastEarnTime() + 36e5 * this.patrolMaxTime;
                return Number(e) - Number(Date.now());
            }),
            (e.prototype.getEnergyRecoverTime = function () {
                var e = -10,
                    t = h.playData.getEnergy();
                return t >= 30 || (e = (30 - t) * p.homeMgr.getEnergyAddCD()), e;
            }),
            (e.prototype.getStoreFreeTime = function () {
                var e = 1e3 * l.drawMgr.getFreeNowHasCd(),
                    t = 1e3 * l.drawMgr.getGoldFreeNowHasCd(),
                    o = Math.max(e, t);
                return o < 1e4 && (o = -10), o;
            }),
            (e.prototype.getPatrolOverDay = function () {
                var e = h.playData.getLastEarnTime() + 36e5 * this.patrolMaxTime,
                    t = new Date(e);
                return t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日";
            }),
            (e.prototype.getPatrolOverTime = function () {
                var e = h.playData.getLastEarnTime() + 36e5 * this.patrolMaxTime,
                    t = new Date(e);
                return t.getHours() + ":" + t.getMinutes();
            }),
            (e.prototype.getPatrolRewardGold = function () {
                var e = 10101e3 + (h.playData.getLevel() > 10 ? 10 : h.playData.getLevel()),
                    t = u.JsonMgr.getPatrolById(e),
                    o = Number(t.idfixed.split("|")[1]);
                return this.patrolMaxTime * o;
            }),
            (e.prototype.checkGetPermissions = function (e) {
                return !(Number(o.scrMgr.getSubscribeTime(e)) >= Date.now());
            }),
            (e.prototype.getPatrolMsg = function () {
                return {
                    thing1: {value: "金币 X " + c.CommonUtil.formatMoney(o.scrMgr.getPatrolRewardGold())},
                    date2: {value: o.scrMgr.getPatrolOverDay()},
                    time3: {value: o.scrMgr.getPatrolOverTime()},
                    thing4: {value: d.langMgr.getStr("MessageTips_3")}
                };
            }),
            (e.prototype.getStoreMsg = function () {
                return {thing1: {value: "商店免费物品已更新！"}, thing2: {value: d.langMgr.getStr("MessageTips_2")}};
            }),
            (e.prototype.getEnergyMsg = function () {
                return {character_string1: {value: "30/30"}, thing2: {value: d.langMgr.getStr("MessageTips_1")}};
            }),
            (e.prototype.getRejectCd = function () {
                return this.rejectCd || 48;
            }),
            (e.prototype.getPermissionsCd = function () {
                return this.PermissionsCd || 48;
            }),
            (e.prototype.checkSubscribeEnergy = function () {
                return n(this, void 0, void 0, function () {
                    return a(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return g.wxMgr.checkIsWxPlatform()
                                    ? "" == o.scrMgr.getSubscribeTime(r.SubscribeID.ENERGY)
                                        ? [3, 4]
                                        : o.scrMgr.checkGetPermissions(r.SubscribeID.ENERGY)
                                        ? [4, g.wxMgr.getSubscribePermissions([r.SubscribeID.ENERGY])]
                                        : [3, 2]
                                    : [3, 6];
                            case 1:
                                return e.sent(), [3, 3];
                            case 2:
                                g.wxMgr.sendSubscribe(
                                    r.SubscribeID.ENERGY,
                                    o.scrMgr.getEnergyMsg,
                                    o.scrMgr.getEnergyRecoverTime()
                                ),
                                    (e.label = 3);
                            case 3:
                                return [3, 6];
                            case 4:
                                return [4, g.wxMgr.getSubscribePermissions([r.SubscribeID.ENERGY])];
                            case 5:
                                e.sent(), (e.label = 6);
                            case 6:
                                return [2];
                        }
                    });
                });
            }),
            (e.prototype.checkSubscribeShop = function () {
                return n(this, void 0, void 0, function () {
                    return a(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return g.wxMgr.checkIsWxPlatform()
                                    ? "" == o.scrMgr.getSubscribeTime(r.SubscribeID.STORE)
                                        ? [3, 4]
                                        : o.scrMgr.checkGetPermissions(r.SubscribeID.STORE)
                                        ? [4, g.wxMgr.getSubscribePermissions([r.SubscribeID.STORE])]
                                        : [3, 2]
                                    : [3, 6];
                            case 1:
                                return e.sent(), [3, 3];
                            case 2:
                                g.wxMgr.sendSubscribe(
                                    r.SubscribeID.STORE,
                                    o.scrMgr.getStoreMsg,
                                    o.scrMgr.getStoreFreeTime()
                                ),
                                    (e.label = 3);
                            case 3:
                                return [3, 6];
                            case 4:
                                return [4, g.wxMgr.getSubscribePermissions([r.SubscribeID.STORE])];
                            case 5:
                                e.sent(), (e.label = 6);
                            case 6:
                                return [2];
                        }
                    });
                });
            }),
            (e.prototype.checkSubscribePatrol = function () {
                return n(this, void 0, void 0, function () {
                    return a(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return g.wxMgr.checkIsWxPlatform()
                                    ? "" == o.scrMgr.getSubscribeTime(r.SubscribeID.PATROL)
                                        ? [3, 4]
                                        : o.scrMgr.checkGetPermissions(r.SubscribeID.PATROL)
                                        ? [4, g.wxMgr.getSubscribePermissions([r.SubscribeID.PATROL])]
                                        : [3, 2]
                                    : [3, 6];
                            case 1:
                                return e.sent(), [3, 3];
                            case 2:
                                g.wxMgr.sendSubscribe(
                                    r.SubscribeID.PATROL,
                                    o.scrMgr.getPatrolMsg,
                                    o.scrMgr.getPatrolRemainTime()
                                ),
                                    (e.label = 3);
                            case 3:
                                return [3, 6];
                            case 4:
                                return [4, g.wxMgr.getSubscribePermissions([r.SubscribeID.PATROL])];
                            case 5:
                                e.sent(), (e.label = 6);
                            case 6:
                                return [2];
                        }
                    });
                });
            }),
            (e.prototype.checkStartBattleSubScribe = function () {
                return n(this, void 0, void 0, function () {
                    var e;
                    return a(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return g.wxMgr.checkIsWxPlatform()
                                    ? ((e = []),
                                      "" == o.scrMgr.getSubscribeTime(r.SubscribeID.ENERGY)
                                          ? e.push(r.SubscribeID.ENERGY)
                                          : o.scrMgr.checkGetPermissions(r.SubscribeID.ENERGY) &&
                                            e.push(r.SubscribeID.ENERGY),
                                      "" == o.scrMgr.getSubscribeTime(r.SubscribeID.VERSION)
                                          ? e.push(r.SubscribeID.VERSION)
                                          : o.scrMgr.checkGetPermissions(r.SubscribeID.VERSION) &&
                                            e.push(r.SubscribeID.VERSION),
                                      e.length > 0 ? [4, g.wxMgr.getSubscribePermissions(e)] : [3, 2])
                                    : [3, 2];
                            case 1:
                                t.sent(), (t.label = 2);
                            case 2:
                                return [2];
                        }
                    });
                });
            }),
            (e.prototype.repostVersionMsg = function () {
                g.wxMgr.checkIsWxPlatform() &&
                    "" !== o.scrMgr.getSubscribeTime(r.SubscribeID.VERSION) &&
                    g.wxMgr.sendVersionSubscribe();
            }),
            (e._instance = null),
            e
        );
    })();
(o.SubscribeManager = m), (o.scrMgr = m.instance());
