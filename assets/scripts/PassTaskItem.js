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
    h = e("ResManager"),
    g = cc._decorator,
    m = g.ccclass,
    f = g.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.taskDesc = null),
                (t.bar = null),
                (t.progressTxt = null),
                (t.rewardNodes = []),
                (t.getNormal = null),
                (t.alreadyGet = null),
                (t.goBtn = null),
                (t._data = null),
                (t._info = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                this._data = d.PassTaskMgr.getCurPassTask()[e];
                var t = d.PassTaskMgr.getPassTaskByKey(d.PassTaskMgr.getOpenId());
                this._info = t["" + this._data.id];
                var o = this._data.taskdesc,
                    n = u.langMgr.getStr(o);
                if (
                    ((n = n.replace("$", this._data.count.toString())),
                    (this.taskDesc.string = n),
                    this._info.state == d.PassTaskState.NotFinish)
                ) {
                    if (Number(this._data.contenttype) >= 24 && Number(this._data.contenttype) <= 29) {
                        var a = Number(this._data.contenttype) - 23;
                        (this.bar.progress = this._info.count / a),
                            (this.progressTxt.string = this._info.count + " / " + a);
                    } else
                        (this.bar.progress = this._info.count / this._data.count),
                            (this.progressTxt.string = this._info.count + " / " + this._data.count);
                } else (this.bar.progress = 1), (this.progressTxt.string = this._data.count + " / " + this._data.count);
                for (var i = this._data.idfixed.split(","), r = 0; r < this.rewardNodes.length; r++) {
                    var s = this.rewardNodes[r],
                        c = i[r];
                    if (i[r]) {
                        s.active = !0;
                        var l = c.split("|"),
                            p = Number(l[0]),
                            h = Number(l[1]);
                        this._initReward(s, p, h);
                    } else s.active = !1;
                }
                this._refreshRewardState();
            }),
            (t.prototype._initReward = function (e, t, o) {
                var n = e.getChildByName("bg").getComponent(cc.Sprite),
                    a = e.getChildByName("icon").getComponent(cc.Sprite),
                    i = e.getChildByName("count").getComponent(cc.Label),
                    r = e.getChildByName("type_bg").getComponent(cc.Sprite),
                    s = e.getChildByName("type_bg").getChildByName("type_sp").getComponent(cc.Sprite);
                if (((r.node.active = !1), (s.node.active = !1), 1001 === t)) {
                    h.ResManager.loadGoldIcon(a);
                    var c = p.JsonMgr.getItemJsonById(t);
                    h.ResManager.loadQualityBg(c.quality, n), (i.string = "x" + o), a.node.setContentSize(60, 63);
                } else if (1002 === t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        h.ResManager.loadQualityBg(c.quality, n),
                        h.ResManager.loadItemCommon(t, a),
                        (i.string = "x" + o),
                        a.node.setContentSize(50, 59);
                else if (1003 === t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        h.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        h.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(46, 64);
                else if (1014 == t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        h.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        h.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(60, 60);
                else if (1016 === t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        h.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        h.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(45, 60);
                else if (1017 == t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        h.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        h.ResManager.loadHeroExp(a),
                        a.node.setContentSize(60, 60);
                else if (2001 == t || 2002 == t || 2003 == t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        h.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        h.ResManager.loadStoreKeys(c.id, a),
                        a.node.setContentSize(60, 60);
                else if (3001 == t || 3002 == t || 3003 == t)
                    (c = p.JsonMgr.getItemJsonById(t)),
                        h.ResManager.loadQualityBg(c.quality, n),
                        (i.string = "x" + o),
                        h.ResManager.loadHeroChip(t.toString(), a),
                        a.node.setContentSize(53, 57);
                else if (t > 1e5 && t < 9e5) {
                    var l = t - (Number(t % 100) - 1);
                    (c = p.JsonMgr.getJsonById("weapon", l)),
                        (r.node.active = !0),
                        (s.node.active = !0),
                        h.ResManager.loadEquipIcon(c.icon, a),
                        h.ResManager.loadQualityBg(c.grade, n),
                        h.ResManager.loadTypeBg(c.grade, r),
                        h.ResManager.loadTypeIcon(c.type, s),
                        (i.string = "x" + o),
                        a.node.setContentSize(cc.size(60, 60));
                } else
                    t > 1e4 && t < 10010
                        ? (h.ResManager.loadQualityBg(1, n),
                          h.ResManager.loadMapIcon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(56, 48)))
                        : 1010303 == t
                        ? (h.ResManager.loadQualityBg(1, n),
                          h.ResManager.loadItemCommon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(56, 48)))
                        : 1010304 == t &&
                          (h.ResManager.loadQualityBg(1, n),
                          h.ResManager.loadItemCommon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(59, 58)));
            }),
            (t.prototype._refreshRewardState = function () {
                (this.goBtn.active = this._info.state == d.PassTaskState.NotFinish),
                    (this.getNormal.active = this._info.state == d.PassTaskState.Finish),
                    (this.alreadyGet.active = this._info.state == d.PassTaskState.Rward);
            }),
            (t.prototype.onClickGoBtn = function () {
                console.log("this.data: ", this._data),
                    s.ClientEvents.PASS_VIEW_CLOSE.emit(),
                    d.PassTaskMgr.gotoTaskContent(this._data.contenttype);
            }),
            (t.prototype.onClickGetNormal = function () {
                this._doReceive(), this._completeTask(), this._refreshRewardState();
            }),
            (t.prototype._doReceive = function () {
                d.PassTaskMgr.resetCommonViewData(),
                    d.PassTaskMgr.GetPassReward(this._data.idfixed, d.PassTaskMgr.getOpenId());
                var e = d.PassTaskMgr.getPassInfoByKey(d.PassTaskMgr.getOpenId()),
                    t = d.PassTaskMgr.getPassJsonByKey(d.PassTaskMgr.getOpenId());
                l.analyMgr.reportPassReward(this._data.id, this._data.idfixed, e.adTimes >= t.adnum, Number(e.level)),
                    r.UIMgr.showView(c.ViewUrl.commonRewardView, null, d.PassTaskMgr.getCommonViewData());
            }),
            (t.prototype._completeTask = function () {
                (this._info.state = d.PassTaskState.Rward), d.PassTaskMgr.savePassTaskDatas();
                var e = d.PassTaskMgr.getPassInfoByKey(d.PassTaskMgr.getOpenId()),
                    t = d.PassTaskMgr.getPassJsonByKey(d.PassTaskMgr.getOpenId());
                l.analyMgr.reportPassFinish(this._data.id, this._data.idfixed, e.adTimes >= t.adnum, Number(e.level)),
                    s.ClientEvents.PASS_RED_TASK_REFRESH.emit();
            }),
            i([f(cc.Label)], t.prototype, "taskDesc", void 0),
            i([f(cc.ProgressBar)], t.prototype, "bar", void 0),
            i([f(cc.Label)], t.prototype, "progressTxt", void 0),
            i([f([cc.Node])], t.prototype, "rewardNodes", void 0),
            i([f(cc.Node)], t.prototype, "getNormal", void 0),
            i([f(cc.Node)], t.prototype, "alreadyGet", void 0),
            i([f(cc.Node)], t.prototype, "goBtn", void 0),
            i([m], t)
        );
    })(cc.Component);
o.default = y;
