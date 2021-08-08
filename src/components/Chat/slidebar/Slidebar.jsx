import React from 'react'
/* styles */
import './slidebar.scss'
/* material ui */
import { Avatar } from '@material-ui/core'

function Slidebar() {
    return (
        <div className="slidebar">
            <div className="slidebar__top">
                <img src="https://www.solofondos.com/wp-content/uploads/2016/03/outrun-vaporwave-hd-wallpaper-preview.jpg" alt="" />
                <Avatar className="slidebar__avatar"></Avatar>
                <h4>Holiday</h4>
                <p>Holiday@gmail.com</p>
            </div>
            <div className="slidebar__stats">
                <div className="slidebar__stat">
                    <p>Tipo de Usuario</p>
                    <p>Comun</p>
                </div>
            </div>
        </div>
    )
}

export default Slidebar
