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
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.SevenChallengeMgr = o.CountDownState = o.SevenChallengeGameState = o.SevenChallengeRewardState = void 0);
var i,
    r,
    s,
    c = e("AnalyticsManager"),
    l = e("ReporterBridge"),
    p = e("LocalStorage"),
    u = e("AutoPopManager"),
    d = e("UIManager"),
    h = e("ClientEvents"),
    g = e("LocalConst"),
    m = e("ViewUrl"),
    f = e("CommonUtil"),
    y = e("GuideManager"),
    v = e("challengeManager"),
    M = e("HeroData"),
    _ = e("JsonManager"),
    C = e("PlayerData"),
    b = e("TaskTypeManager");
(function (e) {
    (e[(e.Finish = 1)] = "Finish"), (e[(e.NotFinish = 2)] = "NotFinish"), (e[(e.Rward = 3)] = "Rward");
})((i = o.SevenChallengeRewardState || (o.SevenChallengeRewardState = {}))),
    (function (e) {
        (e[(e.NoOpen = 0)] = "NoOpen"),
            (e[(e.OpenDay1 = 1)] = "OpenDay1"),
            (e[(e.OpenDay2 = 2)] = "OpenDay2"),
            (e[(e.OpenDay3 = 3)] = "OpenDay3"),
            (e[(e.OpenDay4 = 4)] = "OpenDay4"),
            (e[(e.OpenDay5 = 5)] = "OpenDay5"),
            (e[(e.OpenDay6 = 6)] = "OpenDay6"),
            (e[(e.OpenDay7 = 7)] = "OpenDay7"),
            (e[(e.Last1 = 8)] = "Last1"),
            (e[(e.Last2 = 9)] = "Last2"),
            (e[(e.Last3 = 10)] = "Last3"),
            (e[(e.Reward = 11)] = "Reward"),
            (e[(e.OVER = 12)] = "OVER");
    })((r = o.SevenChallengeGameState || (o.SevenChallengeGameState = {}))),
    (function (e) {
        (e[(e.NEWTASK = 0)] = "NEWTASK"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.REWARD = 2)] = "REWARD"),
            (e[(e.OVER = 3)] = "OVER");
    })((s = o.CountDownState || (o.CountDownState = {})));
