import React from 'react'
/* style */
import './error.scss';
const NoResults = () =>{
    return(
        <div className="error-api">
            <img src="https://i.pinimg.com/originals/3d/d5/54/3dd5541aca6d2762d0f35f14df1f48fb.png" alt="" className="image-error-api"/>
            <p>Al parecer no tenemos ese producto :(</p>
        </div>
    )
}
export default NoResults