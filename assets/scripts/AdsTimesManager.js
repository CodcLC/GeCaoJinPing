var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.AdsTimesMgr = o.AdsTimesType = void 0);
var n = e("LocalStorage"),
    a = e("LocalConst");
(function (e) {
    (e.REWARDVIDEO = "rewardVideo"), (e.INTERSTITIAL = "Interstitial"), (e.BANNER = "banner");
})(o.AdsTimesType || (o.AdsTimesType = {}));
var i = (function () {
    function e() {
        this._adsTimesData = null;
    }
    return (
        (e.instance = function () {
            return e._instance || (e._instance = new e()), e._instance;
        }),
        (e.prototype.init = function () {
            var e = n.LocalStorage.getData(a.LocalConst.WATCH_ADS_DATA);
            e ? (this._adsTimesData = e) : ((this._adsTimesData = {}), this._saveAdsTimesData());
        }),
        (e.prototype._saveAdsTimesData = function () {
            n.LocalStorage.setData(a.LocalConst.WATCH_ADS_DATA, this._adsTimesData);
        }),
        (e.prototype.AddAdsTimes = function (e, t) {
            this._adsTimesData.hasOwnProperty(e) ? (this._adsTimesData[e] += t) : (this._adsTimesData[e] = t),
                this._saveAdsTimesData(),
                console.log("adsType: " + e + ", num: " + this._adsTimesData[e]);
        }),
        (e.prototype.getAdsTimes = function (e) {
            return this._adsTimesData.hasOwnProperty(e) ? this._adsTimesData[e] : 0;
        }),
        (e._instance = null),
        e
    );
})();
o.AdsTimesMgr = i.instance();
