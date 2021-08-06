import React from 'react'
/* components */
import SelectProduct from '../components/Product/productSelect/SelectProduct'
import Header from '../components/header/Header'
import CardSwiper from '../components/sliders/CardSwiper'

const productInformation = () =>{
    return(
        <>
            <Header/>
            <SelectProduct/>
            <CardSwiper/> 
        </>
    )
}
export default productInformation