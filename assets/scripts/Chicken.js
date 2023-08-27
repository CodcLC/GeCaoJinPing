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
    l = e("GameManager"),
    p = e("CommonUtil"),
    u = cc._decorator.property,
    d = cc._decorator.ccclass,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.superG = null),
                (t.normalG = null),
                (t.moveDir = null),
                (t.radian = 0),
                (t.firstTime = 0),
                (t.secondTime = 0),
                (t.maxSpeed = 0),
                (t.hasChange = !1),
                (t.scaleX = 1),
                (t.changeAngle = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.initSuperChicken = function (e, t) {
                this.init(e), (this.radian = t), (this.node.scale = 1), (this.node.active = !0), (this.node.angle = 0);
                var o = Math.sin(t),
                    n = Math.cos(t);
                (this.moveDir = cc.v2(n, o).normalize()),
                    this.node.setPosition(
                        this.node.parent.convertToNodeSpaceAR(s.roleData.getRole().getWorldPosition())
                    ),
                    this.openAni(),
                    (this.node.getComponent(cc.Sprite).spriteFrame = this.superG);
            }),
            (t.prototype.init = function (t) {
                if (
                    (e.prototype.init.call(this, t),
                    c.default.instance().getBulletNode().addChild(this.node),
                    !this.equipJson.issuper)
                ) {
                    (this.node.getComponent(cc.Sprite).spriteFrame = this.normalG),
                        (this.maxSpeed = this.speed),
                        (this.firstTime = this.maxDuration / 5),
                        (this.secondTime = this.maxDuration - this.firstTime),
                        this.node.setPosition(
                            this.node.parent.convertToNodeSpaceAR(s.roleData.getRole().getWorldPosition())
                        ),
                        (this.node.y += 70),
                        (this.node.angle = 0),
                        (this.node.active = !0),
                        (this.radian = (80 / 180) * Math.PI),
                        (this.scaleX = s.roleData.getRole().getScaleX());
                    var o = this.scaleX > 0 ? Math.cos(this.radian) : -Math.cos(this.radian),
                        n = Math.sin(this.radian);
                    (this.changeAngle = this.scaleX > 0 ? -90 : 90), (this.moveDir = cc.v2(o, n).normalize());
                    var a = p.CommonUtil.getRangeCloseNum(0, 12) / 100,
                        i = p.CommonUtil.getRangeCloseNum(0, 12) / 100;
                    (this.moveDir.x -= a), (this.moveDir.y -= i), this.openAni();
                }
            }),
            (t.prototype.openAni = function () {
                this.isStart = !0;
            }),
            (t.prototype.backToPool = function () {
                this.node.setPosition(0, 0),
                    (this.node.angle = 0),
                    (this.node.active = !1),
                    (this.isStart = !1),
                    (this.hasChange = !1),
                    e.prototype.backToPool.call(this);
            }),
            (t.prototype.update = function (e) {
                e > 0.5 || l.gameMgr.getIsPause() || (this.equipJson.issuper ? this.superMove(e) : this.normalAni(e));
            }),
            (t.prototype.normalAni = function (e) {
                if (this.isStart)
                    if (this.duration <= this.firstTime) {
                        var t = this.node.x + this.moveDir.x * this.speed * e * 65,
                            o = this.node.y + this.moveDir.y * this.speed * e * 65;
                        this.node.setPosition(t, o),
                            (this.duration += e),
                            (this.speed = this.maxSpeed * (1 - this.duration / this.firstTime)),
                            (this.node.angle += (this.changeAngle * e) / this.firstTime),
                            this.checkAreaDamage();
                    } else
                        this.duration > this.firstTime && this.duration <= this.maxDuration
                            ? ((this.duration += e),
                              this.speed < this.maxSpeed &&
                                  ((this.speed = (this.maxSpeed * (this.duration - this.firstTime)) / this.firstTime),
                                  (this.node.angle += (2 * this.changeAngle * e) / this.firstTime / 2)),
                              this.hasChange || ((this.moveDir.y = -this.moveDir.y), (this.hasChange = !0)),
                              (t = this.node.x + this.moveDir.x * this.speed * e * 65),
                              (o = this.node.y + this.moveDir.y * this.speed * e * 65),
                              this.node.setPosition(t, o),
                              this.checkAreaDamage())
                            : this.duration > this.maxDuration && this.backToPool();
            }),
            (t.prototype.superMove = function (e) {
                if (this.isStart) {
                    var t = this.node.x + this.moveDir.x * this.speed * e * 65,
                        o = this.node.y + this.moveDir.y * this.speed * e * 65;
                    (this.node.angle += 15), this.node.setPosition(t, o), (this.duration += e), this.checkAreaDamage();
                }
                this.duration >= this.maxDuration && this.backToPool();
            }),
            i([u(cc.SpriteFrame)], t.prototype, "superG", void 0),
            i([u(cc.SpriteFrame)], t.prototype, "normalG", void 0),
            i([d], t)
        );
    })(r.Bullet);
o.default = h;
