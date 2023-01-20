import { Store } from "../../../Entities";
import { Response } from "../../../Errors";
import { IGlobalSellers, getAllProps, getAllReturn } from "../../../interfaces";
import { sellerErrors, sellerMutations } from "../../../services";
import { Try } from "../../../utils";

export class GlobalSellers implements IGlobalSellers {
  async getSingle(props: {
    key: string;
    value: string;
  }): Promise<Response<sellerErrors, Store>> {
    return await Try(sellerMutations.getOneStore, props);
  }
  async getAll(
    props: getAllProps
  ): Promise<Response<sellerErrors, getAllReturn<Store>>> {
    return await Try(sellerMutations.getAllStore, props);
  }
}
