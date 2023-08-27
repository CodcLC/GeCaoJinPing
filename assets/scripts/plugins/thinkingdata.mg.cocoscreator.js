function t(i) {
    return (t = "function" == typeof Symbol && "symbol" == typeof(Symbol.iterator) ? function(t) {
        return typeof(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof(t);
    })(i);
}

function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function n(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}

function a(e, t, i) {
    return t && n(e.prototype, t), i && n(e, i), e;
}

var r = "2.1.0",
    s = "MG",
    o = {},
    c = Array.prototype,
    u = Object.prototype,
    l = c.slice,
    p = u.toString,
    h = Object.prototype.hasOwnProperty,
    d = c.forEach,
    f = Array.isArray,
    g = {};

o.each = function(e, t, i) {
    if (null == e) return !1;
    if (d && e.forEach === d) e.forEach(t, i);
    else if (e.length === +e.length) {
        for (var n = 0, a = e.length; n < a; n++)
            if (n in e && t.call(i, e[n], n, e) === g) return !1;
    } else
        for (var r in e)
            if (h.call(e, r) && t.call(i, e[r], r, e) === g) return !1;
}, o.extend = function(e) {
    return o.each(l.call(arguments, 1), function(t) {
        for (var i in t) void 0 !== t[i] && (e[i] = t[i]);
    }), e;
}, o.extend2Layers = function(e) {
    return o.each(l.call(arguments, 1), function(t) {
        for (var i in t) void 0 !== t[i] && (o.isObject(t[i]) && o.isObject(e[i]) ? o.extend(e[i], t[i]) : e[i] = t[i]);
    }), e;
}, o.isArray = f || function(e) {
    return "[object Array]" === p.call(e);
}, o.isFunction = function(e) {
    try {
        return "function" == typeof e;
    } catch (e) {
        return !1;
    }
}, o.isPromise = function(e) {
    return "[object Promise]" === p.call(e) && null != e;
}, o.isObject = function(e) {
    return "[object Object]" === p.call(e) && null != e;
}, o.isEmptyObject = function(e) {
    if (o.isObject(e)) {
        for (var t in e)
            if (h.call(e, t)) return !1;
        return !0;
    }
    return !1;
}, o.isUndefined = function(e) {
    return void 0 === e;
}, o.isString = function(e) {
    return "[object String]" === p.call(e);
}, o.isDate = function(e) {
    return "[object Date]" === p.call(e);
}, o.isBoolean = function(e) {
    return "[object Boolean]" === p.call(e);
}, o.isNumber = function(e) {
    return "[object Number]" === p.call(e) && /[\d\.]+/.test(String(e));
}, o.isJSONString = function(e) {
    try {
        JSON.parse(e);
    } catch (e) {
        return !1;
    }
    return !0;
}, o.decodeURIComponent = function(e) {
    var t = "";
    try {
        t = decodeURIComponent(e);
    } catch (i) {
        t = e;
    }
    return t;
}, o.encodeURIComponent = function(e) {
    var t = "";
    try {
        t = encodeURIComponent(e);
    } catch (i) {
        t = e;
    }
    return t;
}, o.utf8Encode = function(e) {
    for (var t, i = "", n = t = 0, a = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, r = 0; r < a; r++) {
        var s = e.charCodeAt(r),
            o = null;
        s < 128 ? t++ : o = 127 < s && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128),
            null !== o && (n < t && (i += e.substring(n, t)), i += o, n = t = r + 1);
    }
    return n < t && (i += e.substring(n, e.length)), i;
}, o.base64Encode = function(e) {
    var t, i, n, a, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        s = 0,
        c = 0,
        u = "",
        l = [];
    if (!e) return e;
    for (e = o.utf8Encode(e); t = (a = e.charCodeAt(s++) << 16 | e.charCodeAt(s++) << 8 | e.charCodeAt(s++)) >> 18 & 63,
        i = a >> 12 & 63, n = a >> 6 & 63, a &= 63, l[c++] = r.charAt(t) + r.charAt(i) + r.charAt(n) + r.charAt(a),
        s < e.length;);
    switch (u = l.join(""), e.length % 3) {
        case 1:
            u = u.slice(0, -2) + "==";
            break;

        case 2:
            u = u.slice(0, -1) + "=";
    }
    return u;
}, o.encodeDates = function(e) {
    return o.each(e, function(t, i) {
        if (o.isDate(t)) e[i] = o.formatDate(t);
        else if (o.isObject(t)) e[i] = o.encodeDates(t);
        else if (o.isArray(t))
            for (var n = 0; n < t.length; n++) o.isDate(t[n]) && (e[i][n] = o.formatDate(t[n]));
    }), e;
}, o.formatDate = function(e) {
    function t(e) {
        return e < 10 ? "0" + e : e;
    }
    return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + ((i = e.getMilliseconds()) < 100 && 9 < i ? "0" + i : i < 10 ? "00" + i : i);
    var i;
}, o.searchObjDate = function(e) {
    try {
        (o.isObject(e) || o.isArray(e)) && o.each(e, function(t, i) {
            o.isObject(t) || o.isArray(t) ? o.searchObjDate(e[i]) : o.isDate(t) && (e[i] = o.formatDate(t));
        });
    } catch (e) {
        m.warn(e);
    }
}, o.UUID = function() {
    var e = new Date().getTime();
    return String(Math.random()).replace(".", "").slice(1, 11) + "-" + e;
}, o.UUIDv4 = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" === e ? t : 3 & t | 8).toString(16);
    });
}, o.setMpPlatform = function(e) {
    o.mpPlatform = e;
}, o.getMpPlatform = function() {
    return o.mpPlatform;
}, o.createExtraHeaders = function() {
    return {
        "TA-Integration-Type": s,
        "TA-Integration-Version": r,
        "TA-Integration-Count": "1",
        "TA-Integration-Extra": o.getMpPlatform()
    };
}, o.checkAppId = function(e) {
    return e.replace(/\s*/g, "");
}, o.checkUrl = function(e) {
    return e = e.replace(/\s*/g, ""), o.url("basic", e);
}, o.url = function() {
    function e() {
        return new RegExp(/(.*?)\.?([^.]*?)\.(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|net\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);
    }

    function t(e, t) {
        var i = e.charAt(0);
        return t = t.split(i), i === e ? t : t[(e = parseInt(e.substring(1), 10)) < 0 ? t.length + e : e - 1];
    }

    function i(e, t) {
        for (var i, n, a = e.charAt(0), r = t.split("&"), s = [], c = {}, u = e.substring(1), l = 0, p = r.length; l < p; l++)
            if ("" !== (s = (s = r[l].match(/(.*?)=(.*)/)) || [r[l], r[l], ""])[1].replace(/\s/g, "")) {
                if (s[2] = (n = s[2] || "", o.decodeURIComponent(n.replace(/\+/g, " "))), u === s[1]) return s[2];
                (i = s[1].match(/(.*)\[([0-9]+)\]/)) ? (c[i[1]] = c[i[1]] || [], c[i[1]][i[2]] = s[2]) : c[s[1]] = s[2];
            }
        return a === e ? c : c[u];
    }
    return function(n, a) {
        var r = {};
        if ("tld?" === n) return e();
        if (a = a || window.location.toString(), !n) return a;
        if (n = n.toString(), a.match(/^mailto:([^/].+)/)) s = a.match(/^mailto:([^/].+)/),
            r.protocol = "mailto", r.email = s[1];
        else {
            if (a.match(/(.*?)\/#!(.*)/) && (a = (s = a.match(/(.*?)\/#!(.*)/))[1] + s[2]),
                a.match(/(.*?)#(.*)/) && (s = a.match(/(.*?)#(.*)/), r.hash = s[2], a = s[1]), r.hash && n.match(/^#/)) return i(n, r.hash);
            if (a.match(/(.*?)\?(.*)/) && (s = a.match(/(.*?)\?(.*)/), r.query = s[2], a = s[1]),
                r.query && n.match(/^\?/)) return i(n, r.query);
            if (a.match(/(.*?):?\/\/(.*)/) && (s = a.match(/(.*?):?\/\/(.*)/), r.protocol = s[1].toLowerCase(),
                    a = s[2]), a.match(/(.*?)(\/.*)/) && (s = a.match(/(.*?)(\/.*)/), r.path = s[2],
                    a = s[1]), r.path = (r.path || "").replace(/^([^/])/, "/$1").replace(/\/$/, ""),
                n.match(/^[-0-9]+$/) && (n = n.replace(/^([^/])/, "/$1")), n.match(/^\//)) return t(n, r.path.substring(1));
            if ((s = (s = t("/-1", r.path.substring(1))) && s.match(/(.*?)\.(.*)/)) && (r.file = s[0],
                    r.filename = s[1], r.fileext = s[2]), a.match(/(.*):([0-9]+)$/) && (s = a.match(/(.*):([0-9]+)$/),
                    r.port = s[2], a = s[1]), a.match(/(.*?)@(.*)/) && (s = a.match(/(.*?)@(.*)/), r.auth = s[1],
                    a = s[2]), r.auth && (s = r.auth.match(/(.*):(.*)/), r.user = s ? s[1] : r.auth,
                    r.pass = s ? s[2] : void 0), r.hostname = a.toLowerCase(), "." === n.charAt(0)) return t(n, r.hostname);
            e() && (s = r.hostname.match(e())) && (r.tld = s[3], r.domain = s[2] ? s[2] + "." + s[3] : void 0,
                r.sub = s[1] || void 0);
            var s = r.port ? ":" + r.port : "";
            r.protocol = r.protocol || window.location.protocol.replace(":", ""), r.port = r.port || ("https" === r.protocol ? "443" : "80"),
                r.protocol = r.protocol || ("443" === r.port ? "https" : "http"), r.basic = r.protocol + "://" + r.hostname + s;
        }
        return n in r ? r[n] : "{}" === n ? r : "";
    };
}(), o.createString = function(e) {
    for (var t = e, i = Math.random().toString(36).substr(2); i.length < t;) i += Math.random().toString(36).substr(2);
    return i.substr(0, e);
}, o.createAesKey = function() {
    return o.createString(16);
}, o.generateEncryptyData = function(e, t) {
    if (void 0 === t) return e;
    var i = t.publicKey,
        n = t.version;
    if (void 0 === i || void 0 === n) return e;
    if ("undefined" == typeof CryptoJS || "undefined" == typeof JSEncrypt) return e;
    var a = o.createAesKey();
    try {
        var r = CryptoJS.enc.Utf8.parse(a),
            s = CryptoJS.enc.Utf8.parse(JSON.stringify(e)),
            c = o.isUndefined(CryptoJS.pad.Pkcs7) ? CryptoJS.pad.PKCS7 : CryptoJS.pad.Pkcs7;
        return r = CryptoJS.AES.encrypt(s, r, {
            mode: CryptoJS.mode.ECB,
            padding: c
        }).toString(), (c = new JSEncrypt()).setPublicKey(i), !1 === (c = c.encrypt(a)) ? (m.warn("私钥加密失败，返回原数据"),
            e) : {
            pkv: n,
            ekey: c,
            payload: r
        };
    } catch (e) {
        m.warn("数据加密失败，返回原数据: " + e);
    }
    return e;
};

var m = "object" === t(m) ? m : {};

m.info = function() {
    if ("object" === ("undefined" == typeof console ? "undefined" : t(console)) && console.log && m.enabled) try {
        return console.log.apply(console, arguments);
    } catch (e) {
        console.log(arguments[0]);
    }
}, m.warn = function() {
    if ("object" === ("undefined" == typeof console ? "undefined" : t(console)) && console.log && m.enabled) try {
        return console.warn.apply(console, arguments);
    } catch (e) {
        console.warn(arguments[0]);
    }
};

var v = function() {
        function e() {
            i(this, e), this.config = {
                persistenceName: "thinkingdata",
                persistenceNameOld: "thinkingdata_mg"
            };
        }
        return a(e, [{
            key: "getConfig",
            value: function() {
                return this.config;
            }
        }, {
            key: "getStorage",
            value: function(e, t, i) {
                if (e = localStorage.getItem(e), !t) return o.isJSONString(e) ? JSON.parse(e) : {};
                o.isJSONString(e) ? i(JSON.parse(e)) : i({});
            }
        }, {
            key: "setStorage",
            value: function(e, t) {
                localStorage.setItem(e, t);
            }
        }, {
            key: "_setSystemProxy",
            value: function(e) {
                this._sysCallback = e;
            }
        }, {
            key: "getSystemInfo",
            value: function(e) {
                var t = {
                    mp_platform: "web",
                    system: this._getOs(),
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                    systemLanguage: navigator.language
                };
                this._sysCallback && (t = o.extend(t, this._sysCallback(e))), e.success(t), e.complete();
            }
        }, {
            key: "_getOs",
            value: function() {
                var e = navigator.userAgent;
                return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "MacOS" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "ChromeOS" : "";
            }
        }, {
            key: "getNetworkType",
            value: function(e) {
                e.complete();
            }
        }, {
            key: "onNetworkStatusChange",
            value: function() {}
        }, {
            key: "request",
            value: function(e) {
                var t = {},
                    i = new XMLHttpRequest();
                if (i.open(e.method, e.url), e.header)
                    for (var n in e.header) i.setRequestHeader(n, e.header[n]);
                return i.onreadystatechange = function() {
                    4 === i.readyState && 200 === i.status ? (t.statusCode = 200, o.isJSONString(i.responseText) && (t.data = JSON.parse(i.responseText)),
                        e.success(t)) : 200 !== i.status && (t.errMsg = "network error", e.fail(t));
                }, i.ontimeout = function() {
                    t.errMsg = "timeout", e.fail(t);
                }, i.send(e.data), i;
            }
        }, {
            key: "initAutoTrackInstance",
            value: function(e, t) {
                this.instance = e, this.autoTrack = t.autoTrack;
                var i = this;
                "onpagehide" in window ? window.onpagehide = function() {
                        i.onPageHide(!0);
                    } : window.onbeforeunload = function() {
                        i.onPageHide(!0);
                    }, i.onPageShow(), i.autoTrack.appHide && i.instance.timeEvent("ta_page_hide"),
                    "onvisibilitychange" in document && (document.onvisibilitychange = function() {
                        document.hidden ? i.onPageHide(!1) : (i.onPageShow(), i.autoTrack.appHide && i.instance.timeEvent("ta_page_hide"));
                    });
            }
        }, {
            key: "setGlobal",
            value: function(e, t) {
                window[t] = e;
            }
        }, {
            key: "getAppOptions",
            value: function() {}
        }, {
            key: "showToast",
            value: function() {}
        }, {
            key: "onPageShow",
            value: function() {
                var e;
                this.autoTrack.appShow && (e = {}, o.extend(e, this.autoTrack.properties), o.isFunction(this.autoTrack.callback) && o.extend(e, this.autoTrack.callback("appShow")),
                    this.instance._internalTrack("ta_page_show", e));
            }
        }, {
            key: "onPageHide",
            value: function(e) {
                var t;
                this.autoTrack.appHide && (t = {}, o.extend(t, this.autoTrack.properties), o.isFunction(this.autoTrack.callback) && o.extend(t, this.autoTrack.callback("appHide")),
                    this.instance._internalTrack("ta_page_hide", t, new Date(), null, e));
            }
        }], [{
            key: "createInstance",
            value: function() {
                return new e();
            }
        }]), e;
    }(),
    y = function() {
        function e(t, n) {
            i(this, e), this.taInstance = t, this.config = n || {}, this.referrer = "Directly open",
                this.config.isPlugin ? (t.App = function() {
                    App.apply(this, arguments);
                }, inension(t.Page)) : (t = App, App = this._initAppExtention(t), t = Page, Page = this._initPageExtension(t));
        }
        return a(e, [{
            key: "_initPageExtension",
            value: function(e) {
                var t = this;
                return function(i) {
                    var n = i.onShow,
                        a = i.onShareAppMessage;
                    return i.onShow = function(e) {
                        t.onPageShow(), "function" == typeof n && n.call(this, e);
                    }, "function" == typeof a && (i.onShareAppMessage = function(e) {
                        return e = a.call(this, e), t.onPageShare(e);
                    }), e(i);
                };
            }
        }, {
            key: "_initAppExtention",
            value: function(e) {
                var t = this;
                return function(i) {
                    var n = i.onLaunch,
                        a = i.onShow,
                        r = i.onHide;
                    return i.onLaunch = function(e) {
                        t.onAppLaunch(e, this), "function" == typeof n && n.call(this, e);
                    }, i.onShow = function(e) {
                        t.onAppShow(e), "function" == typeof a && a.call(this, e);
                    }, i.onHide = function() {
                        t.onAppHide(), "function" == typeof r && r.call(this);
                    }, e(i);
                };
            }
        }, {
            key: "onAppLaunch",
            value: function(e, t) {
                this._setAutoTrackProperties(e), o.isUndefined(t) || (t[this.taInstance.name] = this.taInstance),
                    this.config.appLaunch && (t = {}, e && e.path && (t["#url_path"] = this._getPath(e.path)),
                        this.taInstance._internalTrack("ta_mp_launch", t));
            }
        }, {
            key: "onAppShow",
            value: function(e) {
                var t;
                this.config.appHide && this.taInstance.timeEvent("ta_mp_hide"), this._setAutoTrackProperties(e),
                    this.config.appShow && (t = {}, e && e.path && (t["#url_path"] = this._getPath(e.path)),
                        o.extend(t, this.config.properties), o.isFunction(this.config.callback) && o.extend(t, this.config.callback("appShow")),
                        this.taInstance._internalTrack("ta_mp_show", t));
            }
        }, {
            key: "onAppHide",
            value: function() {
                var e;
                this.config.appHide && (e = {
                        "#url_path": this._getCurrentPath()
                    }, o.extend(e, this.config.properties), o.isFunction(this.config.callback) && o.extend(e, this.config.callback("appHide")),
                    this.taInstance._internalTrack("ta_mp_hide", e));
            }
        }, {
            key: "_getCurrentPath",
            value: function() {
                var e = "Not to get";
                try {
                    var t = getCurrentPages();
                    e = t[t.length - 1].route;
                } catch (e) {
                    m.info(e);
                }
                return e;
            }
        }, {
            key: "_setAutoTrackProperties",
            value: function(e) {
                e = {
                    "#scene": e.scene
                }, this.taInstance._setAutoTrackProperties(e);
            }
        }, {
            key: "_getPath",
            value: function(e) {
                return "string" == typeof e ? e.replace(/^\//, "") : "Abnormal values";
            }
        }, {
            key: "onPageShare",
            value: function(e) {
                return this.config.pageShare && this.taInstance._internalTrack("ta_mp_share", {
                    "#url_path": this._getCurrentPath()
                }), o.isObject(e) ? e : {};
            }
        }, {
            key: "onPageShow",
            value: function() {
                var e, t;
                this.config.pageShow && (t = {
                    "#url_path": (e = this._getCurrentPath()) || "The system did not get a value",
                    "#referrer": this.referrer
                }, this.referrer = e, this.taInstance._internalTrack("ta_mp_view", t));
            }
        }]), e;
    }(),
    _ = function() {
        function e(t, n, a) {
            var r = this;
            i(this, e), this.taInstance = t, this.config = n || {}, n = a.getLaunchOptionsSync(),
                this._onShow(n), this.startTracked = !0, a.onShow(function(e) {
                    r._onShow(e);
                }), a.onHide(function() {
                    var e;
                    r.startTracked = !1, r.config.appHide && (e = {}, o.extend(e, r.config.properties),
                        o.isFunction(r.config.callback) && o.extend(e, r.config.callback("appHide")), r.taInstance._internalTrack("ta_mg_hide", e));
                });
        }
        return a(e, [{
            key: "_onShow",
            value: function(e) {
                this.startTracked || (this.config.appHide && this.taInstance.timeEvent("ta_mg_hide"),
                    e && e.scene && this.taInstance._setAutoTrackProperties({
                        "#scene": e.scene
                    }), this.config.appShow && (e = {}, o.extend(e, this.config.properties), o.isFunction(this.config.callback) && o.extend(e, this.config.callback("appShow")),
                        this.taInstance._internalTrack("ta_mg_show", e)));
            }
        }]), e;
    }(),
    k = function() {
        function e(t, n, a) {
            i(this, e), this.api = t, this.config = n, this._config = a;
        }
        return a(e, [{
            key: "getConfig",
            value: function() {
                return this.config;
            }
        }, {
            key: "getStorage",
            value: function(e, t, i) {
                if (!t) {
                    if ("dd_mp" === this._config.platform) {
                        var n = this.api.getStorageSync({
                            key: e
                        });
                        return o.isJSONString(n.data) ? JSON.parse(n.data) : {};
                    }
                    return n = this.api.getStorageSync(e), o.isJSONString(n) ? JSON.parse(n) : {};
                }
                this.api.getStorage({
                    key: e,
                    success: function(e) {
                        e = o.isJSONString(e.data) ? JSON.parse(e.data) : {}, i(e);
                    },
                    fail: function() {
                        m.warn("getStorage faild"), i({});
                    }
                });
            }
        }, {
            key: "setStorage",
            value: function(e, t) {
                this.api.setStorage({
                    key: e,
                    data: t
                });
            }
        }, {
            key: "_getPlatform",
            value: function() {
                return "";
            }
        }, {
            key: "getSystemInfo",
            value: function(e) {
                var t = this._config.mpPlatform;
                this.api.getSystemInfo({
                    success: function(i) {
                        o.isFunction(t) ? i.mp_platform = t(i) : i.mp_platform = t, e.success(i), "wechat" === t && e.complete();
                    },
                    complete: function() {
                        e.complete();
                    }
                });
            }
        }, {
            key: "getNetworkType",
            value: function(e) {
                o.isFunction(this.api.getNetworkType) ? this.api.getNetworkType({
                    success: function(t) {
                        e.success(t);
                    },
                    complete: function() {
                        e.complete();
                    }
                }) : (e.success({}), e.complete());
            }
        }, {
            key: "onNetworkStatusChange",
            value: function(e) {
                o.isFunction(this.api.onNetworkStatusChange) ? this.api.onNetworkStatusChange(e) : e({});
            }
        }, {
            key: "request",
            value: function(e) {
                if ("ali_mp" !== this._config.platform && "dd_mp" !== this._config.platform) return this.api.request(e);
                var t = o.extend({}, e);
                return t.headers = e.header, t.success = function(t) {
                    t.statusCode = t.status, e.success(t);
                }, t.fail = function(t) {
                    t.errMsg = t.errorMessage, e.fail(t);
                }, "dd_mp" === this._config.platform ? this.api.httpRequest(t) : this.api.request(t);
            }
        }, {
            key: "initAutoTrackInstance",
            value: function(e, t) {
                return o.isObject(t.autoTrack) && (t.autoTrack.isPlugin = t.is_plugin), new(this._config.mp ? y : _)(e, t.autoTrack, this.api);
            }
        }, {
            key: "setGlobal",
            value: function(e, t) {
                this._config.mp ? m.warn("ThinkingAnalytics: we do not set global name for TA instance when you do not enable auto track.") : GameGlobal[t] = e;
            }
        }, {
            key: "getAppOptions",
            value: function(e) {
                var t = {};
                try {
                    t = this.api.getLaunchOptionsSync();
                } catch (e) {
                    m.warn("Cannot get launch options.");
                }
                if (o.isFunction(e)) try {
                    this._config.mp ? this.api.onAppShow(e) : this.api.onShow(e);
                } catch (e) {
                    m.warn("Cannot register onShow callback.");
                }
                return t;
            }
        }, {
            key: "showToast",
            value: function(e) {
                var t;
                o.isFunction(this.api.showToast) && (t = {
                        title: e
                    }, "dd_mp" !== this._config.platform && "ali_mp" !== this._config.platform || (t.content = e),
                    this.api.showToast(t));
            }
        }], [{
            key: "createInstance",
            value: function() {
                return this._createInstance("R_CURRENT_PLATFORM");
            }
        }, {
            key: "_createInstance",
            value: function(t) {
                switch (t) {
                    case "wechat_mp":
                        return new e(wx, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_wechat"
                        }, {
                            mpPlatform: "wechat",
                            mp: !0,
                            platform: t
                        });

                    case "wechat_mg":
                        return new e(wx, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_wechat_game"
                        }, {
                            mpPlatform: "wechat",
                            platform: t
                        });

                    case "qq_mp":
                        return new e(qq, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_qq"
                        }, {
                            mpPlatform: "qq",
                            mp: !0,
                            platform: t
                        });

                    case "qq_mg":
                        return new e(qq, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_qq_game"
                        }, {
                            mpPlatform: "qq",
                            platform: t
                        });

                    case "baidu_mp":
                        return new e(swan, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_swan"
                        }, {
                            mpPlatform: function(e) {
                                return e.host;
                            },
                            mp: !0,
                            platform: t
                        });

                    case "baidu_mg":
                        return new e(swan, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_swan_game"
                        }, {
                            mpPlatform: function(e) {
                                return e.host;
                            },
                            platform: t
                        });

                    case "tt_mg":
                        return new e(tt, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_tt_game"
                        }, {
                            mpPlatform: function(e) {
                                return e.appName;
                            },
                            platform: t
                        });

                    case "tt_mp":
                        return new e(tt, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_tt"
                        }, {
                            mpPlatform: function(e) {
                                return e.appName;
                            },
                            mp: !0,
                            platform: t
                        });

                    case "ali_mp":
                        return new e(my, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_ali"
                        }, {
                            mpPlatform: function(e) {
                                return e.app;
                            },
                            mp: !0,
                            platform: t
                        });

                    case "dd_mp":
                        return new e(dd, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_dd"
                        }, {
                            mpPlatform: "dingding",
                            mp: !0,
                            platform: t
                        });

                    case "bl_mg":
                        return new e(bl, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_mg"
                        }, {
                            mpPlatform: "bilibili",
                            platform: t
                        });

                    case "kuaishou_mp":
                        return new e(ks, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_kuaishou"
                        }, {
                            mpPlatform: "kuaishou",
                            mp: !0,
                            platform: t
                        });

                    case "qh360_mg":
                        return new e(qh, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_qh360"
                        }, {
                            mpPlatform: "qh360",
                            platform: t
                        });

                    case "tb_mp":
                        return new e(my, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_tb"
                        }, {
                            mpPlatform: "tb",
                            mp: !0,
                            platform: t
                        });

                    case "jd_mp":
                        return new e(jd, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_jd"
                        }, {
                            mpPlatform: "jd",
                            mp: !0,
                            platform: t
                        });

                    case "qh360_mp":
                        return new e(qh, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_qh360"
                        }, {
                            mpPlatform: "qh360",
                            mp: !0,
                            platform: t
                        });

                    case "WEB":
                        return new v.createInstance();
                }
            }
        }]), e;
    }(),
    S = function e(t, n) {
        var a = this;
        i(this, e), this.taInstance = t, this.config = n || {}, this.config.appShow && this.taInstance._internalTrack("ta_mg_show"),
            this.config.appHide && this.taInstance.timeEvent("ta_mg_hide"), qg.onShow(function() {
                var e;
                a.config.appHide && a.taInstance.timeEvent("ta_mg_hide"), a.config.appShow && (e = {},
                    o.extend(e, a.config.properties), o.isFunction(a.config.callback) && o.extend(e, a.config.callback("appShow")),
                    a.taInstance._internalTrack("ta_mg_show"));
            }), qg.onHide(function() {
                var e;
                a.config.appHide && (e = {}, o.extend(e, a.config.properties), o.isFunction(a.config.callback) && o.extend(e, a.config.callback("appHide")),
                    a.taInstance._internalTrack("ta_mg_hide"));
            });
    },
    b = function() {
        function e() {
            i(this, e), this.config = {
                persistenceName: "thinkingdata",
                persistenceNameOld: "thinkingdata_qg_vivo_game",
                asyncPersistence: !0
            };
        }
        return a(e, [{
            key: "getConfig",
            value: function() {
                return this.config || {};
            }
        }, {
            key: "getStorage",
            value: function(e, t, i) {
                if (!t) return t = qg.getStorageSync({
                    key: e
                }), o.isJSONString(t) ? JSON.parse(t) : {};
                qg.getStorage({
                    key: e,
                    success: function(e) {
                        e = o.isJSONString(e) ? JSON.parse(e) : {}, i(e);
                    },
                    fail: function() {
                        i({});
                    }
                });
            }
        }, {
            key: "setStorage",
            value: function(e, t) {
                qg.setStorage({
                    key: e,
                    value: t
                });
            }
        }, {
            key: "getSystemInfo",
            value: function(e) {
                qg.getSystemInfo({
                    success: function(t) {
                        var i = t,
                            n = [t.osType, t.osVersionName].join(" ");
                        i.brand = t.manufacturer, i.system = n, i.mp_platform = "vivo_qg", e.success(i);
                    },
                    complete: function() {
                        e.complete();
                    }
                });
            }
        }, {
            key: "getNetworkType",
            value: function(e) {
                qg.getNetworkType({
                    success: function(t) {
                        var i = t;
                        i.networkType = t.type, e.success(i);
                    },
                    complete: function() {
                        e.complete();
                    }
                });
            }
        }, {
            key: "onNetworkStatusChange",
            value: function(e) {
                qg.subscribeNetworkStatus({
                    callback: function(t) {
                        var i = t;
                        i.networkType = t.type, e(i);
                    }
                });
            }
        }, {
            key: "request",
            value: function(e) {
                return qg.request({
                    url: e.url,
                    data: e.data,
                    method: e.method,
                    header: e.header,
                    success: function(t) {
                        e.success(t);
                    },
                    fail: function(t) {
                        e.fail(t);
                    }
                });
            }
        }, {
            key: "initAutoTrackInstance",
            value: function(e, t) {
                return new S(e, t.autoTrack);
            }
        }, {
            key: "setGlobal",
            value: function(e, t) {
                globalThis[t] = e;
            }
        }, {
            key: "getAppOptions",
            value: function() {
                return {};
            }
        }, {
            key: "showToast",
            value: function(e) {
                qg.showToast({
                    message: e,
                    duration: 0
                });
            }
        }], [{
            key: "createInstance",
            value: function() {
                return new e();
            }
        }]), e;
    }(),
    I = function e(t, n, a) {
        var r = this;
        i(this, e), this.taInstance = t, this.config = n || {}, this.config.appShow && (n = {},
                o.extend(n, this.config.properties), o.isFunction(this.config.callback) && o.extend(n, this.config.callback("appShow")),
                this.taInstance._internalTrack("ta_mg_show", n)), this.config.appHide && this.taInstance.timeEvent("ta_mg_hide"),
            a.onShow(function() {
                var e;
                r.config.appHide && r.taInstance.timeEvent("ta_mg_hide"), r.config.appShow && (e = {},
                    o.extend(e, r.config.properties), o.isFunction(r.config.callback) && o.extend(e, r.config.callback("appShow")),
                    r.taInstance._internalTrack("ta_mg_show", e));
            }), a.onHide(function() {
                var e;
                r.config.appHide && (e = {}, o.extend(e, r.config.properties), o.isFunction(r.config.callback) && o.extend(e, r.config.callback("appHide")),
                    r.taInstance._internalTrack("ta_mg_hide", e));
            });
    },
    P = function() {
        function e(t, n, a) {
            i(this, e), this.api = t, this.config = n, this._config = a;
        }
        return a(e, [{
            key: "getConfig",
            value: function() {
                return this.config || {};
            }
        }, {
            key: "getStorage",
            value: function(e, t, i) {
                if (e = localStorage.getItem(e), !t) return o.isJSONString(e) ? JSON.parse(e) : {};
                o.isJSONString(e) ? i(JSON.parse(e)) : i({});
            }
        }, {
            key: "setStorage",
            value: function(e, t) {
                localStorage.setItem(e, t);
            }
        }, {
            key: "getSystemInfo",
            value: function(e) {
                var t = this._config.mpPlatform;
                this.api.getSystemInfo({
                    success: function(i) {
                        i.mp_platform = t, e.success(i);
                    },
                    complete: function() {
                        e.complete();
                    }
                });
            }
        }, {
            key: "getNetworkType",
            value: function(e) {
                this.api.getNetworkType({
                    success: function(t) {
                        e.success(t);
                    },
                    complete: function() {
                        e.complete();
                    }
                });
            }
        }, {
            key: "onNetworkStatusChange",
            value: function(e) {
                this.api.onNetworkStatusChange({
                    callback: function(t) {
                        e(t);
                    }
                });
            }
        }, {
            key: "request",
            value: function(e) {
                var t = {},
                    i = new XMLHttpRequest();
                if (i.open(e.method, e.url), e.header)
                    for (var n in e.header) i.setRequestHeader(n, e.header[n]);
                return i.onreadystatechange = function() {
                    4 === i.readyState && 200 === i.status ? (t.statusCode = 200, o.isJSONString(i.responseText) && (t.data = JSON.parse(i.responseText)),
                        e.success(t)) : 200 !== i.status && (t.errMsg = "network error", e.fail(t));
                }, i.ontimeout = function() {
                    t.errMsg = "timeout", e.fail(t);
                }, i.send(e.data), i;
            }
        }, {
            key: "initAutoTrackInstance",
            value: function(e, t) {
                return new I(e, t.autoTrack, this.api);
            }
        }, {
            key: "setGlobal",
            value: function(e, t) {
                globalThis[t] = e;
            }
        }, {
            key: "getAppOptions",
            value: function() {
                return this.api.getLaunchOptionsSync();
            }
        }, {
            key: "showToast",
            value: function(e) {
                this.api.showToast({
                    title: e,
                    icon: "none",
                    duration: 2e3
                });
            }
        }], [{
            key: "createInstance",
            value: function() {
                return this._createInstance("R_CURRENT_PLATFORM");
            }
        }, {
            key: "_createInstance",
            value: function(t) {
                switch (t) {
                    case "oppo":
                        return new e(qg, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_qg_oppo_game"
                        }, {
                            mpPlatform: "oppo_qg"
                        });

                    case "huawei":
                        return new e(hbs, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_qg_huawei_game"
                        }, {
                            mpPlatform: "huawei_qg"
                        });

                    case "mz":
                        return new e(qg, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_qg_mz_game"
                        }, {
                            mpPlatform: "mz"
                        });

                    case "xiaomi":
                        return new e(qg, {
                            persistenceName: "thinkingdata",
                            persistenceNameOld: "thinkingdata_qg"
                        }, {
                            mpPlatform: "xiaomi"
                        });
                }
            }
        }]), e;
    }(),
    A = function() {
        function e() {
            i(this, e);
        }
        return a(e, null, [{
            key: "createInstance",
            value: function() {
                var e = Object.freeze({
                    WECHAT_GAME: 104,
                    QQ_PLAY: 105,
                    BAIDU_GAME: 107,
                    VIVO_GAME: 108,
                    OPPO_GAME: 109,
                    HUAWEI_GAME: 110,
                    XIAOMI_GAME: 111,
                    BYTEDANCE_GAME: 117,
                    QTT_GAME: 116,
                    LINKSURE: 119,
                    WECHAT_MINI_GAME: "WECHAT_GAME",
                    BAIDU_MINI_GAME: "BAIDU_MINI_GAME",
                    XIAOMI_QUICK_GAME: "XIAOMI_QUICK_GAME",
                    OPPO_MINI_GAME: "OPPO_MINI_GAME",
                    VIVO_MINI_GAME: "VIVO_MINI_GAME",
                    HUAWEI_QUICK_GAME: "HUAWEI_QUICK_GAME",
                    BYTEDANCE_MINI_GAME: "BYTEDANCE_MINI_GAME",
                    QTT_MINI_GAME: "QTT_MINI_GAME",
                    LINKSURE_MINI_GAME: "LINKSURE_MINI_GAME"
                });
                if (cc.sys.platform === e.WECHAT_GAME || cc.sys.platform === e.WECHAT_MINI_GAME) return k._createInstance("wechat_mg");
                if (cc.sys.platform === e.BAIDU_GAME || cc.sys.platform === e.BAIDU_MIN_GAME) return k._createInstance("baidu_mg");
                if (cc.sys.platform === e.VIVO_GAME || cc.sys.platform === e.VIVO_MINI_GAME) return b.createInstance();
                if (cc.sys.platform === e.QQ_PLAY) return k._createInstance("qq_mg");
                if (cc.sys.platform === e.OPPO_GAME || cc.sys.platform === e.OPPO_MINI_GAME) return P._createInstance("oppo");
                if (cc.sys.platform === e.HUAWEI_GAME || cc.sys.platform === e.HUAWEI_QUICK_GAME) return P._createInstance("huawei");
                if (cc.sys.platform === e.XIAOMI_GAME || cc.sys.platform === e.XIAOMI_QUICK_GAME) return P._createInstance("xiaomi");
                if (cc.sys.platform === e.BYTEDANCE_GAME || cc.sys.platform === e.BYTEDANCE_MINI_GAME) return k._createInstance("tt_mg");
                var t = v.createInstance();
                return t._sysCallback = function() {
                    return {
                        system: cc.sys.os.replace(" ", "") + " " + cc.sys.osVersion
                    };
                }, t.getNetworkType = function(e) {
                    var t = {};
                    switch (cc.sys.getNetworkType()) {
                        case cc.sys.NetworkType.LAN:
                            t.networkType = "WIFI";
                            break;

                        case cc.sys.NetworkType.WWAN:
                            t.networkType = "WWAN";
                            break;

                        default:
                            t.networkType = "NONE";
                    }
                    e.success(t), e.complete();
                }, t.getSystemInfo = function(e) {
                    var i = {
                        mp_platform: cc.sys.platform.toString(),
                        system: t._getOs(),
                        screenWidth: window.screen.width,
                        screenHeight: window.screen.height
                    };
                    t._sysCallback && (i = o.extend(i, t._sysCallback(e))), e.success(i), e.complete();
                }, t;
            }
        }]), e;
    }(),
    N = function() {
        function e() {
            i(this, e);
        }
        return a(e, null, [{
            key: "_getCurrentPlatform",
            value: function() {
                return this.currentPlatform || (this.currentPlatform = A.createInstance());
            }
        }, {
            key: "getConfig",
            value: function() {
                return this._getCurrentPlatform().getConfig();
            }
        }, {
            key: "getStorage",
            value: function(e, t, i) {
                return this._getCurrentPlatform().getStorage(e, t, i);
            }
        }, {
            key: "setStorage",
            value: function(e, t) {
                return this._getCurrentPlatform().setStorage(e, t);
            }
        }, {
            key: "getSystemInfo",
            value: function(e) {
                return this._getCurrentPlatform().getSystemInfo(e);
            }
        }, {
            key: "getNetworkType",
            value: function(e) {
                return this._getCurrentPlatform().getNetworkType(e);
            }
        }, {
            key: "onNetworkStatusChange",
            value: function(e) {
                this._getCurrentPlatform().onNetworkStatusChange(e);
            }
        }, {
            key: "request",
            value: function(e) {
                return this._getCurrentPlatform().request(e);
            }
        }, {
            key: "initAutoTrackInstance",
            value: function(e, t) {
                return this._getCurrentPlatform().initAutoTrackInstance(e, t);
            }
        }, {
            key: "setGlobal",
            value: function(e, t) {
                e && t && this._getCurrentPlatform().setGlobal(e, t);
            }
        }, {
            key: "getAppOptions",
            value: function(e) {
                return this._getCurrentPlatform().getAppOptions(e);
            }
        }, {
            key: "showDebugToast",
            value: function(e) {
                this._getCurrentPlatform().showToast(e);
            }
        }]), e;
    }(),
    C = /^[a-zA-Z][a-zA-Z0-9_]{0,49}$/,
    w = function() {
        function e() {
            i(this, e);
        }
        return a(e, null, [{
            key: "stripProperties",
            value: function(e) {
                return o.isObject(e) && o.each(e, function(e, t) {
                    o.isString(e) || o.isNumber(e) || o.isDate(e) || o.isBoolean(e) || o.isArray(e) || o.isObject(e) || m.warn("Your data -", t, e, "- format does not meet requirements and may not be stored correctly. Attribute values only support String, Number, Date, Boolean, Array, Object");
                }), e;
            }
        }, {
            key: "_checkPropertiesKey",
            value: function(e) {
                var t = !0;
                return o.each(e, function(e, i) {
                    C.test(i) || (m.warn("Invalid KEY: " + i), t = !1);
                }), t;
            }
        }, {
            key: "event",
            value: function(e) {
                return !(!o.isString(e) || !C.test(e)) || (m.warn("Check the parameter format. The eventName must start with an English letter and contain no more than 50 characters including letters, digits, and underscores: " + e), !1);
            }
        }, {
            key: "propertyName",
            value: function(e) {
                return !(!o.isString(e) || !C.test(e)) || (m.warn("Check the parameter format. PropertyName must start with a letter and contain letters, digits, and underscores (_). The value is a string of no more than 50 characters: " + e), !1);
            }
        }, {
            key: "properties",
            value: function(e) {
                return this.stripProperties(e), !(e && (o.isObject(e) ? !this._checkPropertiesKey(e) && (m.warn("Check the parameter format. The properties key must start with a letter, contain digits, letters, and underscores (_), and contain a maximum of 50 characters"),
                    1) : (m.warn("properties can be none, but it must be an object"), 1)));
            }
        }, {
            key: "propertiesMust",
            value: function(e) {
                return this.stripProperties(e), void 0 === e || !o.isObject(e) || o.isEmptyObject(e) ? (m.warn("properties must be an object with a value"), !1) : !!this._checkPropertiesKey(e) || (m.warn("Check the parameter format. The properties key must start with a letter, contain digits, letters, and underscores (_), and contain a maximum of 50 characters"), !1);
            }
        }, {
            key: "userId",
            value: function(e) {
                return !(!o.isString(e) || !/^.{1,64}$/.test(e)) || (m.warn("The user ID must be a string of less than 64 characters and cannot be null"), !1);
            }
        }, {
            key: "userAddProperties",
            value: function(e) {
                if (!this.propertiesMust(e)) return !1;
                for (var t in e)
                    if (!o.isNumber(e[t])) return m.warn("The attributes of userAdd need to be Number"), !1;
                return !0;
            }
        }, {
            key: "userAppendProperties",
            value: function(e) {
                if (!this.propertiesMust(e)) return !1;
                for (var t in e)
                    if (!o.isArray(e[t])) return m.warn("The attribute of userAppend must be Array"), !1;
                return !0;
            }
        }]), e;
    }(),
    O = function() {
        function e(t, n, a, r, s) {
            i(this, e), this.data = t, this.serverUrl = n, this.callback = s, this.tryCount = o.isNumber(a) ? a : 1,
                this.timeout = o.isNumber(r) ? r : 3e3, this.taClassName = "HttpTask";
        }
        return a(e, [{
            key: "run",
            value: function() {
                var e = this,
                    t = o.createExtraHeaders();
                t["content-type"] = "application/json";
                var i = N.request({
                    url: this.serverUrl,
                    method: "POST",
                    data: this.data,
                    header: t,
                    success: function(t) {
                        e.onSuccess(t);
                    },
                    fail: function(t) {
                        e.onFailed(t);
                    }
                });
                setTimeout(function() {
                    (o.isObject(i) || o.isPromise(i)) && o.isFunction(i.abort) && i.abort();
                }, this.timeout);
            }
        }, {
            key: "onSuccess",
            value: function(e) {
                if (200 === e.statusCode) {
                    var t;
                    switch (e.data.code) {
                        case 0:
                            t = "success";
                            break;

                        case -1:
                            t = "invalid data";
                            break;

                        case -2:
                            t = "invalid APP ID";
                            break;

                        default:
                            t = "Unknown return code";
                    }
                    this.callback({
                        code: e.data.code,
                        msg: t
                    });
                } else this.callback({
                    code: -3,
                    msg: e.statusCode
                });
            }
        }, {
            key: "onFailed",
            value: function(e) {
                0 < --this.tryCount ? this.run() : this.callback({
                    code: -3,
                    msg: e.errMsg
                });
            }
        }]), e;
    }(),
    T = function() {
        function e(t, n, a, r, s, c, u) {
            i(this, e), this.data = t, this.serverDebugUrl = n, this.callback = u, this.tryCount = o.isNumber(a) ? a : 1,
                this.timeout = o.isNumber(r) ? r : 3e3, this.dryrun = s, this.deviceId = c, this.taClassName = "HttpTaskDebug";
        }
        return a(e, [{
            key: "run",
            value: function() {
                var e = this,
                    t = "appid=" + this.data["#app_id"] + "&source=client&dryRun=" + this.dryrun + "&deviceId=" + this.deviceId + "&data=" + encodeURIComponent(JSON.stringify(this.data.data[0])),
                    i = o.createExtraHeaders();
                i["content-type"] = "application/x-www-form-urlencoded";
                var n = N.request({
                    url: this.serverDebugUrl,
                    method: "POST",
                    data: t,
                    header: i,
                    success: function(t) {
                        e.onSuccess(t);
                    },
                    fail: function(t) {
                        e.onFailed(t);
                    }
                });
                setTimeout(function() {
                    (o.isObject(n) || o.isPromise(n)) && o.isFunction(n.abort) && n.abort();
                }, this.timeout);
            }
        }, {
            key: "onSuccess",
            value: function(e) {
                if (200 === e.statusCode) {
                    var t;
                    if (0 === e.data.errorLevel) t = "Verify data success.";
                    else if (1 === e.data.errorLevel) {
                        for (var i = e.data.errorProperties, n = "", a = 0; a < i.length; a++) {
                            var r = i[a].errorReason;
                            n = n + " propertyName:" + i[a].propertyName + " errorReasons:" + r + "\n";
                        }
                        t = "Debug data error. errorLevel:" + e.data.errorLevel + " reason:" + n;
                    } else 2 !== e.data.errorLevel && -1 !== e.data.errorLevel || (t = "Debug data error. errorLevel:" + e.data.errorLevel + " reason:" + e.data.errorReasons);
                    m.info(t), this.callback({
                        code: e.data.errorLevel,
                        msg: t
                    });
                } else this.callback({
                    code: -3,
                    msg: e.statusCode
                });
            }
        }, {
            key: "onFailed",
            value: function(e) {
                0 < --this.tryCount ? this.run() : this.callback({
                    code: -3,
                    msg: e.errMsg
                });
            }
        }]), e;
    }(),
    j = new(function() {
        function e() {
            i(this, e), this.items = [], this.isRunning = !1, this.showDebug = !1;
        }
        return a(e, [{
            key: "enqueue",
            value: function(e, t, i, n) {
                n = !(3 < arguments.length && void 0 !== n) || n;
                var a = this;
                t = "debug" === i.debugMode ? new T(e, t, i.maxRetries, i.sendTimeout, 0, i.deviceId, function(e) {
                    a.isRunning = !1, o.isFunction(i.callback) && i.callback(e), a._runNext(), !1 === a.showDebug && (0 !== e.code && 1 !== e.code && 2 !== e.code || (a.showDebug = !0,
                        o.isFunction(N.showDebugToast) && N.showDebugToast("The current mode is Debug")));
                }) : "debugOnly" === i.debugMode ? new T(e, t, i.maxRetries, i.sendTimeout, 1, i.deviceId, function(e) {
                    a.isRunning = !1, o.isFunction(i.callback) && i.callback(e), a._runNext(), !1 === a.showDebug && (0 !== e.code && 1 !== e.code && 2 !== e.code || (a.showDebug = !0,
                        o.isFunction(N.showDebugToast) && N.showDebugToast("The current mode is debugOnly")));
                }) : new O(JSON.stringify(e), t, i.maxRetries, i.sendTimeout, function(e) {
                    a.isRunning = !1, o.isFunction(i.callback) && i.callback(e), a._runNext();
                }), !0 === n ? (this.items.push(t), this._runNext()) : t.run();
            }
        }, {
            key: "_dequeue",
            value: function() {
                return this.items.shift();
            }
        }, {
            key: "_runNext",
            value: function() {
                if (0 < this.items.length && !this.isRunning)
                    if (this.isRunning = !0, "HttpTask" !== this.items[0].taClassName) this._dequeue().run();
                    else {
                        for (var e = this.items.splice(0, this.items.length), t = e[0], i = JSON.parse(t.data), n = i["#app_id"], a = 1; a < e.length; a++) {
                            var r = e[a],
                                s = JSON.parse(r.data);
                            s["#app_id"] === n && t.serverUrl === r.serverUrl ? i.data = i.data.concat(s.data) : this.items.push(r);
                        }
                        var o = new Date().getTime();
                        i["#flush_time"] = o, new O(JSON.stringify(i), t.serverUrl, t.tryCount, t.timeout, t.callback).run();
                    }
            }
        }]), e;
    }())(),
    x = {
        name: "thinkingdata",
        is_plugin: !1,
        maxRetries: 3,
        sendTimeout: 3e3,
        enablePersistence: !0,
        asyncPersistence: !1,
        enableLog: !0,
        strict: !1,
        debugMode: "none"
    },
    D = {
        properties: {
            "#lib": s,
            "#lib_version": r
        },
        initDeviceId: function(e) {
            o.isString(e) && (this.properties["#device_id"] = e);
        },
        getSystemInfo: function(e) {
            var t = this;
            N.onNetworkStatusChange(function(e) {
                t.properties["#network_type"] = e.networkType;
            }), N.getNetworkType({
                success: function(e) {
                    t.properties["#network_type"] = e.networkType;
                },
                complete: function() {
                    N.getSystemInfo({
                        success: function(e) {
                            m.info(JSON.stringify(e, null, 4));
                            var i = e.system ? e.system.replace(/\s+/g, " ").split(" ") : [];
                            i = {
                                "#manufacturer": e.brand,
                                "#device_model": e.model,
                                "#screen_width": Number(e.screenWidth),
                                "#screen_height": Number(e.screenHeight),
                                "#os": i[0],
                                "#os_version": i[1],
                                "#mp_platform": e.mp_platform,
                                "#system_language": e.systemLanguage
                            }, o.extend(t.properties, i), o.setMpPlatform(e.mp_platform);
                        },
                        complete: function() {
                            e();
                        }
                    });
                }
            });
        }
    },
    M = function() {
        function e(t, n) {
            var a = this;
            i(this, e), this.enabled = t.enablePersistence, this.enabled ? (t.isChildInstance ? (this.name = t.persistenceName + "_" + t.name,
                this.nameOld = t.persistenceNameOld + "_" + t.name) : (this.name = t.persistenceName,
                this.nameOld = t.persistenceNameOld), t.asyncPersistence ? (this._state = {}, N.getStorage(this.name, !0, function(e) {
                o.isEmptyObject(e) ? N.getStorage(a.nameOld, !0, function(e) {
                    a._state = o.extend2Layers({}, e, a._state), a._init(t, n), a._save();
                }) : (a._state = o.extend2Layers({}, e, a._state), a._init(t, n), a._save());
            })) : (this._state = N.getStorage(this.name) || {}, o.isEmptyObject(this._state) && (this._state = N.getStorage(this.nameOld) || {}),
                this._init(t, n))) : (this._state = {}, this._init(t, n));
        }
        return a(e, [{
            key: "_init",
            value: function(e, t) {
                this.getDistinctId() || this.setDistinctId(o.UUID()), e.isChildInstance || (this.getDeviceId() || this._setDeviceId(o.UUID()),
                        D.initDeviceId(this.getDeviceId())), this.initComplete = !0, "function" == typeof t && t(),
                    this._save();
            }
        }, {
            key: "_save",
            value: function() {
                this.enabled && this.initComplete && N.setStorage(this.name, JSON.stringify(this._state));
            }
        }, {
            key: "_set",
            value: function(e, i) {
                var n, a = this;
                "string" == typeof e ? (n = {})[e] = i : "object" === t(e) && (n = e), o.each(n, function(e, t) {
                    a._state[t] = e;
                }), this._save();
            }
        }, {
            key: "_get",
            value: function(e) {
                return this._state[e];
            }
        }, {
            key: "setEventTimer",
            value: function(e, t) {
                var i = this._state.event_timers || {};
                i[e] = t, this._set("event_timers", i);
            }
        }, {
            key: "removeEventTimer",
            value: function(e) {
                var t = (this._state.event_timers || {})[e];
                return o.isUndefined(t) || (delete this._state.event_timers[e], this._save()), t;
            }
        }, {
            key: "getDeviceId",
            value: function() {
                return this._state.device_id;
            }
        }, {
            key: "_setDeviceId",
            value: function(e) {
                this.getDeviceId() ? m.warn("cannot modify the device id.") : this._set("device_id", e);
            }
        }, {
            key: "getDistinctId",
            value: function() {
                return this._state.distinct_id;
            }
        }, {
            key: "setDistinctId",
            value: function(e) {
                this._set("distinct_id", e);
            }
        }, {
            key: "getAccountId",
            value: function() {
                return this._state.account_id;
            }
        }, {
            key: "setAccountId",
            value: function(e) {
                this._set("account_id", e);
            }
        }, {
            key: "getSuperProperties",
            value: function() {
                return this._state.props || {};
            }
        }, {
            key: "setSuperProperties",
            value: function(e, t) {
                e = t ? e : o.extend(this.getSuperProperties(), e), this._set("props", e);
            }
        }]), e;
    }(),
    E = function() {
        function e(t) {
            i(this, e), t.appId = t.appId ? o.checkAppId(t.appId) : o.checkAppId(t.appid), t.serverUrl = t.serverUrl ? o.checkUrl(t.serverUrl) : o.checkUrl(t.server_url);
            var n = o.extend({}, x, N.getConfig());
            o.isObject(t) ? this.config = o.extend(n, t) : this.config = n, this._init(this.config);
        }
        return a(e, [{
            key: "_init",
            value: function(e) {
                var t = this;
                this.name = e.name, this.appId = e.appId || e.appid;
                var i = e.serverUrl || e.server_url;
                this.serverUrl = i + "/sync_xcx", this.serverDebugUrl = i + "/data_debug", this.configUrl = i + "/config",
                    this.autoTrackProperties = {}, this._queue = [], this.updateConfig(this.configUrl, this.appId),
                    e.isChildInstance ? this._state = {} : (m.enabled = e.enableLog, this.instances = [],
                        this._state = {
                            getSystemInfo: !1,
                            initComplete: !1
                        }, D.getSystemInfo(function() {
                            t._updateState({
                                getSystemInfo: !0
                            });
                        }), N.setGlobal(this, this.name)), this.store = new M(e, function() {
                        t.config.asyncPersistence && o.isFunction(t.config.persistenceComplete) && t.config.persistenceComplete(t),
                            t._updateState();
                    }), this.enabled = !o.isBoolean(this.store._get("ta_enabled")) || this.store._get("ta_enabled"),
                    this.isOptOut = !!o.isBoolean(this.store._get("ta_isOptOut")) && this.store._get("ta_isOptOut"), !e.isChildInstance && e.autoTrack && (this.autoTrack = N.initAutoTrackInstance(this, e));
            }
        }, {
            key: "updateConfig",
            value: function(e, t) {
                var i = this,
                    n = o.createExtraHeaders();
                n["content-type"] = "application/json";
                var a = N.request({
                    url: e + "?appid=" + t,
                    method: "GET",
                    header: n,
                    success: function(e) {
                        o.isUndefined(e) || o.isUndefined(e.data) || (m.info("config update success(" + t + ") :" + JSON.stringify(e.data)),
                            o.isUndefined(e.data.data) || (i.config.syncBatchSize = e.data.data.sync_batch_size,
                                i.config.syncInterval = e.data.data.sync_interval, i.config.disableEventList = e.data.data.disable_event_list,
                                o.isUndefined(e.data.data.secret_key) || (e = e.data.data.secret_key, i.config.secretKey = {
                                    publicKey: e.key,
                                    version: e.version
                                })));
                    },
                    fail: function(e) {
                        m.info("config update fail(" + t + ") :" + e.errMsg);
                    }
                });
                setTimeout(function() {
                    (o.isObject(a) || o.isPromise(a)) && o.isFunction(a.abort) && a.abort();
                }, 3e3);
            }
        }, {
            key: "initInstance",
            value: function(t, i) {
                if (this.config.isChildInstance) m.warn("initInstance() cannot be called on child instance");
                else {
                    if (o.isString(t) && t !== this.name && o.isUndefined(this[t])) return i = new e(o.extend({}, this.config, {
                        enablePersistence: !1,
                        isChildInstance: !0,
                        name: t
                    }, i)), this[t] = i, this.instances.push(t), this[t]._state = this._state, i;
                    m.warn("initInstance() failed due to the name is invalid: " + t);
                }
            }
        }, {
            key: "lightInstance",
            value: function(e) {
                return this[e];
            }
        }, {
            key: "_setAutoTrackProperties",
            value: function(e) {
                o.extend(this.autoTrackProperties, e);
            }
        }, {
            key: "init",
            value: function() {
                if (this._state.initComplete) return !1;
                this._updateState({
                    initComplete: !0
                });
            }
        }, {
            key: "_isReady",
            value: function() {
                return this._state.getSystemInfo && this._state.initComplete && this.store.initComplete && this.getDeviceId();
            }
        }, {
            key: "_updateState",
            value: function(e) {
                var t = this;
                o.isObject(e) && o.extend(this._state, e), this._onStateChange(), o.each(this.instances, function(e) {
                    t[e]._onStateChange();
                });
            }
        }, {
            key: "_onStateChange",
            value: function() {
                var e = this;
                this._isReady() && this._queue && 0 < this._queue.length && (o.each(this._queue, function(t) {
                    e[t[0]].apply(e, l.call(t[1]));
                }), this._queue = []);
            }
        }, {
            key: "_hasDisabled",
            value: function() {
                var e = !this.enabled || this.isOptOut;
                return e && m.info("ThinkingData is Pause or Stop!"), e;
            }
        }, {
            key: "_sendRequest",
            value: function(e, t, i) {
                var n, a, r;
                this._hasDisabled() || (o.isUndefined(this.config.disableEventList) || !this.config.disableEventList.includes(e.eventName) ? (t = o.isDate(t) ? t : new Date(),
                    n = {
                        data: [{
                            "#type": e.type,
                            "#time": o.formatDate(t),
                            "#distinct_id": this.store.getDistinctId()
                        }]
                    }, this.store.getAccountId() && (n.data[0]["#account_id"] = this.store.getAccountId()),
                    "track" === e.type || "track_update" === e.type || "track_overwrite" === e.type ? (n.data[0]["#event_name"] = e.eventName,
                        "track_update" === e.type || "track_overwrite" === e.type ? n.data[0]["#event_id"] = e.extraId : e.firstCheckId && (n.data[0]["#first_check_id"] = e.firstCheckId),
                        n.data[0].properties = o.extend({
                            "#zone_offset": 0 - t.getTimezoneOffset() / 60
                        }, D.properties, this.autoTrackProperties, this.store.getSuperProperties(), this.dynamicProperties ? this.dynamicProperties() : {}),
                        t = this.store.removeEventTimer(e.eventName), o.isUndefined(t) || (a = new Date().getTime() - t,
                            86400 < (r = parseFloat((a / 1e3).toFixed(3))) ? r = 86400 : r < 0 && (r = 0), n.data[0].properties["#duration"] = r)) : n.data[0].properties = {},
                    o.isObject(e.properties) && !o.isEmptyObject(e.properties) && o.extend(n.data[0].properties, e.properties),
                    o.searchObjDate(n.data[0]), 1 < this.config.maxRetries && (n.data[0]["#uuid"] = o.UUIDv4()),
                    n["#app_id"] = this.appId, m.info(JSON.stringify(n, null, 4)), a = "debug" === this.config.debugMode || "debugOnly" === this.config.debugMode ? this.serverDebugUrl : this.serverUrl,
                    o.isBoolean(this.config.enableEncrypt) && 1 == this.config.enableEncrypt && (n.data[0] = o.generateEncryptyData(n.data[0], this.config.secretKey)),
                    i ? (r = new FormData(), "debug" === this.config.debugMode || "debugOnly" === this.config.debugMode ? (r.append("source", "client"),
                        r.append("appid", this.appId), r.append("dryRun", "debugOnly" === this.config.debugMode ? 1 : 0),
                        r.append("deviceId", this.getDeviceId()), r.append("data", JSON.stringify(n.data[0]))) : (i = o.base64Encode(JSON.stringify(n)),
                        r.append("data", i)), navigator.sendBeacon(a, r), o.isFunction(e.onComplete) && e.onComplete({
                        statusCode: 200
                    })) : j.enqueue(n, a, {
                        maxRetries: this.config.maxRetries,
                        sendTimeout: this.config.sendTimeout,
                        callback: e.onComplete,
                        debugMode: this.config.debugMode,
                        deviceId: this.getDeviceId()
                    })) : m.info("disabled Event : " + e.eventName));
            }
        }, {
            key: "_isObjectParams",
            value: function(e) {
                return o.isObject(e) && o.isFunction(e.onComplete);
            }
        }, {
            key: "track",
            value: function(e, t, i, n) {
                var a;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (a = e).eventName, t = a.properties,
                    i = a.time, n = a.onComplete), w.event(e) && w.properties(t) || !this.config.strict ? this._internalTrack(e, t, i, n) : o.isFunction(n) && n({
                    code: -1,
                    msg: "invalid parameters"
                }));
            }
        }, {
            key: "trackUpdate",
            value: function(e) {
                var t;
                this._hasDisabled() || (e && e.eventId && (w.event(e.eventName) && w.properties(e.properties) || !this.config.strict) ? (t = o.isDate(e.time) ? e.time : new Date(),
                    this._isReady() ? this._sendRequest({
                        type: "track_update",
                        eventName: e.eventName,
                        properties: e.properties,
                        onComplete: e.onComplete,
                        extraId: e.eventId
                    }, t) : (e.time = t, this._queue.push(["trackUpdate", [e]]))) : (m.warn("Invalide parameter for trackUpdate: you should pass an object contains eventId to trackUpdate()"),
                    o.isFunction(e.onComplete) && e.onComplete({
                        code: -1,
                        msg: "invalid parameters"
                    })));
            }
        }, {
            key: "trackOverwrite",
            value: function(e) {
                var t;
                this._hasDisabled() || (e && e.eventId && (w.event(e.eventName) && w.properties(e.properties) || !this.config.strict) ? (t = o.isDate(e.time) ? e.time : new Date(),
                    this._isReady() ? this._sendRequest({
                        type: "track_overwrite",
                        eventName: e.eventName,
                        properties: e.properties,
                        onComplete: e.onComplete,
                        extraId: e.eventId
                    }, t) : (e.time = t, this._queue.push(["trackOverwrite", [e]]))) : (m.warn("Invalide parameter for trackOverwrite: you should pass an object contains eventId to trackOverwrite()"),
                    o.isFunction(e.onComplete) && e.onComplete({
                        code: -1,
                        msg: "invalid parameters"
                    })));
            }
        }, {
            key: "trackFirstEvent",
            value: function(e) {
                var t;
                this._hasDisabled() || (e && e.eventName && (w.event(e.eventName) && w.properties(e.properties) || !this.config.strict) ? (t = o.isDate(e.time) ? e.time : new Date(),
                    this._isReady() ? this._sendRequest({
                        type: "track",
                        eventName: e.eventName,
                        properties: e.properties,
                        onComplete: e.onComplete,
                        firstCheckId: e.firstCheckId || this.getDeviceId()
                    }, t) : (e.time = t, this._queue.push(["trackFirstEvent", [e]]))) : (m.warn("Invalide parameter for trackFirstEvent: you should pass an object contains eventName to trackFirstEvent()"),
                    o.isFunction(e.onComplete) && e.onComplete({
                        code: -1,
                        msg: "invalid parameters"
                    })));
            }
        }, {
            key: "_internalTrack",
            value: function(e, t, i, n, a) {
                this._hasDisabled() || (i = o.isDate(i) ? i : new Date(), this._isReady() ? this._sendRequest({
                    type: "track",
                    eventName: e,
                    properties: t,
                    onComplete: n
                }, i, a) : this._queue.push(["_internalTrack", [e, t, i, n]]));
            }
        }, {
            key: "userSet",
            value: function(e, t, i) {
                var n;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (n = e).properties, t = n.time,
                    i = n.onComplete), w.propertiesMust(e) || !this.config.strict ? (t = o.isDate(t) ? t : new Date(),
                    this._isReady() ? this._sendRequest({
                        type: "user_set",
                        properties: e,
                        onComplete: i
                    }, t) : this._queue.push(["userSet", [e, t, i]])) : (m.warn("calling userSet failed due to invalid arguments"),
                    o.isFunction(i) && i({
                        code: -1,
                        msg: "invalid parameters"
                    })));
            }
        }, {
            key: "userSetOnce",
            value: function(e, t, i) {
                var n;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (n = e).properties, t = n.time,
                    i = n.onComplete), w.propertiesMust(e) || !this.config.strict ? (t = o.isDate(t) ? t : new Date(),
                    this._isReady() ? this._sendRequest({
                        type: "user_setOnce",
                        properties: e,
                        onComplete: i
                    }, t) : this._queue.push(["userSetOnce", [e, t, i]])) : (m.warn("calling userSetOnce failed due to invalid arguments"),
                    o.isFunction(i) && i({
                        code: -1,
                        msg: "invalid parameters"
                    })));
            }
        }, {
            key: "userUnset",
            value: function(e, t, i) {
                var n;
                this._hasDisabled() || (this._isObjectParams(n) && (e = n.property, t = n.time,
                    i = n.onComplete), w.propertyName(e) || !this.config.strict ? (t = o.isDate(t) ? t : new Date(),
                    this._isReady() ? ((n = {})[e] = 0, this._sendRequest({
                        type: "user_unset",
                        properties: n,
                        onComplete: i
                    }, t)) : this._queue.push(["userUnset", [e, i, t]])) : (m.warn("calling userUnset failed due to invalid arguments"),
                    o.isFunction(i) && i({
                        code: -1,
                        msg: "invalid parameters"
                    })));
            }
        }, {
            key: "userDel",
            value: function(e, t) {
                var i;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (i = e).time, t = i.onComplete),
                    e = o.isDate(e) ? e : new Date(), this._isReady() ? this._sendRequest({
                        type: "user_del",
                        onComplete: t
                    }, e) : this._queue.push(["userDel", [e, t]]));
            }
        }, {
            key: "userAdd",
            value: function(e, t, i) {
                var n;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (n = e).properties, t = n.time,
                    i = n.onComplete), w.userAddProperties(e) || !this.config.strict ? (t = o.isDate(t) ? t : new Date(),
                    this._isReady() ? this._sendRequest({
                        type: "user_add",
                        properties: e,
                        onComplete: i
                    }, t) : this._queue.push(["userAdd", [e, t, i]])) : (m.warn("calling userAdd failed due to invalid arguments"),
                    o.isFunction(i) && i({
                        code: -1,
                        msg: "invalid parameters"
                    })));
            }
        }, {
            key: "userAppend",
            value: function(e, t, i) {
                var n;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (n = e).properties, t = n.time,
                    i = n.onComplete), w.userAppendProperties(e) || !this.config.strict ? (t = o.isDate(t) ? t : new Date(),
                    this._isReady() ? this._sendRequest({
                        type: "user_append",
                        properties: e,
                        onComplete: i
                    }, t) : this._queue.push(["userAppend", [e, t, i]])) : (m.warn("calling userAppend failed due to invalid arguments"),
                    o.isFunction(i) && i({
                        code: -1,
                        msg: "invalid parameters"
                    })));
            }
        }, {
            key: "userUniqAppend",
            value: function(e, t, i) {
                var n;
                this._hasDisabled() || (this._isObjectParams(e) && (e = (n = e).properties, t = n.time,
                    i = n.onComplete), w.userAppendProperties(e) || !this.config.strict ? (t = o.isDate(t) ? t : new Date(),
                    this._isReady() ? this._sendRequest({
                        type: "user_uniq_append",
                        properties: e,
                        onComplete: i
                    }, t) : this._queue.push(["userUniqAppend", [e, t, i]])) : (m.warn("calling userAppend failed due to invalid arguments"),
                    o.isFunction(i) && i({
                        code: -1,
                        msg: "invalid parameters"
                    })));
            }
        }, {
            key: "authorizeOpenID",
            value: function(e) {
                this.identify(e);
            }
        }, {
            key: "identify",
            value: function(e) {
                if (!this._hasDisabled()) {
                    if ("number" == typeof e) e = String(e);
                    else if ("string" != typeof e) return !1;
                    this.store.setDistinctId(e);
                }
            }
        }, {
            key: "getDistinctId",
            value: function() {
                return this.store.getDistinctId();
            }
        }, {
            key: "login",
            value: function(e) {
                if (!this._hasDisabled()) {
                    if ("number" == typeof e) e = String(e);
                    else if ("string" != typeof e) return !1;
                    this.store.setAccountId(e);
                }
            }
        }, {
            key: "getAccountId",
            value: function() {
                return this.store.getAccountId();
            }
        }, {
            key: "logout",
            value: function() {
                this._hasDisabled() || this.store.setAccountId(null);
            }
        }, {
            key: "setSuperProperties",
            value: function(e) {
                this._hasDisabled() || (w.propertiesMust(e) || !this.config.strict ? this.store.setSuperProperties(e) : m.warn("setSuperProperties parameter must be a valid property value"));
            }
        }, {
            key: "clearSuperProperties",
            value: function() {
                this._hasDisabled() || this.store.setSuperProperties({}, !0);
            }
        }, {
            key: "unsetSuperProperty",
            value: function(e) {
                var t;
                this._hasDisabled() || o.isString(e) && (delete(t = this.getSuperProperties())[e],
                    this.store.setSuperProperties(t, !0));
            }
        }, {
            key: "getSuperProperties",
            value: function() {
                return this.store.getSuperProperties();
            }
        }, {
            key: "getPresetProperties",
            value: function() {
                var e = D.properties,
                    t = {},
                    i = e["#os"];
                t.os = o.isUndefined(i) ? "" : i, i = e["#screen_width"], t.screenWidth = o.isUndefined(i) ? 0 : i,
                    i = e["#screen_height"], t.screenHeight = o.isUndefined(i) ? 0 : i, i = e["#network_type"],
                    t.networkType = o.isUndefined(i) ? "" : i, i = e["#device_model"], t.deviceModel = o.isUndefined(i) ? "" : i,
                    i = e["#os_version"], t.osVersion = o.isUndefined(i) ? "" : i, t.deviceId = this.getDeviceId();
                var n = 0 - new Date().getTimezoneOffset() / 60;
                return t.zoneOffset = n, e = e["#manufacturer"], t.manufacturer = o.isUndefined(e) ? "" : e,
                    t.toEventPresetProperties = function() {
                        return {
                            "#device_model": t.deviceModel,
                            "#device_id": t.deviceId,
                            "#screen_width": t.screenWidth,
                            "#screen_height": t.screenHeight,
                            "#os": t.os,
                            "#os_version": t.osVersion,
                            "#network_type": t.networkType,
                            "#zone_offset": n,
                            "#manufacturer": t.manufacturer
                        };
                    }, t;
            }
        }, {
            key: "setDynamicSuperProperties",
            value: function(e) {
                this._hasDisabled() || ("function" == typeof e ? w.properties(e()) || !this.config.strict ? this.dynamicProperties = e : m.warn("A dynamic public property must return a valid property value") : m.warn("setDynamicSuperProperties parameter must be a function type"));
            }
        }, {
            key: "timeEvent",
            value: function(e, t) {
                this._hasDisabled() || (t = o.isDate(t) ? t : new Date(), this._isReady() ? w.event(e) || !this.config.strict ? this.store.setEventTimer(e, t.getTime()) : m.warn("calling timeEvent failed due to invalid eventName: " + e) : this._queue.push(["timeEvent", [e, t]]));
            }
        }, {
            key: "getDeviceId",
            value: function() {
                return D.properties["#device_id"];
            }
        }, {
            key: "enableTracking",
            value: function(e) {
                this.enabled = e, this.store._set("ta_enabled", e);
            }
        }, {
            key: "optOutTracking",
            value: function() {
                this.store.setSuperProperties({}, !0), this.store.setDistinctId(o.UUID()), this.store.setAccountId(null),
                    this._queue.splice(0, this._queue.length), this.isOptOut = !0, this.store._set("ta_isOptOut", !0);
            }
        }, {
            key: "optOutTrackingAndDeleteUser",
            value: function() {
                var e = new Date();
                this._sendRequest({
                    type: "user_del"
                }, e), this.optOutTracking();
            }
        }, {
            key: "optInTracking",
            value: function() {
                this.isOptOut = !1, this.store._set("ta_isOptOut", !1);
            }
        }, {
            key: "setTrackStatus",
            value: function(e) {
                switch (e) {
                    case "PAUSE":
                        this.eventSaveOnly = !1, this.optInTracking(), this.enableTracking(!1);
                        break;

                    case "STOP":
                        this.eventSaveOnly = !1, this.optOutTracking(!0);
                        break;

                    case "SAVE_ONLY":
                    case "NORMAL":
                    default:
                        this.eventSaveOnly = !1, this.optInTracking(), this.enableTracking(!0);
                }
            }
        }]), e;
    }(),
    U = {
        name: "thinkingdata",
        enableLog: !0,
        enableNative: !1
    },
    F = function() {
        function e(t) {
            i(this, e), t.appId = t.appId ? o.checkAppId(t.appId) : o.checkAppId(t.appid), t.serverUrl = t.serverUrl ? o.checkUrl(t.serverUrl) : o.checkUrl(t.server_url);
            var n = o.extend({}, U, N.getConfig());
            o.isObject(t) ? this.config = o.extend(n, t) : this.config = n, this._init(this.config);
        }
        return a(e, [{
            key: "_isNativePlatform",
            value: function() {
                return !(!this._isIOS() && !this._isAndroid() || !this.config.enableNative);
            }
        }, {
            key: "_isIOS",
            value: function() {
                return !(!cc.sys.isNative || "iOS" !== cc.sys.os);
            }
        }, {
            key: "_isAndroid",
            value: function() {
                return !(!cc.sys.isNative || "Android" !== cc.sys.os);
            }
        }, {
            key: "_init",
            value: function(e) {
                this.name = e.name, this.appId = e.appId || e.appid, this._isNativePlatform() ? (this.initInstanceForNative(this.name, e, this.appId),
                    this._readStorage(e)) : this.taJs = new ThinkingAnalyticsAPIForJS(e);
            }
        }, {
            key: "_readStorage",
            value: function(e) {
                var t = this,
                    i = e.persistenceName,
                    n = e.persistenceNameOld;
                e.isChildInstance && (i = e.persistenceName + "_" + e.name, n = e.persistenceNameOld + "_" + e.name),
                    this._state = N.getStorage(i) || {}, o.isEmptyObject(this._state) && (this._state = N.getStorage(n) || {}),
                    o.isEmptyObject(this._state) ? N.getStorage(i, !0, function(e) {
                        o.isEmptyObject(e) ? N.getStorage(n, !0, function(e) {
                                t._state = o.extend2Layers({}, e, t._state);
                            }) : t._state = o.extend2Layers({}, e, t._state), t._state.distinct_id && t.identifyForNative(t._state.distinct_id),
                            t._state.account_id && t.loginForNative(t._state.account_id);
                    }) : (this._state.distinct_id && this.identifyForNative(this._state.distinct_id),
                        this._state.account_id && this.loginForNative(this._state.account_id));
            }
        }, {
            key: "initInstance",
            value: function(e, t) {
                return this._isNativePlatform() ? o.isUndefined(t) ? this[e] = new ThinkingAnalyticsAPI(this.config) : this[e] = new ThinkingAnalyticsAPI(t) : this[e] = this.taJs.initInstance(e, t),
                    this[e];
            }
        }, {
            key: "lightInstance",
            value: function(e) {
                return this[e];
            }
        }, {
            key: "init",
            value: function() {
                if (this._isNativePlatform()) {
                    var e = window,
                        t = this;
                    return e.__autoTrackCallback = function(e) {
                        return o.isFunction(t.config.autoTrack.callback) ? (e = t.config.autoTrack.callback(e),
                            JSON.stringify(e)) : "{}";
                    }, void this.startThinkingAnalyticsForNative();
                }
                this.taJs.init();
            }
        }, {
            key: "track",
            value: function(e, t, i, n) {
                this._isNativePlatform() ? this.trackForNative(e, t, i, this.appId) : this.taJs.track(e, t, i, n);
            }
        }, {
            key: "trackUpdate",
            value: function(e) {
                this._isNativePlatform() ? this.trackUpdateForNative(e, this.appId) : this.taJs.trackUpdate(e);
            }
        }, {
            key: "trackOverwrite",
            value: function(e) {
                this._isNativePlatform() ? this.trackOverwriteForNative(e, this.appId) : this.taJs.trackOverwrite(e);
            }
        }, {
            key: "trackFirstEvent",
            value: function(e) {
                this._isNativePlatform() ? this.trackFirstEventForNative(e, this.appId) : this.taJs.trackFirstEvent(e);
            }
        }, {
            key: "userSet",
            value: function(e, t, i) {
                this._isNativePlatform() ? this.userSetForNative(e, this.appId) : this.taJs.userSet(e, t, i);
            }
        }, {
            key: "userSetOnce",
            value: function(e, t, i) {
                this._isNativePlatform() ? this.userSetOnceForNative(e, this.appId) : this.taJs.userSetOnce(e, t, i);
            }
        }, {
            key: "userUnset",
            value: function(e, t, i) {
                this._isNativePlatform() ? this.userUnsetForNative(e, this.appId) : this.taJs.userUnset(e, t, i);
            }
        }, {
            key: "userDel",
            value: function(e, t) {
                this._isNativePlatform() ? this.userDelForNative(this.appId) : this.taJs.userDel(e, t);
            }
        }, {
            key: "userAdd",
            value: function(e, t, i) {
                this._isNativePlatform() ? this.userAddForNative(e, this.appId) : this.taJs.userAdd(e, t, i);
            }
        }, {
            key: "userAppend",
            value: function(e, t, i) {
                this._isNativePlatform() ? this.userAppendForNative(e, this.appId) : this.taJs.userAppend(e, t, i);
            }
        }, {
            key: "userUniqAppend",
            value: function(e, t, i) {
                this._isNativePlatform() ? this.userUniqAppendForNative(e, this.appId) : this.taJs.userUniqAppend(e, t, i);
            }
        }, {
            key: "authorizeOpenID",
            value: function(e) {
                this.identify(e);
            }
        }, {
            key: "identify",
            value: function(e) {
                this._isNativePlatform() ? this.identifyForNative(e, this.appId) : this.taJs.identify(e);
            }
        }, {
            key: "getDistinctId",
            value: function() {
                return this._isNativePlatform() ? this.getDistinctIdForNative(this.appId) : this.taJs.getDistinctId();
            }
        }, {
            key: "login",
            value: function(e) {
                this._isNativePlatform() ? this.loginForNative(e, this.appId) : this.taJs.login(e);
            }
        }, {
            key: "getAccountId",
            value: function() {
                return this._isNativePlatform() ? this.getAccountIdForNative(this.appId) : this.taJs.getAccountId();
            }
        }, {
            key: "logout",
            value: function() {
                this._isNativePlatform() ? this.logoutForNative(this.appId) : this.taJs.logout();
            }
        }, {
            key: "setSuperProperties",
            value: function(e) {
                this._isNativePlatform() ? this.setSuperPropertiesForNative(e, this.appId) : this.taJs.setSuperProperties(e);
            }
        }, {
            key: "clearSuperProperties",
            value: function() {
                this._isNativePlatform() ? this.clearSuperPropertiesForNative(this.appId) : this.taJs.clearSuperProperties();
            }
        }, {
            key: "unsetSuperProperty",
            value: function(e) {
                this._isNativePlatform() ? this.unsetSuperPropertyForNative(e, this.appId) : this.taJs.unsetSuperProperty(e);
            }
        }, {
            key: "getSuperProperties",
            value: function() {
                return this._isNativePlatform() ? this.getSuperPropertiesForNative(this.appId) : this.taJs.getSuperProperties();
            }
        }, {
            key: "getPresetProperties",
            value: function() {
                if (this._isNativePlatform()) {
                    var e = this.getPresetPropertiesForNative(this.appId),
                        t = {},
                        i = e["#os"];
                    t.os = o.isUndefined(i) ? "" : i, i = e["#screen_width"], t.screenWidth = o.isUndefined(i) ? 0 : i,
                        i = e["#screen_height"], t.screenHeight = o.isUndefined(i) ? 0 : i, i = e["#network_type"],
                        t.networkType = o.isUndefined(i) ? "" : i, i = e["#device_model"], t.deviceModel = o.isUndefined(i) ? "" : i,
                        i = e["#os_version"], t.osVersion = o.isUndefined(i) ? "" : i, t.deviceId = this.getDeviceId();
                    var n = 0 - new Date().getTimezoneOffset() / 60;
                    return t.zoneOffset = n, e = e["#manufacturer"], t.manufacturer = o.isUndefined(e) ? "" : e,
                        t.toEventPresetProperties = function() {
                            return {
                                "#device_model": t.deviceModel,
                                "#device_id": t.deviceId,
                                "#screen_width": t.screenWidth,
                                "#screen_height": t.screenHeight,
                                "#os": t.os,
                                "#os_version": t.osVersion,
                                "#network_type": t.networkType,
                                "#zone_offset": n,
                                "#manufacturer": t.manufacturer
                            };
                        }, t;
                }
                return this.taJs.getPresetProperties();
            }
        }, {
            key: "setDynamicSuperProperties",
            value: function(e) {
                this._isNativePlatform() ? "function" == typeof e ? (this.dynamicProperties = e,
                    window.__dynamicPropertiesForNative = function(t) {
                        return console.log("__dynamicPropertiesForNative: native msg: ", t), t = e(), t = o.encodeDates(t),
                            JSON.stringify(t);
                    }, this.setDynamicSuperPropertiesForNative("__dynamicPropertiesForNative")) : logger.warn("setDynamicSuperProperties parameter must be a function type") : this.taJs.setDynamicSuperProperties(e);
            }
        }, {
            key: "timeEvent",
            value: function(e, t) {
                return this._isNativePlatform() ? this.timeEventForNative(e, this.appId) : this.taJs.timeEvent(e, t);
            }
        }, {
            key: "getDeviceId",
            value: function() {
                return this._isNativePlatform() ? this.getDeviceIdForNative(this.appId) : this.taJs.getDeviceId();
            }
        }, {
            key: "enableTracking",
            value: function(e) {
                this._isNativePlatform() ? this.enableTrackingForNative(e, this.appId) : this.taJs.enableTracking(e);
            }
        }, {
            key: "optOutTracking",
            value: function() {
                this._isNativePlatform() ? this.optOutTrackingForNative(this.appId) : this.taJs.optOutTracking();
            }
        }, {
            key: "optOutTrackingAndDeleteUser",
            value: function() {
                this._isNativePlatform() ? this.optOutTrackingAndDeleteUserForNative(this.appId) : this.taJs.optOutTrackingAndDeleteUser();
            }
        }, {
            key: "optInTracking",
            value: function() {
                this._isNativePlatform() ? this.optInTrackingForNative(this.appId) : this.taJs.optInTracking();
            }
        }, {
            key: "setTrackStatus",
            value: function(e) {
                this._isNativePlatform() ? this.setTrackStatusForNative(e, this.appId) : this.taJs.setTrackStatus(e);
            }
        }, {
            key: "trackForNative",
            value: function(e, t, i, n) {
                i = o.isDate(i) ? o.formatDate(i) : "", o.isUndefined(t) && (t = {}), t = o.extend(t, this.dynamicProperties ? this.dynamicProperties() : {}),
                    t = o.encodeDates(t), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "track", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, JSON.stringify(t), i, n) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "track:properties:time:appId:", e, JSON.stringify(t), i, n);
            }
        }, {
            key: "trackUpdateForNative",
            value: function(e, t) {
                e.properties = o.extend(o.isUndefined(e.properties) ? {} : e.properties, this.dynamicProperties ? this.dynamicProperties() : {}),
                    e = o.encodeDates(e), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "trackUpdate", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "trackUpdate:appId:", JSON.stringify(e), t);
            }
        }, {
            key: "trackFirstEventForNative",
            value: function(e, t) {
                e.properties = o.extend(o.isUndefined(e.properties) ? {} : e.properties, this.dynamicProperties ? this.dynamicProperties() : {}),
                    e = o.encodeDates(e), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "trackFirstEvent", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "trackFirstEvent:appId:", JSON.stringify(e), t);
            }
        }, {
            key: "trackOverwriteForNative",
            value: function(e, t) {
                e.properties = o.extend(o.isUndefined(e.properties) ? {} : e.properties, this.dynamicProperties ? this.dynamicProperties() : {}),
                    e = o.encodeDates(e), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "trackOverwrite", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "trackOverwrite:appId:", JSON.stringify(e), t);
            }
        }, {
            key: "timeEventForNative",
            value: function(e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "timeEvent", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "timeEvent:appId:", e, t);
            }
        }, {
            key: "loginForNative",
            value: function(e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "login", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "login:appId:", e, t);
            }
        }, {
            key: "logoutForNative",
            value: function(e) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "logout", "(Ljava/lang/String;)V", e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "logout:", e);
            }
        }, {
            key: "setSuperPropertiesForNative",
            value: function(e, t) {
                e = o.encodeDates(e), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "setSuperProperties", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "setSuperProperties:appId:", JSON.stringify(e), t);
            }
        }, {
            key: "getSuperPropertiesForNative",
            value: function(e) {
                var t = "{}";
                return this._isAndroid() ? t = jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "getSuperProperties", "(Ljava/lang/String;)V", e) : this._isIOS() && (t = jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "getSuperProperties:", e)),
                    JSON.parse(t);
            }
        }, {
            key: "unsetSuperPropertyForNative",
            value: function(e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "unsetSuperProperty", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "unsetSuperProperty:appId:", e, t);
            }
        }, {
            key: "clearSuperPropertiesForNative",
            value: function(e) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "clearSuperProperties", "(Ljava/lang/String;)V", e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "clearSuperProperties:", e);
            }
        }, {
            key: "userSetForNative",
            value: function(e, t) {
                e = o.encodeDates(e), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userSet", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userSet:appId:", JSON.stringify(e), t);
            }
        }, {
            key: "userSetOnceForNative",
            value: function(e, t) {
                e = o.encodeDates(e), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userSetOnce", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userSetOnce:appId:", JSON.stringify(e), t);
            }
        }, {
            key: "userAppendForNative",
            value: function(e, t) {
                e = o.encodeDates(e), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userAppend", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userAppend:appId:", JSON.stringify(e), t);
            }
        }, {
            key: "userUniqAppendForNative",
            value: function(e, t) {
                e = o.encodeDates(e), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userUniqAppend", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userUniqAppend:appId:", JSON.stringify(e), t);
            }
        }, {
            key: "userAddForNative",
            value: function(e, t) {
                e = o.encodeDates(e), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userAdd", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(e), t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userAdd:appId:", JSON.stringify(e), t);
            }
        }, {
            key: "userUnsetForNative",
            value: function(e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userUnset", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userUnset:appId:", e, t);
            }
        }, {
            key: "userDelForNative",
            value: function(e) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userDel", "(Ljava/lang/String;)V", e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userDel:", e);
            }
        }, {
            key: "authorizeOpenIDForNative",
            value: function(e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "authorizeOpenID", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "authorizeOpenID:appId:", e, t);
            }
        }, {
            key: "identifyForNative",
            value: function(e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "identify", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "identify:appId:", e, t);
            }
        }, {
            key: "initInstanceForNative",
            value: function(e, t, i) {
                this._isAndroid() ? (jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "setCustomerLibInfo", "(Ljava/lang/String;Ljava/lang/String;)V", s, r),
                    o.isUndefined(t) ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "initInstanceAppId", "(Ljava/lang/String;Ljava/lang/String;)V", e, i) : jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "initInstanceConfig", "(Ljava/lang/String;Ljava/lang/String;)V", e, JSON.stringify(t))) : this._isIOS() && (jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "setCustomerLibInfoWithLibName:libVersion:", s, r),
                    o.isUndefined(t) ? jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "initInstance:appId:", e, i) : jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "initInstance:config:", e, JSON.stringify(t)));
            }
        }, {
            key: "lightInstanceForNative",
            value: function(e, t) {
                return this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "lightInstance", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() ? jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "lightInstance:appId:", e, t) : void 0;
            }
        }, {
            key: "startThinkingAnalyticsForNative",
            value: function(e) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "startThinkingAnalytics", "(Ljava/lang/String;)V", e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "startThinkingAnalytics:", e);
            }
        }, {
            key: "setDynamicSuperPropertiesForNative",
            value: function(e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "setDynamicSuperProperties", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "setDynamicSuperProperties:appId:", e, t);
            }
        }, {
            key: "getDeviceIdForNative",
            value: function(e) {
                return this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "getDeviceId", "(Ljava/lang/String;)Ljava/lang/String;", e) : this._isIOS() ? jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "getDeviceId:", e) : void 0;
            }
        }, {
            key: "getDistinctIdForNative",
            value: function(e) {
                return this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "getDistinctId", "(Ljava/lang/String;)Ljava/lang/String;", e) : this._isIOS() ? jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "getDistinctId:", e) : void 0;
            }
        }, {
            key: "getAccountIdForNative",
            value: function(e) {
                return this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "getAccountId", "(Ljava/lang/String;)Ljava/lang/String;", e) : this._isIOS() ? jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "getAccountId:", e) : void 0;
            }
        }, {
            key: "getPresetPropertiesForNative",
            value: function(e) {
                var t = "{}";
                return this._isAndroid() ? t = jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "getPresetProperties", "(Ljava/lang/String;)Ljava/lang/String;", e) : this._isIOS() && (t = jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "getPresetProperties:", e)),
                    JSON.parse(t);
            }
        }, {
            key: "enableTrackingForNative",
            value: function(e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "enableTracking", "(Ljava/lang/String;Ljava/lang/String;)V", e.toString(), t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "enableTracking:appId:", e.toString(), t);
            }
        }, {
            key: "optOutTrackingForNative",
            value: function(e) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "optOutTracking", "(Ljava/lang/String;)V", e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "optOutTracking:", e);
            }
        }, {
            key: "optOutTrackingAndDeleteUserForNative",
            value: function(e) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "optOutTrackingAndDeleteUser", "(Ljava/lang/String;)V", e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "optOutTrackingAndDeleteUser:", e);
            }
        }, {
            key: "optInTrackingForNative",
            value: function(e) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "optInTracking", "(Ljava/lang/String;)V", e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "optInTracking:", e);
            }
        }, {
            key: "setTrackStatusForNative",
            value: function(e, t) {
                this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "setTrackStatus", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "setTrackStatus:appId:", e, t);
            }
        }]), e;
    }();

window.ThinkingAnalyticsAPI = F, window.ThinkingAnalyticsAPIForJS = E;