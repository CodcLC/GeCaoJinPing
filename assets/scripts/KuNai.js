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
    s = e("MonsterManager"),
    c = e("audioManager"),
    l = e("GameView"),
    p = e("GameManager"),
    u = e("RoleData"),
    d = e("EquipManager"),
    h = cc._decorator,
    g = h.ccclass,
    m = h.property,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.streak = null),
                (t.icon = null),
                (t.superFrame = null),
                (t.normalFrame = null),
                (t.moveDir = null),
                (t.radian = 0),
                (t.hasAttack = !1),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    (this.icon.spriteFrame = this.equipJson.issuper ? this.superFrame : this.normalFrame),
                    this.initPosAndAngle(),
                    (this.node.active = !0),
                    (this.hasAttack = !1),
                    this.attackGrowth();
            }),
            (t.prototype.attackGrowth = function () {
                var e = d.equipMgr.addHandWeaponPercent / 100 + 1;
                this.might *= e;
            }),
            (t.prototype.attackToHP = function () {
                var e = this.getDamage(),
                    t = d.equipMgr.attackToHp;
                u.roleData.getRole().recoveryHpByOther(Math.floor(e.damage * (t / 100)));
            }),
            (t.prototype.initPosAndAngle = function () {
                var e = s.default.instance().getMinDisMonster(),
                    t = u.roleData.getRole(),
                    o = t.getPos();
                (this.radian = e.sub(o).signAngle(cc.v2(1, 0))),
                    (this.node.angle = (-this.radian / Math.PI) * 180 - 90);
                var n = 10 * Math.cos(this.radian),
                    a = 10 * Math.sin(this.radian);
                this.node.setPosition(cc.v2(t.node.x + n, t.node.y + a)),
                    (this.node.parent = l.default.instance().getBulletNode()),
                    (this.moveDir = e.sub(this.node.getPosition()).normalize()),
                    (this.isStart = !0);
            }),
            (t.prototype.playAudioEff = function () {
                c.audioMgr.startEffect("fbyx");
            }),
            (t.prototype.update = function (e) {
                var t = this;
                if (!(e > 0.5 || p.gameMgr.getIsPause())) {
                    if (this.isStart) {
                        var o = this.node.x + this.moveDir.x * this.speed * e * 65,
                            n = this.node.y + this.moveDir.y * this.speed * e * 65;
                        this.node.setPosition(o, n),
                            (this.duration += e),
                            this.checkAreaDamage(
                                1,
                                this.node,
                                35,
                                !1,
                                null,
                                function () {
                                    t.backToPool(), t.attackToHP();
                                },
                                function () {
                                    t.backToPool();
                                }
                            );
                    }
                    this.duration > this.maxDuration &&
                        (this.backToPool(), (this.hasAttack = !1), (this.node.active = !1));
                }
            }),
            i([m(cc.Texture2D)], t.prototype, "streak", void 0),
            i([m(cc.Sprite)], t.prototype, "icon", void 0),
            i([m(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([m(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([g], t)
        );
    })(r.Bullet);
o.default = f;
