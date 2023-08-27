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
        },
    r =
        (this && this.__awaiter) ||
        function (e, t, o, n) {
            return new (o || (o = Promise))(function (a, i) {
                function r(e) {
                    try {
                        c(n.next(e));
                    } catch (t) {
                        i(t);
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e));
                    } catch (t) {
                        i(t);
                    }
                }
                function c(e) {
                    var t;
                    e.done
                        ? a(e.value)
                        : ((t = e.value),
                          t instanceof o
                              ? t
                              : new o(function (e) {
                                    e(t);
                                })).then(r, s);
                }
                c((n = n.apply(e, t || [])).next());
            });
        },
    s =
        (this && this.__generator) ||
        function (e, t) {
            var o,
                n,
                a,
                i,
                r = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                };
            return (
                (i = {next: s(0), throw: s(1), return: s(2)}),
                "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                i
            );
            function s(e) {
                return function (t) {
                    return c([e, t]);
                };
            }
            function c(i) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; r; )
                    try {
                        if (
                            ((o = 1),
                            n &&
                                (a =
                                    2 & i[0]
                                        ? n.return
                                        : i[0]
                                        ? n.throw || ((a = n.return) && a.call(n), 0)
                                        : n.next) &&
                                !(a = a.call(n, i[1])).done)
                        )
                            return a;
                        switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return r.label++, {value: i[1], done: !1};
                            case 5:
                                r.label++, (n = i[1]), (i = [0]);
                                continue;
                            case 7:
                                (i = r.ops.pop()), r.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    r = 0;
                                    continue;
                                }
                                if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                    r.label = i[1];
                                    break;
                                }
                                if (6 === i[0] && r.label < a[1]) {
                                    (r.label = a[1]), (a = i);
                                    break;
                                }
                                if (a && r.label < a[2]) {
                                    (r.label = a[2]), r.ops.push(i);
                                    break;
                                }
                                a[2] && r.ops.pop(), r.trys.pop();
                                continue;
                        }
                        i = t.call(e, r);
                    } catch (s) {
                        (i = [6, s]), (n = 0);
                    } finally {
                        o = a = 0;
                    }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0};
            }
        };
Object.defineProperty(o, "__esModule", {value: !0}), (o.BossRush = void 0);
var c = e("BossEntities"),
    l = cc._decorator.property,
    p = e("PoolManager"),
    u = e("RoleData"),
    d = e("GameView"),
    h = e("GameManager"),
    g = e("LoadGameManager"),
    m = e("Shake"),
    f = cc._decorator.ccclass,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.rushPrefab = null),
                (t.rushNode = null),
                (t.nowRushCd = 0),
                (t.rushCd = 0),
                (t.speedAdd = 0),
                (t.offsetTime = 1.5),
                (t.lastDir = null),
                (t.skillHasAttack = !1),
                (t.checkCd = function () {
                    t.cd <= 0 || ((t.cd -= 0.1), t.cd <= 0 && t.doSkillByIndex());
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t, o, n, a) {
                return r(this, void 0, Promise, function () {
                    return s(this, function () {
                        return (
                            e.prototype.init.call(this, t, o, n, a),
                            (this.radius = 100),
                            this.skillArr && 2002 === this.skillArr.getSkillId() && g.loadMgr.loadEnemyBullet("shake"),
                            [2]
                        );
                    });
                });
            }),
            (t.prototype.doSkillByIndex = function () {
                if (!this.isDoSkill) {
                    var e = this.skillArr.getSkillValue();
                    (this.nowRushCd = this.rushCd = Number(e[0])),
                        (this.speedAdd = Number(e[1])),
                        (this.offsetTime = Number(e[2])),
                        this.rush(),
                        (this.skillHasAttack = !1),
                        (this.isDoSkill = !0);
                }
            }),
            (t.prototype.rush = function () {
                (this.moveFlag = !1), this.loadRushNode();
            }),
            (t.prototype.loadRushNode = function () {
                this.rushNode = p.poolMgr.getNodeFromMap(this.rushPrefab);
                var e = this.getPos();
                this.rushNode.setPosition(cc.v2(e.x, e.y - 50)),
                    (this.rushNode.parent = d.default.instance().bossEffectLayer),
                    this.setRushNodeAngle();
            }),
            (t.prototype.backToPool = function () {
                this.backRushNode(), e.prototype.backToPool.call(this);
            }),
            (t.prototype.backRushNode = function () {
                this.rushNode && (p.poolMgr.putNodeToPool(this.rushNode), (this.rushNode = null));
            }),
            (t.prototype.setRushNodeAngle = function () {
                var e = u.roleData.getRole().getPos(),
                    t = this.getPos(),
                    o = cc.v2(e.x - t.x, e.y - t.y).signAngle(cc.v2(1, 0));
                this.rushNode.angle = (-o / Math.PI) * 180 - 90;
            }),
            (t.prototype.update = function (t) {
                if (!(t > 0.5 || h.gameMgr.getIsPause()))
                    if (this.isDoSkill) {
                        if (this.nowRushCd > 0) {
                            this.nowRushCd -= t;
                            var o = u.roleData.getRole().getPos(),
                                n = this.getPos(),
                                a = o.sub(cc.v2(n.x, n.y)).normalize(cc.v2());
                            this.setScale(cc.v2(-a.x, -a.y)),
                                this.setRushNodeAngle(),
                                this.nowRushCd <= 0 && (this.lastDir = a);
                        } else {
                            if (this.offsetTime <= 0)
                                return (
                                    (this.moveFlag = !0),
                                    (this.isDoSkill = !1),
                                    (this.cd = this.skillArr.getSkillCd()),
                                    void (2002 === this.skillArr.getSkillId() && this.doShake())
                                );
                            this.skillHasAttack ||
                                (Math.abs(this.node.position.sub(u.roleData.getRole().getPositionV3()).mag()) <=
                                    this.radius &&
                                    ((this.skillHasAttack = !0), this.skillAttack(), (this.cdTime = 0))),
                                this.backRushNode();
                            var i = this.speed * this.speedAdd * t * 65;
                            this.node.setPosition(this.getPos().add(this.lastDir.mul(i))), (this.offsetTime -= t);
                        }
                    } else e.prototype.update.call(this, t);
            }),
            (t.prototype.doShake = function () {
                var e = g.loadMgr.getEnemyBullet("shake");
                e &&
                    p.poolMgr
                        .getNodeFromMap(e)
                        .getComponent(m.default)
                        .init(
                            this.damage(),
                            this.getPos(),
                            Object.assign({}, this.skillArr.getJson()),
                            this.enemyJson.type
                        );
            }),
            (t.prototype.skillAttack = function () {
                var e = u.roleData.getRole();
                (this.cdTime = this.enemyJson.cd), e.onDamage(this.damage(), this.enemyJson.type), e.bossHit();
            }),
            i([l(cc.Prefab)], t.prototype, "rushPrefab", void 0),
            i([f], t)
        );
    })(c.default);
o.BossRush = y;
