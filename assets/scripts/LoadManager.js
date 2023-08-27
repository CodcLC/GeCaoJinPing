var e = require;
var t = module;
var o = exports;
var n =
        (this && this.__awaiter) ||
        function (e, t, o, n) {
            return new (o || (o = Promise))(function (a, i) {
                function r(e) {
                    try {
                        c(n.next(e));
                    } catch (t) {
                        i(t);
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e));
                    } catch (t) {
                        i(t);
                    }
                }
                function c(e) {
                    var t;
                    e.done
                        ? a(e.value)
                        : ((t = e.value),
                          t instanceof o
                              ? t
                              : new o(function (e) {
                                    e(t);
                                })).then(r, s);
                }
                c((n = n.apply(e, t || [])).next());
            });
        },
    a =
        (this && this.__generator) ||
        function (e, t) {
            var o,
                n,
                a,
                i,
                r = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                };
            return (
                (i = {next: s(0), throw: s(1), return: s(2)}),
                "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                i
            );
            function s(e) {
                return function (t) {
                    return c([e, t]);
                };
            }
            function c(i) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; r; )
                    try {
                        if (
                            ((o = 1),
                            n &&
                                (a =
                                    2 & i[0]
                                        ? n.return
                                        : i[0]
                                        ? n.throw || ((a = n.return) && a.call(n), 0)
                                        : n.next) &&
                                !(a = a.call(n, i[1])).done)
                        )
                            return a;
                        switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return r.label++, {value: i[1], done: !1};
                            case 5:
                                r.label++, (n = i[1]), (i = [0]);
                                continue;
                            case 7:
                                (i = r.ops.pop()), r.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    r = 0;
                                    continue;
                                }
                                if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                    r.label = i[1];
                                    break;
                                }
                                if (6 === i[0] && r.label < a[1]) {
                                    (r.label = a[1]), (a = i);
                                    break;
                                }
                                if (a && r.label < a[2]) {
                                    (r.label = a[2]), r.ops.push(i);
                                    break;
                                }
                                a[2] && r.ops.pop(), r.trys.pop();
                                continue;
                        }
                        i = t.call(e, r);
                    } catch (s) {
                        (i = [6, s]), (n = 0);
                    } finally {
                        o = a = 0;
                    }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0};
            }
        };
Object.defineProperty(o, "__esModule", {value: !0}), (o.LoadManager = void 0);
var i = (function () {
    function e() {}
    return (
        (e.loadResAwait = function (e, t) {
            return n(this, void 0, Promise, function () {
                return a(this, function () {
                    return [
                        2,
                        new Promise(function (o, n) {
                            var a = cc.loader.getRes(e, t);
                            a
                                ? o(a)
                                : cc.loader.loadRes(e, t, function (e, t) {
                                      null == e ? o(t) : n(e);
                                  });
                        })
                    ];
                });
            });
        }),
        (e.preLoadResAwait = function (e, t) {
            return n(this, void 0, Promise, function () {
                return a(this, function () {
                    return [
                        2,
                        new Promise(function (o, n) {
                            var a = cc.loader.getRes(e, t);
                            a
                                ? o(a)
                                : cc.resources.load(
                                      e,
                                      t,
                                      function () {},
                                      function (e, t) {
                                          null == e ? o(t) : n(e);
                                      }
                                  );
                        })
                    ];
                });
            });
        }),
        (e.loadResArrayAwait = function (e) {
            return n(this, void 0, Promise, function () {
                return a(this, function () {
                    return [
                        2,
                        new Promise(function (t, o) {
                            cc.loader.loadResArray(e, function (e, n) {
                                null == e ? t(n) : o(e);
                            });
                        })
                    ];
                });
            });
        }),
        (e.loadResDirAwait = function (e, t) {
            return n(this, void 0, Promise, function () {
                return a(this, function () {
                    return [
                        2,
                        new Promise(function (o, n) {
                            cc.resources.loadDir(
                                e,
                                cc.Asset,
                                function (e, o, n) {
                                    t && t(e, o, n);
                                },
                                function (e, t) {
                                    null == e ? o(t) : n(e);
                                }
                            );
                        })
                    ];
                });
            });
        }),
        (e.preloadSceneAwait = function (e, t) {
            return n(this, void 0, Promise, function () {
                var o = this;
                return a(this, function () {
                    return [
                        2,
                        new Promise(function (i, r) {
                            cc.director.preloadScene(
                                e,
                                function () {},
                                function (e) {
                                    return n(o, void 0, void 0, function () {
                                        return a(this, function () {
                                            return e ? r(e) : (t && t(), i(!0)), [2];
                                        });
                                    });
                                }
                            );
                        })
                    ];
                });
            });
        }),
        (e.waitTimeAsync = function (e) {
            return n(this, void 0, Promise, function () {
                return a(this, function () {
                    return [
                        2,
                        new Promise(function (t) {
                            setTimeout(function () {
                                t(!0);
                            }, e);
                        })
                    ];
                });
            });
        }),
        e
    );
})();
o.LoadManager = i;
