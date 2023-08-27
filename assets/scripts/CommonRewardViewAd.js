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
var r = e("GameComponent"),
    s = e("ViewUrl"),
    c = e("PoolManager"),
    l = e("CommonRewardItem"),
    p = e("audioManager"),
    u = e("audioConst"),
    d = e("PlayerData"),
    h = e("AutoPopManager"),
    g = e("UIManager"),
    m = e("WxManager"),
    f = cc._decorator,
    y = f.ccclass,
    v = f.property,
    M = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.commonRewardItem = null),
                (t.mask = null),
                (t.layout = null),
                (t.data = null),
                (t.isAutoPop = !1),
                (t.successCall = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onEnable = function () {
                this.init(), this.onShowPlay(2, this.aniNode);
            }),
            (t.prototype.start = function () {
                m.wxMgr.showBanner({openUi: s.ViewUrl.commonRewardViewAd, placementName: ""});
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), m.wxMgr.hideBanner();
            }),
            (t.prototype.init = function () {
                var e = this;
                if (
                    ((this.data = this.node.data),
                    (this.isAutoPop = this.node.isAutoPop),
                    (this.successCall = this.node.successCall),
                    this.data.length < 5)
                ) {
                    var t = this.layout.getComponent(cc.Layout);
                    (t.type = cc.Layout.Type.HORIZONTAL),
                        (t.resizeMode = cc.Layout.ResizeMode.CONTAINER),
                        (t.paddingLeft = 5),
                        (t.spacingX = 15),
                        t.updateLayout();
                }
                this.data.forEach(function (t, o) {
                    var n = c.poolMgr.getNodeFromMap(e.commonRewardItem);
                    e.layout.addChild(n), n.getComponent(l.default).init(o, t.id, t.count, !1);
                });
            }),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.commonRewardViewAd;
            }),
            (t.prototype.onClickReward = function () {
                p.audioMgr.startEffect(u.AudioConst.COMMON_TOUCH),
                    this.successCall && this.successCall(1),
                    this._showReward(1),
                    this.closeView(this.isAutoPop);
            }),
            (t.prototype.onClickDoubleReward = function () {
                var e = this,
                    t = this.isAutoPop ? "back" : "ChallengeMap";
                p.audioMgr.startEffect(u.AudioConst.COMMON_TOUCH),
                    m.wxMgr.createVideo(
                        {placementName: t, openUi: "CommonRewardViewAd", level: d.playData.getLevel()},
                        function () {},
                        function () {
                            e.successCall && e.successCall(2), e._showReward(2), e.closeView(e.isAutoPop);
                        }
                    );
            }),
            (t.prototype._showReward = function (e) {
                void 0 === e && (e = 1);
                for (var t = [], o = 0; o < this.data.length; o++) {
                    var n = this.data[o];
                    if (n)
                        if (1001 == n.id) t.push({id: n.id, count: n.count * e});
                        else if (1002 == n.id) t.push({id: n.id, count: n.count * e});
                        else if (1003 == n.id) t.push({id: n.id, count: n.count * e});
                        else if (1014 == n.id) t.push({id: n.id, count: n.count * e});
                        else if (n.id > 1e4 && n.id < 10010) t.push({id: n.id, count: n.count * e});
                        else if (n.id > 1e5 && n.id < 9e5)
                            for (var a = 0; a < n.count; a++) for (var i = 0; i < e; i++) t.push({id: n.id, count: 1});
                }
                if (t.length > 0)
                    if (this.isAutoPop) {
                        var r = {id: h.DIALOGPOP.COMMON_REWARD, url: s.ViewUrl.commonRewardView, param: t};
                        h.AutoPopMgr.addAutoPop(r, !0);
                    } else g.UIMgr.showView(s.ViewUrl.commonRewardView, null, t);
            }),
            i([v(cc.Node)], t.prototype, "aniNode", void 0),
            i([v(cc.Prefab)], t.prototype, "commonRewardItem", void 0),
            i([v(cc.Node)], t.prototype, "mask", void 0),
            i([v(cc.Node)], t.prototype, "layout", void 0),
            i([y], t)
        );
    })(r.GameComponent);
o.default = M;
