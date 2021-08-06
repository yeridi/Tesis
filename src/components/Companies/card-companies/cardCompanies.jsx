import React from 'react'
/* style */
import './cardCompanies.scss';

const cardCompanies = ({ title, img }) => {

    const handleOpenModal = () => {
        const modal_container = document.getElementById('modal_container');
        modal_container.classList.add('show');

        document.getElementById("result-name").innerHTML = title;
        const newImage = document.getElementById("newimage");
        newImage.src = img

        /* document.getElementById("result-name").innerHTML = name; */


    }
    const handleCloseModal = () => {
        const modal_container = document.getElementById('modal_container');
        modal_container.classList.remove('show');
    }

    return (
        <>
            {/* <div class="card-worker wow animate__animated animate__fadeIn animate__slow">
                <div class="header-card-worker">
                    <img src={img} alt="" id="image-business"/>
                    <h4 id="title-business">{title}</h4>
                    <div class="header-more">
                        <button id="open" onClick={handleOpenModal}><i class="far fa-eye"></i></button>
                    </div>
                </div>
                <div class="information-worker">
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa, excepturi quo dolorem quasi laudantium veniam repellendus quaerat quod dicta?</p>
                </div>
                <div class="social-media">
                    <i class="far fa-envelope"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-whatsapp"></i>
                    <i class="far fa-envelope"></i>
                </div>
            </div> */}

            <div class="bussines-card">
                <div class="business-head">
                    <div class="bussines-head-image">
                        <img src={img}/>
                        <div class="business-head-check">
                            <i class="fas fa-check"></i>
                        </div>
                    </div>
                    <h3>{title}</h3>
                    <p>If you need something just call me, xd thats a joke </p>
                </div>
                <div class="bussines-buttons">
                    <button id="open" onClick={handleOpenModal}>More Info</button>
                </div>
                <div class="bussines-about">
                    <div class="each-about-staff">
                        <i class="fas fa-user-tie"></i>
                        <h4>20</h4>
                        <p>Staff</p>
                    </div>
                    <div class="each-about-product">
                        <i class="fas fa-shopping-bag"></i>
                        <h4>7</h4>
                        <p>Products</p>
                    </div>
                    <div class="each-about-another">
                        <i class="fas fa-user-tie"></i>
                        <h4>20</h4>
                        <p>Staff</p>
                    </div>
                </div>
            </div>





            {/* modal */}
            <div class="modal-container" id="modal_container">
                <div class="modal">
                    <div class="container-info-modal">
                        <div className="info-modal-image">
                            <img id="newimage" />
                            <div className="information-bussines-image">
                                <i className="fab fa-whatsapp"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div className="info-image-capa"></div>
                        </div>
                        <div class="modal-bussines">
                            <h1 id="result-name"></h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero autem enim quibusdam quasi corporis alias, sapiente sit quos consequatur? Saepe culpa nam accusamus dolorem fugiat vitae eligendi, recusandae rem dolores facere asperiores quam, ea, ipsam nihil voluptates porro molestiae exercitationem doloribus minima possimus. Laudantium, vitae exercitationem.</p>
                            <button id="close" onClick={handleCloseModal}>Cerrar</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default cardCompanies;