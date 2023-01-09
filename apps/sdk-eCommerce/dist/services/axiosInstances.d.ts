declare const apiEcommerce: import("axios").AxiosInstance;
export { apiEcommerce };
export declare const updateInterceptor: (interceptors: {
    [key: string]: string;
}) => Promise<number>;
