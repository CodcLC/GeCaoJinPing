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
    s = e("ViewUrl"),
    c = e("GameComponent"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.openShopBtn = null),
                (t.openEquipBtn = null),
                (t.openTalentBtn = null),
                (t.cancelBtn = null),
                (t.openShop = function () {
                    t.closeView(), r.ClientEvents.OPEN_SHOP_VIEW.emit(!1);
                }),
                (t.openEquip = function () {
                    t.closeView(), r.ClientEvents.OPEN_EQUIP_VIEW.emit();
                }),
                (t.openTalent = function () {
                    t.closeView(), r.ClientEvents.OPEN_TALENT_VIEW.emit();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onEnable = function () {
                this.onShowPlay(2, this.aniNode);
            }),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.failGuide;
            }),
            (t.prototype.start = function () {
                this.bindEvent();
            }),
            (t.prototype.bindEvent = function () {
                this.openShopBtn.on(cc.Node.EventType.TOUCH_END, this.openShop),
                    this.openEquipBtn.on(cc.Node.EventType.TOUCH_END, this.openEquip),
                    this.openTalentBtn.on(cc.Node.EventType.TOUCH_END, this.openTalent),
                    this.cancelBtn.on(cc.Node.EventType.TOUCH_END, this.closeView);
            }),
            i([u(cc.Node)], t.prototype, "aniNode", void 0),
            i([u(cc.Node)], t.prototype, "openShopBtn", void 0),
            i([u(cc.Node)], t.prototype, "openEquipBtn", void 0),
            i([u(cc.Node)], t.prototype, "openTalentBtn", void 0),
            i([u(cc.Node)], t.prototype, "cancelBtn", void 0),
            i([p], t)
        );
    })(c.GameComponent);
o.default = d;
