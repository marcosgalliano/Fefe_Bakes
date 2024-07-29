require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Comment, Course, Favorite, Purchase, RecipeBook, User, PasswordRes } =
  sequelize.models;

// Aca vendrian las relaciones
// Relaciones para el modelo User
User.hasMany(Purchase, { foreignKey: "user_id" });
Purchase.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Favorite, { foreignKey: "user_id" });
Favorite.belongsTo(User, { foreignKey: "user_id" });

// Relaciones para el modelo Course
Course.hasMany(Comment, { foreignKey: "course_id" });
Comment.belongsTo(Course, { foreignKey: "course_id" });

Course.hasMany(Favorite, {
  foreignKey: "item_id",
  constraints: false,
  scope: { item_type: "course" },
});
Favorite.belongsTo(Course, { foreignKey: "item_id", constraints: false });

Course.hasMany(Purchase, {
  foreignKey: "item_id",
  constraints: false,
  scope: { item_type: "course" },
});
Purchase.belongsTo(Course, { foreignKey: "item_id", constraints: false });

// Relaciones para el modelo RecipeBook
RecipeBook.hasMany(Favorite, {
  foreignKey: "item_id",
  constraints: false,
  scope: { item_type: "recipebook" },
});
Favorite.belongsTo(RecipeBook, { foreignKey: "item_id", constraints: false });

RecipeBook.hasMany(Purchase, {
  foreignKey: "item_id",
  constraints: false,
  scope: { item_type: "recipebook" },
});
Purchase.belongsTo(RecipeBook, { foreignKey: "item_id", constraints: false });

User.hasMany(PasswordRes, { foreignKey: 'userId' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
  Op // para exportar Sequelize y sus operadores
};