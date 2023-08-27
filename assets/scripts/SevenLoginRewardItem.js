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
    c = e("SevenLoginManager"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.qualityBg = null),
                (t.icon = null),
                (t.numLabel = null),
                (t.typeBg = null),
                (t.typeSp = null),
                (t.isGet = null),
                (t._id = -1),
                (t._rewardId = -1),
                (t._rewardNum = -1),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t) {
                this._id = e;
                var o = t.split("|");
                if (2 == o.length) {
                    if (
                        ((this._rewardId = Number(o[0])),
                        (this._rewardNum = Number(o[1])),
                        (this.typeBg.node.active = !1),
                        (this.typeSp.node.active = !1),
                        (this.numLabel.string = "x" + this._rewardNum),
                        1001 === this._rewardId)
                    )
                        s.ResManager.loadQualityBg(3, this.qualityBg),
                            s.ResManager.loadItemCommon(this._rewardId, this.icon),
                            this.icon.node.setContentSize(cc.size(56, 58));
                    else if (1002 === this._rewardId) {
                        var n = r.JsonMgr.getItemJsonById(this._rewardId);
                        s.ResManager.loadQualityBg(n.quality, this.qualityBg),
                            s.ResManager.loadItemCommon(this._rewardId, this.icon),
                            this.icon.node.setContentSize(cc.size(49, 58));
                    } else if (1003 === this._rewardId)
                        (n = r.JsonMgr.getItemJsonById(this._rewardId)),
                            s.ResManager.loadQualityBg(n.quality, this.qualityBg),
                            s.ResManager.loadItemCommon(this._rewardId, this.icon),
                            this.icon.node.setContentSize(cc.size(35, 49));
                    else if (1014 == this._rewardId)
                        (n = r.JsonMgr.getItemJsonById(this._rewardId)),
                            s.ResManager.loadQualityBg(n.quality, this.qualityBg),
                            s.ResManager.loadItemCommon(this._rewardId, this.icon),
                            this.icon.node.setContentSize(58, 58);
                    else if (1017 == this._rewardId)
                        (n = r.JsonMgr.getItemJsonById(this._rewardId)),
                            s.ResManager.loadQualityBg(n.quality, this.qualityBg),
                            s.ResManager.loadHeroExp(this.icon),
                            this.icon.node.setContentSize(60, 60);
                    else if (2001 == this._rewardId || 2002 == this._rewardId || 2003 == this._rewardId)
                        (n = r.JsonMgr.getItemJsonById(this._rewardId)),
                            s.ResManager.loadQualityBg(n.quality, this.qualityBg),
                            s.ResManager.loadStoreKeys(n.id, this.icon),
                            this.icon.node.setContentSize(58, 58);
                    else if (3001 == this._rewardId || 3002 == this._rewardId || 3003 == this._rewardId)
                        (n = r.JsonMgr.getItemJsonById(this._rewardId)),
                            s.ResManager.loadQualityBg(n.quality, this.qualityBg),
                            s.ResManager.loadHeroChip(this._rewardId.toString(), this.icon),
                            this.icon.node.setContentSize(53, 57);
                    else if (this._rewardId > 1e5 && this._rewardId < 9e5) {
                        var a = Number(this._rewardId % 100),
                            i = this._rewardId - (a - 1);
                        (n = r.JsonMgr.getJsonById("weapon", i)),
                            (this.typeBg.node.active = !0),
                            (this.typeSp.node.active = !0),
                            s.ResManager.loadEquipIcon(n.icon, this.icon),
                            s.ResManager.loadQualityBg(n.grade, this.qualityBg),
                            s.ResManager.loadTypeBg(n.grade, this.typeBg),
                            s.ResManager.loadTypeIcon(n.type, this.typeSp),
                            this.icon.node.setContentSize(cc.size(60, 60));
                    } else
                        this._rewardId > 1e4 && this._rewardId < 10010
                            ? (s.ResManager.loadQualityBg(1, this.qualityBg),
                              s.ResManager.loadMapIcon(this._rewardId, this.icon),
                              this.icon.node.setContentSize(cc.size(60, 51)))
                            : 1010303 == this._rewardId
                            ? (s.ResManager.loadQualityBg(1, this.qualityBg),
                              s.ResManager.loadItemCommon(this._rewardId, this.icon),
                              this.icon.node.setContentSize(cc.size(63, 58)))
                            : 1010304 == this._rewardId &&
                              (s.ResManager.loadQualityBg(1, this.qualityBg),
                              s.ResManager.loadItemCommon(this._rewardId, this.icon),
                              this.icon.node.setContentSize(cc.size(59, 58)));
                } else console.error("config err! ", t);
            }),
            (t.prototype.refresh = function (e) {
                var t = c.SevenLoginMgr.isRewardIdGet(this._id);
                if (e) (o = "" != t.rewardTime && t.isExtra), (this.isGet.active = o);
                else {
                    var o = "" != t.rewardTime;
                    this.isGet.active = o;
                }
            }),
            i([u(cc.Sprite)], t.prototype, "qualityBg", void 0),
            i([u(cc.Sprite)], t.prototype, "icon", void 0),
            i([u(cc.Label)], t.prototype, "numLabel", void 0),
            i([u(cc.Sprite)], t.prototype, "typeBg", void 0),
            i([u(cc.Sprite)], t.prototype, "typeSp", void 0),
            i([u(cc.Node)], t.prototype, "isGet", void 0),
            i([p], t)
        );
    })(cc.Component);
o.default = d;
