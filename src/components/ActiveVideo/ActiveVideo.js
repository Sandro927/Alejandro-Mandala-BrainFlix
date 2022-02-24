import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import VideoDetails from '../VideoDetails/VideoDetails'
import Videos from '../../data/videos.json'
import VideoData from '../../data/video-details.json'

export class ActiveVideo extends Component {

  state = {
    videos: Videos,
    currentVideoData: VideoData[0],
    activeVideoId: Videos[0].id
  }

  render() {

    return (
      <>
        <Nav />
        <Hero posterImage={this.state.currentVideoData.image}/>
        <VideoDetails videoData={this.state.currentVideoData}/>
      </>
    )
  }
}

export default ActiveVideo