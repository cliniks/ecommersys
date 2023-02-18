"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMutations = void 0;
const Either_1 = require("../../Errors/Either");
const axiosInstances_1 = require("../axiosInstances");
const commission_1 = require("./commission");
exports.adminMutations = {
    acceptSellerSolicitation: async ({ solicitationId, }) => {
        const accept = await axiosInstances_1.apiEcommerce.post(`/sellerSolicitate/confirm/${solicitationId}`);
        if (!accept)
            return (0, Either_1.throwError)("Não foi possível liberar acesso");
        return (0, Either_1.throwSuccess)(accept.data);
    },
    rejectSellerSolicitation: async ({ solicitationId, }) => {
        const accept = await axiosInstances_1.apiEcommerce.post(`/sellerSolicitate/reject/${solicitationId}`);
        if (!accept)
            return (0, Either_1.throwError)("Não foi possível liberar acesso");
        return (0, Either_1.throwSuccess)(accept.data);
    },
    getAllSellersSolicitation: async (props) => {
        const accept = await axiosInstances_1.apiEcommerce.get(`/sellerSolicitate/all`, {
            params: props,
        });
        if (!accept)
            return (0, Either_1.throwError)("Não foi possível encontrar");
        return (0, Either_1.throwSuccess)(accept.data);
    },
    getSingleSellersSolicitation: async (props) => {
        const accept = await axiosInstances_1.apiEcommerce.get(`/sellerSolicitate`, {
            params: props,
        });
        if (!accept)
            return (0, Either_1.throwError)("Não foi possível encontrar");
        return (0, Either_1.throwSuccess)(accept.data);
    },
    commissions: commission_1.commissions,
};
