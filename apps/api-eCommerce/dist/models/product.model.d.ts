import mongoose from "mongoose";
declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    img: any[];
    owner: string;
    value: string;
    register: Date;
    favorites: any[];
    likes: number;
    status: boolean;
    partners: string[];
    likers: any[];
    qnt: number;
    sizes: {
        qnt?: number | undefined;
        sizeType?: string | undefined;
    }[];
    group: any[];
    subgroup: any[];
    statistics?: {
        views: number;
        buyeds: number;
    } | undefined;
    description?: string | undefined;
    height?: string | undefined;
    width?: string | undefined;
    weight?: string | undefined;
    discount?: {
        percentage: number;
        active: boolean;
    } | undefined;
    ownerData?: any;
}>;
export { ProductSchema };
