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
var r = e("RoleData"),
    s = e("GameView"),
    c = e("MonsterSkillConfig"),
    l = e("GameManager"),
    p = e("PoolManager"),
    u = e("MonsterManager"),
    d = cc._decorator.ccclass,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.moveDir = null),
                (t.radian = 0),
                (t.duration = 0),
                (t.maxDuration = 0),
                (t.attack = 0),
                (t.config = null),
                (t.isStart = !1),
                (t.speed = 0),
                (t.hasAttack = !1),
                (t.tag = 0),
                (t.radius = 0),
                (t.isBossBullet = !1),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t, o, n) {
                (this.tag = u.default.instance().enemyBulletTag),
                    u.default.instance().addBulletTag(),
                    u.default.instance().enemyBulletMap.set(this.tag, this),
                    (this.enemyType = n),
                    (this.config = new c.MonsterSkillConfig()),
                    this.config.init(o),
                    (this.speed = this.config.getBulletSpeed()),
                    (this.hasAttack = !1),
                    (this.maxDuration = this.config.getBulletMaxDuration()),
                    (this.attack = e);
                var a = r.roleData.getRole().getPos();
                if (((this.radian = a.sub(t).signAngle(cc.v2(1, 0))), this.node && this.isValid)) {
                    (this.node.active = !0), (this.node.angle = (-this.radian / Math.PI) * 180 - 90);
                    var i = 10 * Math.cos(this.radian),
                        l = 10 * Math.sin(this.radian);
                    this.node.setPosition(t.x + i, t.y + l),
                        (this.node.parent = s.default.instance().enemyBulletLayer),
                        (this.moveDir = a.sub(this.node.getPosition()).normalize()),
                        (this.isStart = !0),
                        (this.radius = 30),
                        (this.isBossBullet = !1);
                }
            }),
            (t.prototype.getIsBossBullet = function () {
                return this.isBossBullet;
            }),
            (t.prototype.bossInit = function (e, t, o, n) {
                (this.tag = u.default.instance().enemyBulletTag),
                    u.default.instance().addBulletTag(),
                    u.default.instance().enemyBulletMap.set(this.tag, this),
                    (this.config = new c.MonsterSkillConfig()),
                    this.config.init(o),
                    (this.speed = this.config.getBulletSpeed()),
                    (this.hasAttack = !1),
                    (this.radian = ((n + 90) / 180) * Math.PI),
                    (this.maxDuration = this.config.getBulletMaxDuration()),
                    (this.attack = e);
                var a = Math.cos(this.radian),
                    i = Math.sin(this.radian);
                this.moveDir = cc.v2(a, i).normalize();
                var r = s.default.instance().enemyBulletLayer;
                this.node.setPosition(t),
                    (this.node.active = !0),
                    (this.node.parent = r),
                    (this.radius = 30),
                    (this.isStart = !0),
                    (this.isBossBullet = !1);
            }),
            (t.prototype.boom = function () {}),
            (t.prototype.checkContact = function () {
                var e = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                if (Math.abs(e.sub(r.roleData.getRole().getWorldPosition()).mag()) <= this.radius) {
                    var t = r.roleData.getRole();
                    if (t.isDeath()) return;
                    (this.node.active = !1),
                        (this.hasAttack = !0),
                        t.onDamage(this.getDamage(), this.enemyType),
                        this.isBossBullet ? this.boom() : this.backToPool();
                }
            }),
            (t.prototype.getDamage = function () {
                return (this.attack * this.config.getBulletDamage()) / 100;
            }),
            (t.prototype.move = function (e) {
                if (this.isStart) {
                    var t = this.node.x + this.moveDir.x * this.speed * e * 65,
                        o = this.node.y + this.moveDir.y * this.speed * e * 65;
                    this.node.setPosition(t, o), (this.duration += e), this.checkContact();
                }
            }),
            (t.prototype.update = function (e) {
                e > 0.5 ||
                    l.gameMgr.getIsPause() ||
                    (this.move(e), this.duration > this.maxDuration && this.backToPool());
            }),
            (t.prototype.clearData = function () {
                (this.duration = 0), (this.isStart = !1), u.default.instance().enemyBulletMap.delete(this.tag);
            }),
            (t.prototype.backToPool = function () {
                (this.node.active = !1), (this.hasAttack = !1), p.poolMgr.putNodeToPool(this.node), this.clearData();
            }),
            (t.prototype.getWorldPos = function () {
                return this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
            }),
            i([d], t)
        );
    })(cc.Component);
o.default = h;
