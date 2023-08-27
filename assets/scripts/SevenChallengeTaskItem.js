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
    s = e("ClientEvents"),
    c = e("ViewUrl"),
    l = e("AnalyticsManager"),
    p = e("CommonUtil"),
    u = e("challengeManager"),
    d = e("HeroData"),
    h = e("JsonManager"),
    g = e("LanguageManager"),
    m = e("PlayerData"),
    f = e("ResManager"),
    y = e("SevenChallengeManager"),
    v = cc._decorator,
    M = v.ccclass,
    _ = v.property,
    C = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.taskDesc = null),
                (t.bar = null),
                (t.progressTxt = null),
                (t.rewardNodes = []),
                (t.getNormal = null),
                (t.alreadyGet = null),
                (t.noAchieve = null),
                (t._index = 0),
                (t._data = null),
                (t._info = null),
                (t.drawIdArr = []),
                (t.drawRateArr = []),
                (t.equipIdArr = []),
                (t.equipRateArr = []),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                if (
                    ((this._index = e),
                    (this._data = y.SevenChallengeMgr.getTaskData()[e]),
                    (this._info = y.SevenChallengeMgr.getTaskInfoById(this._data.id)),
                    this._info)
                ) {
                    this._initRate();
                    var t = this._info.taskdesc,
                        o = g.langMgr.getStr(t);
                    if (
                        ((o = o.replace("$", this._info.count.toString())),
                        (this.taskDesc.string = o),
                        Number(this._info.contenttype) >= 24 && Number(this._info.contenttype) <= 29)
                    ) {
                        var n = Number(this._info.contenttype) - 23;
                        this._data.state == y.SevenChallengeRewardState.NotFinish
                            ? ((this.bar.fillRange = this._data.count / n),
                              (this.progressTxt.string = this._data.count + " / " + n))
                            : ((this.bar.fillRange = 1), (this.progressTxt.string = n + " / " + n));
                    } else
                        this._data.state == y.SevenChallengeRewardState.NotFinish
                            ? ((this.bar.fillRange = this._data.count / this._info.count),
                              (this.progressTxt.string = this._data.count + " / " + this._info.count))
                            : ((this.bar.fillRange = 1),
                              (this.progressTxt.string = this._info.count + " / " + this._info.count));
                    for (var a = this._info.idfixed.split(","), i = 0; i < this.rewardNodes.length; i++) {
                        var r = this.rewardNodes[i],
                            s = a[i];
                        if (a[i]) {
                            r.active = !0;
                            var c = s.split("|"),
                                l = Number(c[0]),
                                p = Number(c[1]);
                            this._initReward(r, l, p);
                        } else r.active = !1;
                    }
                    this._refreshRewardState();
                } else console.error("id:" + this._data.id + " error in json!");
            }),
            (t.prototype._initReward = function (e, t, o) {
                var n = e.getChildByName("bg").getComponent(cc.Sprite),
                    a = e.getChildByName("icon").getComponent(cc.Sprite),
                    i = e.getChildByName("count").getComponent(cc.Label),
                    r = e.getChildByName("type_bg").getComponent(cc.Sprite),
                    s = e.getChildByName("type_bg").getChildByName("type_sp").getComponent(cc.Sprite);
                if (((r.node.active = !1), (s.node.active = !1), 1001 === t)) {
                    f.ResManager.loadGoldIcon(a);
                    var c = h.JsonMgr.getItemJsonById(t);
                    f.ResManager.loadQualityBg(c.quality, n), (i.string = "x" + o), a.node.setContentSize(60, 63);
                } else if (1002 === t)
                    (c = h.JsonMgr.getItemJsonById(t)),
                        f.ResManager.loadQualityBg(c.quality, n),
                        f.ResManager.loadItemCommon(t, a),
                        (i.string = "x" + o),
                        a.node.setContentSize(50, 59);
                else if (1003 === t)
                    (c = h.JsonMgr.getItemJsonById(t)),
                        f.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        f.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(46, 64);
                else if (1014 == t)
                    (c = h.JsonMgr.getItemJsonById(t)),
                        f.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        f.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(60, 60);
                else if (1015 === t)
                    (c = h.JsonMgr.getItemJsonById(t)),
                        f.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        f.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(42, 58);
                else if (1017 == t)
                    (c = h.JsonMgr.getItemJsonById(t)),
                        f.ResManager.loadQualityBg(c.quality, n),
                        f.ResManager.loadHeroExp(a),
                        a.node.setContentSize(60, 60);
                else if (2001 == t || 2002 == t || 2003 == t)
                    (c = h.JsonMgr.getItemJsonById(t)),
                        f.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        f.ResManager.loadStoreKeys(c.id, a),
                        a.node.setContentSize(60, 60);
                else if (3001 == t || 3002 == t || 3003 == t)
                    (c = h.JsonMgr.getItemJsonById(t)),
                        f.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        f.ResManager.loadHeroChip(t.toString(), a),
                        a.node.setContentSize(53, 57);
                else if (t > 1e5 && t < 9e5) {
                    var l = t - (Number(t % 100) - 1);
                    (c = h.JsonMgr.getJsonById("weapon", l)),
                        (r.node.active = !0),
                        (s.node.active = !0),
                        f.ResManager.loadEquipIcon(c.icon, a),
                        f.ResManager.loadQualityBg(c.grade, n),
                        f.ResManager.loadTypeBg(c.grade, r),
                        f.ResManager.loadTypeIcon(c.type, s),
                        (i.string = "x" + o),
                        a.node.setContentSize(cc.size(60, 60));
                } else
                    t > 1e4 && t < 10010
                        ? (f.ResManager.loadQualityBg(1, n),
                          f.ResManager.loadMapIcon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(56, 48)))
                        : 1010303 == t
                        ? (f.ResManager.loadQualityBg(1, n),
                          f.ResManager.loadItemCommon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(56, 48)))
                        : 1010304 == t &&
                          (f.ResManager.loadQualityBg(1, n),
                          f.ResManager.loadItemCommon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(59, 58)));
            }),
            (t.prototype._refreshRewardState = function () {
                (this.noAchieve.active = this._data.state == y.SevenChallengeRewardState.NotFinish),
                    (this.getNormal.active = this._data.state == y.SevenChallengeRewardState.Finish),
                    (this.alreadyGet.active = this._data.state == y.SevenChallengeRewardState.Rward),
                    y.SevenChallengeMgr.getCurGameState() >= y.SevenChallengeGameState.Reward
                        ? (this.noAchieve.getComponent(cc.Label).string = g.langMgr.getStr("UI_Seven_Challenge_10"))
                        : (this.noAchieve.getComponent(cc.Label).string = g.langMgr.getStr("UI_Seven_Challenge_7"));
            }),
            (t.prototype.onClickGetNormal = function () {
                this._doReceive(), this._completeTask(), this._refreshRewardState(), this._reportSevenChallengeFinish();
            }),
            (t.prototype._doReceive = function (e) {
                void 0 === e && (e = 1);
                for (
                    var t = [],
                        o = this._info.idfixed.split(","),
                        n = [],
                        a = function (a) {
                            var r = o[a];
                            if (r) {
                                var s = r.split("|");
                                if (2 != s.length) return console.error("reward config error!"), {value: void 0};
                                var c = Number(s[0]),
                                    h = Number(s[1]);
                                if (1001 == c)
                                    n.push({id: c, count: h * e}),
                                        t.push(c + "|" + h * e),
                                        m.playData.addGold(h * e),
                                        l.analyMgr.reportGetGold(h * e, "SevenChallenge");
                                else if (1002 == c)
                                    n.push({id: c, count: h * e}),
                                        t.push(c + "|" + h * e),
                                        m.playData.addGem(h * e),
                                        l.analyMgr.reportGetGem(h * e, "SevenChallenge");
                                else if (1003 == c)
                                    n.push({id: c, count: h * e}),
                                        t.push(c + "|" + h * e),
                                        m.playData.addEnergy(h * e),
                                        l.analyMgr.reportGetEnergy(h * e, "SevenChallenge");
                                else if (1014 == c)
                                    n.push({id: c, count: h * e}),
                                        u.challengeMgr.addPropeller(h * e),
                                        l.analyMgr.reportGetItem("Booster", c, Number(h * e), "SevenChallenge");
                                else if (1015 == c)
                                    n.push({id: c, count: h * e}),
                                        t.push(c + "|" + h * e),
                                        y.SevenChallengeMgr.addChallengePoint(h * e);
                                else if (1017 == c)
                                    n.push({id: c, count: h * e}),
                                        m.playData.addHeroExperience(h * e),
                                        l.analyMgr.reportGetItem("HeroExp", c, h * e, "SevenChallenge");
                                else if (2001 == c)
                                    n.push({id: c, count: h * e}),
                                        m.playData.addNormalKey(h * e),
                                        l.analyMgr.reportGetItem("Key", c, h * e, "SevenChallenge");
                                else if (2002 == c)
                                    n.push({id: c, count: h * e}),
                                        m.playData.addSuperKey(h * e),
                                        l.analyMgr.reportGetItem("Key", c, h * e, "SevenChallenge");
                                else if (2003 == c)
                                    n.push({id: c, count: h * e}),
                                        m.playData.addSSRKey(h * e),
                                        l.analyMgr.reportGetItem("Key", c, h * e, "SevenChallenge");
                                else if (3001 == c || 3002 == c || 3003 == c)
                                    n.push({id: c, count: h * e}),
                                        m.playData.addHeroDebris(c, h * e),
                                        l.analyMgr.reportGetItem("Hero", c, h * e, "SevenChallenge");
                                else if (c > 1e4 && c < 10010)
                                    n.push({id: c, count: h * e}), d.heroData.addMap(c, h * e);
                                else if (c > 1e5 && c < 9e5)
                                    for (var g = 0; g < h; g++)
                                        for (var f = 0; f < e; f++)
                                            n.push({id: c, count: 1}), d.heroData.addEquip(c, 1);
                                else if (1010303 == c) {
                                    var v = {};
                                    for (g = 0; g < h * e; g++) {
                                        var M = p.CommonUtil.getWeightRandom(i.drawRateArr),
                                            _ = i.drawIdArr[M];
                                        v[_] ? (v[_] = v[_] + 1) : (v[_] = 1);
                                    }
                                    Object.keys(v).map(function (e) {
                                        var t = v[e];
                                        n.push({id: Number(e), count: t}), d.heroData.addMap(Number(e), t);
                                    });
                                } else if (1010304 == c)
                                    for (g = 0; g < h * e; g++) {
                                        M = p.CommonUtil.getWeightRandom(i.equipRateArr);
                                        var C = i.equipIdArr[M];
                                        n.push({id: Number(C), count: 1}), d.heroData.addEquip(Number(C), 1);
                                    }
                            }
                        },
                        i = this,
                        s = 0;
                    s < o.length;
                    s++
                ) {
                    var h = a(s);
                    if ("object" == typeof h) return h.value;
                }
                l.analyMgr.reportSevenReward(this._data.id, y.SevenChallengeMgr.getChallengePoint(), t.join(";")),
                    r.UIMgr.showView(c.ViewUrl.commonRewardView, null, n);
            }),
            (t.prototype._initRate = function () {
                var e = this;
                (this.drawIdArr = []),
                    (this.drawRateArr = []),
                    (this.equipIdArr = []),
                    (this.equipRateArr = []),
                    h.JsonMgr.getPoolById(1010303)
                        .idrate.split(";")
                        .forEach(function (t) {
                            e.drawIdArr.push(Number(t.split("|")[0])), e.drawRateArr.push(Number(t.split("|")[2]));
                        }),
                    h.JsonMgr.getPoolById(1010304)
                        .idrate.split(";")
                        .forEach(function (t) {
                            e.equipIdArr.push(Number(t.split("|")[0])), e.equipRateArr.push(Number(t.split("|")[2]));
                        });
            }),
            (t.prototype._completeTask = function () {
                y.SevenChallengeMgr.setTaskStateDatas(this._data.id, y.SevenChallengeRewardState.Rward),
                    s.ClientEvents.SEVEN_CHALLENGE_REFRESH_TASK.emit(),
                    s.ClientEvents.SEVEN_CHALLENGE_REFRESH_RED.emit(),
                    s.ClientEvents.SEVEN_CHALLENGE_REFRESH_POINT.emit(),
                    s.ClientEvents.SEVEN_CHALLENGE_TAB_FINISH.emit();
            }),
            (t.prototype._reportSevenChallengeFinish = function () {
                for (var e = this._info.idfixed.split(","), t = 0, o = 0; o < e.length; o++) {
                    var n = e[o].split("|");
                    1015 == Number(n[0]) && (t = Number(n[1]));
                }
                l.analyMgr.reportSevenChallengeFinish(
                    this._data.id,
                    y.SevenChallengeMgr.getChallengePoint(),
                    y.SevenChallengeMgr.getUnlockDay(),
                    this._info.unlockday,
                    t
                );
            }),
            i([_(cc.Label)], t.prototype, "taskDesc", void 0),
            i([_(cc.Sprite)], t.prototype, "bar", void 0),
            i([_(cc.Label)], t.prototype, "progressTxt", void 0),
            i([_([cc.Node])], t.prototype, "rewardNodes", void 0),
            i([_(cc.Node)], t.prototype, "getNormal", void 0),
            i([_(cc.Node)], t.prototype, "alreadyGet", void 0),
            i([_(cc.Node)], t.prototype, "noAchieve", void 0),
            i([M], t)
        );
    })(cc.Component);
o.default = C;
