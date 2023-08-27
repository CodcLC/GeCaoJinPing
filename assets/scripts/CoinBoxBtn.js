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
    s = e("audioConst"),
    c = e("ClientEvents"),
    l = e("ViewUrl"),
    p = e("BaseComponent"),
    u = e("TimeUtil"),
    d = e("audioManager"),
    h = e("CoinBoxManager"),
    g = cc._decorator,
    m = g.ccclass,
    f = g.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.redPoint = null),
                (t.btnNode = null),
                (t.nextTimeStr = null),
                (t.refreshStatus = function () {
                    t._refreshTime(),
                        t.unschedule(t._refreshTime),
                        t.schedule(t._refreshTime, 1, cc.macro.REPEAT_FOREVER);
                }),
                (t._refreshTime = function () {
                    switch ((h.CoinBoxMgr.refreshCoinBoxState(), h.CoinBoxMgr.getCoinBoxState())) {
                        case h.CoinBoxState.NotStart:
                            (t.redPoint.active = !1),
                                (t.btnNode.active = !1),
                                (t.nextTimeStr.node.active = !1),
                                h.CoinBoxMgr.setCoinBoxStart();
                            break;
                        case h.CoinBoxState.Duration:
                            var e = h.CoinBoxMgr.getDurationTimeTamps() - Date.now();
                            e > 0 &&
                                ((t.redPoint.active = !0),
                                (t.btnNode.active = !0),
                                (t.nextTimeStr.node.active = !0),
                                (t.nextTimeStr.string = u.TimeUtil.timeConvertToDDHHMMSS(e)));
                            break;
                        case h.CoinBoxState.CD:
                            (t.redPoint.active = !1), (t.btnNode.active = !1), (t.nextTimeStr.node.active = !1);
                            break;
                        case h.CoinBoxState.OVER:
                            t.unschedule(t._refreshTime),
                                (t.redPoint.active = !1),
                                (t.btnNode.active = !1),
                                (t.nextTimeStr.node.active = !1);
                    }
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onLoad = function () {
                this.addEvent(c.ClientEvents.COINBOX_REFRESH_STATE.on(this.refreshStatus));
            }),
            (t.prototype.start = function () {
                this.refreshStatus();
            }),
            (t.prototype.onClickBtn = function () {
                d.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH),
                    c.ClientEvents.CHANGE_LOADING.emit(!0),
                    r.UIMgr.showView(l.ViewUrl.CoinBoxView, null, null, function () {
                        c.ClientEvents.CHANGE_LOADING.emit(!1);
                    });
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), this.unschedule(this._refreshTime);
            }),
            i([f(cc.Node)], t.prototype, "redPoint", void 0),
            i([f(cc.Node)], t.prototype, "btnNode", void 0),
            i([f(cc.Label)], t.prototype, "nextTimeStr", void 0),
            i([m], t)
        );
    })(p.BaseComponent);
o.default = y;
