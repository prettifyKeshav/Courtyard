import React from 'react'

const VideoWrapper = () => {
    return (
        <>
            <section>
                <div className="project-detail-secB">
                    <div className="banner-wrapper">
                        <video autoPlay muted loop playsInline >
                            <source src="/assets/video/project-detail-secB.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoWrapper