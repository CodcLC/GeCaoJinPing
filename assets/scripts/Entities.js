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
    s = e("Joystick"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.speed = 10),
                (t.attack = 0),
                (t.armor = 0),
                (t.hp = 100),
                (t.entitiesCollider = null),
                (t._speedType = s.SpeedType.STOP),
                (t.moveDir = cc.Vec2.ZERO),
                (t.timeCheck = function () {}),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {
                var e = this;
                this.scheduleOnce(function () {
                    e.schedule(e.timeCheck, 0.1, cc.macro.REPEAT_FOREVER);
                }, 0.5);
            }),
            (t.prototype.init = function () {}),
            (t.prototype.backToPool = function () {
                this.unscheduleAllCallbacks(), this.clearData(), r.poolMgr.putNodeToPool(this.node);
            }),
            (t.prototype.loadSpine = function () {}),
            (t.prototype.onDamage = function (e, t) {
                void 0 === t && (t = 0),
                    (this.hp -= "number" == typeof e ? e : e.damage),
                    this.hp <= 0 ? this.death() : this.playHitting(t);
            }),
            (t.prototype.death = function () {}),
            (t.prototype.playHitting = function () {}),
            (t.prototype.doAttack = function () {}),
            (t.prototype.clearData = function () {
                (this.hp = 0), (this.attack = 0), (this.speed = 0);
            }),
            i([p(cc.PhysicsCircleCollider)], t.prototype, "entitiesCollider", void 0),
            i([l], t)
        );
    })(cc.Component);
o.default = u;
