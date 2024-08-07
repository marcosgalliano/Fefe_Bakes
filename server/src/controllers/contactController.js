const { createTransporter, sendEmail } = require('./utils/emailTransporter');

const sendContactEmail = async (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: email, 
        to: 'Fefebakes@gmail.com',
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
    };

    const transporter = createTransporter();

    try {
        await sendEmail(transporter, mailOptions);
        res.status(200).send('Mensaje enviado con éxito');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al enviar el mensaje');
    }
};

module.exports = {
    sendContactEmail,
};
