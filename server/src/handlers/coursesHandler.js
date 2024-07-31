const { createCourse, getAllCourses } = require("../controllers/coursesController");

const createCourseHandler = async (req, res) => {
  try {
    const data = req.body;
    const newCourse = await createCourse(data);

    if (!newCourse) {
      return res
        .status(202)
        .json({ success: false, message: "No pudo ser creado" });
    } else {
      return res
        .status(201)
        .json({ success: true, message: "Creado", created: newCourse });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating course", error });
  }
};


const getCourseHandler = async (req, res) => {
  try {
    const allCourses = await getAllCourses();
    if (allCourses.length === 0) {
      return res
        .status(204)
        .json({ success: true, message: "No hay cursos disponibles" });
    } else {
      return res
        .status(200)
        .json({ success: true, message: "Lista de cursos", data: allCourses });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching all courses", error });
  }
};


module.exports = { createCourseHandler, getCourseHandler };