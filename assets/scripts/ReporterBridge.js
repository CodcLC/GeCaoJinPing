var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.ReporterBridge = void 0);
var n = e("AggregatedReporter"),
    a = e("TestReporter"),
    i = e("ThinkingH5Reporter"),
    r = e("WxManager"),
    s = (function () {
        function e() {}
        return (
            (e.initTA = function () {
                // var e = new ThinkingAnalyticsAPI({
                //     appId: "bb2cf89074004128a3982c1be3079393",
                //     serverUrl: "https://rtsyx.higgsyx.com",
                //     send_method: "ajax",
                //     showLog: !0,
                //     autoTrack: {appShow: !0, appHide: !0}
                // });
                // (window.ta = e), e.setSuperProperties({wxproject: "by"}), e.userSetOnce({channel: "by_wx"}), e.init();
            }),
            (e.init = function () {
                // if ((e.initTA(), null == this.sReporter))
                //     if ((cc.sys.platform, r.wxMgr.wx)) {
                //         var t = new n.AggregatedReporter();
                //         t.setReporters([new i.ThinkingH5Reporter()]), (this.sReporter = t);
                //     } else this.sReporter = new a.TestReporter();
                // this.sReporter && this.sReporter.init();
            }),
            (e.reportEvent = function (e, t) {
                // this.sReporter.reportEvent(e, t);
            }),
            (e.setUserProperty = function (e) {
                // this.sReporter.setUserProperty(e);
            }),
            (e.setOnceUserProperty = function (e) {
                // this.sReporter.setOnceUserProperty(e);
            }),
            (e.incUserProperty = function (e) {
                // this.sReporter.incUserProperty(e);
            }),
            (e.beginEventTime = function (e) {
                // this.sReporter.beginTimeEvent(e);
            }),
            (e.sReporter = null),
            e
        );
    })();
o.ReporterBridge = s;
