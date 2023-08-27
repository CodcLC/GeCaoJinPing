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
var r = e("ViewUrl"),
    s = e("GameComponent"),
    c = e("LangLabel"),
    l = e("GameManager"),
    p = e("RoleData"),
    u = e("CdTimerManager"),
    d = e("JsonManager"),
    h = e("LevelManager"),
    g = e("PlayerData"),
    m = e("ResManager"),
    f = e("WxManager"),
    y = cc._decorator,
    v = y.ccclass,
    M = y.property,
    _ = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.cancelBtn = null),
                (t.okBtn = null),
                (t.Level1 = null),
                (t.Level2 = null),
                (t.skillNode = null),
                (t.skillName = null),
                (t.skillIcon = null),
                (t.topColor = null),
                (t.startNode = null),
                (t.lightStar = null),
                (t.grayStar = null),
                (t.attributeSprite = null),
                (t.describeLabel = null),
                (t._rarityData = null),
                (t._pushEquipJson = null),
                (t._pushSkillLevel = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return r.ViewUrl.AdLevelUpSkill;
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(1, this.aniNode);
            }),
            (t.prototype.start = function () {
                var e = this;
                u.CdTimerMgr.setAdLevelUpTimer(Date.now()),
                    (this._rarityData = this.node.data),
                    this._rarityData.type > 100
                        ? (this._pushSkillLevel = d.JsonMgr.getSkillById(this._rarityData.id + 1))
                        : (this._pushEquipJson = d.JsonMgr.getEquipById(this._rarityData.id + 1)),
                    this.cancelBtn.on(
                        cc.Node.EventType.TOUCH_END,
                        function () {
                            l.gameMgr.setIsPause(!1), e.closeDialog();
                        },
                        this
                    ),
                    this.okBtn.on(
                        cc.Node.EventType.TOUCH_END,
                        function () {
                            f.wxMgr.createVideo(
                                {placementName: "AdLevelUp", openUi: "AdLevelUpSkill", level: g.playData.getLevel()},
                                function () {},
                                function () {
                                    e._rarityData.type > 100
                                        ? p.roleData.getRole().upSkillLevel(e._pushSkillLevel)
                                        : p.roleData.getRole().upLevel(e._pushEquipJson),
                                        l.gameMgr.setIsPause(!1),
                                        e.closeDialog();
                                }
                            );
                        },
                        this
                    ),
                    this.showSkill();
            }),
            (t.prototype.showSkill = function () {
                var e = this,
                    t = null;
                (t = this._rarityData.type > 100 ? this._pushSkillLevel : this._pushEquipJson),
                    this.skillName.getComponent(c.LangLabel).setText("{@" + t.name + "}"),
                    this.describeLabel.getComponent(c.LangLabel).setText("{@" + t.desc + "}"),
                    (this.Level1.string = this._rarityData.level.toString()),
                    (this.Level2.string = t.level.toString()),
                    t.type > 100 && (this.topColor.spriteFrame = this.attributeSprite),
                    m.ResManager.loadIcon(this.skillIcon, m.ResManager.EquipIcon + t.itemicon),
                    this.startNode.children.forEach(function (o, n) {
                        var a = o.getComponent(cc.Sprite);
                        n + 1 > t.level ? (a.spriteFrame = e.grayStar) : (a.spriteFrame = e.lightStar),
                            n + 1 == t.level &&
                                cc
                                    .tween(o)
                                    .to(0.5, {opacity: 0})
                                    .to(0.5, {opacity: 255})
                                    .union()
                                    .repeatForever()
                                    .start();
                    });
            }),
            (t.prototype.closeDialog = function () {
                this.closeView();
                var e = h.levelMgr.getLevelJson().id >= Number(d.JsonMgr.getDefineConstantByName("InAdsLevel")),
                    t = l.gameMgr.time >= Number(d.JsonMgr.getDefineConstantByName("InAdsLevelTime")),
                    o = u.CdTimerMgr.judgeCanInterstitialAd();
                e &&
                    t &&
                    o &&
                    f.wxMgr.showInterstitialAd({
                        AdsType: "RougelikeInAd",
                        onClose: function () {
                            l.gameMgr.setIsPause(!1);
                        },
                        onSucceed: function () {
                            l.gameMgr.setIsPause(!0);
                        },
                        onFail: function () {
                            l.gameMgr.setIsPause(!1);
                        }
                    });
            }),
            i([M(cc.Node)], t.prototype, "aniNode", void 0),
            i([M(cc.Node)], t.prototype, "cancelBtn", void 0),
            i([M(cc.Node)], t.prototype, "okBtn", void 0),
            i([M(cc.Label)], t.prototype, "Level1", void 0),
            i([M(cc.Label)], t.prototype, "Level2", void 0),
            i([M(cc.Node)], t.prototype, "skillNode", void 0),
            i([M(cc.Label)], t.prototype, "skillName", void 0),
            i([M(cc.Sprite)], t.prototype, "skillIcon", void 0),
            i([M(cc.Sprite)], t.prototype, "topColor", void 0),
            i([M(cc.Node)], t.prototype, "startNode", void 0),
            i([M(cc.SpriteFrame)], t.prototype, "lightStar", void 0),
            i([M(cc.SpriteFrame)], t.prototype, "grayStar", void 0),
            i([M(cc.SpriteFrame)], t.prototype, "attributeSprite", void 0),
            i([M(cc.Label)], t.prototype, "describeLabel", void 0),
            i([v], t)
        );
    })(s.GameComponent);
o.default = _;
