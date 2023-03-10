import { CartReturn, ProductsReturn } from "../../entities";
import { ICouponRepository } from "../../repositories/Interfaces";

export const cartWithCouponApplied = async (
  cart: CartReturn,
  couponRepo: ICouponRepository
) => {
  let totalPrice = 0;
  let totalDiscount = 0;

  const coupons = cart.coupons;

  if (coupons.length === 0) return cart;

  let productItems: Partial<ProductsReturn[]> = Array.from(cart.products);

  if (productItems?.length > 0) {
    for (let couponId of coupons) {
      const id = couponId.split("/")[0];
      console.log("couponId", id);
      const coupon = await couponRepo.getOne({ key: "_id", value: id });

      for (let i = 0; i < productItems.length; i++) {
        let getProduct = productItems[i];

        const categories =
          getProduct.categories
            ?.filter((item: any) => item && item !== "undefined")
            ?.map((item: any) => item.split("/")[0]) || [];

        if (
          coupon.productsAssigned.length === 0 &&
          coupon.categoriesAssigned.length === 0 &&
          coupon.storesAssigned.length === 0 &&
          coupon.clientsAssigned.length === 0
        ) {
          console.log("coupon is generic, can be used in any product");
          const percentage = (+getProduct.price / 100) * +coupon.value;
          getProduct.discountValue = percentage.toString();
          totalDiscount = +(totalDiscount + percentage * getProduct.amount)
            .toString()
            .split(".")[0];
          const value = Math.abs(+getProduct.price - percentage);
          getProduct.price = value.toString().split(".")[0];
          totalPrice = +(totalPrice + value * productItems[i].amount)
            .toString()
            .split(".")[0];
          continue;
        }

        if (
          coupon.productsAssigned.find(
            (item) => item?.split("/")[0] === productItems[i].productId
          )
        ) {
          console.log("coupon contain this product");

          const percentage = (+getProduct.price / 100) * +coupon.value;
          getProduct.discountValue = percentage.toString();
          totalDiscount = +(totalDiscount + percentage * getProduct.amount)
            .toString()
            .split(".")[0];
          const value = Math.abs(+getProduct.price - percentage);
          getProduct.price = value.toString().split(".")[0];
          totalPrice = +(totalPrice + value * productItems[i].amount)
            .toString()
            .split(".")[0];
          continue;
        }

        if (
          coupon.categoriesAssigned.filter(
            (item) =>
              categories.filter((category) =>
                item.split("/")[0].includes(category)
              ).length > 0
          ).length > 0
        ) {
          console.log("coupon contain this category");
          const percentage = (+getProduct.price / 100) * +coupon.value;
          getProduct.discountValue = percentage.toString();
          totalDiscount = +(totalDiscount + percentage * getProduct.amount)
            .toString()
            .split(".")[0];
          const value = Math.abs(+getProduct.price - percentage);
          getProduct.price = value.toString().split(".")[0];
          totalPrice = +(totalPrice + value * productItems[i].amount)
            .toString()
            .split(".")[0];
          continue;
        }

        if (
          coupon.storesAssigned.find(
            (item) => item.split("/")[0] === getProduct.owner
          )
        ) {
          console.log("coupon contain this store");
          const percentage = (+getProduct.price / 100) * +coupon.value;
          getProduct.discountValue = percentage.toString();
          totalDiscount = +(totalDiscount + percentage * getProduct.amount)
            .toString()
            .split(".")[0];
          const value = Math.abs(+getProduct.price - percentage);
          getProduct.price = value.toString().split(".")[0];
          totalPrice = +(totalPrice + value * productItems[i].amount)
            .toString()
            .split(".")[0];
          continue;
        }

        productItems[i] = getProduct;
        totalPrice = +(
          totalPrice +
          +productItems[i].price * productItems[i].amount
        )
          .toString()
          .split(".")[0];
      }
    }
  }

  cart.products = productItems;
  cart.totalPrice = totalPrice;
  cart.totalDiscount = totalDiscount;

  return cart;
};
