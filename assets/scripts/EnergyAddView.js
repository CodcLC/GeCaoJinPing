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
    c = e("ViewUrl"),
    l = e("GameComponent"),
    p = e("LangLabel"),
    u = e("audioManager"),
    d = e("HomeManager"),
    h = e("JsonManager"),
    g = e("PlayerData"),
    m = e("WxManager"),
    f = e("LanguageManager"),
    y = e("AnalyticsManager"),
    v = cc._decorator,
    M = v.ccclass,
    _ = v.property,
    C = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.diamondGetEnergyAdd = null),
                (t.diamondGetEnergyCost = null),
                (t.adGetEnergyNum = null),
                (t.adGetEnergyTime = null),
                (t.adIcon = null),
                (t.closeBtn = null),
                (t.adCostBtn = null),
                (t.diamondCostBtn = null),
                (t.spTiliMore = null),
                (t.tiliSpDiamond = null),
                (t.tiliSpAd = null),
                (t.diamondNum = null),
                (t.adNum = null),
                (t.spMaterials = []),
                (t._adMaxTimes = 0),
                (t._adCurTimes = 0),
                (t._adAddNum = 0),
                (t._diamondCostNum = 0),
                (t._diamondAddNum = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.energyAdd;
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(2, this.aniNode);
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), m.wxMgr.hideBanner();
            }),
            (t.prototype.start = function () {
                var e = this;
                m.wxMgr.showBanner({openUi: c.ViewUrl.energyAdd, placementName: ""}),
                    this.initBaseData(),
                    this.initInfo(),
                    this.refreshState(),
                    this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        u.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e.closeView();
                    }),
                    this.adCostBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        e._adCurTimes > 0 &&
                            m.wxMgr.createVideo(
                                {placementName: "AdEnergy", openUi: "EnergyAddView", level: g.playData.getLevel()},
                                function () {},
                                function () {
                                    u.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH),
                                        d.homeMgr.addEnergy(e._adAddNum, "Ads"),
                                        g.playData.setDailyEnergyAd(e._adCurTimes - 1),
                                        e.refreshState(),
                                        r.UIMgr.showView(c.ViewUrl.commonRewardView, null, [
                                            {id: 1003, count: e._adAddNum}
                                        ]),
                                        e.closeView();
                                }
                            );
                    }),
                    this.diamondCostBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        if ((u.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), g.playData.checkGem(e._diamondCostNum)))
                            g.playData.useGem(e._diamondCostNum),
                                d.homeMgr.addEnergy(e._diamondAddNum, "Gem"),
                                y.analyMgr.reportUseGem(e._diamondCostNum, "BuyEnerge"),
                                r.UIMgr.showView(c.ViewUrl.commonRewardView, null, [
                                    {id: 1003, count: e._diamondAddNum}
                                ]),
                                e.closeView();
                        else {
                            var t = f.langMgr.getStr("Tips_Lack");
                            r.UIMgr.showView(c.ViewUrl.commonTip, null, t);
                        }
                    });
            }),
            (t.prototype.initBaseData = function () {
                var e = this,
                    t = h.JsonMgr.getDefineConstantByName("AddEnergyAD").split("|");
                (this._adAddNum = Number(t[0])), (this._adMaxTimes = Number(t[1]));
                var o = h.JsonMgr.getDefineConstantByName("ShopEnergyNumAD").split("|");
                (this._diamondCostNum = Number(o[1])),
                    (this._diamondAddNum = Number(o[3])),
                    this._adAddNum > 10 && (this.tiliSpAd.spriteFrame = this.spTiliMore),
                    this._diamondAddNum > 10 && (this.tiliSpDiamond.spriteFrame = this.spTiliMore),
                    this.scheduleOnce(function () {
                        var t = f.langMgr.getStr("Tips_Energy"),
                            o = t.replace("$", e._diamondAddNum.toString()),
                            n = t.replace("$", e._adAddNum.toString());
                        e.diamondNum.getComponent(p.LangLabel).setText(o), e.adNum.getComponent(p.LangLabel).setText(n);
                    });
            }),
            (t.prototype.initInfo = function () {
                (this.diamondGetEnergyAdd.string = this._diamondAddNum.toString()),
                    (this.diamondGetEnergyCost.string = this._diamondCostNum.toString()),
                    (this.adGetEnergyNum.string = this._adAddNum.toString());
            }),
            (t.prototype.refreshState = function () {
                (this._adCurTimes = g.playData.getDailyEnergyAd()),
                    (this.adGetEnergyTime.string = "(" + this._adCurTimes + "/" + this._adMaxTimes + ")"),
                    this._adCurTimes > 0
                        ? (this.adCostBtn.getComponent(cc.Sprite).setMaterial(0, this.spMaterials[0]),
                          this.adIcon.setMaterial(0, this.spMaterials[0]))
                        : (this.adCostBtn.getComponent(cc.Sprite).setMaterial(0, this.spMaterials[1]),
                          this.adIcon.setMaterial(0, this.spMaterials[1]));
            }),
            i([_(cc.Node)], t.prototype, "aniNode", void 0),
            i([_(cc.Label)], t.prototype, "diamondGetEnergyAdd", void 0),
            i([_(cc.Label)], t.prototype, "diamondGetEnergyCost", void 0),
            i([_(cc.Label)], t.prototype, "adGetEnergyNum", void 0),
            i([_(cc.Label)], t.prototype, "adGetEnergyTime", void 0),
            i([_(cc.Sprite)], t.prototype, "adIcon", void 0),
            i([_(cc.Node)], t.prototype, "closeBtn", void 0),
            i([_(cc.Node)], t.prototype, "adCostBtn", void 0),
            i([_(cc.Node)], t.prototype, "diamondCostBtn", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "spTiliMore", void 0),
            i([_(cc.Sprite)], t.prototype, "tiliSpDiamond", void 0),
            i([_(cc.Sprite)], t.prototype, "tiliSpAd", void 0),
            i([_(cc.Node)], t.prototype, "diamondNum", void 0),
            i([_(cc.Node)], t.prototype, "adNum", void 0),
            i([_(cc.Material)], t.prototype, "spMaterials", void 0),
            i([M], t)
        );
    })(l.GameComponent);
o.default = C;
