import { Cart, Coupon, ProductsReturn } from "../../entities";
import { IProductsRepository } from "../../repositories/Interfaces";

export const verifyIfCanBeAplied = async (
  cart: Cart,
  coupon: Coupon,
  productRepo: IProductsRepository
) => {
  let cartStatistics: cartStatistics = {
    productIds: [],
    categoryIds: [],
    storeIds: [],
  };

  let productItems: Partial<ProductsReturn[]> = Array.from(
    cart.products as ProductsReturn[]
  );

  if (productItems?.length > 0) {
    for (let i = 0; i < productItems.length; i++) {
      let getProduct: any = await productRepo.getOne({
        key: "_id",
        value: `${productItems[i].productId}`,
      });

      const categories =
        getProduct.categories
          ?.filter((item: any) => item && item !== "undefined")
          ?.map((item: any) => item.split("/")[0]) || [];

      cartStatistics.productIds.push(getProduct._id);
      cartStatistics.categoryIds.push(...categories);
      cartStatistics.storeIds.push(getProduct.owner);

      productItems[i] = { ...productItems[i], ...getProduct._doc };
    }
  }

  const assigned = {
    categories: cartStatistics.categoryIds.filter((item) =>
      coupon.categoriesAssigned.includes(item)
    ),
    products: cartStatistics.productIds.filter((item) =>
      coupon.productsAssigned.includes(item)
    ),
    stores: cartStatistics.storeIds.filter((item) =>
      coupon.storesAssigned.includes(item)
    ),
  };

  const isPossible =
    assigned.categories.length > 0 ||
    assigned.products.length > 0 ||
    assigned.stores.length > 0 ||
    (assigned.categories.length === 0 &&
      assigned.products.length === 0 &&
      assigned.stores.length === 0);

  return {
    cartStatistics,
    productItems,
    isPossible,
  };
};

export type cartStatistics = {
  productIds: string[];
  categoryIds: string[];
  storeIds: string[];
};
