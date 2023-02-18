import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { IProductsRepository } from "../../repositories/Interfaces";
import { Request, Response } from "express";
import { UsersRepository } from "../../repositories";

export const favoriteProduct = async (
  req: Request,
  res: Response,
  repo: IProductsRepository
) => {
  try {
    const { id } = req.params;

    const user = await returnUserFromToken(req);

    const product = await repo.getOne({ key: "_id", value: id });

    let getUserWishList = user.wishList;

    let getPreviewsStatistics: any = product.statistics;

    if (!getPreviewsStatistics.favorites.includes(`${user._id}`)) {
      getPreviewsStatistics.favorites.push(`${user._id}`);
      getPreviewsStatistics.favorite
        ? getPreviewsStatistics.favorite++
        : (getPreviewsStatistics.favorite = 1);
    } else {
      const indexOf = getPreviewsStatistics.favorites.findIndex(
        (item: any) => item === `${user._id}`
      );
      getPreviewsStatistics.favorites.splice(indexOf, 1);
      getPreviewsStatistics.favorite--;
    }

    if (!getUserWishList.includes(`${product._id}`)) {
      getUserWishList.push(`${product._id}`);
    } else {
      const indexOfLike = getUserWishList.findIndex(
        (item) => item === `${product._id}`
      );
      getUserWishList.splice(indexOfLike, 1);
    }

    const update = await repo.update(id, {
      statistics: getPreviewsStatistics,
    });

    await UsersRepository.update(`${user._id}`, {
      wishList: getUserWishList,
    });

    return res.json(update);
  } catch (err) {
    console.log("createProduct", err);
    return res.status(400).send("não foi possível criar.");
  }
};
