import React from 'react'
import './ActiveVideoDetails.scss'
import ActiveVideoInfo from '../ActiveVideoInfo/ActiveVideoInfo'
import ActiveVideoComment from '../ActiveVideoComments/ActiveVideoComments'

function ActiveVideoDetails(props) {
    
  return (
   <section className="details">
        <ActiveVideoInfo videoData={props.videoData}/>
        <ActiveVideoComment videoData={props.videoData}/>
   </section>
  )
}

export default ActiveVideoDetails