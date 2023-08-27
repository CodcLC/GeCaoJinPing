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
Object.defineProperty(o, "__esModule", {value: !0}), (o.SkillType = o.EquipType = void 0);
var c,
    l = e("Shield"),
    p = e("LoadGameManager"),
    u = e("GameView"),
    d = e("EquipManager"),
    h = e("RoleData"),
    g = e("PoolManager"),
    m = e("CommonUtil"),
    f = e("MonsterManager"),
    y = e("MagicField"),
    v = cc._decorator.ccclass,
    M = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.hasMagicEquip = !1),
                (t.stopLoadSword = !1),
                (t.hasLoadLeftDrone = !1),
                (t.hasLoadRightDrone = !1),
                (t.hasShield = !1),
                (t.shield = null),
                (t.offsetArr = [20, 10, 0, -10, -20]),
                (t.doHowitzer = function (e) {
                    h.roleData.getRole().downCdBullet(), (t.offsetArr = [20, 10, 0, -10, -20]);
                    var o = t.getEquipAmount(e);
                    o = o > 5 ? 5 : o;
                    var n = (-u.default.instance().getCacheRadian() / Math.PI) * 180 - 90;
                    t.offsetArr[2] = n;
                    for (var a = 1; a <= o; a++) {
                        var i = 2;
                        1 != a &&
                            (a % 2 == 0
                                ? ((i = 2 - a / 2), (t.offsetArr[i] = t.offsetArr[i] + n))
                                : ((i = 2 + Math.floor(a / 2)), (t.offsetArr[i] = t.offsetArr[i] + n))),
                            t.bulletInit(e, "Howitzer", t.offsetArr[i]);
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
            (t.prototype.onLoad = function () {
                o._instance = this;
            }),
            (t.prototype.getHasShield = function () {
                return this.hasShield;
            }),
            (t.prototype.setHasShield = function (e) {
                this.hasShield = e;
            }),
            (t.prototype.shieldOnDamage = function (e) {
                var t = this.shield.getComponent(l.default).onDamage(e);
                return t || ((this.hasShield = !1), (this.shield = null)), t;
            }),
            (t.prototype.loadShield = function (e) {
                this.hasShield = !0;
                var t = p.loadMgr.skillPrefabMap.get("shield"),
                    o = g.poolMgr.getNodeFromMap(t),
                    n = o.getComponent(l.default);
                (this.shield = n),
                    u.default.instance().eBoomNode.addChild(o),
                    o.setPosition(h.roleData.getRole().getPos()),
                    n.init(0.2 * e * (d.equipMgr.shieldAddPercent / 100 + 1));
            }),
            (t.prototype.recoveryShield = function (e) {
                this.hasShield && this.shield.recoverShield(e);
            }),
            (t.prototype.loadWeapon = function (e) {
                switch (e.type) {
                    case c.kn:
                        this.initRoleEquip(e);
                        break;
                    case c.magicField:
                        this.magicField(e);
                        break;
                    case c.sword:
                        this.stopLoadSword || (e.issuper && (this.stopLoadSword = !0), this.loadSword(e));
                        break;
                    case c.chicken:
                        this.loadChicken(e);
                        break;
                    case c.eBoom:
                        this.loadExBoom(e);
                        break;
                    case c.cyclotron:
                        this.loadCyclotron(e);
                        break;
                    case c.compoundBow:
                        this.loadBow(e);
                        break;
                    case c.rifle:
                        this.loadRifle(e);
                        break;
                    case c.voice:
                        this.loadVoice(e);
                        break;
                    case c.fireBall:
                        this.loadFireBall(e);
                        break;
                    case c.wx:
                        this.loadGPS(e);
                        break;
                    case c.frozen:
                        this.loadFrozen(e);
                        break;
                    case c.tennis:
                        this.loadTennis(e);
                        break;
                    case c.droneA:
                    case c.droneB:
                        this.loadDrone(e);
                        break;
                    case c.blade:
                        this.loadBlade(e);
                        break;
                    case c.shikari:
                        this.loadShikari(e);
                }
            }),
            (t.prototype.bulletInit = function (e, t, o) {
                var n = p.loadMgr.skillPrefabMap.get(e.itemicon);
                g.poolMgr.getNodeFromMap(n).getComponent(t).init(e, o);
            }),
            (t.prototype.initRoleEquip = function (e) {
                e.id < 20001
                    ? this.kw(e)
                    : e.id < 30001
                    ? this.initKnife(e)
                    : e.id < 40001
                    ? this.initHowitzer(e)
                    : e.id < 50001
                    ? this.initLaser(e)
                    : e.id < 60001
                    ? this.initBattery(e)
                    : e.id < 70001 && this.initRail(e);
            }),
            (t.prototype.kw = function (e) {
                var t = this;
                if (e.issuper) this.bulletInit(e, "KuNai");
                else
                    for (var o = 0; o < this.getEquipAmount(e); o++)
                        this.scheduleOnce(function () {
                            t.bulletInit(e, "KuNai");
                        }, 0.2 * o);
            }),
            (t.prototype.initKnife = function (e) {
                this.bulletInit(e, "Knife");
            }),
            (t.prototype.initHowitzer = function (e) {
                var t = this;
                this.doHowitzer(e),
                    this.schedule(
                        function () {
                            t.doHowitzer(e);
                        },
                        0.3,
                        3
                    );
            }),
            (t.prototype.loadSuperHowitzer = function (e) {
                for (
                    var t = function (t) {
                            o.scheduleOnce(function () {
                                var o = p.loadMgr.skillPrefabMap.get(e.itemicon);
                                g.poolMgr
                                    .getNodeFromMap(o)
                                    .getComponent("Howitzer")
                                    .initSuper(e, (36 * t * Math.PI) / 180);
                            }, 0.1 * (t + 1));
                        },
                        o = this,
                        n = 0;
                    n < 10;
                    n++
                )
                    t(n);
            }),
            (t.prototype.initLaser = function (e) {
                if (e.issuper) {
                    var t = p.loadMgr.skillPrefabMap.get(e.itemicon);
                    g.poolMgr.getNodeFromMap(t).getComponent("Laser").init(e);
                } else {
                    this.offsetArr = [10, 5, 0, -5, -10];
                    var o = this.getEquipAmount(e);
                    o = o > 5 ? 5 : o;
                    var n = (-u.default.instance().getCacheRadian() / Math.PI) * 180 - 90;
                    this.offsetArr[2] = n;
                    for (var a = 1; a <= o; a++) {
                        var i = 2;
                        1 != a &&
                            (a % 2 == 0
                                ? ((i = 2 - a / 2), (this.offsetArr[i] = this.offsetArr[i] + n))
                                : ((i = 2 + Math.floor(a / 2)), (this.offsetArr[i] = this.offsetArr[i] + n))),
                            this.bulletInit(e, "Laser", this.offsetArr[i]);
                    }
                }
            }),
            (t.prototype.initBattery = function (e) {
                for (var t = this, o = 0; o < this.getEquipAmount(e); o++)
                    this.scheduleOnce(function () {
                        t.bulletInit(e, "Battery");
                    }, 0.5 * o);
            }),
            (t.prototype.initRail = function (e) {
                for (var t = this, o = 0; o < e.amount; o++)
                    this.scheduleOnce(function () {
                        t.bulletInit(e, "Railgun");
                    }, 0.5 * o);
            }),
            (t.prototype.loadBow = function (e) {
                var t = this;
                if (e.issuper) {
                    var o = f.default.instance().getMinDisMonster(),
                        n = h.roleData.getRole().getPos(),
                        a = [],
                        i = (-cc.v2(o.x - n.x, o.y - n.y).signAngle(cc.v2(1, 0)) / Math.PI) * 180 - 90;
                    a.push(i + 40), a.push(i + 20), a.push(i), a.push(i - 20), a.push(i - 40);
                    for (var r = 0; r < e.amount; r++) {
                        var s = p.loadMgr.skillPrefabMap.get(e.itemicon);
                        g.poolMgr.getNodeFromMap(s).getComponent("CompoundBow").initSuper(e, a[r]);
                    }
                } else
                    for (r = 0; r < this.getEquipAmount(e); r++)
                        this.scheduleOnce(function () {
                            t.bulletInit(e, "CompoundBow");
                        }, 0.3 * r);
            }),
            (t.prototype.loadGPS = function (e) {
                for (var t = this, o = 0; o < this.getEquipAmount(e); o++)
                    this.scheduleOnce(function () {
                        return r(t, void 0, void 0, function () {
                            return s(this, function () {
                                return this.bulletInit(e, "Ridden"), [2];
                            });
                        });
                    }, 0.2 * o);
            }),
            (t.prototype.loadDrone = function (e) {
                if (e.type === c.droneA) {
                    if (this.hasLoadLeftDrone) return;
                    this.hasLoadLeftDrone = !0;
                } else {
                    if (this.hasLoadRightDrone) return;
                    this.hasLoadRightDrone = !0;
                }
                var t = p.loadMgr.skillPrefabMap.get("wurenjia");
                g.poolMgr.getNodeFromMap(t).getComponent("Unmanned").init(e);
            }),
            (t.prototype.loadFrozen = function (e) {
                for (var t = this, o = 0; o < this.getEquipAmount(e); o++)
                    this.scheduleOnce(function () {
                        t.bulletInit(e, "FrozenBeam");
                    }, 0.15 * o);
            }),
            (t.prototype.loadCyclotron = function (e) {
                for (var t = this, o = 0; o < this.getEquipAmount(e); o++)
                    this.scheduleOnce(function () {
                        t.bulletInit(e, "Cyclotron");
                    }, 0.3 * o);
            }),
            (t.prototype.magicField = function (e) {
                if (!this.hasMagicEquip) {
                    this.hasMagicEquip = !0;
                    var t = p.loadMgr.skillPrefabMap.get(e.itemicon),
                        o = cc.instantiate(t);
                    u.default.instance().eBoomNode.addChild(o),
                        o.setPosition(this.node.getPosition()),
                        o.getComponent(y.default).initArms(e);
                }
            }),
            (t.prototype.loadSword = function (e) {
                var t = this.getEquipAmount(e);
                t = t > 6 ? 6 : t;
                for (var o = 0; o < t; o++) {
                    var n = p.loadMgr.skillPrefabMap.get(e.itemicon),
                        a = g.poolMgr.getNodeFromMap(n);
                    h.roleData.getRole().bulletNode.addChild(a),
                        a.getComponent("Sword").initSword(e, ((360 / t) * o * Math.PI) / 180);
                }
            }),
            (t.prototype.loadChicken = function (e) {
                var t = this;
                if (e.issuper)
                    for (var o = 0; o < e.amount; o++) {
                        var n = p.loadMgr.skillPrefabMap.get(e.itemicon);
                        g.poolMgr
                            .getNodeFromMap(n)
                            .getComponent("Chicken")
                            .initSuperChicken(e, ((360 / e.amount) * o * Math.PI) / 180);
                    }
                else
                    for (o = 0; o < this.getEquipAmount(e); o++)
                        this.scheduleOnce(function () {
                            t.bulletInit(e, "Chicken");
                        }, 0.2 * o);
            }),
            (t.prototype.loadTennis = function (e) {
                for (var t = this, o = 0; o < this.getEquipAmount(e); o++)
                    this.scheduleOnce(function () {
                        t.bulletInit(e, "Tennis");
                    }, 0.3 * o);
            }),
            (t.prototype.loadRifle = function (e) {
                var t = this;
                if (e.issuper) this.bulletInit(e, "Rifle");
                else
                    for (var o = 0; o < this.getEquipAmount(e); o++)
                        this.scheduleOnce(function () {
                            t.bulletInit(e, "Rifle");
                        }, 0.2 * o);
            }),
            (t.prototype.loadVoice = function (e) {
                var t = this;
                if (e.issuper) this.bulletInit(e, "Voice");
                else
                    for (var o = 0; o < this.getEquipAmount(e); o++)
                        this.scheduleOnce(function () {
                            t.bulletInit(e, "Voice");
                        }, 0.2 * o);
            }),
            (t.prototype.loadFireBall = function (e) {
                for (var t = this, o = 0; o < this.getEquipAmount(e); o++)
                    this.scheduleOnce(function () {
                        t.bulletInit(e, "FireBall");
                    }, 0.15 * o);
            }),
            (t.prototype.loadExBoom = function (e) {
                var t = this,
                    o = h.roleData.getRole().bulletNode;
                if (e.issuper)
                    for (
                        var n = function (n) {
                                a.scheduleOnce(function () {
                                    return r(t, void 0, void 0, function () {
                                        var t, a;
                                        return s(this, function () {
                                            return (
                                                (t = p.loadMgr.skillPrefabMap.get(e.itemicon)),
                                                (a = g.poolMgr.getNodeFromMap(t)),
                                                o.addChild(a),
                                                a
                                                    .getComponent("ElBoom")
                                                    .initEBoom(e, ((360 / e.amount) * n * Math.PI) / 180),
                                                [2]
                                            );
                                        });
                                    });
                                }, 0.1 * n);
                            },
                            a = this,
                            i = 0;
                        i < e.amount;
                        i++
                    )
                        n(i);
                else {
                    var c = m.CommonUtil.getRangeCloseNum(0, 359);
                    for (i = 0; i < e.amount; i++) {
                        var l = p.loadMgr.skillPrefabMap.get(e.itemicon),
                            u = g.poolMgr.getNodeFromMap(l);
                        o.addChild(u),
                            u.getComponent("ElBoom").initEBoom(e, (((360 / e.amount) * i - c) * Math.PI) / 180);
                    }
                }
            }),
            (t.prototype.loadBlade = function (e) {
                for (
                    var t = this,
                        o = function (o) {
                            n.scheduleOnce(function () {
                                t.bulletInit(e, "Blade", o % 2 == 0 ? 1 : -1);
                            }, 0.3 * o);
                        },
                        n = this,
                        a = 0;
                    a < this.getEquipAmount(e);
                    a++
                )
                    o(a);
            }),
            (t.prototype.loadShikari = function (e) {
                for (var t = this, o = 0; o < (e.issuper ? e.amount : this.getEquipAmount(e)); o++)
                    this.scheduleOnce(function () {
                        t.bulletInit(e, "Shikari");
                    }, 0.4 * o);
            }),
            (t.prototype.getEquipAmount = function (e) {
                return h.roleData.getRole().getEquipAmount(e);
            }),
            (t._instance = null),
            (o = i([v], t))
        );
    })(cc.Component);
