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
var c = e("PoolManager"),
    l = e("UIManager"),
    p = e("MonsterManager"),
    u = e("GameManager"),
    d = e("LevelManager"),
    h = e("GameComponent"),
    g = e("ViewUrl"),
    m = e("ClientEvents"),
    f = e("RoleData"),
    y = e("PlayerData"),
    v = e("JsonManager"),
    M = e("LoadManager"),
    _ = e("ExpEntities"),
    C = e("CommonUtil"),
    b = e("audioManager"),
    T = e("audioConst"),
    w = e("LoopMap"),
    N = e("MapEntities"),
    E = e("ChapterBoxManager"),
    S = e("GuideManager"),
    D = e("censtant"),
    A = e("WxManager"),
    k = cc._decorator,
    I = k.ccclass,
    R = k.property,
    L = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.roleBlood = null),
                (t.bloodLayer = null),
                (t.heroLayer = null),
                (t.monsterNode = null),
                (t.bulletNode = null),
                (t.gress = null),
                (t.level = null),
                (t.damageLayer = null),
                (t.damageLabel = null),
                (t.hpNode = null),
                (t.gameTimeLabel = null),
                (t.killNumLabel = null),
                (t.goldNumLabel = null),
                (t.shainSprite = null),
                (t.normalSprite = null),
                (t.pauseBtn = null),
                (t.bossMask = null),
                (t.bossNotice = null),
                (t.eBoomNode = null),
                (t.bossEffectLayer = null),
                (t.itemLayer = null),
                (t.knifeLayer = null),
                (t.blinkMaskNode = null),
                (t.bossHpNode = null),
                (t.bossHpMask = null),
                (t.levelPorNode = null),
                (t.levelPorBar = null),
                (t.bossIconSpirte = []),
                (t.bossIconNode = null),
                (t.levelPorLabel = null),
                (t.streakLayer = null),
                (t.rifleStreakLayer = null),
                (t.droneSteakLayer = null),
                (t.enemyBulletLayer = null),
                (t.flyEnemyLayer = null),
                (t.expLayer = null),
                (t.gasLayer = null),
                (t.bgNode = null),
                (t.laserLayer = null),
                (t.adNode = null),
                (t.seeAdNode = null),
                (t.magnetTimePro = null),
                (t.cacheMoveDir = cc.v2()),
                (t.cacheRadian = 0),
                (t.tweenArr = []),
                (t.isDoing = !1),
                (t.gressAnim = null),
                (t.magicNode = null),
                (t.shieldNode = null),
                (t.knifeNode = []),
                (t.blinkTween = !1),
                (t.scaleTime = 0),
                (t.scaleValue = 0),
                (t._demageNormalColors = []),
                (t.speed = 1),
                (t.canGetMagnet = !1),
                (t.showMagnet = function () {
                    A.wxMgr.setMagnetTime(),
                        (t.adNode.active = !0),
                        t.scheduleOnce(function () {
                            (t.adNode.x += 250),
                                (t.adNode.opacity = 255),
                                (t.canGetMagnet = !0),
                                t.adNode.runAction(cc.moveBy(0.3, -250, 0).easing(cc.easeCircleActionOut())),
                                (t.magnetTimePro.progress = 1),
                                t.schedule(t.adProgress, 1);
                        }, 0.1);
                }),
                (t.adProgress = function () {
                    (t.magnetTimePro.progress -= Number(v.JsonMgr.getDefineConstantByName("MagnetAdTime")) / 100),
                        t.magnetTimePro.progress <= 0 && (t.unschedule(t.adProgress), t.closeAdNode());
                }),
                (t.seeAd = function () {
                    t.canGetMagnet &&
                        A.wxMgr.createVideo(
                            {openUi: t.getUrl(), placementName: "AdMagnet", level: y.playData.getLevel()},
                            function () {},
                            function () {
                                t.closeAdNode(), w.default.instance().getAllExp();
                            }
                        );
                }),
                (t.gameTimer = function () {
                    u.gameMgr.getIsPause() ||
                        p.default.instance().hasBoss ||
                        (u.gameMgr.time++,
                        u.gameMgr.time === t.scaleTime && l.UIMgr.scaleCamera(t.scaleValue),
                        u.gameMgr.time >= d.levelMgr.getNowTime() &&
                            (d.levelMgr.addTimeIndex(),
                            p.default.instance().createAllMonster(),
                            u.gameMgr.time > 900 && t.stopTimer()),
                        d.levelMgr.checkTimeDoEvent(u.gameMgr.time),
                        E.ChapterBoxMgr.checkTimeDoEvent(u.gameMgr.time),
                        t.refreshTimeLabel(),
                        t.addGameProgress(),
                        u.gameMgr.time >= f.roleData.getRole().getMoveEffectOverTime() &&
                            f.roleData.getRole().stopMoveEffect());
                }),
                (t.stopTimer = function () {
                    t.unschedule(t.gameTimer);
                }),
                (t.addGameProgress = function () {
                    var e = d.levelMgr.maxTime;
                    (t.levelPorLabel.string = ((u.gameMgr.time / e) * 100).toFixed(0) + "%"),
                        (t.levelPorBar.fillRange = u.gameMgr.time / e);
                }),
                (t.initBossPos = function () {
                    t.levelPorNode.removeAllChildren();
                    var e = d.levelMgr.maxTime,
                        o = d.levelMgr.eventMap,
                        n = function (o, n) {
                            var a = (Number(o.data[0]) / Number(e)) * t.levelPorNode.width,
                                i = cc.instantiate(t.bossIconNode.node);
                            (i.getComponent(cc.Sprite).spriteFrame = t.bossIconSpirte[n]),
                                i.setPosition(a, i.y),
                                t.levelPorNode.addChild(i),
                                (i.active = !0);
                        };
                    o.forEach(function (t, o) {
                        2 === t.type && n(t, o >= e - 10 ? 1 : 0);
                    });
                }),
                (t.resumeTimer = function () {
                    p.default.instance().hasBoss || t.schedule(t.gameTimer, t.speed);
                }),
                (t.setLevelAndBar = function () {
                    var e = f.roleData.getRole(),
                        o = e.getRoleLevel();
                    t.level.string = o.level.toString();
                    var n = e.getNowExp() / o.exp;
                    n = n > 1 ? 1 : n;
                    var a = cc
                        .tween(t.gress.node)
                        .to(0.032, {width: 630 * n}, {easing: cc.easing.cubicOut})
                        .call(function () {
                            var e;
                            t.tweenArr.splice(0, 1),
                                null === (e = t.tweenArr[0]) || void 0 === e || e.start(),
                                t.tweenArr.length <= 0 && (t.isDoing = !1);
                        });
                    t.tweenArr.push(a), t.isDoing || ((t.isDoing = !0), t.tweenArr[0].start());
                }),
                (t.refreshKillLabel = function () {
                    var e = y.playData.getKillNum();
                    t.killNumLabel.string = e.toString();
                }),
                (t.refreshGoldLabel = function () {
                    var e = u.gameMgr.getGold();
                    t.goldNumLabel.string = e.toString();
                }),
                (t.startProgressAnim = function () {
                    (t.gress.spriteFrame = t.shainSprite),
                        (t.gressAnim = new cc.Tween(t.gress.node)
                            .to(0.5, {color: new cc.Color().fromHEX("#ff7e00")})
                            .to(0.5, {color: new cc.Color().fromHEX("#9000ff")})
                            .to(0.5, {color: new cc.Color().fromHEX("#0078ff")})
                            .union()
                            .repeatForever()
                            .start());
                }),
                (t.stopProgressAnim = function () {
                    t.gressAnim && t.gressAnim.stop(),
                        (t.gress.spriteFrame = t.normalSprite),
                        (t.gress.node.color = cc.Color.WHITE);
                }),
                (t.onBossComing = function () {
                    cc.Tween.stopAllByTarget(t.bossMask),
                        (t.bossMask.active = !0),
                        cc
                            .tween(t.bossMask)
                            .to(0.05, {opacity: 100})
                            .to(0.05, {opacity: 255})
                            .union()
                            .repeat(20)
                            .call(function () {
                                t.bossMask.active = !1;
                            })
                            .start(),
                        cc.Tween.stopAllByTarget(t.bossNotice),
                        (t.bossNotice.active = !0),
                        (t.bossNotice.opacity = 100),
                        cc
                            .tween(t.bossNotice)
                            .to(0.5, {opacity: 255})
                            .to(0.5, {opacity: 100})
                            .union()
                            .repeat(2)
                            .call(function () {
                                t.bossNotice.active = !1;
                            })
                            .start();
                }),
                (t.blinkMask = function () {
                    t.blinkTween ||
                        ((t.blinkMaskNode.active = !0),
                        (t.blinkMaskNode.opacity = 0),
                        (t.blinkTween = !0),
                        cc
                            .tween(t.blinkMaskNode)
                            .by(0.27, {opacity: 255}, {easing: cc.easing.sineOut})
                            .delay(0.1)
                            .by(0.53, {opacity: -255}, {easing: cc.easing.sineOut})
                            .call(function () {
                                (t.blinkTween = !1), (t.blinkMaskNode.active = !1);
                            })
                            .start());
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
                var e = this,
                    t = this.node.data,
                    n = cc.instantiate(t.mapPrefab);
                this.bgNode.addChild(n), (n.data = t.map), (N.default.instance().expLayer = this.expLayer);
                var a = v.JsonMgr.getDefineConstantByName("FightZoomsOut").split("|");
                (this.scaleTime = Number(a[0])),
                    (this.scaleValue = Number(a[1])),
                    this.initDemageColor(),
                    u.gameMgr.setIsPause(!1),
                    (this.bossMask.active = !1),
                    (this.bossNotice.active = !1);
                var i = l.UIMgr.getRoleCamera();
                i.setPosition(cc.v2(0, 0)),
                    (i.getComponent(cc.Camera).zoomRatio = 1),
                    this.refreshTimeLabel(),
                    (o._instance = this),
                    l.UIMgr.setCanvas(this.node),
                    this.pauseBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        y.playData.getNewUserStep() <= S.GUIDE_STEP.FIRSTGAME ||
                            (b.audioMgr.startEffect(T.AudioConst.COMMON_TOUCH), l.UIMgr.showView(g.ViewUrl.pauseView));
                    }),
                    this.addEvent(m.ClientEvents.REFRESH_KILL_LABEL.on(this.refreshKillLabel)),
                    this.addEvent(m.ClientEvents.REFRESH_GOLD_LABEL.on(this.refreshGoldLabel)),
                    this.addEvent(m.ClientEvents.END_GAME.on(this.stopTimer)),
                    this.addEvent(m.ClientEvents.RESUME_GAME.on(this.resumeTimer)),
                    this.addEvent(m.ClientEvents.START_GRESS_SHAIN.on(this.startProgressAnim)),
                    this.addEvent(m.ClientEvents.STOP_GRESS_SHAIN.on(this.stopProgressAnim)),
                    this.addEvent(
                        m.ClientEvents.CHANGE_HP_LAYER.on(function (t) {
                            e.changeHpNodeLayer(t);
                        })
                    ),
                    this.addEvent(m.ClientEvents.SHOW_CLEAR_BLINK.on(this.blinkMask)),
                    this.addEvent(m.ClientEvents.BOSS_COMING.on(this.onBossComing)),
                    this.addEvent(m.ClientEvents.SHOW_MAGNET.on(this.showMagnet)),
                    this.seeAdNode.on(cc.Node.EventType.TOUCH_END, this.seeAd);
            }),
            (t.prototype.closeAdNode = function () {
                var e = this;
                this.unschedule(this.adProgress),
                    (this.canGetMagnet = !1),
                    this.adNode.runAction(
                        cc.sequence(
                            cc.moveBy(0.3, 250, 0).easing(cc.easeCircleActionOut()),
                            cc.callFunc(function () {
                                (e.adNode.x -= 250),
                                    (e.adNode.opacity = 0),
                                    (e.adNode.active = !1),
                                    m.ClientEvents.RESET_AD.emit(),
                                    A.wxMgr.setMagnetTime();
                            })
                        )
                    );
            }),
            (t.prototype.resetSpeed = function (e) {
                this.speed = e;
            }),
            (t.prototype.addChildToHeroNode = function (e) {
                e.parent = this.heroLayer;
            }),
            (t.prototype.getMonsterNode = function () {
                return this.monsterNode;
            }),
            (t.prototype.getBulletNode = function () {
                return this.bulletNode;
            }),
            (t.prototype.start = function () {
                return r(this, void 0, void 0, function () {
                    var e,
                        t,
                        o = this;
                    return s(this, function (n) {
                        switch (n.label) {
                            case 0:
                                (u.gameMgr.battleCdTimer = 0),
                                    this.schedule(this.gameTimer, this.speed),
                                    (e = cc.resources.get("prefab/entities/role", cc.Prefab)),
                                    c.poolMgr.getNodeFromMap(e).getComponent("RoleEntity").init(),
                                    (t = 0),
                                    (n.label = 1);
                            case 1:
                                return t < 10 ? [4, this.dropInitExp()] : [3, 4];
                            case 2:
                                n.sent(), (n.label = 3);
                            case 3:
                                return t++, [3, 1];
                            case 4:
                                return (
                                    this.scheduleOnce(function () {
                                        return r(o, void 0, void 0, function () {
                                            return s(this, function (e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return [4, p.default.instance().createAllMonster()];
                                                    case 1:
                                                        return e.sent(), [2];
                                                }
                                            });
                                        });
                                    }, 0.1),
                                    y.playData.getNewUserStep() === S.GUIDE_STEP.FIRSTGAME &&
                                        (l.UIMgr.showControlGuide(), u.gameMgr.setIsPause(!0)),
                                    f.roleData.getRole().clearFoodGrowth(),
                                    f.roleData.getRole().resetEffect(),
                                    f.roleData.getRole().onLifeChange(),
                                    this.initBossPos(),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (t.prototype.dropInitExp = function () {
                return r(this, void 0, void 0, function () {
                    var e, t, o, n, a;
                    return s(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return [4, M.LoadManager.loadResAwait("prefab/Skill/exp", cc.Prefab)];
                            case 1:
                                return (
                                    (e = i.sent()),
                                    (t = c.poolMgr.getNodeFromMap(e))
                                        .getComponent(_.default)
                                        .setSprite({id: 1004, value: 10}),
                                    (o = f.roleData.getRole().getPos()),
                                    (n = C.CommonUtil.getRangeCloseNum(-200, 200)),
                                    (a = C.CommonUtil.getRangeCloseNum(-200, -100)),
                                    t.setPosition(o.x + n, o.y + a),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (t.prototype.dropInitBox = function () {
                return r(this, void 0, void 0, function () {
                    var e, t, o, n, a;
                    return s(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return [4, M.LoadManager.loadResAwait("prefab/Skill/exp", cc.Prefab)];
                            case 1:
                                return (
                                    (e = i.sent()),
                                    (t = c.poolMgr.getNodeFromMap(e))
                                        .getComponent(_.default)
                                        .setSprite({id: 1006, value: 1}),
                                    (o = f.roleData.getRole().getPos()),
                                    (n = C.CommonUtil.getRangeCloseNum(-200, 200)),
                                    (a = C.CommonUtil.getRangeCloseNum(-200, -100)),
                                    t.setPosition(o.x + n, o.y + a),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (t.prototype.setCacheMoveDir = function (e) {
                this.cacheMoveDir = e;
            }),
            (t.prototype.getCacheMoveDir = function () {
                return this.cacheMoveDir;
            }),
            (t.prototype.setCacheRadian = function (e) {
                this.cacheRadian = e;
            }),
            (t.prototype.getCacheRadian = function () {
                return this.cacheRadian;
            }),
            (t.prototype.addDamageLabel = function (e, t, o, n) {
                if (y.playData.getSettingDamage()) {
                    var a = c.poolMgr.getNodeFromMap(this.damageLabel);
                    (a.parent = this.damageLayer),
                        (a.getChildByName("bg").active = t),
                        (a.getChildByName("txt").getComponent(cc.Label).string = o.toFixed(0)),
                        (a.getChildByName("txt").color = a.color.fromHEX(this._getDamageLabelColor(e, o))),
                        a.getComponent(cc.Layout).updateLayout(),
                        (a.position = this.damageLayer.convertToNodeSpaceAR(cc.v3(n.x, n.y + 30, 0)));
                    var i = cc.tween;
                    i(a)
                        .parallel(i().by(0.5, {y: 60}), i().delay(0.2).to(0.3, {opacity: 0}))
                        .call(function () {
                            c.poolMgr.putNodeToPool(a), (a.opacity = 255);
                        })
                        .start();
                }
            }),
            (t.prototype._getDamageLabelColor = function (e, t) {
                var o = "#ffffff";
                if (e == D.DamageType.Recovery) o = "#3AFF2D";
                else if (e == D.DamageType.Burn) o = "#e3590d";
                else if (e == D.DamageType.Attacked)
                    for (var n = 0; n < this._demageNormalColors.length; n++) {
                        var a = this._demageNormalColors[n];
                        if (Math.abs(t) >= a.value) {
                            o = a.color;
                            break;
                        }
                    }
                return o;
            }),
            (t.prototype.getUrl = function () {
                return g.ViewUrl.gameScene;
            }),
            (t.prototype.refreshTimeLabel = function () {
                this.gameTimeLabel.string = u.gameMgr.getLabelTimeNum();
            }),
            (t.prototype.changeHpNodeLayer = function (e) {
                (this.hpNode.group = e), (this.level.node.group = e);
            }),
            (t.prototype.showBossHp = function (e) {
                void 0 === e && (e = !0),
                    (this.hpNode.active = !e),
                    (this.level.node.active = !e),
                    (this.bossHpNode.active = e),
                    e && (this.bossHpMask.width = 0);
            }),
            (t.prototype.setBossHpChange = function (e, t) {
                e >= 1 ? (e = 1) : e <= 0 && (t && t(), (e = 0)), (this.bossHpMask.width = 640 * (1 - e));
            }),
            (t.prototype.initDemageColor = function () {
                for (var e = v.JsonMgr.getDefineConstantByName("ValueTextColor").split(","), t = 0; t < e.length; t++) {
                    var o = e[t].split("|"),
                        n = {value: Number(o[0]), color: String(o[1])};
                    this._demageNormalColors.push(n);
                }
            }),
            (t._instance = null),
            i([R(cc.Node)], t.prototype, "roleBlood", void 0),
            i([R(cc.Node)], t.prototype, "bloodLayer", void 0),
            i([R(cc.Node)], t.prototype, "heroLayer", void 0),
            i([R(cc.Node)], t.prototype, "monsterNode", void 0),
            i([R(cc.Node)], t.prototype, "bulletNode", void 0),
            i([R(cc.Sprite)], t.prototype, "gress", void 0),
            i([R(cc.Label)], t.prototype, "level", void 0),
            i([R(cc.Node)], t.prototype, "damageLayer", void 0),
            i([R(cc.Prefab)], t.prototype, "damageLabel", void 0),
            i([R(cc.Node)], t.prototype, "hpNode", void 0),
            i([R(cc.Label)], t.prototype, "gameTimeLabel", void 0),
            i([R(cc.Label)], t.prototype, "killNumLabel", void 0),
            i([R(cc.Label)], t.prototype, "goldNumLabel", void 0),
            i([R(cc.SpriteFrame)], t.prototype, "shainSprite", void 0),
            i([R(cc.SpriteFrame)], t.prototype, "normalSprite", void 0),
            i([R(cc.Node)], t.prototype, "pauseBtn", void 0),
            i([R(cc.Node)], t.prototype, "bossMask", void 0),
            i([R(cc.Node)], t.prototype, "bossNotice", void 0),
            i([R(cc.Node)], t.prototype, "eBoomNode", void 0),
            i([R(cc.Node)], t.prototype, "bossEffectLayer", void 0),
            i([R(cc.Node)], t.prototype, "itemLayer", void 0),
            i([R(cc.Node)], t.prototype, "knifeLayer", void 0),
            i([R(cc.Node)], t.prototype, "blinkMaskNode", void 0),
            i([R(cc.Node)], t.prototype, "bossHpNode", void 0),
            i([R(cc.Node)], t.prototype, "bossHpMask", void 0),
            i([R(cc.Node)], t.prototype, "levelPorNode", void 0),
            i([R(cc.Sprite)], t.prototype, "levelPorBar", void 0),
            i([R([cc.SpriteFrame])], t.prototype, "bossIconSpirte", void 0),
            i([R(cc.Sprite)], t.prototype, "bossIconNode", void 0),
            i([R(cc.Label)], t.prototype, "levelPorLabel", void 0),
            i([R(cc.Node)], t.prototype, "streakLayer", void 0),
            i([R(cc.Node)], t.prototype, "rifleStreakLayer", void 0),
            i([R(cc.Node)], t.prototype, "droneSteakLayer", void 0),
            i([R(cc.Node)], t.prototype, "enemyBulletLayer", void 0),
            i([R(cc.Node)], t.prototype, "flyEnemyLayer", void 0),
            i([R(cc.Node)], t.prototype, "expLayer", void 0),
            i([R(cc.Node)], t.prototype, "gasLayer", void 0),
            i([R(cc.Node)], t.prototype, "bgNode", void 0),
            i([R(cc.Node)], t.prototype, "laserLayer", void 0),
            i([R(cc.Node)], t.prototype, "adNode", void 0),
            i([R(cc.Node)], t.prototype, "seeAdNode", void 0),
            i([R(cc.ProgressBar)], t.prototype, "magnetTimePro", void 0),
            (o = i([I], t))
        );
    })(h.GameComponent);
o.default = L;
