// import { Request, Response, Router } from "express";
// import { SellerCheckoutMEProvider } from "../providers/implementations/SellerCheckoutMEProvider";
// import { MailSenderProvider } from "../providers/implementations/MailSenderProvider";
// import { UserCheckoutMEProvider } from "../providers/implementations/UserCheckoutMEProvider";
// import { SellerUseCases } from "../useCases/CheckoutUseCase.ts/sellerUseCases";

// const multer = require("multer");
// const upload = multer({ dest: "../../uploads/" });

// const SellerRouter = Router();

// const SellerProvider = new SellerCheckoutMEProvider();

// const UserProvider = new UserCheckoutMEProvider();

// const MailProvider = new MailSenderProvider();

// const Seller = new SellerUseCases(SellerProvider, UserProvider, MailProvider);

// SellerRouter.get("/", (req: Request, res: Response) =>
//   res.json({ msg: "Roteamento Checkout" })
// );

// // Seller Shipping
// SellerRouter.post("/cancel-tag", (req: Request, res: Response) =>
//   Seller.cancelTag(req, res)
// );
// SellerRouter.post("/generate-tag", (req: Request, res: Response) =>
//   Seller.generateTag(req, res)
// );
// SellerRouter.get("/info-tag/:orderID", (req: Request, res: Response) =>
//   Seller.infoTag(req, res)
// );
// SellerRouter.get("/list-tags", (req: Request, res: Response) =>
//   Seller.listTags(req, res)
// );
// SellerRouter.post("/preview-tags", (req: Request, res: Response) =>
//   Seller.previewTags(req, res)
// );
// SellerRouter.post("/print-tag", (req: Request, res: Response) =>
//   Seller.printTag(req, res)
// );
// SellerRouter.get("/search-tag", (req: Request, res: Response) =>
//   Seller.searchTag(req, res)
// );
// SellerRouter.post("/verify-tag", (req: Request, res: Response) =>
//   Seller.verifyTag(req, res)
// );

// // Lojas
// SellerRouter.get("/list", (req: Request, res: Response) =>
//   Seller.listStore(req, res)
// );
// SellerRouter.post("/register", (req: Request, res: Response) =>
//   Seller.registerStore(req, res)
// );
// SellerRouter.get("/:storeID", (req: Request, res: Response) =>
//   Seller.previewStore(req, res)
// );
// SellerRouter.post("/:storeID/addresses", (req: Request, res: Response) =>
//   Seller.saveAddress(req, res)
// );
// SellerRouter.get("/:storeID/addresses", (req: Request, res: Response) =>
//   Seller.listAddress(req, res)
// );
// SellerRouter.post("/:storeID/phones", (req: Request, res: Response) =>
//   Seller.savePhone(req, res)
// );
// SellerRouter.post(
//   "/:storeID/picture",
//   upload.single("image"),
//   (req: Request, res: Response) => Seller.uploadImageStore(req, res)
// );

// export { SellerRouter };
