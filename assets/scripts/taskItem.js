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
    l = e("LangLabel"),
    p = e("AnalyticsManager"),
    u = e("LanguageManager"),
    d = e("PlayerData"),
    h = e("TaskManager"),
    g = e("WxManager"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.itemSp = null),
                (t.itemNum = null),
                (t.itemDesc = null),
                (t.taskProgress = null),
                (t.taskProgressTxt = null),
                (t.spGold = null),
                (t.spDiamond = null),
                (t.getNormalBtnNode = null),
                (t.getAdsBtnNode = null),
                (t.goBtnNode = null),
                (t.receivedNode = null),
                (t.adTimesLabel = null),
                (t.blueBg = null),
                (t.purpleBg = null),
                (t._data = null),
                (t._rewardId = -1),
                (t._rewardNum = -1),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                var t = h.TaskMgr.getTaskData()[e];
                this._data = t;
                var o = t.idfixed.split("|");
                (this._rewardId = Number(o[0])),
                    (this._rewardNum = Number(o[1])),
                    (this.itemNum.string = "" + this._rewardNum);
                var n = t.taskdesc,
                    a = u.langMgr.getStr(n);
                (a = a.replace("$", t.count.toString())), this.itemDesc.setText(a);
                var i = h.TaskMgr.getTaskType(),
                    r = t.count,
                    s = h.TaskMgr.getContentTypeNum(i, t.contenttype);
                if (h.TaskMgr.getTaskStateDatas(this._data.id) == h.TaskState.Finish) {
                    var c = r;
                    (this.taskProgressTxt.string = c + "/" + r), (this.taskProgress.progress = 1);
                } else
                    (c = s > r ? r : s),
                        (this.taskProgressTxt.string = c + "/" + r),
                        (this.taskProgress.progress = Number((s / r).toFixed(2)));
                this._refreshAdTimes(), this._refreshRewardSp(), this._refreshRewardState();
            }),
            (t.prototype._refreshAdTimes = function () {
                Number(this._data.adtime) > 3
                    ? (this.getAdsBtnNode.getComponent(cc.Sprite).spriteFrame = this.purpleBg)
                    : (this.getAdsBtnNode.getComponent(cc.Sprite).spriteFrame = this.blueBg),
                    3 == Number(this._data.adtime)
                        ? this.adTimesLabel.getComponent(l.LangLabel).setText("{@UI_Box_Triple}")
                        : 5 == Number(this._data.adtime)
                        ? this.adTimesLabel.getComponent(l.LangLabel).setText("{@UI_Reward_five}")
                        : console.error("can`t find language!");
            }),
            (t.prototype._refreshRewardSp = function () {
                switch (this._rewardId) {
                    case 1001:
                        this.itemSp.spriteFrame = this.spGold;
                        break;
                    case 1002:
                        this.itemSp.spriteFrame = this.spDiamond;
                        break;
                    default:
                        console.error("itemId err:", this._rewardId);
                }
            }),
            (t.prototype._refreshRewardState = function () {
                var e = h.TaskMgr.getTaskDatas(this._data.id);
                (this.getNormalBtnNode.active = e.state == h.TaskState.Finish && !e.normalReward),
                    (this.getAdsBtnNode.active = e.state == h.TaskState.Finish && !e.extraReward),
                    (this.goBtnNode.active = e.state == h.TaskState.NotFinish),
                    (this.receivedNode.active = e.state == h.TaskState.Rward);
            }),
            (t.prototype.onClickGetBtn = function () {
                h.TaskMgr.setTaskStateDatas(this._data.id, h.TaskState.Rward, h.RewardType.Normal),
                    h.TaskMgr.addActivityTaskPro(32, 1),
                    this._refreshRewardState(),
                    s.ClientEvents.TASK_RED_POINT.emit(),
                    d.playData.addGem(this._rewardNum),
                    p.analyMgr.reportGetGem(this._rewardNum, "Task"),
                    r.UIMgr.showView(c.ViewUrl.commonRewardView, null, [{id: this._rewardId, count: this._rewardNum}]);
                var e = 1 == this._data.tasktype ? "Day" : "Week";
                p.analyMgr.reportTaskReward(this._data.id, this.initReportRewardStr(this._data.idfixed), e);
            }),
            (t.prototype.onClickThriceGetBtn = function () {
                var e = this;
                g.wxMgr.createVideo(
                    {placementName: "AdTask", openUi: "taskView", level: d.playData.getLevel()},
                    function () {},
                    function () {
                        h.TaskMgr.setTaskStateDatas(e._data.id, h.TaskState.Rward, h.RewardType.Extra),
                            e._refreshRewardState(),
                            s.ClientEvents.TASK_RED_POINT.emit();
                        var t = Number(e._data.adtime);
                        t || (t = 3),
                            d.playData.addGem(e._rewardNum * t),
                            p.analyMgr.reportGetGem(e._rewardNum * t, "Task"),
                            r.UIMgr.showView(c.ViewUrl.commonRewardView, null, [
                                {id: e._rewardId, count: e._rewardNum * t}
                            ]);
                        var o = 1 == e._data.tasktype ? "Day" : "Week";
                        p.analyMgr.reportTaskReward(e._data.id, e.initReportRewardStr(e._data.idfixed, t), o);
                    }
                );
            }),
            (t.prototype.onClickGoBtn = function () {
                s.ClientEvents.TASK_CLOSE_VIEW.emit(), h.TaskMgr.gotoTaskContent(this._data.contenttype);
            }),
            (t.prototype.initReportRewardStr = function (e, t) {
                void 0 === t && (t = 1);
                var o = e.split("|"),
                    n = Number(o[0]),
                    a = Number(o[1]);
                return (a *= t), n.toString() + "|" + a.toString();
            }),
            i([y(cc.Sprite)], t.prototype, "itemSp", void 0),
            i([y(cc.Label)], t.prototype, "itemNum", void 0),
            i([y(l.LangLabel)], t.prototype, "itemDesc", void 0),
            i([y(cc.ProgressBar)], t.prototype, "taskProgress", void 0),
            i([y(cc.Label)], t.prototype, "taskProgressTxt", void 0),
            i([y(cc.SpriteFrame)], t.prototype, "spGold", void 0),
            i([y(cc.SpriteFrame)], t.prototype, "spDiamond", void 0),
            i([y(cc.Node)], t.prototype, "getNormalBtnNode", void 0),
            i([y(cc.Node)], t.prototype, "getAdsBtnNode", void 0),
            i([y(cc.Node)], t.prototype, "goBtnNode", void 0),
            i([y(cc.Node)], t.prototype, "receivedNode", void 0),
            i([y(cc.Label)], t.prototype, "adTimesLabel", void 0),
            i([y(cc.SpriteFrame)], t.prototype, "blueBg", void 0),
            i([y(cc.SpriteFrame)], t.prototype, "purpleBg", void 0),
            i([f], t)
        );
    })(cc.Component);
o.default = v;
