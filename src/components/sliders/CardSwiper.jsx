import React, {useEffect, useState} from 'react'
/* components */
import ProductCard from '../Product/productCard/ProductCard';
import Loader from '../loader/Loader'

/* swiper dependencies*/
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';


/* style component */
import './cardswiper.scss'

// install Swiper modules
SwiperCore.use([Navigation]);


const CardSwiper = () => {

    const [info, setInfo] = useState([]);
    const [query,setQuery] = useState('orange');
    const [loader, setLoader] = useState(true);

    const APP_ID =  '659c02d4';
    const APP_KEY = '0df9fcf9f827f56c4e5f94f6ba100781';

    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


    useEffect(()=>{
        getRecepies();
    },[query])

    const getRecepies = async()=>{
        const result =await  fetch(exampleReq)
        const data = await result.json();
        setInfo(data.hits)
        setLoader(false)
    }

    if (loader){
        return <Loader/>
    }

    return (
        <div className="container-swiper-card">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                /* responsive */
                breakpoints={{
                    // when window width is >= 640px
                    200: {
                      slidesPerView: 1
                    },
                    // when window width is >= 768px
                    600: {
                      slidesPerView: 2
                    },
                    900:{
                        slidesPerView: 3
                    }
                }}
            >
                {info.map(infos =>(
                    <SwiperSlide>
                        <ProductCard
                            title={infos.recipe.label}
                            image={infos.recipe.image}
                        />
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    )
}
export default CardSwiper;