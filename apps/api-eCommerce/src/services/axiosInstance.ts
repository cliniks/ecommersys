import axios from "axios";

const Api = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://api.ikiradev.com",
});

Api.interceptors.request.use((config: any) => {
  const token = process.env.ASASS_TOKEN;
  if (config.headers === undefined) config.headers = {};

  if (token) {
    config.headers = {
      Accept: "application/json",
      access_token: token.trim(),
      ["Content-Type"]: "application/json; charset=utf-8",
      ["Access-Control-Allow-Headers"]: "Content-Type",
      ["Access-Control-Allow-Origin"]: "*",
      ["Access-Control-Allow-Methods"]: "OPTIONS,POST,GET,PUT,PATCH,DELETE",
    };
    return config;
  }
  return config;
});

const AsassAPI = axios.create({
  baseURL: process.env.ASASS_HOST,
});

AsassAPI.interceptors.request.use((config: any) => {
  const token = process.env.ASASS_TOKEN;
  if (config.headers === undefined) config.headers = {};

  if (token) {
    config.headers = {
      Accept: "application/json",
      access_token: token.trim(),
      ["Content-Type"]: "application/json; charset=utf-8",
      ["Access-Control-Allow-Headers"]: "Content-Type",
      ["Access-Control-Allow-Origin"]: "*",
      ["Access-Control-Allow-Methods"]: "OPTIONS,POST,GET,PUT,PATCH,DELETE",
    };
    return config;
  }
  return config;
});

const MEApi = axios.create({
  baseURL: process.env.ME_URL,
});

MEApi.interceptors.request.use((config) => {
  const token = process.env.ME_TOKEN;
  if (config.headers === undefined) config.headers = {};

  if (token) {
    config.headers = {
      Accept: "application/json",
      "User-Agent": "Aplicação (front.ikiradev.com)",
      Authorization: `Bearer ${token}`,
    };
    return config;
  }
});

const makeApi = axios.create({ baseURL: process.env.MAKE_PIPEFY_ENDPOINT });

export { AsassAPI, Api, makeApi, MEApi };
