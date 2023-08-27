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
    s = e("GameView"),
    c = e("RoleData"),
    l = e("GameManager"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.normalNode = null),
                (t.flTop = null),
                (t.flDown = null),
                (t.midNode = null),
                (t.superNode = null),
                (t.normalFrame = null),
                (t.initFrame = null),
                (t.ballNode = []),
                (t.fourLine = []),
                (t.midLine = []),
                (t.checkArea = null),
                (t.radian = 0),
                (t.moveDir = cc.v2()),
                (t.hasStop = !1),
                (t.firstHasStart = !1),
                (t.normalHasStart = !1),
                (t.openEnd = !1),
                (t.openDt = 0),
                (t.superStart = !1),
                (t.checkDamageCd = function () {
                    t.schedule(t.doAttack, 0.1);
                }),
                (t.doAttack = function () {
                    l.gameMgr.getIsPause() ||
                        (t.downCd(0.1),
                        t.equipJson.issuper
                            ? (t.checkAreaDamage(t.equipJson.frequency, t.checkArea),
                              t.ballNode.forEach(function (e) {
                                  t.checkRangeDamage(100, t.equipJson.frequency, e.node);
                              }))
                            : (t.checkAreaDamage(t.equipJson.frequency, t.midNode.node),
                              t.openEnd &&
                                  (t.checkAreaDamage(t.equipJson.frequency, t.flTop.node),
                                  t.checkAreaDamage(t.equipJson.frequency, t.flDown.node))),
                        (t.duration += 0.1),
                        t.duration >= t.maxDuration &&
                            (t.equipJson.issuper
                                ? t.node.runAction(
                                      cc.sequence(
                                          cc.fadeOut(0.2),
                                          cc.callFunc(function () {
                                              t.unschedule(t.doAttack), t.backToPool();
                                          })
                                      )
                                  )
                                : (t.unschedule(t.doAttack), t.backToPool())));
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    (this.duration = 0),
                    this.equipJson.issuper ? ((this.node.angle = 0), this.superInit()) : this.initNormal(),
                    (this.isStart = !0);
            }),
            (t.prototype.initNormal = function () {
                (this.normalNode.node.active = !0),
                    (this.superNode.node.active = !1),
                    (this.radian = s.default.instance().getCacheRadian()),
                    (this.moveDir = s.default.instance().getCacheMoveDir()),
                    0 === this.radian && (this.moveDir = cc.v2(0, 1)),
                    (this.node.angle = (-this.radian / Math.PI) * 180);
                var e = c.roleData.getRole().getPos();
                this.node.setPosition(e.x, e.y), (this.node.parent = s.default.instance().eBoomNode);
            }),
            (t.prototype.stopAllAction = function () {
                this.equipJson.issuper
                    ? this.node.pauseAllActions()
                    : (this.normalNode.pause(), this.midNode.node.pauseAllActions());
            }),
            (t.prototype.resumeAction = function () {
                this.equipJson.issuper
                    ? this.node.resumeAllActions()
                    : (this.normalNode.resume(), this.midNode.node.resumeAllActions());
            }),
            (t.prototype.backToPool = function () {
                (this.normalHasStart = !1),
                    (this.flDown.node.active = this.flTop.node.active = !1),
                    (this.flDown.node.scale = this.flTop.node.scale = this.midNode.node.scale = 1),
                    (this.openEnd = !1),
                    (this.openDt = 0),
                    (this.hasStop = !1),
                    (this.firstHasStart = !1),
                    (this.superStart = !1),
                    (this.midNode.node.getComponent(cc.Sprite).spriteFrame = this.initFrame),
                    this.midNode.stop("railNoarmalAni"),
                    this.superInit(),
                    e.prototype.backToPool.call(this),
                    (this.node.opacity = 255);
            }),
            (t.prototype.superInit = function () {
                (this.normalNode.node.active = !1), (this.superNode.node.active = !0);
                var e = [cc.v2(0, 30), cc.v2(-20, 0), cc.v2(0, -30), cc.v2(20, 0)];
                this.ballNode.forEach(function (t, o) {
                    (t.node.scale = 0.3), t.node.setPosition(e[o]);
                }),
                    this.fourLine.forEach(function (e) {
                        (e.node.scaleX = 0.4), (e.node.active = !1);
                    }),
                    this.midLine.forEach(function (e) {
                        (e.node.scaleX = 0.4), (e.node.active = !1);
                    }),
                    this.node.setPosition(c.roleData.getRole().getPos()),
                    (this.node.parent = s.default.instance().eBoomNode),
                    this.superNode.play("SuperRailGun"),
                    this.superStartAni();
            }),
            (t.prototype.midNodeOpen = function () {
                var e = this;
                if (!this.firstHasStart) {
                    (this.firstHasStart = !0),
                        (this.midNode.node.getComponent(cc.Sprite).spriteFrame = this.normalFrame),
                        (this.midNode.node.scale = 0.3);
                    var t = 1.2 * this.area;
                    this.midNode.node.runAction(
                        cc.sequence(
                            cc.scaleTo(0.08, t, t),
                            cc.callFunc(function () {
                                e.midNode.play("railNoarmalAni"),
                                    (e.duration = 0),
                                    e.checkDamageCd(),
                                    (e.normalHasStart = !0),
                                    (e.flDown.node.active = e.flTop.node.active = !0),
                                    e.normalNode.play("normalRailGun");
                            })
                        )
                    );
                }
            }),
            (t.prototype.superStartAni = function () {
                var e = this;
                this.node.runAction(
                    cc.sequence(
                        cc.delayTime(0.18),
                        cc.callFunc(function () {
                            e.ballNode.forEach(function (e) {
                                e.play("superAni");
                            });
                        }),
                        cc.delayTime(0.1),
                        cc.callFunc(function () {
                            e.fourLine.forEach(function (e) {
                                (e.node.active = !0), e.play("railLine");
                            }),
                                (e.superStart = !0),
                                e.checkDamageCd();
                        }),
                        cc.delayTime(0.17),
                        cc.callFunc(function () {
                            e.midLine.forEach(function (e) {
                                (e.node.active = !0), e.play("railLine");
                            });
                        })
                    )
                );
            }),
            (t.prototype.update = function (e) {
                var t = this;
                if (l.gameMgr.getIsPause()) this.hasStop || (this.stopAllAction(), (this.hasStop = !0));
                else if ((this.hasStop && (this.resumeAction(), (this.hasStop = !1)), this.equipJson.issuper)) {
                    if (this.superStart) return;
                } else if (this.normalHasStart) {
                    if (this.openEnd) return;
                    (this.openDt += e),
                        this.openDt >= 0.27 &&
                            ((this.openEnd = !0),
                            this.flTop.play("railNoarmalAni"),
                            this.flDown.play("railNoarmalAni"));
                } else if (this.duration <= 0.3) {
                    if (this.isStart) {
                        var o = this.node.x + this.moveDir.x * this.speed * e * 65,
                            n = this.node.y + this.moveDir.y * this.speed * e * 65;
                        this.node.setPosition(o, n),
                            (this.duration += e),
                            this.checkAreaDamage(
                                1,
                                this.midNode.node,
                                35,
                                !1,
                                null,
                                function () {
                                    t.midNodeOpen();
                                },
                                function () {
                                    t.midNodeOpen();
                                }
                            );
                    }
                } else this.midNodeOpen();
            }),
            i([d(cc.Animation)], t.prototype, "normalNode", void 0),
            i([d(cc.Animation)], t.prototype, "flTop", void 0),
            i([d(cc.Animation)], t.prototype, "flDown", void 0),
            i([d(cc.Animation)], t.prototype, "midNode", void 0),
            i([d(cc.Animation)], t.prototype, "superNode", void 0),
            i([d(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([d(cc.SpriteFrame)], t.prototype, "initFrame", void 0),
            i([d(cc.Animation)], t.prototype, "ballNode", void 0),
            i([d(cc.Animation)], t.prototype, "fourLine", void 0),
            i([d(cc.Animation)], t.prototype, "midLine", void 0),
            i([d(cc.Node)], t.prototype, "checkArea", void 0),
            i([u], t)
        );
    })(r.Bullet);
o.default = h;
