var e = require;
var t = module;
var o = exports;
var n,
    a =
        (this && this.__extends) ||
        ((n = function (e, t) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                })(e, t);
        }),
        function (e, t) {
            function o() {
                this.constructor = e;
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
        }),
    i =
        (this && this.__decorate) ||
        function (e, t, o, n) {
            var a,
                i = arguments.length,
                r = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r;
        };
Object.defineProperty(o, "__esModule", {value: !0});
var r = e("Entities"),
    s = e("Joystick"),
    c = e("GameManager"),
    l = e("UIManager"),
    p = e("ResManager"),
    u = e("JsonManager"),
    d = e("PoolManager"),
    h = e("ClientEvents"),
    g = e("RoleData"),
    m = e("ViewUrl"),
    f = e("GameView"),
    y = e("RarityManager"),
    v = e("BattleResultManager"),
    M = e("CommonUtil"),
    _ = e("HeroData"),
    C = e("EquipManager"),
    b = e("audioManager"),
    T = e("audioConst"),
    w = e("RoleBlood"),
    N = e("TalentAddManager"),
    E = e("RoleWeaponManager"),
    S = e("LevelManager"),
    D = e("PlayerData"),
    A = e("ChooseView"),
    k = e("censtant"),
    I = e("HeroManager"),
    R = cc._decorator,
    L = R.ccclass,
    P = R.property,
    O = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.hpProgressBar = null),
                (t.bulletNode = null),
                (t.ske = null),
                (t.kuT = null),
                (t.blood = null),
                (t.pointNode = null),
                (t.cdProgress = null),
                (t.item = []),
                (t.superFrame = null),
                (t.normalFrame = null),
                (t.foot = null),
                (t.invincibleNode = null),
                (t.heroJson = null),
                (t.tryAdd = 0),
                (t.recovery = 0),
                (t.crit = 0),
                (t.bulletSpeed = 0),
                (t.duration = 0),
                (t.penetrate = 0),
                (t.area = 0),
                (t.repel = 0),
                (t.cd = 0),
                (t.amount = 0),
                (t.magnet = 0),
                (t.luck = 0),
                (t.growth = 0),
                (t.greed = 0),
                (t.roleLevel = null),
                (t.nowExp = 0),
                (t.maxHealth = 0),
                (t.moveTag = !1),
                (t.skillArr = new Map()),
                (t.equips = new Map()),
                (t.unDamageTime = 0),
                (t.cdDic = {}),
                (t.isCdWeapon = !1),
                (t.bulletCount = 5),
                (t._speedGrowth = 0),
                (t._cdGrowth = 0),
                (t._attackGrowth = 0),
                (t._maxHPGrowth = 0),
                (t._critGrowth = 0),
                (t._killNumEffect = null),
                (t._hpNumEffect = null),
                (t.vampirePercent = 0),
                (t.godBlessCount = 0),
                (t.lifeVampire = 0),
                (t.cdVampire = 0),
                (t.speedGrowth = 0),
                (t.killBossDamageUp = 0),
                (t.killBossVampireUp = 0),
                (t.killBossCritUp = 0),
                (t.killBossSpeedUp = 0),
                (t.incentiveCdLess = 0),
                (t.afkTime = 0),
                (t.invincibleTime = 0),
                (t.isInvincible = !1),
                (t.isDebugInvincible = !1),
                (t.deathAliveTime = 0),
                (t.fatalInjuryProtectOverTime = 0),
                (t.fatalInjuryProtectCd = 0),
                (t.revive = function () {
                    (t.hp = t.maxHealth),
                        (t.hpProgressBar.progress = t.hp / t.maxHealth),
                        t.onLifeChange(),
                        t.reviveInvincible();
                }),
                (t.secondRecovery = function () {
                    if (!c.gameMgr.getIsPause()) {
                        t.exteraRecover();
                        var e = t.heroJson.recovery * (t.getRecoveryAdd() / 100 + 1);
                        c.gameMgr.gameRecovery += Number(e.toFixed(2));
                        var o = t.hp + t.heroJson.recovery * (t.getRecoveryAdd() / 100 + 1);
                        o > t.maxHealth ? (t.hp = t.maxHealth) : (t.hp = o),
                            t.onLifeChange(),
                            (t.hpProgressBar.progress = t.hp / t.maxHealth);
                    }
                }),
                (t._moveEffectOverTime = 0),
                (t._ismoveEffecting = !1),
                (t.upDateHealth = function () {
                    var e = t.skillArr.get(E.SkillType.health),
                        o = Math.ceil(_.heroData.getHeroHp() * (e.maxhealth / 100 + 1)),
                        n = o - t.maxHealth;
                    (t.maxHealth = o),
                        (t.hp += n),
                        (c.gameMgr.gameRecovery += Number(n.toFixed(2))),
                        (t.hpProgressBar.progress = t.hp / t.maxHealth),
                        t.onLifeChange();
                }),
                (t.timeCheck = function () {
                    c.gameMgr.getIsPause() ||
                        (Object.keys(t.cdDic).forEach(function (e) {
                            t.cdDic[e] > 0 && (t.cdDic[e] -= 0.1);
                        }),
                        t.doAttack());
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {}),
            (t.prototype.getRoleEquipLen = function () {
                return this.equips.size;
            }),
            (t.prototype.isDeath = function () {
                return this.hp <= 0;
            }),
            (t.prototype.start = function () {
                e.prototype.start.call(this),
                    (this.node.zIndex = cc.macro.MAX_ZINDEX),
                    s.instance.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    s.instance.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this),
                    this.schedule(this.secondRecovery, 5);
            }),
            (t.prototype.initPointNode = function () {
                var e = f.default.instance().getCacheRadian();
                (this.moveDir = f.default.instance().getCacheMoveDir()),
                    0 === e
                        ? ((this.moveDir = cc.v2(0, 1)), this.pointNode.setPosition(cc.v2(80, 0)))
                        : this.pointNode.setPosition(cc.v2(80 * this.moveDir.x, 80 * this.moveDir.y)),
                    (this.pointNode.angle = (-e / Math.PI) * 180 - 90);
            }),
            (t.prototype.unWinGame = function () {
                this.unscheduleAllCallbacks();
            }),
            (t.prototype.onLifeChange = function () {
                var e = C.equipMgr.moreHpMoreAttack;
                e &&
                    e.moreHpNum &&
                    (this.hp / this.maxHealth > e.moreHpNum / 100
                        ? this._hpNumEffect.moreHpMoreAttack ||
                          ((this._hpNumEffect.moreHpMoreAttack = !0),
                          (this.attack += this.attack * (e.attackGrowth / 100)))
                        : this._hpNumEffect.moreHpMoreAttack &&
                          ((this.attack -= this.attack * (e.attackGrowth / 100)),
                          (this._hpNumEffect.moreHpMoreAttack = !1)));
                var t = C.equipMgr.lessHpMoreDefence;
                t &&
                    t.lessHpNum &&
                    (this.hp / this.maxHealth < t.lessHpNum / 100
                        ? this._hpNumEffect.lessHpMoreDefence ||
                          ((this.armor += this.armor * (t.defenceGrowth / 100)),
                          (this._hpNumEffect.lessHpMoreDefence = !0))
                        : this._hpNumEffect.lessHpMoreDefence &&
                          ((this.armor -= this.armor * (t.defenceGrowth / 100)),
                          (this._hpNumEffect.lessHpMoreDefence = !1)));
                var o = C.equipMgr.moreHpMoreCd;
                o &&
                    o.moreHpNum &&
                    (this.hp / this.maxHealth > o.moreHpNum / 100
                        ? this._hpNumEffect.moreHpMoreCd ||
                          ((C.equipMgr.addCdPercent += o.cdGrowth), (this._hpNumEffect.moreHpMoreCd = !0))
                        : this._hpNumEffect.moreHpMoreCd &&
                          ((C.equipMgr.addCdPercent -= o.cdGrowth), (this._hpNumEffect.moreHpMoreCd = !1)));
                var n = C.equipMgr.lessHpMoreVampire;
                n &&
                    n.lessHpNum &&
                    (this.hp / this.maxHealth < n.lessHpNum / 100
                        ? this._hpNumEffect.lessHpMoreVampire ||
                          ((this.lifeVampire = n.vampireNum), (this._hpNumEffect.lessHpMoreVampire = !0))
                        : this._hpNumEffect.lessHpMoreVampire &&
                          ((this.lifeVampire = 0), (this._hpNumEffect.lessHpMoreVampire = !1)));
                var a = C.equipMgr.moreHpMoreSpeed;
                a &&
                    a.moreHpNum &&
                    (this.hp / this.maxHealth > a.moreHpNum / 100
                        ? this._hpNumEffect.moreHpMoreSpeed ||
                          ((this.speedGrowth += a.speedGrowth),
                          (this._hpNumEffect.moreHpMoreSpeed = !0),
                          this.resetSpeed())
                        : this._hpNumEffect.moreHpMoreSpeed &&
                          ((this.speedGrowth -= a.speedGrowth),
                          (this._hpNumEffect.moreHpMoreSpeed = !1),
                          this.resetSpeed()));
                var i = C.equipMgr.lessHpRecover;
                i &&
                    i.LessHpNum &&
                    (this.hp / this.maxHealth < i.LessHpNum / 100
                        ? this._hpNumEffect.lessHpRecover ||
                          ((this.cdVampire = i.recoverNum), (this._hpNumEffect.lessHpRecover = !0))
                        : this._hpNumEffect.lessHpRecover &&
                          ((this.cdVampire = 0), (this._hpNumEffect.lessHpRecover = !1)));
            }),
            (t.prototype.resetIncentiveEffect = function () {
                (this.killBossDamageUp = 0),
                    (this.killBossVampireUp = 0),
                    (this.killBossCritUp = 0),
                    (this.killBossSpeedUp = 0),
                    (this.incentiveCdLess = 0),
                    this.resetSpeed();
            }),
            (t.prototype.incentiveEffectGrowth = function () {
                (this.killBossDamageUp = C.equipMgr.killBossDamageUp),
                    (this.killBossVampireUp = C.equipMgr.killBossVampireUp),
                    (this.killBossCritUp = C.equipMgr.killBossCritUp),
                    (this.killBossSpeedUp = C.equipMgr.killBossSpeedUp),
                    (this.incentiveCdLess = C.equipMgr.incentiveCdLess),
                    this.resetSpeed();
            }),
            (t.prototype.getKillBossDamageUp = function () {
                return this.killBossDamageUp;
            }),
            (t.prototype.getKillBossVampireUp = function () {
                return this.killBossVampireUp;
            }),
            (t.prototype.exteraRecover = function () {
                var e = (C.equipMgr.addRecoveryPercent + I.heroMgr.addRecoveryPercent + this.cdVampire) / 100 + 1;
                if (e) {
                    var t = e - 1;
                    this.hp += this.maxHealth * t;
                }
            }),
            (t.prototype.upLevel = function (e) {
                var t = this.equips.get(e.type);
                if (t) {
                    var o = u.JsonMgr.getEquipById(t.id + 1);
                    o &&
                        (this.equips.set(o.type, o),
                        e.type === E.EquipType.magicField
                            ? h.ClientEvents.ADD_MAGIC_FIELD.emit(o)
                            : e.type === E.EquipType.droneB || e.type === E.EquipType.droneA
                            ? (h.ClientEvents.REFRESH_DRONE_JSON.emit(o),
                              e.type === E.EquipType.droneB && 6 === e.level && this.equips.delete(E.EquipType.droneA))
                            : e.type === E.EquipType.sword &&
                              6 === e.level &&
                              (this.equips.set(e.type, e), (this.cdDic[e.type] = 0)));
                } else this.equips.set(e.type, e);
            }),
            (t.prototype.upSkillLevel = function (e) {
                var t = this.skillArr.get(e.type);
                if (t) {
                    var o = u.JsonMgr.getSkillById(t.id + 1);
                    o && (this.skillArr.set(o.type, o), this.heroAdd(o.type));
                } else this.skillArr.set(e.type, e), this.heroAdd(e.type);
                e.type === E.SkillType.area && h.ClientEvents.ADD_MAGIC_FIELD.emit(null);
            }),
            (t.prototype.heroAdd = function (e) {
                switch (e) {
                    case E.SkillType.health:
                        this.upDateHealth();
                }
            }),
            (t.prototype.clearFoodGrowth = function () {
                (this._speedGrowth = 0),
                    (this._cdGrowth = 0),
                    (this._attackGrowth = 0),
                    (this._maxHPGrowth = 0),
                    (this._critGrowth = 0);
            }),
            (t.prototype.foodGrowth = function () {
                this.foodSpeedGrowth(),
                    this.foodCdLess(),
                    this.foodAttackGrowth(),
                    this.foodMaxHPGrowth(),
                    this.foodCritGrowth();
            }),
            (t.prototype.foodSpeedGrowth = function () {
                var e = C.equipMgr.meatMoveEffect;
                if (e && e.singleMovePer) {
                    if (this._speedGrowth >= e.maxMovePer) return;
                    (this._speedGrowth += e.singleMovePer), (this.speedGrowth += e.singleMovePer), this.resetSpeed();
                }
            }),
            (t.prototype.foodCdLess = function () {
                var e = C.equipMgr.meatSkillReduceTimeEffect;
                if (e && e.singleSkillReductTime) {
                    if (this._cdGrowth >= e.maxSkillReductTime) return;
                    (this._cdGrowth += e.singleSkillReductTime), this.addCdLess(e.singleSkillReductTime);
                }
            }),
            (t.prototype.foodAttackGrowth = function () {
                var e = C.equipMgr.meatAttackEffect;
                if (e && e.singleAttackPer) {
                    if (this._attackGrowth >= e.maxAttackPer) return;
                    (this._attackGrowth += e.singleAttackPer), this.addAttack(e.singleAttackPer);
                }
            }),
            (t.prototype.foodMaxHPGrowth = function () {
                var e = C.equipMgr.meatHpUpperEffect;
                if (e && e.singleHpUpperPer) {
                    if (this._maxHPGrowth >= e.maxHpUpperPer) return;
                    (this._maxHPGrowth += e.singleHpUpperPer), this.addMaxHp(e.singleHpUpperPer);
                }
            }),
            (t.prototype.foodCritGrowth = function () {
                var e = C.equipMgr.meatCritEffect;
                if (e && e.singleCritPer) {
                    if (this._critGrowth >= e.maxCritPer) return;
                    (this._critGrowth += e.singleCritPer), this.addGrit(e.singleCritPer);
                }
            }),
            (t.prototype.resetSpeed = function () {
                this.speed = this.getRoleMoveSpeed() + N.talentAddMgr.addSpeed;
            }),
            (t.prototype.addCdLess = function (e) {
                C.equipMgr.addCdPercent += e;
            }),
            (t.prototype.addAttack = function (e) {
                this.attack += this.attack * (e / 100);
            }),
            (t.prototype.addMaxHp = function (e) {
                (this.maxHealth += this.maxHealth * (e / 100)),
                    (this.hpProgressBar.progress = this.hp / this.maxHealth),
                    this.onLifeChange();
            }),
            (t.prototype.addGrit = function (e) {
                this.crit += this.crit * (e / 100);
            }),
            (t.prototype.refreshMoveEffectOverTime = function () {
                var e = C.equipMgr.moveEffect;
                e &&
                    e.time &&
                    ((this._moveEffectOverTime = c.gameMgr.time + e.time),
                    this._ismoveEffecting || ((this.speedGrowth += e.movePer), this.resetSpeed()),
                    (this._ismoveEffecting = !0));
            }),
            (t.prototype.getMoveEffectOverTime = function () {
                return this._moveEffectOverTime;
            }),
            (t.prototype.stopMoveEffect = function () {
                var e = C.equipMgr.moveEffect;
                e &&
                    e.movePer &&
                    this._ismoveEffecting &&
                    ((this._ismoveEffecting = !1), this.limitSpeedOff(e.movePer));
            }),
            (t.prototype.limitSpeedOff = function (e) {
                (this.speedGrowth -= e), this.resetSpeed();
            }),
            (t.prototype.enemyGrowthCheck = function () {
                var e = D.playData.getKillNum(),
                    t = C.equipMgr.cdEffect;
                t &&
                    t.enemyNum &&
                    t.singleCdPer &&
                    this._killNumEffect.cdLessMultiple < t.MaxCdPer / t.singleCdPer &&
                    Math.floor(e / t.enemyNum) > this._killNumEffect.cdLessMultiple &&
                    ((this._killNumEffect.cdLessMultiple = Math.floor(e / t.enemyNum)),
                    (C.equipMgr.addCdPercent += t.singleCdPer));
                var o = C.equipMgr.attackEffect;
                o &&
                    o.enemyNum &&
                    o.singleAttPer &&
                    this._killNumEffect.attackMultiple < o.MaxCdAttPer / o.singleAttPer &&
                    Math.floor(e / o.enemyNum) > this._killNumEffect.attackMultiple &&
                    ((this._killNumEffect.attackMultiple = Math.floor(e / o.enemyNum)),
                    (this.attack += this.attack * (o.singleAttPer / 100)));
                var n = C.equipMgr.defenseEffect;
                n &&
                    n.enemyNum &&
                    n.singleHurtPer &&
                    this._killNumEffect.defenseMultiple < n.maxHurtPer / n.singleHurtPer &&
                    Math.floor(e / n.enemyNum) > this._killNumEffect.defenseMultiple &&
                    ((this._killNumEffect.defenseMultiple = Math.floor(e / n.enemyNum)),
                    (this.armor += this.armor * (n.singleHurtPer / 100)));
                var a = C.equipMgr.hpEffect;
                a &&
                    a.enemyNum &&
                    Math.floor(e / a.enemyNum) > this._killNumEffect.healthMultiple &&
                    ((this._killNumEffect.healthMultiple = Math.floor(e / a.enemyNum)),
                    this.recoveryHpByOther(Math.floor((this.maxHealth * a.hpPer) / 100)));
                var i = C.equipMgr.maxHpEffect;
                i &&
                    i.enemyNum &&
                    i.singleHpPer &&
                    this._killNumEffect.maxHealthMultiple < i.MaxHpPer / i.singleHpPer &&
                    Math.floor(e / i.enemyNum) > this._killNumEffect.maxHealthMultiple &&
                    ((this._killNumEffect.maxHealthMultiple = Math.floor(e / i.enemyNum)),
                    this.addMaxHp(i.singleHpPer));
                var r = C.equipMgr.hitCritEffect;
                r &&
                    r.enemyNum &&
                    r.singleCritPer &&
                    this._killNumEffect.critMultiple < r.MaxCritPer / r.singleCritPer &&
                    Math.floor(e / r.enemyNum) > this._killNumEffect.critMultiple &&
                    ((this._killNumEffect.critMultiple = Math.floor(e / r.enemyNum)),
                    (this.crit += this.crit * (r.singleCritPer / 100)));
                var s = C.equipMgr.hitArmorEffect;
                s &&
                    s.enemyNum &&
                    s.singleArmorPer &&
                    this._killNumEffect.defenseMultiple2 < s.MaxArmorPer / s.singleArmorPer &&
                    Math.floor(e / s.enemyNum) > this._killNumEffect.defenseMultiple2 &&
                    ((this._killNumEffect.defenseMultiple2 = Math.floor(e / s.enemyNum)),
                    (this.armor += this.armor * (s.singleArmorPer / 100)));
                var c = C.equipMgr.hitBloodEffect;
                c &&
                    c.enemyNum &&
                    c.singleBloodPer &&
                    this._killNumEffect.vampireMultiple < c.MaxBloodPer / c.singleBloodPer &&
                    Math.floor(e / c.enemyNum) > this._killNumEffect.vampireMultiple &&
                    ((this._killNumEffect.vampireMultiple = Math.floor(e / c.enemyNum)),
                    (this.vampirePercent += c.singleBloodPer));
                var l = C.equipMgr.hitMoveEffect;
                l &&
                    l.enemyNum &&
                    l.singleMovePer &&
                    this._killNumEffect.speedMultiple < l.MaxMovePer / l.singleMovePer &&
                    Math.floor(e / l.enemyNum) > this._killNumEffect.speedMultiple &&
                    ((this._killNumEffect.speedMultiple = Math.floor(e / l.enemyNum)),
                    (this.speedGrowth += l.singleMovePer),
                    (this.speed = this.getRoleMoveSpeed() + N.talentAddMgr.addSpeed));
            }),
            (t.prototype.resetEffect = function () {
                (this._killNumEffect = {
                    cdLessMultiple: 0,
                    attackMultiple: 0,
                    defenseMultiple: 0,
                    healthMultiple: 0,
                    maxHealthMultiple: 0,
                    critMultiple: 0,
                    defenseMultiple2: 0,
                    vampireMultiple: 0,
                    speedMultiple: 0
                }),
                    (this.vampirePercent = 0),
                    (this._hpNumEffect = {
                        moreHpMoreAttack: !1,
                        lessHpMoreDefence: !1,
                        moreHpMoreCd: !1,
                        lessHpMoreVampire: !1,
                        moreHpMoreSpeed: !1,
                        lessHpRecover: !1
                    }),
                    (this.godBlessCount = 0),
                    (this.lifeVampire = 0),
                    (this.cdVampire = 0),
                    (this.speedGrowth = 0),
                    (this.deathAliveTime = 0),
                    (C.equipMgr.roleAttackAddition = 0),
                    (C.equipMgr.roleSpeedAddition = 0),
                    (this.fatalInjuryProtectCd = 0),
                    (this.fatalInjuryProtectOverTime = 0);
            }),
            (t.prototype.getVampirePercent = function () {
                return this.vampirePercent + this.lifeVampire + this.killBossVampireUp;
            }),
            (t.prototype.getSpeedAdd = function () {
                var e = this.skillArr.get(E.SkillType.speed);
                return e ? e.speed : 0;
            }),
            (t.prototype.getCdAdd = function () {
                var e = this.skillArr.get(E.SkillType.cd),
                    t = (C.equipMgr.addCdPercent + I.heroMgr.addCdPercent + this.incentiveCdLess) / 100;
                return e ? e.speed / 100 + t : t;
            }),
            (t.prototype.init = function () {
                var e = this;
                (this.tryAdd = 0),
                    g.roleData.setRole(this),
                    c.gameMgr.setIsPause(!1),
                    this.equips.clear(),
                    (this.roleLevel = u.JsonMgr.getChapterLevelExp(1)),
                    (this.nowExp = 0),
                    (this.heroJson = _.heroData.getHeroJson()),
                    (this.maxHealth = this.hp = _.heroData.getHeroHp()),
                    (this.hpProgressBar.progress = this.hp / this.maxHealth),
                    (this.speed = this.getRoleMoveSpeed() + N.talentAddMgr.addSpeed),
                    (this.attack = _.heroData.getHeroMight()),
                    (this.armor = this.heroJson.armor + N.talentAddMgr.armorAdd),
                    (this.recovery = this.heroJson.recovery),
                    (this.crit = this.heroJson.crit),
                    (this.bulletSpeed = this.heroJson.speed),
                    (this.duration = this.heroJson.duration),
                    (this.penetrate = this.heroJson.penetrate),
                    (this.area = this.heroJson.area),
                    (this.repel = this.heroJson.repel),
                    (this.cd = this.heroJson.cd),
                    (this.amount = this.heroJson.amount),
                    (this.magnet = this.heroJson.magnet),
                    (this.luck = this.heroJson.luck),
                    (this.growth = this.heroJson.growth),
                    (this.greed = this.heroJson.greed);
                var t = C.equipMgr.getEquipSkillId(),
                    o = u.JsonMgr.getEquipById(this.weaponLevelGrowth(t));
                this.initIsCdWeapon(t),
                    o.id >= 60001 &&
                        o.id <= 60006 &&
                        ((this.cdProgress.node.active = !0), (this.cdProgress.progress = 1)),
                    10001 === t ? (this.pointNode.active = !1) : ((this.pointNode.active = !0), this.initPointNode()),
                    this.equips.set(o.type, o),
                    this.initItem(),
                    this.scheduleOnce(function () {
                        e.node.setPosition(cc.Vec2.ZERO),
                            f.default.instance().addChildToHeroNode(e.node),
                            l.UIMgr.getRoleCamera().setPosition(e.node.getPosition()),
                            C.equipMgr.poisonImmune
                                ? ((e.foot.node.active = !0), e.foot.play("foot"))
                                : ((e.foot.node.active = !1), e.foot.stop("foot")),
                            e.loadSpine();
                    }, 0.1);
                var n = u.JsonMgr.getDefineConstantByName("PlayHeroLevel");
                D.playData.getGameState() === k.GameSatet.normal && D.playData.getCompleteLevel() >= Number(n)
                    ? (c.gameMgr.setIsPause(!0), l.UIMgr.showView(m.ViewUrl.TryOutView, null, null, function () {}))
                    : D.playData.isShowFreeSkill() && D.playData.getGameState() !== k.GameSatet.Activity
                    ? (c.gameMgr.setIsPause(!0), l.UIMgr.showView(m.ViewUrl.FreeSkill, null, null, function () {}))
                    : N.talentAddMgr.canChooseSkillInOpen && (c.gameMgr.setIsPause(!0), this.showSkillView()),
                    (this.invincibleTime = 0),
                    (this.isInvincible = !1),
                    (this.isDebugInvincible = !1),
                    (this.invincibleNode.active = !1);
            }),
            (t.prototype.getHpPercent = function () {
                return Number((this.hp / this.maxHealth).toFixed(2));
            }),
            (t.prototype.initItem = function () {
                var e = this;
                if (this.isCdWeapon) {
                    var t = this.equips.get(E.EquipType.kn);
                    this.item.forEach(function (o) {
                        (o.spriteFrame = t.issuper ? e.superFrame : e.normalFrame), (o.node.active = !0);
                    });
                } else this.item[0].node.parent.active = !1;
            }),
            (t.prototype.showSkillView = function () {
                var e = y.rarityMgr.generateRarity();
                0 !== e.length &&
                    (c.gameMgr.setIsPause(!0),
                    l.UIMgr.showView(m.ViewUrl.chooseView, null, e, function (e) {
                        e.getComponent(A.default).setIsFirst();
                    }));
            }),
            (t.prototype.initIsCdWeapon = function (e) {
                this.isCdWeapon = 30001 === e;
            }),
            (t.prototype.getAttack = function () {
                return this.attack;
            }),
            (t.prototype.downCdBullet = function () {
                if ((this.bulletCount--, (this.item[this.bulletCount].node.active = !1), this.bulletCount <= 0)) {
                    var e = this.equips.get(E.EquipType.kn);
                    e.issuper && E.default.instance().loadSuperHowitzer(e);
                }
            }),
            (t.prototype.getGoldAdd = function () {
                var e = this.skillArr.get(E.SkillType.addGold);
                return e ? 1 + e.greed / 100 : 1;
            }),
            (t.prototype.weaponLevelGrowth = function (e) {
                return e + C.equipMgr.addHandWeapon;
            }),
            (t.prototype.recoveryHpByMagicField = function () {
                this.recoveryHpByOther(Math.ceil(this.attack / 100));
            }),
            (t.prototype.recoveryHpByFood = function () {
                var e = C.equipMgr.addFoodPercent / 100 + 1,
                    t =
                        (0.2 * this.maxHealth * e +
                            Number(u.JsonMgr.getDefineConstantByName("Meat")) +
                            N.talentAddMgr.meatAdd) *
                        (1 + N.talentAddMgr.meatRecoveryPercent);
                this.recoveryHpByOther(Math.ceil(t)), this.foodGrowth();
            }),
            (t.prototype.recoveryHpByOther = function (e) {
                if (!(e <= 0)) {
                    (c.gameMgr.gameRecovery += Number(e.toFixed(2))),
                        C.equipMgr.allRecoverGrowth > 0 &&
                            (this.hp += Math.floor(this.hp * (C.equipMgr.allRecoverGrowth / 1e3))),
                        this.hp + e > this.maxHealth ? (this.hp = this.maxHealth) : (this.hp += e);
                    var t = this.getWorldPosition();
                    f.default.instance().addDamageLabel(k.DamageType.Recovery, !1, e, cc.v3(t.x, t.y, 0)),
                        (this.hpProgressBar.progress = this.hp / this.maxHealth),
                        this.onLifeChange();
                }
            }),
            (t.prototype.loadSpine = function () {
                var e = this;
                p.ResManager.loadEntitiesSpine(this.ske, this.heroJson.itemicon, function (t) {
                    (e.ske.skeletonData = t),
                        e.ske.setSkin(e.getSpineByWeapon()),
                        e.ske.setAnimation(0, "standby", !0),
                        (e.ske.timeScale = 0.7);
                });
            }),
            (t.prototype.resetSpine = function (e, t) {
                var o = this;
                (this.tryAdd = t),
                    p.ResManager.loadEntitiesSpine(this.ske, e.itemicon, function (e) {
                        (o.ske.skeletonData = e), o.ske.setSkin(o.getSpineByWeapon());
                    });
            }),
            (t.prototype.resetWeapon = function (e, t) {
                (this.tryAdd = e), this.ske.setSkin(this.getWeaponName(t));
                var o = this.equips.get(E.EquipType.kn).level,
                    n = u.JsonMgr.getEquipById(t + o - 1);
                this.equips.set(E.EquipType.kn, n), this.initIsCdWeapon(t), this.initItem();
            }),
            (t.prototype.getSpineByWeapon = function () {
                var e = this.equips.get(E.EquipType.kn);
                return this.getWeaponName(e.id);
            }),
            (t.prototype.getWeaponName = function (e) {
                return e >= 60001
                    ? "hero_6"
                    : e >= 50001
                    ? "hero_5"
                    : e >= 40001
                    ? "hero_4"
                    : e >= 30001
                    ? "hero_3"
                    : e >= 20001
                    ? "hero_2"
                    : e >= 10001
                    ? "hero_1"
                    : void 0;
            }),
            (t.prototype.getFromEqpMap = function (e) {
                return this.equips.get(e);
            }),
            (t.prototype.checkHasSkill = function (e) {
                return this.skillArr.has(e);
            }),
            (t.prototype.checkHasEquip = function (e) {
                return this.equips.has(e);
            }),
            (t.prototype.onTouchMove = function (e, t) {
                (this._speedType = t.speedType), (this.moveDir = t.moveDistance);
            }),
            (t.prototype.onTouchEnd = function (e, t) {
                this._speedType = t.speedType;
            }),
            (t.prototype.death = function () {
                c.gameMgr.setIsPause(!0),
                    c.gameMgr.checkCanRevive() ? l.UIMgr.showView(m.ViewUrl.reviveView) : v.btResMgr.showResultView(!1);
            }),
            (t.prototype.onDamage = function (e, t) {
                if (!this.isInvincible) {
                    var o = E.default.instance();
                    if (o.getHasShield()) o.shieldOnDamage(e) || (this.unDamageTime = 0);
                    else {
                        this.resetIncentiveEffect();
                        var n = e - this.getRoleArmor();
                        if (
                            ((n = n <= 0 ? 1 : n),
                            (this.hp -= n),
                            (c.gameMgr.allGetDamage += n),
                            (this.unDamageTime = 0),
                            (this.hpProgressBar.progress = this.hp / this.maxHealth),
                            this.showBlood(),
                            this.onLifeChange(),
                            C.equipMgr.emergencyRecover &&
                                C.equipMgr.emergencyRecover.lessHpNum &&
                                this.hp / this.maxHealth <= C.equipMgr.emergencyRecover.lessHpNum / 100 &&
                                Math.random() <= C.equipMgr.emergencyRecover.probability / 100 &&
                                this.recoveryHpByOther(
                                    Math.floor((C.equipMgr.emergencyRecover.recoverNum / 100) * this.maxHealth)
                                ),
                            this.hp <= 0)
                        ) {
                            if (
                                C.equipMgr.fatalInjuryProtect &&
                                C.equipMgr.fatalInjuryProtect.protectTime &&
                                this.fatalInjuryProtectCd <= c.gameMgr.time
                            )
                                return (
                                    this.recoveryHpByOther(Math.floor(e)),
                                    (this.fatalInjuryProtectCd = c.gameMgr.time + C.equipMgr.fatalInjuryProtect.cdTime),
                                    (this.fatalInjuryProtectOverTime =
                                        c.gameMgr.time + C.equipMgr.fatalInjuryProtect.protectTime),
                                    void this.reviveInvincible()
                                );
                            if (
                                C.equipMgr.godBless &&
                                this.godBlessCount < C.equipMgr.godBless.count &&
                                Math.random() <= C.equipMgr.godBless.probability / 100
                            )
                                return (
                                    this.godBlessCount++,
                                    void this.recoveryHpByOther(
                                        Math.floor(this.maxHealth * (C.equipMgr.godBless.recoverNum / 100))
                                    )
                                );
                            if (C.equipMgr.deathAliveTime > 0 && this.deathAliveTime < C.equipMgr.deathAliveTime)
                                return (
                                    this.recoveryHpByOther(Math.floor(this.maxHealth)),
                                    this.deathAliveTime++,
                                    (C.equipMgr.roleAttackAddition += C.equipMgr.reviveGrowth.attackNum),
                                    void (C.equipMgr.roleSpeedAddition += C.equipMgr.reviveGrowth.speedNum)
                                );
                            (c.gameMgr.deathType = t), this.death();
                        }
                    }
                }
            }),
            (t.prototype.reviveInvincible = function () {
                (this.isInvincible = !0),
                    (this.invincibleTime = 0),
                    (this.invincibleNode.active = !0),
                    cc.Tween.stopAllByTarget(this.invincibleNode),
                    cc
                        .tween(this.invincibleNode)
                        .to(0.3, {scale: 1.02})
                        .to(0.3, {scale: 1})
                        .union()
                        .repeatForever()
                        .start();
            }),
            (t.prototype.debugInvincible = function () {
                this.isDebugInvincible
                    ? ((this.isInvincible = !1),
                      (this.isDebugInvincible = !1),
                      (this.invincibleTime = 0),
                      (this.invincibleNode.active = !1),
                      cc.Tween.stopAllByTarget(this.invincibleNode))
                    : ((this.isInvincible = !0),
                      (this.isDebugInvincible = !0),
                      (this.invincibleTime = 0),
                      (this.invincibleNode.active = !0),
                      cc.Tween.stopAllByTarget(this.invincibleNode),
                      cc
                          .tween(this.invincibleNode)
                          .to(0.3, {scale: 1.02})
                          .to(0.3, {scale: 1})
                          .union()
                          .repeatForever()
                          .start());
            }),
            (t.prototype.getDebugInvincible = function () {
                return this.isDebugInvincible;
            }),
            (t.prototype.getMaxHp = function () {
                return this.maxHealth;
            }),
            (t.prototype.damage = function () {
                return this.attack;
            }),
            (t.prototype.update = function (e) {
                var t = this;
                if (!(e > 0.5 || c.gameMgr.getIsPause())) {
                    if (
                        (this.isInvincible &&
                            ((this.invincibleTime += e),
                            this.invincibleTime >= Number(u.JsonMgr.getDefineConstantByName("ReliveDuration") || 2) &&
                                !this.isDebugInvincible &&
                                ((this.isInvincible = !1),
                                (this.invincibleTime = 0),
                                cc.Tween.stopAllByTarget(this.invincibleNode),
                                cc
                                    .tween(this.invincibleNode)
                                    .to(0.15, {scale: 1.2})
                                    .call(function () {
                                        (t.invincibleNode.scale = 1), (t.invincibleNode.active = !1);
                                    })
                                    .start())),
                        C.equipMgr.hasShield &&
                            C.equipMgr.hasShield.noHurtTime &&
                            (E.default.instance().getHasShield() ||
                                ((this.unDamageTime += e),
                                this.unDamageTime > C.equipMgr.hasShield.noHurtTime &&
                                    E.default.instance().loadShield(this.maxHealth))),
                        this._speedType == s.SpeedType.STOP)
                    )
                        return (
                            this.afkTime < 15 ? (this.afkTime += e) : c.gameMgr.gameAFK || (c.gameMgr.gameAFK = !0),
                            "standby" !== this.ske.animation && this.ske.setAnimation(0, "standby", !0),
                            void (this.moveTag = !1)
                        );
                    (this.afkTime = 0), this.moveTag || ((this.moveTag = !0), this.ske.setAnimation(0, "walk", !0));
                    var o = cc.v2();
                    this.node.getPosition(o);
                    var n = this.speed,
                        a = o.add(this.moveDir.mul(n * e * 65));
                    this.moveDir.mul(n).x < 0 ? (this.ske.node.scaleX = -1) : (this.ske.node.scaleX = 1),
                        this.node.setPosition(a),
                        l.UIMgr.loopMap.checkPos();
                }
            }),
            (t.prototype.getSpeed = function () {
                return this.speed;
            }),
            (t.prototype.lateUpdate = function (e) {
                var t = this;
                e > 0.5 ||
                    (f.default.instance().magicNode && f.default.instance().magicNode.setPosition(this.getPos()),
                    f.default.instance().shieldNode && f.default.instance().shieldNode.setPosition(this.getPos()),
                    f.default.instance().knifeNode &&
                        f.default.instance().knifeNode.forEach(function (e) {
                            e.resetPos(t.getPos());
                        }),
                    this.initPointNode(),
                    S.levelMgr.getIsLoopMap()
                        ? l.UIMgr.getRoleCamera().setPosition(this.node.getPosition())
                        : (l.UIMgr.getRoleCamera().y = this.node.y));
            }),
            (t.prototype.getSkillLevel = function (e) {
                return this.skillArr.get(e) || null;
            }),
            (t.prototype.doAttack = function () {
                var e = this;
                this.equips.forEach(function (t) {
                    var o = e.cdDic[t.type];
                    if (
                        (t.type === E.EquipType.kn &&
                            (t.id >= 60001 && t.id <= 60006
                                ? e.resetCdBar(o, t)
                                : e.bulletCount <= 0 && e.resetProgress(o, t)),
                        void 0 === o || o <= 0)
                    ) {
                        if (t.id >= 60001 && t.id <= 60006) {
                            var n = C.equipMgr.sclarCdLess;
                            e.cdDic[t.type] = t.cd * (1 - (e.getCdAdd() + n) / 100);
                        } else e.cdDic[t.type] = t.cd * (1 - e.getCdAdd() / 100);
                        E.default.instance().loadWeapon(t);
                    }
                });
            }),
            (t.prototype.resetCdBar = function (e, t) {
                this.cdProgress.progress = 1 - e / t.cd;
            }),
            (t.prototype.resetProgress = function (e, t) {
                this.isCdWeapon &&
                    (e <= 0
                        ? ((this.cdProgress.node.active = !1),
                          (this.item[0].node.parent.active = !0),
                          this.initItem(),
                          (this.bulletCount = 5))
                        : ((this.cdProgress.node.active = !0),
                          (this.item[0].node.parent.active = !1),
                          (this.cdProgress.progress = 1 - e / t.cd)));
            }),
            (t.prototype.getScaleX = function () {
                return this.ske.node.scaleX;
            }),
            (t.prototype.getEquipAmount = function (e) {
                return e.amount + this.getAmountAdd();
            }),
            (t.prototype.getWorldPosition = function () {
                return this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
            }),
            (t.prototype.addExp = function (e) {
                var t,
                    o = this.skillArr.get(E.SkillType.addExp);
                if (
                    ((t = o ? (o.growth + I.heroMgr.addExpPercent) / 100 + 1 : I.heroMgr.addExpPercent / 100 + 1),
                    (this.nowExp += Math.ceil(t * e)),
                    b.audioMgr.startEffect(T.AudioConst.CURRENCY_DIAMOND),
                    f.default.instance().setLevelAndBar(),
                    this.nowExp >= this.roleLevel.exp)
                ) {
                    var n = y.rarityMgr.generateRarity();
                    0 !== n.length
                        ? (c.gameMgr.setIsPause(!0),
                          l.UIMgr.showView(m.ViewUrl.chooseView, null, n),
                          N.talentAddMgr.upLevelAddLife && this.recoveryHpByOther(0.2 * this.maxHealth))
                        : this.refreshProgress();
                }
            }),
            (t.prototype.refreshProgress = function () {
                (this.nowExp -= this.roleLevel.exp),
                    (this.roleLevel = u.JsonMgr.getChapterLevelExp(this.roleLevel.level + 1)),
                    f.default.instance().setLevelAndBar();
            }),
            (t.prototype.getRoleLevel = function () {
                return this.roleLevel;
            }),
            (t.prototype.getNowExp = function () {
                return this.nowExp;
            }),
            (t.prototype.getDurationAdd = function () {
                var e = this.skillArr.get(E.SkillType.duration);
                return e ? e.duration : 0;
            }),
            (t.prototype.getMightAdd = function () {
                var e = this.skillArr.get(E.SkillType.might);
                return e ? e.might : 0;
            }),
            (t.prototype.getRecoveryAdd = function () {
                var e = this.skillArr.get(E.SkillType.recovery);
                return e ? e.recovery : 0;
            }),
            (t.prototype.getRoleMagnet = function () {
                var e = this.skillArr.get(E.SkillType.magnet),
                    t = e ? e.magnet : 0;
                return Math.ceil(this.heroJson.magnet * (t / 100 + 1));
            }),
            (t.prototype.getRoleArmor = function () {
                var e = this.skillArr.get(E.SkillType.armor),
                    t = e ? e.armor : 0;
                return Math.ceil(this.armor * (t / 100 + 1));
            }),
            (t.prototype.getRoleMoveSpeed = function () {
                var e = this.skillArr.get(E.SkillType.moveSpeed),
                    t = e ? e.movespeed : 0,
                    o =
                        (C.equipMgr.addSpeedPercent +
                            I.heroMgr.addSpeedPercent +
                            this.speedGrowth +
                            this.killBossSpeedUp +
                            C.equipMgr.roleSpeedAddition) /
                            100 +
                        1;
                return Math.ceil(this.heroJson.movespeed * (t / 100 + 1) * o);
            }),
            (t.prototype.getAreaAdd = function () {
                var e = this.skillArr.get(E.SkillType.area);
                return e ? e.area : 0;
            }),
            (t.prototype.getAmountAdd = function () {
                var e = this.skillArr.get(E.SkillType.amount);
                return e ? e.amount : 0;
            }),
            (t.prototype.getSkillArr = function () {
                return this.skillArr;
            }),
            (t.prototype.getEquips = function () {
                return this.equips;
            }),
            (t.prototype.getPos = function () {
                return this.node.getPosition();
            }),
            (t.prototype.getPositionV3 = function () {
                return this.node.position;
            }),
            (t.prototype.getRepel = function () {
                var e = this.skillArr.get(E.SkillType.repel);
                return e ? e.repel / 100 : 0;
            }),
            (t.prototype.getCrit = function () {
                var e = this.skillArr.get(E.SkillType.crit),
                    t = _.heroData.getCrit() + (e ? e.crit : 0) + this.killBossCritUp;
                return 0 !== t && M.CommonUtil.getRangeCloseNum(1, 100) <= t;
            }),
            (t.prototype.bossHit = function () {
                this.ske.node.runAction(cc.repeat(cc.sequence(cc.moveBy(0.032, -5, 0), cc.moveBy(0.032, 5, 0)), 2));
            }),
            (t.prototype.showBlood = function () {
                d.poolMgr.getNodeFromMap(this.blood).getComponent(w.default).init();
            }),
            (t.prototype.getLastPos = function (e) {
                var t = M.CommonUtil.getRangeCloseNum(280, 340),
                    o = Math.sin(e) * t + 90,
                    n = Math.cos(e) * t;
                return cc.v2(this.node.x + n, this.node.y + o);
            }),
            (t.prototype.getSkill = function () {
                var e = "";
                return (
                    this.equips.forEach(function (t) {
                        e += t.name + ";";
                    }),
                    this.skillArr.forEach(function (t) {
                        e += t.name + ";";
                    }),
                    e
                );
            }),
            i([P(cc.ProgressBar)], t.prototype, "hpProgressBar", void 0),
            i([P(cc.Node)], t.prototype, "bulletNode", void 0),
            i([P(sp.Skeleton)], t.prototype, "ske", void 0),
            i([P(cc.SpriteFrame)], t.prototype, "kuT", void 0),
            i([P(cc.Prefab)], t.prototype, "blood", void 0),
            i([P(cc.Node)], t.prototype, "pointNode", void 0),
            i([P(cc.ProgressBar)], t.prototype, "cdProgress", void 0),
            i([P(cc.Sprite)], t.prototype, "item", void 0),
            i([P(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([P(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([P(cc.Animation)], t.prototype, "foot", void 0),
            i([P(cc.Node)], t.prototype, "invincibleNode", void 0),
            i([L], t)
        );
    })(r.default);
o.default = O;
