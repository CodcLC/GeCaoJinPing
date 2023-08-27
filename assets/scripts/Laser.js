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
    s = e("RoleData"),
    c = e("GameView"),
    l = e("UIManager"),
    p = e("GameManager"),
    u = e("MonsterManager"),
    d = e("EquipManager"),
    h = e("audioManager"),
    g = e("JsonManager"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.normalNode = null),
                (t.normalOutLight = null),
                (t.normalMidLight = null),
                (t.normalAniNode = null),
                (t.normalChangeOutNode = null),
                (t.normalChangeMidNode = null),
                (t.lightAni = null),
                (t.changeLightAni = null),
                (t.superNode = null),
                (t.superAnimation = null),
                (t.biu = null),
                (t.superOutLightNode = null),
                (t.superOutMidNode = null),
                (t.radian = 0),
                (t.moveDir = cc.v2()),
                (t.startPos = null),
                (t.hasStop = !1),
                (t.superIsStart = !1),
                (t.doAttack = function (e) {
                    var o, n, a, i;
                    if (!p.gameMgr.getIsPause())
                        if (t.equipJson.issuper)
                            (o = t.superOutLightNode.convertToWorldSpaceAR(cc.v2(0, t.superOutLightNode.height / 2))),
                                (a = t.superOutLightNode.convertToWorldSpaceAR(
                                    cc.v2(t.superOutLightNode.width, t.superOutLightNode.height / 2)
                                )),
                                (n = t.superOutLightNode.convertToWorldSpaceAR(
                                    cc.v2(0, t.superOutLightNode.height / 2)
                                )),
                                (i = t.superOutLightNode.convertToWorldSpaceAR(
                                    cc.v2(t.superOutLightNode.width, -t.superOutLightNode.height / 2)
                                )),
                                t.attack(o, a, n, i, e);
                        else {
                            var r, s, c, l;
                            (o = t.normalOutLight.convertToWorldSpaceAR(cc.v2(0, t.normalOutLight.height / 2))),
                                (a = t.normalOutLight.convertToWorldSpaceAR(
                                    cc.v2(t.normalOutLight.width, t.normalOutLight.height / 2)
                                )),
                                (n = t.normalOutLight.convertToWorldSpaceAR(cc.v2(0, -t.normalOutLight.height / 2))),
                                (i = t.normalOutLight.convertToWorldSpaceAR(
                                    cc.v2(t.normalOutLight.width, -t.normalOutLight.height / 2)
                                )),
                                (r = t.normalChangeOutNode.convertToWorldSpaceAR(
                                    cc.v2(0, t.normalChangeOutNode.height / 2)
                                )),
                                (s = t.normalChangeOutNode.convertToWorldSpaceAR(
                                    cc.v2(t.normalChangeOutNode.width, t.normalChangeOutNode.height / 2)
                                )),
                                (c = t.normalChangeOutNode.convertToWorldSpaceAR(
                                    cc.v2(0, -t.normalChangeOutNode.height / 2)
                                )),
                                (l = t.normalChangeOutNode.convertToWorldSpaceAR(
                                    cc.v2(t.normalChangeOutNode.width, -t.normalChangeOutNode.height / 2)
                                )),
                                t.attack(o, a, n, i),
                                t.attack(r, c, s, l);
                        }
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t, o) {
                e.prototype.init.call(this, t),
                    (this.node.scale = 1),
                    (this.isStart = !0),
                    this.initPos(o),
                    c.default.instance().laserLayer.addChild(this.node),
                    this.equipJson.issuper ? this.initSuper() : this.initNormal();
            }),
            (t.prototype.initPos = function (e) {
                var t = s.roleData.getRole().getPos();
                if ((this.node.setPosition(t), (this.startPos = t.clone()), this.equipJson.issuper))
                    (this.radian = c.default.instance().getCacheRadian()),
                        (this.node.angle = (-this.radian / Math.PI) * 180),
                        (this.moveDir = c.default.instance().getCacheMoveDir()),
                        0 === this.radian && (this.moveDir = cc.v2(1, 0));
                else {
                    (this.radian = ((e + 90) / 180) * Math.PI), (this.node.angle = e + 90);
                    var o = Math.cos(this.radian),
                        n = Math.sin(this.radian);
                    this.moveDir = cc.v2(o, n).normalize();
                }
            }),
            (t.prototype.initSuper = function () {
                var e = l.UIMgr.getRoleCamera(),
                    t = e.getComponent(cc.Camera).zoomRatio,
                    o = e.height / 2 / t,
                    n = e.width / 2 / t;
                (this.superOutLightNode.width = Math.sqrt(o * o + n * n)),
                    (this.superOutMidNode.width = this.superOutLightNode.width - 40),
                    (this.normalNode.active = !1),
                    (this.superNode.active = !0),
                    this.biu.play("biu"),
                    this.superAnimation.play("laserSuper"),
                    this.playAudioEff(),
                    this.setSuperAniTransform();
            }),
            (t.prototype.setSuperAniTransform = function () {
                var e = this;
                (this.superOutLightNode.scaleY = 0),
                    this.superOutLightNode.runAction(
                        cc.sequence(
                            cc.delayTime(0.033),
                            cc.callFunc(function () {
                                (e.superOutLightNode.scaleY = 1), (e.superIsStart = !0);
                            }),
                            cc.repeat(
                                cc.sequence(
                                    cc.delayTime(0.035),
                                    cc.callFunc(function () {
                                        e.superOutLightNode.scaleY = 3.8;
                                    }),
                                    cc.delayTime(0.1),
                                    cc.callFunc(function () {
                                        e.superOutLightNode.scaleY = 4;
                                    }),
                                    cc.delayTime(0.035),
                                    cc.callFunc(function () {
                                        e.superOutLightNode.scaleY = 3.8;
                                    }),
                                    cc.delayTime(0.1),
                                    cc.callFunc(function () {
                                        e.superOutLightNode.scaleY = 4;
                                    })
                                ),
                                12
                            ),
                            cc.scaleTo(0.2, 1, 0.1),
                            cc.callFunc(function () {
                                (e.superIsStart = !1), e.backToPool();
                            })
                        )
                    );
            }),
            (t.prototype.initNormal = function () {
                (this.normalNode.active = !0), (this.superNode.active = !1), this.analyseLen(), this.showNormalAni();
            }),
            (t.prototype.playAudioEff = function () {
                var e = this.equipJson.audioid;
                e && h.audioMgr.startEffect(g.JsonMgr.getAudioById(e).audioname);
            }),
            (t.prototype.analyseLen = function () {
                var e = s.roleData.getRole().getWorldPosition(),
                    t = l.UIMgr.getRoleCamera(),
                    o = t.getComponent(cc.Camera).zoomRatio;
                0 === this.moveDir.x
                    ? this.xZero(t, e, o)
                    : 0 === this.moveDir.y
                    ? this.yZero(t, e, o)
                    : this.moveDir.x > 0 && this.moveDir.y > 0
                    ? this.firstDirection(t, o, e)
                    : this.moveDir.x < 0 && this.moveDir.y > 0
                    ? this.secondDirection(t, o, e)
                    : this.moveDir.x < 0 && this.moveDir.y < 0
                    ? this.thirdDirection(t, o, e)
                    : this.moveDir.x > 0 && this.moveDir.y < 0 && this.forthDirection(t, o, e);
            }),
            (t.prototype.xZero = function (e, t, o) {
                var n, a, i;
                if (this.moveDir.y > 0)
                    (a = (r = e.convertToWorldSpaceAR(cc.v2(0, e.height / 2 / o))).y),
                        (i = r.y - e.convertToWorldSpaceAR(cc.v2(0, -e.height / 2 / o)).y),
                        (n = r.y - t.y);
                else {
                    var r = e.convertToWorldSpaceAR(cc.v2(0, -e.height / 2 / o));
                    (i = Math.abs(r.y - e.convertToWorldSpaceAR(cc.v2(0, e.height / 2 / o)).y)),
                        (a = r.y),
                        (n = r.y - t.y);
                }
                (this.normalOutLight.width = n), (this.normalMidLight.width = n - 40);
                var s = t.x;
                this.getLightNodePos(s, a),
                    (this.normalChangeOutNode.width = i),
                    (this.normalChangeMidNode.width = this.normalChangeOutNode.width - 40),
                    (this.normalChangeOutNode.angle = 180);
            }),
            (t.prototype.yZero = function (e, t, o) {
                var n, a, i;
                if (this.moveDir.x > 0)
                    (i =
                        (r = e.convertToWorldSpaceAR(cc.v2(e.width / 2 / o, 0))).x -
                        e.convertToWorldSpaceAR(cc.v2(-e.width / 2 / o, 0)).x),
                        (a = r.x),
                        (n = r.x - t.x);
                else {
                    var r = e.convertToWorldSpaceAR(cc.v2(-e.width / 2 / o, 0));
                    (i = Math.abs(r.x - e.convertToWorldSpaceAR(cc.v2(e.width / 2 / o, 0)).x)),
                        (a = r.x),
                        (n = r.x - t.x);
                }
                (this.normalOutLight.width = n), (this.normalMidLight.width = n - 40);
                var s = t.y;
                this.getLightNodePos(a, s),
                    (this.normalChangeOutNode.width = i),
                    (this.normalChangeMidNode.width = this.normalChangeOutNode.width - 40),
                    (this.normalChangeOutNode.angle = 180);
            }),
            (t.prototype.firstDirection = function (e, t, o) {
                var n = e.convertToWorldSpaceAR(cc.v2(e.width / 2 / t, e.height / 2 / t)),
                    a = e.convertToWorldSpaceAR(cc.v2(-e.width / 2 / t, -e.height / 2 / t)),
                    i = n.x,
                    r = n.y;
                if (this.getXLimitPos(i, o).y > n.y) {
                    this.normalChangeOutNode.angle = -2 * this.node.angle;
                    var s = r - o.y;
                    this.getLightNodePos(o.x + this.yAnalyseX(s), r), this.setSecondLenByY(cc.v2(a.x, a.y));
                } else {
                    var c = i - o.x;
                    (this.normalChangeOutNode.angle = 180 - 2 * this.node.angle),
                        this.getLightNodePos(i + 20, o.y + this.xAnalyseY(c)),
                        this.setSecondLenByX(a);
                }
            }),
            (t.prototype.setSecondLenByX = function (e) {
                var t = this.normalChangeOutNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    o = e.x - t.x,
                    n = (o / -this.moveDir.x) * this.moveDir.y;
                (this.normalChangeOutNode.width = Math.sqrt(o * o + n * n) + 20),
                    (this.normalChangeMidNode.width = this.normalChangeOutNode.width - 40);
            }),
            (t.prototype.setSecondLenByY = function (e) {
                var t = this.normalChangeOutNode.convertToWorldSpaceAR(cc.Vec2.ZERO).y - e.y,
                    o = (t / -this.moveDir.y) * this.moveDir.x;
                (this.normalChangeOutNode.width = Math.sqrt(o * o + t * t) + 20),
                    (this.normalChangeMidNode.width = this.normalChangeOutNode.width - 40);
            }),
            (t.prototype.secondDirection = function (e, t, o) {
                var n = e.convertToWorldSpaceAR(cc.v2(-e.width / 2 / t, e.height / 2 / t)),
                    a = e.convertToWorldSpaceAR(cc.v2(e.width / 2 / t, -e.height / 2 / t)),
                    i = n.x,
                    r = n.y;
                if (this.getXLimitPos(i, o).y > n.y) {
                    var s = r - o.y;
                    (this.normalChangeOutNode.angle = -2 * this.node.angle),
                        this.getLightNodePos(o.x + this.yAnalyseX(s), r),
                        this.setSecondLenByY(a);
                } else {
                    var c = i - o.x;
                    (this.normalChangeOutNode.angle = -2 * this.node.angle - 180),
                        this.getLightNodePos(i - 20, o.y + this.xAnalyseY(c)),
                        this.setSecondLenByX(a);
                }
            }),
            (t.prototype.thirdDirection = function (e, t, o) {
                var n = e.convertToWorldSpaceAR(cc.v2(-e.width / 2 / t, -e.height / 2 / t)),
                    a = e.convertToWorldSpaceAR(cc.v2(e.width / 2 / t, e.height / 2 / t)),
                    i = n.x,
                    r = n.y;
                if (this.getXLimitPos(i, o).y < n.y) {
                    var s = r - o.y;
                    (this.normalChangeOutNode.angle = -2 * this.node.angle),
                        this.getLightNodePos(o.x + this.yAnalyseX(s), r),
                        this.setSecondLenByY(a);
                } else {
                    var c = i - o.x;
                    (this.normalChangeOutNode.angle = -2 * this.node.angle - 180),
                        this.getLightNodePos(i - 20, o.y + this.xAnalyseY(c)),
                        this.setSecondLenByX(a);
                }
            }),
            (t.prototype.forthDirection = function (e, t, o) {
                var n = e.convertToWorldSpaceAR(cc.v2(e.width / 2 / t, -e.height / 2 / t)),
                    a = e.convertToWorldSpaceAR(cc.v2(-e.width / 2 / t, e.height / 2 / t)),
                    i = n.x,
                    r = n.y;
                if (this.getXLimitPos(i, o).y < n.y) {
                    var s = r - o.y;
                    (this.normalChangeOutNode.angle = -2 * this.node.angle),
                        this.getLightNodePos(o.x + this.yAnalyseX(s), r),
                        this.setSecondLenByY(a);
                } else {
                    var c = i - o.x;
                    (this.normalChangeOutNode.angle = 180 - 2 * this.node.angle),
                        this.getLightNodePos(i + 20, o.y + this.xAnalyseY(c)),
                        this.setSecondLenByX(a);
                }
            }),
            (t.prototype.getXLimitPos = function (e, t) {
                var o = (e - t.x) / this.moveDir.x,
                    n = this.moveDir.y * o,
                    a = t.y + n;
                return cc.v2(e, a);
            }),
            (t.prototype.getLightNodePos = function (e, t) {
                var o = this.normalNode.parent.convertToNodeSpaceAR(cc.v2(e, t));
                this.normalChangeOutNode.setPosition(o);
            }),
            (t.prototype.xAnalyseY = function (e) {
                var t = e / this.moveDir.x,
                    o = this.moveDir.y * t;
                return (
                    (this.normalOutLight.width = Math.sqrt(e * e + o * o) + 20),
                    (this.normalMidLight.width = this.normalOutLight.width - 40),
                    o
                );
            }),
            (t.prototype.yAnalyseX = function (e) {
                var t = e / this.moveDir.y,
                    o = this.moveDir.x * t;
                return (
                    (this.normalOutLight.width = Math.sqrt(o * o + e * e) + 20),
                    (this.normalMidLight.width = this.normalOutLight.width - 40),
                    o
                );
            }),
            (t.prototype.showNormalAni = function () {
                var e = this;
                this.normalAniNode.play("laserBegain"),
                    this.lightAni.play("laserLightAni"),
                    this.changeLightAni.play("laserLightAni"),
                    (this.normalChangeOutNode.active = !0),
                    (this.normalChangeMidNode.active = !0),
                    this.playAudioEff(),
                    this.scheduleOnce(function () {
                        (e.normalOutLight.scaleY = e.normalChangeOutNode.scaleY = 0.5),
                            e.normalOutLight.runAction(e.lightAction(e.normalOutLight)),
                            e.normalChangeOutNode.runAction(e.lightAction(e.normalChangeOutNode));
                    }, 0.033);
            }),
            (t.prototype.lightAction = function (e) {
                var t = this;
                return cc.sequence(
                    cc.delayTime(0.033),
                    cc.callFunc(function () {
                        e.scaleY = 0.8;
                    }),
                    cc.delayTime(0.066),
                    cc.callFunc(function () {
                        (e.scaleY = 1), t.doAttack();
                    }),
                    cc.delayTime(0.066),
                    cc.callFunc(function () {
                        e.scaleY = 0.6;
                    }),
                    cc.spawn(cc.fadeTo(0.13, 140), cc.scaleTo(0.099, 1, 0.6)),
                    cc.scaleTo(0.099, 1, 0.1),
                    cc.callFunc(function () {
                        t.backToPool(), t.stopAllAni(), (t.hasStop = !1);
                    })
                );
            }),
            (t.prototype.backToPool = function () {
                e.prototype.backToPool.call(this), this.damageEnemy.clear();
                var t = this.equipJson.audioid;
                t && h.audioMgr.stopEffectByName(g.JsonMgr.getAudioById(t).audioname);
            }),
            (t.prototype.stopAllAni = function () {
                this.equipJson.issuper
                    ? (this.superAnimation.stop(), this.biu.stop(), this.superOutLightNode.stopAllActions())
                    : (this.normalAniNode.stop(),
                      this.lightAni.stop("laserLightAni"),
                      this.changeLightAni.stop("laserLightAni"),
                      this.normalOutLight.stopAllActions(),
                      this.normalChangeOutNode.stopAllActions());
            }),
            (t.prototype.pauseAni = function () {
                this.equipJson.issuper
                    ? (this.superAnimation.pause(), this.biu.pause(), this.superOutLightNode.pauseAllActions())
                    : (this.normalAniNode.pause(),
                      this.lightAni.pause("laserLightAni"),
                      this.changeLightAni.pause("laserLightAni"),
                      this.normalOutLight.pauseAllActions(),
                      this.normalChangeOutNode.pauseAllActions());
                var e = this.equipJson.audioid;
                e && h.audioMgr.pauseEffect(g.JsonMgr.getAudioById(e).audioname);
            }),
            (t.prototype.resumeAni = function () {
                this.equipJson.issuper
                    ? (this.superAnimation.resume(), this.biu.resume(), this.superOutLightNode.resumeAllActions())
                    : (this.normalAniNode.resume(),
                      this.lightAni.resume("laserLightAni"),
                      this.changeLightAni.resume("laserLightAni"),
                      this.normalOutLight.resumeAllActions(),
                      this.normalChangeOutNode.resumeAllActions());
                var e = this.equipJson.audioid;
                e && h.audioMgr.resumeEffect(g.JsonMgr.getAudioById(e).audioname);
            }),
            (t.prototype.attack = function (e, t, o, n, a) {
                var i = this;
                u.default
                    .instance()
                    .checkMonsterInArea(e, t, o, n)
                    .forEach(function (e) {
                        var t = e.getTag(),
                            o = i.damageEnemy.get(t);
                        if (o) (o -= a) < 0 || "number" != typeof o ? i.damageEnemy.delete(t) : i.damageEnemy.set(t, o);
                        else {
                            var n = i.equipJson.hitcolor.split(",");
                            e.onDamage(
                                i.getDamage(),
                                0,
                                new cc.Color(Number(n[0]), Number(n[1]), Number(n[2])),
                                Number(n[3])
                            ),
                                d.equipMgr.laserFiring &&
                                    d.equipMgr.laserFiring.damagePercent &&
                                    e.onFiringDamage(
                                        Math.floor(i.getDamage().damage * (d.equipMgr.laserFiring.damagePercent / 100)),
                                        d.equipMgr.laserFiring.time
                                    ),
                                i.damageEnemy.set(t, i.equipJson.frequency);
                        }
                    }),
                    u.default
                        .instance()
                        .checkBoxInArea(e, t, o, n)
                        .forEach(function (e) {
                            e.brokenAniPlay();
                        });
            }),
            (t.prototype.update = function (e) {
                p.gameMgr.getIsPause()
                    ? this.hasStop || ((this.hasStop = !0), this.pauseAni())
                    : (this.hasStop && ((this.hasStop = !1), this.resumeAni()),
                      this.equipJson.issuper && this.initPos(null),
                      this.superIsStart && this.doAttack(e));
            }),
            i([y(cc.Node)], t.prototype, "normalNode", void 0),
            i([y(cc.Node)], t.prototype, "normalOutLight", void 0),
            i([y(cc.Node)], t.prototype, "normalMidLight", void 0),
            i([y(cc.Animation)], t.prototype, "normalAniNode", void 0),
            i([y(cc.Node)], t.prototype, "normalChangeOutNode", void 0),
            i([y(cc.Node)], t.prototype, "normalChangeMidNode", void 0),
            i([y(cc.Animation)], t.prototype, "lightAni", void 0),
            i([y(cc.Animation)], t.prototype, "changeLightAni", void 0),
            i([y(cc.Node)], t.prototype, "superNode", void 0),
            i([y(cc.Animation)], t.prototype, "superAnimation", void 0),
            i([y(cc.Animation)], t.prototype, "biu", void 0),
            i([y(cc.Node)], t.prototype, "superOutLightNode", void 0),
            i([y(cc.Node)], t.prototype, "superOutMidNode", void 0),
            i([f], t)
        );
    })(r.Bullet);
o.default = v;
