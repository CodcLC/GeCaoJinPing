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
Object.defineProperty(o, "__esModule", {value: !0}), (o.Ridden = void 0);
var r = e("RoleData"),
    s = e("GameView"),
    c = e("PoolManager"),
    l = e("MonsterManager"),
    p = e("HeroData"),
    u = e("CommonUtil"),
    d = e("audioManager"),
    h = e("JsonManager"),
    g = e("Bullet"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.riddenAni = null),
                (t.normalRidden = null),
                (t.superRidden = null),
                (t.boomNode = null),
                (t.light = null),
                (t.checkRange = function () {
                    l.default
                        .instance()
                        .checkEnemyHitRadius(
                            t.node.getPosition(),
                            80 * (t.equipJson.issuper ? 2 : 1),
                            t.getDamage(),
                            t.equipJson
                        ),
                        r.roleData.JudgeDamageBox(80 * (t.equipJson.issuper ? 2 : 1), t).forEach(function (e) {
                            e.brokenAniPlay();
                        });
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                var t = this,
                    o = l.default.instance().getRandomMonster();
                (this.equipJson = e),
                    this.equipJson.issuper
                        ? (this.riddenAni.removeClip(this.normalRidden),
                          this.riddenAni.addClip(this.superRidden),
                          this.riddenAni.play("superRidden"),
                          (this.boomNode.scale = 2))
                        : (this.riddenAni.removeClip(this.superRidden),
                          this.riddenAni.addClip(this.normalRidden),
                          this.riddenAni.play("normalRidden"),
                          (this.boomNode.scale = 1));
                var n = r.roleData.getRole(),
                    a = n.getPos();
                (this.duration = (n.getDurationAdd() / 100 + 1) * this.equipJson.duration),
                    this.node.setPosition(
                        o
                            ? o.getPos()
                            : cc.v2(
                                  a.x + u.CommonUtil.getRangeCloseNum(-300, 300),
                                  a.y + u.CommonUtil.getRangeCloseNum(-300, 300)
                              )
                    ),
                    (this.node.parent = s.default.instance().getBulletNode()),
                    this.scheduleOnce(this.checkRange, 0.17),
                    d.audioMgr.startEffect(h.JsonMgr.getAudioById(e.audioid).audioname),
                    this.scheduleOnce(function () {
                        t.backToPool();
                    }, 0.62);
            }),
            (t.prototype.getPos = function () {
                return this.node.getPosition();
            }),
            (t.prototype.getDamage = function () {
                var e = r.roleData.getRole().getCrit(),
                    t = Math.ceil(
                        this.equipJson.might *
                            p.heroData.getHeroMight() *
                            (r.roleData.getRole().getMightAdd() / 100 + 1)
                    );
                return {isCrit: e, damage: e ? 2 * t : t};
            }),
            (t.prototype.backToPool = function () {
                c.poolMgr.putNodeToPool(this.node),
                    (this.light.y = 1e3),
                    (this.light.active = !1),
                    this.unscheduleAllCallbacks();
            }),
            (t.prototype.getArea = function () {
                return (r.roleData.getRole().getAreaAdd() / 100 + 1) * this.equipJson.area;
            }),
            i([y(cc.Animation)], t.prototype, "riddenAni", void 0),
            i([y(cc.AnimationClip)], t.prototype, "normalRidden", void 0),
            i([y(cc.AnimationClip)], t.prototype, "superRidden", void 0),
            i([y(cc.Node)], t.prototype, "boomNode", void 0),
            i([y(cc.Node)], t.prototype, "light", void 0),
            i([f], t)
        );
    })(g.Bullet);
o.Ridden = v;
