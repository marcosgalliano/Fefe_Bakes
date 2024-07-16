import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-header'>
                <h2>Fefe Bakes</h2>
                <div className='icons'>
                    <ion-icon className="icon" name="logo-instagram"></ion-icon>
                    <ion-icon className="icon"  name="mail-outline"></ion-icon>
                    <ion-icon className="icon"  name="logo-whatsapp"></ion-icon>
                </div>
                </div>
                <hr />
                <div className='faq'>
                    <p> Preguntas frecuentes Aqui</p>
                </div>
                <div className='rights'>
                    2024 Fefe Bakes. Todos los derechos reservados.
                </div>
        </div>
    )
}

export default Footer;