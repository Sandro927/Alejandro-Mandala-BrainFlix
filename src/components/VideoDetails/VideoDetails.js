import React from 'react'
import './VideoDetails.scss'
import ReactTimeAgo from 'react-time-ago'

function VideoDetails({videoData}) {
    
  return (
   <section className="details">
        <div className="details__content"> 
            <div className="details__header">
                <h1 className="details__title">{videoData.title}</h1>
            </div>
            
            <div className="details__stats">
                <div className="details__container">
                    <p className="details__info">By {videoData.channel}</p>
                    <p className="details__info"><ReactTimeAgo date={videoData.timestamp} locale="en-US"/></p>
                </div>
                <div className="details__container">
                    <p className="details__counter">{videoData.views}</p>
                    <p className="details__counter">{videoData.likes}</p>
                </div>
            </div>

            <div className="details__body">
                <p className="details__text">{videoData.description}</p>
            </div>

        </div>
   </section>
  )
}

export default VideoDetails