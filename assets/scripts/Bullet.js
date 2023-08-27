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
Object.defineProperty(o, "__esModule", {value: !0}), (o.Bullet = void 0);
var r = e("PoolManager"),
    s = e("RoleData"),
    c = e("HeroData"),
    l = e("JsonManager"),
    p = e("audioManager"),
    u = e("DamageManager"),
    d = e("MonsterManager"),
    h = cc._decorator.ccclass,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.equipJson = null),
                (t.duration = 0),
                (t.isStart = !1),
                (t.speed = 0),
                (t.maxDuration = 0),
                (t.might = 0),
                (t.area = 0),
                (t.tag = 0),
                (t.damageEnemy = new Map()),
                (t.checkDt = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                (this.equipJson = e), (this.node.zIndex = this.equipJson.hierarchy);
                var t = s.roleData.getRole();
                (this.speed = (t.getSpeedAdd() / 100 + 1) * this.equipJson.speed),
                    (this.maxDuration = (t.getDurationAdd() / 100 + 1) * this.equipJson.duration),
                    (this.area = (t.getAreaAdd() / 100 + 1) * this.equipJson.area),
                    (this.node.scale = this.area),
                    (this.might = this.equipJson.might),
                    this.playEffect();
            }),
            (t.prototype.addBulletToDamageMgr = function () {
                this.tag <= 0 && (this.tag = u.default.instance().getTag()),
                    u.default.instance().addBulletToMap(this.tag, this);
            }),
            (t.prototype.playEffect = function () {
                var e = this.equipJson.audioid;
                e && p.audioMgr.startEffect(l.JsonMgr.getAudioById(e).audioname);
            }),
            (t.prototype.backToPool = function () {
                (this.isStart = !1),
                    (this.duration = 0),
                    (this.maxDuration = 0),
                    this.damageEnemy.clear(),
                    (this.checkDt = 0),
                    r.poolMgr.putNodeToPool(this.node);
            }),
            (t.prototype.getDamage = function () {
                var e = s.roleData.getRole().getCrit(),
                    t = Math.ceil(
                        this.might * c.heroData.getHeroMight() * (s.roleData.getRole().getMightAdd() / 100 + 1)
                    );
                return {isCrit: e, damage: e ? 2 * t : t};
            }),
            (t.prototype.checkEnemyInAttack = function (e) {
                var t = !1,
                    o = e.getTag(),
                    n = this.damageEnemy.get(o);
                return n && "number" == typeof n && ((n -= 0.05) <= 0 ? this.damageEnemy.delete(o) : (t = !0)), t;
            }),
            (t.prototype.downCd = function (e) {
                var t = this;
                this.damageEnemy.forEach(function (o, n) {
                    (o -= e) <= 0 ? t.damageEnemy.delete(n) : t.damageEnemy.set(n, o);
                });
            }),
            (t.prototype.checkAreaDamage = function (e, t, o, n, a, i, r) {
                var s = this;
                if (
                    (void 0 === e && (e = 1),
                    void 0 === o && (o = 35),
                    void 0 === n && (n = !1),
                    this.isStart && (this.checkDt++, !(this.checkDt < 2)))
                ) {
                    this.checkDt = 0;
                    var c,
                        l,
                        p,
                        u = t || this.node;
                    if (t && 0 !== t.angle) {
                        var h = u.convertToWorldSpaceAR(cc.v2(-u.width / 2, u.height / 2)),
                            g = u.convertToWorldSpaceAR(cc.v2(-u.width / 2, -u.height / 2)),
                            m = u.convertToWorldSpaceAR(cc.v2(u.width / 2, -u.height / 2)),
                            f = u.convertToWorldSpaceAR(cc.v2(u.width / 2, u.height / 2));
                        (c = d.default.instance().checkMonsterInArea(h, g, m, f, o)),
                            (l = d.default.instance().checkBoxInArea(h, g, m, f)),
                            (p = d.default.instance().checkBulletInArea(h, g, m, f, o));
                    } else {
                        var y = u.convertToWorldSpaceAR(cc.v2(-u.width / 2, -u.height / 2)),
                            v = u.convertToWorldSpaceAR(cc.v2(u.width / 2, u.height / 2));
                        (c = d.default
                            .instance()
                            .checkMonsterInArea(cc.v2(y.x, v.y), cc.v2(v.x, v.y), cc.v2(y.x, y.y), cc.v2(v.x, y.y), o)),
                            (l = d.default
                                .instance()
                                .checkBoxInArea(cc.v2(y.x, v.y), cc.v2(v.x, v.y), cc.v2(y.x, y.y), cc.v2(v.x, y.y))),
                            (p = d.default
                                .instance()
                                .checkBulletInArea(
                                    cc.v2(y.x, v.y),
                                    cc.v2(v.x, v.y),
                                    cc.v2(y.x, y.y),
                                    cc.v2(v.x, y.y),
                                    o
                                ));
                    }
                    c.forEach(function (t) {
                        if (s.isStart) {
                            var o = t.getTag();
                            if (!s.damageEnemy.has(o)) {
                                s.damageEnemy.set(o, e);
                                var n = s.equipJson.hitcolor.split(",");
                                t.onDamage(
                                    s.getDamage(),
                                    s.equipJson.repel,
                                    new cc.Color(Number(n[0]), Number(n[1]), Number(n[2])),
                                    Number(n[3]),
                                    a
                                ),
                                    i && i(t);
                            }
                        }
                    }),
                        l.forEach(function (e) {
                            s.isStart && (e.brokenAniPlay(), r && r());
                        }),
                        n &&
                            p.forEach(function (e) {
                                e.backToPool();
                            });
                }
            }),
            (t.prototype.checkRangeDamage = function (e, t, o, n, a) {
                var i = this;
                if ((void 0 === t && (t = 1), this.isStart && (this.checkDt++, !(this.checkDt < 2)))) {
                    this.checkDt = 0;
                    var r = (o || this.node).convertToWorldSpaceAR(cc.Vec2.ZERO);
                    d.default
                        .instance()
                        .checkMonsterRange(r, e)
                        .forEach(function (e) {
                            if (i.isStart) {
                                var o = e.getTag();
                                if (!i.damageEnemy.has(o)) {
                                    i.damageEnemy.set(o, t);
                                    var r = i.equipJson.hitcolor.split(",");
                                    e.onDamage(
                                        i.getDamage(),
                                        i.equipJson.repel,
                                        new cc.Color(Number(r[0]), Number(r[1]), Number(r[2])),
                                        Number(r[3]),
                                        n
                                    ),
                                        a && a(e);
                                }
                            }
                        }),
                        d.default
                            .instance()
                            .checkBoxRange(r, e)
                            .forEach(function (e) {
                                e.brokenAniPlay();
                            });
                }
            }),
            i([h], t)
        );
    })(cc.Component);
o.Bullet = g;
