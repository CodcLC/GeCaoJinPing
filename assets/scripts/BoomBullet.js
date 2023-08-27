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
var r = e("MonsterManager"),
    s = e("GameManager"),
    c = e("PoolManager"),
    l = e("EnemyBullet"),
    p = e("LoadGameManager"),
    u = e("RoleData"),
    d = cc._decorator,
    h = d.ccclass,
    g = d.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.boomAni = null),
                (t.img = null),
                (t.hasStop = !1),
                (t.aniStart = !1),
                (t.boomDt = 0),
                (t.bulletRun = !1),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t, o, n, a) {
                e.prototype.init.call(this, t, o, n, a), (this.radius = 45), (this.isBossBullet = !0);
            }),
            (t.prototype.boom = function () {
                (this.boomAni.node.active = !0),
                    this.boomAni.play("boom"),
                    (this.img.active = !1),
                    (this.aniStart = !0);
            }),
            (t.prototype.loadBullet = function () {
                var e = p.loadMgr.getEnemyBullet("enemyBullet");
                if (e)
                    for (
                        var t = this.config.getBulletCount(),
                            o = this.node.getPosition(),
                            n = (-u.roleData.getRole().getPos().sub(o).signAngle(cc.v2(1, 0)) / Math.PI) * 180 - 90,
                            a = 0;
                        a < t;
                        a++
                    )
                        c.poolMgr
                            .getNodeFromMap(e)
                            .getComponent(l.default)
                            .bossInit(
                                this.getDamage(),
                                this.node.getPosition(),
                                Object.assign({}, this.config.getJson()),
                                0 === a ? n : n + (360 / t) * a
                            );
            }),
            (t.prototype.getDamage = function () {
                return (this.attack * this.config.getBulletDamage()) / 100;
            }),
            (t.prototype.update = function (e) {
                if (!(e > 0.5))
                    if (s.gameMgr.getIsPause())
                        !this.hasStop && this.aniStart && ((this.hasStop = !0), this.boomAni.pause());
                    else if ((this.hasStop && ((this.hasStop = !1), this.boomAni.resume()), this.aniStart)) {
                        if (((this.boomDt += e), this.boomDt >= 0.2)) this.backToPool();
                        else if (this.boomDt >= 0.1) {
                            if (this.bulletRun) return;
                            (this.bulletRun = !0), this.loadBullet();
                        }
                    } else {
                        if (this.hasAttack) return;
                        (this.duration += e), this.duration >= this.maxDuration ? this.boom() : this.move(e);
                    }
            }),
            (t.prototype.clearData = function () {
                (this.duration = 0), (this.isStart = !1), r.default.instance().enemyBulletMap.delete(this.tag);
            }),
            (t.prototype.backToPool = function () {
                (this.node.active = !1),
                    (this.hasAttack = !1),
                    c.poolMgr.putNodeToPool(this.node),
                    (this.hasStop = !1),
                    (this.aniStart = !1),
                    (this.boomDt = 0),
                    (this.bulletRun = !1),
                    (this.boomAni.node.active = !1),
                    (this.img.active = !0),
                    this.clearData();
            }),
            (t.prototype.getWorldPos = function () {
                return this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
            }),
            i([g(cc.Animation)], t.prototype, "boomAni", void 0),
            i([g(cc.Node)], t.prototype, "img", void 0),
            i([h], t)
        );
    })(l.default);
o.default = m;
