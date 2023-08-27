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
    p = e("PoolManager"),
    u = e("EquipManager"),
    d = e("audioManager"),
    h = e("JsonManager"),
    g = cc._decorator,
    m = g.ccclass,
    f = g.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.howitzerSp = null),
                (t.normalFrame = null),
                (t.superFrame = null),
                (t.boomAni = null),
                (t.superAni = null),
                (t.streakPrefab = null),
                (t.normalStreak = null),
                (t.superStreak = null),
                (t.streakNode = null),
                (t.radian = 0),
                (t.moveDir = cc.v2()),
                (t.hasPause = !1),
                (t.aniStart = !1),
                (t.aniTime = 0),
                (t.isMove = !1),
                (t.stayTime = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t, o) {
                e.prototype.init.call(this, t),
                    (this.howitzerSp.node.active = !0),
                    (this.aniStart = !1),
                    (this.aniTime = 0),
                    (this.howitzerSp.spriteFrame = this.equipJson.issuper ? this.superFrame : this.normalFrame),
                    this.initPosAndAngle(o),
                    (this.node.active = !0),
                    (this.isMove = !0);
            }),
            (t.prototype.initSuper = function (t, o) {
                e.prototype.init.call(this, t),
                    (this.isMove = !0),
                    (this.speed = 30),
                    (this.maxDuration = 0.4),
                    (this.howitzerSp.node.active = !0),
                    (this.aniStart = !1),
                    (this.aniTime = 0),
                    (this.radian = o),
                    (this.node.scale = 1);
                var n = Math.sin(o),
                    a = Math.cos(o);
                (this.moveDir = cc.v2(a, n).normalize()),
                    this.node.setPosition(s.roleData.getRole().getPos()),
                    (this.node.parent = c.default.instance().getBulletNode()),
                    this.initStreak(),
                    (this.node.active = !0),
                    (this.howitzerSp.spriteFrame = this.equipJson.issuper ? this.superFrame : this.normalFrame),
                    (this.isStart = !0);
            }),
            (t.prototype.initPosAndAngle = function (e) {
                (this.radian = ((e + 90) / 180) * Math.PI), (this.node.angle = e);
                var t = Math.cos(this.radian),
                    o = Math.sin(this.radian);
                this.moveDir = cc.v2(t, o).normalize();
                var n = s.roleData.getRole().getPos(),
                    a = c.default.instance().getBulletNode();
                this.node.setPosition(cc.v2(n.x, n.y)),
                    (this.node.parent = a),
                    this.initStreak(),
                    (this.isStart = !0),
                    this.playAudioEff();
            }),
            (t.prototype.attackToHP = function () {
                var e = this.getDamage(),
                    t = u.equipMgr.attackToHp;
                s.roleData.getRole().recoveryHpByOther(Math.floor(e.damage * (t / 100)));
            }),
            (t.prototype.initStreak = function () {
                (this.streakNode = p.poolMgr.getNodeFromMap(this.streakPrefab)),
                    (this.streakNode.active = !0),
                    this.setStreakPos(),
                    c.default.instance().streakLayer.addChild(this.streakNode),
                    (this.streakNode.getComponent(cc.MotionStreak).texture = this.equipJson.issuper
                        ? this.superStreak
                        : this.normalStreak);
            }),
            (t.prototype.setStreakPos = function () {
                this.streakNode.setPosition(this.node.getPosition());
            }),
            (t.prototype.doBoom = function () {
                var e = this;
                (this.howitzerSp.node.active = !1),
                    (this.aniStart = !0),
                    (this.isStart = !1),
                    this.equipJson.issuper
                        ? ((this.boomAni.node.active = !1),
                          (this.superAni.node.active = !0),
                          this.boomAni.stop("boomAni"),
                          this.superAni.play("superBoomAni"))
                        : ((this.boomAni.node.active = !0),
                          (this.superAni.node.active = !1),
                          this.boomAni.play("boomAni"),
                          this.superAni.stop("superBoomAni")),
                    this.backStreakNode(),
                    this.scheduleOnce(function () {
                        e.damageEnemy.clear();
                        var t = u.equipMgr.grenadeEffect;
                        (e.checkDt = 2),
                            e.checkRangeDamage(100 * e.area, 1, e.node, null, function (e) {
                                t && t.time && t.slowDownPer && e.onSpeedWeaken(t.time, t.slowDownPer);
                            });
                    }, 0.13);
            }),
            (t.prototype.backStreakNode = function () {
                p.poolMgr.putNodeToPool(this.streakNode), (this.streakNode.active = !1), (this.streakNode = null);
            }),
            (t.prototype.getPos = function () {
                return this.node.getPosition();
            }),
            (t.prototype.playAudioEff = function () {
                var e = this.equipJson.audioid;
                e && d.audioMgr.startEffect(h.JsonMgr.getAudioById(e).audioname);
            }),
            (t.prototype.update = function (e) {
                var t = this;
                if (l.gameMgr.getIsPause())
                    return (
                        (this.hasPause = !0),
                        void (this.equipJson.issuper ? this.superAni.pause() : this.boomAni.pause())
                    );
                if (
                    (this.hasPause && (this.equipJson.issuper ? this.superAni.resume() : this.boomAni.resume()),
                    this.aniStart)
                )
                    (this.aniTime += e),
                        this.aniTime >= 0.23 &&
                            ((this.superAni.node.active = !1),
                            this.superAni.stop(),
                            (this.boomAni.node.active = !1),
                            this.boomAni.stop(),
                            (this.node.active = !1),
                            this.backToPool());
                else if (this.duration <= this.maxDuration) {
                    if (this.isStart) {
                        var o = this.node.x + this.moveDir.x * this.speed * e * 60,
                            n = this.node.y + this.moveDir.y * this.speed * e * 60;
                        this.duration >= 0.15 &&
                            ((this.speed -= 30 === l.GameManager.frameRate ? 4.5 : 2.25),
                            this.speed < 0 && (this.speed = 0)),
                            this.node.setPosition(o, n),
                            this.setStreakPos(),
                            (this.duration += e),
                            this.checkRangeDamage(this.howitzerSp.node.width / 2, 1, this.node, null, function () {
                                t.attackToHP();
                            });
                    }
                } else {
                    if (this.aniStart) return;
                    this.doBoom();
                }
            }),
            i([f(cc.Sprite)], t.prototype, "howitzerSp", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([f(cc.Animation)], t.prototype, "boomAni", void 0),
            i([f(cc.Animation)], t.prototype, "superAni", void 0),
            i([f(cc.Prefab)], t.prototype, "streakPrefab", void 0),
            i([f(cc.Texture2D)], t.prototype, "normalStreak", void 0),
            i([f(cc.Texture2D)], t.prototype, "superStreak", void 0),
            i([m], t)
        );
    })(r.Bullet);
o.default = y;
