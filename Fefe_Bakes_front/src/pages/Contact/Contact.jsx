import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && email && phone && message) {
            try {                            // Cambiarlo por nuestro endpoint
                const response = await fetch('https://api.emailservice.com/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        to: 'usuario123@gmail.com', // Poner el email de Fefe
                        subject: 'Nuevo mensaje de contacto',
                        text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
                    }),
                });

                if (response.ok) {
                    alert('Mensaje enviado con éxito');
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                } else {
                    alert('Error al enviar el mensaje');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error al enviar el mensaje');
            }
        } else {
            console.log('Mostrar la Alerta Aca');
        }
    };

    return (
        <div className="contact-form-container">
            <h1>Contacto</h1>
            <p className='p-contact'> ¡Enviame un mensaje! </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder=" "
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="name" className={name ? "filled" : ""}>
                        Nombre
                    </label>
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder=" "
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="email" className={email ? "filled" : ""}>
                        Email
                    </label>
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        placeholder=" "
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <label htmlFor="phone" className={phone ? "filled" : ""}>
                        Teléfono
                    </label>
                </div>
                <div className="form-group">
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        placeholder=" "
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <label htmlFor="message" className={message ? "filled" : ""}>
                        Mensaje
                    </label>
                </div>
                <div className="submit-button">
                    <button type="submit" className="btn">
                        Enviar Mensaje
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
