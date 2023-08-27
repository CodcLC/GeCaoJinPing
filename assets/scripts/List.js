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
var r,
    s,
    c,
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = l.disallowMultiple,
    h = l.menu,
    g = l.executionOrder,
    m = l.requireComponent,
    f = e("ListItem");
(function (e) {
    (e[(e.NODE = 1)] = "NODE"), (e[(e.PREFAB = 2)] = "PREFAB");
})(r || (r = {})),
    (function (e) {
        (e[(e.NORMAL = 1)] = "NORMAL"), (e[(e.ADHERING = 2)] = "ADHERING"), (e[(e.PAGE = 3)] = "PAGE");
    })(s || (s = {})),
    (function (e) {
        (e[(e.NONE = 0)] = "NONE"), (e[(e.SINGLE = 1)] = "SINGLE"), (e[(e.MULT = 2)] = "MULT");
    })(c || (c = {}));
var y = (function (e) {
    function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
            (t.templateType = r.NODE),
            (t.tmpNode = null),
            (t.tmpPrefab = null),
            (t._slideMode = s.NORMAL),
            (t.pageDistance = 0.3),
            (t.pageChangeEvent = new cc.Component.EventHandler()),
            (t._virtual = !0),
            (t.cyclic = !1),
            (t.lackCenter = !1),
            (t.lackSlide = !1),
            (t._updateRate = 0),
            (t.frameByFrameRenderNum = 0),
            (t.renderEvent = new cc.Component.EventHandler()),
            (t.selectedMode = c.NONE),
            (t.repeatEventSingle = !1),
            (t.selectedEvent = new cc.Component.EventHandler()),
            (t._selectedId = -1),
            (t._forceUpdate = !1),
            (t._updateDone = !0),
            (t._numItems = 0),
            (t._inited = !1),
            (t._needUpdateWidget = !1),
            (t._aniDelRuning = !1),
            (t._doneAfterUpdate = !1),
            (t.adhering = !1),
            (t._adheringBarrier = !1),
            (t.curPageNum = 0),
            t
        );
    }
    return (
        a(t, e),
        Object.defineProperty(t.prototype, "slideMode", {
            get: function () {
                return this._slideMode;
            },
            set: function (e) {
                this._slideMode = e;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "virtual", {
            get: function () {
                return this._virtual;
            },
            set: function (e) {
                null != e && (this._virtual = e), 0 != this._numItems && this._onScrolling();
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "updateRate", {
            get: function () {
                return this._updateRate;
            },
            set: function (e) {
                e >= 0 && e <= 6 && (this._updateRate = e);
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "selectedId", {
            get: function () {
                return this._selectedId;
            },
            set: function (e) {
                var t,
                    o = this;
                switch (o.selectedMode) {
                    case c.SINGLE:
                        if (!o.repeatEventSingle && e == o._selectedId) return;
                        t = o.getItemByListId(e);
                        var n = void 0;
                        if (
                            (o._selectedId >= 0 ? (o._lastSelectedId = o._selectedId) : (o._lastSelectedId = null),
                            (o._selectedId = e),
                            t && ((n = t.getComponent(f.default)).selected = !0),
                            o._lastSelectedId >= 0 && o._lastSelectedId != o._selectedId)
                        ) {
                            var a = o.getItemByListId(o._lastSelectedId);
                            a && (a.getComponent(f.default).selected = !1);
                        }
                        o.selectedEvent &&
                            cc.Component.EventHandler.emitEvents(
                                [o.selectedEvent],
                                t,
                                e % this._actualNumItems,
                                null == o._lastSelectedId ? null : o._lastSelectedId % this._actualNumItems
                            );
                        break;
                    case c.MULT:
                        if (!(t = o.getItemByListId(e))) return;
                        (n = t.getComponent(f.default)),
                            o._selectedId >= 0 && (o._lastSelectedId = o._selectedId),
                            (o._selectedId = e);
                        var i = !n.selected;
                        n.selected = i;
                        var r = o.multSelected.indexOf(e);
                        i && r < 0 ? o.multSelected.push(e) : !i && r >= 0 && o.multSelected.splice(r, 1),
                            o.selectedEvent &&
                                cc.Component.EventHandler.emitEvents(
                                    [o.selectedEvent],
                                    t,
                                    e % this._actualNumItems,
                                    null == o._lastSelectedId ? null : o._lastSelectedId % this._actualNumItems,
                                    i
                                );
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "numItems", {
            get: function () {
                return this._actualNumItems;
            },
            set: function (e) {
                var t = this;
                if (t.checkInited(!1))
                    if (null == e || e < 0) cc.error("numItems set the wrong::", e);
                    else if (((t._actualNumItems = t._numItems = e), (t._forceUpdate = !0), t._virtual))
                        t._resizeContent(),
                            t.cyclic && (t._numItems = t._cyclicNum * t._numItems),
                            t._onScrolling(),
                            t.frameByFrameRenderNum || t.slideMode != s.PAGE || (t.curPageNum = t.nearestListId);
                    else {
                        t.cyclic && (t._resizeContent(), (t._numItems = t._cyclicNum * t._numItems));
                        var o = t.content.getComponent(cc.Layout);
                        if (
                            (o && (o.enabled = !0),
                            t._delRedundantItem(),
                            (t.firstListId = 0),
                            t.frameByFrameRenderNum > 0)
                        ) {
                            for (
                                var n = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum,
                                    a = 0;
                                a < n;
                                a++
                            )
                                t._createOrUpdateItem2(a);
                            t.frameByFrameRenderNum < t._numItems &&
                                ((t._updateCounter = t.frameByFrameRenderNum), (t._updateDone = !1));
                        } else {
                            for (a = 0; a < t._numItems; a++) t._createOrUpdateItem2(a);
                            t.displayItemNum = t._numItems;
                        }
                    }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "scrollView", {
            get: function () {
                return this._scrollView;
            },
            enumerable: !1,
            configurable: !0
        }),
        (t.prototype.onLoad = function () {
            this._init();
        }),
        (t.prototype.onDestroy = function () {
            var e = this;
            cc.isValid(e._itemTmp) && e._itemTmp.destroy(),
                cc.isValid(e.tmpNode) && e.tmpNode.destroy(),
                e._pool && e._pool.clear();
        }),
        (t.prototype.onEnable = function () {
            this._registerEvent(),
                this._init(),
                this._aniDelRuning &&
                    ((this._aniDelRuning = !1),
                    this._aniDelItem &&
                        (this._aniDelBeforePos &&
                            ((this._aniDelItem.position = this._aniDelBeforePos), delete this._aniDelBeforePos),
                        this._aniDelBeforeScale &&
                            ((this._aniDelItem.scale = this._aniDelBeforeScale), delete this._aniDelBeforeScale),
                        delete this._aniDelItem),
                    this._aniDelCB && (this._aniDelCB(), delete this._aniDelCB));
        }),
        (t.prototype.onDisable = function () {
            this._unregisterEvent();
        }),
        (t.prototype._registerEvent = function () {
            var e = this;
            e.node.on(cc.Node.EventType.TOUCH_START, e._onTouchStart, e, !0),
                e.node.on("touch-up", e._onTouchUp, e),
                e.node.on(cc.Node.EventType.TOUCH_CANCEL, e._onTouchCancelled, e, !0),
                e.node.on("scroll-began", e._onScrollBegan, e, !0),
                e.node.on("scroll-ended", e._onScrollEnded, e, !0),
                e.node.on("scrolling", e._onScrolling, e, !0),
                e.node.on(cc.Node.EventType.SIZE_CHANGED, e._onSizeChanged, e);
        }),
        (t.prototype._unregisterEvent = function () {
            var e = this;
            e.node.off(cc.Node.EventType.TOUCH_START, e._onTouchStart, e, !0),
                e.node.off("touch-up", e._onTouchUp, e),
                e.node.off(cc.Node.EventType.TOUCH_CANCEL, e._onTouchCancelled, e, !0),
                e.node.off("scroll-began", e._onScrollBegan, e, !0),
                e.node.off("scroll-ended", e._onScrollEnded, e, !0),
                e.node.off("scrolling", e._onScrolling, e, !0),
                e.node.off(cc.Node.EventType.SIZE_CHANGED, e._onSizeChanged, e);
        }),
        (t.prototype._init = function () {
            var e = this;
            if (!e._inited)
                if (
                    ((e._scrollView = e.node.getComponent(cc.ScrollView)),
                    (e.content = e._scrollView.content),
                    e.content)
                ) {
                    switch (
                        ((e._layout = e.content.getComponent(cc.Layout)),
                        (e._align = e._layout.type),
                        (e._resizeMode = e._layout.resizeMode),
                        (e._startAxis = e._layout.startAxis),
                        (e._topGap = e._layout.paddingTop),
                        (e._rightGap = e._layout.paddingRight),
                        (e._bottomGap = e._layout.paddingBottom),
                        (e._leftGap = e._layout.paddingLeft),
                        (e._columnGap = e._layout.spacingX),
                        (e._lineGap = e._layout.spacingY),
                        e._colLineNum,
                        (e._verticalDir = e._layout.verticalDirection),
                        (e._horizontalDir = e._layout.horizontalDirection),
                        e.setTemplateItem(cc.instantiate(e.templateType == r.PREFAB ? e.tmpPrefab : e.tmpNode)),
                        (e._slideMode != s.ADHERING && e._slideMode != s.PAGE) ||
                            ((e._scrollView.inertia = !1), (e._scrollView._onMouseWheel = function () {})),
                        e.virtual || (e.lackCenter = !1),
                        (e._lastDisplayData = []),
                        (e.displayData = []),
                        (e._pool = new cc.NodePool()),
                        (e._forceUpdate = !1),
                        (e._updateCounter = 0),
                        (e._updateDone = !0),
                        (e.curPageNum = 0),
                        e.cyclic &&
                            ((e._scrollView._processAutoScrolling = this._processAutoScrolling.bind(e)),
                            (e._scrollView._startBounceBackIfNeeded = function () {
                                return !1;
                            })),
                        e._align)
                    ) {
                        case cc.Layout.Type.HORIZONTAL:
                            switch (e._horizontalDir) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    e._alignCalcType = 1;
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    e._alignCalcType = 2;
                            }
                            break;
                        case cc.Layout.Type.VERTICAL:
                            switch (e._verticalDir) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    e._alignCalcType = 3;
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    e._alignCalcType = 4;
                            }
                            break;
                        case cc.Layout.Type.GRID:
                            switch (e._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    switch (e._verticalDir) {
                                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                            e._alignCalcType = 3;
                                            break;
                                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                            e._alignCalcType = 4;
                                    }
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    switch (e._horizontalDir) {
                                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                            e._alignCalcType = 1;
                                            break;
                                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                            e._alignCalcType = 2;
                                    }
                            }
                    }
                    e.content.removeAllChildren(), (e._inited = !0);
                } else cc.error(e.node.name + "'s cc.ScrollView unset content!");
        }),
        (t.prototype._processAutoScrolling = function (e) {
            this._scrollView._autoScrollAccumulatedTime += 1 * e;
            var t = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
            if (this._scrollView._autoScrollAttenuate) {
                var o = t - 1;
                t = o * o * o * o * o + 1;
            }
            var n = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(t)),
                a = this._scrollView.getScrollEndedEventTiming(),
                i = Math.abs(t - 1) <= a;
            Math.abs(t - 1) <= this._scrollView.getScrollEndedEventTiming() &&
                !this._scrollView._isScrollEndedWithThresholdEventFired &&
                (this._scrollView._dispatchEvent("scroll-ended-with-threshold"),
                (this._scrollView._isScrollEndedWithThresholdEventFired = !0)),
                i && (this._scrollView._autoScrolling = !1);
            var r = n.sub(this._scrollView.getContentPosition());
            this._scrollView._moveContent(this._scrollView._clampDelta(r), i),
                this._scrollView._dispatchEvent("scrolling"),
                this._scrollView._autoScrolling ||
                    ((this._scrollView._isBouncing = !1),
                    (this._scrollView._scrolling = !1),
                    this._scrollView._dispatchEvent("scroll-ended"));
        }),
        (t.prototype.setTemplateItem = function (e) {
            if (e) {
                var t = this;
                (t._itemTmp = e),
                    t._resizeMode == cc.Layout.ResizeMode.CHILDREN
                        ? (t._itemSize = t._layout.cellSize)
                        : (t._itemSize = cc.size(e.width, e.height));
                var o = e.getComponent(f.default),
                    n = !1;
                switch (
                    (o || (n = !0),
                    n && (t.selectedMode = c.NONE),
                    (o = e.getComponent(cc.Widget)) && o.enabled && (t._needUpdateWidget = !0),
                    t.selectedMode == c.MULT && (t.multSelected = []),
                    t._align)
                ) {
                    case cc.Layout.Type.HORIZONTAL:
                        (t._colLineNum = 1), (t._sizeType = !1);
                        break;
                    case cc.Layout.Type.VERTICAL:
                        (t._colLineNum = 1), (t._sizeType = !0);
                        break;
                    case cc.Layout.Type.GRID:
                        switch (t._startAxis) {
                            case cc.Layout.AxisDirection.HORIZONTAL:
                                var a = t.content.width - t._leftGap - t._rightGap;
                                (t._colLineNum = Math.floor((a + t._columnGap) / (t._itemSize.width + t._columnGap))),
                                    (t._sizeType = !0);
                                break;
                            case cc.Layout.AxisDirection.VERTICAL:
                                var i = t.content.height - t._topGap - t._bottomGap;
                                (t._colLineNum = Math.floor((i + t._lineGap) / (t._itemSize.height + t._lineGap))),
                                    (t._sizeType = !1);
                        }
                }
            }
        }),
        (t.prototype.checkInited = function (e) {
            return (
                void 0 === e && (e = !0), !!this._inited || (e && cc.error("List initialization not completed!"), !1)
            );
        }),
        (t.prototype._resizeContent = function () {
            var e,
                t = this;
            switch (t._align) {
                case cc.Layout.Type.HORIZONTAL:
                    if (t._customSize) {
                        var o = t._getFixedSize(null);
                        e =
                            t._leftGap +
                            o.val +
                            t._itemSize.width * (t._numItems - o.count) +
                            t._columnGap * (t._numItems - 1) +
                            t._rightGap;
                    } else
                        e =
                            t._leftGap +
                            t._itemSize.width * t._numItems +
                            t._columnGap * (t._numItems - 1) +
                            t._rightGap;
                    break;
                case cc.Layout.Type.VERTICAL:
                    t._customSize
                        ? ((o = t._getFixedSize(null)),
                          (e =
                              t._topGap +
                              o.val +
                              t._itemSize.height * (t._numItems - o.count) +
                              t._lineGap * (t._numItems - 1) +
                              t._bottomGap))
                        : (e =
                              t._topGap +
                              t._itemSize.height * t._numItems +
                              t._lineGap * (t._numItems - 1) +
                              t._bottomGap);
                    break;
                case cc.Layout.Type.GRID:
                    switch ((t.lackCenter && (t.lackCenter = !1), t._startAxis)) {
                        case cc.Layout.AxisDirection.HORIZONTAL:
                            var n = Math.ceil(t._numItems / t._colLineNum);
                            e = t._topGap + t._itemSize.height * n + t._lineGap * (n - 1) + t._bottomGap;
                            break;
                        case cc.Layout.AxisDirection.VERTICAL:
                            var a = Math.ceil(t._numItems / t._colLineNum);
                            e = t._leftGap + t._itemSize.width * a + t._columnGap * (a - 1) + t._rightGap;
                    }
            }
            var i = t.content.getComponent(cc.Layout);
            if (
                (i && (i.enabled = !1),
                (t._allItemSize = e),
                (t._allItemSizeNoEdge =
                    t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap)),
                t.cyclic)
            ) {
                var r = t._sizeType ? t.node.height : t.node.width;
                (t._cyclicPos1 = 0), (r -= t._cyclicPos1), (t._cyclicNum = Math.ceil(r / t._allItemSizeNoEdge) + 1);
                var s = t._sizeType ? t._lineGap : t._columnGap;
                (t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + s),
                    (t._cyclicAllItemSize =
                        t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + s * (t._cyclicNum - 1)),
                    (t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum),
                    (t._cycilcAllItemSizeNoEdge += s * (t._cyclicNum - 1));
            }
            t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
            var c = (t._lack && t.lackCenter) || !t.lackSlide ? 0.1 : 0,
                l = t._lack
                    ? (t._sizeType ? t.node.height : t.node.width) - c
                    : t.cyclic
                    ? t._cyclicAllItemSize
                    : t._allItemSize;
            l < 0 && (l = 0), t._sizeType ? (t.content.height = l) : (t.content.width = l);
        }),
        (t.prototype._onScrolling = function (e) {
            if (
                (void 0 === e && (e = null),
                null == this.frameCount && (this.frameCount = this._updateRate),
                !this._forceUpdate && e && "scroll-ended" != e.type && this.frameCount > 0)
            )
                this.frameCount--;
            else if (((this.frameCount = this._updateRate), !this._aniDelRuning)) {
                if (this.cyclic) {
                    var t = this.content.getPosition();
                    t = this._sizeType ? t.y : t.x;
                    var o = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap),
                        n = this._sizeType ? cc.v2(0, o) : cc.v2(o, 0);
                    switch (this._alignCalcType) {
                        case 1:
                            t > -this._cyclicPos1
                                ? ((this.content.x = -this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)))
                                : t < -this._cyclicPos2 &&
                                  ((this.content.x = -this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)));
                            break;
                        case 2:
                            t < this._cyclicPos1
                                ? ((this.content.x = this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)))
                                : t > this._cyclicPos2 &&
                                  ((this.content.x = this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)));
                            break;
                        case 3:
                            t < this._cyclicPos1
                                ? ((this.content.y = this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)))
                                : t > this._cyclicPos2 &&
                                  ((this.content.y = this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)));
                            break;
                        case 4:
                            t > -this._cyclicPos1
                                ? ((this.content.y = -this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(n)))
                                : t < -this._cyclicPos2 &&
                                  ((this.content.y = -this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(n)));
                    }
                }
                var a, i, r, s;
                if (
                    (this._calcViewPos(),
                    this._sizeType
                        ? ((a = this.viewTop), (r = this.viewBottom))
                        : ((i = this.viewRight), (s = this.viewLeft)),
                    this._virtual)
                ) {
                    this.displayData = [];
                    var c = void 0,
                        l = 0,
                        p = this._numItems - 1;
                    if (this._customSize)
                        for (var u = !1; l <= p && !u; l++)
                            switch (((c = this._calcItemPos(l)), this._align)) {
                                case cc.Layout.Type.HORIZONTAL:
                                    c.right >= s && c.left <= i
                                        ? this.displayData.push(c)
                                        : 0 != l && this.displayData.length > 0 && (u = !0);
                                    break;
                                case cc.Layout.Type.VERTICAL:
                                    c.bottom <= a && c.top >= r
                                        ? this.displayData.push(c)
                                        : 0 != l && this.displayData.length > 0 && (u = !0);
                                    break;
                                case cc.Layout.Type.GRID:
                                    switch (this._startAxis) {
                                        case cc.Layout.AxisDirection.HORIZONTAL:
                                            c.bottom <= a && c.top >= r
                                                ? this.displayData.push(c)
                                                : 0 != l && this.displayData.length > 0 && (u = !0);
                                            break;
                                        case cc.Layout.AxisDirection.VERTICAL:
                                            c.right >= s && c.left <= i
                                                ? this.displayData.push(c)
                                                : 0 != l && this.displayData.length > 0 && (u = !0);
                                    }
                            }
                    else {
                        var d = this._itemSize.width + this._columnGap,
                            h = this._itemSize.height + this._lineGap;
                        switch (this._alignCalcType) {
                            case 1:
                                (l = (s - this._leftGap) / d), (p = (i - this._leftGap) / d);
                                break;
                            case 2:
                                (l = (-i - this._rightGap) / d), (p = (-s - this._rightGap) / d);
                                break;
                            case 3:
                                (l = (-a - this._topGap) / h), (p = (-r - this._topGap) / h);
                                break;
                            case 4:
                                (l = (r - this._bottomGap) / h), (p = (a - this._bottomGap) / h);
                        }
                        for (
                            l = Math.floor(l) * this._colLineNum,
                                p = Math.ceil(p) * this._colLineNum,
                                l < 0 && (l = 0),
                                --p >= this._numItems && (p = this._numItems - 1);
                            l <= p;
                            l++
                        )
                            this.displayData.push(this._calcItemPos(l));
                    }
                    if ((this._delRedundantItem(), this.displayData.length <= 0 || !this._numItems))
                        return void (this._lastDisplayData = []);
                    (this.firstListId = this.displayData[0].id), (this.displayItemNum = this.displayData.length);
                    var g = this._lastDisplayData.length,
                        m = this.displayItemNum != g;
                    if (
                        (m &&
                            (this.frameByFrameRenderNum > 0 &&
                                this._lastDisplayData.sort(function (e, t) {
                                    return e - t;
                                }),
                            (m =
                                this.firstListId != this._lastDisplayData[0] ||
                                this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[g - 1])),
                        this._forceUpdate || m)
                    )
                        if (this.frameByFrameRenderNum > 0)
                            this._numItems > 0
                                ? (this._updateDone ? (this._updateCounter = 0) : (this._doneAfterUpdate = !0),
                                  (this._updateDone = !1))
                                : ((this._updateCounter = 0), (this._updateDone = !0));
                        else {
                            this._lastDisplayData = [];
                            for (var f = 0; f < this.displayItemNum; f++) this._createOrUpdateItem(this.displayData[f]);
                            this._forceUpdate = !1;
                        }
                    this._calcNearestItem();
                }
            }
        }),
        (t.prototype._calcViewPos = function () {
            var e = this.content.getPosition();
            switch (this._alignCalcType) {
                case 1:
                    (this.elasticLeft = e.x > 0 ? e.x : 0),
                        (this.viewLeft = (e.x < 0 ? -e.x : 0) - this.elasticLeft),
                        (this.viewRight = this.viewLeft + this.node.width),
                        (this.elasticRight =
                            this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0),
                        (this.viewRight += this.elasticRight);
                    break;
                case 2:
                    (this.elasticRight = e.x < 0 ? -e.x : 0),
                        (this.viewRight = (e.x > 0 ? -e.x : 0) + this.elasticRight),
                        (this.viewLeft = this.viewRight - this.node.width),
                        (this.elasticLeft =
                            this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0),
                        (this.viewLeft -= this.elasticLeft);
                    break;
                case 3:
                    (this.elasticTop = e.y < 0 ? Math.abs(e.y) : 0),
                        (this.viewTop = (e.y > 0 ? -e.y : 0) + this.elasticTop),
                        (this.viewBottom = this.viewTop - this.node.height),
                        (this.elasticBottom =
                            this.viewBottom < -this.content.height
                                ? Math.abs(this.viewBottom + this.content.height)
                                : 0),
                        (this.viewBottom += this.elasticBottom);
                    break;
                case 4:
                    (this.elasticBottom = e.y > 0 ? Math.abs(e.y) : 0),
                        (this.viewBottom = (e.y < 0 ? -e.y : 0) - this.elasticBottom),
                        (this.viewTop = this.viewBottom + this.node.height),
                        (this.elasticTop =
                            this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0),
                        (this.viewTop -= this.elasticTop);
            }
        }),
        (t.prototype._calcItemPos = function (e) {
            var t, o, n, a, i, r, s, c;
            switch (this._align) {
                case cc.Layout.Type.HORIZONTAL:
                    switch (this._horizontalDir) {
                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                            if (this._customSize) {
                                var l = this._getFixedSize(e);
                                (i =
                                    this._leftGap +
                                    (this._itemSize.width + this._columnGap) * (e - l.count) +
                                    (l.val + this._columnGap * l.count)),
                                    (t = (p = this._customSize[e]) > 0 ? p : this._itemSize.width);
                            } else
                                (i = this._leftGap + (this._itemSize.width + this._columnGap) * e),
                                    (t = this._itemSize.width);
                            return (
                                this.lackCenter &&
                                    ((i -= this._leftGap), (i += this.content.width / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: e,
                                    left: i,
                                    right: (r = i + t),
                                    x: i + this._itemTmp.anchorX * t,
                                    y: this._itemTmp.y
                                }
                            );
                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                            return (
                                this._customSize
                                    ? ((l = this._getFixedSize(e)),
                                      (r =
                                          -this._rightGap -
                                          (this._itemSize.width + this._columnGap) * (e - l.count) -
                                          (l.val + this._columnGap * l.count)),
                                      (t = (p = this._customSize[e]) > 0 ? p : this._itemSize.width))
                                    : ((r = -this._rightGap - (this._itemSize.width + this._columnGap) * e),
                                      (t = this._itemSize.width)),
                                this.lackCenter &&
                                    ((r += this._rightGap),
                                    (r -= this.content.width / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: e,
                                    right: r,
                                    left: (i = r - t),
                                    x: i + this._itemTmp.anchorX * t,
                                    y: this._itemTmp.y
                                }
                            );
                    }
                    break;
                case cc.Layout.Type.VERTICAL:
                    switch (this._verticalDir) {
                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                            return (
                                this._customSize
                                    ? ((l = this._getFixedSize(e)),
                                      (n =
                                          -this._topGap -
                                          (this._itemSize.height + this._lineGap) * (e - l.count) -
                                          (l.val + this._lineGap * l.count)),
                                      (o = (p = this._customSize[e]) > 0 ? p : this._itemSize.height))
                                    : ((n = -this._topGap - (this._itemSize.height + this._lineGap) * e),
                                      (o = this._itemSize.height)),
                                this.lackCenter &&
                                    ((n += this._topGap), (n -= this.content.height / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: e,
                                    top: n,
                                    bottom: (a = n - o),
                                    x: this._itemTmp.x,
                                    y: a + this._itemTmp.anchorY * o
                                }
                            );
                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                            var p;
                            if (this._customSize)
                                (l = this._getFixedSize(e)),
                                    (a =
                                        this._bottomGap +
                                        (this._itemSize.height + this._lineGap) * (e - l.count) +
                                        (l.val + this._lineGap * l.count)),
                                    (o = (p = this._customSize[e]) > 0 ? p : this._itemSize.height);
                            else
                                (a = this._bottomGap + (this._itemSize.height + this._lineGap) * e),
                                    (o = this._itemSize.height);
                            return (
                                this.lackCenter &&
                                    ((a -= this._bottomGap),
                                    (a += this.content.height / 2 - this._allItemSizeNoEdge / 2)),
                                {
                                    id: e,
                                    top: (n = a + o),
                                    bottom: a,
                                    x: this._itemTmp.x,
                                    y: a + this._itemTmp.anchorY * o
                                }
                            );
                    }
                case cc.Layout.Type.GRID:
                    var u = Math.floor(e / this._colLineNum);
                    switch (this._startAxis) {
                        case cc.Layout.AxisDirection.HORIZONTAL:
                            switch (this._verticalDir) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    c =
                                        (a =
                                            (n = -this._topGap - (this._itemSize.height + this._lineGap) * u) -
                                            this._itemSize.height) +
                                        this._itemTmp.anchorY * this._itemSize.height;
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    (n =
                                        (a = this._bottomGap + (this._itemSize.height + this._lineGap) * u) +
                                        this._itemSize.height),
                                        (c = a + this._itemTmp.anchorY * this._itemSize.height);
                            }
                            switch (
                                ((s =
                                    this._leftGap + (e % this._colLineNum) * (this._itemSize.width + this._columnGap)),
                                this._horizontalDir)
                            ) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    (s += this._itemTmp.anchorX * this._itemSize.width),
                                        (s -= this.content.anchorX * this.content.width);
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    (s += (1 - this._itemTmp.anchorX) * this._itemSize.width),
                                        (s -= (1 - this.content.anchorX) * this.content.width),
                                        (s *= -1);
                            }
                            return {id: e, top: n, bottom: a, x: s, y: c};
                        case cc.Layout.AxisDirection.VERTICAL:
                            switch (this._horizontalDir) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    (r =
                                        (i = this._leftGap + (this._itemSize.width + this._columnGap) * u) +
                                        this._itemSize.width),
                                        (s = i + this._itemTmp.anchorX * this._itemSize.width),
                                        (s -= this.content.anchorX * this.content.width);
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    (s =
                                        (i =
                                            (r = -this._rightGap - (this._itemSize.width + this._columnGap) * u) -
                                            this._itemSize.width) +
                                        this._itemTmp.anchorX * this._itemSize.width),
                                        (s += (1 - this.content.anchorX) * this.content.width);
                            }
                            switch (
                                ((c = -this._topGap - (e % this._colLineNum) * (this._itemSize.height + this._lineGap)),
                                this._verticalDir)
                            ) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    (c -= (1 - this._itemTmp.anchorY) * this._itemSize.height),
                                        (c += (1 - this.content.anchorY) * this.content.height);
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    (c -= this._itemTmp.anchorY * this._itemSize.height),
                                        (c += this.content.anchorY * this.content.height),
                                        (c *= -1);
                            }
                            return {id: e, left: i, right: r, x: s, y: c};
                    }
            }
        }),
        (t.prototype._calcExistItemPos = function (e) {
            var t = this.getItemByListId(e);
            if (!t) return null;
            var o = {id: e, x: t.x, y: t.y};
            return (
                this._sizeType
                    ? ((o.top = t.y + t.height * (1 - t.anchorY)), (o.bottom = t.y - t.height * t.anchorY))
                    : ((o.left = t.x - t.width * t.anchorX), (o.right = t.x + t.width * (1 - t.anchorX))),
                o
            );
        }),
        (t.prototype.getItemPos = function (e) {
            return this._virtual
                ? this._calcItemPos(e)
                : this.frameByFrameRenderNum
                ? this._calcItemPos(e)
                : this._calcExistItemPos(e);
        }),
        (t.prototype._getFixedSize = function (e) {
            if (!this._customSize) return null;
            null == e && (e = this._numItems);
            var t = 0,
                o = 0;
            for (var n in this._customSize) parseInt(n) < e && ((t += this._customSize[n]), o++);
            return {val: t, count: o};
        }),
        (t.prototype._onScrollBegan = function () {
            this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
        }),
        (t.prototype._onScrollEnded = function () {
            var e = this;
            if (((e.curScrollIsTouch = !1), null != e.scrollToListId)) {
                var t = e.getItemByListId(e.scrollToListId);
                (e.scrollToListId = null), t && cc.tween(t).to(0.1, {scale: 1.06}).to(0.1, {scale: 1}).start();
            }
            e._onScrolling(),
                e._slideMode != s.ADHERING || e.adhering
                    ? e._slideMode == s.PAGE &&
                      (null != e._beganPos && e.curScrollIsTouch ? this._pageAdhere() : e.adhere())
                    : e.adhere();
        }),
        (t.prototype._onTouchStart = function (e, t) {
            if (
                !(
                    (this._scrollView.hasNestedViewGroup && this._scrollView.hasNestedViewGroup(e, t)) ||
                    ((this.curScrollIsTouch = !0), e.eventPhase === cc.Event.AT_TARGET && e.target === this.node)
                )
            ) {
                for (var o = e.target; null == o._listId && o.parent; ) o = o.parent;
                this._scrollItem = null != o._listId ? o : e.target;
            }
        }),
        (t.prototype._onTouchUp = function () {
            var e = this;
            (e._scrollPos = null),
                e._slideMode == s.ADHERING
                    ? (this.adhering && (this._adheringBarrier = !0), e.adhere())
                    : e._slideMode == s.PAGE && (null != e._beganPos ? this._pageAdhere() : e.adhere()),
                (this._scrollItem = null);
        }),
        (t.prototype._onTouchCancelled = function (e, t) {
            var o = this;
            (o._scrollView.hasNestedViewGroup && o._scrollView.hasNestedViewGroup(e, t)) ||
                e.simulate ||
                ((o._scrollPos = null),
                o._slideMode == s.ADHERING
                    ? (o.adhering && (o._adheringBarrier = !0), o.adhere())
                    : o._slideMode == s.PAGE && (null != o._beganPos ? o._pageAdhere() : o.adhere()),
                (this._scrollItem = null));
        }),
        (t.prototype._onSizeChanged = function () {
            this.checkInited(!1) && this._onScrolling();
        }),
        (t.prototype._onItemAdaptive = function (e) {
            if (
                (!this._sizeType && e.width != this._itemSize.width) ||
                (this._sizeType && e.height != this._itemSize.height)
            ) {
                this._customSize || (this._customSize = {});
                var t = this._sizeType ? e.height : e.width;
                this._customSize[e._listId] != t &&
                    ((this._customSize[e._listId] = t),
                    this._resizeContent(),
                    this.updateAll(),
                    null != this._scrollToListId &&
                        ((this._scrollPos = null),
                        this.unschedule(this._scrollToSo),
                        this.scrollTo(
                            this._scrollToListId,
                            Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3)
                        )));
            }
        }),
        (t.prototype._pageAdhere = function () {
            var e = this;
            if (e.cyclic || !(e.elasticTop > 0 || e.elasticRight > 0 || e.elasticBottom > 0 || e.elasticLeft > 0)) {
                var t = e._sizeType ? e.viewTop : e.viewLeft,
                    o = (e._sizeType ? e.node.height : e.node.width) * e.pageDistance;
                if (Math.abs(e._beganPos - t) > o)
                    switch (e._alignCalcType) {
                        case 1:
                        case 4:
                            e._beganPos > t ? e.prePage(0.5) : e.nextPage(0.5);
                            break;
                        case 2:
                        case 3:
                            e._beganPos < t ? e.prePage(0.5) : e.nextPage(0.5);
                    }
                else
                    e.elasticTop <= 0 &&
                        e.elasticRight <= 0 &&
                        e.elasticBottom <= 0 &&
                        e.elasticLeft <= 0 &&
                        e.adhere();
                e._beganPos = null;
            }
        }),
        (t.prototype.adhere = function () {
            var e = this;
            if (
                e.checkInited() &&
                !(e.elasticTop > 0 || e.elasticRight > 0 || e.elasticBottom > 0 || e.elasticLeft > 0)
            ) {
                (e.adhering = !0), e._calcNearestItem();
                var t = (e._sizeType ? e._topGap : e._leftGap) / (e._sizeType ? e.node.height : e.node.width);
                e.scrollTo(e.nearestListId, 0.7, t);
            }
        }),
        (t.prototype.update = function () {
            if (!(this.frameByFrameRenderNum <= 0 || this._updateDone))
                if (this._virtual) {
                    for (
                        var e =
                                this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum
                                    ? this.displayItemNum
                                    : this._updateCounter + this.frameByFrameRenderNum,
                            t = this._updateCounter;
                        t < e;
                        t++
                    ) {
                        var o = this.displayData[t];
                        o && this._createOrUpdateItem(o);
                    }
                    this._updateCounter >= this.displayItemNum - 1
                        ? this._doneAfterUpdate
                            ? ((this._updateCounter = 0), (this._updateDone = !1), (this._doneAfterUpdate = !1))
                            : ((this._updateDone = !0),
                              this._delRedundantItem(),
                              (this._forceUpdate = !1),
                              this._calcNearestItem(),
                              this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId))
                        : (this._updateCounter += this.frameByFrameRenderNum);
                } else if (this._updateCounter < this._numItems) {
                    for (
                        e =
                            this._updateCounter + this.frameByFrameRenderNum > this._numItems
                                ? this._numItems
                                : this._updateCounter + this.frameByFrameRenderNum,
                            t = this._updateCounter;
                        t < e;
                        t++
                    )
                        this._createOrUpdateItem2(t);
                    this._updateCounter += this.frameByFrameRenderNum;
                } else
                    (this._updateDone = !0),
                        this._calcNearestItem(),
                        this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId);
        }),
        (t.prototype._createOrUpdateItem = function (e) {
            var t = this.getItemByListId(e.id);
            if (t)
                this._forceUpdate &&
                    this.renderEvent &&
                    (t.setPosition(cc.v2(e.x, e.y)),
                    this._resetItemSize(t),
                    this.renderEvent &&
                        cc.Component.EventHandler.emitEvents([this.renderEvent], t, e.id % this._actualNumItems));
            else {
                var o = this._pool.size() > 0;
                if (
                    ((t = o ? this._pool.get() : cc.instantiate(this._itemTmp)),
                    (o && cc.isValid(t)) || ((t = cc.instantiate(this._itemTmp)), (o = !1)),
                    t._listId != e.id && ((t._listId = e.id), t.setContentSize(this._itemSize)),
                    t.setPosition(cc.v2(e.x, e.y)),
                    this._resetItemSize(t),
                    this.content.addChild(t),
                    o && this._needUpdateWidget)
                ) {
                    var n = t.getComponent(cc.Widget);
                    n && n.updateAlignment();
                }
                t.setSiblingIndex(this.content.childrenCount - 1);
                var a = t.getComponent(f.default);
                (t.listItem = a),
                    a && ((a.listId = e.id), (a.list = this), a._registerEvent()),
                    this.renderEvent &&
                        cc.Component.EventHandler.emitEvents([this.renderEvent], t, e.id % this._actualNumItems);
            }
            this._resetItemSize(t),
                this._updateListItem(t.listItem),
                this._lastDisplayData.indexOf(e.id) < 0 && this._lastDisplayData.push(e.id);
        }),
        (t.prototype._createOrUpdateItem2 = function (e) {
            var t,
                o = this.content.children[e];
            o
                ? this._forceUpdate &&
                  this.renderEvent &&
                  ((o._listId = e),
                  t && (t.listId = e),
                  this.renderEvent &&
                      cc.Component.EventHandler.emitEvents([this.renderEvent], o, e % this._actualNumItems))
                : (((o = cc.instantiate(this._itemTmp))._listId = e),
                  this.content.addChild(o),
                  (t = o.getComponent(f.default)),
                  (o.listItem = t),
                  t && ((t.listId = e), (t.list = this), t._registerEvent()),
                  this.renderEvent &&
                      cc.Component.EventHandler.emitEvents([this.renderEvent], o, e % this._actualNumItems)),
                this._updateListItem(t),
                this._lastDisplayData.indexOf(e) < 0 && this._lastDisplayData.push(e);
        }),
        (t.prototype._updateListItem = function (e) {
            if (e && this.selectedMode > c.NONE) {
                var t = e.node;
                switch (this.selectedMode) {
                    case c.SINGLE:
                        e.selected = this.selectedId == t._listId;
                        break;
                    case c.MULT:
                        e.selected = this.multSelected.indexOf(t._listId) >= 0;
                }
            }
        }),
        (t.prototype._resetItemSize = function () {}),
        (t.prototype._updateItemPos = function (e) {
            var t = isNaN(e) ? e : this.getItemByListId(e),
                o = this.getItemPos(t._listId);
            t.setPosition(o.x, o.y);
        }),
        (t.prototype.setMultSelected = function (e, t) {
            var o = this;
            if (o.checkInited()) {
                if ((Array.isArray(e) || (e = [e]), null == t)) o.multSelected = e;
                else {
                    var n = void 0,
                        a = void 0;
                    if (t)
                        for (var i = e.length - 1; i >= 0; i--)
                            (n = e[i]), (a = o.multSelected.indexOf(n)) < 0 && o.multSelected.push(n);
                    else
                        for (i = e.length - 1; i >= 0; i--)
                            (n = e[i]), (a = o.multSelected.indexOf(n)) >= 0 && o.multSelected.splice(a, 1);
                }
                (o._forceUpdate = !0), o._onScrolling();
            }
        }),
        (t.prototype.getMultSelected = function () {
            return this.multSelected;
        }),
        (t.prototype.hasMultSelected = function (e) {
            return this.multSelected && this.multSelected.indexOf(e) >= 0;
        }),
        (t.prototype.updateItem = function (e) {
            if (this.checkInited()) {
                Array.isArray(e) || (e = [e]);
                for (var t = 0, o = e.length; t < o; t++) {
                    var n = e[t],
                        a = this.getItemByListId(n);
                    a && cc.Component.EventHandler.emitEvents([this.renderEvent], a, n % this._actualNumItems);
                }
            }
        }),
        (t.prototype.updateAll = function () {
            this.checkInited() && (this.numItems = this.numItems);
        }),
        (t.prototype.getItemByListId = function (e) {
            if (this.content)
                for (var t = this.content.childrenCount - 1; t >= 0; t--) {
                    var o = this.content.children[t];
                    if (o._listId == e) return o;
                }
        }),
        (t.prototype._getOutsideItem = function () {
            for (var e, t = [], o = this.content.childrenCount - 1; o >= 0; o--)
                (e = this.content.children[o]),
                    this.displayData.find(function (t) {
                        return t.id == e._listId;
                    }) || t.push(e);
            return t;
        }),
        (t.prototype._delRedundantItem = function () {
            if (this._virtual)
                for (var e = this._getOutsideItem(), t = e.length - 1; t >= 0; t--) {
                    var o = e[t];
                    if (!this._scrollItem || o._listId != this._scrollItem._listId) {
                        (o.isCached = !0), this._pool.put(o);
                        for (var n = this._lastDisplayData.length - 1; n >= 0; n--)
                            if (this._lastDisplayData[n] == o._listId) {
                                this._lastDisplayData.splice(n, 1);
                                break;
                            }
                    }
                }
            else
                for (; this.content.childrenCount > this._numItems; )
                    this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
        }),
        (t.prototype._delSingleItem = function (e) {
            e.removeFromParent(), e.destroy && e.destroy(), (e = null);
        }),
        (t.prototype.aniDelItem = function (e, t, o) {
            var n = this;
            if (!n.checkInited() || n.cyclic || !n._virtual)
                return cc.error("This function is not allowed to be called!");
            if (!t)
                return cc.error(
                    "CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!"
                );
            if (n._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
            var a,
                i = n.getItemByListId(e);
            if (i) {
                (a = i.getComponent(f.default)),
                    (n._aniDelRuning = !0),
                    (n._aniDelCB = t),
                    (n._aniDelItem = i),
                    (n._aniDelBeforePos = i.position),
                    (n._aniDelBeforeScale = i.scale);
                var r = n.displayData[n.displayData.length - 1].id,
                    s = a.selected;
                a.showAni(
                    o,
                    function () {
                        var o, a, l;
                        if ((r < n._numItems - 2 && (o = r + 1), null != o)) {
                            var p = n._calcItemPos(o);
                            n.displayData.push(p), n._virtual ? n._createOrUpdateItem(p) : n._createOrUpdateItem2(o);
                        } else n._numItems--;
                        if (n.selectedMode == c.SINGLE)
                            s ? (n._selectedId = -1) : n._selectedId - 1 >= 0 && n._selectedId--;
                        else if (n.selectedMode == c.MULT && n.multSelected.length) {
                            var u = n.multSelected.indexOf(e);
                            u >= 0 && n.multSelected.splice(u, 1);
                            for (var d = n.multSelected.length - 1; d >= 0; d--)
                                (m = n.multSelected[d]) >= e && n.multSelected[d]--;
                        }
                        if (n._customSize) {
                            n._customSize[e] && delete n._customSize[e];
                            var h = {},
                                g = void 0;
                            for (var m in n._customSize) {
                                g = n._customSize[m];
                                var f = parseInt(m);
                                h[f - (f >= e ? 1 : 0)] = g;
                            }
                            n._customSize = h;
                        }
                        for (d = null != o ? o : r; d >= e + 1; d--)
                            if ((i = n.getItemByListId(d))) {
                                var y = n._calcItemPos(d - 1);
                                (a = cc.tween(i).to(0.2333, {position: cc.v2(y.x, y.y)})),
                                    d <= e + 1 &&
                                        ((l = !0),
                                        a.call(function () {
                                            (n._aniDelRuning = !1), t(e), delete n._aniDelCB;
                                        })),
                                    a.start();
                            }
                        l || ((n._aniDelRuning = !1), t(e), (n._aniDelCB = null));
                    },
                    !0
                );
            } else t(e);
        }),
        (t.prototype.scrollTo = function (e, t, o, n) {
            void 0 === t && (t = 0.5), void 0 === o && (o = null), void 0 === n && (n = !1);
            var a = this;
            if (a.checkInited(!1)) {
                null == t ? (t = 0.5) : t < 0 && (t = 0),
                    e < 0 ? (e = 0) : e >= a._numItems && (e = a._numItems - 1),
                    !a._virtual && a._layout && a._layout.enabled && a._layout.updateLayout();
                var i,
                    r,
                    s = a.getItemPos(e);
                if (!s) return !1;
                switch (a._alignCalcType) {
                    case 1:
                        (i = s.left), (i -= null != o ? a.node.width * o : a._leftGap), (s = cc.v2(i, 0));
                        break;
                    case 2:
                        (i = s.right - a.node.width),
                            (i += null != o ? a.node.width * o : a._rightGap),
                            (s = cc.v2(i + a.content.width, 0));
                        break;
                    case 3:
                        (r = s.top), (r += null != o ? a.node.height * o : a._topGap), (s = cc.v2(0, -r));
                        break;
                    case 4:
                        (r = s.bottom + a.node.height),
                            (r -= null != o ? a.node.height * o : a._bottomGap),
                            (s = cc.v2(0, -r + a.content.height));
                }
                var c = a.content.getPosition();
                c = Math.abs(a._sizeType ? c.y : c.x);
                var l = a._sizeType ? s.y : s.x;
                Math.abs((null != a._scrollPos ? a._scrollPos : c) - l) > 0.5 &&
                    (a._scrollView.scrollToOffset(s, t),
                    (a._scrollToListId = e),
                    (a._scrollToEndTime = new Date().getTime() / 1e3 + t),
                    (a._scrollToSo = a.scheduleOnce(function () {
                        if (
                            (a._adheringBarrier || (a.adhering = a._adheringBarrier = !1),
                            (a._scrollPos = a._scrollToListId = a._scrollToEndTime = a._scrollToSo = null),
                            n)
                        ) {
                            var t = a.getItemByListId(e);
                            t && cc.tween(t).to(0.1, {scale: 1.05}).to(0.1, {scale: 1}).start();
                        }
                    }, t + 0.1)),
                    t <= 0 && a._onScrolling());
            }
        }),
        (t.prototype._calcNearestItem = function () {
            var e,
                t,
                o,
                n,
                a,
                i,
                r = this;
            (r.nearestListId = null),
                r._virtual && r._calcViewPos(),
                (o = r.viewTop),
                (n = r.viewRight),
                (a = r.viewBottom),
                (i = r.viewLeft);
            for (var s = !1, c = 0; c < r.content.childrenCount && !s; c += r._colLineNum)
                if ((e = r._virtual ? r.displayData[c] : r._calcExistItemPos(c)))
                    switch (
                        ((t = r._sizeType ? (e.top + e.bottom) / 2 : (t = (e.left + e.right) / 2)), r._alignCalcType)
                    ) {
                        case 1:
                            e.right >= i &&
                                ((r.nearestListId = e.id), i > t && (r.nearestListId += r._colLineNum), (s = !0));
                            break;
                        case 2:
                            e.left <= n &&
                                ((r.nearestListId = e.id), n < t && (r.nearestListId += r._colLineNum), (s = !0));
                            break;
                        case 3:
                            e.bottom <= o &&
                                ((r.nearestListId = e.id), o < t && (r.nearestListId += r._colLineNum), (s = !0));
                            break;
                        case 4:
                            e.top >= a &&
                                ((r.nearestListId = e.id), a > t && (r.nearestListId += r._colLineNum), (s = !0));
                    }
            if (
                (e = r._virtual ? r.displayData[r.displayItemNum - 1] : r._calcExistItemPos(r._numItems - 1)) &&
                e.id == r._numItems - 1
            )
                switch (((t = r._sizeType ? (e.top + e.bottom) / 2 : (t = (e.left + e.right) / 2)), r._alignCalcType)) {
                    case 1:
                        n > t && (r.nearestListId = e.id);
                        break;
                    case 2:
                        i < t && (r.nearestListId = e.id);
                        break;
                    case 3:
                        a < t && (r.nearestListId = e.id);
                        break;
                    case 4:
                        o > t && (r.nearestListId = e.id);
                }
        }),
        (t.prototype.prePage = function (e) {
            void 0 === e && (e = 0.5), this.checkInited() && this.skipPage(this.curPageNum - 1, e);
        }),
        (t.prototype.nextPage = function (e) {
            void 0 === e && (e = 0.5), this.checkInited() && this.skipPage(this.curPageNum + 1, e);
        }),
        (t.prototype.skipPage = function (e, t) {
            var o = this;
            if (o.checkInited())
                return o._slideMode != s.PAGE
                    ? cc.error("This function is not allowed to be called, Must SlideMode = PAGE!")
                    : void (
                          e < 0 ||
                          e >= o._numItems ||
                          (o.curPageNum != e &&
                              ((o.curPageNum = e),
                              o.pageChangeEvent && cc.Component.EventHandler.emitEvents([o.pageChangeEvent], e),
                              o.scrollTo(e, t)))
                      );
        }),
        (t.prototype.getPageId = function () {
            return this.curPageNum;
        }),
        (t.prototype.calcCustomSize = function (e) {
            var t = this;
            if (t.checkInited()) {
                if (!t._itemTmp) return cc.error("Unset template item!");
                if (!t.renderEvent) return cc.error("Unset Render-Event!");
                t._customSize = {};
                var o = cc.instantiate(t._itemTmp);
                t.content.addChild(o);
                for (var n = 0; n < e; n++)
                    cc.Component.EventHandler.emitEvents([t.renderEvent], o, n),
                        (o.height == t._itemSize.height && o.width == t._itemSize.width) ||
                            (t._customSize[n] = t._sizeType ? o.height : o.width);
                return (
                    Object.keys(t._customSize).length || (t._customSize = null),
                    o.removeFromParent(),
                    o.destroy && o.destroy(),
                    t._customSize
                );
            }
        }),
        i([u({type: cc.Enum(r)})], t.prototype, "templateType", void 0),
        i(
            [
                u({
                    type: cc.Node,
                    visible: function () {
                        return this.templateType == r.NODE;
                    }
                })
            ],
            t.prototype,
            "tmpNode",
            void 0
        ),
        i(
            [
                u({
                    type: cc.Prefab,
                    visible: function () {
                        return this.templateType == r.PREFAB;
                    }
                })
            ],
            t.prototype,
            "tmpPrefab",
            void 0
        ),
        i([u()], t.prototype, "_slideMode", void 0),
        i([u({type: cc.Enum(s)})], t.prototype, "slideMode", null),
        i(
            [
                u({
                    type: cc.Float,
                    range: [0, 1, 0.1],
                    slide: !0,
                    visible: function () {
                        return this._slideMode == s.PAGE;
                    }
                })
            ],
            t.prototype,
            "pageDistance",
            void 0
        ),
        i(
            [
                u({
                    type: cc.Component.EventHandler,
                    visible: function () {
                        return this._slideMode == s.PAGE;
                    }
                })
            ],
            t.prototype,
            "pageChangeEvent",
            void 0
        ),
        i([u()], t.prototype, "_virtual", void 0),
        i([u({type: cc.Boolean})], t.prototype, "virtual", null),
        i(
            [
                u({
                    visible: function () {
                        var e = this.slideMode == s.NORMAL;
                        return e || (this.cyclic = !1), e;
                    }
                })
            ],
            t.prototype,
            "cyclic",
            void 0
        ),
        i(
            [
                u({
                    visible: function () {
                        return this.virtual;
                    }
                })
            ],
            t.prototype,
            "lackCenter",
            void 0
        ),
        i(
            [
                u({
                    visible: function () {
                        var e = this.virtual && !this.lackCenter;
                        return e || (this.lackSlide = !1), e;
                    }
                })
            ],
            t.prototype,
            "lackSlide",
            void 0
        ),
        i([u({type: cc.Integer})], t.prototype, "_updateRate", void 0),
        i([u({type: cc.Integer, range: [0, 6, 1], slide: !0})], t.prototype, "updateRate", null),
        i([u({type: cc.Integer, range: [0, 12, 1], slide: !0})], t.prototype, "frameByFrameRenderNum", void 0),
        i([u({type: cc.Component.EventHandler})], t.prototype, "renderEvent", void 0),
        i([u({type: cc.Enum(c)})], t.prototype, "selectedMode", void 0),
        i(
            [
                u({
                    visible: function () {
                        return this.selectedMode == c.SINGLE;
                    }
                })
            ],
            t.prototype,
            "repeatEventSingle",
            void 0
        ),
        i(
            [
                u({
                    type: cc.Component.EventHandler,
                    visible: function () {
                        return this.selectedMode > c.NONE;
                    }
                })
            ],
            t.prototype,
            "selectedEvent",
            void 0
        ),
        i([u({serializable: !1})], t.prototype, "_numItems", void 0),
        i([p, d(), h("自定义组件/List"), m(cc.ScrollView), g(-5e3)], t)
    );
})(cc.Component);
o.default = y;
