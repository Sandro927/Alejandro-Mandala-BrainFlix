import React from 'react'
import { Link } from 'react-router-dom'
import './NextVideo.scss'

function NextVideo({ video }) {
  return (
    <div className="video">
        <div className="video__thumbnail">
          <Link to={`/videos/${video.id}`}>
            <img className="video__image" src={video.image} alt='Video Thumbnail'/>
          </Link>
        </div>
        <div className="video__details">
            <p className="video__title">{video.title}</p>
            <p className="video__author">{video.channel}</p>
        </div>
    </div>
  )  
}

export default NextVideo