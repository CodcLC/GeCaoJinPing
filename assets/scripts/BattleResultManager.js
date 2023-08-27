var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.btResMgr = o.BattleResultManager = void 0);
var n = e("UIManager"),
    a = e("ViewUrl"),
    i = e("GameManager"),
    r = e("CdTimerManager"),
    s = e("JsonManager"),
    c = e("LevelManager"),
    l = e("PlayerData"),
    p = e("WxManager"),
    u = (function () {
        function e() {
            this.isNewScore = !1;
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.getBestScore = function (e, t) {
                this.isNewScore = !1;
                var o = t,
                    n = l.playData.getPlayerScore()[e];
                return n && n >= t ? (o = n) : (this.isNewScore = !0), o;
            }),
            (e.prototype.getLevelScore = function (e) {
                return l.playData.getPlayerScore()[e] || null;
            }),
            (e.prototype.isRenewal = function () {
                return this.isNewScore;
            }),
            (e.prototype.getEarnCoin = function () {}),
            (e.prototype.saveBestScore = function (e, t) {
                var o = l.playData.getPlayerScore(),
                    n = o[e];
                n ? t > n && (o[e] = t) : (o[e] = t), l.playData.savePlayerScore(o);
            }),
            (e.prototype.showResultView = function (e) {
                n.UIMgr.showView(a.ViewUrl.gameEndView, null, e);
                var t = c.levelMgr.getLevelJson().id >= Number(s.JsonMgr.getDefineConstantByName("InAdsLevel")),
                    o = i.gameMgr.time >= Number(s.JsonMgr.getDefineConstantByName("InAdsLevelTime")),
                    l = r.CdTimerMgr.judgeCanInterstitialAd();
                t && o && l && p.wxMgr.showInterstitialAd({AdsType: "FinishInAd"});
            }),
            (e.prototype.getLevelUseTime = function () {
                return i.gameMgr.getLabelTimeNum();
            }),
            (e._instance = null),
            e
        );
    })();
(o.BattleResultManager = u), (o.btResMgr = u.instance());
