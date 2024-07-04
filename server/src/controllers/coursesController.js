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

module.exports = { createCourse };