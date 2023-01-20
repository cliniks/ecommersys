export declare const dbconfig: {
    url: string;
    user: {
        authSource: string;
        authMongo: {
            user: string | undefined;
            pass: string | undefined;
        };
    };
    seller: {
        authSource: string;
        authMongo: {
            user: string | undefined;
            pass: string | undefined;
        };
    };
    sales: {
        authSource: string;
        authMongo: {
            user: string | undefined;
            pass: string | undefined;
        };
    };
    cart: {
        authSource: string;
        authMongo: {
            user: string | undefined;
            pass: string | undefined;
        };
    };
    products: {
        authSource: string;
        authMongo: {
            user: string | undefined;
            pass: string | undefined;
        };
    };
};
export declare const promiseRetryOptions: {
    factor: number;
    maxTimeout: number;
};
