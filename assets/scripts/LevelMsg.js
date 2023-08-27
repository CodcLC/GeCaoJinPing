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
    c = e("JsonManager"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.midNode = null),
                (t.unlockItem = null),
                (t.aniNode = null),
                (t.levelName = null),
                (t.eqData = null),
                (t.skillData = null),
                (t.levelData = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.onEnable = function () {
                this.onShowPlay(1, this.aniNode);
            }),
            (t.prototype.start = function () {
                (this.levelData = this.node.data),
                    (this.eqData = c.JsonMgr.getEquipById(this.levelData.levelunlockeq)),
                    (this.skillData = c.JsonMgr.getSkillById(this.levelData.levelunlocksk)),
                    this.addItemToMid(),
                    this.node.on(cc.Node.EventType.TOUCH_END, this.closeView),
                    (this.levelName.string = this.levelData.id.toString());
            }),
            (t.prototype.onDestroy = function () {
                e.prototype.onDestroy.call(this), this.node.off(cc.Node.EventType.TOUCH_END, this.closeView);
            }),
            (t.prototype.addItemToMid = function () {
                this.createUnlock(this.eqData, !1), this.createUnlock(this.skillData, !0);
            }),
            (t.prototype.createUnlock = function (e, t) {
                var o = cc.instantiate(this.unlockItem);
                this.midNode.addChild(o), (o.data = {json: e, isSkill: t});
            }),
            (t.prototype.getUrl = function () {
                return s.ViewUrl.levelMsg;
            }),
            i([u(cc.Node)], t.prototype, "midNode", void 0),
            i([u(cc.Prefab)], t.prototype, "unlockItem", void 0),
            i([u(cc.Node)], t.prototype, "aniNode", void 0),
            i([u(cc.Label)], t.prototype, "levelName", void 0),
            i([p], t)
        );
    })(r.GameComponent);
o.default = d;
