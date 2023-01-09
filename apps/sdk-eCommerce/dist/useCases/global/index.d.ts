import { IGlobal, IGlobalEmailSender, IGlobalProducts, IGlobalSellers, ILog } from "../../interfaces/IGlobal";
declare class Global implements IGlobal {
    products: IGlobalProducts;
    sellers: IGlobalSellers;
    emailSender: IGlobalEmailSender;
    logs: ILog[];
}
declare const _default: Global;
export default _default;
