import { StoreSolicitate, Store } from "../../Entities";
import { Response } from "../../Errors";
import { getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
import { IAdmin } from "../../interfaces/IAdmin";
import { adminErrors, adminMutations } from "../../services";
import { Try } from "../../utils";

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
    storeSolicitationId: String;
  }): Promise<Response<adminErrors, Store>> {
    return await Try(adminMutations.getAllSellersSolicitation, props);
  }
}

export default new Admin();
