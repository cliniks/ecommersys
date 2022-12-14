import { Request, Response, Router } from "express";
/**
 * Providers
 */
import { UserCheckoutMEProvider } from "../providers/implementations/UserCheckoutMEProvider";

/**
 * UseCases
 */
import { UserUseCases } from "../useCases/CheckoutUseCase.ts/userUseCases";

const UserRouter = Router();

const UserProvider = new UserCheckoutMEProvider();

const User = new UserUseCases(UserProvider);

UserRouter.get("/", (req: Request, res: Response) => res.json({ msg: "Roteamento Checkout" }));

UserRouter.post("/calculate", (req: Request, res: Response) => User.calculateShipping(req, res));
UserRouter.post("/buy-shipping", (req: Request, res: Response) => User.buyShipping(req, res));
UserRouter.get("/cart-items-info/:orderID", (req: Request, res: Response) => User.cartItemsInfo(req, res));
UserRouter.post("/insert-cart-shipping", (req: Request, res: Response) => User.insertCartShipping(req, res));
UserRouter.get("/list-cart", (req: Request, res: Response) => User.listCart(req, res));
UserRouter.delete("/remove-cart-items/:orderID", (req: Request, res: Response) => User.removeCartItems(req, res));

/**
 * Essas rotas são do usuário do da conta melhor envio
 */

UserRouter.get("/info_user", (req: Request, res: Response) => User.infoUser(req, res));
UserRouter.get("/credit", (req: Request, res: Response) => User.creditBalanceUser(req, res));

export { UserRouter };
