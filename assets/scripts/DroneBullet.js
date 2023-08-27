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
var r = e("GameView"),
    s = e("PoolManager"),
    c = e("RoleData"),
    l = e("CommonUtil"),
    p = e("HeroData"),
    u = e("Bullet"),
    d = cc._decorator,
    h = d.ccclass,
    g = d.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.boomAni = null), (t.icon = null), (t.droneStreak = null), (t.streakNode = null), t;
        }
        return (
            a(t, e),
            (t.prototype.initBullet = function (e, t, o, n, a) {
                var i = this;
                (this.equipJson = n), (this.icon.active = !0), (this.isStart = !0);
                var s = a % 2;
                (this.boomAni.node.active = !1),
                    (this.icon.angle = (o / Math.PI) * 180 - 90),
                    this.node.stopAllActions(),
                    this.node.setPosition(t);
                var c = l.CommonUtil.getRangeCloseNum(70, 90);
                c = 0 === s ? c : -c;
                var p = l.CommonUtil.getRangeCloseNum(150, 250);
                (p = 0 === s ? p : -p),
                    this.initStreak(),
                    this.node.runAction(
                        cc.sequence(
                            cc.bezierTo(0.5, [t, cc.v2(t.x - c, t.y + p), e]),
                            cc.callFunc(function () {
                                (i.icon.active = !1),
                                    (i.boomAni.node.active = !0),
                                    i.boomAni.play("droneBoom"),
                                    i.scheduleOnce(function () {
                                        (i.checkDt = 2), i.checkRangeDamage(45, 1, i.node);
                                    }, 0.1),
                                    i.scheduleOnce(function () {
                                        i.backToPool();
                                    }, 0.2);
                            })
                        )
                    ),
                    r.default.instance().getBulletNode().addChild(this.node);
            }),
            (t.prototype.initStreak = function () {
                (this.streakNode = s.poolMgr.getNodeFromMap(this.droneStreak)),
                    (this.streakNode.active = !0),
                    this.setStreakPos(),
                    r.default.instance().droneSteakLayer.addChild(this.streakNode);
            }),
            (t.prototype.setStreakPos = function () {
                this.streakNode && this.streakNode.setPosition(this.node.getPosition());
            }),
            (t.prototype.getPos = function () {
                return this.node.getPosition();
            }),
            (t.prototype.getDamage = function () {
                var e = c.roleData.getRole().getCrit(),
                    t = Math.ceil(
                        this.equipJson.might *
                            p.heroData.getHeroMight() *
                            (c.roleData.getRole().getMightAdd() / 100 + 1)
                    );
                return {isCrit: e, damage: e ? 2 * t : t};
            }),
            (t.prototype.backToPool = function () {
                this.boomAni.stop(),
                    this.backStreak(),
                    s.poolMgr.putNodeToPool(this.node),
                    this.damageEnemy.clear(),
                    (this.checkDt = 0),
                    (this.isStart = !1);
            }),
            (t.prototype.backStreak = function () {
                this.streakNode &&
                    (s.poolMgr.putNodeToPool(this.streakNode), (this.streakNode.active = !1), (this.streakNode = null));
            }),
            (t.prototype.update = function (e) {
                e > 0.5 || (this.droneStreak && this.setStreakPos());
            }),
            i([g(cc.Animation)], t.prototype, "boomAni", void 0),
            i([g(cc.Node)], t.prototype, "icon", void 0),
            i([g(cc.Prefab)], t.prototype, "droneStreak", void 0),
            i([h], t)
        );
    })(u.Bullet);
o.default = m;
