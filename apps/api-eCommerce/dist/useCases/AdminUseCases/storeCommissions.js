"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeProductsCommission = exports.storeCategoriesCommission = void 0;
const repositories_1 = require("../../repositories");
const adminCommissionRepo = repositories_1.AdminCommissionRepository;
const categoriesRepo = repositories_1.CategoriesRepository;
const productsRepo = repositories_1.ProductsRepository;
const storeCategoriesCommission = async (req, res) => {
    try {
        const { storeId } = req.params;
        const getCategories = await categoriesRepo.getAll({
            page: 0,
            size: 50,
            filter: { fields: "_id, name" },
        });
        const getGlobalCommission = await adminCommissionRepo.globalCommission.getOne({
            key: "_id",
            value: "63ea9947dab15a2f3a370892",
        });
        console.log({ getGlobalCommission });
        const getStoreCommission = (await adminCommissionRepo.storeCommission.getAll({
            filter: {
                key: "storeId",
                value: storeId,
            },
        })).result[0];
        console.log({ getStoreCommission });
        let categoryCommissions = [];
        for (let i = 0; i < getCategories.result.length; i++) {
            const category = getCategories.result[i];
            const getCommission = (await adminCommissionRepo.categoryCommission.getAll({
                filter: {
                    key: "storeId categoryId",
                    value: `${storeId} ${category._id}`,
                },
            })).result[0];
            const hasCommission = getCommission
                ? getCommission
                : getStoreCommission
                    ? getStoreCommission
                    : getGlobalCommission;
            const commission = {
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
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Não foi possível encontrar");
    }
};
exports.storeCategoriesCommission = storeCategoriesCommission;
const storeProductsCommission = async (req, res) => {
    try {
        const { storeId } = req.params;
        const getProducts = await productsRepo.getAll({
            page: 0,
            size: 50,
            filter: { key: "owner", value: storeId, fields: "_id, name" },
        });
        const getGlobalCommission = await adminCommissionRepo.globalCommission.getOne({
            key: "_id",
            value: "63ea9947dab15a2f3a370892",
        });
        const getStoreCommission = (await adminCommissionRepo.storeCommission.getAll({
            filter: {
                key: "storeId",
                value: storeId,
            },
        })).result[0];
        let categoryCommissions = [];
        for (let i = 0; i < getProducts.result.length; i++) {
            const product = getProducts.result[i];
            const getCommission = await adminCommissionRepo.productsCommission.getOne({
                key: "productId",
                value: product._id,
            });
            const hasCommission = getCommission
                ? getCommission
                : getStoreCommission
                    ? getStoreCommission
                    : getGlobalCommission;
            console.log(hasCommission);
            const commission = {
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
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Não foi possível encontrar");
    }
};
exports.storeProductsCommission = storeProductsCommission;
