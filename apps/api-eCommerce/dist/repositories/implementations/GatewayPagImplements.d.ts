import { IGatewayPagRepository } from "../interfaces/IGatewayPagRepository";
import { ConnectRepo } from "./ConnectRepo";
declare class GatewayPagRepository extends ConnectRepo implements IGatewayPagRepository {
    constructor();
    AddPayment(): Promise<any>;
    UpdatePayment(): Promise<any>;
}
export { GatewayPagRepository };
