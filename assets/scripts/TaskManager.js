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
Object.defineProperty(o, "__esModule", {value: !0}), (o.TaskMgr = o.TaskState = o.RewardType = o.TaskType = void 0);
var i,
    r,
    s,
    c = e("LocalStorage"),
    l = e("UIManager"),
    p = e("audioConst"),
    u = e("ClientEvents"),
    d = e("LocalConst"),
    h = e("ViewUrl"),
    g = e("CommonUtil"),
    m = e("audioManager"),
    f = e("JsonManager"),
    y = e("TaskTypeManager"),
    v = e("TimeUtil"),
    M = e("ActivityManager");
(function (e) {
    (e[(e.NONE = 0)] = "NONE"), (e[(e.DAY = 1)] = "DAY"), (e[(e.WEEK = 2)] = "WEEK"), (e[(e.ACHIEVE = 3)] = "ACHIEVE");
})((i = o.TaskType || (o.TaskType = {}))),
    (function (e) {
        (e[(e.Normal = 0)] = "Normal"), (e[(e.Extra = 1)] = "Extra");
    })((r = o.RewardType || (o.RewardType = {}))),
    (function (e) {
        (e[(e.Finish = 1)] = "Finish"), (e[(e.NotFinish = 2)] = "NotFinish"), (e[(e.Rward = 3)] = "Rward");
    })((s = o.TaskState || (o.TaskState = {})));
