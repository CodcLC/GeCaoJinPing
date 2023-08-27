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
var r = e("ListItem"),
    s = e("ResManager"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.medal = null),
                (t.bg = null),
                (t.rankLabel = null),
                (t.tx = null),
                (t.nameLabel = null),
                (t.scoreLabel = null),
                (t.medalSprite = []),
                (t.bgSprite = []),
                (t._config = null),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {}),
            (t.prototype.init = function (e) {
                var t = this;
                (this._config = e),
                    e.isFake
                        ? s.ResManager.loadIcon(this.tx, "texture/photo/tx" + e.photoUrl)
                        : e.photoUrl
                        ? cc.assetManager.loadRemote(e.photoUrl, function (e, o) {
                              e || (t.tx && t.tx.isValid && (t.tx.spriteFrame = new cc.SpriteFrame(o)));
                          })
                        : (this.tx.spriteFrame = null),
                    e.rank > 3
                        ? (this.medal.spriteFrame = this.medalSprite[3])
                        : (this.medal.spriteFrame = this.medalSprite[e.rank - 1]),
                    e.isSelf,
                    (this.rankLabel.string = e.rank.toString()),
                    (this.scoreLabel.string = e.score.toString()),
                    (this.nameLabel.string = e.name);
            }),
            i([p(cc.Sprite)], t.prototype, "medal", void 0),
            i([p(cc.Sprite)], t.prototype, "bg", void 0),
            i([p(cc.Label)], t.prototype, "rankLabel", void 0),
            i([p(cc.Sprite)], t.prototype, "tx", void 0),
            i([p(cc.Label)], t.prototype, "nameLabel", void 0),
            i([p(cc.Label)], t.prototype, "scoreLabel", void 0),
            i([p(cc.SpriteFrame)], t.prototype, "medalSprite", void 0),
            i([p(cc.SpriteFrame)], t.prototype, "bgSprite", void 0),
            i([l], t)
        );
    })(r.default);
o.default = u;
