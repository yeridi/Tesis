import React from 'react'

import styled from 'styled-components'
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
            <ContainerProduct>
                <h2>Productos Recomendados</h2>
            </ContainerProduct>
            <CardSwiper/> 
            <Footer/>
        </>
    )
}
const ContainerProduct = styled.div`
    text-align:center;
`


export default productInformation