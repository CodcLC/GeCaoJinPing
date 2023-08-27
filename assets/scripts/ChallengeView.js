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
    s = e("ViewUrl"),
    c = e("GameComponent"),
    l = e("List"),
    p = e("challengeManager"),
    u = e("PlayerData"),
    d = e("ChallengeItem"),
    h = cc._decorator,
    g = h.ccclass,
    m = h.property,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.levelList = null),
                (t._mapData = null),
                (t.initList = function () {
                    t._mapData = p.challengeMgr.getMapJson();
                    var e = u.playData.getCompleteLevel();
                    e >= t._mapData.length / 4
                        ? (t.levelList.numItems = t._mapData.length)
                        : e < t._mapData.length / 4 && (t.levelList.numItems = 4 * e + 1);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.challengeView;
            }),
            (t.prototype.onLoad = function () {}),
            (t.prototype.onEnable = function () {}),
            (t.prototype.start = function () {
                this.addEvent(r.ClientEvents.CHALLENGE_REFRESH.on(this.initList)), this.initList();
            }),
            (t.prototype.renderList = function (e, t) {
                e.getComponent(d.default).init(t);
            }),
            i([m(cc.Node)], t.prototype, "aniNode", void 0),
            i([m(l.default)], t.prototype, "levelList", void 0),
            i([g], t)
        );
    })(c.GameComponent);
o.default = f;
