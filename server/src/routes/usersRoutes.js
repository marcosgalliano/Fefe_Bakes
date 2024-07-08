const { Router } = require("express");
const {
  createUserHandler,
  getUsersHandler,
  loginUserHandler
} = require("../handlers/usersHandlers");

const usersRoutes = Router();

usersRoutes.post("/create", createUserHandler);
usersRoutes.get("/", getUsersHandler);
usersRoutes.post("/login", loginUserHandler);

module.exports = usersRoutes;
