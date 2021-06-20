import React, {useState, useEffect}from 'react'
/* styles */
import './styles/business.scss'
/* componets */
import Header from '../components/header/Header'
import CardBusiness from '../components/card-business/cardBusiness'

const Business = () => {
    const APP_ID = '659c02d4';
    const APP_KEY = '0df9fcf9f827f56c4e5f94f6ba100781';

    const [info, setInfo] = useState([]);
    const [search, setSearch]= useState('');
    const [query, setQuery] = useState('chicken');

    const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(() => {
        getBusiness();
    }, [query]);

    const getBusiness = async() =>{
        try{
            const receive = await fetch(exampleReq);
            const data = await receive.json();
            setInfo(data.hits);
            console.log(data.hits)
        }catch(error){
            /* code to error */
        }

    }
    return (
        <>
            <Header />
            <div class="container-workers">
                <h1>Busca a un posible compañero</h1>
                <input type="text" />
                <div class="each-worker">
                    {info.map(infos =>(
                        <CardBusiness
                            title={infos.recipe.label}
                            img={infos.recipe.image}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Business;