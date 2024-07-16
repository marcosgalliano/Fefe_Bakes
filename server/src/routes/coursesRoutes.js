const { Router } = require("express");
const coursesRoutes = Router();

const { createCourseHandler, getCourseHandler } = require("../handlers/coursesHandler");

coursesRoutes.post("/create", createCourseHandler);
coursesRoutes.get("/", getCourseHandler);

module.exports = coursesRoutes;
