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
    s = e("LangLabel"),
    c = e("ListItem"),
    l = e("EquipManager"),
    p = e("ResManager"),
    u = e("SSRManager"),
    d = e("ssrItem"),
    h = cc._decorator,
    g = h.ccclass,
    m = h.property,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.ssrNode = null),
                (t.gradeBg = null),
                (t.gradeLabel = null),
                (t.contentNode = null),
                (t.ssrItem = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                var t;
                t = 0 === e ? 0 : 5 - e;
                var o = u.ssrMgr.getResolveWeapon()[t],
                    n = l.equipMgr.getDataById(o[0]).equipment,
                    a = l.equipMgr.getTypeBg(n.getGrade());
                p.ResManager.loadIcon(this.gradeBg, r.Equip.EQUIP_PART_ + a),
                    this.gradeLabel
                        .getComponent(s.LangLabel)
                        .setText("{@Tips_Grade_" + l.equipMgr.getTypeBg(n.getGrade()) + "}"),
                    (this.ssrNode.active = n.getIsSSR()),
                    this.showItem(o);
            }),
            (t.prototype.showItem = function (e) {
                var t = this;
                e.forEach(function (e) {
                    var o = cc.instantiate(t.ssrItem);
                    (o.scale = 0.8), t.contentNode.addChild(o), o.getComponent(d.default).init(e);
                });
            }),
            (t.prototype.start = function () {}),
            i([m(cc.Node)], t.prototype, "ssrNode", void 0),
            i([m(cc.Sprite)], t.prototype, "gradeBg", void 0),
            i([m(cc.Label)], t.prototype, "gradeLabel", void 0),
            i([m(cc.Node)], t.prototype, "contentNode", void 0),
            i([m(cc.Prefab)], t.prototype, "ssrItem", void 0),
            i([g], t)
        );
    })(c.default);
o.default = f;
