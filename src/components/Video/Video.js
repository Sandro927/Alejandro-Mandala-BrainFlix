import React from 'react'
import './Video.scss'

function Video(props) {
  return (
    <div className="video">
        <img className="video__image" src={props.videos[1].image} />
        <div className="video__details">
            <p className="video__title">{props.videos[1].title}</p>
            <p className="video__author">{props.videos[1].channel}</p>
        </div>
    </div>
  )
}

export default Video