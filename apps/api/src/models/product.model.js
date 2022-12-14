const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  value: {
    type: String,
    required: true,
    default: "0",
  },
  img: {
    type: Array,
    default: [process.env.INITIAL_PRODUCT_IMG],
  },
  partners: [String],
  qnt: {
    type: Number,
    default: 0,
  },
  sizes: [{ qnt: Number, sizeType: String }],
  height: String,
  width: String,
  weight: String,
  owner: {
    type: String,
    required: true,
  },
  ownerData: {},
  likes: {
    type: Number,
    default: 0,
  },
  likers: [],
  favorites: [],
  discount: {
    active: { type: Boolean, default: false },
    percentage: { type: Number, default: 0 },
  },
  status: {
    type: Boolean,
    default: 0,
  },
  group: [],
  subgroup: [],
  statistics: {
    views: { type: Number, default: 0 },
    buyeds: { type: Number, default: 0 },
  },
  register: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);
mongoose.model("product", ProductSchema);
