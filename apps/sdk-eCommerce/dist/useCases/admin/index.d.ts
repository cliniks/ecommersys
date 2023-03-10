import { StoreSolicitate, Store } from "../../Entities";
import { notificationTypes } from "../../Entities/notification.entitie";
import { Response } from "../../Errors";
import { getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
import { IAdmin, IAdminNotifications } from "../../interfaces/IAdmin";
import { adminErrors } from "../../services";
import { commission } from "./commission";
declare class Admin implements IAdmin {
    getAllSellerSolicitation(props: getAllProps): Promise<Response<adminErrors, getAllReturn<StoreSolicitate>>>;
    getSingleSellerSolicitation(props: getSingleProps): Promise<Response<adminErrors, StoreSolicitate>>;
    confirmSellerSolicitation(props: {
        solicitationId: String;
    }): Promise<Response<adminErrors, Store>>;
    rejectSolicitation(props: {
        solicitationId: String;
    }): Promise<Response<adminErrors, Store>>;
    commission: commission;
    notification: IAdminNotifications<notificationTypes>;
}
declare const _default: Admin;
export default _default;
