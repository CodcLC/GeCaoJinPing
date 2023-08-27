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
Object.defineProperty(o, "__esModule", {value: !0}), (o.BaseComponent = void 0);
var r = e("event-kit"),
    s = cc._decorator,
    c = s.ccclass,
    l =
        (s.property,
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.dispose = new r.CompositeDisposable()), t;
            }
            return (
                a(t, e),
                (t.prototype.onLoad = function () {
                    this.load();
                }),
                (t.prototype.load = function () {}),
                (t.prototype.addEvent = function (e) {
                    this.dispose.add(e);
                }),
                (t.prototype.onDestroy = function () {
                    this.dispose.dispose(), this.unload();
                }),
                (t.prototype.unload = function () {}),
                i([c], t)
            );
        })(cc.Component));
o.BaseComponent = l;
