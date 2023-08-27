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
    c = e("ResManager"),
    l = e("UIManager"),
    p = e("LangLabel"),
    u = e("censtant"),
    d = e("JsonManager"),
    h = e("WxManager"),
    g = cc._decorator,
    m = g.ccclass,
    f = g.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.mask = null),
                (t.light = null),
                (t.box = null),
                (t.openBoxNode = null),
                (t.openBox = null),
                (t.openTop = null),
                (t.shikariNode = null),
                (t.drawIcon = null),
                (t.drawItem = null),
                (t.drawBg = null),
                (t.typeBg = null),
                (t.typeIcon = null),
                (t.ssrNode = null),
                (t.itemName = null),
                (t.level = null),
                (t.boxSp = null),
                (t.secondSprite = null),
                (t.normalFrame = null),
                (t.superFrame = null),
                (t.openNormal = null),
                (t.openSuper = null),
                (t.skipMask = null),
                (t.data = []),
                (t.isSuper = !1),
                (t.commonViewData = []),
                (t.closeHandle = function () {
                    t.closeView(), l.UIMgr.showView(s.ViewUrl.commonRewardView, null, t.commonViewData);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.drawRewardView;
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), h.wxMgr.hideBanner();
            }),
            (t.prototype.start = function () {
                var e = this;
                h.wxMgr.showBanner({openUi: s.ViewUrl.drawRewardView, placementName: ""}),
                    (this.data = this.node.data.data),
                    (this.isSuper = this.node.data.isSuper),
                    this.isSuper
                        ? ((this.secondSprite.spriteFrame = this.openSuper), (this.boxSp.spriteFrame = this.superFrame))
                        : ((this.boxSp.spriteFrame = this.normalFrame),
                          (this.secondSprite.spriteFrame = this.openNormal));
                var t = {},
                    o = 0;
                this.data.forEach(function (n) {
                    (o += n.goldNum),
                        t[n.mapId] ? (t[n.mapId] = t[n.mapId] + n.mapNum) : (t[n.mapId] = n.mapNum),
                        e.commonViewData.push({id: n.json.id, count: 1});
                }),
                    o && this.commonViewData.push({id: 1001, count: o}),
                    t &&
                        Object.keys(t).length &&
                        Object.keys(t).map(function (o) {
                            e.commonViewData.push({id: Number(o), count: t[o]});
                        }),
                    this.skipMask.on(cc.Node.EventType.TOUCH_END, function () {
                        e.closeHandle();
                    }),
                    this.mask.runAction(cc.fadeTo(0.32, 100)),
                    this.light.runAction(
                        cc.sequence(
                            cc.fadeTo(0.32, 255),
                            cc.callFunc(function () {
                                (e.box.scaleX = 0.9),
                                    (e.box.scaleY = 1.1),
                                    e.box.runAction(
                                        cc.sequence(
                                            cc.spawn(
                                                cc.moveTo(0.16, cc.v2(0, 0)).easing(cc.easeCubicActionIn()),
                                                cc.fadeIn(0.16),
                                                cc.scaleTo(0.16, 1.1, 0.9)
                                            ),
                                            cc.spawn(
                                                cc.moveTo(0.1, 0, 10).easing(cc.easeCubicActionOut()),
                                                cc.scaleTo(0.1, 1, 1).easing(cc.easeCubicActionOut())
                                            ),
                                            cc.delayTime(0.1),
                                            cc.spawn(cc.rotateBy(0.064, 10), cc.moveBy(0.064, 0, 10)),
                                            cc.spawn(cc.rotateBy(0.064, -10), cc.moveBy(0.064, 0, -10)),
                                            cc.spawn(cc.rotateBy(0.064, -10), cc.moveBy(0.064, 0, 10)),
                                            cc.spawn(cc.rotateBy(0.064, 10), cc.moveBy(0.064, 0, -10)),
                                            cc.spawn(cc.rotateBy(0.064, 10), cc.moveBy(0.064, 0, 10)),
                                            cc.spawn(cc.rotateBy(0.064, -10), cc.moveBy(0.064, 0, -10)),
                                            cc.spawn(cc.rotateBy(0.064, -10), cc.moveBy(0.064, 0, 10)),
                                            cc.spawn(cc.rotateBy(0.064, 10), cc.moveBy(0.064, 0, -10)),
                                            cc.callFunc(function () {
                                                (e.openBoxNode.active = !0), e.openBoxAni(), (e.box.active = !1);
                                            })
                                        )
                                    );
                            })
                        )
                    );
            }),
            (t.prototype.openBoxAni = function () {
                var e = this,
                    t = 0;
                (this.skipMask.active = !0),
                    this.skipMask.runAction(cc.fadeIn(0.4)),
                    this.openBoxNode.runAction(
                        cc.repeat(
                            cc.sequence(
                                cc.moveBy(0.1, 0, 15),
                                cc.callFunc(function () {
                                    e.drawItem.active = !0;
                                    var o = e.data[t],
                                        n = o.goldNum,
                                        a = cc.instantiate(e.drawItem);
                                    (a.active = !0), e.openBoxNode.addChild(a);
                                    var i = a.getChildByName("equip_icon").getComponent(cc.Sprite),
                                        r = a.getChildByName("equip").getComponent(cc.Sprite),
                                        s = a.getChildByName("itemName").getComponent(p.LangLabel),
                                        l = cc.find("equip/count", a).getComponent(cc.Label);
                                    (a.getChildByName("ssr").active = !1),
                                        c.ResManager.loadQualityBg(3, r),
                                        c.ResManager.loadIcon(i, u.Common.GOLD_ICON),
                                        (i.node.scale = 0.5),
                                        (l.string = "x" + n),
                                        s.setText("{@" + d.JsonMgr.getItemJsonById(1001).nameid + "}"),
                                        a.runAction(
                                            cc.sequence(
                                                cc.moveTo(0.2, cc.v2(-200, 440)),
                                                cc.callFunc(function () {
                                                    (i.node.scale = 1.2),
                                                        r.node.runAction(cc.fadeIn(0.1)),
                                                        s.node.runAction(cc.fadeIn(0.1));
                                                }),
                                                cc.delayTime(0.4)
                                            )
                                        );
                                    var h = o.mapId,
                                        g = o.mapNum,
                                        m = cc.instantiate(e.drawItem);
                                    (m.active = !0), e.openBoxNode.addChild(m);
                                    var f = m.getChildByName("equip_icon").getComponent(cc.Sprite),
                                        y = m.getChildByName("equip").getComponent(cc.Sprite),
                                        v = m.getChildByName("itemName").getComponent(p.LangLabel),
                                        M = cc.find("equip/count", m).getComponent(cc.Label);
                                    (m.getChildByName("ssr").active = !1),
                                        c.ResManager.loadQualityBg(1, y),
                                        c.ResManager.loadMapIcon(h, f),
                                        (f.node.scale = 0.5),
                                        (M.string = "x" + g),
                                        v.setText("{@" + d.JsonMgr.getItemJsonById(h).nameid + "}"),
                                        m.runAction(
                                            cc.sequence(
                                                cc.moveTo(0.2, cc.v2(0, 440)),
                                                cc.callFunc(function () {
                                                    (f.node.scale = 1.2),
                                                        y.node.runAction(cc.fadeIn(0.1)),
                                                        v.node.runAction(cc.fadeIn(0.1));
                                                }),
                                                cc.delayTime(0.4)
                                            )
                                        );
                                    var _ = o.json;
                                    c.ResManager.loadEquipIcon(_.icon, e.drawIcon),
                                        c.ResManager.loadQualityBg(_.grade, e.drawBg),
                                        c.ResManager.loadTypeBg(_.grade, e.typeBg),
                                        c.ResManager.loadTypeIcon(_.type, e.typeIcon),
                                        e.itemName.setText("{@" + _.nameid + "}"),
                                        (e.ssrNode.active = 1 == _.specialtype),
                                        (e.drawIcon.node.scale = 0.5),
                                        e.drawItem.runAction(
                                            cc.sequence(
                                                cc.moveTo(0.2, cc.v2(200, 440)),
                                                cc.callFunc(function () {
                                                    (e.drawIcon.node.scale = 1.2),
                                                        e.drawBg.node.runAction(cc.fadeIn(0.1)),
                                                        e.itemName.node.runAction(cc.fadeIn(0.1));
                                                }),
                                                cc.delayTime(0.4),
                                                cc.callFunc(function () {
                                                    ++t >= e.data.length ||
                                                        (a && a.isValid && a.removeFromParent(),
                                                        v && m.isValid && m.removeFromParent(),
                                                        e.drawItem.setPosition(0, 25),
                                                        (e.drawBg.node.opacity = 0),
                                                        (e.itemName.node.opacity = 0),
                                                        (e.drawItem.active = !1));
                                                })
                                            )
                                        );
                                }),
                                cc.moveBy(0.1, 0, -15),
                                cc.delayTime(0.6)
                            ),
                            this.data.length
                        )
                    ),
                    this.shikariNode.runAction(cc.repeatForever(cc.rotateBy(5, 360)));
            }),
            i([f(cc.Node)], t.prototype, "mask", void 0),
            i([f(cc.Node)], t.prototype, "light", void 0),
            i([f(cc.Node)], t.prototype, "box", void 0),
            i([f(cc.Node)], t.prototype, "openBoxNode", void 0),
            i([f(cc.Node)], t.prototype, "openBox", void 0),
            i([f(cc.Node)], t.prototype, "openTop", void 0),
            i([f(cc.Node)], t.prototype, "shikariNode", void 0),
            i([f(cc.Sprite)], t.prototype, "drawIcon", void 0),
            i([f(cc.Node)], t.prototype, "drawItem", void 0),
            i([f(cc.Sprite)], t.prototype, "drawBg", void 0),
            i([f(cc.Sprite)], t.prototype, "typeBg", void 0),
            i([f(cc.Sprite)], t.prototype, "typeIcon", void 0),
            i([f(cc.Node)], t.prototype, "ssrNode", void 0),
            i([f(p.LangLabel)], t.prototype, "itemName", void 0),
            i([f(cc.Label)], t.prototype, "level", void 0),
            i([f(cc.Sprite)], t.prototype, "boxSp", void 0),
            i([f(cc.Sprite)], t.prototype, "secondSprite", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "openNormal", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "openSuper", void 0),
            i([f(cc.Node)], t.prototype, "skipMask", void 0),
            i([m], t)
        );
    })(r.GameComponent);
o.default = y;
