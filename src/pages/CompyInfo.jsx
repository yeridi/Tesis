import React from 'react'
import CompanyInformation from '../components/Companies/information/CompanyInformation'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProductCompany from '../components/Companies/productsCompany/productCompany'

import styled from 'styled-components'

function CompyInfo() {
    return (
        <div>
            <Header/>
            <CompanyInformation/>
            <ContainerCompany>
                <h1>Dale un Vistazo a los Productos</h1>
            </ContainerCompany>
            
            <ProductCompany/>
            <Footer/>
        </div>
    )
}

const ContainerCompany = styled.div`
    text-align:center;
    margin:3rem auto;
`

export default CompyInfo
