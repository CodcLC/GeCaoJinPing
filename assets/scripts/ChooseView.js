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
var r = e("GameComponent"),
    s = e("ViewUrl"),
    c = e("JsonManager"),
    l = e("RoleData"),
    p = e("GameManager"),
    u = e("LangLabel"),
    d = e("ResManager"),
    h = e("ClientEvents"),
    g = e("audioManager"),
    m = e("audioConst"),
    f = e("WxManager"),
    y = e("LevelManager"),
    v = e("RarityManager"),
    M = e("EquipManager"),
    _ = e("UIManager"),
    C = e("PlayerData"),
    b = e("AnalyticsManager"),
    T = e("CdTimerManager"),
    w = cc._decorator,
    N = w.ccclass,
    E = w.property,
    S = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.layout = null),
                (t.dataArr = []),
                (t.hasStar = null),
                (t.noneStar = null),
                (t.weaponSprite = null),
                (t.attributeSprite = null),
                (t.weapenBg = null),
                (t.attributeBg = null),
                (t.weapenLayout = null),
                (t.attributeLayout = null),
                (t.getAllVideoBtn = null),
                (t.refreshVideoBtn = null),
                (t.videoLabel = null),
                (t.blinkMaskNode = null),
                (t.icon = null),
                (t.watch = null),
                (t.share = null),
                (t.blinkTween = !1),
                (t.isEventInit = !1),
                (t.isShowVideo = !0),
                (t.isFirst = !1),
                (t.isGetAll = !1),
                (t.chooseCallbackFunc = null),
                (t.checkFrame = function () {
                    var e = _.UIMgr.getView(s.ViewUrl.homeUI);
                    e && e.isValid && e.active && t.closeView();
                }),
                (t.itemClickHandle = function (e) {
                    var o = t.dataArr[e];
                    o &&
                        ((p.gameMgr.skillCount += 1),
                        g.audioMgr.startEffect(m.AudioConst.COMMON_TOUCH),
                        t.bindEvent(e),
                        b.analyMgr.reportTouchChooseSkill(
                            o.id.toString(),
                            l.roleData.getRole().getSkillArr().size + l.roleData.getRole().getEquips().size
                        ));
                }),
                (t.bindEvent = function (e) {
                    var o = t.dataArr[e],
                        n = l.roleData.getRole(),
                        a = [],
                        i = [];
                    if ((i.push(o.id), o.type > 100)) {
                        n.upSkillLevel(o);
                        var r = n.getSkillLevel(o.type);
                        r && r.level < r.maxlevel && a.push(r);
                    } else {
                        n.upLevel(o);
                        var p = n.getFromEqpMap(o.type);
                        p && p.level < 5 && a.push(p);
                    }
                    b.analyMgr.reportGetAllSkill(
                        i.join(),
                        l.roleData.getRole().getSkillArr().size + l.roleData.getRole().getEquips().size
                    );
                    var u = y.levelMgr.getLevelJson().id >= Number(c.JsonMgr.getDefineConstantByName("SkillUpLevel")),
                        d = T.CdTimerMgr.judgeCanAdLevelUp(),
                        g = 0 != a.length;
                    if (!t.isFirst && d && u && g)
                        return (
                            t.isFirst || l.roleData.getRole().refreshProgress(),
                            h.ClientEvents.CHANGE_HP_LAYER.emit("ui"),
                            h.ClientEvents.STOP_GRESS_SHAIN.emit(),
                            t.closeView(),
                            h.ClientEvents.RESUME_GAME.emit(),
                            t.chooseCallbackFunc && t.chooseCallbackFunc(),
                            void _.UIMgr.showView(s.ViewUrl.AdLevelUpSkill, null, a[0], function () {})
                        );
                    t._doAfterChooseItem();
                }),
                (t._doAfterChooseItem = function () {
                    p.gameMgr.setIsPause(!1),
                        t.isFirst || l.roleData.getRole().refreshProgress(),
                        h.ClientEvents.CHANGE_HP_LAYER.emit("ui"),
                        h.ClientEvents.STOP_GRESS_SHAIN.emit(),
                        t.closeView(),
                        h.ClientEvents.RESUME_GAME.emit(),
                        t.chooseCallbackFunc && t.chooseCallbackFunc();
                    var e = y.levelMgr.getLevelJson().id >= Number(c.JsonMgr.getDefineConstantByName("InAdsLevel")),
                        o = p.gameMgr.time >= Number(c.JsonMgr.getDefineConstantByName("InAdsLevelTime")),
                        n = T.CdTimerMgr.judgeCanInterstitialAd();
                    e &&
                        o &&
                        n &&
                        f.wxMgr.showInterstitialAd({
                            AdsType: "RougelikeInAd",
                            onClose: function () {
                                p.gameMgr.setIsPause(!1);
                            },
                            onSucceed: function () {
                                p.gameMgr.setIsPause(!0);
                            },
                            onFail: function () {
                                p.gameMgr.setIsPause(!1);
                            }
                        });
                }),
                (t.blinkMask = function () {
                    t.blinkTween ||
                        ((t.blinkMaskNode.active = !0),
                        (t.blinkMaskNode.opacity = 0),
                        (t.blinkTween = !0),
                        cc
                            .tween(t.blinkMaskNode)
                            .by(0.27, {opacity: 255}, {easing: cc.easing.sineOut})
                            .delay(0.1)
                            .by(0.53, {opacity: -255}, {easing: cc.easing.sineOut})
                            .call(function () {
                                (t.blinkTween = !1), (t.blinkMaskNode.active = !1);
                            })
                            .start());
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.chooseView;
            }),
            (t.prototype.start = function () {
                var e = this;
                (this.dataArr = this.node.data),
                    this.bindChooseItemEvent(),
                    (this.node.opacity = 255),
                    this.init(),
                    this.refreshRoleSkill(),
                    (this.isEventInit = !0),
                    h.ClientEvents.CHANGE_HP_LAYER.emit("hp"),
                    h.ClientEvents.START_GRESS_SHAIN.emit(),
                    h.ClientEvents.END_GAME.emit(),
                    1 === l.roleData.getRole().getRoleLevel().level
                        ? (this.isShowGetAllBtn()
                              ? ((this.isGetAll = !0), (this.getAllVideoBtn.active = !0))
                              : (this.getAllVideoBtn.active = !1),
                          (this.refreshVideoBtn.active = !1))
                        : (this.isShowGetAllBtn()
                              ? ((this.isGetAll = !0), (this.getAllVideoBtn.active = !0))
                              : (this.getAllVideoBtn.active = !1),
                          100 * Math.random() < Number(c.JsonMgr.getDefineConstantByName("SkillRefreshAD")) &&
                          this.dataArr &&
                          3 === this.dataArr.length
                              ? (this.refreshVideoBtn.active = !0)
                              : (this.refreshVideoBtn.active = !1)),
                    this.refreshVideoBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        g.audioMgr.startEffect(m.AudioConst.COMMON_TOUCH),
                            p.gameMgr.hasShareChoose || e.isGetAll
                                ? f.wxMgr.createVideo(
                                      {
                                          placementName: "AdSkillRefresh",
                                          openUi: "ChooseView",
                                          level: y.levelMgr.getLevelJson().id
                                      },
                                      function () {},
                                      function () {
                                          e.refreshSkill();
                                      }
                                  )
                                : f.wxMgr.onShareFunc(
                                      function () {},
                                      function () {
                                          (p.gameMgr.hasShareChoose = !0),
                                              e.isGetAll ? e.getAllSkill() : e.refreshSkill(),
                                              b.analyMgr.reportShare("ShareSkillRefresh");
                                      }
                                  );
                    }),
                    this.getAllVideoBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        f.wxMgr.createVideo(
                            {placementName: "AdSkillAll", openUi: "ChooseView", level: y.levelMgr.getLevelJson().id},
                            function () {},
                            function () {
                                e.getAllSkill(), p.gameMgr.showGetAllTime++;
                            }
                        );
                    }),
                    this.schedule(this.checkFrame, 1);
            }),
            (t.prototype.isShowGetAllBtn = function () {
                var e = y.levelMgr.getLevelJson().id >= Number(c.JsonMgr.getDefineConstantByName("SkillAllUnlock")),
                    t =
                        Number(C.playData.getLevelFail(y.levelMgr.getLevelJson().id)) >=
                        Number(c.JsonMgr.getDefineConstantByName("SkillGetFailNum")),
                    o = Number(p.gameMgr.showGetAllTime) < Number(c.JsonMgr.getDefineConstantByName("SkillAllNum")),
                    n = C.playData.checkIsChallenge();
                return e && t && o && !n;
            }),
            (t.prototype.init = function () {
                var e = this;
                this.icon.spriteFrame = p.gameMgr.hasShareChoose ? this.watch : this.share;
                var t = [];
                this.layout.children.forEach(function (o, n) {
                    if (n >= e.dataArr.length) o.active = !1;
                    else {
                        var a = e.dataArr[n];
                        o
                            .getChildByName("itemName")
                            .getComponent(u.LangLabel)
                            .setText("{@" + a.name + "}"),
                            o
                                .getChildByName("itemDesc")
                                .getComponent(u.LangLabel)
                                .setText("{@" + a.desc + "}");
                        var i = o.getChildByName("starLayout"),
                            r = o.getChildByName("superStar"),
                            s = o.getChildByName("breakLayout");
                        if (
                            (t.push(a.id),
                            cc.Tween.stopAllByTarget(s.getChildByName("icon")),
                            i.children.forEach(function (t, o) {
                                var n = t.getComponent(cc.Sprite);
                                cc.Tween.stopAllByTarget(t),
                                    (t.opacity = 255),
                                    (t.active = !0),
                                    112 === a.type && o > 1 && (t.active = !1),
                                    o + 1 > a.level ? (n.spriteFrame = e.noneStar) : (n.spriteFrame = e.hasStar),
                                    o + 1 == a.level &&
                                        cc
                                            .tween(t)
                                            .to(0.5, {opacity: 0})
                                            .to(0.5, {opacity: 255})
                                            .union()
                                            .repeatForever()
                                            .start();
                            }),
                            6 === a.level)
                        ) {
                            (i.active = !1), (r.active = !0);
                            var p = a.itemicon + "_max";
                            d.ResManager.loadIcon(
                                o.getChildByName("itemIcon").getComponent(cc.Sprite),
                                d.ResManager.EquipIcon + p
                            );
                        } else
                            (i.active = !0),
                                (r.active = !1),
                                d.ResManager.loadIcon(
                                    o.getChildByName("itemIcon").getComponent(cc.Sprite),
                                    d.ResManager.EquipIcon + a.itemicon
                                );
                        if (
                            (1 === a.level
                                ? (o.getChildByName("topLabel").active = !0)
                                : (o.getChildByName("topLabel").active = !1),
                            a.type > 100)
                        ) {
                            if (
                                ((o.getChildByName("topColor").getComponent(cc.Sprite).spriteFrame = e.attributeSprite),
                                (o.getChildByName("wuqi").getComponent(cc.Sprite).spriteFrame = e.attributeBg),
                                a.link)
                            ) {
                                s.active = !0;
                                var h = s.getChildByName("icon");
                                d.ResManager.loadIcon(
                                    h.getComponent(cc.Sprite),
                                    d.ResManager.EquipIcon + c.JsonMgr.getJsonById("equipment", a.link).itemicon
                                );
                                var g = c.JsonMgr.getEquipById(a.link).type,
                                    m = M.equipMgr.getEquipSkillId();
                                if (
                                    (l.roleData.getRole().checkHasEquip(g) &&
                                        (104 === a.type
                                            ? m >= 10001 && m <= 10006 && e.showLinkTween(h)
                                            : e.showLinkTween(h)),
                                    106 === a.type && ((m >= 20001 && m <= 20006) || (m >= 30001 && m <= 30006)))
                                ) {
                                    var f = cc.instantiate(h);
                                    s.addChild(f),
                                        d.ResManager.loadIcon(
                                            f.getComponent(cc.Sprite),
                                            d.ResManager.EquipIcon + c.JsonMgr.getJsonById("equipment", m).itemicon
                                        ),
                                        e.showLinkTween(f);
                                }
                                101 === a.type &&
                                    ((m >= 40001 && m <= 40006) || (m >= 60001 && m <= 60006)) &&
                                    ((f = cc.instantiate(h)),
                                    s.addChild(f),
                                    d.ResManager.loadIcon(
                                        f.getComponent(cc.Sprite),
                                        d.ResManager.EquipIcon + c.JsonMgr.getJsonById("equipment", m).itemicon
                                    ),
                                    e.showLinkTween(f)),
                                    104 === a.type &&
                                        m >= 50001 &&
                                        m <= 50006 &&
                                        ((f = cc.instantiate(h)),
                                        s.addChild(f),
                                        d.ResManager.loadIcon(
                                            f.getComponent(cc.Sprite),
                                            d.ResManager.EquipIcon + c.JsonMgr.getJsonById("equipment", m).itemicon
                                        ),
                                        e.showLinkTween(f));
                            }
                        } else
                            (o.getChildByName("topColor").getComponent(cc.Sprite).spriteFrame = e.weaponSprite),
                                (o.getChildByName("wuqi").getComponent(cc.Sprite).spriteFrame = e.weapenBg),
                                (s.active = !1);
                    }
                }),
                    this.isShowVideo
                        ? b.analyMgr.reportRefreshChooseSkill(
                              t.join(),
                              l.roleData.getRole().getSkillArr().size + l.roleData.getRole().getEquips().size,
                              "ads"
                          )
                        : b.analyMgr.reportOpenChooseSkill(
                              t.join(),
                              l.roleData.getRole().getSkillArr().size + l.roleData.getRole().getEquips().size
                          );
            }),
            (t.prototype.showLinkTween = function (e) {
                e &&
                    e.isValid &&
                    (cc.Tween.stopAllByTarget(e),
                    cc.tween(e).to(0.5, {scale: 1.2}).to(0.5, {scale: 1}).union().repeatForever().start());
            }),
            (t.prototype.bindChooseItemEvent = function () {
                var e = this;
                this.layout.children.forEach(function (t, o) {
                    t.once(cc.Node.EventType.TOUCH_END, e.itemClickHandle.bind(e, o));
                });
            }),
            (t.prototype.setIsFirst = function () {
                this.isFirst = !0;
            }),
            (t.prototype.getAllSkill = function () {
                for (var e = [], t = 0; t < this.dataArr.length; t++) {
                    var o = this.dataArr[t];
                    e.push(o.id), o.type > 100 ? l.roleData.getRole().upSkillLevel(o) : l.roleData.getRole().upLevel(o);
                }
                b.analyMgr.reportGetAllSkill(
                    e.join(),
                    l.roleData.getRole().getSkillArr().size + l.roleData.getRole().getEquips().size
                );
                var n = l.roleData.getRole(),
                    a = [];
                for (t = 0; t < this.dataArr.length; t++)
                    if ((o = this.dataArr[t]).type > 100) {
                        var i = n.getSkillLevel(o.type);
                        i && i.level < i.maxlevel && a.push(i);
                    } else {
                        var r = n.getFromEqpMap(o.type);
                        r && r.level < 5 && a.push(r);
                    }
                var p = y.levelMgr.getLevelJson().id >= Number(c.JsonMgr.getDefineConstantByName("SkillUpLevel")),
                    u = T.CdTimerMgr.judgeCanAdLevelUp(),
                    d = 0 != a.length;
                if (!this.isFirst && u && p && d) {
                    this.isFirst || l.roleData.getRole().refreshProgress(),
                        h.ClientEvents.CHANGE_HP_LAYER.emit("ui"),
                        h.ClientEvents.STOP_GRESS_SHAIN.emit(),
                        this.closeView(),
                        h.ClientEvents.RESUME_GAME.emit(),
                        this.chooseCallbackFunc && this.chooseCallbackFunc();
                    var g = Math.floor(Math.random() * a.length);
                    _.UIMgr.showView(s.ViewUrl.AdLevelUpSkill, null, a[g], function () {});
                } else this._doAfterChooseItem();
            }),
            (t.prototype.refreshRoleSkill = function () {
                var e = this,
                    t = this.dataArr,
                    o = [],
                    n = [],
                    a = l.roleData.getRole().getSkillArr(),
                    i = l.roleData.getRole().getEquips();
                a.forEach(function (e) {
                    n.push(e);
                }),
                    i.forEach(function (e) {
                        o.push(e);
                    }),
                    this.attributeLayout.node.children.forEach(function (e, t) {
                        n[t]
                            ? d.ResManager.loadIcon(
                                  e.getChildByName("icon").getComponent(cc.Sprite),
                                  d.ResManager.EquipIcon + n[t].itemicon
                              )
                            : (e.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = null);
                    }),
                    this.weapenLayout.node.children.forEach(function (n, a) {
                        var i = o[a];
                        if (i) {
                            d.ResManager.loadIcon(
                                n.getChildByName("icon").getComponent(cc.Sprite),
                                d.ResManager.EquipIcon + (i.issuper ? i.itemicon + "_max" : i.itemicon)
                            );
                            for (var r = 0; r < t.length; r++) {
                                if (
                                    106 === t[r].type &&
                                    ((i.id >= 20001 && i.id <= 20006) || (i.id >= 30001 && i.id <= 30006))
                                ) {
                                    e.showSkillTween(n.getChildByName("icon"));
                                    break;
                                }
                                if (
                                    101 === t[r].type &&
                                    ((i.id >= 40001 && i.id <= 40006) || (i.id >= 60001 && i.id <= 60006))
                                ) {
                                    e.showSkillTween(n.getChildByName("icon"));
                                    break;
                                }
                                if (104 === t[r].type && i.id >= 50001 && i.id <= 50006) {
                                    e.showSkillTween(n.getChildByName("icon"));
                                    break;
                                }
                                if (t[r].link === i.id - (i.level - 1)) {
                                    e.showSkillTween(n.getChildByName("icon"));
                                    break;
                                }
                            }
                        } else n.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = null;
                    });
            }),
            (t.prototype.showSkillTween = function (e) {
                e &&
                    e.isValid &&
                    (cc.Tween.stopAllByTarget(e),
                    cc.tween(e).to(0.5, {scale: 0.4}).to(0.5, {scale: 0.2}).union().repeatForever().start());
            }),
            (t.prototype.refreshSkill = function () {
                (this.isShowVideo = !0), (this.refreshVideoBtn.active = !1), this.blinkMask();
                var e = v.rarityMgr.generateRarity();
                (this.dataArr = e), this.init(), this.refreshRoleSkill();
            }),
            (t.prototype.chooseCallback = function (e) {
                this.chooseCallbackFunc = e;
            }),
            (t.prototype.hideVideo = function () {
                (this.getAllVideoBtn.active = !1), (this.refreshVideoBtn.active = !1);
            }),
            i([E(cc.Node)], t.prototype, "layout", void 0),
            i([E(cc.SpriteFrame)], t.prototype, "hasStar", void 0),
            i([E(cc.SpriteFrame)], t.prototype, "noneStar", void 0),
            i([E(cc.SpriteFrame)], t.prototype, "weaponSprite", void 0),
            i([E(cc.SpriteFrame)], t.prototype, "attributeSprite", void 0),
            i([E(cc.SpriteFrame)], t.prototype, "weapenBg", void 0),
            i([E(cc.SpriteFrame)], t.prototype, "attributeBg", void 0),
            i([E(cc.Layout)], t.prototype, "weapenLayout", void 0),
            i([E(cc.Layout)], t.prototype, "attributeLayout", void 0),
            i([E(cc.Node)], t.prototype, "getAllVideoBtn", void 0),
            i([E(cc.Node)], t.prototype, "refreshVideoBtn", void 0),
            i([E(cc.Label)], t.prototype, "videoLabel", void 0),
            i([E(cc.Node)], t.prototype, "blinkMaskNode", void 0),
            i([E(cc.Sprite)], t.prototype, "icon", void 0),
            i([E(cc.SpriteFrame)], t.prototype, "watch", void 0),
            i([E(cc.SpriteFrame)], t.prototype, "share", void 0),
            i([N], t)
        );
    })(r.GameComponent);
o.default = S;
