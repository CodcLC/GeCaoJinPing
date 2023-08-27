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
var r = e("event-kit"),
    s = e("ClientEvents"),
    c = e("RoleData"),
    l = e("GameManager"),
    p = e("GameView"),
    u = e("HeroData"),
    d = e("Bullet"),
    h = cc._decorator,
    g = h.ccclass,
    m = h.property,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.dispose = new r.CompositeDisposable()),
                (t.garlicNode = null),
                (t.magicArr = []),
                (t.superFrame = null),
                (t.normalFrame = null),
                (t.superNode = null),
                (t.lastNode = null),
                (t.aniArr = []),
                (t.doAttack = function () {
                    l.gameMgr.getIsPause() ||
                        (t.downCd(0.05),
                        t.checkRangeDamage((192 * t.range) / 2, t.equipJson.frequency, t.node, function (e) {
                            t.equipJson.issuper && e && c.roleData.getRole().recoveryHpByMagicField();
                        }));
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {
                var e = this;
                (p.default.instance().magicNode = this.node),
                    this.dispose.add(
                        s.ClientEvents.ADD_MAGIC_FIELD.on(function (t) {
                            e.updateArms(t);
                        })
                    );
            }),
            (t.prototype.initArms = function (e) {
                var t = this;
                e && (this.equipJson = e),
                    (this.isStart = !0),
                    (this.range = this.getArea()),
                    (this.garlicNode.scale = this.range),
                    this.schedule(this.doAttack, 0.05),
                    (this.node.zIndex = this.equipJson.hierarchy),
                    this.magicArr.forEach(function (e) {
                        t.equipJson.issuper
                            ? ((t.lastNode.spriteFrame = e.spriteFrame = t.superFrame),
                              (t.superNode.node.active = !0),
                              t.superNode.play("superMagic"))
                            : (t.lastNode.spriteFrame = e.spriteFrame = t.normalFrame);
                    }),
                    this.aniArr.forEach(function (e, o) {
                        t.scheduleOnce(function () {
                            e.play("magicField");
                        }, o);
                    });
            }),
            (t.prototype.updateArms = function (e) {
                this.unscheduleAllCallbacks(), this.initArms(e);
            }),
            (t.prototype.onDestroy = function () {
                this.unscheduleAllCallbacks(), this.dispose.dispose(), (this.isStart = !1);
            }),
            (t.prototype.getDamage = function () {
                var e = c.roleData.getRole().getCrit(),
                    t = Math.ceil(
                        this.equipJson.might *
                            u.heroData.getHeroMight() *
                            (c.roleData.getRole().getMightAdd() / 100 + 1)
                    );
                return {isCrit: e, damage: e ? 2 * t : t};
            }),
            (t.prototype.getArea = function () {
                return (c.roleData.getRole().getAreaAdd() / 100 + 1) * this.equipJson.area;
            }),
            i([m(cc.Node)], t.prototype, "garlicNode", void 0),
            i([m(cc.Sprite)], t.prototype, "magicArr", void 0),
            i([m(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([m(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([m(cc.Animation)], t.prototype, "superNode", void 0),
            i([m(cc.Sprite)], t.prototype, "lastNode", void 0),
            i([m(cc.Animation)], t.prototype, "aniArr", void 0),
            i([g], t)
        );
    })(d.Bullet);
o.default = f;
