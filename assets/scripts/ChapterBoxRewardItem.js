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
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.bg = null),
                (t.icon = null),
                (t.typeImg = null),
                (t.typeIcon = null),
                (t.numlabel = null),
                (t._rewardId = -1),
                (t._rewardNum = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.refresh = function (e) {
                var t = e.split("|");
                if (2 == t.length) {
                    if (
                        ((this._rewardId = Number(t[0])),
                        (this._rewardNum = Number(t[1])),
                        (this.numlabel.string = "" + this._rewardNum),
                        (this.typeImg.node.active = !1),
                        1001 === this._rewardId)
                    )
                        s.ResManager.loadQualityBg(3, this.bg),
                            s.ResManager.loadGoldIcon(this.icon),
                            this.icon.node.setContentSize(cc.size(72, 76));
                    else if (1002 === this._rewardId) {
                        var o = r.JsonMgr.getItemJsonById(this._rewardId);
                        s.ResManager.loadQualityBg(o.quality, this.bg),
                            s.ResManager.loadItemCommon(this._rewardId, this.icon),
                            this.icon.node.setContentSize(cc.size(80, 94));
                    } else if (1003 === this._rewardId)
                        (o = r.JsonMgr.getItemJsonById(this._rewardId)),
                            s.ResManager.loadQualityBg(o.quality, this.bg),
                            s.ResManager.loadItemCommon(this._rewardId, this.icon),
                            this.icon.node.setContentSize(56, 78);
                    else if (1014 == this._rewardId)
                        (o = r.JsonMgr.getItemJsonById(this._rewardId)),
                            s.ResManager.loadQualityBg(o.quality, this.bg),
                            s.ResManager.loadItemCommon(this._rewardId, this.icon),
                            this.icon.node.setContentSize(78, 80);
                    else if (1017 == this._rewardId)
                        (o = r.JsonMgr.getItemJsonById(this._rewardId)),
                            s.ResManager.loadQualityBg(o.quality, this.bg),
                            s.ResManager.loadHeroExp(this.icon),
                            this.icon.node.setContentSize(80, 80);
                    else if (2001 == this._rewardId || 2002 == this._rewardId || 2003 == this._rewardId)
                        (o = r.JsonMgr.getItemJsonById(this._rewardId)),
                            s.ResManager.loadQualityBg(o.quality, this.bg),
                            s.ResManager.loadStoreKeys(o.id, this.icon),
                            this.icon.node.setContentSize(73, 71);
                    else if (3001 == this._rewardId || 3002 == this._rewardId || 3003 == this._rewardId)
                        (o = r.JsonMgr.getItemJsonById(this._rewardId)),
                            s.ResManager.loadQualityBg(o.quality, this.bg),
                            s.ResManager.loadHeroChip(this._rewardId.toString(), this.icon),
                            this.icon.node.setContentSize(89, 95);
                    else if (this._rewardId > 1e5 && this._rewardId < 9e5) {
                        var n = Number(this._rewardId % 100),
                            a = this._rewardId - (n - 1);
                        (o = r.JsonMgr.getJsonById("weapon", a)),
                            (this.typeImg.node.active = !0),
                            s.ResManager.loadEquipIcon(o.icon, this.icon),
                            s.ResManager.loadQualityBg(o.grade, this.bg),
                            s.ResManager.loadTypeBg(o.grade, this.typeImg),
                            s.ResManager.loadTypeIcon(o.type, this.typeIcon),
                            this.icon.node.setContentSize(cc.size(90, 90));
                    } else
                        this._rewardId > 1e4 && this._rewardId < 10010
                            ? (s.ResManager.loadQualityBg(1, this.bg),
                              s.ResManager.loadMapIcon(this._rewardId, this.icon),
                              this.icon.node.setContentSize(cc.size(94, 80)))
                            : 1010303 == this._rewardId
                            ? (s.ResManager.loadQualityBg(1, this.bg),
                              s.ResManager.loadItemCommon(this._rewardId, this.icon),
                              this.icon.node.setContentSize(cc.size(94, 80)))
                            : 1010304 == this._rewardId &&
                              (s.ResManager.loadQualityBg(1, this.bg),
                              s.ResManager.loadItemCommon(this._rewardId, this.icon),
                              this.icon.node.setContentSize(cc.size(87, 86)));
                } else console.error("config err! ", e);
            }),
            i([p(cc.Sprite)], t.prototype, "bg", void 0),
            i([p(cc.Sprite)], t.prototype, "icon", void 0),
            i([p(cc.Sprite)], t.prototype, "typeImg", void 0),
            i([p(cc.Sprite)], t.prototype, "typeIcon", void 0),
            i([p(cc.Label)], t.prototype, "numlabel", void 0),
            i([l], t)
        );
    })(cc.Component);
o.default = u;
