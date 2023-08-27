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
    c = e("ViewUrl"),
    l = e("GameComponent"),
    p = e("List"),
    u = e("AchieveManager"),
    d = e("audioManager"),
    h = e("TaskManager"),
    g = e("achieveItem"),
    m = e("taskItem"),
    f = e("WxManager"),
    y = cc._decorator,
    v = y.ccclass,
    M = y.property,
    _ = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.closeBtn = null),
                (t.taskView = null),
                (t.achieveView = null),
                (t.dailySp = null),
                (t.dailyLabel = null),
                (t.weekSp = null),
                (t.weekLabel = null),
                (t.achieveSp = null),
                (t.achieveLabel = null),
                (t.spfEnAbled = null),
                (t.spfDisAbled = null),
                (t.scrollView = null),
                (t.dayRedPoint = null),
                (t.weekRedPoint = null),
                (t.achieveRedPoint = null),
                (t.taskList = null),
                (t.refreshTaskRedPoint = function () {
                    (t.dayRedPoint.active = h.TaskMgr.taskCanFinish(h.TaskType.DAY)),
                        (t.weekRedPoint.active = h.TaskMgr.taskCanFinish(h.TaskType.WEEK));
                }),
                (t.refreshAchieveRedPoint = function () {
                    t.achieveRedPoint.active = u.AchieveMgr.taskCanFinish();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.TaskView;
            }),
            (t.prototype.onLoad = function () {
                this.addEvent(s.ClientEvents.TASK_CLOSE_VIEW.on(this.closeView)),
                    this.addEvent(s.ClientEvents.TASK_RED_POINT.on(this.refreshTaskRedPoint)),
                    this.addEvent(s.ClientEvents.ACHIEVE_RED_POINT.on(this.refreshAchieveRedPoint));
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(1, this.aniNode);
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), f.wxMgr.hideBanner();
            }),
            (t.prototype.start = function () {
                var e = this;
                f.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""}),
                    this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        d.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH), e.closeView();
                    }),
                    this.refreshTaskType(),
                    this.refreshTaskData(),
                    this.refreshTaskRedPoint(),
                    this.refreshAchieveRedPoint();
            }),
            (t.prototype.refreshTaskType = function () {
                var e = h.TaskMgr.getTaskType(),
                    t = cc.size(185, 63),
                    o = cc.size(200, 63);
                this.dailySp.spriteFrame = e == h.TaskType.DAY ? this.spfEnAbled : this.spfDisAbled;
                var n = e == h.TaskType.DAY ? o : t;
                this.dailySp.node.setContentSize(n),
                    (this.dailyLabel.fontSize = e == h.TaskType.DAY ? 36 : 30),
                    (this.dailyLabel.lineHeight = e == h.TaskType.DAY ? 40 : 32),
                    (this.dailyLabel.node.color =
                        e == h.TaskType.DAY ? new cc.Color(255, 255, 255, 255) : new cc.Color(170, 203, 233, 255)),
                    (this.weekSp.spriteFrame = e == h.TaskType.WEEK ? this.spfEnAbled : this.spfDisAbled),
                    (n = e == h.TaskType.WEEK ? o : t),
                    this.weekSp.node.setContentSize(n),
                    (this.weekLabel.fontSize = e == h.TaskType.WEEK ? 36 : 30),
                    (this.weekLabel.lineHeight = e == h.TaskType.WEEK ? 40 : 32),
                    (this.weekLabel.node.color =
                        e == h.TaskType.WEEK ? new cc.Color(255, 255, 255, 255) : new cc.Color(170, 203, 233, 255)),
                    (this.achieveSp.spriteFrame = e == h.TaskType.ACHIEVE ? this.spfEnAbled : this.spfDisAbled),
                    (n = e == h.TaskType.ACHIEVE ? o : t),
                    this.achieveSp.node.setContentSize(n),
                    (this.achieveLabel.fontSize = e == h.TaskType.ACHIEVE ? 36 : 30),
                    (this.achieveLabel.lineHeight = e == h.TaskType.ACHIEVE ? 40 : 32),
                    (this.achieveLabel.node.color =
                        e == h.TaskType.ACHIEVE ? new cc.Color(255, 255, 255, 255) : new cc.Color(170, 203, 233, 255)),
                    (this.dailySp.node.y = e == h.TaskType.DAY ? 0 : 1),
                    (this.weekSp.node.y = e == h.TaskType.WEEK ? 0 : 1),
                    (this.achieveSp.node.y = e == h.TaskType.ACHIEVE ? 0 : 1);
            }),
            (t.prototype.refreshTaskData = function () {
                var e = h.TaskMgr.getTaskType();
                if (
                    ((this.taskView.active = e == h.TaskType.DAY || e == h.TaskType.WEEK),
                    (this.achieveView.active = e == h.TaskType.ACHIEVE),
                    e == h.TaskType.DAY || e == h.TaskType.WEEK)
                ) {
                    var t = h.TaskMgr.getTaskData();
                    this.taskList.numItems = t.length;
                }
            }),
            (t.prototype.setTaskType = function (e, t) {
                var o = Number(t);
                h.TaskMgr.setTaskType(o),
                    this.refreshTaskType(),
                    this.refreshTaskData(),
                    this.scrollView.scrollToTop(0.2);
            }),
            (t.prototype.renderListTask = function (e, t) {
                e.getComponent(m.default).init(t);
            }),
            (t.prototype.renderListAchieve = function (e, t) {
                e.getComponent(g.default).init(t);
            }),
            i([M(cc.Node)], t.prototype, "aniNode", void 0),
            i([M(cc.Node)], t.prototype, "closeBtn", void 0),
            i([M(cc.Node)], t.prototype, "taskView", void 0),
            i([M(cc.Node)], t.prototype, "achieveView", void 0),
            i([M(cc.Sprite)], t.prototype, "dailySp", void 0),
            i([M(cc.Label)], t.prototype, "dailyLabel", void 0),
            i([M(cc.Sprite)], t.prototype, "weekSp", void 0),
            i([M(cc.Label)], t.prototype, "weekLabel", void 0),
            i([M(cc.Sprite)], t.prototype, "achieveSp", void 0),
            i([M(cc.Label)], t.prototype, "achieveLabel", void 0),
            i([M(cc.SpriteFrame)], t.prototype, "spfEnAbled", void 0),
            i([M(cc.SpriteFrame)], t.prototype, "spfDisAbled", void 0),
            i([M(cc.ScrollView)], t.prototype, "scrollView", void 0),
            i([M(cc.Node)], t.prototype, "dayRedPoint", void 0),
            i([M(cc.Node)], t.prototype, "weekRedPoint", void 0),
            i([M(cc.Node)], t.prototype, "achieveRedPoint", void 0),
            i([M(p.default)], t.prototype, "taskList", void 0),
            i([v], t)
        );
    })(l.GameComponent);
o.default = _;
