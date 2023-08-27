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
    f = e("JsonManager"),
    y = e("LanguageManager"),
    v = e("equipItem"),
    M = e("AnalyticsManager"),
    _ = e("PlayerData"),
    C = e("TaskTypeManager"),
    b = cc._decorator,
    T = b.ccclass,
    w = b.property,
    N = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.upNode = null),
                (t.nextNode = null),
                (t.sacrificeNode = []),
                (t.describeLayout = null),
                (t.sacrificeShain = null),
                (t.defaultShain = null),
                (t.equipList = null),
                (t.sortLabel = null),
                (t.sortBtn = null),
                (t.backBtn = null),
                (t.compoundBtn = null),
                (t.onKeyCompound = null),
                (t.weaponItem = null),
                (t.shainNode = null),
                (t.blinkMaskNode = null),
                (t.sacrificeContent = []),
                (t._sortType = ["UI_Button_Sort_2", "UI_Button_Sort_1", "UI_Button_Sort_3"]),
                (t._sortIndex = 0),
                (t.blinkTween = !1),
                (t.listChange = function () {
                    t.equipList.numItems = g.equipMgr.getCompound().length;
                }),
                (t.compoundChange = function (e) {
                    if (
                        (t.upNode.removeAllChildren(),
                        t.sacrificeNode.forEach(function (e) {
                            e.removeAllChildren();
                        }),
                        t.nextNode.removeAllChildren(),
                        (t.shainNode.active = !0),
                        !e)
                    )
                        return g.equipMgr.removeAllGradeItem(), t.listChange(), void (t.compoundBtn.active = !1);
                    t.shainNode.children.forEach(function (e) {
                        e.active = !1;
                    });
                    var o = e._upItem;
                    o
                        ? (t.displayChange(e), t.setContentVisible(g.equipMgr.getUpGradeNum(o._data)))
                        : (t.showShainTween(!1),
                          (t.sortBtn.active = !0),
                          t.setContentVisible(0),
                          g.equipMgr.setUpItemEarlyId(null),
                          (t.describeLayout.active = !1)),
                        t.listChange(),
                        (t.onKeyCompound.active = m.heroData.getCanCompound());
                }),
                (t.blinkMask = function () {
                    t.blinkTween ||
                        ((t.blinkMaskNode.active = !0),
                        (t.blinkMaskNode.opacity = 0),
                        (t.blinkTween = !0),
                        cc
                            .tween(t.blinkMaskNode)
                            .by(0.27, {opacity: 255}, {easing: cc.easing.sineOut})
                            .delay(0.1)
                            .by(0.53, {opacity: -255}, {easing: cc.easing.sineOut})
                            .call(function () {
                                (t.blinkTween = !1), (t.blinkMaskNode.active = !1);
                            })
                            .start());
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return l.ViewUrl.equipCompound;
            }),
            (t.prototype.onEnable = function () {
                var e = this;
                this.sortLabel.getComponent(u.LangLabel).setText("{@" + this._sortType[this._sortIndex] + "}"),
                    this.addEvent(
                        c.ClientEvents.COMPOUND_CHANGE.on(function (t) {
                            e.compoundChange(t);
                        })
                    );
            }),
            (t.prototype.start = function () {
                var e = this;
                this.backBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e.onBackBtn();
                }),
                    this.sortBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e.sortList();
                    }),
                    this.compoundBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e.blinkMask(), e.compound();
                    }),
                    this.onKeyCompound.on(cc.Node.EventType.TOUCH_END, function () {
                        m.heroData.autoCompoundAll();
                    }),
                    this.setContentVisible(0),
                    this.listChange(),
                    (this.describeLayout.active = !1),
                    (this.compoundBtn.active = !1),
                    (this.shainNode.active = !1),
                    (this.sacrificeShain.active = !1),
                    (this.onKeyCompound.active = m.heroData.getCanCompound()),
                    this.showDefaultShain();
            }),
            (t.prototype.sortList = function () {
                this._sortIndex++,
                    3 === this._sortIndex && (this._sortIndex = 0),
                    this.sortLabel.getComponent(u.LangLabel).setText("{@" + this._sortType[this._sortIndex] + "}"),
                    g.equipMgr.setSortIndex(this._sortIndex),
                    this.listChange();
            }),
            (t.prototype.onBackBtn = function () {
                this.compoundChange(null), this.closeView();
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(v.default).init(t, !0, !0);
            }),
            (t.prototype.setContentVisible = function (e) {
                0 == e
                    ? ((this.sacrificeContent[0].active = !1), (this.sacrificeContent[1].active = !1))
                    : 1 == e
                    ? ((this.sacrificeContent[0].active = !0), (this.sacrificeContent[1].active = !1))
                    : 2 == e && ((this.sacrificeContent[0].active = !0), (this.sacrificeContent[1].active = !0));
            }),
            (t.prototype.displayChange = function (e) {
                var t = e._upItem,
                    o = e._sacrifice,
                    n = g.equipMgr.getDataEarlyId(t._data),
                    a = g.equipMgr.getDataById(n),
                    i = t._data.equipment.getNextId(),
                    r = g.equipMgr.getDataById(i);
                g.equipMgr.setUpItemEarlyId(n);
                var s = cc.instantiate(this.weaponItem);
                s.getComponent(v.default).init(t._index, !1, !0, 2),
                    (s.scale = 0.85),
                    (this.shainNode.getChildByName("upShain").active = !0),
                    this.upNode.addChild(s);
                var c = cc.instantiate(this.weaponItem);
                c.getComponent(v.default).init(r, !1, !0, 1),
                    (c.scale = 1.05),
                    (this.shainNode.getChildByName("nextShain").active = !0),
                    this.showShainTween(!0),
                    (this.sortBtn.active = !1),
                    this.nextNode.addChild(c),
                    this.refreshDescribe(e, r);
                for (var l = 0; l < g.equipMgr.getUpGradeNum(t._data); l++)
                    if (o[l]) {
                        var p = cc.instantiate(this.weaponItem);
                        p.getComponent(v.default).init(o[l]._index, !1, !0, 2),
                            (this.shainNode.getChildByName("sacrifice_" + l).active = !0),
                            (p.scale = 0.85),
                            this.sacrificeNode[l].addChild(p);
                    } else {
                        var u = cc.instantiate(this.weaponItem);
                        u.getComponent(v.default).init(a, !1, !0, 0),
                            (this.shainNode.getChildByName("sacrifice_" + l).active = !1),
                            (u.scale = 0.85),
                            this.sacrificeNode[l].addChild(u);
                    }
                o.length == t._data.equipment.getGradeUpNum()
                    ? (this.compoundBtn.active = !0)
                    : (this.compoundBtn.active = !1);
            }),
            (t.prototype.refreshDescribe = function (e, t) {
                (this.describeLayout.active = !0),
                    this.describeLayout.children.forEach(function (o, n) {
                        if (
                            (0 === n &&
                                ((o.getChildByName("before").getComponent(cc.Label).string =
                                    e._upItem._data.equipment.getMaxLevel()),
                                (o.getChildByName("after").getComponent(cc.Label).string = t.equipment.getMaxLevel())),
                            1 === n)
                        ) {
                            var a = e._upItem._data.equipment.getType() % 2 == 1,
                                i = a ? "Tips_Attack" : "Tips_Blood";
                            o
                                .getChildByName("label")
                                .getComponent(u.LangLabel)
                                .setText("{@" + i + "}"),
                                (o.getChildByName("before").getComponent(cc.Label).string = a
                                    ? e._upItem._data.equipment.getMight()
                                    : e._upItem._data.equipment.getHp()),
                                (o.getChildByName("after").getComponent(cc.Label).string = a
                                    ? t.equipment.getMight()
                                    : t.equipment.getHp());
                        }
                        if (
                            2 === n &&
                            (o.getChildByName("label").getComponent(u.LangLabel).setText(""),
                            (o.active = !1),
                            f.JsonMgr.getJsonById("weaponskill", t.equipment.getQuality()[t.equipment.getGrade() - 1]))
                        ) {
                            o.active = !0;
                            var r = f.JsonMgr.getJsonById(
                                    "weaponskill",
                                    t.equipment.getQuality()[t.equipment.getGrade() - 1]
                                ),
                                s = r.descid,
                                c = y.langMgr.getStr(s),
                                l = c.split("$"),
                                p = r.numerical.split(";"),
                                d = "";
                            if (l.length <= 1) d = c;
                            else for (var h = 0; h < l.length; h++) l[h] && (d += l[h]), p[h] && (d += p[h]);
                            o.getChildByName("label").getComponent(u.LangLabel).setText(d);
                        }
                    });
            }),
            (t.prototype.compound = function () {
                var e = [];
                C.TaskTypeMgr.equitMergeTimesTask(1);
                var t = [],
                    o = g.equipMgr.getUpGradeItem(),
                    n = o._upItem,
                    a = o._sacrifice,
                    i = g.equipMgr.getCompound(),
                    s = n._data.equipment.getNextId();
                t.push({id: s, count: 1});
                var p = [],
                    u = {mapId: 0, mapNum: 0, goldNum: 0};
                a.forEach(function (e) {
                    p.push(e._index);
                }),
                    p.sort(function (e, t) {
                        return t - e;
                    });
                var d = g.equipMgr.getDress();
                if (n._data.dress)
                    for (var h = 0; h < d.length; h++)
                        d[h] &&
                            d[h].equipment.getType() === n._data.equipment.getType() &&
                            (d[h] = g.equipMgr.getDataById(s, !0));
                for (h = a.length - 1; h >= 0; h--) {
                    var f = a[h];
                    if (f._data.equipment.getLevel() > 1) {
                        var y = g.equipMgr.getDecompose(a[h]._data);
                        y && ((u.mapId = y.mapid), (u.mapNum += Number(y.mapNum)), (u.goldNum += Number(y.goldNum)));
                    }
                    if (f._data.dress)
                        for (var v = d.length - 1; v >= 0; v--)
                            f &&
                                f._data.equipment.getType() === d[v].equipment.getType() &&
                                (e.push(a[h]._data.equipment.getId()),
                                M.analyMgr.reportUseItem("Weapon", a[h]._data.equipment.getId(), 1, "Mix"),
                                d.splice(v, 1));
                    else
                        f._data.equipment.getType() === n._data.equipment.getType() &&
                            (e.push(a[h]._data.equipment.getId()),
                            M.analyMgr.reportUseItem("Weapon", a[h]._data.equipment.getId(), 1, "Mix"),
                            a.splice(h, 1));
                }
                i[n._index] = g.equipMgr.getDataById(s, n._data.dress);
                for (var b = 0, T = p; b < T.length; b++) i[(h = T[b])] && i.splice(h, 1);
                for (h = i.length - 1; h >= 0; h--) i[h].dress && i.splice(h, 1);
                0 != u.mapId &&
                    (t.push({id: u.mapId, count: u.mapNum}),
                    g.equipMgr.addMap(u.mapId, u.mapNum),
                    M.analyMgr.reportGetItem("Blueprint", u.mapId, u.mapNum, "Compound")),
                    0 != u.goldNum &&
                        (t.push({id: 1001, count: u.goldNum}),
                        _.playData.addGold(Number(u.goldNum)),
                        M.analyMgr.reportGetGold(u.goldNum, "Compound")),
                    m.heroData.saveDress(d),
                    m.heroData.saveUnDress(i),
                    g.equipMgr.refreshData(),
                    this.compoundChange(null),
                    c.ClientEvents.DRESS_CHANGE.emit(),
                    r.UIMgr.showView(l.ViewUrl.commonRewardView, null, t),
                    M.analyMgr.reportEquipMerge(g.equipMgr.getDataById(s), e.join(), !1);
            }),
            (t.prototype.showShainTween = function (e) {
                var t = this.shainNode.getChildByName("nextShain");
                e
                    ? ((this.sacrificeShain.active = !0),
                      cc.tween(t).to(0.5, {opacity: 100}).to(0.5, {opacity: 255}).union().repeatForever().start(),
                      cc
                          .tween(this.sacrificeShain)
                          .to(1, {opacity: 100})
                          .to(1, {opacity: 255})
                          .union()
                          .repeatForever()
                          .start())
                    : (cc.Tween.stopAllByTarget(t),
                      cc.Tween.stopAllByTarget(this.sacrificeShain),
                      (t.opacity = 255),
                      (this.sacrificeShain.opacity = 255),
                      (this.sacrificeShain.active = !1));
            }),
            (t.prototype.showDefaultShain = function () {
                cc.Tween.stopAllByTarget(this.defaultShain),
                    cc
                        .tween(this.defaultShain)
                        .to(1.5, {opacity: 100})
                        .to(1.5, {opacity: 255})
                        .union()
                        .repeatForever()
                        .start();
            }),
            i([w(cc.Node)], t.prototype, "upNode", void 0),
            i([w(cc.Node)], t.prototype, "nextNode", void 0),
            i([w(cc.Node)], t.prototype, "sacrificeNode", void 0),
            i([w(cc.Node)], t.prototype, "describeLayout", void 0),
            i([w(cc.Node)], t.prototype, "sacrificeShain", void 0),
            i([w(cc.Node)], t.prototype, "defaultShain", void 0),
            i([w(d.default)], t.prototype, "equipList", void 0),
            i([w(cc.Node)], t.prototype, "sortLabel", void 0),
            i([w(cc.Node)], t.prototype, "sortBtn", void 0),
            i([w(cc.Node)], t.prototype, "backBtn", void 0),
            i([w(cc.Node)], t.prototype, "compoundBtn", void 0),
            i([w(cc.Node)], t.prototype, "onKeyCompound", void 0),
            i([w(cc.Prefab)], t.prototype, "weaponItem", void 0),
            i([w(cc.Node)], t.prototype, "shainNode", void 0),
            i([w(cc.Node)], t.prototype, "blinkMaskNode", void 0),
            i([w(cc.Node)], t.prototype, "sacrificeContent", void 0),
            i([T], t)
        );
    })(p.GameComponent);
o.default = N;
