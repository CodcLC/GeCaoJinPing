var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.roleData = o.RoleData = void 0);
var n = e("MonsterManager"),
    a = (function () {
        function e() {
            this.role = null;
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.setRole = function (e) {
                this.role = e;
            }),
            (e.prototype.getRole = function () {
                return this.role;
            }),
            (e.prototype.addBuff = function () {}),
            (e.prototype.JudgeDamage = function (e, t) {
                var o = this,
                    a = [];
                return (
                    n.default
                        .instance()
                        .getEnemyMap()
                        .forEach(function (n) {
                            var i = t ? t.getPos() : o.role.getPos(),
                                r = n.getPos(),
                                s = Math.abs(Math.floor(r.x - i.x)),
                                c = Math.abs(Math.floor(r.y - i.y));
                            Math.sqrt(s * s + c * c) <= e + 15 && a.push(n);
                        }),
                    a
                );
            }),
            (e.prototype.judgeDamageFly = function (e, t) {
                var o = this,
                    a = [];
                return (
                    n.default.instance().flyEnemyMap.forEach(function (n) {
                        var i = t ? t.getPos() : o.role.getPos(),
                            r = n.getPos(),
                            s = Math.abs(Math.floor(r.x - i.x)),
                            c = Math.abs(Math.floor(r.y - i.y));
                        Math.sqrt(s * s + c * c) <= e + 15 && a.push(n);
                    }),
                    a
                );
            }),
            (e.prototype.JudgeDamageBox = function (e, t) {
                var o = this,
                    a = [];
                return (
                    n.default.instance().boxMap.forEach(function (n) {
                        var i = t ? t.getPos() : o.role.getPos(),
                            r = n.getPos(),
                            s = Math.abs(Math.floor(r.x - i.x)),
                            c = Math.abs(Math.floor(r.y - i.y));
                        Math.sqrt(s * s + c * c) <= e + 25 && a.push(n);
                    }),
                    a
                );
            }),
            (e.prototype.judgeDamageGas = function (e, t) {
                var o = this;
                n.default
                    .instance()
                    .getGasMap()
                    .forEach(function (n) {
                        var a = t ? t.getPos() : o.role.getPos(),
                            i = n.getPos(),
                            r = Math.abs(Math.floor(i.x - a.x)),
                            s = Math.abs(Math.floor(i.y - a.y));
                        Math.sqrt(r * r + s * s) <= e + 65 && n.backToPool();
                    });
            }),
            (e.prototype.judgeDamageRoleGas = function (e, t) {
                var o = t.getPos(),
                    n = this.role.getPos(),
                    a = Math.abs(Math.floor(n.x - o.x)),
                    i = Math.abs(Math.floor(n.y - o.y));
                return Math.sqrt(a * a + i * i) <= e + 25 ? this.role : null;
            }),
            (e._instance = null),
            e
        );
    })();
(o.RoleData = a), (o.roleData = a.instance());
