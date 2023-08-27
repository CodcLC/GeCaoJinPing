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
var r = e("UIManager"),
    s = e("MonsterManager"),
    c = e("MapEntities"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.bg = null),
                (t.midMap = []),
                (t.sideMap = []),
                (t.left = null),
                (t.right = null),
                (t.resetCheck = function () {
                    t.left.setPosition(-320, 0),
                        t.right.setPosition(320, 0),
                        (t.left.active = !0),
                        (t.right.active = !0);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {
                var t = this;
                e.prototype.start.call(this), (r.UIMgr.loopMap = this);
                var o = this.node.data;
                this.midMap.forEach(function (e) {
                    e.spriteFrame = o[0];
                }),
                    this.sideMap.forEach(function (e) {
                        e.spriteFrame = o[1];
                    }),
                    (this.node.zIndex = -1),
                    this.scheduleOnce(function () {
                        t.resetCheck();
                    }, 0.2);
            }),
            (t.prototype.checkPos = function () {
                var e = r.UIMgr.getRoleCamera(),
                    t = e.getComponent(cc.Camera).zoomRatio,
                    o = e.convertToWorldSpaceAR(cc.v2(-e.width / t / 2, -e.height / t / 2)),
                    n = e.convertToWorldSpaceAR(cc.v2(e.width / t / 2, e.height / t / 2)),
                    a = o.y,
                    i = n.y,
                    c = this.node.convertToWorldSpaceAR(cc.v2(0, -this.bg.height / 2)).y,
                    l = this.node.convertToWorldSpaceAR(cc.v2(0, this.bg.height / 2)).y,
                    p = !1;
                if ((c >= a ? ((p = !0), (this.bg.y -= 512)) : l <= i && ((p = !0), (this.bg.y += 512)), p)) {
                    var u = e.convertToWorldSpaceAR(cc.v2(-this.bg.width / 2, -this.bg.height / 2)),
                        d = e.convertToWorldSpaceAR(cc.v2(this.bg.width / 2, this.bg.height / 2));
                    s.default.instance().resetEnemy(u.x, d.x, u.y, d.y),
                        this.resetCheck(),
                        this.checkExpInMap(u.x, d.x, u.y, d.y);
                }
            }),
            i([u(cc.Node)], t.prototype, "bg", void 0),
            i([u(cc.Sprite)], t.prototype, "midMap", void 0),
            i([u(cc.Sprite)], t.prototype, "sideMap", void 0),
            i([u(cc.Node)], t.prototype, "left", void 0),
            i([u(cc.Node)], t.prototype, "right", void 0),
            i([p], t)
        );
    })(c.default);
o.default = d;
