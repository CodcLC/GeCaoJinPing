var e = require;
var t = module;
var o = exports;
var n =
        (this && this.__awaiter) ||
        function (e, t, o, n) {
            return new (o || (o = Promise))(function (a, i) {
                function r(e) {
                    try {
                        c(n.next(e));
                    } catch (t) {
                        i(t);
                    }
                }
                function s(e) {
                    try {
                        c(n.throw(e));
                    } catch (t) {
                        i(t);
                    }
                }
                function c(e) {
                    var t;
                    e.done
                        ? a(e.value)
                        : ((t = e.value),
                          t instanceof o
                              ? t
                              : new o(function (e) {
                                    e(t);
                                })).then(r, s);
                }
                c((n = n.apply(e, t || [])).next());
            });
        },
    a =
        (this && this.__generator) ||
        function (e, t) {
            var o,
                n,
                a,
                i,
                r = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                };
            return (
                (i = {next: s(0), throw: s(1), return: s(2)}),
                "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                i
            );
            function s(e) {
                return function (t) {
                    return c([e, t]);
                };
            }
            function c(i) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; r; )
                    try {
                        if (
                            ((o = 1),
                            n &&
                                (a =
                                    2 & i[0]
                                        ? n.return
                                        : i[0]
                                        ? n.throw || ((a = n.return) && a.call(n), 0)
                                        : n.next) &&
                                !(a = a.call(n, i[1])).done)
                        )
                            return a;
                        switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return r.label++, {value: i[1], done: !1};
                            case 5:
                                r.label++, (n = i[1]), (i = [0]);
                                continue;
                            case 7:
                                (i = r.ops.pop()), r.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    r = 0;
                                    continue;
                                }
                                if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                    r.label = i[1];
                                    break;
                                }
                                if (6 === i[0] && r.label < a[1]) {
                                    (r.label = a[1]), (a = i);
                                    break;
                                }
                                if (a && r.label < a[2]) {
                                    (r.label = a[2]), r.ops.push(i);
                                    break;
                                }
                                a[2] && r.ops.pop(), r.trys.pop();
                                continue;
                        }
                        i = t.call(e, r);
                    } catch (s) {
                        (i = [6, s]), (n = 0);
                    } finally {
                        o = a = 0;
                    }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0};
            }
        };
