import axios from "axios";

const MEApi = axios.create({
  baseURL: process.env.ME_URL,
});

MEApi.interceptors.request.use((config) => {
  const token = process.env.ME_TOKEN;
  if (config.headers === undefined) config.headers = {};

  if (token) {
    config.headers = {
      Accept: "application/json",
      "User-Agent": "Aplicação (dev@cliniks.com.br)",
      Authorization: `Bearer ${token}`,
    };
    return config;
  }
});

export { MEApi };
