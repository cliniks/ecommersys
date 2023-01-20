"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrors = void 0;
const enumErrors_1 = require("./enumErrors");
exports.defaultErrors = {
    // AuthErrors
    [enumErrors_1.EnumErrorHandling.noUserWithThisEmail]: "Usuário inexistente com esse endereço de e-mail!",
    [enumErrors_1.EnumErrorHandling.incorrectPassword]: "Senha inválida!",
    // UserErrors
    [enumErrors_1.EnumErrorHandling.userExistsWithThisEmail]: "Usuário existente com esse endereço de e-mail!",
    [enumErrors_1.EnumErrorHandling.userExistsWithThisCPF]: "Usuário existente com esse número de CPF!",
    // SellerErrors
    [enumErrors_1.EnumErrorHandling.userExistsWithThisEmail]: "Loja existente com esse número de CNPJ!",
    default: "Erro, tente novamente em instantes ou contate o suporte",
};
// 1000 to 1100 = AuthHandling
