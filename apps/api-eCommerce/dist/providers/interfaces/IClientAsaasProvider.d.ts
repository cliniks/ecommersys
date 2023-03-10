import { User } from "../../entities";
export interface IUserCheckoutProvider {
    newClient({ data }: {
        data: any;
    }): Promise<any>;
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
    genCharge({ data, client, cartID, }: {
        data: chargeType;
        client: User;
        cartID: string;
    }): Promise<any>;
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
}
export declare type queryProps = {
    name?: string;
    email?: string;
    cpfCnpj?: string;
    groupName?: string;
    externalReference?: string;
    offset?: string;
    limit?: string;
};
export declare type clientProps = {
    name?: string;
    email?: string;
    phone?: string;
    mobilePhone?: string;
    cpfCnpj?: string;
    postalCode?: string;
    address?: string;
    addressNumber?: string;
    complement?: string;
    province?: string;
    externalReference?: string;
    notificationDisabled?: boolean;
    additionalEmails?: string;
    municipalInscription?: string;
    stateInscription?: string;
    observations?: string;
};
export declare type chargeType = {
    customer: string;
    billingType: "BOLETO" | "CREDIT_CARD" | "PIX" | "UNDEFINED";
    dueDate: Date;
    value: number;
    description: string;
    externalReference?: string;
    installmentCount?: number;
    installmentValue?: number;
    discount?: {
        value?: number;
        dueDateLimitDays?: number;
        type?: "FIXED" | "PERCENTAGE";
    };
    interest?: {
        value?: number;
    };
    fine?: {
        value?: number;
    };
    postalService?: boolean;
    split?: splitObj[];
};
export declare type creditCardChargeType = {
    creditCard: {
        holderName: string;
        number: string;
        expiryMonth: string;
        expiryYear: string;
        ccv: string;
    };
    creditCardHolderInfo: {
        name: string;
        email: string;
        cpfCnpj: string;
        postalCode: string;
        addressNumber: string;
        addressComplement?: string;
        phone: string;
        mobilePhone?: string;
    };
    creditCardToken?: string;
    remoteIp: string;
};
declare type splitObj = {
    walletId: string;
    fixedValue?: number;
    percentualValue?: number;
};
export {};
