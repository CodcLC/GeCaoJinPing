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
var r = e("UIManager"),
    s = e("audioConst"),
    c = e("ClientEvents"),
    l = e("ViewUrl"),
    p = e("BaseComponent"),
    u = e("audioManager"),
    d = e("ChapterBoxManager"),
    h = e("HomeManager"),
    g = cc._decorator,
    m = g.ccclass,
    f = g.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.redPoint = null),
                (t.refreshRedPoint = function () {
                    t.redPoint.active = d.ChapterBoxMgr.checkRedPoint();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {
                this.addEvent(c.ClientEvents.CHAPTERBOX_RED_POINT.on(this.refreshRedPoint));
            }),
            (t.prototype.start = function () {
                this.refreshRedPoint();
            }),
            (t.prototype.onClickChapterBox = function () {
                u.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH),
                    c.ClientEvents.CHANGE_LOADING.emit(!0),
                    h.homeMgr.reportTouchBtnHome("LevelBox"),
                    r.UIMgr.showView(l.ViewUrl.ChapterBoxView, null, null, function () {
                        c.ClientEvents.CHANGE_LOADING.emit(!1);
                    });
            }),
            i([f(cc.Node)], t.prototype, "redPoint", void 0),
            i([m], t)
        );
    })(p.BaseComponent);
o.default = y;
