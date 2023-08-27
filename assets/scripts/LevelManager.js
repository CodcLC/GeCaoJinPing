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
Object.defineProperty(o, "__esModule", {value: !0}), (o.levelMgr = o.LevelManager = o.MapType = void 0);
var i,
    r = e("JsonManager"),
    s = e("ClientEvents"),
    c = e("MonsterManager"),
    l = e("LoadGameManager"),
    p = e("GameManager"),
    u = e("AnalyticsManager"),
    d = e("RoleData"),
    h = e("PlayerData"),
    g = e("censtant");
(function (e) {
    (e[(e.Loop = 1)] = "Loop"), (e[(e.Vertical = 2)] = "Vertical");
})((i = o.MapType || (o.MapType = {})));
var m = (function () {
    function e() {
        (this.levelJson = null),
            (this.levelLen = 0),
            (this.monsterIds = []),
            (this.bossIds = []),
            (this.timeArr = []),
            (this.maxArr = []),
            (this.allExpArr = []),
            (this.boxArr = []),
            (this.allBoss = []),
            (this.nowTimeIndex = 0),
            (this.nowMax = 0),
            (this.nowTime = 0),
            (this.nowBox = 0),
            (this.expDropArr = []),
            (this.eventMap = new Map()),
            (this.basePro = []),
            (this.maxTime = 0),
            (this.fenceArr = []),
            (this.mapType = i.Loop),
            (this.mapArr = []),
            (this.monsterKillNum = 0),
            (this.propsDropMap = []);
    }
    return (
        (e.instance = function () {
            return e._instance || (e._instance = new e()), e._instance;
        }),
        (e.prototype.init = function (e) {
            (this.nowTime = 0),
                (this.nowTimeIndex = 0),
                (this.expDropArr = []),
                (this.monsterIds = []),
                (this.timeArr = []),
                (this.maxArr = []),
                (this.basePro.length = 0),
                (this.bossIds = []),
                this.eventMap.clear(),
                this.initLevelJson(e),
                this.initTimeArr(),
                this.initBoxArr(),
                this.initMonsterIds(),
                this.initMaxArr(),
                this.initFenceArr(),
                this.initBossIds(),
                this.initExpDrop(),
                this.setNowMaxMin(),
                this.setNowTime(),
                this.initBasePro(),
                this.setExpDropArr(),
                this.setNowBox(),
                this.initAllBoss(),
                this.initEventMap(),
                (this.maxTime = this.timeArr[this.timeArr.length - 1]),
                (this.monsterKillNum = 0);
        }),
        (e.prototype.initLevelJson = function (e) {
            h.playData.getGameState() === g.GameSatet.Activity
                ? (this.levelJson = r.JsonMgr.getActivityLevelJson(e))
                : (this.levelJson = r.JsonMgr.getLevelJson(e + 1));
        }),
        (e.prototype.initMapType = function () {
            return n(this, void 0, void 0, function () {
                var e, t, o;
                return a(this, function (n) {
                    switch (n.label) {
                        case 0:
                            (this.mapArr.length = 0), (e = this.levelJson.mapname.split(",")), (t = 0), (n.label = 1);
                        case 1:
                            return t < e.length ? [4, l.loadMgr.loadMapFrame(e[t])] : [3, 4];
                        case 2:
                            (o = n.sent()), this.mapArr.push(o), (n.label = 3);
                        case 3:
                            return t++, [3, 1];
                        case 4:
                            return (this.mapType = e.length > 1 ? i.Vertical : i.Loop), [2];
                    }
                });
            });
        }),
        (e.prototype.getMapType = function () {
            return this.mapType;
        }),
        (e.prototype.getMapArr = function () {
            return this.mapArr;
        }),
        (e.prototype.getIsLoopMap = function () {
            return this.mapType === i.Loop;
        }),
        (e.prototype.getIsVertical = function () {
            return this.mapType === i.Vertical;
        }),
        (e.prototype.initBasePro = function () {
            var e = this;
            this.levelJson.baseproperty.split(",").forEach(function (t) {
                e.basePro.push(Number(t));
            });
        }),
        (e.prototype.getBaseHp = function () {
            return this.basePro[0];
        }),
        (e.prototype.getBaseAttack = function () {
            return this.basePro[1];
        }),
        (e.prototype.initEventMap = function () {
            var e = this;
            this.levelJson.specialevent &&
                this.levelJson.specialevent.split(";").forEach(function (t) {
                    var o = t.split(",");
                    e.eventMap.set(Number(o[0]), {type: Number(o[1]), data: o});
                });
        }),
        (e.prototype.checkTimeDoEvent = function (e) {
            var t = this.eventMap.get(e);
            if (t)
                switch (t.type) {
                    case 1:
                        c.default.instance().loadFlyMonster(t.data);
                        break;
                    case 2:
                        s.ClientEvents.BOSS_COMING.emit();
                        break;
                    case 3:
                        c.default.instance().loadMonsterSpecial(t.data);
                }
        }),
        (e.prototype.getAllBoss = function () {
            return this.allBoss;
        }),
        (e.prototype.initAllBoss = function () {
            var e = this;
            this.levelJson.bossids.split(",").forEach(function (t) {
                e.allBoss.push(Number(t));
            });
        }),
        (e.prototype.initFenceArr = function () {
            var e = this;
            this.levelJson.bossfence.split(";").forEach(function (t) {
                e.fenceArr.push(Number(t.split(",")[1]));
            });
        }),
        (e.prototype.getNowBoss = function () {
            return this.bossIds[this.nowTimeIndex];
        }),
        (e.prototype.initBossIds = function () {
            var e = this;
            this.levelJson.timecreateboss.split(";").forEach(function (t) {
                var o = t.split(","),
                    n = [];
                o.forEach(function (e) {
                    var t = e.split("|"),
                        o = Number(t[0]);
                    n.push({id: o, count: Number(t[1]), hpRate: Number(t[2]), attackRate: Number(t[3])});
                }),
                    e.bossIds.push(n);
            });
        }),
        (e.prototype.setNowMaxMin = function () {
            this.nowMax = this.maxArr[this.nowTimeIndex];
        }),
        (e.prototype.setNowTime = function () {
            this.nowTime = this.timeArr[this.nowTimeIndex];
        }),
        (e.prototype.setExpDropArr = function () {
            this.expDropArr = this.allExpArr[this.nowTimeIndex];
        }),
        (e.prototype.setNowBox = function () {
            this.nowBox = this.boxArr[this.nowTimeIndex];
        }),
        (e.prototype.getCreateMonsterIds = function () {
            return this.monsterIds[this.nowTimeIndex];
        }),
        (e.prototype.getNowTime = function () {
            return this.nowTime;
        }),
        (e.prototype.checkTimeAdd = function (e) {
            e > this.getNowTime() && this.addTimeIndex();
        }),
        (e.prototype.initTimeArr = function () {
            var e = this;
            this.levelJson.timeinterval.split(";").forEach(function (t) {
                e.timeArr.push(Number(t));
            });
        }),
        (e.prototype.initMaxArr = function () {
            var e = this;
            this.monsterIds.forEach(function (t) {
                var o = 0;
                t.forEach(function (e) {
                    o += e.count;
                }),
                    e.maxArr.push(o);
            });
        }),
        (e.prototype.initBoxArr = function () {
            var e = this;
            this.levelJson.box.split(";").forEach(function (t) {
                e.boxArr.push(Number(t));
            });
        }),
        (e.prototype.initMonsterIds = function () {
            var e = this;
            this.levelJson.timecreatemonster.split(";").forEach(function (t) {
                var o = t.split(","),
                    n = [];
                o.forEach(function (e) {
                    var t = e.split("|"),
                        o = Number(t[0]);
                    n.push({id: o, count: Number(t[1]), hpRate: Number(t[2]), attackRate: Number(t[3])});
                }),
                    e.monsterIds.push(n);
            });
        }),
        (e.prototype.initExpDrop = function () {
            var e = this;
            this.levelJson.exp.split(";").forEach(function (t) {
                var o = t.split(","),
                    n = [];
                o.forEach(function (e) {
                    var t = e.split("|");
                    n.push({rate: Number(t[1]) / 100, value: Number(t[2])});
                }),
                    e.allExpArr.push(n);
            });
        }),
        (e.prototype.addTimeIndex = function () {
            if ((this.nowTimeIndex++, !(this.nowTimeIndex > this.timeArr.length))) {
                var e = this.getPropsDropMapStr(),
                    t = d.roleData.getRole().getRoleLevel().level,
                    o = h.playData.getKillNum() - this.monsterKillNum;
                (this.monsterKillNum = h.playData.getKillNum()),
                    u.analyMgr.reportGameTime(this.levelJson.id, this.nowTimeIndex, o, e, t),
                    (p.gameMgr.gameAFK = !1),
                    (d.roleData.getRole().afkTime = 0),
                    p.gameMgr.resetGameTimeData(),
                    this.setNowMaxMin(),
                    this.setNowTime(),
                    this.setExpDropArr(),
                    this.setNowBox(),
                    (this.propsDropMap.length = 0);
            }
        }),
        (e.prototype.getNowIndex = function () {
            var e = this.nowTimeIndex + 1;
            return e > 20 && (e = 20), e;
        }),
        (e.prototype.getLevelLen = function () {
            return this.levelLen || (this.levelLen = r.JsonMgr.getLevelLen()), this.levelLen;
        }),
        (e.prototype.getBossFence = function (e) {
            return this.fenceArr[e];
        }),
        (e.prototype.getLevelJson = function () {
            return this.levelJson;
        }),
        (e.prototype.getBossPos = function () {
            if (this.mapType === i.Vertical) return cc.v2(0, 200);
            var e = this.levelJson.bossrefresh.split(",");
            return cc.v2(Number(e[0]), Number(e[1]));
        }),
        (e.prototype.setPropsDropMap = function (e) {
            for (var t = !1, o = 0; o < this.propsDropMap.length; o++) {
                var n = this.propsDropMap[o];
                if (n.id == e) {
                    n.num++, (t = !0);
                    break;
                }
            }
            if (!t) {
                var a = {};
                (a.id = e), (a.num = 1), this.propsDropMap.push(a);
            }
        }),
        (e.prototype.getPropsDropMapStr = function () {
            for (var e = "", t = 0; t < this.propsDropMap.length; t++) {
                var o = this.propsDropMap[t];
                t == this.propsDropMap.length - 1 ? (e += o.id + "|" + o.num) : (e += o.id + "|" + o.num + ",");
            }
            return e;
        }),
        (e._instance = null),
        e
    );
})();
(o.LevelManager = m), (o.levelMgr = m.instance());
