import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="footer__container wow animate__animated animate__fadeIn animate__slow">
                <p>Politicas de Privacidad | Terminos de Uso</p>
                <p>COPYRIGHT &copy; 2021 realizado por Yeridi y Blanco</p>
                <div className="footer__social__media">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-whatsapp"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </footer>
    )
}
export default Footer