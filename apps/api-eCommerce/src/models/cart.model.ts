import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  name: { type: String, required: true, unique: true },
  melhorEnvioID: String,
  asaasApiKey: String,
  products: [],
  register: {
    type: Date,
    default: Date.now,
  },
});

CartSchema.plugin(mongoosePaginate);
const CartModel = mongoose.model("cart", CartSchema);
export { CartSchema, CartModel };
