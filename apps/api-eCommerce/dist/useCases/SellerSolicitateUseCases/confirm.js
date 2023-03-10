"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirm = void 0;
const repositories_1 = require("../../repositories");
const providers_1 = require("../../providers");
const sellerAsaas = providers_1.sellerAssasProvider;
const sellerRepo = repositories_1.SellersRepository;
const userRepo = repositories_1.UsersRepository;
const confirm = async (req, res, repo) => {
    try {
        const { id } = req.params;
        if (!id)
            throw new Error("não foi encaminhado um id.");
        const getStoreInfo = await repo.getOne({ key: "_id", value: id });
        if (getStoreInfo.isActive)
            throw new Error("Vendedor já existente");
        const Store = {
            name: getStoreInfo.name,
            owner: `${getStoreInfo.owner}`,
            isActive: true,
            storeInfo: getStoreInfo.storeInfo,
        };
        const user = await userRepo.getOne({
            key: "_id",
            value: getStoreInfo.owner,
        });
        const addSeller = !user.storeId
            ? await sellerRepo.addOne(Store)
            : await sellerRepo.update(`${user.storeId}`, { isActive: true });
        await userRepo.update(`${Store.owner}`, {
            storeId: addSeller._id,
            access: 2,
        });
        await repo.update(id, { isActive: true });
        if (!user.storeId || !addSeller.asaasID)
            await sellerAsaas.addStore(addSeller);
        const getStoreUpdated = await sellerRepo.getOne({
            key: "_id",
            value: addSeller._id,
        });
        return res.json(getStoreUpdated);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
};
exports.confirm = confirm;
