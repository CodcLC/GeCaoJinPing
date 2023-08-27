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
    s = e("GameView"),
    c = e("GameManager"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.normalNode = null),
                (t.superNode = null),
                (t.checkArea = null),
                (t.moveDir = null),
                (t.hasAttack = !1),
                (t.radian = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    (this.duration = 0),
                    (this.node.active = !0),
                    (this.maxDuration = 1.5),
                    (this.hasAttack = !1),
                    this.equipJson.issuper
                        ? ((this.normalNode.active = !1), (this.superNode.active = !0))
                        : ((this.normalNode.active = !0), (this.superNode.active = !1));
            }),
            (t.prototype.initPos = function (e, t, o, n) {
                this.node.setPosition(e), s.default.instance().laserLayer.addChild(this.node), (this.node.zIndex = -1);
                var a = this.node.getPosition();
                (this.radian = t),
                    (this.node.angle = o),
                    this.node.setPosition(cc.v2(a.x, a.y)),
                    (this.moveDir = n),
                    (this.isStart = !0);
            }),
            (t.prototype.backToPool = function () {
                e.prototype.backToPool.call(this), (this.isStart = !1), (this.node.active = !1);
            }),
            (t.prototype.update = function (e) {
                var t = this;
                if (!(e > 0.5) && !c.gameMgr.getIsPause() && this.isStart)
                    if (this.duration > this.maxDuration) this.backToPool();
                    else {
                        var o = this.node.x + this.moveDir.x * this.speed * e * 65,
                            n = this.node.y + this.moveDir.y * this.speed * e * 65;
                        this.node.setPosition(o, n),
                            (this.duration += e),
                            this.checkAreaDamage(1, this.checkArea, 35, !1, null, function () {
                                t.equipJson.issuper || (t.backToPool(), (t.hasAttack = !0));
                            });
                    }
            }),
            i([u(cc.Node)], t.prototype, "normalNode", void 0),
            i([u(cc.Node)], t.prototype, "superNode", void 0),
            i([u(cc.Node)], t.prototype, "checkArea", void 0),
            i([p], t)
        );
    })(r.Bullet);
o.default = d;
