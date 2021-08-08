import React from 'react'
/* style */
import './inputoptions.scss'

function InputOptions({Icon, title, onClick}) {
    return (
        <div className="inputOption">
            <Icon/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions
