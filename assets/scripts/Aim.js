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
var r = e("PoolManager"),
    s = e("GameView"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.aimAni = []), t;
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                var t = this;
                this.node.setPosition(e),
                    s.default.instance().getBulletNode().addChild(this.node),
                    this.aimAni.forEach(function (e, t) {
                        e.stop(), e.play("aim" + t);
                    }),
                    this.scheduleOnce(function () {
                        t.backToPool();
                    }, 0.7);
            }),
            (t.prototype.backToPool = function () {
                this.aimAni.forEach(function (e) {
                    e.stop();
                });
                var e = this.aimAni[0].node;
                (e.opacity = 0), (e.scale = 0.25);
                var t = this.aimAni[1].node;
                (t.opacity = 255), (t.scale = 0.55);
                var o = this.aimAni[0].node;
                (o.opacity = 255), (o.scale = 0.9), r.poolMgr.putNodeToPool(this.node);
            }),
            i([p(cc.Animation)], t.prototype, "aimAni", void 0),
            i([l], t)
        );
    })(cc.Component);
o.default = u;
