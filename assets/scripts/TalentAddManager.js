var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.talentAddMgr = o.TalentAddManager = void 0);
var n = e("PlayerData"),
    a = e("JsonManager"),
    i = (function () {
        function e() {
            (this.addLifePercent = 0),
                (this.recoveryAddPercent = 0),
                (this.mightAddPercent = 0),
                (this.addArmorPercent = 0),
                (this.addSpeedPercent = 0),
                (this.critRateAdd = 0),
                (this.cdDown = 0),
                (this.knifeAddLevel = 0),
                (this.addSpeed = 0),
                (this.mightAdd = 0),
                (this.lifeAdd = 0),
                (this.armorAdd = 0),
                (this.meatAdd = 0),
                (this.canChooseSkillInOpen = !1),
                (this.hasShield = !1),
                (this.meatRecoveryPercent = 0),
                (this.killMonsterDropGold = 0),
                (this.killMonsterDropMeat = 0),
                (this.killMonsterDrop = 0),
                (this.upLevelAddLife = 0),
                (this.fiveTimeDamage = 0),
                (this.killMonsterDropWeapon = 0);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.init = function () {
                var e = this,
                    t = n.playData.getTalent(),
                    o = a.JsonMgr.getTalent(),
                    i = n.playData.getRightTalent();
                t.forEach(function (t) {
                    var n = o[t],
                        i = a.JsonMgr.getWeaponSkillById(n.skillid);
                    e.addByType(i);
                }),
                    i.forEach(function (t) {
                        var n = o[t],
                            i = a.JsonMgr.getWeaponSkillById(n.skillid);
                        e.addByType(i);
                    });
            }),
            (e.prototype.addByType = function (e) {
                var t = Number(e.numerical);
                switch (e.type) {
                    case 1:
                        this.addLifePercent += t;
                        break;
                    case 2:
                        this.recoveryAddPercent += t;
                        break;
                    case 3:
                        this.addArmorPercent += t;
                        break;
                    case 4:
                        this.addSpeedPercent += t;
                        break;
                    case 5:
                        this.mightAddPercent += t;
                        break;
                    case 6:
                        this.critRateAdd += t;
                        break;
                    case 12:
                        this.cdDown += t;
                        break;
                    case 18:
                        this.knifeAddLevel += t;
                        break;
                    case 19:
                        this.meatRecoveryPercent += t / 100;
                        break;
                    case 20:
                        break;
                    case 21:
                        this.mightAdd += t;
                        break;
                    case 22:
                        this.lifeAdd += t;
                        break;
                    case 23:
                        this.armorAdd += t;
                        break;
                    case 24:
                        this.meatAdd += t;
                        break;
                    case 25:
                        this.addSpeed += t;
                        break;
                    case 26:
                        this.canChooseSkillInOpen = !0;
                        break;
                    case 27:
                        this.killMonsterDropGold += t;
                        break;
                    case 28:
                        this.killMonsterDropMeat += t;
                        break;
                    case 29:
                        this.killMonsterDrop += t;
                        break;
                    case 30:
                        this.upLevelAddLife += t;
                        break;
                    case 31:
                        this.hasShield = !0;
                        break;
                    case 32:
                        this.fiveTimeDamage += t;
                        break;
                    case 33:
                        this.killMonsterDropWeapon += t;
                }
            }),
            (e._instance = null),
            e
        );
    })();
(o.TalentAddManager = i), (o.talentAddMgr = i.instance());
