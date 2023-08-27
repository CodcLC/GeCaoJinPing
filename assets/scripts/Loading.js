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
        },
    r =
        (this && this.__awaiter) ||
        function (e, t, o, n) {
            return new (o || (o = Promise))(function (a, i) {
                function r(e) {
                    try {
                        c(n.next(e));
                    } catch (t) {
                        i(t);
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e));
                    } catch (t) {
                        i(t);
                    }
                }
                function c(e) {
                    var t;
                    e.done
                        ? a(e.value)
                        : ((t = e.value),
                          t instanceof o
                              ? t
                              : new o(function (e) {
                                    e(t);
                                })).then(r, s);
                }
                c((n = n.apply(e, t || [])).next());
            });
        },
    s =
        (this && this.__generator) ||
        function (e, t) {
            var o,
                n,
                a,
                i,
                r = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                };
            return (
                (i = {next: s(0), throw: s(1), return: s(2)}),
                "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                i
            );
            function s(e) {
                return function (t) {
                    return c([e, t]);
                };
            }
            function c(i) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; r; )
                    try {
                        if (
                            ((o = 1),
                            n &&
                                (a =
                                    2 & i[0]
                                        ? n.return
                                        : i[0]
                                        ? n.throw || ((a = n.return) && a.call(n), 0)
                                        : n.next) &&
                                !(a = a.call(n, i[1])).done)
                        )
                            return a;
                        switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return r.label++, {value: i[1], done: !1};
                            case 5:
                                r.label++, (n = i[1]), (i = [0]);
                                continue;
                            case 7:
                                (i = r.ops.pop()), r.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    r = 0;
                                    continue;
                                }
                                if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                    r.label = i[1];
                                    break;
                                }
                                if (6 === i[0] && r.label < a[1]) {
                                    (r.label = a[1]), (a = i);
                                    break;
                                }
                                if (a && r.label < a[2]) {
                                    (r.label = a[2]), r.ops.push(i);
                                    break;
                                }
                                a[2] && r.ops.pop(), r.trys.pop();
                                continue;
                        }
                        i = t.call(e, r);
                    } catch (s) {
                        (i = [6, s]), (n = 0);
                    } finally {
                        o = a = 0;
                    }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0};
            }
        };
