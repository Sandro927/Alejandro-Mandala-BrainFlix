import React from 'react'
import NextVideo from '../NextVideo/NextVideo'
import './NextVideoList.scss'

class NextVideoList extends React.Component {

  render () {
    return (
      <section className="videos">
          <div className="videos__header">
              <h6 className="videos__title">NEXT VIDEOS</h6>
          </div>
          {this.props.videos
              .filter(video => video.id !== this.props.activeVideoData.id)
              .map(video => 
                  <NextVideo key={video.id} video={video} changeActiveVideo={this.props.changeActiveVideo}/>
              )
          }
      </section>
    )
  }
}

export default NextVideoList