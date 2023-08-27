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
var r = e("censtant"),
    s = e("ClientEvents"),
    c = e("ViewUrl"),
    l = e("GameComponent"),
    p = e("LangLabel"),
    u = e("EquipManager"),
    d = e("JsonManager"),
    h = e("ResManager"),
    g = e("LanguageManager"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.equipBg = null),
                (t.equipIcon = null),
                (t.typeBg = null),
                (t.typeIcon = null),
                (t.gradeIcon = null),
                (t.gradeLabel = null),
                (t.levelLabel = null),
                (t.ssrNode = null),
                (t.attribute = null),
                (t.attributeLabel = null),
                (t.describeLabel = null),
                (t.titleLabel = null),
                (t.closeBtn = null),
                (t.attributeSp = []),
                (t.gradeType = null),
                (t.titleBg = null),
                (t.qualityLayout = null),
                (t.qualityNode = null),
                (t._data = null),
                (t.refreshDescView = function () {
                    var e = t.node.data;
                    (t._data = e.data),
                        t.describeLabel.getComponent(p.LangLabel).setText("{@" + t._data.equipment.getDescribe() + "}"),
                        t.titleLabel.getComponent(p.LangLabel).setText("{@" + t._data.equipment.getName() + "}"),
                        t.onSpriteInit(),
                        t.setNumAddition();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.SevenChallengeViewEquipTip;
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(2, this.aniNode);
            }),
            (t.prototype.start = function () {
                var e = this;
                this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    e.closeView();
                }),
                    this.refreshDescView(),
                    this.addEvent(s.ClientEvents.DESC_REFRESH.on(this.refreshDescView)),
                    this.addEvent(s.ClientEvents.CLOSE_EQUIP_POP.on(this.closeView)),
                    this.refreshQualityView();
            }),
            (t.prototype.onSpriteInit = function () {
                var e = this._data.equipment;
                h.ResManager.loadIcon(this.typeIcon, r.Equip.EQUIP_TYPE_ + e.getType());
                var t = u.equipMgr.getTypeIndex(e.getGrade());
                h.ResManager.loadIcon(this.equipBg, r.Equip.EQUIP_QUALITY_ + t);
                var o = u.equipMgr.getTypeBg(e.getGrade());
                h.ResManager.loadIcon(this.typeBg, r.Equip.EQUIP_PART_ + o),
                    h.ResManager.loadIcon(this.titleBg, r.Equip.EQUIP_PART_ + o);
                var n = u.equipMgr.getStepNode(e.getGrade());
                0 === n
                    ? (this.gradeIcon.node.active = !1)
                    : ((this.gradeIcon.node.active = !0),
                      h.ResManager.loadIcon(this.gradeIcon, r.Equip.EQUIP_GRADE_ + n));
                var a = u.equipMgr.getGradeNum(e.getGrade());
                h.ResManager.loadIcon(this.equipIcon, r.Weapon.TEXTURE_ + e.getEquipIcon()),
                    (this.gradeLabel.string = a),
                    this.levelLabel.getComponent(p.LangLabel).setText(e.getLevel() + "/" + e.getMaxLevel()),
                    this.gradeType
                        .getComponent(p.LangLabel)
                        .setText("{@Tips_Grade_" + u.equipMgr.getTypeBg(e.getGrade()) + "}"),
                    (this.ssrNode.active = u.equipMgr.getIsSSR(this._data));
            }),
            (t.prototype.setNumAddition = function () {
                var e = this._data.equipment.getNumAddition().split(",");
                1 == e[0]
                    ? (this.attribute.spriteFrame = this.attributeSp[0])
                    : (this.attribute.spriteFrame = this.attributeSp[1]),
                    (this.attributeLabel.string = "+ " + e[1]);
            }),
            (t.prototype.refreshQualityView = function () {
                for (
                    var e = this._data.equipment.getQuality(), t = this._data.equipment.getQualityIndex(), o = 0;
                    o < e.length;
                    o++
                )
                    if (-1 != e[o]) {
                        var n = cc.instantiate(this.qualityNode);
                        this.qualityLayout.addChild(n),
                            (n.active = !0),
                            h.ResManager.loadIcon(
                                n.getChildByName("icon").getComponent(cc.Sprite),
                                t >= o ? r.Equip.EQUIP_UNLOCK_ + (o + 1) : r.Equip.EQUIP_LOCK_ + (o + 1)
                            );
                        var a = d.JsonMgr.getJsonById("weaponskill", e[o]),
                            i = a.descid,
                            s = g.langMgr.getStr(i),
                            c = s.split("$"),
                            l = a.numerical.split(";"),
                            u = "";
                        if (c.length <= 1) u = s;
                        else for (var m = 0; m < c.length; m++) c[m] && (u += c[m]), l[m] && (u += l[m]);
                        n.getComponent(p.LangLabel).setText(u);
                    }
            }),
            i([y(cc.Node)], t.prototype, "aniNode", void 0),
            i([y(cc.Sprite)], t.prototype, "equipBg", void 0),
            i([y(cc.Sprite)], t.prototype, "equipIcon", void 0),
            i([y(cc.Sprite)], t.prototype, "typeBg", void 0),
            i([y(cc.Sprite)], t.prototype, "typeIcon", void 0),
            i([y(cc.Sprite)], t.prototype, "gradeIcon", void 0),
            i([y(cc.Label)], t.prototype, "gradeLabel", void 0),
            i([y(cc.Label)], t.prototype, "levelLabel", void 0),
            i([y(cc.Node)], t.prototype, "ssrNode", void 0),
            i([y(cc.Sprite)], t.prototype, "attribute", void 0),
            i([y(cc.Label)], t.prototype, "attributeLabel", void 0),
            i([y(cc.Node)], t.prototype, "describeLabel", void 0),
            i([y(cc.Node)], t.prototype, "titleLabel", void 0),
            i([y(cc.Node)], t.prototype, "closeBtn", void 0),
            i([y(cc.SpriteFrame)], t.prototype, "attributeSp", void 0),
            i([y(cc.Label)], t.prototype, "gradeType", void 0),
            i([y(cc.Sprite)], t.prototype, "titleBg", void 0),
            i([y(cc.Node)], t.prototype, "qualityLayout", void 0),
            i([y(cc.Node)], t.prototype, "qualityNode", void 0),
            i([f], t)
        );
    })(l.GameComponent);
o.default = v;
