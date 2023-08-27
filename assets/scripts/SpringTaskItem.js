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
var r = e("ListItem"),
    s = e("LangLabel"),
    c = e("TaskManager"),
    l = e("ClientEvents"),
    p = e("UIManager"),
    u = e("ViewUrl"),
    d = e("audioManager"),
    h = e("audioConst"),
    g = e("PoolManager"),
    m = e("TaskRewardItem"),
    f = e("ItemManager"),
    y = e("AnalyticsManager"),
    v = cc._decorator,
    M = v.ccclass,
    _ = v.property,
    C = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.taskDesc = null),
                (t.progressLabel = null),
                (t.progress = null),
                (t.enterNode = null),
                (t.goToNode = null),
                (t.hasGet = null),
                (t.rewardNode = null),
                (t.rewardItem = null),
                (t.rewardNodeArr = []),
                (t.taskJson = null),
                (t.index = -1),
                (t.data = null),
                (t.activityData = null),
                (t.parent = null),
                (t.goToClickHandle = function () {
                    switch ((d.audioMgr.startEffect(h.AudioConst.COMMON_TOUCH), t.taskJson.contenttype)) {
                        case 1:
                            l.ClientEvents.DOWN_BTN_CHANGE.emit(2);
                            break;
                        case 6:
                            l.ClientEvents.DOWN_BTN_CHANGE.emit(1);
                            break;
                        case 10:
                        case 33:
                            l.ClientEvents.DOWN_BTN_CHANGE.emit(0);
                            break;
                        case 8:
                            l.ClientEvents.DOWN_BTN_CHANGE.emit(2);
                            break;
                        case 32:
                            l.ClientEvents.CHANGE_LOADING.emit(!0),
                                p.UIMgr.showView(u.ViewUrl.TaskView, null, null, function () {
                                    l.ClientEvents.CHANGE_LOADING.emit(!1);
                                });
                            break;
                        case 5:
                            l.ClientEvents.DOWN_BTN_CHANGE.emit(0);
                    }
                    p.UIMgr.closeView(u.ViewUrl.SpringView);
                }),
                (t.receiveItem = function () {
                    var e = [];
                    t.taskJson.idfixed.split(",").forEach(function (t) {
                        var o = t.split("|"),
                            n = Number(o[0]),
                            a = Number(o[1]);
                        e.push({id: n, count: a}), f.itemMgr.addItemData(n, a, "ExchangeActivity");
                    }),
                        y.analyMgr.reportExchangeTask(
                            t.taskJson.id,
                            t.activityData.activityid,
                            1019 === e[0].id ? e[0].count : e[1].count,
                            1018 === e[0].id ? e[0].count : e[1].count
                        ),
                        c.TaskMgr.rewardActivityTask(t.activityData.activityid, t.taskJson.contenttype),
                        t.refresh(),
                        t.parent.initLabel(),
                        t.rewardNodeArr.forEach(function (e) {
                            e.getComponent(m.default).refresh(!0);
                        }),
                        l.ClientEvents.REFRESH_PATROL_HOME_RED.emit(),
                        p.UIMgr.showView(u.ViewUrl.commonRewardView, null, e);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {
                this.bindEvent();
            }),
            (t.prototype.init = function (e, t, o, n) {
                (this.activityData = o),
                    (this.parent = n),
                    (this.taskJson = t),
                    (this.index = e),
                    this.taskDesc.setText("{@" + this.taskJson.taskdesc + "}"),
                    (this.taskDesc.labelComponent.string = this.taskDesc.labelComponent.string.replace(
                        "$",
                        this.taskJson.count.toString()
                    )),
                    (this.data = c.TaskMgr.getActivityTaskByType(
                        this.activityData.activityid,
                        this.taskJson.contenttype
                    ).data);
                var a = this.data.count,
                    i = this.taskJson.count;
                (this.progressLabel.string = (a > i ? i : a) + "/" + i),
                    (this.progress.progress = (a > i ? i : a) / i),
                    this.data.hasGet
                        ? ((this.enterNode.active = !1), (this.goToNode.active = !1), (this.hasGet.active = !0))
                        : ((this.enterNode.active = a >= i),
                          (this.hasGet.active = !1),
                          (this.goToNode.active = !(a >= i)),
                          31 === this.taskJson.contenttype && (this.goToNode.active = !1)),
                    this.initRewardItem();
            }),
            (t.prototype.refresh = function () {
                this.data = c.TaskMgr.getActivityTaskByType(
                    this.activityData.activityid,
                    this.taskJson.contenttype
                ).data;
                var e = this.data.count,
                    t = this.taskJson.count;
                this.data.hasGet
                    ? ((this.enterNode.active = !1), (this.goToNode.active = !1), (this.hasGet.active = !0))
                    : ((this.enterNode.active = e >= t),
                      (this.hasGet.active = !1),
                      (this.goToNode.active = !(e >= t)),
                      31 === this.taskJson.contenttype && (this.goToNode.active = !1));
            }),
            (t.prototype.initRewardItem = function () {
                var e = this;
                this.rewardNodeArr.forEach(function (e) {
                    g.poolMgr.putNodeToPool(e);
                }),
                    this.taskJson.idfixed.split(",").forEach(function (t) {
                        var o = g.poolMgr.getNodeFromMap(e.rewardItem),
                            n = t.split("|");
                        o.getComponent(m.default).init(Number(n[0]), Number(n[1]), e.data),
                            e.rewardNode.addChild(o),
                            e.rewardNodeArr.push(o);
                    });
            }),
            (t.prototype.bindEvent = function () {
                this.goToNode.on(cc.Node.EventType.TOUCH_END, this.goToClickHandle),
                    this.enterNode.on(cc.Node.EventType.TOUCH_END, this.receiveItem);
            }),
            i([_(s.LangLabel)], t.prototype, "taskDesc", void 0),
            i([_(cc.Label)], t.prototype, "progressLabel", void 0),
            i([_(cc.ProgressBar)], t.prototype, "progress", void 0),
            i([_(cc.Node)], t.prototype, "enterNode", void 0),
            i([_(cc.Node)], t.prototype, "goToNode", void 0),
            i([_(cc.Node)], t.prototype, "hasGet", void 0),
            i([_(cc.Node)], t.prototype, "rewardNode", void 0),
            i([_(cc.Prefab)], t.prototype, "rewardItem", void 0),
            i([M], t)
        );
    })(r.default);
o.default = C;
