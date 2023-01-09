import { Response } from "../Errors/ErrorHandling";
export interface ISdk {
    connect({ appToken, }: ConnectProps): Promise<Response<ConnectErrors, boolean>>;
    userToken(token: string): Promise<boolean>;
}
export declare type ConnectProps = {
    appToken: string;
};
export declare type ConnectErrors = "AppToken inválido";
