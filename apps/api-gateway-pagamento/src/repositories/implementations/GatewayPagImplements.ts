import mongoose from "mongoose";
import { IGatewayPagRepository } from "../IGatewayPagRepository";

class GatewayPagRepository implements IGatewayPagRepository {
  constructor() {
    this.initMongo();
  }
  async initMongo() {
    const dbConnect = { url: `${process.env.DB_HOST}`, user: process.env.DB_USERNAME, pass: process.env.DB_PASSWORD };
    await mongoose.connect(dbConnect.url, { user: dbConnect.user, pass: dbConnect.pass });
  }
  async AddPayment(): Promise<any> {}
  async UpdatePayment(): Promise<any> {}
}

export { GatewayPagRepository };
