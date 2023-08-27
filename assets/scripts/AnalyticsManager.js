var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.analyMgr = o.AnalyticsManager = void 0);
var n = e("ReportEvent"),
    a = e("ReporterBridge"),
    i = e("GameDataQuerier"),
    r = e("PlayerData"),
    s = e("HeroData"),
    c = e("RoleData"),
    l = e("GameManager"),
    p = e("LevelManager"),
    u = e("HomeManager"),
    d = e("EquipManager"),
    h = e("GuideManager"),
    g = e("ActivityLevelManager"),
    m = e("ActivityManager"),
    f = e("HeroManager"),
    y = e("censtant"),
    v = e("WxManager"),
    M = (function () {
        function e() {}
        return (
            (e.getInstance = function () {
                return e._instance;
            }),
            (e.setGameDataQuerier = function (t) {
                e.gameDataQuerier = t;
            }),
            (e.setVersionGetter = function (t) {
                e.versionGetter = t;
            }),
            (e.prototype.reportGameTime = function (e, t, o, a, i) {
                if (r.playData.getGameState() !== y.GameSatet.Activity) {
                    var s = {
                        Level_ID: e,
                        Game_number: t,
                        Game_Recover: Number(l.gameMgr.gameRecovery.toFixed(2)),
                        Game_Hurt: l.gameMgr.allGetDamage,
                        Game_Attack: l.gameMgr.allDamage,
                        MonsterKill: o,
                        Game_HP: c.roleData.getRole().getHpPercent(),
                        Game_AFK: l.gameMgr.gameAFK,
                        Game_Item: a,
                        Game_Level: i
                    };
                    this.reportEvent(n.ReportEvent.GAME_TIME, s);
                }
            }),
            (e.prototype.reportLevelStart = function (e, t, o) {
                if ((void 0 === o && (o = !1), r.playData.getGameState() !== y.GameSatet.Activity)) {
                    var a = {
                        Level_ID: e,
                        LevelType: t,
                        isChallenge: o,
                        LevelMax: r.playData.getLevel(),
                        EquipWear: d.equipMgr.getDressStrs(),
                        StartTimes: r.playData.getLevelData(e),
                        Attributes_ATK: Number(s.heroData.getHeroMight().toFixed(0)),
                        Attributes_HP: Number(s.heroData.getHeroHp().toFixed(0))
                    };
                    this.reportEvent(n.ReportEvent.LEVEL_START, a);
                }
            }),
            (e.prototype.reportLevelQuit = function (e, t, o, a, i) {
                var r = {Level_ID: e, LevelType: i, Duration: t, FightTime: o, MonsterKill: a};
                this.reportEvent(n.ReportEvent.LEVEL_QUIT, r);
            }),
            (e.prototype.reportLevelVictory = function (e, t, o, a, i, s) {
                if ((void 0 === s && (s = !1), r.playData.getGameState() !== y.GameSatet.Activity)) {
                    var c = {Level_ID: e, LevelType: i, Duration: t, FightTime: o, MonsterKill: a, isChallenge: s};
                    this.reportEvent(n.ReportEvent.LEVEL_VICTORY, c);
                }
            }),
            (e.prototype.reportLevelFail = function (e, t, o, a, i, s) {
                if ((void 0 === s && (s = !1), r.playData.getGameState() !== y.GameSatet.Activity)) {
                    var c = r.playData.getLevelFail(e),
                        l = r.playData.getLevelSuccess(e),
                        p = {
                            Level_ID: e,
                            LevelType: i,
                            Duration: t,
                            FightTime: o,
                            MonsterKill: a,
                            isChallenge: s,
                            FailRatio: 100 * Number((c / (c + l)).toFixed(4))
                        };
                    this.reportEvent(n.ReportEvent.LEVEL_FAIL, p);
                }
            }),
            (e.prototype.reportLevelRevive = function (e, t) {
                var o = {Level_ID: e, LevelType: t};
                this.reportEvent(n.ReportEvent.LEVEL_REVIVE, o);
            }),
            (e.prototype.reportGetItem = function (e, t, o, a) {
                var i = r.playData.getLevel(),
                    s = {ItemType: e, ItemID: Number(t), Level_ID: i, ItemNum: Number(o), GetType: a};
                this.reportEvent(n.ReportEvent.ITEM_GET, s);
            }),
            (e.prototype.reportUseItem = function (e, t, o, a) {
                var i = r.playData.getLevel(),
                    s = {ItemType: e, ItemID: Number(t), Level_ID: i, ItemNum: Number(o), UseType: a};
                this.reportEvent(n.ReportEvent.ITEM_USE, s);
            }),
            (e.prototype.reportGetGold = function (e, t) {
                var o = {CoinNum: e, CoinCount: r.playData.getGold(), GetType: t, Level_ID: r.playData.getLevel()};
                this.reportEvent(n.ReportEvent.COIN_GET, o);
            }),
            (e.prototype.reportUseGold = function (e, t) {
                var o = {CoinNum: e, CoinCount: r.playData.getGold(), UseType: t, Level_ID: r.playData.getLevel()};
                this.reportEvent(n.ReportEvent.COIN_USE, o);
            }),
            (e.prototype.reportGetGem = function (e, t) {
                var o = {GemNum: e, GemCount: r.playData.getGem(), GetType: t, Level_ID: r.playData.getLevel()};
                this.reportEvent(n.ReportEvent.GEM_GET, o);
            }),
            (e.prototype.reportUseGem = function (e, t) {
                var o = {GemNum: e, GemCount: r.playData.getGem(), UseType: t, Level_ID: r.playData.getLevel()};
                this.reportEvent(n.ReportEvent.GEM_USE, o);
            }),
            (e.prototype.reportGetEnergy = function (e, t) {
                var o = {
                    EnergyNum: e,
                    EnergyCount: r.playData.getEnergy(),
                    GetType: t,
                    Level_ID: r.playData.getLevel()
                };
                this.reportEvent(n.ReportEvent.ENERGY_GET, o);
            }),
            (e.prototype.reportUseEnergy = function (e, t) {
                var o = {
                    EnergyNum: e,
                    EnergyCount: r.playData.getEnergy(),
                    UseType: t,
                    Level_ID: r.playData.getLevel()
                };
                this.reportEvent(n.ReportEvent.ENERGY_USE, o);
            }),
            (e.prototype.reportTaskReward = function (e, t, o) {
                var a = {Task_ID: e, Reward: t, TaskType: o, Level_ID: r.playData.getLevel()};
                this.reportEvent(n.ReportEvent.TASK_REWARD, a);
            }),
            (e.prototype.reportGetLevelBox = function (e, t, o, a) {
                var i = {Box_ID: e, BoxLevel: t, BoxReward: o, BoxType: a, Level_ID: r.playData.getLevel()};
                this.reportEvent(n.ReportEvent.CHAPTER_REWARD, i);
            }),
            (e.prototype.reportLoginReweard = function (e, t, o, a) {
                var i = {
                    SevenLogin_ID: e,
                    LoginDay: t,
                    LoginReward: o,
                    Chapter: r.playData.getLevel(),
                    IsSevenLoginExtra: a
                };
                this.reportEvent(n.ReportEvent.LOGIN_REWARD, i);
            }),
            (e.prototype.reportLevelEnd = function (e) {
                if (r.playData.getGameState() !== y.GameSatet.Activity) {
                    var t = {
                        Game_Number: p.levelMgr.getNowIndex(),
                        Level_ID: p.levelMgr.getLevelJson().id,
                        isChallenge: r.playData.checkIsChallenge(),
                        Duration: Math.floor((Date.now() - u.homeMgr.getStartTime()) / 1e3),
                        Grade: c.roleData.getRole().getRoleLevel().level,
                        Revive: l.gameMgr.getReviveCount(),
                        Skill: c.roleData.getRole().getSkill(),
                        SkillNum: l.gameMgr.skillCount,
                        Item: l.gameMgr.getGameItemMapStr(),
                        LevelType: "New",
                        OverType: e,
                        DeathType: l.gameMgr.getDeathType(),
                        EquipWear: d.equipMgr.getDressStrs(),
                        StartTimes: r.playData.getLevelData(p.levelMgr.getLevelJson().id),
                        IsFirstWin: r.playData.getCompleteLevel() === p.levelMgr.getLevelJson().id
                    };
                    this.reportEvent(n.ReportEvent.LEVEL_END, t);
                }
            }),
            (e.prototype.reportTouchBtn = function (e) {
                var t = {UIType: e, Level_ID: r.playData.getLevel()};
                this.reportEvent(n.ReportEvent.HOME_BUTTON_CLICK, t);
            }),
            (e.prototype.reportTalentUp = function (e, t, o) {
                var a = r.playData.getLevel(),
                    i = {
                        GuideType: r.playData.getNewUserStep() == h.GUIDE_STEP.OVER ? "Noguide" : "Guide",
                        UseType: e,
                        CoinNum: t,
                        MaxChapter: a,
                        Level_ID: o,
                        Before_End_Type: r.playData.getLastLevelState()
                    };
                this.reportEvent(n.ReportEvent.TALENT_UP, i);
            }),
            (e.prototype.reportOpenChooseSkill = function (e, t) {
                var o = {
                    ChapterDuration: l.gameMgr.time,
                    Skill: e,
                    SkillNum: t,
                    Game_Number: p.levelMgr.getNowIndex(),
                    Level_ID: p.levelMgr.getLevelJson().id
                };
                this.reportEvent(n.ReportEvent.SKILL_OPEN, o);
            }),
            (e.prototype.reportTouchChooseSkill = function (e, t) {
                var o = {
                    ChapterDuration: l.gameMgr.time,
                    Skill: e,
                    SkillNum: t,
                    Game_Number: p.levelMgr.getNowIndex(),
                    Level_ID: p.levelMgr.getLevelJson().id
                };
                this.reportEvent(n.ReportEvent.SKILL_GET, o);
            }),
            (e.prototype.reportRefreshChooseSkill = function (e, t, o) {
                var a = {
                    ChapterDuration: l.gameMgr.time,
                    Skill: e,
                    SkillNum: t,
                    RefreshType: o,
                    Game_Number: p.levelMgr.getNowIndex(),
                    Level_ID: p.levelMgr.getLevelJson().id
                };
                this.reportEvent(n.ReportEvent.SKILL_REFRESH, a);
            }),
            (e.prototype.reportGetAllSkill = function (e, t) {
                var o = {
                    ChapterDuration: l.gameMgr.time,
                    Skill: e,
                    SkillNum: t,
                    Game_Number: p.levelMgr.getNowIndex(),
                    RefreshType: "ads",
                    Level_ID: p.levelMgr.getLevelJson().id
                };
                this.reportEvent(n.ReportEvent.SKILL_GETALL, o);
            }),
            (e.prototype.reportGamePause = function () {
                var e = {Game_Number: p.levelMgr.getNowIndex(), Level_ID: p.levelMgr.getLevelJson().id};
                this.reportEvent(n.ReportEvent.GAME_PAUSE, e);
            }),
            (e.prototype.reportPauseClose = function (e) {
                var t = {CloseType: e, Game_Number: p.levelMgr.getNowIndex(), Level_ID: p.levelMgr.getLevelJson().id};
                this.reportEvent(n.ReportEvent.GAME_PAUSE_CLOSE, t);
            }),
            (e.prototype.reportEquipDress = function (e) {
                var t = r.playData.getLevel(),
                    o = e.equipment.getDressPos(),
                    a = e.equipment.getLevel(),
                    i = e.equipment.getQualityIndex(),
                    s = e.id,
                    c = {
                        MaxChapter: t,
                        Guide_Type: r.playData.getNewUserStep() == h.GUIDE_STEP.OVER ? "Noguide" : "Guide",
                        Level_ID: u.homeMgr.getCurLevel(),
                        Before_End_Type: r.playData.getLastLevelState(),
                        EquipPlace: o.toString(),
                        EquipLevel: a,
                        EquipQuality: i.toString(),
                        EquipID: s.toString()
                    };
                this.reportEvent(n.ReportEvent.EQUIP_WEAR, c);
            }),
            (e.prototype.reportEquipUp = function (e, t) {
                var o = r.playData.getLevel(),
                    a = e.equipment.getDressPos(),
                    i = e.equipment.getLevel(),
                    s = e.equipment.getQualityIndex(),
                    c = e.id,
                    l = {
                        MaxChapter: o,
                        Guide_Type: r.playData.getNewUserStep() == h.GUIDE_STEP.OVER ? "Noguide" : "Guide",
                        Level_ID: u.homeMgr.getCurLevel(),
                        Before_End_Type: r.playData.getLastLevelState(),
                        EquipPlace: a.toString(),
                        EquipLevel: i,
                        PayNum: t,
                        EquipQuality: s.toString(),
                        EquipID: c.toString()
                    };
                this.reportEvent(n.ReportEvent.EQUIP_UP, l);
            }),
            (e.prototype.reportEquipMerge = function (e, t, o) {
                var a = r.playData.getLevel(),
                    i = e.equipment.getDressPos(),
                    s = e.equipment.getLevel(),
                    c = e.equipment.getQualityIndex(),
                    l = e.id,
                    p = {
                        MaxChapter: a,
                        Level_ID: u.homeMgr.getCurLevel(),
                        IsFirst: o,
                        Before_End_Type: r.playData.getLastLevelState(),
                        EquipPlace: i.toString(),
                        EquipLevel: s,
                        EquipConsumption: t,
                        EquipQuality: c.toString(),
                        EquipID: l.toString()
                    };
                this.reportEvent(n.ReportEvent.EQUIP_MERGE, p);
            }),
            (e.prototype.reportSevenReward = function (e, t, o) {
                var a = {
                    SevenChallenge_ID: e,
                    SevenChallenge_Points: t,
                    LoginReward: o,
                    Chapter: r.playData.getLevel()
                };
                this.reportEvent(n.ReportEvent.SevenChallenge_Reward, a);
            }),
            (e.prototype.reportSevenChallengeFinish = function (e, t, o, a, i) {
                var s = {
                    SevenChallenge_ID: e,
                    SevenChallenge_Points: t,
                    SevenChallenge_UnlockDay: o,
                    SevenChallenge_FinishDay: a,
                    SevenChallenge_PointNum: i,
                    Chapter: r.playData.getLevel()
                };
                this.reportEvent(n.ReportEvent.SevenChallenge_Finish, s);
            }),
            (e.prototype.reportShare = function (e, t) {
                void 0 === t && (t = !0);
                var o = {Level_ID: t ? p.levelMgr.getLevelJson().id : u.homeMgr.getCurLevel(), ShareType: e};
                this.reportEvent(n.ReportEvent.SHARE, o);
            }),
            (e.prototype.reportPassFinish = function (e, t, o, a) {
                var i = {PassTask_ID: e, PassTask_Reward: t, Pass_High: o, Pass_Level: a};
                this.reportEvent(n.ReportEvent.PASS_FINISH, i);
            }),
            (e.prototype.reportPassReward = function (e, t, o, a) {
                var i = {Pass_ID: e, Pass_Level: a, Pass_High: o, Pass_Reward: t};
                this.reportEvent(n.ReportEvent.PASS_REWARD, i);
            }),
            (e.prototype.reportChangeHero = function (e) {
                var t = {HeroStar: e.grade, HeroLevel: e.level, HeroAfter_ID: e.id};
                this.reportEvent(n.ReportEvent.HERO_CHANGE, t);
            }),
            (e.prototype.reportHeroLevelUp = function (e, t, o, a) {
                var i = {
                    PayCoinNum: e,
                    PayExpNum: t,
                    ExpNum: r.playData.getHeroExperence(),
                    HeroUp_ID: o,
                    HeroLevel: a
                };
                this.reportEvent(n.ReportEvent.HERO_UP, i);
            }),
            (e.prototype.reportHeroGradeUp = function (e, t, o, a, i) {
                var r = {PayPieceNum: t, HeroPiece_ID: e, HeroPiece_Num: o, HeroStar: i, HeroStarUp_ID: a};
                this.reportEvent(n.ReportEvent.HERO_STAR_UP, r);
            }),
            (e.prototype.reportHeroUnlock = function (e, t, o, a) {
                var i = {
                    PayPieceNum: e,
                    Unlock_Type: t,
                    HeroPiece_ID: o,
                    HeroPiece_Num: r.playData.getHeroDebris(o),
                    HeroUnlock_ID: a
                };
                this.reportEvent(n.ReportEvent.HERO_UNLOCK, i);
            }),
            (e.prototype.reportGetZoneEnter = function (e, t, o, a) {
                var i = {Zone_ID: e, Zone_Floor: t, Zone_Type: o, Zone_Num: a};
                this.reportEvent(n.ReportEvent.ZONE_ENTER, i);
            }),
            (e.prototype.reportGetZoneReward = function (e, t, o, a, i, r) {
                var s = "";
                e.forEach(function (e, t) {
                    s += 0 === t ? e.id + "|" + e.count : ";" + e.id + "|" + e.count;
                });
                var c = g.activityMgr.checkCanSeeAD(r) - g.activityMgr.getDataBuKey(r).adCount,
                    l = {
                        Zone_Num: g.activityMgr.getHasCount(r),
                        Zone_AdNum: c,
                        Zone_Reward: s,
                        ZoneReward_Type: t,
                        Zone_Type: o,
                        Zone_Floor: a,
                        ZonePlay_Type: i,
                        Zone_ID: r
                    };
                this.reportEvent(n.ReportEvent.ZOOM_REWARD, l);
            }),
            (e.prototype.reportExchangeTask = function (e, t, o, a) {
                var i = g.activityMgr.getItemById(1019),
                    r = g.activityMgr.getItemById(1018),
                    s = {
                        ExchangeTask_ID: e,
                        Activity_ID: t,
                        Exchange_LotteryNum: o,
                        Exchange_ShopNum: a,
                        Lottery_Num: i.count,
                        Shop_Num: r.count
                    };
                this.reportEvent(n.ReportEvent.EXCHANGE_FINISH, s);
            }),
            (e.prototype.reportGetExchangeReward = function (e, t, o, a, i) {
                var r = "";
                i.forEach(function (e, t) {
                    r += 0 === t ? e.id + "|" + e.count : ";" + e.id + "|" + e.count;
                });
                var s = g.activityMgr.getItemById(1019),
                    c = g.activityMgr.getItemById(1018),
                    l = m.activityManager.getBingoFromMap(e),
                    p = {
                        Activity_ID: e,
                        GetType: t,
                        ExchangeLottery_LastNum: l.allCount,
                        ExchangeLottery_RefreshNum: l.refreshCount,
                        Exchange_AdNum: o,
                        Exchange_PayToken: a,
                        Lottery_Num: s.count,
                        Shop_Num: c.count,
                        Exchange_Reward: r
                    };
                this.reportEvent(n.ReportEvent.EXCHANGE_REWARD, p);
            }),
            (e.prototype.reportOpenStoreBox = function (e, t, o, a, i) {
                var r = {Box_Type: e, BoxOpen_Type: t, BoxOpen_PayNum: o, BoxOpen_KeyNum: a, BoxOpen_Reward: i};
                this.reportEvent(n.ReportEvent.BOX_OPEN, r);
            }),
            (e.prototype.reportStartLogin = function (e) {
                var t = {FirstBegin: e};
                this.reportEvent(n.ReportEvent.START_LOGIN, t);
            }),
            (e.prototype.reportLeaveGame = function (e, t) {
                var o = {
                    Level_ID: e,
                    Chapter: t,
                    Duration: Math.floor((cc.director.getTotalTime() - r.playData.gameTime) / 1e3)
                };
                this.reportEvent(n.ReportEvent.LEAVE_GAME, o);
            }),
            (e.prototype.reportEnterMainScene = function (e) {
                var t = {
                    Level_ID: e,
                    Attributes_ATK: Number(s.heroData.getHeroMight().toFixed(0)),
                    Attributes_HP: Number(s.heroData.getHeroHp().toFixed(0)),
                    Science_Attributes: r.playData.getTalentLen(),
                    Science_Skill: r.playData.getRightTalent().length
                };
                this.reportEvent(n.ReportEvent.START_BEGIN_GAME, t);
            }),
            (e.prototype.reportRewardVideoButtonClicked = function (e, t, o) {
                var a = {AdsType: e, OpenUi: t, Level_ID: o};
                this.reportEvent(n.ReportEvent.VIDEO_BUTTON_CLICKED, a);
            }),
            (e.prototype.reportRewardVideoStarted = function (e, t, o) {
                var a = {AdsType: e, OpenUi: t, Level_ID: o};
                this.reportEvent(n.ReportEvent.VIDEO_STARTED, a);
            }),
            (e.prototype.reportRewardVideoFullyWatched = function (e, t, o) {
                var a = {AdsType: e, OpenUi: t, Level_ID: o};
                this.reportEvent(n.ReportEvent.VIDEO_FULLY_WATCHED, a);
            }),
            (e.prototype.reportInterstitialShowed = function (e, t) {
                var o = {AdsType: e, Times: t};
                this.reportEvent(n.ReportEvent.INTERSTITIAL_APPEAR, o);
            }),
            (e.prototype.reportAds_Interstitial = function (e, t) {
                var o = {AdsType: e, Times: t};
                this.reportEvent(n.ReportEvent.ADS_INTERSTITIAL, o);
            }),
            (e.prototype.reportAds_Banner = function (e, t) {
                var o = {Times: e, OpenUi: t};
                this.reportEvent(n.ReportEvent.ADS_BANNER, o);
            }),
            (e.prototype.reportAchievement_Reward = function (e, t, o, a, i, r) {
                var s = {
                    AchievementTask_ID: e,
                    Achievement_Type: t,
                    Achievement_Level: o,
                    Achievement_Num: a,
                    Achievement_Count: i,
                    Achievement_Reward: r
                };
                this.reportEvent(n.ReportEvent.ACHIEVEMENT_REWARD, s);
            }),
            (e.prototype.reportIntroduce_Click = function () {
                this.reportEvent(n.ReportEvent.INTRODUCE_CLICK, {});
            }),
            (e.prototype.reportTrial_Play = function (e, t, o) {
                var a = {Achievement_Type: e, Item_ID: t, Atk_UpNum: o};
                this.reportEvent(n.ReportEvent.TRIAL_PLAY, a);
            }),
            (e.prototype.reportEvent = function (t, o) {
                (o.IsNew = e.gameDataQuerier.isNew()),
                    (o.MaxChapter = e.gameDataQuerier.MaxChapter()),
                    (o.Gold = e.gameDataQuerier.Gold()),
                    (o.Gem = e.gameDataQuerier.Gem()),
                    (o.Talent = e.gameDataQuerier.Talent()),
                    (o.ATK = e.gameDataQuerier.ATK()),
                    (o.MaxHP = e.gameDataQuerier.MaxHP()),
                    (o.Ener = e.gameDataQuerier.Ener()),
                    (o.LevelLose = r.playData.getFailCount()),
                    (o.Hero_ID = r.playData.getHeroId()),
                    (o.Hero_Level = f.heroMgr.getBattleHero().level),
                    (o.Hero_Star = f.heroMgr.getBattleHero().grade),
                    (o.Game_version = v.wxMgr.wxGameVersion),
                    this.checkEventReportWx(t, o),
                    a.ReporterBridge.reportEvent(t, o);
            }),
            (e.prototype.checkEventReportWx = function (e, t) {
                switch (e) {
                    case n.ReportEvent.GAME_TIME:
                    case n.ReportEvent.TASK_REWARD:
                    case n.ReportEvent.CHAPTER_REWARD:
                    case n.ReportEvent.LOGIN_REWARD:
                    case n.ReportEvent.LEVEL_END:
                    case n.ReportEvent.TALENT_UP:
                    case n.ReportEvent.SKILL_GET:
                    case n.ReportEvent.SKILL_REFRESH:
                    case n.ReportEvent.SKILL_GETALL:
                    case n.ReportEvent.GAME_PAUSE:
                    case n.ReportEvent.GAME_PAUSE_CLOSE:
                    case n.ReportEvent.EQUIP_WEAR:
                    case n.ReportEvent.EQUIP_UP:
                    case n.ReportEvent.EQUIP_MERGE:
                    case n.ReportEvent.SevenChallenge_Reward:
                    case n.ReportEvent.SevenChallenge_Finish:
                    case n.ReportEvent.PASS_FINISH:
                    case n.ReportEvent.PASS_REWARD:
                    case n.ReportEvent.HERO_CHANGE:
                    case n.ReportEvent.HERO_UP:
                    case n.ReportEvent.HERO_STAR_UP:
                    case n.ReportEvent.HERO_UNLOCK:
                    case n.ReportEvent.ZONE_ENTER:
                    case n.ReportEvent.ZOOM_REWARD:
                    case n.ReportEvent.EXCHANGE_FINISH:
                    case n.ReportEvent.EXCHANGE_REWARD:
                    case n.ReportEvent.BOX_OPEN:
                    case n.ReportEvent.ACHIEVEMENT_REWARD:
                        break;
                    case n.ReportEvent.LEVEL_FAIL:
                        (t.FailRatio = t.FailRatio ? t.FailRatio.toString() : "0"), v.wxMgr.reportEvent(e, t);
                        break;
                    default:
                        v.wxMgr.reportEvent(e, t);
                }
            }),
            (e.prototype.setUserProperty = function (e) {
                a.ReporterBridge.setUserProperty(e);
            }),
            (e.prototype.setOnceUserProperty = function (e) {
                a.ReporterBridge.setOnceUserProperty(e);
            }),
            (e._instance = new e()),
            (e.gameDataQuerier = new i.GameDataQuerier()),
            (e.versionGetter = null),
            e
        );
    })();
(o.AnalyticsManager = M), (o.analyMgr = M.getInstance());
