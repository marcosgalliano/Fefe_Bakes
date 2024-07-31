const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Course",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
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
      level: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
      },
      video_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recipe_pdf_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.VIRTUAL,
        get() {
          return "curso";
        },
        set(value) {
          throw new Error("No puedes modificar el tipo de un libro de recetas");
        },
      },
    },
    { timestamps: false }
  );
};
