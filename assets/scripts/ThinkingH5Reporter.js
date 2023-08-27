var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.ThinkingH5Reporter = void 0);
var n = (function () {
    function e() {
        this.ta = null;
    }
    return (
        (e.prototype.init = function () {
            this.ta = window.ta;
        }),
        (e.prototype.reportEvent = function (e, t) {
            this.ta.track(e, t);
        }),
        (e.prototype.beginTimeEvent = function (e) {
            this.ta.timeEvent(e);
        }),
        (e.prototype.setUserProperty = function (e) {
            this.ta.userSet(e);
        }),
        (e.prototype.setOnceUserProperty = function (e) {
            this.ta.userSetOnce(e);
        }),
        (e.prototype.incUserProperty = function (e) {
            this.ta.userAdd(e);
        }),
        e
    );
})();
o.ThinkingH5Reporter = n;
