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
Object.defineProperty(o, "__esModule", {value: !0});
var c = e("UIManager"),
    l = e("ViewUrl"),
    p = e("ZIndexConst"),
    u = e("event-kit"),
    d = e("ClientEvents"),
    h = e("LoadManager"),
    g = e("LoadGameManager"),
    m = e("LoopMap"),
    f = e("GameManager"),
    y = e("PlayerData"),
    v = e("LevelManager"),
    M = e("WxManager"),
    _ = e("AnalyticsManager"),
    C = cc._decorator,
    b = C.ccclass,
    T = C.property,
    w = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.uiLayer = null),
                (t.mapLayer = null),
                (t.roleCamera = null),
                (t.loadingNode = null),
                (t.loadingIcon = null),
                (t.dispose = new u.CompositeDisposable()),
                (t.setLoading = function (e) {
                    (t.loadingNode.active = e),
                        e
                            ? (t.loadingIcon.stopAllActions(),
                              (t.loadingIcon.angle = 0),
                              t.loadingIcon.runAction(cc.repeatForever(cc.rotateBy(0.5, 359))))
                            : t.loadingIcon.stopAllActions();
                }),
                (t.resetCameraZoom = function () {
                    var e = 0;
                    t.schedule(
                        function () {
                            (t.roleCamera.getComponent(cc.Camera).zoomRatio -= 0.01),
                                ++e % 4 == 0 && m.default.instance().checkPos();
                        },
                        0.034,
                        15
                    );
                }),
                (t.AdTimeCheck = function () {
                    M.wxMgr.checkTimeIsOver() || M.wxMgr.downMagnetTime();
                }),
                t
            );
        }
        var o;
        return (
            a(t, e),
            (o = t),
            (t.instance = function () {
                return o._instance;
            }),
            (t.prototype.onLoad = function () {
                (this.loadingNode.zIndex = cc.macro.MAX_ZINDEX),
                    (cc.director.getPhysicsManager().enabled = !0),
                    c.UIMgr.setRoleCamera(this.roleCamera),
                    c.UIMgr.setUILayer(this.uiLayer),
                    c.UIMgr.setMapLayer(this.mapLayer),
                    (this.uiLayer.zIndex = p.ZIndexConst.UILayer),
                    (this.mapLayer.zIndex = p.ZIndexConst.MapLayer),
                    this.init(),
                    this.dispose.add(d.ClientEvents.CHANGE_LOADING.on(this.setLoading)),
                    this.dispose.add(d.ClientEvents.RESET_CAMERA_ZOOM.on(this.resetCameraZoom)),
                    this.preLoadView(),
                    M.wxMgr.showRightUpShare(function () {});
            }),
            (t.prototype.preLoadView = function () {
                return r(this, void 0, void 0, function () {
                    return s(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, g.loadMgr.preloadFly()];
                            case 1:
                                return e.sent(), [4, h.LoadManager.preLoadResAwait(l.ViewUrl.backHomeView, cc.Prefab)];
                            case 2:
                                return e.sent(), [4, h.LoadManager.preLoadResAwait(l.ViewUrl.levelMsg, cc.Prefab)];
                            case 3:
                                return e.sent(), [4, h.LoadManager.preLoadResAwait(l.ViewUrl.setting, cc.Prefab)];
                            case 4:
                                return e.sent(), [4, h.LoadManager.preLoadResAwait(l.ViewUrl.chooseView, cc.Prefab)];
                            case 5:
                                return e.sent(), [4, h.LoadManager.preLoadResAwait(l.ViewUrl.pauseView, cc.Prefab)];
                            case 6:
                                return e.sent(), [4, h.LoadManager.preLoadResAwait(l.ViewUrl.gameEndView, cc.Prefab)];
                            case 7:
                                return e.sent(), [4, h.LoadManager.preLoadResAwait(l.ViewUrl.commonTip, cc.Prefab)];
                            case 8:
                                return e.sent(), [4, h.LoadManager.preLoadResAwait(l.ViewUrl.lanternView, cc.Prefab)];
                            case 9:
                                return e.sent(), [4, h.LoadManager.preLoadResAwait(l.ViewUrl.reviveView, cc.Prefab)];
                            case 10:
                                return e.sent(), [2];
                        }
                    });
                });
            }),
            (t.prototype.start = function () {
                (o._instance = this),
                    cc.game.on(cc.game.EVENT_SHOW, function () {
                        y.playData.gameTime = cc.director.getTotalTime();
                    }),
                    cc.game.on(cc.game.EVENT_HIDE, function () {
                        var e = 0,
                            t = 0;
                        f.gameMgr.time && ((e = v.levelMgr.getNowIndex()), (t = v.levelMgr.getLevelJson().id)),
                            _.analyMgr.reportLeaveGame(e, t);
                    }),
                    this.schedule(this.AdTimeCheck, 1, cc.macro.REPEAT_FOREVER);
            }),
            (t.prototype.init = function () {
                c.UIMgr.showView(l.ViewUrl.homeUI, this.uiLayer, null, null, p.ZIndexConst.HomeUI);
            }),
            (t.prototype.onDestroy = function () {
                this.dispose.dispose();
            }),
            (t._instance = null),
            i([T(cc.Node)], t.prototype, "uiLayer", void 0),
            i([T(cc.Node)], t.prototype, "mapLayer", void 0),
            i([T(cc.Node)], t.prototype, "roleCamera", void 0),
            i([T(cc.Node)], t.prototype, "loadingNode", void 0),
            i([T(cc.Node)], t.prototype, "loadingIcon", void 0),
            (o = i([b], t))
        );
    })(cc.Component);
o.default = w;
