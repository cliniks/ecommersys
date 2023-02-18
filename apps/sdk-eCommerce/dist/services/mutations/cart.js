"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartMutations = void 0;
const Errors_1 = require("../../Errors");
const axiosInstances_1 = require("../axiosInstances");
/* A object with all the mutations that the cart can do. */
exports.cartMutations = {
    getMyCart: async () => {
        const update = await axiosInstances_1.apiEcommerce.get(`/carts/getMyCart`);
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível achar o carrinho");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    incrementProduct: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/carts/incrementProduct/${data.cartId}`, data);
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível adicionar o item ao carrinho");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    decrementProduct: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/carts/decrementProduct/${data.cartId}`, data);
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível adicionar o item ao carrinho");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    removeProduct: async (data) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/carts/decrementProduct`, data);
        if (!update.data)
            return (0, Errors_1.throwError)("não foi possível remover item do carrinho");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    insertCoupon: async (couponId) => {
        const request = await axiosInstances_1.apiEcommerce.post("/carts/insertCoupon", couponId);
        if (!request.data)
            return (0, Errors_1.throwError)("Não foi possível adicionar cupom");
        return (0, Errors_1.throwSuccess)(request.data);
    },
    removeCoupon: async (couponId) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/carts/removeCoupon`, {
            couponId,
        });
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível remover cupom");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    insertAddress: async (addressId) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/carts/insertAddress`, {
            addressId,
        });
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível atualizar o endereço");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    removeAddress: async (addressId) => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/carts/removeAddress`, {
            addressId,
        });
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível remover endereço do carrinho");
        return (0, Errors_1.throwSuccess)(update.data);
    },
    clearMyCart: async () => {
        const update = await axiosInstances_1.apiEcommerce.patch(`/carts/cleanMyCart`);
        if (!update.data)
            return (0, Errors_1.throwError)("Não foi possível limpar dados do carrinho");
        return (0, Errors_1.throwSuccess)(update.data);
    },
};
