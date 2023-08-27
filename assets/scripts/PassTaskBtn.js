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
    u = e("ReporterBridge"),
    d = e("audioManager"),
    h = e("HomeManager"),
    g = e("PassTaskManager"),
    m = e("PlayerData"),
    f = cc._decorator,
    y = f.ccclass,
    v = f.property,
    M = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.redPoint = null),
                (t.btnNode = null),
                (t.refresh = function () {
                    g.PassTaskMgr.checkPassState(), t._refreshBtn(), t._refreshRedPoint();
                }),
                (t._refreshBtn = function () {
                    if (
                        ((t.btnNode.active =
                            m.playData.getCompleteLevel() >= g.PassTaskMgr.getLimitedLevel() &&
                            !!g.PassTaskMgr.getOpenId() &&
                            g.PassTaskMgr.getPassInfoByKey(g.PassTaskMgr.getOpenId()).state == g.PassState.OPEN),
                        m.playData.getCompleteLevel() >= g.PassTaskMgr.getLimitedLevel() &&
                            g.PassTaskMgr.getOpenId() &&
                            g.PassTaskMgr.getPassInfoByKey(g.PassTaskMgr.getOpenId()).state == g.PassState.OPEN)
                    ) {
                        var e = g.PassTaskMgr.getPassInfoByKey(g.PassTaskMgr.getOpenId());
                        u.ReporterBridge.setUserProperty({Pass_Level: e.id.toString() + "|" + e.level.toString()});
                    }
                }),
                (t._refreshRedPoint = function () {
                    t.redPoint.active = g.PassTaskMgr.getTaskCanReward() || g.PassTaskMgr.getLevelCanReward();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {
                this.addEvent(c.ClientEvents.PASS_INFO_REFRESH.on(this.refresh)),
                    this.addEvent(c.ClientEvents.PASS_RED_TASK_REFRESH.on(this._refreshRedPoint)),
                    this.addEvent(c.ClientEvents.PASS_RED_LEVEL_REFRESH.on(this._refreshRedPoint));
            }),
            (t.prototype.start = function () {
                g.PassTaskMgr.checkPassState(),
                    g.PassTaskMgr.refreshDayTaskState(),
                    g.PassTaskMgr.refreshTaskSomeState(),
                    g.PassTaskMgr.checkReissueReward(),
                    this._refreshBtn(),
                    this._refreshRedPoint();
            }),
            (t.prototype.onClickBtn = function () {
                d.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH),
                    c.ClientEvents.CHANGE_LOADING.emit(!0),
                    h.homeMgr.reportTouchBtnHome("Pass"),
                    r.UIMgr.showView(l.ViewUrl.PassTaskView, null, null, function () {
                        c.ClientEvents.CHANGE_LOADING.emit(!1);
                    });
            }),
            i([v(cc.Node)], t.prototype, "redPoint", void 0),
            i([v(cc.Node)], t.prototype, "btnNode", void 0),
            i([y], t)
        );
    })(p.BaseComponent);
o.default = M;
