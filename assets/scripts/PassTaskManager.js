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
    (o.PassTaskMgr = o.PassViewTabState = o.PassLevelState = o.PassTaskState = o.PassState = void 0);
var i,
    r,
    s,
    c,
    l = e("LocalStorage"),
    p = e("UIManager"),
    u = e("audioConst"),
    d = e("ClientEvents"),
    h = e("LocalConst"),
    g = e("ViewUrl"),
    m = e("CommonUtil"),
    f = e("AnalyticsManager"),
    y = e("ReporterBridge"),
    v = e("audioManager"),
    M = e("challengeManager"),
    _ = e("HeroData"),
    C = e("JsonManager"),
    b = e("PlayerData"),
    T = e("TaskManager"),
    w = e("TaskTypeManager");
(function (e) {
    (e[(e.NOTOPEN = 0)] = "NOTOPEN"),
        (e[(e.OPEN = 1)] = "OPEN"),
        (e[(e.FINISH = 2)] = "FINISH"),
        (e[(e.REWARD = 3)] = "REWARD");
})((i = o.PassState || (o.PassState = {}))),
    (function (e) {
        (e[(e.Finish = 1)] = "Finish"), (e[(e.NotFinish = 2)] = "NotFinish"), (e[(e.Rward = 3)] = "Rward");
    })((r = o.PassTaskState || (o.PassTaskState = {}))),
    (function (e) {
        (e[(e.NotReward = 0)] = "NotReward"), (e[(e.Reward = 1)] = "Reward");
    })((s = o.PassLevelState || (o.PassLevelState = {}))),
    (function (e) {
        (e[(e.TASK = 0)] = "TASK"), (e[(e.LEVEL = 1)] = "LEVEL");
    })((c = o.PassViewTabState || (o.PassViewTabState = {})));
