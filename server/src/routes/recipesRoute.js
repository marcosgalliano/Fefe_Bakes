const { Router } = require("express");
const recipesRoute = Router();

const { createRecipeHandler } = require("../handlers/recipesHandlers");

recipesRoute.post("/create", createRecipeHandler);

module.exports = recipesRoute;