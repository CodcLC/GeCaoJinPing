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
Object.defineProperty(o, "__esModule", {value: !0});
var r = e("CommonUtil"),
    s = e("PoolManager"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.icon = null), (t.frameArr = []), t;
        }
        return (
            a(t, e),
            (t.prototype.init = function () {
                var e = this;
                (this.icon.spriteFrame = this.frameArr[r.CommonUtil.getRangeCloseNum(0, 2)]),
                    (this.icon.node.color = new cc.Color(0, 170, 79)),
                    this.node.stopAllActions(),
                    this.node.runAction(
                        cc.sequence(
                            cc.delayTime(1),
                            cc.fadeOut(0.4),
                            cc.callFunc(function () {
                                s.poolMgr.putNodeToPool(e.node), (e.node.opacity = 255);
                            })
                        )
                    );
            }),
            i([p(cc.Sprite)], t.prototype, "icon", void 0),
            i([p(cc.SpriteFrame)], t.prototype, "frameArr", void 0),
            i([l], t)
        );
    })(cc.Component);
o.default = u;
