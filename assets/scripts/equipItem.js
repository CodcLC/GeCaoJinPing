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
    s = e("censtant"),
    c = e("ListItem"),
    l = e("EquipManager"),
    p = e("ResManager"),
    u = e("ViewUrl"),
    d = e("ClientEvents"),
    h = e("audioManager"),
    g = e("audioConst"),
    m = e("RedDotManager"),
    f = e("PlayerData"),
    y = e("GuideManager"),
    v = cc._decorator,
    M = v.ccclass,
    _ = v.property,
    C = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.equipNode = null),
                (t.stepNode = null),
                (t.typeBgNode = null),
                (t.typeNode = null),
                (t.equipIcon = null),
                (t.levelLabel = null),
                (t.stepLabel = null),
                (t.ssrNode = null),
                (t.drawNode = null),
                (t.drawIcon = null),
                (t.drawLabel = null),
                (t.textNode = null),
                (t.wearNode = null),
                (t.levelUpNode = null),
                (t.equipMask = null),
                (t.wearIocn = null),
                (t._data = null),
                (t._isTouch = !0),
                (t._index = null),
                (t._isCompound = null),
                (t._isItem = !0),
                (t._maskVisible = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t, o, n) {
                var a = this;
                if (
                    (void 0 === t && (t = !1),
                    void 0 === o && (o = !1),
                    void 0 === n && (n = 0),
                    (this._isCompound = o),
                    (this.ssrNode.active = !1),
                    o)
                )
                    return (
                        (this._maskVisible = n),
                        "number" == typeof e
                            ? ((this._index = e), (this._data = l.equipMgr.getCompound()[e]))
                            : "object" == typeof e && ((this._data = e), (this._isItem = !1)),
                        this.setNodeVisible(0),
                        0 === n ? this.weatherSacrifice() : 1 === n && (this._isTouch = !1),
                        void (this.wearNode.active = this._data.dress)
                    );
                if (((this.wearNode.active = !1), e.dress)) {
                    this._data = e;
                    for (var i = l.equipMgr.getAllEquips(), s = 0; s < i.length; s++)
                        i[s].dress && i[s].equipment.getType() === e.equipment.getType() && (this._index = s);
                    this.setNodeVisible(0);
                } else
                    (this._data = l.equipMgr.getAllListItem()[e]),
                        (this._index = e),
                        this._data
                            ? (this._data.type >= 10
                                  ? this.setNodeVisible(1)
                                  : (this.setNodeVisible(0), (this.wearNode.active = this._data.dress && t)),
                              f.playData.getNewUserStep() === y.GUIDE_STEP.EQUIP &&
                                  this._data.id === y.default.guideWeaponId &&
                                  this.scheduleOnce(function () {
                                      r.UIMgr.showGuideWithNode(a.node, function () {
                                          a.onNodeTouch();
                                      });
                                  }, 0.1))
                            : this.setNodeVisible(2);
            }),
            (t.prototype.setNodeVisible = function (e) {
                0 === e
                    ? ((this.equipNode.active = !0),
                      (this.drawNode.active = !1),
                      (this.textNode.active = !1),
                      this.onEquipRefresh(),
                      (this.node.getComponent(cc.Button).interactable = !0),
                      (this._isTouch = !0),
                      (this.ssrNode.active = l.equipMgr.getIsSSR(this._data)))
                    : 1 === e
                    ? ((this.equipNode.active = !1),
                      (this.drawNode.active = !0),
                      (this.textNode.active = !1),
                      this.onMapRefresh(),
                      (this.node.getComponent(cc.Button).interactable = !0),
                      (this._isTouch = !0))
                    : ((this.equipNode.active = !1),
                      (this.drawNode.active = !1),
                      (this.textNode.active = !0),
                      (this.node.getComponent(cc.Button).interactable = !1),
                      (this._isTouch = !1));
            }),
            (t.prototype.onEquipRefresh = function () {
                var e = this._data.equipment;
                p.ResManager.loadIcon(this.typeNode, s.Equip.EQUIP_TYPE_ + e.getType());
                var t = l.equipMgr.getTypeIndex(e.getGrade());
                p.ResManager.loadIcon(this.equipNode.getComponent(cc.Sprite), s.Equip.EQUIP_QUALITY_ + t);
                var o = l.equipMgr.getTypeBg(e.getGrade());
                p.ResManager.loadIcon(this.typeBgNode, s.Equip.EQUIP_PART_ + o);
                var n = l.equipMgr.getStepNode(e.getGrade());
                (this.stepNode.node.active = 0 !== n),
                    p.ResManager.loadIcon(this.equipIcon, s.Weapon.TEXTURE_ + e.getEquipIcon());
                var a = l.equipMgr.getGradeNum(e.getGrade());
                a && (this.stepLabel.string = a),
                    this._isItem
                        ? (this.levelLabel.string = e.getLevel())
                        : this._maskVisible
                        ? (this.levelLabel.string = e.getLevel())
                        : (this.levelLabel.node.parent.active = !1),
                    this._isCompound || !this._data.dress
                        ? (this.levelUpNode.active = !1)
                        : (this.levelUpNode.active = l.equipMgr.checkLevelUp(this._data)),
                    m.RDMgr.canEquipWear(this._data) && !this._isCompound
                        ? (this.wearIocn.active = !0)
                        : (this.wearIocn.active = !1);
            }),
            (t.prototype.onMapRefresh = function () {
                var e = this._data.id;
                p.ResManager.loadIcon(this.drawIcon, s.Drawing.DRAWING_ + e),
                    (this.drawLabel.string = "x " + this._data.num);
            }),
            (t.prototype.onEnable = function () {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_END, function () {
                    e._isTouch && (h.audioMgr.startEffect(g.AudioConst.COMMON_TOUCH), e.onNodeTouch());
                });
            }),
            (t.prototype.checkInCompound = function () {
                this.setMaskVisible(!this.isCompound());
            }),
            (t.prototype.setMaskVisible = function (e) {
                void 0 === e && (e = !1),
                    (this.equipMask.active = e),
                    (this.equipMask.getChildByName("lock").active = this._isItem),
                    (this.node.getComponent(cc.Button).interactable = !e),
                    (this._isTouch = !e);
            }),
            (t.prototype.isCompound = function () {
                return -1 != this._data.equipment.getNextId();
            }),
            (t.prototype.onNodeTouch = function () {
                this._isCompound
                    ? this.selectCompound()
                    : (d.ClientEvents.CHANGE_LOADING.emit(!0),
                      this._data.type >= 10
                          ? r.UIMgr.showView(
                                u.ViewUrl.equipTip,
                                null,
                                {
                                    pos: this.node.convertToWorldSpaceAR(cc.v2(0, this.node.height / 2)),
                                    data: this._data
                                },
                                function () {
                                    d.ClientEvents.CHANGE_LOADING.emit(!1);
                                }
                            )
                          : r.UIMgr.showView(
                                u.ViewUrl.equipDescView,
                                null,
                                {index: this._index, data: this._data},
                                function () {
                                    d.ClientEvents.CHANGE_LOADING.emit(!1);
                                }
                            ));
            }),
            (t.prototype.selectCompound = function () {
                var e = this._data,
                    t = this._index;
                l.equipMgr.putUpGradeItem({_data: e, _index: t});
            }),
            (t.prototype.weatherSacrifice = function () {
                var e = l.equipMgr.getDataEarlyId(this._data),
                    t = l.equipMgr.getUpItemEarlyId();
                if (this._isItem) {
                    if (this.isItemCheck()) this.setCheckMask(!0);
                    else {
                        if ((this.setCheckMask(!1), !t)) return this.setMaskVisible(!1), void this.checkInCompound();
                        e === t ? this.setMaskVisible(!1) : this.setMaskVisible(!0);
                    }
                } else this.setMaskVisible(!0);
            }),
            (t.prototype.start = function () {}),
            (t.prototype.isItemLevelUp = function () {}),
            (t.prototype.isItemCheck = function () {
                if (!this._isItem) return !1;
                var e = l.equipMgr.getUpGradeItem();
                if (e._upItem && null != e._upItem._index && e._upItem._index === this._index) return !0;
                for (var t = 0; t < e._sacrifice.length; t++) if (e._sacrifice[t]._index === this._index) return !0;
                return !1;
            }),
            (t.prototype.setCheckMask = function (e) {
                (this.equipMask.active = e),
                    (this.equipMask.getChildByName("lock").active = !1),
                    (this.equipMask.getChildByName("check").active = e);
            }),
            i([_(cc.Node)], t.prototype, "equipNode", void 0),
            i([_(cc.Sprite)], t.prototype, "stepNode", void 0),
            i([_(cc.Sprite)], t.prototype, "typeBgNode", void 0),
            i([_(cc.Sprite)], t.prototype, "typeNode", void 0),
            i([_(cc.Sprite)], t.prototype, "equipIcon", void 0),
            i([_(cc.Label)], t.prototype, "levelLabel", void 0),
            i([_(cc.Label)], t.prototype, "stepLabel", void 0),
            i([_(cc.Node)], t.prototype, "ssrNode", void 0),
            i([_(cc.Node)], t.prototype, "drawNode", void 0),
            i([_(cc.Sprite)], t.prototype, "drawIcon", void 0),
            i([_(cc.Label)], t.prototype, "drawLabel", void 0),
            i([_(cc.Node)], t.prototype, "textNode", void 0),
            i([_(cc.Node)], t.prototype, "wearNode", void 0),
            i([_(cc.Node)], t.prototype, "levelUpNode", void 0),
            i([_(cc.Node)], t.prototype, "equipMask", void 0),
            i([_(cc.Node)], t.prototype, "wearIocn", void 0),
            i([M], t)
        );
    })(c.default);
o.default = C;
