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
var r = e("List"),
    s = e("ActivityLevelManager"),
    c = e("JsonManager"),
    l = e("SpringConvertItem"),
    p = e("ActivityManager"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.itemCount = null), (t.convertList = null), (t.shopArr = null), (t.activity = null), t;
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                (this.activity = e), (this.shopArr = c.JsonMgr.getExchangeShopById(e.activityid)), this.initView();
            }),
            (t.prototype.initItem = function () {
                var e = s.activityMgr.getItemById(1018);
                this.itemCount.string = e.count.toString();
            }),
            (t.prototype.initView = function () {
                this.initItem(), this.sort(), (this.convertList.numItems = this.shopArr.length);
            }),
            (t.prototype.sort = function () {
                var e = p.activityManager.getConvert(this.activity.activityid);
                this.shopArr.sort(function (t, o) {
                    var n = e.get(t.id),
                        a = e.get(o.id);
                    return n.hasChange && a.hasChange
                        ? t.id - o.id
                        : n.hasChange && a.hasChange
                        ? t.id - o.id
                        : n.hasChange && !a.hasChange
                        ? 1
                        : !n.hasChange && a.hasChange
                        ? -1
                        : void 0;
                });
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(l.default).init(t, this.activity, this.shopArr[t], this);
            }),
            i([h(cc.Label)], t.prototype, "itemCount", void 0),
            i([h(r.default)], t.prototype, "convertList", void 0),
            i([d], t)
        );
    })(cc.Component);
o.default = g;
