import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: { type: String, required: true, unique: true },
  wallet: {
    amount: { type: Number, default: 0 },
    history: [],
  },
  img: {
    type: String,
    default: process.env.INITIAL_IMAGE,
  },
  segments: [],
  storeInfo: {
    cnpj: String,
    address: String,
    number: Number,
    complement: String,
    city: String,
    state: String,
    cep: String,
    email: String,
  },
  melhorEnvioID: String,
  asaasID: String,
  asaasApiKey: String,
  owner: { type: String, required: true, unique: true },
  products: [],
  productsCount: { type: Number, default: 0 },
  statistics: {
    views: { type: Number, default: 0 },
    clients: [],
  },
  openOrders: [],
  salesHistory: [],
  salesToSend: [],
  messages: [],
  tokenStripe: {
    type: String,
  },
  register: {
    type: Date,
    default: Date.now,
  },
});

StoreSchema.plugin(mongoosePaginate);
const StoreModel = mongoose.model("store", StoreSchema);
export { StoreSchema, StoreModel };
