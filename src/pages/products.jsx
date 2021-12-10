import React, { useEffect, useState } from 'react'
/* components */
import Header from '../components/header/Header'
import Loader from '../components/loader/Loader'
import Search from '../components/search/Searh'
import Footer from '../components/footer/Footer'
import ProductCard from '../components/Product/productCard/ProductCard'
/* pagination */
import Pagination from '../components/pagination/Pagination'
/* filter */
import Selected from '../components/Product/filters/Selected'
/* error component */
import NoResults from '../components/Errors/NoResults'
/* styles */
import './styles/product.scss'
/* api */
import { list } from '../services/products'



const Product = () => {


    const [info, setInfo] = useState();

    const [load, setLoad] = useState(true);


    /* for the function of search */

    const [inputText, setInputText] = useState("");

    const getProducts = async () => {
        const response = await list();

        setInfo(response.data)
        console.log(response.data)
        /* setInfo(response.hits)
        console.log(response.hits)
        setLoad(false) */
    }

    useEffect(() => {
        getProducts();
    }, []);

    /* const getSearch = e => {
        e.preventDefault();
        setQuery(inputText);
    } */

    /* const filterProducts = (e) => {
        setQuery(e.target.value)
        console.log(e.target.value)
    } */


    /* if (load) {
        return <Loader />
    } */


    return (
        <>
            {/* Header */}

            <Header />

            {/* Items - Product */}
            <div className="container__items">
                <Search
                /* setInputText={setInputText}
                getSearch={getSearch} */
                />
                {/* <form onSubmit={getSeearch} className="search__form">
                    <div className="search__box">
                        <input type="text"  className="search__bar" value={search} onChange={updateSearch} placeholder="Buscar..."/>
                        <button type="submit" className="searh__button"><i class="fas fa-search"></i></button>
                    </div>
                </form> */}

                <div className="product-and-filter">
                    {/* Filter */}
                    <div className="filters">
                        <div className="each-filter">
                            <h2>FILTERS</h2>
                            <Selected
                            /* filterProducts={filterProducts}
                            newvalue={query} */
                            />
                        </div>
                    </div>
                    {/* products list*/}
                    <div className="container__products">
                        {info &&
                            info.map(infos => (
                                <ProductCard
                                    key={infos._id}
                                    name={infos.name}
                                    description={infos.description}
                                    img={infos.images}
                                    id={infos._id}
                                    price={infos.price}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Product