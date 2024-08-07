const { Router } = require("express");
const paymentRoute = Router();

const { createPreference } = require("../handlers/createPreferenceHandler");

paymentRoute.post("/create-preference", createPreference);

module.exports = paymentRoute;
