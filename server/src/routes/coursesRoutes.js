const { Router } = require("express");
const coursesRoutes = Router();

const { createCourseHandler } = require("../handlers/coursesHandler");

coursesRoutes.post("/create", createCourseHandler);

module.exports = coursesRoutes;
