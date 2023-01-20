"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirm = void 0;
const SellersRepository_1 = require("../../repositories/implementations/SellersRepository");
const UsersRepository_1 = require("../../repositories/implementations/UsersRepository");
const confirm = async (req, res, repo) => {
    try {
        const { id } = req.params;
        if (!id)
            res.status(400).send("não foi encaminhado um id.");
        const getStoreInfo = await repo.getOne({ key: "_id", value: id });
        const Store = {
            name: getStoreInfo.name,
            owner: getStoreInfo.owner,
            isActive: true,
            storeInfo: getStoreInfo.storeInfo,
        };
        const sellerRepo = new SellersRepository_1.SellersRepository();
        const userRepo = new UsersRepository_1.UsersRepository();
        const addSeller = await sellerRepo.addOne(Store);
        await userRepo.update(Store.owner, { storeId: addSeller._id, access: 2 });
        await repo.delete(id);
        res.json(addSeller);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("não foi possível solicitar.");
    }
};
exports.confirm = confirm;
