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
var r = e("GameComponent"),
    s = e("ViewUrl"),
    c = e("LangLabel"),
    l = e("TimeUtil"),
    p = e("SpringTask"),
    u = e("SpringConvert"),
    d = e("SpringBingo"),
    h = e("TaskManager"),
    g = e("ActivityLevelManager"),
    m = e("ClientEvents"),
    f = e("UIManager"),
    y = cc._decorator,
    v = y.ccclass,
    M = y.property,
    _ = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.closeNode = null),
                (t.activityDesc = null),
                (t.activityName = null),
                (t.chooseFrame = null),
                (t.unChooseFrame = null),
                (t.timeLabel = null),
                (t.chooseViewArr = []),
                (t.chooseNode = []),
                (t.chooseIndex = 2),
                (t.activityData = null),
                (t.endTime = 0),
                (t.timeSc = function () {
                    var e = new Date().getTime(),
                        o = t.endTime - e;
                    if (o <= 0)
                        return (
                            t.unschedule(t.timeSc),
                            g.activityMgr.initActivityItem(),
                            g.activityMgr.init(),
                            m.ClientEvents.REFRESH_ACTIVITY_BTN.emit(),
                            f.UIMgr.showView(s.ViewUrl.commonTip, null, "活动已结束"),
                            void t.closeView()
                        );
                    t.timeLabel.string = l.TimeUtil.timeConvertToDDHHMMSS(o);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onEnable = function () {
                this.onShowPlay(1, this.aniNode);
            }),
            (t.prototype.start = function () {
                h.TaskMgr.initActivityTask(), this.bindEvent(), this.initData(), this.initView();
            }),
            (t.prototype.initData = function () {
                this.activityData = this.node.data;
            }),
            (t.prototype.initView = function () {
                this.activityName.setText("{@" + this.activityData.activityname + "}"),
                    this.initActivityTime(),
                    this.changeChooseView();
            }),
            (t.prototype.initDesc = function () {
                switch (this.chooseIndex) {
                    case 0:
                        this.setDesc(this.activityData.activitydesc1);
                        break;
                    case 1:
                        this.setDesc(this.activityData.activitydesc2);
                        break;
                    case 2:
                        this.setDesc(this.activityData.activitydesc3);
                }
            }),
            (t.prototype.setDesc = function (e) {
                this.activityDesc.setText("{@" + e + "}");
            }),
            (t.prototype.bindEvent = function () {
                this.closeNode.on(cc.Node.EventType.TOUCH_END, this.closeView);
            }),
            (t.prototype.chooseNodeClickHandle = function (e, t) {
                var o = Number(t);
                o !== this.chooseIndex && ((this.chooseIndex = o), this.changeChooseView());
            }),
            (t.prototype.changeChooseView = function () {
                var e = this;
                this.chooseViewArr.forEach(function (t, o) {
                    t.active = o === e.chooseIndex;
                    var n = e.chooseNode[o];
                    (n.interactable = o !== e.chooseIndex),
                        (n.node.getChildByName("label").color =
                            o !== e.chooseIndex
                                ? new cc.Color().fromHEX("#AACBE9")
                                : new cc.Color().fromHEX("#FFFA2B")),
                        (n.node.getComponent(cc.Sprite).spriteFrame =
                            o !== e.chooseIndex ? e.unChooseFrame : e.chooseFrame),
                        e.initViewByIndex();
                }),
                    this.initDesc();
            }),
            (t.prototype.initViewByIndex = function () {
                switch (this.chooseIndex) {
                    case 0:
                        this.initConvertView();
                        break;
                    case 1:
                        this.initBingoView();
                        break;
                    case 2:
                        this.initMissionView();
                }
            }),
            (t.prototype.initConvertView = function () {
                0 === this.chooseIndex &&
                    this.chooseViewArr[this.chooseIndex].getComponent(u.default).init(this.activityData);
            }),
            (t.prototype.initBingoView = function () {
                1 === this.chooseIndex &&
                    this.chooseViewArr[this.chooseIndex].getComponent(d.default).init(this.activityData, this);
            }),
            (t.prototype.initMissionView = function () {
                2 === this.chooseIndex &&
                    this.chooseViewArr[this.chooseIndex].getComponent(p.default).init(this.activityData);
            }),
            (t.prototype.initActivityTime = function () {
                var e = this.activityData.opentime.split("-")[1];
                this.endTime = new Date(e).getTime();
                var t = new Date().getTime();
                (this.timeLabel.string = l.TimeUtil.timeConvertToDDHHMMSS(this.endTime - t)),
                    this.schedule(this.timeSc, 1, cc.macro.REPEAT_FOREVER);
            }),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.SpringView;
            }),
            i([M(cc.Node)], t.prototype, "aniNode", void 0),
            i([M(cc.Node)], t.prototype, "closeNode", void 0),
            i([M(c.LangLabel)], t.prototype, "activityDesc", void 0),
            i([M(c.LangLabel)], t.prototype, "activityName", void 0),
            i([M(cc.SpriteFrame)], t.prototype, "chooseFrame", void 0),
            i([M(cc.SpriteFrame)], t.prototype, "unChooseFrame", void 0),
            i([M(cc.Label)], t.prototype, "timeLabel", void 0),
            i([M(cc.Node)], t.prototype, "chooseViewArr", void 0),
            i([M(cc.Button)], t.prototype, "chooseNode", void 0),
            i([v], t)
        );
    })(r.GameComponent);
o.default = _;
