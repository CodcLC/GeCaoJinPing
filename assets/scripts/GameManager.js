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
Object.defineProperty(o, "__esModule", {value: !0}), (o.gameMgr = o.GameManager = void 0);
var i = e("UIManager"),
    r = e("ViewUrl"),
    s = e("ZIndexConst"),
    c = e("PlayerData"),
    l = e("ClientEvents"),
    p = e("RoleData"),
    u = e("audioManager"),
    d = e("audioConst"),
    h = e("LevelManager"),
    g = e("JsonManager"),
    m = e("censtant"),
    f = e("HomeManager"),
    y = e("ChapterBoxManager"),
    v = e("AnalyticsManager"),
    M = e("TaskTypeManager"),
    _ = (function () {
        function e() {
            (this.isWin = !1),
                (this.isPause = !1),
                (this.reviveCount = 0),
                (this.nowGold = 0),
                (this.mapNum = 0),
                (this.weaponNum = 0),
                (this.time = 0),
                (this.battleCdTimer = 0),
                (this.hasShareChoose = !0),
                (this.hasShareLantern = !1),
                (this.challengeData = null),
                (this.allDamage = 0),
                (this.allGetDamage = 0),
                (this.gameRecovery = 0),
                (this.showGetAllTime = 0),
                (this.isIos = !1),
                (this.skillCount = 0),
                (this.gameItemMap = new Map()),
                (this.deathType = 0),
                (this.gameAFK = !1),
                (this.activityData = null),
                (this.activityIndex = -1);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.resetGameTimeData = function () {
                (this.allDamage = 0), (this.allGetDamage = 0), (this.gameRecovery = 0);
            }),
            (e.prototype.getDeathType = function () {
                switch (this.deathType) {
                    case 1:
                        return "NormalFail";
                    case 2:
                        return "EliteFail";
                    case 3:
                    case 4:
                        return "BossFail";
                    default:
                        return "Survive";
                }
            }),
            (e.prototype.addGameItemCount = function (e) {
                var t = this.gameItemMap.get(e.id);
                t ? (t.count = t.count + 1) : this.gameItemMap.set(e.id, {json: e, count: 1});
            }),
            (e.prototype.getGameItemMapStr = function () {
                var e = "";
                return (
                    this.gameItemMap.forEach(function (t) {
                        e += t.json.name + "," + t.count + ";";
                    }),
                    e
                );
            }),
            (e.prototype.startGame = function (e) {
                return n(this, void 0, void 0, function () {
                    var t, n;
                    return a(this, function (a) {
                        switch (a.label) {
                            case 0:
                                return (
                                    this.resetGameTimeData(),
                                    (this.skillCount = 0),
                                    (this.deathType = 0),
                                    (this.gameAFK = !1),
                                    this.gameItemMap.clear(),
                                    M.TaskTypeMgr.mainLineTimesTask(1),
                                    c.playData.addLevelData(e),
                                    (t = Number(e) + 1),
                                    (n = t > c.playData.getCompleteLevel() ? "New" : "Continue"),
                                    v.analyMgr.reportLevelStart(t, n),
                                    [4, f.homeMgr.startBattle(e)]
                                );
                            case 1:
                                return (
                                    a.sent(),
                                    (o.gameMgr.hasShareChoose = !0),
                                    (o.gameMgr.hasShareLantern = !1),
                                    u.audioMgr.stopBgm(),
                                    u.audioMgr.initMusic(),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (e.prototype.addGold = function (e) {
                (this.nowGold += e),
                    u.audioMgr.startEffect(d.AudioConst.COIN_FLY),
                    l.ClientEvents.REFRESH_GOLD_LABEL.emit();
            }),
            (e.prototype.getGold = function () {
                return Math.floor(this.nowGold);
            }),
            (e.prototype.resetGold = function () {
                this.nowGold = 0;
            }),
            (e.prototype.addMap = function () {
                this.mapNum++;
            }),
            (e.prototype.getMap = function () {
                return this.mapNum;
            }),
            (e.prototype.resetMap = function () {
                this.mapNum = 0;
            }),
            (e.prototype.addEquipment = function () {
                this.weaponNum++;
            }),
            (e.prototype.getEquipment = function () {
                return this.weaponNum;
            }),
            (e.prototype.resetEquipment = function () {
                this.weaponNum = 0;
            }),
            (e.prototype.setIsPause = function (e) {
                if (!e) {
                    u.audioMgr.initMusic();
                    var t = h.levelMgr.getLevelJson().bgm;
                    u.audioMgr.startBgm(g.JsonMgr.getAudioById(t).audioname);
                }
                this.isPause = e;
            }),
            (e.prototype.getIsPause = function () {
                return this.isPause;
            }),
            (e.prototype.addReviveCount = function () {
                this.reviveCount++;
            }),
            (e.prototype.getReviveCount = function () {
                return this.reviveCount;
            }),
            (e.prototype.checkCanRevive = function () {
                return this.reviveCount < 2;
            }),
            (e.prototype.endGame = function () {
                u.audioMgr.stopBgm(),
                    this.isWin
                        ? i.UIMgr.showView(
                              r.ViewUrl.homeUI,
                              i.UIMgr.getUILayer(),
                              this.checkOpenUI(),
                              null,
                              s.ZIndexConst.HomeUI
                          )
                        : (i.UIMgr.showView(
                              r.ViewUrl.homeUI,
                              i.UIMgr.getUILayer(),
                              this.checkOpenUI(),
                              null,
                              s.ZIndexConst.HomeUI
                          ),
                          (this.isWin = !1)),
                    (this.reviveCount = 0);
                var e = i.UIMgr.getRoleCamera();
                e.setPosition(cc.v2(0, 0)),
                    (e.getComponent(cc.Camera).zoomRatio = 1),
                    (this.isPause = !0),
                    i.UIMgr.closeView(r.ViewUrl.gameScene),
                    (this.time = 0),
                    c.playData.clearKillNum(),
                    p.roleData.getRole().unWinGame(),
                    l.ClientEvents.END_GAME.emit(),
                    c.playData.setGameState(m.GameSatet.normal),
                    (this.activityData = null),
                    (this.activityIndex = -1);
            }),
            (e.prototype.checkOpenUI = function () {
                switch (c.playData.getGameState()) {
                    case m.GameSatet.normal:
                        return null;
                    case m.GameSatet.challenge:
                        return 3;
                    case m.GameSatet.Activity:
                        return -1;
                }
            }),
            (e.prototype.checkGameIsWin = function () {
                return !0 === this.isWin;
            }),
            (e.prototype.setGameWin = function () {
                (this.isPause = !0), y.ChapterBoxMgr.checkOverDoEvent(h.levelMgr.getLevelJson().id), (this.isWin = !0);
            }),
            (e.prototype.setGameFrame = function (t) {
                if (t >= 0 && t <= 2) {
                    var o = 30 + 15 * t;
                    cc.game.setFrameRate(o), (e.frameRate = o);
                } else cc.game.setFrameRate(60), (e.frameRate = 60);
            }),
            (e.prototype.getLabelTimeNum = function (e) {
                var t = e || (o.gameMgr.time > 900 ? 900 : o.gameMgr.time),
                    n = Math.floor(t % 3600),
                    a = Math.floor(t / 3600),
                    i = Math.floor(n / 60).toString(),
                    r = (t % 60).toString(),
                    s = "";
                return (
                    a && (s += a + ":"), 1 == i.length && (i = "0" + i), 1 == r.length && (r = "0" + r), s + i + ":" + r
                );
            }),
            (e.prototype.getReviveTime = function () {
                return this.reviveCount;
            }),
            (e._instance = null),
            (e.frameRate = 60),
            e
        );
    })();
(o.GameManager = _), (o.gameMgr = _.instance());
