import { Store, StoreSolicitate } from "../Entities";
import { Response } from "../Errors";
import { adminErrors } from "../services";
import { getAllProps, getAllReturn, getSingleProps } from "./IGlobal";
export interface IAdmin {
    getAllSellerSolicitation(props: getAllProps): Promise<Response<adminErrors, getAllReturn<StoreSolicitate>>>;
    getSingleSellerSolicitation(props: getSingleProps): Promise<Response<adminErrors, StoreSolicitate>>;
    confirmSellerSolicitation(props: {
        storeSolicitationId: String;
    }): Promise<Response<adminErrors, Store>>;
}
