const { Router } = require("express");
const {
  createUserHandler,
  getUsersHandler,
  loginUserHandler,
  updateUserHandler
} = require("../handlers/usersHandlers");

const usersRoutes = Router();

// Ruta para el registro de usuarios
usersRoutes.post("/create", createUserHandler);

// Ruta para obtener todos los usuarios
usersRoutes.get("/", getUsersHandler);

// Ruta para el inicio de sesión
usersRoutes.post("/login", loginUserHandler);

// Ruta para actualizar un usuario
usersRoutes.put("/:id", updateUserHandler);

module.exports = usersRoutes;
