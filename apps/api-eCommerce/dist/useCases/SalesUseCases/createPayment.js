"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayment = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const repositories_1 = require("../../repositories");
const ClientAsaasImplementation_1 = require("../../providers/implementations/ClientAsaasImplementation");
const validateComission_1 = require("../CommissionUseCases/validateComission");
const verifyCouponApply_1 = require("../CouponsUseCases/verifyCouponApply");
const monetary_1 = require("../../utils/monetary");
const cartRepo = repositories_1.CartsRepository;
const addressRepo = repositories_1.AddressesRepository;
const productRepo = repositories_1.ProductsRepository;
const storeRepo = repositories_1.SellersRepository;
const couponRepo = repositories_1.CouponsRepository;
const gatewayPag = new ClientAsaasImplementation_1.ClientAsaasImplementation();
const createPayment = async (req, res, repo) => {
    var _a;
    try {
        const { billingType } = req.body;
        console.log("gerando Payment");
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const userCart = await cartRepo.getOne({ key: "owner", value: user._id });
        const userAddress = await addressRepo.getOne({
            key: "_id",
            value: user.userInfo.defaultAddress,
        });
        const cartProducts = userCart.products || [];
        const cartCoupons = userCart.coupons || [];
        let stores = [];
        let coupons = [];
        // Fetch All Coupons
        if (cartCoupons.length > 0) {
            for (let c = 0; c < cartCoupons.length; c++) {
                if (cartCoupons[c]) {
                    const couponId = ((_a = cartCoupons[c]) === null || _a === void 0 ? void 0 : _a.split("/")[0]) || "";
                    const getCoupon = await couponRepo.getOne({
                        key: "_id",
                        value: couponId,
                    });
                    coupons.push(getCoupon);
                }
            }
        }
        for (let i = 0; i < cartProducts.length; i++) {
            const { productId, amount } = cartProducts[i];
            const getProduct = await productRepo.getOne({
                key: "_id",
                value: productId,
            });
            const getSeller = await storeRepo.getOne({
                key: "_id",
                value: getProduct.owner,
            });
            const discount = cartCoupons.length > 0
                ? (0, verifyCouponApply_1.verifyCouponApply)(coupons, getSeller, getProduct, amount)
                : {
                    couponApplied: "",
                    discount: 0,
                    discountApplied: 0,
                    totalValue: (0, monetary_1.addDot)(getProduct.price),
                };
            console.log({ discount });
            const productData = {
                imgs: getProduct.imgs,
                name: getProduct.name,
                owner: getProduct.owner,
                price: getProduct.price,
                regularPrice: getProduct.regularPrice,
                shippingInfo: getProduct.shippingInfo,
                stockInfo: getProduct.stockInfo,
                _id: getProduct._id,
                virtualProduct: getProduct.virtualProduct,
                categories: getProduct === null || getProduct === void 0 ? void 0 : getProduct.categories,
            };
            const preparePrice = (0, monetary_1.addDot)(+getProduct.price * +amount);
            console.log({ preparePrice });
            const prepareProduct = {
                product: productData,
                amount,
                value: +preparePrice,
                discountValue: +(discount === null || discount === void 0 ? void 0 : discount.discount) || 0,
                couponApplied: (discount === null || discount === void 0 ? void 0 : discount.couponApplied) || "0",
                totalValue: +(discount === null || discount === void 0 ? void 0 : discount.totalValue) || 0,
            };
            const storePrepare = {
                storeId: getSeller._id,
                walletId: getSeller.asaasWalletId,
                coupons: cartCoupons,
                products: [prepareProduct],
                totalDiscount: +(discount === null || discount === void 0 ? void 0 : discount.discount) || 0,
                totalPrice: +(discount === null || discount === void 0 ? void 0 : discount.totalValue) || 0,
            };
            if (stores.length > 0 &&
                stores.find((item) => item.storeId === storePrepare.storeId)) {
                const indexOfStore = stores.findIndex((item) => item.storeId === storePrepare.storeId);
                stores[indexOfStore].products.push(...storePrepare.products);
                stores[indexOfStore].totalDiscount =
                    +stores[indexOfStore].totalDiscount + +storePrepare.totalDiscount;
                stores[indexOfStore].totalPrice =
                    +stores[indexOfStore].totalPrice + +storePrepare.totalPrice;
                continue;
            }
            stores.push(storePrepare);
        }
        const reducedValued = {
            totalValue: stores.reduce((a, b) => a + +b.totalPrice, 0).toString(),
            totalDiscount: stores
                .reduce((a, b) => a + +b.totalDiscount, 0)
                .toString(),
            totalItems: stores.reduce((a, b) => a + b.products.length, 0).toString(),
        };
        let storeValues = [];
        for (let s = 0; s < stores.length; s++) {
            if (!storeValues.includes(stores[s].storeId))
                storeValues.push(stores[s].storeId);
        }
        const saleResponse = {
            userId: user._id,
            addressId: userAddress._id,
            sellers: stores,
            coupons: cartCoupons,
            totalValue: +reducedValued.totalValue,
            totalDiscount: +reducedValued.totalDiscount,
            totalItems: +reducedValued.totalItems,
            billingType,
            storeIds: storeValues,
        };
        // VEFIRY AMOUNT
        console.log({ saleResponse });
        const insertOnRepo = await repo.addOne(saleResponse);
        // const insertOnRepo = { _id: "teste" };
        let splitPrepare = [];
        for (let r = 0; r < saleResponse.sellers.length; r++) {
            splitPrepare.push({
                walletId: saleResponse.sellers[r].walletId,
                fixedValue: await (0, validateComission_1.applyCommission)(saleResponse.sellers[r].totalPrice),
            });
        }
        const prepareToGenCharge = {
            customer: user.gatewayPagId,
            billingType: billingType,
            dueDate: new Date().toISOString().split("T")[0],
            value: saleResponse.totalValue,
            description: `Pedido ${insertOnRepo._id}`,
            externalReference: insertOnRepo._id,
            split: splitPrepare,
        };
        console.log(prepareToGenCharge);
        const generatePayment = await gatewayPag.genCharge(prepareToGenCharge);
        console.log(generatePayment);
        if (!generatePayment) {
            throw new Error("não foi possível concluir o pedido, contate o suporte");
        }
        const getQRCodePix = generatePayment
            ? await gatewayPag.genPixCode({
                id: generatePayment.id,
            })
            : null;
        await repo.update(insertOnRepo._id, { paymentId: generatePayment.id });
        res.json({ generatePayment, getQRCodePix });
    }
    catch (err) {
        console.log(err.toString());
        res.status(400).send(false);
    }
};
exports.createPayment = createPayment;
