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
    p = e("LanguageManager"),
    u = e("DrawManager"),
    d = e("TimeUtil"),
    h = e("PlayerData"),
    g = e("ClientEvents"),
    m = e("UIManager"),
    f = e("LoadManager"),
    y = e("WxManager"),
    v = e("AnalyticsManager"),
    M = e("EquipManager"),
    _ = e("JsonManager"),
    C = e("SubscribeManager"),
    b = e("GuideManager"),
    T = e("TaskTypeManager"),
    w = e("TaskManager"),
    N = cc._decorator,
    E = N.ccclass,
    S = N.property,
    D = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.myDesc = null),
                (t.superDesc = null),
                (t.normalOne = null),
                (t.superOne = null),
                (t.superTen = null),
                (t.freeLabel = null),
                (t.littleLabel = null),
                (t.aLotLabel = null),
                (t.ssrOne = null),
                (t.ssrTen = null),
                (t.ssrOneLabel = null),
                (t.ssrTenLabel = null),
                (t.ssrNode = null),
                (t.ssrDescribe = null),
                (t.freeTime = null),
                (t.aLotTime = null),
                (t.freeNode = null),
                (t.littleNode = null),
                (t.diamondAdTimeLeft = null),
                (t.aLotNode = null),
                (t.aLotDiamondProg = null),
                (t.normalSeeAd = null),
                (t.normalSeeAdLeft = null),
                (t.normalOneNode = null),
                (t.superOneNode = null),
                (t.superTenNode = null),
                (t.goldFreeLabel = null),
                (t.goldFreeCd = null),
                (t.goldAdLabel = null),
                (t.goldAdTimeLeft = null),
                (t.goldCostLabel = null),
                (t.goldCostDiamondLabel = null),
                (t.goldFreeBtnNode = null),
                (t.goldAdBtnNode = null),
                (t.goldCostBtnNode = null),
                (t.scrollView = null),
                (t.spMaterials = []),
                (t.ssrContent = null),
                (t.keysSprite = []),
                (t.normalOpen = []),
                (t.tenOpen = []),
                (t.diamondSprite = null),
                (t.shareNode = null),
                (t.freeClickHandle = function () {
                    return r(t, void 0, void 0, function () {
                        return s(this, function () {
                            return (
                                T.TaskTypeMgr.shopBuyTimesTask(1),
                                w.TaskMgr.addActivityTaskPro(10, 1),
                                u.drawMgr.getFreeDiamond(),
                                this.initFree(),
                                C.scrMgr.checkSubscribeShop(),
                                [2]
                            );
                        });
                    });
                }),
                (t.aLotClickHandle = function () {
                    y.wxMgr.createVideo(
                        {placementName: "AdGiveGem", openUi: "ShopView", level: h.playData.getLevel()},
                        function () {},
                        function () {
                            u.drawMgr.setALotNowHasCount(u.drawMgr.getALotNowHasCount() + 1),
                                t.refreshALotDiamondProgress(),
                                u.drawMgr.getALotNowHasCount() >= 5 &&
                                    (T.TaskTypeMgr.shopBuyTimesTask(1),
                                    w.TaskMgr.addActivityTaskPro(10, 1),
                                    u.drawMgr.getALotDiamond()),
                                t.initALot();
                        }
                    );
                }),
                (t.littleClickHandle = function () {
                    t.littleNode.getComponent(cc.Button).interactable &&
                        y.wxMgr.createVideo(
                            {placementName: "AdGiveGem", openUi: "ShopView", level: h.playData.getLevel()},
                            function () {},
                            function () {
                                T.TaskTypeMgr.shopBuyTimesTask(1),
                                    w.TaskMgr.addActivityTaskPro(10, 1),
                                    h.playData.setShopDiamond2Ad(h.playData.getShopDiamond2Ad() - 1),
                                    u.drawMgr.getLittleDiamond(),
                                    t.initLittle();
                            }
                        );
                }),
                (t.doGoldFreeTimeSc = function () {
                    var e = u.drawMgr.getGoldFreeCdTime();
                    (t.goldFreeCd.string = d.TimeUtil.getTimeHouseStrBySecond(e)),
                        u.drawMgr.downGoldFreeCdTime(),
                        u.drawMgr.getGoldFreeCdTime() <= 0 && t.unschedule(t.doGoldFreeTimeSc);
                }),
                (t.doFreeTimeSc = function () {
                    var e = u.drawMgr.getFreeCdTime();
                    (t.freeTime.string = d.TimeUtil.getTimeHouseStrBySecond(e)),
                        u.drawMgr.downCdTime(),
                        u.drawMgr.getFreeCdTime() <= 0 && t.unschedule(t.doFreeTimeSc);
                }),
                (t.doALotTimeSc = function () {
                    var e = u.drawMgr.getALotCdTime();
                    (t.aLotTime.string = d.TimeUtil.getTimeHouseStrBySecond(e)),
                        u.drawMgr.downALotCdTime(),
                        u.drawMgr.getALotCdTime() <= 0 && (t.unschedule(t.doALotTimeSc), t.initALot());
                }),
                (t.initCostLabelSprite = function () {
                    u.drawMgr.getNormalKey() >= 1
                        ? ((t.normalOpen[0].spriteFrame = t.keysSprite[0]),
                          (t.normalOpen[0].node.scale = 0.5),
                          (t.normalOne.string = " " + u.drawMgr.getNormalKey() + " / 1"))
                        : ((t.normalOpen[0].spriteFrame = t.diamondSprite),
                          (t.normalOpen[0].node.scale = 0.3),
                          (t.normalOne.string = "X " + u.drawMgr.getNormalOne().toString())),
                        u.drawMgr.getSuperKey() >= 1
                            ? ((t.normalOpen[1].spriteFrame = t.keysSprite[1]),
                              (t.normalOpen[1].node.scale = 0.5),
                              (t.superOne.string = " " + u.drawMgr.getSuperKey() + " / 1"),
                              u.drawMgr.getSuperKey() >= 10
                                  ? ((t.tenOpen[0].spriteFrame = t.keysSprite[1]),
                                    (t.tenOpen[0].node.scale = 0.5),
                                    (t.superTen.string = " " + u.drawMgr.getSuperKey() + " / 10"))
                                  : ((t.tenOpen[0].spriteFrame = t.diamondSprite),
                                    (t.tenOpen[0].node.scale = 0.3),
                                    (t.superTen.string = "X " + u.drawMgr.getSuperTen())))
                            : ((t.normalOpen[1].spriteFrame = t.diamondSprite),
                              (t.normalOpen[1].node.scale = 0.3),
                              (t.superOne.string = "X " + u.drawMgr.getSuperOne()),
                              (t.tenOpen[0].spriteFrame = t.diamondSprite),
                              (t.tenOpen[0].node.scale = 0.3),
                              (t.superTen.string = "X " + u.drawMgr.getSuperTen())),
                        u.drawMgr.getSSRKey() >= 1
                            ? ((t.normalOpen[2].spriteFrame = t.keysSprite[2]),
                              (t.normalOpen[2].node.scale = 0.5),
                              (t.ssrOneLabel.string = " " + u.drawMgr.getSSRKey() + " / 1"),
                              u.drawMgr.getSSRKey() >= 10
                                  ? ((t.tenOpen[1].spriteFrame = t.keysSprite[2]),
                                    (t.tenOpen[1].node.scale = 0.5),
                                    (t.ssrTenLabel.string = " " + u.drawMgr.getSSRKey() + " / 10"))
                                  : ((t.tenOpen[1].spriteFrame = t.diamondSprite),
                                    (t.tenOpen[1].node.scale = 0.3),
                                    (t.ssrTenLabel.string = "X " + u.drawMgr.getSSRTen())))
                            : ((t.normalOpen[2].spriteFrame = t.diamondSprite),
                              (t.normalOpen[2].node.scale = 0.3),
                              (t.ssrOneLabel.string = "X " + u.drawMgr.getSSROne()),
                              (t.tenOpen[1].spriteFrame = t.diamondSprite),
                              (t.tenOpen[1].node.scale = 0.3),
                              (t.ssrTenLabel.string = "X " + u.drawMgr.getSSRTen()));
                }),
                (t.initRichText = function () {
                    (t.myDesc.string = p.langMgr.getStr("UI_Shop_Desc1")),
                        (t.superDesc.string = p.langMgr.getStr("UI_Shop_Desc2")),
                        (t.ssrDescribe.string = p.langMgr.getStr("UI_Shop_Desc3")),
                        (t.myDesc.string = t.myDesc.string.replace("%", u.drawMgr.getNormalMustTime().toString())),
                        (t.superDesc.string = t.superDesc.string.replace("%", u.drawMgr.getSuperMustTime().toString()));
                    var e = t.ssrDescribe.string.replace("%", u.drawMgr.getSSRGrade4MustTime().toString());
                    t.ssrDescribe.string = e.replace("$", u.drawMgr.getSSRMustTime().toString());
                }),
                (t.normalSeeAdClickHandle = function () {
                    return r(t, void 0, void 0, function () {
                        var e = this;
                        return s(this, function () {
                            return (
                                this.normalSeeAd.getComponent(cc.Button).interactable &&
                                    y.wxMgr.createVideo(
                                        {placementName: "AdBox", openUi: "ShopView", level: h.playData.getLevel()},
                                        function () {},
                                        function () {
                                            return r(e, void 0, void 0, function () {
                                                var e,
                                                    t = this;
                                                return s(this, function (o) {
                                                    switch (o.label) {
                                                        case 0:
                                                            return (
                                                                T.TaskTypeMgr.openAnyBoxTimesTask(1, !1),
                                                                T.TaskTypeMgr.shopBuyTimesTask(1),
                                                                w.TaskMgr.addActivityTaskPro(10, 1),
                                                                h.playData.setShopBox1Ad(
                                                                    h.playData.getShopBox1Ad() - 1
                                                                ),
                                                                (e = u.drawMgr.drawInNormalPool(!0, "Ad", 1)),
                                                                g.ClientEvents.CHANGE_LOADING.emit(!0),
                                                                [
                                                                    4,
                                                                    f.LoadManager.loadResDirAwait(
                                                                        "texture/icon/equipment"
                                                                    )
                                                                ]
                                                            );
                                                        case 1:
                                                            return (
                                                                o.sent(),
                                                                m.UIMgr.showView(
                                                                    l.ViewUrl.drawRewardView,
                                                                    null,
                                                                    {data: [e], isSuper: !1},
                                                                    function () {
                                                                        g.ClientEvents.CHANGE_LOADING.emit(!1),
                                                                            t.initRichText(),
                                                                            t.initNormalSeeAd();
                                                                    }
                                                                ),
                                                                [2]
                                                            );
                                                    }
                                                });
                                            });
                                        }
                                    ),
                                [2]
                            );
                        });
                    });
                }),
                (t.normalClickHandle = function () {
                    return r(t, void 0, void 0, function () {
                        var e,
                            t,
                            o,
                            n = this;
                        return s(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return h.playData.getNewUserStep() < b.GUIDE_STEP.EQUIP
                                        ? (T.TaskTypeMgr.openAnyBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(1),
                                          w.TaskMgr.addActivityTaskPro(10, 1),
                                          M.equipMgr.addEquip(b.default.guideWeaponId),
                                          h.playData.addGold(3e3),
                                          M.equipMgr.addMap(10001, 10),
                                          h.playData.addGuideStep(),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 2];
                                case 1:
                                    return (
                                        a.sent(),
                                        (e = _.JsonMgr.getJsonById("weapon", b.default.guideWeaponId)),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: [{json: e, mapId: 10001, mapNum: 10, goldNum: 3e3}], isSuper: !1},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), n.initRichText();
                                            }
                                        ),
                                        [3, 7]
                                    );
                                case 2:
                                    return u.drawMgr.getNormalKey() >= 1
                                        ? (T.TaskTypeMgr.openAnyBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(1),
                                          w.TaskMgr.addActivityTaskPro(10, 1),
                                          h.playData.addNormalKey(-1),
                                          v.analyMgr.reportUseItem("Key", 2001, 1, "BoxKey"),
                                          (t = u.drawMgr.drawInNormalPool(!1, "Key", 1)),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 4];
                                case 3:
                                    return (
                                        a.sent(),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: [t], isSuper: !1},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), n.initRichText();
                                            }
                                        ),
                                        this.initCostLabelSprite(),
                                        [3, 7]
                                    );
                                case 4:
                                    return h.playData.getGem() >= u.drawMgr.getNormalOne()
                                        ? (T.TaskTypeMgr.openAnyBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(1),
                                          w.TaskMgr.addActivityTaskPro(10, 1),
                                          h.playData.useGem(u.drawMgr.getNormalOne()),
                                          v.analyMgr.reportUseGem(u.drawMgr.getNormalOne(), "Buy80Box"),
                                          (t = u.drawMgr.drawInNormalPool(!1, "Gem", u.drawMgr.getNormalOne())),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 6];
                                case 5:
                                    return (
                                        a.sent(),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: [t], isSuper: !1},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), n.initRichText();
                                            }
                                        ),
                                        [3, 7]
                                    );
                                case 6:
                                    (o = p.langMgr.getStr("Tips_Lack")),
                                        m.UIMgr.showView(l.ViewUrl.commonTip, null, o),
                                        (a.label = 7);
                                case 7:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.superOnceClick = function () {
                    return r(t, void 0, void 0, function () {
                        var e,
                            t,
                            o = this;
                        return s(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return h.playData.getFailGuideStep() !== b.FAIL_GUIDE.SHOP
                                        ? [3, 2]
                                        : (T.TaskTypeMgr.openRedBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.openAnyBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(1),
                                          w.TaskMgr.addActivityTaskPro(10, 1),
                                          h.playData.getSuperKey() >= 1 &&
                                              (h.playData.addSuperKey(-1),
                                              v.analyMgr.reportUseItem("Key", 2002, 1, "BoxKey")),
                                          h.playData.addFailGuideStep(),
                                          (e = u.drawMgr.drawInFailGuidePool()),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")]);
                                case 1:
                                    return (
                                        n.sent(),
                                        console.log(e),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: e, isSuper: !0},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1);
                                            }
                                        ),
                                        this.initCostLabelSprite(),
                                        [3, 7]
                                    );
                                case 2:
                                    return u.drawMgr.getSuperKey() >= 1
                                        ? (T.TaskTypeMgr.openRedBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.openAnyBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(1),
                                          w.TaskMgr.addActivityTaskPro(10, 1),
                                          h.playData.addSuperKey(-1),
                                          v.analyMgr.reportUseItem("Key", 2002, 1, "BoxKey"),
                                          (e = u.drawMgr.drawInSuperPool(1, "Key", 1)),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 4];
                                case 3:
                                    return (
                                        n.sent(),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: e, isSuper: !0},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), o.initRichText();
                                            }
                                        ),
                                        this.initCostLabelSprite(),
                                        [3, 7]
                                    );
                                case 4:
                                    return h.playData.getGem() >= u.drawMgr.getSuperOne()
                                        ? (T.TaskTypeMgr.openRedBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.openAnyBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(1),
                                          w.TaskMgr.addActivityTaskPro(10, 1),
                                          (e = u.drawMgr.drawInSuperPool(1, "Gem", u.drawMgr.getSuperOne())),
                                          h.playData.useGem(u.drawMgr.getSuperOne()),
                                          v.analyMgr.reportUseGem(u.drawMgr.getSuperOne(), "Buy300Box"),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 6];
                                case 5:
                                    return (
                                        n.sent(),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: e, isSuper: !0},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), o.initRichText();
                                            }
                                        ),
                                        [3, 7]
                                    );
                                case 6:
                                    (t = p.langMgr.getStr("Tips_Lack")),
                                        m.UIMgr.showView(l.ViewUrl.commonTip, null, t),
                                        (n.label = 7);
                                case 7:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.superTenClick = function () {
                    return r(t, void 0, void 0, function () {
                        var e,
                            t,
                            o = this;
                        return s(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return u.drawMgr.getSuperKey() >= 10
                                        ? (T.TaskTypeMgr.openRedBoxTimesTask(10, !1),
                                          T.TaskTypeMgr.openAnyBoxTimesTask(10, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(10),
                                          w.TaskMgr.addActivityTaskPro(10, 10),
                                          h.playData.addSuperKey(-10),
                                          (e = u.drawMgr.drawInSuperPool(10, "Key", 1)),
                                          v.analyMgr.reportUseItem("Key", 2002, 10, "BoxKey"),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 2];
                                case 1:
                                    return (
                                        n.sent(),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: e, isSuper: !0},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), o.initRichText();
                                            }
                                        ),
                                        this.initCostLabelSprite(),
                                        [3, 5]
                                    );
                                case 2:
                                    return h.playData.getGem() >= u.drawMgr.getSuperTen()
                                        ? (T.TaskTypeMgr.openRedBoxTimesTask(10, !1),
                                          T.TaskTypeMgr.openAnyBoxTimesTask(10, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(10),
                                          w.TaskMgr.addActivityTaskPro(10, 10),
                                          (e = u.drawMgr.drawInSuperPool(10, "Gem", u.drawMgr.getSuperTen())),
                                          h.playData.useGem(u.drawMgr.getSuperTen()),
                                          v.analyMgr.reportUseGem(u.drawMgr.getSuperTen(), "Buy300Box"),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 4];
                                case 3:
                                    return (
                                        n.sent(),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: e, isSuper: !0},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), o.initRichText();
                                            }
                                        ),
                                        [3, 5]
                                    );
                                case 4:
                                    (t = p.langMgr.getStr("Tips_Lack")),
                                        m.UIMgr.showView(l.ViewUrl.commonTip, null, t),
                                        (n.label = 5);
                                case 5:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.ssrOneClick = function () {
                    return r(t, void 0, void 0, function () {
                        var e,
                            t,
                            o = this;
                        return s(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return u.drawMgr.getSSRKey() >= 1
                                        ? (T.TaskTypeMgr.openSSRboxTimesTask(1, !1),
                                          T.TaskTypeMgr.openAnyBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(1),
                                          w.TaskMgr.addActivityTaskPro(10, 1),
                                          w.TaskMgr.addActivityTaskPro(33, 1),
                                          h.playData.addSSRKey(-1),
                                          (e = u.drawMgr.drawInSSRPool(1, "Key", 1)),
                                          v.analyMgr.reportUseItem("Key", 2003, 1, "BoxKey"),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 2];
                                case 1:
                                    return (
                                        n.sent(),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: e, isSuper: !0},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), o.initRichText();
                                            }
                                        ),
                                        this.initCostLabelSprite(),
                                        [3, 5]
                                    );
                                case 2:
                                    return h.playData.getGem() >= u.drawMgr.getSSROne()
                                        ? (T.TaskTypeMgr.openSSRboxTimesTask(1, !1),
                                          T.TaskTypeMgr.openAnyBoxTimesTask(1, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(1),
                                          w.TaskMgr.addActivityTaskPro(10, 1),
                                          w.TaskMgr.addActivityTaskPro(33, 1),
                                          (e = u.drawMgr.drawInSSRPool(1, "Gem", u.drawMgr.getSSROne())),
                                          h.playData.useGem(u.drawMgr.getSSROne()),
                                          v.analyMgr.reportUseGem(u.drawMgr.getSSROne(), "BuySSRBox"),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 4];
                                case 3:
                                    return (
                                        n.sent(),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: e, isSuper: !0},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), o.initRichText();
                                            }
                                        ),
                                        [3, 5]
                                    );
                                case 4:
                                    (t = p.langMgr.getStr("Tips_Lack")),
                                        m.UIMgr.showView(l.ViewUrl.commonTip, null, t),
                                        (n.label = 5);
                                case 5:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.ssrTenClick = function () {
                    return r(t, void 0, void 0, function () {
                        var e,
                            t,
                            o = this;
                        return s(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return u.drawMgr.getSSRKey() >= 10
                                        ? (T.TaskTypeMgr.openSSRboxTimesTask(10, !1),
                                          T.TaskTypeMgr.openAnyBoxTimesTask(10, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(10),
                                          w.TaskMgr.addActivityTaskPro(10, 10),
                                          w.TaskMgr.addActivityTaskPro(33, 10),
                                          h.playData.addSSRKey(-10),
                                          (e = u.drawMgr.drawInSSRPool(10, "Key", 10)),
                                          v.analyMgr.reportUseItem("Key", 2003, 10, "BoxKey"),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 2];
                                case 1:
                                    return (
                                        n.sent(),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: e, isSuper: !0},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), o.initRichText();
                                            }
                                        ),
                                        this.initCostLabelSprite(),
                                        [3, 5]
                                    );
                                case 2:
                                    return h.playData.getGem() >= u.drawMgr.getSSRTen()
                                        ? (T.TaskTypeMgr.openSSRboxTimesTask(10, !1),
                                          T.TaskTypeMgr.openAnyBoxTimesTask(10, !1),
                                          T.TaskTypeMgr.shopBuyTimesTask(10),
                                          w.TaskMgr.addActivityTaskPro(10, 10),
                                          w.TaskMgr.addActivityTaskPro(33, 10),
                                          (e = u.drawMgr.drawInSSRPool(10, "Gem", u.drawMgr.getSSRTen())),
                                          h.playData.useGem(u.drawMgr.getSSRTen()),
                                          v.analyMgr.reportUseGem(u.drawMgr.getSSRTen(), "BuySSRBox"),
                                          g.ClientEvents.CHANGE_LOADING.emit(!0),
                                          [4, f.LoadManager.loadResDirAwait("texture/icon/equipment")])
                                        : [3, 4];
                                case 3:
                                    return (
                                        n.sent(),
                                        m.UIMgr.showView(
                                            l.ViewUrl.drawRewardView,
                                            null,
                                            {data: e, isSuper: !0},
                                            function () {
                                                g.ClientEvents.CHANGE_LOADING.emit(!1), o.initRichText();
                                            }
                                        ),
                                        [3, 5]
                                    );
                                case 4:
                                    (t = p.langMgr.getStr("Tips_Lack")),
                                        m.UIMgr.showView(l.ViewUrl.commonTip, null, t),
                                        (n.label = 5);
                                case 5:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.clickGoldFreeBtnNode = function () {
                    return r(t, void 0, void 0, function () {
                        return s(this, function () {
                            return (
                                T.TaskTypeMgr.shopBuyTimesTask(1),
                                w.TaskMgr.addActivityTaskPro(10, 1),
                                u.drawMgr.getFreeGold(),
                                this.initGoldFree(),
                                C.scrMgr.checkSubscribeShop(),
                                [2]
                            );
                        });
                    });
                }),
                (t.clickGoldAdBtnNode = function () {
                    t.goldAdBtnNode.getComponent(cc.Button).interactable &&
                        y.wxMgr.createVideo(
                            {placementName: "AdGiveGold", openUi: "ShopView", level: h.playData.getLevel()},
                            function () {},
                            function () {
                                T.TaskTypeMgr.shopBuyTimesTask(1),
                                    w.TaskMgr.addActivityTaskPro(10, 1),
                                    h.playData.setShopCoinAd(h.playData.getShopCoinAd() - 1),
                                    u.drawMgr.getAdGold(),
                                    t.initGoldAd();
                            }
                        );
                }),
                (t.clickGoldCostBtnNode = function () {
                    if (u.drawMgr.getCostGold()) T.TaskTypeMgr.shopBuyTimesTask(1), w.TaskMgr.addActivityTaskPro(10, 1);
                    else {
                        var e = p.langMgr.getStr("Tips_Lack");
                        m.UIMgr.showView(l.ViewUrl.commonTip, null, e);
                    }
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return l.ViewUrl.shopView;
            }),
            (t.prototype.start = function () {
                var e = this;
                this.addEvent(g.ClientEvents.REFRESH_DRAW_COUNT.on(this.initRichText)),
                    this.addEvent(g.ClientEvents.REFRESH_SHOP_COST.on(this.initCostLabelSprite)),
                    this.bindEvent(),
                    h.playData.getNewUserStep() < b.GUIDE_STEP.EQUIP
                        ? this.scheduleOnce(function () {
                              m.UIMgr.showGuideWithNode(e.normalOneNode, function () {
                                  return r(e, void 0, void 0, function () {
                                      return s(this, function (e) {
                                          switch (e.label) {
                                              case 0:
                                                  return [4, this.normalClickHandle()];
                                              case 1:
                                                  return e.sent(), [2];
                                          }
                                      });
                                  });
                              });
                          }, 0.1)
                        : h.playData.getFailGuideStep() === b.FAIL_GUIDE.SHOP &&
                          this.scheduleOnce(function () {
                              m.UIMgr.showGuideWithNode(e.superOneNode, function () {
                                  return r(e, void 0, void 0, function () {
                                      return s(this, function (e) {
                                          switch (e.label) {
                                              case 0:
                                                  return [4, this.superOnceClick()];
                                              case 1:
                                                  return e.sent(), [2];
                                          }
                                      });
                                  });
                              });
                          }, 0.1);
            }),
            (t.prototype.onEnable = function () {
                (this.ssrContent.active = h.playData.getNewUserStep() == b.GUIDE_STEP.OVER), this.initView();
            }),
            (t.prototype.bindEvent = function () {
                this.normalSeeAd.on(cc.Node.EventType.TOUCH_END, this.normalSeeAdClickHandle),
                    this.normalOneNode.on(cc.Node.EventType.TOUCH_END, this.normalClickHandle),
                    this.superOneNode.on(cc.Node.EventType.TOUCH_END, this.superOnceClick),
                    this.superTenNode.on(cc.Node.EventType.TOUCH_END, this.superTenClick),
                    this.ssrOne.on(cc.Node.EventType.TOUCH_END, this.ssrOneClick),
                    this.ssrTen.on(cc.Node.EventType.TOUCH_END, this.ssrTenClick),
                    this.ssrNode.on(cc.Node.EventType.TOUCH_END, this.ssrViewClick),
                    this.freeNode.on(cc.Node.EventType.TOUCH_END, this.freeClickHandle),
                    this.aLotNode.on(cc.Node.EventType.TOUCH_END, this.aLotClickHandle),
                    this.littleNode.on(cc.Node.EventType.TOUCH_END, this.littleClickHandle),
                    this.goldFreeBtnNode.on(cc.Node.EventType.TOUCH_END, this.clickGoldFreeBtnNode),
                    this.goldAdBtnNode.on(cc.Node.EventType.TOUCH_END, this.clickGoldAdBtnNode),
                    this.goldCostBtnNode.on(cc.Node.EventType.TOUCH_END, this.clickGoldCostBtnNode);
            }),
            (t.prototype.refreshALotDiamondProgress = function () {
                var e = u.drawMgr.getALotNowHasCount();
                this.aLotDiamondProg.progress = Number((e / 5).toFixed(2));
            }),
            (t.prototype.initView = function () {
                this.initRichText(), this.initCostLabel(), this.initCostLabelSprite(), this.initTimeLabelAndBtn();
            }),
            (t.prototype.initTimeLabelAndBtn = function () {
                this.initNormalSeeAd(),
                    this.initFree(),
                    this.initLittle(),
                    this.initALot(),
                    this.initGoldFree(),
                    this.initGoldAd();
            }),
            (t.prototype.initNormalSeeAd = function () {
                var e = _.JsonMgr.getDefineConstantByName("ShopBox1AD"),
                    t = h.playData.getShopBox1Ad();
                (t = t < 0 ? 0 : t),
                    (this.normalSeeAdLeft.string = "(" + t + "/" + e + ")"),
                    t > 0
                        ? ((this.normalSeeAd.getComponent(cc.Button).interactable = !0),
                          this.normalSeeAd.getComponent(cc.Sprite).setMaterial(0, this.spMaterials[0]),
                          this.normalSeeAd
                              .getChildByName("shipin")
                              .getComponent(cc.Sprite)
                              .setMaterial(0, this.spMaterials[0]))
                        : ((this.normalSeeAd.getComponent(cc.Button).interactable = !1),
                          this.normalSeeAd.getComponent(cc.Sprite).setMaterial(0, this.spMaterials[1]),
                          this.normalSeeAd
                              .getChildByName("shipin")
                              .getComponent(cc.Sprite)
                              .setMaterial(0, this.spMaterials[1]));
            }),
            (t.prototype.initFree = function () {
                var e = u.drawMgr.getFreeNowHasCd();
                e > 0
                    ? ((this.freeTime.node.active = !0),
                      (this.freeNode.active = !1),
                      (this.freeTime.string = d.TimeUtil.getTimeHouseStrBySecond(e)),
                      u.drawMgr.initFreeCdTime(),
                      this.schedule(this.doFreeTimeSc, 1))
                    : ((this.freeTime.node.active = !1),
                      this.unschedule(this.doFreeTimeSc),
                      (this.freeNode.active = !0));
            }),
            (t.prototype.initLittle = function () {
                var e = _.JsonMgr.getDefineConstantByName("ShopDiamond2AD"),
                    t = h.playData.getShopDiamond2Ad();
                (t = t < 0 ? 0 : t),
                    (this.diamondAdTimeLeft.string = "(" + t + "/" + e + ")"),
                    t > 0
                        ? ((this.littleNode.getComponent(cc.Button).interactable = !0),
                          this.littleNode.getComponent(cc.Sprite).setMaterial(0, this.spMaterials[0]),
                          this.littleNode
                              .getChildByName("shipin")
                              .getComponent(cc.Sprite)
                              .setMaterial(0, this.spMaterials[0]))
                        : ((this.littleNode.getComponent(cc.Button).interactable = !1),
                          this.littleNode.getComponent(cc.Sprite).setMaterial(0, this.spMaterials[1]),
                          this.littleNode
                              .getChildByName("shipin")
                              .getComponent(cc.Sprite)
                              .setMaterial(0, this.spMaterials[1]));
            }),
            (t.prototype.initALot = function () {
                this.refreshALotDiamondProgress();
                var e = u.drawMgr.getALotNowHasCd();
                e > 0
                    ? ((this.aLotTime.node.active = !0),
                      (this.aLotNode.active = !1),
                      (this.aLotDiamondProg.node.active = !1),
                      (this.aLotTime.string = d.TimeUtil.getTimeHouseStrBySecond(e)),
                      u.drawMgr.initALotCdTime(),
                      this.schedule(this.doALotTimeSc, 1))
                    : ((this.aLotTime.node.active = !1),
                      (this.aLotNode.active = !0),
                      (this.aLotDiamondProg.node.active = !0),
                      this.unschedule(this.doALotTimeSc));
            }),
            (t.prototype.initGoldFree = function () {
                var e = u.drawMgr.getGoldFreeNowHasCd();
                e > 0
                    ? ((this.goldFreeCd.node.active = !0),
                      (this.goldFreeBtnNode.active = !1),
                      (this.goldFreeCd.string = d.TimeUtil.getTimeHouseStrBySecond(e)),
                      u.drawMgr.initFreeGoldTime(),
                      this.schedule(this.doGoldFreeTimeSc, 1))
                    : ((this.goldFreeCd.node.active = !1),
                      this.unschedule(this.doGoldFreeTimeSc),
                      (this.goldFreeBtnNode.active = !0));
            }),
            (t.prototype.initGoldAd = function () {
                var e = _.JsonMgr.getDefineConstantByName("ShopCoin2AD").split("|")[1],
                    t = h.playData.getShopCoinAd();
                (t = t < 0 ? 0 : t),
                    (this.goldAdTimeLeft.string = "(" + t + "/" + e + ")"),
                    t > 0
                        ? ((this.goldAdBtnNode.getComponent(cc.Button).interactable = !0),
                          this.goldAdBtnNode.getComponent(cc.Sprite).setMaterial(0, this.spMaterials[0]),
                          this.goldAdBtnNode
                              .getChildByName("shipin")
                              .getComponent(cc.Sprite)
                              .setMaterial(0, this.spMaterials[0]))
                        : ((this.goldAdBtnNode.getComponent(cc.Button).interactable = !1),
                          this.goldAdBtnNode.getComponent(cc.Sprite).setMaterial(0, this.spMaterials[1]),
                          this.goldAdBtnNode
                              .getChildByName("shipin")
                              .getComponent(cc.Sprite)
                              .setMaterial(0, this.spMaterials[1]));
            }),
            (t.prototype.initCostLabel = function () {
                (this.freeLabel.string = u.drawMgr.getFreeCount().toString()),
                    (this.littleLabel.string = u.drawMgr.getLittleCount().toString()),
                    (this.aLotLabel.string = u.drawMgr.getALotCount().toString()),
                    (this.goldFreeLabel.string = u.drawMgr.getFreeGoldCount().toString()),
                    (this.goldAdLabel.string = u.drawMgr.getAdGoldCount().toString()),
                    (this.goldCostLabel.string = u.drawMgr.getCostGoldCount().toString()),
                    (this.goldCostDiamondLabel.string = u.drawMgr.getGoldCostDiamondCount().toString());
            }),
            (t.prototype.ssrViewClick = function () {
                m.UIMgr.showView(l.ViewUrl.SSRView, null, null);
            }),
            (t.prototype.ScrollTo = function (e) {
                this.scrollView.scrollToPercentVertical(e, 0.1);
            }),
            i([S(cc.Node)], t.prototype, "aniNode", void 0),
            i([S(cc.RichText)], t.prototype, "myDesc", void 0),
            i([S(cc.RichText)], t.prototype, "superDesc", void 0),
            i([S(cc.Label)], t.prototype, "normalOne", void 0),
            i([S(cc.Label)], t.prototype, "superOne", void 0),
            i([S(cc.Label)], t.prototype, "superTen", void 0),
            i([S(cc.Label)], t.prototype, "freeLabel", void 0),
            i([S(cc.Label)], t.prototype, "littleLabel", void 0),
            i([S(cc.Label)], t.prototype, "aLotLabel", void 0),
            i([S(cc.Node)], t.prototype, "ssrOne", void 0),
            i([S(cc.Node)], t.prototype, "ssrTen", void 0),
            i([S(cc.Label)], t.prototype, "ssrOneLabel", void 0),
            i([S(cc.Label)], t.prototype, "ssrTenLabel", void 0),
            i([S(cc.Node)], t.prototype, "ssrNode", void 0),
            i([S(cc.RichText)], t.prototype, "ssrDescribe", void 0),
            i([S(cc.Label)], t.prototype, "freeTime", void 0),
            i([S(cc.Label)], t.prototype, "aLotTime", void 0),
            i([S(cc.Node)], t.prototype, "freeNode", void 0),
            i([S(cc.Node)], t.prototype, "littleNode", void 0),
            i([S(cc.Label)], t.prototype, "diamondAdTimeLeft", void 0),
            i([S(cc.Node)], t.prototype, "aLotNode", void 0),
            i([S(cc.ProgressBar)], t.prototype, "aLotDiamondProg", void 0),
            i([S(cc.Node)], t.prototype, "normalSeeAd", void 0),
            i([S(cc.Label)], t.prototype, "normalSeeAdLeft", void 0),
            i([S(cc.Node)], t.prototype, "normalOneNode", void 0),
            i([S(cc.Node)], t.prototype, "superOneNode", void 0),
            i([S(cc.Node)], t.prototype, "superTenNode", void 0),
            i([S(cc.Label)], t.prototype, "goldFreeLabel", void 0),
            i([S(cc.Label)], t.prototype, "goldFreeCd", void 0),
            i([S(cc.Label)], t.prototype, "goldAdLabel", void 0),
            i([S(cc.Label)], t.prototype, "goldAdTimeLeft", void 0),
            i([S(cc.Label)], t.prototype, "goldCostLabel", void 0),
            i([S(cc.Label)], t.prototype, "goldCostDiamondLabel", void 0),
            i([S(cc.Node)], t.prototype, "goldFreeBtnNode", void 0),
            i([S(cc.Node)], t.prototype, "goldAdBtnNode", void 0),
            i([S(cc.Node)], t.prototype, "goldCostBtnNode", void 0),
            i([S(cc.ScrollView)], t.prototype, "scrollView", void 0),
            i([S(cc.Material)], t.prototype, "spMaterials", void 0),
            i([S(cc.Node)], t.prototype, "ssrContent", void 0),
            i([S(cc.SpriteFrame)], t.prototype, "keysSprite", void 0),
            i([S(cc.Sprite)], t.prototype, "normalOpen", void 0),
            i([S(cc.Sprite)], t.prototype, "tenOpen", void 0),
            i([S(cc.SpriteFrame)], t.prototype, "diamondSprite", void 0),
            i([S(cc.Node)], t.prototype, "shareNode", void 0),
            i([E], t)
        );
    })(c.GameComponent);
o.default = D;
