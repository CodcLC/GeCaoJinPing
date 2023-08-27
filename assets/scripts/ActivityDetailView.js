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
    l = e("List"),
    p = e("ZoneLevelItem"),
    u = e("ClientEvents"),
    d = e("WxManager"),
    h = cc._decorator,
    g = h.ccclass,
    m = h.property,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.closeNode = null),
                (t.tittleName = null),
                (t.count = null),
                (t.midList = null),
                (t.zoneData = null),
                (t.activityData = null),
                (t.levelIds = []),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.ActivityLevelDetail;
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(1, this.aniNode);
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), d.wxMgr.hideBanner();
            }),
            (t.prototype.start = function () {
                d.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""});
                var e = this.node.data;
                (this.zoneData = e.zoneData),
                    (this.activityData = e.activityData),
                    (this.levelIds = this.zoneData.zonefloorlevel.split(",")),
                    this.bindEvent(),
                    this.initView();
            }),
            (t.prototype.bindEvent = function () {
                var e = this;
                this.closeNode.on(cc.Node.EventType.TOUCH_END, this.closeView),
                    this.addEvent(
                        u.ClientEvents.REFRESH_ACTIVITY.on(function () {
                            e.initView();
                        })
                    );
            }),
            (t.prototype.initView = function () {
                this.tittleName.setText("{@" + this.zoneData.zonename + "}"),
                    (this.count.string = this.activityData.hasCount.toString()),
                    (this.midList.numItems = this.levelIds.length);
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(p.ZoneLevelItem).init(this.zoneData, this.activityData, t);
            }),
            i([m(cc.Node)], t.prototype, "aniNode", void 0),
            i([m(cc.Node)], t.prototype, "closeNode", void 0),
            i([m(c.LangLabel)], t.prototype, "tittleName", void 0),
            i([m(cc.Label)], t.prototype, "count", void 0),
            i([m(l.default)], t.prototype, "midList", void 0),
            i([g], t)
        );
    })(r.GameComponent);
o.default = f;
