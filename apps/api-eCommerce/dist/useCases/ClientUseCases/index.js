"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUseCases = void 0;
const repositories_1 = require("../../repositories");
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const salesRepo = repositories_1.SalesRepository;
const usersRepo = repositories_1.UsersRepository;
// const storeRepo = SellersRepository;
exports.ClientUseCases = {
    getMyStoreClients: async (req, res) => {
        try {
            const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
            // const store = storeRepo.getOne({ key: "_id", value: user.storeId });
            const getUser = async (id) => await usersRepo.getOne({ key: "_id", value: id });
            console.log(user.storeId);
            const getMySales = await salesRepo.getAll({
                size: 30,
                page: 0,
                filter: { key: "storeIds", value: user.storeId },
            });
            let clientInfo = [];
            for (let i = 0; i < getMySales.result.length; i++) {
                let client = {};
                const sale = getMySales.result[i];
                const mySells = sale.sellers.filter((item) => item.storeId === user.storeId);
                const myProducts = mySells.map((item) => item.products);
                const clientData = await getUser(sale.userId);
                client["clientName"] = clientData.userInfo.name;
                client["clientImg"] = clientData.img;
                client["melhorEnvioID"] = clientData.melhorEnvioID;
                client["gatewayPagId"] = clientData.gatewayPagId;
                client["products"] = myProducts;
                clientInfo.push(client);
            }
            res.json(clientInfo);
        }
        catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    },
};
