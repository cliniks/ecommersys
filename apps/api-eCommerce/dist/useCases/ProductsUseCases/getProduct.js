"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleProduct = void 0;
const getSingleProduct = async (req, res, repo) => {
    try {
        const { key, value } = req.query;
        // const getProduct = await repo.getOne({key:'_id',value:id})
        const product = await repo.getOne({ key, value });
        const getPreviewsStatistics = product.statistics;
        const update = await repo.update(`${product._id}`, {
            statistics: Object.assign(Object.assign({}, product.statistics), { views: getPreviewsStatistics.views
                    ? getPreviewsStatistics.views + 1
                    : 1 }),
        });
        return res.json(update);
    }
    catch (err) {
        console.log("createProduct", err);
        return res.status(400).send("não foi possível criar.");
    }
};
exports.getSingleProduct = getSingleProduct;
