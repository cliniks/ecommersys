import { tokenizeType } from "../../entities/paymentMethod.entitie";
import { ClientAsaasImplementation } from "../implementations/ClientAsaasImplementation";

export const TokenizeCardUseCase = async (
  data: tokenizeType,
  gatewayPag: ClientAsaasImplementation
) => {
  const updateGP = await gatewayPag.tokenizeCard(data);
  if (!updateGP) {
    throw new Error("Não foi possível adicionar cartão");
  }
  return updateGP;
};
