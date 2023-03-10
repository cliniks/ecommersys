"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenizeCardUseCase = void 0;
const TokenizeCardUseCase = async (data, gatewayPag) => {
    const updateGP = await gatewayPag.tokenizeCard(data);
    if (!updateGP) {
        throw new Error("Não foi possível adicionar cartão");
    }
    return updateGP;
};
exports.TokenizeCardUseCase = TokenizeCardUseCase;
