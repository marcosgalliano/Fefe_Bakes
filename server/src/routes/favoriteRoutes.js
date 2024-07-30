const { Router } = require("express");
const favoriteRoute = Router();
const { addFavoriteHandler, deleteFavoriteHandler, getFavoritesHandler } = require("../handlers/favoriteHandler");

favoriteRoute.post("/add", addFavoriteHandler);
favoriteRoute.delete("/remove", deleteFavoriteHandler);
favoriteRoute.get("/:user_id", getFavoritesHandler);

module.exports = favoriteRoute;