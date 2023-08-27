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
    c = e("PoolManager"),
    l = e("CommonRewardItem"),
    p = e("audioManager"),
    u = e("audioConst"),
    d = cc._decorator,
    h = d.ccclass,
    g = d.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.shikariNode = null),
                (t.commonRewardItem = null),
                (t.mask = null),
                (t.layout = null),
                (t.data = null),
                (t.isAutoPop = !1),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onEnable = function () {
                var e = this;
                this.onShowPlay(2, this.aniNode, function () {
                    e.init(),
                        e.mask.on(cc.Node.EventType.TOUCH_END, function () {
                            p.audioMgr.startEffect(u.AudioConst.COMMON_TOUCH), e.closeView(e.isAutoPop);
                        });
                });
            }),
            (t.prototype.init = function () {
                var e = this;
                if (
                    (this.shikariNode.runAction(cc.repeatForever(cc.rotateBy(4, 360))),
                    (this.data = this.node.data),
                    (this.isAutoPop = this.node.isAutoPop),
                    this.data.length < 5)
                ) {
                    var t = this.layout.getComponent(cc.Layout);
                    (t.type = cc.Layout.Type.HORIZONTAL),
                        (t.resizeMode = cc.Layout.ResizeMode.CONTAINER),
                        (t.paddingLeft = 5),
                        (t.spacingX = 15),
                        t.updateLayout();
                }
                this.data.forEach(function (t, o) {
                    var n = c.poolMgr.getNodeFromMap(e.commonRewardItem);
                    e.layout.addChild(n), n.getComponent(l.default).init(o, t.id, t.count, !1);
                });
            }),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.PassTaskRewardView;
            }),
            i([g(cc.Node)], t.prototype, "aniNode", void 0),
            i([g(cc.Node)], t.prototype, "shikariNode", void 0),
            i([g(cc.Prefab)], t.prototype, "commonRewardItem", void 0),
            i([g(cc.Node)], t.prototype, "mask", void 0),
            i([g(cc.Node)], t.prototype, "layout", void 0),
            i([h], t)
        );
    })(r.GameComponent);
o.default = m;
