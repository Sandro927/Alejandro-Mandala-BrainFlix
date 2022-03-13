import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './UploadForm.scss'
import thumbnail from '../../assets/images/images/Upload-video-preview.jpg'
import uploadIcon from '../../assets/images/icons/publish.svg'
import axios from 'axios';
export class UploadForm extends Component {
  state = {
    videoTitle: "",
    videoDescription: "",
    formEmpty: true
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    if(this.state.videoTitle === "" || this.state.videoDescription === "") {
      this.setState({
        formEmpty: false
      })
    }
    
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    if (this.state.videoTitle === "" || this.state.videoDescription === "") {
      //turn on error state on input
      this.setState({
        formEmpty: true
      })
      return;
    }
    this.setState({
      formEmpty: false
    })
    axios.post("http://localhost:8080/videos", {
      title: this.state.videoTitle,
      description: this.state.videoDescription
    })
    .then((response) => {
      console.log(response.data);
      this.setState({
        videoTitle: "",
        videoDescription: ""
      })
    })
    .catch((error) => {
      console.log(error)
    });
    
    setTimeout(() => this.props.routerProps.history.push('/'), 3000);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__body">
          <figure className="form__figure">
            <figcaption className="form__caption">VIDEO THUMBNAIL</figcaption>
            <img className="form__image" src={thumbnail} alt="Generic Biking POV"></img>
          </figure>
          <div className="form__inputs">
            <label className="form__label" htmlFor="videoTitle">TITLE OF YOUR VIDEO</label>
            <input
              className="form__text"
              type="text"
              name="videoTitle"
              placeholder="Add a title to your video"
              onChange={this.handleChange}
              value={this.state.videoTitle}
            />

            <label className="form__label" htmlFor="videoDescription">ADD A VIDEO DESCRIPTION</label>
            <textarea
              className="form__textarea"
              name="videoDescription"
              rows="4"
              placeholder="Add a description to your video"
              onChange={this.handleChange}
              value={this.state.videoDescription}
            />
          </div>
        </div>
        <div className="form__buttons">
          <input className="form__submit" type='Submit' defaultValue="Publish"></input>
          <Link className="form__link" to='/'>CANCEL</Link>
        </div>
      </form>
    )
  }
}

export default UploadForm