const { Favorite } = require("../db");

const addFavoriteHandler = async (req, res) => {
    const { user_id, item_id, item_type } = req.body;

    try {
      const favorite = await Favorite.create({
        user_id,
        item_id,
        item_type,
      });
      res.status(201).json({success: true, favorite});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const deleteFavoriteHandler = async (req, res) => {
    const { user_id, item_id, item_type } = req.body;

    try {
      const result = await Favorite.destroy({
        where: {
          user_id,
          item_id,
          item_type,
        },
      });
  
      if (result) {
        res.status(200).json({ success: true, message: 'Favorite removed successfully' });
      } else {
        res.status(404).json({ message: 'Favorite not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const getFavoritesHandler = async (req, res) => {
    const { user_id } = req.params;

    try {
      const favorites = await Favorite.findAll({
        where: {
          user_id,
        },
      });
      res.status(200).json({success: true, favorites});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

module.exports = { addFavoriteHandler, deleteFavoriteHandler, getFavoritesHandler };