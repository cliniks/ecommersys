import {
  IGlobal,
  IGlobalEmailSender,
  IGlobalProducts,
  IGlobalSellers,
  ILog,
} from "../../interfaces/IGlobal";
import { Logs } from "../../logs";
import { GlobalEmailSender } from "./emailSender";
import { GlobalProducts } from "./products";
import { GlobalSellers } from "./sellers";

class Global implements IGlobal {
  products: IGlobalProducts = new GlobalProducts();
  sellers: IGlobalSellers = new GlobalSellers();
  emailSender: IGlobalEmailSender = new GlobalEmailSender();
  logs: ILog[] = Logs;
}

export default new Global();
