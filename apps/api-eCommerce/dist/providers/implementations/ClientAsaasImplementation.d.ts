import { User } from "../../entities";
import { TokenCard, tokenizeType } from "../../entities/paymentMethod.entitie";
import { chargeType, clientProps, creditCardChargeType, queryProps } from "../interfaces/IClientAsaasProvider";
export declare class ClientAsaasImplementation {
    newClient({ data }: {
        data: User;
    }): Promise<User>;
    updateClient({ data, clientId, }: {
        data: clientProps;
        clientId: string;
    }): Promise<any>;
    listClients({ queryProps }: {
        queryProps: queryProps;
    }): Promise<any>;
    getClient({ clientId }: {
        clientId: string;
    }): Promise<any>;
    genCharge(charge: any): Promise<any>;
    getCharge({ client, chargeId, }: {
        client: User;
        chargeId: string;
    }): Promise<any>;
    genCreditCardCharge({ data, creditcard, }: {
        data: chargeType;
        creditcard: creditCardChargeType;
    }): Promise<any>;
    genPixCode({ id }: {
        id: string;
    }): Promise<any>;
    registerBank(): Promise<any>;
    registerPixCode(): Promise<any>;
    tokenizeCard(cardData: tokenizeType): Promise<TokenCard>;
}
