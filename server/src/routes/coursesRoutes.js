const { Router } = require("express");
const coursesRoutes = Router();

const { createCourseHandler, getCourseHandler } = require("../handlers/coursesHandler");
const { checkAuth } = require("../middleware/authMiddleware");
const { checkAdmin } = require("../middleware/adminMiddleware");

coursesRoutes.post("/create", checkAuth, checkAdmin, createCourseHandler);
coursesRoutes.get("/", getCourseHandler);

module.exports = coursesRoutes;
