import { IGatewayPagRepository } from "../interfaces/IGatewayPagRepository";
import { ConnectRepo } from "./ConnectRepo";

class GatewayPagRepository
  extends ConnectRepo
  implements IGatewayPagRepository
{
  // private repo = this.gatewayPagDB.model();

  constructor() {
    super();
  }

  async AddPayment(): Promise<any> {}
  async UpdatePayment(): Promise<any> {}
}

export { GatewayPagRepository };
