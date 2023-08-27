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
var r = e("ClientEvents"),
    s = e("ListItem"),
    c = e("HeroManager"),
    l = e("ResManager"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.headIcon = null),
                (t.levelLabel = null),
                (t.selectShain = null),
                (t.touchShain = null),
                (t.upNode = null),
                (t.selectNode = null),
                (t.normalEffect = null),
                (t.grayEffect = null),
                (t.redDotSprite = []),
                (t.idx = null),
                (t.data = null),
                (t.checkShowRedDot = function () {
                    c.heroMgr.checkHeroGradeUp(t.data.id) || c.heroMgr.checkHeroLevelUp(t.data.id)
                        ? ((t.upNode.active = !0), (t.upNode.getComponent(cc.Sprite).spriteFrame = t.redDotSprite[0]))
                        : !c.heroMgr.getIsUnlockHero(t.data.id) &&
                          c.heroMgr.checkHeroCanUnlock(t.data.id) &&
                          ((t.upNode.active = !0), (t.upNode.getComponent(cc.Sprite).spriteFrame = t.redDotSprite[1]));
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {}),
            (t.prototype.init = function (e, t) {
                var o = this;
                (this.idx = e),
                    (this.data = t),
                    this.node.on(cc.Node.EventType.TOUCH_END, function () {
                        o.touchItem();
                    }),
                    (this.selectShain.active = !1),
                    (this.touchShain.active = !1),
                    (this.upNode.active = !1),
                    (this.selectNode.active = !1),
                    this.showItemDisplay(),
                    this.checkShowRedDot(),
                    this.checkShowTouch();
            }),
            (t.prototype.getData = function () {
                return this.data;
            }),
            (t.prototype.showItemDisplay = function () {
                var e = this.data.uplevel.split(","),
                    t = 1;
                c.heroMgr.getHeroLevel(this.data.id) && (t = c.heroMgr.getHeroLevel(this.data.id)),
                    (this.levelLabel.string = t + "/" + e.pop()),
                    l.ResManager.loadHeadIcon(this.data.itemicon, this.headIcon),
                    c.heroMgr.getIsBattleHero(this.data.id)
                        ? ((this.selectShain.active = !0), this.headIcon.setMaterial(0, this.normalEffect))
                        : c.heroMgr.getIsUnlockHero(this.data.id)
                        ? this.headIcon.setMaterial(0, this.normalEffect)
                        : this.headIcon.setMaterial(0, this.grayEffect);
            }),
            (t.prototype.checkShowTouch = function () {
                c.heroMgr.getTouchHero() && c.heroMgr.getTouchHero() === this.data.id && this.touchItem();
            }),
            (t.prototype.touchItem = function () {
                c.heroMgr.setTouchHero(this.data.id),
                    r.ClientEvents.HIDE_TOUCH_SHAIN.emit(),
                    (this.touchShain.active = !0),
                    r.ClientEvents.HERO_TOUCH.emit(this.data);
            }),
            (t.prototype.hideTouchShain = function () {
                this.touchShain.active = !1;
            }),
            i([d(cc.Sprite)], t.prototype, "headIcon", void 0),
            i([d(cc.Label)], t.prototype, "levelLabel", void 0),
            i([d(cc.Node)], t.prototype, "selectShain", void 0),
            i([d(cc.Node)], t.prototype, "touchShain", void 0),
            i([d(cc.Node)], t.prototype, "upNode", void 0),
            i([d(cc.Node)], t.prototype, "selectNode", void 0),
            i([d(cc.Material)], t.prototype, "normalEffect", void 0),
            i([d(cc.Material)], t.prototype, "grayEffect", void 0),
            i([d(cc.SpriteFrame)], t.prototype, "redDotSprite", void 0),
            i([u], t)
        );
    })(s.default);
o.default = h;
