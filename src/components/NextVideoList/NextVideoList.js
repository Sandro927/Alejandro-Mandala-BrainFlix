import React from 'react'
import NextVideo from '../NextVideo/NextVideo'
import './NextVideoList.scss'

function NextVideoList(props) {
  return (
    <section className="videos">
        <div className="videos__header">
            <h6 className="videos__title">NEXT VIDEOS</h6>
        </div>
        {props.videos
            .filter(video => video.id !== props.activeVideoId)
            .map(video => 
                <NextVideo key={video.id} video={video}/>
            )
        }
    </section>
  )
}

export default NextVideoList