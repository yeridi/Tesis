import React from 'react'
/* style  */
import './swiperHomer.scss'
/* swiper */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination]);


function SwiperHome() {
    return (
        <Swiper direction={'vertical'} pagination={{"clickable": true}} className="mySwiper">
            <SwiperSlide>
                <h3>Publicar productos</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti totam obcaecati officiis! Assumenda, voluptatum.</p>
                <button>Ver productos</button>
            </SwiperSlide>
            <SwiperSlide>
                <h3>Hablar en la comunidad</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quisquam enim ad natus vel doloremque soluta praesentium corrupti aperiam facere?</p>
                <button>Ingresar a la Comunidad</button>
            </SwiperSlide>
            <SwiperSlide>
                <h3>Contratar servicios</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur eos laborum suscipit necessitatibus inventore. Eos molestias nisi dolorum amet cupiditate ab! Mollitia, neque.</p>
                <button>Conoce Empresas</button>
            </SwiperSlide>
            <SwiperSlide>
                <h3>Descarga Nuestra App</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, consectetur ullam. Perspiciatis!</p>
                <button>Descargar</button>
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperHome
