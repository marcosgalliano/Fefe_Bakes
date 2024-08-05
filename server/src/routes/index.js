const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRoutes = require("./usersRoutes");
const coursesRoutes = require("./coursesRoutes");
const recipesRoutes = require("./recipesRoute");
const passRoutes = require("./resetPassword");
const favoriteRoutes = require("./favoriteRoutes")
const contactRoutes = require('./contactRoutes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/users", usersRoutes); // Todas las rutas de usuarios estarán prefijadas con /api/users
router.use("/courses", coursesRoutes);
router.use("/recipebooks", recipesRoutes);
router.use("/password", passRoutes);
router.use("/favorites", favoriteRoutes);
router.use('/contacto', contactRoutes);

module.exports = router;
