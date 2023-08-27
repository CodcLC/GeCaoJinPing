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
    s = e("RoleData"),
    c = e("GameView"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.bloodAni = null), t;
        }
        return (
            a(t, e),
            (t.prototype.init = function () {
                var e = this;
                this.bloodAni.play("roleBlood"),
                    (this.node.parent = c.default.instance().roleBlood),
                    this.node.setPosition(s.roleData.getRole().getPos()),
                    this.scheduleOnce(function () {
                        e.backToPool();
                    }, 0.2);
            }),
            (t.prototype.backToPool = function () {
                this.bloodAni.stop(), this.unscheduleAllCallbacks(), r.poolMgr.putNodeToPool(this.node);
            }),
            i([u(cc.Animation)], t.prototype, "bloodAni", void 0),
            i([p], t)
        );
    })(cc.Component);
o.default = d;
