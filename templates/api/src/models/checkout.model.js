const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  owner: String,
  products: [
    {
      storeId: String,
      store: {},
      items: [],
      meValuePreview: String,
    },
  ],
  register: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);
mongoose.model("checkout", ProductSchema);
