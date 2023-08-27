var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.challengeMgr = o.ChallengeManager = void 0);
var n = e("JsonManager"),
    a = e("PlayerData"),
    i = (function () {
        function e() {}
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.getMapJson = function () {
                var e = n.JsonMgr.getChallenge(),
                    t = [];
                if (e) for (var o in e) e[o] && e[o].id && (e[o].id % 3 == 1 && t.push(null), t.push(e[o]));
                return t;
            }),
            (e.prototype.getLevelName = function (e) {
                return "{@" + n.JsonMgr.getLevelJson(e + 1).levelname + "}";
            }),
            (e.prototype.getPassData = function () {
                return a.playData.getChallengePass();
            }),
            (e.prototype.addPassData = function (e) {
                a.playData.addChallengePass(e);
            }),
            (e.prototype.getLevel = function () {
                return a.playData.getLevel();
            }),
            (e.prototype.getSpeedAddition = function () {
                if (!a.playData.getChallengeData()) return 1;
                var e = a.playData.getChallengeData().split("-"),
                    t = 3 * (Number(e[0]) - 1) + Number(e[1]);
                return 1 + n.JsonMgr.getMapById(t).speedaddition / 1e4;
            }),
            (e.prototype.getBoxProbability = function () {
                if (!a.playData.getChallengeData()) return 1;
                var e = a.playData.getChallengeData().split("-"),
                    t = 3 * (Number(e[0]) - 1) + Number(e[1]);
                return n.JsonMgr.getMapById(t).boxprobability / 1e4;
            }),
            (e.prototype.getHpAddition = function () {
                if (!a.playData.getChallengeData()) return 1;
                var e = a.playData.getChallengeData().split("-"),
                    t = 3 * (Number(e[0]) - 1) + Number(e[1]);
                return 1 + n.JsonMgr.getMapById(t).hpaddition / 1e4;
            }),
            (e.prototype.getAttackAddition = function () {
                if (!a.playData.getChallengeData()) return 1;
                var e = a.playData.getChallengeData().split("-"),
                    t = 3 * (Number(e[0]) - 1) + Number(e[1]);
                return 1 + n.JsonMgr.getMapById(t).attackaddition / 1e4;
            }),
            (e.prototype.getIsDoubleBoos = function () {
                if (!a.playData.getChallengeData()) return 1;
                var e = a.playData.getChallengeData().split("-"),
                    t = 3 * (Number(e[0]) - 1) + Number(e[1]);
                return n.JsonMgr.getMapById(t).isdouble;
            }),
            (e.prototype.getIsReceive = function (e) {
                var t = !1;
                return (
                    o.challengeMgr.getPassData().forEach(function (o) {
                        o.level === e && (t = o.receive);
                    }),
                    t
                );
            }),
            (e.prototype.addPropeller = function (e) {
                a.playData.addPropeller(e);
            }),
            (e._instance = null),
            e
        );
    })();
(o.ChallengeManager = i), (o.challengeMgr = i.instance());
