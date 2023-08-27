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
Object.defineProperty(o, "__esModule", {value: !0});
var c = e("NormalEnemyEntities"),
    l = e("MonsterManager"),
    p = e("GameManager"),
    u = e("RoleData"),
    d = e("JsonManager"),
    h = e("LoadGameManager"),
    g = e("PlayerData"),
    m = e("censtant"),
    f = e("challengeManager"),
    y = e("GameView"),
    v = e("LevelManager"),
    M = cc._decorator,
    _ = M.ccclass,
    C =
        (M.property,
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.isFly = !0), (t.startPos = cc.v2()), (t.moveDir = null), t;
            }
            return (
                a(t, e),
                (t.prototype.setMoveDir = function (e) {
                    this.moveDir = e;
                }),
                (t.prototype.setAttack = function (e) {
                    this.attack = v.levelMgr.getBaseAttack() * e;
                }),
                (t.prototype.init = function (e, t) {
                    (this.node.active = !0),
                        (this.enemyJson = d.JsonMgr.getMonsterById(e)),
                        (this.entitiesCollider.sensor = !1),
                        (this.dropData = null),
                        (this.downSpeed = 1),
                        this.initDrop(),
                        (this.baseScaleX = this.node.scale = this.enemyJson.scale),
                        (this.blink.getComponent(cc.Sprite).spriteFrame = h.loadMgr.zombieAtlas.getSpriteFrame(
                            this.enemyJson.skin
                        )),
                        (this.tag = t),
                        (this.isDeath = !1),
                        (this.tweenScale = null),
                        (this.tweenMove = null),
                        (this.hp = v.levelMgr.getBaseHp()),
                        (this.attack = v.levelMgr.getBaseAttack()),
                        (this.speed = 7),
                        (this.cdTime = 0),
                        (this.radius = 25),
                        g.playData.getGameState() === m.GameSatet.challenge &&
                            ((this.hp = this.hp * f.challengeMgr.getHpAddition()),
                            (this.attack = this.attack * f.challengeMgr.getAttackAddition()),
                            (this.speed = this.enemyJson.movespeed * f.challengeMgr.getSpeedAddition())),
                        this.loadAnimation(),
                        (this.moveFlag = !0),
                        (this.moveDir.x < 0 && this.moveDir.y > 0) || (this.moveDir.x > 0 && this.moveDir.y < 0)
                            ? (this.node.scaleX = -1)
                            : (this.node.scaleX = 1);
                }),
                (t.prototype.start = function () {
                    this.startPos = this.node.getPosition();
                }),
                (t.prototype.onDamage = function (e, t, o, n, a) {
                    return (
                        void 0 === t && (t = 0),
                        void 0 === o && (o = cc.Color.WHITE),
                        void 0 === n && (n = 255),
                        r(this, void 0, void 0, function () {
                            var i;
                            return s(this, function () {
                                return this.isDeath
                                    ? [2]
                                    : (this.doBlink(o, n),
                                      (this.hp -= e.damage),
                                      (i = this.getWorldPos()),
                                      y.default
                                          .instance()
                                          .addDamageLabel(m.DamageType.Attacked, !1, -e.damage, cc.v3(i.x, i.y, 0)),
                                      this.hp <= 0
                                          ? ((this.isDeath = !0),
                                            a && a(this.isDeath),
                                            l.default.instance().deleteFlyMonster(this.tag))
                                          : a && a(!1),
                                      this.playHitting(t),
                                      [2]);
                            });
                        })
                    );
                }),
                (t.prototype.doFrozen = function () {}),
                (t.prototype.update = function (e) {
                    if (!(e > 0.5)) {
                        if (p.gameMgr.getIsPause()) return this.ani.pause(), void (this.isPause = !0);
                        this.isPause && this.ani.resume();
                        var t = this.node.x + this.moveDir.x * this.speed * e * 65,
                            o = this.node.y + this.moveDir.y * this.speed * e * 65;
                        this.node.setPosition(t, o),
                            this.cdTime > 0
                                ? (this.cdTime -= e)
                                : ((this.isAttacking =
                                      Math.abs(
                                          this.node
                                              .convertToWorldSpaceAR(cc.Vec2.ZERO)
                                              .sub(u.roleData.getRole().getWorldPosition())
                                              .mag()
                                      ) <= this.radius),
                                  this.isAttacking && this.cdTime <= 0 && this.isAttacking && this.doAttack());
                    }
                }),
                (t.prototype.move = function () {
                    return !0;
                }),
                (t.prototype.getPos = function () {
                    var e = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
                    return y.default.instance().eBoomNode.convertToNodeSpaceAR(e);
                }),
                (t.prototype.backToPool = function () {
                    var e, t, o;
                    this.unscheduleAllCallbacks(),
                        null === (e = this.tweenMove) || void 0 === e || e.stop(),
                        null === (t = this.blinkScale) || void 0 === t || t.stop(),
                        null === (o = this.tweenScale) || void 0 === o || o.stop(),
                        (this.ani.node.scale = 1),
                        (this.blink.scale = 1.1),
                        (this.blink.active = !1),
                        (this.bloodAni.node.active = !1),
                        this.bloodAni.stop(),
                        (this.node.active = !1),
                        this.node.setPosition(this.startPos),
                        this.clearData();
                }),
                i([_], t)
            );
        })(c.default));
o.default = C;
