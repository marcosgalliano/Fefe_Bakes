const { Router } = require("express");
const passRouter = Router();
const {
  requestPasswordReset,
  resetPassword,
} = require("../controllers/passResetController");

passRouter.post("/request-reset", requestPasswordReset);
passRouter.post("/reset/", resetPassword);

module.exports = passRouter;
