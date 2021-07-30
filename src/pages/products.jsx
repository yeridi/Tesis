import React, { useEffect, useState }from 'react'
/* components */
import Products from '../components/product/infoProducts'
import Header from '../components/header/Header'
import Loader from '../components/loader/Loader'
import Search from '../components/search/Searh'
import Footer from '../components/footer/Footer'
import Selected from '../components/filters/Selected'
/* pagination */
import Pagination from '../components/pagination/Pagination'

/* error component */
import NoResults from '../components/Errors/NoResults'
/* styles */
import './styles/product.scss'


const Product =() =>{

    const APP_ID = '659c02d4';

    const APP_KEY = '0df9fcf9f827f56c4e5f94f6ba100781';

    const [info, setInfo] = useState([]);
    const [query, setQuery] = useState("chicken");
    const [load, setLoad] = useState(true);

    /* pagination state */
    

    /* for the function of search */

    const [inputText, setInputText] = useState("");

    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
    useEffect(() => {
        getRecepies();
    }, [query]);

    const getRecepies = async() =>{
        try {
            const response = await fetch(exampleReq);
            const data = await response.json();
            setInfo(data.hits);
            setLoad(false)
        }catch (error){
            /* more code */
        }
    }

    const getSearch = e =>{
        e.preventDefault();
        setQuery(inputText);
    }

    /* filters */
    const filterProducts = (e) =>{
        setQuery(e.target.value)
        console.log(e.target.value)
    }

    /* loader */

    if(load){
        return <Loader/>
    }

    /* paginations */


    return(
        <>
            {/* Header */}

            <Header/>

            {/* Items - Product */}
            <div className="container__items">
                <Search
                    setInputText={setInputText}
                    getSearch={getSearch}
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
                                filterProducts={filterProducts}
                                newvalue={query}
                            />
                        </div>
                    </div>
                    {/* products list*/}
                    <div className="container__products">
                        {info == "" ? (
                            <NoResults/>
                            ) : (
                                info.map(infos =>(
                                    <Products 
                                        key={infos.recipe.label}
                                        title={infos.recipe.label} 
                                        calories={infos.recipe.calories} 
                                        image={infos.recipe.image}
                                    />
                                ))
                            )
                        } 
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Product