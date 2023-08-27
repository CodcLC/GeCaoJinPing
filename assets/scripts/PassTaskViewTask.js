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
    s = e("ClientEvents"),
    c = e("ViewUrl"),
    l = e("BaseComponent"),
    p = e("List"),
    u = e("AnalyticsManager"),
    d = e("PassTaskManager"),
    h = e("PassTaskItem"),
    g = cc._decorator,
    m = g.ccclass,
    f = g.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.taskList = null),
                (t._refreshData = function () {
                    var e = d.PassTaskMgr.refreshCurPassTask();
                    t.taskList.numItems = e.length;
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {
                this.addEvent(s.ClientEvents.PASS_TASK_REFRESH.on(this._refreshData)), this._refreshData();
            }),
            (t.prototype.onEnable = function () {
                this._refreshData();
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(h.default).init(t);
            }),
            (t.prototype.clickAllReward = function () {
                var e = d.PassTaskMgr.getPassInfoByKey(d.PassTaskMgr.getOpenId()),
                    t = d.PassTaskMgr.getPassJsonByKey(d.PassTaskMgr.getOpenId()),
                    o = d.PassTaskMgr.getPassTaskByKey(d.PassTaskMgr.getOpenId()),
                    n = Object.keys(o);
                d.PassTaskMgr.resetCommonViewData();
                for (var a = !1, i = 0; i < n.length; i++) {
                    var l = o[n[i]];
                    if (l.state == d.PassTaskState.Finish) {
                        var p = d.PassTaskMgr.getPassTaskJson("" + l.id);
                        d.PassTaskMgr.GetPassReward(p.idfixed, d.PassTaskMgr.getOpenId()),
                            (l.state = d.PassTaskState.Rward),
                            (a = !0),
                            u.analyMgr.reportPassFinish(p.id, p.idfixed, e.adTimes >= t.adnum, Number(e.level)),
                            u.analyMgr.reportPassReward(p.id, p.idfixed, e.adTimes >= t.adnum, Number(e.level));
                    }
                }
                a &&
                    (r.UIMgr.showView(c.ViewUrl.commonRewardView, null, d.PassTaskMgr.getCommonViewData()),
                    d.PassTaskMgr.savePassTaskDatas(),
                    s.ClientEvents.PASS_RED_TASK_REFRESH.emit(),
                    this._refreshData());
            }),
            i([f(p.default)], t.prototype, "taskList", void 0),
            i([m], t)
        );
    })(l.BaseComponent);
o.default = y;
