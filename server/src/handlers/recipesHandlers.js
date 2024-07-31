const { createRecipe, getAllRecipes } = require("../controllers/recipesController");

const createRecipeHandler = async (req, res) => {
  try {
    const data = req.body;
    const newRecipe = await createRecipe(data);

    if (!newRecipe) {
      return res
        .status(202)
        .json({ success: false, message: "No pudo ser creado" });
    } else {
      return res
        .status(201)
        .json({ success: true, message: "Creado", created: newRecipe });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating recipe", error });
  }
};

const getRecipeHandler = async (req, res) => {
  try {
    const allRecipes = await getAllRecipes();
    if (allRecipes.length === 0) {
      return res
        .status(204)
        .json({ success: true, message: "No hay recetarios disponibles" });
    } else {
      return res
        .status(200)
        .json({ success: true, message: "Lista de recetarios", data: allRecipes });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching all recipes", error });
  }
};

module.exports = { createRecipeHandler, getRecipeHandler };