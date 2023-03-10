import mongoose from "mongoose";
export declare const connection: () => Promise<typeof mongoose>;
export declare const createConnection: (db: string) => mongoose.Connection;
