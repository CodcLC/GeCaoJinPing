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
Object.defineProperty(o, "__esModule", {value: !0}), (o.ActivityLevelView = void 0);
var r = e("GameComponent"),
    s = cc._decorator.property,
    c = e("List"),
    l = e("ActivityLevelManager"),
    p = e("ViewUrl"),
    u = cc._decorator.ccclass,
    d = e("ActivityLevelItem"),
    h = e("ClientEvents"),
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.levelList = null), (t.aniNode = null), (t.backNode = null), t;
        }
        return (
            a(t, e),
            (t.prototype.onEnable = function () {
                var e = this;
                (this.aniNode.opacity = 0),
                    this.scheduleOnce(function () {
                        e.onShowPlay(1, e.aniNode);
                    }, 0.1);
            }),
            (t.prototype.start = function () {
                var e = this;
                this.aniNode.getComponent(cc.Widget).updateAlignment(),
                    l.activityMgr.initActivityItem(),
                    l.activityMgr.init(),
                    this.initView(),
                    this.backNode.on(cc.Node.EventType.TOUCH_END, function () {
                        h.ClientEvents.CLOSE_ACTIVITY.emit(), e.closeView();
                    });
            }),
            (t.prototype.initView = function () {
                this.levelList.numItems = l.activityMgr.getDataLen();
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(d.default).init(l.activityMgr.getDataByIndex(t), t);
            }),
            (t.prototype.getUrl = function () {
                return p.ViewUrl.ActivityLevelView;
            }),
            i([s(c.default)], t.prototype, "levelList", void 0),
            i([s(cc.Node)], t.prototype, "aniNode", void 0),
            i([s(cc.Node)], t.prototype, "backNode", void 0),
            i([u], t)
        );
    })(r.GameComponent);
o.ActivityLevelView = g;
