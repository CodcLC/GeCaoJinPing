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
var r = e("JsonManager"),
    s = e("ResManager"),
    c = e("CommonUtil"),
    l = e("EquipManager"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.bg = null),
                (t.icon = null),
                (t.typeImg = null),
                (t.typeIcon = null),
                (t.levelNode = null),
                (t.level = null),
                (t.ssrNode = null),
                (t.gradeLabel = null),
                (t.countLabel = null),
                (t.id = 0),
                (t.index = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t, o, n) {
                if (
                    (void 0 === n && (n = !0),
                    (this.node.opacity = 0),
                    this.node.stopAllActions(),
                    (this.node.scale = 4),
                    (this.id = t),
                    (this.index = e),
                    (this.icon.node.scale = 1),
                    (this.gradeLabel.string = ""),
                    (this.countLabel.string = ""),
                    (this.levelNode.active = !1),
                    (this.ssrNode.active = !1),
                    (this.countLabel.node.active = !0),
                    1001 === t)
                )
                    s.ResManager.loadGoldIcon(this.icon),
                        s.ResManager.loadQualityBg(3, this.bg),
                        (this.countLabel.node.active = !0),
                        (this.countLabel.string = "x" + c.CommonUtil.formatMoney(o)),
                        0 === o && (this.countLabel.node.active = !1),
                        this.icon.node.setContentSize(78, 82);
                else if (1002 === t) {
                    (this.countLabel.node.active = !0), (this.level.node.active = !1);
                    var a = r.JsonMgr.getItemJsonById(this.id);
                    (this.typeImg.node.active = !1),
                        (this.countLabel.string = o.toString()),
                        s.ResManager.loadItemCommon(t, this.icon),
                        s.ResManager.loadQualityBg(a.quality, this.bg),
                        this.icon.node.setContentSize(80, 94);
                } else if (1003 === t)
                    (this.countLabel.node.active = !0),
                        (this.level.node.active = !1),
                        (a = r.JsonMgr.getItemJsonById(this.id)),
                        (this.typeImg.node.active = !1),
                        (this.countLabel.string = o.toString()),
                        s.ResManager.loadItemCommon(t, this.icon),
                        s.ResManager.loadQualityBg(a.quality, this.bg),
                        this.icon.node.setContentSize(70, 98);
                else if (1014 === t)
                    (this.countLabel.node.active = !0),
                        (this.level.node.active = !1),
                        (a = r.JsonMgr.getItemJsonById(this.id)),
                        (this.typeImg.node.active = !1),
                        (this.countLabel.string = o.toString()),
                        s.ResManager.loadItemCommon(t, this.icon),
                        s.ResManager.loadQualityBg(a.quality, this.bg),
                        this.icon.node.setContentSize(78, 80);
                else if (1015 === t)
                    (this.countLabel.node.active = !0),
                        (this.level.node.active = !1),
                        (a = r.JsonMgr.getItemJsonById(this.id)),
                        (this.typeImg.node.active = !1),
                        (this.countLabel.string = o.toString()),
                        s.ResManager.loadItemCommon(t, this.icon),
                        s.ResManager.loadQualityBg(a.quality, this.bg),
                        this.icon.node.setContentSize(63, 87);
                else if (1016 == t)
                    (this.countLabel.node.active = !0),
                        (this.level.node.active = !1),
                        (a = r.JsonMgr.getItemJsonById(this.id)),
                        (this.typeImg.node.active = !1),
                        (this.countLabel.string = o.toString()),
                        s.ResManager.loadItemCommon(t, this.icon),
                        s.ResManager.loadQualityBg(a.quality, this.bg),
                        this.icon.node.setContentSize(63, 86);
                else if (1020 == t)
                    (this.countLabel.node.active = !0),
                        (this.level.node.active = !1),
                        (a = r.JsonMgr.getItemJsonById(this.id)),
                        (this.typeImg.node.active = !1),
                        (this.countLabel.string = o.toString()),
                        s.ResManager.loadItemCommon(t, this.icon),
                        s.ResManager.loadQualityBg(a.quality, this.bg),
                        this.icon.node.setContentSize(67, 78);
                else if (2001 == t || 2002 == t || 2003 == t)
                    (this.countLabel.node.active = !0),
                        (this.level.node.active = !1),
                        (this.typeImg.node.active = !1),
                        (a = r.JsonMgr.getItemJsonById(t)),
                        s.ResManager.loadQualityBg(a.quality, this.bg),
                        (this.countLabel.string = o.toString()),
                        s.ResManager.loadStoreKeys(a.id, this.icon),
                        this.icon.node.setContentSize(88, 85);
                else if (3001 == t || 3002 == t || 3003 == t)
                    (this.countLabel.node.active = !0),
                        (this.level.node.active = !1),
                        (this.typeImg.node.active = !1),
                        (a = r.JsonMgr.getItemJsonById(t)),
                        s.ResManager.loadQualityBg(a.quality, this.bg),
                        (this.countLabel.string = o.toString()),
                        s.ResManager.loadHeroChip(t.toString(), this.icon),
                        this.icon.node.setContentSize(89, 95);
                else if (t > 1e5 && t < 9e5) {
                    this.typeImg.node.active = !0;
                    var i = Number(t % 100),
                        p = t - (i - 1);
                    (a = r.JsonMgr.getJsonById("weapon", p)),
                        (this.levelNode.active = !0),
                        (this.level.string = i.toString()),
                        (this.level.node.active = !0),
                        s.ResManager.loadEquipIcon(a.icon, this.icon),
                        s.ResManager.loadQualityBg(a.grade, this.bg),
                        s.ResManager.loadTypeBg(a.grade, this.typeImg),
                        s.ResManager.loadTypeIcon(a.type, this.typeIcon),
                        (this.ssrNode.active = 1 == a.specialtype);
                    var u = l.equipMgr.getGradeNum(a.grade);
                    u && (this.gradeLabel.string = u), this.icon.node.setContentSize(cc.size(90, 90));
                } else
                    t > 1e4 && t < 10010
                        ? (s.ResManager.loadQualityBg(1, this.bg),
                          (this.countLabel.node.active = !0),
                          s.ResManager.loadMapIcon(t, this.icon),
                          (this.countLabel.string = "x" + o),
                          this.icon.node.setContentSize(cc.size(94, 80)))
                        : 1017 === t
                        ? (s.ResManager.loadQualityBg(3, this.bg),
                          s.ResManager.loadHeroExp(this.icon),
                          (this.countLabel.node.active = 0 !== o),
                          (this.countLabel.string = "x" + c.CommonUtil.formatMoney(o)),
                          this.icon.node.setContentSize(cc.size(96, 96)))
                        : t > 1017 &&
                          t < 1020 &&
                          (s.ResManager.loadQualityBg(3, this.bg),
                          s.ResManager.loadActivityItem(this.icon, t.toString()),
                          this.icon.node.setContentSize(cc.size(74, 91)),
                          (this.countLabel.node.active = 0 !== o),
                          (this.countLabel.string = "x" + c.CommonUtil.formatMoney(o)));
                n ? this.playAni() : ((this.node.opacity = 255), (this.node.scale = 1));
            }),
            (t.prototype.playAni = function () {
                this.node.runAction(
                    cc.sequence(
                        cc.delayTime(0.15 * this.index),
                        cc.spawn(cc.scaleTo(0.1, 1, 1), cc.fadeIn(0.1)),
                        cc.scaleTo(0.1, 1.2, 1.2),
                        cc.scaleTo(0.032, 1, 1)
                    )
                );
            }),
            i([d(cc.Sprite)], t.prototype, "bg", void 0),
            i([d(cc.Sprite)], t.prototype, "icon", void 0),
            i([d(cc.Sprite)], t.prototype, "typeImg", void 0),
            i([d(cc.Sprite)], t.prototype, "typeIcon", void 0),
            i([d(cc.Node)], t.prototype, "levelNode", void 0),
            i([d(cc.Label)], t.prototype, "level", void 0),
            i([d(cc.Node)], t.prototype, "ssrNode", void 0),
            i([d(cc.Label)], t.prototype, "gradeLabel", void 0),
            i([d(cc.Label)], t.prototype, "countLabel", void 0),
            i([u], t)
        );
    })(cc.Component);
o.default = h;
