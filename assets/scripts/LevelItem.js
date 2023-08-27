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
var c = e("ListItem"),
    l = e("JsonManager"),
    p = e("PlayerData"),
    u = e("LoadManager"),
    d = e("ResManager"),
    h = e("ClientEvents"),
    g = cc._decorator,
    m = g.ccclass,
    f = g.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.lockSprite = null),
                (t.displayNode = null),
                (t.giftBox = null),
                (t.giftBoxFrame = []),
                (t.enemyAnim = null),
                (t.levelJson = null),
                (t.index = -1),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {}),
            (t.prototype.init = function (e) {
                return r(this, void 0, void 0, function () {
                    var t = this;
                    return s(this, function () {
                        return (
                            (this.index = e),
                            (this.levelJson = l.JsonMgr.getLevelJson(e + 1)),
                            this.setNodeLock(),
                            p.playData.checkLevelIsInLock(this.levelJson.id) ||
                                this.scheduleOnce(function () {
                                    return r(t, void 0, void 0, function () {
                                        return s(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, this.loadAnim()];
                                                case 1:
                                                    return e.sent(), [2];
                                            }
                                        });
                                    });
                                }, 0),
                            h.ClientEvents.LEVEL_INIT.emit(),
                            [2]
                        );
                    });
                });
            }),
            (t.prototype.setNodeLock = function () {
                p.playData.checkLevelIsInLock(this.levelJson.id)
                    ? (this.displayNode.spriteFrame = this.lockSprite)
                    : d.ResManager.loadBattleMapIcon(this.levelJson.lobbymap, this.displayNode),
                    (this.giftBox.spriteFrame = p.playData.checkLevelIsInLock(this.levelJson.id)
                        ? this.giftBoxFrame[1]
                        : this.giftBoxFrame[0]);
            }),
            (t.prototype.getIndex = function () {
                return this.index;
            }),
            (t.prototype.getLevelJson = function () {
                return this.levelJson;
            }),
            (t.prototype.loadAnim = function () {
                return r(this, void 0, void 0, function () {
                    var e,
                        t = this;
                    return s(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return (
                                    this.enemyAnim.getClips().forEach(function (e) {
                                        e && e.isValid && t.enemyAnim.removeClip(e);
                                    }),
                                    [
                                        4,
                                        u.LoadManager.loadResAwait(
                                            "animation/" + this.levelJson.mapmonster,
                                            cc.AnimationClip
                                        )
                                    ]
                                );
                            case 1:
                                return (
                                    (e = o.sent()),
                                    this.enemyAnim.addClip(e),
                                    this.enemyAnim.play(this.levelJson.mapmonster),
                                    [2]
                                );
                        }
                    });
                });
            }),
            i([f(cc.SpriteFrame)], t.prototype, "lockSprite", void 0),
            i([f(cc.Sprite)], t.prototype, "displayNode", void 0),
            i([f(cc.Sprite)], t.prototype, "giftBox", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "giftBoxFrame", void 0),
            i([f(cc.Animation)], t.prototype, "enemyAnim", void 0),
            i([m], t)
        );
    })(c.default);
o.default = y;
