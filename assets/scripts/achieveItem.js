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
    s = e("AchieveManager"),
    c = e("JsonManager"),
    l = e("LanguageManager"),
    p = e("ResManager"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    g = (function (e) {
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
                (t._index = -1),
                (t._achieveTaskInfo = null),
                (t._achieveTaskJson = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                (this._index = e),
                    (this._achieveTaskInfo = s.AchieveMgr.getAchieveTaskData()[e]),
                    (this._achieveTaskJson = s.AchieveMgr.getAchieveTaskJsonById(this._achieveTaskInfo.id));
                var t = this._achieveTaskJson.taskdesc,
                    o = l.langMgr.getStr(t);
                (o = o.replace("$", this._achieveTaskJson.count.toString())), (this.taskDesc.string = o);
                var n = s.AchieveMgr.getTaskFinishCountByType(this._achieveTaskInfo.contenttype),
                    a = this._achieveTaskJson.count,
                    i = n / a;
                this._achieveTaskInfo.state == s.AchieveTaskState.NotFinish
                    ? ((i = i > 1 ? 1 : i), (this.bar.progress = i), (this.progressTxt.string = n + " / " + a))
                    : ((this.bar.progress = 1), (this.progressTxt.string = a + " / " + a));
                for (var r = this._achieveTaskJson.idfixed.split(","), c = 0; c < this.rewardNodes.length; c++) {
                    var p = this.rewardNodes[c],
                        u = r[c];
                    if (r[c]) {
                        p.active = !0;
                        var d = u.split("|"),
                            h = Number(d[0]),
                            g = Number(d[1]);
                        this._initReward(p, h, g);
                    } else p.active = !1;
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
                    p.ResManager.loadGoldIcon(a);
                    var l = c.JsonMgr.getItemJsonById(t);
                    p.ResManager.loadQualityBg(l.quality, n), (i.string = "x" + o), a.node.setContentSize(60, 63);
                } else if (1002 === t)
                    (l = c.JsonMgr.getItemJsonById(t)),
                        p.ResManager.loadQualityBg(l.quality, n),
                        p.ResManager.loadItemCommon(t, a),
                        (i.string = "x" + o),
                        a.node.setContentSize(50, 59);
                else if (1003 === t)
                    (l = c.JsonMgr.getItemJsonById(t)),
                        p.ResManager.loadQualityBg(l.quality, n),
                        (i.string = "x" + o),
                        p.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(46, 64);
                else if (1014 == t)
                    (l = c.JsonMgr.getItemJsonById(t)),
                        p.ResManager.loadQualityBg(l.quality, n),
                        (i.string = "x" + o),
                        p.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(60, 60);
                else if (1017 == t)
                    (l = c.JsonMgr.getItemJsonById(t)),
                        p.ResManager.loadQualityBg(l.quality, n),
                        (i.string = "x" + o),
                        p.ResManager.loadHeroExp(a),
                        a.node.setContentSize(60, 60);
                else if (1020 == t)
                    (l = c.JsonMgr.getItemJsonById(t)),
                        p.ResManager.loadQualityBg(l.quality, n),
                        (i.string = "x" + o),
                        p.ResManager.loadItemCommon(t, a),
                        a.node.setContentSize(45, 52);
                else if (2001 == t || 2002 == t || 2003 == t)
                    (l = c.JsonMgr.getItemJsonById(t)),
                        p.ResManager.loadQualityBg(l.quality, n),
                        (i.string = "x" + o),
                        p.ResManager.loadStoreKeys(l.id, a),
                        a.node.setContentSize(60, 60);
                else if (3001 == t || 3002 == t || 3003 == t)
                    (l = c.JsonMgr.getItemJsonById(t)),
                        p.ResManager.loadQualityBg(l.quality, n),
                        (i.string = "x" + o),
                        p.ResManager.loadHeroChip(t.toString(), a),
                        a.node.setContentSize(53, 57);
                else if (t > 1e5 && t < 9e5) {
                    var u = t - (Number(t % 100) - 1);
                    (l = c.JsonMgr.getJsonById("weapon", u)),
                        (r.node.active = !0),
                        (s.node.active = !0),
                        p.ResManager.loadEquipIcon(l.icon, a),
                        p.ResManager.loadQualityBg(l.grade, n),
                        p.ResManager.loadTypeBg(l.grade, r),
                        p.ResManager.loadTypeIcon(l.type, s),
                        (i.string = "x" + o),
                        a.node.setContentSize(cc.size(60, 60));
                } else
                    t > 1e4 && t < 10010
                        ? (p.ResManager.loadQualityBg(1, n),
                          p.ResManager.loadMapIcon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(56, 48)))
                        : 1010303 == t
                        ? (p.ResManager.loadQualityBg(1, n),
                          p.ResManager.loadItemCommon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(56, 48)))
                        : 1010304 == t &&
                          (p.ResManager.loadQualityBg(1, n),
                          p.ResManager.loadItemCommon(t, a),
                          (i.string = "x" + o),
                          a.node.setContentSize(cc.size(59, 58)));
            }),
            (t.prototype._refreshRewardState = function () {
                (this.goBtn.active = this._achieveTaskInfo.state == s.AchieveTaskState.NotFinish),
                    (this.getNormal.active = this._achieveTaskInfo.state == s.AchieveTaskState.Finish),
                    (this.alreadyGet.active = this._achieveTaskInfo.state == s.AchieveTaskState.Rward);
            }),
            (t.prototype.onClickGoBtn = function () {
                r.ClientEvents.TASK_CLOSE_VIEW.emit(), s.AchieveMgr.gotoTaskContent(this._achieveTaskInfo.contenttype);
            }),
            (t.prototype.onClickGetNormal = function () {
                this._doReceive(), this._completeTask(), this._refreshRewardState();
            }),
            (t.prototype._doReceive = function () {
                s.AchieveMgr.GetPassReward(this._achieveTaskJson);
            }),
            (t.prototype._completeTask = function () {
                (this._achieveTaskInfo.state = s.AchieveTaskState.Rward),
                    s.AchieveMgr.saveAchieveTaskDatas(),
                    r.ClientEvents.ACHIEVE_RED_POINT.emit(),
                    r.ClientEvents.ACHIEVE_REFRESH_TASK.emit();
            }),
            i([h(cc.Label)], t.prototype, "taskDesc", void 0),
            i([h(cc.ProgressBar)], t.prototype, "bar", void 0),
            i([h(cc.Label)], t.prototype, "progressTxt", void 0),
            i([h([cc.Node])], t.prototype, "rewardNodes", void 0),
            i([h(cc.Node)], t.prototype, "getNormal", void 0),
            i([h(cc.Node)], t.prototype, "alreadyGet", void 0),
            i([h(cc.Node)], t.prototype, "goBtn", void 0),
            i([d], t)
        );
    })(cc.Component);
o.default = g;
