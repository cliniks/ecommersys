const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const SalesSchema = new Schema({
  seller: String,
  buyer: String,
  productsInfo: [
    {
      productId: String,
      amount: Number,
      size: String,
    },
  ],
  register: {
    type: Date,
    default: Date.now,
  },
});

SalesSchema.plugin(mongoosePaginate);
mongoose.model("sales", SalesSchema);
