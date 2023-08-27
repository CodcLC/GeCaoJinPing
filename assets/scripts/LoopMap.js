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
            return (t.bg = null), (t.checkArea = null), t;
        }
        return (
            a(t, e),
            (t.prototype.start = function () {
                e.prototype.start.call(this), (r.UIMgr.loopMap = this);
                var t = this.node.data;
                (this.bg.getComponent(cc.Sprite).spriteFrame = t[0]), (this.node.zIndex = -1);
            }),
            (t.prototype.checkPos = function () {
                var e = r.UIMgr.getRoleCamera(),
                    t = e.getComponent(cc.Camera).zoomRatio,
                    o = e.convertToWorldSpaceAR(cc.v2(-e.width / t / 2, -e.height / t / 2)),
                    n = e.convertToWorldSpaceAR(cc.v2(e.width / t / 2, e.height / t / 2)),
                    a = o.x,
                    i = n.x,
                    c = o.y,
                    l = n.y,
                    p = this.node.convertToWorldSpaceAR(cc.v2(-this.bg.width / 2, 0)).x,
                    u = this.node.convertToWorldSpaceAR(cc.v2(this.bg.width / 2, 0)).x,
                    d = this.node.convertToWorldSpaceAR(cc.v2(0, -this.bg.height / 2)).y,
                    h = this.node.convertToWorldSpaceAR(cc.v2(0, this.bg.height / 2)).y,
                    g = this.checkArea.convertToWorldSpaceAR(
                        cc.v2(-this.checkArea.width / t / 2, -this.checkArea.height / t / 2)
                    ),
                    m = this.checkArea.convertToWorldSpaceAR(
                        cc.v2(this.checkArea.width / t / 2, this.checkArea.height / t / 2)
                    ),
                    f = !1;
                if (
                    (p >= a
                        ? (this.bg.x -= 1600)
                        : u <= i
                        ? (this.bg.x += 1600)
                        : d >= c
                        ? (this.bg.y -= 1600)
                        : h <= l && (this.bg.y += 1600),
                    g.x >= a ? (f = !0) : m.x <= i ? (f = !0) : g.y >= c ? (f = !0) : m.y <= l && (f = !0),
                    f)
                ) {
                    this.checkArea.setPosition(this.node.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.Vec2.ZERO)));
                    var y = this.checkArea.convertToWorldSpaceAR(
                            cc.v2(-this.checkArea.width / t / 2, -this.checkArea.height / t / 2)
                        ),
                        v = this.checkArea.convertToWorldSpaceAR(
                            cc.v2(this.checkArea.width / t / 2, this.checkArea.height / t / 2)
                        );
                    s.default.instance().resetEnemy(y.x, v.x, y.y, v.y), this.checkExpInMap(y.x, v.x, y.y, v.y);
                }
            }),
            i([u(cc.Node)], t.prototype, "bg", void 0),
            i([u(cc.Node)], t.prototype, "checkArea", void 0),
            i([p], t)
        );
    })(c.default);
o.default = d;
