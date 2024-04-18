import React, { useState } from 'react'
import './PopuoIframe.css'

export default function Popupiframe({saveSrfc, setOpenIframe, setIframeLoading}) {
    const closeIframe = () => {
        setOpenIframe(false)
        setIframeLoading(false)
        saveSrfc('')
    }
    return (
        <div className='IframeContainer'>
            <iframe src={saveSrfc} frameborder="0"></iframe>
            <button onClick={closeIframe}>X</button>
        </div>
    )
}
