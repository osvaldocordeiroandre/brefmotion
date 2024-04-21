import React, { useState } from 'react'
import './projectsPopup.css'

import projectsInfos from '../../Data/dbProjects'
import Popupiframe from '../PopupFrame/Popupiframe'
import ImageLoadingSkelet from './ImageLoadingSkelet'

export default function BoxProjectsPopup({ projectsPopupOpen, setProjectsPopupOpen }) {
    const [openIframe, setOpenIframe] = useState(false)
    const [saveSrfc, setSaveSrc] = useState('')
    const [iframeLoading, setIframeLoading] = useState(false)

    const openPopupFrame = (src) => {
        setOpenIframe(true)
        setSaveSrc(src)
    }

    return (
        <div className='popupContainerMaster'>
            <div>
                <img src="https://i.ibb.co/N6YF90t/Pro-reel.jpg" alt="" />
            </div>
            <div className='containerProjects'>
                {projectsInfos.map((items) => (
                    <div key={items.id} className='allitemsmap' onClick={() => setIframeLoading(true)}>
                        <ImageLoadingSkelet src={items.imagem} alt={items.nome} openPopupFrame={openPopupFrame} hash={items.hash} link={items.link} />
                        <h1 onClick={() => openPopupFrame(items.link)}>{items.nome}</h1>
                        <h4>{items.ano}</h4>
                    </div>
                ))}
            </div>
            <button className='buttonClose' onClick={() => setProjectsPopupOpen(false)}>X</button>

            {openIframe && (
                <Popupiframe saveSrfc={saveSrfc} setOpenIframe={setOpenIframe} setIframeLoading={setIframeLoading} />
            )}

            {iframeLoading && (
                <div className="loadingIframe"></div>
            )}
        </div>
    )
}
