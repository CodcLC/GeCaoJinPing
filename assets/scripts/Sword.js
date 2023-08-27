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
var r = e("Bullet"),
    s = e("GameManager"),
    c = cc._decorator.property,
    l = cc._decorator.ccclass,
    p = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.normal = null),
                (t.super = null),
                (t.normalRo = null),
                (t.superRo = null),
                (t.radius = 64),
                (t.radian = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.initSword = function (t, o) {
                e.prototype.init.call(this, t),
                    this.equipJson.issuper
                        ? ((this.super.active = !0), (this.normal.active = !1), this.rotationAni(this.superRo))
                        : ((this.super.active = !1), this.rotationAni(this.normalRo), (this.normal.active = !0)),
                    (this.node.scale = 1),
                    (this.radius = Math.floor(256));
                var n = Math.sin(o) * this.radius,
                    a = Math.cos(o) * this.radius;
                this.node.setPosition(a, n),
                    (this.node.active = !0),
                    (this.node.opacity = 255),
                    (this.radian = o),
                    this.openAni();
            }),
            (t.prototype.rotationAni = function (e) {
                e.runAction(cc.repeatForever(cc.rotateBy(0.8, 359)));
            }),
            (t.prototype.openAni = function () {
                this.isStart = !0;
            }),
            (t.prototype.playAni = function (e) {
                if (this.isStart) {
                    this.radian += e * this.speed;
                    var t = this.radius * Math.cos(this.radian),
                        o = this.radius * Math.sin(this.radian);
                    (this.node.position = cc.v3(t, o, 0)),
                        (this.duration += e),
                        this.downCd(e),
                        this.checkAreaDamage(0.2, null, 35, !0);
                }
                !this.equipJson.issuper && this.duration > this.maxDuration && this.backToPool();
            }),
            (t.prototype.backToPool = function () {
                (this.node.scale = 1),
                    this.node.setPosition(0, 0),
                    (this.isStart = !1),
                    (this.node.active = !1),
                    (this.node.opacity = 0),
                    this.normalRo.stopAllActions(),
                    this.superRo.stopAllActions(),
                    e.prototype.backToPool.call(this);
            }),
            (t.prototype.update = function (e) {
                e > 0.5 || s.gameMgr.getIsPause() || this.playAni(e);
            }),
            i([c(cc.Node)], t.prototype, "normal", void 0),
            i([c(cc.Node)], t.prototype, "super", void 0),
            i([c(cc.Node)], t.prototype, "normalRo", void 0),
            i([c(cc.Node)], t.prototype, "superRo", void 0),
            i([l], t)
        );
    })(r.Bullet);
o.default = p;
