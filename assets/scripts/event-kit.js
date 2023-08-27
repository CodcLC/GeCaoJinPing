var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.Emitter = o.Event = o.CompositeDisposable = o.Disposable = void 0);
var n = (function () {
    function e(e) {
        (this._disposed = !1), (this._disposalAction = e);
    }
    return (
        Object.defineProperty(e.prototype, "disposed", {
            get: function () {
                return this._disposed;
            },
            enumerable: !1,
            configurable: !0
        }),
        (e.prototype.dispose = function () {
            this.disposed ||
                ((this._disposed = !0),
                this._disposalAction && (this._disposalAction(), (this._disposalAction = null)));
        }),
        e
    );
})();
o.Disposable = n;
var a = (function () {
    function e() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        (this._disposed = !1), (this._disposables = new Set());
        for (var o = 0, n = e; o < n.length; o++) {
            var a = n[o];
            this.add(a);
        }
    }
    return (
        (e.prototype.add = function (e) {
            this._disposed || (e && this._disposables.add(e));
        }),
        (e.prototype.remove = function (e) {
            this._disposed || this._disposables.delete(e);
        }),
        (e.prototype.clear = function () {
            this._disposed || this._disposables.clear();
        }),
        (e.prototype.dispose = function () {
            this._disposed ||
                ((this._disposed = !0),
                this._disposables.forEach(function (e) {
                    e.dispose();
                }),
                (this._disposables = null));
        }),
        e
    );
})();
o.CompositeDisposable = a;
var i = (function () {
    function e(e, t) {
        var o = this;
        (this.emit = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            e.unshift(o.name), o.emitter.emit.apply(o.emitter, e);
        }),
            (this.emitter = e),
            (this.name = t);
    }
    return (
        (e.prototype.getName = function () {
            return this.name;
        }),
        (e.prototype.toString = function () {
            return "[Event " + this.name.toString() + "]";
        }),
        (e.prototype.on = function (e, t) {
            return void 0 === t && (t = !1), this.emitter.on(this.name, e, t);
        }),
        (e.prototype.once = function (e, t) {
            void 0 === t && (t = !1), this.emitter.once(this.name, e, t);
        }),
        e
    );
})();
o.Event = i;
var r = (function () {
    function e() {
        var e = this;
        (this._disposed = !1),
            (this._handlersByEventName = new Map()),
            (this.off = function (t, o) {
                if (!e._disposed) {
                    var n = e._handlersByEventName.get(t);
                    if (n) {
                        for (var a = [], i = 0, r = n; i < r.length; i++) {
                            var s = r[i];
                            s != o && a.push(s);
                        }
                        a.length ? e._handlersByEventName.set(t, a) : e._handlersByEventName.delete(t);
                    }
                }
            });
    }
    return (
        Object.defineProperty(e.prototype, "disposed", {
            get: function () {
                return this._disposed;
            },
            enumerable: !1,
            configurable: !0
        }),
        (e.prototype.clear = function () {
            this._handlersByEventName.clear();
        }),
        (e.prototype.dispose = function () {
            (this._handlersByEventName = null), (this._disposed = !0);
        }),
        (e.prototype.createEvent = function (e) {
            return new i(this, e || Symbol("Event"));
        }),
        (e.prototype.on = function (e, t, o) {
            if ((void 0 === o && (o = !1), this._disposed)) throw new Error("Emitter has been diposed");
            var a = this._handlersByEventName.get(e);
            return (
                a ? (o ? a.unshift(t) : a.push(t)) : this._handlersByEventName.set(e, [t]),
                new n(this.off.bind(this, e, t))
            );
        }),
        (e.prototype.once = function (e, t, o) {
            void 0 === o && (o = !1);
            var n = this.on(
                e,
                function () {
                    for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
                    n.dispose(), t.apply(void 0, e);
                },
                o
            );
        }),
        (e.prototype.emit = function (e) {
            for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
            var n = this._handlersByEventName.get(e);
            if (n)
                for (var a = 0, i = n; a < i.length; a++) {
                    var r = i[a];
                    try {
                        r.apply(void 0, t);
                    } catch (s) {
                        cc.error(s);
                    }
                }
        }),
        (e.prototype.getEventNames = function () {
            for (var e = [], t = 0, o = this._handlersByEventName.keys(); t < o.length; t++) {
                var n = o[t];
                "string" == typeof n && e.push(n);
            }
            return e;
        }),
        (e.prototype.getEventSymbols = function () {
            for (var e = [], t = 0, o = this._handlersByEventName.keys(); t < o.length; t++) {
                var n = o[t];
                "symbol" == typeof n && e.push(n);
            }
            return e;
        }),
        (e.prototype.listenerCountForEventName = function (e) {
            var t = this._handlersByEventName.get(e);
            return t ? t.length : 0;
        }),
        (e.prototype.getTotalListenerCount = function () {
            for (var e = 0, t = 0, o = this._handlersByEventName.keys(); t < o.length; t++) {
                var n = o[t];
                e += this._handlersByEventName.get(n).length;
            }
            return e;
        }),
        e
    );
})();
o.Emitter = r;
