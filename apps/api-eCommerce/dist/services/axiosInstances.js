"use strict";
const axios = require("axios");
const MeApi = axios.create({
    baseURL: "http://localhost:3003",
});
const GPApi = axios.create({
    baseURL: "http://localhost:3004",
});
exports.MeApi = MeApi;
exports.GPApi = GPApi;
