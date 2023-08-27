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
var r = e("audioConst"),
    s = e("ViewUrl"),
    c = e("GameComponent"),
    l = e("LangLabel"),
    p = e("audioManager"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.bg = null), (t.nameLabel = null), (t.titleLabel = null), (t._data = null), (t._pos = null), t;
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.equipTip;
            }),
            (t.prototype.start = function () {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_END, function () {
                    p.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH), e.closeView();
                }),
                    (this._data = this.node.data.data),
                    (this._pos = this.node.data.pos),
                    this.node.getComponent(cc.Widget).updateAlignment(),
                    this.bg.setPosition(this.node.convertToNodeSpaceAR(this._pos)),
                    this.nameLabel.getComponent(l.LangLabel).setText("{@" + this._data.nameid + "}"),
                    this.titleLabel.getComponent(l.LangLabel).setText("{@" + this._data.nameid + "}");
            }),
            (t.prototype.onEnable = function () {}),
            i([h(cc.Node)], t.prototype, "bg", void 0),
            i([h(cc.Node)], t.prototype, "nameLabel", void 0),
            i([h(cc.Node)], t.prototype, "titleLabel", void 0),
            i([d], t)
        );
    })(c.GameComponent);
o.default = g;
