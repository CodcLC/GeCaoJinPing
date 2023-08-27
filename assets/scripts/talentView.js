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
    l = e("List"),
    p = e("talentManager"),
    u = e("talentItem"),
    d = cc._decorator,
    h = d.ccclass,
    g = d.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.talentList = null),
                (t.scrollToPercent = function (e) {
                    var o = t.talentList.numItems - e - 1;
                    (o = o > 0 ? o : 0), t.talentList.scrollTo(o, 0.3);
                }),
                (t.initNumItem = function () {
                    t.talentList.numItems = p.talentMgr.getLen();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.talentView;
            }),
            (t.prototype.onEnable = function () {
                var e = this;
                this.addEvent(r.ClientEvents.TALENT_REFRESH.on(this.initNumItem)),
                    this.addEvent(r.ClientEvents.SCROLL_TALENT_LIST.on(this.scrollToPercent)),
                    p.talentMgr.initData(),
                    this.initNumItem(),
                    this.scheduleOnce(function () {
                        e.talentList.scrollView.scrollToPercentVertical(p.talentMgr.getPercent(), 0);
                    });
            }),
            (t.prototype.start = function () {}),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(u.default).init(t);
            }),
            i([g(l.default)], t.prototype, "talentList", void 0),
            i([h], t)
        );
    })(c.GameComponent);
o.default = m;
