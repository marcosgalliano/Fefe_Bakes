const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRoutes = require("./usersRoutes");
const coursesRoutes = require("./coursesRoutes");
const recipesRoutes = require("./recipesRoute");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/users", usersRoutes);
router.use("/courses", coursesRoutes);
router.use("/recipebooks", recipesRoutes);

module.exports = router;
