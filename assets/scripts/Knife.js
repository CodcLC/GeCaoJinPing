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
    s = e("EquipManager"),
    c = e("RoleData"),
    l = e("GameView"),
    p = e("EnemyEntity"),
    u = e("BoxItem"),
    d = e("GameManager"),
    h = e("RoleWeaponManager"),
    g = e("FlyEnemy"),
    m = e("audioManager"),
    f = e("JsonManager"),
    y = e("EnemyBullet"),
    v = cc._decorator,
    M = v.ccclass,
    _ = v.property,
    C = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.normalAni = null),
                (t.superAni = null),
                (t.polCollider = null),
                (t.radian = 0),
                (t.hitEnemy = new Set()),
                (t.hasAttack = !1),
                (t.hasPause = !1),
                (t.moveDir = null),
                (t.offsetX = 0),
                (t.offsetY = 0),
                (t.normalPoints = [
                    cc.v2(87, -63),
                    cc.v2(170, -55),
                    cc.v2(240, -20),
                    cc.v2(235, 30),
                    cc.v2(120, 63),
                    cc.v2(0, 60)
                ]),
                (t.superPoints = [
                    cc.v2(0, -70),
                    cc.v2(170, -65),
                    cc.v2(230, -25),
                    cc.v2(235, 28),
                    cc.v2(120, 75),
                    cc.v2(0, 60)
                ]),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                var o = this;
                e.prototype.init.call(this, t),
                    l.default.instance().knifeNode.push(this),
                    this.hitEnemy.clear(),
                    this.damageEnemy.clear(),
                    this.attackGrowth(),
                    this.initPosAndAngle(),
                    this.equipJson.issuper
                        ? ((this.polCollider.points = this.superPoints),
                          this.normalAni.stop("dao"),
                          this.superAni.play("daoSuper"),
                          (this.normalAni.node.parent.active = !1),
                          (this.superAni.node.parent.active = !0),
                          (this.node.angle = (-this.radian / Math.PI) * 180))
                        : ((this.node.scale = 1),
                          (this.polCollider.points = this.normalPoints),
                          (this.normalAni.node.parent.active = !0),
                          (this.superAni.node.parent.active = !1),
                          this.normalAni.play("dao"),
                          this.superAni.stop("daoSuper"),
                          (this.node.angle = (-this.radian / Math.PI) * 180)),
                    (this.node.active = !0),
                    (this.hasAttack = !1),
                    this.scheduleOnce(function () {
                        o.backToPool();
                    }, 0.22);
            }),
            (t.prototype.attackGrowth = function () {
                var e = s.equipMgr.addHandWeaponPercent / 100 + 1;
                this.might *= e;
            }),
            (t.prototype.attackToHP = function () {
                var e = this.getDamage(),
                    t = s.equipMgr.attackToHp;
                c.roleData.getRole().recoveryHpByOther(Math.floor(e.damage * (t / 100)));
            }),
            (t.prototype.initPosAndAngle = function () {
                (this.radian = l.default.instance().getCacheRadian()),
                    (this.moveDir = l.default.instance().getCacheMoveDir());
                var e = c.roleData.getRole().getPos();
                0 === this.radian
                    ? ((this.moveDir = cc.v2(0, 1)), this.node.setPosition(e.x + 80, e.y + 80))
                    : (this.node.setPosition(c.roleData.getRole().getPos()),
                      this.node.setPosition(e.x + 80 * this.moveDir.x, e.y + 80 * this.moveDir.y)),
                    (this.node.parent = l.default.instance().getBulletNode()),
                    (this.isStart = !0),
                    this.playAudioEff();
            }),
            (t.prototype.resetPos = function (e) {
                this.node.setPosition(e.x + this.offsetX, e.y + this.offsetY);
            }),
            (t.prototype.playAudioEff = function () {
                var e = this.equipJson.audioid;
                e && m.audioMgr.startEffect(f.JsonMgr.getAudioById(e).audioname);
            }),
            (t.prototype.onBeginContact = function (e, t, o) {
                var n = o.tag;
                if (1129 === n || 1131 === n) {
                    var a = 1129 === n ? o.node.getComponent(p.EnemyEntity) : o.node.getComponent(g.default);
                    if (a.isDeath) return;
                    if (this.hitEnemy.has(a.getTag())) return;
                    this.hitEnemy.add(a.getTag());
                    var i = this.equipJson.hitcolor.split(",");
                    a.onDamage(
                        this.getDamage(),
                        0,
                        new cc.Color(Number(i[0]), Number(i[1]), Number(i[2])),
                        Number(i[3])
                    ),
                        this.attackToHP(),
                        s.equipMgr.shieldRecover > 0 &&
                            h.default
                                .instance()
                                .recoveryShield((this.getDamage().damage * s.equipMgr.shieldRecover) / 100);
                } else
                    1130 === o.tag
                        ? o.node.getComponent(u.default).brokenAniPlay()
                        : 1127 === o.tag && o.node.getComponent(y.default).backToPool();
            }),
            (t.prototype.backToPool = function () {
                var t = this,
                    o = -1;
                l.default.instance().knifeNode.forEach(function (e, n) {
                    e === t && (o = n);
                }),
                    -1 !== o && l.default.instance().knifeNode.splice(o, 1),
                    e.prototype.backToPool.call(this);
            }),
            (t.prototype.stopAni = function () {
                this.equipJson.issuper ? this.superAni.pause() : this.normalAni.pause();
            }),
            (t.prototype.startAni = function () {
                this.equipJson.issuper ? this.superAni.resume() : this.normalAni.resume();
            }),
            (t.prototype.update = function () {
                d.gameMgr.getIsPause()
                    ? this.hasPause || ((this.hasPause = !0), this.stopAni())
                    : this.hasPause && ((this.hasPause = !1), this.startAni());
            }),
            i([_(cc.Animation)], t.prototype, "normalAni", void 0),
            i([_(cc.Animation)], t.prototype, "superAni", void 0),
            i([_(cc.PhysicsPolygonCollider)], t.prototype, "polCollider", void 0),
            i([M], t)
        );
    })(r.Bullet);
o.default = C;
