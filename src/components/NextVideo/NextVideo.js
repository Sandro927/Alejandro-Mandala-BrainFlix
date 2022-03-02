import React from 'react'
import './NextVideo.scss'

class NextVideo extends React.Component {

  
render() {
    return (
      <div className="video">
          <div className="video__thumbnail">
            <img className="video__image" src={this.props.video.image} />
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