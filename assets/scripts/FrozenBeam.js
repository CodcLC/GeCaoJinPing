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
    c = e("MonsterManager"),
    l = e("audioManager"),
    p = e("EnemyEntity"),
    u = e("GameManager"),
    d = e("RoleData"),
    h = e("PoolManager"),
    g = e("FlyEnemy"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.normalNode = null),
                (t.superNode = null),
                (t.boomAni = null),
                (t.superImage = null),
                (t.boomNode = null),
                (t.frozenStreakPrefab = null),
                (t.moveDir = null),
                (t.radian = 0),
                (t.isPlay = !1),
                (t.streakNode = null),
                (t.enemySet = new Set()),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t) {
                e.prototype.init.call(this, t),
                    (this.node.scaleY = 1),
                    (this.duration = 0),
                    this.initPosAndAngle(),
                    this.enemySet.clear();
            }),
            (t.prototype.superInit = function () {
                (this.normalNode.active = !1), (this.superNode.active = !0), (this.superImage.active = !0);
            }),
            (t.prototype.normalInit = function () {
                (this.normalNode.active = !0), (this.superNode.active = !1);
            }),
            (t.prototype.initPosAndAngle = function () {
                this.equipJson.issuper
                    ? (this.superInit(), (this.streakNode = h.poolMgr.getNodeFromMap(this.frozenStreakPrefab)))
                    : this.normalInit();
                var e = d.roleData.getRole(),
                    t = e.getPos(),
                    o = c.default.instance().getMinDisMonster();
                (this.radian = cc.v2(o.x - t.x, o.y - t.y).signAngle(cc.v2(1, 0))),
                    (this.node.angle = (-this.radian / Math.PI) * 180 - 90);
                var n = 10 * Math.cos(this.radian),
                    a = 10 * Math.sin(this.radian),
                    i = e.getPos();
                if (
                    (this.node.setPosition(cc.v2(i.x + n, i.y + a)),
                    (this.node.parent = s.default.instance().getBulletNode()),
                    this.equipJson.issuper)
                ) {
                    this.moveDir = o.sub(this.node.getPosition()).normalize();
                    var r = this.superNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        l = s.default.instance().streakLayer;
                    this.streakNode.setPosition(l.convertToNodeSpaceAR(r)), l.addChild(this.streakNode);
                } else this.moveDir = cc.v2(0, 0);
                (this.isStart = !0), (this.node.active = !0);
            }),
            (t.prototype.playAudioEff = function () {
                l.audioMgr.startEffect("fbyx");
            }),
            (t.prototype.onBeginContact = function (e, t, o) {
                var n = o.tag;
                if ((1129 === n || 1131 === n) && !this.isPlay)
                    if (this.equipJson.issuper) this.playBoom();
                    else {
                        var a = o.node;
                        if (a && a.isValid) {
                            var i = 1129 === n ? a.getComponent(p.EnemyEntity) : a.getComponent(g.default);
                            if (i.isDeath) return;
                            if (this.enemySet.has(i.getTag())) return;
                            this.enemySet.add(i.getTag()), i.doFrozen(this.equipJson.frequency);
                            var r = this.equipJson.hitcolor.split(",");
                            i.onDamage(
                                this.getDamage(),
                                0,
                                new cc.Color(Number(r[0]), Number(r[1]), Number(r[2])),
                                Number(r[3])
                            );
                        }
                    }
            }),
            (t.prototype.playBoom = function () {
                var e = this;
                this.isPlay ||
                    ((this.boomAni.node.active = !0),
                    (this.superImage.active = !1),
                    (this.isPlay = !0),
                    h.poolMgr.putNodeToPool(this.streakNode),
                    (this.streakNode = null),
                    this.boomAni.play("frozenBoom"),
                    this.scheduleOnce(function () {
                        (e.checkDt = 2),
                            e.checkRangeDamage(64 * e.area, 1, e.superNode, null, function (t) {
                                t.doFrozen(e.equipJson.frequency);
                            });
                    }, 0.1),
                    this.scheduleOnce(function () {
                        (e.boomAni.node.active = !1),
                            (e.node.active = !1),
                            e.backToPool(),
                            (e.duration = 0),
                            (e.isPlay = !1);
                    }, 0.23));
            }),
            (t.prototype.getPos = function () {
                return this.node.parent.convertToNodeSpaceAR(this.boomNode.convertToWorldSpaceAR(cc.Vec2.ZERO));
            }),
            (t.prototype.update = function (e) {
                if (!(e > 0.5 || u.gameMgr.getIsPause())) {
                    if (this.isStart) {
                        if (this.equipJson.issuper) {
                            var t = this.node.x + this.moveDir.x * this.speed * e * 65,
                                o = this.node.y + this.moveDir.y * this.speed * e * 65;
                            if ((this.node.setPosition(t, o), this.streakNode)) {
                                var n = this.superNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
                                    a = s.default.instance().streakLayer;
                                this.streakNode.setPosition(a.convertToNodeSpaceAR(n));
                            }
                        } else this.node.scaleY += 0.5;
                        this.duration += e;
                    }
                    this.duration > this.maxDuration &&
                        (this.equipJson.issuper
                            ? (this.playBoom(), (this.isStart = !1))
                            : (this.backToPool(), (this.node.active = !1)));
                }
            }),
            i([y(cc.Node)], t.prototype, "normalNode", void 0),
            i([y(cc.Node)], t.prototype, "superNode", void 0),
            i([y(cc.Animation)], t.prototype, "boomAni", void 0),
            i([y(cc.Node)], t.prototype, "superImage", void 0),
            i([y(cc.Node)], t.prototype, "boomNode", void 0),
            i([y(cc.Prefab)], t.prototype, "frozenStreakPrefab", void 0),
            i([f], t)
        );
    })(r.Bullet);
o.default = v;
