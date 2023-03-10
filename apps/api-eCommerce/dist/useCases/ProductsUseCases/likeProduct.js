"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeProduct = void 0;
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const repositories_1 = require("../../repositories");
const likeProduct = async (req, res, repo) => {
    var _a;
    try {
        const { id } = req.params;
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const product = await repo.getOne({ key: "_id", value: id });
        let getUserLikes = user.likes;
        let getPreviewsStatistics = Object.assign({ buys: 0, favorite: 0, favorites: [], likers: [], likes: 0, views: 0 }, product === null || product === void 0 ? void 0 : product.statistics);
        if (!getPreviewsStatistics.likers.includes(`${user._id}`)) {
            getPreviewsStatistics.likers.push(`${user._id}`);
            getPreviewsStatistics.likes
                ? getPreviewsStatistics.likes++
                : (getPreviewsStatistics.likes = 1);
        }
        else {
            const indexOf = getPreviewsStatistics.likers.findIndex((item) => item === `${user._id}`);
            (_a = getPreviewsStatistics.likers) === null || _a === void 0 ? void 0 : _a.splice(indexOf, 1);
            getPreviewsStatistics.likes--;
        }
        if (!getUserLikes.includes(`${product === null || product === void 0 ? void 0 : product._id}`)) {
            getUserLikes.push(`${product._id}`);
        }
        else {
            const indexOfLike = getUserLikes.findIndex((item) => item === `${product._id}`);
            getUserLikes.splice(indexOfLike, 1);
        }
        const update = await repo.update(id, {
            statistics: getPreviewsStatistics,
        });
        await repositories_1.UsersRepository.update(`${user._id}`, {
            likes: getUserLikes,
        });
        return res.json(update);
    }
    catch (err) {
        console.log("likeProduct", err);
        return res.status(400).send("não foi possível criar.");
    }
};
exports.likeProduct = likeProduct;
