var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.TaskTypeMgr = o.CommonTaskType = void 0);
var n,
    a = e("AchieveManager"),
    i = e("PassTaskManager"),
    r = e("SevenChallengeManager"),
    s = e("TaskManager");
(function (e) {
    (e[(e.none = 0)] = "none"),
        (e[(e.mainLineTimes = 1)] = "mainLineTimes"),
        (e[(e.openRedBoxTimes = 2)] = "openRedBoxTimes"),
        (e[(e.gainPatrolTimes = 3)] = "gainPatrolTimes"),
        (e[(e.quickPatrolTimes = 4)] = "quickPatrolTimes"),
        (e[(e.seeAdTimes = 5)] = "seeAdTimes"),
        (e[(e.equitLevelUpTimes = 6)] = "equitLevelUpTimes"),
        (e[(e.consumeDiamond = 7)] = "consumeDiamond"),
        (e[(e.killNormalEnemy = 8)] = "killNormalEnemy"),
        (e[(e.openAnyBoxTimes = 9)] = "openAnyBoxTimes"),
        (e[(e.shopBuyTimes = 10)] = "shopBuyTimes"),
        (e[(e.equitMergeTimes = 11)] = "equitMergeTimes"),
        (e[(e.killBossEnegy = 12)] = "killBossEnegy"),
        (e[(e.killEliteEnegy = 13)] = "killEliteEnegy"),
        (e[(e.consumeGold = 14)] = "consumeGold"),
        (e[(e.consumeEnergy = 15)] = "consumeEnergy"),
        (e[(e.loginDays = 16)] = "loginDays"),
        (e[(e.talentLeft = 17)] = "talentLeft"),
        (e[(e.completeLevel = 18)] = "completeLevel"),
        (e[(e.quipAdvanced0 = 19)] = "quipAdvanced0"),
        (e[(e.quipAdvanced1 = 20)] = "quipAdvanced1"),
        (e[(e.quipAdvanced2 = 21)] = "quipAdvanced2"),
        (e[(e.quipAdvanced345 = 22)] = "quipAdvanced345"),
        (e[(e.quipAdvanced6 = 23)] = "quipAdvanced6"),
        (e[(e.quipLevelNum1 = 24)] = "quipLevelNum1"),
        (e[(e.quipLevelNum2 = 25)] = "quipLevelNum2"),
        (e[(e.quipLevelNum3 = 26)] = "quipLevelNum3"),
        (e[(e.quipLevelNum4 = 27)] = "quipLevelNum4"),
        (e[(e.quipLevelNum5 = 28)] = "quipLevelNum5"),
        (e[(e.quipLevelNum6 = 29)] = "quipLevelNum6"),
        (e[(e.talentRight = 30)] = "talentRight"),
        (e[(e.loginGame = 31)] = "loginGame"),
        (e[(e.completeTask = 32)] = "completeTask"),
        (e[(e.openSSRboxTimes = 33)] = "openSSRboxTimes"),
        (e[(e.equipAllLevel = 34)] = "equipAllLevel");
})((n = o.CommonTaskType || (o.CommonTaskType = {})));
var c = (function () {
    function e() {}
    return (
        (e.instance = function () {
            return e._instance || (e._instance = new e()), e._instance;
        }),
        (e.prototype.mainLineTimesTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.mainLineTimes, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.mainLineTimes, e, t),
                i.PassTaskMgr.setContentTypeNum(n.mainLineTimes, e, t),
                a.AchieveMgr.setContentTypeNum(n.mainLineTimes, e, t);
        }),
        (e.prototype.openRedBoxTimesTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.openRedBoxTimes, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.openRedBoxTimes, e, t),
                i.PassTaskMgr.setContentTypeNum(n.openRedBoxTimes, e, t),
                a.AchieveMgr.setContentTypeNum(n.openRedBoxTimes, e, t);
        }),
        (e.prototype.gainPatrolTimesTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.gainPatrolTimes, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.gainPatrolTimes, e, t),
                i.PassTaskMgr.setContentTypeNum(n.gainPatrolTimes, e, t),
                a.AchieveMgr.setContentTypeNum(n.gainPatrolTimes, e, t);
        }),
        (e.prototype.quickPatrolTimesTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.quickPatrolTimes, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.quickPatrolTimes, e, t),
                i.PassTaskMgr.setContentTypeNum(n.quickPatrolTimes, e, t),
                a.AchieveMgr.setContentTypeNum(n.quickPatrolTimes, e, t);
        }),
        (e.prototype.seeAdTimesTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.seeAdTimes, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.seeAdTimes, e, t),
                i.PassTaskMgr.setContentTypeNum(n.seeAdTimes, e, t),
                a.AchieveMgr.setContentTypeNum(n.seeAdTimes, e, t);
        }),
        (e.prototype.equitLevelUpTimesTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.equitLevelUpTimes, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.equitLevelUpTimes, e, t),
                i.PassTaskMgr.setContentTypeNum(n.equitLevelUpTimes, e, t),
                a.AchieveMgr.setContentTypeNum(n.equitLevelUpTimes, e, t);
        }),
        (e.prototype.consumeDiamondTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.consumeDiamond, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.consumeDiamond, e, t),
                i.PassTaskMgr.setContentTypeNum(n.consumeDiamond, e, t),
                a.AchieveMgr.setContentTypeNum(n.consumeDiamond, e, t);
        }),
        (e.prototype.killNormalEnemyTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.killNormalEnemy, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.killNormalEnemy, e, t),
                i.PassTaskMgr.setContentTypeNum(n.killNormalEnemy, e, t),
                a.AchieveMgr.setContentTypeNum(n.killNormalEnemy, e, t);
        }),
        (e.prototype.openAnyBoxTimesTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.openAnyBoxTimes, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.openAnyBoxTimes, e, t),
                i.PassTaskMgr.setContentTypeNum(n.openAnyBoxTimes, e, t),
                a.AchieveMgr.setContentTypeNum(n.openAnyBoxTimes, e, t);
        }),
        (e.prototype.shopBuyTimesTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.shopBuyTimes, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.shopBuyTimes, e, t),
                i.PassTaskMgr.setContentTypeNum(n.shopBuyTimes, e, t),
                a.AchieveMgr.setContentTypeNum(n.shopBuyTimes, e, t);
        }),
        (e.prototype.equitMergeTimesTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.equitMergeTimes, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.equitMergeTimes, e, t),
                i.PassTaskMgr.setContentTypeNum(n.equitMergeTimes, e, t),
                a.AchieveMgr.setContentTypeNum(n.equitMergeTimes, e, t);
        }),
        (e.prototype.killBossEnegyTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.killBossEnegy, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.killBossEnegy, e, t),
                i.PassTaskMgr.setContentTypeNum(n.killBossEnegy, e, t),
                a.AchieveMgr.setContentTypeNum(n.killBossEnegy, e, t);
        }),
        (e.prototype.killEliteEnegyTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.killEliteEnegy, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.killEliteEnegy, e, t),
                i.PassTaskMgr.setContentTypeNum(n.killEliteEnegy, e, t),
                a.AchieveMgr.setContentTypeNum(n.killEliteEnegy, e, t);
        }),
        (e.prototype.consumeGoldTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.consumeGold, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.consumeGold, e, t),
                i.PassTaskMgr.setContentTypeNum(n.consumeGold, e, t),
                a.AchieveMgr.setContentTypeNum(n.consumeGold, e, t);
        }),
        (e.prototype.consumeEnergyTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.consumeEnergy, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.consumeEnergy, e, t),
                i.PassTaskMgr.setContentTypeNum(n.consumeEnergy, e, t),
                a.AchieveMgr.setContentTypeNum(n.consumeEnergy, e, t);
        }),
        (e.prototype.openSSRboxTimesTask = function (e, t) {
            void 0 === t && (t = !0),
                s.TaskMgr.setContentTypeNum(n.openSSRboxTimes, e, t),
                r.SevenChallengeMgr.setContentTypeNum(n.openSSRboxTimes, e, t),
                i.PassTaskMgr.setContentTypeNum(n.openSSRboxTimes, e, t),
                a.AchieveMgr.setContentTypeNum(n.openSSRboxTimes, e, t);
        }),
        (e.prototype.completeLevelTask = function (e, t) {
            void 0 === t && (t = !0),
                r.SevenChallengeMgr.setContentTypeNum(n.completeLevel, e, t),
                i.PassTaskMgr.setContentTypeNum(n.completeLevel, e, t),
                a.AchieveMgr.setContentTypeNum(n.completeLevel, e, t);
        }),
        (e.prototype.setContentTypeNumQuipTask = function (e) {
            r.SevenChallengeMgr.setContentTypeNumQuip(e, !0),
                i.PassTaskMgr.setContentTypeNumQuip(e, !0),
                a.AchieveMgr.setContentTypeNumQuip(e, !0);
        }),
        (e.prototype.setContentTypeNumCompleteTask = function (e, t) {
            void 0 === t && (t = !0),
                i.PassTaskMgr.setContentTypeNumDt(),
                a.AchieveMgr.setContentTypeNum(n.completeTask, e, t);
        }),
        (e.prototype.saveTaskData = function () {
            s.TaskMgr.saveTaskData(),
                r.SevenChallengeMgr.saveSevenChallengeTask(),
                i.PassTaskMgr.savePassTaskDatas(),
                a.AchieveMgr.saveAchieveTaskDatas();
        }),
        (e._instance = null),
        e
    );
})();
o.TaskTypeMgr = c.instance();
