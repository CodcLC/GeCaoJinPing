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
var r = e("GameComponent"),
    s = e("ViewUrl"),
    c = e("PlayerData"),
    l = e("EquipManager"),
    p = e("ClientEvents"),
    u = e("GameManager"),
    d = e("GuideManager"),
    h = cc._decorator,
    g = h.ccclass,
    m = h.property,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.controlNode = null),
                (t.buttonNode = null),
                (t.skipNode = null),
                (t.shikari = null),
                (t.finger = null),
                (t.shikariAni = []),
                (t.funcCb = null),
                (t.isClose = !0),
                (t.addNode = null),
                (t.refreshGuideLayer = function (e) {
                    (t.node.data = e), t.addNode && (t.addNode.removeFromParent(), t.addNode.destroy()), t.init();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {
                var e = this;
                this.bindEvent(),
                    this.addEvent(p.ClientEvents.REFRESH_GUIDE_LAYER.on(this.refreshGuideLayer)),
                    this.addEvent(
                        p.ClientEvents.CLOSE_GUIDE_LAYER.on(function () {
                            e.closeView(), u.gameMgr.setIsPause(!1);
                        })
                    ),
                    this.init();
            }),
            (t.prototype.bindEvent = function () {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_START, function () {
                    e.controlNode.active && (e.closeView(), u.gameMgr.setIsPause(!1));
                }),
                    this.shikari.on(cc.Node.EventType.TOUCH_END, function () {
                        e.isClose && e.closeView(), e.funcCb && e.funcCb();
                    }),
                    this.skipNode.on(cc.Node.EventType.TOUCH_END, function () {
                        c.playData.getNewUserStep() == d.GUIDE_STEP.TALENT && p.ClientEvents.CLOSE_TALENTPOP.emit(),
                            c.playData.getNewUserStep() == d.GUIDE_STEP.EQUIP && p.ClientEvents.CLOSE_EQUIP_POP.emit(),
                            c.playData.getNewUserStep() === d.GUIDE_STEP.SHOP &&
                                (l.equipMgr.addEquip(d.default.guideWeaponId),
                                c.playData.addGold(3e3),
                                l.equipMgr.addMap(10001, 10)),
                            c.playData.getFailGuideStep() === d.FAIL_GUIDE.SHOP &&
                                (c.playData.getSuperKey() >= 1 && c.playData.addSuperKey(-1),
                                l.equipMgr.addEquip(d.default.failWeaponId),
                                c.playData.addGold(1e4),
                                l.equipMgr.addMap(10005, 100),
                                p.ClientEvents.REFRESH_SHOP_COST.emit()),
                            c.playData.getFailGuideStep() === d.FAIL_GUIDE.EQUIP &&
                                (console.log(c.playData.getFailGuideStep()), p.ClientEvents.DOWN_BTN_CHANGE.emit(1)),
                            c.playData.getNewUserStep() === d.GUIDE_STEP.OVER
                                ? (c.playData.addFailGuideStep(), p.ClientEvents.REFRESH_FAIL_GUIDE.emit())
                                : (c.playData.addGuideStep(), p.ClientEvents.REFRESH_GUIDE.emit()),
                            p.ClientEvents.SKIP_GUIDE.emit(),
                            e.closeView();
                    });
            }),
            (t.prototype.init = function () {
                var e = this;
                this.node.getComponent(cc.Widget).updateAlignment(),
                    this.node.getChildByName("aniNode").getComponent(cc.Widget).updateAlignment();
                var t = this.node.data;
                if (t.isControl)
                    (this.controlNode.active = !0),
                        (this.buttonNode.active = !1),
                        (this.node.getComponent(cc.BlockInputEvents).enabled = !1),
                        (this.node.zIndex = -1);
                else {
                    (this.funcCb = t.func), (this.isClose = t.isClose);
                    var o = cc.instantiate(t.node);
                    (this.addNode = o),
                        this.buttonNode.addChild(o),
                        o.setPosition(cc.Vec2.ZERO),
                        (o.group = "guideLayer"),
                        (o.zIndex = -1),
                        this.shikari.setContentSize(o.getContentSize());
                    var n = t.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        a = this.buttonNode.parent;
                    this.buttonNode.setPosition(a.convertToNodeSpaceAR(n)),
                        0 === o.anchorX
                            ? ((this.buttonNode.x += o.width / 2), (o.x -= o.width / 2))
                            : 1 === o.anchorX && ((this.buttonNode.x -= o.width / 2), (o.x += o.width / 2)),
                        0 === o.anchorY && ((this.buttonNode.y += o.height / 2), (o.y -= o.height / 2)),
                        (this.controlNode.active = !1),
                        (this.buttonNode.active = !0),
                        this.finger.play("guideAni"),
                        this.schedule(function () {
                            e.shikariAni.forEach(function (t, o) {
                                e.scheduleOnce(function () {
                                    t.play("guideShikari");
                                }, (1 / 6) * (o + 1));
                            });
                        }, 1);
                }
            }),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.GuideLayer;
            }),
            i([m(cc.Node)], t.prototype, "controlNode", void 0),
            i([m(cc.Node)], t.prototype, "buttonNode", void 0),
            i([m(cc.Node)], t.prototype, "skipNode", void 0),
            i([m(cc.Node)], t.prototype, "shikari", void 0),
            i([m(cc.Animation)], t.prototype, "finger", void 0),
            i([m(cc.Animation)], t.prototype, "shikariAni", void 0),
            i([g], t)
        );
    })(r.GameComponent);
o.default = f;
