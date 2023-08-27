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
    s = e("GameView"),
    c = e("PoolManager"),
    l = e("DroneBullet"),
    p = e("Joystick"),
    u = e("Aim"),
    d = e("event-kit"),
    h = e("ClientEvents"),
    g = e("GameManager"),
    m = e("audioManager"),
    f = e("JsonManager"),
    y = e("RoleWeaponManager"),
    v = cc._decorator,
    M = v.ccclass,
    _ = v.property,
    C = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.bulletPrefab = null),
                (t.aimPrefab = null),
                (t.icon = null),
                (t.leftNormalFrame = null),
                (t.rightNormalFrame = null),
                (t.superFrame = null),
                (t.aniNode = null),
                (t.equipJson = null),
                (t.moveDir = null),
                (t.startMove = 0),
                (t.offsetX = 0),
                (t.offsetY = 0),
                (t.baseMag = 0),
                (t.personMove = !1),
                (t.isMove = !1),
                (t.dispose = new d.CompositeDisposable()),
                (t.cd = 0),
                (t.nowCount = 0),
                (t.checkCount = 0),
                (t.oneBulletDr = 0),
                (t.refreshDroneJson = function (e) {
                    t.equipJson.type === e.type
                        ? ((t.equipJson = e), e.issuper && t.initSupper())
                        : e.issuper && t.backToPool();
                }),
                (t.personMoveStart = function () {
                    (t.isMove = !0), (t.personMove = !0), t.node.stopAllActions();
                }),
                (t.personMoveEnd = function () {
                    t.personMove = !1;
                }),
                (t.runBullet = function () {
                    var e = t.nowCount,
                        o =
                            (((t.equipJson.type === y.EquipType.droneB ? -360 : 360) / t.checkCount) * e * Math.PI) /
                            180;
                    t.startBullet(r.roleData.getRole().getLastPos(o), o),
                        m.audioMgr.startEffect(f.JsonMgr.getAudioById(t.equipJson.audioid).audioname),
                        t.nowCount++;
                }),
                (t.runSuperBullet = function () {
                    var e = t.nowCount,
                        o = ((360 / t.checkCount) * e * Math.PI) / 90;
                    t.startBullet(r.roleData.getRole().getLastPos(o), o),
                        t.startBullet(r.roleData.getRole().getLastPos(-o), -o),
                        m.audioMgr.startEffect(f.JsonMgr.getAudioById(t.equipJson.audioid).audioname),
                        t.nowCount++;
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.init = function (e) {
                this.dispose.add(h.ClientEvents.REFRESH_DRONE_JSON.on(this.refreshDroneJson)), this.updateJson(e);
                var t = r.roleData.getRole().getPos();
                (this.offsetY = 0),
                    this.equipJson.type === y.EquipType.droneB
                        ? ((this.icon.spriteFrame = this.rightNormalFrame),
                          this.aniNode.play("droneB"),
                          (this.offsetX = 120))
                        : ((this.icon.spriteFrame = this.leftNormalFrame),
                          this.aniNode.play("droneA"),
                          (this.offsetX = -120)),
                    this.node.setPosition(t.x + this.offsetX, t.y + this.offsetY),
                    (this.baseMag = cc.v2(this.offsetX, 0).mag()),
                    s.default.instance().eBoomNode.addChild(this.node),
                    (this.node.zIndex = cc.macro.MAX_ZINDEX),
                    (this.checkCount = this.equipJson.amount / 2),
                    this.equipJson.issuper && this.initSupper(),
                    p.instance.on(cc.Node.EventType.TOUCH_MOVE, this.personMoveStart, this),
                    p.instance.on(cc.Node.EventType.TOUCH_END, this.personMoveEnd, this);
            }),
            (t.prototype.initSupper = function () {
                (this.icon.spriteFrame = this.superFrame),
                    this.node.stopAllActions(),
                    (this.offsetX = 120),
                    (this.offsetY = 0);
                var e = r.roleData.getRole().getPos();
                this.node.setPosition(e.x + this.offsetX, e.y + this.offsetY),
                    (this.baseMag = cc.v2(this.offsetX, this.offsetY).mag()),
                    this.unscheduleAllCallbacks(),
                    this.aniNode.play("droneS"),
                    (this.checkCount = this.equipJson.amount / 2),
                    (this.cd = this.nowCount = 0);
            }),
            (t.prototype.backToPool = function () {
                p.instance.off(cc.Node.EventType.TOUCH_MOVE, this.personMoveStart, this),
                    p.instance.off(cc.Node.EventType.TOUCH_END, this.personMoveEnd, this),
                    this.dispose.dispose(),
                    c.poolMgr.putNodeToPool(this.node),
                    this.unscheduleAllCallbacks(),
                    this.node.stopAllActions();
            }),
            (t.prototype.updateJson = function (e) {
                this.equipJson = e;
            }),
            (t.prototype.initBullet = function () {
                this.runBullet();
            }),
            (t.prototype.startBullet = function (e, t) {
                c.poolMgr
                    .getNodeFromMap(this.bulletPrefab)
                    .getComponent(l.default)
                    .initBullet(e, cc.v2(this.node.x, this.node.y), t, this.equipJson, this.nowCount),
                    c.poolMgr.getNodeFromMap(this.aimPrefab).getComponent(u.default).init(e);
            }),
            (t.prototype.checkPos = function () {
                var e = r.roleData.getRole().getPos();
                return (
                    this.node.x > e.x + this.offsetX - 5 &&
                    this.node.x < e.x + this.offsetX + 5 &&
                    this.node.y > e.y + this.offsetY - 5 &&
                    this.node.y < e.y + this.offsetY + 5
                );
            }),
            (t.prototype.update = function (e) {
                if (!(e > 0.5 || g.gameMgr.getIsPause()))
                    if (this.cd <= 0) this.cd = this.equipJson.cd;
                    else {
                        if (((this.cd -= e), this.cd <= 0 && (this.nowCount = 0), this.nowCount >= this.checkCount))
                            return;
                        this.oneBulletDr <= 0 &&
                            ((this.oneBulletDr = this.equipJson.duration / this.checkCount),
                            this.equipJson.issuper ? this.runSuperBullet() : this.runBullet()),
                            (this.oneBulletDr -= e);
                    }
            }),
            (t.prototype.lateUpdate = function (e) {
                if (!(e > 0.5) && !g.gameMgr.getIsPause() && (this.personMove || this.isMove))
                    if (this.startMove <= 1) this.startMove += e;
                    else {
                        var t = r.roleData.getRole().getPos();
                        this.moveDir = cc
                            .v2(t.x + this.offsetX, t.y + this.offsetY)
                            .sub(this.node.getPosition())
                            .normalize();
                        var o = cc.v2();
                        this.node.getPosition(o);
                        var n = r.roleData.getRole().getSpeed(),
                            a = o.add(this.moveDir.mul(n * e * 65)),
                            i = this.moveDir.mul(n);
                        this.node.setPosition(a),
                            i.x < 0 ? (this.node.scaleX = -1) : (this.node.scaleX = 1),
                            this.checkPos() && !this.personMove && ((this.startMove = 0), (this.isMove = !1));
                    }
            }),
            i([_(cc.Prefab)], t.prototype, "bulletPrefab", void 0),
            i([_(cc.Prefab)], t.prototype, "aimPrefab", void 0),
            i([_(cc.Sprite)], t.prototype, "icon", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "leftNormalFrame", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "rightNormalFrame", void 0),
            i([_(cc.SpriteFrame)], t.prototype, "superFrame", void 0),
            i([_(cc.Animation)], t.prototype, "aniNode", void 0),
            i([M], t)
        );
    })(cc.Component);
o.default = C;