var T = (function () {
    function e() {
        (this._sevenDayLevel = -1),
            (this._sevenDayAwardTime = -1),
            (this._sevenChallengeJson = null),
            (this._sevenChallenge = null),
            (this._sevenChallengInfo = null),
            (this._sevenChallengeTaskJson = null),
            (this._sevenChallengeTaskKeys = null),
            (this._sevenChallengeTask = null),
            (this._curTabIndex = 1),
            (this._taskData = []),
            (this.drawIdArr = []),
            (this.drawRateArr = []),
            (this.equipIdArr = []),
            (this.equipRateArr = []);
    }
    return (
        (e.instance = function () {
            return e._instance || (e._instance = new e()), e._instance;
        }),
        (e.prototype.initData = function () {
            return n(this, void 0, void 0, function () {
                var e, t;
                return a(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return (
                                (e = _.JsonMgr.getDefineConstantByName("SevenDayLevel")),
                                (this._sevenDayLevel = Number(e) ? Number(e) : 2),
                                (t = _.JsonMgr.getDefineConstantByName("SevenDayAwardTime")),
                                (this._sevenDayAwardTime = Number(t) ? Number(t) : 1),
                                (this._sevenChallengeJson = _.JsonMgr.getJson("sevenchallenge")),
                                this._initSevenChallengeJson(),
                                [4, this._initSevenChallengeInfo()]
                            );
                        case 1:
                            return (
                                o.sent(),
                                (this._sevenChallengeTaskJson = _.JsonMgr.getJson("sevenchallengetask")),
                                (this._sevenChallengeTaskKeys = Object.keys(this._sevenChallengeTaskJson).sort(
                                    function (e, t) {
                                        return Number(e) - Number(t);
                                    }
                                )),
                                [4, this._initSevenChallengeTask()]
                            );
                        case 2:
                            return o.sent(), [2];
                    }
                });
            });
        }),
        (e.prototype._initSevenChallengeJson = function () {
            var e = this._sevenChallengeJson[1];
            this._sevenChallenge = {id: e.id, rewardMap: {}};
            var t = e.progress.split(","),
                o = e.reward.split(",");
            if (t.length == o.length)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n],
                        i = o[n];
                    this._sevenChallenge.rewardMap["" + a] = i;
                }
            else console.error("config error! progress and reward not match!");
        }),
        (e.prototype.getSevenChallenge = function () {
            return this._sevenChallenge;
        }),
        (e.prototype._initSevenChallengeInfo = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function () {
                    return (
                        (e = p.LocalStorage.getData(g.LocalConst.SEVEN_CHALLENGE_INFO_NEW))
                            ? (this._sevenChallengInfo = e)
                            : ((e = p.LocalStorage.getData(g.LocalConst.SEVEN_CHALLENGE_INFO))
                                  ? ((this._sevenChallengInfo = e),
                                    p.LocalStorage.delete(g.LocalConst.SEVEN_CHALLENGE_INFO))
                                  : this._initBaseSevenChallengeInfo(),
                              this.saveSevenChallengeInfo()),
                        [2]
                    );
                });
            });
        }),
        (e.prototype._initBaseSevenChallengeInfo = function () {
            this._sevenChallengInfo = {
                gameState: r.NoOpen,
                dayTime1: 0,
                dayTime2: 0,
                dayTime3: 0,
                dayTime4: 0,
                dayTime5: 0,
                dayTime6: 0,
                dayTime7: 0,
                lastTime1: 0,
                lastTime2: 0,
                lastTime3: 0,
                rewardTime: 0,
                loginDay: 0,
                endTime: 0,
                point: 0,
                boxStates: {}
            };
            for (var e = this._sevenChallengeJson[1].progress.split(","), t = 0; t < e.length; t++) {
                var o = e[t];
                this._sevenChallengInfo.boxStates["" + o] = i.NotFinish;
            }
        }),
        (e.prototype._initSevenChallengeTask = function () {
            var e = p.LocalStorage.getData(g.LocalConst.SEVEN_CHALLENGE_TASK_NEW);
            e
                ? ((this._sevenChallengeTask = e), this.initSevenChallengeTask())
                : ((e = p.LocalStorage.getData(g.LocalConst.SEVEN_CHALLENGE_TASK))
                      ? ((this._sevenChallengeTask = e),
                        this.initSevenChallengeTask(),
                        p.LocalStorage.delete(g.LocalConst.SEVEN_CHALLENGE_TASK))
                      : this._initBaseSevenChallengeTask(),
                  this.saveSevenChallengeTask());
        }),
        (e.prototype.initSevenChallengeTask = function () {
            for (var e = !1, t = 0; t < this._sevenChallengeTaskKeys.length; t++) {
                var o = this._sevenChallengeTaskKeys[t];
                this._sevenChallengeTask["" + o] ||
                    ((this._sevenChallengeTask["" + o] = {id: Number(o), count: 0, state: Number(i.NotFinish)}),
                    (e = !0));
            }
            e && this.saveSevenChallengeTask();
        }),
        (e.prototype._initBaseSevenChallengeTask = function () {
            this._sevenChallengeTask = {};
            for (var e = 0; e < this._sevenChallengeTaskKeys.length; e++) {
                var t = this._sevenChallengeTaskKeys[e],
                    o = {id: Number(t), count: 0, state: Number(i.NotFinish)};
                this._sevenChallengeTask["" + t] = o;
            }
        }),
        (e.prototype.saveSevenChallengeInfo = function () {
            p.LocalStorage.setData(g.LocalConst.SEVEN_CHALLENGE_INFO_NEW, this._sevenChallengInfo);
        }),
        (e.prototype.saveSevenChallengeTask = function () {
            p.LocalStorage.setData(g.LocalConst.SEVEN_CHALLENGE_TASK_NEW, this._sevenChallengeTask);
        }),
        (e.prototype.getSevenDayLevel = function () {
            return this._sevenDayLevel;
        }),
        (e.prototype.getSevenDayAwardTime = function () {
            return this._sevenDayAwardTime;
        }),
        (e.prototype.getCurGameState = function () {
            return this._sevenChallengInfo.gameState;
        }),
        (e.prototype.showEntrence = function () {
            return !(
                C.playData.getNewUserStep() != y.GUIDE_STEP.OVER ||
                C.playData.getCompleteLevel() < this.getSevenDayLevel() ||
                this._sevenChallengInfo.gameState >= r.OVER
            );
        }),
        (e.prototype.showRedPoint = function () {
            for (var e = !1, t = 0, o = Object.values(this._sevenChallengInfo.boxStates); t < o.length; t++)
                if (o[t] == Number(i.Finish)) {
                    e = !0;
                    break;
                }
            for (var n = !1, a = 0; a < this._sevenChallengeTaskKeys.length; a++) {
                var r = this._sevenChallengeTaskKeys[a],
                    s = this._sevenChallengeTask["" + r],
                    c = this._sevenChallengInfo.gameState,
                    l = Math.floor(Number(r) / 1e3);
                if (Number(c) >= l && s.state == Number(i.Finish)) {
                    n = !0;
                    break;
                }
            }
            return e || n;
        }),
        (e.prototype.checkOrInitGameState = function () {
            var e = C.playData.getNewUserStep() >= y.GUIDE_STEP.OVER,
                t = C.playData.getCompleteLevel() >= this.getSevenDayLevel();
            e &&
                t &&
                (this._sevenChallengInfo.gameState == r.NoOpen ? this._initGameState() : this.checkGameState(),
                this._sevenChallengInfo.gameState != r.OVER &&
                    (this._refreshTaskSomeState(), this._refreshBoxRewardState()));
        }),
        (e.prototype._initGameState = function () {
            (this._sevenChallengInfo.gameState = r.OpenDay1),
                (this._sevenChallengInfo.dayTime1 = this._getFormatAddTime(0)),
                (this._sevenChallengInfo.dayTime2 = this._getFormatAddTime(1)),
                (this._sevenChallengInfo.dayTime3 = this._getFormatAddTime(2)),
                (this._sevenChallengInfo.dayTime4 = this._getFormatAddTime(3)),
                (this._sevenChallengInfo.dayTime5 = this._getFormatAddTime(4)),
                (this._sevenChallengInfo.dayTime6 = this._getFormatAddTime(5)),
                (this._sevenChallengInfo.dayTime7 = this._getFormatAddTime(6)),
                (this._sevenChallengInfo.lastTime1 = this._getFormatAddTime(7)),
                (this._sevenChallengInfo.lastTime2 = this._getFormatAddTime(8)),
                (this._sevenChallengInfo.lastTime3 = this._getFormatAddTime(9)),
                (this._sevenChallengInfo.rewardTime = this._getFormatAddTime(10)),
                (this._sevenChallengInfo.endTime = this._getFormatAddTime(10 + this.getSevenDayAwardTime())),
                this._setLoginDay(1),
                h.ClientEvents.CHANGE_LOADING.emit(!0);
            var e = {
                id: u.DIALOGPOP.SEVEN_CHALLENGE,
                url: m.ViewUrl.SevenChallengeView,
                callBack: function () {
                    h.ClientEvents.CHANGE_LOADING.emit(!1);
                }
            };
            u.AutoPopMgr.addAutoPop(e), this.saveSevenChallengeInfo();
        }),
        (e.prototype.checkGameState = function () {
            var e = Date.now(),
                t = r.OVER,
                o = 0;
            e >= this._sevenChallengInfo.endTime
                ? (t = r.OVER)
                : e >= this._sevenChallengInfo.rewardTime
                ? (t = r.Reward)
                : e >= this._sevenChallengInfo.lastTime3
                ? ((t = r.Last3), o++)
                : e >= this._sevenChallengInfo.lastTime2
                ? ((t = r.Last2), o++)
                : e >= this._sevenChallengInfo.lastTime1
                ? ((t = r.Last1), o++)
                : e >= this._sevenChallengInfo.dayTime7
                ? ((t = r.OpenDay7), o++)
                : e >= this._sevenChallengInfo.dayTime6
                ? ((t = r.OpenDay6), o++)
                : e >= this._sevenChallengInfo.dayTime5
                ? ((t = r.OpenDay5), o++)
                : e >= this._sevenChallengInfo.dayTime4
                ? ((t = r.OpenDay4), o++)
                : e >= this._sevenChallengInfo.dayTime3
                ? ((t = r.OpenDay3), o++)
                : e >= this._sevenChallengInfo.dayTime2
                ? ((t = r.OpenDay2), o++)
                : e >= this._sevenChallengInfo.dayTime1 && (t = r.OpenDay1);
            var n = t;
            n > 7 && (n = 7),
                this.setCurTab(n),
                t != this._sevenChallengInfo.gameState &&
                    this._sevenChallengInfo.gameState != r.OVER &&
                    ((this._sevenChallengInfo.gameState = t),
                    this._setLoginDay(o),
                    this.saveSevenChallengeInfo(),
                    h.ClientEvents.SEVEN_CHALLENGE_REFRESH_STATE.emit(),
                    this._sevenChallengInfo.gameState == r.OVER && this.autoPushAllReward());
        }),
        (e.prototype._refreshTaskSomeState = function () {
            this.setContentTypeNum(b.CommonTaskType.completeLevel, C.playData.getCompleteLevel()),
                this.AddTalentTask(),
                M.HeroData.instance().checkDressDataInTask();
        }),
        (e.prototype.AddTalentTask = function () {
            for (var e = C.playData.getAllTalent(), t = 0, o = 0, n = 0; n < e.length; n++) {
                var a = e[n];
                Number(a) >= 2e6 ? o++ : t++;
            }
            this.setContentTypeNum(b.CommonTaskType.talentLeft, t),
                this.setContentTypeNum(b.CommonTaskType.talentRight, o);
        }),
        (e.prototype._getFormatAddTime = function (e) {
            var t = Date.now() + 864e5 * e,
                o = this._getFormatTime(new Date(t));
            return Date.parse(o);
        }),
        (e.prototype._getFormatTime = function (e) {
            return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate();
        }),
        (e.prototype.judgeTabIsOpen = function (e) {
            var t = this._sevenChallengInfo.gameState;
            return !(t >= r.OVER || t <= r.NoOpen) && Number(t) >= e;
        }),
        (e.prototype.checkFinishByTag = function (e) {
            for (var t = !0, o = 0; o < this._sevenChallengeTaskKeys.length; o++) {
                var n = this._sevenChallengeTaskKeys[o];
                if (
                    this._sevenChallengeTaskJson["" + n].unlockday == e &&
                    this._sevenChallengeTask["" + n].state != i.Rward
                ) {
                    t = !1;
                    break;
                }
            }
            return t;
        }),
        (e.prototype.getTaskInfoById = function (e) {
            for (var t = 0; t < this._sevenChallengeTaskKeys.length; t++) {
                var o = this._sevenChallengeTaskKeys[t],
                    n = this._sevenChallengeTaskJson["" + o];
                if (n.id == e) return n;
            }
            return null;
        }),
        (e.prototype.getRwardSSRWeaponId = function () {
            var e = this._sevenChallengeJson[1].reward.split(",");
            return e[e.length - 1].split("|")[0];
        }),
        (e.prototype.getCountDownStateAndTime = function () {
            var e = {},
                t = Date.now();
            switch (this._sevenChallengInfo.gameState) {
                case r.OVER:
                    (e.timeState = s.OVER), (e.leftTime = -1);
                    break;
                case r.Reward:
                    (e.timeState = s.REWARD), (e.leftTime = this._sevenChallengInfo.endTime - t);
                    break;
                case r.Last1:
                case r.Last2:
                case r.Last3:
                case r.OpenDay7:
                    (e.timeState = s.LAST), (e.leftTime = this._sevenChallengInfo.rewardTime - t);
                    break;
                case r.OpenDay6:
                    (e.timeState = s.NEWTASK), (e.leftTime = this._sevenChallengInfo.dayTime7 - t);
                    break;
                case r.OpenDay5:
                    (e.timeState = s.NEWTASK), (e.leftTime = this._sevenChallengInfo.dayTime6 - t);
                    break;
                case r.OpenDay4:
                    (e.timeState = s.NEWTASK), (e.leftTime = this._sevenChallengInfo.dayTime5 - t);
                    break;
                case r.OpenDay3:
                    (e.timeState = s.NEWTASK), (e.leftTime = this._sevenChallengInfo.dayTime4 - t);
                    break;
                case r.OpenDay2:
                    (e.timeState = s.NEWTASK), (e.leftTime = this._sevenChallengInfo.dayTime3 - t);
                    break;
                case r.OpenDay1:
                    (e.timeState = s.NEWTASK), (e.leftTime = this._sevenChallengInfo.dayTime2 - t);
                    break;
                default:
                    console.error("gameState is wrong!");
            }
            return e;
        }),
        (e.prototype.getMaxDay = function () {
            for (var e = 1, t = 0; t < this._sevenChallengeTaskKeys.length; t++) {
                var o = this._sevenChallengeTaskKeys[t],
                    n = this._sevenChallengeTaskJson["" + o];
                Number(n.unlockday) > e && (e = Number(n.unlockday));
            }
            return e;
        }),
        (e.prototype.getCurTab = function () {
            return this._curTabIndex;
        }),
        (e.prototype.setCurTab = function (e) {
            this._curTabIndex = e;
        }),
        (e.prototype.refreshTaskDataByDay = function (e) {
            var t = this;
            this._taskData.length = 0;
            for (var o = 0; o < this._sevenChallengeTaskKeys.length; o++) {
                var n = this._sevenChallengeTaskKeys[o];
                if (this._sevenChallengeTaskJson["" + n].unlockday == e) {
                    var a = this._sevenChallengeTask["" + n];
                    this._taskData.push(a);
                }
            }
            this._taskData.sort(function (e, o) {
                return t.getTaskStateDatas(e.id) - t.getTaskStateDatas(o.id);
            });
        }),
        (e.prototype.getTaskData = function () {
            return this._taskData;
        }),
        (e.prototype.setTaskStateDatas = function (e, t) {
            for (var o = !1, n = 0; n < this._sevenChallengeTaskKeys.length; n++) {
                var a = this._sevenChallengeTaskKeys[n],
                    i = this._sevenChallengeTask["" + a];
                if (i.id == e) {
                    (o = !0), (i.state = t);
                    break;
                }
            }
            o && this.saveSevenChallengeTask();
        }),
        (e.prototype.getTaskStateDatas = function (e) {
            for (var t = i.NotFinish, o = 0; o < this._sevenChallengeTaskKeys.length; o++) {
                var n = this._sevenChallengeTaskKeys[o],
                    a = this._sevenChallengeTask["" + n];
                if (a.id == e) {
                    t = a.state;
                    break;
                }
            }
            return t;
        }),
        (e.prototype.addChallengePoint = function (e, t) {
            void 0 === t && (t = !0),
                (this._sevenChallengInfo.point += e),
                l.ReporterBridge.setUserProperty({SevenChallenge_Points: this._sevenChallengInfo.point}),
                t && this.saveSevenChallengeInfo(),
                this._refreshBoxRewardState();
        }),
        (e.prototype.getChallengePoint = function () {
            return this._sevenChallengInfo.point || 0;
        }),
        (e.prototype.getUnlockDay = function () {
            var e = this._sevenChallengInfo.gameState;
            return e > 7 && (e = 7), e;
        }),
        (e.prototype.setContentTypeNum = function (e, t, o) {
            if ((void 0 === o && (o = !0), this._sevenChallengInfo)) {
                var n = this._sevenChallengInfo.gameState;
                if (!(n <= r.NoOpen || n >= r.Reward)) {
                    var a = !1;
                    switch (e) {
                        case b.CommonTaskType.mainLineTimes:
                        case b.CommonTaskType.openRedBoxTimes:
                        case b.CommonTaskType.gainPatrolTimes:
                        case b.CommonTaskType.quickPatrolTimes:
                        case b.CommonTaskType.seeAdTimes:
                        case b.CommonTaskType.equitLevelUpTimes:
                        case b.CommonTaskType.consumeDiamond:
                        case b.CommonTaskType.killNormalEnemy:
                        case b.CommonTaskType.openAnyBoxTimes:
                        case b.CommonTaskType.shopBuyTimes:
                        case b.CommonTaskType.equitMergeTimes:
                        case b.CommonTaskType.killEliteEnegy:
                        case b.CommonTaskType.killBossEnegy:
                        case b.CommonTaskType.consumeGold:
                        case b.CommonTaskType.consumeEnergy:
                        case b.CommonTaskType.openSSRboxTimes:
                            for (var s = 0; s < this._sevenChallengeTaskKeys.length; s++) {
                                var c = this._sevenChallengeTaskKeys[s];
                                (l = this._sevenChallengeTaskJson["" + c]).contenttype == Number(e) &&
                                    (((p = this._sevenChallengeTask["" + c]).count += Number(t)),
                                    p.count >= l.count &&
                                        p.state == Number(i.NotFinish) &&
                                        ((p.state = i.Finish), (a = !0)));
                            }
                            break;
                        case b.CommonTaskType.talentLeft:
                        case b.CommonTaskType.completeLevel:
                        case b.CommonTaskType.talentRight:
                        case b.CommonTaskType.loginDays:
                            for (s = 0; s < this._sevenChallengeTaskKeys.length; s++) {
                                var l, p;
                                (c = this._sevenChallengeTaskKeys[s]),
                                    (l = this._sevenChallengeTaskJson["" + c]).contenttype == Number(e) &&
                                        (((p = this._sevenChallengeTask["" + c]).count = Number(t)),
                                        p.count >= l.count &&
                                            p.state == Number(i.NotFinish) &&
                                            ((p.state = i.Finish), (a = !0)));
                            }
                            break;
                        default:
                            console.error("setContentTypeNumErr no type matched: ", e);
                    }
                    o && this.saveSevenChallengeTask(),
                        a &&
                            (h.ClientEvents.SEVEN_CHALLENGE_REFRESH_TASK.emit(),
                            h.ClientEvents.SEVEN_CHALLENGE_REFRESH_RED.emit());
                }
            }
        }),
        (e.prototype.setContentTypeNumQuip = function (e, t) {
            if ((void 0 === t && (t = !0), this._sevenChallengInfo)) {
                var o = this._sevenChallengInfo.gameState;
                if (!(o <= r.NoOpen || o >= r.Reward)) {
                    for (
                        var n = function (e, t) {
                                for (var o = 0, n = 0; n < e.length; n++) e[n] >= t && o++;
                                return o;
                            },
                            a = !1,
                            s = 0;
                        s < this._sevenChallengeTaskKeys.length;
                        s++
                    ) {
                        var c = this._sevenChallengeTaskKeys[s],
                            l = this._sevenChallengeTaskJson["" + c],
                            p = l.contenttype;
                        if (p >= b.CommonTaskType.quipAdvanced0 && p <= b.CommonTaskType.quipLevelNum6) {
                            var u = 0,
                                d = 0,
                                g = this._sevenChallengeTask["" + c];
                            p == b.CommonTaskType.quipAdvanced0
                                ? ((g.count = e.qualityLv1 + e.qualityLv2 + e.qualityLv3 + e.qualityLv4 + e.qualityLv5),
                                  (u = g.count),
                                  (d = l.count))
                                : p == b.CommonTaskType.quipAdvanced1
                                ? ((g.count = e.qualityLv2 + e.qualityLv3 + e.qualityLv4 + e.qualityLv5),
                                  (u = g.count),
                                  (d = l.count))
                                : p == b.CommonTaskType.quipAdvanced2
                                ? ((g.count = e.qualityLv3 + e.qualityLv4 + e.qualityLv5), (u = g.count), (d = l.count))
                                : p == b.CommonTaskType.quipAdvanced345
                                ? ((g.count = e.qualityLv4 + e.qualityLv5), (u = g.count), (d = l.count))
                                : p == b.CommonTaskType.quipAdvanced6
                                ? ((g.count = e.qualityLv5), (u = g.count), (d = l.count))
                                : p == b.CommonTaskType.quipLevelNum1
                                ? ((g.count = n(e.levelArray, l.count)), (u = g.count), (d = 1))
                                : p == b.CommonTaskType.quipLevelNum2
                                ? ((g.count = n(e.levelArray, l.count)), (u = g.count), (d = 2))
                                : p == b.CommonTaskType.quipLevelNum3
                                ? ((g.count = n(e.levelArray, l.count)), (u = g.count), (d = 3))
                                : p == b.CommonTaskType.quipLevelNum4
                                ? ((g.count = n(e.levelArray, l.count)), (u = g.count), (d = 4))
                                : p == b.CommonTaskType.quipLevelNum5
                                ? ((g.count = n(e.levelArray, l.count)), (u = g.count), (d = 5))
                                : p == b.CommonTaskType.quipLevelNum6
                                ? ((g.count = n(e.levelArray, l.count)), (u = g.count), (d = 6))
                                : console.error("setContentTypeNumQuip setContentTypeNumErr no type matched: ", p),
                                u >= d && g.state == Number(i.NotFinish) && ((g.state = i.Finish), (a = !0));
                        }
                    }
                    t && this.saveSevenChallengeTask(),
                        a &&
                            (h.ClientEvents.SEVEN_CHALLENGE_REFRESH_TASK.emit(),
                            h.ClientEvents.SEVEN_CHALLENGE_REFRESH_RED.emit());
                }
            }
        }),
        (e.prototype._setLoginDay = function (e) {
            (this._sevenChallengInfo.loginDay += e),
                this.setContentTypeNum(b.CommonTaskType.loginDays, this._sevenChallengInfo.loginDay);
        }),
        (e.prototype.getMaxJifen = function () {
            for (var e = Object.keys(this._sevenChallenge.rewardMap), t = 0, o = 0; o < e.length; o++)
                t < Number(e[o]) && (t = Number(e[o]));
            return t;
        }),
        (e.prototype.getBoxRewardState = function (e) {
            return this._sevenChallengInfo.boxStates["" + e];
        }),
        (e.prototype.setBoxRewardState = function (e, t) {
            (this._sevenChallengInfo.boxStates["" + e] = t),
                this.saveSevenChallengeInfo(),
                h.ClientEvents.SEVEN_CHALLENGE_REFRESH_BOX.emit();
        }),
        (e.prototype._refreshBoxRewardState = function () {
            for (
                var e = Object.keys(this._sevenChallengInfo.boxStates), t = this.getChallengePoint(), o = 0;
                o < e.length;
                o++
            ) {
                var n = e[o],
                    a = this._sevenChallengInfo.boxStates["" + n];
                t >= Number(n) && a == i.NotFinish && this.setBoxRewardState(n, i.Finish);
            }
        }),
        (e.prototype.getProBarWidth = function () {
            var e = Object.keys(this._sevenChallengInfo.boxStates),
                t = [0];
            e.forEach(function (e) {
                t.push(Number(e));
            }),
                t.sort(function (e, t) {
                    return e - t;
                });
            var n = [0, 100, 160, 220, 280, 340, 400, 460, 520];
            if (t.length != n.length) return console.error("box num is not match boxPos"), 0;
            for (var a = o.SevenChallengeMgr.getChallengePoint(), i = 0, r = 1, s = t.length - 1; s >= 0; s--) {
                var c = t[s];
                if (a >= Number(c)) {
                    (i = s), (r = s + 1) > t.length - 1 && (r = t.length - 1);
                    break;
                }
            }
            var l = n[i],
                p = a - Number(t[i]),
                u = Number(t[r]) - Number(t[i]),
                d = n[r] - n[i],
                h = 0;
            return 0 != u && 0 != d && (h = Math.floor((p / u) * d)), l + Number(h);
        }),
        (e.prototype.autoPushAllReward = function () {
            var e = this;
            this._initRate();
            for (
                var t = [],
                    n = function (e, o) {
                        if (e > 1e5 && e < 9e5) t.push({id: e, count: o});
                        else {
                            for (var n = !1, a = 0; a < t.length; a++) {
                                var i = t[a];
                                if (i.id == e) {
                                    (i.count += Number(o)), (n = !0);
                                    break;
                                }
                            }
                            n || t.push({id: e, count: o});
                        }
                    },
                    a = function (a) {
                        for (
                            var i = [],
                                r = a.split(","),
                                s = function (a) {
                                    var s = r[a].split("|");
                                    if (2 != s.length) return console.error("rewards config error!"), "continue";
                                    var l = Number(s[0]),
                                        p = Number(s[1]);
                                    if (1001 == l)
                                        n(l, p),
                                            i.push(l + "|" + p),
                                            C.playData.addGold(p),
                                            c.analyMgr.reportGetGold(p, "SevenChallenge");
                                    else if (1002 == l)
                                        n(l, p),
                                            i.push(l + "|" + p),
                                            C.playData.addGem(p),
                                            c.analyMgr.reportGetGem(p, "SevenChallenge");
                                    else if (1003 == l)
                                        n(l, p),
                                            i.push(l + "|" + p),
                                            C.playData.addEnergy(p),
                                            c.analyMgr.reportGetEnergy(p, "SevenChallenge");
                                    else if (1014 == l)
                                        t.push({id: l, count: p}),
                                            v.challengeMgr.addPropeller(p),
                                            c.analyMgr.reportGetItem("Booster", l, Number(p), "SevenChallenge");
                                    else if (1015 == l)
                                        n(l, p), i.push(l + "|" + p), o.SevenChallengeMgr.addChallengePoint(p);
                                    else if (1017 == l)
                                        t.push({id: l, count: p}),
                                            C.playData.addHeroExperience(p),
                                            c.analyMgr.reportGetItem("HeroExp", l, Number(p), "SevenChallenge");
                                    else if (2001 == l)
                                        t.push({id: l, count: p}),
                                            C.playData.addNormalKey(p),
                                            c.analyMgr.reportGetItem("Key", l, Number(p), "SevenChallenge");
                                    else if (2002 == l)
                                        t.push({id: l, count: p}),
                                            C.playData.addSuperKey(p),
                                            c.analyMgr.reportGetItem("Key", l, Number(p), "SevenChallenge");
                                    else if (2003 == l)
                                        t.push({id: l, count: p}),
                                            C.playData.addSSRKey(p),
                                            c.analyMgr.reportGetItem("Key", l, Number(p), "SevenChallenge");
                                    else if (3001 == l || 3002 == l || 3003 == l)
                                        t.push({id: l, count: p}),
                                            C.playData.addHeroDebris(l, p),
                                            c.analyMgr.reportGetItem("Hero", l, Number(p), "SevenChallenge");
                                    else if (l > 1e4 && l < 10010)
                                        n(l, p),
                                            i.push(l + "|" + p),
                                            M.heroData.addMap(l, p),
                                            c.analyMgr.reportGetItem("Blueprint", Number(l), p, "SevenChallenge");
                                    else if (l > 1e5 && l < 9e5)
                                        for (var u = 0; u < p; u++)
                                            n(l, 1),
                                                i.push(l + "|1"),
                                                M.heroData.addEquip(l, 1),
                                                c.analyMgr.reportGetItem("Weapon", Number(l), 1, "SevenChallenge");
                                    else if (1010303 == l) {
                                        var d = {};
                                        for (u = 0; u < p; u++) {
                                            var h = f.CommonUtil.getWeightRandom(e.drawRateArr),
                                                g = e.drawIdArr[h];
                                            d[g] ? (d[g] = d[g] + 1) : (d[g] = 1);
                                        }
                                        Object.keys(d).map(function (e) {
                                            var t = d[e];
                                            n(Number(e), t),
                                                i.push(e + "|" + t),
                                                M.heroData.addMap(Number(e), t),
                                                c.analyMgr.reportGetItem("Blueprint", Number(e), t, "SevenChallenge");
                                        });
                                    } else if (1010304 == l)
                                        for (u = 0; u < p; u++) {
                                            h = f.CommonUtil.getWeightRandom(e.equipRateArr);
                                            var m = e.equipIdArr[h];
                                            n(Number(m), 1),
                                                i.push(m + "|1"),
                                                M.heroData.addEquip(Number(m), 1),
                                                c.analyMgr.reportGetItem("Weapon", Number(l), 1, "SevenChallenge");
                                        }
                                },
                                l = 0;
                            l < r.length;
                            l++
                        )
                            s(l);
                        c.analyMgr.reportSevenReward(1, o.SevenChallengeMgr.getChallengePoint(), i.join(";"));
                    },
                    r = 0;
                r < this._sevenChallengeTaskKeys.length;
                r++
            ) {
                var s = this._sevenChallengeTaskKeys[r],
                    l = this._sevenChallengeTask["" + s];
                l.state == i.Finish && (a(this._sevenChallengeTaskJson["" + s].idfixed), (l.state = i.Rward));
            }
            h.ClientEvents.SEVEN_CHALLENGE_REFRESH_TASK.emit();
            var p = Object.keys(this._sevenChallengInfo.boxStates);
            for (r = 0; r < p.length; r++)
                (s = p[r]),
                    this._sevenChallengInfo.boxStates["" + s] == i.Finish &&
                        (a(this._sevenChallenge.rewardMap["" + s]),
                        (this._sevenChallengInfo.boxStates["" + s] = i.Rward));
            0 != t.length && d.UIMgr.showView(m.ViewUrl.SevenChallengeRewardView, null, t);
        }),
        (e.prototype._initRate = function () {
            var e = this;
            (this.drawIdArr = []),
                (this.drawRateArr = []),
                (this.equipIdArr = []),
                (this.equipRateArr = []),
                _.JsonMgr.getPoolById(1010303)
                    .idrate.split(";")
                    .forEach(function (t) {
                        e.drawIdArr.push(Number(t.split("|")[0])), e.drawRateArr.push(Number(t.split("|")[2]));
                    }),
                _.JsonMgr.getPoolById(1010304)
                    .idrate.split(";")
                    .forEach(function (t) {
                        e.equipIdArr.push(Number(t.split("|")[0])), e.equipRateArr.push(Number(t.split("|")[2]));
                    });
        }),
        (e._instance = null),
        e
    );
})();
o.SevenChallengeMgr = T.instance();
