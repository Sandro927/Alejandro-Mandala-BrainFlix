import React, { Component } from 'react'
import VideoHero from '../VideoHero/VideoHero'
import ActiveVideoDetails from '../ActiveVideoDetails/ActiveVideoDetails'
import NextVideoList from '../NextVideoList/NextVideoList'
import './VideoPlayer.scss'
import axios from 'axios';

const API_KEY = "a10e75f8-75fb-4de7-857f-8aa90025dc69";
export class VideoPlayer extends Component {

  state = {
    videos: [],
    activeVideoData: null
  }

  componentDidMount() {
    axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)
    .then((response) => {
      this.setState({
        videos: response.data
      }, this.initializeActiveVideo)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  initializeActiveVideo() {
    let { videoId } = this.props.match.params
    if (!videoId) {
      videoId = '84e96018-4022-434e-80bf-000ce4cd12b8'
    }
    if(this.state.videos.find(video => video.id === videoId)) {
      this.fetchVideoData(videoId)
    } 
  }

  fetchVideoData = (id) => {
    axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`)
      .then((response) => {
        response.data.comments.sort((a,b) => b.timestamp - a.timestamp)
        this.setState({
          activeVideoData: response.data
        })
      })
      .catch((error) => {
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId ) {
      this.initializeActiveVideo();
      window.scrollTo(0, 0);
    }
  }


  render() {
    return (
      <>
        {this.state.activeVideoData && 
        <VideoHero posterImage={this.state.activeVideoData.image}/> }
         {this.state.activeVideoData &&
        <div className="content">
          <ActiveVideoDetails activeVideoData={this.state.activeVideoData} fetchVideoData={this.fetchVideoData}/>
          <NextVideoList videos={this.state.videos} activeVideoData={this.state.activeVideoData}/>
        </div>}
      </>
    )
  }
}

export default VideoPlayer