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
var r = e("RoleData"),
    s = e("LoopMap"),
    c = e("PoolManager"),
    l = e("JsonManager"),
    p = e("MonsterManager"),
    u = e("GameManager"),
    d = e("UIManager"),
    h = e("ViewUrl"),
    g = e("CommonUtil"),
    m = e("audioManager"),
    f = e("audioConst"),
    y = e("LevelManager"),
    v = cc._decorator,
    M = v.ccclass,
    _ = v.property,
    C = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.isMove = !1),
                (t.tag = 0),
                (t.blue = null),
                (t.red = null),
                (t.chestFrame = null),
                (t.magnetFrame = null),
                (t.boom = null),
                (t.food = null),
                (t.goldArr = []),
                (t.map = null),
                (t.weapon = null),
                (t.icon = null),
                (t.aniNodes = []),
                (t.lxAni = []),
                (t.starAni = null),
                (t.starAni1 = null),
                (t.normalAniParent = null),
                (t.chestAniParent = null),
                (t.addValue = 0),
                (t.speed = 0),
                (t.json = null),
                (t.data = null),
                (t.moveDuration = 0),
                (t.maxSpeed = 0),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.startMove = function (e) {
                void 0 === e && (e = 20), (this.node.active = !0), (this.isMove = !0), (this.maxSpeed = this.speed = e);
            }),
            (t.prototype.setSprite = function (e) {
                switch (
                    ((this.data = e),
                    (this.json = l.JsonMgr.getItemJsonById(e.id)),
                    s.default.instance().addExp(this.node),
                    this.json.type)
                ) {
                    case 2:
                        (this.normalAniParent.active = !1), (this.chestAniParent.active = !1), this.initWithExp();
                        break;
                    case 3:
                        this.initChestDrop(), this.initWithChest();
                        break;
                    case 4:
                        this.initNormalAni(), this.initWithMagnet();
                        break;
                    case 5:
                        this.initNormalAni(), this.initWithFood();
                        break;
                    case 6:
                        this.initNormalAni(), this.initWithBoom();
                        break;
                    case 7:
                        this.initNormalAni(), this.initWithGold();
                        break;
                    case 16:
                        this.initNormalAni(), this.initWithMap();
                        break;
                    case 17:
                        this.initNormalAni(), this.initWithWeapon();
                }
            }),
            (t.prototype.initNormalAni = function (e, t) {
                var o = this;
                void 0 === e && (e = 5),
                    void 0 === t && (t = "normalDropAni1"),
                    this.aniNodes.forEach(function (e, n) {
                        o.scheduleOnce(function () {
                            e.play(t, 0);
                        }, 0.48 * n);
                    }),
                    this.schedule(function () {
                        o.aniNodes.forEach(function (e, n) {
                            o.scheduleOnce(function () {
                                e.play(t, 0);
                            }, 0.48 * n);
                        });
                    }, e),
                    (this.chestAniParent.active = !1),
                    (this.normalAniParent.active = !0);
            }),
            (t.prototype.initChestDrop = function () {
                var e = this;
                (this.chestAniParent.active = !0),
                    (this.normalAniParent.active = !0),
                    this.aniNodes.forEach(function (t, o) {
                        e.scheduleOnce(function () {
                            t.play("normalDropAni2", 0);
                        }, 0.48 * o);
                    }),
                    this.starAni.play("dropStar", 0),
                    this.starAni1.play("dropStar", 0),
                    this.lxAni.forEach(function (t, o) {
                        e.scheduleOnce(function () {
                            t.play("lxAni", 0);
                        }, 0.48 * o);
                    });
            }),
            (t.prototype.getIsExp = function () {
                return 2 === this.json.type;
            }),
            (t.prototype.initWithExp = function () {
                (this.icon.spriteFrame = 1004 === this.data.id ? this.blue : this.red),
                    (this.addValue = this.data.value);
            }),
            (t.prototype.initWithChest = function () {
                this.icon.spriteFrame = this.chestFrame;
            }),
            (t.prototype.initWithMagnet = function () {
                this.icon.spriteFrame = this.magnetFrame;
            }),
            (t.prototype.initWithFood = function () {
                this.icon.spriteFrame = this.food;
            }),
            (t.prototype.initWithBoom = function () {
                this.icon.spriteFrame = this.boom;
            }),
            (t.prototype.initWithGold = function () {
                switch (this.data.id) {
                    case 1010:
                        this.icon.spriteFrame = this.goldArr[0];
                        break;
                    case 1011:
                        this.icon.spriteFrame = this.goldArr[1];
                        break;
                    case 1012:
                        this.icon.spriteFrame = this.goldArr[2];
                }
            }),
            (t.prototype.initWithMap = function () {
                this.icon.spriteFrame = this.map;
            }),
            (t.prototype.initWithWeapon = function () {
                this.icon.spriteFrame = this.weapon;
            }),
            (t.prototype.init = function (e) {
                (this.tag = e), (this.maxSpeed = this.speed = 10);
            }),
            (t.prototype.lateUpdate = function (e) {
                if (!(e > 0.5) && !u.gameMgr.getIsPause() && this.isMove) {
                    var t = r.roleData.getRole().getPos(),
                        o = this.node.getPosition();
                    if (Math.abs(t.sub(o).mag()) <= 20)
                        return (
                            this.speed > 32
                                ? s.default.instance().deleteFromAll(this.tag)
                                : s.default.instance().deleteFromLayer(this.tag),
                            this.doWithType(),
                            (this.moveDuration = 0),
                            (this.speed = this.maxSpeed = 0),
                            c.poolMgr.putNodeToPool(this.node),
                            (this.isMove = !1),
                            void this.unscheduleAllCallbacks()
                        );
                    if (this.speed > 22) {
                        var n = o.sub(t).normalize(),
                            a = this.node.x - 30 * n.x * e * 65,
                            i = this.node.y - 30 * n.y * e * 65;
                        this.node.setPosition(a, i);
                    } else
                        (n = o.sub(t).normalize()),
                            (this.speed = 6),
                            (this.maxSpeed = 20),
                            this.moveDuration < 0.2
                                ? ((this.speed -= this.maxSpeed * (e / 0.2)),
                                  (a = this.node.x + n.x * this.speed * e * 65),
                                  (i = this.node.y + n.y * this.speed * e * 65),
                                  this.node.setPosition(a, i))
                                : (this.speed < this.maxSpeed && (this.speed += this.maxSpeed * e * 15),
                                  (a = this.node.x - n.x * this.speed * e * 65),
                                  (i = this.node.y - n.y * this.speed * e * 65),
                                  this.node.setPosition(a, i)),
                            (this.moveDuration += e);
                }
            }),
            (t.prototype.doWithType = function () {
                switch ((y.levelMgr.setPropsDropMap(this.json.id), this.json.type)) {
                    case 2:
                        this.doWithExp();
                        break;
                    case 3:
                        this.doWithChest();
                        break;
                    case 4:
                        this.doWithMagnet();
                        break;
                    case 5:
                        this.doWithFood();
                        break;
                    case 6:
                        this.doWithBoom();
                        break;
                    case 7:
                        this.doWithGold();
                        break;
                    case 16:
                        this.doWithMap();
                        break;
                    case 17:
                        this.doWithWeapon();
                }
            }),
            (t.prototype.doWithExp = function () {
                r.roleData.getRole().addExp(this.addValue);
            }),
            (t.prototype.doWithChest = function () {
                if ((u.gameMgr.addGameItemCount(this.json), !u.gameMgr.getIsPause())) {
                    u.gameMgr.setIsPause(!0);
                    var e = l.JsonMgr.getDefineConstantByName("TurntableWeight").split(","),
                        t = [];
                    e.forEach(function (e) {
                        t.push(Number(e));
                    });
                    var o = g.CommonUtil.getWeightRandom(t),
                        n = 1 + 2 * o > 3 ? 1 : 1 + 2 * o;
                    d.UIMgr.showView(h.ViewUrl.lanternView, null, n);
                }
            }),
            (t.prototype.doWithMagnet = function () {
                u.gameMgr.addGameItemCount(this.json),
                    m.audioMgr.startEffect(f.AudioConst.CITIE_XISHOU),
                    s.default.instance().getAllExp();
            }),
            (t.prototype.doWithFood = function () {
                u.gameMgr.addGameItemCount(this.json), r.roleData.getRole().recoveryHpByFood();
            }),
            (t.prototype.doWithBoom = function () {
                u.gameMgr.addGameItemCount(this.json), u.gameMgr.time >= 900 || p.default.instance().boomAllMonster();
            }),
            (t.prototype.doWithGold = function () {
                var e = r.roleData.getRole().getGoldAdd();
                switch ((u.gameMgr.addGameItemCount(this.json), this.data.id)) {
                    case 1010:
                        u.gameMgr.addGold(40 * e);
                        break;
                    case 1011:
                        u.gameMgr.addGold(100 * e);
                        break;
                    case 1012:
                        u.gameMgr.addGold(250 * e);
                }
            }),
            (t.prototype.doWithMap = function () {
                u.gameMgr.addMap();
            }),
            (t.prototype.doWithWeapon = function () {
                u.gameMgr.addEquipment();
            }),
            (t.prototype.getWorldPos = function () {
                return this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
            }),
            i([_(cc.SpriteFrame)], t.prototype, "blue", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "red", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "chestFrame", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "magnetFrame", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "boom", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "food", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "goldArr", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "map", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "weapon", void 0),
            i([_(cc.Sprite)], t.prototype, "icon", void 0),
            i([_(cc.Animation)], t.prototype, "aniNodes", void 0),
            i([_(cc.Animation)], t.prototype, "lxAni", void 0),
            i([_(cc.Animation)], t.prototype, "starAni", void 0),
            i([_(cc.Animation)], t.prototype, "starAni1", void 0),
            i([_(cc.Node)], t.prototype, "normalAniParent", void 0),
            i([_(cc.Node)], t.prototype, "chestAniParent", void 0),
            i([M], t)
        );
    })(cc.Component);
o.default = C;
