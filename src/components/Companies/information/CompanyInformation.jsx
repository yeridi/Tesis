import React from 'react'

/* styles */
import './companyInformation.scss'
/* icons */
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import ChatIcon from '@material-ui/icons/Chat';
function CompanyInformation() {
    return (
        <div className="company__information">
            <div className="company__information__container">
                <img src="https://blog.grupo-pya.com/wp-content/uploads/2016/11/Recursos-definici%C3%B3n.jpg" alt="" />
                <div className="company__information__text">
                    <h2>Asociacion privada Don Ramon Cuarto Call Of Duty Familiares nomas :D</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi porro dolorem eum debitis rem vero tenetur consectetur? Vitae consequatur nulla quos beatae quasi suscipit omnis, magni, fugit nisi quidem eveniet dolor, delectus ex magnam commodi esse optio libero perferendis est totam! Nostrum laboriosam reiciendis, error optio facere, aspernatur iure eum minus neque obcaecati quibusdam qui laudantium quam laborum sed, porro pariatur unde accusamus rem est non temporibus ipsa vero ea. Minima quibusdam nisi dolor inventore aliquam dicta ducimus error!</p>
                    <div className="company-social-medias">
                        <button>Iniciar Converzacion <ChatIcon/></button>
                        <FacebookIcon className="icon-social"/>
                        <WhatsAppIcon className="icon-social"/>
                        <LinkedInIcon className="icon-social"/>
                        <InstagramIcon className="icon-social"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyInformation
