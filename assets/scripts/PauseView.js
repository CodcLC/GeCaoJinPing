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
    c = e("RoleData"),
    l = e("ClientEvents"),
    p = e("ResManager"),
    u = e("GameManager"),
    d = e("UIManager"),
    h = e("PlayerData"),
    g = e("audioConst"),
    m = e("audioManager"),
    f = e("AnalyticsManager"),
    y = e("TaskTypeManager"),
    v = cc._decorator,
    M = v.ccclass,
    _ = v.property,
    C = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.weapenLayout = null),
                (t.attributeLayout = null),
                (t.voiceLayout = []),
                (t.gmNode = null),
                (t.frameLayout = null),
                (t.backToGame = null),
                (t.backToHome = null),
                (t.killLabel = null),
                (t.goldLabel = null),
                (t.iconPath = "wuqi/icon"),
                (t.starLayout = "starLayout"),
                (t.refreshKillLabel = function () {
                    t.killLabel.string = h.playData.getKillNum().toString();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.pauseView;
            }),
            (t.prototype.onLoad = function () {
                var e = this;
                u.gameMgr.setIsPause(!0),
                    l.ClientEvents.END_GAME.emit(),
                    this.backToGame.on(cc.Node.EventType.TOUCH_END, function () {
                        m.audioMgr.startEffect(g.AudioConst.COMMON_TOUCH), e.onBackToGame();
                    }),
                    this.backToHome.on(cc.Node.EventType.TOUCH_END, function () {
                        y.TaskTypeMgr.saveTaskData(),
                            m.audioMgr.startEffect(g.AudioConst.COMMON_TOUCH),
                            e.onBackToHome();
                    }),
                    this.addEvent(l.ClientEvents.REFRESH_KILL_LABEL.on(this.refreshKillLabel)),
                    (this.killLabel.string = h.playData.getKillNum().toString()),
                    (this.goldLabel.string = u.gameMgr.getGold().toString());
            }),
            (t.prototype.start = function () {
                this.refreshTable(),
                    this.refreshFrame(),
                    this.refreshVoice(),
                    this.onFrameLayout(),
                    this.onVoiceLayout(),
                    this.gmNode.on(cc.Node.EventType.TOUCH_END, function () {
                        d.UIMgr.showView(s.ViewUrl.GMPanel);
                    }),
                    f.analyMgr.reportGamePause();
            }),
            (t.prototype.refreshTable = function () {
                var e = this,
                    t = [],
                    o = [],
                    n = c.roleData.getRole().getSkillArr(),
                    a = c.roleData.getRole().getEquips();
                n.forEach(function (e) {
                    o.push(e);
                }),
                    a.forEach(function (e) {
                        t.push(e);
                    }),
                    this.weapenLayout.children.forEach(function (o, n) {
                        if (t[n]) {
                            if (t[n].issuper) {
                                var a = t[n].itemicon + "_max";
                                p.ResManager.loadIcon(
                                    cc.find(e.iconPath, o).getComponent(cc.Sprite),
                                    p.ResManager.EquipIcon + a
                                );
                            } else
                                p.ResManager.loadIcon(
                                    cc.find(e.iconPath, o).getComponent(cc.Sprite),
                                    p.ResManager.EquipIcon + t[n].itemicon
                                );
                            (cc.find(e.starLayout, o).active = !0),
                                cc.find(e.starLayout, o).children.forEach(function (e, o) {
                                    t[n].issuper
                                        ? 0 === o
                                            ? ((e.active = !0), (e.color = cc.Color.RED), e.setScale(cc.v2(1.3, 1.3)))
                                            : ((e.active = !1), (e.color = cc.Color.WHITE), e.setScale(cc.v2(1, 1)))
                                        : o + 1 > t[n].level
                                        ? (e.active = !1)
                                        : (e.active = !0);
                                });
                        } else
                            (cc.find(e.iconPath, o).getComponent(cc.Sprite).spriteFrame = null),
                                (cc.find(e.starLayout, o).active = !1);
                    }),
                    this.attributeLayout.children.forEach(function (t, n) {
                        o[n]
                            ? (p.ResManager.loadIcon(
                                  cc.find(e.iconPath, t).getComponent(cc.Sprite),
                                  p.ResManager.EquipIcon + o[n].itemicon
                              ),
                              cc.find(e.starLayout, t).children.forEach(function (e, t) {
                                  t + 1 > o[n].level ? (e.active = !1) : (e.active = !0);
                              }))
                            : ((cc.find(e.iconPath, t).getComponent(cc.Sprite).spriteFrame = null),
                              (cc.find(e.starLayout, t).active = !1));
                    });
            }),
            (t.prototype.refreshFrame = function () {
                var e = h.playData.getSettingFrame();
                this.frameLayout.children.forEach(function (t, o) {
                    o == e && t.getComponent(cc.Toggle) && (t.getComponent(cc.Toggle).isChecked = !0);
                });
            }),
            (t.prototype.refreshVoice = function () {
                this.voiceLayout.forEach(function (e, t) {
                    var o = e.getComponent(cc.Toggle);
                    0 == t && o
                        ? (o.isChecked = h.playData.getSettingSound())
                        : 1 == t && o
                        ? (o.isChecked = h.playData.getSettingMusic())
                        : 2 == t && o && (o.isChecked = h.playData.getSettingDamage());
                });
            }),
            (t.prototype.onFrameLayout = function () {
                this.frameLayout.children.forEach(function (e, t) {
                    e.on(cc.Node.EventType.TOUCH_END, function () {
                        h.playData.setSettingFrame(t), u.gameMgr.setGameFrame(t);
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
                        ? h.playData.setSettingSound(o.isChecked)
                        : 1 == t && o
                        ? h.playData.setSettingMusic(o.isChecked)
                        : 2 == t && o && h.playData.setSettingDamage(o.isChecked);
                });
            }),
            (t.prototype.onBackToGame = function () {
                f.analyMgr.reportPauseClose("Back"),
                    u.gameMgr.setIsPause(!1),
                    l.ClientEvents.RESUME_GAME.emit(),
                    this.closeView();
            }),
            (t.prototype.onBackToHome = function () {
                f.analyMgr.reportPauseClose("Home"),
                    h.playData.saveLastLevelState("Quit"),
                    d.UIMgr.showView(s.ViewUrl.backHomeView);
            }),
            i([_(cc.Node)], t.prototype, "weapenLayout", void 0),
            i([_(cc.Node)], t.prototype, "attributeLayout", void 0),
            i([_(cc.Node)], t.prototype, "voiceLayout", void 0),
            i([_(cc.Node)], t.prototype, "gmNode", void 0),
            i([_(cc.Node)], t.prototype, "frameLayout", void 0),
            i([_(cc.Node)], t.prototype, "backToGame", void 0),
            i([_(cc.Node)], t.prototype, "backToHome", void 0),
            i([_(cc.Label)], t.prototype, "killLabel", void 0),
            i([_(cc.Label)], t.prototype, "goldLabel", void 0),
            i([M], t)
        );
    })(r.GameComponent);
o.default = C;
