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
    s = e("audioConst"),
    c = e("ClientEvents"),
    l = e("ViewUrl"),
    p = e("GameComponent"),
    u = e("LangLabel"),
    d = e("List"),
    h = e("audioManager"),
    g = e("EquipManager"),
    m = e("HeroData"),
    f = e("HeroManager"),
    y = e("JsonManager"),
    v = e("PlayerData"),
    M = e("RedDotManager"),
    _ = e("ResManager"),
    C = e("GuideManager"),
    b = e("equipItem"),
    T = cc._decorator,
    w = T.ccclass,
    N = T.property,
    E = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.dressNodeArr = []),
                (t.atkLabel = null),
                (t.hpLabel = null),
                (t.sortBtn = null),
                (t.compoundBtn = null),
                (t.heroBtn = null),
                (t.heroRedDot = null),
                (t.compoundRedPoint = null),
                (t.equipList = null),
                (t.weaponItem = null),
                (t.sortLabel = null),
                (t.hero = null),
                (t.oneKeyNode = null),
                (t.autoLevel = null),
                (t.autoDress = null),
                (t.redDotAutoLevel = null),
                (t.redDotAutoDress = null),
                (t._weaponNode = [null, null, null, null, null, null]),
                (t._sortType = ["UI_Button_Sort_2", "UI_Button_Sort_1", "UI_Button_Sort_3"]),
                (t._sortIndex = 0),
                (t.refreshDisplay = function () {
                    var e = g.equipMgr.getDress();
                    t.dressNodeArr.forEach(function (e) {
                        var t = e.getChildByName("equipItem");
                        t && t.isValid && t.removeFromParent();
                    }),
                        e.forEach(function (e) {
                            if (e) {
                                var o = e.equipment.getIndex(),
                                    n = t.dressNodeArr[o].getChildByName("equipItem");
                                if (n && n.isValid);
                                else if (e.dress) {
                                    var a = cc.instantiate(t.weaponItem);
                                    a.getComponent(b.default).init(e),
                                        t.dressNodeArr[o].addChild(a),
                                        (t._weaponNode[o] = a);
                                }
                            }
                        });
                    for (var o = g.equipMgr.getAllEquips(), n = o.length - 1; n >= 0; n--) o[n].dress && o.splice(n, 1);
                    m.heroData.saveUnDress(o),
                        g.equipMgr.refreshData(),
                        t.listChange(),
                        (t.atkLabel.string = g.equipMgr.getDamage()),
                        (t.hpLabel.string = g.equipMgr.getHp()),
                        t._refreshOneKeyRedDot();
                }),
                (t.listChange = function () {
                    (t.equipList.numItems = g.equipMgr.getEquipLen()), t.initSkin();
                }),
                (t.compoundChange = function () {
                    t.compoundRedPoint.active = m.heroData.getCanCompound();
                }),
                (t.changeHero = function () {
                    var e = y.JsonMgr.getHeroJson(v.playData.getHeroId());
                    _.ResManager.loadDisplaySpine(t.hero, e.itemicon, function (e) {
                        (t.hero.skeletonData = e), t.initSkin(), t.hero.setAnimation(0, "standby", !0);
                    });
                }),
                (t.checkEquipHeroRedDot = function () {
                    t.heroRedDot.active =
                        M.RDMgr.checkHeroLevelUp() || M.RDMgr.checkHeroGradeUp() || f.heroMgr.checkHeroLock();
                }),
                (t._refreshOneKeyRedDot = function () {
                    (t.redDotAutoLevel.active = M.RDMgr.checkEquipUpLevel()),
                        (t.redDotAutoDress.active = M.RDMgr.checkEuipAutoDress());
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return l.ViewUrl.equipLayer;
            }),
            (t.prototype.onEnable = function () {
                var e = this;
                (this.compoundRedPoint.active = !1),
                    (this.atkLabel.string = g.equipMgr.getDamage()),
                    (this.hpLabel.string = g.equipMgr.getHp()),
                    (this.equipList.numItems = g.equipMgr.getEquipLen()),
                    this.addEvent(c.ClientEvents.DRESS_CHANGE.on(this.refreshDisplay)),
                    this.addEvent(c.ClientEvents.LIST_CHANGE.on(this.listChange)),
                    this.addEvent(c.ClientEvents.CompoundChange.on(this.compoundChange)),
                    this.addEvent(c.ClientEvents.CHANGE_HERO.on(this.changeHero)),
                    this.addEvent(c.ClientEvents.EQUIP_HERO_UP.on(this.checkEquipHeroRedDot)),
                    this.heroBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e.showHeroView();
                    }),
                    this.sortLabel.getComponent(u.LangLabel).setText("{@" + this._sortType[this._sortIndex] + "}"),
                    this.sortBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e.sortList();
                    }),
                    this.compoundBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e.showCompoundView();
                    }),
                    this.changeHero(),
                    this.listChange(),
                    this.refreshDisplay(),
                    (this.compoundRedPoint.active = m.heroData.getCanCompound()),
                    v.playData.getCompleteLevel() < Number(y.JsonMgr.getDefineConstantByName("HeroUnlockLevel"))
                        ? (this.heroBtn.active = !1)
                        : ((this.heroBtn.active = !0), this.checkEquipHeroRedDot());
            }),
            (t.prototype.start = function () {
                v.playData.getFailGuideStep() === C.FAIL_GUIDE.EQUIP && this.checkEquipFailGuide();
            }),
            (t.prototype.checkEquipFailGuide = function () {
                var e = this;
                M.RDMgr.checkEuipAutoDress()
                    ? (this.oneKeyNode.getComponent(cc.Widget).updateAlignment(),
                      r.UIMgr.showGuideWithNode(this.autoDress, function () {
                          e.onClickAutoDress();
                      }))
                    : M.RDMgr.checkEquipUpLevel()
                    ? (this.oneKeyNode.getComponent(cc.Widget).updateAlignment(),
                      r.UIMgr.showGuideWithNode(this.autoLevel, function () {
                          v.playData.setFailGuideStep(C.FAIL_GUIDE.OVER), e.onClickAutoLevel();
                      }))
                    : v.playData.setFailGuideStep(C.FAIL_GUIDE.OVER);
            }),
            (t.prototype.checkDressFailGuide = function () {
                var e = this;
                M.RDMgr.checkEquipUpLevel()
                    ? r.UIMgr.showGuideWithNode(this.autoLevel, function () {
                          v.playData.addFailGuideStep(), e.onClickAutoLevel();
                      })
                    : v.playData.setFailGuideStep(C.FAIL_GUIDE.OVER);
            }),
            (t.prototype.sortList = function () {
                this._sortIndex++,
                    3 === this._sortIndex && (this._sortIndex = 0),
                    this.sortLabel.getComponent(u.LangLabel).setText("{@" + this._sortType[this._sortIndex] + "}"),
                    g.equipMgr.setSortIndex(this._sortIndex),
                    c.ClientEvents.LIST_CHANGE.emit();
            }),
            (t.prototype.showCompoundView = function () {
                c.ClientEvents.CHANGE_LOADING.emit(!0),
                    r.UIMgr.showView(l.ViewUrl.equipCompound, null, null, function () {
                        c.ClientEvents.CHANGE_LOADING.emit(!1);
                    });
            }),
            (t.prototype.showHeroView = function () {
                c.ClientEvents.CHANGE_LOADING.emit(!0),
                    r.UIMgr.showView(l.ViewUrl.HeroView, null, null, function () {
                        c.ClientEvents.CHANGE_LOADING.emit(!1);
                    });
            }),
            (t.prototype.initSkin = function () {
                var e;
                switch (g.equipMgr.getEquipSkillIdInEquipLayer()) {
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
                this.hero.setSkin(e);
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(b.default).init(t, !0);
            }),
            (t.prototype.onClickAutoLevel = function () {
                h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), m.HeroData.instance().autoLevelUpAll();
            }),
            (t.prototype.onClickAutoDress = function () {
                h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH),
                    m.HeroData.instance().autoDressAll(),
                    v.playData.getFailGuideStep() === C.FAIL_GUIDE.EQUIP && this.checkDressFailGuide();
            }),
            i([N(cc.Node)], t.prototype, "dressNodeArr", void 0),
            i([N(cc.Label)], t.prototype, "atkLabel", void 0),
            i([N(cc.Label)], t.prototype, "hpLabel", void 0),
            i([N(cc.Node)], t.prototype, "sortBtn", void 0),
            i([N(cc.Node)], t.prototype, "compoundBtn", void 0),
            i([N(cc.Node)], t.prototype, "heroBtn", void 0),
            i([N(cc.Node)], t.prototype, "heroRedDot", void 0),
            i([N(cc.Node)], t.prototype, "compoundRedPoint", void 0),
            i([N(d.default)], t.prototype, "equipList", void 0),
            i([N(cc.Prefab)], t.prototype, "weaponItem", void 0),
            i([N(cc.Node)], t.prototype, "sortLabel", void 0),
            i([N(sp.Skeleton)], t.prototype, "hero", void 0),
            i([N(cc.Node)], t.prototype, "oneKeyNode", void 0),
            i([N(cc.Node)], t.prototype, "autoLevel", void 0),
            i([N(cc.Node)], t.prototype, "autoDress", void 0),
            i([N(cc.Node)], t.prototype, "redDotAutoLevel", void 0),
            i([N(cc.Node)], t.prototype, "redDotAutoDress", void 0),
            i([w], t)
        );
    })(p.GameComponent);
o.default = E;
