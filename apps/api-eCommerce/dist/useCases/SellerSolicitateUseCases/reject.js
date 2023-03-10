"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reject = void 0;
const repositories_1 = require("../../repositories");
const sellerRepo = repositories_1.SellersRepository;
const userRepo = repositories_1.UsersRepository;
const reject = async (req, res, repo) => {
    try {
        const { id } = req.params;
        if (!id)
            throw new Error("não foi encaminhado um id.");
        console.log({ id });
        const getStoreInfo = await repo.getOne({ key: "_id", value: id });
        if (!getStoreInfo.isActive)
            throw new Error("Conta já está invalidada");
        console.log({ getStoreInfo });
        const getUser = await userRepo.getOne({
            key: "_id",
            value: getStoreInfo.owner,
        });
        console.log({ getStoreInfo });
        console.log({ getUser });
        const getSeller = getUser.storeId
            ? await sellerRepo.getOne({
                key: "_id",
                value: getUser.storeId,
            })
            : null;
        if (!(getSeller === null || getSeller === void 0 ? void 0 : getSeller.isActive))
            throw new Error("Vendedor já está invalidada");
        console.log({ getSeller });
        const updateSeller = getSeller &&
            (await (sellerRepo === null || sellerRepo === void 0 ? void 0 : sellerRepo.update(`${getSeller._id}`, { isActive: false })));
        const updateUser = await userRepo.update(`${getUser._id}`, {
            access: 1,
        });
        const updateSolicitation = await repo.update(id, {
            isActive: false,
        });
        return res.json({ updateSeller, updateUser, updateSolicitation });
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
};
exports.reject = reject;
