var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.TimeUtil = void 0);
var n = (function () {
    function e() {}
    return (
        (e.format = function (e, t) {
            void 0 === t && (t = "yyyy-MM-dd hh:mm:ss");
            var o = null;
            e instanceof Date ? (o = e) : "number" == typeof e && (o = new Date(e));
            var n = {
                "M+": o.getMonth() + 1,
                "d+": o.getDate(),
                "h+": o.getHours(),
                "m+": o.getMinutes(),
                "s+": o.getSeconds(),
                "q+": Math.floor((o.getMonth() + 3) / 3),
                S: o.getMilliseconds()
            };
            for (var a in (/(y+)/.test(t) &&
                (t = t.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length))),
            n))
                new RegExp("(" + a + ")").test(t) &&
                    (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[a] : ("00" + n[a]).substr(("" + n[a]).length)));
            return t;
        }),
        (e.getLeftTimeStr = function (t) {
            var o = t / e.HOUR,
                n = t % e.HOUR,
                a = n / e.MINUTE,
                i = (n %= e.MINUTE) / e.SECOND;
            return this.padding(Math.floor(o)) + ":" + this.padding(Math.floor(a)) + ":" + this.padding(Math.floor(i));
        }),
        (e.padding = function (e) {
            return (e < 10 ? "0" : "") + e;
        }),
        (e.getBeforeTimeStr = function (t) {
            var o = t / e.DAY;
            if (o >= 1) return Math.floor(o) + "天前";
            var n = t % e.DAY,
                a = n / e.HOUR;
            if (a >= 1) return Math.floor(a) + "小时前";
            var i = (n %= e.HOUR) / e.MINUTE;
            if (i >= 1) return Math.floor(i) + "分钟前";
            var r = (n %= e.MINUTE) / e.SECOND;
            return r >= 1 ? Math.floor(r) + "秒前" : "刚刚";
        }),
        (e.getSendTimeStr = function (t) {
            var o = t / e.HOUR,
                n = t % e.HOUR,
                a = n / e.MINUTE,
                i = (n %= e.MINUTE) / e.SECOND;
            return this.padding(Math.floor(o)) + this.padding(Math.floor(a)) + this.padding(Math.floor(i));
        }),
        (e.getTimeByMillisecond = function (e) {
            var t = e % 36e5;
            return {h: Math.floor(e / 36e5), m: Math.floor(t / 6e4), s: Math.floor((t % 6e4) / 1e3)};
        }),
        (e.getTimeBySecond = function (e) {
            var t = e % 3600;
            return {h: Math.floor(e / 3600), m: Math.floor(t / 60), s: Math.floor(t % 60)};
        }),
        (e.getMoudleBySecond = function (e) {
            return {m: Math.floor(e / 60), s: e % 60};
        }),
        (e.getTimeSecondStr = function (e) {
            var t = this.getTimeBySecond(e);
            return this.padding(t.m) + ":" + this.padding(t.s);
        }),
        (e.getTimeHouseStr = function (e) {
            var t = this.getTimeByMillisecond(e),
                o = this.padding(t.h),
                n = this.padding(t.m),
                a = this.padding(t.s);
            return 0 == t.h ? n + ":" + a : o + ":" + n + ":" + a;
        }),
        (e.getTimeHouseStrBySecond = function (e) {
            var t = this.getTimeBySecond(e),
                o = this.padding(t.h),
                n = this.padding(t.m),
                a = this.padding(t.s);
            return 0 == t.h ? n + ":" + a : o + ":" + n + ":" + a;
        }),
        (e.getWareTime = function (t) {
            var o = t / e.HOUR,
                n = (t % e.HOUR) / e.MINUTE;
            return this.padding(Math.floor(o)) + ":" + this.padding(Math.floor(n));
        }),
        (e.getDataYear = function (e) {
            return new Date(e).getFullYear();
        }),
        (e.getDataMonth = function (e) {
            return new Date(e).getMonth() + 1;
        }),
        (e.getDataDate = function (e) {
            return new Date(e).getDate();
        }),
        (e.getDataHour = function () {
            return new Date().getHours();
        }),
        (e.getDataYearStr = function (e) {
            var t = new Date(e),
                o = t.getFullYear(),
                n = t.getMonth() + 1,
                a = t.getDate();
            return cc.js.formatStr("%s/%s/%s", o, n, a);
        }),
        (e.getDateHour = function (e) {
            var t = new Date(e);
            return this.padding(t.getHours()) + ":" + this.padding(t.getMinutes());
        }),
        (e.getHourAndMinites = function () {
            var e = new Date();
            return this.padding(e.getHours()) + ":" + this.padding(e.getMinutes());
        }),
        (e.secondMillisecond = function (e) {
            return 1e3 * e;
        }),
        (e.getDataTime = function (e, t) {
            void 0 === t && (t = !0);
            var o = new Date(e),
                n = o.getFullYear(),
                a = o.getMonth() + 1,
                i = o.getDate(),
                r = o.getHours(),
                s = this.padding(o.getMinutes());
            return t
                ? cc.js.formatStr("%s/%s/%s <br/>%s:%s", n, a, i, r, s)
                : cc.js.formatStr("%s/%s/%s %s:%s", n, a, i, r, s);
        }),
        (e.timeDescCalculate = function (e) {
            var t = "",
                o = e / 3600 / 24,
                n = 0;
            return (
                o >= 1
                    ? ((t += Math.floor(o) + "天"),
                      (n = (e -= 86400 * (o = Math.floor(o))) / 3600) >= 1 && (t += Math.floor(n) + "小时"))
                    : (t += (n = e / 3600) >= 1 ? Math.floor(n) + "小时" : Math.floor(e / 60) + "分钟"),
                t + "后消失"
            );
        }),
        (e.timeCalculateHAndMin = function (t) {
            var o;
            o = Math.floor(t / 3600);
            var n = Math.floor((t - 3600 * o) / 60);
            return e.padding(o) + "h" + e.padding(n) + "min";
        }),
        (e.timeConvertToDay = function (e) {
            var t = e / 1e3 / 3600 / 24;
            return "" + (Math.floor(t) + "天");
        }),
        (e.timeDescCalculateWithSecond = function (e) {
            var t = "活动结束倒计时：",
                o = Math.floor(e / 3600);
            return (t += o + "时"), (e -= 3600 * o), (t += Math.floor(e / 60) + "分") + (Math.floor(e % 60) + "秒");
        }),
        (e.timeDescInDayCalculateWithSecond = function (e) {
            var t = "",
                o = Math.floor(e / 24 / 3600);
            (e -= 86400 * o), (t += o + "天");
            var n = Math.floor(e / 3600);
            return (t += n + "时"), (e -= 3600 * n), (t += Math.floor(e / 60) + "分") + (Math.floor(e % 60) + "秒");
        }),
        (e.buyGoodsTime = function (e) {
            var t = e / 1e3,
                o = "",
                n = (Math.floor(t / 24 / 3600), Math.floor(t / 3600));
            0 != n && (o += n + "时"), (t -= 3600 * n);
            var a = Math.floor(t / 60);
            return 0 != a && (o += a + "分"), o + (Math.floor(t % 60) + "秒");
        }),
        (e.changeBuyGoodsTime = function (e) {
            var t = e / 1e3,
                o = "",
                n = t / 24 / 3600;
            if ((console.log(n), n > 1)) return o + (Math.ceil(n) + "天");
            var a = t / 3600;
            if ((console.log(a), a >= 1)) return o + (Math.ceil(a) + "时");
            var i = t / 60;
            return i > 0 ? (o += i < 59 ? Math.ceil(i) + "分" : "1小时") : o;
        }),
        (e.getTimeStamp = function (e) {
            var t = e.replace(/-/g, "/");
            return new Date(t).getTime();
        }),
        (e.timeConvertToDDHHMMSS = function (t) {
            var o = "",
                n = Math.floor(t / e.DAY),
                a = t % e.DAY,
                i = Math.floor(a / e.HOUR),
                r = a % e.HOUR,
                s = Math.floor(r / e.MINUTE),
                c = r % e.MINUTE,
                l = Math.floor(c / e.SECOND);
            return (
                n > 0 && (o += n + "天"),
                (o += (i >= 10 ? i.toString() : "0" + i) + ":"),
                (o += (s >= 10 ? s.toString() : "0" + s) + ":") + "" + (l >= 10 ? l.toString() : "0" + l)
            );
        }),
        (e.timeConvertToDDHH = function (t) {
            var o = "",
                n = Math.floor(t / e.DAY),
                a = t % e.DAY;
            return n > 0 && (o += n + "天"), o + (Math.floor(a / e.HOUR) + "小时");
        }),
        (e.isSameUtcDay = function (t, o) {
            var n = new Date(t),
                a = new Date(o);
            return e.isSameUtcDate(n, a);
        }),
        (e.isSameUtcDate = function (e, t) {
            return (
                e.getDate() == t.getDate() &&
                e.getMonth() == t.getMonth() &&
                e.getFullYear() == t.getFullYear() &&
                e.getDay() === t.getDay()
            );
        }),
        (e.DAY = 864e5),
        (e.HOUR = 36e5),
        (e.MINUTE = 6e4),
        (e.SECOND = 1e3),
        e
    );
})();
o.TimeUtil = n;
