const { Router } = require("express");
const recipesRoute = Router();

const { createRecipeHandler, getRecipeHandler } = require("../handlers/recipesHandlers");

recipesRoute.post("/create", createRecipeHandler);
recipesRoute.get("/", getRecipeHandler);

module.exports = recipesRoute;