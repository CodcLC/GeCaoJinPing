var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.MonsterSkillConfig = void 0);
var n = (function () {
    function e() {
        (this.json = null), (this.allValues = []);
    }
    return (
        (e.prototype.init = function (e) {
            var t = this;
            (this.json = e),
                this.json.svalue.split(";").forEach(function (e) {
                    t.allValues.push(Number(e));
                });
        }),
        (e.prototype.getJson = function () {
            return this.json;
        }),
        (e.prototype.getSkillCd = function () {
            return this.json.icd;
        }),
        (e.prototype.getSkillValue = function () {
            return this.json.svalue.split(";");
        }),
        (e.prototype.getSkillId = function () {
            return this.json.id;
        }),
        (e.prototype.getSkillUrl = function () {
            return this.json.skillicon;
        }),
        (e.prototype.getBulletDamage = function () {
            return this.getIsBossBullet() ? this.allValues[3] : this.allValues[0];
        }),
        (e.prototype.getIsBossBullet = function () {
            return 3004 == this.json.id;
        }),
        (e.prototype.getBulletCount = function () {
            return this.getIsBossBullet() ? this.allValues[4] : this.allValues[1];
        }),
        (e.prototype.getBossBulletCount = function () {
            return this.allValues[0];
        }),
        (e.prototype.getBulletSpeed = function () {
            return this.getIsBossBullet() ? this.allValues[1] : this.allValues[2];
        }),
        (e.prototype.getBulletMaxDuration = function () {
            return this.getIsBossBullet() ? this.allValues[2] : this.allValues[3];
        }),
        (e.prototype.getGasDuration = function () {
            return this.allValues[2];
        }),
        (e.prototype.getGasCd = function () {
            return this.allValues[0];
        }),
        (e.prototype.getGasDamage = function () {
            return this.allValues[1];
        }),
        (e.prototype.getShakeArea = function () {
            return this.allValues[3];
        }),
        (e.prototype.getShakeAttack = function () {
            return this.allValues[4];
        }),
        e
    );
})();
o.MonsterSkillConfig = n;
