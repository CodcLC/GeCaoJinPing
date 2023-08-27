var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.UIMgr = void 0);
var n = e("UIUtil"),
    a = e("ViewUrl"),
    i = e("GameView"),
    r = e("ClientEvents"),
    s = e("AutoPopManager"),
    c = new cc.Node(),
    l = (function () {
        function e() {
            var e = this;
            (this.viewMap = new Map()),
                (this.uiLayer = null),
                (this.mapLayer = null),
                (this.canvas = null),
                (this.canvasMinX = -1),
                (this.canvasMaxX = -1),
                (this.canvasMinY = -1),
                (this.canvasMaxY = -1),
                (this.loopMap = null),
                (this.role = null),
                (this.roleCamera = null),
                (this.getView = function (t) {
                    var o = e.prefabUrl(t);
                    return e.viewMap.get(o);
                }),
                (this.deleteView = function (t) {
                    var o = e.prefabUrl(t);
                    return e.viewMap.delete(o);
                }),
                (this.clearViewMap = function () {
                    e.viewMap.clear();
                });
        }
        return (
            (e.prototype.setRoleCamera = function (e) {
                this.roleCamera = e;
            }),
            (e.prototype.getRoleCamera = function () {
                return this.roleCamera;
            }),
            (e.prototype.setCanvas = function (e) {
                this.canvas = e;
            }),
            (e.prototype.setUILayer = function (e) {
                this.uiLayer = e;
            }),
            (e.prototype.setMapLayer = function (e) {
                this.mapLayer = e;
            }),
            (e.prototype.getUILayer = function () {
                return this.uiLayer;
            }),
            (e.prototype.getMapLayer = function () {
                return this.mapLayer;
            }),
            (e.prototype.getCanvasRect = function () {
                return (
                    -1 === this.canvasMinX &&
                        ((this.canvasMinX = this.canvas.convertToWorldSpaceAR(cc.v2(-this.canvas.width / 2, 0)).x),
                        (this.canvasMaxX = this.canvas.convertToWorldSpaceAR(cc.v2(this.canvas.width / 2, 0)).x),
                        (this.canvasMinY = this.canvas.convertToWorldSpaceAR(cc.v2(0, -this.canvas.height / 2)).y),
                        (this.canvasMaxY = this.canvas.convertToWorldSpaceAR(cc.v2(0, this.canvas.height / 2)).y)),
                    {minX: this.canvasMinX, maxX: this.canvasMaxX, minY: this.canvasMinY, maxY: this.canvasMaxY}
                );
            }),
            (e.prototype.getCanvas = function () {
                return this.canvas;
            }),
            (e.prototype.hasView = function (e) {
                return null != this.getView(e);
            }),
            (e.prototype.showView = function (e, t, o, a, i, r, s) {
                var l = this;
                void 0 === t && (t = null),
                    void 0 === o && (o = null),
                    void 0 === a && (a = null),
                    void 0 === i && (i = 998),
                    void 0 === r && (r = !1),
                    void 0 === s && (s = null),
                    (e = this.prefabUrl(e));
                var p = this.viewMap.get(e);
                if (p) {
                    if (p.isValid)
                        return (
                            null != o && (p.data = o),
                            r && (p.isAutoPop = r),
                            s && (p.successCall = s),
                            (p.active = !0),
                            (p.zIndex = i),
                            void (a && a(p))
                        );
                    this.closeView(e);
                }
                this.viewMap.set(e, c),
                    n.UIUtil.dynamicLoadPrefab(e, function (n) {
                        l.viewMap.set(e, n),
                            null != o && (n.data = o),
                            r && (n.isAutoPop = r),
                            s && (n.successCall = s),
                            (n.active = !0),
                            (n.parent = t || cc.director.getScene()),
                            (n.zIndex = i),
                            a && a(n);
                    });
            }),
            (e.prototype.closeView = function (e, t, a, i, c) {
                void 0 === t && (t = !0), void 0 === a && (a = !1), void 0 === i && (i = !1), (e = this.prefabUrl(e));
                var l = this.viewMap.get(e);
                l &&
                    (l.isAutoPop && (l.isAutoPop = !1),
                    l.successCall && (l.successCall = null),
                    t
                        ? (this.viewMap.delete(e), l.data && (l.data = null), n.UIUtil.destroyNode(l))
                        : l.parent && (l.active = !1),
                    i && s.AutoPopMgr.showAutoPop(),
                    c && o.UIMgr.showView(c),
                    r.ClientEvents.REFRESH_ACTIVITY_BTN.emit());
            }),
            (e.prototype.prefabUrl = function (e) {
                return n.UIUtil.prefabUrl(e);
            }),
            (e.prototype.closeSomeView = function (e) {
                for (var t = 0; t < e.length; t++) this.closeView(e[t]);
            }),
            (e.prototype.scaleCamera = function () {}),
            (e.prototype.showGuideWithNode = function (e, t, o) {
                void 0 === o && (o = !0),
                    this.showView(a.ViewUrl.GuideLayer, null, {node: e, func: t, isControl: !1, isClose: o});
            }),
            (e.prototype.showControlGuide = function () {
                this.showView(a.ViewUrl.GuideLayer, i.default.instance().node, {isControl: !0});
            }),
            (e.prototype.showTip = function (e) {
                this.showView(a.ViewUrl.commonTip, null, e);
            }),
            (e.instance = new e()),
            e
        );
    })();
o.UIMgr = l.instance;
