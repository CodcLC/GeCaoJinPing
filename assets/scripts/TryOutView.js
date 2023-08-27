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
    c = e("LangLabel"),
    l = e("CommonUtil"),
    p = e("JsonManager"),
    u = e("RoleData"),
    d = e("PlayerData"),
    h = e("EquipManager"),
    g = e("ResManager"),
    m = e("censtant"),
    f = e("RoleWeaponManager"),
    y = e("TalentAddManager"),
    v = e("RarityManager"),
    M = e("GameManager"),
    _ = e("UIManager"),
    C = e("ChooseView"),
    b = e("AnalyticsManager"),
    T = e("WxManager"),
    w = cc._decorator,
    N = w.ccclass,
    E = w.property,
    S = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.weaponQuality = null),
                (t.qualityName = null),
                (t.itemName = null),
                (t.icon = null),
                (t.hero = null),
                (t.attackAdd = null),
                (t.cancelNode = null),
                (t.sureNode = null),
                (t.downDesc = null),
                (t.heroData = null),
                (t.equip = null),
                (t.tryData = null),
                (t.resultType = 0),
                (t.addValue = 0),
                (t.closeHandle = function () {
                    t.closeView(),
                        d.playData.isShowFreeSkill() && d.playData.getGameState() !== m.GameSatet.Activity
                            ? _.UIMgr.showView(s.ViewUrl.FreeSkill, null, null, function () {})
                            : y.talentAddMgr.canChooseSkillInOpen
                            ? t.showSkillView()
                            : M.gameMgr.setIsPause(!1);
                }),
                (t.sureClickHandle = function () {
                    T.wxMgr.createVideo(
                        {openUi: t.getUrl(), placementName: "AdWuqiHero", level: d.playData.getLevel()},
                        function () {},
                        function () {
                            t.closeHandle(),
                                1 === t.resultType
                                    ? (u.roleData.getRole().resetWeapon(t.addValue, t.getQuipId(t.equip.id)),
                                      b.analyMgr.reportTrial_Play("WuQi", Number(t.tryData.itemid), t.addValue))
                                    : (u.roleData.getRole().resetSpine(t.heroData, t.addValue),
                                      b.analyMgr.reportTrial_Play("Hero", Number(t.tryData.itemid), t.addValue));
                        }
                    );
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
                this.initData(), this.bindEvent();
            }),
            (t.prototype.bindEvent = function () {
                this.cancelNode.on(cc.Node.EventType.TOUCH_END, this.closeHandle),
                    this.sureNode.on(cc.Node.EventType.TOUCH_END, this.sureClickHandle);
            }),
            (t.prototype.initData = function () {
                var e = p.JsonMgr.getTryOutJson(),
                    t = l.CommonUtil.getRangeCloseNum(1, 10),
                    o = [];
                if (t > 5) {
                    (this.weaponQuality.node.active = !1), (this.icon.node.active = !1);
                    var n = d.playData.getHeroId();
                    (this.resultType = 2), (o = e.get(2));
                    for (var a = 0; a < o.length; a++)
                        if (Number(o[a].itemid) === n) {
                            o.splice(a, 1);
                            break;
                        }
                } else {
                    (this.hero.node.active = !1), (this.resultType = 1), (o = e.get(1));
                    var i = h.equipMgr.getEquipedWeapon(),
                        r = i ? i.id : 110001;
                    for (a = 0; a < o.length; a++)
                        if (Math.floor(Number(o[a].itemid) / 1e5) === Math.floor(r / 1e5)) {
                            o.splice(a, 1);
                            break;
                        }
                }
                var s = [];
                o.forEach(function (e) {
                    s.push(e.weight);
                });
                var c = o[l.CommonUtil.getWeightRandom(s)];
                (this.tryData = c),
                    t > 5
                        ? ((this.heroData = p.JsonMgr.getHeroJson(Number(c.itemid))), this.initHero())
                        : ((this.equip = p.JsonMgr.getWeaponById(Number(c.itemid))), this.initEquip());
            }),
            (t.prototype.initHero = function () {
                var e = this;
                this.itemName.setText("{@" + this.heroData.name + "}"),
                    (this.addValue = Math.floor(
                        (u.roleData.getRole().getAttack() * Number(p.JsonMgr.getDefineConstantByName("PlayHeroAtk"))) /
                            100
                    )),
                    (this.attackAdd.string = "+" + this.addValue),
                    g.ResManager.loadEntitiesSpine(this.hero, this.heroData.itemicon, function (t) {
                        (e.hero.skeletonData = t),
                            e.hero.setSkin(e.getSpineByWeapon()),
                            e.hero.setAnimation(0, "standby", !0),
                            (e.hero.timeScale = 0.7);
                    }),
                    this.downDesc.setText("{@UI_Desc_TryHero}");
            }),
            (t.prototype.getSpineByWeapon = function () {
                var e = u.roleData.getRole().getEquips().get(f.EquipType.kn);
                return e.id >= 60001
                    ? "hero_6"
                    : e.id >= 50001
                    ? "hero_5"
                    : e.id >= 40001
                    ? "hero_4"
                    : e.id >= 30001
                    ? "hero_3"
                    : e.id >= 20001
                    ? "hero_2"
                    : e.id >= 10001
                    ? "hero_1"
                    : void 0;
            }),
            (t.prototype.initEquip = function () {
                g.ResManager.loadIcon(this.weaponQuality, m.Equip.EQUIP_PART_ + h.equipMgr.getTypeBg(this.equip.grade)),
                    g.ResManager.loadIcon(this.icon, m.Weapon.TEXTURE_ + this.equip.icon),
                    this.itemName.setText("{@" + this.equip.nameid + "}"),
                    this.qualityName.setText("{@Tips_Grade_" + h.equipMgr.getTypeBg(this.equip.grade) + "}"),
                    (this.addValue = Math.floor(
                        (u.roleData.getRole().getAttack() * Number(p.JsonMgr.getDefineConstantByName("PlayWuqiAtk"))) /
                            100
                    )),
                    (this.attackAdd.string = "+" + this.addValue),
                    this.downDesc.setText("{@UI_Desc_TryWeapon}");
            }),
            (t.prototype.getQuipId = function (e) {
                return e >= 110001 && e <= 2e5
                    ? 10001
                    : e >= 210001 && e <= 299990
                    ? 20001
                    : e >= 310001 && e <= 399990
                    ? 30001
                    : e >= 410001 && e <= 499990
                    ? 40001
                    : e >= 510001 && e <= 599990
                    ? 50001
                    : e >= 610001 && e <= 699990
                    ? 60001
                    : void 0;
            }),
            (t.prototype.showSkillView = function () {
                var e = v.rarityMgr.generateRarity();
                0 !== e.length
                    ? (M.gameMgr.setIsPause(!0),
                      _.UIMgr.showView(s.ViewUrl.chooseView, null, e, function (e) {
                          e.getComponent(C.default).setIsFirst();
                      }))
                    : M.gameMgr.setIsPause(!1);
            }),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.TryOutView;
            }),
            i([E(cc.Node)], t.prototype, "aniNode", void 0),
            i([E(cc.Sprite)], t.prototype, "weaponQuality", void 0),
            i([E(c.LangLabel)], t.prototype, "qualityName", void 0),
            i([E(c.LangLabel)], t.prototype, "itemName", void 0),
            i([E(cc.Sprite)], t.prototype, "icon", void 0),
            i([E(sp.Skeleton)], t.prototype, "hero", void 0),
            i([E(cc.Label)], t.prototype, "attackAdd", void 0),
            i([E(cc.Node)], t.prototype, "cancelNode", void 0),
            i([E(cc.Node)], t.prototype, "sureNode", void 0),
            i([E(c.LangLabel)], t.prototype, "downDesc", void 0),
            i([N], t)
        );
    })(r.GameComponent);
o.default = S;
