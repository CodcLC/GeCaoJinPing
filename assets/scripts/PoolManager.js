var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.poolMgr = o.PoolManager = void 0);
var n = (function () {
    function e() {
        this.poolMap = new Map();
    }
    return (
        (e.instance = function () {
            return e._instance || (e._instance = new e()), e._instance;
        }),
        (e.prototype.getNodeFromMap = function (e) {
            var t = e.name,
                o = this.poolMap.get(t);
            return o || ((o = new cc.NodePool()), this.poolMap.set(t, o)), o.size() <= 0 ? cc.instantiate(e) : o.get();
        }),
        (e.prototype.putNodeToPool = function (e) {
            var t = this.poolMap.get(e.name);
            e.removeFromParent(), t ? t.put(e) : ((t = new cc.NodePool()).put(e), this.poolMap.set(e.name, t));
        }),
        (e._instance = null),
        e
    );
})();
(o.PoolManager = n), (o.poolMgr = n.instance());
