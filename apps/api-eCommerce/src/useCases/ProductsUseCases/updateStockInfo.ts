import { ProductsReturn } from "../../entities";
import { ProductsRepository } from "../../repositories";

const productRepo = ProductsRepository;

export const UpdateProductStock = async (
  product: ProductsReturn,
  amount: number
) => {
  const ProductQauntity = product.stockInfo.qnt - amount;
  const update = await productRepo.update(product._id, {
    stockInfo: { ...product.stockInfo, qnt: ProductQauntity },
  });
  return update;
};
