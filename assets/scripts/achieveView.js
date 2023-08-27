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
var r = e("ClientEvents"),
    s = e("BaseComponent"),
    c = e("List"),
    l = e("AchieveManager"),
    p = e("JsonManager"),
    u = e("LanguageManager"),
    d = e("ResManager"),
    h = cc._decorator,
    g = h.ccclass,
    m = h.property,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.levelLabel = null),
                (t.levelName = null),
                (t.levelProgressBar = null),
                (t.levelProgressTxt = null),
                (t.boxReward = null),
                (t.rewardTips = null),
                (t.rewardLayout = null),
                (t.rewadTemp = null),
                (t.achieveList = null),
                (t._refreshTaskData = function () {
                    var e = l.AchieveMgr.refreshTaskData();
                    t.achieveList.numItems = e.length;
                }),
                (t._refreshLevel = function () {
                    var e = l.AchieveMgr.getAchieveLevelJsonByLevel(l.AchieveMgr.getAchieveLevel());
                    t.levelLabel.string = e.level.toString();
                    var o = e.levelname;
                    o && (t.levelName.string = u.langMgr.getStr(o));
                    var n = e.idfixed1;
                    if (((t.boxReward.active = !!n), n)) {
                        t.rewardLayout.children.forEach(function (e) {
                            e.active = !1;
                        });
                        for (var a = n.split(","), i = 0; i < a.length; i++) {
                            var r;
                            t.rewardLayout.children[i]
                                ? (((r = t.rewardLayout.children[i]).active = !0), t._initTipReward(r, a[i]))
                                : (((r = cc.instantiate(t.rewadTemp)).active = !0),
                                  (r.parent = t.rewardLayout),
                                  t._initTipReward(r, a[i]));
                        }
                    }
                }),
                (t._initTipReward = function (e, t) {
                    var o = t.split("|"),
                        n = Number(o[0]),
                        a = Number(o[1]),
                        i = e.getChildByName("bg").getComponent(cc.Sprite),
                        r = e.getChildByName("icon").getComponent(cc.Sprite),
                        s = e.getChildByName("count").getComponent(cc.Label),
                        c = e.getChildByName("type_bg").getComponent(cc.Sprite),
                        l = e.getChildByName("type_bg").getChildByName("type_sp").getComponent(cc.Sprite);
                    if (((c.node.active = !1), (l.node.active = !1), 1001 === n)) {
                        d.ResManager.loadGoldIcon(r);
                        var u = p.JsonMgr.getItemJsonById(n);
                        d.ResManager.loadQualityBg(u.quality, i), (s.string = "x" + a), r.node.setContentSize(48, 50);
                    } else if (1002 === n)
                        (u = p.JsonMgr.getItemJsonById(n)),
                            d.ResManager.loadQualityBg(u.quality, i),
                            d.ResManager.loadItemCommon(n, r),
                            (s.string = "x" + a),
                            r.node.setContentSize(40, 48);
                    else if (1003 === n)
                        (u = p.JsonMgr.getItemJsonById(n)),
                            d.ResManager.loadQualityBg(u.quality, i),
                            (s.string = "x" + a),
                            d.ResManager.loadItemCommon(n, r),
                            r.node.setContentSize(37, 51);
                    else if (1014 == n)
                        (u = p.JsonMgr.getItemJsonById(n)),
                            d.ResManager.loadQualityBg(u.quality, i),
                            (s.string = "x" + a),
                            d.ResManager.loadItemCommon(n, r),
                            r.node.setContentSize(48, 48);
                    else if (1017 == n)
                        (u = p.JsonMgr.getItemJsonById(n)),
                            d.ResManager.loadQualityBg(u.quality, i),
                            (s.string = "x" + a),
                            d.ResManager.loadHeroExp(r),
                            r.node.setContentSize(48, 48);
                    else if (2001 == n || 2002 == n || 2003 == n)
                        (u = p.JsonMgr.getItemJsonById(n)),
                            d.ResManager.loadQualityBg(u.quality, i),
                            (s.string = "x" + a),
                            d.ResManager.loadStoreKeys(u.id, r),
                            r.node.setContentSize(48, 48);
                    else if (3001 == n || 3002 == n || 3003 == n)
                        (u = p.JsonMgr.getItemJsonById(n)),
                            d.ResManager.loadQualityBg(u.quality, i),
                            (s.string = "x" + a),
                            d.ResManager.loadHeroChip(n.toString(), r),
                            r.node.setContentSize(42, 46);
                    else if (n > 1e5 && n < 9e5) {
                        var h = n - (Number(n % 100) - 1);
                        (u = p.JsonMgr.getJsonById("weapon", h)),
                            (c.node.active = !0),
                            (l.node.active = !0),
                            d.ResManager.loadEquipIcon(u.icon, r),
                            d.ResManager.loadQualityBg(u.grade, i),
                            d.ResManager.loadTypeBg(u.grade, c),
                            d.ResManager.loadTypeIcon(u.type, l),
                            (s.string = "x" + a),
                            r.node.setContentSize(cc.size(48, 48));
                    } else
                        n > 1e4 && n < 10010
                            ? (d.ResManager.loadQualityBg(1, i),
                              d.ResManager.loadMapIcon(n, r),
                              (s.string = "x" + a),
                              r.node.setContentSize(cc.size(45, 39)))
                            : 1010303 == n
                            ? (d.ResManager.loadQualityBg(1, i),
                              d.ResManager.loadItemCommon(n, r),
                              (s.string = "x" + a),
                              r.node.setContentSize(cc.size(45, 39)))
                            : 1010304 == n &&
                              (d.ResManager.loadQualityBg(1, i),
                              d.ResManager.loadItemCommon(n, r),
                              (s.string = "x" + a),
                              r.node.setContentSize(cc.size(48, 48)));
                }),
                (t._refreshExp = function () {
                    var e = l.AchieveMgr.getAchieveExp(),
                        o = l.AchieveMgr.getAchieveLevelJsonByLevel(l.AchieveMgr.getAchieveLevel());
                    (t.levelProgressBar.progress = e / o.exp),
                        (t.levelProgressTxt.string = ((e / o.exp) * 100).toFixed(0) + "%");
                }),
                (t._refreshRewardTipsState = function (e) {
                    t.rewardTips.active = e;
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {
                var e = this;
                this.addEvent(r.ClientEvents.ACHIEVE_REFRESH_TASK.on(this._refreshTaskData)),
                    this.addEvent(r.ClientEvents.ACHIEVE_REFRESH_LEVEL.on(this._refreshLevel)),
                    this.addEvent(r.ClientEvents.ACHIEVE_REFRESH_EXP.on(this._refreshExp)),
                    this.rewardTips.on(cc.Node.EventType.TOUCH_START, function () {
                        e._refreshRewardTipsState(!1);
                    }),
                    this.boxReward.on(cc.Node.EventType.TOUCH_END, function () {
                        e._refreshRewardTipsState(!0);
                    });
            }),
            (t.prototype.onEnable = function () {
                this._refreshTaskData();
            }),
            (t.prototype.start = function () {
                this._refreshLevel(), this._refreshExp();
            }),
            i([m(cc.Label)], t.prototype, "levelLabel", void 0),
            i([m(cc.Label)], t.prototype, "levelName", void 0),
            i([m(cc.ProgressBar)], t.prototype, "levelProgressBar", void 0),
            i([m(cc.Label)], t.prototype, "levelProgressTxt", void 0),
            i([m(cc.Node)], t.prototype, "boxReward", void 0),
            i([m(cc.Node)], t.prototype, "rewardTips", void 0),
            i([m(cc.Node)], t.prototype, "rewardLayout", void 0),
            i([m(cc.Node)], t.prototype, "rewadTemp", void 0),
            i([m(c.default)], t.prototype, "achieveList", void 0),
            i([g], t)
        );
    })(s.BaseComponent);
o.default = f;
