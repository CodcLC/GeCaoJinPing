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
var r = e("ListItem"),
    s = e("ActivityManager"),
    c = e("ResManager"),
    l = e("JsonManager"),
    p = e("ActivityLevelManager"),
    u = e("UIManager"),
    d = e("ViewUrl"),
    h = e("ItemManager"),
    g = e("AnalyticsManager"),
    m = e("ClientEvents"),
    f = cc._decorator,
    y = f.ccclass,
    v = f.property,
    M = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.proLabel = null),
                (t.exchangeBtn = null),
                (t.reward = null),
                (t.costCount = null),
                (t.rewardLabel = null),
                (t.btnLabel = null),
                (t.ssr = null),
                (t.activityData = null),
                (t.convertData = null),
                (t.convertJson = null),
                (t.rewardData = []),
                (t.costCoin = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t, o, n) {
                (this.parent = n),
                    (this.activityData = t),
                    (this.convertJson = o),
                    (this.convertData = s.activityManager.getConvertData(
                        this.activityData.activityid,
                        this.convertJson.id
                    )),
                    this.initProLabel(),
                    this.initReward(),
                    this.initBtnState();
            }),
            (t.prototype.initProLabel = function () {
                var e = this.convertData.maxCount,
                    t = this.convertData.count;
                this.proLabel.string = t > e ? "0/" + e : e - t + "/" + e;
            }),
            (t.prototype.initReward = function () {
                var e = this.convertJson.costcoin.split("|")[1];
                (this.costCoin = Number(e)), (this.costCount.string = e);
                var t = this.convertJson.idfixed.split("|");
                (this.rewardData = [{id: Number(t[0]), count: Number(t[1])}]),
                    (this.rewardLabel.string = t[1]),
                    this.loadIcon();
            }),
            (t.prototype.loadIcon = function () {
                this.reward.node.scale = 0.5;
                var e = this.reward.node.parent.getComponent(cc.Sprite),
                    t = this.rewardData[0];
                if (((this.ssr.active = !1), t.id > 1e5 && t.id < 1e6)) {
                    var o = l.JsonMgr.getWeaponById(t.id);
                    (this.ssr.active = 1 === o.specialtype),
                        c.ResManager.loadEquipIcon(o.icon, this.reward),
                        c.ResManager.loadQualityBg(o.grade, e),
                        (this.reward.node.scale = 0.2);
                } else
                    t.id > 1e4 && t.id < 10007
                        ? (c.ResManager.loadMapIcon(t.id, this.reward),
                          c.ResManager.loadQualityBg(l.JsonMgr.getItemJsonById(t.id).quality, e))
                        : t.id > 2e3 && t.id < 2004
                        ? (c.ResManager.loadStoreKeys(t.id, this.reward),
                          c.ResManager.loadQualityBg(l.JsonMgr.getItemJsonById(t.id).quality, e),
                          (this.reward.node.scale = 0.7))
                        : 1010303 === t.id
                        ? (c.ResManager.loadItemCommon(t.id, this.reward),
                          c.ResManager.loadQualityBg(l.JsonMgr.getItemJsonById(t.id).quality, e),
                          (this.reward.node.scale = 0.3))
                        : 1019 === t.id
                        ? (c.ResManager.loadActivityItem(this.reward, t.id.toString()),
                          c.ResManager.loadQualityBg(l.JsonMgr.getItemJsonById(t.id).quality, e),
                          (this.reward.node.scale = 0.7))
                        : t.id > 1e3 && t.id < 1004
                        ? (c.ResManager.loadItemCommon(t.id, this.reward),
                          c.ResManager.loadQualityBg(l.JsonMgr.getItemJsonById(t.id).quality, e))
                        : 1017 === t.id
                        ? (c.ResManager.loadHeroExp(this.reward),
                          c.ResManager.loadQualityBg(l.JsonMgr.getItemJsonById(t.id).quality, e))
                        : t.id > 3e3 &&
                          t.id < 3005 &&
                          (c.ResManager.loadHeroChip(t.id.toString(), this.reward),
                          c.ResManager.loadQualityBg(l.JsonMgr.getItemJsonById(t.id).quality, e));
            }),
            (t.prototype.initBtnState = function () {
                var e = this.convertData.maxCount;
                this.convertData.count >= e
                    ? ((this.exchangeBtn.interactable = !1), (this.btnLabel.string = "已售罄"))
                    : ((this.exchangeBtn.interactable = this.costCoin <= p.activityMgr.getItemById(1018).count),
                      (this.btnLabel.string = "兑换"));
            }),
            (t.prototype.clickHandle = function () {
                var e = this,
                    t = h.itemMgr.addItemData(this.rewardData[0].id, this.rewardData[0].count, "ExchangeActivity");
                t &&
                    ((this.rewardData = []),
                    t.forEach(function (t) {
                        e.rewardData.push(t);
                    })),
                    u.UIMgr.showView(d.ViewUrl.commonRewardView, null, this.rewardData),
                    s.activityManager.exchangeConvert(this.activityData.activityid, this.convertData.id),
                    p.activityMgr.costItem(1018, this.costCoin),
                    g.analyMgr.reportGetExchangeReward(
                        this.activityData.activityid,
                        "Exchange",
                        this.activityData.activityadmax -
                            s.activityManager.getBingoFromMap(this.activityData.activityid).seeADCount,
                        this.costCoin,
                        this.rewardData
                    ),
                    (this.convertData = s.activityManager.getConvertData(
                        this.activityData.activityid,
                        this.convertJson.id
                    )),
                    this.initProLabel(),
                    this.initReward(),
                    this.initBtnState(),
                    this.parent.initView(),
                    m.ClientEvents.REFRESH_PATROL_HOME_RED.emit();
            }),
            i([v(cc.Label)], t.prototype, "proLabel", void 0),
            i([v(cc.Button)], t.prototype, "exchangeBtn", void 0),
            i([v(cc.Sprite)], t.prototype, "reward", void 0),
            i([v(cc.Label)], t.prototype, "costCount", void 0),
            i([v(cc.Label)], t.prototype, "rewardLabel", void 0),
            i([v(cc.Label)], t.prototype, "btnLabel", void 0),
            i([v(cc.Node)], t.prototype, "ssr", void 0),
            i([y], t)
        );
    })(r.default);
o.default = M;
