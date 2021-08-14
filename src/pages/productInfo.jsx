import React from 'react'
/* components */
import SelectProduct from '../components/Product/productSelect/SelectProduct'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CardSwiper from '../components/sliders/CardSwiper'

const productInformation = () =>{
    return(
        <>
            <Header/>
            <SelectProduct/>
            <CardSwiper/> 
            <Footer/>
        </>
    )
}
export default productInformation