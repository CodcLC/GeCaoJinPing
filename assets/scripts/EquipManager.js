var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.equipMgr = o.EquipManager = void 0);
var n = e("UIManager"),
    a = e("ClientEvents"),
    i = e("ViewUrl"),
    r = e("EquipmentConfig"),
    s = e("HeroData"),
    c = e("JsonManager"),
    l = e("LanguageManager"),
    p = e("PlayerData"),
    u = (function () {
        function e() {
            (this.allEquip = []),
                (this.sortIndex = 0),
                (this._upGradeItem = null),
                (this._sacrifice = []),
                (this._upItemEarlyId = null),
                (this.addHandWeapon = 0),
                (this.addCritPercent = 0),
                (this.addMightPercent = 0),
                (this.addPercentLife = 0),
                (this.addRecoveryPercent = 0),
                (this.addCdPercent = 0),
                (this.addFoodPercent = 0),
                (this.shieldAddPercent = 0),
                (this.shieldRecover = 0),
                (this.shieldDamage = 0),
                (this.addSpeedPercent = 0),
                (this.addHandWeaponPercent = 0),
                (this.hasShield = null),
                (this.grenadeNum = 0),
                (this.grenadeEffect = null),
                (this.defenseEffect = null),
                (this.cdEffect = null),
                (this.attackEffect = null),
                (this.hpEffect = null),
                (this.moveEffect = null),
                (this.maxHpEffect = null),
                (this.meatMoveEffect = null),
                (this.meatSkillReduceTimeEffect = null),
                (this.meatAttackEffect = null),
                (this.meatHpUpperEffect = null),
                (this.meatCritEffect = null),
                (this.hitCritEffect = null),
                (this.hitArmorEffect = null),
                (this.hitBloodEffect = null),
                (this.hitMoveEffect = null),
                (this.attackToHp = 0),
                (this.weaponDefenseEffect = !1),
                (this.laserFiring = null),
                (this.godBless = null),
                (this.moreHpMoreAttack = null),
                (this.lessHpMoreDefence = null),
                (this.allRecoverGrowth = 0),
                (this.emergencyRecover = null),
                (this.moreHpMoreCd = null),
                (this.lessHpMoreVampire = null),
                (this.moreHpMoreSpeed = null),
                (this.lessHpRecover = null),
                (this.addFireSpeed = 0),
                (this.bossDamageUp = 0),
                (this.killBossDamageUp = 0),
                (this.killBossVampireUp = 0),
                (this.killBossCritUp = 0),
                (this.killBossSpeedUp = 0),
                (this.incentiveCdLess = 0),
                (this.sclarCdLess = 0),
                (this.fatalInjuryProtect = null),
                (this.targetHpAttackAddition = 0),
                (this.targetAllHpAttackAddition = 0),
                (this.deathAliveTime = 0),
                (this.reviveGrowth = null),
                (this.poisonImmune = !1),
                (this.roleAttackAddition = 0),
                (this.roleSpeedAddition = 0);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.setSortIndex = function (e) {
                this.sortIndex = e;
            }),
            (e.prototype.getSortIndex = function () {
                return this.sortIndex;
            }),
            (e.prototype.getAllEquips = function () {
                return this.sortEquip();
            }),
            (e.prototype.getAllDressed = function () {
                return s.HeroData.instance().getAllDress();
            }),
            (e.prototype.deleteEquip = function () {}),
            (e.prototype.addEquip = function (e, t) {
                void 0 === t && (t = 1), s.HeroData.instance().addEquip(e, t);
            }),
            (e.prototype.getMapNumById = function (e) {
                return s.HeroData.instance().getMapById(e);
            }),
            (e.prototype.useMap = function (e, t) {
                s.HeroData.instance().useMap(e, t);
            }),
            (e.prototype.upLevelEquip = function () {}),
            (e.prototype.dressUp = function (e, t) {
                s.HeroData.instance().dressUp(e, t);
            }),
            (e.prototype.upLoad = function (e) {
                s.HeroData.instance().unloadDress(e.equipment.getIndex());
            }),
            (e.prototype.upGradeEquip = function () {}),
            (e.prototype.getDamage = function () {
                return s.HeroData.instance().getHeroMight().toFixed(0).toString();
            }),
            (e.prototype.getDress = function () {
                return s.HeroData.instance().getAllDress();
            }),
            (e.prototype.getDressStrs = function () {
                for (var e = s.HeroData.instance().getAllDress(), t = "", o = 0; o < e.length; o++) {
                    var n = e[o];
                    o == e.length - 1 ? (t += n.id.toString()) : (t = t + n.id.toString() + ",");
                }
                return t;
            }),
            (e.prototype.getDressUpNums = function () {
                for (var e = s.HeroData.instance().getAllDress(), t = 0, o = 0; o < e.length; o++)
                    e[o] && (t += e[o].equipment.getLevel());
                return t;
            }),
            (e.prototype.getDressExtraID = function () {
                for (var e = [], t = s.heroData.getAllDress(), o = 0; o < t.length; o++)
                    if (t[o])
                        for (
                            var n = t[o], a = n.equipment.getQuality(), i = n.equipment.getQualityIndex(), r = 0;
                            r <= i;
                            r++
                        )
                            "-1" != a[r] && e.push(a[r]);
                return e;
            }),
            (e.prototype.initAttrGrowth = function () {
                var e = this;
                this.resetData(),
                    this.getDressExtraID().forEach(function (t) {
                        if (t) {
                            var o = c.JsonMgr.getJsonById("weaponskill", t);
                            e.setTypeAdd(o);
                        }
                    });
            }),
            (e.prototype.setTypeAdd = function (e) {
                var t = e.numerical;
                switch (e.type) {
                    case 1:
                        this.addPercentLife += Number(t);
                        break;
                    case 2:
                        this.addRecoveryPercent += Number(t);
                        break;
                    case 4:
                        this.addSpeedPercent += Number(t);
                        break;
                    case 5:
                        this.addMightPercent += Number(t);
                        break;
                    case 6:
                        this.addCritPercent += Number(t);
                        break;
                    case 12:
                        this.addCdPercent += Number(t);
                        break;
                    case 13:
                        this.grenadeNum += Number(t);
                        break;
                    case 18:
                        this.addHandWeapon += Number(t);
                        break;
                    case 19:
                        this.addFoodPercent += Number(t);
                        break;
                    case 20:
                        this.addHandWeaponPercent += Number(t);
                        break;
                    case 26:
                        this.meatMoveEffect = this._initMeatMoveEffect(t);
                        break;
                    case 31:
                        this._initNoHurtShield(t);
                        break;
                    case 32:
                        this.shieldRecover += Number(t);
                        break;
                    case 33:
                        this._initshieldAddPercent(t);
                        break;
                    case 34:
                        this._initShieldDamage(t);
                        break;
                    case 35:
                        this.grenadeEffect = this._initGrenadeEffect(t);
                        break;
                    case 36:
                        this.defenseEffect = this._initDefenseEffect(t);
                        break;
                    case 37:
                        this.cdEffect = this._initCdEffect(t);
                        break;
                    case 38:
                        this.attackEffect = this._initAttEffect(t);
                        break;
                    case 39:
                        this.hpEffect = this._initHpEffect(t);
                        break;
                    case 40:
                        this.moveEffect = this._initMoveEffect(t);
                        break;
                    case 41:
                        this.maxHpEffect = this._initMaxHpEffect(t);
                        break;
                    case 42:
                        this.hitCritEffect = this._initHitCritEffect(t);
                        break;
                    case 43:
                        this.hitArmorEffect = this._initHitArmorEffect(t);
                        break;
                    case 44:
                        this.hitBloodEffect = this._initHitBloodEffect(t);
                        break;
                    case 45:
                        this.hitMoveEffect = this._initHitMoveEffect(t);
                        break;
                    case 46:
                        this.weaponDefenseEffect = !0;
                        break;
                    case 47:
                        this.attackToHp = Number(t);
                        break;
                    case 49:
                        this.meatSkillReduceTimeEffect = this._initMeatSkillReduceTimeEffect(t);
                        break;
                    case 50:
                        this.meatAttackEffect = this._initMeatAttackEffect(t);
                        break;
                    case 51:
                        this.meatHpUpperEffect = this._initMeatHpUpperEffect(t);
                        break;
                    case 52:
                        this.meatCritEffect = this._initMeatCritEffect(t);
                        break;
                    case 53:
                        this.laserFiring = this._initLaserFiring(t);
                        break;
                    case 54:
                        this.godBless = this._initGodBless(t);
                        break;
                    case 56:
                        this.moreHpMoreAttack = this._initMoreHpMoreAttack(t);
                        break;
                    case 57:
                        this.lessHpMoreDefence = this._initLessHpMoreDefence(t);
                        break;
                    case 58:
                        this.allRecoverGrowth += Number(t);
                        break;
                    case 59:
                        this.emergencyRecover = this._initEmergencyRecover(t);
                        break;
                    case 60:
                        this.moreHpMoreCd = this._initMoreHpMoreCd(t);
                        break;
                    case 61:
                        this.lessHpMoreVampire = this._initLessHpMoreVampire(t);
                        break;
                    case 62:
                        this.moreHpMoreSpeed = this._initMoreHpMoreSpeed(t);
                        break;
                    case 63:
                        this.lessHpRecover = this._initLessHpRecover(t);
                        break;
                    case 64:
                        this.addFireSpeed = Number(t);
                        break;
                    case 65:
                        this.bossDamageUp = Number(t);
                        break;
                    case 66:
                        this.killBossDamageUp = Number(t);
                        break;
                    case 67:
                        this.killBossVampireUp = Number(t);
                        break;
                    case 68:
                        this.killBossCritUp = Number(t);
                        break;
                    case 69:
                        this.killBossSpeedUp = Number(t);
                        break;
                    case 70:
                        this.incentiveCdLess = Number(t);
                        break;
                    case 71:
                        this.sclarCdLess = Number(t);
                        break;
                    case 72:
                        this.fatalInjuryProtect = this._initFatalInjuryProtect(t);
                        break;
                    case 73:
                        this.targetHpAttackAddition = Number(t);
                        break;
                    case 74:
                        this.targetAllHpAttackAddition = Number(t);
                        break;
                    case 75:
                        this.deathAliveTime += Number(t);
                        break;
                    case 76:
                        this.reviveGrowth = this._initReviveGrowth(t);
                        break;
                    case 77:
                        this.poisonImmune = !0;
                }
            }),
            (e.prototype.resetData = function () {
                (this.addHandWeapon = 0),
                    (this.addCritPercent = 0),
                    (this.addMightPercent = 0),
                    (this.addPercentLife = 0),
                    (this.addRecoveryPercent = 0),
                    (this.addCdPercent = 0),
                    (this.addFoodPercent = 0),
                    (this.shieldAddPercent = 0),
                    (this.shieldRecover = 0),
                    (this.shieldDamage = 0),
                    (this.addSpeedPercent = 0),
                    (this.addHandWeaponPercent = 0),
                    (this.hasShield = null),
                    (this.grenadeNum = 0),
                    (this.grenadeEffect = null),
                    (this.defenseEffect = null),
                    (this.cdEffect = null),
                    (this.attackEffect = null),
                    (this.hpEffect = null),
                    (this.moveEffect = null),
                    (this.meatMoveEffect = null),
                    (this.maxHpEffect = null),
                    (this.hitCritEffect = null),
                    (this.hitArmorEffect = null),
                    (this.hitBloodEffect = null),
                    (this.hitMoveEffect = null),
                    (this.weaponDefenseEffect = !1),
                    (this.attackToHp = 0),
                    (this.meatSkillReduceTimeEffect = null),
                    (this.meatAttackEffect = null),
                    (this.meatHpUpperEffect = null),
                    (this.meatCritEffect = null),
                    (this.laserFiring = null),
                    (this.godBless = null),
                    (this.moreHpMoreAttack = null),
                    (this.lessHpMoreDefence = null),
                    (this.allRecoverGrowth = 0),
                    (this.emergencyRecover = null),
                    (this.moreHpMoreCd = null),
                    (this.lessHpMoreVampire = null),
                    (this.moreHpMoreSpeed = null),
                    (this.lessHpRecover = null),
                    (this.addFireSpeed = 0),
                    (this.bossDamageUp = 0),
                    (this.killBossDamageUp = 0),
                    (this.killBossVampireUp = 0),
                    (this.killBossCritUp = 0),
                    (this.killBossSpeedUp = 0),
                    (this.incentiveCdLess = 0),
                    (this.sclarCdLess = 0),
                    (this.fatalInjuryProtect = null),
                    (this.targetHpAttackAddition = 0),
                    (this.targetAllHpAttackAddition = 0),
                    (this.deathAliveTime = 0),
                    (this.reviveGrowth = null),
                    (this.poisonImmune = !1);
            }),
            (e.prototype.getHp = function () {
                return s.HeroData.instance().getHeroHp().toFixed(0).toString();
            }),
            (e.prototype.getEquipLen = function () {
                return (this.allEquip = []), this.allEquip.concat(this.sortEquip(), null, this.sortMap()).length;
            }),
            (e.prototype.getAllListItem = function () {
                return (this.allEquip = []), this.allEquip.concat(this.sortEquip(), null, this.sortMap());
            }),
            (e.prototype.getCompound = function () {
                for (var e = [], t = [], n = o.equipMgr.getAllDressed(), a = n.length - 1; a >= 0; a--)
                    n[a] && t.push(n[a]);
                return e.concat(t, this.sortEquip());
            }),
            (e.prototype.setUpItemEarlyId = function (e) {
                this._upItemEarlyId = e;
            }),
            (e.prototype.getUpItemEarlyId = function () {
                return this._upItemEarlyId;
            }),
            (e.prototype.getDataEarlyId = function (e) {
                var t = e.equipment.getLevel();
                return e.equipment.getId() - (t - 1);
            }),
            (e.prototype.getUpGradeId = function (e) {
                return e.equipment.getGradeUpId();
            }),
            (e.prototype.getUpGradeNum = function (e) {
                return e.equipment.getGradeUpNum();
            }),
            (e.prototype.getSacrifice = function () {
                return this._sacrifice;
            }),
            (e.prototype.getIsSSR = function (e) {
                return e.equipment.getIsSSR();
            }),
            (e.prototype.sortEquip = function () {
                var e = s.HeroData.instance().getAllEquip(),
                    t = this.getSortIndex();
                return (
                    e.sort(function (e, o) {
                        return 0 === t
                            ? e.equipment.getType() == o.equipment.getType()
                                ? e.equipment.getGrade() == o.equipment.getGrade()
                                    ? o.equipment.getLevel() - e.equipment.getLevel()
                                    : o.equipment.getGrade() - e.equipment.getGrade()
                                : e.equipment.getType() - o.equipment.getType()
                            : 1 === t
                            ? e.equipment.getGrade() == o.equipment.getGrade()
                                ? e.equipment.getType() == o.equipment.getType()
                                    ? o.equipment.getLevel() - e.equipment.getLevel()
                                    : e.equipment.getType() - o.equipment.getType()
                                : o.equipment.getGrade() - e.equipment.getGrade()
                            : 2 === t
                            ? e.equipment.getLevel() == o.equipment.getLevel()
                                ? e.equipment.getGrade() == o.equipment.getGrade()
                                    ? e.equipment.getType() - o.equipment.getType()
                                    : o.equipment.getGrade() - e.equipment.getGrade()
                                : o.equipment.getLevel() - e.equipment.getLevel()
                            : void 0;
                    }),
                    e
                );
            }),
            (e.prototype.sortMap = function () {
                var e = s.HeroData.instance().getAllMap();
                return (
                    e.sort(function (e, t) {
                        return e.type - t.type;
                    }),
                    e
                );
            }),
            (e.prototype.getTypeIndex = function (e) {
                var t = e;
                return (6 != t && 9 != t && 12 != t) || (t -= 1), t;
            }),
            (e.prototype.getTypeBg = function (e) {
                return e >= 4 && e <= 6 ? 4 : e >= 7 && e <= 9 ? 7 : e >= 10 && e <= 12 ? 10 : e;
            }),
            (e.prototype.getStepNode = function (e) {
                var t = 0;
                return e >= 5 && e <= 6 ? (t = 5) : e >= 8 && e <= 9 ? (t = 8) : e >= 11 && e <= 12 && (t = 11), t;
            }),
            (e.prototype.getGradeNum = function (e) {
                var t = null;
                return 5 == e || 8 == e || 11 == e ? (t = 1) : (6 != e && 9 != e && 12 != e) || (t = 2), t;
            }),
            (e.prototype.checkLevelUp = function (e) {
                if (!e.equipment.isLevelMax()) {
                    var t = e.equipment.getWorth().split(","),
                        n = [];
                    return (
                        t.forEach(function (e) {
                            var t = e.split("|");
                            n.push(t);
                        }),
                        n[1][0] > 1e4 && o.equipMgr.getMapNumById(n[1][0]) >= n[1][1] && p.playData.getGold() >= n[0][1]
                    );
                }
            }),
            (e.prototype.getGoLevelMax = function (e) {
                for (
                    var t = e.equipment.getId(),
                        a = e.equipment.getMaxLevel() - e.equipment.getLevel(),
                        r = e.equipment.getWorth().split(",")[1].split("|")[0],
                        s = p.playData.getGold(),
                        c = o.equipMgr.getMapNumById(r),
                        u = 0,
                        d = 0,
                        h = 0;
                    h <= a;
                    h++
                ) {
                    var g = o.equipMgr.getEquipConfigById(t + h),
                        m = Number(g.getWorth().split(",")[0].split("|")[1]),
                        f = Number(g.getWorth().split(",")[1].split("|")[1]);
                    if (
                        (0 == h && m > s
                            ? n.UIMgr.showView(i.ViewUrl.commonTip, null, l.langMgr.getStr("Tips_NoCoin"))
                            : 0 == h &&
                              f > c &&
                              n.UIMgr.showView(i.ViewUrl.commonTip, null, l.langMgr.getStr("Tips_NoBlueprint")),
                        d + f > c || u + m > s)
                    )
                        return {level: h, goldNum: u, mapNum: d, mapid: r};
                    h < a && ((u += m), (d += f));
                }
                return {level: h - 1, goldNum: u, mapNum: d, mapid: r};
            }),
            (e.prototype.getDecompose = function (e) {
                var t = this.cloneObj(e);
                if (1 === t.equipment.getLevel()) return null;
                for (
                    var n = t.equipment.getLevel() - 1,
                        a = t.equipment.getId(),
                        i = 0,
                        r = 0,
                        s = t.equipment.getWorth().split(",")[1].split("|")[0],
                        c = n;
                    c > 0;
                    c--
                ) {
                    var l = a - c,
                        p = o.equipMgr.getEquipConfigById(l);
                    (i += Number(p.getWorth().split(",")[0].split("|")[1])),
                        (r += Number(p.getWorth().split(",")[1].split("|")[1]));
                }
                return {decomposeId: a - n, goldNum: i, mapid: s, mapNum: r};
            }),
            (e.prototype.putUpGradeItem = function (e) {
                var t = !1;
                if (null == this._upGradeItem) this._upGradeItem = e;
                else {
                    if (o.equipMgr.getDataEarlyId(this._upGradeItem._data) != o.equipMgr.getDataEarlyId(e._data))
                        return;
                    if (this._upGradeItem._index == e._index) (this._upGradeItem = null), (this._sacrifice = []);
                    else if (0 == this._sacrifice.length) this._sacrifice.push(e);
                    else {
                        for (var n = 0; n < this._sacrifice.length; n++)
                            this._sacrifice[n]._index === e._index && ((t = !0), this._sacrifice.splice(n, 1));
                        !t &&
                            this.getUpGradeNum(this._upGradeItem._data) > this._sacrifice.length &&
                            this._sacrifice.push(e);
                    }
                }
                a.ClientEvents.COMPOUND_CHANGE.emit({_upItem: this._upGradeItem, _sacrifice: this._sacrifice});
            }),
            (e.prototype.removeAllGradeItem = function () {
                (this._upGradeItem = null),
                    (this._sacrifice = []),
                    a.ClientEvents.COMPOUND_CHANGE.emit({_upItem: this._upGradeItem, _sacrifice: this._sacrifice});
            }),
            (e.prototype.getUpGradeItem = function () {
                return {_upItem: this._upGradeItem, _sacrifice: this._sacrifice};
            }),
            (e.prototype.getDataById = function (e, t) {
                void 0 === t && (t = !1);
                var o = new r.EquipmentConfig();
                return o.init(e), {id: e, equipment: o, count: 1, dress: t};
            }),
            (e.prototype.refreshData = function () {
                s.heroData.refreshAllData();
            }),
            (e.prototype.addMap = function (e, t) {
                s.heroData.addMap(e, t);
            }),
            (e.prototype.getEquipedWeapon = function () {
                var e = null,
                    t = s.heroData.getAllDress();
                return 0 === t.length
                    ? null
                    : (t.forEach(function (t) {
                          1 !== t.equipment.getDressPos() || (e = t);
                      }),
                      e);
            }),
            (e.prototype.getEquipSkillId = function () {
                var e = this.getEquipedWeapon();
                return e
                    ? e.id >= 110001 && e.id <= 2e5
                        ? 10001
                        : e.id >= 210001 && e.id <= 299990
                        ? 20001
                        : e.id >= 310001 && e.id <= 399990
                        ? 30001
                        : e.id >= 410001 && e.id <= 499990
                        ? 40001
                        : e.id >= 510001 && e.id <= 599990
                        ? 50001
                        : e.id >= 610001 && e.id <= 699990
                        ? 60001
                        : void 0
                    : 10001;
            }),
            (e.prototype.getEquipSkillIdInEquipLayer = function () {
                var e = this.getEquipedWeapon();
                return e
                    ? e.id >= 110001 && e.id <= 2e5
                        ? 10001
                        : e.id >= 210001 && e.id <= 299990
                        ? 20001
                        : e.id >= 310001 && e.id <= 399990
                        ? 30001
                        : e.id >= 410001 && e.id <= 499990
                        ? 40001
                        : e.id >= 510001 && e.id <= 599990
                        ? 50001
                        : e.id >= 610001 && e.id <= 699990
                        ? 60001
                        : void 0
                    : 0;
            }),
            (e.prototype.getEquipInfoById = function (e) {
                var t = new r.EquipmentConfig();
                return t.init(e), t;
            }),
            (e.prototype.getEquipConfigById = function (e) {
                var t = new r.EquipmentConfig();
                return t.init(e), o.equipMgr.cloneObj(t);
            }),
            (e.prototype.getEquipConfigById2 = function (e) {
                var t = new r.EquipmentConfig();
                return t.init(e), t;
            }),
            (e.prototype.cloneObj = function (e) {
                if ("object" != typeof e) return e;
                var t = e.constructor === Array ? [] : {};
                for (var o in e) t[o] = "object" == typeof e[o] ? this.cloneObj(e[o]) : e[o];
                return t;
            }),
            (e.prototype._initGrenadeEffect = function (e) {
                var t = e.split(";");
                return {time: Number(t[0]), slowDownPer: Number(t[1])};
            }),
            (e.prototype._initDefenseEffect = function (e) {
                var t = e.split(";");
                return {enemyNum: Number(t[0]), singleHurtPer: Number(t[1]), maxHurtPer: Number(t[2])};
            }),
            (e.prototype._initCdEffect = function (e) {
                var t = e.split(";");
                return {enemyNum: Number(t[0]), singleCdPer: Number(t[1]), MaxCdPer: Number(t[2])};
            }),
            (e.prototype._initAttEffect = function (e) {
                var t = e.split(";");
                return {enemyNum: Number(t[0]), singleAttPer: Number(t[1]), MaxCdAttPer: Number(t[2])};
            }),
            (e.prototype._initHpEffect = function (e) {
                var t = e.split(";");
                return {enemyNum: Number(t[0]), hpPer: Number(t[1])};
            }),
            (e.prototype._initMoveEffect = function (e) {
                var t = e.split(";");
                return {time: Number(t[0]), movePer: Number(t[1])};
            }),
            (e.prototype._initMeatMoveEffect = function (e) {
                var t = e.split(";");
                return {singleMovePer: Number(t[0]), maxMovePer: Number(t[1])};
            }),
            (e.prototype._initMeatSkillReduceTimeEffect = function (e) {
                var t = e.split(";");
                return {singleSkillReductTime: Number(t[0]), maxSkillReductTime: Number(t[1])};
            }),
            (e.prototype._initMeatAttackEffect = function (e) {
                var t = e.split(";");
                return {singleAttackPer: Number(t[0]), maxAttackPer: Number(t[1])};
            }),
            (e.prototype._initMeatHpUpperEffect = function (e) {
                var t = e.split(";");
                return {singleHpUpperPer: Number(t[0]), maxHpUpperPer: Number(t[1])};
            }),
            (e.prototype._initMeatCritEffect = function (e) {
                var t = e.split(";");
                return {singleCritPer: Number(t[0]), maxCritPer: Number(t[1])};
            }),
            (e.prototype._initNoHurtShield = function (e) {
                var t = e.split(";"),
                    o = Number(t[0]),
                    n = Number(t[1]);
                this.hasShield
                    ? ((this.hasShield.noHurtTime = o <= this.hasShield.noHurtTime ? o : this.hasShield.noHurtTime),
                      (this.hasShield.maxHpPer = n >= this.hasShield.maxHpPer ? n : this.hasShield.maxHpPer))
                    : (this.hasShield = {noHurtTime: o, maxHpPer: n});
            }),
            (e.prototype._initshieldAddPercent = function (e) {
                var t = Number(e);
                this.shieldAddPercent
                    ? (this.shieldAddPercent = t >= this.shieldAddPercent ? t : this.shieldAddPercent)
                    : (this.shieldAddPercent = t);
            }),
            (e.prototype._initShieldDamage = function (e) {
                var t = Number(e);
                this.shieldDamage
                    ? (this.shieldDamage = t >= this.shieldDamage ? t : this.shieldDamage)
                    : (this.shieldDamage = t);
            }),
            (e.prototype._initMaxHpEffect = function (e) {
                var t = e.split(";");
                return {enemyNum: Number(t[0]), singleHpPer: Number(t[1]), MaxHpPer: Number(t[2])};
            }),
            (e.prototype._initHitCritEffect = function (e) {
                var t = e.split(";");
                return {enemyNum: Number(t[0]), singleCritPer: Number(t[1]), MaxCritPer: Number(t[2])};
            }),
            (e.prototype._initHitArmorEffect = function (e) {
                var t = e.split(";");
                return {enemyNum: Number(t[0]), singleArmorPer: Number(t[1]), MaxArmorPer: Number(t[2])};
            }),
            (e.prototype._initHitBloodEffect = function (e) {
                var t = e.split(";");
                return {enemyNum: Number(t[0]), singleBloodPer: Number(t[1]), MaxBloodPer: Number(t[2])};
            }),
            (e.prototype._initHitMoveEffect = function (e) {
                var t = e.split(";");
                return {enemyNum: Number(t[0]), singleMovePer: Number(t[1]), MaxMovePer: Number(t[2])};
            }),
            (e.prototype._initLaserFiring = function (e) {
                var t = e.split(";");
                return {damagePercent: Number(t[0]), time: Number(t[1])};
            }),
            (e.prototype._initGodBless = function (e) {
                var t = e.split(";"),
                    o = 0;
                return (
                    this.godBless && (o = this.godBless.count),
                    {probability: Number(t[0]), recoverNum: Number(t[1]), count: o + Number(t[2])}
                );
            }),
            (e.prototype._initMoreHpMoreAttack = function (e) {
                var t = e.split(";"),
                    o = 0;
                return (
                    this.moreHpMoreAttack && (o += this.moreHpMoreAttack.attackGrowth),
                    {moreHpNum: Number(t[0]), attackGrowth: Number(t[1]) + Number(o)}
                );
            }),
            (e.prototype._initLessHpMoreDefence = function (e) {
                var t = e.split(";");
                return {lessHpNum: Number(t[0]), defenceGrowth: Number(t[1])};
            }),
            (e.prototype._initEmergencyRecover = function (e) {
                var t = e.split(";");
                return {lessHpNum: Number(t[0]), probability: Number(t[1]), recoverNum: Number(t[2])};
            }),
            (e.prototype._initMoreHpMoreCd = function (e) {
                var t = e.split(";");
                return {moreHpNum: Number(t[0]), cdGrowth: Number(t[1])};
            }),
            (e.prototype._initLessHpMoreVampire = function (e) {
                var t = e.split(";");
                return {lessHpNum: Number(t[0]), vampireNum: Number(t[1])};
            }),
            (e.prototype._initMoreHpMoreSpeed = function (e) {
                var t = e.split(";");
                return {moreHpNum: Number(t[0]), speedGrowth: Number(t[1])};
            }),
            (e.prototype._initLessHpRecover = function (e) {
                var t = e.split(";");
                return {LessHpNum: Number(t[0]), cd: Number(t[1]), recoverNum: Number(t[2])};
            }),
            (e.prototype._initFatalInjuryProtect = function (e) {
                var t = e.split(";"),
                    o = 9999;
                return (
                    this.fatalInjuryProtect && (o = this.fatalInjuryProtect.cdTime),
                    {protectTime: Number(t[0]), cdTime: Math.min(Number(t[1]), o)}
                );
            }),
            (e.prototype._initReviveGrowth = function (e) {
                var t = e.split(";");
                return {attackNum: Number(t[0]), speedNum: Number(t[1])};
            }),
            (e._instance = null),
            e
        );
    })();
(o.EquipManager = u), (o.equipMgr = u.instance());
