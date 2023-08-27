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
        },
    i =
        (this && this.__spreadArrays) ||
        function () {
            for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
            var n = Array(e),
                a = 0;
            for (t = 0; t < o; t++) for (var i = arguments[t], r = 0, s = i.length; r < s; r++, a++) n[a] = i[r];
            return n;
        };
Object.defineProperty(o, "__esModule", {value: !0}), (o.CommonUtil = o.Reward = void 0);
var r = e("execMathExpress"),
    s = function (e, t) {
        (this.xmlId = e), (this.number = t);
    };
o.Reward = s;
var c = [
        {value: 1, symbol: "B"},
        {value: 1024, symbol: "KB"},
        {value: 1048576, symbol: "MB"},
        {value: 1073741824, symbol: "GB"}
    ],
    l = (function () {
        function e() {}
        return (
            (e.sleep = function (e) {
                return n(this, void 0, void 0, function () {
                    return a(this, function () {
                        return [
                            2,
                            new Promise(function (t) {
                                setTimeout(t, e);
                            })
                        ];
                    });
                });
            }),
            (e.mergeRewards = function (t) {
                if (t.length <= 0) return [];
                var o = new Map(),
                    n = null;
                return (
                    t.forEach(function (e) {
                        (n = o.get(e.xmlId))
                            ? (n.number = n.number + e.number)
                            : ((n = new s(e.xmlId, e.number)), o.set(e.xmlId, n));
                    }),
                    e.mapValues(o)
                );
            }),
            (e.toRewards = function (t) {
                return e.toArray(t)(e.rwd);
            }),
            (e.rwd = function (e, t) {
                return new s(e, t);
            }),
            (e.rewardsToStr = function (e) {
                for (var t = null, o = 0; o < e.length; o++)
                    t = t ? t + ";" + e[o].xmlId + "," + e[o].num : e[o].xmlId + "," + e[o].num;
                return t;
            }),
            (e.toMapPos = function (t) {
                return e.toArray(t)(cc.v2);
            }),
            (e.toArray = function (t) {
                return function (o) {
                    if (!e.isString(t)) return [];
                    var n = t.split(";"),
                        a = null,
                        i = [];
                    return (
                        n.forEach(function (e) {
                            (a = e.split(",")), i.push(o(parseInt(a[0]), parseInt(a[1])));
                        }),
                        i
                    );
                };
            }),
            (e.randomBoolean = function () {
                return e.randomByPercent(50);
            }),
            (e.randomByPercent = function (e) {
                return this.getRandomContainNum(100) <= e;
            }),
            (e.shuffle = function (t) {
                for (var o, n = 0; n < t.length; n++) {
                    var a = e.getRangeCloseNum(n, t.length - 1);
                    (o = [t[a], t[n]]), (t[n] = o[0]), (t[a] = o[1]);
                }
                return t;
            }),
            (e.getRandomNum = function (t) {
                return e.getRangeCloseNum(0, t - 1);
            }),
            (e.getRandomContainNum = function (t) {
                return e.getRangeCloseNum(0, t);
            }),
            (e.getRangeCloseNum = function (e, t) {
                if (!(e > t)) return Math.floor(Math.random() * (t - e + 1)) + e;
                cc.log("begin=", e, "can not greater than end=", t);
            }),
            (e.getRange = function (e, t) {
                for (var o = [], n = e; n <= t; n++) o.push(n);
                return o;
            }),
            (e.copy = function (e, t) {
                for (var o = 0, n = Object.keys(t); o < n.length; o++) {
                    var a = n[o];
                    e[a] = t[a];
                }
            }),
            (e.values = function (e) {
                return e
                    ? Object.keys(e).map(function (t) {
                          return e[t];
                      })
                    : [];
            }),
            (e.entries = function (e) {
                return Object.keys(e).map(function (t) {
                    return [t, e[t]];
                });
            }),
            (e.obj2Map = function (t) {
                return new Map(e.entries(t));
            }),
            (e.map2Obj = function (e) {
                var t = {};
                return (
                    e.forEach(function (e, o) {
                        t[o] = e;
                    }),
                    t
                );
            }),
            (e.mapKeys = function (e) {
                return Array.from(e.keys());
            }),
            (e.mapValues = function (e) {
                return Array.from(e.values());
            }),
            (e.isEmpty = function (e) {
                return !e || 0 == Object.keys(e).length;
            }),
            (e.isFunction = function (e) {
                return "function" == typeof e;
            }),
            (e.isObject = function (e) {
                return "object" == typeof e || e instanceof Object;
            }),
            (e.isString = function (e) {
                return "string" == typeof e || e instanceof String;
            }),
            (e.isNumber = function (e) {
                return "number" == typeof e || e instanceof Number;
            }),
            (e.isError = function (e) {
                return e instanceof Error;
            }),
            (e.deleteArray = function (e, t) {
                return t && 0 != t.length
                    ? e.filter(function (e) {
                          return !t.includes(e);
                      })
                    : e;
            }),
            (e.combineArray = function (e, t) {
                return e && 0 != e.length ? (t && 0 != t.length ? Array.from(new Set(i(e, t))) : e) : t;
            }),
            (e.addArrayToSet = function (e, t) {
                e &&
                    t &&
                    e.forEach(function (e) {
                        return t.add(e);
                    });
            }),
            (e.addSetToSet = function (e, t) {
                e &&
                    t &&
                    e.forEach(function (e) {
                        return t.add(e);
                    });
            }),
            (e.getClassName = function (e) {
                var t = /function (.{1,})\(/.exec(e.constructor.toString());
                return t && t.length > 1 ? t[1] : "";
            }),
            (e.schedule = function (e, t, o, n) {
                var a;
                if ((void 0 === n && (n = !1), o >= 0)) {
                    a = cc.sequence(cc.delayTime(o), cc.callFunc(e));
                    var i;
                    return (i = n ? cc.repeatForever(a) : a), t.runAction(i);
                }
                if (n) for (; e(); );
                else e();
            }),
            (e.deepCopy = function (e) {
                var t = JSON.stringify(e);
                return JSON.parse(t);
            }),
            (e.numChange = function (e, t) {
                void 0 === t && (t = 2);
                var o = e < 0,
                    n = Math.abs(e);
                return n < 1e4
                    ? o
                        ? "-" + n.toString()
                        : n.toString()
                    : n < 1e5
                    ? o
                        ? "-" + this.cutOut(n / 1e4, 3) + "万"
                        : this.cutOut(n / 1e4, 3) + "万"
                    : n < 1e7
                    ? o
                        ? "-" + this.cutOut(n / 1e4, 2) + "万"
                        : this.cutOut(n / 1e4, 2) + "万"
                    : n < 1e8
                    ? o
                        ? "-" + this.cutOut(n / 1e4) + "万"
                        : this.cutOut(n / 1e4) + "万"
                    : n < 1e9
                    ? o
                        ? "-" + this.cutOut(n / 1e8, 3) + "亿"
                        : this.cutOut(n / 1e8, 3) + "亿"
                    : n < 1e11
                    ? o
                        ? "-" + this.cutOut(n / 1e8, 2) + "亿"
                        : this.cutOut(n / 1e8, 2) + "亿"
                    : o
                    ? "-" + this.cutOut(n / 1e8) + "亿"
                    : this.cutOut(n / 1e8) + "亿";
            }),
            (e.bytesChange = function (t) {
                var o;
                for (o = c.length - 1; o > 0 && !(t >= c[o].value); o--);
                var n = t / c[o].value,
                    a = Math.floor(n).toString().length;
                return e.cutOut(n, 0 == o ? 0 : 4 - a) + c[o].symbol;
            }),
            (e.calculate = function (e) {
                return e < 1e4
                    ? e + ""
                    : e < 1e5
                    ? (e / 1e4).toFixed(2) + "万"
                    : e < 1e6
                    ? (e / 1e4).toFixed(1) + "万"
                    : e < 1e8
                    ? (e / 1e4).toFixed(0) + "万"
                    : e < 1e9
                    ? (e / 1e8).toFixed(2) + "亿"
                    : (e / 1e8).toFixed(1) + "亿";
            }),
            (e.deepCopyMap = function (e) {
                for (var t, o = new Map(), n = e.entries(); !(t = n.next()).done; ) {
                    var a = Object.assign({}, t.value[1]);
                    o.set(t.value[0], a);
                }
                return o;
            }),
            (e.posToKey = function (e) {
                return 1e3 * e.x + e.y;
            }),
            (e.keyToPos = function (e) {
                var t = Math.floor(e / 1e3),
                    o = e % 1e3;
                return cc.v2(t, o);
            }),
            (e.getWeightRandom = function (t) {
                for (var o = 0, n = 0, a = t; n < a.length; n++) o += s = a[n];
                for (var i = e.getRangeCloseNum(1, o), r = 0, s = 0; s < t.length; s++) if (i <= (r += t[s])) return s;
                return Math.floor(t.length / 2);
            }),
            (e.checkEnough = function (e, t) {
                return e.size() <= 0 ? cc.instantiate(t) : e.get();
            }),
            (e.getCenterPos = function (e) {
                return e.convertToWorldSpaceAR(cc.v2(-e.width / 2, e.height / 2));
            }),
            (e.oddNumInit = function (e, t, o, n) {
                var a = e.width;
                if (n === o) e.setPosition(0, 0);
                else {
                    var i = (n - o) * (a + t);
                    e.setPosition(i, 0);
                }
            }),
            (e.evenNumInit = function (e, t, o, n) {
                var a,
                    i,
                    r = e.width;
                n < o ? ((a = n + 1 - o), (i = (-r - t) / 2)) : ((a = n - o), (i = (r + t) / 2));
                var s = a * (r + t);
                e.setPosition(s + i, 0);
            }),
            (e.compareVersion = function (e, t) {
                for (var o = e.split("."), n = t.split("."), a = 0; a < o.length; ++a) {
                    var i = parseInt(o[a]),
                        r = parseInt(n[a] || "0");
                    if (i !== r) return i - r;
                }
                return n.length > o.length ? -1 : 0;
            }),
            (e.calcCtrlP = function (e, t) {
                var o = e.add(t).mul(0.5),
                    n = 0.5 * cc.Vec2.distance(e, t),
                    a = Math.random() * Math.PI * 2 - Math.PI,
                    i = Math.random() * n;
                return o.add(cc.v2(Math.cos(a) * i, Math.sin(a) * i));
            }),
            (e.updateNumberAnim = function (e, t, o, n) {
                var a = this;
                void 0 === n && (n = 0.5);
                var i = {num: e};
                cc.tween(i)
                    .to(
                        n,
                        {num: t},
                        {
                            progress: function (e, t, n, i) {
                                a && (o.string = Math.floor(e + (t - e) * i) + "");
                            }
                        }
                    )
                    .start();
            }),
            (e.calculateExe = function (e, t) {
                var o = r(e, t);
                return o.num / o.den;
            }),
            (e.formatMoney = function (e) {
                for (
                    var t = ["", "K", "M", "G", "T", "P", "E", "Z", "Y", "B", "N", "D"], o = "", n = 0;
                    n < t.length;
                    n++
                ) {
                    if (!(e >= 1e4)) {
                        o = Math.floor(e) + t[n];
                        break;
                    }
                    e /= 1e3;
                }
                return "" === o && (o = Math.floor(e) + "U"), o;
            }),
            (e.base64OfImage = function (e) {
                var t = this;
                return new Promise(function (o, n) {
                    cc.resources.load(e, cc.SpriteFrame, function (e, a) {
                        if (e) n();
                        else {
                            var i = t.base64OfSpriteFrame(a);
                            o(i);
                        }
                    });
                });
            }),
            (e.base64OfSpriteFrame = function (e) {
                var t = e.getTexture();
                if (!t) return "";
                var o = document.createElement("canvas"),
                    n = o.getContext("2d"),
                    a = t.getHtmlElementObj();
                (o.height = a.height), (o.width = a.width), n.drawImage(a, 0, 0);
                var i = o.toDataURL("image/png");
                return (o = null), i;
            }),
            (e.getRandomInt = function (e, t) {
                var o = Math.random() * (t - e + 1) + e;
                return Math.floor(o);
            }),
            (e.isSameDay = function (e, t) {
                return new Date(e).setHours(0, 0, 0, 0) === new Date(t).setHours(0, 0, 0, 0);
            }),
            (e.isSameWeek = function (e, t) {
                var o = new Date();
                o.setTime(e);
                var n = new Date();
                return n.setTime(t), this.tomonday(o) === this.tomonday(n);
            }),
            (e.tomonday = function (e) {
                var t = new Date(e),
                    o = t.getDay(),
                    n = t.getDate();
                return (
                    0 == o && (o = 7),
                    t.setDate(n - o + 1),
                    t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()
                );
            }),
            (e.cutOut = function (e, t) {
                void 0 === t && (t = 0);
                var o = e.toString();
                return -1 == o.indexOf(".") ? o : parseFloat(o.substring(0, o.indexOf(".") + t));
            }),
            e
        );
    })();
o.CommonUtil = l;
