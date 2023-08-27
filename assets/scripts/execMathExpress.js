var e = require;
var t = module;
function o(e, t) {
    return 0 === t ? e : o(t, e % t);
}
var n = (function () {
    function e(e, t) {
        if ((void 0 === e && (e = 0), void 0 === t && (t = 1), t < 0 && ((e = -e), (t = -t)), 0 === t))
            throw "分母不能为0";
        var n = o(Math.abs(e), t);
        (this.num = e / n), (this.den = t / n);
    }
    e.create = function (t, o) {
        return (
            void 0 === o && (o = 1),
            t instanceof e
                ? t
                : /(-?\d+)\/(\d+)/.test(t)
                ? new e(parseInt(RegExp.$1), parseInt(RegExp.$2))
                : (/\.(\d+)/.test(t) && ((t *= Math.pow(10, RegExp.$1.length)), (o *= Math.pow(10, RegExp.$1.length))),
                  /\.(\d+)/.test(o) && ((t *= Math.pow(10, RegExp.$1.length)), (o *= Math.pow(10, RegExp.$1.length))),
                  new e(t, o))
        );
    };
    var t = e.prototype;
    return (
        (t.add = function (t) {
            return new e(this.num * t.den + this.den * t.num, this.den * t.den);
        }),
        (t.sub = function (t) {
            return new e(this.num * t.den - this.den * t.num, this.den * t.den);
        }),
        (t.multiply = function (t) {
            return new e(this.num * t.num, this.den * t.den);
        }),
        (t.divide = function (t) {
            return new e(this.num * t.den, this.den * t.num);
        }),
        (t.lessThan = function (e) {
            return this.num * e.den < this.den * e.num;
        }),
        (t.equal = function (e) {
            return this.num * e.den == this.den * e.num;
        }),
        (t.toString = function () {
            return this.num + "/" + this.den;
        }),
        e
    );
})();
t.exports = function (e, t) {
    var o = Object.assign({_0: 0}, t),
        a = {},
        i = 1;
    function r(e, t, r) {
        var s = e + t + r;
        if (a[s]) return a[s];
        var c = (a[s] = "_" + i++),
            l = n.create(o[e]),
            p = n.create(o[r]);
        return (
            "*" === t
                ? (o[c] = l.multiply(p))
                : "/" === t
                ? (o[c] = l.divide(p))
                : "+" === t
                ? (o[c] = l.add(p))
                : "-" === t && (o[c] = l.sub(p)),
            c
        );
    }
    return (
        (e = (e = e.replace(/ /g, "")).replace(/(^|[(*+/-])(\d+\.\d+|\d+)/g, function (e, t, r) {
            if (a[r]) return t + a[r];
            var s = (a[r] = "_" + i++);
            return (o[s] = n.create(r)), t + s;
        })),
        o[
            (function e(t) {
                if (
                    (/\(([^\(]+?)\)/.test(t) &&
                        (t = t.replace(/\(([^\(]+?)\)/g, function (t, o) {
                            return e(o);
                        })),
                    (t = t.replace(/([*/+]|^)-(\w+)/g, function (e, t, o) {
                        return r("_0", "-", o);
                    })),
                    /(^\w+$)/.test(t))
                )
                    return RegExp.$1;
                for (
                    var o = ["*", "/", "+", "-"],
                        n = function (e) {
                            for (var n = o[e], a = new RegExp("(\\w+)[" + n + "](\\w+)"); a.test(t); )
                                t = t.replace(a, function (e, t, o) {
                                    return r(t, n, o);
                                });
                        },
                        a = 0;
                    a < o.length;
                    a++
                )
                    n(a);
                return /(^\w+$)/.test(t) ? RegExp.$1 : e(t);
            })(e)
        ]
    );
};
