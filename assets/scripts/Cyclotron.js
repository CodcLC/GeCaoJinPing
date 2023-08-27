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
    c = e("GameView"),
    l = e("MonsterManager"),
    p = e("RoleData"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.normalFrame = null),
                (t.superFrame = null),
                (t.icon = null),
                (t.moveDir = null),
                (t.radian = 0),
                (t.moveSpeed = 0),
                (t.enemySet = new Set()),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    (this.icon.spriteFrame = this.equipJson.issuper ? this.superFrame : this.normalFrame),
                    this.enemySet.clear(),
                    (this.isStart = !0),
                    (this.moveSpeed = this.speed = 10),
                    (this.node.parent = c.default.instance().getBulletNode()),
                    this.initPosAndAngle(),
                    (this.node.active = !0);
            }),
            (t.prototype.initPosAndAngle = function () {
                var e = l.default.instance().getMinDisMonster(),
                    t = p.roleData.getRole().getPos();
                (this.radian = e.sub(t).signAngle(cc.v2(1, 0))),
                    (this.node.angle = (-this.radian / Math.PI) * 180 - 90);
                var o = 10 * Math.cos(this.radian),
                    n = 10 * Math.sin(this.radian);
                this.node.setPosition(cc.v2(t.x + o, t.y + n)),
                    (this.moveDir = e.sub(this.node.getPosition()).normalize()),
                    (this.isStart = !0),
                    this.playAudioEff();
            }),
            (t.prototype.playAudioEff = function () {}),
            (t.prototype.update = function (e) {
                if (!(e > 0.5 || s.gameMgr.getIsPause())) {
                    if (this.isStart) {
                        if (this.duration > 0.9) {
                            this.node.angle -= 1200 * e;
                            var t = this.node.x - this.moveDir.x * this.moveSpeed * e * 65,
                                o = this.node.y - this.moveDir.y * this.moveSpeed * e * 65;
                            (this.moveSpeed += (this.speed / 60) * 1.7), this.node.setPosition(t, o);
                        } else
                            (this.node.angle -= 1200 * e),
                                (t = this.node.x + this.moveDir.x * this.moveSpeed * e * 65),
                                (o = this.node.y + this.moveDir.y * this.moveSpeed * e * 65),
                                (this.moveSpeed -= (this.speed / 60) * 0.9),
                                this.node.setPosition(t, o);
                        (this.duration += e), this.checkAreaDamage();
                    }
                    this.duration > this.maxDuration && (this.backToPool(), (this.node.active = !1));
                }
            }),
            i([h(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([h(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([h(cc.Sprite)], t.prototype, "icon", void 0),
            i([d], t)
        );
    })(r.Bullet);
o.default = g;
