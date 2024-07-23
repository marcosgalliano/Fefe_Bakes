const { Course } = require("../db");

const createCourse = async (data) => {
  try {
    const newCreated = await Course.create(data);
    return newCreated;
  } catch (error) {
    console.error("Error creating element: ", error);
    throw error;
  }
};

const getAllCourses = async () => {
  try {
    const users = await Course.findAll();
    return users;
  } catch (error) {
    console.error("Error fetching all Courses", error);
    throw error;
  }
};

module.exports = { createCourse, getAllCourses };