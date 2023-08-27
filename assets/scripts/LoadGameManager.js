var e = require;
var t = module;
var o = exports;
var n =
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
    a =
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.loadMgr = o.LoadGameManager = void 0);
var i = e("LoadManager"),
    r = e("HeroData"),
    s = (function () {
        function e() {
            (this.zombieAtlas = null),
                (this.skillPrefabMap = new Map()),
                (this.enemyBulletMap = new Map()),
                (this.flyPrefab = null),
                (this.bossPrefabMap = new Map()),
                (this.fencePrefab = null),
                (this.expPrefab = null);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.loadEnemyBullet = function (e) {
                return n(this, void 0, void 0, function () {
                    var t;
                    return a(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return [4, i.LoadManager.loadResAwait("prefab/MonsterSkill/" + e, cc.Prefab)];
                            case 1:
                                return (t = o.sent()), this.enemyBulletMap.set(e, t), [2];
                        }
                    });
                });
            }),
            (e.prototype.getFence = function () {
                return n(this, void 0, void 0, function () {
                    var e;
                    return a(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (e = this), [4, i.LoadManager.loadResAwait("prefab/entities/fence", cc.Prefab)];
                            case 1:
                                return (e.fencePrefab = t.sent()), [2];
                        }
                    });
                });
            }),
            (e.prototype.getEnemyBullet = function (e) {
                return this.enemyBulletMap.get(e);
            }),
            (e.prototype.loadExpPrefab = function () {
                return n(this, void 0, void 0, function () {
                    var e;
                    return a(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (e = this), [4, i.LoadManager.loadResAwait("prefab/Skill/exp", cc.Prefab)];
                            case 1:
                                return (e.expPrefab = t.sent()), [2];
                        }
                    });
                });
            }),
            (e.prototype.loadMapFrame = function (e) {
                return n(this, void 0, void 0, function () {
                    return a(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, i.LoadManager.loadResAwait("texture/Map/" + e, cc.SpriteFrame)];
                            case 1:
                                return [2, t.sent()];
                        }
                    });
                });
            }),
            (e.prototype.loadGameSprite = function () {
                return n(this, void 0, void 0, function () {
                    var e,
                        t = this;
                    return a(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return this.zombieAtlas
                                    ? [3, 2]
                                    : ((e = this),
                                      [4, i.LoadManager.loadResAwait("texture/zombie/zombie", cc.SpriteAtlas)]);
                            case 1:
                                (e.zombieAtlas = o.sent()), (o.label = 2);
                            case 2:
                                return this.skillPrefabMap.size <= 0
                                    ? [4, i.LoadManager.loadResDirAwait("prefab/Skill")]
                                    : [3, 4];
                            case 3:
                                o.sent().forEach(function (e) {
                                    t.skillPrefabMap.set(e._name, e);
                                }),
                                    (o.label = 4);
                            case 4:
                                return [4, i.LoadManager.loadResAwait("prefab/entities/box", cc.Prefab)];
                            case 5:
                                return (
                                    o.sent(),
                                    [
                                        4,
                                        i.LoadManager.loadResAwait(
                                            "spine/entities/" + r.heroData.getHeroJson().skin,
                                            sp.SkeletonData
                                        )
                                    ]
                                );
                            case 6:
                                return o.sent(), [4, i.LoadManager.loadResAwait("prefab/entities/role", cc.Prefab)];
                            case 7:
                                return o.sent(), [2];
                        }
                    });
                });
            }),
            (e.prototype.loadBossPrefab = function (e, t) {
                return n(this, void 0, void 0, function () {
                    var o, n;
                    return a(this, function (a) {
                        switch (a.label) {
                            case 0:
                                return (o = "prefab/entities/" + t), [4, i.LoadManager.loadResAwait(o, cc.Prefab)];
                            case 1:
                                return (n = a.sent()), this.bossPrefabMap.set(e, n), [2, n];
                        }
                    });
                });
            }),
            (e.prototype.preloadFly = function () {
                return n(this, void 0, void 0, function () {
                    var e;
                    return a(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (
                                    (e = this), [4, i.LoadManager.preLoadResAwait("prefab/entities/flyNode", cc.Prefab)]
                                );
                            case 1:
                                return (e.flyPrefab = t.sent()), [2];
                        }
                    });
                });
            }),
            (e.prototype.loadMapPrefab = function (e) {
                return n(this, void 0, void 0, function () {
                    return a(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, i.LoadManager.loadResAwait("prefab/gameView/" + e, cc.Prefab)];
                            case 1:
                                return [2, t.sent()];
                        }
                    });
                });
            }),
            (e._instance = new e()),
            e
        );
    })();
(o.LoadGameManager = s), (o.loadMgr = s.instance());
