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
    c = e("BattleResultManager"),
    l = e("RoleData"),
    p = e("GameManager"),
    u = e("MonsterManager"),
    d = e("LangLabel"),
    h = e("LevelManager"),
    g = e("audioManager"),
    m = e("audioConst"),
    f = e("WxManager"),
    y = cc._decorator,
    v = y.ccclass,
    M = y.property,
    _ = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.sureNode = null),
                (t.cancelNode = null),
                (t.desc = null),
                (t.heart = null),
                (t.sureClickHandle = function () {
                    g.audioMgr.startEffect(m.AudioConst.COMMON_TOUCH),
                        f.wxMgr.createVideo(
                            {placementName: "AdRevive", openUi: "ReviveView", level: h.levelMgr.getLevelJson().id},
                            function () {},
                            function () {
                                t.closeView(),
                                    p.gameMgr.addReviveCount(),
                                    l.roleData.getRole().revive(),
                                    p.gameMgr.setIsPause(!1),
                                    u.default.instance().boomAllMonster();
                            }
                        );
                }),
                (t.cancelClickHandle = function () {
                    g.audioMgr.startEffect(m.AudioConst.COMMON_TOUCH), t.closeView(), c.btResMgr.showResultView(!1);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.reviveView;
            }),
            (t.prototype.onEnable = function () {
                var e = this;
                this.onShowPlay(2, this.aniNode, function () {
                    e.heart.runAction(
                        cc.repeatForever(
                            cc.sequence(
                                cc.scaleTo(0.2, 1.1).easing(cc.easeSineInOut()),
                                cc.scaleTo(0.2, 1).easing(cc.easeSineInOut()),
                                cc.delayTime(0.7)
                            )
                        )
                    );
                });
            }),
            (t.prototype.start = function () {
                this.sureNode.on(cc.Node.EventType.TOUCH_END, this.sureClickHandle),
                    this.cancelNode.on(cc.Node.EventType.TOUCH_END, this.cancelClickHandle);
                var e = p.gameMgr.getReviveTime();
                this.desc.setText(e > 0 ? "{@Pop_Death_3}" : "{@Pop_Death_2}");
            }),
            i([M(cc.Node)], t.prototype, "aniNode", void 0),
            i([M(cc.Node)], t.prototype, "sureNode", void 0),
            i([M(cc.Node)], t.prototype, "cancelNode", void 0),
            i([M(d.LangLabel)], t.prototype, "desc", void 0),
            i([M(cc.Node)], t.prototype, "heart", void 0),
            i([v], t)
        );
    })(r.GameComponent);
o.default = _;
