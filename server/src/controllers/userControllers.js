const { User } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

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
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return null;
    }

    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { user, token };
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

const checkUserExists = async (identifier) => {
  try {
    // Determine if the identifier is an email or a UUID
    const isEmail = identifier.includes('@');
    
    const user = await User.findOne({
      where: isEmail
        ? { email: identifier }
        : { id: identifier }
    });
    
    return user;
  } catch (error) {
    console.error("Error checking user existence: ", error);
    throw error;
  }
};

module.exports = { createUser, getAllUsers, loginUser, checkUserExists };