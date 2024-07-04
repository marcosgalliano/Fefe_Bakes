const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "RecipeBook",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
      },
      pdf_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
