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
var r = e("CommonUtil"),
    s = e("ResManager"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.icon = null), (t.labelNode = null), t;
        }
        return (
            a(t, e),
            (t.prototype.start = function () {}),
            (t.prototype.init = function (e, t, o) {
                this.showIcon(e),
                    (t = t || 0),
                    (o = o || 0),
                    this.labelNode.children.forEach(function (e, n) {
                        0 == n
                            ? ((e.getComponent(cc.Label).string = r.CommonUtil.formatMoney(t)),
                              t < o && (e.color = cc.Color.RED))
                            : 2 == n && (e.getComponent(cc.Label).string = r.CommonUtil.formatMoney(o));
                    });
            }),
            (t.prototype.showIcon = function (e) {
                1001 === e
                    ? s.ResManager.loadGoldIcon(this.icon)
                    : e > 3e3 && e < 3999
                    ? s.ResManager.loadHeroChip(e.toString(), this.icon)
                    : 1017 === e && s.ResManager.loadHeroExp(this.icon);
            }),
            i([p(cc.Sprite)], t.prototype, "icon", void 0),
            i([p(cc.Node)], t.prototype, "labelNode", void 0),
            i([l], t)
        );
    })(cc.Component);
o.default = u;
