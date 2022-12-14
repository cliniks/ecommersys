import dotEnv from "dotenv";
dotEnv.config();
import app from "./app";

const PORT = process.env.PORT || 3003;
console.log(PORT);

app.listen(PORT, () => {
  console.log("Servidor aberto na porta " + PORT);
});
