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
Object.defineProperty(o, "__esModule", {value: !0}), (o.guideMgr = o.FAIL_GUIDE = o.GUIDE_STEP = void 0);
var r,
    s,
    c = e("PlayerData"),
    l = e("UIManager"),
    p = e("GameManager"),
    u = e("event-kit"),
    d = e("ClientEvents"),
    h = e("HomeManager"),
    g = e("ViewUrl"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property;
(function (e) {
    (e[(e.FIRSTGAME = 0)] = "FIRSTGAME"),
        (e[(e.TALENT = 1)] = "TALENT"),
        (e[(e.SHOP = 2)] = "SHOP"),
        (e[(e.EQUIP = 3)] = "EQUIP"),
        (e[(e.NEXTGAME = 4)] = "NEXTGAME"),
        (e[(e.OVER = 5)] = "OVER");
})((r = o.GUIDE_STEP || (o.GUIDE_STEP = {}))),
    (function (e) {
        (e[(e.ALERT = 0)] = "ALERT"),
            (e[(e.SHOP = 1)] = "SHOP"),
            (e[(e.EQUIP = 2)] = "EQUIP"),
            (e[(e.OVER = 3)] = "OVER");
    })((s = o.FAIL_GUIDE || (o.FAIL_GUIDE = {})));
var v = (function (e) {
    function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
            (t.startGame = null),
            (t.shopNode = null),
            (t.talentNode = null),
            (t.equipNode = null),
            (t.mapNode = null),
            (t.dispose = new u.CompositeDisposable()),
            (t.init = function () {
                t.scheduleOnce(function () {
                    switch (c.playData.getNewUserStep()) {
                        case r.FIRSTGAME:
                            l.UIMgr.showGuideWithNode(t.startGame, function () {
                                p.gameMgr.startGame(0);
                            });
                            break;
                        case r.TALENT:
                            d.ClientEvents.REFRESH_LAYER_OPEN.emit(),
                                l.UIMgr.showGuideWithNode(t.talentNode, function () {
                                    d.ClientEvents.DOWN_BTN_CHANGE.emit(4);
                                });
                            break;
                        case r.SHOP:
                            l.UIMgr.showGuideWithNode(t.shopNode, function () {
                                d.ClientEvents.DOWN_BTN_CHANGE.emit(0);
                            });
                            break;
                        case r.EQUIP:
                            l.UIMgr.showGuideWithNode(t.equipNode, function () {
                                d.ClientEvents.DOWN_BTN_CHANGE.emit(1);
                            });
                            break;
                        case r.NEXTGAME:
                            h.homeMgr.getCurShowLayer() != g.ViewUrl.homeUI
                                ? l.UIMgr.showGuideWithNode(t.mapNode, function () {
                                      d.ClientEvents.DOWN_BTN_CHANGE.emit(2),
                                          l.UIMgr.showGuideWithNode(t.startGame, function () {
                                              var e = c.playData.getCompleteLevel();
                                              p.gameMgr.startGame(e);
                                          });
                                  })
                                : l.UIMgr.showGuideWithNode(t.startGame, function () {
                                      var e = c.playData.getCompleteLevel();
                                      p.gameMgr.startGame(e);
                                  });
                    }
                }, 0.1);
            }),
            (t.refreshFail = function () {
                t.scheduleOnce(function () {
                    switch (c.playData.getFailGuideStep()) {
                        case s.SHOP:
                            l.UIMgr.showGuideWithNode(t.shopNode, function () {
                                d.ClientEvents.DOWN_BTN_CHANGE.emit(0);
                            });
                            break;
                        case s.EQUIP:
                            l.UIMgr.showGuideWithNode(t.equipNode, function () {
                                d.ClientEvents.DOWN_BTN_CHANGE.emit(1);
                            });
                    }
                }, 0.1);
            }),
            t
        );
    }
    var o;
    return (
        a(t, e),
        (o = t),
        (t.instance = function () {
            return o._instance;
        }),
        (t.prototype.onLoad = function () {
            o._instance = this;
        }),
        (t.prototype.start = function () {
            this.init(),
                this.refreshFail(),
                this.dispose.add(d.ClientEvents.REFRESH_GUIDE.on(this.init)),
                this.dispose.add(d.ClientEvents.REFRESH_FAIL_GUIDE.on(this.refreshFail));
        }),
        (t.prototype.onDestroy = function () {
            this.dispose.dispose();
        }),
        (t._instance = null),
        (t.guideWeaponId = 110001),
        (t.failWeaponId = 150101),
        i([y(cc.Node)], t.prototype, "startGame", void 0),
        i([y(cc.Node)], t.prototype, "shopNode", void 0),
        i([y(cc.Node)], t.prototype, "talentNode", void 0),
        i([y(cc.Node)], t.prototype, "equipNode", void 0),
        i([y(cc.Node)], t.prototype, "mapNode", void 0),
        (o = i([f], t))
    );
})(cc.Component);
(o.default = v), (o.guideMgr = v.instance());
