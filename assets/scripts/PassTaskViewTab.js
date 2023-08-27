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
    s = e("ClientEvents"),
    c = e("BaseComponent"),
    l = e("audioManager"),
    p = e("PassTaskManager"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.taskTabActive = null),
                (t.taskTabGray = null),
                (t.taskRed = null),
                (t.levelTabActive = null),
                (t.levelTabGray = null),
                (t.levelRed = null),
                (t._refreshTab = function () {
                    (t.taskTabActive.active = p.PassTaskMgr.viewTabState == p.PassViewTabState.TASK),
                        (t.taskTabGray.active = p.PassTaskMgr.viewTabState != p.PassViewTabState.TASK),
                        (t.levelTabActive.active = p.PassTaskMgr.viewTabState == p.PassViewTabState.LEVEL),
                        (t.levelTabGray.active = p.PassTaskMgr.viewTabState != p.PassViewTabState.LEVEL),
                        s.ClientEvents.PASS_TAB_REFRESH.emit();
                }),
                (t._refreshTaskRed = function () {
                    t.taskRed.active = p.PassTaskMgr.getTaskCanReward();
                }),
                (t._refreshLevelRed = function () {
                    t.levelRed.active = p.PassTaskMgr.getLevelCanReward();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {
                var e = this;
                this.taskTabGray.on(cc.Node.EventType.TOUCH_END, function () {
                    l.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH),
                        (p.PassTaskMgr.viewTabState = p.PassViewTabState.TASK),
                        e._refreshTab();
                }),
                    this.levelTabGray.on(cc.Node.EventType.TOUCH_END, function () {
                        l.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH),
                            (p.PassTaskMgr.viewTabState = p.PassViewTabState.LEVEL),
                            e._refreshTab();
                    }),
                    this.addEvent(s.ClientEvents.PASS_RED_TASK_REFRESH.on(this._refreshTaskRed)),
                    this.addEvent(s.ClientEvents.PASS_RED_LEVEL_REFRESH.on(this._refreshLevelRed));
            }),
            (t.prototype.start = function () {
                this._refreshTab(), this._refreshTaskRed(), this._refreshLevelRed();
            }),
            i([h(cc.Node)], t.prototype, "taskTabActive", void 0),
            i([h(cc.Node)], t.prototype, "taskTabGray", void 0),
            i([h(cc.Node)], t.prototype, "taskRed", void 0),
            i([h(cc.Node)], t.prototype, "levelTabActive", void 0),
            i([h(cc.Node)], t.prototype, "levelTabGray", void 0),
            i([h(cc.Node)], t.prototype, "levelRed", void 0),
            i([d], t)
        );
    })(c.BaseComponent);
o.default = g;
