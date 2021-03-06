import React from 'react'
import './VideoHero.scss'

function VideoHero({posterImage}) {
  return (
    <section className="hero">
        <div className="hero__content">
            <video className="hero__video" controls poster={posterImage}>
                <source src={""} type="video/mp4" />
            </video>
        </div>
    </section>
  )
}

export default VideoHero