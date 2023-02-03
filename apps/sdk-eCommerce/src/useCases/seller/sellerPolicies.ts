import { StorePolicy } from "../../Entities/store.policies.entitie";
import { Response } from "../../Errors";
import {
  ISellerDashboardPolicy,
  getAllProps,
  getAllReturn,
  getSingleProps,
} from "../../interfaces";
import { sellerMutations } from "../../services";
import { categoryErrors } from "../../services/mutations/category";
import { Try } from "../../utils";

export class sellerPolicy implements ISellerDashboardPolicy {
  async getSingle(
    props: getSingleProps
  ): Promise<Response<categoryErrors, StorePolicy>> {
    return await Try(sellerMutations.getOnePolicy, props);
  }
  async getMyPolicies(
    props: getAllProps
  ): Promise<Response<categoryErrors, getAllReturn<StorePolicy>>> {
    return await Try(sellerMutations.getMyPolicies, props);
  }
  async create(
    data: StorePolicy
  ): Promise<Response<categoryErrors, StorePolicy>> {
    return await Try(sellerMutations.addPolicy, data);
  }
  async update(props: {
    policyId: string;
    data: Partial<StorePolicy>;
  }): Promise<Response<categoryErrors, StorePolicy>> {
    return await Try(sellerMutations.updatePolicy, props);
  }
  async delete(data: {
    policyId: string;
  }): Promise<Response<categoryErrors, string>> {
    return await Try(sellerMutations.deletePolicy, data);
  }
}
