export declare type Coupon = {
    _id?: string;
    name: string;
    productsAssigned: string[];
    clientsAssigned: string[];
    storesAssigned: string[];
    categoriesAssigned: string[];
    usedIds: string[];
    description: string;
    type: "percentage" | "fixed" | "shipping";
    value: string;
    minValue: string;
    maxValue?: String;
    used: number;
    limitForUse: number;
    isCashBack: boolean;
    startDate?: Date;
    endDate?: Date;
    isActive?: boolean;
    isFreeShipping: boolean;
    owner: string;
    createdAt?: Date;
    updatedAt?: Date;
};
