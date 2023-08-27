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
var r = e("GameComponent"),
    s = e("ViewUrl"),
    c = e("UIManager"),
    l = e("GameManager"),
    p = e("audioConst"),
    u = e("audioManager"),
    d = e("PlayerData"),
    h = e("HomeManager"),
    g = e("LevelManager"),
    m = e("AnalyticsManager"),
    f = e("GuideManager"),
    y = e("TaskManager"),
    v = cc._decorator,
    M = v.ccclass,
    _ = v.property,
    C = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.okBtn = null), (t.cancelBtn = null), (t.aniNode = null), t;
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.backHomeView;
            }),
            (t.prototype.onLoad = function () {
                var e = this;
                this.okBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    d.playData.getNewUserStep() === f.GUIDE_STEP.NEXTGAME && d.playData.addGuideStep(),
                        u.audioMgr.startEffect(p.AudioConst.COMMON_TOUCH),
                        m.analyMgr.reportLevelEnd("Quit"),
                        e.backToHome();
                }),
                    this.cancelBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        u.audioMgr.startEffect(p.AudioConst.COMMON_TOUCH), e.closeView();
                    });
            }),
            (t.prototype.start = function () {}),
            (t.prototype.onEnable = function () {
                this.onShowPlay(2, this.aniNode);
            }),
            (t.prototype.backToHome = function () {
                var e = Math.floor((Date.now() - h.homeMgr.getStartTime()) / 1e3),
                    t = g.levelMgr.getLevelJson().id > d.playData.getCompleteLevel() ? "New" : "Continue",
                    o = d.playData.checkIsChallenge();
                m.analyMgr.reportLevelFail(
                    o ? l.gameMgr.challengeData.id : g.levelMgr.getLevelJson().id,
                    Number(l.gameMgr.time),
                    e,
                    d.playData.getKillNum(),
                    t,
                    o
                ),
                    l.gameMgr.endGame(),
                    y.TaskMgr.saveActivityLocal(),
                    c.UIMgr.closeSomeView([s.ViewUrl.pauseView]),
                    this.closeView();
            }),
            i([_(cc.Node)], t.prototype, "okBtn", void 0),
            i([_(cc.Node)], t.prototype, "cancelBtn", void 0),
            i([_(cc.Node)], t.prototype, "aniNode", void 0),
            i([M], t)
        );
    })(r.GameComponent);
o.default = C;
