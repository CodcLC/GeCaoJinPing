var e = require;
var t = module;
var o = exports;
var n,
    a =
        (this && this.__extends) ||
        ((n = function (e, t) {
            return (n =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                })(e, t);
        }),
        function (e, t) {
            function o() {
                this.constructor = e;
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
        }),
    i =
        (this && this.__assign) ||
        function () {
            return (i =
                Object.assign ||
                function (e) {
                    for (var t, o = 1, n = arguments.length; o < n; o++)
                        for (var a in (t = arguments[o])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                }).apply(this, arguments);
        };
Object.defineProperty(o, "__esModule", {value: !0}), (o.ZtSdk = o.ZtLoginParams = o.ZtSdkConfig = void 0);
var r = e("TimeUtil"),
    s = e("Version"),
    c = e("PlayerData"),
    l = e("SubscribeManager"),
    p = (function () {
        // function e() {
        //     (this.clientId = "rogue-weixin"),
        //         (this.clientSecret = "184e9e65a6ad3a4829a92bca3985403c4106"),
        //         (this.serverUrl = "https://rogue-weixin-service-cn.fuqiangame.com");
        // }
        // return (
        //     (e.prototype.cloneFrom = function (e) {
        //         (this.clientId = e.clientId), (this.clientSecret = e.clientSecret), (this.serverUrl = e.serverUrl);
        //     }),
        //     e
        // );
    });
o.ZtSdkConfig = p;
var u;
(o.ZtLoginParams = function () {
    this.userId = "";
}),
    a(
        function () {
            var e = (null !== u && u.apply(this, arguments)) || this;
            return (e.grant_type = ""), (e.scope = ""), (e.provider = ""), (e.username = ""), (e.password = ""), e;
        },
        (u = function () {
            (this.client_id = ""), (this.client_secret = "");
        })
    );
var d = (function () {
    function e() {
        (this._cfg = null), (this._token = ""), (this._tokenType = ""), (this._userId = ""), (this._cfg = new p());
    }
    return (
        Object.defineProperty(e, "instance", {
            get: function () {
                return e._instance ? e._instance : ((e._instance = new e()), e._instance);
            },
            enumerable: !1,
            configurable: !0
        }),
        (e.prototype.init = function (e) {
            this._cfg.cloneFrom(e);
        }),
        (e.prototype.getPlayerOpenId = function (e) {
            var t = this;
            return new Promise(function (o, n) {
                var a = new Map();
                a.set("clientId", t._cfg.clientId);
                var i = {jsCode: e},
                    r = JSON.stringify(i);
                t.xhrPost(t.getUrlOfService("utils/api/v1/wxGetOpenID"), a, r, function (e) {
                    try {
                        e = JSON.parse(e);
                    } catch (t) {}
                    "ok" === e.msg && e.data && e.data.openid && e.data.openid.length > 0
                        ? (console.log("openid: ", e.data.openid),
                          c.playData.setOpenId(e.data.openid),
                          o(e.data.openid))
                        : n(e);
                });
            });
        }),
        (e.prototype.sendSubscribeMsg = function (e, t, o) {
            var n = this,
                a = Math.max(Number(36e5 * l.scrMgr.getPermissionsCd()), Number(o));
            return (
                l.scrMgr.saveSubscribeTime(e, a),
                new Promise(function (a, i) {
                    var r = c.playData.getOpenId(),
                        s = new Map();
                    s.set("clientId", n._cfg.clientId);
                    try {
                        t = JSON.parse(t);
                    } catch (u) {}
                    var l = {
                            req: {
                                data: t,
                                lang: "zh_CN",
                                miniprogram_state: "formal",
                                page: "index",
                                template_id: e,
                                touser: r
                            },
                            triggerTime: Math.floor(o / 1e3) + 1
                        },
                        p = JSON.stringify(l);
                    console.log("sendSubscribeMsg_req: ", l),
                        n.xhrPost(n.getUrlOfService("utils/api/v1/wxSendSubsMsg"), s, p, function (e) {
                            try {
                                e = JSON.parse(e);
                            } catch (u) {}
                            "ok" == e.msg && e.data ? a(e) : i(e);
                        });
                })
            );
        }),
        (e.prototype.updateUserVersion = function (e) {
            var t = this,
                o = s.Version,
                n = "";
            return (
                o.split(".").forEach(function (e) {
                    n += r.TimeUtil.padding(Number(e));
                }),
                l.scrMgr.saveSubscribeTime(e, 2592e6),
                new Promise(function (e, o) {
                    var a = c.playData.getOpenId(),
                        i = {openId: a, version: n},
                        r = t.getTimeStamp(),
                        s = "" + new Date().getTime() + Math.floor(1e4 * Math.random()),
                        l = t.sign(t._cfg.clientId, t._cfg.clientSecret, t._cfg.clientId, s, r, i),
                        p = new Map();
                    p.set("clientId", t._cfg.clientId),
                        p.set("timestamp", r),
                        p.set("requestId", s),
                        p.set("solt", t._cfg.clientId),
                        p.set("sign", l);
                    var u = {openId: a, version: n},
                        d = JSON.stringify(u);
                    console.log(t._cfg.clientId, n),
                        t.xhrPost(t.getUrlOfService("utils/api/v1/wxUpUserVersion"), p, d, function (t) {
                            try {
                                t = JSON.parse(t);
                            } catch (n) {}
                            console.log("wxUpUserVersion: ", t),
                                "ok" == t.msg && t.data ? (console.log(t), e(t)) : o(t);
                        });
                })
            );
        }),
        (e.prototype.getNowTime = function () {
            var e = this;
            return new Promise(function (t, o) {
                var n = new Map();
                n.set("clientId", e._cfg.clientId);
                var a = JSON.stringify({});
                e.xhrPost(e.getUrlOfService("utils/api/v1/getNowTime"), n, a, function (e) {
                    try {
                        e = JSON.parse(e);
                    } catch (n) {}
                    console.log("getNowTime: ", e), "ok" == e.msg && e.data ? t(e.data) : o(e);
                });
            });
        }),
        (e.prototype.setSystemTime = function () {
            var e = new Map();
            e.set("clientId", this._cfg.clientId);
            var t = JSON.stringify({});
            this.xhrPost(this.getUrlOfService("utils/api/v1/getNowTime"), e, t, function (e) {
                try {
                    e = JSON.parse(e);
                } catch (t) {
                    console.error("setSystemTime parse err! ");
                }
                console.log("getNowTime: ", e),
                    "ok" == e.msg && e.data
                        ? (window.systemTimeStamp = Number(e.data))
                        : (console.error("setSystemTime request err! "), (window.systemTimeStamp = Date.now() / 1e3));
            });
        }),
        (e.prototype.getTimeStamp = function () {
            return Math.round(new Date().getTime() / 1e3).toString();
        }),
        (e.prototype.xhrGet = function (e, t, o, n) {
            this.xhrReq("GET", e, t, o, n);
        }),
        (e.prototype.xhrPost = function (e, t, o, n) {
            this.xhrReq("POST", e, t, o, n);
        }),
        (e.prototype.xhrReq = function (e, t, o, n, a) {
            var i = new XMLHttpRequest();
            (i.withCredentials = !0),
                (i.timeout = 5e3),
                i.addEventListener("readystatechange", function () {
                    4 === i.readyState &&
                        (i.status >= 200 && i.status < 300
                            ? (cc.log("xhrReq() success.", i.responseText), a(i.responseText))
                            : (cc.log(
                                  "xhrReq() failed. xhr.readyState=" +
                                      i.readyState +
                                      "; xhr.status=" +
                                      i.status +
                                      ";xhr.responseText=" +
                                      i.responseText
                              ),
                              a("")));
                }),
                (i.ontimeout = function () {
                    cc.log("xhrReq() timeout."), a("");
                }),
                i.open(e, t),
                o &&
                    o.forEach(function (e, t) {
                        i.setRequestHeader(t, e);
                    }),
                cc.log("dataStr:" + n),
                i.send(n);
        }),
        (e.prototype.getUrlOfService = function (e) {
            return this._cfg.serverUrl + "/" + e;
        }),
        (e.prototype.buidObject = function (e) {
            var t = new Object();
            return (
                (function e(o) {
                    for (var n in o)
                        if ((console.log(typeof o[n]), "object" == typeof o[n])) {
                            var a = o[n];
                            delete o[n], e(a);
                        } else t[n] = o[n];
                })(e),
                t
            );
        }),
        (e.prototype.SHA256 = function (e) {
            function t(e, t) {
                var o = (65535 & e) + (65535 & t);
                return (((e >> 16) + (t >> 16) + (o >> 16)) << 16) | (65535 & o);
            }
            function o(e, t) {
                return (e >>> t) | (e << (32 - t));
            }
            function n(e, t) {
                return e >>> t;
            }
            function a(e, t, o) {
                return (e & t) ^ (~e & o);
            }
            function i(e, t, o) {
                return (e & t) ^ (e & o) ^ (t & o);
            }
            function r(e) {
                return o(e, 2) ^ o(e, 13) ^ o(e, 22);
            }
            function s(e) {
                return o(e, 6) ^ o(e, 11) ^ o(e, 25);
            }
            function c(e) {
                return o(e, 7) ^ o(e, 18) ^ n(e, 3);
            }
            return (function (e) {
                for (var t = "0123456789abcdef", o = "", n = 0; n < 4 * e.length; n++)
                    o +=
                        t.charAt((e[n >> 2] >> (8 * (3 - (n % 4)) + 4)) & 15) +
                        t.charAt((e[n >> 2] >> (8 * (3 - (n % 4)))) & 15);
                return o;
            })(
                (function (e, l) {
                    var p,
                        u,
                        d,
                        h,
                        g,
                        m,
                        f,
                        y,
                        v,
                        M,
                        _,
                        C,
                        b,
                        T = new Array(
                            1116352408,
                            1899447441,
                            3049323471,
                            3921009573,
                            961987163,
                            1508970993,
                            2453635748,
                            2870763221,
                            3624381080,
                            310598401,
                            607225278,
                            1426881987,
                            1925078388,
                            2162078206,
                            2614888103,
                            3248222580,
                            3835390401,
                            4022224774,
                            264347078,
                            604807628,
                            770255983,
                            1249150122,
                            1555081692,
                            1996064986,
                            2554220882,
                            2821834349,
                            2952996808,
                            3210313671,
                            3336571891,
                            3584528711,
                            113926993,
                            338241895,
                            666307205,
                            773529912,
                            1294757372,
                            1396182291,
                            1695183700,
                            1986661051,
                            2177026350,
                            2456956037,
                            2730485921,
                            2820302411,
                            3259730800,
                            3345764771,
                            3516065817,
                            3600352804,
                            4094571909,
                            275423344,
                            430227734,
                            506948616,
                            659060556,
                            883997877,
                            958139571,
                            1322822218,
                            1537002063,
                            1747873779,
                            1955562222,
                            2024104815,
                            2227730452,
                            2361852424,
                            2428436474,
                            2756734187,
                            3204031479,
                            3329325298
                        ),
                        w = new Array(
                            1779033703,
                            3144134277,
                            1013904242,
                            2773480762,
                            1359893119,
                            2600822924,
                            528734635,
                            1541459225
                        ),
                        N = new Array(64);
                    for (
                        e[l >> 5] |= 128 << (24 - (l % 32)), e[15 + (((l + 64) >> 9) << 4)] = l, v = 0;
                        v < e.length;
                        v += 16
                    ) {
                        for (
                            p = w[0], u = w[1], d = w[2], h = w[3], g = w[4], m = w[5], f = w[6], y = w[7], M = 0;
                            M < 64;
                            M++
                        )
                            (N[M] =
                                M < 16
                                    ? e[M + v]
                                    : t(
                                          t(t(o((b = N[M - 2]), 17) ^ o(b, 19) ^ n(b, 10), N[M - 7]), c(N[M - 15])),
                                          N[M - 16]
                                      )),
                                (_ = t(t(t(t(y, s(g)), a(g, m, f)), T[M]), N[M])),
                                (C = t(r(p), i(p, u, d))),
                                (y = f),
                                (f = m),
                                (m = g),
                                (g = t(h, _)),
                                (h = d),
                                (d = u),
                                (u = p),
                                (p = t(_, C));
                        (w[0] = t(p, w[0])),
                            (w[1] = t(u, w[1])),
                            (w[2] = t(d, w[2])),
                            (w[3] = t(h, w[3])),
                            (w[4] = t(g, w[4])),
                            (w[5] = t(m, w[5])),
                            (w[6] = t(f, w[6])),
                            (w[7] = t(y, w[7]));
                    }
                    return w;
                })(
                    (function (e) {
                        for (var t = Array(), o = 0; o < 8 * e.length; o += 8)
                            t[o >> 5] |= (255 & e.charCodeAt(o / 8)) << (24 - (o % 32));
                        return t;
                    })(
                        (e = (function (e) {
                            e = e.replace(/\r\n/g, "\n");
                            for (var t = "", o = 0; o < e.length; o++) {
                                var n = e.charCodeAt(o);
                                n < 128
                                    ? (t += String.fromCharCode(n))
                                    : n > 127 && n < 2048
                                    ? ((t += String.fromCharCode((n >> 6) | 192)),
                                      (t += String.fromCharCode((63 & n) | 128)))
                                    : ((t += String.fromCharCode((n >> 12) | 224)),
                                      (t += String.fromCharCode(((n >> 6) & 63) | 128)),
                                      (t += String.fromCharCode((63 & n) | 128)));
                            }
                            return t;
                        })(e))
                    ),
                    8 * e.length
                )
            );
        }),
        (e.prototype.sign = function (e, t, o, n, a, r) {
            var s = i({clientId: e, requestId: n, timestamp: a}, r),
                c =
                    t +
                    "|" +
                    o +
                    "|" +
                    Object.keys(s)
                        .sort()
                        .map(function (e) {
                            return s[e];
                        })
                        .join("|");
            return this.SHA256(c);
        }),
        (e.SUCCESS_CODE = 1),
        (e._instance = null),
        e
    );
})();
o.ZtSdk = d;
