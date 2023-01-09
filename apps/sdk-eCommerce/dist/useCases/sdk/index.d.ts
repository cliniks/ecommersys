import { Response } from "../../Errors/ErrorHandling";
import { ConnectErrors, ConnectProps, ISdk } from "../../interfaces/ISdk";
export declare class SDK implements ISdk {
    connected: boolean;
    constructor(appToken?: string);
    connect({ appToken, }: ConnectProps): Promise<Response<ConnectErrors, boolean>>;
    userToken(appToken: string): Promise<boolean>;
}
