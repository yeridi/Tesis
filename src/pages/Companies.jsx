import React, { useState, useEffect } from 'react'
/* styles */
import './styles/business.scss'
/* componets */
import Header from '../components/header/Header'
import CardCompanies from '../components/Companies/card-companies/cardCompanies'
import Loader from '../components/loader/Loader'
import Search from '../components/search/Searh'
import Footer from '../components/footer/Footer'


const Companies = () => {
    const APP_ID = '659c02d4';
    const APP_KEY = '0df9fcf9f827f56c4e5f94f6ba100781';

    const [info, setInfo] = useState([]);
    const [query, setQuery] = useState('chicken');
    const [load, setLoad] = useState(true);

    /* searh component */
    const [inputText, setInputText] = useState("");

    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(() => {
        getRecepies();
    }, [query]);

    const getRecepies = async () => {
        const response = await fetch(exampleReq);
        const data = await response.json();
        setInfo(data.hits);
        console.log(data.hits)
        setLoad(false);
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(inputText)
    }


    if (load) {
        return <Loader />
    }
    return (
        <>
            <Header />
            <div class="container-workers">
                <Search
                    setInputText={setInputText}
                    getSearch={getSearch}
                />
                <div class="each-worker">
                    {info.length ? (
                        info.map((infos) => (
                            <CardCompanies
                                key={infos.recipe.label}
                                title={infos.recipe.label}
                                img={infos.recipe.image}
                            />
                        ))
                    ) : (
                        <p>No recipes found!</p>
                    )}
                    {/* {info == "" ? (
                        <p>Texto a mostrar si no hay resultados de la API</p>
                    ) : (
                        info.map(infos => (
                            <CardBusiness
                                key={infos.recipe.label}
                                title={infos.recipe.label}
                                img={infos.recipe.image}
                            />
                        ))
                    )
                    } */}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Companies;