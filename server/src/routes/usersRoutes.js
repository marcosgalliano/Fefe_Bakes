const { Router } = require("express");
const {
  createUserHandler,
  getUsersHandler,
  loginUserHandler,
  updateUserHandler
} = require("../handlers/usersHandlers");

const usersRoutes = Router();

usersRoutes.post("/create", createUserHandler);
usersRoutes.get("/", getUsersHandler);
usersRoutes.post("/login", loginUserHandler);
usersRoutes.put("/:id", updateUserHandler);

module.exports = usersRoutes;
