import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import Videos from '../../data/videos.json'
import VideoData from '../../data/video-details.json'


export class LandingPage extends Component {

  state = {
    videos: Videos,
    activeVideo: Videos[0].id,
    activeVideoData: VideoData[0]
  }

  render() {
    return (
      <>
        <Nav />
        <Hero posterImage={this.state.activeVideoData.image}/>
      </>
    )
  }
}

export default LandingPage