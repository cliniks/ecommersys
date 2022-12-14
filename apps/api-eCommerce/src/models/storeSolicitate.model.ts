import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
const Schema = mongoose.Schema;

const StoreSolicitateSchema = new Schema({
  name: { type: String, required: true, unique: true },
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
  owner: { type: String, required: true, unique: true },
  register: {
    type: Date,
    default: Date.now,
  },
});

StoreSolicitateSchema.plugin(mongoosePaginate);
const StoreSolicitateModel = mongoose.model(
  "storeSolicitate",
  StoreSolicitateSchema
);
export { StoreSolicitateSchema, StoreSolicitateModel };
