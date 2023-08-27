var e = require;
var t = module;
var o = exports;
var n,
    a =
        (this && this.__extends) ||
        ((n = function (e, t) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                })(e, t);
        }),
        function (e, t) {
            function o() {
                this.constructor = e;
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
        }),
    i =
        (this && this.__decorate) ||
        function (e, t, o, n) {
            var a,
                i = arguments.length,
                r = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r;
        },
    r =
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
    s =
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
Object.defineProperty(o, "__esModule", {value: !0});
var c = e("UIManager"),
    l = e("ViewUrl"),
    p = e("GameComponent"),
    u = e("CommonUtil"),
    d = e("TimeUtil"),
    h = e("JsonManager"),
    g = e("PlayerData"),
    m = e("HeroData"),
    f = e("CommonRewardItem"),
    y = e("audioConst"),
    v = e("audioManager"),
    M = e("AnalyticsManager"),
    _ = e("ClientEvents"),
    C = e("SubscribeManager"),
    b = e("TaskTypeManager"),
    T = e("WxManager"),
    w = cc._decorator,
    N = w.ccclass,
    E = w.property,
    S = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.goldNode = null),
                (t.drawNode = null),
                (t.equipNode = null),
                (t.returnNode = null),
                (t.aniNode = null),
                (t.closeBtn = null),
                (t.nowTimeLabel = null),
                (t.maxTimeLabel = null),
                (t.progressBarSp = null),
                (t.oneHourEarnLabel = null),
                (t.earnNode = null),
                (t.maxPatrolLabel = null),
                (t.receiveNode = null),
                (t.trebleReceive = null),
                (t.trebleReceiveRedPoint = null),
                (t.returnLayout = null),
                (t.itemNode = null),
                (t._time = 0),
                (t._data = null),
                (t._goldNum = 0),
                (t._rewardMapId = {}),
                (t._rewardEquipId = []),
                (t.drawIdArr = []),
                (t.drawRateArr = []),
                (t.equipIdArr = []),
                (t.equipRateArr = []),
                (t.maxTime = 0),
                (t.isTouchEnable = !1),
                (t.isAutoPop = !1),
                (t._refreshTime = function () {
                    var e = new Date().getTime() - g.playData.getLastEarnTime();
                    e > 36e5 * t.maxTime && (e = 36e5 * t.maxTime), e < 0 && (g.playData.resetEarnTime(), (e = 0));
                    var o = d.TimeUtil.timeConvertToDDHHMMSS(e);
                    (t.nowTimeLabel.string = o), (t.progressBarSp.fillRange = e / (36e5 * t.maxTime));
                }),
                (t.refreshRedPoint = function () {
                    var e = g.playData.getPatrolNowEnergy(),
                        o = g.playData.getEnergy(),
                        n = h.JsonMgr.getDefineConstantByName("PatrolNowEnergy").split("|")[0],
                        a = e > 0 && o > Number(n),
                        i = g.playData.getPatrolNowAD() > 0;
                    t.trebleReceiveRedPoint.active = a || i;
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return l.ViewUrl.patrolReward;
            }),
            (t.prototype.onLoad = function () {
                this.maxTime = Number(h.JsonMgr.getDefineConstantByName("PatrolTimeMax"));
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(2, this.aniNode),
                    this.initPatrolTime(),
                    this.schedule(this._refreshTime, 1, cc.macro.REPEAT_FOREVER),
                    this._refreshTime();
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), T.wxMgr.hideBanner();
            }),
            (t.prototype.onDisable = function () {
                this.unschedule(this._refreshTime);
            }),
            (t.prototype.start = function () {
                var e = this;
                T.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""}),
                    (this.returnNode.active = !1),
                    (g.playData.getLastEarnTime() && 0 !== g.playData.getLastEarnTime()) || g.playData.resetEarnTime();
                var t = 10101e3 + (g.playData.getLevel() > 50 ? 50 : g.playData.getLevel());
                (this._data = h.JsonMgr.getPatrolById(t)),
                    (this.oneHourEarnLabel.string = this._data.idfixed.split("|")[1].toString()),
                    (this.isAutoPop = this.node.isAutoPop),
                    this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        _.ClientEvents.REFRESH_PATROL_HOME_RED.emit(),
                            v.audioMgr.startEffect(y.AudioConst.COMMON_TOUCH),
                            e.closeView(e.isAutoPop);
                    }),
                    this.receiveNode.on(cc.Node.EventType.TOUCH_END, function () {
                        return r(e, void 0, void 0, function () {
                            return s(this, function () {
                                return (
                                    v.audioMgr.startEffect(y.AudioConst.COMMON_TOUCH),
                                    this.isTouchEnable &&
                                        (b.TaskTypeMgr.gainPatrolTimesTask(1),
                                        this.receive(),
                                        this._refreshTime(),
                                        C.scrMgr.checkSubscribePatrol()),
                                    [2]
                                );
                            });
                        });
                    }),
                    this.initTrebleReceive(),
                    this.initRate(),
                    this.refreshPatrolTime(),
                    this.refreshRedPoint(),
                    this.addEvent(_.ClientEvents.REFRESH_PATROL_REWARD_RED.on(this.refreshRedPoint));
            }),
            (t.prototype.initPatrolTime = function () {
                this.maxTimeLabel.string = this.maxTime + ":00:00";
            }),
            (t.prototype.initTrebleReceive = function () {
                var e = this,
                    t = h.JsonMgr.getDefineConstantByName("PatrolNowEnergy").split("|"),
                    o = Number(t[0]),
                    n = g.playData.getPatrolNowAD(),
                    a = g.playData.getEnergy(),
                    i = g.playData.getPatrolNowEnergy();
                (this.trebleReceive.getComponent(cc.Button).interactable = n > 0 || (i > 0 && a >= o)),
                    this.trebleReceive.on(cc.Node.EventType.TOUCH_END, function () {
                        e.trebleReceive.getComponent(cc.Button).interactable &&
                            (v.audioMgr.startEffect(y.AudioConst.COMMON_TOUCH),
                            _.ClientEvents.CHANGE_LOADING.emit(!0),
                            c.UIMgr.showView(l.ViewUrl.patrolQuick, null, null, function () {
                                _.ClientEvents.CHANGE_LOADING.emit(!1);
                            }));
                    });
            }),
            (t.prototype.receive = function (e) {
                if ((void 0 === e && (e = 1), this._goldNum)) {
                    this.returnNode.active = !0;
                    var t = Number(this._goldNum * e);
                    t < 0 && (t = 0),
                        g.playData.addGold(t),
                        M.analyMgr.reportGetGold(t, "Patrol"),
                        this.onReturnRefresh(e),
                        g.playData.resetPatrolTime();
                }
            }),
            (t.prototype.refreshPatrolTime = function () {
                this.earnNode.removeAllChildren();
                var e = new Date().getTime(),
                    t = e - g.playData.getLastEarnTime(),
                    o = 0,
                    n = this.maxTime;
                t > 36e5 * n
                    ? ((t = 36e5 * n), (o = this._data.idfixed.split("|")[1] * n))
                    : (o = Math.floor(t / 600 / 1e3) * Math.floor(this._data.idfixed.split("|")[1] / 6)),
                    this.initGoldNode(o),
                    this.checkPassTime(e);
            }),
            (t.prototype.initGoldNode = function (e) {
                if (e) {
                    e < 0 && (e = 0), (this._goldNum = e);
                    var t = cc.instantiate(this.goldNode);
                    (t.getChildByName("numLabel").getComponent(cc.Label).string = "x" + u.CommonUtil.formatMoney(e)),
                        t.setPosition(cc.v2(0, 0)),
                        (t.active = !0),
                        this.earnNode.addChild(t),
                        (this.isTouchEnable = !0),
                        (this.receiveNode.getComponent(cc.Button).interactable = !0);
                } else (this.isTouchEnable = !1), (this.receiveNode.getComponent(cc.Button).interactable = !1);
            }),
            (t.prototype.onReturnRefresh = function (e) {
                var t = this,
                    o = 0,
                    n = cc.instantiate(this.itemNode),
                    a = this._goldNum * e;
                a < 0 && (a = 0),
                    n.getComponent(f.default).init(o, 1001, a),
                    this.returnLayout.addChild(n),
                    g.playData.resetEarnTime(),
                    (this._goldNum = 0);
                var i = g.playData.getPatrol(),
                    r = i.mapNum,
                    s = i.equipNum;
                if (r)
                    for (var c = 0; c < r * e; c++) {
                        var l = u.CommonUtil.getWeightRandom(this.drawRateArr),
                            p = this.drawIdArr[l];
                        this._rewardMapId[p]
                            ? (this._rewardMapId[p] = this._rewardMapId[p] + 1)
                            : (this._rewardMapId[p] = 1);
                    }
                if (s)
                    for (c = 0; c < s * e; c++) {
                        var d = u.CommonUtil.getWeightRandom(this.equipRateArr),
                            h = this.equipIdArr[d];
                        this._rewardEquipId.push(h);
                    }
                this._rewardMapId &&
                    Object.keys(this._rewardMapId).length &&
                    Object.keys(this._rewardMapId).map(function (e) {
                        var n = t._rewardMapId[e],
                            a = cc.instantiate(t.itemNode);
                        o++,
                            a.getComponent(f.default).init(o, Number(e), n),
                            m.heroData.addMap(Number(e), n),
                            M.analyMgr.reportGetItem("Blueprint", Number(e), n, "Patrol"),
                            t.returnLayout.addChild(a);
                    }),
                    this._rewardEquipId &&
                        this._rewardEquipId.length > 0 &&
                        this._rewardEquipId.forEach(function (e) {
                            o++;
                            var n = cc.instantiate(t.itemNode);
                            n.getComponent(f.default).init(o, e, 1),
                                m.heroData.addEquip(e, 1),
                                M.analyMgr.reportGetItem("Weapon", e, 1, "Patrol"),
                                t.returnLayout.addChild(n);
                        }),
                    this.returnNode.on(cc.Node.EventType.TOUCH_END, function () {
                        v.audioMgr.startEffect(y.AudioConst.COMMON_TOUCH),
                            _.ClientEvents.REFRESH_PATROL_HOME_RED.emit(),
                            t.closeView(t.isAutoPop);
                    });
            }),
            (t.prototype.checkPassTime = function (e) {
                var t = Number(h.JsonMgr.getDefineConstantByName("PatrolTimeMax"));
                e > g.playData.getLastEarnTime() + 36e5 * t && (e = g.playData.getLastEarnTime() + 36e5 * t);
                var o = this._data.itemrate.split(";"),
                    n = (e - g.playData.getPatrolTime()) / 1e3;
                if (n / 600 > 1) {
                    Math.floor(n / 600);
                    for (var a = Math.floor(n / 600), i = 0, r = 0, s = 0; s < a; s++)
                        o.forEach(function (e) {
                            var t = e.split("|");
                            Math.floor(1e4 * Math.random()) < Number(t[2]) &&
                                (1010304 == t[0] ? (i += Number(t[1])) : 1010303 == t[0] && (r += Number(t[1])));
                        });
                    var c = 1e3 * n;
                    g.playData.refreshPatrol(g.playData.getPatrolTime() + (c - c / 600), r, i);
                }
                this.showEquip();
            }),
            (t.prototype.showEquip = function () {
                var e = g.playData.getPatrol();
                if (
                    (e &&
                        e.mapNum &&
                        (((t = cc.instantiate(this.drawNode)).getChildByName("numLabel").getComponent(cc.Label).string =
                            "x" + e.mapNum),
                        t.setPosition(cc.v2(0, 0)),
                        (t.active = !0),
                        this.earnNode.addChild(t)),
                    e && e.equipNum)
                ) {
                    var t;
                    (t = cc.instantiate(this.equipNode)).getChildByName("type_bg").active = !1;
                    var o = t.getChildByName("numLabel");
                    (o.active = !0),
                        (o.getComponent(cc.Label).string = "x" + e.equipNum),
                        t.setPosition(cc.v2(0, 0)),
                        (t.active = !0),
                        this.earnNode.addChild(t);
                }
            }),
            (t.prototype.getTotalRate = function (e) {
                var t = e.split(";"),
                    o = 0;
                return (
                    t.forEach(function (e) {
                        o += Number(e[1]);
                    }),
                    o
                );
            }),
            (t.prototype.getIdByRate = function (e, t) {
                for (var o = e.split(";"), n = 0, a = 0; a < o.length; a++) {
                    var i = o[a].split("|");
                    if ((n += Number(i[a])) >= t) return o[a].split("|")[0];
                }
                return o[o.length].split("|")[0];
            }),
            (t.prototype.initRate = function () {
                var e = this;
                (this.drawIdArr = []),
                    (this.drawRateArr = []),
                    (this.equipIdArr = []),
                    (this.equipRateArr = []),
                    h.JsonMgr.getPoolById(1010303)
                        .idrate.split(";")
                        .forEach(function (t) {
                            e.drawIdArr.push(Number(t.split("|")[0])), e.drawRateArr.push(Number(t.split("|")[2]));
                        }),
                    h.JsonMgr.getPoolById(1010304)
                        .idrate.split(";")
                        .forEach(function (t) {
                            e.equipIdArr.push(Number(t.split("|")[0])), e.equipRateArr.push(Number(t.split("|")[2]));
                        });
            }),
            (t.prototype.update = function (e) {
                e > 0.5 || (this._time++, this._time > 3600 && (this.refreshPatrolTime(), (this._time = 0)));
            }),
            i([E(cc.Node)], t.prototype, "goldNode", void 0),
            i([E(cc.Node)], t.prototype, "drawNode", void 0),
            i([E(cc.Node)], t.prototype, "equipNode", void 0),
            i([E(cc.Node)], t.prototype, "returnNode", void 0),
            i([E(cc.Node)], t.prototype, "aniNode", void 0),
            i([E(cc.Node)], t.prototype, "closeBtn", void 0),
            i([E(cc.Label)], t.prototype, "nowTimeLabel", void 0),
            i([E(cc.Label)], t.prototype, "maxTimeLabel", void 0),
            i([E(cc.Sprite)], t.prototype, "progressBarSp", void 0),
            i([E(cc.Label)], t.prototype, "oneHourEarnLabel", void 0),
            i([E(cc.Node)], t.prototype, "earnNode", void 0),
            i([E(cc.Label)], t.prototype, "maxPatrolLabel", void 0),
            i([E(cc.Node)], t.prototype, "receiveNode", void 0),
            i([E(cc.Node)], t.prototype, "trebleReceive", void 0),
            i([E(cc.Node)], t.prototype, "trebleReceiveRedPoint", void 0),
            i([E(cc.Node)], t.prototype, "returnLayout", void 0),
            i([E(cc.Prefab)], t.prototype, "itemNode", void 0),
            i([N], t)
        );
    })(p.GameComponent);
o.default = S;
