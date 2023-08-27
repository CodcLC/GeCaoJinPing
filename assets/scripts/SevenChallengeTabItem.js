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
var r = e("audioConst"),
    s = e("ClientEvents"),
    c = e("BaseComponent"),
    l = e("audioManager"),
    p = e("LanguageManager"),
    u = e("SevenChallengeManager"),
    d = cc._decorator,
    h = d.ccclass,
    g = d.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.tabView = null),
                (t.finishTag = null),
                (t.suo = null),
                (t.dayLabel = null),
                (t.bgActive = null),
                (t.bgGray = null),
                (t._index = -1),
                (t._clickNode = function () {
                    l.audioMgr.startEffect(r.AudioConst.COMMON_TOUCH),
                        u.SevenChallengeMgr.judgeTabIsOpen(t._index) &&
                            (u.SevenChallengeMgr.setCurTab(t._index), s.ClientEvents.SEVEN_CHALLENGE_TAB.emit());
                }),
                (t._refreshTab = function () {
                    var e = u.SevenChallengeMgr.getCurTab(),
                        o = t._index == e ? t.bgActive : t.bgGray;
                    t.tabView.spriteFrame = o;
                    var n = t._index == e ? new cc.Color().fromHEX("#FFED40") : new cc.Color().fromHEX("#949CB4");
                    t.dayLabel.node.color = n;
                    var a = t._index == e ? new cc.Color().fromHEX("#543B3B") : new cc.Color().fromHEX("#3B3C54");
                    t.dayLabel.node.getComponent(cc.LabelOutline).color = a;
                }),
                (t._refreshFinish = function () {
                    t.finishTag.active = u.SevenChallengeMgr.checkFinishByTag(t._index);
                }),
                (t._refreshSuo = function () {
                    (t.suo.active = !u.SevenChallengeMgr.judgeTabIsOpen(t._index)),
                        (t.dayLabel.node.active = !t.suo.active);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                this._index = e;
                var t = p.langMgr.getStr("SevenLogin_Tips_2");
                (t = t.replace("$", e.toString())), (this.dayLabel.string = t);
            }),
            (t.prototype.onLoad = function () {
                this.node.on(cc.Node.EventType.TOUCH_END, this._clickNode),
                    this.addEvent(s.ClientEvents.SEVEN_CHALLENGE_TAB.on(this._refreshTab)),
                    this.addEvent(s.ClientEvents.SEVEN_CHALLENGE_TAB_FINISH.on(this._refreshFinish)),
                    this.addEvent(s.ClientEvents.SEVEN_CHALLENGE_TAB_SUO.on(this._refreshSuo));
            }),
            (t.prototype.start = function () {
                this._refreshTab(), this._refreshFinish(), this._refreshSuo();
            }),
            i([g(cc.Sprite)], t.prototype, "tabView", void 0),
            i([g(cc.Node)], t.prototype, "finishTag", void 0),
            i([g(cc.Node)], t.prototype, "suo", void 0),
            i([g(cc.Label)], t.prototype, "dayLabel", void 0),
            i([g(cc.SpriteFrame)], t.prototype, "bgActive", void 0),
            i([g(cc.SpriteFrame)], t.prototype, "bgGray", void 0),
            i([h], t)
        );
    })(c.BaseComponent);
o.default = m;
