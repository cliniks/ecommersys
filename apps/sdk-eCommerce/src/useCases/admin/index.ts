import { StoreSolicitate, Store } from "../../Entities";
import { notificationTypes } from "../../Entities/notification.entitie";
import { Response } from "../../Errors";
import { getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
import { IAdmin, IAdminNotifications } from "../../interfaces/IAdmin";
import { adminErrors, adminMutations } from "../../services";
import { Try } from "../../utils";
import { commission } from "./commission";
import { AdminNotifications } from "./notifications";

class Admin implements IAdmin {
  async getAllSellerSolicitation(
    props: getAllProps
  ): Promise<Response<adminErrors, getAllReturn<StoreSolicitate>>> {
    return await Try(adminMutations.getAllSellersSolicitation, props);
  }
  async getSingleSellerSolicitation(
    props: getSingleProps
  ): Promise<Response<adminErrors, StoreSolicitate>> {
    return await Try(adminMutations.getSingleSellersSolicitation, props);
  }
  async confirmSellerSolicitation(props: {
    solicitationId: String;
  }): Promise<Response<adminErrors, Store>> {
    return await Try(adminMutations.acceptSellerSolicitation, props);
  }
  async rejectSolicitation(props: {
    solicitationId: String;
  }): Promise<Response<adminErrors, Store>> {
    return await Try(adminMutations.rejectSellerSolicitation, props);
  }
  commission = new commission();
  notification: IAdminNotifications<notificationTypes> =
    new AdminNotifications();
}

export default new Admin();
