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
    l = e("EquipManager"),
    p = e("JsonManager"),
    u = e("ResManager"),
    d = cc._decorator,
    h = d.ccclass,
    g = d.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.bg = null),
                (t.icon = null),
                (t.typeImg = null),
                (t.typeIcon = null),
                (t.ssrNode = null),
                (t.gradeLabel = null),
                (t.id = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                if (
                    ((this.id = e),
                    (this.icon.node.scale = 1),
                    (this.gradeLabel.string = ""),
                    (this.ssrNode.active = !1),
                    e > 1e5 && e < 9e5)
                ) {
                    this.typeImg.node.active = !0;
                    var t = e - (Number(e % 100) - 1),
                        o = p.JsonMgr.getJsonById("weapon", t);
                    u.ResManager.loadEquipIcon(o.icon, this.icon),
                        u.ResManager.loadQualityBg(o.grade, this.bg),
                        u.ResManager.loadTypeBg(o.grade, this.typeImg),
                        u.ResManager.loadTypeIcon(o.type, this.typeIcon),
                        (this.ssrNode.active = 1 == o.specialtype);
                    var n = l.equipMgr.getGradeNum(o.grade);
                    n && (this.gradeLabel.string = n);
                }
            }),
            (t.prototype.start = function () {
                var e = this;
                this.node.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                        e.showDescribeVide();
                    },
                    this
                );
            }),
            (t.prototype.showDescribeVide = function () {
                s.ClientEvents.CHANGE_LOADING.emit(!0);
                var e = l.equipMgr.getDataById(this.id);
                console.log(e),
                    r.UIMgr.showView(c.ViewUrl.SevenChallengeViewEquipTip, null, {data: e}, function () {
                        s.ClientEvents.CHANGE_LOADING.emit(!1);
                    });
            }),
            i([g(cc.Sprite)], t.prototype, "bg", void 0),
            i([g(cc.Sprite)], t.prototype, "icon", void 0),
            i([g(cc.Sprite)], t.prototype, "typeImg", void 0),
            i([g(cc.Sprite)], t.prototype, "typeIcon", void 0),
            i([g(cc.Node)], t.prototype, "ssrNode", void 0),
            i([g(cc.Label)], t.prototype, "gradeLabel", void 0),
            i([h], t)
        );
    })(cc.Component);
o.default = m;
