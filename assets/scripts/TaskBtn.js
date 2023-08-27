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
    u = e("AchieveManager"),
    d = e("audioManager"),
    h = e("HomeManager"),
    g = e("TaskManager"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.redPoint = null),
                (t.refreshRedPoint = function () {
                    var e = g.TaskMgr.taskCanFinish(g.TaskType.DAY),
                        o = g.TaskMgr.taskCanFinish(g.TaskType.WEEK),
                        n = u.AchieveMgr.taskCanFinish();
                    t.redPoint.active = e || o || n;
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {
                this.addEvent(c.ClientEvents.TASK_RED_POINT.on(this.refreshRedPoint)),
                    this.addEvent(c.ClientEvents.ACHIEVE_RED_POINT.on(this.refreshRedPoint));
            }),
            (t.prototype.onEnable = function () {
                u.AchieveMgr.refreshTaskSomeState();
            }),
            (t.prototype.start = function () {
                this.refreshRedPoint();
            }),
            (t.prototype.onClickTaskBtn = function () {
                d.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH),
                    c.ClientEvents.CHANGE_LOADING.emit(!0),
                    h.homeMgr.reportTouchBtnHome("Task"),
                    r.UIMgr.showView(l.ViewUrl.TaskView, null, null, function () {
                        c.ClientEvents.CHANGE_LOADING.emit(!1);
                    });
            }),
            i([y(cc.Node)], t.prototype, "redPoint", void 0),
            i([f], t)
        );
    })(p.BaseComponent);
o.default = v;
