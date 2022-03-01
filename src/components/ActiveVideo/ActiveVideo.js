import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import VideoHero from '../VideoHero/VideoHero'
import ActiveVideoDetails from '../ActiveVideoDetails/ActiveVideoDetails'
import NextVideoList from '../NextVideoList/NextVideoList'
import Videos from '../../data/videos.json'
import VideoData from '../../data/video-details.json'
import './ActiveVideo.scss'
import axios from 'axios';

const API_KEY = "a10e75f8-75fb-4de7-857f-8aa90025dc69";

export class ActiveVideo extends Component {

  state = {
    videos: [],
    videoData: VideoData,
    activeVideoData: VideoData[0],
  }

  componentDidMount() {
    axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)
    .then((response) => {
      this.setState({
        videos: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  changeActiveVideo = (id) => {
    this.setState({
      activeVideoData: this.state.videoData.find(video => video.id === id)
    })
  }

  render() {
    return (
      <>
        <Nav />
        <VideoHero posterImage={this.state.activeVideoData.image}/>
        <div className="content">
          <ActiveVideoDetails activeVideoData={this.state.activeVideoData}/>
          <NextVideoList videos={this.state.videos} activeVideoData={this.state.activeVideoData} changeActiveVideo={this.changeActiveVideo}/>
        </div>
        
      </>
    )
  }
}

export default ActiveVideo