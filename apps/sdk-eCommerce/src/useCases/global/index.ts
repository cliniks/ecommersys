import {
  IGlobal,
  IGlobalCategories,
  IGlobalEmailSender,
  IGlobalNotifications,
  IGlobalProducts,
  IGlobalSellers,
  IGlobalUploads,
  ILog,
} from "../../interfaces/IGlobal";
import { Logs } from "../../logs";
import { GlobalCategories } from "./categories";
import { GlobalEmailSender } from "./emailSender";
import { GlobalNotifications } from "./notifications";
import { GlobalProducts } from "./products";
import { GlobalSellers } from "./sellers";
import { GlobalUploads } from "./uploads";

class Global implements IGlobal {
  products: IGlobalProducts = new GlobalProducts();
  categories: IGlobalCategories = new GlobalCategories();
  sellers: IGlobalSellers = new GlobalSellers();
  emailSender: IGlobalEmailSender = new GlobalEmailSender();
  uploads: IGlobalUploads = new GlobalUploads();
  notifications: IGlobalNotifications = new GlobalNotifications();
  logs: ILog[] = Logs;
}

export default new Global();
