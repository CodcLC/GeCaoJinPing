var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.activityMgr = o.ActivityLevelManager = void 0);
var n = e("LocalStorage"),
    a = e("LocalConst"),
    i = e("JsonManager"),
    r = e("TimeUtil"),
    s = e("GameManager"),
    c = e("AnalyticsManager"),
    l = e("PlayerData"),
    p = (function () {
        function e() {
            (this.activityDataMap = new Map()),
                (this.activityLevelData = []),
                (this.zoneMap = new Map()),
                (this.activityItemMap = new Map());
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.initActivityItem = function () {
                var e = this;
                (this.activityLevelData.length = 0),
                    this.zoneMap.clear(),
                    this.activityItemMap.clear(),
                    this.initJson();
                var t = n.LocalStorage.getData(a.LocalConst.ACTIVITY_ITEM);
                t && Object.keys(t).length
                    ? Object.keys(t).map(function (o) {
                          e.activityItemMap.set(Number(o), t[o]);
                      })
                    : (this.initBaseItem(), this.saveActivityItem());
            }),
            (e.prototype.initBaseItem = function () {
                var e = this;
                this.activityLevelData.forEach(function (t) {
                    1 !== t.zonetype &&
                        2 !== t.zonetype &&
                        t.idfixed1.split(",").forEach(function (t) {
                            e.activityItemMap.set(Number(t), {id: Number(t), count: 0, allCount: 0});
                        });
                });
            }),
            (e.prototype.saveActivityItem = function () {
                var e = {};
                this.activityItemMap.forEach(function (t) {
                    e[t.id] = {id: t.id, count: t.count, allCount: t.allCount};
                }),
                    n.LocalStorage.setData(a.LocalConst.ACTIVITY_ITEM, e);
            }),
            (e.prototype.saveItemToMap = function (e, t) {
                var o = this.activityItemMap.get(e);
                o
                    ? this.activityItemMap.set(e, {id: e, count: t + o.count, allCount: o.allCount + t})
                    : this.activityItemMap.set(e, {id: e, count: t, allCount: t});
                var n = this.activityItemMap.get(1019),
                    a = this.activityItemMap.get(1018);
                c.analyMgr.setUserProperty({Lottery_Count: n.allCount}),
                    c.analyMgr.setUserProperty({Shop_Count: a.allCount}),
                    this.saveActivityItem();
            }),
            (e.prototype.init = function () {
                this.activityDataMap.clear(), this.initData();
            }),
            (e.prototype.challengeLevel = function (e) {
                var t = this.getDataBuKey(e.id);
                (t.todayCount += 1), (t.hasCount -= 1), (t.allChallengeCount += 1);
                var o = e.zonemapid.split(",");
                -1 === t.clearLevel.indexOf(o.toString()) &&
                    ("" === t.clearLevel
                        ? (t.clearLevel += o[s.gameMgr.activityIndex] + "")
                        : (t.clearLevel += "," + o[s.gameMgr.activityIndex])),
                    this.saveMapToData();
            }),
            (e.prototype.addSeeAdCount = function (e) {
                var t = this.getDataBuKey(e);
                (t.hasCount += 1), (t.adCount += 1), (t.allADCount += 1), this.saveMapToData();
            }),
            (e.prototype.getDataBuKey = function (e) {
                return this.activityDataMap.get(e);
            }),
            (e.prototype.getHasCount = function (e) {
                return this.getDataBuKey(e).hasCount;
            }),
            (e.prototype.checkCanSeeAD = function (e) {
                var t = this.getDataBuKey(e),
                    o = this.zoneMap.get(e);
                return t && o ? o.zoneadmax : 0;
            }),
            (e.prototype.saveMapToData = function () {
                var e = {};
                this.activityDataMap.forEach(function (t, o) {
                    e[o] = t;
                }),
                    this.saveData(e);
            }),
            (e.prototype.initData = function () {
                var e = n.LocalStorage.getData(a.LocalConst.ACTIVITY_LEVEL);
                if (e && Object.keys(e).length > 0)
                    Object.keys(e).length !== this.activityLevelData.length &&
                        this.activityLevelData.forEach(function (t) {
                            e[t.id] ||
                                (e[t.id] = {
                                    todayCount: 0,
                                    lastDay: new Date().getTime(),
                                    adCount: 0,
                                    hasCount: t.zoneplaynum,
                                    allChallengeCount: 0,
                                    hasOver: !1,
                                    isOpen: !0,
                                    clearLevel: ""
                                });
                        }),
                        this.analyseActivityData(e),
                        this.saveMapToData();
                else {
                    var t = {};
                    this.activityLevelData.forEach(function (e) {
                        t[e.id] = {
                            todayCount: 0,
                            lastDay: new Date().getTime(),
                            adCount: 0,
                            hasCount: e.zoneplaynum,
                            allChallengeCount: 0,
                            hasOver: !1,
                            isOpen: !0,
                            clearLevel: ""
                        };
                    }),
                        this.saveData(t),
                        this.analyseActivityData(t);
                }
            }),
            (e.prototype.analyseActivityData = function (e) {
                var t = this,
                    o = new Date().getTime();
                Object.keys(e).map(function (n) {
                    var a = e[n];
                    if (!a.hasOver) {
                        if (!r.TimeUtil.isSameUtcDay(o, a.lastDay) && o > a.lastDay) {
                            var i = t.zoneMap.get(Number(n));
                            if (!i) return void (a.hasOver = !0);
                            var s = new Date(a.lastDay);
                            s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0);
                            var c = s.getTime();
                            if (2 === i.nextopentype) {
                                var l = new Date();
                                l.setHours(0),
                                    l.setMinutes(0),
                                    l.setSeconds(0),
                                    l.setMilliseconds(0),
                                    l.getTime() - c >= 72e5 * i.nextopentime
                                        ? ((a.lastDay = o),
                                          (a.isOpen = !0),
                                          (a.adCount = 0),
                                          (a.todayCount = 0),
                                          (a.hasCount = i.zoneplaynum))
                                        : (a.isOpen = !1);
                            } else (a.lastDay = o), (a.adCount = 0), (a.todayCount = 0), (a.hasCount = i.zoneplaynum);
                        }
                        t.activityDataMap.set(Number(n), a);
                    }
                });
            }),
            (e.prototype.checkLevelHasClear = function (e, t) {
                var o = this.activityDataMap.get(t);
                return !!o && -1 !== o.clearLevel.indexOf(e);
            }),
            (e.prototype.getNextOpenTime = function (e) {
                var t = this.getDataBuKey(e),
                    o = this.zoneMap.get(e),
                    n = new Date(t.lastDay);
                return (
                    n.setHours(0),
                    n.setMinutes(0),
                    n.setSeconds(0),
                    n.setMilliseconds(0),
                    72e5 * o.nextopentime + n.getTime()
                );
            }),
            (e.prototype.getActivityEndTime = function () {}),
            (e.prototype.saveData = function (e) {
                n.LocalStorage.setData(a.LocalConst.ACTIVITY_LEVEL, e);
            }),
            (e.prototype.initJson = function () {
                var e = this,
                    t = i.JsonMgr.getAllZone();
                Object.keys(t).map(function (o) {
                    var n = t[o];
                    (2 !== n.unlocktype || e.checkActivityTime(n.unlocknum)) &&
                        (e.zoneMap.set(n.id, n), e.activityLevelData.push(n));
                });
            }),
            (e.prototype.checkActivityTime = function (e) {
                var t = e.split("-"),
                    o = t[1],
                    n = new Date(o),
                    a = new Date(t[0]),
                    i = new Date().getTime();
                return i >= a.getTime() && i < n.getTime();
            }),
            (e.prototype.getDataLen = function () {
                return this.activityLevelData.length;
            }),
            (e.prototype.getDataByIndex = function (e) {
                return this.activityLevelData[e];
            }),
            (e.prototype.getItemById = function (e) {
                return this.activityItemMap.get(e);
            }),
            (e.prototype.costItem = function (e, t) {
                var o = this.activityItemMap.get(e);
                o && ((o.count -= t), this.saveActivityItem());
            }),
            (e.prototype.checkHasCount = function () {
                var e = this,
                    t = !1;
                return (
                    this.activityDataMap.forEach(function (o, n) {
                        var a = e.zoneMap.get(n);
                        if (a && (o.hasCount > 0 || o.adCount < a.zoneadmax)) {
                            if (
                                (1 === a.unlocktype || 2 === a.unlocktype) &&
                                Number(a.unlocknum) > l.playData.getCompleteLevel()
                            )
                                return;
                            t = !0;
                        }
                    }),
                    t
                );
            }),
            (e._instance = null),
            e
        );
    })();
(o.ActivityLevelManager = p), (o.activityMgr = p.instance());
