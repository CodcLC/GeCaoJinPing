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
    c = e("GameManager"),
    l = e("GameView"),
    p = e("MonsterManager"),
    u = e("HeroData"),
    d = cc._decorator,
    h = d.ccclass,
    g = d.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.bladeAni = null),
                (t.checkArea = null),
                (t.imageNode = null),
                (t.hasPause = !1),
                (t.hasDamage = !1),
                (t.hasRecovery = !1),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (t, o) {
                e.prototype.init.call(this, t),
                    (this.imageNode.scaleY = 1),
                    (this.node.scaleY = 1),
                    (this.isStart = !0);
                var n = s.roleData.getRole(),
                    a = n.getScaleX(),
                    i = n.getPos(),
                    r = n.node.width / 2,
                    c = a < 0 ? -o : o;
                (this.node.scaleX = c > 0 ? this.node.scaleX : -this.node.scaleX),
                    (r = (this.node.scaleX > 0 ? r : -r) + i.x),
                    this.node.setPosition(r, i.y),
                    (this.node.parent = l.default.instance().getBulletNode()),
                    this.bladeAni.play(this.equipJson.issuper ? "superBlade" : "blade");
            }),
            (t.prototype.checkAreaDamage = function () {
                var e = this;
                this.hasDamage = !0;
                var t = this.checkArea.convertToWorldSpaceAR(
                        cc.v2(-this.checkArea.width / 2, -this.checkArea.height / 2)
                    ),
                    o = this.checkArea.convertToWorldSpaceAR(
                        cc.v2(this.checkArea.width / 2, this.checkArea.height / 2)
                    );
                if (this.node.scaleX < 0) {
                    var n = t.x;
                    (t.x = o.x), (o.x = n);
                }
                p.default
                    .instance()
                    .checkMonsterInArea(cc.v2(t.x, o.y), cc.v2(o.x, o.y), cc.v2(t.x, t.y), cc.v2(o.x, t.y))
                    .forEach(function (t) {
                        var o = e.equipJson.hitcolor.split(",");
                        t.onDamage(
                            e.getDamage(),
                            e.equipJson.repel,
                            new cc.Color(Number(o[0]), Number(o[1]), Number(o[2])),
                            Number(o[3])
                        ),
                            e.equipJson.issuper &&
                                !e.hasRecovery &&
                                ((e.hasRecovery = !0),
                                s.roleData.getRole().recoveryHpByOther(Math.ceil(0.005 * u.heroData.getHeroMight())));
                    }),
                    p.default
                        .instance()
                        .checkBoxInArea(cc.v2(t.x, o.y), cc.v2(o.x, o.y), cc.v2(t.x, t.y), cc.v2(o.x, t.y))
                        .forEach(function (e) {
                            e.brokenAniPlay();
                        });
            }),
            (t.prototype.backToPool = function () {
                e.prototype.backToPool.call(this),
                    this.bladeAni.stop(),
                    (this.hasPause = !1),
                    (this.hasDamage = !1),
                    (this.hasRecovery = !1);
            }),
            (t.prototype.update = function (e) {
                e > 0.5 ||
                    (c.gameMgr.getIsPause()
                        ? this.hasPause || ((this.hasPause = !0), this.bladeAni.pause())
                        : this.isStart &&
                          (this.hasPause && ((this.hasPause = !1), this.bladeAni.resume()),
                          this.duration > 0.12 && !this.hasDamage && this.checkAreaDamage(),
                          this.maxDuration > this.duration ? (this.duration += e) : this.backToPool()));
            }),
            i([g(cc.Animation)], t.prototype, "bladeAni", void 0),
            i([g(cc.Node)], t.prototype, "checkArea", void 0),
            i([g(cc.Node)], t.prototype, "imageNode", void 0),
            i([h], t)
        );
    })(r.Bullet);
o.default = m;
