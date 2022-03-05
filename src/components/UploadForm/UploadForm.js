import React, { Component } from 'react'
import './UploadForm.scss'

export class UploadForm extends Component {
  render() {
    return (
      <form className="form">
          <label className="form__label" for="videoTitle">TITLE OF YOUR VIDEO</label>
          <input className="form__text" type="text" name="videoTitle" placeholder="Add a title to your video"/>
          
          <label className="form__label" for="videoDescription">ADD A VIDEO DESCRIPTION</label>
          <textarea className="form__textarea" name="videoDescription" rows="4" placeholder="Add a description to your video"/>

          <input className="form__submit" type='Submit' value="Publish" />
      </form>
    )
  }
}

export default UploadForm