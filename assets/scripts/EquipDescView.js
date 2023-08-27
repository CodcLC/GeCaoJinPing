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
    c = e("censtant"),
    l = e("ClientEvents"),
    p = e("ViewUrl"),
    u = e("GameComponent"),
    d = e("LangLabel"),
    h = e("audioManager"),
    g = e("EquipManager"),
    m = e("HeroData"),
    f = e("JsonManager"),
    y = e("PlayerData"),
    v = e("ResManager"),
    M = e("equipWorth"),
    _ = e("LanguageManager"),
    C = e("AnalyticsManager"),
    b = e("ReporterBridge"),
    T = e("GuideManager"),
    w = e("TaskTypeManager"),
    N = e("TaskManager"),
    E = e("WxManager"),
    S = cc._decorator,
    D = S.ccclass,
    A = S.property,
    k = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.equipBg = null),
                (t.equipIcon = null),
                (t.typeBg = null),
                (t.typeIcon = null),
                (t.gradeIcon = null),
                (t.gradeLabel = null),
                (t.levelLabel = null),
                (t.ssrNode = null),
                (t.attribute = null),
                (t.attributeLabel = null),
                (t.describeLabel = null),
                (t.titleLabel = null),
                (t.closeBtn = null),
                (t.wearBtn = null),
                (t.wearLabel = null),
                (t.upBtn = null),
                (t.upMaxBtn = null),
                (t.attributeSp = []),
                (t.gradeType = null),
                (t.upLevelItem = null),
                (t.worthNode = null),
                (t.levelUpNode = null),
                (t.recycleBtn = null),
                (t.titleBg = null),
                (t.qualityLayout = null),
                (t.qualityNode = null),
                (t._data = null),
                (t._index = null),
                (t.refreshDescView = function () {
                    var e = t.node.data;
                    (t._data = e.data),
                        (t._index = e.index),
                        t.describeLabel.getComponent(d.LangLabel).setText("{@" + t._data.equipment.getDescribe() + "}"),
                        t.titleLabel.getComponent(d.LangLabel).setText("{@" + t._data.equipment.getName() + "}"),
                        t.onSpriteInit(),
                        t.getUpLevelItem(),
                        t.setNumAddition(),
                        t.refreshDressLabel();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return p.ViewUrl.equipDescView;
            }),
            (t.prototype.onSpriteInit = function () {
                var e = this._data.equipment;
                v.ResManager.loadIcon(this.typeIcon, c.Equip.EQUIP_TYPE_ + e.getType());
                var t = g.equipMgr.getTypeIndex(e.getGrade());
                v.ResManager.loadIcon(this.equipBg, c.Equip.EQUIP_QUALITY_ + t);
                var o = g.equipMgr.getTypeBg(e.getGrade());
                v.ResManager.loadIcon(this.typeBg, c.Equip.EQUIP_PART_ + o),
                    v.ResManager.loadIcon(this.titleBg, c.Equip.EQUIP_PART_ + o);
                var n = g.equipMgr.getStepNode(e.getGrade());
                0 === n
                    ? (this.gradeIcon.node.active = !1)
                    : ((this.gradeIcon.node.active = !0),
                      v.ResManager.loadIcon(this.gradeIcon, c.Equip.EQUIP_GRADE_ + n));
                var a = g.equipMgr.getGradeNum(e.getGrade());
                v.ResManager.loadIcon(this.equipIcon, c.Weapon.TEXTURE_ + e.getEquipIcon()),
                    (this.gradeLabel.string = a),
                    this.levelLabel.getComponent(d.LangLabel).setText(e.getLevel() + "/" + e.getMaxLevel()),
                    this.gradeType
                        .getComponent(d.LangLabel)
                        .setText("{@Tips_Grade_" + g.equipMgr.getTypeBg(e.getGrade()) + "}"),
                    (this.levelUpNode.active = !(!g.equipMgr.checkLevelUp(this._data) || !this._data.dress)),
                    (this.recycleBtn.active = 1 != e.getLevel()),
                    (this.ssrNode.active = g.equipMgr.getIsSSR(this._data));
            }),
            (t.prototype.onEnable = function () {
                var e = this;
                this.onShowPlay(2, this.aniNode, function () {
                    y.playData.getNewUserStep() === T.GUIDE_STEP.EQUIP &&
                        r.UIMgr.showGuideWithNode(
                            e.upBtn,
                            function () {
                                e.isLevelUp(),
                                    l.ClientEvents.REFRESH_GUIDE_LAYER.emit({
                                        node: e.wearBtn,
                                        func: function () {
                                            e.dressOrUp(),
                                                y.playData.addGuideStep(),
                                                l.ClientEvents.REFRESH_GUIDE.emit();
                                        },
                                        isControl: !1,
                                        isClose: !0
                                    });
                            },
                            !1
                        );
                });
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), E.wxMgr.hideBanner();
            }),
            (t.prototype.start = function () {
                var e = this;
                E.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""}),
                    this.wearBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        y.playData.getNewUserStep() !== T.GUIDE_STEP.EQUIP && e.dressOrUp();
                    }),
                    this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        y.playData.getNewUserStep() !== T.GUIDE_STEP.EQUIP && e.closeView();
                    }),
                    this.upBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        y.playData.getNewUserStep() !== T.GUIDE_STEP.EQUIP && e.isLevelUp();
                    }),
                    this.upMaxBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        y.playData.getNewUserStep() !== T.GUIDE_STEP.EQUIP && e.getGoLevelMax();
                    }),
                    this.recycleBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        y.playData.getNewUserStep() !== T.GUIDE_STEP.EQUIP && e.decomposeEquip();
                    }),
                    this.refreshDescView(),
                    this.addEvent(l.ClientEvents.DESC_REFRESH.on(this.refreshDescView)),
                    this.addEvent(l.ClientEvents.CLOSE_EQUIP_POP.on(this.closeView)),
                    this.refreshQualityView();
            }),
            (t.prototype.dressOrUp = function () {
                h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH),
                    this._data.dress ? g.equipMgr.upLoad(this._data) : g.equipMgr.dressUp(this._data, this._index),
                    this.refreshDressLabel(),
                    l.ClientEvents.DRESS_CHANGE.emit(),
                    b.ReporterBridge.setUserProperty({WearEquip: g.equipMgr.getDressStrs()}),
                    b.ReporterBridge.setUserProperty({UserAtk: g.equipMgr.getDamage()}),
                    b.ReporterBridge.setUserProperty({UserHp: g.equipMgr.getHp()}),
                    b.ReporterBridge.setUserProperty({WearEquipNum: g.equipMgr.getDress().length}),
                    b.ReporterBridge.setUserProperty({WearEquipUpNum: g.equipMgr.getDressUpNums()}),
                    this.closeView();
            }),
            (t.prototype.setNumAddition = function () {
                var e = this._data.equipment.getNumAddition().split(",");
                1 == e[0]
                    ? (this.attribute.spriteFrame = this.attributeSp[0])
                    : (this.attribute.spriteFrame = this.attributeSp[1]),
                    (this.attributeLabel.string = "+ " + e[1]);
            }),
            (t.prototype.getUpLevelItem = function () {
                var e = this;
                this.upLevelItem.removeAllChildren(),
                    this._data.equipment
                        .getWorth()
                        .split(",")
                        .forEach(function (t) {
                            var o = t.split("|"),
                                n = cc.instantiate(e.worthNode);
                            1001 == o[0]
                                ? n.getComponent(M.default).init(c.Common.GOLD_ICON, y.playData.getGold(), o[1])
                                : o[0] > 1e4 &&
                                  n
                                      .getComponent(M.default)
                                      .init(c.Common.MAP_ICON_ + o[0], g.equipMgr.getMapNumById(o[0]), o[1]),
                                e.upLevelItem.addChild(n);
                        });
            }),
            (t.prototype.isLevelUp = function () {
                if (this.isLevelMax()) r.UIMgr.showView(p.ViewUrl.commonTip, null, _.langMgr.getStr("Tips_MaxLevel"));
                else {
                    h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH);
                    var e = this._data.equipment.getWorth().split(","),
                        t = [];
                    if (
                        (e.forEach(function (e) {
                            var o = e.split("|");
                            t.push(o);
                        }),
                        t[1][0] > 1e4)
                    ) {
                        if (g.equipMgr.getMapNumById(t[1][0]) >= t[1][1] && y.playData.getGold() >= t[0][1])
                            return (
                                w.TaskTypeMgr.equitLevelUpTimesTask(1),
                                N.TaskMgr.addActivityTaskPro(6, 1),
                                g.equipMgr.useMap(t[1][0], t[1][1]),
                                y.playData.useGold(t[0][1]),
                                C.analyMgr.reportUseGold(Number(t[0][1]), "LevelUp"),
                                C.analyMgr.reportUseItem("Blueprint", t[1][0], t[1][1], "LevelUp"),
                                this.itemToNextLevel(),
                                C.analyMgr.reportEquipUp(g.equipMgr.getDataById(this._data.equipment.getId()), t[1][1]),
                                void b.ReporterBridge.setUserProperty({WearEquipUpNum: g.equipMgr.getDressUpNums()})
                            );
                        if (y.playData.getGold() < t[0][1])
                            return void r.UIMgr.showView(p.ViewUrl.commonTip, null, _.langMgr.getStr("Tips_NoCoin"));
                        if (g.equipMgr.getMapNumById(t[1][0]) < t[1][1])
                            return void r.UIMgr.showView(
                                p.ViewUrl.commonTip,
                                null,
                                _.langMgr.getStr("Tips_NoBlueprint")
                            );
                    }
                }
            }),
            (t.prototype.itemToNextLevel = function () {
                var e = this._data.equipment.getId() + 1;
                this._data.equipment.init(e), (this._data.id = this._data.equipment.getId());
                var t = g.equipMgr.getAllEquips();
                this.checkDataInDress(),
                    this.refreshDescView(),
                    m.heroData.saveUnDress(t),
                    g.equipMgr.refreshData(),
                    l.ClientEvents.LIST_CHANGE.emit(),
                    l.ClientEvents.DRESS_CHANGE.emit();
            }),
            (t.prototype.refreshDressLabel = function () {
                this._data.dress
                    ? this.wearLabel.getComponent(d.LangLabel).setText("{@UI_Button_Remove}")
                    : this.wearLabel.getComponent(d.LangLabel).setText("{@UI_Button_Wear}");
            }),
            (t.prototype.isLevelMax = function () {
                return this._data.equipment.isLevelMax();
            }),
            (t.prototype.refreshBtn = function () {
                this._data.level === this._data.levelmax
                    ? ((this.upBtn.getComponent(cc.Button).interactable = !1),
                      (this.upMaxBtn.getComponent(cc.Button).interactable = !1))
                    : ((this.upBtn.getComponent(cc.Button).interactable = !0),
                      (this.upMaxBtn.getComponent(cc.Button).interactable = !0));
            }),
            (t.prototype.getGoLevelMax = function () {
                if (this.isLevelMax()) r.UIMgr.showView(p.ViewUrl.commonTip, null, _.langMgr.getStr("Tips_MaxLevel"));
                else {
                    var e = g.equipMgr.getGoLevelMax(this._data);
                    if (!(e.level <= 0)) {
                        h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH);
                        var t = this._data.equipment.getId() + e.level;
                        w.TaskTypeMgr.equitLevelUpTimesTask(e.level), N.TaskMgr.addActivityTaskPro(6, e.level);
                        var o = e.mapid,
                            n = e.goldNum,
                            a = e.mapNum;
                        this._data.equipment.init(t), (this._data.id = this._data.equipment.getId());
                        var i = g.equipMgr.getAllEquips();
                        this.checkDataInDress(),
                            g.equipMgr.useMap(o, a),
                            y.playData.useGold(n),
                            C.analyMgr.reportUseGold(Number(n), "LevelUp"),
                            C.analyMgr.reportUseItem("Blueprint", o, a, "LevelUp"),
                            C.analyMgr.reportEquipUp(g.equipMgr.getDataById(t), a),
                            this.refreshDescView(),
                            m.heroData.saveUnDress(i),
                            g.equipMgr.refreshData(),
                            b.ReporterBridge.setUserProperty({WearEquipUpNum: g.equipMgr.getDressUpNums()}),
                            l.ClientEvents.LIST_CHANGE.emit(),
                            l.ClientEvents.DRESS_CHANGE.emit();
                    }
                }
            }),
            (t.prototype.checkDataInDress = function () {
                if (this._data.dress) {
                    for (var e = g.equipMgr.getAllDressed(), t = 0; t < e.length; t++)
                        e[t] && e[t].equipment.getType() === this._data.equipment.getType() && (e[t] = this._data);
                    m.heroData.saveDress(e);
                }
            }),
            (t.prototype.decomposeEquip = function () {
                h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH);
                var e = g.equipMgr.cloneObj(this._data),
                    t = g.equipMgr.getDecompose(e);
                if (t) {
                    var o = t.decomposeId;
                    t.mapid,
                        t.mapNum,
                        t.goldNum,
                        r.UIMgr.showView(p.ViewUrl.equipDempose, null, {
                            index: this._index,
                            data: this._data,
                            recycleData: t,
                            originalId: o
                        }),
                        b.ReporterBridge.setUserProperty({WearEquipUpNum: g.equipMgr.getDressUpNums()});
                } else this.recycleBtn.active = !1;
            }),
            (t.prototype.refreshQualityView = function () {
                for (
                    var e = this._data.equipment.getQuality(), t = this._data.equipment.getQualityIndex(), o = 0;
                    o < e.length;
                    o++
                )
                    if (-1 != e[o]) {
                        var n = cc.instantiate(this.qualityNode);
                        this.qualityLayout.addChild(n),
                            (n.active = !0),
                            v.ResManager.loadIcon(
                                n.getChildByName("icon").getComponent(cc.Sprite),
                                t >= o ? c.Equip.EQUIP_UNLOCK_ + (o + 1) : c.Equip.EQUIP_LOCK_ + (o + 1)
                            );
                        var a = f.JsonMgr.getJsonById("weaponskill", e[o]),
                            i = a.descid,
                            r = _.langMgr.getStr(i),
                            s = r.split("$"),
                            l = a.numerical.split(";"),
                            p = "";
                        if (s.length <= 1) p = r;
                        else for (var u = 0; u < s.length; u++) s[u] && (p += s[u]), l[u] && (p += l[u]);
                        n.getComponent(d.LangLabel).setText(p);
                    }
            }),
            i([A(cc.Node)], t.prototype, "aniNode", void 0),
            i([A(cc.Sprite)], t.prototype, "equipBg", void 0),
            i([A(cc.Sprite)], t.prototype, "equipIcon", void 0),
            i([A(cc.Sprite)], t.prototype, "typeBg", void 0),
            i([A(cc.Sprite)], t.prototype, "typeIcon", void 0),
            i([A(cc.Sprite)], t.prototype, "gradeIcon", void 0),
            i([A(cc.Label)], t.prototype, "gradeLabel", void 0),
            i([A(cc.Label)], t.prototype, "levelLabel", void 0),
            i([A(cc.Node)], t.prototype, "ssrNode", void 0),
            i([A(cc.Sprite)], t.prototype, "attribute", void 0),
            i([A(cc.Label)], t.prototype, "attributeLabel", void 0),
            i([A(cc.Node)], t.prototype, "describeLabel", void 0),
            i([A(cc.Node)], t.prototype, "titleLabel", void 0),
            i([A(cc.Node)], t.prototype, "closeBtn", void 0),
            i([A(cc.Node)], t.prototype, "wearBtn", void 0),
            i([A(cc.Label)], t.prototype, "wearLabel", void 0),
            i([A(cc.Node)], t.prototype, "upBtn", void 0),
            i([A(cc.Node)], t.prototype, "upMaxBtn", void 0),
            i([A(cc.SpriteFrame)], t.prototype, "attributeSp", void 0),
            i([A(cc.Label)], t.prototype, "gradeType", void 0),
            i([A(cc.Node)], t.prototype, "upLevelItem", void 0),
            i([A(cc.Prefab)], t.prototype, "worthNode", void 0),
            i([A(cc.Node)], t.prototype, "levelUpNode", void 0),
            i([A(cc.Node)], t.prototype, "recycleBtn", void 0),
            i([A(cc.Sprite)], t.prototype, "titleBg", void 0),
            i([A(cc.Node)], t.prototype, "qualityLayout", void 0),
            i([A(cc.Node)], t.prototype, "qualityNode", void 0),
            i([D], t)
        );
    })(u.GameComponent);
o.default = k;
