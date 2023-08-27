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
var r = e("PoolManager"),
    s = e("GameView"),
    c = e("RoleData"),
    l = e("EquipManager"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.shield = 0),
                (t.maxShield = 0),
                (t.recoverShield = function (e) {
                    (t.shield += e), (t.shield = t.shield > t.maxShield ? t.maxShield : t.shield);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                (this.shield = e),
                    (this.maxShield = e),
                    this.aniNode.play("shield", 0),
                    (s.default.instance().shieldNode = this.node);
            }),
            (t.prototype.onDamage = function (e) {
                if (((this.shield -= e), this.shield <= 0)) {
                    if (l.equipMgr.shieldDamage > 0) {
                        var t = c.roleData.JudgeDamage(200),
                            o = {
                                isCrit: !1,
                                damage: Math.ceil((c.roleData.getRole().getAttack() * l.equipMgr.shieldDamage) / 100)
                            };
                        t.forEach(function (e) {
                            e.onDamage(o);
                        });
                    }
                    return this.backToPool(), !1;
                }
                return !0;
            }),
            (t.prototype.backToPool = function () {
                this.aniNode.stop(),
                    (this.shield = 0),
                    (s.default.instance().shieldNode = null),
                    r.poolMgr.putNodeToPool(this.node);
            }),
            i([d(cc.Animation)], t.prototype, "aniNode", void 0),
            i([u], t)
        );
    })(cc.Component);
o.default = h;
