import React, { useState, useEffect } from 'react'
/* styles */
import './styles/business.scss'
/* componets */
import Header from '../components/header/Header'
import CardCompanies from '../components/Companies/card-companies/cardCompanies'
import Loader from '../components/loader/Loader'
import Search from '../components/search/Searh'
import Footer from '../components/footer/Footer'

import { list } from '../services/companies'


const Companies = () => {

    const [data, setData] = useState()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        getCompanies();
    }, []);

    const getCompanies = async () => {
        const response = await list()
        console.log(response)
        setData(response)
        setLoad(null)

    }

    /* const getSearch = e => {
        e.preventDefault();
        setQuery(inputText)
    } */


    if (load) {
        return <Loader />
    }
    return (
        <>
            <Header />
            <div class="container-workers">
                <Search
                /* setInputText={setInputText}
                getSearch={getSearch} */
                />
                <div class="each-worker">
                    {data ? (
                        data.map((infos) => (
                            <CardCompanies
                                key={infos._id}
                                name={infos.name}
                                description={infos.description}
                                workers={infos.workers}
                            />
                        ))
                    ) : (
                        <p>No recipes found!</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Companies;