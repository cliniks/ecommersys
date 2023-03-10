"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyMutations = void 0;
const Either_1 = require("../../Errors/Either");
const axiosInstances_1 = require("../axiosInstances");
exports.notifyMutations = {
    getOneNotify: async ({ key, value, }) => {
        const notificationTypes = await axiosInstances_1.apiEcommerce.get(`/notify`, {
            params: { key, value },
        });
        if (!notificationTypes)
            return (0, Either_1.throwError)("Não foi possível localizar a notificação");
        return (0, Either_1.throwSuccess)(notificationTypes.data);
    },
    getAllNotify: async (props) => {
        const notificationTypes = await axiosInstances_1.apiEcommerce.get(`/notify/all`, {
            params: props,
        });
        if (!notificationTypes)
            return (0, Either_1.throwError)("Não foi possível localizar a notificação");
        return (0, Either_1.throwSuccess)(notificationTypes.data);
    },
    readNotification: async (id) => {
        const notificationTypes = await axiosInstances_1.apiEcommerce.get(`/notify/readNotification/${id}`);
        if (!notificationTypes)
            return (0, Either_1.throwError)("Não foi possível localizar a notificação");
        return (0, Either_1.throwSuccess)(notificationTypes.data);
    },
    getAllUserNotify: async (props) => {
        const notificationTypes = await axiosInstances_1.apiEcommerce.get(`/notify/myUserNotifies`, {
            params: props,
        });
        if (!notificationTypes)
            return (0, Either_1.throwError)("Não foi possível localizar a notificação");
        return (0, Either_1.throwSuccess)(notificationTypes.data);
    },
    getAllSellerNotify: async (props) => {
        const notificationTypes = await axiosInstances_1.apiEcommerce.get(`/notify/mySellerNotifies`, {
            params: props,
        });
        if (!notificationTypes)
            return (0, Either_1.throwError)("Não foi possível localizar a notificação");
        return (0, Either_1.throwSuccess)(notificationTypes.data);
    },
    getAllGlobalNotify: async (props) => {
        const notificationTypes = await axiosInstances_1.apiEcommerce.get(`/notify/globalNotifies`, {
            params: props,
        });
        if (!notificationTypes)
            return (0, Either_1.throwError)("Não foi possível localizar a notificação");
        return (0, Either_1.throwSuccess)(notificationTypes.data);
    },
    add: async (data) => {
        const notificationTypess = await axiosInstances_1.apiEcommerce.post(`/notify`, data);
        if (!notificationTypess)
            return (0, Either_1.throwError)("Não foi possível localizar a notificação");
        return (0, Either_1.throwSuccess)(notificationTypess.data);
    },
    update: async ({ notifyId, data, }) => {
        const notificationTypess = await axiosInstances_1.apiEcommerce.patch(`/notify/${notifyId}`, data);
        if (!notificationTypess)
            return (0, Either_1.throwError)("Não foi possível localizar a notificação");
        return (0, Either_1.throwSuccess)(notificationTypess.data);
    },
    delete: async ({ notifyId, }) => {
        const notificationTypess = await axiosInstances_1.apiEcommerce.delete(`/notify/${notifyId}`);
        if (!notificationTypess)
            return (0, Either_1.throwError)("Não foi possível localizar a notificação");
        return (0, Either_1.throwSuccess)(notificationTypess.data);
    },
};
