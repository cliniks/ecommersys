import { Coupon, Product, Store } from "../../entities";

export const applyCouponDiscount = (
  coupon: Coupon,
  store: Store,
  product: Partial<Product>,
  amount: number
) => {
  const assigned: assignedReturn = {
    categories: null,
    products: null,
    stores: null,
  };

  const discountType = coupon.type;

  product.categories.forEach((item) => {
    if (coupon.categoriesAssigned.includes(item)) {
      const response = prepareResponse(discountType, product, coupon, amount);
      assigned.categories = response;
    }
  });
  coupon.productsAssigned.forEach((item) => {
    if (verifyIncludesSlash(item, 0) === product._id.toString()) {
      const response = prepareResponse(discountType, product, coupon, amount);
      assigned.products = response;
    }
  });
  coupon.storesAssigned.forEach((item) => {
    if (verifyIncludesSlash(item, 0) === store._id.toString()) {
      const response = prepareResponse(discountType, product, coupon, amount);
      assigned.stores = response;
    }
  });

  return assigned;
};

export const verifyIncludesSlash = (str: string, item: number) => {
  if (str.includes("/")) return str.split("/")[item];
  if (str) return str;
  return null;
};

export const applyDiscount = (
  discountType: Coupon["type"],
  productValue: string,
  discountValue: string
) => {
  const discount = addDot(
    discountType === "fixed"
      ? discountValue
      : (+productValue / 100) * +discountValue
  );

  const discountApplied = addDot(+productValue - +discount);

  return { discountApplied, discount };
};

export const prepareResponse = (
  discountType: Coupon["type"],
  product: Partial<Product>,
  coupon: Coupon,
  amount: number
) => {
  const discount = applyDiscount(discountType, product.price, coupon.value);
  const totalValue = addDot(+discount.discountApplied * amount);
  const response = {
    ...discount,
    totalValue,
    couponApplied: `${coupon._id}/${coupon.name}`,
  };
  return response;
};

export const filterBestCoupon = (ApplyCoupon: assignedReturn[]) => {
  if (ApplyCoupon.length > 1) {
    ApplyCoupon.sort((item1, item2) => {
      if (!item1 || !item2) return 0;

      if (item1.categories) {
        if (+item1.categories?.totalValue < +item2.products?.totalValue)
          return -1;
        if (+item1.categories?.totalValue < +item2.stores?.totalValue)
          return -1;
        if (+item1.products?.totalValue < +item2.categories?.totalValue)
          return -1;
      }
      if (+item1.stores?.totalValue < +item2.products?.totalValue) return -1;
      if (+item1.stores?.totalValue < +item2.products?.totalValue) return -1;
      if (+item1.products?.totalValue < +item2.stores?.totalValue) return -1;

      return 0;
    });
  }

  const discount =
    ApplyCoupon[0]?.categories ||
    ApplyCoupon[0]?.products ||
    ApplyCoupon[0]?.stores;

  return discount;
};

export const verifyCouponApply = (
  coupons: Coupon[],
  store: Store,
  product: Partial<Product>,
  amount: number
): discountApplied => {
  let couponApplied = [];
  // if (coupons.length > 0) {
  for (let i = 0; i < coupons.length; i++) {
    const apply = applyCouponDiscount(coupons[i], store, product, amount);
    if (apply) {
      couponApplied.push(apply);
    }
  }

  return filterBestCoupon(couponApplied);
  // }
};

export type assignedReturn = {
  categories: discountApplied | null;
  products: discountApplied | null;
  stores: discountApplied | null;
};

type discountApplied = {
  totalValue: number;
  couponApplied: string;
  discountApplied: number;
  discount: number;
};

const addDot = (str: number | string) => {
  let convertedStr = str.toString();
  if (convertedStr.includes(".")) return +str;
  convertedStr =
    convertedStr.substring(0, convertedStr.length - 2) +
    "." +
    convertedStr.substring(convertedStr.length - 2);
  console.log(convertedStr);
  return +convertedStr;
};
