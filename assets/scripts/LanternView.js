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
Object.defineProperty(o, "__esModule", {value: !0}), (o.LanternView = void 0);
var r = e("GameComponent"),
    s = e("ViewUrl"),
    c = e("RarityManager"),
    l = e("ResManager"),
    p = e("RoleData"),
    u = e("CommonUtil"),
    d = e("LangLabel"),
    h = e("JsonManager"),
    g = e("GameManager"),
    m = cc.callFunc,
    f = e("audioManager"),
    y = e("audioConst"),
    v = e("LevelManager"),
    M = e("WxManager"),
    _ = cc._decorator,
    C = _.ccclass,
    b = _.property,
    T = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.skillFrame = null),
                (t.equipFrame = null),
                (t.blinkNode = null),
                (t.blinkStar = null),
                (t.blinkCircle = null),
                (t.goldLabel = null),
                (t.continueNode = null),
                (t.adNode = null),
                (t.lanternNode = null),
                (t.itemNode = null),
                (t.luckyNode = null),
                (t.rollItemVIew = null),
                (t.rollMask = null),
                (t.itemArr = []),
                (t.rollContinueNode = null),
                (t.unStar = null),
                (t.maskNode = null),
                (t.skipNode = null),
                (t.rarityData = null),
                (t.weightArr = null),
                (t.hasTypeArr = null),
                (t.colorArr = [new cc.Color(255, 23, 60), new cc.Color(254, 239, 0)]),
                (t.count = 0),
                (t.nowComplete = 0),
                (t.hasResult = new Set()),
                (t.resultNodeArr = []),
                (t.nowValue = 0),
                (t.lanternAniStart = !1),
                (t.seeAd = function () {
                    t.lanternAniStart ||
                        (f.audioMgr.startEffect(y.AudioConst.COMMON_TOUCH),
                        (t.lanternAniStart = !0),
                        M.wxMgr.createVideo(
                            {openUi: "LanternView", placementName: "AdLuckNum", level: v.levelMgr.getLevelJson().id},
                            function () {
                                t.lanternAniStart = !1;
                            },
                            function () {
                                (t.count = 3),
                                    (t.lanternAniStart = !1),
                                    t.continueClickHandle(),
                                    (t.lanternAniStart = !0);
                            }
                        ));
                }),
                (t.continueClickHandle = function () {
                    if (!t.lanternAniStart) {
                        f.audioMgr.startEffect(y.AudioConst.COMMON_TOUCH),
                            (t.lanternAniStart = !0),
                            t.scheduleOnce(function () {
                                (t.skipNode.active = !0), t.skipNode.runAction(cc.fadeIn(0.2));
                            }, 0.4),
                            (t.maskNode.active = !0);
                        var e = 200 * t.count;
                        (t.goldLabel.string = t.nowValue.toString()),
                            t.adNode.active &&
                                t.adNode.runAction(
                                    cc.sequence(
                                        cc.scaleTo(0.3, 0),
                                        cc.callFunc(function () {
                                            t.adNode.active = !1;
                                        })
                                    )
                                ),
                            t.continueNode.runAction(
                                cc.sequence(
                                    cc.scaleTo(0.3, 0),
                                    cc.callFunc(function () {
                                        t.continueNode.active = !1;
                                    })
                                )
                            ),
                            t.schedule(
                                function () {
                                    g.gameMgr.addGold(20),
                                        (t.nowValue += 20),
                                        (t.goldLabel.string = t.nowValue.toString());
                                },
                                0.05,
                                e / 20
                            ),
                            t.count > 1
                                ? (t.playThreeAni(), f.audioMgr.startEffect(y.AudioConst.LAOHUJI_GUNDONG))
                                : t.playOneAni();
                    }
                }),
                (t.playOneAni = function (e) {
                    void 0 === e && (e = 0);
                    var o = t.rollSkill();
                    if (o)
                        for (
                            var n = 12 + o - e + 37,
                                a = 0,
                                i = t.itemNode.children,
                                r = 0,
                                s = 0,
                                c = function (o) {
                                    var c,
                                        l = i[(o + e) % 12];
                                    (c = o >= n - 17 ? 0.05 * o + (a += 0.005) * ++r : 0.05 * o),
                                        t.scheduleOnce(function () {
                                            var a = s % 8;
                                            f.audioMgr.startEffect("LaoHuJiSlot0" + (0 === a ? 1 : a)), s++;
                                            var i = l.getChildByName("guangquan"),
                                                r = l.getChildByName("star");
                                            (r.active = !0),
                                                (i.active = !0),
                                                (i.opacity = 255),
                                                i.runAction(
                                                    cc.sequence(
                                                        cc.fadeOut(0.32),
                                                        cc.callFunc(function () {
                                                            o !== n - 1 && (i.active = !1);
                                                        })
                                                    )
                                                ),
                                                r.setPosition(
                                                    cc.v2(
                                                        u.CommonUtil.getRangeCloseNum(-32, 32),
                                                        u.CommonUtil.getRangeCloseNum(-32, 32)
                                                    )
                                                ),
                                                (r.scale = 0),
                                                r.runAction(
                                                    cc.sequence(
                                                        cc.scaleTo(0.2, 1, 1),
                                                        cc.scaleTo(0.2, 0, 0),
                                                        cc.callFunc(function () {
                                                            r.active = !1;
                                                        })
                                                    )
                                                ),
                                                o === n - 1 &&
                                                    ((l.getComponent(cc.Sprite).spriteFrame =
                                                        1 === t.rarityData[(o + e) % 12].type
                                                            ? t.equipFrame
                                                            : t.skillFrame),
                                                    l.runAction(
                                                        cc.sequence(
                                                            cc.callFunc(function () {
                                                                f.audioMgr.startEffect(y.AudioConst.LAOHUJI_CHOUZHONG);
                                                            }),
                                                            cc.scaleTo(0.15, 1.2, 1.25).easing(cc.easeSineOut()),
                                                            cc.scaleTo(0.15, 1, 1).easing(cc.easeSineOut())
                                                        )
                                                    ),
                                                    (t.blinkNode.active = !0),
                                                    (t.blinkCircle.position = t.blinkStar.position = l.position),
                                                    (t.blinkCircle.scale = t.blinkStar.scale = 1),
                                                    (t.blinkCircle.opacity = t.blinkStar.opacity = 80),
                                                    t.blinkStar.runAction(
                                                        cc.spawn(
                                                            cc.sequence(
                                                                cc.fadeIn(0.1),
                                                                cc.delayTime(0.05),
                                                                cc.fadeOut(0.2)
                                                            ),
                                                            cc.scaleTo(0.3, 0, 0)
                                                        )
                                                    ),
                                                    t.blinkCircle.runAction(
                                                        cc.sequence(
                                                            cc.delayTime(0.08),
                                                            cc.spawn(
                                                                cc.sequence(
                                                                    cc.fadeIn(0.1),
                                                                    cc.delayTime(0.05),
                                                                    cc.fadeOut(0.2)
                                                                ),
                                                                cc.scaleTo(0.3, 0, 0)
                                                            ),
                                                            cc.callFunc(function () {
                                                                (t.blinkNode.active = !1),
                                                                    (t.blinkCircle.scale = t.blinkStar.scale = 1),
                                                                    (t.blinkCircle.opacity = t.blinkStar.opacity = 80),
                                                                    t.nowComplete++,
                                                                    3 === t.count && t.nowComplete < t.count
                                                                        ? t.playOneAni((o + e) % 12)
                                                                        : t.showRollItemView();
                                                            })
                                                        )
                                                    ));
                                        }, c);
                                },
                                l = 0;
                            l < n;
                            l++
                        )
                            c(l);
                    else t.skipClickHandle();
                }),
                (t.rollContinueClickHandle = function () {
                    f.audioMgr.startEffect(y.AudioConst.COMMON_TOUCH),
                        f.audioMgr.stopBgm(),
                        g.gameMgr.setIsPause(!1),
                        t.closeView();
                }),
                (t.skipClickHandle = function () {
                    f.audioMgr.startEffect(y.AudioConst.COMMON_TOUCH),
                        t.unscheduleAllCallbacks(),
                        (t.skipNode.active = !1),
                        f.audioMgr.stopEffect(),
                        f.audioMgr.initMusic(),
                        t.lanternAniStart && t.lanternAni(),
                        t.itemNode.children.forEach(function (e, t) {
                            for (var o = 12 + 2 * t, n = 0; n < o; n++) {
                                var a = e.getChildByName("guangquan");
                                (a.active = !1), (a.opacity = 255), a.stopAllActions();
                            }
                        });
                    for (var e = t.count - t.resultNodeArr.length, o = 0; o < e; o++) t.rollSkill();
                    t.resultNodeArr.forEach(function (e, o) {
                        (e.node.getComponent(cc.Sprite).spriteFrame = 1 === e.data.type ? t.equipFrame : t.skillFrame),
                            e.node.runAction(
                                cc.sequence(
                                    cc.scaleTo(0.15, 1.2, 1.25).easing(cc.easeSineOut()),
                                    cc.scaleTo(0.15, 1, 1).easing(cc.easeSineOut()),
                                    m(function () {
                                        o === t.resultNodeArr.length - 1 &&
                                            (t.showRollItemView(), (t.skipNode.active = !1));
                                    })
                                )
                            );
                    });
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onEnable = function () {
                this.onShowPlay(1, this.aniNode);
            }),
            (t.prototype.start = function () {
                this.count = this.node.data;
                var e = c.rarityMgr.generateLanternViewData();
                if (
                    ((this.rarityData = e.result),
                    (this.weightArr = e.weightArr),
                    this.weightArr[0] && this.rarityData[0])
                ) {
                    (this.hasTypeArr = e.hasTypeArr),
                        this.init(),
                        this.continueNode.on(cc.Node.EventType.TOUCH_END, this.continueClickHandle),
                        this.skipNode.on(cc.Node.EventType.TOUCH_END, this.skipClickHandle),
                        this.rollContinueNode.on(cc.Node.EventType.TOUCH_END, this.rollContinueClickHandle),
                        (this.goldLabel.string = this.nowValue.toString()),
                        this.adNode.on(cc.Node.EventType.TOUCH_END, this.seeAd);
                    var t = this.checkThree();
                    (this.count = 1),
                        (this.adNode.active = t),
                        f.audioMgr.stopBgm(),
                        f.audioMgr.initMusic(),
                        f.audioMgr.startBgm(y.AudioConst.LAOHUJI_BG),
                        3 === this.count && (this.adNode.active = !1);
                } else this.rollContinueClickHandle();
            }),
            (t.prototype.checkThree = function () {
                var e = 0,
                    t = new Set(),
                    o = p.roleData.getRole(),
                    n = o.getEquips(),
                    a = o.getSkillArr();
                return (
                    this.rarityData.forEach(function (o) {
                        var i;
                        if (!t.has(o.skillid))
                            if ((t.add(o.skillid), 1 === o.type)) {
                                i = h.JsonMgr.getEquipById(o.skillid);
                                var r = h.JsonMgr.getEquipById(i.link),
                                    s = h.JsonMgr.getSkillById(i.link);
                                r && ((n.get(r.type) && n.get(r.type).id === r.id) || (s && a.get(s.type)))
                                    ? (e += 6 - n.get(i.type).level)
                                    : (e += 5 - n.get(i.type).level);
                            } else (i = h.JsonMgr.getSkillById(o.skillid)), (e += i.maxlevel - a.get(i.type).level);
                    }),
                    e >= 3
                );
            }),
            (t.prototype.init = function () {
                this.initItemNode(), this.initLanternNode();
            }),
            (t.prototype.initItemNode = function () {
                var e = this,
                    t = p.roleData.getRole(),
                    o = t.getEquips(),
                    n = t.getSkillArr();
                this.itemNode.children.forEach(function (t, a) {
                    var i = t.getChildByName("icon").getComponent(cc.Sprite);
                    if (1 === e.rarityData[a].type) {
                        var r = o.get(e.hasTypeArr[a]);
                        if (5 === r.level) {
                            var s = r.itemicon + "_max";
                            l.ResManager.loadIcon(i, l.ResManager.EquipIcon + s);
                        } else l.ResManager.loadIcon(i, l.ResManager.EquipIcon + r.itemicon);
                    } else {
                        var c = n.get(e.hasTypeArr[a]);
                        l.ResManager.loadIcon(i, l.ResManager.EquipIcon + c.itemicon);
                    }
                });
            }),
            (t.prototype.initLanternNode = function () {
                var e = this;
                this.lanternNode.children.forEach(function (t, o) {
                    t.children[0].color = t.color = e.colorArr[o % 2];
                });
            }),
            (t.prototype.checkResultCan = function (e) {
                var t = this.rarityData[e],
                    o = 0,
                    n = !0,
                    a = p.roleData.getRole().getSkillArr();
                if (1 === t.type) {
                    var i = p.roleData.getRole().getEquips(),
                        r = h.JsonMgr.getEquipById(t.skillid),
                        s = i.get(r.type);
                    this.resultNodeArr.forEach(function (e) {
                        if (e.data.skillid === t.skillid) {
                            o++, (n = !(s.level + o >= 6) && n);
                            var r = h.JsonMgr.getEquipById(s.link),
                                c = h.JsonMgr.getSkillById(s.link);
                            s.level + o !== 5 ||
                                (c && (a.get(c.type) || (r && i.get(r.type) && i.get(r.type).id === r.id))) ||
                                (n = !1);
                        }
                    });
                } else {
                    r = h.JsonMgr.getSkillById(t.skillid);
                    var c = a.get(r.type);
                    this.resultNodeArr.forEach(function (e) {
                        e.data.skillid === t.skillid && (o++, (n = !(c.level + o >= c.maxlevel) && n));
                    });
                }
                return n;
            }),
            (t.prototype.rollSkill = function () {
                if (this.resultNodeArr.length >= 3) return null;
                for (var e = u.CommonUtil.getWeightRandom(this.weightArr), t = !1; this.hasResult.has(e) || !t; )
                    (e = u.CommonUtil.getWeightRandom(this.weightArr)), (t = this.checkResultCan(e));
                return (
                    this.hasResult.add(e),
                    this.resultNodeArr.push({node: this.itemNode.children[e], data: this.rarityData[e]}),
                    e
                );
            }),
            (t.prototype.playThreeAni = function () {
                var e = this,
                    t = this.itemNode.children,
                    o = [0, 4, 8];
                [t[0], t[5], t[10]].forEach(function (n, a) {
                    for (
                        var i = 12 + 2 * a,
                            r = function (n) {
                                e.scheduleOnce(function () {
                                    var r = t[(n + o[a]) % 12].getChildByName("guangquan");
                                    (r.active = !0),
                                        (r.opacity = 255),
                                        r.runAction(
                                            cc.sequence(
                                                cc.delayTime(0.05),
                                                cc.callFunc(function () {
                                                    (r.active = !1),
                                                        0 === a && n === i - 1
                                                            ? e.playOneAni()
                                                            : 2 === a && n === i - 1 && e.lanternAni();
                                                })
                                            )
                                        );
                                }, 0.1 * n);
                            },
                            s = 0;
                        s < i;
                        s++
                    )
                        r(s);
                });
            }),
            (t.prototype.lanternAni = function () {
                var e = this;
                (this.lanternNode.active = !0),
                    this.lanternNode.children.forEach(function (t, o) {
                        t.runAction(
                            cc.repeatForever(
                                cc.sequence(
                                    cc.callFunc(function () {
                                        t.children[0].runAction(cc.fadeOut(4 / 15));
                                    }),
                                    cc.delayTime(8 / 15),
                                    cc.callFunc(function () {
                                        (t.children[0].color = t.color = e.colorArr[o % 2 == 0 ? 1 : 0]),
                                            (t.children[0].opacity = 255),
                                            t.children[0].runAction(cc.fadeOut(4 / 15));
                                    }),
                                    cc.delayTime(11 / 30),
                                    cc.callFunc(function () {
                                        o % 2 != 0 &&
                                            ((t.children[0].color = t.color = e.colorArr[1]),
                                            (t.children[0].opacity = 255));
                                    }),
                                    cc.delayTime(0.132),
                                    cc.callFunc(function () {
                                        (t.children[0].color = t.color = e.colorArr[o % 2]),
                                            (t.children[0].opacity = 255);
                                    })
                                )
                            )
                        );
                    });
            }),
            (t.prototype.showRollItemView = function () {
                var e = this;
                (this.rollItemVIew.active = !0),
                    this.initItems(),
                    this.rollMask.runAction(
                        cc.sequence(
                            cc.fadeTo(0.5, 180),
                            cc.callFunc(function () {
                                e.resultNodeArr.forEach(function (t, o) {
                                    var n = e.itemArr[o];
                                    (n.active = !0),
                                        e.scheduleOnce(function () {
                                            var a = cc.instantiate(t.node);
                                            (a.parent = n),
                                                a.runAction(
                                                    cc.sequence(
                                                        cc.moveTo(0.3, cc.v2(0, 0)).easing(cc.easeSineInOut()),
                                                        cc.scaleTo(0.1, 1.1, 1.1).easing(cc.easeSineOut()),
                                                        cc.callFunc(function () {
                                                            (a.opacity = 0),
                                                                n.getChildByName("parent").runAction(
                                                                    cc.sequence(
                                                                        cc.scaleTo(0.2, 1, 1).easing(cc.easeBackOut()),
                                                                        cc.callFunc(function () {
                                                                            o === e.resultNodeArr.length - 1 &&
                                                                                e.rollContinueNode.runAction(
                                                                                    cc
                                                                                        .scaleTo(0.2, 1, 1)
                                                                                        .easing(cc.easeBackOut())
                                                                                );
                                                                        })
                                                                    )
                                                                );
                                                        })
                                                    )
                                                );
                                        }, 0.8 * o);
                                });
                            })
                        )
                    );
            }),
            (t.prototype.initItems = function () {
                var e = this,
                    t = p.roleData.getRole(),
                    o = t.getEquips(),
                    n = t.getSkillArr();
                this.resultNodeArr.forEach(function (a, i) {
                    var r,
                        s = e.itemArr[i].getChildByName("parent"),
                        c = s.getChildByName("bg"),
                        p = c.getChildByName("icon").getComponent(cc.Sprite);
                    if (1 === a.data.type) {
                        var u = h.JsonMgr.getEquipById(a.data.skillid);
                        if (((r = o.get(u.type)), 6 === (r = h.JsonMgr.getEquipById(r.id + 1)).level)) {
                            var g = r.itemicon + "_max";
                            l.ResManager.loadIcon(p, l.ResManager.EquipIcon + g),
                                c.getChildByName("starLayout").children.forEach(function (e) {
                                    e.active = !1;
                                }),
                                (c.getChildByName("superStar").active = !0);
                        } else
                            l.ResManager.loadIcon(p, l.ResManager.EquipIcon + r.itemicon),
                                c.getChildByName("starLayout").children.forEach(function (t, o) {
                                    o + 1 > r.level && (t.getComponent(cc.Sprite).spriteFrame = e.unStar);
                                });
                        t.upLevel(r);
                    } else {
                        (u = h.JsonMgr.getSkillById(a.data.skillid)), (r = n.get(u.type));
                        var m = h.JsonMgr.getSkillById(r.id + 1);
                        l.ResManager.loadIcon(p, l.ResManager.EquipIcon + r.itemicon),
                            t.upSkillLevel(m),
                            c.getChildByName("starLayout").children.forEach(function (t, o) {
                                o + 1 > m.level &&
                                    ((t.getComponent(cc.Sprite).spriteFrame = e.unStar),
                                    o + 1 > m.maxlevel && (t.active = !1));
                            });
                    }
                    c
                        .getChildByName("desc")
                        .getComponent(d.LangLabel)
                        .setText("{@" + r.desc + "}"),
                        s
                            .getChildByName("itemName")
                            .getComponent(d.LangLabel)
                            .setText("{@" + r.name + "}");
                });
            }),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.lanternView;
            }),
            i([b(cc.Node)], t.prototype, "aniNode", void 0),
            i([b(cc.SpriteFrame)], t.prototype, "skillFrame", void 0),
            i([b(cc.SpriteFrame)], t.prototype, "equipFrame", void 0),
            i([b(cc.Node)], t.prototype, "blinkNode", void 0),
            i([b(cc.Node)], t.prototype, "blinkStar", void 0),
            i([b(cc.Node)], t.prototype, "blinkCircle", void 0),
            i([b(cc.Label)], t.prototype, "goldLabel", void 0),
            i([b(cc.Node)], t.prototype, "continueNode", void 0),
            i([b(cc.Node)], t.prototype, "adNode", void 0),
            i([b(cc.Node)], t.prototype, "lanternNode", void 0),
            i([b(cc.Node)], t.prototype, "itemNode", void 0),
            i([b(cc.Node)], t.prototype, "luckyNode", void 0),
            i([b(cc.Node)], t.prototype, "rollItemVIew", void 0),
            i([b(cc.Node)], t.prototype, "rollMask", void 0),
            i([b(cc.Node)], t.prototype, "itemArr", void 0),
            i([b(cc.Node)], t.prototype, "rollContinueNode", void 0),
            i([b(cc.SpriteFrame)], t.prototype, "unStar", void 0),
            i([b(cc.Node)], t.prototype, "maskNode", void 0),
            i([b(cc.Node)], t.prototype, "skipNode", void 0),
            i([C], t)
        );
    })(r.GameComponent);
o.LanternView = T;
