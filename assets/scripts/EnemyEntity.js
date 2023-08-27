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
Object.defineProperty(o, "__esModule", {value: !0}), (o.EnemyEntity = void 0);
var c = e("Entities"),
    l = e("JsonManager"),
    p = e("GameManager"),
    u = e("PoolManager"),
    d = e("LoadManager"),
    h = e("GameView"),
    g = e("PlayerData"),
    m = e("ClientEvents"),
    f = e("LoadGameManager"),
    y = e("RoleData"),
    v = e("censtant"),
    M = e("challengeManager"),
    _ = e("TalentAddManager"),
    C = e("CommonUtil"),
    b = e("ExpEntities"),
    T = e("LevelManager"),
    w = e("EquipManager"),
    N = cc._decorator,
    E = N.ccclass,
    S = N.property,
    D = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.ani = null),
                (t.blink = null),
                (t.bloodAni = null),
                (t.bloodPrefab = null),
                (t.enemyJson = null),
                (t.hpRate = 0),
                (t.attackRate = 0),
                (t.cdTime = 0),
                (t.moveFlag = !1),
                (t.tag = 0),
                (t.tweenScale = null),
                (t.tweenMove = null),
                (t.blinkScale = null),
                (t.isAttacking = !1),
                (t.isDeath = !1),
                (t.isDoSkill = !1),
                (t.frozenTime = 0),
                (t.isPause = !1),
                (t.dropData = null),
                (t.baseScaleX = 0),
                (t.downSpeed = 1),
                (t.radius = 0),
                (t.isFly = !1),
                (t.fireDamage = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t, o, n) {
                (this.enemyJson = null),
                    this.unscheduleAllCallbacks(),
                    (this.hpRate = o),
                    (this.attackRate = n),
                    (this.node.active = !0);
                var a = l.JsonMgr.getMonsterById(e);
                (this.enemyJson = Object.assign({}, a)),
                    (this.entitiesCollider.sensor = !1),
                    (this.dropData = null),
                    (this.downSpeed = 1),
                    this.initDrop(),
                    (this.baseScaleX = this.node.scale = this.enemyJson.scale),
                    (this.blink.getComponent(cc.Sprite).spriteFrame = f.loadMgr.zombieAtlas.getSpriteFrame(
                        this.enemyJson.skin
                    )),
                    (this.tag = t),
                    (this.tweenScale = null),
                    (this.tweenMove = null),
                    (this.hp = T.levelMgr.getBaseHp() * this.hpRate),
                    (this.attack = T.levelMgr.getBaseAttack() * this.attackRate),
                    (this.speed = this.enemyJson.movespeed),
                    g.playData.getGameState() === v.GameSatet.challenge &&
                        ((this.hp = this.hp * M.challengeMgr.getHpAddition()),
                        (this.attack = this.attack * M.challengeMgr.getAttackAddition()),
                        (this.speed = this.enemyJson.movespeed * M.challengeMgr.getSpeedAddition())),
                    this.loadAnimation(),
                    (this.moveFlag = !0),
                    (this.fireDamage = 0);
            }),
            (t.prototype.getId = function () {
                return this.enemyJson ? this.enemyJson.id : -1;
            }),
            (t.prototype.getTag = function () {
                return this.tag;
            }),
            (t.prototype.getIsBoss = function () {
                return !!this.enemyJson && (4 === this.enemyJson.type || 3 === this.enemyJson.type);
            }),
            (t.prototype.getIsLeader = function () {
                return 2 === this.enemyJson.type;
            }),
            (t.prototype.loadAnimation = function () {
                return r(this, void 0, void 0, function () {
                    var e,
                        t = this;
                    return s(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return (
                                    this.ani.stop(),
                                    this.ani.getClips().forEach(function (e) {
                                        t.ani.removeClip(e);
                                    }),
                                    [
                                        4,
                                        d.LoadManager.loadResAwait("animation/" + this.enemyJson.skin, cc.AnimationClip)
                                    ]
                                );
                            case 1:
                                return (e = o.sent()), this.ani.addClip(e), this.ani.play(this.enemyJson.skin), [2];
                        }
                    });
                });
            }),
            (t.prototype.doFrozen = function () {}),
            (t.prototype.playStand = function () {
                this.moveFlag = !1;
            }),
            (t.prototype.damage = function () {
                return this.attack;
            }),
            (t.prototype.setScale = function (e) {
                e.x >= 0 ? (this.node.scaleX = -this.baseScaleX) : (this.node.scaleX = this.baseScaleX);
            }),
            (t.prototype.doBlink = function (e, t) {
                var o = this;
                void 0 === e && (e = cc.Color.WHITE),
                    void 0 === t && (t = 255),
                    this.blink.active ||
                        this.scheduleOnce(function () {
                            var n;
                            (o.blink.color = e),
                                (o.blink.opacity = t),
                                o.ani.pause(),
                                o.ani.setCurrentTime(0, o.enemyJson.skin),
                                o.blink.stopAllActions(),
                                (o.blink.active = !0),
                                null === (n = o.blinkScale) || void 0 === n || n.stop(),
                                (o.blink.scale = 1.1),
                                o.blink.runAction(
                                    cc.sequence(
                                        cc.delayTime(0.15),
                                        cc.callFunc(function () {
                                            (o.blink.active = !1), o.ani.resume();
                                        })
                                    )
                                );
                        }, 0.1);
            }),
            (t.prototype.onDamage = function (e, t, o, n) {
                if (
                    (void 0 === t && (t = 0),
                    void 0 === o && (o = cc.Color.WHITE),
                    void 0 === n && (n = 255),
                    !this.isDeath)
                ) {
                    var a = e.damage;
                    if (
                        ((p.gameMgr.allDamage += a),
                        w.equipMgr.targetAllHpAttackAddition > 0 &&
                            this.hp === T.levelMgr.getBaseHp() * this.hpRate &&
                            (a *= 1 + w.equipMgr.targetAllHpAttackAddition / 100),
                        w.equipMgr.targetHpAttackAddition > 0)
                    ) {
                        var i = this.hp / (T.levelMgr.getBaseHp() * this.hpRate);
                        (i = i > 1 ? 1 : i), (a *= 1 + (w.equipMgr.targetHpAttackAddition / 100) * i);
                    }
                    y.roleData
                        .getRole()
                        .recoveryHpByOther(Math.floor(a * (y.roleData.getRole().getVampirePercent() / 100))),
                        this.doBlink(o, n),
                        w.equipMgr.bossDamageUp > 0 &&
                            (this.getIsBoss() || this.getIsLeader()) &&
                            (a = Number((a + Number((a * w.equipMgr.bossDamageUp) / 100)).toFixed(0))),
                        y.roleData.getRole().getKillBossDamageUp() > 0 &&
                            (a = Number(
                                (a + Number((a * y.roleData.getRole().getKillBossDamageUp()) / 100)).toFixed(0)
                            )),
                        _.talentAddMgr.fiveTimeDamage > 0 &&
                            Math.random() <= _.talentAddMgr.fiveTimeDamage / 100 &&
                            (a *= 5),
                        (this.hp -= a);
                    var r = this.getWorldPos();
                    h.default.instance().addDamageLabel(v.DamageType.Attacked, e.isCrit, -a, cc.v3(r.x, r.y, 0));
                }
            }),
            (t.prototype.onFiringDamage = function (e, t) {
                void 0 === t && (t = 3),
                    this.isDeath ||
                        ((this.fireDamage = e),
                        this.unschedule(this.firingDamage),
                        this.schedule(this.firingDamage, 1, t));
            }),
            (t.prototype.firingDamage = function () {
                if (this.isDeath) this.unschedule(this.firingDamage);
                else {
                    this.fireBlink(), (this.hp -= this.fireDamage);
                    var e = this.getWorldPos();
                    h.default.instance().addDamageLabel(v.DamageType.Burn, !1, -this.fireDamage, cc.v3(e.x, e.y, 0));
                }
            }),
            (t.prototype.fireBlink = function () {
                var e = this;
                this.blink.active ||
                    ((this.blink.color = new cc.Color(229, 44, 13)),
                    (this.blink.active = !0),
                    cc
                        .tween(this.blink)
                        .delay(0.1)
                        .to(0, {color: new cc.Color(205, 35, 34)})
                        .delay(0.1)
                        .to(0, {color: new cc.Color(229, 44, 13), scale: 1.1})
                        .delay(0.15)
                        .call(function () {
                            e.blink.active = !1;
                        })
                        .start());
            }),
            (t.prototype.onSpeedWeaken = function (e, t) {
                var o = this,
                    n = this.speed;
                this.changeSpeed(this.speed * (1 - t / 100)),
                    this.scheduleOnce(function () {
                        o.changeSpeed(n);
                    }, e);
            }),
            (t.prototype.changeSpeed = function (e) {
                this.speed = e;
            }),
            (t.prototype.playHitting = function () {}),
            (t.prototype.doHit = function (e) {
                var t = this;
                if (e > 0)
                    if ((this.tweenMove && (this.tweenMove.stop(), (this.tweenMove = null)), this.isFly));
                    else {
                        this.moveFlag = !1;
                        var o = y.roleData.getRole().getPos(),
                            n = this.node.position
                                .sub(cc.v3(o.x, o.y))
                                .normalize(cc.v3())
                                .mul(25 * (e + y.roleData.getRole().getRepel()));
                        this.tweenMove = cc
                            .tween(this.node)
                            .by(0.15, {position: cc.v3(n.x, n.y, 0)}, {easing: cc.easing.cubicInOut})
                            .call(function () {
                                t.moveFlag = !0;
                            })
                            .start();
                    }
                this.tweenScale ||
                    ((this.tweenScale = cc
                        .tween(this.ani.node)
                        .by(0.075, {scaleY: 0.2, scaleX: -0.2})
                        .by(0.075, {scaleY: -0.2, scaleX: 0.2})
                        .call(function () {
                            t.tweenScale = null;
                        })
                        .start()),
                    (this.blinkScale = cc
                        .tween(this.blink)
                        .by(0.075, {scaleY: 0.2, scaleX: -0.2})
                        .by(0.075, {scaleY: -0.2, scaleX: 0.2})
                        .call(function () {})
                        .start()),
                    this.scheduleOnce(function () {
                        return r(t, void 0, void 0, function () {
                            var e = this;
                            return s(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return this.ani.resume(), this.isDeath ? [4, this.onDeath()] : [3, 2];
                                    case 1:
                                        t.sent(),
                                            this.backToPool(),
                                            this.showBlood(),
                                            y.roleData.getRole().refreshMoveEffectOverTime(),
                                            this.unschedule(function () {
                                                e.changeSpeed(e.enemyJson.movespeed);
                                            }),
                                            (t.label = 2);
                                    case 2:
                                        return [2];
                                }
                            });
                        });
                    }, 0.15));
            }),
            (t.prototype.onDeath = function () {
                this.doDrop(), this.unschedule(this.firingDamage), y.roleData.getRole().enemyGrowthCheck();
            }),
            (t.prototype.doDrop = function () {
                (this.getIsBoss() || this.getIsLeader()) && y.roleData.getRole().incentiveEffectGrowth(),
                    g.playData.addKillNum(),
                    m.ClientEvents.REFRESH_KILL_LABEL.emit(),
                    this.dropData && this.drop(this.dropData);
            }),
            (t.prototype.initDrop = function () {}),
            (t.prototype.clearByBoss = function () {}),
            (t.prototype.boomClear = function () {}),
            (t.prototype.drop = function () {
                if (
                    _.talentAddMgr.killMonsterDropGold &&
                    this.rollDrop(100 * _.talentAddMgr.killMonsterDropGold, 1e4)
                ) {
                    (t = u.poolMgr.getNodeFromMap(f.loadMgr.expPrefab))
                        .getComponent(b.default)
                        .setSprite({id: 1001, value: 10});
                    var e = this.getPos();
                    t.setPosition(e.x, e.y);
                }
                var t;
                (_.talentAddMgr.killMonsterDropMeat &&
                    this.rollDrop(100 * _.talentAddMgr.killMonsterDropMeat, 1e4) &&
                    ((t = u.poolMgr.getNodeFromMap(f.loadMgr.expPrefab))
                        .getComponent(b.default)
                        .setSprite({id: 1008, value: 1}),
                    (e = this.getPos()),
                    t.setPosition(e.x, e.y)),
                _.talentAddMgr.killMonsterDrop &&
                    this.rollDrop(100 * _.talentAddMgr.killMonsterDrop, 1e4) &&
                    ((t = u.poolMgr.getNodeFromMap(f.loadMgr.expPrefab))
                        .getComponent(b.default)
                        .setSprite({id: 1010303, value: 1}),
                    (e = this.getPos()),
                    t.setPosition(e.x, e.y)),
                _.talentAddMgr.killMonsterDropWeapon &&
                    this.rollDrop(100 * _.talentAddMgr.killMonsterDropWeapon, 1e4)) &&
                    ((t = u.poolMgr.getNodeFromMap(f.loadMgr.expPrefab))
                        .getComponent(b.default)
                        .setSprite({id: 1010304, value: 1}),
                    (e = this.getPos()),
                    t.setPosition(e.x, e.y));
            }),
            (t.prototype.rollDrop = function (e, t) {
                return C.CommonUtil.getRangeCloseNum(e, t) === e;
            }),
            (t.prototype.move = function (e) {
                if (
                    ((this.isAttacking =
                        Math.abs(this.node.position.sub(y.roleData.getRole().getPositionV3()).mag()) <= this.radius),
                    this.isAttacking)
                )
                    this.cdTime <= 0 && this.isAttacking && this.doAttack();
                else {
                    var t = this.speed * e * 65 * this.downSpeed;
                    if (t <= 0) return !1;
                    var o = y.roleData.getRole().getPos(),
                        n = this.node.position.sub(cc.v3(o.x, o.y)).normalize(cc.v3()).mul(t);
                    (this.node.position = this.node.position.add(new cc.Vec3(-n.x, -n.y, 0))), this.setScale(n);
                }
                return !0;
            }),
            (t.prototype.doAttack = function () {
                if (!(p.gameMgr.getIsPause() || this.isDoSkill || this.isDeath) && this.cdTime <= 0) {
                    var e = y.roleData.getRole();
                    (this.cdTime = this.enemyJson.cd), e.onDamage(this.damage(), this.enemyJson.type);
                }
            }),
            (t.prototype.update = function (e) {
                if (!(e > 0.5)) {
                    if (p.gameMgr.getIsPause()) return this.ani.pause(), void (this.isPause = !0);
                    if ((this.isPause && this.ani.resume(), this.frozenTime > 0))
                        return (
                            (this.frozenTime -= e),
                            void (
                                this.frozenTime <= 0 &&
                                (this.ani.resume(), (this.downSpeed = 1), (this.ani.node.color = cc.Color.WHITE))
                            )
                        );
                    this.cdTime > 0 && (this.cdTime -= e), this.moveFlag && this.move(e);
                }
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
                    u.poolMgr.putNodeToPool(this.node),
                    this.clearData();
            }),
            (t.prototype.setBloodColor = function () {
                this.bloodAni.node.color = new cc.Color(0, 170, 79);
            }),
            (t.prototype.showBlood = function () {
                var e = u.poolMgr.getNodeFromMap(this.bloodPrefab);
                e.setPosition(this.getPos()),
                    h.default.instance().bloodLayer.addChild(e),
                    e.getComponent("Blood").init(Object.assign({}, this.enemyJson));
            }),
            (t.prototype.getWorldPos = function () {
                return this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
            }),
            (t.prototype.getPos = function () {
                return this.node.getPosition();
            }),
            i([S(cc.Animation)], t.prototype, "ani", void 0),
            i([S(cc.Node)], t.prototype, "blink", void 0),
            i([S(cc.Animation)], t.prototype, "bloodAni", void 0),
            i([S(cc.Prefab)], t.prototype, "bloodPrefab", void 0),
            i([E], t)
        );
    })(c.default);
o.EnemyEntity = D;
