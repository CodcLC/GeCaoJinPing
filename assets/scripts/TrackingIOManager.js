var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.TrackingIOMgr = void 0);
var n = (function () {
    function e() {
        (this.TKIO = null), (this.startTime = -1), (this.watchNum = 0);
    }
    return (
        (e.instance = function () {
            return e._instance || (e._instance = new e()), e._instance;
        }),
        (e.prototype.init = function () {
            // this.TKIO = window.TrackingIO;
            // var e = aaa.LocalStorage.getData("by_hotCloudStartTime");
            // e
            //     ? (this.startTime = Number(e))
            //     : ((this.startTime = new Date().getTime()),
            //       aaa.LocalStorage.setData("by_hotCloudStartTime", this.startTime));
            // var t = aaa.LocalStorage.getData("by_hotCloudWatchNum");
            // t
            //     ? (this.watchNum = Number(t))
            //     : ((this.watchNum = 0), aaa.LocalStorage.setData("by_hotCloudWatchNum", this.watchNum));
        }),
        (e.prototype.addWatchNum = function () {
            // this.watchNum++, aaa.LocalStorage.setData("by_hotCloudWatchNum", this.watchNum);
        }),
        (e.prototype.reportEvent = function () {
            // if (Date.now() <= this.startTime + 864e5) {
            //     var e = this.watchNum;
            //     e > 30 && (e = 30);
            //     var t = "event_" + e.toString(),
            //         o = {};
            //     (o.customParams_1 = "RV" + e.toString()), this.TKIO.event(t, o);
            // }
        }),
        (e._instance = null),
        e
    );
})();
o.TrackingIOMgr = n.instance();
