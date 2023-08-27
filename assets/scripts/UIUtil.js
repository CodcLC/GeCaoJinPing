var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.UIUtil = void 0);
var n = e("CommonUtil"),
    a = cc.v2(0, 0),
    i = (function () {
        function e() {}
        return (
            (e.loadScene = function (e, t) {
                (this.curDR = null),
                    cc.director.loadScene(e, function () {
                        t && t();
                    });
            }),
            (e.resize = function (e) {
                var t = e;
                this.curDR || (this.curDR = t.designResolution);
                var o = this.curDR,
                    n = cc.view.getFrameSize(),
                    a = n.width,
                    i = n.height,
                    r = a,
                    s = i;
                a / i > o.width / o.height ? (r = ((s = o.height) * a) / i) : (s = (i / a) * (r = o.width)),
                    (t.designResolution = cc.size(r, s)),
                    (t.node.width = r),
                    (t.node.height = s),
                    t.node.emit("resize");
            }),
            (e.loadUrlImage = function (e, t) {
                var o = this;
                if (e && e.length > 0) {
                    var n = this.urlImpMap.get(e);
                    if (n) t(n);
                    else {
                        var a = new Image();
                        (a.crossOrigin = "anonymous"),
                            (a.src = e),
                            (a.onload = function () {
                                var i = new cc.Texture2D();
                                i.initWithElement(a), (n = new cc.SpriteFrame(i)), o.urlImpMap.set(e, n), t(n);
                            }),
                            (a.onerror = function () {
                                t(null);
                            });
                    }
                } else t(null);
            }),
            (e.loadUrlImg = function (t, o, n) {
                void 0 === n && (n = !1),
                    o
                        ? e.loadUrlImage(t, function (e) {
                              o.isValid ? (o.spriteFrame = e) : cc.log("loadUrlImage --> sprite node lost!!!");
                          })
                        : cc.error("loadUrlImg --> sprite is null! url=", t);
            }),
            (e.clearUrlImpMap = function () {
                this.urlImpMap.clear();
            }),
            (e.deleteLoadUrlImg = function (e) {
                var t = this;
                e.forEach(function (e) {
                    var o = t.urlImpMap.get(e);
                    o && (o.clearTexture && o.clearTexture(), t.urlImpMap.delete(e));
                });
            }),
            (e.initNodePool = function (e, t, o) {
                for (var n, a = 0; a < t; a++) (n = cc.instantiate(o)), e.put(n);
            }),
            (e.getNodeFromPool = function (e, t) {
                var o = e.get();
                return o || (o = cc.instantiate(t)), o;
            }),
            (e.putNodeToPool = function (e, t) {
                e.put(t);
            }),
            (e.clearPool = function (e) {
                e.clear();
            }),
            (e.visible = function (t, o) {
                t && e.visibleNode(t.node, o);
            }),
            (e.visibleNode = function (t, o) {
                o ? e.showNode(t) : e.hideNode(t);
            }),
            (e.isShow = function (t) {
                return !!t && e.isShowNode(t.node);
            }),
            (e.isShowNode = function (e) {
                return !!e && e.active;
            }),
            (e.show = function (t) {
                t && e.showNode(t.node);
            }),
            (e.showNode = function (e) {
                e && !e.active && (e.active = !0);
            }),
            (e.hide = function (t) {
                t && e.hideNode(t.node);
            }),
            (e.hideNode = function (e) {
                e && e.active && (e.active = !1);
            }),
            (e.isAniEmpty = function (e) {
                return 0 == e.getClips().length;
            }),
            (e.asyncPlayAni = function (t, o) {
                e.asyncSetAni(t, o, function () {
                    e.playFirstAni(t);
                });
            }),
            (e.asyncSetAni = function (e, t, o) {
                if ((void 0 === o && (o = null), e && e.isValid)) {
                    var n = cc.loader.getRes(t, cc.AnimationClip);
                    if (n) {
                        if (!e || !e.isValid)
                            return void cc.log("asyncSetAnim --> animation is null or lost! animationUrl=", t);
                        e.addClip(n), o && o(n);
                    } else
                        cc.loader.loadRes(t, cc.AnimationClip, function (n, a) {
                            n
                                ? cc.error(n)
                                : e && e.isValid
                                ? (e.addClip(a), o && o(a))
                                : cc.log("asyncSetAnim --> animation is null or lost! animationUrl=", t);
                        });
                } else cc.log("asyncSetAnim --> animation is null or lost! animationUrl=", t);
            }),
            (e.playFirstAni = function (e) {
                e.play(e.getClips()[0].name);
            }),
            (e.asyncSetSpine = function (e, t, o) {
                if ((void 0 === o && (o = null), e && e.isValid)) {
                    var n = cc.loader.getRes(t, sp.SkeletonData);
                    n
                        ? ((e.skeletonData = n), o && o(n))
                        : cc.loader.loadRes(t, sp.SkeletonData, function (n, a) {
                              n
                                  ? cc.error(n)
                                  : e && e.isValid
                                  ? ((e.skeletonData = a), o && o(a))
                                  : cc.error("asyncSetSpine --> spine is null or lost! spineUrl=", t);
                          });
                } else cc.error("asyncSetSpine --> spine is null or lost! spineUrl=", t);
            }),
            (e.asyncSetImage = function (t, o, n, a, i) {
                if ((void 0 === n && (n = !1), void 0 === a && (a = null), void 0 === i && (i = !0), t && t.isValid)) {
                    var r = cc.loader.getRes(o, cc.SpriteFrame);
                    r
                        ? (e.setImage(t, r, n, i), a && a(r))
                        : cc.loader.loadRes(o, cc.SpriteFrame, function (r, s) {
                              if (r) return cc.error(r), void e.clearImage(t);
                              t && t.isValid
                                  ? (e.setImage(t, s, n, i), a && a(s))
                                  : cc.error("asyncSetImage --> sprite is null or lost! imageUrl=", o);
                          });
                } else cc.error("asyncSetImage --> sprite is null or lost! imageUrl=", o);
            }),
            (e.setImage = function (t, o, n, a) {
                if ((void 0 === n && (n = !1), void 0 === a && (a = !0), o)) {
                    if (((t.spriteFrame = o), n)) {
                        var i = o.getRect();
                        i && t.node && ((t.node.width = i.width), (t.node.height = i.height));
                    }
                    a && e.show(t);
                } else e.clearImage(t);
            }),
            (e.clearImage = function (e) {
                e.spriteFrame && (e.spriteFrame = null);
            }),
            (e.setImageGray = function (e) {
                e.setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite"));
            }),
            (e.setImageNormal = function (e) {
                e.setMaterial(0, cc.Material.getBuiltinMaterial("2d-sprite"));
            }),
            (e.setLabelGray = function (e) {
                e.setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite"));
            }),
            (e.setLabelNormal = function (e) {
                e.setMaterial(0, cc.Material.getBuiltinMaterial("2d-sprite"));
            }),
            (e.setLabel = function (t, o, a, i) {
                void 0 === a && (a = null),
                    void 0 === i && (i = !0),
                    t && t.isValid
                        ? (e.visible(t, i),
                          i &&
                              (a && e.setColor(t, a),
                              n.CommonUtil.isString(o) || (o = o.toString()),
                              t.string != o && (t.string = o)))
                        : cc.log("setLabel --> label is null or lost!");
            }),
            (e.setColorNode = function (e, t) {
                e.color.equals(t) || (e.color = t);
            }),
            (e.setColor = function (e, t) {
                e.node.color.equals(t) || (e.node.color = t);
            }),
            (e.transparent = function (t) {
                e.setOpacity(t, 0);
            }),
            (e.nontransparent = function (t) {
                e.setOpacity(t, 255);
            }),
            (e.setOpacity = function (t, o) {
                e.setOpacityNode(t.node, o);
            }),
            (e.setOpacityNode = function (e, t) {
                e && e.opacity && e.opacity != t && (e.opacity = t);
            }),
            (e.setProgressBar = function (e, t) {
                e.progress != t && (e.progress = t);
            }),
            (e.cleanScrollView = function (e) {
                e.content.removeAllChildren(), e.setContentPosition(a);
            }),
            (e.loadPrefabAndAdd = function (t, o, n) {
                e.dynamicLoadPrefab(t, function (e) {
                    o.addChild(e), n && n(e);
                });
            }),
            (e.asyncLoadPrefab = function (t, o) {
                void 0 === o && (o = null), e.dynamicLoadPrefab(t, o, !1);
            }),
            (e.dynamicLoadPrefab = function (t, o, n) {
                void 0 === n && (n = !0), (t = e.prefabUrl(t));
                var a = cc.loader.getRes(t, cc.Prefab);
                if (a) {
                    if (n) {
                        var i = cc.instantiate(a);
                        o && o(i);
                    } else o && o(a);
                } else
                    cc.loader.loadRes(t, cc.Prefab, function (e, t) {
                        if (e) cc.error(e);
                        else if (n) {
                            var a = cc.instantiate(t);
                            o && o(a);
                        } else o && o(t);
                    });
            }),
            (e.dynamicLoadAniClip = function (e, t) {
                var o = cc.loader.getRes(e, cc.AnimationClip);
                o
                    ? t && t(o)
                    : cc.loader.loadRes(e, cc.AnimationClip, function (e, o) {
                          e ? cc.error(e) : t && t(o);
                      });
            }),
            (e.dynamicLoadImage = function (e, t) {
                var o = cc.loader.getRes(e, cc.SpriteFrame);
                o
                    ? t && t(o)
                    : cc.loader.loadRes(e, cc.SpriteFrame, function (e, o) {
                          e ? cc.error(e) : t && t(o);
                      });
            }),
            (e.dynamicLoadAtlasImage = function (e, t) {
                cc.loader.loadRes(e, cc.SpriteAtlas, function (e, o) {
                    e ? cc.error(e) : t && t(o);
                });
            }),
            (e.dynamicLoadDir = function (e, t) {
                cc.loader.loadResDir(e, cc.SpriteFrame, function (e, o, n) {
                    e ? cc.error(e) : t && t(o, n);
                });
            }),
            (e.dynamicLoadRecruitRes = function (e, t) {
                cc.loader.loadRes(e, sp.SkeletonData, function (e, o) {
                    e ? cc.log(e) : t && t(o);
                });
            }),
            (e.releaseAllDeps = function (e, t) {
                void 0 === t && (t = null), cc.sys.garbageCollect();
            }),
            (e.prefabUrl = function (e) {
                return -1 == e.indexOf("prefab/") ? "prefab/" + e : e;
            }),
            (e.AdaptationView = function (e, t, o) {
                var n = cc.winSize.height - 1334,
                    a = 0.6 * n,
                    i = 0.15 * n,
                    r = 0.25 * n;
                e.spacingY += i;
                for (var s = 0; s < t.length; s++) t[s].height += a;
                for (s = 0; s < o.length; s++) o[s].y -= a + 8;
                e.node.height += r;
            }),
            (e.runNextTick = function (e, t) {
                void 0 === t && (t = -1), setTimeout(e, t > 0 ? 16 * t : 0);
            }),
            (e.runNextSecond = function (e, t) {
                void 0 === t && (t = 1), setTimeout(e, 1e3 * t);
            }),
            (e.isExist = function (t) {
                return !e.isDestroy(t);
            }),
            (e.isExistNode = function (t) {
                return !e.isDestroyNode(t);
            }),
            (e.isDestroy = function (t) {
                return !t || e.isDestroyNode(t.node);
            }),
            (e.isDestroyNode = function (e) {
                return !e || !e.isValid;
            }),
            (e.destroy = function (t) {
                t && e.destroyNode(t.node);
            }),
            (e.destroyNode = function (e, t) {
                void 0 === t && (t = !0), e.removeFromParent(!0), t && e.destroy();
            }),
            (e.hexColor = function (e) {
                return cc.color().fromHEX(e);
            }),
            (e.asyncPlaySpine = function (t, o, n, a, i, r) {
                void 0 === i && (i = null),
                    e.asyncSetSpine(t, o, function (o) {
                        e.show(t), r && t.setSkin(r), t.setAnimation(0, n, a), i && i(o);
                    });
            }),
            (e.asyncPlayAnim = function (t, o, n, a) {
                e.show(t);
                var i = t.getClips();
                if (i.length > 0) {
                    var r = i[0],
                        s = o.substring(o.lastIndexOf("/") + 1);
                    r.name != s && e.clearAnim(t, i);
                }
                e.isAnimEmpty(t)
                    ? e.asyncSetAnim(t, o, function () {
                          a ? e.playAnim(t, a) : e.playFirstAnim(t), n && n();
                      })
                    : (a ? e.playAnim(t, a) : e.playFirstAnim(t), n && n());
            }),
            (e.isAnimEmpty = function (e) {
                return 0 == e.getClips().length;
            }),
            (e.clearAnim = function (e, t) {
                t.forEach(function (t) {
                    e.removeClip(t, !0);
                });
            }),
            (e.playFirstAnim = function (t) {
                var o = t.getClips();
                if (o) {
                    var n = o[0].name;
                    e.playAnim(t, n);
                }
            }),
            (e.playAnim = function (e, t) {
                var o = e.getAnimationState(t);
                o && (o.isPlaying ? e.playAdditive(t) : e.play(t));
            }),
            (e.asyncSetAnim = function (t, o, n) {
                if ((void 0 === n && (n = null), t && t.isValid)) {
                    var a = cc.loader.getRes(o, cc.AnimationClip);
                    a
                        ? (e.setFirstAnim(t, a), n && n(a))
                        : cc.loader.loadRes(o, cc.AnimationClip, function (o, a) {
                              o ? cc.error(o) : (e.setFirstAnim(t, a), n && n(a));
                          });
                } else cc.log("asyncSetAnim --> animation is null or lost! animationUrl=", o);
            }),
            (e.setFirstAnim = function (t, o) {
                var n = t.getClips();
                n && (e.clearAnim(t, n), t.addClip(o));
            }),
            (e.getComponentByNode = function (e, t, o) {
                return e.getChildByName(t).getComponent(o);
            }),
            (e.playNodeScale = function (e, t, o, n) {
                void 0 === o && (o = 0.5), void 0 === n && (n = 1), (e.active = !0), (e.scale = 0.2);
                var a = cc.scaleTo(o, n);
                a.easing(cc.easeBackOut()),
                    e.runAction(
                        cc.sequence(
                            a,
                            cc.callFunc(function () {
                                t && t();
                            })
                        )
                    );
            }),
            (e.filpYImage = function (e, t, o) {
                for (var n = new Uint8Array(t * o * 4), a = 4 * t, i = 0; i < o; i++)
                    for (var r = (o - 1 - i) * t * 4, s = i * t * 4, c = 0; c < a; c++) n[s + c] = e[r + c];
                return n;
            }),
            (e.initShareImage = function (e) {
                var t = e.getContentSize(),
                    o = new cc.RenderTexture();
                o.initWithSize(t.width, t.height),
                    (this.camera = e.addComponent(cc.Camera)),
                    (this.camera.targetTexture = o),
                    (this.texture = o),
                    (this.targetNode = e),
                    this.downloadImg();
            }),
            (e.initImage = function () {
                var e = this._canvas.toDataURL("share/png"),
                    t = document.createElement("img");
                return (t.src = e), t;
            }),
            (e.createSprite = function () {
                var e = this.texture.width,
                    t = this.texture.height;
                this._canvas
                    ? this.clearCanvas()
                    : ((this._canvas = document.createElement("canvas")),
                      (this._canvas.width = e),
                      (this._canvas.height = t));
                var o = this._canvas.getContext("2d");
                this.camera.render(void 0);
                for (var n = this.texture.readPixels(), a = 4 * e, i = 0; i < t; i++) {
                    for (var r = t - 1 - i, s = o.createImageData(e, 1), c = r * e * 4, l = 0; l < a; l++)
                        s.data[l] = n[c + l];
                    o.putImageData(s, 0, i);
                }
                var p = this.filpYImage(n, e, t);
                return this.saveFile(p), this._canvas;
            }),
            (e.getTargetArea = function () {
                var e = this.targetNode.convertToWorldSpaceAR(cc.v2(0, 0)),
                    t = cc.winSize.height - e.y - this.targetNode.height / 2;
                return {x: cc.winSize.width - e.x - this.targetNode.width / 2, y: t};
            }),
            (e.downloadImg = function () {
                this.createSprite();
            }),
            (e.saveFile = function () {}),
            (e.showSprite = function (e) {
                var t = this.getTargetArea().y,
                    o = this.getTargetArea().x,
                    n = new cc.Rect(
                        o,
                        t,
                        this.targetNode.getContentSize().width,
                        this.targetNode.getContentSize().height
                    ),
                    a = new cc.Texture2D();
                a.initWithElement(e);
                var i = new cc.SpriteFrame();
                i.setTexture(a), i.setRect(n);
                var r = new cc.Node();
                (r.addComponent(cc.Sprite).spriteFrame = i),
                    (r.zIndex = cc.macro.MAX_ZINDEX),
                    (r.parent = cc.director.getScene());
                var s = cc.winSize.width,
                    c = cc.winSize.height;
                (r.x = s / 2),
                    (r.y = c / 2),
                    r.on(cc.Node.EventType.TOUCH_START, function () {
                        (r.parent = null), r.destroy();
                    });
            }),
            (e.captureAction = function (e) {
                var t = cc.scaleTo(1, 0.7),
                    o = cc.v2(0, 0),
                    n = cc.moveTo(1, o),
                    a = cc.spawn(t, n),
                    i = cc.callFunc(function () {
                        e.destroy();
                    }),
                    r = cc.sequence(a, i);
                e.runAction(r);
            }),
            (e.clearCanvas = function () {
                this._canvas.getContext("2d").clearRect(0, 0, this._canvas.width, this._canvas.height);
            }),
            (e.urlImpMap = new Map()),
            (e.curDR = null),
            e
        );
    })();
o.UIUtil = i;
