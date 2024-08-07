const { Router } = require("express");
const recipesRoute = Router();

const { createRecipeHandler, getRecipeHandler } = require("../handlers/recipesHandlers");

const { checkAuth } = require("../middleware/authMiddleware");
const { checkAdmin } = require("../middleware/adminMiddleware");

recipesRoute.post("/create", checkAuth, checkAdmin, createRecipeHandler);
recipesRoute.get("/", getRecipeHandler);

module.exports = recipesRoute;