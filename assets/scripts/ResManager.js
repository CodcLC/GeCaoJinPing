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
Object.defineProperty(o, "__esModule", {value: !0}), (o.ResManager = void 0);
var i = e("LoadManager"),
    r = e("EquipManager"),
    s = e("censtant"),
    c = (function () {
        function e() {}
        return (
            (e.loadIcon = function (e, t) {
                var o = cc.resources.get(t, cc.SpriteFrame);
                o
                    ? e.isValid && (e.spriteFrame = o)
                    : cc.resources.load(t, cc.SpriteFrame, function (t, o) {
                          t ? cc.log(t) : e.isValid && (e.spriteFrame = o);
                      });
            }),
            (e.loadEquip = function (t) {
                return n(this, void 0, void 0, function () {
                    var o;
                    return a(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return (o = e.EquipPrefab + t), [4, i.LoadManager.loadResAwait(o, cc.Prefab)];
                            case 1:
                                return [2, n.sent()];
                        }
                    });
                });
            }),
            (e.loadEntitiesSpine = function (t, o, n) {
                var a = e.EntitiesSpine + o,
                    i = cc.resources.get(a, sp.SkeletonData);
                i
                    ? t.isValid && ((t.skeletonData = i), n && n(i))
                    : cc.resources.load(
                          a,
                          sp.SkeletonData,
                          function () {},
                          function (e, o) {
                              e ? cc.log(e) : t.isValid && ((t.skeletonData = o), n && n(o));
                          }
                      );
            }),
            (e.loadDisplaySpine = function (t, o, n) {
                var a = e.displaySpine + o,
                    i = cc.resources.get(a, sp.SkeletonData);
                i
                    ? t.isValid && ((t.skeletonData = i), n && n(i))
                    : cc.resources.load(
                          a,
                          sp.SkeletonData,
                          function () {},
                          function (e, o) {
                              e ? cc.log(e) : t.isValid && ((t.skeletonData = o), n && n(o));
                          }
                      );
            }),
            (e.loadQualityBg = function (t, o) {
                var n = r.equipMgr.getTypeIndex(t),
                    a = s.Equip.EQUIP_QUALITY_ + n;
                e.loadIcon(o, a);
            }),
            (e.loadEquipIcon = function (t, o) {
                var n = s.Weapon.TEXTURE_ + t;
                e.loadIcon(o, n);
            }),
            (e.loadTypeBg = function (t, o) {
                var n = r.equipMgr.getTypeBg(t),
                    a = s.Equip.EQUIP_PART_ + n;
                e.loadIcon(o, a);
            }),
            (e.loadTypeIcon = function (t, o) {
                var n = s.Equip.EQUIP_TYPE_ + t;
                e.loadIcon(o, n);
            }),
            (e.loadGoldIcon = function (t) {
                e.loadIcon(t, s.Common.GOLD_ICON);
            }),
            (e.loadItemCommon = function (t, o) {
                e.loadIcon(o, this.itemCommon + t.toString());
            }),
            (e.loadMapIcon = function (t, o) {
                e.loadIcon(o, s.Common.MAP_ICON_ + t);
            }),
            (e.loadBattleMapIcon = function (t, o) {
                e.loadIcon(o, this.BattleMap + t);
            }),
            (e.loadHeadIcon = function (t, o) {
                e.loadIcon(o, this.headIcon + t);
            }),
            (e.loadHeroChip = function (t, o) {
                e.loadIcon(o, this.heroChip + t);
            }),
            (e.loadStoreKeys = function (t, o) {
                e.loadIcon(o, this.storeKeys + "yaoshi_" + t.toString());
            }),
            (e.loadHeroExp = function (t) {
                e.loadIcon(t, this.heroExp);
            }),
            (e.loadActivityBg = function (t, o) {
                e.loadIcon(o, this.ItemBg + t);
            }),
            (e.loadActivityItem = function (t, o) {
                e.loadIcon(t, this.ActivityItem + o);
            }),
            (e.HeadUrl = "texture/icon/headIcon/"),
            (e.SkillIcon = "texture/icon/skill/"),
            (e.EquipIcon = "texture/icon/skill/"),
            (e.EquipPrefab = "prefab/Skill/"),
            (e.BattleMap = "texture/icon/map/"),
            (e.EntitiesSpine = "spine/entities/"),
            (e.displaySpine = "spine/displayEntities/d_"),
            (e.TalentIcon = "texture/icon/talentIcon/"),
            (e.HandWeapon = "texture/handWeapon/"),
            (e.headIcon = "texture/icon/headIcon/"),
            (e.heroChip = "texture/icon/heroChip/"),
            (e.storeKeys = "texture/icon/storeKeys/"),
            (e.heroExp = "texture/icon/heroExp/1017"),
            (e.itemCommon = "texture/common/"),
            (e.ItemBg = "texture/icon/activityBg/"),
            (e.ActivityItem = "texture/icon/activityItem/"),
            e
        );
    })();
o.ResManager = c;
