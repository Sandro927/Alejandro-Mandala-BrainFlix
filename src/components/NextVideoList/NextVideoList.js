import React from 'react'
import NextVideo from '../NextVideo/NextVideo'
import './NextVideoList.scss'

function NextVideoList(props) {
  return (
    <section className="videos">
      <h5 className="videos__title">NEXT VIDEOS</h5>
      {
        props.videos
          .filter(video => video.id !== props.activeVideoData.id)
          .map(video => <NextVideo key={video.id} video={video}/>)
      }
    </section>
  )
}

export default NextVideoList