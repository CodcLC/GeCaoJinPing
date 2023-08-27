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
    l = e("MonsterManager"),
    p = e("UIManager"),
    u = e("GameManager"),
    d = e("CommonUtil"),
    h = cc._decorator,
    g = h.ccclass,
    m = h.property,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.tennisSp = null),
                (t.normalFrame = null),
                (t.superFrame = null),
                (t.boomAni = null),
                (t.radian = 0),
                (t.moveDir = cc.v2()),
                (t.hasPause = !1),
                (t.aniStart = !1),
                (t.aniTime = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    (this.tennisSp.node.active = !0),
                    (this.aniStart = !1),
                    (this.aniTime = 0),
                    this.tennisSp.node.stopAllActions(),
                    (this.tennisSp.node.angle = 0),
                    this.runAni(),
                    (this.tennisSp.spriteFrame = this.equipJson.issuper ? this.superFrame : this.normalFrame),
                    this.equipJson.issuper
                        ? (this.tennisSp.spriteFrame = this.superFrame)
                        : (this.tennisSp.spriteFrame = this.normalFrame),
                    this.initPosAndAngle(),
                    (this.node.active = !0);
            }),
            (t.prototype.initPosAndAngle = function () {
                var e = s.roleData.getRole().getPos(),
                    t = l.default.instance().getRandomMonster(),
                    o = t
                        ? t.getPos()
                        : cc.v2(
                              e.x + d.CommonUtil.getRangeCloseNum(-300, 300),
                              e.y + d.CommonUtil.getRangeCloseNum(-300, 300)
                          );
                this.radian = cc.v2(o.x - e.x, o.y - e.y).signAngle(cc.v2(1, 0));
                var n = Math.cos(this.radian),
                    a = Math.sin(this.radian),
                    i = c.default.instance().getBulletNode();
                this.node.setPosition(cc.v2(e.x + n, e.y + a)),
                    (this.node.parent = i),
                    (this.moveDir = o.sub(this.node.getPosition()).normalize()),
                    (this.isStart = !0),
                    this.playAudioEff();
            }),
            (t.prototype.checkLimit = function () {
                var e = p.UIMgr.getRoleCamera(),
                    t = e.getComponent(cc.Camera).zoomRatio,
                    o = e.convertToWorldSpaceAR(cc.v2(-e.width / t / 2, -e.height / t / 2)),
                    n = e.convertToWorldSpaceAR(cc.v2(e.width / t / 2, e.height / t / 2)),
                    a = this.node.convertToWorldSpaceAR(cc.v2(0, 40));
                a.x + 5 * this.moveDir.x <= o.x || a.x + 5 * this.moveDir.x >= n.x
                    ? ((this.moveDir.x = -this.moveDir.x),
                      (this.radian = this.moveDir.signAngle(cc.v2(1, 0))),
                      (this.node.angle = (-this.radian / Math.PI) * 180 - 90))
                    : (a.y + 5 * this.moveDir.y <= o.y || a.y + 5 * this.moveDir.y >= n.y) &&
                      ((this.moveDir.y = -this.moveDir.y),
                      (this.radian = this.moveDir.signAngle(cc.v2(1, 0))),
                      (this.node.angle = (-this.radian / Math.PI) * 180 - 90));
            }),
            (t.prototype.doBoom = function () {
                var e = this;
                (this.tennisSp.node.active = !1),
                    this.tennisSp.node.stopAllActions(),
                    (this.aniStart = !0),
                    (this.boomAni.node.active = !0),
                    (this.boomAni.node.opacity = 255),
                    this.boomAni.play("boomAni"),
                    this.scheduleOnce(function () {
                        (e.checkDt = 2), (e.isStart = !0), e.checkRangeDamage(80 * e.area, 1, e.node);
                    }, 0.13);
            }),
            (t.prototype.getPos = function () {
                return this.node.getPosition();
            }),
            (t.prototype.runAni = function () {
                this.tennisSp.node.runAction(cc.repeatForever(cc.rotateBy(0.5, 359)));
            }),
            (t.prototype.playAudioEff = function () {}),
            (t.prototype.update = function (e) {
                var t = this;
                if (!(e > 0.5)) {
                    if (u.gameMgr.getIsPause()) return (this.hasPause = !0), void this.boomAni.pause();
                    if ((this.hasPause && this.boomAni.resume(), this.aniStart))
                        (this.aniTime += e),
                            this.aniTime >= 0.23 &&
                                ((this.boomAni.node.active = !1),
                                this.boomAni.stop(),
                                this.backToPool(),
                                (this.node.active = !1));
                    else if (this.duration <= this.maxDuration) {
                        if (this.isStart) {
                            var o = this.node.x + this.moveDir.x * this.speed * e * 60,
                                n = this.node.y + this.moveDir.y * this.speed * e * 60;
                            this.node.setPosition(o, n),
                                (this.duration += e),
                                this.equipJson.issuper || this.checkLimit(),
                                this.checkRangeDamage(18, 1, this.node, null, function (e) {
                                    if (t.equipJson.issuper) (t.isStart = !1), t.doBoom();
                                    else {
                                        var o = e.getPos();
                                        o.x + 22 <= t.node.x - 20 || o.x - 22 <= t.node.x + 20
                                            ? (t.moveDir.x = -t.moveDir.x)
                                            : o.y + 22 <= t.node.y - 20 || o.y - 22 <= t.node.y + 20
                                            ? (t.moveDir.y = -t.moveDir.y)
                                            : ((t.moveDir.x = -t.moveDir.x), (t.moveDir.y = -t.moveDir.y));
                                    }
                                });
                        }
                    } else (this.node.active = !1), this.backToPool();
                }
            }),
            i([m(cc.Sprite)], t.prototype, "tennisSp", void 0),
            i([m(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([m(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([m(cc.Animation)], t.prototype, "boomAni", void 0),
            i([g], t)
        );
    })(r.Bullet);
o.default = f;
