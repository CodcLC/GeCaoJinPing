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
var r = e("censtant"),
    s = e("ViewUrl"),
    c = e("GameComponent"),
    l = e("LangLabel"),
    p = e("audioManager"),
    u = e("challengeManager"),
    d = e("HomeManager"),
    h = e("PlayerData"),
    g = e("AnalyticsManager"),
    m = e("GameManager"),
    f = e("WxManager"),
    y = cc._decorator,
    v = y.ccclass,
    M = y.property,
    _ = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.aniNode = null),
                (t.titleNode = null),
                (t.challengeLayout = null),
                (t.challengeNode = null),
                (t.rewardLayout = null),
                (t.startBtn = null),
                (t.closeBtn = null),
                (t.rewardNode = null),
                (t.growthSprite = []),
                (t.iconSprite = []),
                (t._data = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.challengePop;
            }),
            (t.prototype.onEnable = function () {
                this.onShowPlay(2, this.aniNode);
            }),
            (t.prototype.start = function () {
                f.wxMgr.showBanner({openUi: s.ViewUrl.challengePop, placementName: ""}),
                    (this._data = this.node.data),
                    this.initDisplay(),
                    this.initTouch();
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), f.wxMgr.hideBanner();
            }),
            (t.prototype.initDisplay = function () {
                this.titleNode.getComponent(l.LangLabel).setText(u.challengeMgr.getLevelName(this._data.levelid - 1)),
                    this._data.isdouble && this.addChallengeLabel("Challenge_Tips_7", 0),
                    this._data.boxprobability < 1e4 && this.addChallengeLabel("Challenge_Tips_5", 1),
                    this._data.hpaddition && this._data.attackaddition && this.addChallengeLabel("Challenge_Tips_6", 2),
                    this._data.speedaddition && this.addChallengeLabel("Challenge_Tips_4", 3),
                    this.showReward();
            }),
            (t.prototype.addChallengeLabel = function (e, t) {
                var o = cc.instantiate(this.challengeNode);
                (o.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.growthSprite[t]),
                    o.getComponent(l.LangLabel).setText("{@" + e + "}"),
                    (o.active = !0),
                    this.challengeLayout.addChild(o);
            }),
            (t.prototype.showReward = function () {
                var e = this,
                    t = this._data.chapterreward.split(";");
                t &&
                    t.length > 0 &&
                    t.forEach(function (t) {
                        var o = t.split("|"),
                            n = cc.instantiate(e.rewardNode);
                        e.initRewardNode(n, Number(o[0]), Number(o[1])), (n.active = !0), e.rewardLayout.addChild(n);
                    });
            }),
            (t.prototype.initRewardNode = function (e, t, o) {
                1001 === t ||
                    (1002 === t
                        ? (e.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.iconSprite[0])
                        : 1003 === t ||
                          (1014 === t &&
                              (e.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = this.iconSprite[1]))),
                    (e.getChildByName("count").getComponent(cc.Label).string = o.toString()),
                    this.checkReceive() && (e.getChildByName("mask").active = !0);
            }),
            (t.prototype.checkReceive = function () {
                var e = this._data.levelid + "-" + this._data.difficultylevel;
                return u.challengeMgr.getIsReceive(e);
            }),
            (t.prototype.initTouch = function () {
                var e = this;
                this.closeBtn.on(cc.Node.EventType.TOUCH_END, function () {
                    e.closeView();
                }),
                    this.startBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        e.startGame();
                    });
            }),
            (t.prototype.startGame = function () {
                var e = this._data.levelid + "-" + this._data.difficultylevel;
                h.playData.setGameState(r.GameSatet.challenge, e),
                    (m.gameMgr.hasShareChoose = !1),
                    (m.gameMgr.hasShareLantern = !1),
                    (m.gameMgr.challengeData = this._data);
                var t,
                    o = h.playData.getLastChallenge();
                (t = o ? (this._data.levelid > o.levelid ? "New" : "Continue") : "New"),
                    g.analyMgr.reportLevelStart(this._data.id, t, !0),
                    d.homeMgr.startBattle(Number(this._data.levelid) - 1),
                    p.audioMgr.stopBgm(),
                    p.audioMgr.initMusic(),
                    this.closeView();
            }),
            i([M(cc.Node)], t.prototype, "aniNode", void 0),
            i([M(cc.Node)], t.prototype, "titleNode", void 0),
            i([M(cc.Node)], t.prototype, "challengeLayout", void 0),
            i([M(cc.Node)], t.prototype, "challengeNode", void 0),
            i([M(cc.Node)], t.prototype, "rewardLayout", void 0),
            i([M(cc.Node)], t.prototype, "startBtn", void 0),
            i([M(cc.Node)], t.prototype, "closeBtn", void 0),
            i([M(cc.Node)], t.prototype, "rewardNode", void 0),
            i([M(cc.SpriteFrame)], t.prototype, "growthSprite", void 0),
            i([M(cc.SpriteFrame)], t.prototype, "iconSprite", void 0),
            i([v], t)
        );
    })(c.GameComponent);
o.default = _;
