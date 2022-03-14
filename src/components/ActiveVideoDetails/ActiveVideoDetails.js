import React from 'react'
import './ActiveVideoDetails.scss'
import ActiveVideoInfo from '../ActiveVideoInfo/ActiveVideoInfo'
import ActiveVideoComments from '../ActiveVideoComments/ActiveVideoComments'

function ActiveVideoDetails({activeVideoData, fetchVideoData}) {
  return (
   <section className="videoSection">
        <ActiveVideoInfo activeVideoData={activeVideoData} fetchVideoData={fetchVideoData}/>
        <ActiveVideoComments activeVideoData={activeVideoData} fetchVideoData={fetchVideoData}/>
   </section>
  )
}

export default ActiveVideoDetails