var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.LocalStorage = void 0);
var n = e("XXTEA"),
    a = (function () {
        function e() {}
        return (
            (e.get = function (e) {
                return cc.sys.localStorage.getItem(this.prefix + e);
            }),
            (e.set = function (e, t) {
                cc.sys.localStorage.setItem(this.prefix + e, t);
            }),
            (e.delete = function (e) {
                cc.sys.localStorage.removeItem(e);
            }),
            (e.getNumber = function (e) {
                var t = this.get(e);
                return null == t ? null : parseInt(t);
            }),
            (e.setNumber = function (e, t) {
                this.set(e, t);
            }),
            (e.getBoolean = function (e) {
                return !!this.getNumber(e);
            }),
            (e.setBoolean = function (e, t) {
                var o = 0;
                t && (o = 1), this.set(e, o);
            }),
            (e.getString = function (e, t) {
                void 0 === t && (t = !0);
                var o = this.get(e);
                if (!o) return null;
                if (!t) return o;
                try {
                    return n.decryptFromBase64(o, this._key);
                } catch (a) {
                    return o;
                }
            }),
            (e.setString = function (e, t) {
                var o = n.encryptToBase64(t, this._key);
                this.set(e, o);
            }),
            (e.getData = function (t) {
                var o = this.get(t);
                return o ? e.decode(o) : null;
            }),
            (e.decode = function (e) {
                try {
                    var t = n.decryptFromBase64(e, this._key);
                    e = JSON.parse(t);
                } catch (i) {
                    if ("string" == typeof e) return JSON.parse(e);
                    var o = {};
                    for (var a in e) o[a] = e[a];
                    return o;
                }
                return e;
            }),
            (e.setData = function (t, o) {
                var a = e.encode(o);
                "object" == typeof a && (a = JSON.stringify(a)), this.set(t, n.encryptToBase64(a, this._key));
            }),
            (e.encode = function (e) {
                var t = {};
                for (var o in e) "function" != typeof e[o] && (t[o] = e[o]);
                return t;
            }),
            (e.prefix = ""),
            (e._key = "nigainimalegebideshujune"),
            e
        );
    })();
o.LocalStorage = a;
