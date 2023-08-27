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
    s = e("censtant"),
    c = e("ClientEvents"),
    l = e("ViewUrl"),
    p = e("GameComponent"),
    u = e("List"),
    d = e("TimeUtil"),
    h = e("audioManager"),
    g = e("EquipManager"),
    m = e("LanguageManager"),
    f = e("ResManager"),
    y = e("SevenChallengeManager"),
    v = e("SevenChallengeTabItem"),
    M = e("SevenChallengeTaskBoxItem"),
    _ = e("SevenChallengeTaskItem"),
    C = cc._decorator,
    b = C.ccclass,
    T = C.property,
    w = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.closeBtn = null),
                (t.ssrWeapon = null),
                (t.countdownKey = null),
                (t.countdownValue = null),
                (t.tabContent = null),
                (t.tabPrefab = null),
                (t.taskList = null),
                (t.jifenTxt = null),
                (t.jifenProBar = null),
                (t.boxArray = []),
                (t.boxPrefab = null),
                (t.isAutoPop = !1),
                (t._refreshTime = function () {
                    var e = y.SevenChallengeMgr.getCountDownStateAndTime();
                    e.timeState == y.CountDownState.OVER
                        ? (t.unschedule(t._refreshTime),
                          (t.countdownKey.node.active = !1),
                          (t.countdownValue.node.active = !1),
                          y.SevenChallengeMgr.autoPushAllReward(),
                          t.closeView(t.isAutoPop))
                        : e.leftTime <= 0
                        ? ((t.countdownKey.node.active = !1),
                          (t.countdownValue.node.active = !1),
                          y.SevenChallengeMgr.checkGameState(),
                          c.ClientEvents.SEVEN_CHALLENGE_TAB_SUO.emit(),
                          y.SevenChallengeMgr.setCurTab(y.SevenChallengeMgr.getCurTab()),
                          c.ClientEvents.SEVEN_CHALLENGE_TAB.emit())
                        : ((t.countdownKey.string = t._getTimeStrByState(e.timeState)),
                          (t.countdownKey.node.active = !0),
                          (t.countdownValue.string = d.TimeUtil.timeConvertToDDHHMMSS(e.leftTime)),
                          (t.countdownValue.node.active = !0));
                }),
                (t._refreshList = function () {
                    y.SevenChallengeMgr.refreshTaskDataByDay(y.SevenChallengeMgr.getCurTab());
                    var e = y.SevenChallengeMgr.getTaskData();
                    t.taskList.numItems = e.length;
                }),
                (t._refreshJifen = function () {
                    (t.jifenTxt.string = y.SevenChallengeMgr.getChallengePoint().toString()),
                        (t.jifenProBar.width = y.SevenChallengeMgr.getProBarWidth());
                }),
                (t._initBoxs = function () {
                    for (
                        var e = y.SevenChallengeMgr.getSevenChallenge(), o = Object.keys(e.rewardMap), n = 0;
                        n < o.length;
                        n++
                    ) {
                        var a = o[n],
                            i = e.rewardMap["" + a],
                            r = t.boxArray[n],
                            s = cc.instantiate(t.boxPrefab);
                        s.getComponent(M.default).init(a, i), (s.parent = r);
                    }
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return l.ViewUrl.SevenChallengeView;
            }),
            (t.prototype.onLoad = function () {
                var e = this;
                this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    h.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH), e.closeView(e.isAutoPop);
                }),
                    this.addEvent(c.ClientEvents.SEVEN_CHALLENGE_REFRESH_TASK.on(this._refreshList)),
                    this.addEvent(c.ClientEvents.SEVEN_CHALLENGE_TAB.on(this._refreshList)),
                    this.addEvent(c.ClientEvents.SEVEN_CHALLENGE_REFRESH_POINT.on(this._refreshJifen));
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(1, this.aniNode);
            }),
            (t.prototype.start = function () {
                this._initSsrWeapon(),
                    this._refreshStateTime(),
                    this._initTab(),
                    this._refreshJifen(),
                    this._refreshList(),
                    this._initBoxs(),
                    (this.isAutoPop = this.node.isAutoPop);
            }),
            (t.prototype._initSsrWeapon = function () {
                var e = y.SevenChallengeMgr.getRwardSSRWeaponId(),
                    t = g.equipMgr.getEquipInfoById(e);
                f.ResManager.loadIcon(this.ssrWeapon, s.Weapon.TEXTURE_ + t.getEquipIcon());
            }),
            (t.prototype._refreshStateTime = function () {
                this._refreshTime(),
                    this.unschedule(this._refreshTime),
                    this.schedule(this._refreshTime, 1, cc.macro.REPEAT_FOREVER);
            }),
            (t.prototype._getTimeStrByState = function (e) {
                switch (e) {
                    case y.CountDownState.NEWTASK:
                        return m.langMgr.getStr("UI_Seven_Challenge_4");
                    case y.CountDownState.LAST:
                        return m.langMgr.getStr("UI_Seven_Challenge_5");
                    case y.CountDownState.REWARD:
                        return m.langMgr.getStr("UI_Seven_Challenge_6");
                    default:
                        return "";
                }
            }),
            (t.prototype._initTab = function () {
                for (var e = y.SevenChallengeMgr.getMaxDay(), t = 1; t <= e; t++) {
                    var o = cc.instantiate(this.tabPrefab);
                    o.getComponent(v.default).init(t), (o.parent = this.tabContent);
                }
                y.SevenChallengeMgr.setCurTab(y.SevenChallengeMgr.getCurTab()),
                    c.ClientEvents.SEVEN_CHALLENGE_TAB.emit();
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(_.default).init(t);
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), this.unschedule(this._refreshTime);
            }),
            i([T(cc.Node)], t.prototype, "aniNode", void 0),
            i([T(cc.Node)], t.prototype, "closeBtn", void 0),
            i([T(cc.Sprite)], t.prototype, "ssrWeapon", void 0),
            i([T(cc.Label)], t.prototype, "countdownKey", void 0),
            i([T(cc.Label)], t.prototype, "countdownValue", void 0),
            i([T(cc.Node)], t.prototype, "tabContent", void 0),
            i([T(cc.Prefab)], t.prototype, "tabPrefab", void 0),
            i([T(u.default)], t.prototype, "taskList", void 0),
            i([T(cc.Label)], t.prototype, "jifenTxt", void 0),
            i([T(cc.Node)], t.prototype, "jifenProBar", void 0),
            i([T([cc.Node])], t.prototype, "boxArray", void 0),
            i([T(cc.Prefab)], t.prototype, "boxPrefab", void 0),
            i([b], t)
        );
    })(p.GameComponent);
o.default = w;
