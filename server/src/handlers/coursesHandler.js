const { createCourse } = require("../controllers/coursesController");

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

module.exports = { createCourseHandler };