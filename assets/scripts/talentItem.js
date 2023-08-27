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
    s = e("PlayerData"),
    c = e("talentManager"),
    l = e("contentItem"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.levelLabel = null),
                (t.contentPrefab = null),
                (t.skillNode = null),
                (t.skillShain = null),
                (t.skillLinkLine = null),
                (t.skillContent = null),
                (t.skillItemSp = null),
                (t.levelItemSpArr = []),
                (t.contentNode = []),
                (t.contentShain = []),
                (t.linkShain = []),
                (t.notGetSp = null),
                (t.normalGetSp = null),
                (t.skillGetSp = null),
                (t._data = null),
                (t.index = 0),
                (t.level = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                this.clearContent(),
                    (this.skillLinkLine.active = !1),
                    (this.index = e),
                    (this._data = c.talentMgr.getPropertyData(this.index)),
                    (this.level = c.talentMgr.getLen() - this.index),
                    (this.levelLabel.string = this.level + ""),
                    s.playData.checkTalentHasOpen(this._data[3].id.toString()) &&
                        (this.levelLabel.node.color = new cc.Color().fromHEX("#00EAEB")),
                    this.showContent(),
                    this.showShain(),
                    this.showSkillNode(),
                    this.showSkillShain();
            }),
            (t.prototype.clearContent = function () {
                this.contentNode.forEach(function (e) {
                    e.removeAllChildren();
                }),
                    this.skillNode.removeAllChildren();
            }),
            (t.prototype.showContent = function () {
                var e = this;
                this._data.forEach(function (t, o) {
                    var n = cc.instantiate(e.contentPrefab);
                    n.getComponent(l.default).init(t, o), e.contentNode[3 - o].addChild(n);
                });
            }),
            (t.prototype.showShain = function () {
                var e = this;
                this._data.forEach(function (t, o) {
                    s.playData.checkTalentHasOpen(t.id.toString())
                        ? ((e.contentShain[3 - o].color = new cc.Color().fromHEX("#00EAEB")),
                          (e.levelItemSpArr[3 - o].spriteFrame = e.normalGetSp))
                        : ((e.contentShain[3 - o].color = new cc.Color().fromHEX("#6990DB")),
                          (e.levelItemSpArr[3 - o].spriteFrame = e.notGetSp));
                    var n = s.playData.checkTalentHasOpen((t.id + 1).toString())
                        ? new cc.Color().fromHEX("#06D9EE")
                        : new cc.Color().fromHEX("#6990DB");
                    e.linkShain[3 - o].color = n;
                }),
                    (this.linkShain[3].active = this.level != c.talentMgr.getLen());
            }),
            (t.prototype.showSkillNode = function () {
                var e = this._data[0].openlevel,
                    t = c.talentMgr.getTalentSkillData(e);
                if (
                    ((this.skillLinkLine.active = !0),
                    (this.skillLinkLine.height += 500 * (this._data[0].openlevel - 1)),
                    t)
                ) {
                    var o = cc.instantiate(this.contentPrefab);
                    o.getComponent(l.default).init(t, -1), this.skillNode.addChild(o);
                } else this.skillContent.active = !1;
            }),
            (t.prototype.showSkillShain = function () {
                var e = c.talentMgr.getTalentSkillData(this.level);
                e &&
                    (s.playData.checkTalentHasOpen(e.id.toString())
                        ? ((this.skillItemSp.spriteFrame = this.skillGetSp),
                          (this.skillShain.color = new cc.Color().fromHEX("#EBA40C")),
                          (this.skillLinkLine.color = new cc.Color().fromHEX("#EBA40C")))
                        : ((this.skillItemSp.spriteFrame = this.notGetSp),
                          (this.skillShain.color = new cc.Color().fromHEX("#6990DB")),
                          (this.skillLinkLine.color = new cc.Color().fromHEX("#6990DB"))));
            }),
            i([d(cc.Label)], t.prototype, "levelLabel", void 0),
            i([d(cc.Prefab)], t.prototype, "contentPrefab", void 0),
            i([d(cc.Node)], t.prototype, "skillNode", void 0),
            i([d(cc.Node)], t.prototype, "skillShain", void 0),
            i([d(cc.Node)], t.prototype, "skillLinkLine", void 0),
            i([d(cc.Node)], t.prototype, "skillContent", void 0),
            i([d(cc.Sprite)], t.prototype, "skillItemSp", void 0),
            i([d(cc.Sprite)], t.prototype, "levelItemSpArr", void 0),
            i([d(cc.Node)], t.prototype, "contentNode", void 0),
            i([d(cc.Node)], t.prototype, "contentShain", void 0),
            i([d(cc.Node)], t.prototype, "linkShain", void 0),
            i([d(cc.SpriteFrame)], t.prototype, "notGetSp", void 0),
            i([d(cc.SpriteFrame)], t.prototype, "normalGetSp", void 0),
            i([d(cc.SpriteFrame)], t.prototype, "skillGetSp", void 0),
            i([u], t)
        );
    })(r.default);
o.default = h;
