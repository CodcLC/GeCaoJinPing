var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.AggregatedReporter = void 0);
var n = (function () {
    function e() {
        this.reporters = [];
    }
    return (
        (e.prototype.setReporters = function (e) {
            this.reporters = e;
        }),
        (e.prototype.init = function () {
            for (var e = 0, t = this.reporters; e < t.length; e++) t[e].init();
        }),
        (e.prototype.reportEvent = function (e, t) {
            for (var o = 0, n = this.reporters; o < n.length; o++) n[o].reportEvent(e, t);
        }),
        (e.prototype.beginTimeEvent = function (e) {
            for (var t = 0, o = this.reporters; t < o.length; t++) o[t].beginTimeEvent(e);
        }),
        (e.prototype.setUserProperty = function (e) {
            for (var t = 0, o = this.reporters; t < o.length; t++) o[t].setUserProperty(e);
        }),
        (e.prototype.setOnceUserProperty = function (e) {
            for (var t = 0, o = this.reporters; t < o.length; t++) o[t].setOnceUserProperty(e);
        }),
        (e.prototype.incUserProperty = function (e) {
            for (var t = 0, o = this.reporters; t < o.length; t++) o[t].incUserProperty(e);
        }),
        e
    );
})();
o.AggregatedReporter = n;
