"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertCoupon = void 0;
const repositories_1 = require("../../repositories");
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const verifyCouponCanBeApplied_1 = require("./verifyCouponCanBeApplied");
const productRepo = repositories_1.ProductsRepository;
const couponRepo = repositories_1.CouponsRepository;
const insertCoupon = async (req, res, repo) => {
    try {
        const { couponId } = req.body;
        const containsSlash = couponId.includes("/");
        let id = containsSlash ? couponId.split("/")[0] : null;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const cart = await repo.getOne({ key: "owner", value: user._id });
        if (!cart)
            throw new Error("Não foi possível encontrar carrinho.");
        const coupon = containsSlash
            ? await couponRepo.getOne({
                key: "_id",
                value: id,
            })
            : await couponRepo.getOne({
                key: "name",
                value: couponId,
            });
        if (!coupon)
            throw new Error("Não foi possível encontrar cupom.");
        id = coupon._id;
        const canBeApplied = await (0, verifyCouponCanBeApplied_1.verifyIfCanBeAplied)(cart, coupon, productRepo);
        let cartCoupons = cart.coupons || [];
        let couponsApplied = coupon.usedIds || [];
        if (!canBeApplied.isPossible)
            throw new Error("Coupon não pode ser aplicado para essa condição");
        if (!cartCoupons.includes(`${coupon._id}/${coupon.name}`)) {
            if (coupon.limitForUse <= coupon.used)
                throw new Error("Coupon chegou ao máximo de uso.");
            cartCoupons.push(`${coupon._id}/${coupon.name}`);
        }
        else {
            const couponIndex = cartCoupons.findIndex((item) => item === couponId);
            cartCoupons.splice(couponIndex, 1);
        }
        if (!couponsApplied.includes(user._id)) {
            if (coupon.limitForUse <= coupon.used)
                throw new Error("Coupon chegou ao máximo de uso.");
            couponsApplied.push(user._id);
        }
        else {
            const userIndex = couponsApplied.findIndex((item) => item === user._id);
            couponsApplied.splice(userIndex, 1);
        }
        const updateCart = await repo.update(cart._id, { coupons: cartCoupons });
        const updateCoupon = await couponRepo.update(coupon._id, {
            usedIds: couponsApplied,
            used: couponsApplied.length,
        });
        return res.json({ cart: updateCart, coupon: updateCoupon });
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("não foi possível incrementar cupom");
    }
};
exports.insertCoupon = insertCoupon;
