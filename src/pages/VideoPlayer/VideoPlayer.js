import React, { Component } from 'react'
import VideoHero from '../../components/VideoHero/VideoHero'
import ActiveVideoDetails from '../../components/ActiveVideoDetails/ActiveVideoDetails'
import NextVideoList from '../../components/NextVideoList/NextVideoList'
import './VideoPlayer.scss'
import axios from 'axios';

export class VideoPlayer extends Component {

  state = {
    videos: [],
    activeVideoData: null
  }

  componentDidMount() {
    axios.get('http://localhost:8080/videos')
      .then((response) => {
        this.setState({ videos: response.data }, this.initializeActiveVideo)
      })
      .catch((error) => {
        alert('error connecting to the database');
        this.props.history.push("./")
      });
  }

  initializeActiveVideo = () => {
    let { id } = this.props.match.params;
    if (!id) {
      id = '84e96018-4022-434e-80bf-000ce4cd12b8';
    }
    if (this.state.videos.find(video => video.id === id)) {
      this.fetchActiveVideoData(id);
    } else {
      this.props.history.push("./");
    }
  }

  fetchActiveVideoData = (id) => {
    axios.get(`http://localhost:8080/videos/${id}`)
      .then((response) => {
        response.data.comments.sort((a, b) => b.timestamp - a.timestamp);
        this.setState({
          activeVideoData: response.data
        })
      })
      .catch((error) => {
      });
  }

  componentDidUpdate(prevProps) {
    const currId = this.props.match.params.id;
    const prevId = prevProps.match.params.id;
    if (prevId !== currId) {
      this.initializeActiveVideo();
      console.log(this.state.activeVideoData);
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <>
        {this.state.activeVideoData &&
          <VideoHero posterImage={this.state.activeVideoData.image} />}
        {this.state.activeVideoData &&
          <div className="content">
            <ActiveVideoDetails activeVideoData={this.state.activeVideoData} fetchVideoData={this.fetchActiveVideoData}/>
            <NextVideoList videos={this.state.videos} activeVideoData={this.state.activeVideoData} />
          </div>}
      </>
    )
  }
}

export default VideoPlayer