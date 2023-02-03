import { StoreSolicitate, Store } from "../../Entities";
import { Response } from "../../Errors";
import { getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
import { IAdmin } from "../../interfaces/IAdmin";
import { adminErrors } from "../../services";
declare class Admin implements IAdmin {
    getAllSellerSolicitation(props: getAllProps): Promise<Response<adminErrors, getAllReturn<StoreSolicitate>>>;
    getSingleSellerSolicitation(props: getSingleProps): Promise<Response<adminErrors, StoreSolicitate>>;
    confirmSellerSolicitation(props: {
        storeSolicitationId: String;
    }): Promise<Response<adminErrors, Store>>;
}
declare const _default: Admin;
export default _default;
