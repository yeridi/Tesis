import React from 'react'
/* styles */
import './selectproduct.scss';

const SelectProduct = () => {

    /* slider */
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage() {
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }


    return (
        <div className="card-wrapper">
            <div className="card-information">
                {/* section-images */}
                <div className="product-img">
                    <div className="img-display">
                        <div className="img-showcase">
                            <img src="https://ae01.alicdn.com/kf/He5ed157da2c249d3ba0c8e1f499994f6j/Peluches-adorables-de-Totoro-de-30-70cm-para-ni-os-mu-ecos-de-Personaje-de-Anime.jpg_q50.jpg"
                                alt="product-image" />
                            <img src="https://i.pinimg.com/originals/a5/1c/41/a51c41e1af8675d1f80c2e63ea6c2014.jpg"
                                alt="product-image" />
                            <img src="https://freakonomicon.com/wp-content/uploads/2018/10/peluche-Kaonashi-No-Face.jpg"
                                alt="product-image" />
                            <img src="https://ae01.alicdn.com/kf/H097c10a17f0c42dfa917f8702e9edd90i/Studio-Ghibli-Hayao-Miyazaki-servicio-de-entrega-de-Kiki-negro-JiJi-juguete-de-peluche-Mini-lindo.jpg_Q90.jpg_.webp"
                                alt="product-image" />
                        </div>
                    </div>
                    <div className="img-select">
                        <div className="img-item">
                            <a href="" data-id="1">
                                <img src="https://ae01.alicdn.com/kf/He5ed157da2c249d3ba0c8e1f499994f6j/Peluches-adorables-de-Totoro-de-30-70cm-para-ni-os-mu-ecos-de-Personaje-de-Anime.jpg_q50.jpg"
                                    alt="" />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="" data-id="2">
                                <img src="https://i.pinimg.com/originals/a5/1c/41/a51c41e1af8675d1f80c2e63ea6c2014.jpg"
                                    alt="" />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="" data-id="3">
                                <img src="https://freakonomicon.com/wp-content/uploads/2018/10/peluche-Kaonashi-No-Face.jpg"
                                    alt="" />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="" data-id="4">
                                <img src="https://ae01.alicdn.com/kf/H097c10a17f0c42dfa917f8702e9edd90i/Studio-Ghibli-Hayao-Miyazaki-servicio-de-entrega-de-Kiki-negro-JiJi-juguete-de-peluche-Mini-lindo.jpg_Q90.jpg_.webp"
                                    alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* section-information */}
                <div class="product-content">
                    <div className="product-content-all">

                        <h2 className="product-title">Mi Vecino Totoro la nueva</h2>

                        <div className="product-detail">
                            <div className="name-price-product">
                                <h2>Sobre el Producto </h2>
                                <div className="product-price">
                                    <h2><span>$/. </span>3000</h2>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita earum, nemo
                                maiores est ducimus repellendus ratione voluptates, optio officiis consequatur repudiandae
                                quia dolorum quod.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita earum, nemo
                                maiores est ducimus repellendus ratione voluptates, optio officiis consequatur repudiandae
                                quia dolorum quod.</p>
                            <ul>
                                <li>Categoria: <span> Adorable </span></li>
                                <li>Publicado en: <span> 20/20/20 </span></li>
                                <li>Direccion: <span>Avenida los insurgentes (al fondo a la derecha)</span></li>
                            </ul>
                        </div>
                        <div className="more-information-product">
                            <a href=""><i className="fas fa-comments"></i> Iniciar Converzacion</a>
                            <a href=""><i className="fab fa-google"></i> Visitar Web Oficial</a>
                        </div>
                        <div className="social-links">
                            <p>Informacion del Vendedor</p>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fas fa-phone-alt"></i></a>
                            <a href=""><i className="fab fa-google"></i></a>
                            <a href=""><i className="fab fa-facebook-messenger"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SelectProduct;