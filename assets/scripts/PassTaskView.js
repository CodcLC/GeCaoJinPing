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
    p = e("TimeUtil"),
    u = e("audioManager"),
    d = e("LanguageManager"),
    h = e("PassTaskManager"),
    g = e("PlayerData"),
    m = e("WxManager"),
    f = cc._decorator,
    y = f.ccclass,
    v = f.property,
    M = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.closeBtn = null),
                (t.gameOverTimeLabel = null),
                (t.taskOverTimeLabel = null),
                (t.passLevelProgress = null),
                (t.passLevelLabel = null),
                (t.passHighDes = null),
                (t.taskView = null),
                (t.levelView = null),
                (t.adNumsBtnNode = null),
                (t.yuanBoxAdNode = null),
                (t.seaonLabel = null),
                (t._refreshTime = function () {
                    var e = h.PassTaskMgr.getPassOverTimeDiff();
                    e <= 0
                        ? (t.unschedule(t._refreshTime),
                          h.PassTaskMgr.setPassInfoState(h.PassTaskMgr.getOpenId(), h.PassState.FINISH),
                          h.PassTaskMgr.autoPushAllReward(h.PassTaskMgr.getOpenId()),
                          s.ClientEvents.PASS_INFO_REFRESH.emit(),
                          t.closeView())
                        : (t.gameOverTimeLabel.string = p.TimeUtil.timeConvertToDDHH(e));
                }),
                (t._refreshTask = function () {
                    var e = h.PassTaskMgr.getTaskOverTimeDiff();
                    e / 1e3 <= 1
                        ? (h.PassTaskMgr.refreshTaskState(h.PassTaskMgr.getOpenId(), h.PassTaskState.NotFinish),
                          h.PassTaskMgr.refreshTaskSomeState())
                        : (t.taskOverTimeLabel.string = p.TimeUtil.timeConvertToDDHHMMSS(e));
                }),
                (t._refreshPassLevelExp = function () {
                    var e = h.PassTaskMgr.getOpenId(),
                        o = h.PassTaskMgr.getPassInfoByKey(e);
                    t.passLevelLabel.string = o.level.toString();
                    for (
                        var n = h.PassTaskMgr.getPassLevelByKey(e), a = Object.keys(n), i = o.level, r = -1, s = 0;
                        s < a.length;
                        s++
                    ) {
                        var c = n[a[s]];
                        if (c.level == i) {
                            r = c.id;
                            break;
                        }
                    }
                    var l = h.PassTaskMgr.getPassLevelJson(r.toString());
                    t.passLevelProgress.progress = o.exp / l.exp;
                }),
                (t._refreshTabView = function () {
                    (t.taskView.active = h.PassTaskMgr.viewTabState == h.PassViewTabState.TASK),
                        (t.levelView.active = h.PassTaskMgr.viewTabState == h.PassViewTabState.LEVEL);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.PassTaskView;
            }),
            (t.prototype.onLoad = function () {
                var e = this;
                this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    u.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH), e.closeView();
                }),
                    this.addEvent(s.ClientEvents.PASS_LEVEL_EXP_REFRESH.on(this._refreshPassLevelExp)),
                    this.addEvent(s.ClientEvents.PASS_TAB_REFRESH.on(this._refreshTabView)),
                    this.addEvent(s.ClientEvents.PASS_VIEW_CLOSE.on(this.closeView));
                var t = h.PassTaskMgr.getPassJsonByKey(h.PassTaskMgr.getOpenId());
                (this.seaonLabel.string = " " + d.langMgr.getStr(t.passname)), h.PassTaskMgr.refreshDayTaskState();
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(1, this.aniNode);
            }),
            (t.prototype.start = function () {
                m.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""}),
                    this._refreshGameTime(),
                    this._refreshTaskTime(),
                    this._refreshExtraState(),
                    this._refreshExtraDes(),
                    this._refreshPassLevelExp();
            }),
            (t.prototype._refreshGameTime = function () {
                this._refreshTime(),
                    this.unschedule(this._refreshTime),
                    this.schedule(this._refreshTime, 1, cc.macro.REPEAT_FOREVER);
            }),
            (t.prototype._refreshTaskTime = function () {
                this._refreshTask(),
                    this.unschedule(this._refreshTask),
                    this.schedule(this._refreshTask, 1, cc.macro.REPEAT_FOREVER);
            }),
            (t.prototype.onClickHighAdd = function () {
                var e = this;
                m.wxMgr.createVideo(
                    {placementName: "AdPass", openUi: "PassTaskView", level: g.playData.getLevel()},
                    function () {},
                    function () {
                        h.PassTaskMgr.addHightAdNum(h.PassTaskMgr.getOpenId(), 1),
                            e._refreshExtraDes(),
                            e._refreshExtraState();
                        var t = h.PassTaskMgr.getPassJsonByKey(h.PassTaskMgr.getOpenId());
                        h.PassTaskMgr.getPassInfoByKey(h.PassTaskMgr.getOpenId()).adTimes >= t.adnum &&
                            s.ClientEvents.PASS_LEVEL_REFRESH.emit();
                    }
                );
            }),
            (t.prototype._refreshExtraDes = function () {
                var e = d.langMgr.getStr("PassTask_Tips_3"),
                    t = h.PassTaskMgr.getPassJsonByKey(h.PassTaskMgr.getOpenId()),
                    o = h.PassTaskMgr.getPassInfoByKey(h.PassTaskMgr.getOpenId()).adTimes;
                o > t.adnum && (o = t.adnum),
                    (e = (e = e.replace("0", o.toString())).replace("$", t.adnum.toString())),
                    (this.passHighDes.string = e);
            }),
            (t.prototype._refreshExtraState = function () {
                var e = h.PassTaskMgr.getPassJsonByKey(h.PassTaskMgr.getOpenId()),
                    t = h.PassTaskMgr.getPassInfoByKey(h.PassTaskMgr.getOpenId());
                (this.adNumsBtnNode.active = t.adTimes < e.adnum), (this.yuanBoxAdNode.active = t.adTimes < e.adnum);
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this),
                    m.wxMgr.hideBanner(),
                    this.unschedule(this._refreshTime),
                    this.unschedule(this._refreshTask);
            }),
            i([v(cc.Node)], t.prototype, "aniNode", void 0),
            i([v(cc.Node)], t.prototype, "closeBtn", void 0),
            i([v(cc.Label)], t.prototype, "gameOverTimeLabel", void 0),
            i([v(cc.Label)], t.prototype, "taskOverTimeLabel", void 0),
            i([v(cc.ProgressBar)], t.prototype, "passLevelProgress", void 0),
            i([v(cc.Label)], t.prototype, "passLevelLabel", void 0),
            i([v(cc.Label)], t.prototype, "passHighDes", void 0),
            i([v(cc.Node)], t.prototype, "taskView", void 0),
            i([v(cc.Node)], t.prototype, "levelView", void 0),
            i([v(cc.Node)], t.prototype, "adNumsBtnNode", void 0),
            i([v(cc.Node)], t.prototype, "yuanBoxAdNode", void 0),
            i([v(cc.Label)], t.prototype, "seaonLabel", void 0),
            i([y], t)
        );
    })(l.GameComponent);
o.default = M;
