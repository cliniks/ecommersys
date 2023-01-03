export enum EnumErrorHandling {
  // AuthErrors
  noUserWithThisEmail = 1000,
  incorrectPassword = 1010,
  // UserErrors
  userExistsWithThisEmail = 1100,
  userExistsWithThisCPF = 1110,
  // SellerErrors
  userExistsWithThisCNPJ = 1200,
  exception = 500,
}
