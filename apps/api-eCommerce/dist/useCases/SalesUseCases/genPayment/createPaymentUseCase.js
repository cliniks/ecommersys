"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayment2 = void 0;
const returnUserFromToken_1 = require("../../../utils/returnUserFromToken");
const repositories_1 = require("../../../repositories");
const ClientAsaasImplementation_1 = require("../../../providers/implementations/ClientAsaasImplementation");
const getCartProducts_1 = require("../../CartsUseCases/getCartProducts");
const updateStockInfo_1 = require("../../ProductsUseCases/updateStockInfo");
const validateComission_1 = require("../../CommissionUseCases/validateComission");
const monetary_1 = require("../../../utils/monetary");
const cartRepo = repositories_1.CartsRepository;
const addressRepo = repositories_1.AddressesRepository;
const productRepo = repositories_1.ProductsRepository;
const storeRepo = repositories_1.SellersRepository;
const couponRepo = repositories_1.CouponsRepository;
const gatewayPag = new ClientAsaasImplementation_1.ClientAsaasImplementation();
const createPayment2 = async (req, res, repo) => {
    try {
        const { billingType } = req.body;
        console.log("gerando Payment");
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const userCart = await cartRepo.getOne({ key: "owner", value: user._id });
        const userAddress = await addressRepo.getOne({
            key: "_id",
            value: user.userInfo.defaultAddress,
        });
        const cartProducts = (await (0, getCartProducts_1.getCartProducts)(userCart.products, userCart.coupons)) || [];
        const cartCoupons = userCart.coupons || [];
        let stores = [];
        let coupons = [];
        for (let product of cartProducts) {
            if (!stores.find((item) => item === product.owner)) {
                const getStore = await storeRepo.getOne({
                    key: "_id",
                    value: product.owner,
                });
                const filterStoreProducts = cartProducts.filter((item) => item.owner === product.owner);
                stores.push({
                    coupons: filterStoreProducts.map((item) => item.couponApplied),
                    products: filterStoreProducts,
                    storeId: product.owner,
                    totalDiscount: filterStoreProducts.reduce((a, b) => a + +b.discountValue, 0),
                    totalPrice: filterStoreProducts.reduce((a, b) => a + +b.totalValue, 0),
                    walletId: getStore.asaasWalletId,
                });
            }
            await (0, updateStockInfo_1.UpdateProductStock)(product, product.amount);
        }
        const reducedValued = {
            totalValue: stores.reduce((a, b) => a + +b.totalPrice, 0).toString(),
            totalDiscount: stores
                .reduce((a, b) => a + +b.totalDiscount, 0)
                .toString(),
            totalItems: stores.reduce((a, b) => a + b.products.length, 0).toString(),
        };
        const storeIds = [...new Set(stores.map((item) => item.storeId))];
        let splitPrepare = [];
        for (let r = 0; r < stores.length; r++) {
            splitPrepare.push({
                walletId: stores[r].walletId,
                fixedValue: await (0, validateComission_1.applyCommission)((0, monetary_1.addDot)(stores[r].totalPrice)),
            });
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
            storeIds,
        };
        const insertOnRepo = await repo.addOne(saleResponse);
        const prepareToGenCharge = {
            customer: user.gatewayPagId,
            billingType: billingType,
            dueDate: new Date().toISOString().split("T")[0],
            value: (0, monetary_1.addDot)(+saleResponse.totalValue + +saleResponse.totalDiscount),
            description: `Pedido ${insertOnRepo._id}`,
            externalReference: insertOnRepo._id,
            split: splitPrepare,
        };
        console.log(prepareToGenCharge);
        const generatePayment = await gatewayPag.genCharge(prepareToGenCharge);
        res.json({ insertOnRepo, generatePayment });
        // res.json({ saleResponse, splitPrepare });
    }
    catch (err) {
        console.log(err.toString());
        res.status(400).send(false);
    }
};
exports.createPayment2 = createPayment2;
