import { EnumErrorHandling } from "./enumErrors";

export const defaultErrors = {
  // AuthErrors
  [EnumErrorHandling.noUserWithThisEmail]:
    "Usuário inexistente com esse endereço de e-mail!",
  [EnumErrorHandling.incorrectPassword]: "Senha inválida!",
  // UserErrors
  [EnumErrorHandling.userExistsWithThisEmail]:
    "Usuário existente com esse endereço de e-mail!",
  [EnumErrorHandling.userExistsWithThisCPF]:
    "Usuário existente com esse número de CPF!",
  // SellerErrors
  [EnumErrorHandling.userExistsWithThisEmail]:
    "Loja existente com esse número de CNPJ!",
  default: "Erro, tente novamente em instantes ou contate o suporte",
};

// 1000 to 1100 = AuthHandling
