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
    c = e("ClientEvents"),
    l = e("ViewUrl"),
    p = e("GameComponent"),
    u = e("CommonUtil"),
    d = e("AnalyticsManager"),
    h = e("audioManager"),
    g = e("challengeManager"),
    m = e("ChapterBoxManager"),
    f = e("HeroData"),
    y = e("JsonManager"),
    v = e("LanguageManager"),
    M = e("PlayerData"),
    _ = e("WxManager"),
    C = e("ChapterBoxItem"),
    b = e("ChapterBoxRewardItem"),
    T = cc._decorator,
    w = T.ccclass,
    N = T.property,
    E = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.chapterTxt = null),
                (t.rewardTxt = null),
                (t.getNormalBtn = null),
                (t.getAdsBtn = null),
                (t.ChapterBoxItemArray = []),
                (t.BoxRewardItemArray = []),
                (t.drawIdArr = []),
                (t.drawRateArr = []),
                (t.equipIdArr = []),
                (t.equipRateArr = []),
                (t.refresh = function () {
                    t._refreshChapterBoxItem(), t._refreshBoxRewardItem(), t._refreshRewardBtn();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return l.ViewUrl.ChapterBoxView;
            }),
            (t.prototype.onLoad = function () {
                this.addEvent(c.ClientEvents.CLOSE_FULL_VIEW.on(this.closeView)),
                    this.addEvent(c.ClientEvents.CHAPTERBOX_REFRESH.on(this.refresh));
            }),
            (t.prototype.start = function () {
                this.initRate(), this.refresh();
            }),
            (t.prototype.initRate = function () {
                var e = this;
                (this.drawIdArr = []),
                    (this.drawRateArr = []),
                    (this.equipIdArr = []),
                    (this.equipRateArr = []),
                    y.JsonMgr.getPoolById(1010303)
                        .idrate.split(";")
                        .forEach(function (t) {
                            e.drawIdArr.push(Number(t.split("|")[0])), e.drawRateArr.push(Number(t.split("|")[2]));
                        }),
                    y.JsonMgr.getPoolById(1010304)
                        .idrate.split(";")
                        .forEach(function (t) {
                            e.equipIdArr.push(Number(t.split("|")[0])), e.equipRateArr.push(Number(t.split("|")[2]));
                        });
            }),
            (t.prototype._refreshChapterBoxItem = function () {
                var e = m.ChapterBoxMgr.getPrevBoxData(),
                    t = m.ChapterBoxMgr.getCurBoxData(),
                    o = m.ChapterBoxMgr.getNextBoxData();
                e
                    ? ((this.ChapterBoxItemArray[0].active = !0),
                      this.ChapterBoxItemArray[0].getComponent(C.default).refreshUI(e))
                    : (this.ChapterBoxItemArray[0].active = !1),
                    t
                        ? ((this.ChapterBoxItemArray[1].active = !0),
                          this.ChapterBoxItemArray[1].getComponent(C.default).refreshUI(t))
                        : (this.ChapterBoxItemArray[1].active = !1),
                    o
                        ? ((this.ChapterBoxItemArray[2].active = !0),
                          this.ChapterBoxItemArray[2].getComponent(C.default).refreshUI(o))
                        : (this.ChapterBoxItemArray[2].active = !1);
                var n = m.ChapterBoxMgr.getOriginDataById(t.id),
                    a = v.langMgr.getStr("ChapterBox_Tips_2");
                (a = a.replace("$", n.levelid.toString())), (this.chapterTxt.string = a);
            }),
            (t.prototype._refreshBoxRewardItem = function () {
                var e = m.ChapterBoxMgr.getCurBoxData(),
                    t = m.ChapterBoxMgr.getOriginDataById(e.id);
                if (t && t.boxreward)
                    for (var o = t.boxreward.split(";"), n = 0; n < this.BoxRewardItemArray.length; n++) {
                        var a = this.BoxRewardItemArray[n],
                            i = o[n];
                        i ? ((a.active = !0), a.getComponent(b.default).refresh(i)) : (a.active = !1);
                    }
            }),
            (t.prototype._refreshRewardBtn = function () {
                var e = m.ChapterBoxMgr.getCurBoxData(),
                    t = m.ChapterBoxMgr.getOriginDataById(e.id);
                if (e.state == m.ChapterBoxState.Rwarded)
                    (this.rewardTxt.node.active = !1), (this.getNormalBtn.active = !1), (this.getAdsBtn.active = !1);
                else if (e.state == m.ChapterBoxState.Finish)
                    (this.rewardTxt.node.active = !1), (this.getNormalBtn.active = !0), (this.getAdsBtn.active = !0);
                else if (e.state == m.ChapterBoxState.NotFinish) {
                    (this.rewardTxt.node.active = !0), (this.getNormalBtn.active = !1), (this.getAdsBtn.active = !1);
                    var o = v.langMgr.getStr("ChapterBox_Tips_6");
                    (o = o.replace("$", t.levelid.toString())),
                        -1 != t.boxtime &&
                            (o = (o = v.langMgr.getStr("ChapterBox_Tips_7")).replace("$", t.boxtime.toString())),
                        (this.rewardTxt.string = o);
                }
            }),
            (t.prototype.onClickClose = function () {
                h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), this.closeView();
            }),
            (t.prototype.onClickReceive = function () {
                h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), this._doReceive(1);
            }),
            (t.prototype.onClickAdReceive = function () {
                var e = this;
                _.wxMgr.createVideo(
                    {placementName: "AdChapterBox", openUi: "ChapterBoxView", level: M.playData.getLevel()},
                    function () {},
                    function () {
                        h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e._doReceive(2);
                    }
                );
            }),
            (t.prototype._doReceive = function (e) {
                void 0 === e && (e = 1);
                for (
                    var t = m.ChapterBoxMgr.getCurBoxData(),
                        o = m.ChapterBoxMgr.getOriginDataById(t.id),
                        n = [],
                        a = o.boxreward.split(";"),
                        i = function (t) {
                            var o = a[t];
                            if (o) {
                                var i = o.split("|");
                                if (2 != i.length) return console.error("reward config error!"), {value: void 0};
                                var r = Number(i[0]),
                                    c = Number(i[1]);
                                if (1001 == r)
                                    n.push({id: r, count: c * e}),
                                        M.playData.addGold(c * e),
                                        d.analyMgr.reportGetGold(c * e, "ChapterChest");
                                else if (1002 == r)
                                    n.push({id: r, count: c * e}),
                                        M.playData.addGem(c * e),
                                        d.analyMgr.reportGetGem(c * e, "ChapterChest");
                                else if (1003 == r) n.push({id: r, count: c * e}), M.playData.addEnergy(c * e);
                                else if (1014 == r) n.push({id: r, count: c * e}), g.challengeMgr.addPropeller(c * e);
                                else if (1017 == r) n.push({id: r, count: c * e}), M.playData.addHeroExperience(c * e);
                                else if (2001 == r) n.push({id: r, count: c * e}), M.playData.addNormalKey(c * e);
                                else if (2002 == r) n.push({id: r, count: c * e}), M.playData.addSuperKey(c * e);
                                else if (2003 == r) n.push({id: r, count: c * e}), M.playData.addSSRKey(c * e);
                                else if (3001 == r || 3002 == r || 3003 == r)
                                    n.push({id: r, count: c * e}), M.playData.addHeroDebris(r, c * e);
                                else if (r > 1e4 && r < 10010)
                                    n.push({id: r, count: c * e}),
                                        f.heroData.addMap(r, c * e),
                                        d.analyMgr.reportGetItem("Blueprint", r, c * e, "ChapterChest");
                                else if (r > 1e5 && r < 9e5)
                                    for (var l = 0; l < c; l++) {
                                        for (var p = 0; p < e; p++)
                                            n.push({id: r, count: 1}), f.heroData.addEquip(r, 1);
                                        d.analyMgr.reportGetItem("Weapon", r, e, "ChapterChest");
                                    }
                                else if (1010303 == r) {
                                    var h = {};
                                    for (l = 0; l < c * e; l++) {
                                        var m = u.CommonUtil.getWeightRandom(s.drawRateArr),
                                            y = s.drawIdArr[m];
                                        h[y] ? (h[y] = h[y] + 1) : (h[y] = 1);
                                    }
                                    Object.keys(h).map(function (e) {
                                        var t = h[e];
                                        n.push({id: Number(e), count: t}),
                                            f.heroData.addMap(Number(e), t),
                                            d.analyMgr.reportGetItem("Blueprint", Number(e), t, "ChapterChest");
                                    });
                                } else if (1010304 == r)
                                    for (l = 0; l < c * e; l++) {
                                        m = u.CommonUtil.getWeightRandom(s.equipRateArr);
                                        var v = s.equipIdArr[m];
                                        n.push({id: Number(v), count: 1}),
                                            f.heroData.addEquip(Number(v), 1),
                                            d.analyMgr.reportGetItem("Weapon", Number(v), 1, "ChapterChest");
                                    }
                            }
                        },
                        s = this,
                        c = 0;
                    c < a.length;
                    c++
                ) {
                    var p = i(c);
                    if ("object" == typeof p) return p.value;
                }
                r.UIMgr.showView(l.ViewUrl.commonRewardView, null, n),
                    m.ChapterBoxMgr.setCurBoxStatus(t.id, m.ChapterBoxState.Rwarded);
                var h = -1 == o.boxtime ? "PassChest" : "LiveChest";
                d.analyMgr.reportGetLevelBox(o.id, o.levelid, this.initReportRewardStr(o.boxreward, e), h);
            }),
            (t.prototype.initReportRewardStr = function (e, t) {
                void 0 === t && (t = 1);
                for (var o = e.split(";"), n = "", a = 0; a < o.length; a++) {
                    var i = o[a];
                    if (i) {
                        var r = i.split("|");
                        if (2 != r.length) continue;
                        var s = Number(r[0]),
                            c = Number(r[1]);
                        (c *= t), (n += s.toString() + "|" + c.toString()), a != o.length - 1 && (n += ";");
                    }
                }
                return n;
            }),
            i([N(cc.Label)], t.prototype, "chapterTxt", void 0),
            i([N(cc.Label)], t.prototype, "rewardTxt", void 0),
            i([N(cc.Node)], t.prototype, "getNormalBtn", void 0),
            i([N(cc.Node)], t.prototype, "getAdsBtn", void 0),
            i([N([cc.Node])], t.prototype, "ChapterBoxItemArray", void 0),
            i([N([cc.Node])], t.prototype, "BoxRewardItemArray", void 0),
            i([w], t)
        );
    })(p.GameComponent);
o.default = E;
