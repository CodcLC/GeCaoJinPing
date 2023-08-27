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
var c = e("LoadManager"),
    l = e("UIManager"),
    p = e("ClientEvents"),
    u = e("ViewUrl"),
    d = e("LangLabel"),
    h = e("ListItem"),
    g = e("AnalyticsManager"),
    m = e("challengeManager"),
    f = e("HomeManager"),
    y = e("JsonManager"),
    v = e("LanguageManager"),
    M = e("PlayerData"),
    _ = e("ResManager"),
    C = cc._decorator,
    b = C.ccclass,
    T = C.property,
    w = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.levelContent = null),
                (t.perchContent = null),
                (t.perchBtn = null),
                (t.levelLabel = null),
                (t.lockNode = null),
                (t.dbNode = null),
                (t.lockMask = null),
                (t.passNode = null),
                (t.lock = null),
                (t.awaitReceive = null),
                (t.receive = null),
                (t.difficulty = null),
                (t.difficultySp = []),
                (t.levelIcon = null),
                (t.enemyAnim = null),
                (t._data = null),
                (t._touchEnable = !1),
                (t._boxAnim = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {}),
            (t.prototype.init = function (e) {
                this.initBoxAnim(),
                    (this._data = m.challengeMgr.getMapJson()[e]),
                    this._data
                        ? this.showLevel(!0)
                        : (this.showLevel(!1),
                          (this.node.height = 80),
                          this.levelLabel
                              .getComponent(d.LangLabel)
                              .setText(m.challengeMgr.getLevelName(Math.floor(e / 4))),
                          e === 4 * M.playData.getCompleteLevel() &&
                              ((this.perchBtn.color = new cc.Color(5, 20, 42)), (this.lockNode.active = !0))),
                    this.initTouchEnable();
            }),
            (t.prototype.showLevel = function (e) {
                (this.levelContent.active = e), (this.perchContent.active = !e), e && this.showChallengeLevel();
            }),
            (t.prototype.showChallengeLevel = function () {
                this.setItemLock(), this.showBgColor();
                var e = y.JsonMgr.getLevelJson(this._data.levelid);
                _.ResManager.loadBattleMapIcon(e.lobbymap, this.levelIcon),
                    (this.difficulty.spriteFrame = this.difficultySp[this._data.difficultylevel - 1]),
                    this.playAnim(this.lockMask.active);
            }),
            (t.prototype.initTouchEnable = function () {
                var e = this;
                this._touchEnable ||
                    ((this._touchEnable = !0),
                    this.node.on(cc.Node.EventType.TOUCH_END, function () {
                        e.touchEnable();
                    }));
            }),
            (t.prototype.touchEnable = function () {
                var e = this;
                if (!1 === this.lockMask.active)
                    p.ClientEvents.CHANGE_LOADING.emit(!0),
                        l.UIMgr.showView(u.ViewUrl.challengePop, null, this._data, function () {
                            p.ClientEvents.CHANGE_LOADING.emit(!1);
                        });
                else if (!0 === this.passNode.active) {
                    if (this.getIsReceive())
                        p.ClientEvents.CHANGE_LOADING.emit(!0),
                            l.UIMgr.showView(u.ViewUrl.challengePop, null, this._data, function () {
                                p.ClientEvents.CHANGE_LOADING.emit(!1);
                            });
                    else {
                        var t = [],
                            o = this._data.chapterreward.split(";");
                        o.forEach(function (e) {
                            var o = e.split("|");
                            t.push({id: Number(o[0]), count: Number(o[1])});
                        }),
                            l.UIMgr.showView(u.ViewUrl.commonRewardViewAd, null, t, null, 998, !1, function (t) {
                                e.issueReward(o, t),
                                    M.playData.receiveChallengeReward(e._data.levelid + "-" + e._data.difficultylevel),
                                    p.ClientEvents.CHALLENGE_REFRESH.emit();
                            });
                    }
                } else {
                    if (!1 === this.levelContent.active) return;
                    l.UIMgr.showView(u.ViewUrl.commonTip, null, v.langMgr.getStr("Challenge_Tips_2"));
                }
            }),
            (t.prototype.setItemLock = function () {
                var e = m.challengeMgr.getLevel(),
                    t = this.getPassLevel(),
                    o = this._data.levelid + "-" + this._data.difficultylevel;
                if (t.includes(o))
                    (this.difficulty.node.color = new cc.Color(127, 127, 127)),
                        (this.lockMask.active = !0),
                        (this.passNode.active = !0),
                        this.getIsReceive() ? this.resolveMask(3) : this.resolveMask(2);
                else if (e >= this._data.levelid && 1 === this._data.difficultylevel) this.lockMask.active = !1;
                else {
                    var n = this._data.levelid + "-" + (this._data.difficultylevel - 1);
                    t.includes(n) ? (this.lockMask.active = !1) : this.resolveMask(1);
                }
                this.lockMask.active;
            }),
            (t.prototype.getPassLevel = function () {
                var e = [];
                return (
                    m.challengeMgr.getPassData().forEach(function (t) {
                        e.push(t.level);
                    }),
                    e
                );
            }),
            (t.prototype.getIsReceive = function () {
                var e = this._data.levelid + "-" + this._data.difficultylevel;
                return m.challengeMgr.getIsReceive(e);
            }),
            (t.prototype.showBgColor = function () {
                1 === this._data.difficultylevel
                    ? (this.dbNode.color = new cc.Color(114, 193, 187))
                    : 2 === this._data.difficultylevel
                    ? (this.dbNode.color = new cc.Color(234, 210, 52))
                    : 3 === this._data.difficultylevel && (this.dbNode.color = new cc.Color(178, 39, 39));
            }),
            (t.prototype.issueReward = function (e, t) {
                e.forEach(function (e) {
                    var o = e.split("|");
                    1001 === Number(o[0])
                        ? (M.playData.addGold(Number(o[1]) * t),
                          g.analyMgr.reportGetGold(Number(o[1]) * t, "ChallengeMap"))
                        : 1002 === Number(o[0])
                        ? (M.playData.addGem(Number(o[1]) * t),
                          g.analyMgr.reportGetGem(Number(o[1]) * t, "ChallengeMap"))
                        : 1003 === Number(o[0])
                        ? f.homeMgr.addEnergy(Number(o[1]) * t, "ChallengeMap")
                        : 1014 === Number(o[0]) &&
                          (m.challengeMgr.addPropeller(Number(o[1]) * t),
                          g.analyMgr.reportGetItem("Booster", 1014, Number(o[1]) * t, "ChallengeMap"));
                });
            }),
            (t.prototype.resolveMask = function (e) {
                void 0 === e && (e = 1),
                    (this.receive.active = !1),
                    (this.awaitReceive.active = !1),
                    (this.lock.active = !1),
                    cc.Tween.stopAllByTarget(this.awaitReceive),
                    1 === e
                        ? (this.lock.active = !0)
                        : 2 === e
                        ? ((this.awaitReceive.active = !0), this._boxAnim.start())
                        : 3 === e && (this.receive.active = !0);
            }),
            (t.prototype.initBoxAnim = function () {
                var e = this.awaitReceive.getPosition();
                this._boxAnim = cc
                    .tween(this.awaitReceive)
                    .to(0.15, {angle: 5, position: cc.v3(e.x, e.y + 10, 1)})
                    .to(0.15, {angle: 0, position: cc.v3(e.x, e.y, 1)})
                    .to(0.15, {angle: -5, position: cc.v3(e.x, e.y + 10, 1)})
                    .to(0.15, {angle: 0, position: cc.v3(e.x, e.y, 1)})
                    .delay(0.3)
                    .union()
                    .repeatForever()
                    .start();
            }),
            (t.prototype.playAnim = function (e) {
                return r(this, void 0, void 0, function () {
                    var t,
                        o = this;
                    return s(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return (
                                    this.enemyAnim.getClips().forEach(function (e) {
                                        e && e.isValid && o.enemyAnim.removeClip(e);
                                    }),
                                    [
                                        4,
                                        c.LoadManager.loadResAwait(
                                            "animation/" + y.JsonMgr.getLevelJson(this._data.levelid).mapmonster,
                                            cc.AnimationClip
                                        )
                                    ]
                                );
                            case 1:
                                return (
                                    (t = n.sent()),
                                    this.enemyAnim.addClip(t),
                                    this.enemyAnim.play(y.JsonMgr.getLevelJson(this._data.levelid).mapmonster),
                                    e &&
                                        this.scheduleOnce(function () {
                                            o.enemyAnim.stop();
                                        }),
                                    [2]
                                );
                        }
                    });
                });
            }),
            i([T(cc.Node)], t.prototype, "levelContent", void 0),
            i([T(cc.Node)], t.prototype, "perchContent", void 0),
            i([T(cc.Node)], t.prototype, "perchBtn", void 0),
            i([T(cc.Node)], t.prototype, "levelLabel", void 0),
            i([T(cc.Node)], t.prototype, "lockNode", void 0),
            i([T(cc.Node)], t.prototype, "dbNode", void 0),
            i([T(cc.Node)], t.prototype, "lockMask", void 0),
            i([T(cc.Node)], t.prototype, "passNode", void 0),
            i([T(cc.Node)], t.prototype, "lock", void 0),
            i([T(cc.Node)], t.prototype, "awaitReceive", void 0),
            i([T(cc.Node)], t.prototype, "receive", void 0),
            i([T(cc.Sprite)], t.prototype, "difficulty", void 0),
            i([T(cc.SpriteFrame)], t.prototype, "difficultySp", void 0),
            i([T(cc.Sprite)], t.prototype, "levelIcon", void 0),
            i([T(cc.Animation)], t.prototype, "enemyAnim", void 0),
            i([b], t)
        );
    })(h.default);
o.default = w;
