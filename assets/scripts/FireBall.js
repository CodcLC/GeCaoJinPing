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
Object.defineProperty(o, "__esModule", {value: !0}), (o.FireBall = void 0);
var r = e("Bullet"),
    s = e("GameView"),
    c = e("audioManager"),
    l = e("GameManager"),
    p = e("CommonUtil"),
    u = e("RoleData"),
    d = cc._decorator,
    h = d.ccclass,
    g = d.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.normalClip = null),
                (t.superClip = null),
                (t.aniNode = null),
                (t.checkArea = null),
                (t.moveDir = null),
                (t.radian = 0),
                (t.hasAttack = !1),
                (t.enemySet = new Set()),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    this.initPosAndAngle(),
                    this.aniNode.stop(),
                    this.equipJson.issuper
                        ? (this.aniNode.removeClip(this.normalClip),
                          this.aniNode.addClip(this.superClip),
                          this.aniNode.play("superFireBall"))
                        : (this.aniNode.removeClip(this.superClip),
                          this.aniNode.addClip(this.normalClip),
                          this.aniNode.play("fireBall")),
                    (this.node.active = !0),
                    (this.hasAttack = !1),
                    this.enemySet.clear();
            }),
            (t.prototype.initPosAndAngle = function () {
                var e = p.CommonUtil.getRangeCloseNum(-180, 180);
                (this.node.angle = -e - 180), (this.radian = (-(e + 90) / 180) * Math.PI);
                var t = Math.cos(this.radian),
                    o = Math.sin(this.radian),
                    n = u.roleData.getRole().getPos();
                this.node.setPosition(cc.v2(n.x + 10 * t, n.y + 10 * o)),
                    (this.node.parent = s.default.instance().getBulletNode()),
                    (this.moveDir = cc.v2(t, o).normalize()),
                    (this.isStart = !0);
            }),
            (t.prototype.playAudioEff = function () {
                c.audioMgr.startEffect("fbyx");
            }),
            (t.prototype.update = function (e) {
                var t = this;
                if (!(e > 0.5 || l.gameMgr.getIsPause())) {
                    if (this.isStart) {
                        var o = this.node.x + this.moveDir.x * this.speed * e * 65,
                            n = this.node.y + this.moveDir.y * this.speed * e * 65;
                        this.node.setPosition(o, n),
                            (this.duration += e),
                            this.checkAreaDamage(1, this.checkArea, 35, !1, null, function () {
                                t.equipJson.issuper || t.backToPool();
                            });
                    }
                    this.duration > this.maxDuration && (this.backToPool(), (this.node.active = !1));
                }
            }),
            i([g(cc.AnimationClip)], t.prototype, "normalClip", void 0),
            i([g(cc.AnimationClip)], t.prototype, "superClip", void 0),
            i([g(cc.Animation)], t.prototype, "aniNode", void 0),
            i([g(cc.Node)], t.prototype, "checkArea", void 0),
            i([h], t)
        );
    })(r.Bullet);
o.FireBall = m;
