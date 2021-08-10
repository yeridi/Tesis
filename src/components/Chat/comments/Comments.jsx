import React, {useState} from 'react'
import Message from '../message/Message'

import './comments.scss'

import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Comments() {
    return (
        <div className="comments">
            <div className="comments__header">
                <h4>Comentarios</h4>
                <ArrowUpwardIcon className="comment__header__icon"/>
            </div>

            <div className="comments__inputContainer">
                <form>
                    <ChatBubbleIcon/>
                    <input type="text" placeholder="Escribe un comentario ..."/>
                </form>
            </div>

            <Message/>
            <Message/>
            <Message/>
        </div>
    )
}

export default Comments
