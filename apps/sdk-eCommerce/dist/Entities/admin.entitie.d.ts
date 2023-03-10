export declare type CommissionType = {
    _id?: string;
    commissionType: "percentage" | "fixed+percentage" | "fixed";
    percentage: Number;
    fixed: Number;
    scalable: {
        percentage: Number;
        fixed: Number;
    }[];
    updatedAt?: Date;
    createdAt?: Date;
};
export declare type GlobalCommissionType = CommissionType;
