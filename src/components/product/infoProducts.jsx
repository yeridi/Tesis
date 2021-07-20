import React from 'react'

/* style */
import './infoProducts.scss'

const Products = ({title,calories,image}) => {
    return(
        <div class="card wow animate__animated animate__fadeIn animate__slow">
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            <div className="card-text">
                <span className="date">4 days ago</span>
                <h2>{title}</h2>
                <p className="product-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis facere assumenda quia earum. Explicabo, iste.</p>
                <span>Price</span>
                <div className="price-card">
                    <p className="price-before">$/.200.00</p>
                    <p>$/.150.00</p>
                </div>
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