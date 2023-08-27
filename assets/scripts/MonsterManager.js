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
    l = e("JsonManager"),
    p = e("LevelManager"),
    u = e("LoadManager"),
    d = e("PoolManager"),
    h = e("CommonUtil"),
    g = e("GameManager"),
    m = e("RoleData"),
    f = e("BoxItem"),
    y = e("UIManager"),
    v = e("GameView"),
    M = e("Fence"),
    _ = e("PlayerData"),
    C = e("censtant"),
    b = e("challengeManager"),
    T = e("LoadGameManager"),
    w = e("FlyNode"),
    N = cc._decorator.ccclass,
    E = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.enemyMap = new Map()),
                (t.nowTag = 0),
                (t.boxTag = 0),
                (t.prefab = null),
                (t.bossPrefab = null),
                (t.boxPrefab = null),
                (t.boxMap = new Map()),
                (t.flyEnemyMap = new Map()),
                (t.fenceArr = []),
                (t.monsterIdMap = new Map()),
                (t.gasMap = new Map()),
                (t.freshWeight = []),
                (t.fenceMidPos = null),
                (t.hasBoss = !1),
                (t.clearBossSet = new Set()),
                (t.gasTag = 0),
                (t.enemyBulletMap = new Map()),
                (t.enemyBulletTag = 1),
                (t.loadMonster = function () {
                    return r(t, void 0, void 0, function () {
                        var e, t, o, n, a, i;
                        return s(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return this.hasBoss
                                        ? [2]
                                        : ((e = p.levelMgr.getCreateMonsterIds()),
                                          this.prefab ? [3, 2] : ((t = this), [4, this.loadMonsterPrefab()]));
                                case 1:
                                    (t.prefab = r.sent()), (r.label = 2);
                                case 2:
                                    if (p.levelMgr.nowMax <= 1) return [2];
                                    if (p.levelMgr.nowMax >= 100) this.schedule(this.scLoad, 0.2, 15);
                                    else
                                        for (; this.enemyMap.size < p.levelMgr.nowMax; )
                                            for (o = 0, n = 0; n < e.length; n++)
                                                (a = e[n]),
                                                    (o = a.id),
                                                    (i = this.monsterIdMap.get(o))
                                                        ? i.count < a.count &&
                                                          (this.initMonster(o, a.hpRate, a.attackRate),
                                                          this.nowTag++,
                                                          (i.count = i.count + 1))
                                                        : a.count > 0 &&
                                                          (this.initMonster(o, a.hpRate, a.attackRate),
                                                          this.nowTag++,
                                                          this.monsterIdMap.set(o, {count: 1}));
                                    return [2];
                            }
                        });
                    });
                }),
                (t.scLoad = function () {
                    for (var e = p.levelMgr.getCreateMonsterIds(), o = 0, n = 0; n < 50; n++) {
                        if (t.enemyMap.size >= p.levelMgr.nowMax) return void t.unschedule(t.scLoad);
                        var a = e[n % e.length];
                        o = a.id;
                        var i = t.monsterIdMap.get(o);
                        i
                            ? i.count < a.count &&
                              (t.initMonster(o, a.hpRate, a.attackRate), t.nowTag++, (i.count = i.count + 1))
                            : a.count > 0 &&
                              (t.initMonster(o, a.hpRate, a.attackRate), t.nowTag++, t.monsterIdMap.set(o, {count: 1}));
                    }
                }),
                t
            );
        }
        var o;
        return (
            a(t, e),
            (o = t),
            (t.instance = function () {
                return o._instance;
            }),
            (t.prototype.addBulletTag = function () {
                this.enemyBulletTag++;
            }),
            (t.prototype.onLoad = function () {
                var e = this;
                (o._instance = this),
                    this.clearBossSet.clear(),
                    l.JsonMgr.getDefineConstantByName("MonsterWeight")
                        .split(",")
                        .forEach(function (t) {
                            e.freshWeight.push(Number(t));
                        });
            }),
            (t.prototype.getGasMap = function () {
                return this.gasMap;
            }),
            (t.prototype.createAllMonster = function () {
                return r(this, void 0, void 0, function () {
                    return s(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return this.createBoss(), [4, this.loadMonster()];
                            case 1:
                                return e.sent(), [4, this.loadBox()];
                            case 2:
                                return e.sent(), [2];
                        }
                    });
                });
            }),
            (t.prototype.createMonster = function () {
                return r(this, void 0, void 0, function () {
                    return s(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return this.createBoss(), this.hasBoss ? [2] : [4, this.loadMonster()];
                            case 1:
                                return e.sent(), [2];
                        }
                    });
                });
            }),
            (t.prototype.getEnemyMap = function () {
                return this.enemyMap;
            }),
            (t.prototype.loadFlyMonster = function (e) {
                var t = T.loadMgr.flyPrefab;
                t && d.poolMgr.getNodeFromMap(t).getComponent(w.default).init(Number(e[2]), Number(e[3]));
            }),
            (t.prototype.initMonster = function (e, t, o, n) {
                if (l.JsonMgr.getMonsterById(e)) {
                    var a = d.poolMgr.getNodeFromMap(this.prefab).getComponent(c.EnemyEntity);
                    this.enemyMap.set(this.nowTag, a), a.init(e, this.nowTag, t, o, n);
                }
            }),
            (t.prototype.createBoss = function () {
                var e = this;
                p.levelMgr.getNowBoss().forEach(function (t) {
                    var o = t.id;
                    if (0 !== o && !e.hasBoss && !e.clearBossSet.has(o)) {
                        var n = l.JsonMgr.getMonsterById(o);
                        if ((e.bossPrefab || 2 === n.type || (e.bossPrefab = T.loadMgr.bossPrefabMap.get(n.id)), n))
                            if (4 === n.type || 3 === n.type) {
                                v.default.instance().stopTimer(), v.default.instance().blinkMask(), e.loadFence();
                                var a = d.poolMgr.getNodeFromMap(e.bossPrefab).getComponent(c.EnemyEntity);
                                e.enemyMap.set(e.nowTag, a),
                                    a.init(o, e.nowTag, t.hpRate, t.attackRate),
                                    e.enemyMap.forEach(function (e) {
                                        e.clearByBoss();
                                    }),
                                    (e.bossPrefab = null);
                            } else {
                                var i = e.monsterIdMap.get(t.id);
                                i
                                    ? i.count < t.count &&
                                      ((a = d.poolMgr.getNodeFromMap(e.prefab).getComponent(c.EnemyEntity)),
                                      e.enemyMap.set(e.nowTag, a),
                                      a.init(o, e.nowTag, t.hpRate, t.attackRate),
                                      (i.count = i.count + 1))
                                    : t.count > 0 &&
                                      ((a = d.poolMgr.getNodeFromMap(e.prefab).getComponent(c.EnemyEntity)),
                                      e.enemyMap.set(e.nowTag, a),
                                      a.init(o, e.nowTag, t.hpRate, t.attackRate),
                                      e.monsterIdMap.set(o, {count: 1}));
                            }
                        e.nowTag++;
                    }
                });
            }),
            (t.prototype.loadBox = function () {
                return r(this, void 0, void 0, function () {
                    var e, t, o, n, a, i;
                    return s(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return this.boxPrefab ? [3, 2] : ((e = this), [4, this.loadBoxPrefab()]);
                            case 1:
                                (e.boxPrefab = r.sent()), (r.label = 2);
                            case 2:
                                for (
                                    t = p.levelMgr.nowBox,
                                        o = 1,
                                        _.playData.getGameState() === C.GameSatet.challenge &&
                                            (o = b.challengeMgr.getBoxProbability()),
                                        n = 0;
                                    n < t;
                                    n++
                                )
                                    Math.random() <= o &&
                                        ((a = d.poolMgr.getNodeFromMap(this.boxPrefab)),
                                        (i = a.getComponent(f.default)).init(this.boxTag),
                                        this.boxMap.set(this.boxTag, i),
                                        this.boxTag++);
                                return [2];
                        }
                    });
                });
            }),
            (t.prototype.loadMonsterPrefab = function () {
                return r(this, void 0, void 0, function () {
                    return s(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, u.LoadManager.loadResAwait("prefab/entities/enemy", cc.Prefab)];
                            case 1:
                                return [2, e.sent()];
                        }
                    });
                });
            }),
            (t.prototype.loadBossPrefab = function (e) {
                return r(this, void 0, void 0, function () {
                    var t;
                    return s(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return (t = "prefab/entities/" + e), [4, u.LoadManager.loadResAwait(t, cc.Prefab)];
                            case 1:
                                return [2, o.sent()];
                        }
                    });
                });
            }),
            (t.prototype.loadBoxPrefab = function () {
                return r(this, void 0, void 0, function () {
                    return s(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, u.LoadManager.loadResAwait("prefab/entities/box", cc.Prefab)];
                            case 1:
                                return [2, e.sent()];
                        }
                    });
                });
            }),
            (t.prototype.resetEnemy = function (e, t, o, n) {
                return r(this, void 0, void 0, function () {
                    var a = this;
                    return s(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return (
                                    this.enemyMap.forEach(function (i, r) {
                                        if (!i.getIsBoss()) {
                                            var s = i.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
                                            s.x <= e
                                                ? a.deleteEnemy(i, r)
                                                : s.x >= t
                                                ? a.deleteEnemy(i, r)
                                                : s.y <= o
                                                ? a.deleteEnemy(i, r)
                                                : s.y >= n && a.deleteEnemy(i, r);
                                        }
                                    }),
                                    [4, this.createMonster()]
                                );
                            case 1:
                                return i.sent(), [2];
                        }
                    });
                });
            }),
            (t.prototype.deleteEnemy = function (e, t) {
                if (e.getIsLeader()) this.initPosition(e.node);
                else {
                    this.enemyMap.delete(t);
                    var o = this.monsterIdMap.get(e.getId());
                    o && o.count > 0 && (o.count = o.count - 1), e.backToPool();
                }
            }),
            (t.prototype.getMinDisMonster = function (e) {
                var t = e || m.roleData.getRole().getPos(),
                    o = 2e5,
                    n = null;
                return (
                    this.enemyMap.forEach(function (e) {
                        var a = e.getPos(),
                            i = cc.v2(Math.floor(t.x - a.x), Math.floor(t.y - a.y)),
                            r = Math.sqrt(Math.abs(i.x * i.x) + Math.abs(i.y * i.y));
                        r < o && ((o = r), (n = e));
                    }),
                    this.boxMap.forEach(function (e) {
                        var a = e.getPos(),
                            i = cc.v2(Math.floor(t.x - a.x), Math.floor(t.y - a.y)),
                            r = Math.sqrt(Math.abs(i.x * i.x) + Math.abs(i.y * i.y));
                        r < o && ((o = r), (n = e));
                    }),
                    n ? n.getPos() : cc.v2(t.x + 10, t.y + 10)
                );
            }),
            (t.prototype.getRandomMonster = function () {
                var e = [];
                this.enemyMap.forEach(function (t, o) {
                    e.push(o);
                });
                var t = h.CommonUtil.getRangeCloseNum(1, e.length);
                return this.enemyMap.get(Number(e[t - 1]));
            }),
            (t.prototype.checkEnemyHitRadius = function (e, t, o, n) {
                this.enemyMap.forEach(function (a) {
                    if (a.getPos().sub(e).mag() <= t) {
                        var i = n.hitcolor.split(",");
                        a.onDamage(o, 0, new cc.Color(Number(i[0]), Number(i[1]), Number(i[2])), Number(i[3]));
                    }
                });
            }),
            (t.prototype.deleteMonsterFromMap = function (e, t) {
                this.enemyMap.delete(e);
                var o = this.monsterIdMap.get(t.id);
                if (o) {
                    if (2 === t.type) return;
                    o.count = o.count - 1;
                }
                this.enemyMap.size <= p.levelMgr.nowMax && this.deleteCreate();
            }),
            (t.prototype.deleteFlyMonster = function (e) {
                this.flyEnemyMap.delete(e);
            }),
            (t.prototype.deleteCreate = function () {
                if (!(this.hasBoss || g.gameMgr.time >= p.levelMgr.maxTime))
                    for (var e = p.levelMgr.getCreateMonsterIds(), t = 0; t < e.length; t++) {
                        if (this.enemyMap.size > p.levelMgr.nowMax) return;
                        var o = e[t],
                            n = o.id,
                            a = this.monsterIdMap.get(n);
                        if (a) {
                            if (a.count < o.count) {
                                if (l.JsonMgr.getMonsterById(n)) {
                                    var i = d.poolMgr.getNodeFromMap(this.prefab).getComponent(c.EnemyEntity);
                                    this.enemyMap.set(this.nowTag, i), i.init(n, this.nowTag, o.hpRate, o.attackRate);
                                }
                                this.nowTag++, (a.count = a.count + 1);
                            }
                        } else
                            o.count > 0 &&
                                (l.JsonMgr.getMonsterById(n) &&
                                    ((i = d.poolMgr.getNodeFromMap(this.prefab).getComponent(c.EnemyEntity)),
                                    this.enemyMap.set(this.nowTag, i),
                                    i.init(n, this.nowTag, o.hpRate, o.attackRate)),
                                this.nowTag++,
                                this.monsterIdMap.set(n, {count: 1}));
                    }
            }),
            (t.prototype.boomAllMonster = function () {
                var e = this;
                v.default.instance().blinkMask();
                var t = [];
                this.enemyMap.forEach(function (o, n) {
                    if (!o.getIsBoss()) {
                        var a = e.monsterIdMap.get(o.getId());
                        !o.getIsLeader() && a.count > 0 && (a.count = a.count - 1), t.push(n), o.boomClear();
                    }
                }),
                    t.forEach(function (t) {
                        e.enemyMap.delete(t);
                    }),
                    this.scheduleOnce(function () {
                        e.createMonster();
                    }, 0.1);
            }),
            (t.prototype.backAllMonster = function () {
                this.enemyMap.forEach(function (e) {
                    e.backToPool();
                }),
                    this.enemyMap.clear(),
                    this.flyEnemyMap.clear(),
                    this.monsterIdMap.clear(),
                    this.backAllFence();
            }),
            (t.prototype.backAllFence = function () {
                this.fenceArr.forEach(function (e) {
                    e.getComponent(M.default).backToPool();
                }),
                    (this.fenceArr.length = 0);
            }),
            (t.prototype.initPosition = function (e, t) {
                if ("number" == typeof t) {
                    var n = y.UIMgr.getRoleCamera().width / 2 + 100,
                        a = m.roleData.getRole().getPos(),
                        i = a.y + Math.sin(t) * n,
                        r = a.x + Math.cos(t) * n;
                    e.setPosition(r, i);
                } else {
                    var s = void 0;
                    if (p.levelMgr.getIsLoopMap()) s = h.CommonUtil.getWeightRandom(o.instance().freshWeight);
                    else {
                        var c = o.instance().freshWeight;
                        s = h.CommonUtil.getWeightRandom([c[0], c[1], 0, 0]);
                    }
                    switch (s) {
                        case 0:
                            return this.topSet(e);
                        case 1:
                            return this.downSet(e);
                        case 2:
                            return this.leftSet(e);
                        case 3:
                            return this.rightSet(e);
                    }
                }
            }),
            (t.prototype.leftSet = function (e) {
                var t = y.UIMgr.getRoleCamera();
                this.setPos(t.x - t.width / 2 - 600, t.x - t.width / 2, t.y - t.height / 2, t.y + t.height / 2, e);
            }),
            (t.prototype.rightSet = function (e) {
                var t = y.UIMgr.getRoleCamera();
                this.setPos(t.x + t.width / 2, t.x + t.width / 2 + 600, t.y - t.height / 2, t.y + t.height / 2, e);
            }),
            (t.prototype.topSet = function (e) {
                var t = y.UIMgr.getRoleCamera();
                this.setPos(
                    t.x - t.width / 2 + 40,
                    t.x + t.width / 2 - 40,
                    t.y + t.height / 2,
                    t.y + t.height / 2 + (p.levelMgr.getIsVertical() ? 800 : 400),
                    e
                );
            }),
            (t.prototype.downSet = function (e) {
                var t = y.UIMgr.getRoleCamera();
                this.setPos(
                    t.x - t.width / 2 + 40,
                    t.x + t.width / 2 - 40,
                    t.y - t.height / 2 - (p.levelMgr.getIsVertical() ? 800 : 400),
                    t.y - t.height / 2,
                    e
                );
            }),
            (t.prototype.setPos = function (e, t, o, n, a) {
                var i = h.CommonUtil.getRangeCloseNum(e, t),
                    r = h.CommonUtil.getRangeCloseNum(o, n);
                a.setPosition(i, r, 0);
            }),
            (t.prototype.loadMonsterSpecial = function (e) {
                for (var t = Number(e[2]), o = 0; o < t; o++) {
                    var n = p.levelMgr.getCreateMonsterIds(),
                        a = n[o % n.length],
                        i = a.id,
                        r = this.monsterIdMap.get(i);
                    r ? (r.count += 1) : this.monsterIdMap.set(i, {count: 1}),
                        this.initMonster(i, a.hpRate, a.attackRate, ((360 / t) * o * Math.PI) / 180),
                        this.nowTag++;
                }
            }),
            (t.prototype.deleteBox = function (e) {
                this.boxMap.delete(e);
            }),
            (t.prototype.loadFence = function () {
                var e = T.loadMgr.fencePrefab;
                switch (p.levelMgr.getMapType()) {
                    case p.MapType.Loop:
                        this.loadLoopFence(e);
                        break;
                    case p.MapType.Vertical:
                        this.loadVerticalFence(e);
                }
            }),
            (t.prototype.loadVerticalFence = function (e) {
                var t = m.roleData.getRole().getPos();
                this.fenceMidPos = cc.v2(0, t.y);
                for (var o = [t.y + 800, t.y - 800], n = 0; n < 2; n++)
                    for (var a = 0; a < 15; a++) {
                        var i = d.poolMgr.getNodeFromMap(e);
                        v.default.instance().getMonsterNode().addChild(i),
                            i.setPosition(50 * a - 375 + 25, o[n]),
                            this.fenceArr.push(i);
                    }
            }),
            (t.prototype.loadLoopFence = function (e) {
                var t = p.levelMgr.getBossFence(1),
                    o = (t / 50) * 4,
                    n = m.roleData.getRole().getPos();
                this.fenceMidPos = n.clone();
                for (var a = 0; a < o; a++) {
                    var i = ((360 / o) * a * Math.PI) / 180,
                        r = Math.sin(i) * t,
                        s = Math.cos(i) * t,
                        c = d.poolMgr.getNodeFromMap(e);
                    v.default.instance().getMonsterNode().addChild(c),
                        c.setPosition(s + n.x, r + n.y),
                        this.fenceArr.push(c);
                }
            }),
            (t.prototype.checkMonsterInArea = function (e, t, o, n, a) {
                void 0 === a && (a = 35);
                var i = [];
                return (
                    this.enemyMap.forEach(function (r) {
                        var s = r.getWorldPos();
                        cc.Intersection.polygonCircle([e, t, o, n], {position: s, radius: a}) && i.push(r);
                    }),
                    this.flyEnemyMap.forEach(function (r) {
                        var s = r.getWorldPos();
                        cc.Intersection.polygonCircle([e, t, o, n], {position: s, radius: a}) && i.push(r);
                    }),
                    i
                );
            }),
            (t.prototype.checkMonsterRange = function (e, t) {
                var o = [];
                return (
                    this.enemyMap.forEach(function (n) {
                        var a = n.getWorldPos();
                        cc.Intersection.circleCircle({position: e, radius: t}, {position: a, radius: 35}) && o.push(n);
                    }),
                    this.flyEnemyMap.forEach(function (n) {
                        var a = n.getWorldPos();
                        cc.Intersection.circleCircle({position: e, radius: t}, {position: a, radius: 35}) && o.push(n);
                    }),
                    o
                );
            }),
            (t.prototype.checkBulletInArea = function (e, t, o, n, a) {
                void 0 === a && (a = 15);
                var i = [];
                return (
                    this.enemyBulletMap.forEach(function (r) {
                        if (!r.getIsBossBullet()) {
                            var s = r.getWorldPos();
                            cc.Intersection.polygonCircle([e, t, o, n], {position: s, radius: a}) && i.push(r);
                        }
                    }),
                    i
                );
            }),
            (t.prototype.checkBoxInArea = function (e, t, o, n) {
                var a = [];
                return (
                    this.boxMap.forEach(function (i) {
                        var r = i.getWorldPos();
                        cc.Intersection.polygonCircle([e, t, o, n], {position: r, radius: 35}) && a.push(i);
                    }),
                    a
                );
            }),
            (t.prototype.checkBoxRange = function (e, t) {
                var o = [];
                return (
                    this.boxMap.forEach(function (n) {
                        var a = n.getWorldPos();
                        cc.Intersection.circleCircle({position: e, radius: t}, {position: a, radius: 35}) && o.push(n);
                    }),
                    o
                );
            }),
            (t.prototype.checkInMap = function (e) {
                return this.enemyMap.has(e);
            }),
            (t._instance = null),
            (o = i([N], t))
        );
    })(cc.Component);
o.default = E;
