import React, {useEffect, useState} from 'react'
import ProductCard from '../../Product/productCard/ProductCard'

import styled from 'styled-components'

function ProductCompany() {
    const APP_ID = '659c02d4';
    const APP_KEY = '0df9fcf9f827f56c4e5f94f6ba100781';

    const [info, setInfo] = useState([])
    const [query,setQuery] = useState('chicken');

    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(()=>{
        getProducts()
    },[query])

    const getProducts = async() =>{
        const response = await fetch(exampleReq);
        const data = await response.json()
        setInfo(data.hits)
    }

    return (
        <ProductCompanyContainer>
            {
                info.map(productos=>(
                    <ProductCard 
                        title={productos.recipe.label} 
                        image={productos.recipe.image}
                    />
                ))
            }
        </ProductCompanyContainer>
    )
}

const ProductCompanyContainer = styled.div`
    width:80%;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    align-items:center;
    @media screen and (max-width: 900px) {
        width:90%;
        grid-template-columns:repeat(2,1fr);
    }
    @media screen and (max-width: 650px){
        grid-template-columns:repeat(1,1fr);
    }
`

export default ProductCompany
