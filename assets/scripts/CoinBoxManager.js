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
Object.defineProperty(o, "__esModule", {value: !0}), (o.CoinBoxMgr = o.CoinBoxState = void 0);
var i,
    r = e("LocalStorage"),
    s = e("LocalConst"),
    c = e("CommonUtil"),
    l = e("JsonManager");
(function (e) {
    (e[(e.NotStart = 0)] = "NotStart"),
        (e[(e.Duration = 1)] = "Duration"),
        (e[(e.CD = 2)] = "CD"),
        (e[(e.OVER = 3)] = "OVER");
})((i = o.CoinBoxState || (o.CoinBoxState = {})));
var p = (function () {
    function e() {
        (this._coinBoxValue = 0),
            (this._coinBoxCD = 0),
            (this._coinBoxMax = 0),
            (this._coinBoxDuration = 0),
            (this._coinBoxInfo = null),
            (this._coinBoxState = i.NotStart);
    }
    return (
        (e.instance = function () {
            return e._instance || (e._instance = new e()), e._instance;
        }),
        (e.prototype.initData = function () {
            return n(this, void 0, void 0, function () {
                var e, t, o, n;
                return a(this, function (a) {
                    switch (a.label) {
                        case 0:
                            return (
                                (e = l.JsonMgr.getDefineConstantByName("CoinBoxValue")),
                                (this._coinBoxValue = Number(e) ? Number(e) : 3),
                                (t = l.JsonMgr.getDefineConstantByName("CoinBoxCD")),
                                (this._coinBoxCD = Number(t) ? Number(t) : 20),
                                (o = l.JsonMgr.getDefineConstantByName("CoinBoxMax")),
                                (this._coinBoxMax = Number(o) ? Number(o) : 5),
                                (n = l.JsonMgr.getDefineConstantByName("CoinBoxDuration")),
                                (this._coinBoxDuration = Number(n) ? Number(n) : 5),
                                [4, this._initCoinBoxData()]
                            );
                        case 1:
                            return a.sent(), this.refreshCoinBoxState(), [2];
                    }
                });
            });
        }),
        (e.prototype._initCoinBoxData = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function () {
                    return (
                        (e = r.LocalStorage.getData(s.LocalConst.COINBOX_INFO_NEW))
                            ? ((this._coinBoxInfo = e), this.initBoxData())
                            : ((e = r.LocalStorage.getData(s.LocalConst.COINBOX_INFO))
                                  ? ((this._coinBoxInfo = e),
                                    this.initBoxData(),
                                    r.LocalStorage.delete(s.LocalConst.COINBOX_INFO))
                                  : this._initBaseData(),
                              this.saveCoinBoxData()),
                        [2]
                    );
                });
            });
        }),
        (e.prototype.initBoxData = function () {
            var e = new Date().getTime(),
                t = this._coinBoxInfo.refreshTimeTamps;
            c.CommonUtil.isSameDay(e, t) || (this._initBaseData(), this.saveCoinBoxData());
        }),
        (e.prototype._initBaseData = function () {
            (this._coinBoxInfo = {}),
                (this._coinBoxInfo.refreshTimeTamps = new Date().getTime()),
                (this._coinBoxInfo.showTimeTamps = 0),
                (this._coinBoxInfo.durationTimeTamps = 0),
                (this._coinBoxInfo.cdTimeTamps = 0),
                (this._coinBoxInfo.rewardCount = 0);
        }),
        (e.prototype.saveCoinBoxData = function () {
            r.LocalStorage.setData(s.LocalConst.COINBOX_INFO_NEW, this._coinBoxInfo);
        }),
        (e.prototype.refreshCoinBoxState = function () {
            if (this._coinBoxInfo.rewardCount >= this._coinBoxMax) this._coinBoxState = i.OVER;
            else if (0 != this._coinBoxInfo.showTimeTamps) {
                var e = new Date().getTime();
                e >= this._coinBoxInfo.showTimeTamps && e <= this._coinBoxInfo.durationTimeTamps
                    ? (this._coinBoxState = i.Duration)
                    : e > this._coinBoxInfo.durationTimeTamps && e <= this._coinBoxInfo.cdTimeTamps
                    ? (this._coinBoxState = i.CD)
                    : (this._coinBoxState = i.NotStart);
            } else this._coinBoxState = i.NotStart;
        }),
        (e.prototype.getCoinBoxState = function () {
            return this._coinBoxState;
        }),
        (e.prototype.getDurationTimeTamps = function () {
            return this._coinBoxInfo.durationTimeTamps;
        }),
        (e.prototype.getCoinBoxValue = function () {
            return this._coinBoxValue;
        }),
        (e.prototype.setCoinBoxStart = function () {
            this._coinBoxState == i.NotStart &&
                ((this._coinBoxInfo.showTimeTamps = new Date().getTime()),
                (this._coinBoxInfo.durationTimeTamps = this._coinBoxInfo.showTimeTamps + 6e4 * this._coinBoxDuration),
                (this._coinBoxInfo.cdTimeTamps = this._coinBoxInfo.durationTimeTamps + 6e4 * this._coinBoxCD),
                (this._coinBoxState = i.Duration),
                this.saveCoinBoxData());
        }),
        (e.prototype.setCoinBoxCd = function () {
            this._coinBoxInfo.rewardCount++,
                (this._coinBoxInfo.durationTimeTamps = new Date().getTime()),
                (this._coinBoxInfo.cdTimeTamps = this._coinBoxInfo.durationTimeTamps + 6e4 * this._coinBoxCD),
                (this._coinBoxState = i.CD),
                this.saveCoinBoxData();
        }),
        (e._instance = null),
        e
    );
})();
o.CoinBoxMgr = p.instance();
