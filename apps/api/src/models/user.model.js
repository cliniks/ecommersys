const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  wallet: {
    amount: { type: Number, default: 0 },
    history: [],
  },
  img: {
    type: String,
    default: process.env.INITIAL_IMAGE,
  },
  userInfo: {
    name: String,
    lastName: String,
    fone: String,
    cpf: String,
    address: String,
    number: Number,
    complement: String,
    city: String,
    state: String,
    cep: String,
    email: String,
  },
  myOrders: [],
  buysUnderProcess: [],
  melhorEnvioID: String,
  gatewayPagId: String,
  myBuys: [],
  wishList: [],
  favorites: [],
  likes: [],
  messages: [],
  cart: [],
  storeId: String,
  storeData: {},
  access: {
    type: Number,
    default: 0,
  },
  register: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.plugin(mongoosePaginate);
mongoose.model("user", UserSchema);
