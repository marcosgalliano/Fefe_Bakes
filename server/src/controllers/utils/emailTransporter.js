const nodemailer = require("nodemailer");

function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "Fefebakes@gmail.com",
      pass: "pklj qtyi uqih qsum",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

const sendEmail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Error al enviar el correo electrónico");
  }
};

module.exports = { createTransporter, sendEmail };
