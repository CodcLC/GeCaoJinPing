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
Object.defineProperty(o, "__esModule", {value: !0}),
    (o.JoystickType = o.SpeedType = o.DirectionType = o.instance = void 0);
var r,
    s,
    c,
    l = e("GameView"),
    p = e("PlayerData"),
    u = e("ClientEvents"),
    d = e("GuideManager"),
    h = cc._decorator,
    g = h.ccclass,
    m = h.property;
(o.instance = new cc.EventTarget()),
    (function (e) {
        (e[(e.FOUR = 0)] = "FOUR"), (e[(e.EIGHT = 1)] = "EIGHT"), (e[(e.ALL = 2)] = "ALL");
    })((r = o.DirectionType || (o.DirectionType = {}))),
    (function (e) {
        (e[(e.STOP = 0)] = "STOP"), (e[(e.NORMAL = 1)] = "NORMAL"), (e[(e.FAST = 2)] = "FAST");
    })((s = o.SpeedType || (o.SpeedType = {}))),
    (function (e) {
        (e[(e.FIXED = 0)] = "FIXED"), (e[(e.FOLLOW = 1)] = "FOLLOW");
    })((c = o.JoystickType || (o.JoystickType = {})));
var f = (function (e) {
    function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
            (t.dot = null),
            (t.ring = null),
            (t.joystickType = c.FIXED),
            (t.directionType = r.ALL),
            (t._stickPos = null),
            (t._touchLocation = null),
            (t._radius = 0),
            t
        );
    }
    return (
        a(t, e),
        (t.prototype.onLoad = function () {
            (this._radius = this.ring.width / 2),
                this._initTouchEvent(),
                this.joystickType === c.FOLLOW && (this.node.opacity = 0);
        }),
        (t.prototype.onEnable = function () {
            o.instance.on("set_joystick_type", this._onSetJoystickType, this);
        }),
        (t.prototype.onDisable = function () {
            o.instance.off("set_joystick_type", this._onSetJoystickType, this);
        }),
        (t.prototype._onSetJoystickType = function (e) {
            (this.joystickType = e), (this.node.opacity = e === c.FIXED ? 255 : 0);
        }),
        (t.prototype._initTouchEvent = function () {
            this.node.on(cc.Node.EventType.TOUCH_START, this._touchStartEvent, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndEvent, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this);
        }),
        (t.prototype._touchStartEvent = function (e) {
            p.playData.getNewUserStep() === d.GUIDE_STEP.FIRSTGAME &&
                (u.ClientEvents.CLOSE_GUIDE_LAYER.emit(), p.playData.addGuideStep()),
                o.instance.emit(cc.Node.EventType.TOUCH_START, e);
            var t = this.node.convertToNodeSpaceAR(e.getLocation());
            if (this.joystickType === c.FIXED) {
                this._stickPos = this.ring.getPosition();
                var n = t.sub(this.ring.getPosition()).mag();
                this._radius > n && this.dot.setPosition(t);
            } else
                this.joystickType === c.FOLLOW &&
                    ((this._stickPos = t),
                    (this.node.opacity = 255),
                    (this._touchLocation = e.getLocation()),
                    this.ring.setPosition(t),
                    this.dot.setPosition(t));
        }),
        (t.prototype._touchMoveEvent = function (e) {
            if (this.joystickType === c.FOLLOW && this._touchLocation === e.getLocation()) return !1;
            var t,
                n = this.ring.convertToNodeSpaceAR(e.getLocation()),
                a = n.mag(),
                i = this._stickPos.x + n.x,
                r = this._stickPos.y + n.y,
                p = cc.v2(i, r).sub(this.ring.getPosition()).normalize(),
                u = 0;
            if (this._radius > a)
                this.dot.setPosition(cc.v2(i, r)),
                    (u = cc.v2(i - this.ring.x, r - this.ring.y).signAngle(cc.v2(1, 0))),
                    (t = s.NORMAL);
            else {
                var d = this._stickPos.x + p.x * this._radius,
                    h = this._stickPos.y + p.y * this._radius;
                this.dot.setPosition(cc.v2(d, h)),
                    (u = cc.v2(d - this.ring.x, h - this.ring.y).signAngle(cc.v2(1, 0))),
                    (t = s.FAST);
            }
            l.default.instance().setCacheRadian(u),
                l.default.instance().setCacheMoveDir(p),
                o.instance.emit(cc.Node.EventType.TOUCH_MOVE, e, {speedType: t, moveDistance: p});
        }),
        (t.prototype._touchEndEvent = function (e) {
            this.dot.setPosition(this.ring.getPosition()),
                this.joystickType === c.FOLLOW && (this.node.opacity = 0),
                o.instance.emit(cc.Node.EventType.TOUCH_END, e, {speedType: s.STOP});
        }),
        i([m({type: cc.Node, displayName: "Dot", tooltip: "摇杆操纵点"})], t.prototype, "dot", void 0),
        i([m({type: cc.Node, displayName: "Ring", tooltip: "摇杆背景节点"})], t.prototype, "ring", void 0),
        i([m({type: cc.Enum(c), displayName: "Touch Type", tooltip: "触摸类型"})], t.prototype, "joystickType", void 0),
        i(
            [m({type: cc.Enum(r), displayName: "Direction Type", tooltip: "方向类型"})],
            t.prototype,
            "directionType",
            void 0
        ),
        i([m({type: cc.Node, tooltip: "摇杆所在位置"})], t.prototype, "_stickPos", void 0),
        i([m({type: cc.Node, tooltip: "触摸位置"})], t.prototype, "_touchLocation", void 0),
        i([m({tooltip: "半径"})], t.prototype, "_radius", void 0),
        i([g], t)
    );
})(cc.Component);
o.default = f;
