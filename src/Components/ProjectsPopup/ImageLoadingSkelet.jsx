import React, { useEffect, useState } from 'react'

import { Blurhash } from 'react-blurhash'

export default function ImageLoadingSkelet({ src, openPopupFrame, alt, hash, link }) {
    const [imageLoad, setImageLoad] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoad(true)
        }
        img.src = src
    }, [src])

    return (
        <>
            {!imageLoad ? <Blurhash hash={hash} width={300} height={265} resolutionX={31} resolutionY={31} punch={1} /> : 
            (<img src={src} alt={alt} width={'100%'} height={'100%'} onClick={() => openPopupFrame(link)} />)}
        </>
    )
}
