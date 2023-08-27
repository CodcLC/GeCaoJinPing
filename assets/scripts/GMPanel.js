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
var r = e("JsonManager"),
    s = e("GameComponent"),
    c = e("ViewUrl"),
    l = e("RoleData"),
    p = e("GameManager"),
    u = e("UIManager"),
    d = e("LanguageManager"),
    h = e("PlayerData"),
    g = e("GameView"),
    m = e("HeroData"),
    f = e("ItemManager"),
    y = cc._decorator,
    v = y.ccclass,
    M = y.property,
    _ = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.itemNode = null),
                (t.eng = null),
                (t.chs = null),
                (t.levelEdit = null),
                (t.confirmLevel = null),
                (t.costEdit = null),
                (t.addGold = null),
                (t.addDiamond = null),
                (t.addEnergy = null),
                (t.addProller = null),
                (t.addKey = null),
                (t.addHeroChips = null),
                (t.addHeroExps = null),
                (t.addBoom = null),
                (t.addRedBag = null),
                (t.invincibleBtn = null),
                (t.invincibleLabel = null),
                (t.normalSpeed = null),
                (t.speedFive = null),
                (t.speedTen = null),
                (t.equipEdit = null),
                (t.addEquip = null),
                (t.getLabel = null),
                (t.clickId = [
                    10151, 10031, 10061, 10051, 10101, 10041, 10111, 10081, 10011, 10091, 10071, 10161, 10021, 10121,
                    10001, 10131, 10141
                ]),
                (t.levelPass = function () {
                    for (var e = Number(t.levelEdit.string), o = 1; o <= e; o++) h.playData.passLevelGM(o);
                }),
                (t.addEquipClick = function () {
                    var e = Number(t.equipEdit.string);
                    e < 1e5 ? m.heroData.addMap(e, 50) : m.heroData.addEquip(e, 1);
                }),
                (t.addGoldClick = function () {
                    h.playData.addGold(Number(t.costEdit.string));
                }),
                (t.addDiamondClick = function () {
                    h.playData.addGem(Number(t.costEdit.string));
                }),
                (t.addEnergyClick = function () {
                    h.playData.addEnergy(Number(t.costEdit.string));
                }),
                (t.addProllerClick = function () {
                    h.playData.addPropeller(Number(t.costEdit.string));
                }),
                (t.addKeys = function () {
                    h.playData.addSSRKey(Number(t.costEdit.string || 10)),
                        h.playData.addNormalKey(Number(t.costEdit.string || 10)),
                        h.playData.addSuperKey(Number(t.costEdit.string || 10));
                }),
                (t.addHeroChip = function () {
                    h.playData.addHeroDebris(3001, Number(t.costEdit.string || 10)),
                        h.playData.addHeroDebris(3002, Number(t.costEdit.string || 10)),
                        h.playData.addHeroDebris(3003, Number(t.costEdit.string || 10));
                }),
                (t.addHeroExp = function () {
                    h.playData.addHeroExperience(Number(t.costEdit.string || 100));
                }),
                (t.addBoomNum = function () {
                    f.itemMgr.addItemData(1018, Number(t.costEdit.string || 10), "GM");
                }),
                (t.addRedBagNum = function () {
                    f.itemMgr.addItemData(1019, Number(t.costEdit.string || 10), "GM");
                }),
                (t.normalClick = function () {
                    g.default.instance().resetSpeed(1);
                }),
                (t.fiveClick = function () {
                    g.default.instance().resetSpeed(0.05);
                }),
                (t.tenClick = function () {
                    g.default.instance().resetSpeed(0.1);
                }),
                (t.invincibleState = function () {
                    l.roleData.getRole().debugInvincible(),
                        (t.invincibleLabel.string =
                            "无敌: " + (l.roleData.getRole().getDebugInvincible() ? "开" : "关"));
                }),
                (t.clickHandle = function (e) {
                    var o = l.roleData.getRole(),
                        n = e.target.getSiblingIndex(),
                        a = r.JsonMgr.getEquipById(t.clickId[n]),
                        i = o.getFromEqpMap(a.type);
                    !i && o.getRoleEquipLen() >= 6
                        ? u.UIMgr.showView(c.ViewUrl.commonTip, null, "技能达到数量上限！")
                        : i && i.issuper
                        ? u.UIMgr.showView(c.ViewUrl.commonTip, null, "该技能已达最大等级！")
                        : o.upLevel(a);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.start = function () {
                var e = this;
                p.gameMgr.setIsPause(!0),
                    this.itemNode.children.forEach(function (t) {
                        t.on(cc.Node.EventType.TOUCH_END, e.clickHandle);
                    }),
                    this.node.on(cc.Node.EventType.TOUCH_END, function () {
                        e.closeView();
                    }),
                    this.eng.on(cc.Node.EventType.TOUCH_END, function () {
                        d.langMgr.lang = "eng";
                    }),
                    this.chs.on(cc.Node.EventType.TOUCH_END, function () {
                        d.langMgr.lang = "chs";
                    }),
                    this.confirmLevel.on(cc.Node.EventType.TOUCH_END, this.levelPass, this),
                    this.addGold.on(cc.Node.EventType.TOUCH_END, this.addGoldClick, this),
                    this.addDiamond.on(cc.Node.EventType.TOUCH_END, this.addDiamondClick, this),
                    this.addEnergy.on(cc.Node.EventType.TOUCH_END, this.addEnergyClick, this),
                    this.addProller.on(cc.Node.EventType.TOUCH_END, this.addProllerClick, this),
                    this.addKey.on(cc.Node.EventType.TOUCH_END, this.addKeys, this),
                    this.addHeroChips.on(cc.Node.EventType.TOUCH_END, this.addHeroChip, this),
                    this.addHeroExps.on(cc.Node.EventType.TOUCH_END, this.addHeroExp, this),
                    this.addBoom.on(cc.Node.EventType.TOUCH_END, this.addBoomNum, this),
                    this.addRedBag.on(cc.Node.EventType.TOUCH_END, this.addRedBagNum, this),
                    this.speedFive.on(cc.Node.EventType.TOUCH_END, this.fiveClick, this),
                    this.speedTen.on(cc.Node.EventType.TOUCH_END, this.tenClick, this),
                    this.normalSpeed.on(cc.Node.EventType.TOUCH_END, this.normalClick, this),
                    this.addEquip.on(cc.Node.EventType.TOUCH_END, this.addEquipClick, this),
                    this.invincibleBtn.on(cc.Node.EventType.TOUCH_END, this.invincibleState, this),
                    (this.invincibleLabel.string =
                        "无敌: " + (l.roleData.getRole().getDebugInvincible() ? "开" : "关")),
                    (this.getLabel.string = p.gameMgr.getEquipment() + " , " + p.gameMgr.getMap());
            }),
            (t.prototype.getUrl = function () {
                return c.ViewUrl.GMPanel;
            }),
            i([M(cc.Node)], t.prototype, "itemNode", void 0),
            i([M(cc.Node)], t.prototype, "eng", void 0),
            i([M(cc.Node)], t.prototype, "chs", void 0),
            i([M(cc.EditBox)], t.prototype, "levelEdit", void 0),
            i([M(cc.Node)], t.prototype, "confirmLevel", void 0),
            i([M(cc.EditBox)], t.prototype, "costEdit", void 0),
            i([M(cc.Node)], t.prototype, "addGold", void 0),
            i([M(cc.Node)], t.prototype, "addDiamond", void 0),
            i([M(cc.Node)], t.prototype, "addEnergy", void 0),
            i([M(cc.Node)], t.prototype, "addProller", void 0),
            i([M(cc.Node)], t.prototype, "addKey", void 0),
            i([M(cc.Node)], t.prototype, "addHeroChips", void 0),
            i([M(cc.Node)], t.prototype, "addHeroExps", void 0),
            i([M(cc.Node)], t.prototype, "addBoom", void 0),
            i([M(cc.Node)], t.prototype, "addRedBag", void 0),
            i([M(cc.Node)], t.prototype, "invincibleBtn", void 0),
            i([M(cc.Label)], t.prototype, "invincibleLabel", void 0),
            i([M(cc.Node)], t.prototype, "normalSpeed", void 0),
            i([M(cc.Node)], t.prototype, "speedFive", void 0),
            i([M(cc.Node)], t.prototype, "speedTen", void 0),
            i([M(cc.EditBox)], t.prototype, "equipEdit", void 0),
            i([M(cc.Node)], t.prototype, "addEquip", void 0),
            i([M(cc.Label)], t.prototype, "getLabel", void 0),
            i([v], t)
        );
    })(s.GameComponent);
o.default = _;
