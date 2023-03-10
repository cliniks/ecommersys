import { Model } from "mongoose";
import { Evaluation } from "../../entities";
import { IEvaluationRepository, getAllProps, getOneProps } from "../Interfaces";
declare class EvaluationImplementation implements IEvaluationRepository {
    private model;
    private crud;
    constructor(model: Model<Evaluation>);
    getOne: ({ key, value }: getOneProps) => Promise<Evaluation>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<Evaluation>>;
    getMany: (ids: string[], fields?: string) => Promise<Evaluation[]>;
    addOne: (data: Evaluation) => Promise<Evaluation>;
    update: (id: string, data: Partial<Evaluation>) => Promise<Evaluation>;
    delete: (id: string) => Promise<any>;
}
export default EvaluationImplementation;
