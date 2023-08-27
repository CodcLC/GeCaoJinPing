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
    p = e("AnalyticsManager"),
    u = e("audioManager"),
    d = e("CoinBoxManager"),
    h = e("JsonManager"),
    g = e("PlayerData"),
    m = e("WxManager"),
    f = cc._decorator,
    y = f.ccclass,
    v = f.property,
    M = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null), (t.light = null), (t.labelNum = null), (t._actHandle = null), (t._addCoin = 0), t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.CoinBoxView;
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(2, this.aniNode);
            }),
            (t.prototype.start = function () {
                this._actHandle && (this._actHandle.stop(), (this._actHandle = null)),
                    m.wxMgr.showBanner({openUi: c.ViewUrl.CoinBoxView, placementName: ""}),
                    (this._actHandle = cc
                        .tween(this.light)
                        .repeatForever(cc.tween().to(4, {angle: 360}).set({angle: 0}))
                        .start());
                var e = 10101e3 + (g.playData.getLevel() > 50 ? 50 : g.playData.getLevel()),
                    t = h.JsonMgr.getPatrolById(e);
                (this._addCoin = Number(t.idfixed.split("|")[1]) * d.CoinBoxMgr.getCoinBoxValue()),
                    (this.labelNum.string = "x" + this._addCoin);
            }),
            (t.prototype.onClickCancel = function () {
                u.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), this.closeView();
            }),
            (t.prototype.onClickGain = function () {
                var e = this;
                u.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH),
                    m.wxMgr.createVideo(
                        {placementName: "AdCoinBox", openUi: "CoinBoxView", level: g.playData.getLevel()},
                        function () {},
                        function () {
                            d.CoinBoxMgr.setCoinBoxCd();
                            var t = [];
                            t.push({id: 1001, count: Number(e._addCoin)}),
                                g.playData.addGold(Number(e._addCoin)),
                                p.analyMgr.reportGetGold(Number(e._addCoin), "CoinBox"),
                                r.UIMgr.showView(c.ViewUrl.commonRewardView, null, t),
                                e.closeView();
                        }
                    );
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this),
                    m.wxMgr.hideBanner(),
                    this._actHandle && (this._actHandle.stop(), (this._actHandle = null));
            }),
            i([v(cc.Node)], t.prototype, "aniNode", void 0),
            i([v(cc.Node)], t.prototype, "light", void 0),
            i([v(cc.Label)], t.prototype, "labelNum", void 0),
            i([y], t)
        );
    })(l.GameComponent);
o.default = M;
