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
var r = e("MonsterSkillConfig"),
    s = e("GameView"),
    c = e("GameManager"),
    l = e("RoleData"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.shakeAni = []),
                (t.maxDuration = 0),
                (t.duration = 0),
                (t.attack = 0),
                (t.config = null),
                (t.isStart = !1),
                (t.hasAttack = !1),
                (t.hasStop = !1),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t, o, n) {
                var a = this;
                (this.config = new r.MonsterSkillConfig()),
                    (this.enemyType = n),
                    this.config.init(o),
                    (this.hasAttack = !1),
                    (this.maxDuration = 0.3 + 0.1 * 3),
                    (this.node.scale = this.config.getShakeArea()),
                    (this.attack = e),
                    this.node.setPosition(t.x, t.y - 75),
                    (this.node.parent = s.default.instance().gasLayer),
                    (this.isStart = !0),
                    this.shakeAni.forEach(function (e) {
                        a.scheduleOnce(function () {
                            e.play("shake");
                        }, 0.1);
                    });
            }),
            (t.prototype.update = function (e) {
                if (!(e > 0.5))
                    if (c.gameMgr.getIsPause()) this.hasStop || ((this.hasStop = !0), this.pauseAllAni());
                    else if (this.isStart)
                        if (
                            (this.hasStop && ((this.hasStop = !1), this.startAllAni()),
                            this.duration >= this.maxDuration)
                        )
                            this.backToPool();
                        else {
                            if (this.hasAttack) return;
                            (this.duration += e), this.checkDamage();
                        }
            }),
            (t.prototype.pauseAllAni = function () {
                this.shakeAni.forEach(function (e) {
                    e.pause();
                });
            }),
            (t.prototype.startAllAni = function () {
                this.shakeAni.forEach(function (e) {
                    e.resume();
                });
            }),
            (t.prototype.checkDamage = function () {
                var e = 112.5 * this.config.getShakeArea();
                (this.hasAttack = Math.abs(this.node.position.sub(l.roleData.getRole().getPositionV3()).mag()) <= e),
                    this.hasAttack &&
                        l.roleData
                            .getRole()
                            .onDamage((this.attack * this.config.getShakeAttack()) / 100, this.enemyType);
            }),
            (t.prototype.backToPool = function () {
                (this.hasAttack = !1),
                    (this.hasStop = !1),
                    (this.isStart = !1),
                    (this.duration = 0),
                    this.shakeAni.forEach(function (e) {
                        (e.node.opacity = 0), (e.node.scale = 0.3);
                    });
            }),
            i([d(cc.Animation)], t.prototype, "shakeAni", void 0),
            i([u], t)
        );
    })(cc.Component);
o.default = h;
