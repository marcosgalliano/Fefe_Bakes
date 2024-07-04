const {
  createUser,
  getAllUsers,
  loginUser,
} = require("../controllers/userControllers");

const createUserHandler = async (req, res) => {
  try {
    const data = req.body;
    const newUser = await createUser(data);

    if (!newUser) {
      return res
        .status(202)
        .json({ success: false, message: "No pudo ser creado" });
    } else {
      return res
        .status(201)
        .json({ success: true, message: "Creado", created: newUser });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating user", error });
  }
};

const getUsersHandler = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    if (allUsers.length === 0) {
      return res
        .status(204)
        .json({ success: true, message: "No hay usuarios disponibles" });
    } else {
      return res
        .status(200)
        .json({ success: true, message: "Lista de usuarios", data: allUsers });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching all users", error });
  }
};

const loginUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Credenciales inválidas" });
    } else {
      return res.status(200).json({
        success: true,
        message: "Inicio de sesión exitoso",
        user: user,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error logging in user",
      error: error.message,
    });
  }
};

module.exports = { createUserHandler, getUsersHandler, loginUserHandler };
