import React from 'react'
import './ActiveVideoDetails.scss'
import ActiveVideoInfo from '../ActiveVideoInfo/ActiveVideoInfo'
import ActiveVideoComments from '../ActiveVideoComments/ActiveVideoComments'

function ActiveVideoDetails(props) {
    
  return (
   <section>
        <ActiveVideoInfo activeVideoData={props.activeVideoData}/>
        <ActiveVideoComments activeVideoData={props.activeVideoData}/>
   </section>
  )
}

export default ActiveVideoDetails