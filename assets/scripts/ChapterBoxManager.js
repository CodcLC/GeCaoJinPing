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
Object.defineProperty(o, "__esModule", {value: !0}), (o.ChapterBoxMgr = o.ChapterBoxState = void 0);
var i,
    r = e("LocalStorage"),
    s = e("ClientEvents"),
    c = e("LocalConst"),
    l = e("JsonManager"),
    p = e("LevelManager");
(function (e) {
    (e[(e.NotFinish = 1)] = "NotFinish"), (e[(e.Finish = 2)] = "Finish"), (e[(e.Rwarded = 3)] = "Rwarded");
})((i = o.ChapterBoxState || (o.ChapterBoxState = {})));
var u = (function () {
    function e() {
        (this._allJson = null),
            (this._allJsonKeys = null),
            (this._boxStateDatas = null),
            (this._prevBoxStatus = null),
            (this._curBoxStatus = null),
            (this._nextBoxStatus = null);
    }
    return (
        (e.instance = function () {
            return e._instance || (e._instance = new e()), e._instance;
        }),
        (e.prototype.initTaskData = function () {
            return n(this, void 0, void 0, function () {
                return a(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (
                                (this._allJson = l.JsonMgr.getJson("chapterchest")),
                                (this._allJsonKeys = Object.keys(this._allJson).sort(function (e, t) {
                                    return Number(e) - Number(t);
                                })),
                                [4, this._initBoxStateDatas()]
                            );
                        case 1:
                            return e.sent(), this._refreshStepBoxData(), [2];
                    }
                });
            });
        }),
        (e.prototype.checkRedPoint = function () {
            for (var e = !1, t = 0; t < this._allJsonKeys.length; t++) {
                var o = this._allJsonKeys[t];
                if (this._boxStateDatas[o].state == i.Finish) {
                    e = !0;
                    break;
                }
            }
            return e;
        }),
        (e.prototype.checkOverDoEvent = function (e) {
            for (var t = !1, o = 0; o < this._allJsonKeys.length; o++) {
                var n = this._allJsonKeys[o],
                    a = this._boxStateDatas[n],
                    r = this.getOriginDataById(a.id);
                -1 == r.boxtime && a.state == i.NotFinish && e == r.levelid && ((a.state = i.Finish), (t = !0));
            }
            t && (s.ClientEvents.CHAPTERBOX_RED_POINT.emit(), this._saveTaskStateDatas());
        }),
        (e.prototype.checkTimeDoEvent = function (e) {
            var t = !1;
            if (e % 10 == 0)
                for (var o = p.levelMgr.getLevelJson().id, n = 0; n < this._allJsonKeys.length; n++) {
                    var a = this._allJsonKeys[n],
                        r = this._boxStateDatas[a],
                        c = this.getOriginDataById(r.id);
                    -1 != c.boxtime &&
                        r.state == i.NotFinish &&
                        o == c.levelid &&
                        e >= 60 * Number(c.boxtime) &&
                        ((r.state = i.Finish), (t = !0));
                }
            t && (s.ClientEvents.CHAPTERBOX_RED_POINT.emit(), this._saveTaskStateDatas());
        }),
        (e.prototype.setCurBoxStatus = function (e, t) {
            for (var o = 0; o < this._allJsonKeys.length; o++) {
                var n = this._allJsonKeys[o],
                    a = this._boxStateDatas[n];
                a.id == e && (a.state = t);
            }
            this._refreshStepBoxData(),
                this._saveTaskStateDatas(),
                s.ClientEvents.CHAPTERBOX_RED_POINT.emit(),
                s.ClientEvents.CHAPTERBOX_REFRESH.emit();
        }),
        (e.prototype._initBoxStateDatas = function () {
            return n(this, void 0, void 0, function () {
                var e;
                return a(this, function () {
                    return (
                        (e = r.LocalStorage.getData(c.LocalConst.BOX_STATE_DATAS_NEW))
                            ? ((this._boxStateDatas = e), this.initBoxState())
                            : ((e = r.LocalStorage.getData(c.LocalConst.BOX_STATE_DATAS))
                                  ? ((this._boxStateDatas = e),
                                    this.initBoxState(),
                                    r.LocalStorage.delete(c.LocalConst.BOX_STATE_DATAS))
                                  : this._initBaseBoxStateDatas(),
                              this._saveTaskStateDatas()),
                        [2]
                    );
                });
            });
        }),
        (e.prototype.initBoxState = function () {
            for (var e = !1, t = 0; t < this._allJsonKeys.length; t++) {
                var o = this._allJsonKeys[t];
                this._boxStateDatas["" + o] ||
                    ((this._boxStateDatas["" + o] = {id: Number(o), state: Number(i.NotFinish)}), (e = !0));
            }
            e && this._saveTaskStateDatas();
        }),
        (e.prototype._initBaseBoxStateDatas = function () {
            this._boxStateDatas = {};
            for (var e = 0; e < this._allJsonKeys.length; e++) {
                var t = this._allJsonKeys[e],
                    o = {id: Number(t), state: Number(i.NotFinish)};
                this._boxStateDatas["" + t] = o;
            }
        }),
        (e.prototype._refreshStepBoxData = function () {
            (this._prevBoxStatus = null), (this._curBoxStatus = null), (this._nextBoxStatus = null);
            for (var e = 0; e < this._allJsonKeys.length; e++) {
                var t = this._allJsonKeys[e],
                    o = this._boxStateDatas[t];
                if (o.state < i.Rwarded) {
                    if (((this._curBoxStatus = o), e > 0)) {
                        var n = this._allJsonKeys[e - 1];
                        this._prevBoxStatus = this._boxStateDatas[n];
                    }
                    if (e < this._allJsonKeys.length - 1) {
                        var a = this._allJsonKeys[e + 1];
                        this._nextBoxStatus = this._boxStateDatas[a];
                    }
                    break;
                }
            }
            if (null == this._curBoxStatus) {
                var r = this._allJsonKeys[this._allJsonKeys.length - 1],
                    s = this._allJsonKeys[this._allJsonKeys.length - 2];
                (this._curBoxStatus = this._boxStateDatas[r]), (this._prevBoxStatus = this._boxStateDatas[s]);
            }
        }),
        (e.prototype.getPrevBoxData = function () {
            return this._prevBoxStatus;
        }),
        (e.prototype.getCurBoxData = function () {
            return this._curBoxStatus;
        }),
        (e.prototype.getNextBoxData = function () {
            return this._nextBoxStatus;
        }),
        (e.prototype._saveTaskStateDatas = function () {
            r.LocalStorage.setData(c.LocalConst.BOX_STATE_DATAS_NEW, this._boxStateDatas);
        }),
        (e.prototype.getOriginDataById = function (e) {
            return this._allJson["" + e];
        }),
        (e._instance = null),
        e
    );
})();
o.ChapterBoxMgr = u.instance();
