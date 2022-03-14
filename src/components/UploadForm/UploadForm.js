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
    videoImage: "",
    submit: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    this.setState({
      submit: true
    })
    if (!this.state.videoDescription || !this.state.videoTitle) {
      return;
    }
    
    axios.post("http://localhost:8080/videos", {
      title: this.state.videoTitle,
      description: this.state.videoDescription
    })
    .then((response) => {
      console.log(response.data);
      this.setState({
        videoTitle: "",
        videoDescription: "",
        videoImage: "",
        submit: false
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
              className={(this.state.submit && !this.state.videoTitle) ? "form__text form__text--error" : "form__text"}
              type="text"
              name="videoTitle"
              placeholder="Add a title to your video"
              onChange={this.handleChange}
              value={this.state.videoTitle}
              tabIndex="0"
            />

            <label className="form__label" htmlFor="videoDescription">ADD A VIDEO DESCRIPTION</label>
            <textarea
              className={(this.state.submit && !this.state.videoDescription) ?  "form__textarea form__textarea--error" : "form__textarea"}
              name="videoDescription"
              rows="4"
              placeholder="Add a description to your video"
              onChange={this.handleChange}
              value={this.state.videoDescription}
              tabIndex="1"
            />

            <label className="form__label" htmlFor="videoImage">ADD VIDEO IMAGE</label>
            <input 
              className={(this.state.submit && !this.state.videoImage) ?  "form__file form__file--error" : "form__file"}
              name="videoImage" 
              type='file' 
              onChange={this.handleChange} 
              value={this.state.videoImage}
              tabIndex="1"
            />
          </div>
        </div>
        <div className="form__buttons">
          <button className="form__submit">
            <img className="form__icon" src={uploadIcon} alt="Upload form icon"></img>
            PUBLISH
          </button>
          <Link className="form__link" to='/'>CANCEL</Link>
        </div>
      </form>
    )
  }
}

export default UploadForm