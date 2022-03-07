import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './UploadForm.scss'
import thumbnail from '../../assets/images//images/Upload-video-preview.jpg' 
export class UploadForm extends Component {
  state = {
    videoTitle: "",
    videoDescription: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return (
      <form className="form" >

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
          <input className="form__submit" type='Submit' defaultValue="Publish" />
          <Link className="form__link" to='/'>CANCEL</Link>
        </div>
      </form>
    )
  }
}

export default UploadForm