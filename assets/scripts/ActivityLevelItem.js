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
Object.defineProperty(o, "__esModule", {value: !0});
var r = e("ListItem"),
    s = e("LangLabel"),
    c = e("LanguageManager"),
    l = e("ResManager"),
    p = e("PoolManager"),
    u = e("CommonRewardItem"),
    d = e("PlayerData"),
    h = e("censtant"),
    g = e("HomeManager"),
    m = e("audioManager"),
    f = e("UIManager"),
    y = e("ViewUrl"),
    v = e("TimeUtil"),
    M = e("ActivityLevelManager"),
    _ = e("GameManager"),
    C = e("ClientEvents"),
    b = e("event-kit"),
    T = e("WxManager"),
    w = e("AnalyticsManager"),
    N = cc._decorator,
    E = N.ccclass,
    S = N.property,
    D = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.leftUp = null),
                (t.leftDown = null),
                (t.levelName = null),
                (t.levelDesc = null),
                (t.enterNode = null),
                (t.count = null),
                (t.itemBg = null),
                (t.btnDesc = null),
                (t.hasCountFrame = null),
                (t.noCountFrame = null),
                (t.noCountIcon = null),
                (t.rewardItem = null),
                (t.itemLayout = null),
                (t.lockDesc = null),
                (t.lockNode = null),
                (t.activityLabel = null),
                (t.timeDown = null),
                (t.dayRefresh = null),
                (t.activityAllTime = null),
                (t.activityDayTime = null),
                (t.adCount = null),
                (t.zoneData = null),
                (t.activityData = null),
                (t.index = -1),
                (t.lockEndTime = 0),
                (t.lockStartTime = 0),
                (t.nowTime = 0),
                (t.hasCount = !1),
                (t.lockZoneEndTime = 0),
                (t.activityRefreshTime = 0),
                (t.dispose = new b.CompositeDisposable()),
                (t.dayTimeSc = function () {
                    var e = t.activityRefreshTime - new Date().getTime();
                    if (e <= 0)
                        return (
                            t.unschedule(t.dayTimeSc),
                            (t.enterNode.active = !0),
                            (t.lockNode.active = !1),
                            M.activityMgr.initData(),
                            (t.activityData = M.activityMgr.getDataBuKey(t.zoneData.id)),
                            t.initView(),
                            void t.initEnterNode()
                        );
                    t.activityDayTime.string = v.TimeUtil.timeConvertToDDHHMMSS(e);
                }),
                (t.allTimeSc = function () {
                    var e = t.lockEndTime - new Date().getTime();
                    if (e <= 0)
                        return (
                            t.unschedule(t.allTimeSc),
                            M.activityMgr.initActivityItem(),
                            M.activityMgr.init(),
                            C.ClientEvents.REFRESH_ACTIVITY_BTN.emit(),
                            t.node.removeFromParent(),
                            M.activityMgr.initActivityItem(),
                            M.activityMgr.init(),
                            void C.ClientEvents.REFRESH_ACTIVITY_BTN.emit()
                        );
                    t.activityAllTime.string = v.TimeUtil.timeConvertToDDHHMMSS(e);
                }),
                (t.timeUnLockActivity = function () {
                    t.nowTime += 1e3;
                    var e = t.lockStartTime - t.nowTime;
                    if (e <= 0)
                        return (
                            t.unschedule(t.timeUnLockActivity),
                            (t.lockNode.active = !1),
                            (t.enterNode.active = !0),
                            M.activityMgr.initData(),
                            (t.activityData = M.activityMgr.getDataBuKey(t.zoneData.id)),
                            t.initView(),
                            void t.initEnterNode()
                        );
                    t.activityLabel.setText("{@Zone_Tips_11}"),
                        (t.activityLabel.labelComponent.string += " " + v.TimeUtil.timeConvertToDDHHMMSS(e));
                }),
                (t.timeUnLockZone = function () {
                    t.nowTime += 1e3;
                    var e = t.lockZoneEndTime - t.nowTime;
                    if (e <= 0) return t.unschedule(t.timeUnLockZone), (t.lockNode.active = !1), void t.initView();
                    t.activityLabel.setText("{@Zone_Tips_11}"),
                        (t.activityLabel.labelComponent.string += " " + v.TimeUtil.timeConvertToDDHHMMSS(e));
                }),
                (t.enterClickHandle = function () {
                    if (t.hasCount)
                        4 === t.zoneData.zonetype
                            ? (d.playData.setGameState(h.GameSatet.Activity),
                              g.homeMgr.startBattle(Number(t.zoneData.zonemapid)),
                              m.audioMgr.stopBgm(),
                              m.audioMgr.initMusic(),
                              (_.gameMgr.activityData = t.zoneData),
                              f.UIMgr.closeView(y.ViewUrl.ActivityLevelView),
                              w.analyMgr.reportGetZoneEnter(
                                  t.zoneData.id,
                                  Number(t.zoneData.zonemapid),
                                  t.zoneData.zonepic,
                                  t.activityData.hasCount
                              ))
                            : f.UIMgr.showView(y.ViewUrl.ActivityLevelDetail, null, {
                                  zoneData: t.zoneData,
                                  activityData: t.activityData
                              });
                    else {
                        if (M.activityMgr.checkCanSeeAD(t.zoneData.id) <= t.activityData.adCount)
                            return void f.UIMgr.showView(y.ViewUrl.commonTip, null, "今日次数已耗尽");
                        T.wxMgr.createVideo(
                            {
                                placementName: "Ad" + t.zoneData.zonepic,
                                openUi: "ActivityView",
                                level: d.playData.getLevel()
                            },
                            function () {},
                            function () {
                                M.activityMgr.addSeeAdCount(t.zoneData.id), t.initView(), t.initEnterNode();
                            }
                        );
                    }
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {
                var e = this;
                this.bindEvent(),
                    this.dispose.add(
                        C.ClientEvents.REFRESH_ACTIVITY.on(function () {
                            e.unscheduleAllCallbacks(),
                                (e.activityData = M.activityMgr.getDataBuKey(e.zoneData.id)),
                                (e.enterNode.active = !0),
                                e.initView(),
                                e.initLockState(),
                                e.initEnterNode(),
                                e.initActivityTime();
                        })
                    );
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), this.dispose.dispose();
            }),
            (t.prototype.init = function (e, t) {
                e !== this.zoneData &&
                    (this.unscheduleAllCallbacks(),
                    (this.zoneData = e),
                    (this.index = t),
                    (this.activityData = M.activityMgr.getDataBuKey(e.id)),
                    (this.enterNode.active = !0),
                    this.initView(),
                    this.initRewardItem(),
                    this.initLockState(),
                    this.initEnterNode(),
                    this.initActivityTime());
            }),
            (t.prototype.initView = function () {
                l.ResManager.loadActivityBg(this.zoneData.zonepic, this.itemBg),
                    this.levelName.setText("{@" + this.zoneData.zonename + "}"),
                    (this.levelDesc.string = c.langMgr.getStr(this.zoneData.zonedesc)),
                    (this.leftUp.color = new cc.Color().fromHEX(this.zoneData.zonecolor)),
                    (this.leftDown.color = new cc.Color().fromHEX(this.zoneData.zonecolor)),
                    (this.count.string = M.activityMgr.getHasCount(this.zoneData.id).toString());
            }),
            (t.prototype.initActivityTime = function () {
                if (4 === this.zoneData.zonetype || 3 === this.zoneData.zonetype) {
                    if (this.lockNode.active) this.timeDown.active = this.dayRefresh.active = !1;
                    else {
                        this.timeDown.active = this.dayRefresh.active = !0;
                        var e = new Date(new Date().getTime() + 864e5);
                        e.setHours(0),
                            e.setMinutes(0),
                            e.setSeconds(0),
                            e.setMilliseconds(0),
                            (this.activityRefreshTime = e.getTime()),
                            (this.activityDayTime.string = v.TimeUtil.timeConvertToDDHHMMSS(
                                this.activityRefreshTime - new Date().getTime()
                            )),
                            this.schedule(this.dayTimeSc, 1, cc.macro.REPEAT_FOREVER),
                            (this.activityAllTime.string = v.TimeUtil.timeConvertToDDHHMMSS(
                                this.lockEndTime - new Date().getTime()
                            )),
                            this.schedule(this.allTimeSc, 1, cc.macro.REPEAT_FOREVER);
                    }
                } else this.timeDown.active = this.dayRefresh.active = !1;
            }),
            (t.prototype.initEnterNode = function () {
                var e = M.activityMgr.getHasCount(this.zoneData.id);
                this.hasCount = e > 0;
                var t = this.enterNode.getComponent(cc.Sprite);
                if (this.hasCount)
                    (t.spriteFrame = this.hasCountFrame),
                        this.btnDesc.setText("{@Zone_Tips_4}"),
                        (this.count.node.color = cc.Color.WHITE),
                        (this.noCountIcon.active = !1),
                        (this.adCount.node.active = !1);
                else {
                    (this.count.node.color = new cc.Color(255, 10, 10)),
                        (t.spriteFrame = this.noCountFrame),
                        this.btnDesc.setText("{@Zone_Tips_6}"),
                        (this.noCountIcon.active = !0);
                    var o = M.activityMgr.checkCanSeeAD(this.zoneData.id);
                    (this.adCount.node.active = !0),
                        (this.adCount.string = "(" + (o - this.activityData.adCount) + "/" + o + ")"),
                        o <= 0 && (this.enterNode.active = !1);
                }
            }),
            (t.prototype.initRewardItem = function () {
                var e = this,
                    t = this.zoneData.idfixed1.split(",");
                this.itemLayout.children.forEach(function (e) {
                    p.poolMgr.putNodeToPool(e);
                }),
                    t.forEach(function (t, o) {
                        var n = p.poolMgr.getNodeFromMap(e.rewardItem);
                        n.getComponent(u.default).init(o, Number(t), 0, !1),
                            (n.scale = 0.7),
                            (n.x -= 20),
                            e.itemLayout.addChild(n);
                    });
            }),
            (t.prototype.initLockState = function () {
                if (1 === this.zoneData.unlocktype)
                    Number(this.zoneData.unlocknum) > d.playData.getCompleteLevel()
                        ? ((this.lockNode.active = !0),
                          (this.activityLabel.node.active = !1),
                          (this.lockDesc.node.active = !0),
                          this.lockDesc.setText("{@Zone_Tips_9}"),
                          (this.lockDesc.labelComponent.string = this.lockDesc.labelComponent.string.replace(
                              "$",
                              this.zoneData.unlocknum
                          )))
                        : 2 === this.zoneData.nextopentype
                        ? this.activityData.isOpen
                            ? (this.lockNode.active = !1)
                            : ((this.lockNode.active = !0),
                              (this.lockDesc.node.active = !1),
                              (this.activityLabel.node.active = !0),
                              this.activityLabel.setText("{@Zone_Tips_11}"),
                              (this.lockZoneEndTime = M.activityMgr.getNextOpenTime(this.zoneData.id)),
                              (this.nowTime = new Date().getTime()),
                              (this.activityLabel.labelComponent.string +=
                                  " " + v.TimeUtil.timeConvertToDDHHMMSS(this.lockZoneEndTime - this.nowTime)),
                              this.schedule(this.timeUnLockZone, 1, cc.macro.REPEAT_FOREVER))
                        : (this.lockNode.active = !1);
                else if (2 === this.zoneData.unlocktype) {
                    var e = this.zoneData.unlocknum.split("-"),
                        t = e[0],
                        o = e[1];
                    (this.lockEndTime = new Date(o).getTime()),
                        (this.lockStartTime = new Date(t).getTime()),
                        (this.nowTime = new Date().getTime()),
                        this.nowTime < this.lockStartTime
                            ? ((this.lockNode.active = !0),
                              (this.activityLabel.node.active = !0),
                              (this.lockDesc.node.active = !1),
                              this.activityLabel.setText("{@Zone_Tips_11}"),
                              (this.activityLabel.labelComponent.string +=
                                  " " + v.TimeUtil.timeConvertToDDHHMMSS(this.lockStartTime - this.nowTime)),
                              this.schedule(this.timeUnLockActivity, 1, cc.macro.REPEAT_FOREVER))
                            : (this.lockNode.active = !1);
                }
            }),
            (t.prototype.bindEvent = function () {
                this.enterNode.on(cc.Node.EventType.TOUCH_END, this.enterClickHandle);
            }),
            i([S(cc.Node)], t.prototype, "leftUp", void 0),
            i([S(cc.Node)], t.prototype, "leftDown", void 0),
            i([S(s.LangLabel)], t.prototype, "levelName", void 0),
            i([S(cc.RichText)], t.prototype, "levelDesc", void 0),
            i([S(cc.Node)], t.prototype, "enterNode", void 0),
            i([S(cc.Label)], t.prototype, "count", void 0),
            i([S(cc.Sprite)], t.prototype, "itemBg", void 0),
            i([S(s.LangLabel)], t.prototype, "btnDesc", void 0),
            i([S(cc.SpriteFrame)], t.prototype, "hasCountFrame", void 0),
            i([S(cc.SpriteFrame)], t.prototype, "noCountFrame", void 0),
            i([S(cc.Node)], t.prototype, "noCountIcon", void 0),
            i([S(cc.Prefab)], t.prototype, "rewardItem", void 0),
            i([S(cc.Node)], t.prototype, "itemLayout", void 0),
            i([S(s.LangLabel)], t.prototype, "lockDesc", void 0),
            i([S(cc.Node)], t.prototype, "lockNode", void 0),
            i([S(s.LangLabel)], t.prototype, "activityLabel", void 0),
            i([S(cc.Node)], t.prototype, "timeDown", void 0),
            i([S(cc.Node)], t.prototype, "dayRefresh", void 0),
            i([S(cc.Label)], t.prototype, "activityAllTime", void 0),
            i([S(cc.Label)], t.prototype, "activityDayTime", void 0),
            i([S(cc.Label)], t.prototype, "adCount", void 0),
            i([E], t)
        );
    })(r.default);
o.default = D;
