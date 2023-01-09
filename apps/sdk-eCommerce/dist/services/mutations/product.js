"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productMutations = void 0;
const Either_1 = require("../../Errors/Either");
const axiosInstances_1 = require("../axiosInstances");
exports.productMutations = {
    getProductSingle: async (key, value) => {
        const product = await axiosInstances_1.apiEcommerce.get(`/products`, {
            params: { key, value },
        });
        if (!product)
            return (0, Either_1.throwError)("Não foi possível localizar produto");
        return (0, Either_1.throwSuccess)(product.data);
    },
    getProducts: async (props) => {
        const products = await axiosInstances_1.apiEcommerce.get(`/products/all`, { params: props });
        if (!products)
            return (0, Either_1.throwError)("Não foi possível localizar produto");
        return (0, Either_1.throwSuccess)(products.data);
    },
    add: async (formData) => {
        const products = await axiosInstances_1.apiEcommerce.post(`/products`, formData);
        if (!products)
            return (0, Either_1.throwError)("Não foi possível adicionar o produto");
        return (0, Either_1.throwSuccess)(products.data);
    },
    update: async (data) => {
        const products = await axiosInstances_1.apiEcommerce.patch(`/products`, data);
        if (!products)
            return (0, Either_1.throwError)("Não foi possível adicionar o produto");
        return (0, Either_1.throwSuccess)(products.data);
    },
    // addProductImg: async (
    //   img: Partial<Product>
    // ): Promise<Either<productErrors, Product>> => {
    //   const products = await apiEcommerce.patch(`/products`, img);
    //   if (!products) return throwError("Não foi possível adicionar o produto");
    //   return throwSuccess(products.data);
    // },
};
