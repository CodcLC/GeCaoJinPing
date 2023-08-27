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
    s = e("ViewUrl"),
    c = e("GameComponent"),
    l = e("PoolManager"),
    p = e("ItemManager"),
    u = e("JsonManager"),
    d = e("PlayerData"),
    h = e("WxManager"),
    g = e("CommonRewardItem"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.normalGet = null),
                (t.doubleGet = null),
                (t.contentView = null),
                (t.item = null),
                (t.rewardData = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.failCompelGuide;
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), h.wxMgr.hideBanner();
            }),
            (t.prototype.start = function () {
                var e = this;
                h.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""}),
                    (this.rewardData = u.JsonMgr.getDefineConstantByName("FailReward")),
                    this.normalGet.on(cc.Node.EventType.TOUCH_END, function () {
                        e.onNormalBtn();
                    }),
                    this.doubleGet.on(cc.Node.EventType.TOUCH_END, function () {
                        e.onDoubleBtn();
                    }),
                    this.showReward();
            }),
            (t.prototype.showReward = function () {
                var e = this;
                this.rewardData.split(",").forEach(function (t, o) {
                    var n = t.split("|"),
                        a = l.poolMgr.getNodeFromMap(e.item);
                    e.contentView.addChild(a), a.getComponent(g.default).init(o, Number(n[0]), Number(n[1]), !1);
                });
            }),
            (t.prototype.onNormalBtn = function () {
                this.getReward(1);
            }),
            (t.prototype.onDoubleBtn = function () {
                var e = this;
                h.wxMgr.createVideo(
                    {placementName: "AdFailReward", openUi: "FailCpmpelGuide", level: d.playData.getLevel()},
                    function () {},
                    function () {
                        e.getReward(2);
                    }
                );
            }),
            (t.prototype.getReward = function (e) {
                for (var t = this.rewardData.split(","), o = [], n = 0; n < e; n++)
                    t.forEach(function (e) {
                        var t = e.split("|"),
                            n = Number(t[0]),
                            a = Number(t[1]);
                        o.push({id: n, count: a}), p.itemMgr.addItemData(n, a, "FailReward");
                    });
                this.closeView(), r.UIMgr.showView(s.ViewUrl.commonRewardView, null, o), d.playData.addFailGuideStep();
            }),
            i([y(cc.Node)], t.prototype, "aniNode", void 0),
            i([y(cc.Node)], t.prototype, "normalGet", void 0),
            i([y(cc.Node)], t.prototype, "doubleGet", void 0),
            i([y(cc.Node)], t.prototype, "contentView", void 0),
            i([y(cc.Prefab)], t.prototype, "item", void 0),
            i([f], t)
        );
    })(c.GameComponent);
o.default = v;
