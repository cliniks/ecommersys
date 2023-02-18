import mongoose from "mongoose";

export const connection = async (): Promise<typeof mongoose> =>
  await mongoose.connect(`${process.env.MONGO_ATLAS_DB_CONNECTION}`);

export const createConnection = (db: string) =>
  mongoose.createConnection(`${process.env.MONGO_ATLAS_DB_CONNECTION}`, {
    dbName: db,
  });