(o.default = M),
    (function (e) {
        (e[(e.kn = 1)] = "kn"),
            (e[(e.magicField = 2)] = "magicField"),
            (e[(e.sword = 3)] = "sword"),
            (e[(e.chicken = 4)] = "chicken"),
            (e[(e.eBoom = 5)] = "eBoom"),
            (e[(e.cyclotron = 6)] = "cyclotron"),
            (e[(e.compoundBow = 7)] = "compoundBow"),
            (e[(e.rifle = 8)] = "rifle"),
            (e[(e.voice = 9)] = "voice"),
            (e[(e.fireBall = 10)] = "fireBall"),
            (e[(e.wx = 11)] = "wx"),
            (e[(e.frozen = 12)] = "frozen"),
            (e[(e.tennis = 13)] = "tennis"),
            (e[(e.droneA = 14)] = "droneA"),
            (e[(e.droneB = 15)] = "droneB"),
            (e[(e.blade = 16)] = "blade"),
            (e[(e.shikari = 17)] = "shikari");
    })((c = o.EquipType || (o.EquipType = {}))),
    (function (e) {
        (e[(e.cd = 101)] = "cd"),
            (e[(e.speed = 102)] = "speed"),
            (e[(e.health = 103)] = "health"),
            (e[(e.addExp = 104)] = "addExp"),
            (e[(e.duration = 105)] = "duration"),
            (e[(e.might = 106)] = "might"),
            (e[(e.recovery = 107)] = "recovery"),
            (e[(e.magnet = 108)] = "magnet"),
            (e[(e.armor = 109)] = "armor"),
            (e[(e.area = 110)] = "area"),
            (e[(e.moveSpeed = 111)] = "moveSpeed"),
            (e[(e.amount = 112)] = "amount"),
            (e[(e.addGold = 113)] = "addGold"),
            (e[(e.crit = 114)] = "crit"),
            (e[(e.repel = 115)] = "repel");
    })(o.SkillType || (o.SkillType = {}));
