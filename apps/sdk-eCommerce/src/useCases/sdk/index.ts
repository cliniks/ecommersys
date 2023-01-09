import { Response } from "../../Errors/ErrorHandling";

import { ConnectErrors, ConnectProps, ISdk } from "../../interfaces/ISdk";
import { updateInterceptor } from "../../services/axiosInstances";
import { middlewares } from "../../services/middlewares/validations";
import { Try } from "../../utils/tryCatch";

export class SDK implements ISdk {
  public connected: boolean = false;

  constructor(appToken?: string) {
    if (appToken) this.connect({ appToken });
  }

  async connect({
    appToken,
  }: ConnectProps): Promise<Response<ConnectErrors, boolean>> {
    const confirmAppToken = await Try(
      middlewares.confirmAppToken,
      `${appToken}`
    );

    if (confirmAppToken.isSuccess) {
      this.connected = true;
      await updateInterceptor({ ["Authorization"]: `Bearer ${appToken}` });
    } else {
      this.connected = false;
    }
    return confirmAppToken;
  }

  async userToken(appToken: string): Promise<boolean> {
    await updateInterceptor({ ["x-access-token"]: appToken });
    return true;
  }
}
