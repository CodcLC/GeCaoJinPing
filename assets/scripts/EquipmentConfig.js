var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.EquipmentConfig = void 0);
var n = e("JsonManager"),
    a = (function () {
        function e() {
            this.equipment = null;
        }
        return (
            (e.prototype.init = function (e) {
                this.initEquipment(e);
            }),
            (e.prototype.initEquipment = function (e) {
                var t = e,
                    o = Number(t % 100),
                    a = t - (o - 1),
                    i = this.cloneObj(n.JsonMgr.getWeaponById(a));
                (i.id = t), (i.level = o);
                var r = Number(i.numerical.split(",")[1]) + i.numericalup * (o - 1);
                (i.numerical = i.numerical.split(",")[0] + "," + r), -1 != i.nextid && (i.nextid = i.nextid + (o - 1));
                var s = i.worth.split(","),
                    c = n.JsonMgr.getWeaponLossById(o);
                (i.worth = s[0] + "|" + c.gold + "," + s[1] + "|" + c.blueprint), (this.equipment = i);
            }),
            (e.prototype.cloneObj = function (e) {
                if ("object" != typeof e) return e;
                var t = e.constructor === Array ? [] : {};
                for (var o in e) t[o] = "object" == typeof e[o] ? this.cloneObj(e[o]) : e[o];
                return t;
            }),
            (e.prototype.getEquipment = function () {
                return this.equipment;
            }),
            (e.prototype.getMight = function () {
                var e = this.equipment.numerical.split(",");
                return "1" == e[0] ? Number(e[1]) : 0;
            }),
            (e.prototype.getHp = function () {
                var e = this.equipment.numerical.split(",");
                return "2" == e[0] ? Number(e[1]) : 0;
            }),
            (e.prototype.getAddProperty = function () {
                var e = this.equipment.numerical.split(",");
                return Number(e[1]);
            }),
            (e.prototype.getDressPos = function () {
                return this.equipment.type;
            }),
            (e.prototype.getLevel = function () {
                return this.equipment.level;
            }),
            (e.prototype.getMaxLevel = function () {
                return this.equipment.levelmax;
            }),
            (e.prototype.isLevelMax = function () {
                return this.equipment.level === this.equipment.levelmax;
            }),
            (e.prototype.getHpGrow = function () {}),
            (e.prototype.getMightGrow = function () {}),
            (e.prototype.getUpLevelItems = function () {}),
            (e.prototype.getIndex = function () {
                return this.equipment.type - 1;
            }),
            (e.prototype.getType = function () {
                return this.equipment.type;
            }),
            (e.prototype.getWorth = function () {
                return this.equipment.worth;
            }),
            (e.prototype.getNumAddition = function () {
                return this.equipment.numerical;
            }),
            (e.prototype.getDescribe = function () {
                return this.equipment.descid;
            }),
            (e.prototype.getName = function () {
                return this.equipment.nameid;
            }),
            (e.prototype.getGrade = function () {
                return this.equipment.grade;
            }),
            (e.prototype.getId = function () {
                return this.equipment.id;
            }),
            (e.prototype.getEquipIcon = function () {
                return this.equipment.icon;
            }),
            (e.prototype.getNextId = function () {
                return this.equipment.nextid;
            }),
            (e.prototype.getGradeUpId = function () {
                return this.equipment.gradeup.split("|")[0];
            }),
            (e.prototype.getGradeUpNum = function () {
                return this.equipment.gradeup.split("|")[1];
            }),
            (e.prototype.getQuality = function () {
                return this.equipment.extraid.split(",");
            }),
            (e.prototype.getQualityIndex = function () {
                return this.equipment.advanced;
            }),
            (e.prototype.getIsSSR = function () {
                return 1 == this.equipment.specialtype;
            }),
            e
        );
    })();
o.EquipmentConfig = a;
