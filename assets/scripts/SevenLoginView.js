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
    c = e("ViewUrl"),
    l = e("GameComponent"),
    p = e("TimeUtil"),
    u = e("AnalyticsManager"),
    d = e("audioManager"),
    h = e("PlayerData"),
    g = e("SevenLoginManager"),
    m = e("WxManager"),
    f = e("SevenLoginItem"),
    y = cc._decorator,
    v = y.ccclass,
    M = y.property,
    _ = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.closeBtn = null),
                (t.itemPrefab = null),
                (t.rewardContent = null),
                (t.nextTimeStr = null),
                (t.btnSp = null),
                (t.timeLayout = null),
                (t.isAutoPop = !1),
                (t._refresh = function () {
                    t._refreshNextTime(), t._refreshItem(), t._refreshBtnState();
                }),
                (t._refreshNextTime = function () {
                    g.SevenLoginMgr.isTodayRewarded() && g.SevenLoginMgr.getCanNextReward()
                        ? ((t.timeLayout.active = !0),
                          t._refreshTime(),
                          t.schedule(t._refreshTime, 1, cc.macro.REPEAT_FOREVER))
                        : (t.unschedule(t._refreshTime), (t.timeLayout.active = !1));
                }),
                (t._refreshTime = function () {
                    var e = g.SevenLoginMgr.getNextRewardTime() - Date.now();
                    if (e <= 0) return t.unschedule(t._refreshTime), void t._refresh();
                    t.nextTimeStr.string = p.TimeUtil.timeConvertToDDHHMMSS(e);
                }),
                (t._refreshItem = function () {
                    t.rewardContent.children.forEach(function (e) {
                        e.getComponent(f.default).refresh();
                    });
                }),
                (t._refreshBtnState = function () {
                    if (g.SevenLoginMgr.isTodayRewardedExtra()) {
                        var e = cc.Material.getBuiltinMaterial("2d-gray-sprite");
                        t.btnSp.setMaterial(0, e);
                    } else (e = cc.Material.getBuiltinMaterial("2d-sprite")), t.btnSp.setMaterial(0, e);
                }),
                (t.closeDialog = function () {
                    t.closeView(t.isAutoPop);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.SevenLoginView;
            }),
            (t.prototype.onLoad = function () {
                var e = this;
                this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    d.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH), e.checkReward();
                }),
                    this.addEvent(s.ClientEvents.SEVEN_LOGIN_REFRESH.on(this._refresh));
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(1, this.aniNode);
            }),
            (t.prototype.start = function () {
                m.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""});
                for (var e = 1; e <= 7; e++) {
                    var t = cc.instantiate(this.itemPrefab);
                    (t.active = !0), t.getComponent(f.default).init(e), (t.parent = this.rewardContent);
                }
                (this.isAutoPop = this.node.isAutoPop), this._refresh();
            }),
            (t.prototype.checkReward = function () {
                if (!g.SevenLoginMgr.isTodayRewarded() && g.SevenLoginMgr.isLeftCanReward()) {
                    var e = g.SevenLoginMgr.getCanNextReward(),
                        t = g.SevenLoginMgr.getRewardsById(e.id.toString()),
                        o = t.reward.split(";");
                    g.SevenLoginMgr.doReceive(o, 1, Boolean(this.isAutoPop)),
                        g.SevenLoginMgr.GetReward(e.id),
                        u.analyMgr.reportLoginReweard(e.id, e.id, t.reward, !1);
                }
                this.closeDialog();
            }),
            (t.prototype.OnClickExtraReward = function () {
                var e = this;
                d.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH),
                    g.SevenLoginMgr.isTodayRewardedExtra() ||
                        m.wxMgr.createVideo(
                            {placementName: "SevenLoginExtra", openUi: "SevenLoginView", level: h.playData.getLevel()},
                            function () {},
                            function () {
                                var t = null,
                                    o = null;
                                if (g.SevenLoginMgr.isTodayRewarded()) {
                                    if (!(t = g.SevenLoginMgr.getTodayExtraReward())) return;
                                    (i = a =
                                        (o = g.SevenLoginMgr.getRewardsById(t.id.toString())).extrareward.split(",")),
                                        g.SevenLoginMgr.doReceive(i, 1, Boolean(e.isAutoPop)),
                                        g.SevenLoginMgr.GetRewardExtra(t.id),
                                        (r = i.join(";")),
                                        u.analyMgr.reportLoginReweard(t.id, t.id, r, !0);
                                } else {
                                    if (!(t = g.SevenLoginMgr.getCanNextReward())) return;
                                    var n = (o = g.SevenLoginMgr.getRewardsById(t.id.toString())).reward.split(";"),
                                        a = o.extrareward.split(","),
                                        i = n.concat(a);
                                    g.SevenLoginMgr.doReceive(i, 1, Boolean(e.isAutoPop)),
                                        g.SevenLoginMgr.GetReward(t.id, !0);
                                    var r = i.join(";");
                                    u.analyMgr.reportLoginReweard(t.id, t.id, r, !0);
                                }
                                e.closeDialog();
                            }
                        );
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), m.wxMgr.hideBanner(), this.unschedule(this._refreshTime);
            }),
            i([M(cc.Node)], t.prototype, "aniNode", void 0),
            i([M(cc.Node)], t.prototype, "closeBtn", void 0),
            i([M(cc.Prefab)], t.prototype, "itemPrefab", void 0),
            i([M(cc.Node)], t.prototype, "rewardContent", void 0),
            i([M(cc.Label)], t.prototype, "nextTimeStr", void 0),
            i([M(cc.Sprite)], t.prototype, "btnSp", void 0),
            i([M(cc.Node)], t.prototype, "timeLayout", void 0),
            i([v], t)
        );
    })(l.GameComponent);
o.default = _;
