import dotEnv from "dotenv";
dotEnv.config();
import app from "./app";

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log("Servidor aberto na porta " + PORT);
});
