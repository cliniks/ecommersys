import { Request, Response, Router } from "express";
import { SalesRepository, UsersRepository } from "../repositories";
import { verifyers } from "../middlewares/verifyers";
import { createChat } from "../useCases/ChatsUseCases/createChat";

const salesRepo = SalesRepository;

const BulkRoutes: Router = Router();

BulkRoutes.post(
  "/allSales",
  verifyers.verifyAdmin,
  async (req: Request, res: Response) => {
    if (req.body.key === "somenteEmLocalEemTeste") {
      const allSales = await salesRepo.getAll({
        size: 900,
        page: 0,
        filter: { fields: "_id" },
      });
      const getAllIds = allSales.result.map((item) => item._id);

      for (let id of getAllIds) {
        await salesRepo.delete(id);
        continue;
      }

      return res.json();
    }
    return res.status(200).send();
  }
);

BulkRoutes.get("/addChatToAll", async (req, res) => {
  try {
    console.log("addChatToAll");
    const AllUsers = await UsersRepository.getAll({
      page: 0,
      size: 200,
      filter: { fields: "_id" },
    });

    for (let user of AllUsers.result) {
      await createChat(user._id);
    }

    res.json(true);
  } catch (err) {
    res.status(400).send(err.toString());
  }
});

BulkRoutes.get("/addChatToAllStores", async (req, res) => {
  try {
    console.log("addChatToAllStores");
    const AllUsers = await UsersRepository.getAll({
      page: 0,
      size: 200,
      filter: { fields: "_id storeId" },
    });

    for (let user of AllUsers.result) {
      if (user.storeId) await createChat(user.storeId);
    }

    res.json(true);
  } catch (err) {
    res.status(400).send(err.toString());
  }
});

export { BulkRoutes };
