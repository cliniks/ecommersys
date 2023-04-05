import { Request, Response } from "express";
import { ISellerCheckoutMEProvider } from "../../../providers/interfaces/ISellerCheckoutMEProvider";
import { IUserCheckoutMEProvider } from "../../../providers/interfaces/IUserCheckoutMEProvider";
import { IMailSenderProvider } from "../../../providers/interfaces/IMailSenderProvider";
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

export class SellerUseCases {
  constructor(
    private SellerProvider: ISellerCheckoutMEProvider,
    private UserProvider: IUserCheckoutMEProvider,
    private MailProvider: IMailSenderProvider
  ) {}
  // Pré visualização de etiquetas
  async previewTags(req: Request, res: Response) {
    try {
      const { orders }: any = req.body;

      const previewTags = await this.SellerProvider.previewTags(orders);
      res.json(previewTags);
    } catch (err) {
      res.status(400).send({ err });
    }
  }
  // Geração de etiquetas
  async generateTag(req: Request, res: Response) {
    try {
      const { orders }: string[] | any = req.body;

      const checkBalance = await this.UserProvider.creditBalanceUser();

      if (parseInt(checkBalance.balance) < 1000) {
        const generateTag = await this.SellerProvider.generateTag(orders);

        res.json(generateTag);
      } else {
        /**
         * Envia email notificado limite baixo
         */
        await this.MailProvider.sendMail({
          to: "expertusdigital@gmail.com",
          subject: "[URGENTE] Saldo do Melhor envio baixo.",
          body: "Clique no link para acessar a plataforma e fazer uma recarga.",
          html: '<div style="text-align:center"><a href="https://cliniks.com.br/"> Acessar painel </a></div>',
        });

        // console.log('send', send);

        res.status(400).send({ error: "Não foi possível gerar etiquetas..." });
      }
    } catch (err) {
      res.status(400).send({ err });
    }
  }
  // Impressão de etiquetas
  async printTag(req: Request, res: Response) {
    try {
      const { orders }: any = req.body;

      const printTag = await this.SellerProvider.printTag(orders);
      res.json(printTag);
    } catch (err) {
      res.status(400).send({ err });
    }
  }
  // Pesquisar etiqueta
  async searchTag(req: Request, res: Response) {
    try {
      const { ID }: any = req.query;

      const searchTag = await this.SellerProvider.searchTag(ID);
      res.json(searchTag);
    } catch (err) {
      res.status(400).send({ err });
    }
  }
  // Listar etiquetas
  async listTags(req: Request, res: Response) {
    try {
      const { status }: any = req.query;

      const listTags = await this.SellerProvider.listTags(status);
      res.json(listTags);
    } catch (err) {
      res.status(400).send({ err });
    }
  }
  // Listar informações de uma etiqueta
  async infoTag(req: Request, res: Response) {
    try {
      const { orderID }: any = req.params;

      const infoTag = await this.SellerProvider.infoTag(orderID);
      res.json(infoTag);
    } catch (err) {
      res.status(400).send({ err });
    }
  }
  // Cancelamento de etiquetas
  async cancelTag(req: Request, res: Response) {
    try {
      const { order }: any = req.body;

      const cancelTag = await this.SellerProvider.cancelTag(order);
      res.json(cancelTag);
    } catch (err) {
      res.status(400).send({ err });
    }
  }
  // Verificar se etiqueta pode ser cancelada
  async verifyTag(req: Request, res: Response) {
    try {
      const { orders }: any = req.body;

      const verifyTag = await this.SellerProvider.verifyTag(orders);
      res.json(verifyTag);
    } catch (err) {
      res.status(400).send({ err });
    }
  }

  async listStore(req: Request, res: Response) {
    try {
      const { orders }: any = req.body;

      const listStore = await this.SellerProvider.listStore();
      res.json(listStore);
    } catch (err) {
      res.status(400).send({ err });
    }
  }

  async registerStore(req: Request, res: Response) {
    try {
      const dataStore: any = req.body;

      const registerStore = await this.SellerProvider.registerStore(dataStore);
      res.json(registerStore);
    } catch (err) {
      res.status(400).send({ err });
    }
  }

  async previewStore(req: Request, res: Response) {
    try {
      const { storeID }: any = req.params;

      const previewStore = await this.SellerProvider.previewStore(storeID);
      res.json(previewStore);
    } catch (err) {
      res.status(400).send({ err });
    }
  }

  async saveAddress(req: Request, res: Response) {
    try {
      const { storeID }: any = req.params;
      const data: any = req.body;

      const saveAddress = await this.SellerProvider.saveAddress(storeID, data);
      res.json(saveAddress);
    } catch (err) {
      res.status(400).send({ err });
    }
  }

  async listAddress(req: Request, res: Response) {
    try {
      const { storeID }: any = req.params;

      const listAddress = await this.SellerProvider.listAddress(storeID);
      res.json(listAddress);
    } catch (err) {
      res.status(400).send({ err });
    }
  }

  async savePhone(req: Request, res: Response) {
    try {
      const { storeID }: any = req.params;
      const data: any = req.body;

      const savePhone = await this.SellerProvider.savePhone(storeID, data);
      res.json(savePhone);
    } catch (err) {
      console.log(err);

      res.status(400).send({ err });
    }
  }

  async uploadImageStore(req: any, res: Response) {
    try {
      const { storeID }: any = req.params;

      const { file } = req;

      // const uploadToS3 = await uploadImage(
      //   file,
      //   `${storeID}/${file.originalname.split(".")[0]}`
      // );
      // const imgLocation = uploadToS3.Location;

      const savePhone = await this.SellerProvider.uploadImageStore(
        storeID,
        file
      );
      await unlinkFile(file.path);
      res.json(savePhone);
    } catch (err) {
      console.log(err);
      res.status(400).send({ err });
    }
  }
}
