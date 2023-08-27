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
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.icon = null),
                (t.normalFrame = null),
                (t.superFrame = null),
                (t.outNormalBig = null),
                (t.outNormalSmall = null),
                (t.outSuperBig = null),
                (t.outSuperSmall = null),
                (t.lineShikari = null),
                (t.superLineShikari = null),
                (t.shikari = null),
                (t.superShikari = null),
                (t.allParent = null),
                (t.hasStop = !1),
                (t.moveDir = null),
                (t.lineTween = null),
                (t.superLineTween = null),
                (t.outBigTween = null),
                (t.outSmallTween = null),
                (t.outSuperBigTween = null),
                (t.outSuperSmallTween = null),
                (t.parentTween = null),
                (t.radian = 0),
                (t.endPos = null),
                (t.startPos = null),
                (t.midPos = null),
                (t.doAttack = function () {
                    var e, o, n, a;
                    s.gameMgr.getIsPause() ||
                        (t.equipJson.issuper
                            ? ((e = t.superShikari.convertToWorldSpaceAR(
                                  cc.v2(t.superShikari.width, -t.superShikari.height)
                              )),
                              (n = t.shikari.convertToWorldSpaceAR(cc.v2(t.shikari.width, t.shikari.height))),
                              (o = t.superShikari.convertToWorldSpaceAR(
                                  cc.v2(t.superShikari.width, t.superShikari.height)
                              )),
                              (a = t.shikari.convertToWorldSpaceAR(cc.v2(t.shikari.width, -t.shikari.height))))
                            : ((e = t.shikari.convertToWorldSpaceAR(cc.v2(0, t.shikari.height / 2))),
                              (n = t.shikari.convertToWorldSpaceAR(cc.v2(t.shikari.width, t.shikari.height / 2))),
                              (o = t.shikari.convertToWorldSpaceAR(cc.v2(0, -t.shikari.height / 2))),
                              (a = t.shikari.convertToWorldSpaceAR(cc.v2(t.shikari.width, -t.shikari.height / 2)))),
                        c.default
                            .instance()
                            .checkMonsterInArea(e, n, o, a)
                            .forEach(function (e) {
                                var o = e.getTag(),
                                    n = t.damageEnemy.get(o);
                                if (n) (n -= 0.1) <= 0 ? t.damageEnemy.delete(o) : t.damageEnemy.set(o, n);
                                else {
                                    var a = t.equipJson.hitcolor.split(",");
                                    e.onDamage(
                                        t.getDamage(),
                                        0,
                                        new cc.Color(Number(a[0]), Number(a[1]), Number(a[2])),
                                        Number(a[3])
                                    ),
                                        t.damageEnemy.set(o, t.equipJson.frequency);
                                }
                            }),
                        c.default
                            .instance()
                            .checkBoxInArea(e, n, o, a)
                            .forEach(function (e) {
                                e.brokenAniPlay();
                            }));
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    (this.node.scale = 1),
                    (this.outSuperBig.scale =
                        this.outSuperSmall.scale =
                        this.outNormalBig.scale =
                        this.outNormalSmall.scale =
                            1),
                    (this.outSuperBig.active =
                        this.outSuperSmall.active =
                        this.outNormalBig.active =
                        this.outNormalSmall.active =
                            !1),
                    (this.outSuperBig.opacity =
                        this.outSuperSmall.opacity =
                        this.outNormalBig.opacity =
                        this.outNormalSmall.opacity =
                            255),
                    (this.superLineShikari.opacity = this.lineShikari.opacity = 255);
                var o = c.default.instance().getMinDisMonster(),
                    n = l.roleData.getRole().getPos();
                (this.radian = o.sub(n).signAngle(cc.v2(1, 0))),
                    (this.moveDir = o.sub(n).normalize()),
                    (this.node.parent = p.default.instance().getBulletNode()),
                    this.node.setPosition(l.roleData.getRole().getPos()),
                    (this.startPos = cc.v2(this.node.x, this.node.y)),
                    (this.endPos = cc.v2(
                        this.startPos.x + 100 * this.moveDir.x,
                        this.startPos.y + 100 * this.moveDir.y
                    )),
                    (this.midPos = cc.v2(
                        (this.startPos.x + this.endPos.x) / 2,
                        (this.startPos.y + this.endPos.y) / 2 + 30
                    )),
                    this.node.setPosition(cc.v2(n.x, n.y)),
                    this.moveTween(),
                    this.equipJson.issuper
                        ? this.initSuperPro()
                        : (this.initNormalPro(),
                          (this.lineShikari.angle =
                              this.outNormalBig.angle =
                              this.outNormalSmall.angle =
                                  (-this.radian / Math.PI) * 180));
            }),
            (t.prototype.moveTween = function () {
                var e = this;
                this.icon.node.runAction(cc.rotateBy(0.4, 360)),
                    this.node.runAction(
                        cc.sequence(
                            cc.bezierTo(0.4, [this.startPos, this.midPos, this.endPos]),
                            cc.scaleTo(0.096, 1.2, 0.7).easing(cc.easeQuadraticActionInOut()),
                            cc.scaleTo(0.064, 1, 1).easing(cc.easeQuadraticActionInOut()),
                            cc.callFunc(function () {
                                (e.outNormalBig.active = e.outNormalSmall.active = !0),
                                    e.aniNode.play("shikari"),
                                    e.equipJson.issuper
                                        ? ((e.outSuperSmall.active = e.outSuperBig.active = !0), e.playSuperAni())
                                        : e.playLineAni();
                            })
                        )
                    );
            }),
            (t.prototype.playLineAni = function () {
                var e = this;
                this.node.runAction(
                    cc.sequence(
                        cc.delayTime(0.1),
                        cc.callFunc(function () {
                            e.doAttack();
                        })
                    )
                ),
                    (this.lineTween = cc
                        .tween(this.lineShikari)
                        .to(0.1, {scale: 1})
                        .to(0.064, {scaleY: 1.1})
                        .to(0.064, {scaleY: 1})
                        .to(0.064, {scaleY: 1.2})
                        .to(0.064, {scaleY: 1})
                        .call(function () {
                            (e.outBigTween = cc.tween(e.outNormalBig).to(0.16, {scale: 0, opacity: 0}).start()),
                                (e.outSmallTween = cc.tween(e.outNormalSmall).to(0.16, {scale: 0, opacity: 0}).start());
                        })
                        .to(0.16, {scaleY: 0, opacity: 0})
                        .call(function () {
                            e.node.runAction(
                                cc.sequence(
                                    cc.scaleTo(0.2, 0.7, 1.3).easing(cc.easeQuadraticActionInOut()),
                                    cc.callFunc(function () {
                                        e.backToPool(), (e.lineTween = null), (e.hasStop = !1);
                                    }),
                                    cc.callFunc(function () {
                                        e.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.rotateTo(0.1, 1.2)));
                                    })
                                )
                            );
                        })
                        .start());
            }),
            (t.prototype.playSuperAni = function () {
                var e = this;
                this.node.runAction(
                    cc.sequence(
                        cc.delayTime(0.1),
                        cc.callFunc(function () {
                            e.schedule(e.doAttack, 0.1);
                        })
                    )
                ),
                    (this.superLineTween = cc
                        .tween(this.superLineShikari)
                        .to(0.1, {scale: 1})
                        .repeat(
                            6,
                            cc
                                .tween()
                                .to(0.064, {scaleY: 1.1})
                                .to(0.064, {scaleY: 1})
                                .to(0.064, {scaleY: 1.2})
                                .to(0.064, {scaleY: 1})
                        )
                        .delay(0.2)
                        .to(0.16, {scaleY: 0, opacity: 0})
                        .call(function () {
                            e.superLineTween = null;
                        })
                        .start()),
                    (this.lineTween = cc
                        .tween(this.lineShikari)
                        .to(0.1, {scale: 1})
                        .repeat(
                            6,
                            cc
                                .tween()
                                .to(0.064, {scaleY: 1.1})
                                .to(0.064, {scaleY: 1})
                                .to(0.064, {scaleY: 1.2})
                                .to(0.064, {scaleY: 1})
                        )
                        .delay(0.2)
                        .call(function () {
                            (e.outBigTween = cc.tween(e.outNormalBig).to(0.16, {scale: 0, opacity: 0}).start()),
                                (e.outSmallTween = cc.tween(e.outNormalSmall).to(0.16, {scale: 0, opacity: 0}).start()),
                                (e.outSuperBigTween = cc.tween(e.outSuperBig).to(0.16, {scale: 0, opacity: 0}).start()),
                                (e.outSuperSmallTween = cc
                                    .tween(e.outSuperSmall)
                                    .to(0.16, {scale: 0, opacity: 0})
                                    .start());
                        })
                        .to(0.16, {scaleY: 0, opacity: 0})
                        .call(function () {
                            e.node.runAction(
                                cc.sequence(
                                    cc.scaleTo(0.1, 0.8, 1.2).easing(cc.easeQuadraticActionInOut()),
                                    cc.scaleTo(0.1, 0.2, 0.2),
                                    cc.callFunc(function () {
                                        e.backToPool(), (e.lineTween = null), (e.hasStop = !1);
                                    })
                                )
                            ),
                                e.unscheduleAllCallbacks(),
                                e.allParent.stopAllActions();
                        })
                        .start()),
                    this.allParent.runAction(cc.rotateBy(2, 180));
            }),
            (t.prototype.initSuperPro = function () {
                (this.superLineShikari.active = this.lineShikari.active = !0),
                    (this.lineShikari.angle =
                        this.outNormalBig.angle =
                        this.outNormalSmall.angle =
                        this.allParent.angle =
                            0),
                    (this.icon.spriteFrame = this.superFrame),
                    (this.outSuperBig.color =
                        this.outNormalBig.color =
                        this.superShikari.color =
                        this.shikari.color =
                            new cc.Color(246, 47, 0));
            }),
            (t.prototype.initNormalPro = function () {
                (this.icon.spriteFrame = this.normalFrame),
                    (this.lineShikari.active = !0),
                    (this.outNormalBig.color = this.shikari.color = new cc.Color(251, 206, 16));
            }),
            (t.prototype.backToPool = function () {
                var t, o, n, a, i, r, s;
                e.prototype.backToPool.call(this),
                    this.damageEnemy.clear(),
                    null === (t = this.outBigTween) || void 0 === t || t.stop(),
                    null === (o = this.outSuperBigTween) || void 0 === o || o.stop(),
                    null === (n = this.outSmallTween) || void 0 === n || n.stop(),
                    null === (a = this.outSuperSmallTween) || void 0 === a || a.stop(),
                    (this.outBigTween = null),
                    (this.outSuperBigTween = null),
                    (this.outSmallTween = null),
                    (this.outSuperSmallTween = null),
                    null === (i = this.lineTween) || void 0 === i || i.stop(),
                    (this.lineTween = null),
                    null === (r = this.parentTween) || void 0 === r || r.stop(),
                    (this.parentTween = null),
                    (this.lineShikari.scale = 0),
                    this.allParent.stopAllActions(),
                    null === (s = this.superLineTween) || void 0 === s || s.stop(),
                    (this.superLineTween = null);
            }),
            (t.prototype.update = function (e) {
                var t, o, n, a, i, r, c, l, p, u, d, h, g, m;
                e > 0.5 ||
                    (s.gameMgr.getIsPause()
                        ? this.hasStop ||
                          ((this.hasStop = !0),
                          null === (t = this.lineTween) || void 0 === t || t.stop(),
                          null === (o = this.outBigTween) || void 0 === o || o.stop(),
                          null === (n = this.outSuperBigTween) || void 0 === n || n.stop(),
                          null === (a = this.outSmallTween) || void 0 === a || a.stop(),
                          null === (i = this.outSuperSmallTween) || void 0 === i || i.stop(),
                          null === (r = this.parentTween) || void 0 === r || r.stop(),
                          null === (c = this.superLineTween) || void 0 === c || c.stop(),
                          this.icon.node.pauseAllActions(),
                          this.allParent.pauseAllActions(),
                          this.node.pauseAllActions(),
                          this.aniNode.pause())
                        : this.hasStop &&
                          ((this.hasStop = !1),
                          null === (l = this.lineTween) || void 0 === l || l.start(),
                          this.icon.node.resumeAllActions(),
                          this.allParent.resumeAllActions(),
                          this.node.resumeAllActions(),
                          null === (p = this.superLineTween) || void 0 === p || p.start(),
                          null === (u = this.outBigTween) || void 0 === u || u.start(),
                          null === (d = this.outSuperBigTween) || void 0 === d || d.start(),
                          null === (h = this.outSmallTween) || void 0 === h || h.start(),
                          null === (g = this.outSuperSmallTween) || void 0 === g || g.start(),
                          null === (m = this.parentTween) || void 0 === m || m.start()));
            }),
            i([h(cc.Animation)], t.prototype, "aniNode", void 0),
            i([h(cc.Sprite)], t.prototype, "icon", void 0),
            i([h(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([h(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([h(cc.Node)], t.prototype, "outNormalBig", void 0),
            i([h(cc.Node)], t.prototype, "outNormalSmall", void 0),
            i([h(cc.Node)], t.prototype, "outSuperBig", void 0),
            i([h(cc.Node)], t.prototype, "outSuperSmall", void 0),
            i([h(cc.Node)], t.prototype, "lineShikari", void 0),
            i([h(cc.Node)], t.prototype, "superLineShikari", void 0),
            i([h(cc.Node)], t.prototype, "shikari", void 0),
            i([h(cc.Node)], t.prototype, "superShikari", void 0),
            i([h(cc.Node)], t.prototype, "allParent", void 0),
            i([d], t)
        );
    })(r.Bullet);
o.default = g;
