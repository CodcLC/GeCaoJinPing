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
        };
Object.defineProperty(o, "__esModule", {value: !0}), (o.ZoneLevelItem = void 0);
var r = e("ListItem"),
    s = e("LangLabel"),
    c = e("ActivityLevelManager"),
    l = e("PlayerData"),
    p = e("JsonManager"),
    u = e("PoolManager"),
    d = e("ActivityZoneReward"),
    h = e("censtant"),
    g = e("HomeManager"),
    m = e("audioManager"),
    f = e("GameManager"),
    y = e("UIManager"),
    v = e("ViewUrl"),
    M = e("ClientEvents"),
    _ = e("AnalyticsManager"),
    C = cc._decorator,
    b = C.ccclass,
    T = C.property,
    w = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.levelName = null),
                (t.lockNode = null),
                (t.lockDesc = null),
                (t.rewardLayout = null),
                (t.challengeNode = null),
                (t.mopNode = null),
                (t.clickNode = null),
                (t.rewardItem = null),
                (t.zoneData = null),
                (t.activityData = null),
                (t.index = -1),
                (t.isLock = !1),
                (t.lockLevel = 0),
                (t.hasClear = !1),
                (t.nodeArr = []),
                (t.challengeClick = function () {
                    t.activityData.hasCount <= 0
                        ? y.UIMgr.showView(v.ViewUrl.commonTip, null, "次数不足!")
                        : (l.playData.setGameState(h.GameSatet.Activity),
                          g.homeMgr.startBattle(Number(t.zoneData.zonemapid.split(",")[t.index])),
                          m.audioMgr.stopBgm(),
                          m.audioMgr.initMusic(),
                          (f.gameMgr.activityData = t.zoneData),
                          (f.gameMgr.activityIndex = t.index),
                          _.analyMgr.reportGetZoneEnter(
                              t.zoneData.id,
                              Number(t.zoneData.zonemapid.split(",")[t.index]),
                              t.zoneData.zonepic,
                              t.activityData.hasCount
                          ),
                          y.UIMgr.closeView(v.ViewUrl.ActivityLevelView),
                          y.UIMgr.closeView(v.ViewUrl.ActivityLevelDetail));
                }),
                (t.mopClick = function () {
                    if (t.activityData.hasCount <= 0) y.UIMgr.showView(v.ViewUrl.commonTip, null, "次数不足!");
                    else {
                        var e = t.zoneData.zonepatrolreward.split(",")[t.index],
                            o = p.JsonMgr.getZoneDrop(Number(e)),
                            n = [];
                        o.idfixed.split(",").forEach(function (e) {
                            var o = e.split("|");
                            n.push({id: Number(o[0]), count: Number(o[1])}), t.addReward(Number(o[0]), Number(o[1]));
                        }),
                            _.analyMgr.reportGetZoneReward(
                                n,
                                "zonePatrolReward",
                                t.zoneData.zonepic,
                                Number(t.zoneData.zonemapid.split(",")[t.index]),
                                "Patrol",
                                t.zoneData.id
                            ),
                            c.activityMgr.challengeLevel(t.zoneData),
                            t.initView(),
                            M.ClientEvents.REFRESH_ACTIVITY.emit(),
                            M.ClientEvents.REFRESH_PATROL_HOME_RED.emit(),
                            y.UIMgr.showView(v.ViewUrl.commonRewardView, null, n);
                    }
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t, o) {
                (this.zoneData = e), (this.activityData = t), (this.index = o), this.initView();
            }),
            (t.prototype.initView = function () {
                this.levelName.setText("{@Zone_Tips_10}"),
                    (this.levelName.labelComponent.string = this.levelName.labelComponent.string.replace(
                        "$",
                        this.index + 1 + ""
                    )),
                    (this.lockLevel = Number(this.zoneData.zonefloorlevel.split(",")[this.index])),
                    (this.isLock = this.lockLevel > l.playData.getCompleteLevel()),
                    (this.hasClear =
                        -1 != this.activityData.clearLevel.indexOf(this.zoneData.zonemapid.split(",")[this.index])),
                    (this.mopNode.active = this.hasClear),
                    this.initLockState(),
                    this.initReward();
            }),
            (t.prototype.refreshData = function () {
                (this.activityData = c.activityMgr.getDataBuKey(this.zoneData.id)), this.initView();
            }),
            (t.prototype.initLockState = function () {
                (this.lockNode.active = this.isLock),
                    (this.clickNode.active = !this.isLock),
                    (this.levelName.node.color = this.isLock ? new cc.Color().fromHEX("#949CB4") : cc.Color.WHITE),
                    this.lockDesc.setText("{@Zone_Tips_9}"),
                    (this.lockDesc.labelComponent.string = this.lockDesc.labelComponent.string.replace(
                        "$",
                        this.lockLevel.toString()
                    ));
            }),
            (t.prototype.initReward = function () {
                var e = this;
                if (
                    (this.nodeArr.forEach(function (e) {
                        u.poolMgr.putNodeToPool(e);
                    }),
                    (this.nodeArr.length = 0),
                    this.hasClear)
                ) {
                    var t = this.zoneData.zonepatrolreward.split(",")[this.index];
                    p.JsonMgr.getZoneDrop(Number(t))
                        .idfixed.split(",")
                        .forEach(function (t) {
                            var o = t.split("|"),
                                n = u.poolMgr.getNodeFromMap(e.rewardItem);
                            e.rewardLayout.addChild(n),
                                n.getComponent(d.default).init(!1, Number(o[0]), Number(o[1])),
                                e.nodeArr.push(n);
                        });
                } else
                    (t = this.zoneData.zonefirstreward.split(",")[this.index]),
                        p.JsonMgr.getZoneDrop(Number(t))
                            .idfixed.split(",")
                            .forEach(function (t) {
                                var o = t.split("|"),
                                    n = u.poolMgr.getNodeFromMap(e.rewardItem);
                                e.rewardLayout.addChild(n),
                                    n.getComponent(d.default).init(!0, Number(o[0]), Number(o[1])),
                                    e.nodeArr.push(n);
                            });
            }),
            (t.prototype.start = function () {
                this.bindEvent();
            }),
            (t.prototype.bindEvent = function () {
                this.challengeNode.on(cc.Node.EventType.TOUCH_END, this.challengeClick),
                    this.mopNode.on(cc.Node.EventType.TOUCH_END, this.mopClick);
            }),
            (t.prototype.addReward = function (e, t) {
                switch (e) {
                    case 1001:
                        l.playData.addGold(t);
                        break;
                    case 1017:
                        l.playData.addHeroExperience(t);
                        break;
                    case 1018:
                    case 1019:
                        c.activityMgr.saveItemToMap(e, t);
                }
            }),
            i([T(s.LangLabel)], t.prototype, "levelName", void 0),
            i([T(cc.Node)], t.prototype, "lockNode", void 0),
            i([T(s.LangLabel)], t.prototype, "lockDesc", void 0),
            i([T(cc.Node)], t.prototype, "rewardLayout", void 0),
            i([T(cc.Node)], t.prototype, "challengeNode", void 0),
            i([T(cc.Node)], t.prototype, "mopNode", void 0),
            i([T(cc.Node)], t.prototype, "clickNode", void 0),
            i([T(cc.Prefab)], t.prototype, "rewardItem", void 0),
            i([b], t)
        );
    })(r.default);
o.ZoneLevelItem = w;
