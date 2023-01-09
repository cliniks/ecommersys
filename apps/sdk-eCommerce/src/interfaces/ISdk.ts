import { Response } from "../Errors/ErrorHandling";

export interface ISdk {
  connect({
    appToken,
  }: ConnectProps): Promise<Response<ConnectErrors, boolean>>;
  userToken(token: string): Promise<boolean>;
}

export type ConnectProps = { appToken: string };

export type ConnectErrors = "AppToken inválido";
