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
    s = e("BaseComponent"),
    c = e("List"),
    l = e("PassTaskManager"),
    p = e("PassLevelItem"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.levelList = null),
                (t.suoNode = null),
                (t._refreshData = function () {
                    var e = l.PassTaskMgr.getPassJsonByKey(l.PassTaskMgr.getOpenId()),
                        o = l.PassTaskMgr.getPassInfoByKey(l.PassTaskMgr.getOpenId());
                    t.suoNode.active = o.adTimes < e.adnum;
                    var n = l.PassTaskMgr.refreshCurPassLevel();
                    t.levelList.numItems = n.length;
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {
                this.addEvent(r.ClientEvents.PASS_LEVEL_REFRESH.on(this._refreshData)), this._refreshData();
            }),
            (t.prototype.start = function () {
                var e = this,
                    t = l.PassTaskMgr.getPassInfoByKey(l.PassTaskMgr.getOpenId()),
                    o = l.PassTaskMgr.getPassLevelByKey(l.PassTaskMgr.getOpenId()),
                    n = Object.keys(o);
                n.sort(function (e, t) {
                    return Number(e) - Number(t);
                });
                var a = Number(n[n.length - 1]);
                this.scheduleOnce(function () {
                    t.level <= 2
                        ? e.levelList.scrollTo(0, 0.2)
                        : t.level >= a - 2
                        ? e.levelList.scrollTo(a, 0.2)
                        : e.levelList.scrollTo(t.level - 2, 0.2);
                }, 0.1);
            }),
            (t.prototype.onEnable = function () {
                this._refreshData();
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(p.default).init(t);
            }),
            i([h(c.default)], t.prototype, "levelList", void 0),
            i([h(cc.Node)], t.prototype, "suoNode", void 0),
            i([d], t)
        );
    })(s.BaseComponent);
o.default = g;
