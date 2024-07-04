const { createRecipe } = require("../controllers/recipesController");

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

module.exports = { createRecipeHandler };