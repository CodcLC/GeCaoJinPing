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
var r = e("ResManager"),
    s = e("JsonManager"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.isFirst = null), (t.icon = null), (t.bg = null), (t.count = null), (t.id = 0), t;
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t, o) {
                if (
                    ((this.id = t),
                    (this.isFirst.parent.active = e),
                    (this.count.string = o.toString()),
                    r.ResManager.loadQualityBg(3, this.bg),
                    1001 === t)
                )
                    r.ResManager.loadGoldIcon(this.icon),
                        r.ResManager.loadQualityBg(3, this.bg),
                        this.icon.node.setContentSize(78, 82);
                else if (1002 === t) {
                    var n = s.JsonMgr.getItemJsonById(this.id);
                    r.ResManager.loadItemCommon(t, this.icon),
                        r.ResManager.loadQualityBg(n.quality, this.bg),
                        this.icon.node.setContentSize(80, 94);
                } else
                    1003 === t
                        ? ((n = s.JsonMgr.getItemJsonById(this.id)),
                          r.ResManager.loadItemCommon(t, this.icon),
                          r.ResManager.loadQualityBg(n.quality, this.bg),
                          this.icon.node.setContentSize(70, 98))
                        : 1014 === t
                        ? ((n = s.JsonMgr.getItemJsonById(this.id)),
                          r.ResManager.loadItemCommon(t, this.icon),
                          r.ResManager.loadQualityBg(n.quality, this.bg),
                          this.icon.node.setContentSize(78, 80))
                        : 1015 === t
                        ? ((n = s.JsonMgr.getItemJsonById(this.id)),
                          r.ResManager.loadItemCommon(t, this.icon),
                          r.ResManager.loadQualityBg(n.quality, this.bg),
                          this.icon.node.setContentSize(63, 87))
                        : 1016 == t
                        ? ((n = s.JsonMgr.getItemJsonById(this.id)),
                          r.ResManager.loadItemCommon(t, this.icon),
                          r.ResManager.loadQualityBg(n.quality, this.bg),
                          this.icon.node.setContentSize(63, 86))
                        : 2001 == t || 2002 == t || 2003 == t
                        ? ((n = s.JsonMgr.getItemJsonById(t)),
                          r.ResManager.loadQualityBg(n.quality, this.bg),
                          r.ResManager.loadStoreKeys(n.id, this.icon),
                          this.icon.node.setContentSize(88, 85))
                        : 3001 == t || 3002 == t || 3003 == t
                        ? ((n = s.JsonMgr.getItemJsonById(t)),
                          r.ResManager.loadQualityBg(n.quality, this.bg),
                          r.ResManager.loadHeroChip(t.toString(), this.icon),
                          this.icon.node.setContentSize(89, 95))
                        : t > 1e4 && t < 10010
                        ? (r.ResManager.loadQualityBg(1, this.bg),
                          r.ResManager.loadMapIcon(t, this.icon),
                          this.icon.node.setContentSize(cc.size(94, 80)))
                        : 1017 === t
                        ? (r.ResManager.loadQualityBg(3, this.bg),
                          r.ResManager.loadHeroExp(this.icon),
                          this.icon.node.setContentSize(cc.size(96, 96)))
                        : t > 1017 &&
                          t < 1020 &&
                          (r.ResManager.loadQualityBg(3, this.bg),
                          r.ResManager.loadActivityItem(this.icon, t.toString()),
                          this.icon.node.setContentSize(cc.size(74, 91)));
            }),
            i([p(cc.Node)], t.prototype, "isFirst", void 0),
            i([p(cc.Sprite)], t.prototype, "icon", void 0),
            i([p(cc.Sprite)], t.prototype, "bg", void 0),
            i([p(cc.Label)], t.prototype, "count", void 0),
            i([l], t)
        );
    })(cc.Component);
o.default = u;
