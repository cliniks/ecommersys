import { Request, Response } from "express";
import {
  AdminCommissionRepository,
  CategoriesRepository,
  ProductsRepository,
} from "../../repositories";
import { CommissionType } from "../../entities";

const adminCommissionRepo = AdminCommissionRepository;
const categoriesRepo = CategoriesRepository;
const productsRepo = ProductsRepository;

export const storeCategoriesCommission = async (
  req: Request,
  res: Response
) => {
  try {
    const { storeId } = req.params;
    const getCategories = await categoriesRepo.getAll({
      page: 0,
      size: 50,
      filter: { fields: "_id, name" },
    });

    const getGlobalCommission =
      await adminCommissionRepo.globalCommission.getOne({
        key: "_id",
        value: "63ea9947dab15a2f3a370892",
      });

    console.log({ getGlobalCommission });

    const getStoreCommission = (
      await adminCommissionRepo.storeCommission.getAll({
        filter: {
          key: "storeId",
          value: storeId,
        },
      })
    ).result[0];

    console.log({ getStoreCommission });

    let categoryCommissions = [];

    for (let i = 0; i < getCategories.result.length; i++) {
      const category = getCategories.result[i];

      const getCommission = (
        await adminCommissionRepo.categoryCommission.getAll({
          filter: {
            key: "storeId categoryId",
            value: `${storeId} ${category._id}`,
          },
        })
      ).result[0];

      const hasCommission: any = getCommission
        ? getCommission
        : getStoreCommission
        ? getStoreCommission
        : getGlobalCommission;

      const commission: CommissionType & { name: string; categoryId: string } =
        {
          _id: getCommission ? getCommission._id : null,
          name: category.name,
          categoryId: category._id,
          fixed: hasCommission.fixed,
          percentage: hasCommission.percentage,
          scalable: hasCommission.scalable,
          commissionType: hasCommission.commissionType,
        };

      categoryCommissions.push(commission);
    }
    res.json(categoryCommissions);
  } catch (err) {
    console.log(err);
    res.status(400).send("Não foi possível encontrar");
  }
};

export const storeProductsCommission = async (req: Request, res: Response) => {
  try {
    const { storeId } = req.params;

    const getProducts = await productsRepo.getAll({
      page: 0,
      size: 50,
      filter: { key: "owner", value: storeId, fields: "_id, name" },
    });

    const getGlobalCommission =
      await adminCommissionRepo.globalCommission.getOne({
        key: "_id",
        value: "63ea9947dab15a2f3a370892",
      });

    const getStoreCommission = (
      await adminCommissionRepo.storeCommission.getAll({
        filter: {
          key: "storeId",
          value: storeId,
        },
      })
    ).result[0];

    let categoryCommissions = [];

    for (let i = 0; i < getProducts.result.length; i++) {
      const product = getProducts.result[i];
      const getCommission = await adminCommissionRepo.productsCommission.getOne(
        {
          key: "productId",
          value: product._id,
        }
      );
      const hasCommission: any = getCommission
        ? getCommission
        : getStoreCommission
        ? getStoreCommission
        : getGlobalCommission;

      console.log(hasCommission);

      const commission: CommissionType & { name: string; productId: string } = {
        _id: getCommission ? getCommission._id : null,
        name: product.name,
        productId: product._id,
        fixed: hasCommission.fixed,
        percentage: hasCommission.percentage,
        scalable: hasCommission.scalable,
        commissionType: hasCommission.commissionType,
      };

      categoryCommissions.push(commission);
    }
    res.json(categoryCommissions);
  } catch (err) {
    console.log(err);
    res.status(400).send("Não foi possível encontrar");
  }
};
