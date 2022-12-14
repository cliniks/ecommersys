import axios from "axios";
import { Request, Response, Router } from "express";
import Form from "form-data";

const AuthRoutes = Router();

const auth: { client_id: string; client_secret: string; redirect_uri: string; code: string } = {
  client_id: `${process.env.ME_CLIENT_ID}`,
  client_secret: `${process.env.ME_CLIENT_SECRET}`,
  redirect_uri: `${process.env.ME_URL_CALLBACK}`,
  code: `${process.env.ME_CODE}`,
};

AuthRoutes.get('/get-auth', async (req: Request, res: Response) => {

  try {

    const form = new Form();
    form.append("grant_type", "authorization_code");
    form.append("client_id", auth.client_id);
    form.append("client_secret", auth.client_secret);
    form.append("redirect_uri", auth.redirect_uri);
    form.append("code", auth.code);
    
  } catch (err) {
    res.status(400).send(err);
  }
 
});

AuthRoutes.get("/get-token", async (req: Request, res: Response) => {
  try {
    const form = new Form();
    form.append("grant_type", "authorization_code");
    form.append("client_id", auth.client_id);
    form.append("client_secret", auth.client_secret);
    form.append("redirect_uri", auth.redirect_uri);
    form.append("code", auth.code);

    // console.log(form);

    const MeGetToken = axios.create({ baseURL: process.env.ME_URL });

    MeGetToken.interceptors.request.use((config) => {
      if (config.headers == undefined) config.headers = {};
      config.headers = {
        Accept: "application/json",
        "User-Agent": "Aplicação (dev@cliniks.com)",
        ...form.getHeaders(),
      };
      return config;
    });

    const getCode = await MeGetToken.post("/oauth/token", { data: form});

    await console.log(getCode);

    // res.status(200).send(JSON.stringify(getCode));
  } catch (err) {
    console.log(err.response);
    res.status(400).send(err);
  }
});

AuthRoutes.get("/auth-refresh", (req: Request, res: Response) => {
  res.status(200).send({ msg: "confirmada" });
});

AuthRoutes.get("/confirmAuth", (req: Request, res: Response) => {
  res.status(200).send({ msg: "confirmada" });
});

export { AuthRoutes };
