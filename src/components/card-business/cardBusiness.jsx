import React from 'react'

const cardBusiness = ({title, img}) => {

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
            <div class="card-worker">
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
            </div>
            {/* modal */}
            <div class="modal-container" id="modal_container">
                <div class="modal">
                    <div class="container-info-modal">
                        <div class="modal-bussines">
                            <h1 id="result-name"></h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero autem enim quibusdam quasi corporis alias, sapiente sit quos consequatur? Saepe culpa nam accusamus dolorem fugiat vitae eligendi, recusandae rem dolores facere asperiores quam, ea, ipsam nihil voluptates porro molestiae exercitationem doloribus minima possimus. Laudantium, vitae exercitationem, tenetur vel labore enim voluptatibus eaque doloribus magnam, dolor voluptas quidem explicabo autem beatae? Similique nostrum deserunt nihil sit, voluptatum molestias beatae cumque saepe. Iusto fugiat minus architecto esse, inventore aperiam cupiditate magnam quos!</p>
                        </div>
                        <img id="newimage" />
                    </div>
                    <button id="close" onClick={handleCloseModal}>Cerrar</button>
                </div>
            </div>
        </>
    )
}
export default cardBusiness;