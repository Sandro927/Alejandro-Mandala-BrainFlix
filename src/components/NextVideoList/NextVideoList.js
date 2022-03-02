import React from 'react'
import NextVideo from '../NextVideo/NextVideo'
import { Link } from 'react-router-dom'
import './NextVideoList.scss'

class NextVideoList extends React.Component {
  render () {
    return (
      <section className="videos">
        <h5 className="videos__title">NEXT VIDEOS</h5>
          {this.props.videos
            .filter(video => video.id !== this.props.activeVideoData.id)
            .map(video => 
              <Link to={`/${video.id}`} key={video.id}>
                <NextVideo video={video}/>
              </Link>)}
      </section>
    )
  }
}

export default NextVideoList