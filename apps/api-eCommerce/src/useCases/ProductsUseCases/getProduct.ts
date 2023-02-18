import { IProductsRepository } from "../../repositories/Interfaces";
import { Request, Response } from "express";

export const getSingleProduct = async (
  req: Request,
  res: Response,
  repo: IProductsRepository
) => {
  try {
    const { key, value }: any = req.query;

    // const getProduct = await repo.getOne({key:'_id',value:id})

    const product = await repo.getOne({ key, value });

    const getPreviewsStatistics = product.statistics;

    const update = await repo.update(`${product._id}`, {
      statistics: {
        ...product.statistics,
        views: getPreviewsStatistics.views
          ? getPreviewsStatistics.views + 1
          : 1,
      },
    });

    return res.json(update);
  } catch (err) {
    console.log("createProduct", err);
    return res.status(400).send("não foi possível criar.");
  }
};
