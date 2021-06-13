import React from 'react'

/* style */
import './infoProducts.scss'

const Products = ({title,calories,image}) => {
    return(
        <div class="card">
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            <div className="card-text">
                <span className="date">4 days ago</span>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, temporibus?</p>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="type"><a href="">Mas Informacion</a></div>
                </div>
            </div>
        </div>
    )
}
export default Products;