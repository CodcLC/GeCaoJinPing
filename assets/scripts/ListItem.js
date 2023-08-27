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
var r,
    s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    p = s.disallowMultiple,
    u = s.menu,
    d = s.executionOrder;
(function (e) {
    (e[(e.NONE = 0)] = "NONE"), (e[(e.TOGGLE = 1)] = "TOGGLE"), (e[(e.SWITCH = 2)] = "SWITCH");
})(r || (r = {}));
var h = (function (e) {
    function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
            (t.icon = null),
            (t.title = null),
            (t.selectedMode = r.NONE),
            (t.selectedFlag = null),
            (t.selectedSpriteFrame = null),
            (t._unselectedSpriteFrame = null),
            (t.adaptiveSize = !1),
            (t._selected = !1),
            (t._eventReg = !1),
            t
        );
    }
    return (
        a(t, e),
        Object.defineProperty(t.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (e) {
                if (((this._selected = e), this.selectedFlag))
                    switch (this.selectedMode) {
                        case r.TOGGLE:
                            this.selectedFlag.active = e;
                            break;
                        case r.SWITCH:
                            var t = this.selectedFlag.getComponent(cc.Sprite);
                            t && (t.spriteFrame = e ? this.selectedSpriteFrame : this._unselectedSpriteFrame);
                    }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "btnCom", {
            get: function () {
                return this._btnCom || (this._btnCom = this.node.getComponent(cc.Button)), this._btnCom;
            },
            enumerable: !1,
            configurable: !0
        }),
        (t.prototype.onLoad = function () {
            if (this.selectedMode == r.SWITCH) {
                var e = this.selectedFlag.getComponent(cc.Sprite);
                this._unselectedSpriteFrame = e.spriteFrame;
            }
        }),
        (t.prototype.onDestroy = function () {
            this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
        }),
        (t.prototype._registerEvent = function () {
            this._eventReg ||
                (this.btnCom &&
                    this.list.selectedMode > 0 &&
                    this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis")),
                this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this),
                (this._eventReg = !0));
        }),
        (t.prototype._onSizeChange = function () {
            this.list._onItemAdaptive(this.node);
        }),
        (t.prototype.createEvt = function (e, t, o) {
            if ((void 0 === o && (o = null), e.isValid)) {
                e.comName =
                    e.comName ||
                    e.name
                        .match(/\<(.*?)\>/g)
                        .pop()
                        .replace(/\<|>/g, "");
                var n = new cc.Component.EventHandler();
                return (n.target = o || e.node), (n.component = e.comName), (n.handler = t), n;
            }
        }),
        (t.prototype.showAni = function (e, t, o) {
            var n,
                a = this;
            switch (e) {
                case 0:
                    n = cc
                        .tween(a.node)
                        .to(0.2, {scale: 0.7})
                        .by(0.3, {y: 2 * a.node.height});
                    break;
                case 1:
                    n = cc
                        .tween(a.node)
                        .to(0.2, {scale: 0.7})
                        .by(0.3, {x: 2 * a.node.width});
                    break;
                case 2:
                    n = cc
                        .tween(a.node)
                        .to(0.2, {scale: 0.7})
                        .by(0.3, {y: -2 * a.node.height});
                    break;
                case 3:
                    n = cc
                        .tween(a.node)
                        .to(0.2, {scale: 0.7})
                        .by(0.3, {x: -2 * a.node.width});
                    break;
                default:
                    n = cc.tween(a.node).to(0.3, {scale: 0.1});
            }
            (t || o) &&
                n.call(function () {
                    if (o) {
                        a.list._delSingleItem(a.node);
                        for (var e = a.list.displayData.length - 1; e >= 0; e--)
                            if (a.list.displayData[e].id == a.listId) {
                                a.list.displayData.splice(e, 1);
                                break;
                            }
                    }
                    t();
                }),
                n.start();
        }),
        (t.prototype.onClickThis = function () {
            this.list.selectedId = this.listId;
        }),
        i([l({type: cc.Sprite})], t.prototype, "icon", void 0),
        i([l({type: cc.Node})], t.prototype, "title", void 0),
        i([l({type: cc.Enum(r)})], t.prototype, "selectedMode", void 0),
        i(
            [
                l({
                    type: cc.Node,
                    visible: function () {
                        return this.selectedMode > r.NONE;
                    }
                })
            ],
            t.prototype,
            "selectedFlag",
            void 0
        ),
        i(
            [
                l({
                    type: cc.SpriteFrame,
                    visible: function () {
                        return this.selectedMode == r.SWITCH;
                    }
                })
            ],
            t.prototype,
            "selectedSpriteFrame",
            void 0
        ),
        i([l({})], t.prototype, "adaptiveSize", void 0),
        i([c, p(), u("自定义组件/List Item"), d(-5001)], t)
    );
})(cc.Component);
o.default = h;
