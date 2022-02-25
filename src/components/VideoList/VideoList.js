import React from 'react'
import Video from '../Video/Video'
import './VideoList.scss'

function VideoList(props) {
  return (
    <section className="videos">
        <div className="videos__header">
            <h6 className="videos__title">NEXT VIDEOS</h6>
        </div>
        <Video videos={props.videos}/>
    </section>
  )
}

export default VideoList