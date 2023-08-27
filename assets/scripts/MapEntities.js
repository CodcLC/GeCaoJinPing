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
var r = e("ExpEntities"),
    s = e("RoleData"),
    c = e("ClientEvents"),
    l = e("WxManager"),
    p = e("JsonManager"),
    u = e("event-kit"),
    d = cc._decorator,
    h = d.ccclass,
    g =
        (d.property,
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.tag = 0),
                    (t.expArr = new Map()),
                    (t.getAllMap = new Map()),
                    (t.expLayer = null),
                    (t.hasShowAd = !1),
                    (t.dispose = new u.CompositeDisposable()),
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
                    var e = this;
                    this.dispose.add(
                        c.ClientEvents.RESET_AD.on(function () {
                            e.hasShowAd = !1;
                        })
                    );
                }),
                (t.prototype.addExp = function (e) {
                    this.expLayer.addChild(e), this.tag++;
                    var t = e.getComponent(r.default);
                    t.init(this.tag), this.expArr.set(this.tag, t), this.showAd();
                }),
                (t.prototype.checkPos = function () {}),
                (t.prototype.checkCanShowAd = function () {
                    return (
                        this.expArr.size > Number(p.JsonMgr.getDefineConstantByName("MagnetExpNum")) &&
                        !this.hasShowAd &&
                        l.wxMgr.checkTimeIsOver()
                    );
                }),
                (t.prototype.showAd = function () {
                    this.checkCanShowAd() && ((this.hasShowAd = !0), c.ClientEvents.SHOW_MAGNET.emit());
                }),
                (t.prototype.checkExp = function () {
                    this.expArr.forEach(function (e) {
                        var t = s.roleData.getRole().getWorldPosition(),
                            o = e.getWorldPos();
                        Math.abs(o.sub(t).mag()) <= s.roleData.getRole().getRoleMagnet() && e.startMove();
                    });
                }),
                (t.prototype.getAllExp = function () {
                    var e = this;
                    this.expArr.forEach(function (t, o) {
                        t.getIsExp() && (e.getAllMap.set(o, t), e.expArr.delete(o));
                    });
                }),
                (t.prototype.deleteFromLayer = function (e) {
                    this.expArr.delete(e);
                }),
                (t.prototype.deleteFromAll = function (e) {
                    this.getAllMap.delete(e);
                }),
                (t.prototype.checkExpInMap = function (e, t, o, n) {
                    this.expArr.forEach(function (a) {
                        var i = a.getWorldPos();
                        i.x <= e
                            ? (a.node.active = !1)
                            : i.x >= t
                            ? (a.node.active = !1)
                            : i.y <= o
                            ? (a.node.active = !1)
                            : i.y >= n
                            ? (a.node.active = !1)
                            : (a.node.active = !0);
                    });
                }),
                (t.prototype.update = function () {
                    this.checkExp(),
                        this.getAllMap.size > 0 &&
                            this.getAllMap.forEach(function (e) {
                                e.startMove(500);
                            });
                }),
                (t.prototype.onDestroy = function () {
                    this.dispose.dispose();
                }),
                (t._instance = null),
                (o = i([h], t))
            );
        })(cc.Component));
o.default = g;
