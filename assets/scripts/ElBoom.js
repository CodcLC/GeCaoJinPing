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
Object.defineProperty(o, "__esModule", {value: !0}), (o.ElBoom = void 0);
var r = e("Bullet"),
    s = e("GameView"),
    c = e("RoleData"),
    l = e("GameManager"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.elAni = null),
                (t.ballNode = null),
                (t.normalFrame = null),
                (t.superFrame = null),
                (t.moveDir = null),
                (t.radian = 0),
                (t.moveDuration = 0),
                (t.rotation = 0),
                (t.endPos = null),
                (t.startPos = null),
                (t.midPos = null),
                (t.startMove = !1),
                (t.doAttack = function () {
                    if (!l.gameMgr.getIsPause())
                        return (
                            t.downCd(0.1),
                            t.checkAreaDamage(t.equipJson.frequency, t.elAni.node),
                            c.roleData.judgeDamageGas(128 * t.area, t),
                            (t.duration += 0.1),
                            t.duration >= t.maxDuration ? (t.unschedule(t.doAttack), void t.backToPool()) : void 0
                        );
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.initEBoom = function (t, o) {
                e.prototype.init.call(this, t),
                    (this.node.active = !0),
                    this.unscheduleAllCallbacks(),
                    (this.isStart = !0),
                    (this.radian = o),
                    (this.rotation = (this.radian / Math.PI) * 180 + 90),
                    (this.node.scale = this.area),
                    (this.ballNode.getComponent(cc.Sprite).spriteFrame = this.equipJson.issuper
                        ? this.superFrame
                        : this.normalFrame),
                    (this.moveDir = cc.v2(20 * Math.cos(this.radian), 20 * Math.sin(this.radian)).normalize()),
                    (this.node.parent = s.default.instance().eBoomNode),
                    this.node.setPosition(c.roleData.getRole().getPos()),
                    (this.startPos = cc.v2(this.node.x, this.node.y)),
                    (this.endPos = cc.v2(
                        this.startPos.x + 250 * this.moveDir.x,
                        this.startPos.y + 250 * this.moveDir.y
                    )),
                    (this.midPos = cc.v2(
                        (this.startPos.x + this.endPos.x) / 2,
                        (this.startPos.y + this.endPos.y) / 2 + 30
                    )),
                    this.moveTween();
            }),
            (t.prototype.update = function (e) {
                if (!(e > 0.5) && !l.gameMgr.getIsPause() && this.startMove) {
                    var t = this.node.x + 0.2 * -this.moveDir.x * e * 65,
                        o = this.node.y + 0.2 * -this.moveDir.y * e * 65;
                    this.node.setPosition(t, o);
                }
            }),
            (t.prototype.startAni = function () {
                (this.ballNode.active = !1),
                    (this.elAni.node.active = !0),
                    this.equipJson.issuper ? this.elAni.play("superBoom") : this.elAni.play("exBoom"),
                    (this.startMove = this.equipJson.issuper),
                    this.schedule(this.doAttack, 0.1);
            }),
            (t.prototype.getPos = function () {
                return this.node.getPosition();
            }),
            (t.prototype.backToPool = function () {
                e.prototype.backToPool.call(this),
                    (this.startMove = !1),
                    (this.elAni.node.active = !1),
                    (this.ballNode.active = !0),
                    (this.moveDuration = 0),
                    (this.ballNode.angle = 0);
            }),
            (t.prototype.moveTween = function () {
                var e = this;
                cc.tween(this.ballNode).by(0.5, {angle: -200}).start(),
                    this.node.runAction(
                        cc.sequence(
                            cc.bezierTo(0.5, [this.startPos, this.midPos, this.endPos]),
                            cc.callFunc(function () {
                                e.startAni(), (e.ballNode.active = !1);
                            })
                        )
                    );
            }),
            i([d(cc.Animation)], t.prototype, "elAni", void 0),
            i([d(cc.Node)], t.prototype, "ballNode", void 0),
            i([d(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([d(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([u], t)
        );
    })(r.Bullet);
o.ElBoom = h;
