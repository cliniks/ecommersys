import { Model } from "mongoose";
import { LeadType } from "../../entities/leads.entitie";
import { getAllProps, getAllReturn, getOneProps } from "../Interfaces";
import { ILeadsRepository } from "../Interfaces/ILeadsRepository";
export declare class LeadsImplementation implements ILeadsRepository<LeadType> {
    private model;
    private crud;
    constructor(model: Model<LeadType>);
    getOne: (props: getOneProps) => Promise<LeadType>;
    getAll: (props: getAllProps) => Promise<getAllReturn<LeadType>>;
    getMany: (ids: string[], fields?: string) => Promise<LeadType[]>;
    addOne: (data: LeadType) => Promise<LeadType>;
    update: (id: string, data: Partial<LeadType>) => Promise<LeadType>;
    delete: (id: string) => Promise<any>;
}
