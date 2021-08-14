import React from 'react'
/* style */
import './styles/home.scss'
/* components */
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import SwiperHome from '../components/sliders/SwiperHome'
/* images */

import workingteam from '../images/workingteam.png'
import community from '../images/community.svg'

/* links */
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <Header />

            <section className="section__home">
                <div className="text__section wow animate__animated animate__fadeIn">
                    <div className="text__section__information">
                        <h1>Te Espera Una Gran Comunidad</h1>
                        <p>Aqui puedes encontrar productos de ventilacion para tu casa y si tienes alguna pregunta con respecto al tema ingresa a nuestra comunidad.</p>
                        <button>Ver Productos</button>
                    </div>
                    <div className="text__section__image">
                        <img src={workingteam} alt="" />
                    </div>
                </div>
            </section>

            <section className="about__us wow animate__animated animate__fadeIn">
                <div className="about__us__container">
                    <div className="about__us__title">
                        <h1>UN SERVICIO GRATUITO Y FACIL DE USAR</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe ipsam inventore debitis, harum sed?</p>
                    </div>
                    <div className="about__us__services">
                        <div className="about__us__services__each1">
                            <h3>PRODUCTOS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel animi optio, eius recusandae nesciunt minima! Magni</p>
                            <button>Hi everyone</button>
                        </div>
                        <div className="about__us__services__each2">
                            <h3>EMPRESAS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel animi optio, eius recusandae nesciunt</p>
                            <button>Hi everyone</button>
                        </div>
                    </div>
                </div>

                <div class="custom-shape-divider-bottom-1628897114">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>

            <div className="community">
                <div className="community__container">
                    <div className="community__leftSection">
                        <img src={community} />
                    </div>
                    <div className="community__rightSection">
                        <h2>Unete a Nuestra Comunidad</h2>
                        <Link to="/login" className="link__login">Conocer Comunidad</Link>
                    </div>
                </div>

            </div>


            <section className="services wow animate__animated animate__fadeIn animate__slow">

                <div class="custom-shape-divider-bottom-1628735807">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div className="services__container">
                    {/* swiper */}
                    <SwiperHome />

                    <div className="services__title">
                        <h1>¿Que puedo hacer en este sitio web?</h1>
                        <i className="fas fa-people-carry"></i>
                    </div>
                </div>
            </section>


            <section className="wow how animate__animated animate__fadeIn animate__slow animate__delay-1s">
                <h1 className="how__title">PREGUNTAS FRECUENTES</h1>
                <div className="container__how__all">
                    <div className="container__how">
                        <h1>¿CÓMO PUEDO VENDER MI PRODUCTO AQUI?</h1>
                        <a href="">Sigue la Guia</a>
                    </div>
                    <div className="container__how">
                        <a href="">Servicios</a>
                        <h1>¿CÓMO CONTRATO ALGUN SERVICIO?</h1>
                    </div>
                    <div className="container__how">
                        <h1>SOBRE LOS PRODUCTOS Y LOS SERVICIOS DE LA APP</h1>
                        <a href="">Sigue la Guia</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )

}
export default Index