Object.defineProperty(o, "__esModule", {value: !0}), (o.Loading = void 0);
var c = e("LoadManager"),
    l = e("ViewUrl"),
    p = e("JsonManager"),
    u = e("audioManager"),
    d = e("PlayerData"),
    h = e("LanguageManager"),
    g = e("PoolManager"),
    m = e("GameManager"),
    f = e("HeroData"),
    y = e("DrawManager"),
    v = e("TaskManager"),
    M = e("ReporterBridge"),
    _ = e("AnalyticsManager"),
    C = e("Version"),
    b = e("TimeUtil"),
    T = e("ChapterBoxManager"),
    w = e("SevenLoginManager"),
    N = e("GuideManager"),
    E = e("SevenChallengeManager"),
    S = e("TrackingIOManager"),
    D = e("CoinBoxManager"),
    A = e("CodeManager"),
    k = e("PassTaskManager"),
    I = e("ActivityManager"),
    R = e("ActivityLevelManager"),
    L = e("AchieveManager"),
    P = e("CdTimerManager"),
    O = e("HeroManager"),
    B = e("ZtSdk"),
    x = e("AdsTimesManager"),
    U = e("WxManager"),
    G = e("SubscribeManager"),
    H = cc._decorator,
    V = H.ccclass,
    F = H.property,
    q = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.loadProgress = null),
                (t.percentLabel = null),
                (t.dibanNode = null),
                (t.tishiNode = null),
                (t.nowAddPercent = 0.4),
                (t.nowProgress = 0),
                (t.enemyPrefab = null),
                (t.loadEntities = function () {
                    for (var e = 0; e < 50; e++) g.poolMgr.putNodeToPool(cc.instantiate(t.enemyPrefab));
                }),
                (t.progressAdd = function (e, o) {
                    var n = t.nowProgress + (e / o) * t.nowAddPercent;
                    t.progressPercent(n);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {
                return r(this, void 0, void 0, function () {
                    return s(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.loadGame()];
                            case 1:
                                return e.sent(), [2];
                        }
                    });
                });
            }),
            (t.prototype.loadGame = function () {
                return r(this, void 0, void 0, function () {
                    var e,
                        t = this;
                    return s(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return (
                                    B.ZtSdk.instance.setSystemTime(),
                                    this.progressPercent(0),
                                    U.wxMgr.init(),
                                    S.TrackingIOMgr.init(),
                                    M.ReporterBridge.init(),
                                    [4, p.JsonMgr.loadJson(this.progressAdd)]
                                );
                            case 1:
                                return (
                                    o.sent(),
                                    (this.dibanNode.active =
                                        this.tishiNode.active =
                                        this.percentLabel.node.active =
                                            !0),
                                    this.resetNowProgress(),
                                    [4, c.LoadManager.loadResAwait(l.ViewUrl.homeUI, cc.Prefab)]
                                );
                            case 2:
                                return o.sent(), A.codeMgr.initCode(), (e = this), [4, this.loadEnemyNode()];
                            case 3:
                                return (
                                    (e.enemyPrefab = o.sent()),
                                    f.HeroData.instance().init(),
                                    this.schedule(this.loadEntities, 0.2, 10),
                                    this.scheduleOnce(function () {
                                        return r(t, void 0, void 0, function () {
                                            var e = this;
                                            return s(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return (
                                                            G.scrMgr.init(),
                                                            this.progressPercent(0.5),
                                                            I.activityManager.init(),
                                                            [4, d.playData.initPlayerInfo()]
                                                        );
                                                    case 1:
                                                        return (
                                                            t.sent(),
                                                            d.playData.getNewUserStep() !== N.GUIDE_STEP.FIRSTGAME
                                                                ? [3, 3]
                                                                : [
                                                                      4,
                                                                      c.LoadManager.loadResAwait(
                                                                          l.ViewUrl.GuideLayer,
                                                                          cc.Prefab
                                                                      )
                                                                  ]
                                                        );
                                                    case 2:
                                                        t.sent(), (t.label = 3);
                                                    case 3:
                                                        return (
                                                            this.onWechatLogin(),
                                                            this.resetNowProgress(),
                                                            (this.nowAddPercent = 0.2),
                                                            y.drawMgr.initData(),
                                                            [4, u.audioMgr.loadAudio(this.progressAdd)]
                                                        );
                                                    case 4:
                                                        return (
                                                            t.sent(),
                                                            this.resetNowProgress(),
                                                            this.reportProperties(),
                                                            (this.nowAddPercent = 0.3),
                                                            [4, v.TaskMgr.initTaskData()]
                                                        );
                                                    case 5:
                                                        return t.sent(), [4, L.AchieveMgr.initTaskData()];
                                                    case 6:
                                                        return t.sent(), [4, T.ChapterBoxMgr.initTaskData()];
                                                    case 7:
                                                        return t.sent(), [4, w.SevenLoginMgr.initSevenLoginData()];
                                                    case 8:
                                                        return t.sent(), [4, E.SevenChallengeMgr.initData()];
                                                    case 9:
                                                        return t.sent(), [4, D.CoinBoxMgr.initData()];
                                                    case 10:
                                                        return t.sent(), [4, k.PassTaskMgr.initData()];
                                                    case 11:
                                                        return (
                                                            t.sent(),
                                                            R.activityMgr.init(),
                                                            m.gameMgr.setGameFrame(d.playData.getSettingFrame()),
                                                            h.langMgr.loadGameByLan(),
                                                            P.CdTimerMgr.init(),
                                                            x.AdsTimesMgr.init(),
                                                            G.scrMgr.repostVersionMsg(),
                                                            cc.director.preloadScene(
                                                                "GameScene",
                                                                function (t, o) {
                                                                    e.progressAdd(t, o);
                                                                },
                                                                function () {
                                                                    e.scheduleOnce(function () {
                                                                        cc.director.loadScene("GameScene"),
                                                                            v.TaskMgr.addActivityTaskPro(31, 1);
                                                                    }, 0.5);
                                                                }
                                                            ),
                                                            [2]
                                                        );
                                                }
                                            });
                                        });
                                    }, 2),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (t.prototype.reportProperties = function () {
                _.analyMgr.reportStartLogin(d.playData.isNewBee),
                    M.ReporterBridge.setOnceUserProperty({
                        LogOnTime: b.TimeUtil.format(new Date(), "yyyy-MM-dd hh:mm:ss")
                    }),
                    M.ReporterBridge.setOnceUserProperty({InstallVersion: C.Version}),
                    M.ReporterBridge.setUserProperty({GameVersion: C.Version}),
                    M.ReporterBridge.incUserProperty({OpenNum: 1});
                var e = O.heroMgr.getBattleHero();
                M.ReporterBridge.setUserProperty({Hero_ID: e.id}),
                    M.ReporterBridge.setUserProperty({Hero_Level: e.level}),
                    M.ReporterBridge.setUserProperty({Hero_Star: e.grade}),
                    d.playData.getPlayDays();
            }),
            (t.prototype.loadEnemyNode = function () {
                return r(this, void 0, void 0, function () {
                    return s(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, c.LoadManager.loadResAwait("prefab/entities/enemy", cc.Prefab)];
                            case 1:
                                return [2, e.sent()];
                        }
                    });
                });
            }),
            (t.prototype.resetNowProgress = function () {
                this.nowProgress = this.loadProgress.progress;
            }),
            (t.prototype.progressPercent = function (e) {
                (this.loadProgress.progress = e), (this.percentLabel.string = (100 * e).toFixed(0) + "%");
            }),
            (t.prototype.onWechatLogin = function () {
                if (window.wx) {
                    var e = d.playData.getOpenId();
                    (e && "" != e) || U.wxMgr.login();
                }
            }),
            i([F(cc.ProgressBar)], t.prototype, "loadProgress", void 0),
            i([F(cc.Label)], t.prototype, "percentLabel", void 0),
            i([F(cc.Node)], t.prototype, "dibanNode", void 0),
            i([F(cc.Node)], t.prototype, "tishiNode", void 0),
            i([V], t)
        );
    })(cc.Component);
o.Loading = q;
