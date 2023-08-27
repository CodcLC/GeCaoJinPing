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
var r = e("ViewUrl"),
    s = e("GameComponent"),
    c = e("CommonUtil"),
    l = e("JsonManager"),
    p = e("PlayerData"),
    u = e("HeroData"),
    d = e("CommonRewardItem"),
    h = e("audioConst"),
    g = e("audioManager"),
    m = e("ClientEvents"),
    f = e("AnalyticsManager"),
    y = e("WxManager"),
    v = e("censtant"),
    M = e("SubscribeManager"),
    _ = e("TaskTypeManager"),
    C = cc._decorator,
    b = C.ccclass,
    T = C.property,
    w = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.goldNode = null),
                (t.drawNode = null),
                (t.equipNode = null),
                (t.aniNode = null),
                (t.closeBtn = null),
                (t.earnNode = null),
                (t.adReceive = null),
                (t.adReceiveLeftTime = null),
                (t.tiliReceive = null),
                (t.tiliReceiveLeftTime = null),
                (t.returnNode = null),
                (t.returnLayout = null),
                (t.itemNode = null),
                (t._data = null),
                (t._patrolNowEnergy = 0),
                (t._goldNum = 0),
                (t._mapNum = 0),
                (t._equipNum = 0),
                (t._rewardMapId = {}),
                (t._rewardEquipId = []),
                (t.drawIdArr = []),
                (t.drawRateArr = []),
                (t.equipIdArr = []),
                (t.equipRateArr = []),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return r.ViewUrl.patrolQuick;
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(2, this.aniNode);
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), y.wxMgr.hideBanner();
            }),
            (t.prototype.start = function () {
                var e = this;
                y.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""}),
                    (this.returnNode.active = !1),
                    this._initConfigData(),
                    this._checkRewardBtnState(),
                    this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        g.audioMgr.startEffect(h.AudioConst.COMMON_TOUCH),
                            m.ClientEvents.REFRESH_PATROL_REWARD_RED.emit(),
                            e.closeView();
                    }),
                    this.adReceive.on(cc.Node.EventType.TOUCH_END, function () {
                        g.audioMgr.startEffect(h.AudioConst.COMMON_TOUCH);
                        var t = p.playData.getPatrolNowAD();
                        t > 0 &&
                            y.wxMgr.createVideo(
                                {
                                    placementName: "AdPatrolTime",
                                    openUi: "patrolQuickView",
                                    level: p.playData.getLevel()
                                },
                                function () {},
                                function () {
                                    p.playData.setPatrolNowAD(t - 1), e.receive(0), e._checkRewardBtnState();
                                }
                            );
                    }),
                    this.tiliReceive.on(cc.Node.EventType.TOUCH_END, function () {
                        g.audioMgr.startEffect(h.AudioConst.COMMON_TOUCH);
                        var t = p.playData.getEnergy(),
                            o = p.playData.getPatrolNowEnergy();
                        t >= e._patrolNowEnergy &&
                            o > 0 &&
                            (p.playData.useEnergy(e._patrolNowEnergy),
                            f.analyMgr.reportUseEnergy(e._patrolNowEnergy, "Patrol"),
                            p.playData.setPatrolNowEnergy(o - 1),
                            e.receive(1),
                            y.wxMgr.sendSubscribe(
                                v.SubscribeID.ENERGY,
                                M.scrMgr.getEnergyMsg,
                                M.scrMgr.getEnergyRecoverTime()
                            )),
                            e._checkRewardBtnState();
                    }),
                    this.initRewardNode(),
                    this.initRate();
            }),
            (t.prototype._initConfigData = function () {
                var e = 10101e3 + (p.playData.getLevel() > 20 ? 20 : p.playData.getLevel());
                this._data = l.JsonMgr.getPatrolById(e);
                var t = l.JsonMgr.getDefineConstantByName("PatrolNowEnergy").split("|");
                this._patrolNowEnergy = Number(t[0]);
            }),
            (t.prototype._checkRewardBtnState = function () {
                var e = l.JsonMgr.getDefineConstantByName("PatrolNowEnergy").split("|")[1],
                    t = l.JsonMgr.getDefineConstantByName("PatrolNowAD"),
                    o = p.playData.getPatrolNowAD(),
                    n = p.playData.getEnergy(),
                    a = p.playData.getPatrolNowEnergy();
                (this.adReceive.getComponent(cc.Button).interactable = o > 0),
                    (this.tiliReceive.getComponent(cc.Button).interactable = n >= this._patrolNowEnergy && a > 0),
                    (this.adReceiveLeftTime.string = "(" + o + "/" + t + ")"),
                    (this.tiliReceiveLeftTime.string = "(" + a + "/" + e + ")");
            }),
            (t.prototype.initRewardNode = function () {
                for (var e = this._data.idfixed1.split(";"), t = 0; t < e.length; t++) {
                    var o = e[t];
                    if (!o) return void console.error("err! rewardStr: " + o);
                    var n = o.split("|"),
                        a = Number(n[0]),
                        i = Number(n[1]);
                    switch (a) {
                        case 1001:
                            this._goldNum = i;
                            break;
                        case 1010303:
                            this._mapNum = i;
                            break;
                        case 1010304:
                            this._equipNum = i;
                    }
                }
                if (
                    (this._goldNum &&
                        (((r = cc.instantiate(this.goldNode)).getChildByName("numLabel").getComponent(cc.Label).string =
                            "x" + c.CommonUtil.formatMoney(this._goldNum)),
                        r.setPosition(cc.v2(0, 0)),
                        (r.active = !0),
                        this.earnNode.addChild(r)),
                    this._mapNum &&
                        (((r = cc.instantiate(this.drawNode)).getChildByName("numLabel").getComponent(cc.Label).string =
                            "x" + this._mapNum),
                        r.setPosition(cc.v2(0, 0)),
                        (r.active = !0),
                        this.earnNode.addChild(r)),
                    this._equipNum)
                ) {
                    var r;
                    (r = cc.instantiate(this.equipNode)).getChildByName("type_bg").active = !1;
                    var s = r.getChildByName("numLabel");
                    (s.active = !0),
                        (s.getComponent(cc.Label).string = "x" + this._equipNum),
                        r.setPosition(cc.v2(0, 0)),
                        (r.active = !0),
                        this.earnNode.addChild(r);
                }
            }),
            (t.prototype.receive = function (e) {
                _.TaskTypeMgr.quickPatrolTimesTask(1),
                    (this.returnNode.active = !0),
                    p.playData.addGold(this._goldNum),
                    f.analyMgr.reportGetGold(this._goldNum, e ? "Energy" : "Ads"),
                    this.onReturnRefresh(e);
            }),
            (t.prototype.onReturnRefresh = function (e) {
                var t = this,
                    o = 0,
                    n = cc.instantiate(this.itemNode);
                if (
                    (n.getComponent(d.default).init(o, 1001, this._goldNum),
                    this.returnLayout.addChild(n),
                    this._mapNum)
                )
                    for (var a = 0; a < this._mapNum; a++) {
                        var i = c.CommonUtil.getWeightRandom(this.drawRateArr),
                            r = this.drawIdArr[i];
                        this._rewardMapId[r]
                            ? (this._rewardMapId[r] = this._rewardMapId[r] + 1)
                            : (this._rewardMapId[r] = 1);
                    }
                if (this._equipNum)
                    for (a = 0; a < this._equipNum; a++) {
                        var s = c.CommonUtil.getWeightRandom(this.equipRateArr),
                            l = this.equipIdArr[s];
                        this._rewardEquipId.push(l);
                    }
                this._rewardMapId &&
                    Object.keys(this._rewardMapId).length &&
                    Object.keys(this._rewardMapId).map(function (n) {
                        var a = t._rewardMapId[n],
                            i = cc.instantiate(t.itemNode);
                        o++,
                            i.getComponent(d.default).init(o, Number(n), a),
                            u.heroData.addMap(Number(n), a),
                            f.analyMgr.reportGetItem("Blueprint", Number(n), a, e ? "Energy" : "Ads"),
                            t.returnLayout.addChild(i);
                    }),
                    this._rewardEquipId &&
                        this._rewardEquipId.length > 0 &&
                        this._rewardEquipId.forEach(function (e) {
                            o++;
                            var n = cc.instantiate(t.itemNode);
                            n.getComponent(d.default).init(o, e, 1),
                                u.heroData.addEquip(e, 1),
                                t.returnLayout.addChild(n);
                        }),
                    this.returnNode.on(cc.Node.EventType.TOUCH_END, function () {
                        g.audioMgr.startEffect(h.AudioConst.COMMON_TOUCH),
                            m.ClientEvents.REFRESH_PATROL_REWARD_RED.emit(),
                            t.closeView();
                    });
            }),
            (t.prototype.initRate = function () {
                var e = this;
                (this.drawIdArr = []),
                    (this.drawRateArr = []),
                    (this.equipIdArr = []),
                    (this.equipRateArr = []),
                    l.JsonMgr.getPoolById(1010303)
                        .idrate.split(";")
                        .forEach(function (t) {
                            e.drawIdArr.push(Number(t.split("|")[0])), e.drawRateArr.push(Number(t.split("|")[2]));
                        }),
                    l.JsonMgr.getPoolById(1010304)
                        .idrate.split(";")
                        .forEach(function (t) {
                            e.equipIdArr.push(Number(t.split("|")[0])), e.equipRateArr.push(Number(t.split("|")[2]));
                        });
            }),
            i([T(cc.Node)], t.prototype, "goldNode", void 0),
            i([T(cc.Node)], t.prototype, "drawNode", void 0),
            i([T(cc.Node)], t.prototype, "equipNode", void 0),
            i([T(cc.Node)], t.prototype, "aniNode", void 0),
            i([T(cc.Node)], t.prototype, "closeBtn", void 0),
            i([T(cc.Node)], t.prototype, "earnNode", void 0),
            i([T(cc.Node)], t.prototype, "adReceive", void 0),
            i([T(cc.Label)], t.prototype, "adReceiveLeftTime", void 0),
            i([T(cc.Node)], t.prototype, "tiliReceive", void 0),
            i([T(cc.Label)], t.prototype, "tiliReceiveLeftTime", void 0),
            i([T(cc.Node)], t.prototype, "returnNode", void 0),
            i([T(cc.Node)], t.prototype, "returnLayout", void 0),
            i([T(cc.Prefab)], t.prototype, "itemNode", void 0),
            i([b], t)
        );
    })(s.GameComponent);
o.default = w;
