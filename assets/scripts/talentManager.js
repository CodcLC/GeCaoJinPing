var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.talentMgr = o.talentManager = void 0);
var n = e("JsonManager"),
    a = e("PlayerData"),
    i = (function () {
        function e() {
            (this.talentData = []), (this.rightData = new Map()), (this.json = null);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.getJson = function () {
                return this.json || (this.json = n.JsonMgr.getTalent()), this.json;
            }),
            (e.prototype.initData = function () {
                var e = this;
                if (!(this.rightData.size > 0)) {
                    var t = this.getJson();
                    Object.keys(t).map(function (o) {
                        var n = t[o];
                        1 === n.type ? e.talentData.push(n) : e.rightData.set(n.openlevel, n);
                    }),
                        this.talentData.reverse();
                }
            }),
            (e.prototype.getTalentPercent = function (e) {
                for (var t = 0; t < this.talentData.length; t++)
                    if (this.talentData[t].id === e) {
                        var o = (this.talentData.length - t) / this.talentData.length;
                        return t < 3 && (o = 1), o;
                    }
            }),
            (e.prototype.getLen = function () {
                return this.talentData.length / 4;
            }),
            (e.prototype.isLastTree = function (e) {
                for (var t = !1, o = 0; o < this.talentData.length; o++)
                    if (this.talentData[o].id === e) {
                        o < 3 && (t = !0);
                        break;
                    }
                return t;
            }),
            (e.prototype.getPropertyData = function (e) {
                var t = [];
                if (this.talentData) for (var o = 4 * e, n = o + 4, a = o; a < n; a++) t.push(this.talentData[a]);
                return t;
            }),
            (e.prototype.getTalentSkillData = function (e) {
                return this.rightData.get(e);
            }),
            (e.prototype.getTalentSkillById = function (e) {
                return this.getJson()[e];
            }),
            (e.prototype.getPercent = function () {
                return (
                    (a.playData.getTalentLen() - 4 <= 0 ? 0 : a.playData.getTalentLen() - 4) / this.talentData.length
                );
            }),
            (e.prototype.getGrowthData = function () {
                var e = a.playData.getTalent(),
                    t = {};
                return (
                    e.forEach(function (e) {
                        if ("0" !== e && "1" === n.JsonMgr.getTalent()[e].type) {
                            var o = n.JsonMgr.getTalent()[e].skillid,
                                a = n.JsonMgr.getWeaponSkillById(o).type;
                            t[a]
                                ? (t[a] += Number(n.JsonMgr.getWeaponSkillById(o).numerical))
                                : (t[a] = Number(n.JsonMgr.getWeaponSkillById(o).numerical));
                        }
                    }),
                    t
                );
            }),
            (e.prototype.getTalentAttribute = function (e) {
                var t = o.talentMgr.getGrowthData();
                return t[e] ? t[e] : 0;
            }),
            (e.prototype.getLeftTalent = function () {
                var e = [];
                return (
                    a.playData.getTalent().forEach(function (t) {
                        t <= "2000000" && e.push(t);
                    }),
                    e
                );
            }),
            (e.prototype.getRightTalent = function () {
                var e = [];
                return (
                    a.playData.getTalent().forEach(function (t) {
                        t >= "2000000" && e.push(t);
                    }),
                    e
                );
            }),
            (e._instance = null),
            e
        );
    })();
(o.talentManager = i), (o.talentMgr = i.instance());
