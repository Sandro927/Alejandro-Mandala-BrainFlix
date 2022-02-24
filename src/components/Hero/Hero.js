import React from 'react'
import './Hero.scss'



function Hero(props) {
  return (
    <section className="hero">
        <div className="hero__content">
            <video className="hero__video" controls poster={props.posterImage}>
                <source src={""} type="video/mp4" />
            </video>
        </div>
    </section>
  )
}

export default Hero