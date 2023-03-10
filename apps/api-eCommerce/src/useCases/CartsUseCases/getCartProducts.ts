import { Coupon, ProductsReturn } from "../../entities";
import { CouponsRepository, ProductsRepository } from "../../repositories";

const productRepo = ProductsRepository;

const couponRepo = CouponsRepository;

export const getCartProducts = async (
  cartProductArray: {
    productId: string;
    amount: number;
  }[],
  couponArray: string[]
): Promise<ProductsReturn[]> => {
  let Products: ProductsReturn[] = [];
  for (let index = 0; index < cartProductArray.length; index++) {
    const cartProduct = cartProductArray[index];

    const { productId, amount } = cartProduct;

    const getProduct: any = await productRepo.getOne({
      key: "_id",
      value: productId,
      fields: "name,price,imgs,owner,shippingInfo,stockInfo,categories",
    });

    const product: ProductsReturn = {
      amount,
      productId,
      ...getProduct._doc,
      totalValue: (+getProduct.price * amount).toString(),
    };
    Products.push(product);
  }

  if (couponArray.length > 0) {
    const getAllCoupons = await couponRepo.getMany(couponArray);
    const couponApplied = applyCoupon(getAllCoupons, Products);
    return couponApplied;
  }

  return Products;
};

const applyCoupon = (
  coupons: Coupon[],
  products: ProductsReturn[]
): ProductsReturn[] => {
  let productsReturn: ProductsReturn[] = [];
  for (let product of products) {
    let couponApplied: ProductsReturn[] = [];
    for (let coupon of coupons) {
      const pushData = () => {
        const totalValue = applyDiscount(
          product.price,
          product.amount,
          coupon.type,
          coupon.value
        );
        const findCoupon = couponApplied.find(
          (item) => item && item.couponApplied === coupon._id
        );
        if (findCoupon) {
          const index = couponApplied.findIndex(
            (item) => item.productId === coupon._id
          );
          const actualCoupon = couponApplied[index];
          if (+actualCoupon.totalValue < totalValue) {
            couponApplied[index].totalValue = totalValue.toString();
            couponApplied[index].discountValue = (
              +coupon.value * product.amount
            ).toString();
          }
        }
        const toApply = {
          ...product,
          amount: product.amount,
          couponApplied: coupon._id,
          productId: product._id,
          discountValue: (
            (+product.price / 100) *
            +coupon.value *
            product.amount
          ).toString(),
          totalValue: totalValue.toString(),
        };
        couponApplied.push(toApply);
      };
      const containProduct = coupon.productsAssigned.find((item) =>
        item.includes(product.productId)
      );
      if (containProduct) pushData();
      const containCategory =
        product.categories.filter((item) =>
          coupon.categoriesAssigned.includes(item)
        ).length > 0;
      if (containCategory) pushData();
      const containStore = coupon.storesAssigned.find((item) =>
        item.includes(product.owner)
      );
      if (containStore) pushData();

      // console.log({ containProduct, containCategory, containStore });
    }
    if (couponApplied.length > 0) {
      productsReturn.push(...couponApplied);
      continue;
    }
    const toApply = {
      ...product,
      productId: product._id,
      amount: product.amount,
      couponApplied: "",
      discountValue: "0",
      totalValue: product.totalValue,
    };
    productsReturn.push(toApply);
  }
  return productsReturn;
};

const applyDiscount = (
  price: string,
  amount: number,
  couponType: "percentage" | "fixed" | "shipping",
  couponValue: string
): number => {
  const totalPrice = +price * amount;
  if (couponType === "fixed") {
    return totalPrice - +couponValue;
  }
  if (couponType === "percentage") {
    return totalPrice - (totalPrice / 100) * +couponValue;
  }
  return totalPrice;
};
