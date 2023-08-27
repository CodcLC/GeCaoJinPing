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
var r = e("ClientEvents"),
    s = e("ViewUrl"),
    c = e("GameComponent"),
    l = e("LangLabel"),
    p = e("JsonManager"),
    u = e("LanguageManager"),
    d = e("PlayerData"),
    h = e("ResManager"),
    g = e("TalentAddManager"),
    m = e("UIManager"),
    f = e("AnalyticsManager"),
    y = e("GuideManager"),
    v = e("HomeManager"),
    M = e("talentManager"),
    _ = e("WxManager"),
    C = cc._decorator,
    b = C.ccclass,
    T = C.property,
    w = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.bgNode = null),
                (t.titleNode = null),
                (t.attributeSprite = null),
                (t.attributeLabel = null),
                (t.describeLabel = null),
                (t.needIcon = null),
                (t.needLabel = null),
                (t.btnLayout = null),
                (t.unlockBtn = null),
                (t.unlockBtnAd = null),
                (t.angleTop = null),
                (t.angleBottom = null),
                (t.atkSprite = null),
                (t.hpSprite = null),
                (t.defSprite = null),
                (t.goldSprite = null),
                (t.energyBarSprite = null),
                (t.foodSf = null),
                (t.bg = null),
                (t._data = null),
                (t._pos = null),
                (t.onTips_NoCoin = function () {
                    t.closeView(),
                        r.ClientEvents.OPEN_SHOP_VIEW.emit(!0),
                        m.UIMgr.showView(s.ViewUrl.commonTip, null, u.langMgr.getStr("Tips_NoCoin"));
                }),
                (t.onTips_EnergyBattery = function () {
                    t.closeView(),
                        r.ClientEvents.OPEN_CHALLENGE_VIEW.emit(),
                        m.UIMgr.showView(s.ViewUrl.commonTip, null, u.langMgr.getStr("Tips_EnergyBattery"));
                }),
                (t.onTips_linkUnlock = function () {
                    t.closeView();
                    var e = u.langMgr.getStr("Tips_linkUnlock");
                    m.UIMgr.showView(s.ViewUrl.commonTip, null, e);
                }),
                (t.canTanlentLevel = function () {
                    var e = t._data.demand.split("|");
                    "1001" === e[0] && d.playData.useGold(Number(e[1])),
                        "1014" === e[0] && d.playData.usePropeller(Number(e[1])),
                        d.playData.addTalent(t._data.id.toString()),
                        f.analyMgr.reportUseGold(Number(e[1]), "ScienceUP"),
                        g.talentAddMgr.addByType(p.JsonMgr.getWeaponSkillById(t._data.skillid)),
                        t.reportTalentUp("Gold", Number(e[1]), v.homeMgr.getCurLevel()),
                        r.ClientEvents.TALENT_REFRESH.emit(),
                        t.closeView();
                }),
                (t.canTanlentLevelAd = function () {
                    _.wxMgr.createVideo(
                        {placementName: "AdSuperGift", openUi: "talentPop", level: d.playData.getLevel()},
                        function () {},
                        function () {
                            d.playData.addTalent(t._data.id.toString()),
                                g.talentAddMgr.addByType(p.JsonMgr.getWeaponSkillById(t._data.skillid)),
                                t.reportTalentUp("AdLevelUp", 1, v.homeMgr.getCurLevel()),
                                r.ClientEvents.TALENT_REFRESH.emit(),
                                t.closeView();
                        }
                    );
                }),
                (t.onTips_needMoreTalent = function () {
                    t.closeView(), m.UIMgr.showView(s.ViewUrl.commonTip, null, u.langMgr.getStr("Tips_needMoreTalent"));
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.talentPop;
            }),
            (t.prototype.start = function () {
                var e = this;
                this.addEvent(r.ClientEvents.CLOSE_TALENTPOP.on(this.closeView)),
                    this.node.on(cc.Node.EventType.TOUCH_END, function () {
                        e.closeView();
                    }),
                    (this._data = this.node.data.data),
                    (this._pos = this.node.data.pos),
                    (this.angleTop.active = !1),
                    (this.angleBottom.active = !0),
                    1 == this._data.type &&
                        M.talentMgr.isLastTree(this._data.id) &&
                        ((this._pos.y -= 460), (this.angleTop.active = !0), (this.angleBottom.active = !1)),
                    2 == this._data.type &&
                        this._data.openlevel == M.talentMgr.getLen() &&
                        ((this._pos.y -= 520), (this.angleTop.active = !0), (this.angleBottom.active = !1)),
                    this.node.getComponent(cc.Widget).updateAlignment(),
                    this.bgNode.setPosition(this.node.convertToNodeSpaceAR(this._pos)),
                    this.bgNode.x - this.bgNode.width / 2 <= -this.node.width / 2 &&
                        (this.bg.x += -this.node.width / 2 - (this.bgNode.x - this.bgNode.width / 2) + 15),
                    (this.unlockBtnAd.active = !1),
                    this.initDisplay(),
                    this.initSprite(),
                    this.initDemand(),
                    this.initTouch(),
                    this.btnLayout.getComponent(cc.Layout).updateLayout(),
                    d.playData.getNewUserStep() < y.GUIDE_STEP.SHOP &&
                        m.UIMgr.showGuideWithNode(this.unlockBtn, function () {
                            d.playData.addGuideStep(), r.ClientEvents.REFRESH_GUIDE.emit();
                            var t = e._data.demand.split("|");
                            d.playData.addTalent(e._data.id.toString()),
                                d.playData.useGold(Number(t[1])),
                                g.talentAddMgr.addByType(p.JsonMgr.getWeaponSkillById(e._data.skillid)),
                                e.reportTalentUp("Gold", Number(t[1]), v.homeMgr.getCurLevel()),
                                r.ClientEvents.TALENT_REFRESH.emit(),
                                e.closeView();
                        });
            }),
            (t.prototype.initDisplay = function () {
                var e = p.JsonMgr.getWeaponSkillById(this._data.skillid);
                this.titleNode.getComponent(l.LangLabel).setText("{@" + e.name + "}"),
                    (this.describeLabel.string = u.langMgr.getStr(e.descid)),
                    (this.describeLabel.string = this.describeLabel.string.replace("$", e.numerical));
            }),
            (t.prototype.initSprite = function () {
                var e = p.JsonMgr.getWeaponSkillById(this._data.skillid);
                21 === e.type
                    ? (this.attributeSprite.spriteFrame = this.atkSprite)
                    : 22 === e.type
                    ? (this.attributeSprite.spriteFrame = this.hpSprite)
                    : 23 === e.type
                    ? (this.attributeSprite.spriteFrame = this.defSprite)
                    : 24 === e.type
                    ? (this.attributeSprite.spriteFrame = this.foodSf)
                    : (h.ResManager.loadIcon(this.attributeSprite, h.ResManager.TalentIcon + this._data.skillid),
                      (this.attributeSprite.node.scale = 0.3)),
                    (this.attributeLabel.string = "+" + e.numerical);
            }),
            (t.prototype.initDemand = function () {
                var e = this._data.demand.split("|");
                "1001" === e[0]
                    ? (this.needIcon.spriteFrame = this.goldSprite)
                    : "1014" === e[0] && (this.needIcon.spriteFrame = this.energyBarSprite),
                    (this.needLabel.string = e[1]);
            }),
            (t.prototype.initTouch = function () {
                1 == this._data.type ? this.initLeftTalentTouch() : 2 == this._data.type && this.initRightTalentTouch();
            }),
            (t.prototype.initLeftTalentTouch = function () {
                if (d.playData.checkTalentHasOpen(this._data.id.toString())) this.unlockBtn.active = !1;
                else if (0 == this._data.linkid || d.playData.checkTalentHasOpen((this._data.id - 1).toString())) {
                    var e = this._data.demand.split("|");
                    if ("1001" === e[0]) {
                        if (d.playData.getGold() < Number(e[1]))
                            return (
                                (this.unlockBtn.getComponent(cc.Button).interactable = !1),
                                void this.unlockBtn.on(cc.Node.EventType.TOUCH_END, this.onTips_NoCoin, this)
                            );
                    } else if ("1014" === e[0] && d.playData.getPropeller() < Number(e[1]))
                        return (
                            (this.unlockBtn.getComponent(cc.Button).interactable = !1),
                            void this.unlockBtn.on(cc.Node.EventType.TOUCH_END, this.onTips_EnergyBattery, this)
                        );
                    (this.unlockBtn.getComponent(cc.Button).interactable = !0),
                        this.unlockBtn.on(cc.Node.EventType.TOUCH_END, this.canTanlentLevel, this);
                } else
                    (this.unlockBtn.getComponent(cc.Button).interactable = !1),
                        this.unlockBtn.on(cc.Node.EventType.TOUCH_END, this.onTips_linkUnlock, this);
            }),
            (t.prototype.initRightTalentTouch = function () {
                if (d.playData.checkTalentHasOpen(this._data.id.toString()))
                    return (this.unlockBtn.active = !1), void (this.unlockBtnAd.active = !1);
                if (((this.unlockBtn.active = !0), d.playData.getLeftTalentLength() < this._data.unlocknum))
                    return (
                        (this.unlockBtn.getComponent(cc.Button).interactable = !1),
                        void this.unlockBtn.on(cc.Node.EventType.TOUCH_END, this.onTips_needMoreTalent, this)
                    );
                if (0 == this._data.linkid || d.playData.checkTalentHasOpen((this._data.id - 1).toString())) {
                    var e = this._data.demand.split("|");
                    if ("1001" === e[0]) {
                        if (d.playData.getGold() < Number(e[1]))
                            return (
                                (this.unlockBtn.getComponent(cc.Button).interactable = !1),
                                this.unlockBtn.on(cc.Node.EventType.TOUCH_END, this.onTips_NoCoin, this),
                                (this.unlockBtnAd.active = !0),
                                (this.unlockBtnAd.getComponent(cc.Button).interactable = !0),
                                void this.unlockBtnAd.on(cc.Node.EventType.TOUCH_END, this.canTanlentLevelAd, this)
                            );
                    } else if ("1014" === e[0] && d.playData.getPropeller() < Number(e[1]))
                        return (
                            (this.unlockBtn.getComponent(cc.Button).interactable = !1),
                            this.unlockBtn.on(cc.Node.EventType.TOUCH_END, this.onTips_EnergyBattery, this),
                            (this.unlockBtnAd.active = !0),
                            (this.unlockBtnAd.getComponent(cc.Button).interactable = !0),
                            void this.unlockBtnAd.on(cc.Node.EventType.TOUCH_END, this.canTanlentLevelAd, this)
                        );
                    (this.unlockBtn.getComponent(cc.Button).interactable = !0),
                        this.unlockBtn.on(cc.Node.EventType.TOUCH_END, this.canTanlentLevel, this),
                        (this.unlockBtnAd.active = !0),
                        (this.unlockBtnAd.getComponent(cc.Button).interactable = !0),
                        this.unlockBtnAd.on(cc.Node.EventType.TOUCH_END, this.canTanlentLevelAd, this);
                } else
                    (this.unlockBtn.getComponent(cc.Button).interactable = !1),
                        this.unlockBtn.on(cc.Node.EventType.TOUCH_END, function () {
                            var e = u.langMgr.getStr("Tips_linkUnlock");
                            m.UIMgr.showView(s.ViewUrl.commonTip, null, e);
                        });
            }),
            (t.prototype.reportTalentUp = function (e, t, o) {
                f.analyMgr.reportTalentUp(e, t, o);
            }),
            i([T(cc.Node)], t.prototype, "bgNode", void 0),
            i([T(cc.Node)], t.prototype, "titleNode", void 0),
            i([T(cc.Sprite)], t.prototype, "attributeSprite", void 0),
            i([T(cc.Label)], t.prototype, "attributeLabel", void 0),
            i([T(cc.Label)], t.prototype, "describeLabel", void 0),
            i([T(cc.Sprite)], t.prototype, "needIcon", void 0),
            i([T(cc.Label)], t.prototype, "needLabel", void 0),
            i([T(cc.Node)], t.prototype, "btnLayout", void 0),
            i([T(cc.Node)], t.prototype, "unlockBtn", void 0),
            i([T(cc.Node)], t.prototype, "unlockBtnAd", void 0),
            i([T(cc.Node)], t.prototype, "angleTop", void 0),
            i([T(cc.Node)], t.prototype, "angleBottom", void 0),
            i([T(cc.SpriteFrame)], t.prototype, "atkSprite", void 0),
            i([T(cc.SpriteFrame)], t.prototype, "hpSprite", void 0),
            i([T(cc.SpriteFrame)], t.prototype, "defSprite", void 0),
            i([T(cc.SpriteFrame)], t.prototype, "goldSprite", void 0),
            i([T(cc.SpriteFrame)], t.prototype, "energyBarSprite", void 0),
            i([T(cc.SpriteFrame)], t.prototype, "foodSf", void 0),
            i([T(cc.Node)], t.prototype, "bg", void 0),
            i([b], t)
        );
    })(c.GameComponent);
o.default = w;
