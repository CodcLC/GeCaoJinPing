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
Object.defineProperty(o, "__esModule", {value: !0}), (o.audioMgr = o.AudioManager = void 0);
var i = e("LoadManager"),
    r = e("PlayerData"),
    s = (function () {
        function e() {
            (this.audioMap = new Map()),
                (this.isPlayingMusic = !1),
                (this.isPlayingEffect = !1),
                (this.nowPlayBgm = ""),
                (this.audioIdMap = new Map());
        }
        return (
            (e.instance = function () {
                return e._instance || (e._instance = new e()), e._instance;
            }),
            (e.prototype.loadAudio = function (e) {
                return n(this, void 0, void 0, function () {
                    var t = this;
                    return a(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return [4, i.LoadManager.loadResDirAwait("sound", e)];
                            case 1:
                                return (
                                    o.sent().forEach(function (e) {
                                        t.audioMap.set(e._name, e);
                                    }),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (e.prototype.startBgm = function (e, t) {
                if ((void 0 === t && (t = !0), this.nowPlayBgm !== e)) {
                    if (this.isPlayingMusic) {
                        var o = this.audioMap.get(e);
                        o && o.isValid && ((this.nowPlayBgm = e), cc.audioEngine.playMusic(o, t));
                    }
                    this.nowPlayBgm = e;
                }
            }),
            (e.prototype.startEffect = function (e, t) {
                if ((void 0 === t && (t = !1), this.isPlayingEffect)) {
                    var o = this.audioMap.get(e);
                    if (o && o.isValid) {
                        var n = cc.audioEngine.playEffect(o, t);
                        this.audioIdMap.set(e, n);
                    }
                }
            }),
            (e.prototype.initMusic = function () {
                (this.isPlayingMusic = r.playData.getSettingSound()),
                    (this.isPlayingEffect = r.playData.getSettingMusic());
            }),
            (e.prototype.stopBgm = function () {
                (this.isPlayingMusic = !1), cc.audioEngine.stopMusic();
            }),
            (e.prototype.stopEffect = function () {
                (this.isPlayingEffect = !1), cc.audioEngine.stopAllEffects();
            }),
            (e.prototype.pauseEffect = function (e) {
                var t = this.audioIdMap.get(e);
                "number" == typeof t && t && cc.audioEngine.pauseEffect(t);
            }),
            (e.prototype.resumeEffect = function (e) {
                var t = this.audioIdMap.get(e);
                "number" == typeof t && t && cc.audioEngine.resumeEffect(t);
            }),
            (e.prototype.stopEffectByName = function (e) {
                var t = this.audioIdMap.get(e);
                "number" == typeof t && t && (cc.audioEngine.stopEffect(t), this.audioIdMap.delete(e));
            }),
            (e.prototype.openBgm = function () {
                this.isPlayingMusic = !0;
                var e = this.audioMap.get(this.nowPlayBgm);
                e && e.isValid && cc.audioEngine.playMusic(e, !0);
            }),
            (e.prototype.openEffect = function () {
                this.isPlayingEffect = !0;
            }),
            (e._instance = null),
            e
        );
    })();
(o.AudioManager = s), (o.audioMgr = s.instance());
