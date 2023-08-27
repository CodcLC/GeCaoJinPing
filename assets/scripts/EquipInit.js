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
    s = e("EquipManager"),
    c = e("ResManager"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.equipBg = null),
                (t.equipIcon = null),
                (t.typeBg = null),
                (t.typeIcon = null),
                (t.gradeIcon = null),
                (t.gradeLabel = null),
                (t.levelLabel = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t) {
                var o = e;
                c.ResManager.loadIcon(this.typeIcon, r.Equip.EQUIP_TYPE_ + o.getType());
                var n = s.equipMgr.getTypeIndex(o.getGrade());
                c.ResManager.loadIcon(this.equipBg, r.Equip.EQUIP_QUALITY_ + n);
                var a = s.equipMgr.getTypeBg(o.getGrade());
                c.ResManager.loadIcon(this.typeBg, r.Equip.EQUIP_PART_ + a);
                var i = s.equipMgr.getStepNode(o.getGrade());
                0 === i
                    ? (this.gradeIcon.node.active = !1)
                    : ((this.gradeIcon.node.active = !0),
                      c.ResManager.loadIcon(this.gradeIcon, r.Equip.EQUIP_GRADE_ + i));
                var l = s.equipMgr.getGradeNum(o.getGrade());
                c.ResManager.loadIcon(this.equipIcon, r.Weapon.TEXTURE_ + o.getEquipIcon()),
                    (this.gradeLabel.string = l),
                    t
                        ? (this.levelLabel.string = "" + o.getLevel())
                        : ((this.levelLabel.node.parent.active = !1), (this.levelLabel.node.active = !1));
            }),
            i([u(cc.Sprite)], t.prototype, "equipBg", void 0),
            i([u(cc.Sprite)], t.prototype, "equipIcon", void 0),
            i([u(cc.Sprite)], t.prototype, "typeBg", void 0),
            i([u(cc.Sprite)], t.prototype, "typeIcon", void 0),
            i([u(cc.Sprite)], t.prototype, "gradeIcon", void 0),
            i([u(cc.Label)], t.prototype, "gradeLabel", void 0),
            i([u(cc.Label)], t.prototype, "levelLabel", void 0),
            i([p], t)
        );
    })(cc.Component);
o.default = d;
