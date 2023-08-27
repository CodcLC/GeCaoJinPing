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
Object.defineProperty(o, "__esModule", {value: !0}), (o.AchieveMgr = o.AchieveTaskState = void 0);
var i,
    r = e("LocalStorage"),
    s = e("UIManager"),
    c = e("audioConst"),
    l = e("ClientEvents"),
    p = e("LocalConst"),
    u = e("ViewUrl"),
    d = e("CommonUtil"),
    h = e("AnalyticsManager"),
    g = e("audioManager"),
    m = e("HeroData"),
    f = e("ItemManager"),
    y = e("JsonManager"),
    v = e("PlayerData"),
    M = e("TaskTypeManager");
(function (e) {
    (e[(e.Finish = 1)] = "Finish"), (e[(e.NotFinish = 2)] = "NotFinish"), (e[(e.Rward = 3)] = "Rward");
})((i = o.AchieveTaskState || (o.AchieveTaskState = {})));
var _ = (function () {
    function e() {
        (this._achieveTaskJson = {}),
            (this._achieveLevelJson = {}),
            (this._achieveInfo = null),
            (this._achieveTaskInfo = null),
            (this._achieveTaskData = []);
    }
    return (
        (e.instance = function () {
            return e._instance || (e._instance = new e()), e._instance;
        }),
        (e.prototype.initTaskData = function () {
            return n(this, void 0, void 0, function () {
                return a(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (
                                (this._achieveTaskJson = y.JsonMgr.getJson("achievementtask")),
                                (this._achieveLevelJson = y.JsonMgr.getJson("achievementlevel")),
                                [4, this._initAchieveInfo()]
                            );
                        case 1:
                            return e.sent(), [4, this._initAchieveTask()];
                        case 2:
                            return e.sent(), [2];
                    }
                });
            });
        }),
        (e.prototype._initAchieveInfo = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function () {
                    return (
                        (e = r.LocalStorage.getData(p.LocalConst.ACHIEVE_INFO))
                            ? (this._achieveInfo = e)
                            : ((this._achieveInfo = {timestamp: Date.now(), level: 1, exp: 0, taskTime16: 1}),
                              this.saveAchieveInfoDatas()),
                        [2]
                    );
                });
            });
        }),
        (e.prototype._initAchieveTask = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function () {
                    return (
                        (e = r.LocalStorage.getData(p.LocalConst.ACHIEVE_TASK_INFO))
                            ? ((this._achieveTaskInfo = e), this._refreshBaseAchieveTask())
                            : this._initBaseAchieveTask(),
                        [2]
                    );
                });
            });
        }),
        (e.prototype._refreshBaseAchieveTask = function () {
            for (var e = !1, t = !1, o = Object.keys(this._achieveTaskInfo), n = 0; n < o.length; n++) {
                var a = o[n];
                this._achieveTaskJson.hasOwnProperty(a) || ((t = !0), delete this._achieveTaskInfo[a]);
            }
            var r = Object.keys(this._achieveTaskJson);
            for (n = 0; n < r.length; n++) {
                var s = r[n],
                    c = this._achieveTaskJson[s];
                if (!this._achieveTaskInfo.hasOwnProperty("" + c.id)) {
                    e = !0;
                    var l = {id: c.id, contenttype: c.contenttype, state: i.NotFinish};
                    this._achieveTaskInfo["" + c.id] = l;
                }
            }
            (e || t) && this.saveAchieveTaskDatas();
        }),
        (e.prototype._initBaseAchieveTask = function () {
            this._achieveTaskInfo = {};
            for (var e = Object.keys(this._achieveTaskJson), t = 0; t < e.length; t++) {
                var o = e[t],
                    n = this._achieveTaskJson[o];
                if (!this._achieveTaskInfo.hasOwnProperty("" + n.id)) {
                    var a = {id: n.id, contenttype: n.contenttype, state: i.NotFinish};
                    this._achieveTaskInfo["" + n.id] = a;
                }
            }
            this.saveAchieveTaskDatas();
        }),
        (e.prototype.saveAchieveInfoDatas = function () {
            r.LocalStorage.setData(p.LocalConst.ACHIEVE_INFO, this._achieveInfo);
        }),
        (e.prototype.saveAchieveTaskDatas = function () {
            r.LocalStorage.setData(p.LocalConst.ACHIEVE_TASK_INFO, this._achieveTaskInfo);
        }),
        (e.prototype.getAchieveLevel = function () {
            return this._achieveInfo.level;
        }),
        (e.prototype.getAchieveLevelJsonByLevel = function (e) {
            for (var t = Object.keys(this._achieveLevelJson), o = 0; o < t.length; o++) {
                var n = this._achieveLevelJson[t[o]];
                if (n.level == e) return n;
            }
            return null;
        }),
        (e.prototype.getAchieveTaskJsonById = function (e) {
            for (var t = Object.keys(this._achieveTaskJson), o = 0; o < t.length; o++) {
                var n = this._achieveTaskJson[t[o]];
                if (n.id == e) return n;
            }
            return null;
        }),
        (e.prototype.getAchieveExp = function () {
            return this._achieveInfo.exp;
        }),
        (e.prototype.addAchieveExp = function (e) {
            for (
                var t = this, o = !1, n = [], a = Object.keys(this._achieveLevelJson), i = 0, r = 0;
                r < a.length;
                r++
            ) {
                var s = a[r],
                    c = this._achieveLevelJson[s];
                c.level > i && (i = c.level);
            }
            var p = function () {
                var e = t._achieveInfo.level,
                    a = t.getAchieveLevelJsonByLevel(e);
                t._achieveInfo.exp >= a.exp &&
                    (e >= i
                        ? t._achieveInfo.exp > a.exp && (t._achieveInfo.exp = a.exp)
                        : ((t._achieveInfo.exp -= a.exp),
                          n.push(t._achieveInfo.level),
                          t._achieveInfo.level++,
                          (o = !0),
                          p()));
            };
            (this._achieveInfo.exp += e),
                p(),
                this.saveAchieveInfoDatas(),
                l.ClientEvents.ACHIEVE_REFRESH_EXP.emit(),
                o && (l.ClientEvents.ACHIEVE_REFRESH_LEVEL.emit(), this.getBoxReward(n));
        }),
        (e.prototype.getBoxReward = function (e) {
            for (var t = [], o = 0; o < e.length; o++) {
                for (
                    var n = e[o], a = this.getAchieveLevelJsonByLevel(n).idfixed1, i = a.split(","), r = 0;
                    r < i.length;
                    r++
                ) {
                    var c = i[r].split("|");
                    if (2 == c.length) {
                        var l = Number(c[0]),
                            p = Number(c[1]),
                            d = f.itemMgr.addItemData(l, p, "AchievementReward");
                        d ? (t = t.concat(d)) : t.push({id: l, count: p});
                    } else console.error("rewards config error!");
                }
                h.analyMgr.reportAchievement_Reward(n, "Level", this._achieveInfo.level, 0, this._achieveInfo.exp, a);
            }
            0 != t.length && s.UIMgr.showView(u.ViewUrl.ScrollRewardView, null, t);
        }),
        (e.prototype.taskCanFinish = function () {
            for (var e = Object.keys(this._achieveTaskInfo), t = 0; t < e.length; t++) {
                var o = e[t];
                if (this._achieveTaskInfo[o].state == i.Finish) return !0;
            }
            return !1;
        }),
        (e.prototype.refreshTaskData = function () {
            var e = this;
            this._achieveTaskData.length = 0;
            for (var t = new Map(), o = new Map(), n = Object.keys(this._achieveTaskJson), a = 0; a < n.length; a++) {
                var r = n[a],
                    s = this._achieveTaskJson[r];
                if (this._achieveTaskInfo[r].state == i.Rward) {
                    var c = t.get(s.contenttype);
                    c || 0 == c ? c < s.id && t.set(s.contenttype, s.id) : t.set(s.contenttype, s.id);
                } else {
                    var l = o.get(s.contenttype);
                    l || 0 == l ? l > s.id && o.set(s.contenttype, s.id) : o.set(s.contenttype, s.id);
                }
            }
            return (
                t.forEach(function (t) {
                    e._achieveTaskData.push(e._achieveTaskInfo["" + t]);
                }),
                o.forEach(function (t) {
                    e._achieveTaskData.push(e._achieveTaskInfo["" + t]);
                }),
                this._achieveTaskData.sort(function (e, t) {
                    return e.state == t.state ? e.id - t.id : e.state - t.state;
                }),
                this._achieveTaskData
            );
        }),
        (e.prototype.getAchieveTaskData = function () {
            return this._achieveTaskData;
        }),
        (e.prototype.refreshTaskSomeState = function () {
            this.setContentTypeNum(M.CommonTaskType.completeLevel, v.playData.getCompleteLevel()),
                this.AddTalentTask(),
                m.HeroData.instance().checkDressDataInTask(),
                this._setLoginGame();
        }),
        (e.prototype.AddTalentTask = function () {
            for (var e = v.playData.getAllTalent(), t = 0, o = 0, n = 0; n < e.length; n++) {
                var a = e[n];
                Number(a) >= 2e6 ? o++ : t++;
            }
            this.setContentTypeNum(M.CommonTaskType.talentLeft, t),
                this.setContentTypeNum(M.CommonTaskType.talentRight, o);
        }),
        (e.prototype._setLoginGame = function () {
            var e = new Date().getTime(),
                t = this._achieveInfo.timestamp;
            d.CommonUtil.isSameDay(e, t) ||
                ((this._achieveInfo.timestamp = e),
                this.saveAchieveInfoDatas(),
                this.setContentTypeNum(M.CommonTaskType.loginDays, 1));
        }),
        (e.prototype.setContentTypeNumQuip = function (e, t) {
            if ((void 0 === t && (t = !0), this._achieveInfo)) {
                for (
                    var o = !1,
                        n = e.qualityLv1 + e.qualityLv2 + e.qualityLv3 + e.qualityLv4 + e.qualityLv5,
                        a = e.qualityLv2 + e.qualityLv3 + e.qualityLv4 + e.qualityLv5,
                        r = e.qualityLv3 + e.qualityLv4 + e.qualityLv5,
                        s = e.qualityLv4 + e.qualityLv5,
                        c = e.qualityLv5,
                        p = 0,
                        u = 0;
                    u < e.levelArray.length;
                    u++
                )
                    p += e.levelArray[u];
                (this._achieveInfo.taskTime19 = n),
                    (this._achieveInfo.taskTime20 = a),
                    (this._achieveInfo.taskTime21 = r),
                    (this._achieveInfo.taskTime22 = s),
                    (this._achieveInfo.taskTime23 = c),
                    (this._achieveInfo.taskTime34 = p);
                var d = Object.keys(this._achieveTaskJson);
                for (u = 0; u < d.length; u++) {
                    var h = d[u],
                        g = this._achieveTaskInfo[h],
                        m = this._achieveTaskJson[h],
                        f = this._achieveInfo["taskTime" + g.contenttype.toString()],
                        y = m.count;
                    g.state == i.NotFinish && f >= y && ((g.state = i.Finish), (o = !0));
                }
                t && this.saveAchieveInfoDatas(),
                    o && (this.saveAchieveTaskDatas(), l.ClientEvents.ACHIEVE_RED_POINT.emit());
            }
        }),
        (e.prototype.setContentTypeNum = function (e, t, o) {
            if ((void 0 === o && (o = !0), this._achieveInfo)) {
                var n = !1,
                    a = "taskTime" + Number(e).toString();
                switch (e) {
                    case M.CommonTaskType.mainLineTimes:
                    case M.CommonTaskType.openRedBoxTimes:
                    case M.CommonTaskType.gainPatrolTimes:
                    case M.CommonTaskType.quickPatrolTimes:
                    case M.CommonTaskType.seeAdTimes:
                    case M.CommonTaskType.equitLevelUpTimes:
                    case M.CommonTaskType.consumeDiamond:
                    case M.CommonTaskType.killNormalEnemy:
                    case M.CommonTaskType.openAnyBoxTimes:
                    case M.CommonTaskType.shopBuyTimes:
                    case M.CommonTaskType.equitMergeTimes:
                    case M.CommonTaskType.killBossEnegy:
                    case M.CommonTaskType.killEliteEnegy:
                    case M.CommonTaskType.consumeGold:
                    case M.CommonTaskType.consumeEnergy:
                    case M.CommonTaskType.loginDays:
                    case M.CommonTaskType.completeTask:
                    case M.CommonTaskType.openSSRboxTimes:
                        this._achieveInfo.hasOwnProperty(a) ? (this._achieveInfo[a] += t) : (this._achieveInfo[a] = t);
                        break;
                    case M.CommonTaskType.talentLeft:
                    case M.CommonTaskType.completeLevel:
                    case M.CommonTaskType.talentRight:
                        this._achieveInfo[a] = t;
                }
                for (var r = Object.keys(this._achieveTaskJson), s = 0; s < r.length; s++) {
                    var c = r[s],
                        p = this._achieveTaskInfo[c],
                        u = this._achieveTaskJson[c],
                        d = this._achieveInfo["taskTime" + p.contenttype.toString()],
                        h = u.count;
                    p.state == i.NotFinish && d >= h && ((p.state = i.Finish), (n = !0));
                }
                o && this.saveAchieveInfoDatas(),
                    n && (this.saveAchieveTaskDatas(), l.ClientEvents.ACHIEVE_RED_POINT.emit());
            }
        }),
        (e.prototype.getTaskFinishCountByType = function (e) {
            var t = "taskTime" + Number(e).toString();
            return this._achieveInfo.hasOwnProperty(t) ? this._achieveInfo[t] : 0;
        }),
        (e.prototype.gotoTaskContent = function (e) {
            switch (e) {
                case M.CommonTaskType.openRedBoxTimes:
                case M.CommonTaskType.shopBuyTimes:
                case M.CommonTaskType.openAnyBoxTimes:
                case M.CommonTaskType.consumeDiamond:
                case M.CommonTaskType.openSSRboxTimes:
                    l.ClientEvents.OPEN_SHOP_VIEW.emit(!1);
                    break;
                case M.CommonTaskType.gainPatrolTimes:
                case M.CommonTaskType.quickPatrolTimes:
                    g.audioMgr.startEffect(c.AudioConst.COMMON_TOUCH),
                        l.ClientEvents.CHANGE_LOADING.emit(!0),
                        s.UIMgr.showView(u.ViewUrl.patrolReward, null, null, function () {
                            l.ClientEvents.CHANGE_LOADING.emit(!1);
                        });
                    break;
                case M.CommonTaskType.equitLevelUpTimes:
                case M.CommonTaskType.equitMergeTimes:
                case M.CommonTaskType.quipAdvanced0:
                case M.CommonTaskType.quipAdvanced1:
                case M.CommonTaskType.quipAdvanced2:
                case M.CommonTaskType.quipAdvanced345:
                case M.CommonTaskType.quipAdvanced6:
                case M.CommonTaskType.quipLevelNum1:
                case M.CommonTaskType.quipLevelNum2:
                case M.CommonTaskType.quipLevelNum3:
                case M.CommonTaskType.quipLevelNum4:
                case M.CommonTaskType.quipLevelNum5:
                case M.CommonTaskType.quipLevelNum6:
                    l.ClientEvents.OPEN_EQUIP_VIEW.emit();
                    break;
                case M.CommonTaskType.talentLeft:
                case M.CommonTaskType.talentRight:
                    l.ClientEvents.OPEN_TALENT_VIEW.emit();
            }
        }),
        (e.prototype.GetPassReward = function (e) {
            for (var t = e.idfixed, o = t.split(","), n = [], a = 0, i = 0; i < o.length; i++) {
                var r = o[i].split("|");
                if (2 == r.length) {
                    var c = Number(r[0]),
                        l = Number(r[1]);
                    1020 == c && (a += l);
                    var p = f.itemMgr.addItemData(c, l, "AchievementReward");
                    p ? (n = n.concat(p)) : n.push({id: c, count: l});
                } else console.error("rewards config error!");
            }
            0 != n.length &&
                (s.UIMgr.showView(u.ViewUrl.commonRewardView, null, n),
                h.analyMgr.reportAchievement_Reward(
                    e.id,
                    "Task",
                    this._achieveInfo.level,
                    a,
                    this._achieveInfo.exp,
                    t
                ));
        }),
        (e._instance = null),
        e
    );
})();
o.AchieveMgr = _.instance();
