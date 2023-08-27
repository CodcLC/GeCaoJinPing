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
var r = e("GameManager"),
    s = e("RoleData"),
    c = e("MonsterSkillConfig"),
    l = e("GameView"),
    p = e("PoolManager"),
    u = e("MonsterManager"),
    d = e("EquipManager"),
    h = cc._decorator,
    g = h.ccclass,
    m = h.property,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.maxDuration = 0),
                (t.duration = 0),
                (t.attack = 0),
                (t.config = null),
                (t.isStart = !1),
                (t.hasAttack = !1),
                (t.hasBoom = !1),
                (t.cd = 0),
                (t.tag = 0),
                (t.enemyType = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t, o, n) {
                (this.config = new c.MonsterSkillConfig()),
                    (this.enemyType = n),
                    (this.tag = u.default.instance().gasTag),
                    u.default.instance().gasMap.set(this.tag, this),
                    (u.default.instance().gasTag = this.tag + 1),
                    this.config.init(o),
                    (this.hasAttack = !1),
                    (this.maxDuration = this.config.getGasDuration()),
                    (this.attack = e),
                    (this.hasBoom = !1),
                    (this.aniNode.node.active = !1),
                    this.node.setPosition(t.x, t.y),
                    (this.node.parent = l.default.instance().gasLayer),
                    (this.isStart = !0);
            }),
            (t.prototype.getPos = function () {
                return this.node.getPosition();
            }),
            (t.prototype.getDamage = function () {
                return (this.attack * this.config.getBulletDamage()) / 100;
            }),
            (t.prototype.backToPool = function () {
                p.poolMgr.putNodeToPool(this.node),
                    u.default.instance().gasMap.delete(this.tag),
                    this.aniNode.stop(),
                    (this.node.active = !1),
                    (this.maxDuration = 0),
                    (this.duration = 0),
                    (this.isStart = !1);
            }),
            (t.prototype.update = function (e) {
                if (!(e > 0.5) && !r.gameMgr.getIsPause() && this.isStart)
                    if (
                        (this.hasBoom ||
                            ((this.hasBoom = !0), (this.aniNode.node.active = !0), this.aniNode.play("gas", 0)),
                        this.duration <= this.maxDuration)
                    ) {
                        if (this.cd > 0) this.cd -= e;
                        else {
                            var t = s.roleData.judgeDamageRoleGas(65, this);
                            t &&
                                (d.equipMgr.poisonImmune ||
                                    t.onDamage(
                                        Math.round((this.attack * this.config.getGasDamage()) / 100),
                                        this.enemyType
                                    ),
                                (this.cd = this.config.getGasCd()));
                        }
                        this.duration += e;
                    } else this.backToPool();
            }),
            i([m(cc.Animation)], t.prototype, "aniNode", void 0),
            i([g], t)
        );
    })(cc.Component);
o.default = f;
