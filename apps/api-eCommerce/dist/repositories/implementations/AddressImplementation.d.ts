import { Model } from "mongoose";
import { Address } from "../../entities";
import { IAddressRepository, getAllProps, getOneProps } from "../Interfaces";
declare class AddressImplementation implements IAddressRepository {
    private model;
    private crud;
    constructor(model: Model<Address>);
    getOne: ({ key, value }: getOneProps) => Promise<Address>;
    getAll: (pagFilter: getAllProps) => Promise<import("../Interfaces").getAllReturn<Address>>;
    getMany: (ids: string[], fields?: string) => Promise<Address[]>;
    addOne: (data: Address) => Promise<Address>;
    update: (id: string, data: any) => Promise<Address>;
    delete: (id: string) => Promise<any>;
}
export default AddressImplementation;
