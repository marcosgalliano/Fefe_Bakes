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

module.exports = { createRecipe };
