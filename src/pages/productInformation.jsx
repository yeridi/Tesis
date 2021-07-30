import React from 'react'
/* components */
import SelectProducts from '../components/information-product/SelectProduct'
import Header from '../components/header/Header'
import CardSwiper from '../components/sliders/CardSwiper'

const productInformation = () =>{
    return(
        <>
            <Header/>
            <SelectProducts/>
            <CardSwiper/> 
        </>
    )
}
export default productInformation