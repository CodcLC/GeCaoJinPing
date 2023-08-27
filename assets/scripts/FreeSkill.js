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
var r = e("UIManager"),
    s = e("ViewUrl"),
    c = e("GameComponent"),
    l = e("LangLabel"),
    p = e("GameManager"),
    u = e("PlayerData"),
    d = e("RoleData"),
    h = e("RarityManager"),
    g = e("ResManager"),
    m = e("TalentAddManager"),
    f = e("WxManager"),
    y = e("ChooseView"),
    v = cc._decorator,
    M = v.ccclass,
    _ = v.property,
    C = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.cancelBtn = null),
                (t.okBtn = null),
                (t.skillNode = null),
                (t.skillName = null),
                (t.isNewSkill = null),
                (t.skillIcon = null),
                (t.startNode = null),
                (t.lightStar = null),
                (t.grayStar = null),
                (t.describeLabel = null),
                (t.rarityData = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.FreeSkill;
            }),
            (t.prototype.start = function () {
                var e = this;
                (this.rarityData = h.rarityMgr.generateRarity()),
                    this.cancelBtn.on(
                        cc.Node.EventType.TOUCH_END,
                        function () {
                            e.closeView(), p.gameMgr.setIsPause(!1), e.showSkillView();
                        },
                        this
                    ),
                    this.okBtn.on(
                        cc.Node.EventType.TOUCH_END,
                        function () {
                            f.wxMgr.createVideo(
                                {placementName: "AdSkillStart", openUi: "FreeView", level: u.playData.getLevel()},
                                function () {},
                                function () {
                                    e.closeView(), p.gameMgr.setIsPause(!1), u.playData.addFreeSkillCount();
                                    var t = e.rarityData[0];
                                    t &&
                                        (t.type > 100
                                            ? d.roleData.getRole().upSkillLevel(t)
                                            : d.roleData.getRole().upLevel(t)),
                                        e.showSkillView();
                                }
                            );
                        },
                        this
                    ),
                    this.showRandomSkill();
            }),
            (t.prototype.showRandomSkill = function () {
                var e = this;
                if (this.rarityData && this.rarityData[0]) {
                    var t = this.rarityData[0];
                    this.skillName.getComponent(l.LangLabel).setText("{@" + t.name + "}"),
                        this.describeLabel.getComponent(l.LangLabel).setText("{@" + t.desc + "}"),
                        1 === t.level ? (this.isNewSkill.active = !0) : (this.isNewSkill.active = !1),
                        g.ResManager.loadIcon(this.skillIcon, g.ResManager.EquipIcon + t.itemicon),
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
                } else this.skillNode.active = !1;
            }),
            (t.prototype.showSkillView = function () {
                if (m.talentAddMgr.canChooseSkillInOpen) {
                    var e = h.rarityMgr.generateRarity();
                    0 !== e.length &&
                        (p.gameMgr.setIsPause(!0),
                        r.UIMgr.showView(s.ViewUrl.chooseView, null, e, function (e) {
                            e.getComponent(y.default).setIsFirst(), e.getComponent(y.default).hideVideo();
                        }));
                }
            }),
            i([_(cc.Node)], t.prototype, "cancelBtn", void 0),
            i([_(cc.Node)], t.prototype, "okBtn", void 0),
            i([_(cc.Node)], t.prototype, "skillNode", void 0),
            i([_(cc.Label)], t.prototype, "skillName", void 0),
            i([_(cc.Node)], t.prototype, "isNewSkill", void 0),
            i([_(cc.Sprite)], t.prototype, "skillIcon", void 0),
            i([_(cc.Node)], t.prototype, "startNode", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "lightStar", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "grayStar", void 0),
            i([_(cc.Label)], t.prototype, "describeLabel", void 0),
            i([M], t)
        );
    })(c.GameComponent);
o.default = C;
