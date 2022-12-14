import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: { type: String, required: true, unique: true },
  melhorEnvioID: String,
  asaasApiKey: String,
  products: [],
  register: {
    type: Date,
    default: Date.now,
  },
});

OrderSchema.plugin(mongoosePaginate);
const OrderModel = mongoose.model("order", OrderSchema);
export { OrderSchema, OrderModel };
