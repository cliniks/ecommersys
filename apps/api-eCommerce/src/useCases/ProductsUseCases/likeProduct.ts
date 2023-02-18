import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { IProductsRepository } from "../../repositories/Interfaces";
import { Request, Response } from "express";
import { UsersRepository } from "../../repositories";
import { Product } from "../../entities";

export const likeProduct = async (
  req: Request,
  res: Response,
  repo: IProductsRepository
) => {
  try {
    const { id } = req.params;

    const user = await returnUserFromToken(req);

    const product = await repo.getOne({ key: "_id", value: id });

    let getUserLikes = user.likes;

    let getPreviewsStatistics: any = {
      buys: 0,
      favorite: 0,
      favorites: [],
      likers: [],
      likes: 0,
      views: 0,
      ...(product?.statistics as Product["statistics"]),
    };

    if (!getPreviewsStatistics.likers.includes(`${user._id}`)) {
      getPreviewsStatistics.likers.push(`${user._id}`);
      getPreviewsStatistics.likes
        ? getPreviewsStatistics.likes++
        : (getPreviewsStatistics.likes = 1);
    } else {
      const indexOf = getPreviewsStatistics.likers.findIndex(
        (item: any) => item === `${user._id}`
      );
      getPreviewsStatistics.likers?.splice(indexOf, 1);
      getPreviewsStatistics.likes--;
    }

    if (!getUserLikes.includes(`${product?._id}`)) {
      getUserLikes.push(`${product._id}`);
    } else {
      const indexOfLike = getUserLikes.findIndex(
        (item) => item === `${product._id}`
      );
      getUserLikes.splice(indexOfLike, 1);
    }

    const update = await repo.update(id, {
      statistics: getPreviewsStatistics,
    });

    await UsersRepository.update(`${user._id}`, {
      likes: getUserLikes,
    });

    return res.json(update);
  } catch (err) {
    console.log("likeProduct", err);
    return res.status(400).send("não foi possível criar.");
  }
};
