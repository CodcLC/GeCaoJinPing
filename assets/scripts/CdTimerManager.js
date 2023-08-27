var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.CdTimerMgr = void 0);
var n = e("JsonManager"),
    a = (function () {
        function e() {
            (this._adLevelUpTimer = 0), (this._interstitialAdCdTimer = 0);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.init = function () {
                (this._adLevelUpTimer = 0), (this._interstitialAdCdTimer = 0);
            }),
            (e.prototype.setAdLevelUpTimer = function (e) {
                this._adLevelUpTimer = e;
            }),
            (e.prototype.judgeCanAdLevelUp = function () {
                var e = n.JsonMgr.getDefineConstantByName("SkillUpCD");
                return Math.floor((Date.now() - this._adLevelUpTimer) / 1e3) >= Number(e);
            }),
            (e.prototype.setInterstitialAdCdTimer = function (e) {
                this._interstitialAdCdTimer = e;
            }),
            (e.prototype.judgeCanInterstitialAd = function () {
                var e = n.JsonMgr.getDefineConstantByName("InAdsCD");
                return Math.floor((Date.now() - this._interstitialAdCdTimer) / 1e3) >= Number(e);
            }),
            (e._instance = null),
            e
        );
    })();
o.CdTimerMgr = a.instance();
