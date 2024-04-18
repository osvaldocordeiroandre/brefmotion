import React from 'react'
import './AboutPopup.css'

import LogoIcon from '../../assets/Logo/LogoIconWhite.png'

export default function AboutPopup({setAboutPopupOpen}) {
  return (
    <div className='containerAbout'>
        <img src={LogoIcon} alt="" />

        <div className='textContainer'>
          <div className='afterLine'>
            <span>Hello, my name is Bryan L.Cordeiro, 2D animator.</span>
            <span >Get in touch and let me turn your ideas into a beautiful project.</span>
          </div>
          <div className='ptText'>
            <span>Olá, meu nome é Bryan L.Cordeiro, animador 2D.</span>
            <span>Entre em contato e deixe que eu transforme suas ideias em um belo projeto</span>
          </div>
        </div>

        <button className='closeAabout' onClick={() => setAboutPopupOpen(false)}>X</button>
    </div>
  )
}
