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
    l = e("audioManager"),
    p = e("JsonManager"),
    u = e("ResManager"),
    d = cc._decorator,
    h = d.ccclass,
    g = d.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.bg = null), (t.icon = null), (t.numLabel = null), (t._data = null), (t._pos = null), t;
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.SevenChallengeViewTip;
            }),
            (t.prototype.start = function () {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_END, function () {
                    l.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH), e.closeView();
                }),
                    (this._data = this.node.data.data),
                    (this._pos = this.node.data.pos),
                    this.node.getComponent(cc.Widget).updateAlignment(),
                    this.bg.setPosition(this.node.convertToNodeSpaceAR(this._pos));
                var t = this._data.id,
                    o = this._data.num;
                if (((this.numLabel.string = "x" + o), 1001 === t))
                    u.ResManager.loadGoldIcon(this.icon), this.icon.node.setContentSize(54, 57);
                else if (1002 === t) u.ResManager.loadItemCommon(t, this.icon), this.icon.node.setContentSize(50, 59);
                else if (1003 === t) u.ResManager.loadItemCommon(t, this.icon), this.icon.node.setContentSize(35, 49);
                else if (1014 === t) u.ResManager.loadItemCommon(t, this.icon), this.icon.node.setContentSize(54, 57);
                else if (1017 == t) u.ResManager.loadHeroExp(this.icon), this.icon.node.setContentSize(60, 60);
                else if (2001 == t || 2002 == t || 2003 == t) {
                    var n = p.JsonMgr.getItemJsonById(t);
                    u.ResManager.loadStoreKeys(n.id, this.icon), this.icon.node.setContentSize(60, 60);
                } else
                    3001 == t || 3002 == t || 3003 == t
                        ? (u.ResManager.loadHeroChip(t.toString(), this.icon), this.icon.node.setContentSize(53, 57))
                        : t > 1e4 && t < 10010
                        ? (u.ResManager.loadMapIcon(t, this.icon), this.icon.node.setContentSize(cc.size(66, 56)))
                        : 1010303 === t
                        ? (u.ResManager.loadItemCommon(t, this.icon), this.icon.node.setContentSize(54, 57))
                        : 1010304 === t &&
                          (u.ResManager.loadItemCommon(t, this.icon), this.icon.node.setContentSize(54, 57));
            }),
            i([g(cc.Node)], t.prototype, "bg", void 0),
            i([g(cc.Sprite)], t.prototype, "icon", void 0),
            i([g(cc.Label)], t.prototype, "numLabel", void 0),
            i([h], t)
        );
    })(c.GameComponent);
o.default = m;
