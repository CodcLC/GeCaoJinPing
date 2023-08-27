var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.AutoPopMgr = o.DIALOGPOP = void 0);
var n,
    a = e("ViewUrl"),
    i = e("PlayerData"),
    r = e("SevenLoginManager"),
    s = e("UIManager"),
    c = e("JsonManager");
(function (e) {
    (e[(e.BACK_REWARD = 1)] = "BACK_REWARD"),
        (e[(e.SEVE_NLOGIN = 2)] = "SEVE_NLOGIN"),
        (e[(e.PATROL_REWARD = 3)] = "PATROL_REWARD"),
        (e[(e.COMMON_REWARD = 4)] = "COMMON_REWARD"),
        (e[(e.SEVEN_CHALLENGE = 5)] = "SEVEN_CHALLENGE");
})((n = o.DIALOGPOP || (o.DIALOGPOP = {})));
var l = (function () {
    function e() {
        this._popList = [];
    }
    return (
        (e.prototype.checkAutoPop = function () {
            this._checkShowBackReward(),
                this._checkSevenLoginView(),
                this._checkShowPatrolView(),
                this._sortAutoPop(),
                this.showAutoPop();
        }),
        (e.prototype._checkShowBackReward = function () {
            if (i.playData.checkShowBackReward()) {
                var e = c.JsonMgr.getDefineConstantByName("ComeBackReward").split(";"),
                    t = [];
                e.forEach(function (e) {
                    var o = e.split("|");
                    t.push({id: Number(o[0]), count: Number(o[1])});
                });
                var o = {
                    id: n.BACK_REWARD,
                    url: a.ViewUrl.commonRewardViewAd,
                    param: t,
                    successCall: function (e) {
                        for (var o = 0; o < t.length; o++) {
                            var n = t[o];
                            1001 == n.id
                                ? i.playData.addGold(n.count * Number(e))
                                : 1002 == n.id
                                ? i.playData.addGem(n.count * Number(e))
                                : 1003 == n.id && i.playData.addEnergy(n.count * Number(e));
                        }
                        i.playData.resetShowBackReward();
                    }
                };
                this.addAutoPop(o, !1);
            }
        }),
        (e.prototype._checkSevenLoginView = function () {
            if (!r.SevenLoginMgr.isTodayRewarded() && r.SevenLoginMgr.isLeftCanReward()) {
                var e = {id: n.SEVE_NLOGIN, url: a.ViewUrl.SevenLoginView};
                this.addAutoPop(e, !1);
            }
        }),
        (e.prototype._checkShowPatrolView = function () {
            if (i.playData.checkShowPatrolView()) {
                var e = {
                    id: n.PATROL_REWARD,
                    url: a.ViewUrl.patrolReward,
                    callBack: function () {
                        i.playData.resetShowPatrolView();
                    }
                };
                this.addAutoPop(e, !1);
            }
        }),
        (e.prototype.addAutoPop = function (e, t) {
            void 0 === t && (t = !0), t ? this._popList.unshift(e) : this._popList.push(e);
        }),
        (e.prototype._sortAutoPop = function () {
            0 != this._popList.length &&
                this._popList.sort(function (e, t) {
                    return e.id - t.id;
                });
        }),
        (e.prototype.showAutoPop = function () {
            if (0 != this._popList.length) {
                var e = this._popList.shift();
                s.UIMgr.showView(e.url, e.parent, e.param, e.callBack, e.nodeZIndex, !0, e.successCall);
            }
        }),
        (e.instance = new e()),
        e
    );
})();
o.AutoPopMgr = l.instance;