Object.defineProperty(o, "__esModule", {value: !0}), (o.wxMgr = o.WxManager = void 0);
var i = e("ReporterBridge"),
    r = e("AnalyticsManager"),
    s = e("GameManager"),
    c = e("ZtSdk"),
    l = e("censtant"),
    p = e("SubscribeManager"),
    u = e("TrackingIOManager"),
    d = e("TaskTypeManager"),
    h = e("TaskManager"),
    g = e("CdTimerManager"),
    m = e("AdsTimesManager"),
    f = e("JsonManager"),
    y = (function () {
        function e() {
            (this.wxGameVersion = "1.2.2"),
                (this.wx = null),
                (this.recentAdTime = new Date()),
                (this.id = "adunit-4ac2234738c8df9c"),
                (this.option = null),
                (this.isLoading = !1),
                (this.magnetTime = 0),
                (this.shareImageId = [
                    "gPbNjmczTQaSBfrR3SYsBg==",
                    "FrjMjy5xQNSbJYkljf8QCA==",
                    "O7ruhIWCT8qABaeA8lhGlA=="
                ]),
                (this.shareImageUrl = [
                    "https://mmocgame.qpic.cn/wechatgame/Tqr552QbaZLDVYBcu5QJwdSVu1kPHLCwh5Ifa7gr73gK54hMlVW8LkibviaG55YM66/0",
                    "https://mmocgame.qpic.cn/wechatgame/Tqr552QbaZKtlScdtOO8XuFO1t7jb4tMz1GCtFOjVTLIno6z5ZTrO4MS0lciaIWpV/0",
                    "https://mmocgame.qpic.cn/wechatgame/Tqr552QbaZLQSnlqibLqb0vU9kGRm4HUzvYb3WiciccGHH4STARBiagUcIfc3EGbPicEr/0"
                ]),
                (this.bannerAdUnitId = "adunit-501e9f690cc2a38d"),
                (this.bannerAd = null),
                (this.interstitialAdUnitId = "adunit-4141e2e8cfac7827"),
                (this.interstitialAd = null),
                (this.InterstitialAdOption = null),
                (this.canShowBannerAndInterstitialAd = !0),
                (this.hasOpenUi = !1);
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.downMagnetTime = function () {
                this.magnetTime -= 1;
            }),
            (e.prototype.getMagnetTime = function () {
                return this.magnetTime;
            }),
            (e.prototype.setMagnetTime = function () {
                this.magnetTime = Number(f.JsonMgr.getDefineConstantByName("MagnetAdCd"));
            }),
            (e.prototype.checkTimeIsOver = function () {
                return this.magnetTime <= 0;
            }),
            (e.prototype.init = function () {
                (this.wx = window.wx),
                    this.wx &&
                        (this.wx.getSystemInfo({
                            success: function (e) {
                                "ios" === e.platform && (s.gameMgr.isIos = !0);
                            }
                        })
                       // this.createInterstitialAd()
                       );
            }),
            (e.prototype.createVideo = function (e, t, o) {
                var n = this;
                if (!this.wx) return o && o(), void g.CdTimerMgr.setInterstitialAdCdTimer(Date.now());
                if (!this.isLoading)
                    if ("" !== this.id) {
                        (this.isLoading = !0), this.wx.getSystemInfoSync();
                        var a = this.wx.createRewardedVideoAd({adUnitId: this.id});
                        (this.option = e),
                            a.onError(function (e) {
                                (n.isLoading = !1), console.log(e);
                            }),
                            a.load(),
                            a.show().catch(function () {
                                a.load()
                                    .then(function () {
                                        a.show();
                                    })
                                    .catch(function () {
                                        t && t(), (n.isLoading = !1);
                                    });
                            }),
                            a.onClose(function (e) {
                                a.offClose(),
                                    (n.isLoading = !1),
                                    e && e.isEnded
                                        ? (o && o(),
                                          d.TaskTypeMgr.seeAdTimesTask(1),
                                          u.TrackingIOMgr.addWatchNum(),
                                          h.TaskMgr.addActivityTaskPro(5, 1),
                                          u.TrackingIOMgr.reportEvent(),
                                          g.CdTimerMgr.setInterstitialAdCdTimer(Date.now()),
                                          n.setMagnetTime(),
                                          i.ReporterBridge.incUserProperty({AdsNum: 1}),
                                          n.saveRecentAdTime(),
                                          r.analyMgr.reportRewardVideoButtonClicked(
                                              n.option.placementName,
                                              n.option.openUi,
                                              n.option.level
                                          ),
                                          r.analyMgr.reportRewardVideoStarted(
                                              n.option.placementName,
                                              n.option.openUi,
                                              n.option.level
                                          ),
                                          r.analyMgr.reportRewardVideoFullyWatched(
                                              n.option.placementName,
                                              n.option.openUi,
                                              n.option.level
                                          ),
                                          (n.option = null))
                                        : (t && t(), (n.option = null));
                            });
                    } else
                        this.onShareFunc(
                            function () {},
                            function () {}
                        ),
                            o && o(),
                            d.TaskTypeMgr.seeAdTimesTask(1);
            }),
            (e.prototype.onShareFunc = function (e, t) {
                var o = Math.floor(Math.random() * this.shareImageId.length);
                this.wx.shareAppMessage({
                    title: "绝地幸存者!",
                    imageUrlId: this.shareImageId[o],
                    imageUrl: this.shareImageUrl[o],
                    success: function () {},
                    fail: function () {}
                }),
                    t && t();
            }),
            (e.prototype.showRightUpShare = function () {
                try {
                    this.wx.showShareMenu({
                        withShareTicket: !0,
                        menus: ["shareAppMessage", "shareTimeline"],
                        success: function () {},
                        fail: function () {},
                        complete: function () {}
                    });
                    var e = ["绝地幸存者"],
                        t = ["gPbNjmczTQaSBfrR3SYsBg==", "FrjMjy5xQNSbJYkljf8QCA==", "O7ruhIWCT8qABaeA8lhGlA=="],
                        o = [
                            "https://mmocgame.qpic.cn/wechatgame/Tqr552QbaZLDVYBcu5QJwdSVu1kPHLCwh5Ifa7gr73gK54hMlVW8LkibviaG55YM66/0",
                            "https://mmocgame.qpic.cn/wechatgame/Tqr552QbaZKtlScdtOO8XuFO1t7jb4tMz1GCtFOjVTLIno6z5ZTrO4MS0lciaIWpV/0",
                            "https://mmocgame.qpic.cn/wechatgame/Tqr552QbaZLQSnlqibLqb0vU9kGRm4HUzvYb3WiciccGHH4STARBiagUcIfc3EGbPicEr/0"
                        ],
                        n = e[Math.floor(Math.random() * e.length)],
                        a = Math.floor(Math.random() * t.length);
                    this.wx.onShareAppMessage(function () {
                        return (
                            r.analyMgr.reportShare("RightUp", !1),
                            {
                                title: n,
                                imageUrlId: t[a],
                                imageUrl: o[a],
                                success: function () {
                                    cc.log("右上角分享成功");
                                },
                                fail: function () {
                                    cc.log("右上角分享未完成");
                                }
                            }
                        );
                    });
                } catch (i) {
                    cc.log("右上角分享开启失败，可能不是h5");
                }
            }),
            (e.prototype.saveRecentAdTime = function () {
                this.recentAdTime = new Date();
            }),
            (e.prototype.login = function () {
                var e = this;
                this.wx.login({
                    success: function (t) {
                        e.getOpenId(t.code);
                    },
                    fail: function (e) {
                        console.error("login fail:", e);
                    }
                });
            }),
            (e.prototype.getOpenId = function (e) {
                //c.ZtSdk.instance.getPlayerOpenId(e);
            }),
            (e.prototype.getSubscribePermissions = function (e) {
                var t = this;
                return new Promise(function (n, a) {
                    t.wx.requestSubscribeMessage({
                        tmplIds: e,
                        success: function (e) {
                            console.log("Subscribe Success: ", e),
                                "requestSubscribeMessage:ok" === e.errMsg
                                    ? (o.wxMgr.sendSubscribeMsg(e), n(e))
                                    : (o.wxMgr.sendSubscribeMsg(e), a(e));
                        },
                        fail: function (e) {
                            console.log("Subscribe Fail: ", e), a(e);
                        }
                    });
                });
            }),
            (e.prototype.sendSubscribeMsg = function (e) {
                return n(this, void 0, void 0, function () {
                    var t, n, i, r, s;
                    return a(this, function () {
                        return (
                            (t = l.SubscribeID.ENERGY),
                            (n = l.SubscribeID.STORE),
                            (i = l.SubscribeID.PATROL),
                            (r = l.SubscribeID.VERSION),
                            e[t] && o.wxMgr.checkSubscribePermission(e[t])
                                ? ((s = p.scrMgr.getEnergyMsg()),
                                  o.wxMgr.sendSubscribe(l.SubscribeID.ENERGY, s, p.scrMgr.getEnergyRecoverTime()))
                                : e[t] &&
                                  !o.wxMgr.checkSubscribePermission(e[t]) &&
                                  this.saveRejectTime(l.SubscribeID.ENERGY),
                            e[n] && o.wxMgr.checkSubscribePermission(e[n])
                                ? ((s = p.scrMgr.getStoreMsg()),
                                  o.wxMgr.sendSubscribe(l.SubscribeID.STORE, s, p.scrMgr.getStoreFreeTime()))
                                : e[n] &&
                                  !o.wxMgr.checkSubscribePermission(e[n]) &&
                                  this.saveRejectTime(l.SubscribeID.STORE),
                            e[i] && o.wxMgr.checkSubscribePermission(e[i])
                                ? ((s = p.scrMgr.getPatrolMsg()),
                                  o.wxMgr.sendSubscribe(l.SubscribeID.PATROL, s, p.scrMgr.getPatrolRemainTime()))
                                : e[i] &&
                                  !o.wxMgr.checkSubscribePermission(e[i]) &&
                                  this.saveRejectTime(l.SubscribeID.PATROL),
                            e[r] && o.wxMgr.checkSubscribePermission(e[r])
                                ? o.wxMgr.sendVersionSubscribe()
                                : e[r] && !o.wxMgr.checkSubscribePermission(e[r]) && o.wxMgr.saveVersionRejectTime(),
                            [2]
                        );
                    });
                });
            }),
            (e.prototype.checkSubscribePermission = function (e) {
                return "accept" == e || "acceptWithAudio" == e;
            }),
            (e.prototype.saveRejectTime = function (e) {
                var t = 36e5 * p.scrMgr.getRejectCd();
                p.scrMgr.saveSubscribeTime(e, t);
            }),
            (e.prototype.sendSubscribe = function (e, t, n) {
                o.wxMgr.checkIsWxPlatform() && c.ZtSdk.instance.sendSubscribeMsg(e, t, n);
            }),
            (e.prototype.saveVersionRejectTime = function () {
                p.scrMgr.saveSubscribeTime(l.SubscribeID.VERSION, 2592e6);
            }),
            (e.prototype.sendVersionSubscribe = function () {
                o.wxMgr.checkIsWxPlatform() && c.ZtSdk.instance.updateUserVersion(l.SubscribeID.VERSION);
            }),
            (e.prototype.checkOnlineVerison = function () {
                // var e = this,
                //     t = this.wx.getUpdateManager();
                // t.onCheckForUpdate(function (e) {
                //     console.log("版本更新请求完毕: ", e);
                // }),
                //     t.onUpdateReady(function () {
                //         e.wx.showModal({
                //             title: "更新提示",
                //             content: "新版本已经准备好，是否重启应用？",
                //             success: function (e) {
                //                 e.confirm && t.applyUpdate();
                //             }
                //         });
                //     }),
                //     t.onUpdateFailed(function (e) {
                //         console.log("新版本下载失败：", e);
                //     });
            }),
            (e.prototype.jumpToProgram = function (e) {
                o.wxMgr.checkIsWxPlatform() &&
                    this.wx.navigateToMiniProgram({
                        appId: e,
                        extraData: {},
                        envVersion: "release",
                        success: function (e) {
                            console.log("jumpToProgram success! res:" + JSON.stringify(e));
                        },
                        fail: function (e) {
                            console.log("jumpToProgram fail! err:" + JSON.stringify(e));
                        },
                        complete: function () {
                            console.log("jumpToProgram complete");
                        }
                    });
            }),
            (e.prototype.createBanner = function (e) {
                var t = this;
                if (this.canShowBannerAndInterstitialAd && o.wxMgr.checkIsWxPlatform()) {
                    this.bannerAd && this.bannerAd.destroy();
                    var n = this.wx.getSystemInfoSync();
                    (this.bannerAd = this.wx.createBannerAd({
                        adUnitId: this.bannerAdUnitId,
                        adIntervals: 30,
                        style: {left: (n.windowWidth - 300) / 2, top: n.windowHeight - 80, width: 300}
                    })),
                        this.bannerAd.onResize(function () {
                            t.bannerAd.style.top = n.windowHeight - t.bannerAd.style.realHeight - 1;
                        }),
                        this.bannerAd.onLoad(function () {
                            console.log("banner load Success!");
                        }),
                        this.bannerAd.onError(function (e) {
                            console.log(e);
                        }),
                        this.hasOpenUi &&
                            this.bannerAd
                                .show()
                                .then(function () {
                                    e && e.onSucceed && e.onSucceed();
                                })
                                .catch(function (e) {
                                    console.log(e);
                                });
                }
            }),
            (e.prototype.showBanner = function (e) {
                var t = this;
                this.canShowBannerAndInterstitialAd &&
                    o.wxMgr.checkIsWxPlatform() &&
                    ((this.hasOpenUi = !0),
                    this.bannerAd
                        ? this.bannerAd
                              .show()
                              .then(function () {
                                  e && e.onSucceed && e.onSucceed(),
                                      m.AdsTimesMgr.AddAdsTimes(m.AdsTimesType.BANNER, 1),
                                      r.analyMgr.reportAds_Banner(
                                          m.AdsTimesMgr.getAdsTimes(m.AdsTimesType.BANNER),
                                          e.openUi
                                      );
                              })
                              .catch(function () {
                                  t.createBanner(e);
                              })
                        : this.createBanner(e));
            }),
            (e.prototype.hideBanner = function () {
                this.canShowBannerAndInterstitialAd &&
                    o.wxMgr.checkIsWxPlatform() &&
                    ((this.hasOpenUi = !1),
                    this.bannerAd &&
                        this.bannerAd
                            .hide()
                            .then(function () {
                                console.log("hideBanner success!");
                            })
                            .catch(function (e) {
                                console.log("hideBanner err:", e);
                            }));
            }),
            (e.prototype.createInterstitialAd = function () {
                var e = this;
                this.canShowBannerAndInterstitialAd &&
                    o.wxMgr.checkIsWxPlatform() &&
                    (this.interstitialAd && this.interstitialAd.destroy(),
                    (this.interstitialAd = this.wx.createInterstitialAd({adUnitId: this.interstitialAdUnitId})),
                    this.interstitialAd.onLoad(function () {
                        console.log("interstitialAd load success!");
                    }),
                    this.interstitialAd.onError(function () {
                        e.interstitialAd.load();
                    }),
                    this.interstitialAd.onClose(function () {
                        e.InterstitialAdOption && e.InterstitialAdOption.onClose && e.InterstitialAdOption.onClose(),
                            g.CdTimerMgr.setInterstitialAdCdTimer(Date.now()),
                            (e.InterstitialAdOption = null);
                    }));
            }),
            (e.prototype.showInterstitialAd = function (e) {
                var t = this;
                this.canShowBannerAndInterstitialAd &&
                    o.wxMgr.checkIsWxPlatform() &&
                    ((this.InterstitialAdOption = e),
                    this.interstitialAd
                        ? this.interstitialAd
                              .show()
                              .then(function () {
                                  e && e.onSucceed && e.onSucceed(),
                                      m.AdsTimesMgr.AddAdsTimes(m.AdsTimesType.INTERSTITIAL, 1),
                                      r.analyMgr.reportInterstitialShowed(
                                          e.AdsType,
                                          m.AdsTimesMgr.getAdsTimes(m.AdsTimesType.INTERSTITIAL)
                                      ),
                                      r.analyMgr.reportAds_Interstitial(
                                          e.AdsType,
                                          m.AdsTimesMgr.getAdsTimes(m.AdsTimesType.INTERSTITIAL)
                                      );
                              })
                              .catch(function () {
                                  e && e.onFail && e.onFail(), t.createInterstitialAd();
                              })
                        : this.createInterstitialAd());
            }),
            (e.prototype.checkIsWxPlatform = function () {
                return this.wx;
            }),
            (e.prototype.reportEvent = function (e, t) {
                // if (o.wxMgr.checkIsWxPlatform()) {
                //     var n = {};
                //     Object.keys(t).map(function (e) {
                //         var o = t[e];
                //         "number" != typeof t[e] ? (n[e.toLowerCase()] = o.toString()) : (n[e.toLowerCase()] = t[e]);
                //     }),
                //         this.wx.reportEvent(e.toLowerCase(), n);
                // }
            }),
            (e._instance = null),
            e
        );
    })();
(o.WxManager = y), (o.wxMgr = y.instance());
