var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0}), (o.drawMgr = o.DrawManager = void 0);
var n = e("JsonManager"),
    a = e("LocalStorage"),
    i = e("LocalConst"),
    r = e("CommonUtil"),
    s = e("EquipManager"),
    c = e("PlayerData"),
    l = e("UIManager"),
    p = e("ViewUrl"),
    u = e("AnalyticsManager"),
    d = e("ClientEvents"),
    h = (function () {
        function e() {
            (this.drawData = null),
                (this.normalOneCost = 0),
                (this.superOneCost = 0),
                (this.superTenCost = 0),
                (this.ssrOneCost = 0),
                (this.ssrTenCost = 0),
                (this.diamondFreeCd = 0),
                (this.diamondFreeCount = 0),
                (this.diamondALotCount = 0),
                (this.diamondLittleCount = 0),
                (this.diamondALotCd = 0),
                (this.goldFreeCount = 0),
                (this.goldAdCount = 0),
                (this.goldCostCount = 0),
                (this.goldFreeCd = 0),
                (this.goldCostDiamond = 0),
                (this.freeCdTime = 0),
                (this.aLotCdTime = 0),
                (this.freeGoldCdTime = 0);
        }
        return (
            (e.instance = function () {
                return null == e._instance && (e._instance = new e()), e._instance;
            }),
            (e.prototype.initData = function () {
                var e = a.LocalStorage.getData(i.LocalConst.DRAW_DATA_NEW);
                e
                    ? (this.drawData = e)
                    : (e = a.LocalStorage.getData(i.LocalConst.DRAW_DATA))
                    ? ((this.drawData = e), a.LocalStorage.delete(i.LocalConst.DRAW_DATA))
                    : (this.drawData = {
                          normalDrawCount: 0,
                          superDrawCount: 0,
                          SSRDrawCount: 0,
                          SSROneCount: 0,
                          freeSeeAdTime: 0,
                          aLotSeeAdTime: 0,
                          aLotSeeAdCount: 0,
                          diamondLittle: 0,
                          diamondALot: 0,
                          normalGetBlue: 0,
                          superGetPp: 0,
                          freeGoldSeeAdTime: 0
                      }),
                    this.initCost(),
                    this.initCd(),
                    this.saveDrawData();
            }),
            (e.prototype.analyseRate = function (e, t, o, n, a, i, r, s, c, l) {
                e.idrate.split(";").forEach(function (e) {
                    var a = e.split("|");
                    t.push(Number(a[0])), o.push(Number(a[1])), n.push(Number(a[2]));
                }),
                    e.idrate1.split(";").forEach(function (e) {
                        var t = e.split("|");
                        a.push(Number(t[0])), i.push(Number(t[1])), r.push(Number(t[2]));
                    }),
                    e.idrate2.split(";").forEach(function (e) {
                        var t = e.split("|");
                        s.push(Number(t[0])), c.push(Number(t[1])), l.push(Number(t[2]));
                    });
            }),
            (e.prototype.initFreeCdTime = function () {
                this.freeCdTime = this.drawData.freeSeeAdTime - new Date().getTime() / 1e3;
            }),
            (e.prototype.initALotCdTime = function () {
                this.aLotCdTime = this.drawData.aLotSeeAdTime - new Date().getTime() / 1e3;
            }),
            (e.prototype.initFreeGoldTime = function () {
                this.freeGoldCdTime = this.drawData.freeGoldSeeAdTime - new Date().getTime() / 1e3;
            }),
            (e.prototype.downCdTime = function () {
                this.freeCdTime--;
            }),
            (e.prototype.downALotCdTime = function () {
                this.aLotCdTime--;
            }),
            (e.prototype.downGoldFreeCdTime = function () {
                this.freeGoldCdTime--;
            }),
            (e.prototype.getFreeCdTime = function () {
                return this.freeCdTime;
            }),
            (e.prototype.getALotCdTime = function () {
                return this.aLotCdTime;
            }),
            (e.prototype.getGoldFreeCdTime = function () {
                return this.freeGoldCdTime;
            }),
            (e.prototype.getFreeNowHasCd = function () {
                return this.drawData.freeSeeAdTime - new Date().getTime() / 1e3;
            }),
            (e.prototype.getALotNowHasCd = function () {
                return this.drawData.aLotSeeAdTime - new Date().getTime() / 1e3;
            }),
            (e.prototype.getALotNowHasCount = function () {
                var e;
                return null !== (e = this.drawData.aLotSeeAdCount) && void 0 !== e ? e : 0;
            }),
            (e.prototype.setALotNowHasCount = function (e) {
                (this.drawData.aLotSeeAdCount = e), this.saveDrawData();
            }),
            (e.prototype.getGoldFreeNowHasCd = function () {
                return this.drawData.freeGoldSeeAdTime - new Date().getTime() / 1e3;
            }),
            (e.prototype.getFreeCount = function () {
                return this.diamondFreeCount;
            }),
            (e.prototype.getLittleCount = function () {
                return this.diamondLittleCount;
            }),
            (e.prototype.getALotCount = function () {
                return this.diamondALotCount;
            }),
            (e.prototype.getFreeGoldCount = function () {
                return this.goldFreeCount;
            }),
            (e.prototype.getAdGoldCount = function () {
                return this.goldAdCount;
            }),
            (e.prototype.getCostGoldCount = function () {
                return this.goldCostCount;
            }),
            (e.prototype.getGoldCostDiamondCount = function () {
                return this.goldCostDiamond;
            }),
            (e.prototype.saveDrawData = function () {
                a.LocalStorage.setData(i.LocalConst.DRAW_DATA_NEW, this.drawData), d.ClientEvents.ShopChange.emit();
            }),
            (e.prototype.initCost = function () {
                (this.normalOneCost = Number(n.JsonMgr.getDefineConstantByName("ShopBox1once").split("|")[1])),
                    (this.superOneCost = Number(n.JsonMgr.getDefineConstantByName("ShopBox2once").split("|")[1])),
                    (this.superTenCost = Number(n.JsonMgr.getDefineConstantByName("ShopBox2ten").split("|")[1])),
                    (this.ssrOneCost = Number(n.JsonMgr.getDefineConstantByName("ShopBox3once").split("|")[1])),
                    (this.ssrTenCost = Number(n.JsonMgr.getDefineConstantByName("ShopBox3ten").split("|")[1]));
            }),
            (e.prototype.initCd = function () {
                var e = n.JsonMgr.getDefineConstantByName("ShopDiamond1").split("|");
                (this.diamondFreeCount = Number(e[0])), (this.diamondFreeCd = 3600 * Number(e[1]));
                var t = n.JsonMgr.getDefineConstantByName("ShopDiamond3").split("|");
                (this.diamondALotCount = Number(t[0])), (this.diamondALotCd = 3600 * Number(t[1]));
                var o = n.JsonMgr.getDefineConstantByName("ShopDiamond2").split("|");
                this.diamondLittleCount = Number(o[0]);
                var a = 10101e3 + (c.playData.getLevel() > 20 ? 20 : c.playData.getLevel()),
                    i = n.JsonMgr.getPatrolById(a).idfixed.split("|")[1],
                    r = n.JsonMgr.getDefineConstantByName("ShopCoin1").split("|"),
                    s = Number(r[0]);
                (this.goldFreeCount = s * Number(i)), (this.goldFreeCd = 3600 * Number(r[1]));
                var l = n.JsonMgr.getDefineConstantByName("ShopCoin2AD").split("|");
                this.goldAdCount = Number(l[0]) * Number(i);
                var p = n.JsonMgr.getDefineConstantByName("ShopCoin3").split("|");
                (this.goldCostCount = Number(p[3]) * Number(i)), (this.goldCostDiamond = Number(p[1]));
            }),
            (e.prototype.getNormalOne = function () {
                return this.normalOneCost;
            }),
            (e.prototype.getSuperOne = function () {
                return this.superOneCost;
            }),
            (e.prototype.getSuperTen = function () {
                return this.superTenCost;
            }),
            (e.prototype.getSSROne = function () {
                return this.ssrOneCost;
            }),
            (e.prototype.getSSRTen = function () {
                return this.ssrTenCost;
            }),
            (e.prototype.getNormalMustTime = function () {
                return 10 - (this.drawData.normalGetBlue % 10);
            }),
            (e.prototype.getSuperMustTime = function () {
                return 10 - (this.drawData.superGetPp % 10);
            }),
            (e.prototype.getSSRMustTime = function () {
                return 150 - ((this.drawData.SSRDrawCount || 0) % 150);
            }),
            (e.prototype.getSSRGrade4MustTime = function () {
                return 10 - ((this.drawData.SSROneCount || 0) % 10);
            }),
            (e.prototype.addNormalDrawCount = function () {
                this.drawData.normalDrawCount++, this.drawData.normalGetBlue++, this.saveDrawData();
            }),
            (e.prototype.addSuperDrawCount = function () {
                this.drawData.superDrawCount++, this.drawData.superGetPp++, this.saveDrawData();
            }),
            (e.prototype.addSSRDrawCount = function () {
                this.drawData.SSRDrawCount
                    ? this.drawData.SSRDrawCount++
                    : ((this.drawData.SSRDrawCount = 0), this.drawData.SSRDrawCount++),
                    this.drawData.SSROneCount
                        ? this.drawData.SSROneCount++
                        : ((this.drawData.SSROneCount = 0), this.drawData.SSROneCount++),
                    this.saveDrawData();
            }),
            (e.prototype.drawInNormalPool = function (e, t, o) {
                var a,
                    i,
                    l,
                    p,
                    d = [];
                if ((this.addNormalDrawCount(), this.drawData.normalGetBlue % 10)) {
                    var h = n.JsonMgr.getPoolById(1010102),
                        g = [],
                        m = [],
                        f = [],
                        y = [],
                        v = [],
                        M = [],
                        _ = [];
                    this.analyseRate(h, g, [], m, [], f, y, v, M, _),
                        (a = g[r.CommonUtil.getWeightRandom(m)]),
                        (i = f[r.CommonUtil.getWeightRandom(y)]),
                        (l = v[(C = r.CommonUtil.getWeightRandom(_))]),
                        (p = M[C]),
                        s.equipMgr.addEquip(a),
                        c.playData.addGold(i),
                        s.equipMgr.addMap(l, p);
                } else {
                    var C,
                        b = n.JsonMgr.getPoolById(1010103),
                        T = [],
                        w = [],
                        N = [],
                        E = [],
                        S = [],
                        D = [],
                        A = [];
                    this.analyseRate(b, T, [], w, [], N, E, S, D, A),
                        (a = T[r.CommonUtil.getWeightRandom(w)]),
                        (i = N[r.CommonUtil.getWeightRandom(E)]),
                        (l = S[(C = r.CommonUtil.getWeightRandom(A))]),
                        (p = D[C]),
                        s.equipMgr.addEquip(a),
                        c.playData.addGold(i),
                        s.equipMgr.addMap(l, p);
                }
                d.push(a + "|1"),
                    d.push("1001|" + i),
                    d.push(l + "|" + p),
                    u.analyMgr.reportOpenStoreBox("80Box", t, o, c.playData.getNormalKey(), d.join(","));
                var k = n.JsonMgr.getJsonById("weapon", a),
                    I = e ? "Ads" : "Box";
                return (
                    u.analyMgr.reportGetGold(i, I),
                    u.analyMgr.reportGetItem("Weapon", a, 1, I),
                    u.analyMgr.reportGetItem("Biueprint", l, p, I),
                    3 === k.grade && (this.drawData.normalGetBlue = 0),
                    {json: k, mapId: l, mapNum: p, goldNum: i}
                );
            }),
            (e.prototype.drawInSuperPool = function (e, t, o) {
                for (var a = [], i = [], l = 0; l < e; l++)
                    if ((this.addSuperDrawCount(), this.drawData.superGetPp % 10)) {
                        var p = n.JsonMgr.getPoolById(1010202),
                            d = [],
                            h = [],
                            g = [],
                            m = [],
                            f = [],
                            y = [],
                            v = [];
                        this.analyseRate(p, d, [], h, [], g, m, f, y, v);
                        var M = d[r.CommonUtil.getWeightRandom(h)],
                            _ = n.JsonMgr.getJsonById("weapon", M),
                            C = g[r.CommonUtil.getWeightRandom(m)],
                            b = f[(w = r.CommonUtil.getWeightRandom(v))],
                            T = y[w];
                        a.push({json: _, mapId: b, mapNum: T, goldNum: C}),
                            s.equipMgr.addEquip(M),
                            c.playData.addGold(C),
                            s.equipMgr.addMap(b, T),
                            u.analyMgr.reportGetGold(C, "Box"),
                            u.analyMgr.reportGetItem("Weapon", M, 1, "Box"),
                            u.analyMgr.reportGetItem("Biueprint", b, T, "Box"),
                            i.push(M + "|1"),
                            i.push("1001|" + C),
                            i.push(b + "|" + T),
                            4 === _.grade && (this.drawData.superGetPp = 0);
                    } else {
                        var w,
                            N = n.JsonMgr.getPoolById(1010203),
                            E = [],
                            S = [],
                            D = [],
                            A = [],
                            k = [],
                            I = [],
                            R = [];
                        this.analyseRate(N, E, [], S, [], D, A, k, I, R),
                            (M = E[r.CommonUtil.getWeightRandom(S)]),
                            (_ = n.JsonMgr.getJsonById("weapon", M)),
                            (C = D[r.CommonUtil.getWeightRandom(A)]),
                            (b = k[(w = r.CommonUtil.getWeightRandom(R))]),
                            (T = I[w]),
                            a.push({json: _, mapId: b, mapNum: T, goldNum: C}),
                            s.equipMgr.addEquip(M),
                            c.playData.addGold(C),
                            s.equipMgr.addMap(b, T),
                            u.analyMgr.reportGetGold(C, "Box"),
                            u.analyMgr.reportGetItem("Weapon", M, 1, "Box"),
                            u.analyMgr.reportGetItem("Biueprint", b, T, "Box"),
                            i.push(M + "|1"),
                            i.push("1001|" + C),
                            i.push(b + "|" + T),
                            (this.drawData.superGetPp = 0);
                    }
                return u.analyMgr.reportOpenStoreBox("300Box", t, o, c.playData.getSuperKey(), i.join(",")), a;
            }),
            (e.prototype.drawInFailGuidePool = function () {
                var e = [],
                    t = n.JsonMgr.getPoolById(1010201),
                    o = [],
                    a = [],
                    i = [],
                    l = [],
                    p = [],
                    u = [],
                    d = [];
                this.analyseRate(t, o, [], a, [], i, l, p, u, d);
                var h = o[r.CommonUtil.getWeightRandom(a)],
                    g = n.JsonMgr.getJsonById("weapon", h),
                    m = i[r.CommonUtil.getWeightRandom(l)],
                    f = r.CommonUtil.getWeightRandom(d),
                    y = p[f],
                    v = u[f];
                return (
                    e.push({json: g, mapId: y, mapNum: v, goldNum: m}),
                    s.equipMgr.addEquip(h),
                    c.playData.addGold(m),
                    s.equipMgr.addMap(y, v),
                    e
                );
            }),
            (e.prototype.drawInSSRPool = function (e, t, o) {
                for (var a = [], i = [], l = 0; l < e; l++)
                    if ((this.addSSRDrawCount(), this.drawData.SSRDrawCount >= 150)) {
                        var p = n.JsonMgr.getPoolById(1010407),
                            d = [],
                            h = [],
                            g = [],
                            m = [],
                            f = [],
                            y = [],
                            v = [];
                        this.analyseRate(p, d, [], h, [], m, g, f, v, y);
                        var M = d[r.CommonUtil.getWeightRandom(h)],
                            _ = n.JsonMgr.getJsonById("weapon", M),
                            C = m[r.CommonUtil.getWeightRandom(g)],
                            b = r.CommonUtil.getWeightRandom(y),
                            T = f[b],
                            w = v[b];
                        a.push({json: _, mapId: T, mapNum: w, goldNum: C}),
                            s.equipMgr.addEquip(M),
                            c.playData.addGold(C),
                            s.equipMgr.addMap(T, w),
                            u.analyMgr.reportGetGold(C, "Box"),
                            u.analyMgr.reportGetItem("Weapon", M, 1, "Box"),
                            u.analyMgr.reportGetItem("Biueprint", T, w, "Box"),
                            i.push(M + "|1"),
                            i.push("1001|" + C),
                            i.push(T + "|" + w),
                            (this.drawData.SSRDrawCount = 0);
                    } else if (this.drawData.SSROneCount % 10) {
                        var N = n.JsonMgr.getPoolById(1010405),
                            E = [],
                            S = [],
                            D = [],
                            A = [],
                            k = [],
                            I = [],
                            R = [],
                            L = [],
                            P = [];
                        this.analyseRate(N, E, S, D, A, k, I, R, L, P);
                        var O = E[r.CommonUtil.getWeightRandom(D)],
                            B = n.JsonMgr.getJsonById("weapon", O);
                        (C = k[r.CommonUtil.getWeightRandom(I)]),
                            (T = R[(x = r.CommonUtil.getWeightRandom(P))]),
                            (w = L[x]),
                            a.push({json: B, mapId: T, mapNum: w, goldNum: C}),
                            s.equipMgr.addEquip(O),
                            c.playData.addGold(C),
                            s.equipMgr.addMap(T, w),
                            u.analyMgr.reportGetGold(C, "Box"),
                            u.analyMgr.reportGetItem("Weapon", O, 1, "Box"),
                            u.analyMgr.reportGetItem("Biueprint", T, w, "Box"),
                            i.push(O + "|1"),
                            i.push("1001|" + C),
                            i.push(T + "|" + w),
                            1 === B.specialtype && B.grade >= 4
                                ? ((this.drawData.SSRDrawCount = 0), (this.drawData.SSROneCount = 0))
                                : B.grade >= 4 && (this.drawData.SSROneCount = 0);
                    } else {
                        var x;
                        (N = n.JsonMgr.getPoolById(1010406)),
                            (E = []),
                            (S = []),
                            (D = []),
                            (A = []),
                            (k = []),
                            (I = []),
                            (R = []),
                            (L = []),
                            (P = []),
                            this.analyseRate(N, E, S, D, A, k, I, R, L, P),
                            (O = E[r.CommonUtil.getWeightRandom(D)]),
                            (B = n.JsonMgr.getJsonById("weapon", O)),
                            (C = k[r.CommonUtil.getWeightRandom(I)]),
                            (T = R[(x = r.CommonUtil.getWeightRandom(P))]),
                            (w = L[x]),
                            a.push({json: B, mapId: T, mapNum: w, goldNum: C}),
                            s.equipMgr.addEquip(O),
                            c.playData.addGold(C),
                            s.equipMgr.addMap(T, w),
                            u.analyMgr.reportGetGold(C, "Box"),
                            u.analyMgr.reportGetItem("Weapon", O, 1, "Box"),
                            u.analyMgr.reportGetItem("Biueprint", T, w, "Box"),
                            i.push(O + "|1"),
                            i.push("1001|" + C),
                            i.push(T + "|" + w),
                            1 === B.specialtype && B.grade >= 4
                                ? ((this.drawData.SSRDrawCount = 0), (this.drawData.SSROneCount = 0))
                                : B.grade >= 4 && (this.drawData.SSROneCount = 0);
                    }
                return u.analyMgr.reportOpenStoreBox("SSRBox", t, o, c.playData.getSSRKey(), i.join(",")), a;
            }),
            (e.prototype.getFreeDiamond = function () {
                (this.drawData.freeSeeAdTime = new Date().getTime() / 1e3 + this.diamondFreeCd),
                    this.saveDrawData(),
                    c.playData.addGem(this.diamondFreeCount),
                    u.analyMgr.reportGetGem(this.diamondFreeCount, "Shop"),
                    l.UIMgr.showView(p.ViewUrl.commonRewardView, null, [{id: 1002, count: this.diamondFreeCount}]);
            }),
            (e.prototype.getALotDiamond = function () {
                (this.drawData.aLotSeeAdTime = new Date().getTime() / 1e3 + this.diamondALotCd),
                    (this.drawData.aLotSeeAdCount = 0),
                    this.saveDrawData(),
                    c.playData.addGem(this.diamondALotCount),
                    u.analyMgr.reportGetGem(this.diamondALotCount, "Ads"),
                    l.UIMgr.showView(p.ViewUrl.commonRewardView, null, [{id: 1002, count: this.diamondALotCount}]);
            }),
            (e.prototype.getLittleDiamond = function () {
                c.playData.addGem(this.diamondLittleCount),
                    u.analyMgr.reportGetGem(this.diamondLittleCount, "Ads"),
                    l.UIMgr.showView(p.ViewUrl.commonRewardView, null, [{id: 1002, count: this.diamondLittleCount}]);
            }),
            (e.prototype.getFreeGold = function () {
                (this.drawData.freeGoldSeeAdTime = new Date().getTime() / 1e3 + this.goldFreeCd),
                    this.saveDrawData(),
                    c.playData.addGold(this.goldFreeCount),
                    u.analyMgr.reportGetGold(this.goldFreeCount, "Shop"),
                    l.UIMgr.showView(p.ViewUrl.commonRewardView, null, [{id: 1001, count: this.goldFreeCount}]);
            }),
            (e.prototype.getAdGold = function () {
                c.playData.addGold(this.goldAdCount),
                    u.analyMgr.reportGetGold(this.goldAdCount, "Ads"),
                    l.UIMgr.showView(p.ViewUrl.commonRewardView, null, [{id: 1001, count: this.goldAdCount}]);
            }),
            (e.prototype.getCostGold = function () {
                return (
                    !!c.playData.checkGem(this.goldCostDiamond) &&
                    (c.playData.addGold(this.goldCostCount),
                    u.analyMgr.reportGetGold(this.goldCostCount, "Gem"),
                    c.playData.useGem(this.goldCostDiamond),
                    u.analyMgr.reportUseGem(this.goldCostDiamond, "BuyGold"),
                    l.UIMgr.showView(p.ViewUrl.commonRewardView, null, [{id: 1001, count: this.goldCostCount}]),
                    !0)
                );
            }),
            (e.prototype.getNormalKey = function () {
                return c.playData.getNormalKey();
            }),
            (e.prototype.getSuperKey = function () {
                return c.playData.getSuperKey();
            }),
            (e.prototype.getSSRKey = function () {
                return c.playData.getSSRKey();
            }),
            e
        );
    })();
(o.DrawManager = h), (o.drawMgr = h.instance());
