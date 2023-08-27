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
    h = e("audioManager"),
    g = e("audioConst"),
    m = e("GameView"),
    f = e("RoleData"),
    y = e("MonsterSkillConfig"),
    v = e("JsonManager"),
    M = e("LoadGameManager"),
    _ = e("EnemyBullet"),
    C = e("GameManager"),
    b = e("Gas"),
    T = e("TaskTypeManager"),
    w = cc._decorator.ccclass,
    N = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.skillCd = {}),
                (t.skillData = new Map()),
                (t.deathSkill = !1),
                (t.deathSkillId = 0),
                (t.checkTagInMap = function () {
                    l.default.instance().checkInMap(t.tag) || t.backToPool();
                }),
                (t.skillSc = function () {
                    C.gameMgr.getIsPause() ||
                        Object.keys(t.skillCd).map(function (e) {
                            t.skillCd[e] > 0 ? (t.skillCd[e] -= 0.2) : t.doSkill(t.skillData.get(Number(e)));
                        });
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t, o, n, a, i) {
                e.prototype.init.call(this, t, o, n, a),
                    (this.skillCd = {}),
                    this.skillData.clear(),
                    this.unschedule(this.skillSc),
                    l.default.instance().initPosition(this.node, i),
                    this.node.parent || m.default.instance().getMonsterNode().addChild(this.node);
                var r = this.node.position.sub(f.roleData.getRole().getPositionV3());
                this.setScale(r),
                    (this.frozenTime = 0),
                    this.ani.resume(),
                    (this.ani.node.color = cc.Color.WHITE),
                    (this.radius = 25),
                    this.schedule(this.checkTagInMap, 2),
                    this.initSkill(),
                    (this.isDeath = !1);
            }),
            (t.prototype.doFrozen = function (e) {
                (this.frozenTime = 0),
                    (this.frozenTime = e),
                    this.ani.pause(),
                    (this.ani.node.color = new cc.Color(0, 133, 247));
            }),
            (t.prototype.initDrop = function () {
                var e = this;
                2 !== this.enemyJson.type
                    ? this.enemyJson.drop.split(",").forEach(function (t, o) {
                          if (!e.dropData) {
                              var n = p.levelMgr.expDropArr[o];
                              e.dropData = Math.random() <= n.rate ? {value: n.value, id: Number(t)} : null;
                          }
                      })
                    : (this.dropData = {id: 1006, value: 1});
            }),
            (t.prototype.clearByBoss = function () {
                return r(this, void 0, void 0, function () {
                    return s(this, function () {
                        return (
                            this.doDrop(),
                            l.default.instance().deleteMonsterFromMap(this.tag, this.enemyJson),
                            this.backToPool(),
                            [2]
                        );
                    });
                });
            }),
            (t.prototype.boomClear = function () {
                return r(this, void 0, void 0, function () {
                    return s(this, function () {
                        return 4 === this.enemyJson.type || 3 === this.enemyJson.type
                            ? [2]
                            : (this.doDrop(), this.backToPool(), [2]);
                    });
                });
            }),
            (t.prototype.drop = function (t) {
                e.prototype.drop.call(this, t);
                var o = u.poolMgr.getNodeFromMap(M.loadMgr.expPrefab);
                2 === this.enemyJson.type
                    ? o.getComponent(d.default).setSprite({id: 1006, value: 1})
                    : o.getComponent(d.default).setSprite(t);
                var n = this.getPos();
                o.setPosition(n.x, n.y);
            }),
            (t.prototype.onDamage = function (t, o, n, a, i) {
                void 0 === o && (o = 0),
                    void 0 === n && (n = cc.Color.WHITE),
                    void 0 === a && (a = 255),
                    this.isDeath ||
                        (e.prototype.onDamage.call(this, t, o, n, a, i),
                        this.hp <= 0 &&
                            (this.deathSkill && this.initDeathSkill(),
                            (this.isDeath = !0),
                            this.enemyJson
                                ? (2 == this.enemyJson.type
                                      ? T.TaskTypeMgr.killEliteEnegyTask(1, !1)
                                      : T.TaskTypeMgr.killNormalEnemyTask(1, !1),
                                  i && i(this.isDeath),
                                  l.default.instance().deleteMonsterFromMap(this.tag, this.enemyJson),
                                  this.unschedule(this.checkTagInMap),
                                  Math.random() <= 0.1 && h.audioMgr.startEffect(g.AudioConst.MONSTER_DIE))
                                : i && i(!1),
                            this.playHitting(o)));
            }),
            (t.prototype.initDeathSkill = function () {
                switch (this.deathSkillId) {
                    case 3002:
                        this.bulletInit(this.skillData.get(3002));
                        break;
                    case 4001:
                        this.gasInit(this.skillData.get(4001));
                }
            }),
            (t.prototype.playHitting = function (e) {
                var t = this;
                this.scheduleOnce(function () {
                    t.isDeath && ((t.bloodAni.node.active = !0), t.setBloodColor(), t.bloodAni.play("blood")),
                        t.doHit(e);
                }, 0.1);
            }),
            (t.prototype.initSkill = function () {
                if (this.enemyJson.skillgroup) {
                    for (var e = this.enemyJson.skillgroup.split(","), t = this.tag, o = 0; o < e.length; o++) {
                        var n = new y.MonsterSkillConfig();
                        if (
                            (n.init(v.JsonMgr.getBossSkillById(Number(e[o]))),
                            this.skillData.set(n.getSkillId(), n),
                            (this.skillCd[n.getSkillId()] = n.getSkillCd()),
                            M.loadMgr.loadEnemyBullet(n.getSkillUrl()),
                            this.tag !== t)
                        )
                            return;
                    }
                    this.schedule(this.skillSc, 0.2);
                }
            }),
            (t.prototype.doSkill = function (e) {
                switch (e.getSkillId()) {
                    case 3001:
                        this.bulletInit(e), (this.skillCd[e.getSkillId()] = e.getSkillCd());
                        break;
                    case 3002:
                        (this.deathSkill = !0), (this.deathSkillId = 3002), (this.skillCd = {});
                        break;
                    case 4001:
                        (this.deathSkill = !0), (this.deathSkillId = 4001), (this.skillCd = {});
                }
            }),
            (t.prototype.bulletInit = function (e) {
                if (e) {
                    var t = u.poolMgr.getNodeFromMap(M.loadMgr.getEnemyBullet(e.getSkillUrl()));
                    t &&
                        t
                            .getComponent(_.default)
                            .init(this.damage(), this.getPos(), Object.assign({}, e.getJson()), this.enemyJson.type);
                }
            }),
            (t.prototype.gasInit = function (e) {
                if (e) {
                    var t = u.poolMgr.getNodeFromMap(M.loadMgr.getEnemyBullet(e.getSkillUrl()));
                    t &&
                        t
                            .getComponent(b.default)
                            .init(this.damage(), this.getPos(), Object.assign({}, e.getJson()), this.enemyJson.type);
                }
            }),
            i([w], t)
        );
    })(c.EnemyEntity);
o.default = N;
