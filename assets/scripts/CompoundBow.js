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
    l = e("UIManager"),
    p = e("GameView"),
    u = cc._decorator.property,
    d = e("RoleData"),
    h = e("CommonUtil"),
    g = e("PoolManager"),
    m = cc._decorator.ccclass,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.compoundBow = null),
                (t.normalFrame = null),
                (t.superFrame = null),
                (t.checkArea = null),
                (t.radian = 0),
                (t.moveDir = cc.v2()),
                (t.hitEnemy = new Set()),
                (t.bowStreak = null),
                (t.streakNode = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    (this.compoundBow.spriteFrame = this.equipJson.issuper ? this.superFrame : this.normalFrame),
                    this.hitEnemy.clear(),
                    this.equipJson.issuper
                        ? (this.compoundBow.spriteFrame = this.superFrame)
                        : ((this.compoundBow.spriteFrame = this.normalFrame), this.initPosAndAngle()),
                    (this.node.active = !0);
            }),
            (t.prototype.initSuper = function (e, t) {
                this.init(e), (this.radian = ((t + 90) / 180) * Math.PI), (this.node.angle = t);
                var o = Math.cos(this.radian),
                    n = Math.sin(this.radian);
                this.moveDir = cc.v2(o, n).normalize();
                var a = d.roleData.getRole().getPos(),
                    i = p.default.instance().getBulletNode();
                this.node.setPosition(cc.v2(a.x + o, a.y + n)),
                    (this.node.parent = i),
                    this.initStreak(),
                    (this.isStart = !0);
            }),
            (t.prototype.initPosAndAngle = function () {
                var e = d.roleData.getRole(),
                    t = e.getPos(),
                    o = c.default.instance().getRandomMonster(),
                    n = o
                        ? o.getPos()
                        : cc.v2(
                              t.x + h.CommonUtil.getRangeCloseNum(-300, 300),
                              t.y + h.CommonUtil.getRangeCloseNum(-300, 300)
                          );
                (this.radian = cc.v2(n.x - t.x, n.y - t.y).signAngle(cc.v2(1, 0))),
                    (this.node.angle = (-this.radian / Math.PI) * 180 - 90);
                var a = 10 * Math.cos(this.radian),
                    i = 10 * Math.sin(this.radian),
                    r = e.getPos(),
                    s = p.default.instance().getBulletNode();
                this.node.setPosition(cc.v2(r.x + a, r.y + i)),
                    (this.node.parent = s),
                    (this.moveDir = n.sub(this.node.getPosition()).normalize()),
                    this.initStreak(),
                    (this.isStart = !0);
            }),
            (t.prototype.initStreak = function () {
                (this.streakNode = g.poolMgr.getNodeFromMap(this.bowStreak)),
                    (this.streakNode.active = !0),
                    this.setStreakPos(),
                    p.default.instance().streakLayer.addChild(this.streakNode);
            }),
            (t.prototype.setStreakPos = function () {
                this.streakNode.setPosition(this.node.getPosition());
            }),
            (t.prototype.checkLimit = function () {
                var e = l.UIMgr.getRoleCamera(),
                    t = e.getComponent(cc.Camera).zoomRatio,
                    o = e.convertToWorldSpaceAR(cc.v2(-e.width / t / 2, -e.height / t / 2)),
                    n = e.convertToWorldSpaceAR(cc.v2(e.width / t / 2, e.height / t / 2)),
                    a = this.node.convertToWorldSpaceAR(cc.v2(0, 55));
                a.x + 5 * this.moveDir.x <= o.x || a.x + 5 * this.moveDir.x >= n.x
                    ? ((this.moveDir.x = -this.moveDir.x),
                      (this.radian = this.moveDir.signAngle(cc.v2(1, 0))),
                      (this.node.angle = (-this.radian / Math.PI) * 180 - 90))
                    : (a.y + 5 * this.moveDir.y <= o.y || a.y + 5 * this.moveDir.y >= n.y) &&
                      ((this.moveDir.y = -this.moveDir.y),
                      (this.radian = this.moveDir.signAngle(cc.v2(1, 0))),
                      (this.node.angle = (-this.radian / Math.PI) * 180 - 90));
            }),
            (t.prototype.update = function (e) {
                if (!(e > 0.5 || s.gameMgr.getIsPause()))
                    if (this.duration <= this.maxDuration) {
                        if (this.isStart) {
                            var t = this.node.x + this.moveDir.x * this.speed * e * 60,
                                o = this.node.y + this.moveDir.y * this.speed * e * 60;
                            this.node.setPosition(t, o),
                                (this.duration += e),
                                this.setStreakPos(),
                                this.checkAreaDamage(1, this.checkArea),
                                this.equipJson.issuper || this.checkLimit();
                        }
                    } else
                        (this.node.active = !1),
                            this.backToPool(),
                            g.poolMgr.putNodeToPool(this.streakNode),
                            (this.streakNode.active = !1),
                            (this.streakNode = null);
            }),
            i([u(cc.Sprite)], t.prototype, "compoundBow", void 0),
            i([u(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([u(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([u(cc.Node)], t.prototype, "checkArea", void 0),
            i([u(cc.Prefab)], t.prototype, "bowStreak", void 0),
            i([m], t)
        );
    })(r.Bullet);
o.default = f;
