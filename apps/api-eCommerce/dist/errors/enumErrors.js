"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumErrorHandling = void 0;
var EnumErrorHandling;
(function (EnumErrorHandling) {
    // AuthErrors
    EnumErrorHandling[EnumErrorHandling["noUserWithThisEmail"] = 1000] = "noUserWithThisEmail";
    EnumErrorHandling[EnumErrorHandling["incorrectPassword"] = 1010] = "incorrectPassword";
    // UserErrors
    EnumErrorHandling[EnumErrorHandling["userExistsWithThisEmail"] = 1100] = "userExistsWithThisEmail";
    EnumErrorHandling[EnumErrorHandling["userExistsWithThisCPF"] = 1110] = "userExistsWithThisCPF";
    // SellerErrors
    EnumErrorHandling[EnumErrorHandling["userExistsWithThisCNPJ"] = 1200] = "userExistsWithThisCNPJ";
    EnumErrorHandling[EnumErrorHandling["exception"] = 500] = "exception";
})(EnumErrorHandling = exports.EnumErrorHandling || (exports.EnumErrorHandling = {}));
