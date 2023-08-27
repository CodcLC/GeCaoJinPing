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
var r = e("ActivityLevelManager"),
    s = e("ActivityManager"),
    c = e("ResManager"),
    l = e("JsonManager"),
    p = e("CommonUtil"),
    u = e("ItemManager"),
    d = e("UIManager"),
    h = e("ViewUrl"),
    g = e("event-kit"),
    m = e("ClientEvents"),
    f = e("WxManager"),
    y = e("PlayerData"),
    v = e("AnalyticsManager"),
    M = cc._decorator,
    _ = M.ccclass,
    C = M.property,
    b = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.chipPro = null),
                (t.proLabel = null),
                (t.itemCount = null),
                (t.bingoNode = null),
                (t.rightNode = null),
                (t.downNode = null),
                (t.cjNode = null),
                (t.cjIcon = null),
                (t.ad = null),
                (t.hb = null),
                (t.cjDesc = null),
                (t.normalFrame = null),
                (t.bFrame = null),
                (t.btnLabel = null),
                (t.activityData = null),
                (t.bingoData = null),
                (t.bingoJson = []),
                (t.chipCount = null),
                (t.lineUnRewardArr = []),
                (t.unRewardArr = []),
                (t.parent = null),
                (t.isPlayAni = !1),
                (t.canShowPerson = !1),
                (t.hasCount = !1),
                (t.dispose = new g.CompositeDisposable()),
                (t.bingoClickHandle = function () {
                    if (!t.isPlayAni) {
                        if (t.lineUnRewardArr.length <= 7)
                            s.activityManager.refreshAllBingo(t.activityData.activityid),
                                t.refresh(),
                                t.initRewardItem();
                        else {
                            var e = function (e) {
                                t.isPlayAni = !0;
                                var o = [];
                                t.unRewardArr.forEach(function (e) {
                                    var n = t.bingoJson[e];
                                    o.push(Number(n.gridunlockweight));
                                });
                                var n = p.CommonUtil.getWeightRandom(o),
                                    a = t.unRewardArr[n],
                                    i = t.bingoData.bingoReward[a];
                                s.activityManager.getBingoAddIndex(a + 1, t.activityData.activityid),
                                    e || r.activityMgr.costItem(1019, 1);
                                var c = t.checkItemIsLock(),
                                    l = [],
                                    g = u.itemMgr.addItemData(i.id, i.count, "ExchangeActivity");
                                g
                                    ? (g.forEach(function (e) {
                                          l.push({id: e.id, count: e.count});
                                      }),
                                      v.analyMgr.reportGetExchangeReward(
                                          t.activityData.activityid,
                                          "NormalLottery",
                                          t.activityData.activityadmax - t.bingoData.seeADCount,
                                          e ? 0 : 1,
                                          g
                                      ))
                                    : (l.push({id: i.id, count: i.count}),
                                      v.analyMgr.reportGetExchangeReward(
                                          t.activityData.activityid,
                                          "NormalLottery",
                                          t.activityData.activityadmax - t.bingoData.seeADCount,
                                          e ? 0 : 1,
                                          l
                                      ));
                                var m = Object.keys(c),
                                    f = [];
                                t.playNormalAni(
                                    t.bingoNode.children[a],
                                    l,
                                    i.id,
                                    i.count,
                                    m.length > 0
                                        ? function () {
                                              m.forEach(function (o, n) {
                                                  var a = c[o];
                                                  a.forEach(function (i, r) {
                                                      l.push({id: i.id, count: i.count}),
                                                          f.push({id: i.id, count: i.count}),
                                                          t.playNormalAni(
                                                              i.node,
                                                              l,
                                                              Number(o),
                                                              a[0].allCount,
                                                              n === m.length - 1 && r === a.length - 1
                                                                  ? function () {
                                                                        d.UIMgr.showView(
                                                                            h.ViewUrl.commonRewardView,
                                                                            null,
                                                                            l
                                                                        ),
                                                                            v.analyMgr.reportGetExchangeReward(
                                                                                t.activityData.activityid,
                                                                                "BigLottery",
                                                                                t.activityData.activityadmax -
                                                                                    t.bingoData.seeADCount,
                                                                                e ? 0 : 1,
                                                                                f
                                                                            ),
                                                                            t.refresh();
                                                                    }
                                                                  : function () {}
                                                          );
                                                  });
                                              });
                                          }
                                        : null
                                ),
                                    t.bingoData.bingoCount >= t.bingoData.proAllCount &&
                                        ((t.canShowPerson = !0),
                                        s.activityManager.clearBingoCount(t.activityData.activityid));
                            };
                            if (t.hasCount) (t.isPlayAni = !0), e && e(!1);
                            else {
                                if (t.bingoData.seeADCount >= t.activityData.activityadmax) return;
                                f.wxMgr.createVideo(
                                    {openUi: "SpringView", placementName: "AdLottery", level: y.playData.getLevel()},
                                    function () {},
                                    function () {
                                        (t.isPlayAni = !0),
                                            s.activityManager.addSeeAdCount(t.activityData.activityid),
                                            e && e(!0);
                                    }
                                );
                            }
                        }
                        m.ClientEvents.REFRESH_PATROL_HOME_RED.emit();
                    }
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {
                var e = this;
                this.cjNode.on(cc.Node.EventType.TOUCH_END, this.bingoClickHandle),
                    this.dispose.add(
                        m.ClientEvents.REFRESH_ACTIVITY_BINGO.on(function () {
                            if (e.canShowPerson) {
                                e.canShowPerson = !1;
                                var t = e.bingoJson[e.bingoJson.length - 1].idrate.split("|");
                                u.itemMgr.addItemData(Number(t[0]), Number(t[1]), "ExchangeActivity"),
                                    d.UIMgr.showView(h.ViewUrl.commonRewardView, null, [
                                        {id: Number(t[0]), count: Number(t[1])}
                                    ]),
                                    v.analyMgr.reportGetExchangeReward(
                                        e.activityData.activityid,
                                        "SuperLottery",
                                        e.activityData.activityadmax - e.bingoData.seeADCount,
                                        0,
                                        [{id: Number(t[0]), count: Number(t[1])}]
                                    );
                            } else e.isPlayAni = !1;
                        })
                    );
            }),
            (t.prototype.init = function (e, t) {
                (this.activityData = e),
                    (this.parent = t),
                    (this.bingoData = s.activityManager.getBingoFromMap(this.activityData.activityid)),
                    (this.bingoJson = s.activityManager.getBingoJson(this.activityData.activityid)),
                    this.initItemCount(),
                    this.initProLabel(),
                    this.initRewardItem(),
                    (this.unRewardArr.length = 0),
                    (this.lineUnRewardArr.length = 0),
                    this.getUnRewardArr(),
                    this.initBtnLabel(),
                    (this.chipCount.string = "X" + this.bingoJson[this.bingoJson.length - 1].idrate.split("|")[1]);
            }),
            (t.prototype.initBtnLabel = function () {
                var e = this.cjNode.getComponent(cc.Button),
                    t = this.cjNode.getComponent(cc.Sprite),
                    o = this.cjIcon.node.getChildByName("wasteCount");
                this.lineUnRewardArr.length <= 7
                    ? ((this.btnLabel.string = "刷新"),
                      (e.interactable = !0),
                      (t.spriteFrame = this.normalFrame),
                      (this.cjIcon.spriteFrame = this.hb),
                      (this.cjIcon.node.active = !1))
                    : this.hasCount
                    ? ((this.btnLabel.string = "抽奖"),
                      (e.interactable = !0),
                      (o.active = !0),
                      (t.spriteFrame = this.normalFrame),
                      (this.cjIcon.spriteFrame = this.hb),
                      (this.cjIcon.node.active = !0))
                    : ((t.spriteFrame = this.bFrame),
                      (this.btnLabel.string =
                          this.activityData.activityadmax -
                          this.bingoData.seeADCount +
                          "/" +
                          this.activityData.activityadmax),
                      (e.interactable = this.bingoData.seeADCount < this.activityData.activityadmax),
                      (this.cjIcon.spriteFrame = this.ad),
                      (o.active = !1));
            }),
            (t.prototype.initItemCount = function () {
                var e = r.activityMgr.getItemById(1019);
                (this.itemCount.string = e.count.toString()), (this.hasCount = e.count > 0);
            }),
            (t.prototype.initProLabel = function () {
                (this.proLabel.string = this.bingoData.bingoCount + "/" + this.bingoData.proAllCount),
                    (this.chipPro.progress = this.bingoData.bingoCount / this.bingoData.proAllCount);
            }),
            (t.prototype.initRewardItem = function () {
                var e = this;
                this.bingoNode.children.forEach(function (t, o) {
                    t.color = cc.Color.WHITE;
                    var n = -1 !== e.bingoData.bingoIndex.indexOf(o + 1),
                        a = e.bingoData.bingoReward[o],
                        i = t.getChildByName("?Node"),
                        r = t.getChildByName("icon").getComponent(cc.Sprite),
                        s = t.getChildByName("count").getComponent(cc.Label);
                    if (a.id > 1e5 && a.id < 1e6) {
                        var u = l.JsonMgr.getJsonById("weapon", a.id);
                        c.ResManager.loadQualityBg(u.grade, t.getComponent(cc.Sprite));
                    } else c.ResManager.loadQualityBg(l.JsonMgr.getItemJsonById(a.id).quality, t.getComponent(cc.Sprite));
                    n
                        ? ((i.active = !1),
                          (r.node.active = !0),
                          e.loadIcon(a.id, r),
                          (s.string = p.CommonUtil.formatMoney(a.count)),
                          (s.node.active = !0))
                        : ((s.node.active = !1), (r.node.active = !1), (i.active = !0));
                }),
                    this.rightNode.children.forEach(function (t, o) {
                        var n = -1 !== e.bingoData.rightBingoIndex.indexOf(o + 1),
                            a = e.bingoData.rightReward[o],
                            i = t.getChildByName("?Node"),
                            r = t.getChildByName("icon").getComponent(cc.Sprite),
                            s = t.getChildByName("count").getComponent(cc.Label);
                        if (a.id > 1e5 && a.id < 1e6) {
                            var u = l.JsonMgr.getJsonById("weapon", a.id);
                            c.ResManager.loadQualityBg(u.grade, t.getComponent(cc.Sprite));
                        } else c.ResManager.loadQualityBg(l.JsonMgr.getItemJsonById(a.id).quality, t.getComponent(cc.Sprite));
                        n
                            ? ((i.active = !1),
                              (r.node.active = !0),
                              e.loadIcon(a.id, r),
                              (s.string = p.CommonUtil.formatMoney(a.count)),
                              (t.color = cc.Color.WHITE),
                              (r.node.color = cc.Color.WHITE),
                              (t.getChildByName("suo").active = !1))
                            : ((i.active = !1),
                              (r.node.color = new cc.Color().fromHEX("#91989A")),
                              e.loadIcon(a.id, r),
                              (r.node.active = !0),
                              (t.color = new cc.Color().fromHEX("#91989A")),
                              (t.getChildByName("suo").active = !0),
                              (s.string = p.CommonUtil.formatMoney(a.count)));
                    }),
                    this.downNode.children.forEach(function (t, o) {
                        var n = -1 !== e.bingoData.downBingoIndex.indexOf(o + 1),
                            a = e.bingoData.downReward[o],
                            i = t.getChildByName("?Node"),
                            r = t.getChildByName("icon").getComponent(cc.Sprite),
                            s = t.getChildByName("count").getComponent(cc.Label);
                        if (a.id > 1e5 && a.id < 1e6) {
                            var u = l.JsonMgr.getJsonById("weapon", a.id);
                            c.ResManager.loadQualityBg(u.grade, t.getComponent(cc.Sprite));
                        } else c.ResManager.loadQualityBg(l.JsonMgr.getItemJsonById(a.id).quality, t.getComponent(cc.Sprite));
                        n
                            ? ((i.active = !1),
                              (r.node.active = !0),
                              e.loadIcon(a.id, r),
                              (s.string = p.CommonUtil.formatMoney(a.count)),
                              (t.color = cc.Color.WHITE),
                              (r.node.color = cc.Color.WHITE),
                              (t.getChildByName("suo").active = !1))
                            : ((i.active = !1),
                              e.loadIcon(a.id, r),
                              (r.node.color = new cc.Color().fromHEX("#91989A")),
                              (r.node.active = !0),
                              (t.color = new cc.Color().fromHEX("#91989A")),
                              (t.getChildByName("suo").active = !0),
                              (s.string = p.CommonUtil.formatMoney(a.count)));
                    });
            }),
            (t.prototype.checkItemIsLock = function () {
                var e = this,
                    t = this.bingoData.rightBingoIndex,
                    o = this.bingoData.downBingoIndex,
                    n = {};
                if (t.length < 5)
                    for (
                        var a = function (o) {
                                var a = 25 + o;
                                if (-1 === t.indexOf(o + 1)) {
                                    var r = i.bingoJson[a].gridunlock.split(","),
                                        c = !0;
                                    if (
                                        (r.forEach(function (t) {
                                            -1 === e.bingoData.bingoIndex.indexOf(Number(t)) && (c = !1);
                                        }),
                                        c)
                                    ) {
                                        var l = i.bingoData.rightReward[o],
                                            p = u.itemMgr.addItemData(l.id, l.count, "ExchangeActivity");
                                        p
                                            ? p.forEach(function (t) {
                                                  n[l.id] || (n[l.id] = []),
                                                      n[l.id].push({
                                                          id: t.id,
                                                          count: t.count,
                                                          allCount: l.count,
                                                          showIcon: l.id,
                                                          node: e.rightNode.children[o]
                                                      });
                                              })
                                            : (n[l.id] = [
                                                  {
                                                      id: l.id,
                                                      count: l.count,
                                                      allCount: l.count,
                                                      showIcon: l.id,
                                                      node: i.rightNode.children[o]
                                                  }
                                              ]),
                                            s.activityManager.getRightAddIndex(o + 1, i.activityData.activityid);
                                    }
                                }
                            },
                            i = this,
                            r = 0;
                        r < 5;
                        r++
                    )
                        a(r);
                if (o.length < 7) {
                    var c = function (t) {
                            var a = 30 + t;
                            if (-1 === o.indexOf(t + 1)) {
                                var i = l.bingoJson[a].gridunlock.split(","),
                                    r = !0;
                                if (
                                    (i.forEach(function (t) {
                                        -1 === e.bingoData.bingoIndex.indexOf(Number(t)) && (r = !1);
                                    }),
                                    r)
                                ) {
                                    var c = l.bingoData.downReward[t],
                                        p = u.itemMgr.addItemData(c.id, c.count, "ExchangeActivity");
                                    p
                                        ? p.forEach(function (o) {
                                              n[c.id] || (n[c.id] = []),
                                                  n[c.id].push({
                                                      id: o.id,
                                                      count: o.count,
                                                      allCount: c.count,
                                                      showIcon: c.id,
                                                      node: e.downNode.children[t]
                                                  });
                                          })
                                        : (n[c.id] = [
                                              {
                                                  id: c.id,
                                                  count: c.count,
                                                  allCount: c.count,
                                                  showIcon: c.id,
                                                  node: l.downNode.children[t]
                                              }
                                          ]),
                                        s.activityManager.getDownAddIndex(t + 1, l.activityData.activityid);
                                }
                            }
                        },
                        l = this;
                    for (r = 0; r < 7; r++) c(r);
                }
                return n;
            }),
            (t.prototype.loadIcon = function (e, t) {
                (t.node.scale = 0.5),
                    (t.sizeMode = cc.Sprite.SizeMode.TRIMMED),
                    e > 1e5 && e < 1e6
                        ? (c.ResManager.loadEquipIcon(l.JsonMgr.getJsonById("weapon", e).icon, t),
                          (t.node.scale = 1),
                          (t.sizeMode = cc.Sprite.SizeMode.CUSTOM),
                          t.node.setContentSize(cc.size(55, 55)))
                        : e > 1e4 && e < 10007
                        ? c.ResManager.loadMapIcon(e, t)
                        : e > 2e3 && e < 2004
                        ? (c.ResManager.loadStoreKeys(e, t), (t.node.scale = 0.7))
                        : 1010303 === e
                        ? (c.ResManager.loadItemCommon(e, t), (t.node.scale = 0.3))
                        : 1019 === e
                        ? (c.ResManager.loadActivityItem(t, e.toString()), (t.node.scale = 0.7))
                        : e > 1e3 && e < 1004
                        ? c.ResManager.loadItemCommon(e, t)
                        : 1017 === e
                        ? c.ResManager.loadHeroExp(t)
                        : e > 3e3 && e < 3005 && c.ResManager.loadHeroChip(e.toString(), t);
            }),
            (t.prototype.playNormalAni = function (e, t, o, n, a) {
                var i = this;
                e.runAction(
                    cc.sequence(
                        cc.scaleTo(0.2, 0, 1).easing(cc.easeQuadraticActionInOut()),
                        cc.callFunc(function () {
                            var t = e.getChildByName("?Node"),
                                a = e.getChildByName("icon").getComponent(cc.Sprite),
                                r = e.getChildByName("count").getComponent(cc.Label);
                            (e.getChildByName("suo").active = !1),
                                (e.color = cc.Color.WHITE),
                                (a.node.color = cc.Color.WHITE),
                                (t.active = !1),
                                (a.node.active = !0),
                                i.loadIcon(o, a),
                                (r.string = n.toString()),
                                (r.node.active = !0);
                        }),
                        cc.scaleTo(0.2, 1, 1).easing(cc.easeQuadraticActionInOut()),
                        cc.callFunc(function () {
                            a ? a() : (d.UIMgr.showView(h.ViewUrl.commonRewardView, null, t), i.refresh());
                        })
                    )
                );
            }),
            (t.prototype.refresh = function () {
                (this.bingoData = s.activityManager.getBingoFromMap(this.activityData.activityid)),
                    this.initItemCount(),
                    this.initProLabel(),
                    (this.unRewardArr.length = 0),
                    (this.lineUnRewardArr.length = 0),
                    this.getUnRewardArr(),
                    this.initBtnLabel();
            }),
            (t.prototype.getUnRewardArr = function () {
                for (var e = 0; e < this.bingoNode.children.length; e++)
                    -1 === this.bingoData.bingoIndex.indexOf(e + 1) && this.unRewardArr.push(e);
                for (e = 0; e < this.rightNode.children.length; e++)
                    -1 === this.bingoData.rightBingoIndex.indexOf(e + 1) && this.lineUnRewardArr.push(e);
                for (e = 0; e < this.downNode.children.length; e++)
                    -1 === this.bingoData.downBingoIndex.indexOf(e + 1) && this.lineUnRewardArr.push(e);
            }),
            (t.prototype.onDestroy = function () {
                this.dispose.dispose();
            }),
            i([C(cc.ProgressBar)], t.prototype, "chipPro", void 0),
            i([C(cc.Label)], t.prototype, "proLabel", void 0),
            i([C(cc.Label)], t.prototype, "itemCount", void 0),
            i([C(cc.Node)], t.prototype, "bingoNode", void 0),
            i([C(cc.Node)], t.prototype, "rightNode", void 0),
            i([C(cc.Node)], t.prototype, "downNode", void 0),
            i([C(cc.Node)], t.prototype, "cjNode", void 0),
            i([C(cc.Sprite)], t.prototype, "cjIcon", void 0),
            i([C(cc.SpriteFrame)], t.prototype, "ad", void 0),
            i([C(cc.SpriteFrame)], t.prototype, "hb", void 0),
            i([C(cc.Label)], t.prototype, "cjDesc", void 0),
            i([C(cc.SpriteFrame)], t.prototype, "normalFrame", void 0),
            i([C(cc.SpriteFrame)], t.prototype, "bFrame", void 0),
            i([C(cc.Label)], t.prototype, "btnLabel", void 0),
            i([C(cc.Label)], t.prototype, "chipCount", void 0),
            i([_], t)
        );
    })(cc.Component);
o.default = b;
