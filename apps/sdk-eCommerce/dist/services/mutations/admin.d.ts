import { Store, StoreSolicitate } from "../../Entities";
import { Either } from "../../Errors/Either";
import { getAllProps, getAllReturn, getSingleProps } from "../../interfaces";
export declare const adminMutations: {
    acceptSellerSolicitation: ({ solicitationId, }: {
        solicitationId: string;
    }) => Promise<Either<adminErrors, Store>>;
    getAllSellersSolicitation: (props: getAllProps) => Promise<Either<adminErrors, getAllReturn<StoreSolicitate>>>;
    getSingleSellersSolicitation: (props: getSingleProps) => Promise<Either<adminErrors, StoreSolicitate>>;
};
export declare type adminErrors = "Não foi possível liberar acesso" | "Não foi possível encontrar";
