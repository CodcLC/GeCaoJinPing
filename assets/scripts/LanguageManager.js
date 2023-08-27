var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.langMgr = o.LanguageManager = void 0);
var n = e("ClientEvents"),
    a = e("JsonManager"),
    i = (function () {
        function e() {
            this.map = new Map();
        }
        return (
            (e.instance = function () {
                return null == e._instance && (e._instance = new e()), e._instance;
            }),
            (e.prototype.loadGameByLan = function () {
                this.lang = "chs";
            }),
            (e.prototype.initCn = function (e) {
                this.lang = "zh_cn_#hans" === e || "zh_cn" === e || "zh_cn_#chs" === e ? "chs" : "cht";
            }),
            Object.defineProperty(e.prototype, "langText", {
                get: function () {
                    return e.LANGUAGES.get(this._lang);
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "lang", {
                get: function () {
                    return this._lang;
                },
                set: function (t) {
                    (t = t.toLowerCase()),
                        this._lang !== t &&
                            e.LANGUAGES.has(t) &&
                            ((this._lang = t), localStorage.setItem("lang", t), this.loadLang(t));
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.loadLang = function (e) {
                if (null == this.map.get(e)) {
                    if (!this.map.has(e)) {
                        this.map.delete(e);
                        var t = a.JsonMgr.getJson(e);
                        this.map.set(e, t), n.ClientEvents.REFRESH_LANG_LABEL.emit();
                    }
                } else n.ClientEvents.REFRESH_LANG_LABEL.emit();
            }),
            (e.prototype.getStr = function (e, t) {
                t = null == t ? this.lang : t.toLowerCase();
                var o = this.map.get(t);
                return null != o ? o[e] : null;
            }),
            (e.LANGUAGES = new Map([
                ["chs", "简体中文"],
                ["cht", "繁體中文"],
                ["eng", "English"],
                ["jpn", "日本語"],
                ["kor", "한글"]
            ])),
            e
        );
    })();
(o.LanguageManager = i), (o.langMgr = i.instance());
