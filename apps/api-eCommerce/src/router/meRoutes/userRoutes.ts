// import { Request, Response, Router } from "express";
// import {UserCheckoutMEProvider} from "../../providers/implementations/UserCheckoutMEProvider";

// const MEUserRouter = Router();

// const UserProvider = new UserCheckoutMEProvider();
// const User = new UserUseCases(UserProvider);

// MEUserRouter.get("/", (req: Request, res: Response) =>
//   res.json({ msg: "Roteamento Checkout" })
// );

// MEUserRouter.post("/addClient", (req: Request, res: Response) => {
//   User.addClient(req, res);
// });

// MEUserRouter.post("/calculate", (req: Request, res: Response) =>
//   User.calculateShipping(req, res)
// );

// MEUserRouter.post("/buy-shipping", (req: Request, res: Response) =>
//   User.buyShipping(req, res)
// );

// MEUserRouter.get("/cart-items-info/:orderID", (req: Request, res: Response) =>
//   User.cartItemsInfo(req, res)
// );

// MEUserRouter.post("/insert-cart-shipping", (req: Request, res: Response) =>
//   User.insertCartShipping(req, res)
// );

// MEUserRouter.get("/list-cart", (req: Request, res: Response) =>
//   User.listCart(req, res)
// );

// MEUserRouter.delete(
//   "/remove-cart-items/:orderID",
//   (req: Request, res: Response) => User.removeCartItems(req, res)
// );

// /**
//  * Essas rotas são do usuário do da conta melhor envio
//  */

// MEUserRouter.get("/info_user", (req: Request, res: Response) =>
//   User.infoUser(req, res)
// );

// MEUserRouter.get("/credit", (req: Request, res: Response) =>
//   User.creditBalanceUser(req, res)
// );

// export { MEUserRouter };
