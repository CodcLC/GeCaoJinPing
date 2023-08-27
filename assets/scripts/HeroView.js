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
    d = e("EquipManager"),
    h = e("HeroManager"),
    g = e("JsonManager"),
    m = e("LanguageManager"),
    f = e("PlayerData"),
    y = e("ResManager"),
    v = e("WxManager"),
    M = e("heroItem"),
    _ = cc._decorator,
    C = _.ccclass,
    b = _.property,
    T = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.heroSke = null),
                (t.heroName = null),
                (t.backBtn = null),
                (t.atkLabel = null),
                (t.hpLabel = null),
                (t.heroList = null),
                (t.debrisUnlockBtn = null),
                (t.debrisUnlockIcon = null),
                (t.debrisUnlockLabel = null),
                (t.debrisRedDot = null),
                (t.videoUnlockBtn = null),
                (t.videoRedDot = null),
                (t.videoUnlockLabel = null),
                (t.upBtn = null),
                (t.upBtnRedDot = null),
                (t.battleBtn = null),
                (t.heroJson = null),
                (t.listChange = function () {
                    t.heroList.numItems = h.heroMgr.getHeroDataArray().length;
                }),
                (t.hideTouchShain = function () {
                    t.heroList.content.children.forEach(function (e) {
                        e.getComponent(M.default).hideTouchShain();
                    });
                }),
                (t.changeView = function (e) {
                    (t.debrisUnlockBtn.active = !1),
                        (t.videoUnlockBtn.active = !1),
                        (t.upBtn.active = !1),
                        (t.battleBtn.active = !1),
                        e
                            ? ((t.heroJson = e),
                              h.heroMgr.getIsBattleHero(e.id)
                                  ? ((t.upBtn.active = !0), t.checkShowUpRedDot())
                                  : h.heroMgr.getIsUnlockHero(e.id)
                                  ? ((t.upBtn.active = !0), (t.battleBtn.active = !0), t.checkShowUpRedDot())
                                  : t.refreshUnlockLabel(e),
                              t.changeSpine(t.heroJson))
                            : ((t.heroJson = null), t.changeSpine(g.JsonMgr.getHeroJson(f.playData.getHeroId())));
                }),
                (t.checkShowUpRedDot = function () {
                    t.upBtnRedDot.active =
                        h.heroMgr.checkHeroLevelUp(t.heroJson.id) || h.heroMgr.checkHeroGradeUp(t.heroJson.id);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.HeroView;
            }),
            (t.prototype.start = function () {
                var e = this;
                h.heroMgr.resetTouchHero(),
                    this.addEvent(s.ClientEvents.HIDE_TOUCH_SHAIN.on(this.hideTouchShain)),
                    this.addEvent(s.ClientEvents.REFRESH_HERO_LIST.on(this.listChange)),
                    this.addEvent(s.ClientEvents.SINGLE_HERO_UP.on(this.checkShowUpRedDot)),
                    this.addEvent(
                        s.ClientEvents.HERO_TOUCH.on(function (t) {
                            e.changeView(t);
                        })
                    ),
                    this.backBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        e.closeView();
                    }),
                    this.debrisUnlockBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        e.useDebrisUnlock();
                    }),
                    this.videoUnlockBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        e.useVideoUnlock();
                    }),
                    this.battleBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        e.changeHero();
                    }),
                    this.upBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        e.onUpBtn();
                    }),
                    this.listChange(),
                    this.changeView(null);
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(M.default).init(t, h.heroMgr.getHeroDataArray()[t]);
            }),
            (t.prototype.refreshUnlockLabel = function (e) {
                var t = h.heroMgr.getHeroUnlockDebris(e);
                (this.debrisUnlockBtn.active = !1),
                    (this.videoUnlockBtn.active = !1),
                    "1" == t[0]
                        ? ((this.debrisUnlockBtn.active = !0),
                          y.ResManager.loadHeroChip(this.heroJson.heropieceid.toString(), this.debrisUnlockIcon),
                          (this.debrisUnlockLabel.string = h.heroMgr.getHeroOwnDebris(e) + " / " + t[1]),
                          (this.debrisRedDot.active = h.heroMgr.checkHeroCanUnlock(e.id)))
                        : "2" == t[0]
                        ? ((this.videoUnlockBtn.active = !0),
                          (this.videoUnlockLabel.string = h.heroMgr.getHeroOwnVideo(e) + " / " + t[1]),
                          (this.videoRedDot.active = h.heroMgr.checkHeroCanUnlock(e.id)))
                        : "3" == t[0] || t[0];
            }),
            (t.prototype.useDebrisUnlock = function () {
                if (this.heroJson) {
                    var e = h.heroMgr.getHeroUnlockDebris(this.heroJson);
                    f.playData.getHeroDebris(this.heroJson.heropieceid) >= Number(e[1])
                        ? (f.playData.addHeroDebris(this.heroJson.heropieceid, -Number(e[1])),
                          f.playData.addHero(this.heroJson.id),
                          u.analyMgr.reportUseItem(
                              "Hero",
                              Number(this.heroJson.heropieceid),
                              Number(e[1]),
                              "HeroUnlock"
                          ),
                          u.analyMgr.reportHeroUnlock(
                              Number(e[1]),
                              "Piece",
                              this.heroJson.heropieceid,
                              this.heroJson.id
                          ),
                          this.listChange(),
                          this.changeView(this.heroJson))
                        : r.UIMgr.showTip(m.langMgr.getStr("Hero_NoMaterial"));
                }
            }),
            (t.prototype.useVideoUnlock = function () {
                var e = this;
                if (this.heroJson) {
                    var t = h.heroMgr.getHeroUnlockDebris(this.heroJson);
                    h.heroMgr.getHeroOwnVideo(this.heroJson) < Number(t[1])
                        ? v.wxMgr.createVideo(
                              {placementName: "AdUnlockHero", openUi: "HeroView", level: f.playData.getLevel()},
                              function () {},
                              function () {
                                  f.playData.addHeroVideo(e.heroJson.heropieceid, 1), e.changeView(e.heroJson);
                              }
                          )
                        : (f.playData.addHeroVideo(this.heroJson.heropieceid, -Number(t[1])),
                          f.playData.addHero(this.heroJson.id),
                          this.listChange(),
                          this.changeView(this.heroJson));
                }
            }),
            (t.prototype.onUpBtn = function () {
                r.UIMgr.showView(c.ViewUrl.HeroPopView, null, this.heroJson);
            }),
            (t.prototype.changeHero = function () {
                this.heroJson &&
                    (f.playData.changeHero(this.heroJson.id),
                    this.changeView(this.heroJson),
                    this.listChange(),
                    s.ClientEvents.DATA_CHANGE.emit(),
                    s.ClientEvents.CHANGE_HERO.emit());
            }),
            (t.prototype.changeSpine = function (e) {
                var t = this;
                h.heroMgr.getIsUnlockHero(e.id)
                    ? h.heroMgr.getIsBattleHero(e.id)
                        ? ((this.atkLabel.string = h.heroMgr.getTotalAtk(e).toString()),
                          (this.hpLabel.string = h.heroMgr.getTotalHp(e).toString()))
                        : ((this.atkLabel.string = h.heroMgr.getHeroAttribute(e.id).atk.toFixed(0).toString()),
                          (this.hpLabel.string = h.heroMgr.getHeroAttribute(e.id).hp.toFixed(0).toString()))
                    : ((this.atkLabel.string = e.might.toString()), (this.hpLabel.string = e.maxhealth.toString())),
                    y.ResManager.loadDisplaySpine(this.heroSke, e.itemicon, function (e) {
                        (t.heroSke.skeletonData = e), t.initSkin(), t.heroSke.setAnimation(0, "standby", !0);
                    }),
                    (this.heroName.string = m.langMgr.getStr(e.name));
            }),
            (t.prototype.initSkin = function () {
                var e;
                switch (d.equipMgr.getEquipSkillIdInEquipLayer()) {
                    case 10001:
                        e = "hero_1";
                        break;
                    case 20001:
                        e = "hero_2";
                        break;
                    case 30001:
                        e = "hero_3";
                        break;
                    case 40001:
                        e = "hero_4";
                        break;
                    case 50001:
                        e = "hero_5";
                        break;
                    case 60001:
                        e = "hero_6";
                        break;
                    default:
                        e = "hero_0";
                }
                this.heroSke.setSkin(e);
            }),
            (t.prototype.showSpecifyShain = function () {
                var e = this;
                this.heroList.content.children.forEach(function (t) {
                    t &&
                        t.getComponent(M.default) &&
                        t.getComponent(M.default).getData().id == e.heroJson.id &&
                        t.getComponent(M.default).touchItem();
                });
            }),
            i([b(cc.Node)], t.prototype, "aniNode", void 0),
            i([b(sp.Skeleton)], t.prototype, "heroSke", void 0),
            i([b(cc.Label)], t.prototype, "heroName", void 0),
            i([b(cc.Node)], t.prototype, "backBtn", void 0),
            i([b(cc.Label)], t.prototype, "atkLabel", void 0),
            i([b(cc.Label)], t.prototype, "hpLabel", void 0),
            i([b(p.default)], t.prototype, "heroList", void 0),
            i([b(cc.Node)], t.prototype, "debrisUnlockBtn", void 0),
            i([b(cc.Sprite)], t.prototype, "debrisUnlockIcon", void 0),
            i([b(cc.Label)], t.prototype, "debrisUnlockLabel", void 0),
            i([b(cc.Node)], t.prototype, "debrisRedDot", void 0),
            i([b(cc.Node)], t.prototype, "videoUnlockBtn", void 0),
            i([b(cc.Node)], t.prototype, "videoRedDot", void 0),
            i([b(cc.Label)], t.prototype, "videoUnlockLabel", void 0),
            i([b(cc.Node)], t.prototype, "upBtn", void 0),
            i([b(cc.Node)], t.prototype, "upBtnRedDot", void 0),
            i([b(cc.Node)], t.prototype, "battleBtn", void 0),
            i([C], t)
        );
    })(l.GameComponent);
o.default = T;
