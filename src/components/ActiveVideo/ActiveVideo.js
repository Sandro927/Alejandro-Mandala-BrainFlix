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
    currentVideoData: VideoData[0],
    activeVideoId: Videos[0].id
  }

  changeActiveVideo = (id) => {
    this.setState({
      activeVideoId: id,
      // currentVideoData: VideoData.find(video => video.id === this.state.activeVideoId).id
    })
    console.log(VideoData.find(video => video.id === this.state.activeVideoId).id)
  }

  render() {

    return (
      <>
        <Nav />
        <VideoHero posterImage={this.state.currentVideoData.image}/>
        <div className="container">
          <ActiveVideoDetails videoData={this.state.currentVideoData}/>
          <NextVideoList videos={this.state.videos} activeVideoId={this.state.activeVideoId} changeActiveVideo={this.changeActiveVideo}/>
        </div>
        
      </>
    )
  }
}

export default ActiveVideo