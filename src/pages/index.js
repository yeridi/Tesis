import React from 'react'
/* style */
import './styles/home.scss'
/* components */
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
/* dark mode */
import { Toggle } from '../components/toggle/Toggle'
import { useDarkMore } from '../components/stylesGeneral/useDarkMode'
import { GlobalStyle, lightTheme, darkTheme } from '../components/stylesGeneral/globalStyles'
import { ThemeProvider } from 'styled-components'


const Index = () => {
    return (
        <>
            <Header />
            <GlobalStyle />

            {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}

            <section className="section__home">
                <div className="text__section wow animate__animated animate__fadeIn">
                    <div className="text__section__information">
                        <h1>This is my firt test web to my Tesis <a href="">Go to Market</a></h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis adipisci, esse ut laudantium suscipit eaque?</p>
                        <button>Hol Mundo</button>
                    </div>
                    <div className="text__section__image">
                        <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="about__us wow animate__animated animate__fadeIn">
                <div className="about__us__container">
                    <div className="about__us__title">
                        <h1>SOMOS UNA AGENCIA DE VENTAS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe ipsam inventore debitis, harum sed?</p>
                    </div>
                    <div className="about__us__services">
                        <div className="about__us__services__each1">
                            <h3>SERVICES</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel animi optio, eius recusandae nesciunt minima! Magni</p>
                            <button>Hi everyone</button>
                        </div>
                        <div className="about__us__services__each2">
                            <h3>MARKETING</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel animi optio, eius recusandae nesciunt</p>
                            <button>Hi everyone</button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="services wow animate__animated animate__fadeIn animate__slow">
                <div className="services__container">
                    <div className="swiper-container mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="swiper__content">
                                    <h3>Venta</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo temporibus pariatur tempora facilis porro officia asperiores quidem nostrum a sed?</p>
                                    <i>Somos los mejores</i>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper__content">
                                    <h3>Marketing</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo temporibus pariatur tempora facilis porro officia asperiores quidem nostrum a sed?</p>
                                    <i>Somos los mejores</i>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper__content">
                                    <h3>Entrega</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo temporibus pariatur tempora facilis porro officia asperiores quidem nostrum a sed?</p>
                                    <i>Somos los mejores</i>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper__content">
                                    <h3>Venta</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo temporibus pariatur tempora facilis porro officia asperiores quidem nostrum a sed?</p>
                                    <i>Somos los mejores</i>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="services__title">
                        <h1>¿Cuales son nuestros Servicios?</h1>
                        <i className="fas fa-people-carry"></i>
                    </div>
                </div>
            </section>


            <section className="wow animate__animated animate__fadeIn animate__slow animate__delay-1s">
                <div className="container__how">
                    <h1>¿CÓMO PUEDO VENDER MI PRODUCTO AQUI?</h1>
                    <a href="">Sigue la Guia</a>
                </div>
            </section>
            <Footer />
        </>
    )

}
export default Index