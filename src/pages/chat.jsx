import React from 'react'
/* components */
import Slidebar from '../components/Chat/slidebar/Slidebar'
import Feed from '../components/Chat/feed/Feed'
/* styles */
import './styles/chat.scss'

function chat() {
    return (
        <div className="chat">
            <div className="chat__body">
                {/* slidebar */}
                <Slidebar/>
                {/* feed */}
                <Feed/>
            </div>
        </div>
    )
}

export default chat
