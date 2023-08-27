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
var r = e("audioConst"),
    s = e("ClientEvents"),
    c = e("BaseComponent"),
    l = e("AnalyticsManager"),
    p = e("audioManager"),
    u = e("LanguageManager"),
    d = e("SevenLoginManager"),
    h = e("SevenLoginRewardItem"),
    g = cc._decorator,
    m = g.ccclass,
    f = g.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.rewardItemPrb = null),
                (t.normalRewardNode = null),
                (t.extraRewardNode = null),
                (t.titleLabel = null),
                (t.index = null),
                (t.left = null),
                (t.right = null),
                (t._rewardInfo = null),
                (t._id = -1),
                (t._refreshChoosed = function (e) {
                    var o = t._id == e;
                    (t.titleLabel.node.color = o
                        ? new cc.Color().fromHEX("#F2A40F")
                        : new cc.Color().fromHEX("#949CB4")),
                        (t.index.color = o ? new cc.Color().fromHEX("#FFBE46") : new cc.Color().fromHEX("#6D7487")),
                        (t.left.color = o ? new cc.Color().fromHEX("#5582D7") : new cc.Color().fromHEX("#545A6F")),
                        (t.right.color = o ? new cc.Color().fromHEX("#FDBE13") : new cc.Color().fromHEX("#6D7487"));
                }),
                (t._onClickItem = function () {
                    var e = d.SevenLoginMgr.getCanNextReward();
                    if (!d.SevenLoginMgr.isTodayRewarded() && e && t._id == e.id) {
                        p.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH);
                        var o = t._rewardInfo.reward.split(";");
                        d.SevenLoginMgr.doReceive(o, 1),
                            d.SevenLoginMgr.GetReward(t._id),
                            l.analyMgr.reportLoginReweard(t._id, t._id, t._rewardInfo.reward, !1);
                    }
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {
                this.addEvent(s.ClientEvents.SEVEN_LOGIN_ITEM.on(this._refreshChoosed));
            }),
            (t.prototype.init = function (e) {
                (this._id = e),
                    this.node.on(cc.Node.EventType.TOUCH_END, this._onClickItem),
                    (this._rewardInfo = d.SevenLoginMgr.getRewardsById(e.toString()));
                var t = u.langMgr.getStr("SevenLogin_Tips_2");
                (t = t.replace("$", e.toString())), (this.titleLabel.string = t);
                for (var o = this._rewardInfo.reward.split(";"), n = 0; n < o.length; n++) {
                    var a = o[n];
                    ((r = cc.instantiate(this.rewardItemPrb)).parent = this.normalRewardNode),
                        r.getComponent(h.default).init(this._id, a);
                }
                var i = this._rewardInfo.extrareward.split(",");
                for (n = 0; n < i.length; n++) {
                    var r;
                    (a = i[n]),
                        ((r = cc.instantiate(this.rewardItemPrb)).parent = this.extraRewardNode),
                        r.getComponent(h.default).init(this._id, a);
                }
                this.refresh();
            }),
            (t.prototype.refresh = function () {
                this.normalRewardNode.children.forEach(function (e) {
                    e.getComponent(h.default).refresh(!1);
                }),
                    this.extraRewardNode.children.forEach(function (e) {
                        e.getComponent(h.default).refresh(!0);
                    });
                var e = d.SevenLoginMgr.getCanNextReward(),
                    t = !d.SevenLoginMgr.isTodayRewarded() && e && this._id == e.id;
                (this.titleLabel.node.color = t
                    ? new cc.Color().fromHEX("#F2A40F")
                    : new cc.Color().fromHEX("#949CB4")),
                    (this.index.color = t ? new cc.Color().fromHEX("#FFBE46") : new cc.Color().fromHEX("#6D7487")),
                    (this.left.color = t ? new cc.Color().fromHEX("#5582D7") : new cc.Color().fromHEX("#545A6F")),
                    (this.right.color = t ? new cc.Color().fromHEX("#FDBE13") : new cc.Color().fromHEX("#6D7487"));
            }),
            i([f(cc.Prefab)], t.prototype, "rewardItemPrb", void 0),
            i([f(cc.Node)], t.prototype, "normalRewardNode", void 0),
            i([f(cc.Node)], t.prototype, "extraRewardNode", void 0),
            i([f(cc.Label)], t.prototype, "titleLabel", void 0),
            i([f(cc.Node)], t.prototype, "index", void 0),
            i([f(cc.Node)], t.prototype, "left", void 0),
            i([f(cc.Node)], t.prototype, "right", void 0),
            i([m], t)
        );
    })(c.BaseComponent);
o.default = y;
