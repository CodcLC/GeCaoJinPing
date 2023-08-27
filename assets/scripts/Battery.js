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
var r = e("Bullet"),
    s = e("GameManager"),
    c = e("MonsterManager"),
    l = e("RoleData"),
    p = e("GameView"),
    u = e("PoolManager"),
    d = e("BatteryBullet"),
    h = e("EquipManager"),
    g = cc._decorator,
    m = g.ccclass,
    f = g.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.normalBaseNode = null),
                (t.batteryBullet = null),
                (t.normalNode = null),
                (t.normalAni = null),
                (t.normalK = null),
                (t.normalTop = null),
                (t.normalG = null),
                (t.fireAni = null),
                (t.backNormal = null),
                (t.superBaseNode = null),
                (t.superNode = null),
                (t.superAni = null),
                (t.superK = null),
                (t.superTop = null),
                (t.superG = null),
                (t.superFireAni = null),
                (t.backSuper = null),
                (t.timeProgress = null),
                (t.putBulletCd = 0),
                (t.aniEnd = !1),
                (t.radian = 0),
                (t.backAni = !1),
                (t.normalAniEnd = function () {
                    (t.normalAni.node.active = !1),
                        (t.normalTop.active = !0),
                        (t.normalG.active = !0),
                        (t.normalK.active = !0),
                        t.scheduleOnce(function () {
                            t.aniEnd = !0;
                        }, 0.2);
                }),
                (t.superAniEnd = function () {
                    (t.superAni.node.active = !1),
                        (t.superTop.active = !0),
                        (t.superG.active = !0),
                        (t.superK.active = !0),
                        t.scheduleOnce(function () {
                            t.aniEnd = !0;
                        }, 0.2);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    (this.putBulletCd = 0),
                    (this.node.active = !0),
                    (this.maxDuration = this.equipJson.duration),
                    (this.timeProgress.progress = 1),
                    this.initPosAndAngle();
            }),
            (t.prototype.initBullet = function () {
                var e = this,
                    t = this.node.getPosition(),
                    o = c.default.instance().getMinDisMonster(t);
                this.radian = o.sub(t).signAngle(cc.v2(1, 0));
                var n = (-this.radian / Math.PI) * 180 - 90,
                    a = o.sub(this.node.getPosition()).normalize(),
                    i = function () {
                        var t = u.poolMgr.getNodeFromMap(e.batteryBullet).getComponent(d.default);
                        t.init(Object.assign({}, e.equipJson));
                        var o = e.equipJson.issuper
                                ? e.superFireAni.node.convertToWorldSpaceAR(cc.Vec2.ZERO)
                                : e.fireAni.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                            i = p.default.instance().laserLayer.convertToNodeSpaceAR(o);
                        t.initPos(i, e.radian, n, a);
                    };
                this.equipJson.issuper
                    ? ((this.superK.angle = n), this.superFire(i))
                    : ((this.normalK.angle = n), this.normalFire(i));
            }),
            (t.prototype.normalFire = function (e) {
                var t = this;
                this.normalK.runAction(
                    cc.sequence(
                        cc.scaleTo(0.1, 0.9),
                        cc.scaleTo(0.1, 1),
                        cc.callFunc(function () {
                            t.normalK.stopAllActions();
                        })
                    )
                ),
                    this.normalG.runAction(
                        cc.sequence(
                            cc.scaleTo(0.1, 1.1),
                            cc.scaleTo(0.1, 1),
                            cc.callFunc(function () {
                                t.normalG.stopAllActions();
                            })
                        )
                    ),
                    this.normalTop.runAction(
                        cc.sequence(
                            cc.scaleTo(0.1, 1.1),
                            cc.callFunc(function () {
                                (t.fireAni.node.active = !0),
                                    t.fireAni.play("batteryNormalFire"),
                                    t.playEffect(),
                                    t.scheduleOnce(function () {
                                        e && e();
                                    }, 0.13),
                                    t.scheduleOnce(function () {
                                        t.fireAni.node.active = !1;
                                    }, 0.23);
                            }),
                            cc.scaleTo(0.1, 1),
                            cc.callFunc(function () {
                                t.normalTop.stopAllActions();
                            })
                        )
                    );
            }),
            (t.prototype.superFire = function (e) {
                var t = this;
                this.superK.runAction(
                    cc.sequence(
                        cc.scaleTo(0.1, 0.9),
                        cc.scaleTo(0.1, 1),
                        cc.callFunc(function () {
                            t.superK.stopAllActions();
                        })
                    )
                ),
                    this.superG.runAction(
                        cc.sequence(
                            cc.scaleTo(0.1, 1.1),
                            cc.scaleTo(0.1, 1),
                            cc.callFunc(function () {
                                t.superG.stopAllActions();
                            })
                        )
                    ),
                    this.superTop.runAction(
                        cc.sequence(
                            cc.scaleTo(0.1, 1.1),
                            cc.callFunc(function () {
                                (t.superFireAni.node.active = !0),
                                    t.superFireAni.play("batteryNormalFire"),
                                    t.playEffect(),
                                    t.scheduleOnce(function () {
                                        e && e();
                                    }, 0.13),
                                    t.scheduleOnce(function () {
                                        t.superFireAni.node.active = !1;
                                    }, 0.23);
                            }),
                            cc.scaleTo(0.1, 1),
                            cc.callFunc(function () {
                                t.superTop.stopAllActions();
                            })
                        )
                    );
            }),
            (t.prototype.initPosAndAngle = function () {
                this.node.setPosition(l.roleData.getRole().getPos()),
                    (this.node.parent = p.default.instance().laserLayer),
                    (this.isStart = !0),
                    this.equipJson.issuper
                        ? ((this.normalNode.active = !1), (this.superNode.active = !0), this.initSuper())
                        : ((this.normalNode.active = !0), (this.superNode.active = !1), this.initNormal());
            }),
            (t.prototype.initSuper = function () {
                var e = this;
                (this.superBaseNode.active = !0), (this.superBaseNode.scale = 0.4);
                var t = this.baseAni(function () {
                    (e.superAni.node.active = !0),
                        (e.superAni.getClips()[0].wrapMode = cc.WrapMode.Normal),
                        e.superAni.play("batterySuper"),
                        e.superBaseNode.stopAllActions(),
                        e.scheduleOnce(e.superAniEnd, 0.43);
                });
                this.superBaseNode.runAction(t);
            }),
            (t.prototype.initNormal = function () {
                var e = this;
                (this.normalBaseNode.active = !0), (this.normalBaseNode.scale = 0.4);
                var t = this.baseAni(function () {
                    (e.normalAni.node.active = !0),
                        (e.normalAni.getClips()[0].wrapMode = cc.WrapMode.Normal),
                        e.normalAni.play("batteryNormal"),
                        e.normalBaseNode.stopAllActions(),
                        e.scheduleOnce(e.normalAniEnd, 0.43);
                });
                this.normalBaseNode.runAction(t);
            }),
            (t.prototype.baseAni = function (e) {
                return cc.sequence(
                    cc.scaleTo(0.14, 1.1),
                    cc.scaleTo(0.068, 1),
                    cc.callFunc(function () {
                        e && e();
                    })
                );
            }),
            (t.prototype.pauseNormalAni = function () {
                this.normalBaseNode.pauseAllActions(),
                    this.normalAni.pause(),
                    this.normalTop.pauseAllActions(),
                    this.normalG.pauseAllActions(),
                    this.normalK.pauseAllActions(),
                    this.fireAni.pause(),
                    this.superBaseNode.pauseAllActions(),
                    this.superAni.pause(),
                    this.superTop.pauseAllActions(),
                    this.superG.pauseAllActions(),
                    this.superK.pauseAllActions(),
                    this.superFireAni.pause();
            }),
            (t.prototype.resumeNormalAni = function () {
                this.normalAni.resume(),
                    this.normalBaseNode.resumeAllActions(),
                    this.normalTop.resumeAllActions(),
                    this.normalG.resumeAllActions(),
                    this.normalK.resumeAllActions(),
                    this.fireAni.resume(),
                    this.superAni.resume(),
                    this.superBaseNode.resumeAllActions(),
                    this.superTop.resumeAllActions(),
                    this.superG.resumeAllActions(),
                    this.superK.resumeAllActions(),
                    this.superFireAni.resume();
            }),
            (t.prototype.backToPool = function () {
                var t = this;
                (this.normalBaseNode.active = !1),
                    (this.superBaseNode.active = !1),
                    (this.aniEnd = !1),
                    (this.normalBaseNode.scale = 0.4),
                    (this.normalAni.node.active = !1),
                    (this.normalTop.active = !1),
                    (this.normalG.active = !1),
                    (this.normalK.active = !1),
                    (this.superBaseNode.scale = 0.4),
                    (this.superAni.node.active = !1),
                    (this.superTop.active = !1),
                    (this.superG.active = !1),
                    (this.superK.active = !1),
                    (this.backAni = !0),
                    this.equipJson.issuper
                        ? ((this.backSuper.node.active = !0), this.backSuper.play("batteryBackSuper"))
                        : ((this.backNormal.node.active = !0), this.backNormal.play("batteryBackNormal")),
                    this.scheduleOnce(function () {
                        e.prototype.backToPool.call(t),
                            (t.backAni = !1),
                            (t.backNormal.node.active = !1),
                            (t.backSuper.node.active = !1);
                    }, 0.37);
            }),
            (t.prototype.update = function (e) {
                e > 0.5 ||
                    s.gameMgr.getIsPause() ||
                    (this.isStart &&
                        this.aniEnd &&
                        (this.backAni ||
                            (this.duration > this.maxDuration
                                ? this.backToPool()
                                : ((this.duration += e),
                                  (this.timeProgress.progress = 1 - this.duration / this.maxDuration),
                                  this.putBulletCd <= 0
                                      ? c.default.instance().getEnemyMap().size > 0 &&
                                        (this.initBullet(),
                                        (this.putBulletCd =
                                            this.equipJson.frequency * (1 - h.equipMgr.addFireSpeed / 100)))
                                      : (this.putBulletCd -= e)))));
            }),
            i([f(cc.Node)], t.prototype, "normalBaseNode", void 0),
            i([f(cc.Prefab)], t.prototype, "batteryBullet", void 0),
            i([f(cc.Node)], t.prototype, "normalNode", void 0),
            i([f(cc.Animation)], t.prototype, "normalAni", void 0),
            i([f(cc.Node)], t.prototype, "normalK", void 0),
            i([f(cc.Node)], t.prototype, "normalTop", void 0),
            i([f(cc.Node)], t.prototype, "normalG", void 0),
            i([f(cc.Animation)], t.prototype, "fireAni", void 0),
            i([f(cc.Animation)], t.prototype, "backNormal", void 0),
            i([f(cc.Node)], t.prototype, "superBaseNode", void 0),
            i([f(cc.Node)], t.prototype, "superNode", void 0),
            i([f(cc.Animation)], t.prototype, "superAni", void 0),
            i([f(cc.Node)], t.prototype, "superK", void 0),
            i([f(cc.Node)], t.prototype, "superTop", void 0),
            i([f(cc.Node)], t.prototype, "superG", void 0),
            i([f(cc.Animation)], t.prototype, "superFireAni", void 0),
            i([f(cc.Animation)], t.prototype, "backSuper", void 0),
            i([f(cc.ProgressBar)], t.prototype, "timeProgress", void 0),
            i([m], t)
        );
    })(r.Bullet);
o.default = y;
