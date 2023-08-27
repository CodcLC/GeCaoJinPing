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
    s = e("ClientEvents"),
    c = e("ViewUrl"),
    l = e("GameComponent"),
    p = e("List"),
    u = e("AnalyticsManager"),
    d = e("HeroManager"),
    h = e("JsonManager"),
    g = e("LanguageManager"),
    m = e("PlayerData"),
    f = e("ResManager"),
    y = e("heroAttributeItem"),
    v = e("heroWorth"),
    M = e("WxManager"),
    _ = cc._decorator,
    C = _.ccclass,
    b = _.property,
    T = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.closeBtn = null),
                (t.upBtn = null),
                (t.upLabel = null),
                (t.heroIcon = null),
                (t.heroName = null),
                (t.levelNode = null),
                (t.atkNode = null),
                (t.hpNode = null),
                (t.gradeUpNode = null),
                (t.levelLabel = []),
                (t.atkLabel = []),
                (t.hpLabel = []),
                (t.starLayout = []),
                (t.starSprite = []),
                (t.touchTab = null),
                (t.tabSprite = []),
                (t.viewName = null),
                (t.attributeList = null),
                (t.worthNode = null),
                (t.worthItem = null),
                (t.atkValue = null),
                (t.atkMax = null),
                (t.hpValue = null),
                (t.hpMax = null),
                (t.levelMax = null),
                (t.gradeMax = null),
                (t.upLevelRedDot = null),
                (t.upGradeRedDot = null),
                (t.data = null),
                (t.maxLevel = null),
                (t.tabIdx = 0),
                (t.levelSkill = []),
                (t.starSkill = []),
                (t.starSkillArr = []),
                (t.listChange = function () {
                    0 === t.starSkillArr.length &&
                        t.data.starskillid.split(",").forEach(function (e) {
                            "0" != e && t.starSkillArr.push(e);
                        }),
                        (t.attributeList.numItems = t.tabIdx
                            ? t.starSkillArr.length
                            : t.data.uplevel.split(",").length);
                }),
                (t.checkShowRedDot = function () {
                    (t.upLevelRedDot.active = d.heroMgr.checkHeroLevelUp(t.data.id)),
                        (t.upGradeRedDot.active = d.heroMgr.checkHeroGradeUp(t.data.id));
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.HeroPopView;
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), M.wxMgr.hideBanner();
            }),
            (t.prototype.start = function () {
                var e = this;
                M.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""}),
                    this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        e.closeView();
                    }),
                    this.upBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        e.tabIdx ? e.onStarUp() : e.onLevelUp();
                    }),
                    this.touchTab.children.forEach(function (t, o) {
                        t.on(cc.Node.EventType.TOUCH_END, function () {
                            e.tabTouch(o);
                        });
                    }),
                    this.addEvent(s.ClientEvents.SINGLE_HERO_UP.on(this.checkShowRedDot)),
                    (this.data = this.node.data),
                    (this.maxLevel = Number(this.data.uplevel.split(",").pop())),
                    this.tabTouch(0),
                    this.resolveSkill(),
                    this.loadHeadIcon(),
                    this.loadDescribe(),
                    this.checkShowRedDot();
            }),
            (t.prototype.loadHeadIcon = function () {
                f.ResManager.loadHeadIcon(this.data.itemicon, this.heroIcon),
                    (this.heroName.string = g.langMgr.getStr(this.data.name));
            }),
            (t.prototype.tabTouch = function (e) {
                var t = this;
                (this.tabIdx = e),
                    this.touchTab.children.forEach(function (o, n) {
                        n == e
                            ? ((o.getComponent(cc.Sprite).spriteFrame = t.tabSprite[0]),
                              (o.getChildByName("label").color = new cc.Color().fromHEX("#FFED40")))
                            : ((o.getComponent(cc.Sprite).spriteFrame = t.tabSprite[1]),
                              (o.getChildByName("label").color = new cc.Color().fromHEX("#949CB4")));
                    }),
                    this.loadDescribe();
            }),
            (t.prototype.loadDescribe = function () {
                var e = d.heroMgr.getHeroStorageInfo(this.data.id);
                (this.viewName.string = g.langMgr.getStr(this.tabIdx ? "Hero_Tips_5" : "Hero_Tips_4")),
                    e
                        ? this.tabIdx
                            ? this.showStarView(e)
                            : this.showLevelView(e)
                        : ((this.levelNode.active = !1), (this.atkNode.active = !1), (this.hpNode.active = !1)),
                    this.listChange();
            }),
            (t.prototype.showGrowthAttribute = function () {
                this.tabIdx
                    ? ((this.atkLabel[0].string = d.heroMgr
                          .getHeroStarAttribute(this.data.id)
                          .atk.toFixed(0)
                          .toString()),
                      (this.atkLabel[1].string = d.heroMgr
                          .getHeroStarAttribute(this.data.id, !0)
                          .atk.toFixed(0)
                          .toString()),
                      (this.hpLabel[0].string = d.heroMgr.getHeroStarAttribute(this.data.id).hp.toFixed(0).toString()),
                      (this.hpLabel[1].string = d.heroMgr
                          .getHeroStarAttribute(this.data.id, !0)
                          .hp.toFixed(0)
                          .toString()))
                    : ((this.atkLabel[0].string = d.heroMgr.getHeroAttribute(this.data.id).atk.toFixed(0).toString()),
                      (this.atkLabel[1].string = d.heroMgr
                          .getHeroAttribute(this.data.id, !0)
                          .atk.toFixed(0)
                          .toString()),
                      (this.hpLabel[0].string = d.heroMgr.getHeroAttribute(this.data.id).hp.toFixed(0).toString()),
                      (this.hpLabel[1].string = d.heroMgr.getHeroAttribute(this.data.id, !0).hp.toFixed(0).toString()));
            }),
            (t.prototype.showStarView = function (e) {
                var t = this;
                (this.gradeUpNode.active = !0),
                    (this.levelNode.active = !1),
                    (this.upLabel.string = g.langMgr.getStr("Hero_Tips_3"));
                var o = e.grade;
                if ((this.worthNode.removeAllChildren(), o < 5)) {
                    this.showGradeMax(!1),
                        this.showGrowthAttribute(),
                        this.starLayout[0].children.forEach(function (e, n) {
                            e.getComponent(cc.Sprite).spriteFrame = n < o ? t.starSprite[1] : t.starSprite[0];
                        }),
                        this.starLayout[1].children.forEach(function (e, n) {
                            var a = Number(o) + 1 >= 5 ? 5 : Number(o) + 1;
                            e.getComponent(cc.Sprite).spriteFrame = n < a ? t.starSprite[1] : t.starSprite[0];
                        });
                    var n = cc.instantiate(this.worthItem),
                        a = 0,
                        i = d.heroMgr.getHeroGrade(this.data.id),
                        r = this.data.costheropiece.split(",");
                    i >= 0 && r[i] && (a = Number(r[i])),
                        n
                            .getComponent(v.default)
                            .init(this.data.heropieceid, m.playData.getHeroDebris(this.data.heropieceid), a),
                        this.worthNode.addChild(n);
                } else
                    this.showGradeMax(!0),
                        (this.atkLabel[0].string = d.heroMgr.getHeroStarAttribute(this.data.id).atk.toString()),
                        (this.hpLabel[0].string = d.heroMgr.getHeroStarAttribute(this.data.id).hp.toString()),
                        (this.atkMax.getChildByName("value").getComponent(cc.Label).string = d.heroMgr
                            .getHeroStarAttribute(this.data.id)
                            .atk.toFixed(0)
                            .toString()),
                        (this.atkMax.getChildByName("max").getComponent(cc.Label).string =
                            g.langMgr.getStr("Hero_Max_Grade")),
                        (this.hpMax.getChildByName("value").getComponent(cc.Label).string = d.heroMgr
                            .getHeroStarAttribute(this.data.id)
                            .hp.toFixed(0)
                            .toString()),
                        (this.hpMax.getChildByName("max").getComponent(cc.Label).string =
                            g.langMgr.getStr("Hero_Max_Grade"));
            }),
            (t.prototype.showLevelView = function (e) {
                (this.gradeUpNode.active = !1),
                    (this.levelNode.active = !0),
                    (this.levelLabel[0].string = e.level),
                    (this.levelLabel[1].string = (
                        Number(e.level) + 1 > this.maxLevel ? this.maxLevel : Number(e.level) + 1
                    ).toString()),
                    this.worthNode.removeAllChildren();
                var t = d.heroMgr.getHeroLevel(this.data.id);
                if (((this.upLabel.string = g.langMgr.getStr("Hero_Tips_2")), t > 0 && t < this.maxLevel)) {
                    this.showLevelMax(!1), this.showGrowthAttribute();
                    var o,
                        n = h.JsonMgr.getHeroLossById(Number(t));
                    n.gold &&
                        ((o = cc.instantiate(this.worthItem))
                            .getComponent(v.default)
                            .init(1001, m.playData.getGold(), n.gold),
                        this.worthNode.addChild(o)),
                        n.heroexp &&
                            ((o = cc.instantiate(this.worthItem))
                                .getComponent(v.default)
                                .init(1017, m.playData.getHeroExperence(), n.heroexp),
                            this.worthNode.addChild(o));
                } else
                    t >= this.maxLevel &&
                        (this.showLevelMax(!0),
                        (cc.find("value/levelLabel", this.levelMax).getComponent(cc.Label).string = t > 100 ? 100 : t),
                        (this.atkMax.getChildByName("value").getComponent(cc.Label).string = d.heroMgr
                            .getHeroAttribute(this.data.id)
                            .atk.toFixed(0)
                            .toString()),
                        (this.atkMax.getChildByName("max").getComponent(cc.Label).string =
                            g.langMgr.getStr("Hero_Max_Level")),
                        (this.hpMax.getChildByName("value").getComponent(cc.Label).string = d.heroMgr
                            .getHeroAttribute(this.data.id)
                            .hp.toFixed(0)
                            .toString()),
                        (this.hpMax.getChildByName("max").getComponent(cc.Label).string =
                            g.langMgr.getStr("Hero_Max_Level")));
            }),
            (t.prototype.showLevelMax = function (e) {
                (this.upBtn.active = !e),
                    (this.levelMax.active = e),
                    (this.atkMax.active = e),
                    (this.hpMax.active = e),
                    (this.levelNode.active = !e),
                    (this.atkValue.active = !e),
                    (this.hpValue.active = !e),
                    (this.gradeMax.active = !1);
            }),
            (t.prototype.showGradeMax = function (e) {
                (this.upBtn.active = !e),
                    (this.gradeMax.active = e),
                    (this.gradeUpNode.active = !e),
                    (this.atkMax.active = e),
                    (this.hpMax.active = e),
                    (this.hpValue.active = !e),
                    (this.atkValue.active = !e),
                    (this.levelMax.active = !1);
            }),
            (t.prototype.renderList = function (e, t) {
                var o = [];
                this.data.starskillid.split(",").forEach(function (e) {
                    "0" != e && o.push(e);
                });
                var n = this.tabIdx ? o[t] : this.data.upskillid.split(",")[t],
                    a = {starSkill: this.starSkill, levelSkill: this.levelSkill, id: n, heroData: this.data};
                e.getComponent(y.default).init(t, a);
            }),
            (t.prototype.resolveSkill = function () {
                var e = this,
                    t = d.heroMgr.getHeroStorageInfo(this.data.id);
                if (t) {
                    var o = this.data.upskillid.split(",");
                    this.data.uplevel.split(",").forEach(function (n, a) {
                        "0" != n && t.level >= n && e.levelSkill.push(o[a]);
                    }),
                        this.data.starskillid.split(",").forEach(function (o, n) {
                            t.grade >= n && e.starSkill.push(o);
                        });
                }
            }),
            (t.prototype.onStarUp = function () {
                var e = this,
                    t = m.playData.getHeroDebris(Number(this.data.heropieceid)),
                    o = d.heroMgr.getHeroGrade(this.data.id);
                if (o >= 0) {
                    var n = this.data.costheropiece.split(",")[o];
                    t >= Number(n)
                        ? (m.playData.addHeroDebris(this.data.heropieceid, -Number(n)),
                          m.playData.addHeroGrade(this.data.id, 1),
                          u.analyMgr.reportUseItem("Hero", Number(this.data.heropieceid), Number(n), "HeroStarUp"),
                          u.analyMgr.reportHeroGradeUp(
                              this.data.heropieceid,
                              Number(n),
                              m.playData.getHeroDebris(this.data.heropieceid),
                              this.data.id,
                              o + 1
                          ),
                          this.resolveSkill(),
                          this.showStarView(d.heroMgr.getHeroStorageInfo(this.data.id)),
                          this.scheduleOnce(function () {
                              e.listChange();
                          }),
                          s.ClientEvents.REFRESH_HERO_LIST.emit(),
                          s.ClientEvents.SINGLE_HERO_UP.emit(),
                          s.ClientEvents.DRESS_CHANGE.emit(),
                          s.ClientEvents.HERO_TOUCH.emit(this.data))
                        : r.UIMgr.showTip(g.langMgr.getStr("Hero_NoMaterial"));
                }
            }),
            (t.prototype.onLevelUp = function () {
                var e = this,
                    t = d.heroMgr.getHeroLevel(this.data.id),
                    o = h.JsonMgr.getHeroLossById(t);
                o &&
                    (m.playData.getGold() >= Number(o.gold) && m.playData.getHeroExperence() >= Number(o.heroexp)
                        ? (m.playData.useGold(Number(o.gold)),
                          m.playData.addHeroExperience(-Number(o.heroexp)),
                          m.playData.addHeroLevel(this.data.id, 1),
                          u.analyMgr.reportUseGold(Number(o.gold), "HeroUP"),
                          u.analyMgr.reportUseItem("HeroExp", 1017, Number(Number(o.heroexp)), "HeroLevelUp"),
                          u.analyMgr.reportHeroLevelUp(Number(o.gold), Number(o.heroexp), this.data.id, t + 1),
                          this.resolveSkill(),
                          this.showLevelView(d.heroMgr.getHeroStorageInfo(this.data.id)),
                          this.scheduleOnce(function () {
                              e.listChange();
                          }),
                          s.ClientEvents.REFRESH_HERO_LIST.emit(),
                          s.ClientEvents.HERO_TOUCH.emit(this.data),
                          s.ClientEvents.SINGLE_HERO_UP.emit(),
                          s.ClientEvents.DRESS_CHANGE.emit())
                        : r.UIMgr.showTip(g.langMgr.getStr("Hero_NoMaterial")));
            }),
            i([b(cc.Node)], t.prototype, "closeBtn", void 0),
            i([b(cc.Node)], t.prototype, "upBtn", void 0),
            i([b(cc.Label)], t.prototype, "upLabel", void 0),
            i([b(cc.Sprite)], t.prototype, "heroIcon", void 0),
            i([b(cc.Label)], t.prototype, "heroName", void 0),
            i([b(cc.Node)], t.prototype, "levelNode", void 0),
            i([b(cc.Node)], t.prototype, "atkNode", void 0),
            i([b(cc.Node)], t.prototype, "hpNode", void 0),
            i([b(cc.Node)], t.prototype, "gradeUpNode", void 0),
            i([b([cc.Label])], t.prototype, "levelLabel", void 0),
            i([b([cc.Label])], t.prototype, "atkLabel", void 0),
            i([b([cc.Label])], t.prototype, "hpLabel", void 0),
            i([b(cc.Node)], t.prototype, "starLayout", void 0),
            i([b(cc.SpriteFrame)], t.prototype, "starSprite", void 0),
            i([b(cc.Node)], t.prototype, "touchTab", void 0),
            i([b(cc.SpriteFrame)], t.prototype, "tabSprite", void 0),
            i([b(cc.Label)], t.prototype, "viewName", void 0),
            i([b(p.default)], t.prototype, "attributeList", void 0),
            i([b(cc.Node)], t.prototype, "worthNode", void 0),
            i([b(cc.Prefab)], t.prototype, "worthItem", void 0),
            i([b(cc.Node)], t.prototype, "atkValue", void 0),
            i([b(cc.Node)], t.prototype, "atkMax", void 0),
            i([b(cc.Node)], t.prototype, "hpValue", void 0),
            i([b(cc.Node)], t.prototype, "hpMax", void 0),
            i([b(cc.Node)], t.prototype, "levelMax", void 0),
            i([b(cc.Node)], t.prototype, "gradeMax", void 0),
            i([b(cc.Node)], t.prototype, "upLevelRedDot", void 0),
            i([b(cc.Node)], t.prototype, "upGradeRedDot", void 0),
            i([C], t)
        );
    })(l.GameComponent);
o.default = T;
