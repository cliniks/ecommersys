/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose-paginate" />
/// <reference types="mongoose" />
import { UserModelType } from "../../models/user.model";
import { chargeType, clientProps, creditCardChargeType, queryProps } from "../IClientAsaasProvider";
export declare class ClientAsaasImplementation {
    constructor();
    newClient({ data }: {
        data: UserModelType;
    }): Promise<(import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
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
        client: UserModelType;
        cartID: string;
    }): Promise<any>;
    getCharge({ client, chargeId, }: {
        client: UserModelType;
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
