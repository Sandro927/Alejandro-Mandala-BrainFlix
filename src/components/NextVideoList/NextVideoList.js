import React from 'react'
import NextVideo from '../NextVideo/NextVideo'
import './NextVideoList.scss'

function NextVideoList({videos, activeVideoData}) {
  return (
    <section className="videos">
      <h5 className="videos__title">NEXT VIDEOS</h5>
      {
        videos
          .filter(video => video.id !== activeVideoData.id)
          .map(video => <NextVideo key={video.id} video={video}/>)
      }
    </section>
  )
}

export default NextVideoList