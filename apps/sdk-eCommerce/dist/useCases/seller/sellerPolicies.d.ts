import { StorePolicy } from "../../Entities/store.policies.entitie";
import { Response } from "../../Errors";
import { ISellerDashboardPolicy, getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
import { categoryErrors } from "../../services/mutations/category";
export declare class sellerPolicy implements ISellerDashboardPolicy {
    getSingle(props: getSingleProps): Promise<Response<categoryErrors, StorePolicy>>;
    getMyPolicies(props: getAllProps): Promise<Response<categoryErrors, getAllReturn<StorePolicy>>>;
    create(data: StorePolicy): Promise<Response<categoryErrors, StorePolicy>>;
    update(props: {
        policyId: string;
        data: Partial<StorePolicy>;
    }): Promise<Response<categoryErrors, StorePolicy>>;
    delete(data: {
        policyId: string;
    }): Promise<Response<categoryErrors, string>>;
}
