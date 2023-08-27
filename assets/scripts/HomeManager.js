var e = require;
var t = module;
var o = exports;
var n =
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
    a =
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
Object.defineProperty(o, "__esModule", {value: !0}), (o.homeMgr = o.HomeManager = void 0);
var i = e("UIManager"),
    r = e("ClientEvents"),
    s = e("ViewUrl"),
    c = e("ZIndexConst"),
    l = e("JsonManager"),
    p = e("LevelManager"),
    u = e("PlayerData"),
    d = e("LoadGameManager"),
    h = e("GameManager"),
    g = e("LoadManager"),
    m = e("audioManager"),
    f = e("AnalyticsManager"),
    y = (function () {
        function e() {
            (this.coust = 5), (this.curShowLayer = ""), (this.curLevel = 1);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.getEnergyAddCD = function () {
                return 6e4 * (Number(l.JsonMgr.getDefineConstantByName("EnergyRecover")) || 10);
            }),
            (e.prototype.setNextEnergeAddTime = function (e) {
                u.playData.setNextEnergeAdd(e);
            }),
            (e.prototype.getNextEnergyAddTime = function () {
                return u.playData.getNextEnergeAdd();
            }),
            (e.prototype.addEnergy = function (e, t) {
                var n,
                    a = u.playData.getEnergy();
                u.playData.addEnergy(e),
                    f.analyMgr.reportGetEnergy(e, t),
                    (n = Math.max(u.playData.getEnergy(), 0)),
                    a >= 30 && n < 30 && this.setNextEnergeAddTime(Date.now() + o.homeMgr.getEnergyAddCD());
            }),
            (e.prototype.useEnergy = function (e) {
                u.playData.useEnergy(e), f.analyMgr.reportUseEnergy(e, "StartLevel");
            }),
            (e.prototype.startBattle = function (e) {
                return n(this, void 0, void 0, function () {
                    var t, o, n;
                    return a(this, function (a) {
                        switch (a.label) {
                            case 0:
                                return (
                                    (this.startGameTime = Date.now()),
                                    p.levelMgr.init(e),
                                    h.gameMgr.resetGold(),
                                    h.gameMgr.resetMap(),
                                    h.gameMgr.resetEquipment(),
                                    (h.gameMgr.showGetAllTime = 0),
                                    r.ClientEvents.CHANGE_LOADING.emit(!0),
                                    [4, p.levelMgr.initMapType()]
                                );
                            case 1:
                                return (
                                    a.sent(),
                                    [4, d.loadMgr.loadMapPrefab(p.levelMgr.getIsVertical() ? "VerticalMap" : "LoopMap")]
                                );
                            case 2:
                                return (t = a.sent()), [4, d.loadMgr.loadGameSprite()];
                            case 3:
                                return a.sent(), [4, d.loadMgr.loadExpPrefab()];
                            case 4:
                                return a.sent(), [4, g.LoadManager.loadResAwait("prefab/entities/fence", cc.Prefab)];
                            case 5:
                                return a.sent(), [4, d.loadMgr.loadExpPrefab()];
                            case 6:
                                return a.sent(), (o = p.levelMgr.getAllBoss()), [4, d.loadMgr.getFence()];
                            case 7:
                                a.sent(), (n = 0), (a.label = 8);
                            case 8:
                                return n < o.length
                                    ? [4, d.loadMgr.loadBossPrefab(o[n], l.JsonMgr.getMonsterById(o[n]).itemicon)]
                                    : [3, 11];
                            case 9:
                                a.sent(), (a.label = 10);
                            case 10:
                                return n++, [3, 8];
                            case 11:
                                return (
                                    r.ClientEvents.CHANGE_LOADING.emit(!1),
                                    i.UIMgr.showView(
                                        s.ViewUrl.gameScene,
                                        i.UIMgr.getMapLayer(),
                                        {mapPrefab: t, map: p.levelMgr.getMapArr()},
                                        function () {
                                            i.UIMgr.closeView(s.ViewUrl.homeUI),
                                                m.audioMgr.startBgm(
                                                    l.JsonMgr.getAudioById(p.levelMgr.getLevelJson().bgm).audioname
                                                );
                                        },
                                        c.ZIndexConst.GameScene
                                    ),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (e.prototype.getStartTime = function () {
                return this.startGameTime;
            }),
            (e.prototype.isLevelLock = function (e) {
                var t = l.JsonMgr.getLevelJson(e + 1).id;
                return u.playData.checkLevelIsInLock(t);
            }),
            (e.prototype.getCoustEnergy = function () {
                return this.coust;
            }),
            (e.prototype.checkEnergy = function () {
                return u.playData.getEnergy() - o.homeMgr.getCoustEnergy() >= 0;
            }),
            (e.prototype.getLevelName = function (e) {
                var t = l.JsonMgr.getLevelJson(e + 1);
                return t || (t = l.JsonMgr.getLevelJson(e)), "{@" + t.levelname + "}";
            }),
            (e.prototype.setCurShowLayer = function (e) {
                this.curShowLayer = e;
            }),
            (e.prototype.getCurShowLayer = function () {
                return this.curShowLayer;
            }),
            (e.prototype.setCurLevel = function (e) {
                this.curLevel = e + 1;
            }),
            (e.prototype.getCurLevel = function () {
                return this.curLevel;
            }),
            (e.prototype.reportTouchBtnHome = function (e) {
                f.analyMgr.reportTouchBtn(e);
            }),
            (e._instance = null),
            e
        );
    })();
(o.HomeManager = y), (o.homeMgr = y.instance());
