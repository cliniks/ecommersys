"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteProduct = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const repositories_1 = require("../../repositories");
const favoriteProduct = async (req, res, repo) => {
    try {
        const { id } = req.params;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const product = await repo.getOne({ key: "_id", value: id });
        let getUserWishList = user.wishList;
        let getPreviewsStatistics = product.statistics;
        if (!getPreviewsStatistics.favorites.includes(`${user._id}`)) {
            getPreviewsStatistics.favorites.push(`${user._id}`);
            getPreviewsStatistics.favorite
                ? getPreviewsStatistics.favorite++
                : (getPreviewsStatistics.favorite = 1);
        }
        else {
            const indexOf = getPreviewsStatistics.favorites.findIndex((item) => item === `${user._id}`);
            getPreviewsStatistics.favorites.splice(indexOf, 1);
            getPreviewsStatistics.favorite--;
        }
        if (!getUserWishList.includes(`${product._id}`)) {
            getUserWishList.push(`${product._id}`);
        }
        else {
            const indexOfLike = getUserWishList.findIndex((item) => item === `${product._id}`);
            getUserWishList.splice(indexOfLike, 1);
        }
        const update = await repo.update(id, {
            statistics: getPreviewsStatistics,
        });
        await repositories_1.UsersRepository.update(`${user._id}`, {
            wishList: getUserWishList,
        });
        return res.json(update);
    }
    catch (err) {
        console.log("createProduct", err);
        return res.status(400).send("não foi possível criar.");
    }
};
exports.favoriteProduct = favoriteProduct;
