import React from 'react'
import './NextVideo.scss'

class NextVideo extends React.Component {

  handleClick = () => {
    this.props.changeActiveVideo(this.props.video.id);
  }
  
render() {
    return (
      <div className="video" onClick={this.handleClick}>
          <img className="video__image" src={this.props.video.image} />
          <div className="video__details">
              <p className="video__title">{this.props.video.title}</p>
              <p className="video__author">{this.props.video.channel}</p>
          </div>
      </div>
    )
  }
}

export default NextVideo