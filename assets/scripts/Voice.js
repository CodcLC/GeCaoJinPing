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
    c = e("GameManager"),
    l = e("CommonUtil"),
    p = e("RoleData"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.maxTime = 0),
                (t.radian = 0),
                (t.moveDir = cc.v2()),
                (t.checkArea = null),
                (t.ani = null),
                (t.normalAni = null),
                (t.superAni = null),
                (t.normalNode = null),
                (t.superNode = null),
                (t.superFont = null),
                (t.normalFont = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    this.equipJson.issuper
                        ? ((this.superNode.active = !0),
                          (this.normalNode.active = !1),
                          (this.normalNode.opacity = 255),
                          (this.superNode.opacity = 255),
                          this.ani.removeClip(this.normalAni),
                          this.ani.addClip(this.superAni),
                          this.ani.play("superVoice"))
                        : ((this.superNode.active = !1),
                          (this.normalNode.active = !0),
                          (this.normalNode.opacity = 255),
                          (this.superNode.opacity = 255),
                          this.ani.removeClip(this.superAni),
                          this.ani.addClip(this.normalAni),
                          this.ani.play("voice")),
                    (this.maxTime = this.equipJson.duration),
                    (this.node.parent = s.default.instance().getBulletNode()),
                    this.initPosAndAngle(),
                    (this.isStart = !0),
                    (this.node.active = !0);
            }),
            (t.prototype.initPosAndAngle = function () {
                (this.radian = s.default.instance().getCacheRadian()),
                    (this.moveDir = s.default.instance().getCacheMoveDir()),
                    0 === this.radian && (this.moveDir = cc.v2(0, 1)),
                    this.moveDir.x < 0
                        ? ((this.superFont.scaleX = 1),
                          (this.normalFont.scaleX = 1),
                          (this.superFont.scaleY = -1),
                          (this.normalFont.scaleY = -1))
                        : ((this.superFont.scaleX = -1),
                          (this.normalFont.scaleX = -1),
                          (this.superFont.scaleY = 1),
                          (this.normalFont.scaleY = 1)),
                    (this.node.angle = (-this.radian / Math.PI) * 180);
                var e,
                    t,
                    o = 20 * Math.cos(this.radian),
                    n = 20 * Math.sin(this.radian),
                    a = p.roleData.getRole().getPos();
                (e =
                    this.moveDir.x > 0
                        ? l.CommonUtil.getRangeCloseNum(o, o + 40)
                        : l.CommonUtil.getRangeCloseNum(o - 40, o)),
                    (t =
                        this.moveDir.y > 0
                            ? l.CommonUtil.getRangeCloseNum(n, n + 40)
                            : l.CommonUtil.getRangeCloseNum(n - 40, n)),
                    this.node.setPosition(cc.v2(a.x + e, a.y + t)),
                    (this.isStart = !0),
                    this.playAudioEff();
            }),
            (t.prototype.playAudioEff = function () {}),
            (t.prototype.update = function (e) {
                if (!(e > 0.5 || c.gameMgr.getIsPause()))
                    if (this.duration <= this.maxTime) {
                        if (this.isStart) {
                            var t = this.node.x + this.moveDir.x * this.speed * e * 65,
                                o = this.node.y + this.moveDir.y * this.speed * e * 65;
                            this.node.setPosition(t, o), (this.duration += e), this.checkAreaDamage(1, this.checkArea);
                        }
                    } else (this.node.active = !1), this.backToPool();
            }),
            i([h(cc.Node)], t.prototype, "checkArea", void 0),
            i([h(cc.Animation)], t.prototype, "ani", void 0),
            i([h(cc.AnimationClip)], t.prototype, "normalAni", void 0),
            i([h(cc.AnimationClip)], t.prototype, "superAni", void 0),
            i([h(cc.Node)], t.prototype, "normalNode", void 0),
            i([h(cc.Node)], t.prototype, "superNode", void 0),
            i([h(cc.Node)], t.prototype, "superFont", void 0),
            i([h(cc.Node)], t.prototype, "normalFont", void 0),
            i([d], t)
        );
    })(r.Bullet);
o.default = g;
