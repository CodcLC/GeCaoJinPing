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
var r = e("PoolManager"),
    s = e("CommonUtil"),
    c = e("RoleData"),
    l = e("GameView"),
    p = e("FlyEnemy"),
    u = e("MonsterManager"),
    d = e("GameManager"),
    h = cc._decorator.ccclass,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.maxDuration = 8),
                (t.moveDir = null),
                (t.directionArr = []),
                (t.duration = 0),
                (t.speed = 5),
                (t.tag = 0),
                (t.monsterId = 0),
                (t.attackRate = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t) {
                (this.attackRate = t),
                    (this.tag = 0),
                    (this.monsterId = e),
                    (this.duration = 0),
                    (this.speed = 20),
                    this.initDirectionArr(),
                    this.initFly();
            }),
            (t.prototype.initFly = function () {
                var e = this;
                this.node.children.forEach(function (t) {
                    var o = t.getComponent(p.default);
                    o.setMoveDir(e.moveDir),
                        o.init(e.monsterId, e.tag),
                        u.default.instance().flyEnemyMap.set(e.tag, o),
                        o.setAttack(e.attackRate),
                        e.tag++;
                });
            }),
            (t.prototype.initDirectionArr = function () {
                if (0 === this.directionArr.length) {
                    var e = cc.v2(750, 1334).sub(cc.Vec2.ZERO).normalize();
                    this.directionArr.push(e, cc.v2(-e.x, -e.y));
                    var t = cc.v2(0, 1334).sub(cc.v2(750, 0)).normalize();
                    this.directionArr.push(t, cc.v2(-t.x, -t.y));
                }
                s.CommonUtil.getRangeCloseNum(1, 4), (this.moveDir = this.directionArr[2]);
                var o = c.roleData.getRole().getPos();
                this.node.setPosition(o.x + 562.5, o.y - 1000.5),
                    l.default.instance().flyEnemyLayer.addChild(this.node);
            }),
            (t.prototype.backToPool = function () {
                r.poolMgr.putNodeToPool(this.node);
            }),
            (t.prototype.update = function (e) {
                e > 0.5 ||
                    d.gameMgr.getIsPause() ||
                    (this.duration <= this.maxDuration ? (this.duration += e) : this.backToPool());
            }),
            i([h], t)
        );
    })(cc.Component);
o.default = g;
