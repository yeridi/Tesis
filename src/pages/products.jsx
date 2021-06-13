import React, { useEffect, useState }from 'react'
import Products from '../components/product/infoProducts'
import Header from '../components/header/Header'
import Loader from '../components/loader/Loader'


/* styles */

import './styles/product.scss'

const Product =() =>{
    const APP_ID = '659c02d4';
    const APP_KEY = '0df9fcf9f827f56c4e5f94f6ba100781';

    const [info, setInfo] = useState([]);
    const [search, setSearch]= useState('');
    const [query, setQuery] = useState('chicken');
    const [load, setLoad] = useState(true);

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

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSeearch = e =>{
        e.preventDefault();
        setQuery(search);
    }
    if(load){
        return <Loader/>
    }
    return(
        <>
            <Header/>
            <div className="container__items">
                <form onSubmit={getSeearch} className="search__form">
                    <div className="search__box">
                        <input type="text"  className="search__bar" value={search} onChange={updateSearch} placeholder="Buscar..."/>
                        <button type="submit" className="searh__button"><i class="fas fa-search"></i></button>
                    </div>
                </form>
                <div className="container__products">
                    {info.map(infos =>(
                        <Products 
                            key={infos.recipe.label}
                            title={infos.recipe.label} 
                            calories={infos.recipe.calories} 
                            image={infos.recipe.image}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Product