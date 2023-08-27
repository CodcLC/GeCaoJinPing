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
var c = e("EnemyEntity"),
    l = e("MonsterManager"),
    p = e("LevelManager"),
    u = e("PoolManager"),
    d = e("ExpEntities"),
    h = e("CommonUtil"),
    g = e("GameView"),
    m = e("BattleResultManager"),
    f = e("JsonManager"),
    y = e("MonsterSkillConfig"),
    v = e("GameManager"),
    M = e("RoleData"),
    _ = e("LoadGameManager"),
    C = e("TaskTypeManager"),
    b = cc._decorator.ccclass,
    T = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.cd = 0), (t.maxHealth = 0), (t.checkCd = function () {}), t;
        }
        return (
            a(t, e),
            (t.prototype.init = function (t, o, n, a) {
                var i = this;
                if ((e.prototype.init.call(this, t, o, n, a), !this.enemyJson))
                    return this.backToPool(), void l.default.instance().createBoss();
                (4 !== this.enemyJson.type && 3 !== this.enemyJson.type) || (l.default.instance().hasBoss = !0);
                var r = l.default.instance().fenceMidPos,
                    s = p.levelMgr.getBossPos();
                this.node.setPosition(r.x + s.x, r.y + s.y),
                    (this.maxHealth = this.hp),
                    this.node.parent || g.default.instance().getMonsterNode().addChild(this.node);
                var c = this.node.position.sub(M.roleData.getRole().getPositionV3());
                this.setScale(c),
                    (l.default.instance().hasBoss = !0),
                    g.default.instance().showBossHp(!0),
                    this.node.setPosition(r.x + s.x, r.y + s.y),
                    this.enemyJson.skillgroup &&
                        (this.enemyJson.skillgroup.split(",").forEach(function (e) {
                            var t = f.JsonMgr.getBossSkillById(Number(e)),
                                o = new y.MonsterSkillConfig();
                            o.init(t), (i.skillArr = o), (i.cd = o.getSkillCd());
                        }),
                        this.schedule(this.checkCd, 0.1)),
                    (this.isDeath = !1);
            }),
            (t.prototype.initDrop = function () {
                this.dropData = {id: 1006, value: 1};
            }),
            (t.prototype.drop = function (t) {
                return r(this, void 0, void 0, function () {
                    var o, n, a, i;
                    return s(this, function () {
                        return (
                            e.prototype.drop.call(this, t),
                            this.enemyJson
                                ? (3 === this.enemyJson.type &&
                                      ((o = u.poolMgr.getNodeFromMap(_.loadMgr.expPrefab)),
                                      (n = this.getPos()),
                                      o.getComponent(d.default).setSprite({id: 1006, value: 1}),
                                      o.setPosition(
                                          n.x + h.CommonUtil.getRangeCloseNum(-50, 50),
                                          n.y + h.CommonUtil.getRangeCloseNum(-50, 50)
                                      ),
                                      (a = u.poolMgr.getNodeFromMap(_.loadMgr.expPrefab))
                                          .getComponent(d.default)
                                          .setSprite({id: 1007, value: 1}),
                                      a.setPosition(
                                          n.x + h.CommonUtil.getRangeCloseNum(-50, 50),
                                          n.y + h.CommonUtil.getRangeCloseNum(-50, 50)
                                      ),
                                      (i = u.poolMgr.getNodeFromMap(_.loadMgr.expPrefab))
                                          .getComponent(d.default)
                                          .setSprite({id: 1008, value: 1}),
                                      i.setPosition(
                                          n.x + h.CommonUtil.getRangeCloseNum(-50, 50),
                                          n.y + h.CommonUtil.getRangeCloseNum(-50, 50)
                                      )),
                                  [2])
                                : [2]
                        );
                    });
                });
            }),
            (t.prototype.onDamage = function (t, o, n, a, i) {
                var c = this;
                void 0 === o && (o = 0),
                    void 0 === n && (n = cc.Color.WHITE),
                    void 0 === a && (a = 255),
                    e.prototype.onDamage.call(this, t, o, n, a, i),
                    this.hp <= 0 && (this.isDeath = !0),
                    g.default.instance().setBossHpChange(this.hp / this.maxHealth, function () {
                        return r(c, void 0, void 0, function () {
                            return s(this, function () {
                                return (
                                    (this.isDeath = !0),
                                    C.TaskTypeMgr.killBossEnegyTask(1),
                                    this.enemyJson
                                        ? (4 === this.enemyJson.type
                                              ? (v.gameMgr.setIsPause(!0),
                                                g.default.instance().showBossHp(!1),
                                                (l.default.instance().hasBoss = !1),
                                                m.btResMgr.showResultView(!0))
                                              : 3 == this.enemyJson.type &&
                                                ((l.default.instance().hasBoss = !1),
                                                this.doDrop(),
                                                g.default.instance().resumeTimer(),
                                                g.default.instance().showBossHp(!1),
                                                l.default.instance().backAllFence(),
                                                l.default.instance().clearBossSet.add(this.enemyJson.id),
                                                l.default.instance().deleteMonsterFromMap(this.tag, this.enemyJson),
                                                l.default.instance().createMonster(),
                                                this.showBlood()),
                                          this.backToPool(),
                                          [2])
                                        : [2]
                                );
                            });
                        });
                    }),
                    this.hp > 0 && i && i(!1),
                    this.isDeath || this.playHitting(o);
            }),
            (t.prototype.playHitting = function (e) {
                var t = this;
                if (this.enemyJson && 4 === this.enemyJson.type) {
                    if (this.isDeath) return;
                    this.scheduleOnce(function () {
                        t.ani.resume();
                    }, 0.1);
                } else
                    this.scheduleOnce(function () {
                        t.isDeath && ((t.bloodAni.node.active = !0), t.setBloodColor(), t.bloodAni.play("blood")),
                            t.ani.resume(),
                            3 === t.enemyJson.type && (e = 0),
                            t.doHit(e);
                    }, 0.1);
            }),
            (t.prototype.backToPool = function () {
                e.prototype.backToPool.call(this),
                    (l.default.instance().hasBoss = !1),
                    (this.cd = 0),
                    (this.isDeath = !1),
                    (this.skillArr = null),
                    (this.isDoSkill = !1);
            }),
            i([b], t)
        );
    })(c.EnemyEntity);
o.default = T;
