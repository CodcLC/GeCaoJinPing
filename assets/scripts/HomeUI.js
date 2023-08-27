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
var c = e("GameComponent"),
    l = e("ViewUrl"),
    p = e("LevelItem"),
    u = e("ResManager"),
    d = e("LevelManager"),
    h = e("List"),
    g = e("PlayerData"),
    m = e("UIManager"),
    f = e("HomeManager"),
    y = e("ClientEvents"),
    v = e("GameManager"),
    M = e("LangLabel"),
    _ = e("BattleResultManager"),
    C = e("ZIndexConst"),
    b = e("HeroData"),
    T = e("CommonUtil"),
    w = e("audioManager"),
    N = e("audioConst"),
    E = e("AnalyticsManager"),
    S = e("LanguageManager"),
    D = e("RedDotManager"),
    A = e("DrawManager"),
    k = e("ShopView"),
    I = e("JsonManager"),
    R = e("GuideManager"),
    L = e("AutoPopManager"),
    P = e("SubscribeManager"),
    O = e("ActivityManager"),
    B = e("TaskManager"),
    x = e("HeroManager"),
    U = e("ActivityLevelManager"),
    G = cc._decorator,
    H = G.ccclass,
    V = G.property,
    F = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.headIcon = null),
                (t.settingNode = null),
                (t.goldCount = null),
                (t.gemCount = null),
                (t.powerCount = null),
                (t.propellerCount = null),
                (t.addPowerNode = null),
                (t.addGoldNode = null),
                (t.addDiamondNode = null),
                (t.levelList = null),
                (t.battleNode = null),
                (t.energyLabel = null),
                (t.nextAddTime = null),
                (t.nextAddTimeLabel = null),
                (t.levelName = null),
                (t.levelScore = null),
                (t.tabNode = null),
                (t.downNode = null),
                (t.bgLayer = null),
                (t.battleLayer = null),
                (t.topNode = null),
                (t.touchSprite = null),
                (t.patrolBtn = null),
                (t.patrol1Btn = null),
                (t.patrolRedPoint = null),
                (t.rankBtn = null),
                (t.powerNode = null),
                (t.propellerNode = null),
                (t.redDotArr = []),
                (t.redDotFrame = []),
                (t.activityNode = null),
                (t.springAcyivityBtn = null),
                (t.activityLevelRed = null),
                (t.activityRed = null),
                (t.isInAddEnergy = !1),
                (t._battleAct = null),
                (t.layerArr = [
                    l.ViewUrl.shopView,
                    l.ViewUrl.equipLayer,
                    null,
                    l.ViewUrl.challengeView,
                    l.ViewUrl.talentView
                ]),
                (t.layerZIndex = [
                    C.HomeIndexConst.ShopLayer,
                    C.HomeIndexConst.EquipLayer,
                    C.HomeIndexConst.BattleLayer,
                    C.HomeIndexConst.challenge,
                    C.HomeIndexConst.talent
                ]),
                (t.pageIndex = -1),
                (t.initActivityBtn = function () {
                    if (
                        ((t.activityNode.active = g.playData.getCompleteLevel() >= 3),
                        I.JsonMgr.getJsonById("activity", 1).openlevel <= g.playData.getCompleteLevel())
                    ) {
                        var e = I.JsonMgr.getJsonById("activity", 1).opentime.split("-"),
                            o = new Date(e[0]).getTime(),
                            n = new Date(e[1]).getTime(),
                            a = new Date().getTime();
                        t.springAcyivityBtn.active = a >= o && a <= n;
                    } else t.springAcyivityBtn.active = !1;
                }),
                (t.activityClickHandle = function () {
                    f.homeMgr.reportTouchBtnHome("Zone"),
                        m.UIMgr.showView(l.ViewUrl.ActivityLevelView),
                        (t.downNode.active = !1),
                        (t.battleLayer.active = !1);
                }),
                (t.initLevelItemScale = function () {
                    t.scheduleOnce(function () {
                        if (t.levelList && t.levelList.isValid) {
                            var e =
                                g.playData.getCompleteLevel() >= t.levelList.numItems
                                    ? g.playData.getCompleteLevel() - 1
                                    : g.playData.getCompleteLevel();
                            t.levelList.skipPage(e, 0),
                                t.refreshScale(e),
                                t.refreshLevelName(e),
                                t.checkLevelLabelScale(e);
                        }
                    }, 0);
                }),
                (t.checkLayerOpen = function () {
                    if (g.playData.getNewUserStep() === R.GUIDE_STEP.FIRSTGAME) (t.layerArr[4] = "-1"), t.lockItem(4);
                    else {
                        t.layerArr[4] = l.ViewUrl.talentView;
                        var e = t.downNode.children[4],
                            o = e.getChildByName("icon"),
                            n = e.getChildByName("suo");
                        (o.active = !0), (n.active = !1);
                    }
                    g.playData.getLevel() <= 1 && ((t.layerArr[3] = "-1"), t.lockItem(3));
                }),
                (t.energyRefresh = function () {
                    t.unschedule(t.refreshNextAddEnergyLabel),
                        (t.powerCount.string = g.playData.getEnergy().toString()),
                        g.playData.getEnergy() < 30
                            ? ((t.isInAddEnergy = !0),
                              (t.nextAddTime.active = !0),
                              t.refreshNextAddEnergyLabel(),
                              t.schedule(t.refreshNextAddEnergyLabel, 1))
                            : (f.homeMgr.setNextEnergeAddTime(0), (t.isInAddEnergy = !1), (t.nextAddTime.active = !1));
                }),
                (t.initView = function () {
                    u.ResManager.loadIcon(t.headIcon, u.ResManager.HeadUrl + b.heroData.getHeroIcon()),
                        (t.goldCount.string = T.CommonUtil.formatMoney(g.playData.getGold())),
                        (t.powerCount.string = g.playData.getEnergy().toString()),
                        (t.propellerCount.string = g.playData.getPropeller().toString()),
                        (t.gemCount.string = T.CommonUtil.formatMoney(g.playData.getGem())),
                        (t.levelList.numItems = d.levelMgr.getLevelLen()),
                        t.setTabState();
                }),
                (t._settingClickHandle = function () {
                    w.audioMgr.startEffect(N.AudioConst.COMMON_TOUCH), m.UIMgr.showView(l.ViewUrl.setting);
                }),
                (t.openShopAndScrollToBottom = function (e) {
                    void 0 === e && (e = !1),
                        (t.propellerNode.active = !1),
                        (t.powerNode.active = !0),
                        t.downNode.children.forEach(function (e, o) {
                            var n = e.getComponent(cc.Sprite),
                                a = e.getChildByName("icon"),
                                i = a.getChildByName("label");
                            0 === o
                                ? ((e.scaleX = 2),
                                  (a.scaleY = 1),
                                  i && i.isValid && (i.active = !0),
                                  (n.spriteFrame = t.touchSprite))
                                : (t.layerArr[o] && m.UIMgr.closeView(t.layerArr[o], !1),
                                  (e.scale = 1),
                                  (a.scale = 0.5),
                                  i && i.isValid && (i.active = !1),
                                  (n.spriteFrame = null));
                        }),
                        (t.battleLayer.active = !1),
                        y.ClientEvents.CHANGE_LOADING.emit(!0),
                        m.UIMgr.showView(
                            t.layerArr[0],
                            t.node,
                            null,
                            function (t) {
                                y.ClientEvents.CHANGE_LOADING.emit(!1), e && t.getComponent(k.default).ScrollTo(0);
                            },
                            t.layerZIndex[0]
                        );
                }),
                (t.openEquitView = function () {
                    (t.propellerNode.active = !1),
                        (t.powerNode.active = !0),
                        t.downNode.children.forEach(function (e, o) {
                            var n = e.getComponent(cc.Sprite),
                                a = e.getChildByName("icon"),
                                i = a.getChildByName("label");
                            1 === o
                                ? ((e.scaleX = 2),
                                  (a.scaleY = 1),
                                  i && i.isValid && (i.active = !0),
                                  (n.spriteFrame = t.touchSprite))
                                : (t.layerArr[o] && m.UIMgr.closeView(t.layerArr[o], !1),
                                  (e.scale = 1),
                                  (a.scale = 0.5),
                                  i && i.isValid && (i.active = !1),
                                  (n.spriteFrame = null));
                        }),
                        (t.battleLayer.active = !1),
                        y.ClientEvents.CHANGE_LOADING.emit(!0),
                        m.UIMgr.showView(
                            t.layerArr[1],
                            t.node,
                            null,
                            function () {
                                y.ClientEvents.CHANGE_LOADING.emit(!1);
                            },
                            t.layerZIndex[0]
                        );
                }),
                (t.openTalentView = function () {
                    (t.powerNode.active = !1),
                        (t.propellerNode.active = !0),
                        t.downNode.children.forEach(function (e, o) {
                            var n = e.getComponent(cc.Sprite),
                                a = e.getChildByName("icon"),
                                i = a.getChildByName("label");
                            4 === o
                                ? ((e.scaleX = 2),
                                  (a.scaleY = 1),
                                  i && i.isValid && (i.active = !0),
                                  (n.spriteFrame = t.touchSprite))
                                : (t.layerArr[o] && m.UIMgr.closeView(t.layerArr[o], !1),
                                  (e.scale = 1),
                                  (a.scale = 0.5),
                                  i && i.isValid && (i.active = !1),
                                  (n.spriteFrame = null));
                        }),
                        (t.battleLayer.active = !1),
                        y.ClientEvents.CHANGE_LOADING.emit(!0),
                        m.UIMgr.showView(
                            t.layerArr[4],
                            t.node,
                            null,
                            function () {
                                y.ClientEvents.CHANGE_LOADING.emit(!1);
                            },
                            t.layerZIndex[4]
                        );
                }),
                (t.openChallengeView = function () {
                    g.playData.getLevel() <= 1 ||
                        ((t.powerNode.active = !1),
                        (t.propellerNode.active = !0),
                        t.downNode.children.forEach(function (e, o) {
                            var n = e.getComponent(cc.Sprite),
                                a = e.getChildByName("icon"),
                                i = a.getChildByName("label");
                            3 === o
                                ? ((e.scaleX = 2),
                                  (a.scaleY = 1),
                                  i && i.isValid && (i.active = !0),
                                  (n.spriteFrame = t.touchSprite))
                                : (t.layerArr[o] && m.UIMgr.closeView(t.layerArr[o], !1),
                                  (e.scale = 1),
                                  (a.scale = 0.5),
                                  i && i.isValid && (i.active = !1),
                                  (n.spriteFrame = null));
                        }),
                        (t.battleLayer.active = !1),
                        y.ClientEvents.CHANGE_LOADING.emit(!0),
                        m.UIMgr.showView(
                            t.layerArr[3],
                            t.node,
                            null,
                            function () {
                                y.ClientEvents.CHANGE_LOADING.emit(!1);
                            },
                            t.layerZIndex[3]
                        ));
                }),
                (t.refreshRedPoint = function () {
                    var e = (new Date().getTime() - g.playData.getLastEarnTime()) / 1e3,
                        o = I.JsonMgr.getDefineConstantByName("PatrolTimeMax"),
                        n = e >= 3600 * Number(o),
                        a = g.playData.getPatrolNowEnergy(),
                        i = g.playData.getEnergy(),
                        r = I.JsonMgr.getDefineConstantByName("PatrolNowEnergy").split("|")[0],
                        s = a > 0 && i > Number(r),
                        c = g.playData.getPatrolNowAD() > 0;
                    (t.patrolRedPoint.active = n || s || c),
                        (t.activityLevelRed.active = U.activityMgr.checkHasCount()),
                        (t.activityRed.active = D.RDMgr.checkActivityRed(1));
                }),
                (t.equipChange = function () {
                    D.RDMgr.checkEquipWear()
                        ? ((t.redDotArr[1].active = !0),
                          (t.redDotArr[1].getComponent(cc.Sprite).spriteFrame = t.redDotFrame[2]))
                        : D.RDMgr.checkEquipUpLevel()
                        ? ((t.redDotArr[1].active = !0),
                          (t.redDotArr[1].getComponent(cc.Sprite).spriteFrame = t.redDotFrame[1]))
                        : b.heroData.getCanCompound()
                        ? ((t.redDotArr[1].active = !0),
                          (t.redDotArr[1].getComponent(cc.Sprite).spriteFrame = t.redDotFrame[0]))
                        : (D.RDMgr.checkHeroLevelUp() || D.RDMgr.checkHeroGradeUp() || x.heroMgr.checkHeroLock()) &&
                          g.playData.getCompleteLevel() < Number(I.JsonMgr.getDefineConstantByName("HeroUnlockLevel"))
                        ? ((t.redDotArr[1].active = !0),
                          (t.redDotArr[1].getComponent(cc.Sprite).spriteFrame = t.redDotFrame[0]))
                        : (t.redDotArr[1].active = !1);
                }),
                (t.goldChange = function () {
                    (t.redDotArr[2].active = D.RDMgr.checkNextTalent()),
                        t.dressChange(),
                        y.ClientEvents.EQUIP_HERO_UP.emit();
                }),
                (t.shopChange = function () {
                    t.redDotArr[0].active = A.drawMgr.getFreeNowHasCd() <= 0 || A.drawMgr.getGoldFreeNowHasCd() <= 0;
                }),
                (t.dressChange = function () {
                    D.RDMgr.checkEquipUpLevel()
                        ? ((t.redDotArr[1].active = !0),
                          (t.redDotArr[1].getComponent(cc.Sprite).spriteFrame = t.redDotFrame[1]))
                        : D.RDMgr.checkEquipWear()
                        ? ((t.redDotArr[1].active = !0),
                          (t.redDotArr[1].getComponent(cc.Sprite).spriteFrame = t.redDotFrame[2]))
                        : b.heroData.getCanCompound()
                        ? ((t.redDotArr[1].active = !0),
                          (t.redDotArr[1].getComponent(cc.Sprite).spriteFrame = t.redDotFrame[0]))
                        : (D.RDMgr.checkHeroLevelUp() || D.RDMgr.checkHeroGradeUp() || x.heroMgr.checkHeroLock()) &&
                          g.playData.getCompleteLevel() < Number(I.JsonMgr.getDefineConstantByName("HeroUnlockLevel"))
                        ? ((t.redDotArr[1].active = !0),
                          (t.redDotArr[1].getComponent(cc.Sprite).spriteFrame = t.redDotFrame[0]))
                        : (t.redDotArr[1].active = !1);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onEnable = function () {
                var e = Number(I.JsonMgr.getDefineConstantByName("BattleNodePlayCd"));
                e || (e = 15), this.schedule(this._playBattleNodeAnima, e, cc.macro.REPEAT_FOREVER);
            }),
            (t.prototype.onDisable = function () {
                var e;
                null === (e = this._battleAct) || void 0 === e || e.stop(),
                    (this._battleAct = null),
                    this.unschedule(this._playBattleNodeAnima);
            }),
            (t.prototype.start = function () {
                var e = this;
                m.UIMgr.setCanvas(this.node),
                    this.checkLayerOpen(),
                    this._bindEvent(),
                    this.initView(),
                    this.initBottom(),
                    this.initBattleBtn(),
                    this.energyRefresh(),
                    this.tabTouch(),
                    this.initPatrolBtn(),
                    this.initLayerZIndex(),
                    this.refreshRedPoint(),
                    this.addEvent(y.ClientEvents.ENERGY_CHANGE.on(this.energyRefresh)),
                    this.addEvent(y.ClientEvents.DATA_CHANGE.on(this.initView)),
                    this.addEvent(y.ClientEvents.REFRESH_PATROL_HOME_RED.on(this.refreshRedPoint)),
                    this.addEvent(y.ClientEvents.OPEN_SHOP_VIEW.on(this.openShopAndScrollToBottom)),
                    this.addEvent(y.ClientEvents.OPEN_EQUIP_VIEW.on(this.openEquitView)),
                    this.addEvent(y.ClientEvents.OPEN_TALENT_VIEW.on(this.openTalentView)),
                    this.addEvent(y.ClientEvents.OPEN_CHALLENGE_VIEW.on(this.openChallengeView)),
                    this.addEvent(y.ClientEvents.REFRESH_ACTIVITY_BTN.on(this.initActivityBtn)),
                    this.addEvent(y.ClientEvents.LEVEL_INIT.on(this.initLevelItemScale)),
                    this.addEvent(y.ClientEvents.SKIP_GUIDE.on(this.checkAutoPop)),
                    this.addEvent(
                        y.ClientEvents.CLOSE_ACTIVITY.on(function () {
                            (e.downNode.active = !0), (e.battleLayer.active = !0);
                        })
                    ),
                    this.bindRedDotEvent(),
                    w.audioMgr.initMusic(),
                    w.audioMgr.startBgm(N.AudioConst.BGM),
                    this.rankBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        w.audioMgr.startEffect(N.AudioConst.COMMON_TOUCH),
                            y.ClientEvents.CHANGE_LOADING.emit(!0),
                            m.UIMgr.showView(l.ViewUrl.rankView, null, null, function () {
                                y.ClientEvents.CHANGE_LOADING.emit(!1);
                            });
                    }),
                    this.addPowerNode.on(cc.Node.EventType.TOUCH_END, function () {
                        w.audioMgr.startEffect(N.AudioConst.COMMON_TOUCH),
                            y.ClientEvents.CHANGE_LOADING.emit(!0),
                            m.UIMgr.showView(l.ViewUrl.energyAdd, null, null, function () {
                                y.ClientEvents.CHANGE_LOADING.emit(!1);
                            });
                    }),
                    E.analyMgr.reportEnterMainScene(g.playData.getLevel()),
                    this.addGoldNode.on(cc.Node.EventType.TOUCH_END, function () {
                        (e.downNode.active = !0),
                            (e.battleLayer.active = !0),
                            m.UIMgr.closeView(l.ViewUrl.ActivityLevelView),
                            w.audioMgr.startEffect(N.AudioConst.COMMON_TOUCH),
                            y.ClientEvents.CLOSE_FULL_VIEW.emit(),
                            e.openShopAndScrollToBottom(!0);
                    }),
                    this.addDiamondNode.on(cc.Node.EventType.TOUCH_END, function () {
                        (e.downNode.active = !0),
                            (e.battleLayer.active = !0),
                            m.UIMgr.closeView(l.ViewUrl.ActivityLevelView),
                            w.audioMgr.startEffect(N.AudioConst.COMMON_TOUCH),
                            y.ClientEvents.CLOSE_FULL_VIEW.emit(),
                            e.openShopAndScrollToBottom(!0);
                    }),
                    this.springAcyivityBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        y.ClientEvents.CHANGE_LOADING.emit(!0),
                            f.homeMgr.reportTouchBtnHome("ExchangeActivity"),
                            O.activityManager.init(),
                            m.UIMgr.showView(
                                l.ViewUrl.SpringView,
                                null,
                                O.activityManager.getActivityDataById(1),
                                function () {
                                    y.ClientEvents.CHANGE_LOADING.emit(!1);
                                }
                            );
                    }),
                    (this.activityNode.active = g.playData.getCompleteLevel() >= 3),
                    this.activityNode.on(cc.Node.EventType.TOUCH_END, this.activityClickHandle),
                    this.node.data &&
                        (-1 === this.node.data ? this.activityClickHandle() : this.refreshBtn(this.node.data)),
                    this.initLevelItemScale(),
                    f.homeMgr.setCurShowLayer(l.ViewUrl.homeUI);
                var t = I.JsonMgr.getDefineConstantByName("FailLevel").split(",");
                g.playData.getLastFail() &&
                g.playData.getLastFail() >= Number(t[0]) &&
                g.playData.getLastFail() <= Number(t[1]) &&
                g.playData.getFailGuideStep() !== R.FAIL_GUIDE.OVER
                    ? g.playData.getNewUserStep() == R.GUIDE_STEP.OVER &&
                      g.playData.getFailGuideStep() === R.FAIL_GUIDE.ALERT &&
                      m.UIMgr.showView(l.ViewUrl.failCompelGuide, null, null, null)
                    : g.playData.getFailGuide() &&
                      (g.playData.setFailGuide(!1),
                      g.playData.getNewUserStep() == R.GUIDE_STEP.OVER &&
                          m.UIMgr.showView(l.ViewUrl.failGuide, null, null, null)),
                    this.initActivityBtn(),
                    this.checkAutoPop();
            }),
            (t.prototype.bindRedDotEvent = function () {
                var e = this;
                this.equipChange(),
                    this.goldChange(),
                    this.shopChange(),
                    this.dressChange(),
                    this.schedule(this.checkShopRedDot, 1),
                    this.addEvent(y.ClientEvents.EquipChange.on(this.equipChange)),
                    this.addEvent(y.ClientEvents.GoldChange.on(this.goldChange)),
                    this.addEvent(y.ClientEvents.ShopChange.on(this.shopChange)),
                    this.addEvent(y.ClientEvents.DressChange.on(this.dressChange)),
                    this.addEvent(
                        y.ClientEvents.DOWN_BTN_CHANGE.on(function (t) {
                            e.refreshBtn(t);
                        })
                    ),
                    this.addEvent(y.ClientEvents.REFRESH_LAYER_OPEN.on(this.checkLayerOpen));
            }),
            (t.prototype.initLayerZIndex = function () {
                (this.bgLayer.zIndex = C.HomeIndexConst.BgLayer),
                    (this.battleLayer.zIndex = C.HomeIndexConst.BattleLayer),
                    (this.topNode.zIndex = C.HomeIndexConst.TopNode),
                    (this.downNode.zIndex = C.HomeIndexConst.DownNode);
            }),
            (t.prototype.lockItem = function (e) {
                var t = this.downNode.children[e],
                    o = t.getChildByName("icon"),
                    n = t.getChildByName("suo");
                (o.active = !1), (n.active = !0);
            }),
            (t.prototype.checkLevelLabelScale = function (e) {
                e != this.pageIndex &&
                    (cc.Tween.stopAllByTarget(this.levelName.node),
                    cc.tween(this.levelName.node).to(0, {scale: 0}).to(0.3, {scale: 1.2}).to(0.1, {scale: 1}).start(),
                    (this.pageIndex = e));
            }),
            (t.prototype.tabTouch = function () {
                var e = this;
                this.tabNode.children.forEach(function (t, o) {
                    t.on(cc.Node.EventType.TOUCH_END, function () {
                        0 == o ? e.levelList.prePage() : 1 == o && e.levelList.nextPage(),
                            f.homeMgr.reportTouchBtnHome("ChangeLevel");
                    });
                });
            }),
            (t.prototype.refreshNextAddEnergyLabel = function () {
                var e = f.homeMgr.getNextEnergyAddTime() - Date.now();
                this.nextAddTimeLabel.string = v.gameMgr.getLabelTimeNum(Math.ceil(e / 1e3));
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(p.default).init(t);
            }),
            (t.prototype._bindEvent = function () {
                this.headIcon.node.on(cc.Node.EventType.TOUCH_END, this._settingClickHandle);
            }),
            (t.prototype.getUrl = function () {
                return l.ViewUrl.homeUI;
            }),
            (t.prototype.initBattleBtn = function () {
                var e = this;
                this.battleNode.on(cc.Node.EventType.TOUCH_END, function () {
                    w.audioMgr.startEffect(N.AudioConst.COMMON_TOUCH), e.startBattle();
                });
            }),
            (t.prototype.startBattle = function () {
                return r(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return f.homeMgr.isLevelLock(this.levelList.getPageId())
                                    ? ((e = S.langMgr.getStr("Tips_Common_Chapter")),
                                      m.UIMgr.showView(l.ViewUrl.commonTip, null, e),
                                      [2])
                                    : f.homeMgr.checkEnergy()
                                    ? (f.homeMgr.useEnergy(f.homeMgr.getCoustEnergy()),
                                      (this.powerCount.string = g.playData.getEnergy().toString()),
                                      this.isInAddEnergy || this.energyRefresh(),
                                      [4, P.scrMgr.checkStartBattleSubScribe()])
                                    : [3, 3];
                            case 1:
                                return t.sent(), f.homeMgr.reportTouchBtnHome("Level"), [4, this.gameStart()];
                            case 2:
                                return t.sent(), B.TaskMgr.addActivityTaskPro(1, 1), [3, 4];
                            case 3:
                                m.UIMgr.showView(l.ViewUrl.energyAdd),
                                    m.UIMgr.showView(l.ViewUrl.commonTip, null, S.langMgr.getStr("Tips_NoEnergy")),
                                    (t.label = 4);
                            case 4:
                                return [2];
                        }
                    });
                });
            }),
            (t.prototype.gameStart = function () {
                return r(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (
                                    this.unschedule(this.checkShopRedDot),
                                    (e = this.levelList.getPageId()),
                                    [4, v.gameMgr.startGame(e)]
                                );
                            case 1:
                                return t.sent(), [2];
                        }
                    });
                });
            }),
            (t.prototype.initBottom = function () {
                var e = this;
                this.downNode.children.forEach(function (t, o) {
                    t.on(cc.Node.EventType.TOUCH_END, function () {
                        e.refreshBtn(o);
                    });
                });
            }),
            (t.prototype.refreshBtn = function (e) {
                var t = this;
                if (
                    (this.layerArr[e] ||
                        ((this.battleLayer.active = !0),
                        f.homeMgr.setCurShowLayer(l.ViewUrl.homeUI),
                        f.homeMgr.reportTouchBtnHome("Home")),
                    "-1" != this.layerArr[e])
                )
                    2 === e && this.initActivityBtn(),
                        4 === e
                            ? ((this.propellerNode.active = !0), (this.powerNode.active = !1))
                            : ((this.propellerNode.active = !1), (this.powerNode.active = !0)),
                        this.downNode.children.forEach(function (o, n) {
                            var a = o.getComponent(cc.Sprite),
                                i = o.getChildByName("icon"),
                                r = i.getChildByName("label");
                            n === e
                                ? ((o.scaleX = 2),
                                  (i.scaleY = 1),
                                  r && r.isValid && (r.active = !0),
                                  (a.spriteFrame = t.touchSprite))
                                : (t.layerArr[n] && m.UIMgr.closeView(t.layerArr[n], !1),
                                  (o.scale = 1),
                                  (i.scale = 0.5),
                                  r && r.isValid && (r.active = !1),
                                  (a.spriteFrame = null));
                        }),
                        this.layerArr[e] &&
                            ((this.battleLayer.active = !1),
                            y.ClientEvents.CHANGE_LOADING.emit(!0),
                            f.homeMgr.reportTouchBtnHome(this.getReportStyleByIndex(e)),
                            m.UIMgr.showView(
                                this.layerArr[e],
                                this.node,
                                null,
                                function (o) {
                                    y.ClientEvents.CHANGE_LOADING.emit(!1),
                                        f.homeMgr.setCurShowLayer(t.layerArr[e]),
                                        0 == e &&
                                            (g.playData.getFailGuideStep() >= R.FAIL_GUIDE.SHOP &&
                                            g.playData.getFailGuideStep() < R.FAIL_GUIDE.OVER
                                                ? o.getComponent(k.default).ScrollTo(0.5)
                                                : (A.drawMgr.getFreeNowHasCd() <= 0 ||
                                                      A.drawMgr.getGoldFreeNowHasCd() <= 0) &&
                                                  g.playData.getNewUserStep() === R.GUIDE_STEP.OVER
                                                ? o.getComponent(k.default).ScrollTo(0)
                                                : o.getComponent(k.default).ScrollTo(1));
                                },
                                this.layerZIndex[e]
                            )),
                        2 === e && this.initLevelItemScale();
                else {
                    var o = S.langMgr.getStr("Tips_Common_Lock");
                    m.UIMgr.showView(l.ViewUrl.commonTip, null, o);
                }
            }),
            (t.prototype.update = function (e) {
                e > 0.5 || this.checkEnergyAdd();
            }),
            (t.prototype.checkEnergyAdd = function () {
                var e = g.playData.getEnergy();
                if (!(e >= 30) && Date.now() >= f.homeMgr.getNextEnergyAddTime()) {
                    var t = Date.now() - f.homeMgr.getNextEnergyAddTime(),
                        o = t % (1e3 * f.homeMgr.getEnergyAddCD()),
                        n = 1 + Math.floor(t / 1e3 / f.homeMgr.getEnergyAddCD());
                    (n = Math.min(30 - e, n)),
                        f.homeMgr.setNextEnergeAddTime(Date.now() + f.homeMgr.getEnergyAddCD() - o),
                        f.homeMgr.addEnergy(n, "Time");
                }
            }),
            (t.prototype.onPageChange = function () {
                var e = this,
                    t = this.levelList.getPageId();
                f.homeMgr.setCurLevel(t),
                    this.refreshScale(t),
                    this.refreshLevelName(t),
                    this.checkLevelLabelScale(t),
                    this.scheduleOnce(function () {
                        e.setTabState();
                    });
            }),
            (t.prototype.setTabState = function () {
                (this.tabNode.children[0].active = 0 !== this.levelList.curPageNum),
                    (this.tabNode.children[1].active = this.levelList.curPageNum !== this.levelList.numItems - 1);
            }),
            (t.prototype.refreshScale = function (e) {
                (this.levelScore.string = v.gameMgr.getLabelTimeNum(_.btResMgr.getLevelScore(e + 1))),
                    this.levelList.content.children.forEach(function (t) {
                        var o = t.getComponent(p.default).getIndex();
                        if (o != e) {
                            var n = 1 - 0.4 * Math.abs(o - e);
                            n < 0.2 && (n = 0.2), t.setScale(n, n);
                        } else t.setScale(1, 1);
                    });
            }),
            (t.prototype.refreshLevelName = function (e) {
                this.levelName.getComponent(M.LangLabel).setText(f.homeMgr.getLevelName(e));
            }),
            (t.prototype.initPatrolBtn = function () {
                (g.playData.getLastEarnTime() && 0 !== g.playData.getLastEarnTime()) || g.playData.resetEarnTime(),
                    this.patrolBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        w.audioMgr.startEffect(N.AudioConst.COMMON_TOUCH),
                            y.ClientEvents.CHANGE_LOADING.emit(!0),
                            f.homeMgr.reportTouchBtnHome("Patrol"),
                            m.UIMgr.showView(l.ViewUrl.patrolReward, null, null, function () {
                                y.ClientEvents.CHANGE_LOADING.emit(!1);
                            });
                    }),
                    this.patrol1Btn.on(cc.Node.EventType.TOUCH_END, function () {
                        w.audioMgr.startEffect(N.AudioConst.COMMON_TOUCH),
                            y.ClientEvents.CHANGE_LOADING.emit(!0),
                            f.homeMgr.reportTouchBtnHome("Patrol"),
                            m.UIMgr.showView(l.ViewUrl.patrolReward, null, null, function () {
                                y.ClientEvents.CHANGE_LOADING.emit(!1);
                            });
                    });
            }),
            (t.prototype.checkShopRedDot = function () {
                this.redDotArr[0].active || this.shopChange();
            }),
            (t.prototype.checkAutoPop = function () {
                var e = I.JsonMgr.getDefineConstantByName("FailLevel").split(","),
                    t =
                        g.playData.getLastFail() &&
                        g.playData.getLastFail() >= Number(e[0]) &&
                        g.playData.getLastFail() <= Number(e[1]) &&
                        g.playData.getFailGuideStep() !== R.FAIL_GUIDE.OVER;
                g.playData.getNewUserStep() != R.GUIDE_STEP.OVER || t || L.AutoPopMgr.checkAutoPop();
            }),
            (t.prototype._playBattleNodeAnima = function () {
                this._battleAct = cc
                    .tween(this.battleNode)
                    .to(0.15, {scale: 1.1}, {easing: cc.easing.sineOut})
                    .to(0.15, {scale: 1}, {easing: cc.easing.sineIn})
                    .union()
                    .repeat(2)
                    .start();
            }),
            (t.prototype.getReportStyleByIndex = function (e) {
                switch (e) {
                    case 0:
                        return "Shop";
                    case 1:
                        return "Equip";
                    case 3:
                        return "Challenge";
                    case 4:
                        return "Talent";
                }
            }),
            i([V(cc.Sprite)], t.prototype, "headIcon", void 0),
            i([V(cc.Node)], t.prototype, "settingNode", void 0),
            i([V(cc.Label)], t.prototype, "goldCount", void 0),
            i([V(cc.Label)], t.prototype, "gemCount", void 0),
            i([V(cc.Label)], t.prototype, "powerCount", void 0),
            i([V(cc.Label)], t.prototype, "propellerCount", void 0),
            i([V(cc.Node)], t.prototype, "addPowerNode", void 0),
            i([V(cc.Node)], t.prototype, "addGoldNode", void 0),
            i([V(cc.Node)], t.prototype, "addDiamondNode", void 0),
            i([V(h.default)], t.prototype, "levelList", void 0),
            i([V(cc.Node)], t.prototype, "battleNode", void 0),
            i([V(cc.Label)], t.prototype, "energyLabel", void 0),
            i([V(cc.Node)], t.prototype, "nextAddTime", void 0),
            i([V(cc.Label)], t.prototype, "nextAddTimeLabel", void 0),
            i([V(cc.Label)], t.prototype, "levelName", void 0),
            i([V(cc.Label)], t.prototype, "levelScore", void 0),
            i([V(cc.Node)], t.prototype, "tabNode", void 0),
            i([V(cc.Node)], t.prototype, "downNode", void 0),
            i([V(cc.Node)], t.prototype, "bgLayer", void 0),
            i([V(cc.Node)], t.prototype, "battleLayer", void 0),
            i([V(cc.Node)], t.prototype, "topNode", void 0),
            i([V(cc.SpriteFrame)], t.prototype, "touchSprite", void 0),
            i([V(cc.Node)], t.prototype, "patrolBtn", void 0),
            i([V(cc.Node)], t.prototype, "patrol1Btn", void 0),
            i([V(cc.Node)], t.prototype, "patrolRedPoint", void 0),
            i([V(cc.Node)], t.prototype, "rankBtn", void 0),
            i([V(cc.Node)], t.prototype, "powerNode", void 0),
            i([V(cc.Node)], t.prototype, "propellerNode", void 0),
            i([V(cc.Node)], t.prototype, "redDotArr", void 0),
            i([V(cc.SpriteFrame)], t.prototype, "redDotFrame", void 0),
            i([V(cc.Node)], t.prototype, "activityNode", void 0),
            i([V(cc.Node)], t.prototype, "springAcyivityBtn", void 0),
            i([V(cc.Node)], t.prototype, "activityLevelRed", void 0),
            i([V(cc.Node)], t.prototype, "activityRed", void 0),
            i([H], t)
        );
    })(c.GameComponent);
o.default = F;
