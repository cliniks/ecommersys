import axios from "axios";
import { Request, Response, Router } from "express";

const router: Router = Router();

router.post("/validateAppToken", (req: Request, res: Response) => {
  try {
    const { appToken } = req.body;

    // gerar uma tabela para armazenar o token e vincular db para token
    const confirmAppToken = appToken === process.env.CLINIKS_APPTOKEN;

    res.json(confirmAppToken);
  } catch (err) {
    res.status(400).send(false);
  }
});

router.get("/createAccount", async (req: Request, res: Response) => {
  try {
    await axios.post(
      "https://hook.us1.make.com/qyz7y8u0g2y8g3nkhkn685iznyxkfpm7",
      {
        type: "createAccount",
        userInfo: {
          name: "Ricardo2",
          lastName: "Diniz",
          cpf: "",
          cnpj: "33957349000175",
          cnae: "6110-8/01. Serviços de telefonia fixa comutada - STFC",
          enterpriseSocial: "API4COM TECNOLOGIA E SERVICOS LTDA",
          enterpriseName: "API4COM",
          address: "SC  401",
          number: "4150",
          phone: "(48) 99126-0289",
          complement: "SALA  1 E 2",
          birthDate: "",
          city: "Florianópolis",
          state: "SC",
          email: "diniz.ricardo@gmail.com",
          defaultAddress: "63e173b4e6678387b9c42ebc",
        },
      }
    );
    res.json("Usuário Criado");
  } catch (err) {
    res.status(500).send("Não foi possível");
  }
});

router.get("/sellerSolicitation", async (req: Request, res: Response) => {
  try {
    await axios.post(
      "https://hook.us1.make.com/qyz7y8u0g2y8g3nkhkn685iznyxkfpm7",
      {
        type: "sellerSolicitation",
        storeInfo: {
          cnpj: "33957349000175",
          cnae: "6110-8/01. Serviços de telefonia fixa comutada - STFC",
          address: "SC  401",
          number: "4150",
          complement: "SALA  1 E 2",
          enterpriseSocial: "API4COM TECNOLOGIA E SERVICOS LTDA",
          enterpriseName: "API4COM",
          phone: "(48) 99126-0289",
          city: "Florianópolis",
          state: "SC",
          email: "diniz.ricardo@gmail.com",
        },
        userInfo: {
          name: "Ricardo",
          lastName: "Diniz",
          cpf: "",
          cnpj: "33957349000175",
          cnae: "6110-8/01. Serviços de telefonia fixa comutada - STFC",
          enterpriseSocial: "API4COM TECNOLOGIA E SERVICOS LTDA",
          enterpriseName: "API4COM",
          address: "SC  401",
          number: "4150",
          phone: "(48) 99126-0289",
          complement: "SALA  1 E 2",
          birthDate: "",
          city: "Florianópolis",
          state: "SC",
          email: "diniz.ricardo@gmail.com",
          defaultAddress: "63e173b4e6678387b9c42ebc",
        },
      }
    );
    res.json("Usuário Criado");
  } catch (err) {
    res.status(500).send("Não foi possível");
  }
});

export { router };
