"use client"
import { useModalStore } from '../../../store/modelStore'
import React from 'react'

const PlayButton = ({ playVideoSrc }) => {
    const openVideo = useModalStore((state) => state.openVideo)

    return (
        <>
            <div className="play-button" onClick={openVideo} data-video={playVideoSrc} >
                <button type="button" className="play-btn"></button>
            </div>
        </>
    )
}

export default PlayButton