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
Object.defineProperty(o, "__esModule", {value: !0}), (o.playData = o.PlayerData = void 0);
var i = e("LocalStorage"),
    r = e("ClientEvents"),
    s = e("LocalConst"),
    c = e("TimeUtil"),
    l = e("audioManager"),
    p = e("HeroData"),
    u = e("JsonManager"),
    d = e("HomeManager"),
    h = e("ReporterBridge"),
    g = e("censtant"),
    m = e("TalentAddManager"),
    f = e("CommonUtil"),
    y = e("EquipManager"),
    v = e("WxManager"),
    M = e("SubscribeManager"),
    _ = e("TaskTypeManager"),
    C = e("HeroManager"),
    b = e("SevenChallengeManager"),
    T = e("ActivityLevelManager"),
    w = e("AnalyticsManager"),
    N = e("TaskManager"),
    E = e("LevelManager"),
    S = (function () {
        function e() {
            (this.playerInfo = null),
                (this.playerSetting = null),
                (this.killEnemyNum = 0),
                (this.patrolInfo = null),
                (this.refreshDayDatas = null),
                (this.challenge = null),
                (this.talent = []),
                (this.rightTalent = []),
                (this.gameState = g.GameSatet.normal),
                (this.challengeData = null),
                (this.levelMessage = null),
                (this.freeSkillData = null),
                (this.codeData = []),
                (this.heroInfo = null),
                (this.heroUnlock = []),
                (this.debrisData = null),
                (this.debrisDataTotal = null),
                (this.isNewBee = !1),
                (this.gameTime = 0),
                (this.backReward = !1),
                (this.showPatrol = !1),
                (this.isFailGuide = !1),
                (this.lastFailLevel = null),
                (this.maxFail = null),
                (this.levelTime = []);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.initLastLogin = function () {
                var e = new Date().getTime();
                if (e > this.playerInfo.lastLoginTime) {
                    this.backReward = e - this.playerInfo.lastLoginTime > 864e5;
                    var t = u.JsonMgr.getDefineConstantByName("PatrolUIcd");
                    (this.showPatrol = e - this.getLastEarnTime() >= 6e4 * Number(t)),
                        (this.playerInfo.lastLoginTime = e);
                }
            }),
            (e.prototype.initPlayerInfo = function () {
                return n(this, void 0, void 0, function () {
                    var e,
                        t,
                        o,
                        n,
                        r,
                        c,
                        l,
                        g,
                        y,
                        v,
                        M,
                        _,
                        C,
                        b,
                        w,
                        N,
                        E,
                        S,
                        D,
                        A,
                        k,
                        I,
                        R,
                        L,
                        P,
                        O = this;
                    return a(this, function () {
                        return (
                            (e = i.LocalStorage.getData(s.LocalConst.PLAYER_INFO_NEW))
                                ? ((this.playerInfo = e), this.initLastLogin())
                                : (e = i.LocalStorage.getData(s.LocalConst.PLAYER_INFO))
                                ? ((this.playerInfo = e),
                                  this.initLastLogin(),
                                  i.LocalStorage.delete(s.LocalConst.PLAYER_INFO))
                                : ((t = u.JsonMgr.getInitUser()),
                                  (this.playerInfo = {
                                      gold: t.gold,
                                      level: t.level,
                                      gem: t.gem,
                                      energy: t.energy,
                                      heroId: t.hero,
                                      propeller: 0,
                                      keys: {normalKey: 0, superKey: 0, ssrKey: 0},
                                      completeLevel: 0,
                                      lastEarnTime: 0,
                                      lastLoginTime: new Date().getTime(),
                                      totalKillNum: 0,
                                      createDate: Date.now(),
                                      lastOnlineTime: 0,
                                      nextErrengyAdd: Date.now() + d.homeMgr.getEnergyAddCD(),
                                      newUserStep: 0,
                                      lastLevelState: "win",
                                      openID: "",
                                      failGuideStep: 0
                                  }),
                                  h.ReporterBridge.setUserProperty({MaxChapter: this.playerInfo.level}),
                                  h.ReporterBridge.setUserProperty({LevelMax: this.playerInfo.completeLevel})),
                            this.savePlayerData(),
                            (o = i.LocalStorage.getData(s.LocalConst.SETTING_NEW))
                                ? (this.playerSetting = o)
                                : ((o = i.LocalStorage.getData(s.LocalConst.SETTING))
                                      ? ((this.playerSetting = o), i.LocalStorage.delete(s.LocalConst.SETTING))
                                      : (this.playerSetting = {sound: !0, music: !0, damageNumber: !0, frame: 2}),
                                  this.saveSettingData()),
                            p.heroData.initHeroJson(this.playerInfo.heroId),
                            (n = i.LocalStorage.getData(s.LocalConst.LEVEL_MESSAGE_NEW))
                                ? (this.levelMessage = n)
                                : (n = i.LocalStorage.getData(s.LocalConst.LEVEL_MESSAGE))
                                ? ((this.levelMessage = n), i.LocalStorage.delete(s.LocalConst.LEVEL_MESSAGE))
                                : (this.levelMessage = {}),
                            this.saveLevelMessage(),
                            (r = i.LocalStorage.getData(s.LocalConst.REFRESH_DAY_DATAS_NEW)) ||
                                ((r = i.LocalStorage.getData(s.LocalConst.REFRESH_DAY_DATAS)),
                                i.LocalStorage.delete(s.LocalConst.REFRESH_DAY_DATAS)),
                            (c = u.JsonMgr.getDefineConstantByName("PatrolNowEnergy").split("|")),
                            (l = c[1]),
                            (g = u.JsonMgr.getDefineConstantByName("PatrolNowAD")),
                            (y = u.JsonMgr.getDefineConstantByName("ShopCoin2AD").split("|")),
                            (v = y[1]),
                            (M = u.JsonMgr.getDefineConstantByName("AddEnergyAD").split("|")),
                            (_ = M[1]),
                            (C = u.JsonMgr.getDefineConstantByName("ShopDiamond2AD")),
                            (b = u.JsonMgr.getDefineConstantByName("ShopBox1AD")),
                            r
                                ? ((this.refreshDayDatas = r),
                                  (w = new Date().getTime()),
                                  (N = this.refreshDayDatas.days),
                                  f.CommonUtil.isSameDay(w, N)
                                      ? (null == this.refreshDayDatas.patrolNowEnergy &&
                                            (this.refreshDayDatas.patrolNowEnergy = Number(l)),
                                        null == this.refreshDayDatas.patrolNowAd &&
                                            (this.refreshDayDatas.patrolNowAd = Number(g)),
                                        null == this.refreshDayDatas.dailyAdGold &&
                                            (this.refreshDayDatas.dailyAdGold = Number(v)),
                                        null == this.refreshDayDatas.dailyEnergyAd &&
                                            (this.refreshDayDatas.dailyEnergyAd = Number(_)),
                                        null == this.refreshDayDatas.shopDiamond2Ad &&
                                            (this.refreshDayDatas.shopDiamond2Ad = Number(C)),
                                        null == this.refreshDayDatas.shopBox1Ad &&
                                            (this.refreshDayDatas.shopBox1Ad = Number(b)))
                                      : ((this.refreshDayDatas.days = w),
                                        (this.refreshDayDatas.patrolNowEnergy = Number(l)),
                                        (this.refreshDayDatas.patrolNowAd = Number(g)),
                                        (this.refreshDayDatas.dailyAdGold = Number(v)),
                                        (this.refreshDayDatas.dailyEnergyAd = Number(_)),
                                        (this.refreshDayDatas.shopDiamond2Ad = Number(C)),
                                        (this.refreshDayDatas.shopBox1Ad = Number(b))))
                                : ((this.refreshDayDatas = {
                                      days: new Date().getTime(),
                                      patrolNowEnergy: Number(l),
                                      patrolNowAd: Number(g),
                                      dailyAdGold: Number(v),
                                      dailyEnergyAd: Number(_),
                                      shopDiamond2Ad: Number(C),
                                      shopBox1Ad: Number(b)
                                  }),
                                  this.saveRefreshDayDatas()),
                            (E = i.LocalStorage.getData(s.LocalConst.PATROL_NEW))
                                ? (this.patrolInfo = E)
                                : ((E = i.LocalStorage.getData(s.LocalConst.PATROL))
                                      ? ((this.patrolInfo = E), i.LocalStorage.delete(s.LocalConst.PATROL))
                                      : (this.patrolInfo = {time: new Date().getTime(), mapNum: 0, equipNum: 0}),
                                  this.savePatrolData()),
                            (S = i.LocalStorage.getData(s.LocalConst.CHALLENGE_NEW))
                                ? (this.challenge = Object.values(S))
                                : ((S = i.LocalStorage.getData(s.LocalConst.CHALLENGE))
                                      ? ((this.challenge = Object.values(S)),
                                        i.LocalStorage.delete(s.LocalConst.CHALLENGE))
                                      : (this.challenge = Object.values({})),
                                  this.saveChallengeMap()),
                            (D = i.LocalStorage.getString(s.LocalConst.TALENT_NEW))
                                ? this.initTalent(D)
                                : ((D = i.LocalStorage.getString(s.LocalConst.TALENT, !1)) &&
                                      (this.initTalent(D), i.LocalStorage.delete(s.LocalConst.TALENT)),
                                  this.saveTalentData()),
                            (A = i.LocalStorage.getString(s.LocalConst.START_LEVEL_COUNT)) &&
                                A.split(";").forEach(function (e) {
                                    O.levelTime.push(Number(e));
                                }),
                            m.talentAddMgr.init(),
                            (k = i.LocalStorage.getData(s.LocalConst.FREE_SKILL_DATA_NEW))
                                ? (this.freeSkillData = k)
                                : ((k = i.LocalStorage.getData(s.LocalConst.FREE_SKILL_DATA))
                                      ? ((this.freeSkillData = k), i.LocalStorage.delete(s.LocalConst.FREE_SKILL_DATA))
                                      : (this.freeSkillData = {time: Date.now(), count: 0}),
                                  this.saveFreeSkillData()),
                            (I = i.LocalStorage.getString(s.LocalConst.CODE_DATA))
                                ? (this.codeData = I.split(";"))
                                : this.saveCodeData(),
                            (R = i.LocalStorage.getData(s.LocalConst.HERO_INFO)),
                            (this.heroInfo = R || {
                                hero: {id: u.JsonMgr.getInitUser().hero, level: 1, grade: 0},
                                allHero: [{id: u.JsonMgr.getInitUser().hero, level: 1, grade: 0}]
                            }),
                            this.saveHeroInfo(),
                            (L = i.LocalStorage.getData(s.LocalConst.DEBRIS_DATA)),
                            (this.debrisData = L || {}),
                            this.initChipsTotalData(),
                            T.activityMgr.initActivityItem(),
                            (P = i.LocalStorage.getNumber(s.LocalConst.LAST_FAIL_LEVEL)) && (this.lastFailLevel = P),
                            this.initFailCount(),
                            [2]
                        );
                    });
                });
            }),
            (e.prototype.initFailCount = function () {
                var e = i.LocalStorage.getData(s.LocalConst.MAX_FAIL);
                (this.maxFail = e || {level: o.playData.getCompleteLevel(), count: 0}), this.saveFailCount();
            }),
            (e.prototype.saveFailCount = function () {
                i.LocalStorage.setData(s.LocalConst.MAX_FAIL, this.maxFail),
                    h.ReporterBridge.setUserProperty({LevelLose: o.playData.getFailCount()});
            }),
            (e.prototype.addFailCount = function (e, t) {
                var n = o.playData.getCompleteLevel();
                e >= this.maxFail.level &&
                    e === n + 1 &&
                    (this.maxFail.level === e
                        ? this.maxFail.count++
                        : t
                        ? ((this.maxFail.level = e), (this.maxFail.count = 0))
                        : ((this.maxFail.level = e), (this.maxFail.count = 1))),
                    this.saveFailCount();
            }),
            (e.prototype.getFailCount = function () {
                return (
                    (this.maxFail && this.maxFail.level && this.maxFail.level >= o.playData.getCompleteLevel()) ||
                        ((this.maxFail.level = o.playData.getCompleteLevel()), (this.maxFail.count = 0)),
                    this.maxFail.count
                );
            }),
            (e.prototype.initTalent = function (e) {
                var t = this,
                    o = e.split(";"),
                    n = !1;
                o.forEach(function (e) {
                    var o = Number(e);
                    "0" === e && n
                        ? t.rightTalent.push(e)
                        : "0" !== e || n
                        ? o < 201e4
                            ? t.talent.push(e)
                            : o > 201e4 && t.rightTalent.push(e)
                        : (t.talent.push(e), (n = !0));
                });
            }),
            (e.prototype.addLevelData = function (e) {
                var t = this.levelTime[e];
                (this.levelTime[e] = t ? t + 1 : 1), this.saveLevelData();
            }),
            (e.prototype.getLevelData = function (e) {
                return this.levelTime[e - 1] ? this.levelTime[e - 1] : 0;
            }),
            (e.prototype.getTalentLen = function () {
                return this.talent.length;
            }),
            (e.prototype.checkShowBackReward = function () {
                return this.backReward;
            }),
            (e.prototype.resetShowBackReward = function () {
                this.backReward = !1;
            }),
            (e.prototype.checkShowPatrolView = function () {
                return this.showPatrol;
            }),
            (e.prototype.resetShowPatrolView = function () {
                this.showPatrol = !1;
            }),
            (e.prototype.changeHero = function (e) {
                var t = null,
                    o = this.heroInfo.allHero;
                if (o)
                    for (var n = 0; n < o.length; n++)
                        if (o[n].id == e) {
                            t = o[n];
                            break;
                        }
                t &&
                    ((this.heroInfo.hero = {id: t.id, level: t.level, grade: t.grade}),
                    (this.playerInfo.heroId = e),
                    p.heroData.initHeroJson(e),
                    w.analyMgr.reportChangeHero(t),
                    h.ReporterBridge.setUserProperty({Hero_ID: this.heroInfo.hero.id}),
                    h.ReporterBridge.setUserProperty({Hero_Level: this.heroInfo.hero.level}),
                    h.ReporterBridge.setUserProperty({Hero_Star: this.heroInfo.hero.grade}),
                    this.savePlayerData(),
                    this.saveHeroInfo(),
                    r.ClientEvents.DRESS_CHANGE.emit());
            }),
            (e.prototype.getHeroId = function () {
                return this.playerInfo.heroId;
            }),
            (e.prototype.passLevel = function (e) {
                this.gameState !== g.GameSatet.Activity &&
                    e >= this.playerInfo.level &&
                    (this.playerInfo.level++,
                    this.playerInfo.completeLevel++,
                    this.savePlayerData(),
                    h.ReporterBridge.setUserProperty({MaxChapter: this.playerInfo.level}),
                    h.ReporterBridge.setUserProperty({LevelMax: this.playerInfo.completeLevel}),
                    _.TaskTypeMgr.completeLevelTask(this.playerInfo.completeLevel));
            }),
            (e.prototype.passLevelGM = function (e) {
                e >= this.playerInfo.level &&
                    ((this.playerInfo.level = e + 1),
                    (this.playerInfo.completeLevel = e),
                    this.savePlayerData(),
                    _.TaskTypeMgr.completeLevelTask(this.playerInfo.completeLevel));
            }),
            (e.prototype.setNextEnergeAdd = function (e) {
                this.playerInfo.nextErrengyAdd = e;
            }),
            (e.prototype.getNextEnergeAdd = function () {
                return (
                    this.playerInfo.nextErrengyAdd ||
                        ((this.playerInfo.nextErrengyAdd = Date.now() + d.homeMgr.getEnergyAddCD()),
                        this.savePlayerData()),
                    this.playerInfo.nextErrengyAdd
                );
            }),
            (e.prototype.savePlayerData = function () {
                i.LocalStorage.setData(s.LocalConst.PLAYER_INFO_NEW, this.playerInfo), r.ClientEvents.GoldChange.emit();
            }),
            (e.prototype.savePlayerScore = function (e) {
                i.LocalStorage.setData(s.LocalConst.BEST_TIME_NEW, e);
            }),
            (e.prototype.saveSettingData = function () {
                i.LocalStorage.setData(s.LocalConst.SETTING_NEW, this.playerSetting),
                    this.playerSetting.sound ? l.audioMgr.openBgm() : l.audioMgr.stopBgm(),
                    l.audioMgr.initMusic();
            }),
            (e.prototype.saveLastLevelState = function (e) {
                (this.playerInfo.lastLevelState = e), this.savePlayerData();
            }),
            (e.prototype.getLastLevelState = function () {
                return this.playerInfo.lastLevelState;
            }),
            (e.prototype.savePatrolData = function () {
                i.LocalStorage.setData(s.LocalConst.PATROL_NEW, this.patrolInfo);
            }),
            (e.prototype.saveRefreshDayDatas = function () {
                i.LocalStorage.setData(s.LocalConst.REFRESH_DAY_DATAS_NEW, this.refreshDayDatas);
            }),
            (e.prototype.saveLevelMessage = function () {
                i.LocalStorage.setData(s.LocalConst.LEVEL_MESSAGE_NEW, this.levelMessage);
            }),
            (e.prototype.saveFreeSkillData = function () {
                i.LocalStorage.setData(s.LocalConst.FREE_SKILL_DATA_NEW, this.freeSkillData);
            }),
            (e.prototype.getFreeSkillCount = function () {
                return (
                    c.TimeUtil.isSameUtcDay(this.freeSkillData.time, Date.now()) ||
                        ((this.freeSkillData.time = Date.now()),
                        (this.freeSkillData.count = 0),
                        this.saveFreeSkillData()),
                    this.freeSkillData.count
                );
            }),
            (e.prototype.addFreeSkillCount = function () {
                this.freeSkillData.count++, this.saveFreeSkillData();
            }),
            (e.prototype.getShopBox1Ad = function () {
                var e;
                return (null === (e = this.refreshDayDatas) || void 0 === e ? void 0 : e.shopBox1Ad) || 0;
            }),
            (e.prototype.setShopBox1Ad = function (e) {
                this.refreshDayDatas && ((this.refreshDayDatas.shopBox1Ad = e), this.saveRefreshDayDatas());
            }),
            (e.prototype.getShopDiamond2Ad = function () {
                var e;
                return (null === (e = this.refreshDayDatas) || void 0 === e ? void 0 : e.shopDiamond2Ad) || 0;
            }),
            (e.prototype.setShopDiamond2Ad = function (e) {
                this.refreshDayDatas && ((this.refreshDayDatas.shopDiamond2Ad = e), this.saveRefreshDayDatas());
            }),
            (e.prototype.getShopCoinAd = function () {
                var e;
                return (null === (e = this.refreshDayDatas) || void 0 === e ? void 0 : e.dailyAdGold) || 0;
            }),
            (e.prototype.setShopCoinAd = function (e) {
                this.refreshDayDatas && ((this.refreshDayDatas.dailyAdGold = e), this.saveRefreshDayDatas());
            }),
            (e.prototype.getPatrolNowAD = function () {
                var e;
                return (null === (e = this.refreshDayDatas) || void 0 === e ? void 0 : e.patrolNowAd) || 0;
            }),
            (e.prototype.setPatrolNowAD = function (e) {
                this.refreshDayDatas && ((this.refreshDayDatas.patrolNowAd = e), this.saveRefreshDayDatas());
            }),
            (e.prototype.getPatrolNowEnergy = function () {
                var e;
                return (null === (e = this.refreshDayDatas) || void 0 === e ? void 0 : e.patrolNowEnergy) || 0;
            }),
            (e.prototype.setPatrolNowEnergy = function (e) {
                this.refreshDayDatas && ((this.refreshDayDatas.patrolNowEnergy = e), this.saveRefreshDayDatas());
            }),
            (e.prototype.getDailyEnergyAd = function () {
                var e;
                return (null === (e = this.refreshDayDatas) || void 0 === e ? void 0 : e.dailyEnergyAd) || 0;
            }),
            (e.prototype.setDailyEnergyAd = function (e) {
                this.refreshDayDatas && ((this.refreshDayDatas.dailyEnergyAd = e), this.saveRefreshDayDatas());
            }),
            (e.prototype.saveChallengeMap = function () {
                this.challenge && i.LocalStorage.setData(s.LocalConst.CHALLENGE_NEW, this.challenge);
            }),
            (e.prototype.saveTalentData = function () {
                if (this.talent) {
                    for (var e = 0; e < this.talent.length; e++) {
                        var t = this.talent[e];
                        Number(t);
                    }
                    var o = "";
                    this.talent.forEach(function (e, t) {
                        o += 0 === t ? e : ";" + e;
                    }),
                        this.rightTalent.forEach(function (e) {
                            o += ";" + e;
                        }),
                        i.LocalStorage.setString(s.LocalConst.TALENT_NEW, o);
                }
            }),
            (e.prototype.saveLevelData = function () {
                var e,
                    t = this;
                this.levelTime.forEach(function (o, n) {
                    e = n === t.levelTime.length - 1 ? o.toString() : o.toString() + ";";
                }),
                    i.LocalStorage.setString(s.LocalConst.START_LEVEL_COUNT, e);
            }),
            (e.prototype.saveCodeData = function () {
                if (this.codeData) {
                    var e = this.codeData.join(";");
                    i.LocalStorage.setString(s.LocalConst.CODE_DATA, e);
                }
            }),
            (e.prototype.addCodeData = function (e) {
                this.codeData.push(e), this.saveCodeData();
            }),
            (e.prototype.getCodeData = function () {
                return this.codeData;
            }),
            (e.prototype.saveHeroInfo = function () {
                i.LocalStorage.setData(s.LocalConst.HERO_INFO, this.heroInfo), C.heroMgr.initHeroGrowth();
            }),
            (e.prototype.getHeroInfo = function () {
                return this.heroInfo;
            }),
            (e.prototype.addHero = function (e) {
                var t = !1;
                if (this.heroInfo.hero.id !== e) {
                    if (this.heroInfo && this.heroInfo.allHero)
                        for (var o = 0; o < this.heroInfo.allHero.length; o++)
                            if (this.heroInfo.allHero[o].id === e) {
                                t = !0;
                                break;
                            }
                    t ||
                        (this.heroInfo && this.heroInfo.allHero
                            ? this.heroInfo.allHero.push({id: e, level: 1, grade: 0})
                            : (this.heroInfo.allHero = [{id: e, level: 1, grade: 0}]),
                        this.saveHeroInfo());
                }
            }),
            (e.prototype.addHeroExperience = function (e) {
                this.heroInfo && this.heroInfo.experience
                    ? (this.heroInfo.experience += Number(e))
                    : (this.heroInfo.experience = Number(e)),
                    this.saveHeroInfo();
            }),
            (e.prototype.getHeroExperence = function () {
                return this.heroInfo && this.heroInfo.experience ? this.heroInfo.experience : 0;
            }),
            (e.prototype.addHeroGrade = function (e, t) {
                this.heroInfo.hero.id === e &&
                    (this.heroInfo.hero.grade = this.heroInfo.hero.grade + t >= 5 ? 5 : this.heroInfo.hero.grade + t),
                    this.heroInfo.allHero.forEach(function (o) {
                        o.id === e && (o.grade = o.grade + t >= 5 ? 5 : o.grade + t);
                    }),
                    this.saveHeroInfo();
            }),
            (e.prototype.addHeroLevel = function (e, t) {
                this.heroInfo.hero.id === e &&
                    (this.heroInfo.hero.level =
                        this.heroInfo.hero.level + t >= 100 ? 100 : this.heroInfo.hero.level + t),
                    this.heroInfo.allHero.forEach(function (o) {
                        o.id === e && (o.level = o.level + t >= 100 ? 100 : o.level + t);
                    }),
                    this.saveHeroInfo();
            }),
            (e.prototype.addHeroDebris = function (e, t) {
                this.debrisData[e]
                    ? this.debrisData[e].debris
                        ? (this.debrisData[e].debris += Number(t))
                        : (this.debrisData[e].debris = Number(t))
                    : ((this.debrisData[e] = {}), (this.debrisData[e].debris = Number(t))),
                    t >= 0 && this.addTotalData(e, t),
                    this.saveDebrisData();
                var n = Object.keys(this.debrisData),
                    a = [];
                n.forEach(function (e) {
                    var t = o.playData.getHeroDebris(Number(e));
                    a.push(e + "|" + t);
                }),
                    h.ReporterBridge.setUserProperty({Hero_Piece: a.join(",")});
            }),
            (e.prototype.addHeroVideo = function (e, t) {
                this.debrisData[e]
                    ? this.debrisData[e].video
                        ? (this.debrisData[e].video += Number(t))
                        : (this.debrisData[e].video = Number(t))
                    : ((this.debrisData[e] = {}), (this.debrisData[e].video = Number(t))),
                    this.saveDebrisData();
            }),
            (e.prototype.getHeroDebris = function (e) {
                return this.debrisData[e] && this.debrisData[e].debris ? this.debrisData[e].debris : 0;
            }),
            (e.prototype.getHeroVideo = function (e) {
                return this.debrisData[e] && this.debrisData[e].video ? this.debrisData[e].video : 0;
            }),
            (e.prototype.saveDebrisData = function () {
                i.LocalStorage.setData(s.LocalConst.DEBRIS_DATA, this.debrisData);
            }),
            (e.prototype.initChipsTotalData = function () {
                var e = i.LocalStorage.getData(s.LocalConst.DEBRIS_DATA_TOTAL);
                this.debrisDataTotal = e || {};
            }),
            (e.prototype.addTotalData = function (e, t) {
                this.debrisDataTotal[e]
                    ? this.debrisDataTotal[e].debris
                        ? (this.debrisDataTotal[e].debris += Number(t))
                        : (this.debrisDataTotal[e].debris = Number(t))
                    : ((this.debrisDataTotal[e] = {}), (this.debrisDataTotal[e].debris = Number(t))),
                    this.saveChipsTotalData();
            }),
            (e.prototype.getTotalChips = function (e) {
                return this.debrisDataTotal[e] && this.debrisDataTotal[e].debris ? this.debrisDataTotal[e].debris : 0;
            }),
            (e.prototype.saveChipsTotalData = function () {
                i.LocalStorage.setData(s.LocalConst.DEBRIS_DATA_TOTAL, this.debrisDataTotal);
                var e = Object.keys(this.debrisDataTotal),
                    t = [];
                e.forEach(function (e) {
                    var n = o.playData.getTotalChips(Number(e));
                    t.push(e + "|" + n);
                }),
                    h.ReporterBridge.setUserProperty({HeroPiece_Count: t.join(",")});
            }),
            (e.prototype.getPlayerScore = function () {
                var e = i.LocalStorage.getData(s.LocalConst.BEST_TIME_NEW);
                return (
                    e ||
                        ((e = i.LocalStorage.getData(s.LocalConst.BEST_TIME))
                            ? (i.LocalStorage.setData(s.LocalConst.BEST_TIME_NEW, e),
                              i.LocalStorage.delete(s.LocalConst.BEST_TIME))
                            : (e = {})),
                    e
                );
            }),
            (e.prototype.setSettingFrame = function (e) {
                (this.playerSetting.frame = e), this.saveSettingData();
            }),
            (e.prototype.addPlayerKillNum = function (e) {
                (this.playerInfo.totalKillNum += e), this.savePlayerData();
            }),
            (e.prototype.getPlayerKillNum = function () {
                return this.playerInfo.totalKillNum || 0;
            }),
            (e.prototype.getSettingFrame = function () {
                return this.playerSetting.frame;
            }),
            (e.prototype.setSettingMusic = function (e) {
                (this.playerSetting.music = e), this.saveSettingData();
            }),
            (e.prototype.setSettingSound = function (e) {
                (this.playerSetting.sound = e), this.saveSettingData();
            }),
            (e.prototype.setSettingDamage = function (e) {
                (this.playerSetting.damageNumber = e), this.saveSettingData();
            }),
            (e.prototype.getOpenId = function () {
                return this.playerInfo.openID;
            }),
            (e.prototype.setOpenId = function (e) {
                (this.playerInfo.openID = e), this.savePlayerData();
            }),
            (e.prototype.getSettingMusic = function () {
                return this.playerSetting.music;
            }),
            (e.prototype.getSettingSound = function () {
                return this.playerSetting.sound;
            }),
            (e.prototype.getSettingDamage = function () {
                return this.playerSetting.damageNumber;
            }),
            (e.prototype.getGold = function () {
                return this.playerInfo.gold;
            }),
            (e.prototype.getGem = function () {
                return this.playerInfo.gem;
            }),
            (e.prototype.useGold = function (e) {
                (this.playerInfo.gold -= e),
                    _.TaskTypeMgr.consumeGoldTask(e),
                    this.savePlayerData(),
                    r.ClientEvents.DATA_CHANGE.emit(),
                    h.ReporterBridge.setUserProperty({coin: this.playerInfo.gold});
            }),
            (e.prototype.useGem = function (e) {
                _.TaskTypeMgr.consumeDiamondTask(e),
                    (this.playerInfo.gem -= e),
                    h.ReporterBridge.setUserProperty({Gem: this.playerInfo.gem}),
                    this.savePlayerData(),
                    r.ClientEvents.DATA_CHANGE.emit();
            }),
            (e.prototype.checkGem = function (e) {
                return this.playerInfo.gem >= e;
            }),
            (e.prototype.addGold = function (e) {
                (this.playerInfo.gold = Number(this.playerInfo.gold) + e),
                    h.ReporterBridge.setUserProperty({coin: this.playerInfo.gold}),
                    this.savePlayerData(),
                    r.ClientEvents.DATA_CHANGE.emit();
            }),
            (e.prototype.addGem = function (e) {
                (this.playerInfo.gem += e),
                    h.ReporterBridge.setUserProperty({Gem: this.playerInfo.gem}),
                    this.savePlayerData(),
                    r.ClientEvents.DATA_CHANGE.emit();
            }),
            (e.prototype.getEnergy = function () {
                return this.playerInfo.energy;
            }),
            (e.prototype.useEnergy = function (e) {
                _.TaskTypeMgr.consumeEnergyTask(e),
                    (this.playerInfo.energy -= e),
                    this.savePlayerData(),
                    h.ReporterBridge.setUserProperty({Energy: this.playerInfo.energy}),
                    r.ClientEvents.ENERGY_CHANGE.emit();
            }),
            (e.prototype.addEnergy = function (e) {
                (this.playerInfo.energy += e),
                    this.savePlayerData(),
                    v.wxMgr.sendSubscribe(g.SubscribeID.ENERGY, M.scrMgr.getEnergyMsg, M.scrMgr.getEnergyRecoverTime()),
                    h.ReporterBridge.setUserProperty({Energy: this.playerInfo.energy}),
                    r.ClientEvents.ENERGY_CHANGE.emit();
            }),
            (e.prototype.getNormalKey = function () {
                return this.playerInfo.keys && this.playerInfo.keys.normalKey ? this.playerInfo.keys.normalKey : 0;
            }),
            (e.prototype.addNormalKey = function (e) {
                this.playerInfo.keys && this.playerInfo.keys.normalKey
                    ? (this.playerInfo.keys.normalKey += Number(e))
                    : this.playerInfo.keys
                    ? (this.playerInfo.keys.normalKey = Number(e))
                    : (this.playerInfo.keys = {normalKey: Number(e), superKey: 0, ssrKey: 0}),
                    this.savePlayerData();
            }),
            (e.prototype.getSuperKey = function () {
                return this.playerInfo.keys && this.playerInfo.keys.superKey ? this.playerInfo.keys.superKey : 0;
            }),
            (e.prototype.addSuperKey = function (e) {
                this.playerInfo.keys && this.playerInfo.keys.superKey
                    ? (this.playerInfo.keys.superKey += Number(e))
                    : this.playerInfo.keys
                    ? (this.playerInfo.keys.superKey = Number(e))
                    : (this.playerInfo.keys = {normalKey: 0, superKey: Number(e), ssrKey: 0}),
                    this.savePlayerData();
            }),
            (e.prototype.getSSRKey = function () {
                return this.playerInfo.keys && this.playerInfo.keys.ssrKey ? this.playerInfo.keys.ssrKey : 0;
            }),
            (e.prototype.addSSRKey = function (e) {
                this.playerInfo.keys && this.playerInfo.keys.ssrKey
                    ? (this.playerInfo.keys.ssrKey += Number(e))
                    : this.playerInfo.keys
                    ? (this.playerInfo.keys.ssrKey = Number(e))
                    : (this.playerInfo.keys = {normalKey: 0, superKey: 0, ssrKey: Number(e)}),
                    this.savePlayerData();
            }),
            (e.prototype.getLevel = function () {
                return this.playerInfo.level;
            }),
            (e.prototype.getCompleteLevel = function () {
                return this.playerInfo.completeLevel;
            }),
            (e.prototype.checkLevelIsInLock = function (e) {
                return this.playerInfo.level < e;
            }),
            (e.prototype.addKillNum = function () {
                N.TaskMgr.addActivityTaskPro(8, 1), this.killEnemyNum++;
            }),
            (e.prototype.getKillNum = function () {
                return this.killEnemyNum;
            }),
            (e.prototype.clearKillNum = function () {
                this.killEnemyNum = 0;
            }),
            (e.prototype.getSetting = function () {
                return this.playerSetting;
            }),
            (e.prototype.getLastEarnTime = function () {
                return this.playerInfo.lastEarnTime;
            }),
            (e.prototype.resetEarnTime = function () {
                (this.playerInfo.lastEarnTime = Date.now()), this.savePlayerData();
            }),
            (e.prototype.resetPatrolTime = function () {
                (this.patrolInfo = {time: new Date().getTime(), mapNum: 0, equipNum: 0}), this.savePatrolData();
            }),
            (e.prototype.getPatrol = function () {
                return this.patrolInfo;
            }),
            (e.prototype.getPatrolTime = function () {
                return this.patrolInfo.time;
            }),
            (e.prototype.refreshPatrol = function (e, t, o) {
                (this.patrolInfo = {
                    time: e,
                    mapNum: Number(this.patrolInfo.mapNum) + Math.floor(t),
                    equipNum: Number(this.patrolInfo.equipNum) + Math.floor(o)
                }),
                    this.savePatrolData();
            }),
            (e.prototype.getChallengePass = function () {
                return this.challenge;
            }),
            (e.prototype.addChallengePass = function (e) {
                var t = !0,
                    o = {};
                this.challenge.forEach(function (o) {
                    o.level === e && (t = !1);
                }),
                    t && ((o.level = e), (o.receive = !1), this.challenge.push(o), this.saveChallengeMap());
            }),
            (e.prototype.receiveChallengeReward = function (e) {
                this.challenge.forEach(function (t) {
                    t.level === e && (t.receive = !0);
                }),
                    this.saveChallengeMap();
            }),
            (e.prototype.setChallengeReceive = function () {}),
            (e.prototype.getCreateDate = function () {
                return (
                    this.playerInfo.createDate || ((this.playerInfo.createDate = Date.now()), this.savePlayerData()),
                    this.playerInfo.createDate
                );
            }),
            (e.prototype.getPlayDays = function () {
                this.playerInfo.lastOnlineTime
                    ? c.TimeUtil.isSameUtcDay(this.playerInfo.lastOnlineTime, Date.now()) ||
                      ((this.playerInfo.lastOnlineTime = Date.now()), h.ReporterBridge.incUserProperty({PlayDays: 1}))
                    : ((this.playerInfo.lastOnlineTime = Date.now()),
                      this.savePlayerData(),
                      h.ReporterBridge.incUserProperty({PlayDays: 1}));
            }),
            (e.prototype.setGameState = function (e, t) {
                void 0 === t && (t = ""), (this.gameState = e), (this.challengeData = t);
            }),
            (e.prototype.getGameState = function () {
                return this.gameState;
            }),
            (e.prototype.checkIsChallenge = function () {
                return this.gameState === g.GameSatet.challenge;
            }),
            (e.prototype.getChallengeData = function () {
                return this.challengeData;
            }),
            (e.prototype.getPropeller = function () {
                return (
                    this.playerInfo.propeller ||
                        0 == this.playerInfo.propeller ||
                        ((this.playerInfo.propeller = 0), this.savePlayerData()),
                    this.playerInfo.propeller
                );
            }),
            (e.prototype.addPropeller = function (e) {
                this.playerInfo.propeller || (this.playerInfo.propeller = 0),
                    (this.playerInfo.propeller += e),
                    this.savePlayerData(),
                    r.ClientEvents.DATA_CHANGE.emit();
            }),
            (e.prototype.usePropeller = function (e) {
                (this.playerInfo.propeller -= e), this.savePlayerData(), r.ClientEvents.DATA_CHANGE.emit();
            }),
            (e.prototype.addTalent = function (e) {
                this.checkTalentHasOpen(e) ||
                    (this.talent.push(e), this.saveTalentData(), b.SevenChallengeMgr.AddTalentTask()),
                    h.ReporterBridge.setUserProperty({TalentUp: this.talent.length}),
                    h.ReporterBridge.setUserProperty({UserAtk: y.equipMgr.getDamage()}),
                    h.ReporterBridge.setUserProperty({UserHp: y.equipMgr.getHp()});
            }),
            (e.prototype.addRightTalent = function (e) {
                this.checkTalentHasOpen(e) ||
                    (this.rightTalent.push(e), this.saveTalentData(), b.SevenChallengeMgr.AddTalentTask());
            }),
            (e.prototype.getTalent = function () {
                return this.talent;
            }),
            (e.prototype.getLeftTalentLength = function () {
                for (var e = this.getAllTalent(), t = 0, o = 0; o < e.length; o++) {
                    var n = e[o];
                    !(Number(n) >= 201e4) && t++;
                }
                return t;
            }),
            (e.prototype.getAllTalent = function () {
                var e = this;
                return this.talent.concat(
                    this.rightTalent.filter(function (t) {
                        return !e.talent.includes(t);
                    })
                );
            }),
            (e.prototype.getRightTalent = function () {
                return this.rightTalent;
            }),
            (e.prototype.checkTalentHasOpen = function (e) {
                var t = !1;
                return this.talent.includes(e) ? (t = !0) : this.rightTalent.includes(e) && (t = !0), t;
            }),
            (e.prototype.getNewUserStep = function () {
                return this.playerInfo.newUserStep;
            }),
            (e.prototype.getLastChallenge = function () {
                return this.challenge[this.challenge.length - 1];
            }),
            (e.prototype.addGuideStep = function () {
                this.playerInfo.newUserStep++, this.savePlayerData();
            }),
            (e.prototype.getFailGuideStep = function () {
                return (
                    this.playerInfo.failGuideStep ||
                        0 == this.playerInfo.failGuideStep ||
                        ((this.playerInfo.failGuideStep = 0), this.savePlayerData()),
                    this.playerInfo.failGuideStep
                );
            }),
            (e.prototype.addFailGuideStep = function () {
                this.playerInfo.failGuideStep ? this.playerInfo.failGuideStep++ : (this.playerInfo.failGuideStep = 1),
                    this.savePlayerData();
            }),
            (e.prototype.setFailGuideStep = function (e) {
                this.playerInfo.failGuideStep = e;
            }),
            (e.prototype.getLastFail = function () {
                return this.lastFailLevel;
            }),
            (e.prototype.setLastFail = function (e) {
                (this.lastFailLevel = e), i.LocalStorage.setNumber(s.LocalConst.LAST_FAIL_LEVEL, this.lastFailLevel);
            }),
            (e.prototype.saveLevelResult = function (e, t) {
                e
                    ? this.levelMessage[t]
                        ? this.levelMessage[t].success
                            ? (this.levelMessage[t].success += 1)
                            : (this.levelMessage[t].success = 1)
                        : ((this.levelMessage[t] = {}), (this.levelMessage[t].success = 1))
                    : this.levelMessage[t]
                    ? this.levelMessage[t].fail
                        ? (this.levelMessage[t].fail += 1)
                        : (this.levelMessage[t].fail = 1)
                    : ((this.levelMessage[t] = {}), (this.levelMessage[t].fail = 1)),
                    this.saveLevelMessage();
            }),
            (e.prototype.getLevelSuccess = function (e) {
                return this.levelMessage[e] && this.levelMessage[e].success ? this.levelMessage[e].success : 0;
            }),
            (e.prototype.getLevelFail = function (e) {
                return this.levelMessage[e] && this.levelMessage[e].fail ? this.levelMessage[e].fail : 0;
            }),
            (e.prototype.setFailGuide = function (e) {
                this.isFailGuide = e;
            }),
            (e.prototype.getFailGuide = function () {
                return this.isFailGuide;
            }),
            (e.prototype.isShowFreeSkill = function () {
                var e = E.levelMgr.getLevelJson().id >= Number(u.JsonMgr.getDefineConstantByName("SkillOneUnlock")),
                    t =
                        Number(o.playData.getFreeSkillCount()) <
                        Number(u.JsonMgr.getDefineConstantByName("SkillOneNum")),
                    n =
                        Number(o.playData.getLevelFail(E.levelMgr.getLevelJson().id)) >=
                        Number(u.JsonMgr.getDefineConstantByName("SkillGetFailNum")),
                    a = o.playData.checkIsChallenge();
                return e && t && n && !a;
            }),
            (e._instance = new e()),
            e
        );
    })();
(o.PlayerData = S), (o.playData = S.instance());
