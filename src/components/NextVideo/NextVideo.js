import React from 'react'
import { Link } from 'react-router-dom'
import './NextVideo.scss'

class NextVideo extends React.Component {

  
render() {
    return (
      <div className="video">
          <div className="video__thumbnail">
            <Link to={`/${this.props.video.id}`}>
              <img className="video__image" src={this.props.video.image} alt='Video Thumbnail'/>
              </Link>
          </div>
          
          <div className="video__details">
              <p className="video__title">{this.props.video.title}</p>
              <p className="video__author">{this.props.video.channel}</p>
          </div>
      </div>
    )
  }
}

export default NextVideo