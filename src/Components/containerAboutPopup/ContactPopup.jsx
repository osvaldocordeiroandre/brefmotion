import React from 'react'
import './ContactPopup.css'

export default function ContactPopup({setcontactPopupOpen}) {
  return (
    <div className='containerAboutPopup'>
        <form action="form" className='formContainer'>
            <div className="inputName">
                <span>Nome</span>
                <input type="text" name="" id="" placeholder='Seu nome...' />
            </div>

            <div className="inputEmail">
                <span>E-mail</span>
                <input type="email" name="" id="" placeholder='Seu endereço de e-mail' />
            </div>

            <div className="textArea">
                <span>Mensagem</span>
                <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem'></textarea>
            </div>

            <button type="submit" className='aboutButton'>Enviar</button>
        </form>

        <button className='closeAbout' onClick={() => setcontactPopupOpen(false)}>X</button>
    </div>
  )
}
