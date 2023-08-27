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
Object.defineProperty(o, "__esModule", {value: !0}), (o.GameComponent = void 0);
var r = cc._decorator.ccclass,
    s = e("BaseComponent"),
    c = e("UIManager"),
    l = e("UIUtil"),
    p = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.popLevel = 0),
                (t.gameNode = null),
                (t.show = function () {
                    l.UIUtil.show(t);
                }),
                (t.hide = function () {
                    l.UIUtil.hide(t);
                }),
                (t.closeView = function (e) {
                    void 0 === e && (e = !1), t.closeComponent(!0, e);
                }),
                (t.closeOnly = function (e) {
                    void 0 === e && (e = !1), t.closeComponent(!1, e);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.closeComponent = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !1), c.UIMgr.closeView(this.getUrl(), !0, e, t);
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), (this.gameNode = null);
            }),
            (t.prototype.onShowPlay = function (e, t, o) {
                void 0 === o && (o = null), (this.popLevel = e), (this.gameNode = t), this.playMovie(o);
            }),
            (t.prototype.playMovie = function (e) {
                switch ((void 0 === e && (e = null), this.popLevel)) {
                    case 0:
                        break;
                    case 1:
                        this.gameNode.setPosition(cc.v2(this.gameNode.x, this.gameNode.y - 200)),
                            (this.gameNode.opacity = 0);
                        var t = cc.moveBy(0.3, cc.v2(0, 200));
                        t.easing(cc.easeBackOut());
                        var o = cc.fadeIn(0.2);
                        this.gameNode.runAction(
                            cc.sequence(
                                cc.spawn(o, t),
                                cc.callFunc(function () {
                                    e && e();
                                })
                            )
                        );
                        break;
                    case 2:
                        this.gameNode.scale = 0.2;
                        var n = cc.scaleTo(0.5, 1);
                        n.easing(cc.easeBackOut()),
                            this.gameNode.runAction(
                                cc.sequence(
                                    n,
                                    cc.callFunc(function () {
                                        e && e();
                                    })
                                )
                            );
                        break;
                    case 3:
                        var a = cc.moveBy(0.2, cc.v2(-this.gameNode.getContentSize().width, 0));
                        a.easing(cc.easeIn(3)),
                            this.gameNode.runAction(
                                cc.sequence(
                                    a,
                                    cc.callFunc(function () {
                                        e && e();
                                    })
                                )
                            );
                }
            }),
            i([r()], t)
        );
    })(s.BaseComponent);
o.GameComponent = p;
