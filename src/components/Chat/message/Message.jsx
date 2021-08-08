import React from 'react'
/* style */
import './message.scss'

/* material ui */
import { Avatar } from '@material-ui/core'

function Message() {
    return (
        <div className="message">
            <div className="message__header">
                <Avatar className="message__user"/>
                <h4>Holiday</h4>
                <p>12/12/!2</p>
            </div>

            <div className="message__body">
                <p>It works</p>{/* 
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg" alt="" /> */}
            </div>
        </div>
    )
}

export default Message
