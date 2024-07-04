const { User } = require("../db");
const bcrypt = require("bcryptjs");
const { use } = require("../routes");

const createUser = async (data) => {
  try {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const newCreated = await User.create(data);
    return newCreated;
  } catch (error) {
    console.error("Error creating element: ", error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error("Error fetching all users", error);
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({
      where: { email },
    });
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error logging in user", error);
    throw error;
  }
};

module.exports = { createUser, getAllUsers, loginUser };
