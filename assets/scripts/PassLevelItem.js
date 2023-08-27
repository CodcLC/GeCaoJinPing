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
    p = e("JsonManager"),
    u = e("LanguageManager"),
    d = e("PassTaskManager"),
    h = e("PlayerData"),
    g = e("ResManager"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.levelNode = null),
                (t.levelTopNode = null),
                (t.levelTopLight = null),
                (t.levelBottomNode = null),
                (t.levelBottomLight = null),
                (t.rewardNode1 = null),
                (t.rewardNode2 = null),
                (t.levelNumNode = null),
                (t.levelNumLabel = null),
                (t.lockNode = null),
                (t.unlockCostLabel = null),
                (t._index = -1),
                (t._data = null),
                (t._info = null),
                (t._maxLevel = -1),
                (t._passInfo = null),
                (t._colorArray = [
                    new cc.Color(255, 255, 255),
                    new cc.Color(180, 180, 180),
                    new cc.Color(135, 135, 135)
                ]),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                (this._index = e), (this._data = d.PassTaskMgr.getCurPassLevel()[e]);
                var t = d.PassTaskMgr.getPassLevelByKey(d.PassTaskMgr.getOpenId());
                (this._maxLevel = Object.keys(t).length),
                    this._data.isLock
                        ? ((this.lockNode.active = !0),
                          (this.levelNode.active = !1),
                          this.node.getComponent(cc.Layout).updateLayout(),
                          this._initLockNode())
                        : ((this._info = t["" + this._data.id]),
                          (this._passInfo = d.PassTaskMgr.getPassInfoByKey(d.PassTaskMgr.getOpenId())),
                          (this.lockNode.active = !1),
                          (this.levelNode.active = !0),
                          this.node.getComponent(cc.Layout).updateLayout(),
                          this._initLevelNode());
            }),
            (t.prototype._initLevelNode = function () {
                (this.levelTopNode.active = 0 != this._index),
                    (this.levelBottomNode.active = this._data.level != this._maxLevel),
                    (this.levelTopLight.active = this._passInfo.level >= this._data.level),
                    (this.levelBottomLight.active = this._passInfo.level >= this._data.level + 1),
                    (this.levelNumLabel.string = this._data.level.toString());
                var e = this._data.idfixed1.split("|");
                this._initReward(this.rewardNode1, Number(e[0]), Number(e[1]));
                var t = this._data.idfixed2.split("|");
                this._initReward(this.rewardNode2, Number(t[0]), Number(t[1])), this._refreshRewardState();
            }),
            (t.prototype._initReward = function (e, t, o) {
                var n = e.getChildByName("bg").getComponent(cc.Sprite),
                    a = e.getChildByName("icon").getComponent(cc.Sprite),
                    i = e.getChildByName("count").getComponent(cc.Label),
                    r = e.getChildByName("type_bg").getComponent(cc.Sprite),
                    s = e.getChildByName("type_bg").getChildByName("type_sp").getComponent(cc.Sprite);
                if (((r.node.active = !1), (s.node.active = !1), 1001 === t)) {
                    g.ResManager.loadGoldIcon(a);
                    var c = p.JsonMgr.getItemJsonById(t);
                    g.ResManager.loadQualityBg(c.quality, n), (i.string = "x" + o), a.node.setContentSize(72, 76);
                } else if (1002 === t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        g.ResManager.loadQualityBg(c.quality, n),
                        g.ResManager.loadItemCommon(t, a),
                        (i.string = "x" + o),
                        a.node.setContentSize(80, 94);
                else if (1003 === t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        g.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        g.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(56, 78);
                else if (1014 == t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        g.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        g.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(78, 80);
                else if (1016 === t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        g.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        g.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(63, 86);
                else if (1017 == t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        g.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        g.ResManager.loadHeroExp(a),
                        a.node.setContentSize(80, 80);
                else if (2001 == t || 2002 == t || 2003 == t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        g.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        g.ResManager.loadStoreKeys(c.id, a),
                        a.node.setContentSize(73, 71);
                else if (3001 == t || 3002 == t || 3003 == t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        g.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        g.ResManager.loadHeroChip(t.toString(), a),
                        a.node.setContentSize(89, 95);
                else if (t > 1e5 && t < 9e5) {
                    var l = t - (Number(t % 100) - 1);
                    (c = p.JsonMgr.getJsonById("weapon", l)),
                        (r.node.active = !0),
                        (s.node.active = !0),
                        g.ResManager.loadEquipIcon(c.icon, a),
                        g.ResManager.loadQualityBg(c.grade, n),
                        g.ResManager.loadTypeBg(c.grade, r),
                        g.ResManager.loadTypeIcon(c.type, s),
                        (i.string = "x" + o),
                        a.node.setContentSize(cc.size(90, 90));
                } else
                    t > 1e4 && t < 10010
                        ? (g.ResManager.loadQualityBg(1, n),
                          g.ResManager.loadMapIcon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(94, 80)))
                        : 1010303 == t
                        ? (g.ResManager.loadQualityBg(1, n),
                          g.ResManager.loadItemCommon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(94, 80)))
                        : 1010304 == t &&
                          (g.ResManager.loadQualityBg(1, n),
                          g.ResManager.loadItemCommon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(87, 86)));
            }),
            (t.prototype._refreshRewardState = function () {
                var e = this._passInfo.level >= this._data.level ? this._colorArray[0] : this._colorArray[2];
                (this.levelNumNode.color = e), (this.levelNumLabel.node.color = e);
                var t = this._colorArray[2];
                (this.rewardNode1.getChildByName("task_yifangr").active = !1),
                    this._passInfo.level >= this._data.level &&
                        ((t =
                            this._info.normalReward == d.PassLevelState.NotReward
                                ? this._colorArray[0]
                                : this._colorArray[1]),
                        (this.rewardNode1.getChildByName("task_yifangr").active =
                            this._info.normalReward == d.PassLevelState.Reward)),
                    (this.rewardNode1.getChildByName("bg").color = t),
                    (this.rewardNode1.getChildByName("icon").color = t),
                    (this.rewardNode1.getChildByName("count").color = t),
                    (this.rewardNode1.getChildByName("task_yifangr").color = t),
                    (this.rewardNode1.getChildByName("type_bg").color = t),
                    (this.rewardNode1.getChildByName("type_bg").getChildByName("type_sp").color = t);
                var o = this._colorArray[2];
                (this.rewardNode2.getChildByName("task_yifangr").active = !1),
                    (this.rewardNode2.getChildByName("suo").active = !d.PassTaskMgr.judgeHightAdReardCan(
                        d.PassTaskMgr.getOpenId()
                    )),
                    (this.rewardNode2.getChildByName("suo").color = new cc.Color().fromHEX("#7C7A31")),
                    this._passInfo.level >= this._data.level &&
                        ((o =
                            this._info.extraReward == d.PassLevelState.NotReward
                                ? this._colorArray[0]
                                : this._colorArray[1]),
                        (this.rewardNode2.getChildByName("task_yifangr").active =
                            this._info.extraReward == d.PassLevelState.Reward),
                        (this.rewardNode2.getChildByName("suo").color = new cc.Color().fromHEX("#FFF958"))),
                    (this.rewardNode2.getChildByName("bg").color = o),
                    (this.rewardNode2.getChildByName("icon").color = o),
                    (this.rewardNode2.getChildByName("count").color = o),
                    (this.rewardNode2.getChildByName("task_yifangr").color = o),
                    (this.rewardNode2.getChildByName("type_bg").color = o),
                    (this.rewardNode2.getChildByName("type_bg").getChildByName("type_sp").color = o);
            }),
            (t.prototype.onClickNormalReward = function () {
                this._passInfo.level >= this._data.level
                    ? this._info.normalReward == d.PassLevelState.NotReward &&
                      (d.PassTaskMgr.resetCommonViewData(),
                      d.PassTaskMgr.GetPassReward(this._data.idfixed1, d.PassTaskMgr.getOpenId()),
                      r.UIMgr.showView(c.ViewUrl.commonRewardView, null, d.PassTaskMgr.getCommonViewData()),
                      l.analyMgr.reportPassReward(
                          this._data.id,
                          this._data.idfixed1,
                          d.PassTaskMgr.judgeHightAdReardCan(d.PassTaskMgr.getOpenId()),
                          this._passInfo.level
                      ),
                      (this._info.normalReward = d.PassLevelState.Reward),
                      d.PassTaskMgr.savePassLevelInfoDatas(),
                      this._refreshRewardState(),
                      s.ClientEvents.PASS_RED_LEVEL_REFRESH.emit())
                    : r.UIMgr.showView(c.ViewUrl.commonTip, null, u.langMgr.getStr("PassTask_Tips_11"));
            }),
            (t.prototype.onClickExtralReward = function () {
                d.PassTaskMgr.judgeHightAdReardCan(d.PassTaskMgr.getOpenId())
                    ? this._passInfo.level >= this._data.level
                        ? this._info.extraReward == d.PassLevelState.NotReward &&
                          (d.PassTaskMgr.resetCommonViewData(),
                          d.PassTaskMgr.GetPassReward(this._data.idfixed2, d.PassTaskMgr.getOpenId()),
                          r.UIMgr.showView(c.ViewUrl.commonRewardView, null, d.PassTaskMgr.getCommonViewData()),
                          l.analyMgr.reportPassReward(
                              this._data.id,
                              this._data.idfixed2,
                              d.PassTaskMgr.judgeHightAdReardCan(d.PassTaskMgr.getOpenId()),
                              this._passInfo.level
                          ),
                          (this._info.extraReward = d.PassLevelState.Reward),
                          d.PassTaskMgr.savePassLevelInfoDatas(),
                          this._refreshRewardState(),
                          s.ClientEvents.PASS_RED_LEVEL_REFRESH.emit())
                        : r.UIMgr.showView(c.ViewUrl.commonTip, null, u.langMgr.getStr("PassTask_Tips_11"))
                    : r.UIMgr.showView(c.ViewUrl.commonTip, null, u.langMgr.getStr("PassTask_Tips_12"));
            }),
            (t.prototype._initLockNode = function () {
                var e = this._data.jsonKey,
                    t = d.PassTaskMgr.getPassLevelJson(e.toString());
                this.unlockCostLabel.string = t.gemcost.toString();
            }),
            (t.prototype.onClickUnlockLevel = function () {
                var e = this._data.jsonKey,
                    t = d.PassTaskMgr.getPassLevelJson(e.toString());
                h.playData.checkGem(t.gemcost)
                    ? (h.playData.useGem(t.gemcost),
                      l.analyMgr.reportUseGem(t.gemcost, "BuyPass"),
                      d.PassTaskMgr.addPassLevel(d.PassTaskMgr.getOpenId()),
                      s.ClientEvents.PASS_LEVEL_REFRESH.emit())
                    : r.UIMgr.showView(c.ViewUrl.commonTip, null, u.langMgr.getStr("Tips_Lack"));
            }),
            i([y(cc.Node)], t.prototype, "levelNode", void 0),
            i([y(cc.Node)], t.prototype, "levelTopNode", void 0),
            i([y(cc.Node)], t.prototype, "levelTopLight", void 0),
            i([y(cc.Node)], t.prototype, "levelBottomNode", void 0),
            i([y(cc.Node)], t.prototype, "levelBottomLight", void 0),
            i([y(cc.Node)], t.prototype, "rewardNode1", void 0),
            i([y(cc.Node)], t.prototype, "rewardNode2", void 0),
            i([y(cc.Node)], t.prototype, "levelNumNode", void 0),
            i([y(cc.Label)], t.prototype, "levelNumLabel", void 0),
            i([y(cc.Node)], t.prototype, "lockNode", void 0),
            i([y(cc.Label)], t.prototype, "unlockCostLabel", void 0),
            i([f], t)
        );
    })(cc.Component);
o.default = v;
