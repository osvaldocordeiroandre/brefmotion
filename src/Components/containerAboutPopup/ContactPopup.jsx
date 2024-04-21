import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

import './ContactPopup.css'

export default function ContactPopup({ setcontactPopupOpen }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSend, setEmailSend] = useState('');
    const [emailSendLoad, setEmailSendLoad] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_jikmn0o', 'template_ixwp8nq', templateParams, 'ShGgmXgK4DaImQltn').
            then((response) => {
                setEmailSend('Email enviado!', response.status)
                setEmailSendLoad(true)
                setInterval(() => {
                    setEmailSend(null)
                    setEmailSendLoad(false)
                }, 20000);
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log('erro', error)
            })

    }

    return (
        <div className='containerAboutPopup'>
            <form action="form" className='formContainer' onSubmit={sendEmail}>
                <div className="inputName">
                    <span>Nome</span>
                    <input type="text" name="" id="" placeholder='Seu nome...' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="inputEmail">
                    <span>E-mail</span>
                    <input type="email" name="" id="" placeholder='Seu endereço de e-mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="textArea">
                    <span>Mensagem</span>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem' value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>

                {emailSendLoad && (
                    <div className="emailSendSpan">
                        <span>{emailSend}</span>
                    </div>
                )}

                <button type="submit" className='aboutButton'>Enviar</button>
            </form>

            <button className='closeAbout' onClick={() => setcontactPopupOpen(false)}>X</button>
        </div>
    )
}
