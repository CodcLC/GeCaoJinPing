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
        (this && this.__decorate) ||
        function (e, t, o, n) {
            var a,
                i = arguments.length,
                r = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, o)) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r;
        };
Object.defineProperty(o, "__esModule", {value: !0}), (o.LangLabel = void 0);
var r = e("event-kit"),
    s = e("ClientEvents"),
    c = e("LanguageManager"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.text = ""),
                (t.args = []),
                (t.dispose = new r.CompositeDisposable()),
                (t.onLangChanged = function () {
                    if (null != t.label && null != t.text) {
                        t.label.string = t.replaceLangText(t.text).replace(o.RE_ARGS, function (e) {
                            for (var o, n = [], a = 1; a < arguments.length; a++) n[a - 1] = arguments[a];
                            var i = parseInt(n[0]);
                            return null == t.args || i < 0 || i >= t.args.length
                                ? e
                                : null !== (o = t.replaceLangText(t.args[i])) && void 0 !== o
                                ? o
                                : e;
                        });
                        var e = t.label.string.split("|");
                        e.length > 0 &&
                            ((t.label.string = ""),
                            e.forEach(function (o, n) {
                                n === e.length - 1 ? (t.label.string += o) : (t.label.string += o + "\n");
                            }));
                    }
                }),
                t
            );
        }
        var o;
        return (
            a(t, e),
            (o = t),
            (t.prototype.onEnable = function () {
                this.onLangChanged(), this.dispose.add(s.ClientEvents.REFRESH_LANG_LABEL.on(this.onLangChanged));
            }),
            (t.prototype.onDisable = function () {
                this.dispose.dispose();
            }),
            Object.defineProperty(t.prototype, "labelComponent", {
                get: function () {
                    return this.label;
                },
                enumerable: !1,
                configurable: !0
            }),
            (t.prototype.setText = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                for (var n = 0; n < t.length; ++n) null != t[n] && (t[n] = t[n].toString());
                null != e && (this.text = e),
                    (this.args = t),
                    this.node.activeInHierarchy && this.enabled && this.onLangChanged();
            }),
            (t.prototype.replaceLangText = function (e) {
                return null == e || "" == e
                    ? e
                    : e.replace(o.RE_LANG, function (e) {
                          for (var t, o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
                          return null !== (t = c.langMgr.getStr(o[0])) && void 0 !== t ? t : e;
                      });
            }),
            (t.RE = /{@(\w+)}|{(\d+)}/gm),
            (t.RE_ARGS = /{(\d+)}/gm),
            (t.RE_LANG = /{@(\w+)}/gm),
            i([u(cc.Label)], t.prototype, "label", void 0),
            i([u(String)], t.prototype, "text", void 0),
            i([u([String])], t.prototype, "args", void 0),
            (o = i([p("LangLabel")], t))
        );
    })(cc.Component);
o.LangLabel = d;
