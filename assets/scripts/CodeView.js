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
        },
    r =
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
    s =
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
Object.defineProperty(o, "__esModule", {value: !0});
var c = e("UIManager"),
    l = e("ViewUrl"),
    p = e("GameComponent"),
    u = e("CommonUtil"),
    d = e("AnalyticsManager"),
    h = e("ActivityLevelManager"),
    g = e("CodeManager"),
    m = e("HeroData"),
    f = e("JsonManager"),
    y = e("LanguageManager"),
    v = e("PlayerData"),
    M = cc._decorator,
    _ = M.ccclass,
    C = M.property,
    b = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.codeEditBox = null),
                (t.convertBtn = null),
                (t.closeBtn = null),
                (t.jsonCode = null),
                (t.onConvert = function () {
                    if ("" != t.codeEditBox.string) {
                        if ((t.checkGetCode(), t.jsonCode)) {
                            var e = g.codeMgr.getSpecifyObject(t.codeEditBox.string);
                            e
                                ? v.playData.getCodeData().includes(e.type)
                                    ? c.UIMgr.showView(l.ViewUrl.commonTip, null, y.langMgr.getStr("Redeem_Tips_9"))
                                    : g.codeMgr.isTimeFit(e.lasttime)
                                    ? t.showCodeReward(e)
                                    : c.UIMgr.showView(l.ViewUrl.commonTip, null, y.langMgr.getStr("Redeem_Tips_8"))
                                : c.UIMgr.showView(l.ViewUrl.commonTip, null, y.langMgr.getStr("Redeem_Tips_6"));
                        }
                    } else c.UIMgr.showView(l.ViewUrl.commonTip, null, y.langMgr.getStr("Redeem_Tips_7"));
                }),
                (t.checkGetCode = function () {
                    return r(t, void 0, void 0, function () {
                        var e;
                        return s(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return g.codeMgr.isCodeExit() ? [3, 2] : [4, g.codeMgr.getRemoteCode()];
                                case 1:
                                    return (
                                        t.sent(),
                                        (e = g.codeMgr.getCode()) && e.length
                                            ? (this.jsonCode = e)
                                            : c.UIMgr.showView(
                                                  l.ViewUrl.commonTip,
                                                  null,
                                                  y.langMgr.getStr("Redeem_Tips_5")
                                              ),
                                        [3, 3]
                                    );
                                case 2:
                                    (this.jsonCode = g.codeMgr.getCode()), (t.label = 3);
                                case 3:
                                    return [2];
                            }
                        });
                    });
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onEnable = function () {
                this.onShowPlay(2, this.aniNode),
                    g.codeMgr.isCodeExit() || g.codeMgr.initCode(),
                    (this.codeEditBox.placeholder = y.langMgr.getStr("Redeem_Tips_3")),
                    this.convertBtn.on(cc.Node.EventType.TOUCH_END, this.onConvert),
                    this.closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeView),
                    (this.jsonCode = g.codeMgr.getCode());
            }),
            (t.prototype.showCodeReward = function (e) {
                var t = this,
                    o = [],
                    n = e.reward.split(","),
                    a = function (e) {
                        var n = Number(e[0]),
                            a = {};
                        if (
                            3e3 === n ||
                            1010303 === n ||
                            1010304 === n ||
                            1010305 === n ||
                            1010306 === n ||
                            1010307 === n
                        ) {
                            var i = f.JsonMgr.getPoolById(n),
                                r = [],
                                s = [],
                                c = [];
                            t.analyseRate(i, r, s, c);
                            for (var l = 0; l < Number(e[1]); l++) {
                                var p = u.CommonUtil.getWeightRandom(c),
                                    d = r[p],
                                    h = s[p];
                                a[d] = a[d] ? a[d] + h : h;
                            }
                            Object.keys(a).map(function (e) {
                                var n = [e, a[e]];
                                t.saveToLocal(n), o.push({id: Number(n[0]), count: Number(n[1])});
                            });
                        } else t.saveToLocal(e), o.push({id: Number(e[0]), count: Number(e[1])});
                    };
                n.forEach(function (e) {
                    if (e) {
                        var t = e.split("|");
                        t && a(t);
                    }
                }),
                    v.playData.addCodeData(e.type),
                    o.length && c.UIMgr.showView(l.ViewUrl.commonRewardView, null, o);
            }),
            (t.prototype.saveToLocal = function (e) {
                var t = Number(e[0]);
                1001 === t
                    ? (v.playData.addGold(Number(e[1])), d.analyMgr.reportGetGold(Number(e[1]), "Code"))
                    : 1002 === t
                    ? (v.playData.addGem(Number(e[1])), d.analyMgr.reportGetGem(Number(e[1]), "Code"))
                    : 1003 === t
                    ? (v.playData.addEnergy(Number(e[1])), d.analyMgr.reportGetEnergy(Number(e[1]), "Code"))
                    : 1014 === t
                    ? (v.playData.addPropeller(Number(e[1])),
                      d.analyMgr.reportGetItem("Booster", t, Number(e[1]), "Code"))
                    : 2001 === t
                    ? (v.playData.addNormalKey(Number(e[1])), d.analyMgr.reportGetItem("Key", t, Number(e[1]), "Code"))
                    : 2002 === t
                    ? (v.playData.addSuperKey(Number(e[1])), d.analyMgr.reportGetItem("Key", t, Number(e[1]), "Code"))
                    : 2003 === t
                    ? (v.playData.addSSRKey(Number(e[1])), d.analyMgr.reportGetItem("Key", t, Number(e[1]), "Code"))
                    : t > 1e4 && t < 10010
                    ? (m.heroData.addMap(Number(t), Number(e[1])),
                      d.analyMgr.reportGetItem("Blueprint", t, Number(e[1]), "Code"))
                    : t > 1e5 && t < 9e5
                    ? (m.heroData.addEquip(Number(t), Number(e[1])),
                      d.analyMgr.reportGetItem("Weapon", t, Number(e[1]), "Code"))
                    : 1017 === t
                    ? (v.playData.addHeroExperience(Number(e[1])),
                      d.analyMgr.reportGetItem("HeroExp", t, Number(e[1]), "Code"))
                    : t > 3e3 && t < 3005
                    ? (v.playData.addHeroDebris(t, Number(e[1])),
                      d.analyMgr.reportGetItem("Hero", t, Number(e[1]), "Code"))
                    : t > 1017 && t < 1020 && h.activityMgr.saveItemToMap(t, Number(e[1]));
            }),
            (t.prototype.getUrl = function () {
                return l.ViewUrl.CodeView;
            }),
            (t.prototype.analyseRate = function (e, t, o, n) {
                e.idrate.split(";").forEach(function (e) {
                    var a = e.split("|");
                    t.push(Number(a[0])), o.push(Number(a[1])), n.push(Number(a[2]));
                });
            }),
            i([C(cc.Node)], t.prototype, "aniNode", void 0),
            i([C(cc.EditBox)], t.prototype, "codeEditBox", void 0),
            i([C(cc.Node)], t.prototype, "convertBtn", void 0),
            i([C(cc.Node)], t.prototype, "closeBtn", void 0),
            i([_], t)
        );
    })(p.GameComponent);
o.default = b;
