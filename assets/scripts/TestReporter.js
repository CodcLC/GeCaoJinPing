var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.TestReporter = void 0);
var n = (function () {
    function e() {}
    return (
        (e.prototype.init = function () {}),
        (e.prototype.reportEvent = function (e, t) {
            var o = JSON.stringify(t);
            cc.log("TestReporter.reportEvent() called. eventName=" + e + ";eventData=" + o);
        }),
        (e.prototype.beginTimeEvent = function () {}),
        (e.prototype.setUserProperty = function () {}),
        (e.prototype.setOnceUserProperty = function (e) {
            cc.log("TestReporter.setOnceUserProperty(), properties=" + JSON.stringify(e));
        }),
        (e.prototype.incUserProperty = function (e) {
            cc.log("TestReporter.incUserProperty(), properties=" + JSON.stringify(e));
        }),
        e
    );
})();
o.TestReporter = n;
