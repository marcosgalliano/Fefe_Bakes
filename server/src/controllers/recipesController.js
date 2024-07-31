const { RecipeBook } = require("../db");

const createRecipe = async (data) => {
  try {
    const newCreated = await RecipeBook.create(data);
    return newCreated;
  } catch (error) {
    console.error("Error creating element: ", error);
    throw error;
  }
};

const getAllRecipes = async () => {
  try {
    const users = await RecipeBook.findAll();
    return users;
  } catch (error) {
    console.error("Error fetching all recipes", error);
    throw error;
  }
};

module.exports = { createRecipe, getAllRecipes };
