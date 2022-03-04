import React from 'react'
import { Link } from 'react-router-dom'
import './NextVideo.scss'

function NextVideo(props) {
  return (
    <div className="video">
        <div className="video__thumbnail">
          <Link to={`/${props.video.id}`}>
            <img className="video__image" src={props.video.image} alt='Video Thumbnail'/>
            </Link>
        </div>
        <div className="video__details">
            <p className="video__title">{props.video.title}</p>
            <p className="video__author">{props.video.channel}</p>
        </div>
    </div>
  )  
}

export default NextVideo