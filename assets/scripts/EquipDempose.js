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
    d = e("audioManager"),
    h = e("EquipManager"),
    g = e("HeroData"),
    m = e("PlayerData"),
    f = e("ResManager"),
    y = e("EquipInit"),
    v = e("AnalyticsManager"),
    M = cc._decorator,
    _ = M.ccclass,
    C = M.property,
    b = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.equipNode = null),
                (t.recycleLayout = null),
                (t.equip = null),
                (t.gold = null),
                (t.draw = null),
                (t.closeBtn = null),
                (t.decomposeBtn = null),
                (t.recycleNode = null),
                (t.displayNode = null),
                (t._data = null),
                (t._index = null),
                (t._originalId = null),
                (t._recycleData = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return p.ViewUrl.equipDempose;
            }),
            (t.prototype.start = function () {
                var e = this,
                    t = this.node.data;
                (this._data = t.data),
                    (this._index = t.index),
                    (this._originalId = t.originalId),
                    (this._recycleData = t.recycleData),
                    this.earlyInit(),
                    this.recycleInit(),
                    this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        d.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e.closeView();
                    }),
                    this.decomposeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        d.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e.recycle();
                    }),
                    this.recycleNode.on(cc.Node.EventType.TOUCH_END, function () {
                        d.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH),
                            e.closeView(),
                            r.UIMgr.closeView(p.ViewUrl.equipDescView);
                    }),
                    (this.recycleNode.active = !1);
            }),
            (t.prototype.recycle = function () {
                (this.aniNode.active = !1), (this.recycleNode.active = !0);
                var e = h.equipMgr.getAllEquips();
                if ((this._data.equipment.init(this._originalId), (this._data.id = this._originalId), this._data.dress))
                    for (var t = h.equipMgr.getAllDressed(), o = 0; o < t.length; o++)
                        t[o] &&
                            t[o].equipment.getType() === this._data.equipment.getType() &&
                            ((t[o].id = this._originalId),
                            t[o].equipment.init(this._originalId),
                            g.heroData.saveDress(t),
                            l.ClientEvents.DRESS_CHANGE.emit());
                else g.heroData.saveUnDress(e);
                m.playData.addGold(Number(this._recycleData.goldNum)),
                    h.equipMgr.addMap(this._recycleData.mapid, this._recycleData.mapNum),
                    (this.recycleLayout.parent = this.displayNode),
                    h.equipMgr.refreshData(),
                    v.analyMgr.reportGetGold(this._recycleData.goldNum, "Compound"),
                    v.analyMgr.reportGetItem(
                        "Blueprint",
                        this._recycleData.mapid,
                        this._recycleData.mapNum,
                        "Compound"
                    ),
                    l.ClientEvents.LIST_CHANGE.emit();
            }),
            (t.prototype.earlyInit = function () {
                var e = this.initEquip(this._data.equipment);
                (e.active = !0), e.setPosition(cc.v2(0, 0)), this.equipNode.addChild(e);
            }),
            (t.prototype.recycleInit = function () {
                var e = this.initEquip(this._data.equipment, !1);
                (e.active = !0), (e.scale = 0.8), e.setPosition(cc.v2(0, 0)), this.recycleLayout.addChild(e);
                var t = cc.instantiate(this.gold);
                (t.active = !0),
                    (t.getChildByName("numLabel").getComponent(cc.Label).string = "x " + this._recycleData.goldNum),
                    (t.scale = 0.8),
                    t.setPosition(cc.v2(0, 0)),
                    this.recycleLayout.addChild(t);
                var o = cc.instantiate(this.draw);
                (o.active = !0),
                    (o.scale = 0.8),
                    o.setPosition(cc.v2(0, 0)),
                    f.ResManager.loadIcon(
                        o.getChildByName("draw_icon").getComponent(cc.Sprite),
                        c.Drawing.DRAWING_ + this._recycleData.mapid
                    ),
                    (o.getChildByName("numLabel").getComponent(cc.Label).string = "x " + this._recycleData.mapNum),
                    this.recycleLayout.addChild(o);
            }),
            (t.prototype.initEquip = function (e, t) {
                void 0 === t && (t = !0);
                var o = cc.instantiate(this.equip);
                return o.getComponent(y.default).init(e, t), o;
            }),
            i([C(cc.Node)], t.prototype, "aniNode", void 0),
            i([C(cc.Node)], t.prototype, "equipNode", void 0),
            i([C(cc.Node)], t.prototype, "recycleLayout", void 0),
            i([C(cc.Node)], t.prototype, "equip", void 0),
            i([C(cc.Node)], t.prototype, "gold", void 0),
            i([C(cc.Node)], t.prototype, "draw", void 0),
            i([C(cc.Node)], t.prototype, "closeBtn", void 0),
            i([C(cc.Node)], t.prototype, "decomposeBtn", void 0),
            i([C(cc.Node)], t.prototype, "recycleNode", void 0),
            i([C(cc.Node)], t.prototype, "displayNode", void 0),
            i([_], t)
        );
    })(u.GameComponent);
o.default = b;
