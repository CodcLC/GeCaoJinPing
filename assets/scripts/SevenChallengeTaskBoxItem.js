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
    p = e("BaseComponent"),
    u = e("CommonUtil"),
    d = e("AnalyticsManager"),
    h = e("audioManager"),
    g = e("challengeManager"),
    m = e("EquipmentConfig"),
    f = e("HeroData"),
    y = e("JsonManager"),
    v = e("PlayerData"),
    M = e("ResManager"),
    _ = e("SevenChallengeManager"),
    C = cc._decorator,
    b = C.ccclass,
    T = C.property,
    w = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.box1 = null),
                (t.box2 = null),
                (t.equipNode = null),
                (t.equipIcon = null),
                (t.ssrNode = null),
                (t.point = null),
                (t.materialGray = null),
                (t.materialNormal = null),
                (t._actHandle = null),
                (t._key = ""),
                (t._id = -1),
                (t._num = -1),
                (t._isEquip = !1),
                (t._state = _.SevenChallengeRewardState.NotFinish),
                (t._refreshState = function () {
                    if (t._isEquip) {
                        t._state = _.SevenChallengeMgr.getBoxRewardState(t._key);
                        var e = t._state == _.SevenChallengeRewardState.Rward ? t.materialGray : t.materialNormal;
                        return (
                            t.equipNode.getComponent(cc.Sprite).setMaterial(0, e),
                            t.equipIcon.setMaterial(0, e),
                            void t.ssrNode.getComponent(cc.Sprite).setMaterial(0, e)
                        );
                    }
                    t._actHandle && (t._actHandle.stop(), (t._actHandle = null)),
                        (t._state = _.SevenChallengeMgr.getBoxRewardState(t._key)),
                        t._state == _.SevenChallengeRewardState.NotFinish
                            ? ((t.box1.active = !0),
                              (t.box2.active = !1),
                              t.box1.getComponent(cc.Sprite).setMaterial(0, t.materialGray))
                            : t._state == _.SevenChallengeRewardState.Finish
                            ? ((t.box1.active = !0),
                              (t.box2.active = !1),
                              t.box1.getComponent(cc.Sprite).setMaterial(0, t.materialNormal),
                              (t._actHandle = cc
                                  .tween(t.box1)
                                  .repeatForever(
                                      cc
                                          .tween()
                                          .delay(0.1 * Math.floor(3 * Math.random()) + 0.1)
                                          .to(
                                              0.15,
                                              {angle: Math.floor(10 * Math.random()) + 5},
                                              {easing: cc.easing.backIn}
                                          )
                                          .to(0.15, {angle: 0}, {easing: cc.easing.backOut})
                                          .to(
                                              0.15,
                                              {angle: -(Math.floor(10 * Math.random()) + 5)},
                                              {easing: cc.easing.backIn}
                                          )
                                          .to(0.15, {angle: 0}, {easing: cc.easing.backOut})
                                          .delay(0.5)
                                  )
                                  .start()))
                            : t._state == _.SevenChallengeRewardState.Rward &&
                              ((t.box1.active = !1),
                              (t.box2.active = !0),
                              t.box1.getComponent(cc.Sprite).setMaterial(0, t.materialNormal));
                }),
                (t.drawIdArr = []),
                (t.drawRateArr = []),
                (t.equipIdArr = []),
                (t.equipRateArr = []),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e, t) {
                this._key = e;
                var o = t.split("|");
                (this._id = Number(o[0])),
                    (this._num = Number(o[1])),
                    (this._state = _.SevenChallengeMgr.getBoxRewardState(this._key)),
                    (this._isEquip = this._checkIsEquip(this._id)),
                    (this.ssrNode.active = !1),
                    this._initRate(),
                    this._initBoxType(),
                    this._initBoxInfo(),
                    this._initBoxSize(),
                    this._refreshState();
            }),
            (t.prototype._initBoxType = function () {
                (this.box1.active = !this._isEquip),
                    (this.box2.active = !this._isEquip),
                    (this.equipNode.active = this._isEquip),
                    (this.point.string = this._key);
            }),
            (t.prototype._initBoxInfo = function () {
                if (this._isEquip) {
                    var e = Number(this._id % 100),
                        t = this._id - (e - 1),
                        o = y.JsonMgr.getJsonById("weapon", t);
                    M.ResManager.loadEquipIcon(o.icon, this.equipIcon),
                        M.ResManager.loadQualityBg(o.grade, this.equipNode.getComponent(cc.Sprite));
                }
            }),
            (t.prototype._initBoxSize = function () {
                if (this._isEquip) {
                    var e = new m.EquipmentConfig();
                    e.init(this._id);
                    var t = {id: this._id, equipment: e, count: 1, dress: !1};
                    (this.ssrNode.active = t.equipment.getIsSSR()),
                        Number(this._key) == _.SevenChallengeMgr.getMaxJifen()
                            ? ((this.ssrNode.scale = 0.6),
                              this.node.setContentSize(cc.size(130, 130)),
                              this.equipNode.setContentSize(cc.size(130, 130)))
                            : ((this.ssrNode.scale = 0.3),
                              this.node.setContentSize(cc.size(70, 70)),
                              this.equipNode.setContentSize(cc.size(70, 70)));
                }
            }),
            (t.prototype.onLoad = function () {
                var e = this;
                this.addEvent(c.ClientEvents.SEVEN_CHALLENGE_REFRESH_BOX.on(this._refreshState)),
                    this.node.on(cc.Node.EventType.TOUCH_END, function () {
                        if (
                            (h.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH),
                            (e._state = _.SevenChallengeMgr.getBoxRewardState(e._key)),
                            e._state == _.SevenChallengeRewardState.Finish)
                        )
                            e._doReceive(), c.ClientEvents.SEVEN_CHALLENGE_REFRESH_RED.emit();
                        else if (e._isEquip) {
                            c.ClientEvents.CHANGE_LOADING.emit(!0);
                            var t = new m.EquipmentConfig();
                            t.init(e._id);
                            var o = {id: e._id, equipment: t, count: 1, dress: !1};
                            r.UIMgr.showView(l.ViewUrl.SevenChallengeViewEquipTip, null, {data: o}, function () {
                                c.ClientEvents.CHANGE_LOADING.emit(!1);
                            });
                        } else
                            ((o = {}).id = e._id),
                                (o.num = e._num),
                                c.ClientEvents.CHANGE_LOADING.emit(!0),
                                r.UIMgr.showView(
                                    l.ViewUrl.SevenChallengeViewTip,
                                    null,
                                    {pos: e.node.convertToWorldSpaceAR(cc.v2(0, e.node.height / 2)), data: o},
                                    function () {
                                        c.ClientEvents.CHANGE_LOADING.emit(!1);
                                    }
                                );
                    });
            }),
            (t.prototype._doReceive = function () {
                var e = [],
                    t = [],
                    o = this._id,
                    n = this._num;
                if (1001 == o)
                    t.push({id: o, count: n}),
                        e.push(o + "|" + n),
                        v.playData.addGold(n),
                        d.analyMgr.reportGetGold(n, "SevenChallenge");
                else if (1002 == o)
                    t.push({id: o, count: n}),
                        e.push(o + "|" + n),
                        v.playData.addGem(n),
                        d.analyMgr.reportGetGem(n, "SevenChallenge");
                else if (1003 == o)
                    t.push({id: o, count: n}),
                        e.push(o + "|" + n),
                        v.playData.addEnergy(n),
                        d.analyMgr.reportGetEnergy(n, "SevenChallenge");
                else if (1014 == o) t.push({id: o, count: n}), g.challengeMgr.addPropeller(n);
                else if (1017 == o) t.push({id: o, count: n}), v.playData.addHeroExperience(n);
                else if (2001 == o) t.push({id: o, count: n}), v.playData.addNormalKey(n);
                else if (2002 == o) t.push({id: o, count: n}), v.playData.addSuperKey(n);
                else if (2003 == o) t.push({id: o, count: n}), v.playData.addSSRKey(n);
                else if (3001 == o || 3002 == o || 3003 == o) t.push({id: o, count: n}), v.playData.addHeroDebris(o, n);
                else if (1015 == o)
                    t.push({id: o, count: n}), e.push(o + "|" + n), _.SevenChallengeMgr.addChallengePoint(n);
                else if (o > 1e4 && o < 10010)
                    t.push({id: o, count: n}),
                        e.push(o + "|" + n),
                        f.heroData.addMap(o, n),
                        d.analyMgr.reportGetItem("Blueprint", Number(o), n, "SevenChallenge");
                else if (o > 1e5 && o < 9e5)
                    for (var a = 0; a < n; a++)
                        t.push({id: o, count: 1}),
                            e.push(o + "|1"),
                            f.heroData.addEquip(o, 1),
                            d.analyMgr.reportGetItem("Weapon", Number(o), 1, "SevenChallenge");
                else if (1010303 == o) {
                    var i = {};
                    for (a = 0; a < n; a++) {
                        var s = u.CommonUtil.getWeightRandom(this.drawRateArr),
                            c = this.drawIdArr[s];
                        i[c] ? (i[c] = i[c] + 1) : (i[c] = 1);
                    }
                    Object.keys(i).map(function (o) {
                        var n = i[o];
                        t.push({id: Number(o), count: n}),
                            e.push(o + "|" + n),
                            f.heroData.addMap(Number(o), n),
                            d.analyMgr.reportGetItem("Blueprint", Number(o), n, "SevenChallenge");
                    });
                } else if (1010304 == o)
                    for (a = 0; a < n; a++) {
                        s = u.CommonUtil.getWeightRandom(this.equipRateArr);
                        var p = this.equipIdArr[s];
                        t.push({id: Number(p), count: 1}),
                            e.push(p + "|1"),
                            f.heroData.addEquip(Number(p), 1),
                            d.analyMgr.reportGetItem("Weapon", Number(p), 1, "SevenChallenge");
                    }
                d.analyMgr.reportSevenReward(1, _.SevenChallengeMgr.getChallengePoint(), e.join(";")),
                    r.UIMgr.showView(l.ViewUrl.commonRewardView, null, t),
                    _.SevenChallengeMgr.setBoxRewardState(this._key, _.SevenChallengeRewardState.Rward);
            }),
            (t.prototype._checkIsEquip = function (e) {
                return e > 1e5 && e < 9e5;
            }),
            (t.prototype._initRate = function () {
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
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), this._actHandle && (this._actHandle.stop(), (this._actHandle = null));
            }),
            i([T(cc.Node)], t.prototype, "box1", void 0),
            i([T(cc.Node)], t.prototype, "box2", void 0),
            i([T(cc.Node)], t.prototype, "equipNode", void 0),
            i([T(cc.Sprite)], t.prototype, "equipIcon", void 0),
            i([T(cc.Node)], t.prototype, "ssrNode", void 0),
            i([T(cc.Label)], t.prototype, "point", void 0),
            i([T(cc.Material)], t.prototype, "materialGray", void 0),
            i([T(cc.Material)], t.prototype, "materialNormal", void 0),
            i([b], t)
        );
    })(p.BaseComponent);
o.default = w;
