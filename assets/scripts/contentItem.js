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
    s = e("ClientEvents"),
    c = e("ViewUrl"),
    l = e("JsonManager"),
    p = e("PlayerData"),
    u = e("RedDotManager"),
    d = e("ResManager"),
    h = e("GuideManager"),
    g = cc._decorator,
    m = g.ccclass,
    f = g.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.icon = null),
                (t.upIcon = null),
                (t.atkSprite = null),
                (t.hpSprite = null),
                (t.defSprite = null),
                (t.foodSf = null),
                (t._data = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                var t = this;
                (this._data = e),
                    this.ininSprite(),
                    this.initNodeMask(),
                    this.node.on(cc.Node.EventType.TOUCH_END, function () {
                        t.initTouch();
                    }),
                    (this.upIcon.active = u.RDMgr.canTalentUp(this._data)),
                    this._data.id,
                    1010001 === e.id &&
                        p.playData.getNewUserStep() < h.GUIDE_STEP.SHOP &&
                        this.scheduleOnce(function () {
                            r.UIMgr.showGuideWithNode(t.node, function () {
                                t.initTouch();
                            });
                        }, 0.1);
            }),
            (t.prototype.ininSprite = function () {
                var e = l.JsonMgr.getWeaponSkillById(this._data.skillid);
                21 === e.type
                    ? (this.icon.spriteFrame = this.atkSprite)
                    : 22 === e.type
                    ? (this.icon.spriteFrame = this.hpSprite)
                    : 23 === e.type
                    ? (this.icon.spriteFrame = this.defSprite)
                    : 24 === e.type
                    ? (this.icon.spriteFrame = this.foodSf)
                    : d.ResManager.loadIcon(this.icon, d.ResManager.TalentIcon + this._data.skillid);
            }),
            (t.prototype.initTouch = function () {
                var e = this,
                    t = function () {
                        s.ClientEvents.CHANGE_LOADING.emit(!0),
                            r.UIMgr.showView(
                                c.ViewUrl.talentPop,
                                null,
                                {
                                    pos: e.node.convertToWorldSpaceAR(cc.v2(0, e.icon.node.height / 2 + 30)),
                                    data: e._data
                                },
                                function () {
                                    s.ClientEvents.CHANGE_LOADING.emit(!1);
                                }
                            );
                    },
                    o = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    n = r.UIMgr.getCanvas(),
                    a = n.convertToWorldSpaceAR(cc.v2(0, n.height / 2 - 450));
                o.y > a.y
                    ? (this._data.type < 2
                          ? s.ClientEvents.SCROLL_TALENT_LIST.emit(this._data.openlevel, !1)
                          : s.ClientEvents.SCROLL_TALENT_LIST.emit(this._data.openlevel, !0),
                      this.scheduleOnce(function () {
                          t && t();
                      }, 0.3))
                    : t && t();
            }),
            (t.prototype.initNodeMask = function () {
                p.playData.checkTalentHasOpen(this._data.id.toString()) ||
                    (this.icon.node.color = new cc.Color(126, 135, 148));
            }),
            i([f(cc.Sprite)], t.prototype, "icon", void 0),
            i([f(cc.Node)], t.prototype, "upIcon", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "atkSprite", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "hpSprite", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "defSprite", void 0),
            i([f(cc.SpriteFrame)], t.prototype, "foodSf", void 0),
            i([m], t)
        );
    })(cc.Component);
o.default = y;