var N = (function () {
    function e() {
        (this._limitedLevel = 0),
            (this._openKey = null),
            (this._passJson = {}),
            (this._passTaskJson = {}),
            (this._passLevelJson = {}),
            (this._passInfo = null),
            (this._passTaskInfo = null),
            (this._passLevelInfo = null),
            (this.viewTabState = c.TASK),
            (this._passTaskInfoJsonArray = []),
            (this._passTaskLevelJsonArray = []),
            (this._commonViewData = []),
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
                var e;
                return a(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return (
                                (e = C.JsonMgr.getDefineConstantByName("PassUnlockLevel")),
                                (this._limitedLevel = Number(e)),
                                (this._passJson = C.JsonMgr.getJson("pass")),
                                (this._passTaskJson = C.JsonMgr.getJson("passtask")),
                                (this._passLevelJson = C.JsonMgr.getJson("passlevel")),
                                this._initRate(),
                                [4, this._initPass()]
                            );
                        case 1:
                            return t.sent(), [4, this._initPassTask()];
                        case 2:
                            return t.sent(), [4, this._initPassLevel()];
                        case 3:
                            return t.sent(), [2];
                    }
                });
            });
        }),
        (e.prototype.checkPassState = function () {
            for (var e = [], t = Date.now(), o = Object.keys(this._passJson), n = !1, a = 0; a < o.length; a++) {
                var r = o[a],
                    s = this._passJson[r],
                    c = this._passInfo["" + s.id],
                    l = s.opentime.split("-"),
                    p = new Date(l[0]).getTime(),
                    u = new Date(l[1]).getTime();
                t < p
                    ? c.state == i.OPEN && ((c.state = i.NOTOPEN), (n = !0))
                    : t >= u
                    ? c.state == i.OPEN && ((c.state = i.FINISH), (n = !0))
                    : (c.state == i.NOTOPEN && ((c.state = i.OPEN), (n = !0)),
                      c.state == i.OPEN && e.push(s.id.toString()));
            }
            n && this.savePassInfoDatas(), e.length > 0 ? (this._openKey = e[0]) : (this._openKey = null);
        }),
        (e.prototype.checkReissueReward = function () {
            for (var e = Object.keys(this._passJson), t = [], o = 0; o < e.length; o++) {
                var n = e[o],
                    a = this._passJson[n];
                this._passInfo["" + a.id].state == i.FINISH && t.push(a.id.toString());
            }
            t.length > 0 && this.autoPushAllReward(t[0]);
        }),
        (e.prototype.setPassInfoState = function (e, t) {
            this._passInfo[e].state = t;
        }),
        (e.prototype.refreshTaskState = function (e, t) {
            this._passInfo[e].taskTimesTamps = Date.now() + 1e4;
            for (var o = this._passTaskInfo[e], n = Object.keys(o), a = 0; a < n.length; a++) {
                var i = o[n[a]];
                (i.state = t), (i.count = 0);
            }
            this.savePassInfoDatas(), this.savePassTaskDatas(), d.ClientEvents.PASS_TASK_REFRESH.emit();
        }),
        (e.prototype.refreshDayTaskState = function () {
            for (var e = !1, t = new Date().getTime(), o = Object.keys(this._passInfo), n = 0; n < o.length; n++) {
                var a = o[n],
                    s = this._passInfo[a];
                if (s.state == i.OPEN) {
                    var c = s.taskTimesTamps;
                    if (!m.CommonUtil.isSameDay(t, c)) {
                        (e = !0), (s.taskTimesTamps = t);
                        for (var l = this._passTaskInfo[a], p = Object.keys(l), u = 0; u < p.length; u++) {
                            var d = l[p[u]];
                            (d.state = r.NotFinish), (d.count = 0);
                        }
                    }
                }
            }
            e && (this.savePassInfoDatas(), this.savePassTaskDatas());
        }),
        (e.prototype._initPass = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function () {
                    return (
                        (e = l.LocalStorage.getData(h.LocalConst.PASS_INFO))
                            ? ((this._passInfo = e), this._refreshBasePass())
                            : this._initBasePass(),
                        [2]
                    );
                });
            });
        }),
        (e.prototype._refreshBasePass = function () {
            for (var e = !1, t = !1, o = Object.keys(this._passInfo), n = 0; n < o.length; n++) {
                var a = o[n];
                this._passJson.hasOwnProperty(a) || ((t = !0), delete this._passInfo[a]);
            }
            var r = Object.keys(this._passJson);
            for (n = 0; n < r.length; n++) {
                a = r[n];
                var s = this._passJson[a];
                if (!this._passInfo.hasOwnProperty(s.id)) {
                    e = !0;
                    var c = {id: s.id, adTimes: 0, state: i.NOTOPEN, taskTimesTamps: Date.now(), level: 1, exp: 0};
                    this._passInfo["" + s.id] = c;
                }
            }
            (e || t) && this.savePassInfoDatas();
        }),
        (e.prototype._initBasePass = function () {
            this._passInfo = {};
            for (var e = Object.keys(this._passJson), t = 0; t < e.length; t++) {
                var o = e[t],
                    n = this._passJson[o];
                if (!this._passInfo.hasOwnProperty(n.id)) {
                    var a = {id: n.id, adTimes: 0, state: i.NOTOPEN, taskTimesTamps: Date.now(), level: 1, exp: 0};
                    this._passInfo["" + n.id] = a;
                }
            }
            this.savePassInfoDatas();
        }),
        (e.prototype._initPassTask = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function () {
                    return (
                        (e = l.LocalStorage.getData(h.LocalConst.PASS_TASK_INFO))
                            ? ((this._passTaskInfo = e), this._refreshBasePassTask())
                            : this._initBasePassTask(),
                        [2]
                    );
                });
            });
        }),
        (e.prototype._refreshBasePassTask = function () {
            for (var e = !1, t = !1, o = Object.keys(this._passTaskInfo), n = 0; n < o.length; n++) {
                var a = o[n];
                if (this._passJson.hasOwnProperty(a))
                    for (var i = this._passTaskInfo[a], s = Object.keys(i), c = 0; c < s.length; c++) {
                        var l = s[c];
                        this._passTaskJson.hasOwnProperty(l) || ((t = !0), delete i[l]);
                    }
                else delete this._passTaskInfo[a], (t = !0);
            }
            var p = Object.keys(this._passTaskJson);
            for (n = 0; n < p.length; n++) {
                var u = p[n],
                    d = this._passTaskJson[u];
                if (
                    (this._passTaskInfo.hasOwnProperty("" + d.passid) || (this._passTaskInfo["" + d.passid] = {}),
                    !(i = this._passTaskInfo["" + d.passid]).hasOwnProperty("" + d.id))
                ) {
                    e = !0;
                    var h = {id: d.id, passid: d.passid, count: 0, state: r.NotFinish};
                    i["" + d.id] = h;
                }
            }
            (e || t) && this.savePassTaskDatas();
        }),
        (e.prototype._initBasePassTask = function () {
            this._passTaskInfo = {};
            for (var e = Object.keys(this._passTaskJson), t = 0; t < e.length; t++) {
                var o = e[t],
                    n = this._passTaskJson[o];
                this._passTaskInfo.hasOwnProperty("" + n.passid) || (this._passTaskInfo["" + n.passid] = {});
                var a = this._passTaskInfo["" + n.passid];
                if (!a.hasOwnProperty("" + n.id)) {
                    var i = {id: n.id, passid: n.passid, count: 0, state: r.NotFinish};
                    a["" + n.id] = i;
                }
            }
            this.savePassTaskDatas();
        }),
        (e.prototype._initPassLevel = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function () {
                    return (
                        (e = l.LocalStorage.getData(h.LocalConst.PASS_LEVEL_INFO))
                            ? ((this._passLevelInfo = e), this._refreshBasePassLevel())
                            : this._initBasePassLevel(),
                        [2]
                    );
                });
            });
        }),
        (e.prototype._refreshBasePassLevel = function () {
            for (var e = !1, t = !1, o = Object.keys(this._passLevelInfo), n = 0; n < o.length; n++) {
                var a = o[n];
                if (this._passJson.hasOwnProperty(a))
                    for (var i = this._passLevelInfo[a], r = Object.keys(i), c = 0; c < r.length; c++) {
                        var l = r[c];
                        this._passLevelJson.hasOwnProperty(l) || ((t = !0), delete i[l]);
                    }
                else delete this._passLevelInfo[a], (t = !0);
            }
            var p = Object.keys(this._passLevelJson);
            for (n = 0; n < p.length; n++) {
                var u = p[n],
                    d = this._passLevelJson[u];
                if (
                    (this._passLevelInfo.hasOwnProperty("" + d.passid) || (this._passLevelInfo["" + d.passid] = {}),
                    !(i = this._passLevelInfo["" + d.passid]).hasOwnProperty("" + d.id))
                ) {
                    e = !0;
                    var h = {
                        id: d.id,
                        passid: d.passid,
                        level: d.level,
                        normalReward: s.NotReward,
                        extraReward: s.NotReward
                    };
                    i["" + d.id] = h;
                }
            }
            (e || t) && this.savePassLevelInfoDatas();
        }),
        (e.prototype._initBasePassLevel = function () {
            this._passLevelInfo = {};
            for (var e = Object.keys(this._passLevelJson), t = 0; t < e.length; t++) {
                var o = e[t],
                    n = this._passLevelJson[o];
                this._passLevelInfo.hasOwnProperty("" + n.passid) || (this._passLevelInfo["" + n.passid] = {});
                var a = this._passLevelInfo["" + n.passid];
                if (!a.hasOwnProperty("" + n.id)) {
                    var i = {
                        id: n.id,
                        passid: n.passid,
                        level: n.level,
                        normalReward: s.NotReward,
                        extraReward: s.NotReward
                    };
                    a["" + n.id] = i;
                }
            }
            this.savePassLevelInfoDatas();
        }),
        (e.prototype.savePassInfoDatas = function () {
            l.LocalStorage.setData(h.LocalConst.PASS_INFO, this._passInfo);
        }),
        (e.prototype.savePassTaskDatas = function () {
            l.LocalStorage.setData(h.LocalConst.PASS_TASK_INFO, this._passTaskInfo);
        }),
        (e.prototype.savePassLevelInfoDatas = function () {
            l.LocalStorage.setData(h.LocalConst.PASS_LEVEL_INFO, this._passLevelInfo);
        }),
        (e.prototype.getPassInfoByKey = function (e) {
            return this._passInfo.hasOwnProperty(e)
                ? this._passInfo[e]
                : (console.error("no passInfo by key: " + e), null);
        }),
        (e.prototype.getPassTaskByKey = function (e) {
            return this._passTaskInfo.hasOwnProperty(e)
                ? this._passTaskInfo[e]
                : (console.error("no passTaskInfo by key: " + e), null);
        }),
        (e.prototype.getPassLevelByKey = function (e) {
            return this._passLevelInfo.hasOwnProperty(e)
                ? this._passLevelInfo[e]
                : (console.error("no passLevelInfo by key: " + e), null);
        }),
        (e.prototype.getPassJsonByKey = function (e) {
            return this._passJson.hasOwnProperty(e)
                ? this._passJson[e]
                : (console.error("no passInfoJson by key: " + e), null);
        }),
        (e.prototype.getPassTaskJson = function (e) {
            return this._passTaskJson.hasOwnProperty(e)
                ? this._passTaskJson[e]
                : (console.error("no passTaskJson by key: " + e), null);
        }),
        (e.prototype.getPassLevelJson = function (e) {
            return this._passLevelJson.hasOwnProperty(e)
                ? this._passLevelJson[e]
                : (console.error("no passLevelJson by key: " + e), null);
        }),
        (e.prototype.getLimitedLevel = function () {
            return this._limitedLevel;
        }),
        (e.prototype.getOpenId = function () {
            return this._openKey;
        }),
        (e.prototype.getTaskCanReward = function () {
            if (!this._openKey) return !1;
            for (var e = this.getPassTaskByKey(this._openKey), t = Object.keys(e), o = 0; o < t.length; o++)
                if (e[t[o]].state == r.Finish) return !0;
            return !1;
        }),
        (e.prototype.getLevelCanReward = function () {
            if (!this._openKey) return !1;
            for (
                var e = this.getPassInfoByKey(this._openKey),
                    t = this.getPassLevelByKey(this._openKey),
                    n = o.PassTaskMgr.getPassJsonByKey(this._openKey),
                    a = Object.keys(t),
                    i = 0;
                i < a.length;
                i++
            ) {
                var r = t[a[i]];
                if (e.level >= r.level && r.normalReward == s.NotReward) return !0;
                if (e.level >= r.level && r.extraReward == s.NotReward && e.adTimes >= n.adnum) return !0;
            }
            return !1;
        }),
        (e.prototype.getPassOverTimeDiff = function () {
            var e = this._passJson[this._openKey].opentime.split("-");
            return new Date(e[0]).getTime(), new Date(e[1]).getTime() - Date.now();
        }),
        (e.prototype.getTaskOverTimeDiff = function () {
            var e = Date.now() + 864e5,
                t = new Date(e),
                o = t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate();
            return Date.parse(o) - Date.now();
        }),
        (e.prototype.addHightAdNum = function (e, t) {
            var o = this.getPassInfoByKey(e);
            o ? ((o.adTimes += t), this.savePassInfoDatas()) : console.error("no passInfo!");
        }),
        (e.prototype.judgeHightAdReardCan = function (e) {
            var t = this.getPassInfoByKey(e),
                o = this.getPassJsonByKey(e);
            return t.adTimes >= o.adnum;
        }),
        (e.prototype.addPassLevel = function (e) {
            var t = this.getPassInfoByKey(e);
            t
                ? ((t.level += 1),
                  (t.exp = 0),
                  this.savePassInfoDatas(),
                  y.ReporterBridge.setUserProperty({Pass_Level: t.id.toString() + "|" + t.level.toString()}),
                  d.ClientEvents.PASS_LEVEL_EXP_REFRESH.emit())
                : console.error("no passInfo!");
        }),
        (e.prototype.addPassExp = function (e, t) {
            var o = this.getPassInfoByKey(e);
            o
                ? ((o.exp += t),
                  this._checkPassLevel(e, o),
                  this.savePassInfoDatas(),
                  d.ClientEvents.PASS_LEVEL_EXP_REFRESH.emit())
                : console.error("no passInfo!");
        }),
        (e.prototype._checkPassLevel = function (e, t) {
            for (
                var o = t.level, n = this.getPassLevelByKey(e), a = Object.keys(n), i = 0, r = -1, s = 0;
                s < a.length;
                s++
            ) {
                var c = n[a[s]];
                c.level > i && (i = c.level), c.level == o && (r = c.id);
            }
            if (-1 != r) {
                var l = this.getPassLevelJson(r.toString());
                t.exp >= l.exp &&
                    (o >= i
                        ? t.exp > l.exp && (t.exp = l.exp)
                        : ((t.exp -= l.exp),
                          t.level++,
                          y.ReporterBridge.setUserProperty({Pass_Level: t.id.toString() + "|" + t.level.toString()}),
                          this._checkPassLevel(e, t)));
            } else console.error("can not find id by level:" + o);
        }),
        (e.prototype.refreshCurPassTask = function () {
            this._passTaskInfoJsonArray.length = 0;
            for (var e = this.getPassTaskByKey(this._openKey), t = Object.keys(e), o = 0; o < t.length; o++) {
                var n = t[o],
                    a = e[n],
                    i = this._passTaskJson["" + a.id];
                this._passTaskInfoJsonArray.push(i);
            }
            return (
                this._passTaskInfoJsonArray.sort(function (t, o) {
                    var n = e["" + t.id],
                        a = e["" + o.id];
                    return n.state - a.state;
                }),
                this._passTaskInfoJsonArray
            );
        }),
        (e.prototype.getCurPassTask = function () {
            return this._passTaskInfoJsonArray;
        }),
        (e.prototype.refreshCurPassLevel = function () {
            this._passTaskLevelJsonArray.length = 0;
            var e = this.getPassLevelByKey(this._openKey),
                t = this.getPassInfoByKey(this._openKey),
                o = Object.keys(e);
            o.sort(function (e, t) {
                return Number(e) - Number(t);
            });
            for (var n = -1, a = -1, i = 0; i < o.length; i++) {
                var r = e[o[i]],
                    s = this._passLevelJson["" + r.id];
                this._passTaskLevelJsonArray.push(s), -1 == n && r.level > t.level && ((n = i), (a = r.id));
            }
            if (-1 != n) {
                var c = {isLock: !0};
                (c.level = t.level + 1), (c.jsonKey = a), this._passTaskLevelJsonArray.splice(n, 0, c);
            }
            return this._passTaskLevelJsonArray;
        }),
        (e.prototype.getCurPassLevel = function () {
            return this._passTaskLevelJsonArray;
        }),
        (e.prototype.refreshTaskSomeState = function () {
            b.playData.getCompleteLevel() < this.getLimitedLevel() ||
                (this.setContentTypeNum(w.CommonTaskType.completeLevel, b.playData.getCompleteLevel()),
                this.AddTalentTask(),
                _.HeroData.instance().checkDressDataInTask(),
                this._setLoginGame(),
                this.setContentTypeNumDt());
        }),
        (e.prototype.AddTalentTask = function () {
            for (var e = b.playData.getAllTalent(), t = 0, o = 0, n = 0; n < e.length; n++) {
                var a = e[n];
                Number(a) >= 2e6 ? o++ : t++;
            }
            this.setContentTypeNum(w.CommonTaskType.talentLeft, t),
                this.setContentTypeNum(w.CommonTaskType.talentRight, o);
        }),
        (e.prototype._setLoginGame = function () {
            this.setContentTypeNum(w.CommonTaskType.loginGame, 1);
        }),
        (e.prototype.setContentTypeNum = function (e, t, o) {
            if (
                (void 0 === o && (o = !0),
                this._passTaskInfo && this._openKey && !(b.playData.getCompleteLevel() < this.getLimitedLevel()))
            ) {
                var n = !1,
                    a = this.getPassTaskByKey(this._openKey),
                    i = Object.keys(a);
                switch (e) {
                    case w.CommonTaskType.mainLineTimes:
                    case w.CommonTaskType.openRedBoxTimes:
                    case w.CommonTaskType.gainPatrolTimes:
                    case w.CommonTaskType.quickPatrolTimes:
                    case w.CommonTaskType.seeAdTimes:
                    case w.CommonTaskType.equitLevelUpTimes:
                    case w.CommonTaskType.consumeDiamond:
                    case w.CommonTaskType.killNormalEnemy:
                    case w.CommonTaskType.openAnyBoxTimes:
                    case w.CommonTaskType.shopBuyTimes:
                    case w.CommonTaskType.equitMergeTimes:
                    case w.CommonTaskType.killEliteEnegy:
                    case w.CommonTaskType.killBossEnegy:
                    case w.CommonTaskType.consumeGold:
                    case w.CommonTaskType.consumeEnergy:
                    case w.CommonTaskType.openSSRboxTimes:
                        for (var s = 0; s < i.length; s++) {
                            var c = a[i[s]];
                            (l = this.getPassTaskJson("" + c.id)).contenttype == Number(e) &&
                                ((c.count += Number(t)),
                                c.count >= l.count && c.state == r.NotFinish && ((c.state = r.Finish), (n = !0)));
                        }
                        break;
                    case w.CommonTaskType.talentLeft:
                    case w.CommonTaskType.completeLevel:
                    case w.CommonTaskType.talentRight:
                    case w.CommonTaskType.loginGame:
                        for (s = 0; s < i.length; s++) {
                            var l;
                            (c = a[i[s]]),
                                (l = this.getPassTaskJson("" + c.id)).contenttype == Number(e) &&
                                    ((c.count = Number(t)),
                                    c.count >= l.count && c.state == r.NotFinish && ((c.state = r.Finish), (n = !0)));
                        }
                        break;
                    default:
                        console.error("setContentTypeNumErr no type matched: ", e);
                }
                o && this.savePassTaskDatas(),
                    n && (d.ClientEvents.PASS_TASK_REFRESH.emit(), d.ClientEvents.PASS_RED_TASK_REFRESH.emit());
            }
        }),
        (e.prototype.setContentTypeNumQuip = function (e, t) {
            if (
                (void 0 === t && (t = !0),
                this._passTaskInfo && this._openKey && !(b.playData.getCompleteLevel() < this.getLimitedLevel()))
            ) {
                for (
                    var o = !1,
                        n = this.getPassTaskByKey(this._openKey),
                        a = Object.keys(n),
                        i = function (e, t) {
                            for (var o = 0, n = 0; n < e.length; n++) e[n] >= t && o++;
                            return o;
                        },
                        s = 0;
                    s < a.length;
                    s++
                ) {
                    var c = n[a[s]],
                        l = this.getPassTaskJson("" + c.id),
                        p = l.contenttype;
                    if (p >= w.CommonTaskType.quipAdvanced0 && p <= w.CommonTaskType.quipLevelNum6) {
                        var u = 0,
                            h = 0;
                        p == w.CommonTaskType.quipAdvanced0
                            ? ((c.count = e.qualityLv1 + e.qualityLv2 + e.qualityLv3 + e.qualityLv4 + e.qualityLv5),
                              (u = c.count),
                              (h = l.count))
                            : p == w.CommonTaskType.quipAdvanced1
                            ? ((c.count = e.qualityLv2 + e.qualityLv3 + e.qualityLv4 + e.qualityLv5),
                              (u = c.count),
                              (h = l.count))
                            : p == w.CommonTaskType.quipAdvanced2
                            ? ((c.count = e.qualityLv3 + e.qualityLv4 + e.qualityLv5), (u = c.count), (h = l.count))
                            : p == w.CommonTaskType.quipAdvanced345
                            ? ((c.count = e.qualityLv4 + e.qualityLv5), (u = c.count), (h = l.count))
                            : p == w.CommonTaskType.quipAdvanced6
                            ? ((c.count = e.qualityLv5), (u = c.count), (h = l.count))
                            : p == w.CommonTaskType.quipLevelNum1
                            ? ((c.count = i(e.levelArray, l.count)), (u = c.count), (h = 1))
                            : p == w.CommonTaskType.quipLevelNum2
                            ? ((c.count = i(e.levelArray, l.count)), (u = c.count), (h = 2))
                            : p == w.CommonTaskType.quipLevelNum3
                            ? ((c.count = i(e.levelArray, l.count)), (u = c.count), (h = 3))
                            : p == w.CommonTaskType.quipLevelNum4
                            ? ((c.count = i(e.levelArray, l.count)), (u = c.count), (h = 4))
                            : p == w.CommonTaskType.quipLevelNum5
                            ? ((c.count = i(e.levelArray, l.count)), (u = c.count), (h = 5))
                            : p == w.CommonTaskType.quipLevelNum6
                            ? ((c.count = i(e.levelArray, l.count)), (u = c.count), (h = 6))
                            : console.error("setContentTypeNumQuip setContentTypeNumErr no type matched: ", p),
                            u >= h && c.state == r.NotFinish && ((c.state = r.Finish), (o = !0));
                    }
                }
                t && this.savePassTaskDatas(),
                    o && (d.ClientEvents.PASS_TASK_REFRESH.emit(), d.ClientEvents.PASS_RED_TASK_REFRESH.emit());
            }
        }),
        (e.prototype.setContentTypeNumDt = function (e) {
            if (
                (void 0 === e && (e = !0),
                this._passTaskInfo && this._openKey && !(b.playData.getCompleteLevel() < this.getLimitedLevel()))
            ) {
                for (
                    var t = !1, o = this.getPassTaskByKey(this._openKey), n = Object.keys(o), a = 0;
                    a < n.length;
                    a++
                ) {
                    var i = o[n[a]],
                        s = this.getPassTaskJson("" + i.id);
                    s.contenttype == w.CommonTaskType.completeTask &&
                        ((i.count = T.TaskMgr.getDayTaskCompeleNum()),
                        i.count >= s.count && ((i.state = r.Finish), (t = !0)));
                }
                e && this.savePassTaskDatas(),
                    t && (d.ClientEvents.PASS_TASK_REFRESH.emit(), d.ClientEvents.PASS_RED_TASK_REFRESH.emit());
            }
        }),
        (e.prototype.gotoTaskContent = function (e) {
            switch (e) {
                case w.CommonTaskType.openRedBoxTimes:
                case w.CommonTaskType.shopBuyTimes:
                case w.CommonTaskType.openAnyBoxTimes:
                case w.CommonTaskType.consumeDiamond:
                case w.CommonTaskType.openSSRboxTimes:
                    d.ClientEvents.OPEN_SHOP_VIEW.emit(!1);
                    break;
                case w.CommonTaskType.gainPatrolTimes:
                case w.CommonTaskType.quickPatrolTimes:
                    v.audioMgr.startEffect(u.AudioConst.COMMON_TOUCH),
                        d.ClientEvents.CHANGE_LOADING.emit(!0),
                        p.UIMgr.showView(g.ViewUrl.patrolReward, null, null, function () {
                            d.ClientEvents.CHANGE_LOADING.emit(!1);
                        });
                    break;
                case w.CommonTaskType.equitLevelUpTimes:
                case w.CommonTaskType.equitMergeTimes:
                case w.CommonTaskType.quipAdvanced0:
                case w.CommonTaskType.quipAdvanced1:
                case w.CommonTaskType.quipAdvanced2:
                case w.CommonTaskType.quipAdvanced345:
                case w.CommonTaskType.quipAdvanced6:
                case w.CommonTaskType.quipLevelNum1:
                case w.CommonTaskType.quipLevelNum2:
                case w.CommonTaskType.quipLevelNum3:
                case w.CommonTaskType.quipLevelNum4:
                case w.CommonTaskType.quipLevelNum5:
                case w.CommonTaskType.quipLevelNum6:
                    d.ClientEvents.OPEN_EQUIP_VIEW.emit();
                    break;
                case w.CommonTaskType.talentLeft:
                case w.CommonTaskType.talentRight:
                    d.ClientEvents.OPEN_TALENT_VIEW.emit();
            }
        }),
        (e.prototype.GetPassReward = function (e, t) {
            for (
                var o = this,
                    n = e.split(","),
                    a = function (e) {
                        var a = n[e].split("|");
                        if (2 != a.length) return console.error("rewards config error!"), "continue";
                        var r = Number(a[0]),
                            s = Number(a[1]);
                        if (1001 == r)
                            i._addCommonReward(r, s), b.playData.addGold(s), f.analyMgr.reportGetGold(s, "Pass");
                        else if (1002 == r)
                            i._addCommonReward(r, s), b.playData.addGem(s), f.analyMgr.reportGetGem(s, "Pass");
                        else if (1003 == r)
                            i._addCommonReward(r, s), b.playData.addEnergy(s), f.analyMgr.reportGetEnergy(s, "Pass");
                        else if (1014 == r)
                            i._addCommonReward(r, s),
                                M.challengeMgr.addPropeller(s),
                                f.analyMgr.reportGetItem("Booster", r, s, "Pass");
                        else if (1016 == r) i._addCommonReward(r, s), i.addPassExp(t, s);
                        else if (1017 == r)
                            i._addCommonReward(r, s),
                                b.playData.addHeroExperience(s),
                                f.analyMgr.reportGetItem("HeroExp", r, s, "Pass");
                        else if (2001 == r)
                            i._addCommonReward(r, s),
                                b.playData.addNormalKey(s),
                                f.analyMgr.reportGetItem("Key", r, s, "Pass");
                        else if (2002 == r)
                            i._addCommonReward(r, s),
                                b.playData.addSuperKey(s),
                                f.analyMgr.reportGetItem("Key", r, s, "Pass");
                        else if (2003 == r)
                            i._addCommonReward(r, s),
                                b.playData.addSSRKey(s),
                                f.analyMgr.reportGetItem("Key", r, s, "Pass");
                        else if (3001 == r || 3002 == r || 3003 == r)
                            i._addCommonReward(r, s),
                                b.playData.addHeroDebris(r, s),
                                f.analyMgr.reportGetItem("Hero", r, s, "Pass");
                        else if (r > 1e4 && r < 10010)
                            i._addCommonReward(r, s),
                                _.heroData.addMap(r, s),
                                f.analyMgr.reportGetItem("Blueprint", r, s, "Pass");
                        else if (r > 1e5 && r < 9e5)
                            for (var c = 0; c < s; c++)
                                i._addCommonReward(r, 1),
                                    _.heroData.addEquip(r, 1),
                                    f.analyMgr.reportGetItem("Weapon", r, 1, "Pass");
                        else if (1010303 == r) {
                            var l = {};
                            for (c = 0; c < s; c++) {
                                var p = m.CommonUtil.getWeightRandom(i.drawRateArr),
                                    u = i.drawIdArr[p];
                                l[u] ? (l[u] = l[u] + 1) : (l[u] = 1);
                            }
                            Object.keys(l).map(function (e) {
                                var t = l[e];
                                o._addCommonReward(Number(e), t),
                                    _.heroData.addMap(Number(e), t),
                                    f.analyMgr.reportGetItem("Blueprint", Number(e), t, "Pass");
                            });
                        } else if (1010304 == r)
                            for (c = 0; c < s; c++) {
                                p = m.CommonUtil.getWeightRandom(i.equipRateArr);
                                var d = i.equipIdArr[p];
                                i._addCommonReward(Number(d), 1),
                                    _.heroData.addEquip(Number(d), 1),
                                    f.analyMgr.reportGetItem("Weapon", Number(d), 1, "Pass");
                            }
                    },
                    i = this,
                    r = 0;
                r < n.length;
                r++
            )
                a(r);
        }),
        (e.prototype.resetCommonViewData = function () {
            this._commonViewData.length = 0;
        }),
        (e.prototype.getCommonViewData = function () {
            return this._commonViewData;
        }),
        (e.prototype._addCommonReward = function (e, t) {
            if (e > 1e5 && e < 9e5) this._commonViewData.push({id: e, count: t});
            else {
                for (var o = !1, n = 0; n < this._commonViewData.length; n++) {
                    var a = this._commonViewData[n];
                    if (a.id == e) {
                        (a.count += Number(t)), (o = !0);
                        break;
                    }
                }
                o || this._commonViewData.push({id: e, count: t});
            }
        }),
        (e.prototype.autoPushAllReward = function (e) {
            this.resetCommonViewData();
            var t = this.getPassInfoByKey(e);
            (t.state = i.REWARD), this.savePassInfoDatas();
            for (var o = this.getPassTaskByKey(e), n = Object.keys(o), a = 0; a < n.length; a++) {
                var c = o[n[a]];
                if (c.state == r.Finish) {
                    var l = this._passTaskJson["" + c.id];
                    this.GetPassReward(l.idfixed, e), (c.state = r.Rward);
                }
            }
            var u = this.getPassLevelByKey(e),
                d = Object.keys(u);
            for (a = 0; a < d.length; a++) {
                var h = u[d[a]];
                t.level >= h.level &&
                    ((l = this._passLevelJson["" + h.id]),
                    h.normalReward == s.NotReward && (this.GetPassReward(l.idfixed1, e), (h.normalReward = s.Reward)),
                    h.extraReward == s.NotReward && (this.GetPassReward(l.idfixed2, e), (h.extraReward = s.Reward)));
            }
            0 != this._commonViewData.length &&
                p.UIMgr.showView(g.ViewUrl.PassTaskRewardView, null, this._commonViewData);
        }),
        (e.prototype._initRate = function () {
            var e = this;
            (this.drawIdArr = []),
                (this.drawRateArr = []),
                (this.equipIdArr = []),
                (this.equipRateArr = []),
                C.JsonMgr.getPoolById(1010303)
                    .idrate.split(";")
                    .forEach(function (t) {
                        e.drawIdArr.push(Number(t.split("|")[0])), e.drawRateArr.push(Number(t.split("|")[2]));
                    }),
                C.JsonMgr.getPoolById(1010304)
                    .idrate.split(";")
                    .forEach(function (t) {
                        e.equipIdArr.push(Number(t.split("|")[0])), e.equipRateArr.push(Number(t.split("|")[2]));
                    });
        }),
        (e._instance = null),
        e
    );
})();
o.PassTaskMgr = N.instance();
