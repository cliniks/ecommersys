require("dotenv").config();
const express = require("express");
const cors = require("cors");
const requireDir = require("require-dir");
var bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connectdb = require("./database/connectDB");
connectdb();

requireDir("./models");

app.use("/", require("./routes/routes"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Servidor aberto na porta ", PORT);
});
