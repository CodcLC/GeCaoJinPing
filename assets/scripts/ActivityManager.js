var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.activityManager = void 0);
var n = e("JsonManager"),
    a = e("LocalStorage"),
    i = e("LocalConst"),
    r = e("CommonUtil"),
    s = e("TimeUtil"),
    c = e("ActivityLevelManager"),
    l = (function () {
        function e() {
            (this.activityMap = new Map()),
                (this.convertMap = new Map()),
                (this.bingoMap = new Map()),
                (this.bingoJson = new Map());
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.init = function () {
                var e = this;
                this.activityMap.clear(), this.convertMap.clear(), this.bingoMap.clear(), this.bingoJson.clear();
                var t = n.JsonMgr.getAllActivity();
                Object.keys(t).map(function (o) {
                    var n = t[o],
                        a = n.opentime.split("-"),
                        i = new Date(a[1]).getTime(),
                        r = new Date(a[0]).getTime(),
                        s = new Date().getTime();
                    s >= r && s < i && e.activityMap.set(n.id, n);
                }),
                    this.initConvertMap(),
                    this.initBingoMap();
            }),
            (e.prototype.initConvertMap = function () {
                var e = this,
                    t = a.LocalStorage.getData(i.LocalConst.ACTIVITY_CONVERT);
                t && Object.keys(t).length
                    ? Object.keys(t).map(function (n) {
                          var a = o.activityManager.getActivityDataById(Number(n));
                          if (a) {
                              var i = t[n],
                                  r = new Map();
                              Object.keys(i).map(function (e) {
                                  var t = i[e];
                                  r.set(t.id, t);
                              }),
                                  e.convertMap.set(a.activityid, r);
                          }
                      })
                    : this.initBaseConvert();
            }),
            (e.prototype.initBaseConvert = function () {
                var e = this;
                n.JsonMgr.getActivityConvertByTime().forEach(function (t, o) {
                    var n = new Map();
                    t.forEach(function (e) {
                        n.set(e.id, {id: e.id, count: 0, maxCount: e.exchangenum, hasChange: !1});
                    }),
                        e.convertMap.set(o, n);
                }),
                    this.saveConvertToLocal();
            }),
            (e.prototype.getConvertData = function (e, t) {
                var o = this.convertMap.get(e);
                return o ? o.get(t) : null;
            }),
            (e.prototype.getConvert = function (e) {
                return this.convertMap.get(e);
            }),
            (e.prototype.exchangeConvert = function (e, t) {
                var o = this.convertMap.get(e);
                if (o) {
                    var n = o.get(t);
                    (n.count += 1), n.count >= n.maxCount && (n.hasChange = !0), this.saveConvertToLocal();
                }
            }),
            (e.prototype.getActivityDataById = function (e) {
                return this.activityMap.get(e);
            }),
            (e.prototype.saveConvertToLocal = function () {
                var e = {};
                this.convertMap.forEach(function (t, o) {
                    t.forEach(function (t, n) {
                        e[o] || (e[o] = {}), (e[o][n] = t);
                    });
                }),
                    a.LocalStorage.setData(i.LocalConst.ACTIVITY_CONVERT, e);
            }),
            (e.prototype.initBingoMap = function () {
                var e = this;
                this.bingoJson = n.JsonMgr.getActivityBingoByTime();
                var t = a.LocalStorage.getData(i.LocalConst.ACTIVITY_BINGO);
                t && Object.keys(t).length
                    ? Object.keys(t).map(function (o) {
                          var n = t[o],
                              a = new Date(n.lastBingoTime),
                              i = new Date();
                          !s.TimeUtil.isSameUtcDate(a, i) &&
                              a.getTime() < i.getTime() &&
                              ((n.lastBingoTime = i.getTime()), (n.seeADCount = 0)),
                              e.bingoMap.set(n.id, n);
                      })
                    : this.initBaseBingo();
            }),
            (e.prototype.initBaseBingo = function () {
                var e = this;
                this.bingoJson.forEach(function (t, o) {
                    e.initBingoReward(t, o);
                });
            }),
            (e.prototype.initBingoReward = function (e, t) {
                var o = {
                    id: t,
                    bingoCount: 0,
                    allCount: 0,
                    refreshCount: 0,
                    maxBingoCount: 25,
                    bingoIndex: [],
                    downBingoIndex: [],
                    rightBingoIndex: [],
                    lastBingoTime: new Date().getTime(),
                    seeADCount: 0,
                    bingoReward: [],
                    downReward: [],
                    rightReward: [],
                    proAllCount: 0
                };
                this.loadReward(e, o), this.bingoMap.set(t, o), this.saveBingoToLocal();
            }),
            (e.prototype.loadReward = function (e, t) {
                e.forEach(function (e) {
                    if (3 !== e.gridtype) {
                        if (e.id % 1e3 <= 25) {
                            var o = (n = e.idrate.split(";"))[
                                (a = r.CommonUtil.getRangeCloseNum(0, n.length - 1))
                            ].split("|");
                            t.bingoReward.push({id: Number(o[0]), count: Number(o[1]), index: a});
                        } else if (e.id % 1e3 <= 30)
                            (o = (n = e.idrate.split(";"))[(a = r.CommonUtil.getRangeCloseNum(0, n.length - 1))].split(
                                "|"
                            )),
                                t.rightReward.push({
                                    id: Number(o[0]),
                                    count: Number(o[1]),
                                    index: a,
                                    unlockIndex: e.gridunlock.split(",")
                                });
                        else if (e.id % 1e3 <= 37) {
                            var n, a;
                            (o = (n = e.idrate.split(";"))[(a = r.CommonUtil.getRangeCloseNum(0, n.length - 1))].split(
                                "|"
                            )),
                                t.downReward.push({
                                    id: Number(o[0]),
                                    count: Number(o[1]),
                                    index: a,
                                    unlockIndex: e.gridunlock.split(",")
                                });
                        }
                    } else t.proAllCount = e.rewardnum;
                });
            }),
            (e.prototype.addSeeAdCount = function (e) {
                (this.bingoMap.get(e).seeADCount += 1), this.saveBingoToLocal();
            }),
            (e.prototype.saveBingoToLocal = function () {
                var e = {};
                this.bingoMap.forEach(function (t, o) {
                    e[o] = t;
                }),
                    a.LocalStorage.setData(i.LocalConst.ACTIVITY_BINGO, e);
            }),
            (e.prototype.refreshAllBingo = function (e) {
                var t = this.bingoJson.get(e),
                    o = this.bingoMap.get(e);
                (o.bingoIndex.length = o.downBingoIndex.length = o.rightBingoIndex.length = 0),
                    (o.bingoReward.length = o.downReward.length = o.rightReward.length = 0),
                    (o.refreshCount += 1),
                    this.loadReward(t, o),
                    this.saveBingoToLocal();
            }),
            (e.prototype.getBingoFromMap = function (e) {
                return this.bingoMap.get(e);
            }),
            (e.prototype.getBingoJson = function (e) {
                return this.bingoJson.get(e);
            }),
            (e.prototype.clearBingoCount = function (e) {
                (this.bingoMap.get(e).bingoCount = 0), this.saveBingoToLocal();
            }),
            (e.prototype.getBingoAddIndex = function (e, t) {
                var o = this.bingoMap.get(t);
                o.bingoIndex.push(e), (o.bingoCount += 1), (o.allCount += 1), this.saveBingoToLocal();
            }),
            (e.prototype.getRightAddIndex = function (e, t) {
                this.bingoMap.get(t).rightBingoIndex.push(e), this.saveBingoToLocal();
            }),
            (e.prototype.getDownAddIndex = function (e, t) {
                this.bingoMap.get(t).downBingoIndex.push(e), this.saveBingoToLocal();
            }),
            (e.prototype.checkCanConvert = function (e) {
                var t = !1,
                    o = this.convertMap.get(e);
                return o
                    ? (o.forEach(function (e) {
                          c.activityMgr.getItemById(1018).count >=
                              Number(n.JsonMgr.getActivityConvertById(e.id).costcoin.split("|")[1]) &&
                              !e.hasChange &&
                              (t = !0);
                      }),
                      t)
                    : t;
            }),
            (e.prototype.checkHasChest = function (e) {
                var t = c.activityMgr.getItemById(e);
                return t ? t.count : 0;
            }),
            (e._instance = null),
            e
        );
    })();
(o.default = l), (o.activityManager = l.instance());
