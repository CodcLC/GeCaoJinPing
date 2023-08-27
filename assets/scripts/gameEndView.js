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
var c = e("ViewUrl"),
    l = e("GameComponent"),
    p = e("LangLabel"),
    u = e("GameManager"),
    d = e("BattleResultManager"),
    h = e("PlayerData"),
    g = e("MonsterManager"),
    m = e("audioManager"),
    f = e("audioConst"),
    y = e("JsonManager"),
    v = e("CommonRewardItem"),
    M = e("LevelManager"),
    _ = e("CommonUtil"),
    C = e("EquipManager"),
    b = e("HomeManager"),
    T = e("censtant"),
    w = e("WxManager"),
    N = e("UIManager"),
    E = e("GuideManager"),
    S = e("AnalyticsManager"),
    D = e("ActivityLevelManager"),
    A = e("TaskTypeManager"),
    k = e("TaskManager"),
    I = cc._decorator,
    R = I.ccclass,
    L = I.property,
    P = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.confirmBtn = null),
                (t.adConfirmBtn = null),
                (t.shareBtn = null),
                (t.aniNode = null),
                (t.bestTimeLabel = null),
                (t.heartenLabel = null),
                (t.timeLabel = null),
                (t.killLabel = null),
                (t.resultBg = null),
                (t.timeBg = null),
                (t.rewardNode = null),
                (t.resultSp = null),
                (t.itemNode = null),
                (t.levelName = null),
                (t.resultBgArr = []),
                (t.resultSpArr = []),
                (t.timeSpArr = []),
                (t.isGameWin = !0),
                (t._rewardMapId = {}),
                (t._rewardWeaponId = []),
                (t.rewardRate = []),
                (t.rewardIdArr = []),
                (t.rewardNumArr = []),
                (t._totalGoldReward = 0),
                (t.activityReward = []),
                (t.isFirst = !1),
                (t.isActivity = !1),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.gameEndView;
            }),
            (t.prototype.onEnable = function () {
                var e = this;
                this.onShowPlay(2, this.aniNode),
                    (this.shareBtn.active = !1),
                    this.confirmBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        m.audioMgr.startEffect(f.AudioConst.COMMON_TOUCH), e.onConfirmBtn();
                    }),
                    h.playData.getGameState() === T.GameSatet.Activity && (this.adConfirmBtn.active = !1),
                    this.adConfirmBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        w.wxMgr.createVideo(
                            {placementName: "AdChapter", openUi: "gameEndView", level: h.playData.getLevel()},
                            function () {},
                            function () {
                                e._totalGoldReward &&
                                    (e.addGold(2 * e._totalGoldReward),
                                    S.analyMgr.reportGetGold(2 * e._totalGoldReward, "Ads")),
                                    h.playData.getGameState() === T.GameSatet.Activity && e.isGameWin
                                        ? e.activityReward.forEach(function (t) {
                                              e.addRewardToLocal(t.id, 2 * t.count);
                                          })
                                        : Object.keys(e._rewardMapId).map(function (t) {
                                              var o = e._rewardMapId[t];
                                              C.equipMgr.addMap(Number(t), 2 * o),
                                                  S.analyMgr.reportGetItem("Blueprint", Number(t), 2 * o, "Ads");
                                          }),
                                    e._rewardWeaponId &&
                                        e._rewardWeaponId.length &&
                                        e._rewardWeaponId.forEach(function (e) {
                                            C.equipMgr.addEquip(e), C.equipMgr.addEquip(e);
                                        }),
                                    m.audioMgr.startEffect(f.AudioConst.COMMON_TOUCH),
                                    e.onConfirmBtn();
                            }
                        );
                    }),
                    this.shareBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        w.wxMgr.onShareFunc(
                            function () {},
                            function () {
                                m.audioMgr.startEffect(f.AudioConst.COMMON_TOUCH),
                                    S.analyMgr.reportShare("ShareChapter");
                            }
                        );
                    }),
                    k.TaskMgr.saveActivityLocal(),
                    (this.timeLabel.string = d.btResMgr.getLevelUseTime()),
                    (this.killLabel.string = "x" + h.playData.getKillNum()),
                    h.playData.addPlayerKillNum(h.playData.getKillNum());
                var t = d.btResMgr.getBestScore(M.levelMgr.getLevelJson().id.toString(), u.gameMgr.time);
                (this.bestTimeLabel.string = u.gameMgr.getLabelTimeNum(t)),
                    (this.heartenLabel.active = d.btResMgr.isRenewal()),
                    h.playData.getGameState() === T.GameSatet.Activity
                        ? this.levelName.getComponent(p.LangLabel).setText("{@" + u.gameMgr.activityData.zonename + "}")
                        : (this.levelName
                              .getComponent(p.LangLabel)
                              .setText("{@" + M.levelMgr.getLevelJson().levelname + "}"),
                          this.saveBestScore(M.levelMgr.getLevelJson().id.toString())),
                    A.TaskTypeMgr.saveTaskData();
            }),
            (t.prototype.start = function () {
                return r(this, void 0, void 0, function () {
                    var e;
                    return s(this, function () {
                        return (
                            (this.isActivity = T.GameSatet.Activity === h.playData.getGameState()),
                            (this.isGameWin = this.node.data),
                            (this.resultBg.spriteFrame = this.isGameWin ? this.resultBgArr[0] : this.resultBgArr[1]),
                            (this.resultSp.spriteFrame = this.isGameWin ? this.resultSpArr[0] : this.resultSpArr[1]),
                            (this.timeBg.spriteFrame = this.isGameWin ? this.timeSpArr[0] : this.timeSpArr[1]),
                            h.playData.saveLastLevelState(this.isGameWin ? "Win" : "Fail"),
                            m.audioMgr.startEffect(this.isGameWin ? f.AudioConst.GAME_WIN : f.AudioConst.GAME_FAIL),
                            this.isGameWin &&
                                (h.playData.passLevel(M.levelMgr.getLevelJson().id), (this.shareBtn.active = !0)),
                            this.reportThinkData(),
                            h.playData.setFailGuide(!this.isGameWin),
                            this.isGameWin || h.playData.setLastFail(M.levelMgr.getLevelJson().id),
                            h.playData.checkIsChallenge()
                                ? [2]
                                : (this.showReward(),
                                  h.playData.getGameState() === T.GameSatet.Activity &&
                                      this.isGameWin &&
                                      ((e = u.gameMgr.activityData), D.activityMgr.challengeLevel(e)),
                                  [2])
                        );
                    });
                });
            }),
            (t.prototype.reportThinkData = function () {
                var e = Math.floor((Date.now() - b.homeMgr.getStartTime()) / 1e3),
                    t = M.levelMgr.getLevelJson().id > h.playData.getCompleteLevel() ? "New" : "Continue";
                if ((h.playData.saveLevelResult(this.isGameWin, M.levelMgr.getLevelJson().id), this.isGameWin)) {
                    var o = h.playData.checkIsChallenge();
                    S.analyMgr.reportLevelVictory(
                        o ? u.gameMgr.challengeData.id : M.levelMgr.getLevelJson().id,
                        Number(u.gameMgr.time),
                        e,
                        h.playData.getKillNum(),
                        t,
                        o
                    ),
                        S.analyMgr.reportLevelEnd("Win");
                } else
                    (o = h.playData.checkIsChallenge()),
                        S.analyMgr.reportLevelFail(
                            o ? u.gameMgr.challengeData.id : M.levelMgr.getLevelJson().id,
                            Number(u.gameMgr.time),
                            e,
                            h.playData.getKillNum(),
                            t,
                            o
                        ),
                        S.analyMgr.reportLevelEnd("Fail");
            }),
            (t.prototype.saveBestScore = function (e) {
                d.btResMgr.saveBestScore(e, u.gameMgr.time);
            }),
            (t.prototype.onConfirmBtn = function () {
                var e = this;
                if ((m.audioMgr.stopEffect(), h.playData.getGameState() === T.GameSatet.challenge && this.isGameWin)) {
                    var t = h.playData.getChallengeData();
                    h.playData.addChallengePass(t);
                }
                if (
                    (g.default.instance().backAllMonster(),
                    h.playData.getNewUserStep() === E.GUIDE_STEP.NEXTGAME && h.playData.addGuideStep(),
                    h.playData.getGameState() === T.GameSatet.Activity && this.isGameWin)
                ) {
                    this.activityReward.forEach(function (t) {
                        e.addRewardToLocal(t.id, t.count);
                    });
                    var o = u.gameMgr.activityData.zonemapid.split(",");
                    S.analyMgr.reportGetZoneReward(
                        this.activityReward,
                        this.isFirst ? "zoneFirstReward" : "zonePassReward",
                        u.gameMgr.activityData.zonepic,
                        o.length > 1 ? Number(o[u.gameMgr.activityIndex]) : Number(o[0]),
                        "Normal",
                        u.gameMgr.activityData.id
                    );
                }
                u.gameMgr.endGame(),
                    this.closeView(),
                    N.UIMgr.closeView(c.ViewUrl.chooseView),
                    this.isGameWin && !this.isActivity && u.gameMgr.setGameWin(),
                    h.playData.getGameState() === T.GameSatet.normal &&
                        h.playData.addFailCount(
                            this.isGameWin ? M.levelMgr.getLevelJson().id + 1 : M.levelMgr.getLevelJson().id,
                            this.isGameWin
                        );
            }),
            (t.prototype.showReward = function () {
                if (h.playData.getGameState() === T.GameSatet.Activity) {
                    if (!this.isGameWin) return;
                    this.loadActivityReward();
                } else this.loadNormalReward();
            }),
            (t.prototype.loadActivityReward = function () {
                var e = this,
                    t = u.gameMgr.activityData;
                if (1 === t.zonetype) {
                    var o = 0,
                        n = t.zonemapid.split(",")[u.gameMgr.activityIndex],
                        a = D.activityMgr.checkLevelHasClear(n, t.id),
                        i = y.JsonMgr.getZoneDrop(
                            Number(y.JsonMgr.getActivityLevelJson(n).chapterrewards)
                        ).idfixed.split(",");
                    a ||
                        ((this.isFirst = !0),
                        y.JsonMgr.getZoneDrop(Number(t.zonefirstreward.split(",")[u.gameMgr.activityIndex]))
                            .idfixed.split(",")
                            .forEach(function (t) {
                                var n = t.split("|"),
                                    a = cc.instantiate(e.itemNode),
                                    i = Number(n[0]),
                                    r = Number(n[1]);
                                e.rewardNode.addChild(a),
                                    e.activityReward.push({id: i, count: r}),
                                    a.getComponent(v.default).init(o, i, r),
                                    o++;
                            })),
                        i.forEach(function (t) {
                            var n = t.split("|"),
                                a = cc.instantiate(e.itemNode),
                                i = Number(n[0]),
                                r = Number(n[1]);
                            e.activityReward.push({id: i, count: r}),
                                e.rewardNode.addChild(a),
                                a.getComponent(v.default).init(o, i, r),
                                o++;
                        });
                } else if (4 === t.zonetype) {
                    var r = y.JsonMgr.getActivityLevelJson(t.zonemapid);
                    y.JsonMgr.getZoneDrop(Number(r.chapterrewards))
                        .idfixed.split(",")
                        .forEach(function (t, o) {
                            var n = t.split("|"),
                                a = cc.instantiate(e.itemNode),
                                i = Number(n[0]),
                                r = Number(n[1]);
                            e.rewardNode.addChild(a),
                                a.getComponent(v.default).init(o, i, r),
                                e.activityReward.push({id: i, count: r});
                        });
                }
            }),
            (t.prototype.addRewardToLocal = function (e, t) {
                switch (e) {
                    case 1001:
                        h.playData.addGold(t), (this._totalGoldReward += t), S.analyMgr.reportGetGold(t, "Zone");
                        break;
                    case 1002:
                        h.playData.addGem(t), S.analyMgr.reportGetGem(t, "Zone");
                        break;
                    case 2001:
                        h.playData.addNormalKey(t), S.analyMgr.reportGetItem("Key", e, t, "Zone");
                        break;
                    case 2002:
                        h.playData.addSuperKey(t), S.analyMgr.reportGetItem("Key", e, t, "Zone");
                        break;
                    case 2003:
                        h.playData.addSSRKey(t), S.analyMgr.reportGetItem("Key", e, t, "Zone");
                        break;
                    case 1017:
                        h.playData.addHeroExperience(t), S.analyMgr.reportGetItem("HeroExp", e, t, "Zone");
                        break;
                    case 1018:
                    case 1019:
                        D.activityMgr.saveItemToMap(e, t);
                }
            }),
            (t.prototype.loadNormalReward = function () {
                var e = this,
                    t = 0,
                    o = y.JsonMgr.getLevelJson(M.levelMgr.getLevelJson().id).chapterrewards.split(";"),
                    n = (Math.floor(u.gameMgr.time / 300), null);
                if (
                    (u.gameMgr.time >= 600
                        ? (n = 3)
                        : u.gameMgr.time >= 360
                        ? (n = 2)
                        : u.gameMgr.time >= 180 && (n = 1),
                    n)
                ) {
                    var a = y.JsonMgr.getPatrolById(Number(o[n - 1])).idfixed.split("|");
                    if ("1001" == a[0]) {
                        t++;
                        var i = cc.instantiate(this.itemNode);
                        this.rewardNode.addChild(i),
                            i.getComponent(v.default).init(t, 1001, a[1]),
                            this.addGold(Number(a[1])),
                            S.analyMgr.reportGetGold(Number(a[1]), "Chapter"),
                            (this._totalGoldReward += Number(a[1]));
                    }
                }
                if (
                    (u.gameMgr.getGold() > 0 &&
                        (t++,
                        (i = cc.instantiate(this.itemNode)),
                        this.rewardNode.addChild(i),
                        i.getComponent(v.default).init(t, 1001, u.gameMgr.getGold()),
                        this.addGold(u.gameMgr.getGold()),
                        S.analyMgr.reportGetGold(u.gameMgr.getGold(), "Chapter"),
                        (this._totalGoldReward += u.gameMgr.getGold())),
                    3 === n)
                )
                    for (var r = y.JsonMgr.getPatrolById(Number(o[n - 1])), s = 0; s < r.count; s++) {
                        var c = r.idrate;
                        this.analyseRate(c, this.rewardIdArr, this.rewardRate, this.rewardNumArr);
                        var l = _.CommonUtil.getWeightRandom(this.rewardRate),
                            p = this.rewardIdArr[l],
                            d = this.rewardNumArr[l];
                        this._rewardMapId[p]
                            ? (this._rewardMapId[p] = this._rewardMapId[p] + d)
                            : (this._rewardMapId[p] = d);
                    }
                this.getGameReward(),
                    this._rewardMapId &&
                        Object.keys(this._rewardMapId).length &&
                        Object.keys(this._rewardMapId).map(function (o) {
                            t++;
                            var n = e._rewardMapId[o],
                                a = cc.instantiate(e.itemNode);
                            a.getComponent(v.default).init(t, Number(o), n),
                                C.equipMgr.addMap(Number(o), n),
                                S.analyMgr.reportGetItem("Biueprint", Number(o), n, "Chapter"),
                                e.rewardNode.addChild(a);
                        }),
                    this._rewardWeaponId &&
                        this._rewardWeaponId.length &&
                        this._rewardWeaponId.forEach(function (o) {
                            t++;
                            var n = cc.instantiate(e.itemNode);
                            n.getComponent(v.default).init(t, Number(o), 1),
                                C.equipMgr.addEquip(o),
                                e.rewardNode.addChild(n);
                        });
            }),
            (t.prototype.getGameReward = function () {
                if (u.gameMgr.getMap() > 0) {
                    var e = y.JsonMgr.getPoolById(1010303).idrate,
                        t = [],
                        o = [],
                        n = [];
                    this.analyseRate(e, t, o, n);
                    for (var a = 0; a < u.gameMgr.getMap(); a++) {
                        var i = t[(p = _.CommonUtil.getWeightRandom(o))],
                            r = n[p];
                        this._rewardMapId[i]
                            ? (this._rewardMapId[i] = this._rewardMapId[i] + r)
                            : (this._rewardMapId[i] = r);
                    }
                }
                if (u.gameMgr.getEquipment() > 0) {
                    var s = y.JsonMgr.getPoolById(1010304).idrate,
                        c = [],
                        l = [];
                    for (this.analyseRate(s, c, l, []), a = 0; a < u.gameMgr.getEquipment(); a++) {
                        var p,
                            d = c[(p = _.CommonUtil.getWeightRandom(l))];
                        this._rewardWeaponId.push(d);
                    }
                }
            }),
            (t.prototype.analyseRate = function (e, t, o, n) {
                e.split(";").forEach(function (e) {
                    var a = e.split("|");
                    t.push(Number(a[0])), n.push(Number(a[1])), o.push(Number(a[2]));
                });
            }),
            (t.prototype.addGold = function (e) {
                h.playData.addGold(e);
            }),
            i([L(cc.Node)], t.prototype, "confirmBtn", void 0),
            i([L(cc.Node)], t.prototype, "adConfirmBtn", void 0),
            i([L(cc.Node)], t.prototype, "shareBtn", void 0),
            i([L(cc.Node)], t.prototype, "aniNode", void 0),
            i([L(cc.Label)], t.prototype, "bestTimeLabel", void 0),
            i([L(cc.Node)], t.prototype, "heartenLabel", void 0),
            i([L(cc.Label)], t.prototype, "timeLabel", void 0),
            i([L(cc.Label)], t.prototype, "killLabel", void 0),
            i([L(cc.Sprite)], t.prototype, "resultBg", void 0),
            i([L(cc.Sprite)], t.prototype, "timeBg", void 0),
            i([L(cc.Node)], t.prototype, "rewardNode", void 0),
            i([L(cc.Sprite)], t.prototype, "resultSp", void 0),
            i([L(cc.Prefab)], t.prototype, "itemNode", void 0),
            i([L(cc.Node)], t.prototype, "levelName", void 0),
            i([L(cc.SpriteFrame)], t.prototype, "resultBgArr", void 0),
            i([L(cc.SpriteFrame)], t.prototype, "resultSpArr", void 0),
            i([L(cc.SpriteFrame)], t.prototype, "timeSpArr", void 0),
            i([R], t)
        );
    })(l.GameComponent);
o.default = P;
