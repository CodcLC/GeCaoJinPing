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
    c = e("ViewUrl"),
    l = e("GameComponent"),
    p = e("GameManager"),
    u = e("audioManager"),
    d = e("PlayerData"),
    h = e("Version"),
    g = e("WxManager"),
    m = cc._decorator,
    f = m.ccclass,
    y = m.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.voiceLayout = []),
                (t.frameLayout = null),
                (t.codeBtn = null),
                (t.versionLabel = null),
                (t.okBtn = null),
                (t.aniNode = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.setting;
            }),
            (t.prototype.onLoad = function () {
                var e = this;
                (this.versionLabel.string = h.Version),
                    this.okBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        u.audioMgr.startEffect(s.AudioConst.COMMON_TOUCH), e.closeView();
                    }),
                    this.versionLabel.node.on(cc.Node.EventType.TOUCH_END, function () {}),
                    this.codeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        r.UIMgr.showView(c.ViewUrl.CodeView, null, null);
                    });
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(2, this.aniNode);
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), g.wxMgr.hideBanner();
            }),
            (t.prototype.start = function () {
                g.wxMgr.showBanner({openUi: this.getUrl(), placementName: ""}),
                    this.refreshFrame(),
                    this.refreshVoice(),
                    this.onFrameLayout(),
                    this.onVoiceLayout();
            }),
            (t.prototype.refreshFrame = function () {
                var e = d.playData.getSettingFrame();
                this.frameLayout.children.forEach(function (t, o) {
                    o == e && t.getComponent(cc.Toggle) && (t.getComponent(cc.Toggle).isChecked = !0);
                });
            }),
            (t.prototype.refreshVoice = function () {
                this.voiceLayout.forEach(function (e, t) {
                    var o = e.getComponent(cc.Toggle);
                    0 == t && o
                        ? (o.isChecked = d.playData.getSettingSound())
                        : 1 == t && o
                        ? (o.isChecked = d.playData.getSettingMusic())
                        : 2 == t && o && (o.isChecked = d.playData.getSettingDamage());
                });
            }),
            (t.prototype.onFrameLayout = function () {
                this.frameLayout.children.forEach(function (e, t) {
                    e.on(cc.Node.EventType.TOUCH_END, function () {
                        d.playData.setSettingFrame(t), p.gameMgr.setGameFrame(t);
                    });
                });
            }),
            (t.prototype.onVoiceLayout = function () {
                var e = this;
                this.voiceLayout.forEach(function (t) {
                    t.on(cc.Node.EventType.TOUCH_END, function () {
                        e.clickSettingToggle();
                    });
                });
            }),
            (t.prototype.clickSettingToggle = function () {
                this.voiceLayout.forEach(function (e, t) {
                    var o = e.getComponent(cc.Toggle);
                    0 == t && o
                        ? d.playData.setSettingSound(o.isChecked)
                        : 1 == t && o
                        ? d.playData.setSettingMusic(o.isChecked)
                        : 2 == t && o && d.playData.setSettingDamage(o.isChecked);
                });
            }),
            i([y(cc.Node)], t.prototype, "voiceLayout", void 0),
            i([y(cc.Node)], t.prototype, "frameLayout", void 0),
            i([y(cc.Node)], t.prototype, "codeBtn", void 0),
            i([y(cc.Label)], t.prototype, "versionLabel", void 0),
            i([y(cc.Node)], t.prototype, "okBtn", void 0),
            i([y(cc.Node)], t.prototype, "aniNode", void 0),
            i([f], t)
        );
    })(l.GameComponent);
o.default = v;
