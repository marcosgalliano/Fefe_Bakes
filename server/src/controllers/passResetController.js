const { checkUserExists } = require("../controllers/userControllers");
const { PasswordRes, User } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createTransporter, sendEmail } = require("./utils/emailTransporter");
require('dotenv').config();

// Controlador para solicitar la recuperación de contraseña
const requestPasswordReset = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await checkUserExists(email);
    if (!user) {
      return res.status(400).json({ success: false, message: "El correo electrónico no está registrado" });
    }

    // Generar token JWT para autenticar al usuario
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    await PasswordRes.create({
      token,
      expirationDate: new Date(Date.now() + 3600000), // 1 hora de expiración
      status: "pending",
      userId: user.id,
    });


    const transporter = createTransporter();
    const mailOptions = {
      from: '"FefeBakes" <Fefebakes@gmail.com>',
      to: email,
      subject: "Recuperación de contraseña",
      text: `Haga clic en el siguiente enlace para restablecer su contraseña: http://localhost:3000/reset/${token}`,
      html: `
        <p>Estimado/a ${user.name},</p>
        <p>Hemos registrado tu solicitud para restablecer tu contraseña. Si no has solicitado esta acción, te recomendamos hacer caso omiso de este mensaje.</p>
        <p>Si, por el contrario, has solicitado recuperar tu contraseña, por favor sigue el enlace a continuación para completar el proceso:</p>
        <p><a href="http://localhost:3000/reset/${token}"><b>Enlace de Restablecimiento de Contraseña</b></a></p>
        <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos.</p>
        <p>Gracias por tu confianza en nuestros servicios.</p>
        <p>Atentamente,</p>
        <p>FefeBakes</p>
      `,
    };

    await sendEmail(transporter, mailOptions);
    res.status(200).json({ success: true, message: "Se ha enviado un correo electrónico para restablecer la contraseña", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

// Controlador para restablecer la contraseña
const resetPassword = async (req, res) => {
  const { token } = req.body;
  const { newPassword } = req.body;

  try {
    // Verificar el token JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const passwordRes = await PasswordRes.findOne({ where: { token, userId: decoded.userId, status: "pending" } });

    if (!passwordRes || passwordRes.expirationDate < new Date()) {
      return res.status(400).json({ success: false, message: "Token inválido o expirado" });
    }

    const user = await User.findByPk(decoded.userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "Usuario no encontrado" });
    }

    // Actualizar la contraseña del usuario
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await user.update({ password: hashedPassword });

    // Marcar la solicitud de restablecimiento de contraseña como completada
    await passwordRes.update({ status: "completed" });

    res.status(200).json({ success: true, message: "Contraseña restablecida correctamente" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

module.exports = { requestPasswordReset, resetPassword };