var _ = (function () {
    function e() {
        (this.activityTaskMap = new Map()),
            (this._taskType = null),
            (this._taskData = []),
            (this._taskDayDatas = null),
            (this._taskWeekDatas = null),
            (this._taskStateDatas = null),
            (this._allJson = null);
    }
    return (
        (e.instance = function () {
            return e._instance || (e._instance = new e()), e._instance;
        }),
        (e.prototype.getTaskType = function () {
            return this._taskType;
        }),
        (e.prototype.setTaskType = function (e) {
            this._taskType !== e && ((this._taskType = e), this.refreshTaskData());
        }),
        (e.prototype.refreshTaskData = function () {
            var e = this;
            (this._taskType != i.DAY && this._taskType != i.WEEK) ||
                ((this._taskData.length = 0),
                Object.keys(this._allJson).map(function (t) {
                    var o = e._allJson[t];
                    o.tasktype == Number(e._taskType) && e._taskData.push(o);
                }));
        }),
        (e.prototype.getTaskData = function () {
            var e = this;
            return (
                this._taskData.sort(function (t, o) {
                    return e.getTaskStateDatas(t.id) - e.getTaskStateDatas(o.id);
                }),
                this._taskData
            );
        }),
        (e.prototype.initTaskData = function () {
            return n(this, void 0, void 0, function () {
                return a(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (
                                (this._allJson = f.JsonMgr.getJson("task")),
                                this.setTaskType(i.DAY),
                                this.initActivityTask(),
                                [4, this._initTaskStateDatas()]
                            );
                        case 1:
                            return e.sent(), [4, this._initTaskDayDatas()];
                        case 2:
                            return e.sent(), [4, this._initTaskWeekDatas()];
                        case 3:
                            return e.sent(), [2];
                    }
                });
            });
        }),
        (e.prototype.initActivityTask = function () {
            var e = this,
                t = c.LocalStorage.getData(d.LocalConst.ACTIVITY_TASK);
            t && Object.keys(t).length > 0
                ? (Object.keys(t).map(function (o) {
                      var n = Number(o);
                      if (M.activityManager.getActivityDataById(n)) {
                          var a = t[o],
                              i = new Map();
                          Object.keys(a).map(function (t) {
                              var o = a[t],
                                  r = new Date(o.lastDay),
                                  s = new Date();
                              !v.TimeUtil.isSameUtcDate(r, s) &&
                                  r.getTime() < s.getTime() &&
                                  ((o.lastDay = new Date().getTime()), (o.hasGet = !1), (o.count = 0)),
                                  e.activityTaskMap.set(n, i.set(o.taskType, {data: o, json: f.JsonMgr.getTask(o.id)}));
                          });
                      }
                  }),
                  this.saveActivityLocal())
                : this.initBaseActivityTask();
        }),
        (e.prototype.checkActivityTaskCanGet = function (e) {
            var t = !1,
                o = this.activityTaskMap.get(e);
            return o
                ? (o.forEach(function (e) {
                      !e.data.hasGet && e.data.count >= e.json.count && (t = !0);
                  }),
                  t)
                : t;
        }),
        (e.prototype.getActivityTasks = function (e) {
            return this.activityTaskMap.get(e);
        }),
        (e.prototype.initBaseActivityTask = function () {
            var e = this;
            f.JsonMgr.getActivityTaskByTime().forEach(function (t, o) {
                var n = new Map();
                t.forEach(function (t) {
                    e.activityTaskMap.set(
                        o,
                        n.set(t.contenttype, {
                            data: {
                                id: t.id,
                                count: 0,
                                hasGet: !1,
                                taskType: t.contenttype,
                                lastDay: new Date().getTime()
                            },
                            json: t
                        })
                    );
                });
            }),
                this.saveActivityLocal();
        }),
        (e.prototype.saveActivityLocal = function () {
            var e = {};
            this.activityTaskMap.forEach(function (t, o) {
                t.forEach(function (t, n) {
                    e[o] || (e[o] = {}), (e[o][n] = t.data);
                });
            }),
                c.LocalStorage.setData(d.LocalConst.ACTIVITY_TASK, e);
        }),
        (e.prototype.getActivityTaskByType = function (e, t) {
            return this.activityTaskMap.get(e).get(t);
        }),
        (e.prototype.rewardActivityTask = function (e, t) {
            var o = this.activityTaskMap.get(e);
            o && ((o.get(t).data.hasGet = !0), this.saveActivityLocal());
        }),
        (e.prototype.addActivityTaskPro = function (e, t) {
            var o = this;
            void 0 === t && (t = 1),
                this.activityTaskMap.forEach(function (n) {
                    var a = n.get(e);
                    a && (a.data.count += t), 8 !== e && o.saveActivityLocal();
                });
        }),
        (e.prototype._initTaskStateDatas = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function () {
                    return (
                        (e = c.LocalStorage.getData(d.LocalConst.TASK_STATE_DATAS_NEW))
                            ? ((this._taskStateDatas = e), this.initTaskState())
                            : ((e = c.LocalStorage.getData(d.LocalConst.TASK_STATE_DATAS))
                                  ? ((this._taskStateDatas = e),
                                    this.initTaskState(),
                                    c.LocalStorage.delete(d.LocalConst.TASK_STATE_DATAS))
                                  : this._initBaseTaskStateDatas(),
                              this._saveTaskStateDatas()),
                        [2]
                    );
                });
            });
        }),
        (e.prototype.initTaskState = function () {
            var e = this,
                t = !1;
            Object.keys(this._allJson).map(function (o) {
                var n = e._allJson[o];
                e._taskStateDatas["" + n.id] ||
                    ((t = !0),
                    (e._taskStateDatas["" + n.id] = {
                        id: n.id,
                        tasktype: n.tasktype,
                        contentType: n.contenttype,
                        count: n.count,
                        state: Number(s.NotFinish),
                        normalReward: !1,
                        extraReward: !1
                    }));
            }),
                t && this._saveTaskStateDatas();
        }),
        (e.prototype._initTaskDayDatas = function () {
            var e = c.LocalStorage.getData(d.LocalConst.TASK_DAY_DATAS_NEW);
            e
                ? this.initTaskDay(e)
                : ((e = c.LocalStorage.getData(d.LocalConst.TASK_DAY_DATAS))
                      ? (this.initTaskDay(e), c.LocalStorage.delete(d.LocalConst.TASK_DAY_DATAS))
                      : this._initBaseTaskDayDatas(),
                  this._saveTaskDayDatas());
        }),
        (e.prototype.initTaskDay = function (e) {
            this._taskDayDatas = e;
            var t = new Date().getTime(),
                o = this._taskDayDatas.days;
            g.CommonUtil.isSameDay(t, o) ||
                (this._initBaseTaskDayDatas(),
                this._saveTaskDayDatas(),
                this._reSetTaskState(i.DAY),
                this._saveTaskStateDatas());
        }),
        (e.prototype._initTaskWeekDatas = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function () {
                    return (
                        (e = c.LocalStorage.getData(d.LocalConst.TASK_WEEK_DATAS_NEW))
                            ? this.initWeakData(e)
                            : ((e = c.LocalStorage.getData(d.LocalConst.TASK_WEEK_DATAS))
                                  ? (this.initWeakData(e), c.LocalStorage.delete(d.LocalConst.TASK_WEEK_DATAS))
                                  : this._initBaseTaskWeekDatas(),
                              this._saveTaskWeekDatas()),
                        [2]
                    );
                });
            });
        }),
        (e.prototype.initWeakData = function (e) {
            this._taskWeekDatas = e;
            var t = new Date().getTime(),
                o = this._taskWeekDatas.days;
            g.CommonUtil.isSameWeek(t, o) ||
                (this._initBaseTaskWeekDatas(),
                this._saveTaskWeekDatas(),
                this._reSetTaskState(i.WEEK),
                this._saveTaskStateDatas());
        }),
        (e.prototype._initBaseTaskStateDatas = function () {
            var e = this;
            (this._taskStateDatas = {}),
                Object.keys(this._allJson).map(function (t) {
                    var o = e._allJson[t],
                        n = {
                            id: o.id,
                            tasktype: o.tasktype,
                            contentType: o.contenttype,
                            count: o.count,
                            state: Number(s.NotFinish),
                            normalReward: !1,
                            extraReward: !1
                        };
                    e._taskStateDatas["" + o.id] = n;
                });
        }),
        (e.prototype._initBaseTaskDayDatas = function () {
            this._taskDayDatas = {
                days: new Date().getTime(),
                mainLineTimes: 0,
                openRedBoxTimes: 0,
                gainPatrolTimes: 0,
                openSSRboxTimes: 0,
                quickPatrolTimes: 0,
                seeAdTimes: 0,
                equitLevelUpTimes: 0,
                consumeDiamond: 0,
                killNormalEnemy: 0
            };
        }),
        (e.prototype._initBaseTaskWeekDatas = function () {
            this._taskWeekDatas = {
                days: new Date().getTime(),
                openAnyBoxTimes: 0,
                shopBuyTimes: 0,
                openSSRboxTimes: 0,
                mainLineTimes: 0,
                equitMergeTimes: 0,
                killEliteEnegy: 0,
                killBossEnegy: 0,
                consumeGold: 0,
                consumeEnergy: 0
            };
        }),
        (e.prototype._reSetTaskState = function (e) {
            var t = this;
            Object.keys(this._taskStateDatas).map(function (o) {
                var n = t._taskStateDatas[o];
                n.tasktype == e && ((n.state = s.NotFinish), (n.normalReward = !1), (n.extraReward = !1));
            });
        }),
        (e.prototype.saveTaskData = function () {
            this._saveTaskDayDatas(), this._saveTaskWeekDatas();
        }),
        (e.prototype._saveTaskDayDatas = function () {
            c.LocalStorage.setData(d.LocalConst.TASK_DAY_DATAS_NEW, this._taskDayDatas);
        }),
        (e.prototype._saveTaskWeekDatas = function () {
            c.LocalStorage.setData(d.LocalConst.TASK_WEEK_DATAS_NEW, this._taskWeekDatas);
        }),
        (e.prototype._saveTaskStateDatas = function () {
            c.LocalStorage.setData(d.LocalConst.TASK_STATE_DATAS_NEW, this._taskStateDatas);
        }),
        (e.prototype.setContentTypeNum = function (e, t, o) {
            switch ((void 0 === o && (o = !0), e)) {
                case y.CommonTaskType.mainLineTimes:
                case y.CommonTaskType.openRedBoxTimes:
                case y.CommonTaskType.gainPatrolTimes:
                case y.CommonTaskType.quickPatrolTimes:
                case y.CommonTaskType.seeAdTimes:
                case y.CommonTaskType.equitLevelUpTimes:
                case y.CommonTaskType.consumeDiamond:
                case y.CommonTaskType.killNormalEnemy:
                case y.CommonTaskType.openAnyBoxTimes:
                case y.CommonTaskType.shopBuyTimes:
                case y.CommonTaskType.equitMergeTimes:
                case y.CommonTaskType.killEliteEnegy:
                case y.CommonTaskType.killBossEnegy:
                case y.CommonTaskType.consumeGold:
                case y.CommonTaskType.consumeEnergy:
                case y.CommonTaskType.openSSRboxTimes:
                    var n = this._taskDayDatas["" + y.CommonTaskType[e]],
                        a = this._taskWeekDatas["" + y.CommonTaskType[e]];
                    n || 0 == n
                        ? (this._taskDayDatas["" + y.CommonTaskType[e]] += Number(t))
                        : (this._taskDayDatas["" + y.CommonTaskType[e]] = Number(t)),
                        a || 0 == a
                            ? (this._taskWeekDatas["" + y.CommonTaskType[e]] += Number(t))
                            : (this._taskWeekDatas["" + y.CommonTaskType[e]] = Number(t)),
                        o && (this._saveTaskDayDatas(), this._saveTaskWeekDatas()),
                        this._refreshTaskState();
                    break;
                default:
                    console.error("setContentTypeNumErr no type matched: ", e);
            }
        }),
        (e.prototype.getContentTypeNum = function (e, t) {
            var o, n;
            return e == i.DAY
                ? null !== (o = this._taskDayDatas["" + y.CommonTaskType[t]]) && void 0 !== o
                    ? o
                    : 0
                : e == i.WEEK
                ? null !== (n = this._taskWeekDatas["" + y.CommonTaskType[t]]) && void 0 !== n
                    ? n
                    : 0
                : void console.error("getContentType no taskType matched: ", this._taskType);
        }),
        (e.prototype.taskCanFinish = function (e) {
            var t = this,
                o = !1;
            return (
                Object.keys(this._taskStateDatas).map(function (n) {
                    var a = t._taskStateDatas[n];
                    a.tasktype == e && a.state == s.Finish && (o = !0);
                }),
                o
            );
        }),
        (e.prototype.getTaskStateDatas = function (e) {
            var t = this,
                o = s.NotFinish;
            return (
                Object.keys(this._taskStateDatas).map(function (n) {
                    var a = t._taskStateDatas[n];
                    a.id == e && (o = a.state);
                }),
                o
            );
        }),
        (e.prototype.getTaskDatas = function (e) {
            var t = this,
                o = null;
            return (
                Object.keys(this._taskStateDatas).forEach(function (n) {
                    var a = t._taskStateDatas[n];
                    a.id == e && (o = a);
                }),
                o
            );
        }),
        (e.prototype.setTaskStateDatas = function (e, t, o) {
            var n = this,
                a = !1;
            Object.keys(this._taskStateDatas).map(function (i) {
                var s = n._taskStateDatas[i];
                s.id == e &&
                    (o == r.Normal ? (s.normalReward = !0) : o == r.Extra && (s.extraReward = !0),
                    s.extraReward && s.normalReward && (s.state = t),
                    (a = !0));
            }),
                a && this._saveTaskStateDatas();
        }),
        (e.prototype._refreshTaskState = function () {
            var e = this,
                t = !1,
                o = 0;
            Object.keys(this._taskStateDatas).map(function (n) {
                var a = e._taskStateDatas[n],
                    r = e._allJson["" + a.id].count;
                e.getContentTypeNum(a.tasktype, a.contentType) >= r &&
                    a.state == Number(s.NotFinish) &&
                    ((a.state = s.Finish), (t = !0), a.tasktype == i.DAY && o++);
            }),
                t && (this._saveTaskStateDatas(), u.ClientEvents.TASK_RED_POINT.emit()),
                o && y.TaskTypeMgr.setContentTypeNumCompleteTask(o);
        }),
        (e.prototype.getDayTaskCompeleNum = function () {
            var e = this,
                t = 0;
            return (
                Object.keys(this._taskStateDatas).map(function (o) {
                    var n = e._taskStateDatas[o];
                    n.tasktype != i.DAY || (n.state != s.Finish && n.state != s.Rward) || t++;
                }),
                t
            );
        }),
        (e.prototype.gotoTaskContent = function (e) {
            switch (e) {
                case y.CommonTaskType.mainLineTimes:
                case y.CommonTaskType.seeAdTimes:
                case y.CommonTaskType.killEliteEnegy:
                case y.CommonTaskType.killBossEnegy:
                case y.CommonTaskType.killNormalEnemy:
                case y.CommonTaskType.consumeGold:
                case y.CommonTaskType.consumeEnergy:
                    break;
                case y.CommonTaskType.shopBuyTimes:
                case y.CommonTaskType.openAnyBoxTimes:
                case y.CommonTaskType.consumeDiamond:
                case y.CommonTaskType.openRedBoxTimes:
                case y.CommonTaskType.openSSRboxTimes:
                    u.ClientEvents.OPEN_SHOP_VIEW.emit(!1);
                    break;
                case y.CommonTaskType.gainPatrolTimes:
                case y.CommonTaskType.quickPatrolTimes:
                    m.audioMgr.startEffect(p.AudioConst.COMMON_TOUCH),
                        u.ClientEvents.CHANGE_LOADING.emit(!0),
                        l.UIMgr.showView(h.ViewUrl.patrolReward, null, null, function () {
                            u.ClientEvents.CHANGE_LOADING.emit(!1);
                        });
                    break;
                case y.CommonTaskType.equitLevelUpTimes:
                case y.CommonTaskType.equitMergeTimes:
                    u.ClientEvents.OPEN_EQUIP_VIEW.emit();
            }
        }),
        (e._instance = null),
        e
    );
})();
o.TaskMgr = _.instance();
