import React from 'react'
import './NextVideo.scss'

function NextVideo(props) {
  return (
    <div className="video">
        <img className="video__image" src={props.video.image} />
        <div className="video__details">
            <p className="video__title">{props.video.title}</p>
            <p className="video__author">{props.video.channel}</p>
        </div>
    </div>
  )
}

export default NextVideo