import React from 'react'
import './ActiveVideoDetails.scss'
import ActiveVideoInfo from '../ActiveVideoInfo/ActiveVideoInfo'
import ActiveVideoComments from '../ActiveVideoComments/ActiveVideoComments'

function ActiveVideoDetails(props) {
    
  return (
   <section>
        <ActiveVideoInfo videoData={props.videoData}/>
        <ActiveVideoComments videoData={props.videoData}/>
   </section>
  )
}

export default ActiveVideoDetails