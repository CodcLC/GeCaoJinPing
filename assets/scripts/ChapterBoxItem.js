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
var r = e("ChapterBoxManager"),
    s = e("JsonManager"),
    c = e("LanguageManager"),
    l = e("ResManager"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.displayNode = null),
                (t.circleLight = null),
                (t.circleGray = null),
                (t.zjbg = null),
                (t.zjTitle = null),
                (t.descTxt = null),
                (t.materialGray = null),
                (t.materialNormal = null),
                (t._levelJson = null),
                (t._stateData = null),
                (t._originData = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.refreshUI = function (e) {
                (this._stateData = e),
                    (this._originData = r.ChapterBoxMgr.getOriginDataById(this._stateData.id)),
                    (this._levelJson = s.JsonMgr.getLevelJson(this._originData.levelid));
                var t = this._stateData.state == r.ChapterBoxState.Rwarded ? this.materialGray : this.materialNormal;
                l.ResManager.loadBattleMapIcon(this._levelJson.lobbymap, this.displayNode),
                    this.displayNode.setMaterial(0, t),
                    (this.circleGray.active = this._stateData.state == r.ChapterBoxState.Rwarded),
                    (this.circleLight.active = this._stateData.state != r.ChapterBoxState.Rwarded),
                    this.zjbg.setMaterial(0, t);
                var o = c.langMgr.getStr("ChapterBox_Tips_2");
                (o = o.replace("$", this._originData.levelid.toString())), (this.zjTitle.string = o);
                var n =
                    this._stateData.state == r.ChapterBoxState.Rwarded
                        ? new cc.Color().fromHEX("#AACBE9")
                        : new cc.Color().fromHEX("#FFFFFF");
                this.zjTitle.node.color = n;
                var a = this._originData.boxtime,
                    i = "";
                (i =
                    -1 == a
                        ? c.langMgr.getStr("ChapterBox_Tips_8")
                        : (i = c.langMgr.getStr("ChapterBox_Tips_3")).replace("$", a.toString())),
                    (this.descTxt.string = i),
                    (this.descTxt.node.color = n);
            }),
            i([d(cc.Sprite)], t.prototype, "displayNode", void 0),
            i([d(cc.Node)], t.prototype, "circleLight", void 0),
            i([d(cc.Node)], t.prototype, "circleGray", void 0),
            i([d(cc.Sprite)], t.prototype, "zjbg", void 0),
            i([d(cc.Label)], t.prototype, "zjTitle", void 0),
            i([d(cc.Label)], t.prototype, "descTxt", void 0),
            i([d(cc.Material)], t.prototype, "materialGray", void 0),
            i([d(cc.Material)], t.prototype, "materialNormal", void 0),
            i([u], t)
        );
    })(cc.Component);
o.default = h;
