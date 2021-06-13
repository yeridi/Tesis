import React from 'react'
/* style */
import './loader.scss'

const Loader = () =>{
    return(
        <div className="loader-container">
            <h2>TRABAJAMOS EN ELLO....</h2>
            <img src="https://alianzadigital.com.ar/wp-content/uploads/2021/02/imagen-desarrollo-web.png" alt="" />
            <div className="loader">Loading...</div>
            <i>Cargando Informacion</i>
        </div>
    )
}
export default Loader