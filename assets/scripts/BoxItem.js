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
var c = e("PoolManager"),
    l = e("CommonUtil"),
    p = e("JsonManager"),
    u = e("LoadManager"),
    d = e("ExpEntities"),
    h = e("MonsterManager"),
    g = e("GameView"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.brokenAni = null),
                (t.firstImg = null),
                (t.weightArr = []),
                (t.ids = [1007, 1008, 1009, 1010, 1011, 1012]),
                (t.isPlay = !1),
                (t.tag = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                var t = this;
                (this.tag = e),
                    (this.node.active = !0),
                    (this.node.getComponent(cc.Sprite).spriteFrame = this.firstImg),
                    (this.node.opacity = 255),
                    this.brokenAni.stop(),
                    this.brokenAni.setCurrentTime(0),
                    0 === this.weightArr.length &&
                        p.JsonMgr.getDefineConstantByName("SupplyWeight")
                            .split(",")
                            .forEach(function (e) {
                                t.weightArr.push(Number(e));
                            }),
                    (this.node.parent = g.default.instance().itemLayer),
                    h.default.instance().initPosition(this.node);
            }),
            (t.prototype.brokenAniPlay = function () {
                return r(this, void 0, void 0, function () {
                    var e = this;
                    return s(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return this.isPlay
                                    ? [2]
                                    : ((this.isPlay = !0),
                                      this.brokenAni.play("box"),
                                      h.default.instance().deleteBox(this.tag),
                                      [4, this.drop()]);
                            case 1:
                                return (
                                    t.sent(),
                                    this.scheduleOnce(function () {
                                        e.backToPool();
                                    }, 0.77),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (t.prototype.drop = function () {
                return r(this, void 0, void 0, function () {
                    var e, t, o, n;
                    return s(this, function (a) {
                        switch (a.label) {
                            case 0:
                                return (
                                    h.default.instance().deleteBox(this.tag),
                                    (e = l.CommonUtil.getWeightRandom(this.weightArr)),
                                    [4, u.LoadManager.loadResAwait("prefab/Skill/exp", cc.Prefab)]
                                );
                            case 1:
                                return (
                                    (t = a.sent()),
                                    (o = c.poolMgr.getNodeFromMap(t))
                                        .getComponent(d.default)
                                        .setSprite({id: this.ids[e], value: 0}),
                                    (n = this.getPos()),
                                    o.setPosition(n),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (t.prototype.getWorldPos = function () {
                return this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
            }),
            (t.prototype.getPos = function () {
                return this.node.getPosition();
            }),
            (t.prototype.backToPool = function () {
                c.poolMgr.putNodeToPool(this.node), (this.node.active = !1), (this.isPlay = !1);
            }),
            i([y(cc.Animation)], t.prototype, "brokenAni", void 0),
            i([y(cc.SpriteFrame)], t.prototype, "firstImg", void 0),
            i([f], t)
        );
    })(cc.Component);
o.default = v;
