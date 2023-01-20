import { Evaluation } from "../../entities/evaluation.entitie";
import { IEvaluationRepository } from "../Interfaces/IEvaluationRepository";
import { ConnectRepo } from "./ConnectRepo";
export declare class EvaluationRepository extends ConnectRepo implements IEvaluationRepository {
    private model;
    private crud;
    constructor();
    getOne: ({ key, value }: getOneProps) => Promise<any>;
    getAll: (props: getAllProps) => Promise<{
        result: any[];
        totalItems: number;
        pageSize: number;
        thisPage: number;
        totalPage: number;
    }>;
    addOne: (data: Evaluation) => Promise<any>;
    update: (id: string, data: Partial<Evaluation>) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
