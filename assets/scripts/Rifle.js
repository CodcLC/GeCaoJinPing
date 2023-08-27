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
Object.defineProperty(o, "__esModule", {value: !0}), (o.Rifle = void 0);
var r = e("Bullet"),
    s = e("GameView"),
    c = e("GameManager"),
    l = e("CommonUtil"),
    p = e("RoleData"),
    u = cc._decorator.property,
    d = e("PoolManager"),
    h = cc._decorator.ccclass,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.rifleStreak = null),
                (t.checkArea = null),
                (t.maxTime = 0),
                (t.radian = 0),
                (t.moveDir = cc.v2()),
                (t.penetrate = 0),
                (t.streakNode = null),
                (t.hasEnd = !1),
                (t.damageCb = function () {
                    t.penetrate--, t.penetrate <= 0 && ((t.node.active = !1), t.backStreak(), t.backToPool());
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    (this.maxTime = this.equipJson.duration),
                    (this.penetrate = this.equipJson.penetrate),
                    this.initPosAndAngle(),
                    (this.isStart = !0),
                    (this.node.active = !0);
            }),
            (t.prototype.initPosAndAngle = function () {
                (this.radian = s.default.instance().getCacheRadian()),
                    (this.moveDir = s.default.instance().getCacheMoveDir()),
                    0 === this.radian && (this.moveDir = cc.v2(0, 1)),
                    (this.node.angle = (-this.radian / Math.PI) * 180 - 90);
                var e,
                    t,
                    o = 10 * Math.cos(this.radian),
                    n = 10 * Math.sin(this.radian),
                    a = p.roleData.getRole().getPos();
                (e =
                    this.moveDir.x > 0
                        ? l.CommonUtil.getRangeCloseNum(o, o + 40)
                        : l.CommonUtil.getRangeCloseNum(o - 40, o)),
                    (t =
                        this.moveDir.y > 0
                            ? l.CommonUtil.getRangeCloseNum(n, n + 40)
                            : l.CommonUtil.getRangeCloseNum(n - 40, n)),
                    this.node.setPosition(a.x + e, a.y + t),
                    (this.node.parent = s.default.instance().getBulletNode()),
                    this.initStreak(),
                    (this.isStart = !0),
                    this.playAudioEff();
            }),
            (t.prototype.initStreak = function () {
                (this.streakNode = d.poolMgr.getNodeFromMap(this.rifleStreak)),
                    (this.streakNode.active = !0),
                    this.setStreakPos(),
                    s.default.instance().rifleStreakLayer.addChild(this.streakNode);
            }),
            (t.prototype.setStreakPos = function () {
                this.streakNode && this.streakNode.setPosition(this.node.getPosition());
            }),
            (t.prototype.playAudioEff = function () {}),
            (t.prototype.backStreak = function () {
                this.streakNode &&
                    (d.poolMgr.putNodeToPool(this.streakNode), (this.streakNode.active = !1), (this.streakNode = null));
            }),
            (t.prototype.update = function (e) {
                var t = this;
                if (!(e > 0.5 || c.gameMgr.getIsPause()))
                    if (this.duration <= this.maxTime) {
                        if (this.isStart) {
                            var o = this.node.x + this.moveDir.x * this.speed * e * 65,
                                n = this.node.y + this.moveDir.y * this.speed * e * 65;
                            this.node.setPosition(o, n),
                                this.setStreakPos(),
                                (this.duration += e),
                                this.checkAreaDamage(
                                    1,
                                    this.checkArea,
                                    35,
                                    !1,
                                    null,
                                    function () {
                                        t.damageCb();
                                    },
                                    function () {
                                        t.damageCb();
                                    }
                                );
                        }
                    } else (this.node.active = !1), this.backStreak(), this.backToPool();
            }),
            i([u(cc.Prefab)], t.prototype, "rifleStreak", void 0),
            i([u(cc.Node)], t.prototype, "checkArea", void 0),
            i([h], t)
        );
    })(r.Bullet);
o.Rifle = g;
