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
    c = e("List"),
    l = e("SSRManager"),
    p = e("ssrContentItem"),
    u = e("WxManager"),
    d = cc._decorator,
    h = d.ccclass,
    g = d.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.ssrList = null), (t.closeBtn = null), t;
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return r.ViewUrl.SSRView;
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), u.wxMgr.hideBanner();
            }),
            (t.prototype.start = function () {
                var e = this;
                u.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""}),
                    this.closeBtn.on(
                        cc.Node.EventType.TOUCH_END,
                        function () {
                            e.closeView();
                        },
                        this
                    ),
                    (this.ssrList.numItems = l.ssrMgr.getResolveWeapon().length - 1);
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(p.default).init(t);
            }),
            i([g(c.default)], t.prototype, "ssrList", void 0),
            i([g(cc.Node)], t.prototype, "closeBtn", void 0),
            i([h], t)
        );
    })(s.GameComponent);
o.default = m;
