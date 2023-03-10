"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyGlobalNotifications = exports.getMySellerNotifications = exports.getMyUserNotifications = void 0;
const repositories_1 = require("../../repositories");
const returnUserFromToken_1 = require("../../utils/returnUserFromToken");
const notifyRepo = repositories_1.notifyRepository;
const getMyUserNotifications = async (req, res) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const { page, size, filter } = req.query;
        const filterConfirm = typeof filter === "string" ? JSON.parse(filter) : filter;
        let notifies = [];
        const getAllMyNotify = await notifyRepo.getAll({
            page: page && +page,
            size: size && +size,
            filter: {
                key: "directionId " + (filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.key),
                value: user._id + " " + (filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.value),
                fields: filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.fields,
            },
        });
        notifies.push(...getAllMyNotify.result);
        const getAllClientsNotify = await notifyRepo.getAll({
            page: page && +page,
            size: size && +size,
            filter: {
                key: "direction " + (filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.key),
                value: "allClients " + (filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.value),
                fields: filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.fields,
            },
        });
        notifies.push(...getAllClientsNotify.result);
        return res.json(notifies);
    }
    catch (err) {
        return res
            .status(400)
            .send(`Não foi possível encontrar as notificações, ${err.toString()}`);
    }
};
exports.getMyUserNotifications = getMyUserNotifications;
const getMySellerNotifications = async (req, res) => {
    try {
        const user = await (0, returnUserFromToken_1.returnUserFromToken)(req);
        const { page, size, filter } = req.query;
        const filterConfirm = typeof filter === "string" ? JSON.parse(filter) : filter;
        let notifies = [];
        const getAllMyNotify = await notifyRepo.getAll({
            page: page && +page,
            size: size && +size,
            filter: {
                key: "directionId " + (filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.key),
                value: user.storeId + " " + (filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.value),
                fields: filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.fields,
            },
        });
        notifies.push(...getAllMyNotify.result);
        const getAllClientsNotify = await notifyRepo.getAll({
            page: page && +page,
            size: size && +size,
            filter: {
                key: "direction " + (filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.key),
                value: "allStores " + (filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.value),
                fields: filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.fields,
            },
        });
        notifies.push(...getAllClientsNotify.result);
        return res.json(notifies);
    }
    catch (err) {
        return res
            .status(400)
            .send(`Não foi possível encontrar as notificações, ${err.toString()}`);
    }
};
exports.getMySellerNotifications = getMySellerNotifications;
const getMyGlobalNotifications = async (req, res) => {
    try {
        const { page, size, filter } = req.query;
        const filterConfirm = typeof filter === "string" ? JSON.parse(filter) : filter;
        return res.json(await notifyRepo.getAll({
            page: page && +page,
            size: size && +size,
            filter: {
                key: "direction " + (filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.key),
                value: "all " + (filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.value),
                fields: filterConfirm === null || filterConfirm === void 0 ? void 0 : filterConfirm.fields,
            },
        }));
    }
    catch (err) {
        return res
            .status(400)
            .send(`Não foi possível encontrar as notificações, ${err.toString()}`);
    }
};
exports.getMyGlobalNotifications = getMyGlobalNotifications;
