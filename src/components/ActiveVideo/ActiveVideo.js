import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import VideoHero from '../VideoHero/VideoHero'
import ActiveVideoDetails from '../ActiveVideoDetails/ActiveVideoDetails'
import NextVideoList from '../NextVideoList/NextVideoList'
import Videos from '../../data/videos.json'
import VideoData from '../../data/video-details.json'
import './ActiveVideo.scss'

export class ActiveVideo extends Component {

  state = {
    videos: Videos,
    videoData: VideoData,
    activeVideoData: VideoData[0],
  }

  changeActiveVideo = (id) => {
    this.setState({
      activeVideoData: this.state.videoData.find(video => video.id === id)
    })
    console.log(this.state.activeVideoData)
  }

  render() {
    return (
      <>
        <Nav />
        <VideoHero posterImage={this.state.activeVideoData.image}/>
        <div className="container">
          <ActiveVideoDetails activeVideoData={this.state.activeVideoData}/>
          <NextVideoList videos={this.state.videos} activeVideoData={this.state.activeVideoData} changeActiveVideo={this.changeActiveVideo}/>
        </div>
        
      </>
    )
  }
}

export default ActiveVideo