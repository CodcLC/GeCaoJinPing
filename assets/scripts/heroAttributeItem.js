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
    s = e("JsonManager"),
    c = e("LanguageManager"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.unlockNode = null),
                (t.valueBg = null),
                (t.level = null),
                (t.attributeIcon = null),
                (t.valueLabel = null),
                (t.levelNode = null),
                (t.levelGrowthNode = null),
                (t.starNode = null),
                (t.starGrowthNode = null),
                (t.levelGrowthSprite = []),
                (t._idx = null),
                (t._data = null),
                (t._skillJson = null),
                (t._heroData = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {}),
            (t.prototype.init = function (e, t) {
                (this._data = t),
                    (this._idx = e),
                    (this._heroData = this._data.heroData),
                    (this.unlockNode.active = !1),
                    (this.valueBg.color = new cc.Color().fromHEX("#6D7487")),
                    (this._data.levelSkill.includes(this._data.id) || this._data.starSkill.includes(this._data.id)) &&
                        ((this.unlockNode.active = !0), (this.valueBg.color = new cc.Color().fromHEX("#AFB6BE"))),
                    (this._skillJson = s.JsonMgr.getHeroSkillJson(this._data.id)),
                    this._skillJson && this._data.id > 1e6
                        ? ((this.starNode.active = !1),
                          (this.starGrowthNode.node.active = !0),
                          (this.levelNode.active = !0),
                          (this.levelGrowthNode.active = !1),
                          this.showlevelSkill())
                        : this._skillJson &&
                          this._data.id < 1e6 &&
                          ((this.starNode.active = !0),
                          (this.starGrowthNode.node.active = !0),
                          (this.levelNode.active = !1),
                          (this.levelGrowthNode.active = !1),
                          this.showGradeSkill());
            }),
            (t.prototype.showlevelSkill = function () {
                this.level.string = this._heroData.uplevel.split(",")[this._idx];
                var e = c.langMgr.getStr(this._skillJson.descid).replace("$", this._skillJson.numerical);
                this.starGrowthNode.string = e;
            }),
            (t.prototype.showGradeSkill = function () {
                var e = this;
                this._heroData.starskillid.split(",").forEach(function (t, o) {
                    t == e._data.id && e.showStar(Number(o));
                });
                var t = c.langMgr.getStr(this._skillJson.descid).replace("$", this._skillJson.numerical);
                this.starGrowthNode.string = t;
            }),
            (t.prototype.showStar = function (e) {
                this.starNode.children.forEach(function (t, o) {
                    t && t.isValid && (t.active = o < e);
                });
            }),
            (t.prototype.showGrowthIcon = function () {
                var e = this._skillJson.type;
                1 === e
                    ? (this.attributeIcon.spriteFrame = this.levelGrowthSprite[1])
                    : 5 === e
                    ? (this.attributeIcon.spriteFrame = this.levelGrowthSprite[0])
                    : 16 === e && (this.attributeIcon.spriteFrame = this.levelGrowthSprite[2]);
            }),
            i([u(cc.Node)], t.prototype, "unlockNode", void 0),
            i([u(cc.Node)], t.prototype, "valueBg", void 0),
            i([u(cc.Label)], t.prototype, "level", void 0),
            i([u(cc.Sprite)], t.prototype, "attributeIcon", void 0),
            i([u(cc.Label)], t.prototype, "valueLabel", void 0),
            i([u(cc.Node)], t.prototype, "levelNode", void 0),
            i([u(cc.Node)], t.prototype, "levelGrowthNode", void 0),
            i([u(cc.Node)], t.prototype, "starNode", void 0),
            i([u(cc.Label)], t.prototype, "starGrowthNode", void 0),
            i([u(cc.SpriteFrame)], t.prototype, "levelGrowthSprite", void 0),
            i([p], t)
        );
    })(r.default);
o.default = d;
