var e = require;
var t = module;

!(function (e) {
    var o, n;
    void 0 === e.btoa &&
        (e.btoa =
            ((o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")),
            function (e) {
                var t, n, a, i, r, s, c;
                for (
                    n = a = 0, i = e.length, s = ((i -= r = i % 3) / 3) << 2, r > 0 && (s += 4), t = new Array(s);
                    n < i;

                )
                    (c = (e.charCodeAt(n++) << 16) | (e.charCodeAt(n++) << 8) | e.charCodeAt(n++)),
                        (t[a++] = o[c >> 18] + o[(c >> 12) & 63] + o[(c >> 6) & 63] + o[63 & c]);
                return (
                    1 == r
                        ? ((c = e.charCodeAt(n++)), (t[a++] = o[c >> 2] + o[(3 & c) << 4] + "=="))
                        : 2 == r &&
                          ((c = (e.charCodeAt(n++) << 8) | e.charCodeAt(n++)),
                          (t[a++] = o[c >> 10] + o[(c >> 4) & 63] + o[(15 & c) << 2] + "=")),
                    t.join("")
                );
            })),
        void 0 === e.atob &&
            (e.atob =
                ((n = [
                    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53,
                    54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30,
                    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1,
                    -1
                ]),
                function (e) {
                    var t, o, a, i, r, s, c, l, p, u;
                    if ((c = e.length) % 4 != 0) return "";
                    if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(e)) return "";
                    for (
                        p = c,
                            (l = "=" == e.charAt(c - 2) ? 1 : "=" == e.charAt(c - 1) ? 2 : 0) > 0 && (p -= 4),
                            p = 3 * (p >> 2) + l,
                            u = new Array(p),
                            r = s = 0;
                        r < c &&
                        -1 != (t = n[e.charCodeAt(r++)]) &&
                        -1 != (o = n[e.charCodeAt(r++)]) &&
                        ((u[s++] = String.fromCharCode((t << 2) | ((48 & o) >> 4))),
                        -1 != (a = n[e.charCodeAt(r++)])) &&
                        ((u[s++] = String.fromCharCode(((15 & o) << 4) | ((60 & a) >> 2))),
                        -1 != (i = n[e.charCodeAt(r++)]));

                    )
                        u[s++] = String.fromCharCode(((3 & a) << 6) | i);
                    return u.join("");
                }));
    var a = 2654435769;
    function i(e, t) {
        var o = e.length,
            n = o << 2;
        if (t) {
            var a = e[o - 1];
            if (a < (n -= 4) - 3 || a > n) return null;
            n = a;
        }
        for (var i = 0; i < o; i++)
            e[i] = String.fromCharCode(255 & e[i], (e[i] >>> 8) & 255, (e[i] >>> 16) & 255, (e[i] >>> 24) & 255);
        var r = e.join("");
        return t ? r.substring(0, n) : r;
    }
    function r(e, t) {
        var o,
            n = e.length,
            a = n >> 2;
        0 != (3 & n) && ++a, t ? ((o = new Array(a + 1))[a] = n) : (o = new Array(a));
        for (var i = 0; i < n; ++i) o[i >> 2] |= e.charCodeAt(i) << ((3 & i) << 3);
        return o;
    }
    function s(e) {
        return 4294967295 & e;
    }
    function c(e, t, o, n, a, i) {
        return (((o >>> 5) ^ (t << 2)) + ((t >>> 3) ^ (o << 4))) ^ ((e ^ t) + (i[(3 & n) ^ a] ^ o));
    }
    function l(e) {
        return e.length < 4 && (e.length = 4), e;
    }
    function p(e, t) {
        var o,
            n,
            i,
            r,
            l,
            p,
            u = e.length,
            d = u - 1;
        for (n = e[d], i = 0, p = 0 | Math.floor(6 + 52 / u); p > 0; --p) {
            for (r = ((i = s(i + a)) >>> 2) & 3, l = 0; l < d; ++l)
                (o = e[l + 1]), (n = e[l] = s(e[l] + c(i, o, n, l, r, t)));
            (o = e[0]), (n = e[d] = s(e[d] + c(i, o, n, d, r, t)));
        }
        return e;
    }
    function u(e, t) {
        var o,
            n,
            i,
            r,
            l,
            p = e.length,
            u = p - 1;
        for (o = e[0], i = s(Math.floor(6 + 52 / p) * a); 0 !== i; i = s(i - a)) {
            for (r = (i >>> 2) & 3, l = u; l > 0; --l) (n = e[l - 1]), (o = e[l] = s(e[l] - c(i, o, n, l, r, t)));
            (n = e[u]), (o = e[0] = s(e[0] - c(i, o, n, 0, r, t)));
        }
        return e;
    }
    function d(e) {
        if (/^[\x00-\x7f]*$/.test(e)) return e;
        for (var t = [], o = e.length, n = 0, a = 0; n < o; ++n, ++a) {
            var i = e.charCodeAt(n);
            if (i < 128) t[a] = e.charAt(n);
            else if (i < 2048) t[a] = String.fromCharCode(192 | (i >> 6), 128 | (63 & i));
            else {
                if (!(i < 55296 || i > 57343)) {
                    if (n + 1 < o) {
                        var r = e.charCodeAt(n + 1);
                        if (i < 56320 && 56320 <= r && r <= 57343) {
                            var s = 65536 + (((1023 & i) << 10) | (1023 & r));
                            (t[a] = String.fromCharCode(
                                240 | ((s >> 18) & 63),
                                128 | ((s >> 12) & 63),
                                128 | ((s >> 6) & 63),
                                128 | (63 & s)
                            )),
                                ++n;
                            continue;
                        }
                    }
                    throw new Error("Malformed string");
                }
                t[a] = String.fromCharCode(224 | (i >> 12), 128 | ((i >> 6) & 63), 128 | (63 & i));
            }
        }
        return t.join("");
    }
    function h(e, t) {
        for (var o = new Array(t), n = 0, a = 0, i = e.length; n < t && a < i; n++) {
            var r = e.charCodeAt(a++);
            switch (r >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    o[n] = r;
                    break;
                case 12:
                case 13:
                    if (!(a < i)) throw new Error("Unfinished UTF-8 octet sequence");
                    o[n] = ((31 & r) << 6) | (63 & e.charCodeAt(a++));
                    break;
                case 14:
                    if (!(a + 1 < i)) throw new Error("Unfinished UTF-8 octet sequence");
                    o[n] = ((15 & r) << 12) | ((63 & e.charCodeAt(a++)) << 6) | (63 & e.charCodeAt(a++));
                    break;
                case 15:
                    if (!(a + 2 < i)) throw new Error("Unfinished UTF-8 octet sequence");
                    var s =
                        (((7 & r) << 18) |
                            ((63 & e.charCodeAt(a++)) << 12) |
                            ((63 & e.charCodeAt(a++)) << 6) |
                            (63 & e.charCodeAt(a++))) -
                        65536;
                    if (!(0 <= s && s <= 1048575))
                        throw new Error("Character outside valid Unicode range: 0x" + s.toString(16));
                    (o[n++] = ((s >> 10) & 1023) | 55296), (o[n] = (1023 & s) | 56320);
                    break;
                default:
                    throw new Error("Bad UTF-8 encoding 0x" + r.toString(16));
            }
        }
        return n < t && (o.length = n), String.fromCharCode.apply(String, o);
    }
    function g(e, t) {
        for (var o = [], n = new Array(32768), a = 0, i = 0, r = e.length; a < t && i < r; a++) {
            var s = e.charCodeAt(i++);
            switch (s >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    n[a] = s;
                    break;
                case 12:
                case 13:
                    if (!(i < r)) throw new Error("Unfinished UTF-8 octet sequence");
                    n[a] = ((31 & s) << 6) | (63 & e.charCodeAt(i++));
                    break;
                case 14:
                    if (!(i + 1 < r)) throw new Error("Unfinished UTF-8 octet sequence");
                    n[a] = ((15 & s) << 12) | ((63 & e.charCodeAt(i++)) << 6) | (63 & e.charCodeAt(i++));
                    break;
                case 15:
                    if (!(i + 2 < r)) throw new Error("Unfinished UTF-8 octet sequence");
                    var c =
                        (((7 & s) << 18) |
                            ((63 & e.charCodeAt(i++)) << 12) |
                            ((63 & e.charCodeAt(i++)) << 6) |
                            (63 & e.charCodeAt(i++))) -
                        65536;
                    if (!(0 <= c && c <= 1048575))
                        throw new Error("Character outside valid Unicode range: 0x" + c.toString(16));
                    (n[a++] = ((c >> 10) & 1023) | 55296), (n[a] = (1023 & c) | 56320);
                    break;
                default:
                    throw new Error("Bad UTF-8 encoding 0x" + s.toString(16));
            }
            if (a >= 32766) {
                var l = a + 1;
                (n.length = l), (o[o.length] = String.fromCharCode.apply(String, n)), (t -= l), (a = -1);
            }
        }
        return a > 0 && ((n.length = a), (o[o.length] = String.fromCharCode.apply(String, n))), o.join("");
    }
    function m(e, t) {
        return (
            (null == t || t < 0) && (t = e.length),
            0 === t
                ? ""
                : /^[\x00-\x7f]*$/.test(e) || !/^[\x00-\xff]*$/.test(e)
                ? t === e.length
                    ? e
                    : e.substr(0, t)
                : t < 65535
                ? h(e, t)
                : g(e, t)
        );
    }
    function f(e, t) {
        return null == e || 0 === e.length ? e : ((e = d(e)), (t = d(t)), i(p(r(e, !0), l(r(t, !1))), !1));
    }
    function y(t, o) {
        return e.btoa(f(t, o));
    }
    function v(e, t) {
        return null == e || 0 === e.length ? e : ((t = d(t)), m(i(u(r(e, !1), l(r(t, !1))), !0)));
    }
    function M(t, o) {
        return null == t || 0 === t.length ? t : v(e.atob(t), o);
    }
    (e.XXTEA = {utf8Encode: d, utf8Decode: m, encrypt: f, encryptToBase64: y, decrypt: v, decryptFromBase64: M}),
        (t.exports.utf8Encode = d),
        (t.exports.utf8Decode = m),
        (t.exports.encrypt = f),
        (t.exports.encryptToBase64 = y),
        (t.exports.decrypt = v),
        (t.exports.decryptFromBase64 = M);
})(window);
