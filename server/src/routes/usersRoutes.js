const { Router } = require("express");
const usersRoutes = Router();

const {
  createUserHandler,
  getUsersHandler,
  loginUserHandler
} = require("../handlers/usersHandlers");

usersRoutes.post("/create", createUserHandler);
usersRoutes.get("/", getUsersHandler);
usersRoutes.post("/login", loginUserHandler);

module.exports = usersRoutes;
