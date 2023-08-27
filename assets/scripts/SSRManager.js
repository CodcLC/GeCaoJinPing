var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.ssrMgr = o.SSRManager = void 0);
var n = e("JsonManager"),
    a = (function () {
        function e() {
            (this.ssrWeaponArr = []), (this.resolveWeaponArr = []);
        }
        return (
            (e.instance = function () {
                return null == e._instance && (e._instance = new e()), e._instance;
            }),
            (e.prototype.getSSRWeapon = function () {
                var e = this;
                return (
                    this.ssrWeaponArr.length ||
                        n.JsonMgr.getPoolById(1010405)
                            .idrate.split(";")
                            .forEach(function (t) {
                                var o = t.split("|");
                                e.ssrWeaponArr.push(Number(o[0]));
                            }),
                    this.ssrWeaponArr
                );
            }),
            (e.prototype.getResolveWeapon = function () {
                var e = this;
                return (
                    this.resolveWeaponArr.length ||
                        o.ssrMgr.getSSRWeapon().forEach(function (t) {
                            var o = n.JsonMgr.getWeaponById(t);
                            if (o.specialtype)
                                e.resolveWeaponArr && e.resolveWeaponArr[0]
                                    ? e.resolveWeaponArr[0].push(t)
                                    : (e.resolveWeaponArr[0] = [t]);
                            else {
                                var a = o.grade;
                                e.resolveWeaponArr && e.resolveWeaponArr[a]
                                    ? e.resolveWeaponArr[a].push(t)
                                    : (e.resolveWeaponArr[a] = [t]);
                            }
                        }),
                    this.resolveWeaponArr
                );
            }),
            e
        );
    })();
(o.SSRManager = a), (o.ssrMgr = a.instance());
