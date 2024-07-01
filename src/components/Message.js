import React, { useState, useEffect } from "react";
import "../styles/message.css";

const Message = ({ title, description, heartClicked }) => {

    useEffect(() => {
        const messageContainer = document.querySelector(".message__container");

        const closeMessage = () => {
            // Código para cerrar el mensaje
        };

        // Agregar un listener o realizar acciones cuando heartClicked cambie
        if (heartClicked) {
            // Hacer algo cuando el corazón se clickea
        } else {
            // Hacer algo cuando el corazón se desmarca
        }

        // Limpiar cualquier listener o efecto cuando el componente se desmonte
        return () => {
            // Limpiar acciones o listeners
        };
    }, [heartClicked]);

    const handleClose = () => {
        // Código para manejar el cierre del mensaje
    };

    return (
        <div className={`message__container ${heartClicked ? "" : "message__container-disabled"}`}>
            <div className="message__content">
                <h4 className="message__title">{title}</h4>
                <p className="message__description">{description}</p>
                <div className="message__close__container" onClick={handleClose}>
                    <svg className="message__close__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Message;