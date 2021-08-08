import React, { useState } from 'react'
/* style */
import './feed.scss'
/* material ui icon */
import ClearIcon from '@material-ui/icons/Clear';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

/* components */
import InputOptions from '../inputOptions/inputOptions'
import Message from '../message/Message';

function Feed() {

    const [input, setInput] = useState('');

    const handleOpenModal = () => {
        const modal_container = document.getElementById('modal_container');
        modal_container.classList.add('show');
    }
    const handleCloseModal = () => {
        const modal_container = document.getElementById('modal_container');
        modal_container.classList.remove('show');
    }

    /* form__chat */

    

    return (
        <div className="feed">
            <div className="feed__inputContainer">

                {/* modal-form */}
                <button id="open" onClick={handleOpenModal}>More Info</button>

                <div class="modal-container" id="modal_container">
                    <div class="modal">
                        <div className="modal__header">
                            <h3>¿Pregunta?</h3>
                            <ClearIcon id="close" onClick={handleCloseModal} className="iconClose" />
                        </div>
                        <div class="container-info-modal">
                            <p className="modal__message">¿Tienes alguna pregunta?, quiza alguien pueda aclarar tus dudas</p>
                            <form>
                                <textarea value={input} onChange={e => setInput(e.target.value)}></textarea>
                                <div className="feed__options">
                                    {/* input options */}
                                    <InputOptions Icon={InsertPhotoIcon} title="Agregar Imagen" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* commets */}

            <Message/>


        </div>
    )
}

export default Feed
