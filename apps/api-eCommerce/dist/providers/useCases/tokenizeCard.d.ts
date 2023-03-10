import { tokenizeType } from "../../entities/paymentMethod.entitie";
import { ClientAsaasImplementation } from "../implementations/ClientAsaasImplementation";
export declare const TokenizeCardUseCase: (data: tokenizeType, gatewayPag: ClientAsaasImplementation) => Promise<import("../../entities/paymentMethod.entitie").TokenCard>;
