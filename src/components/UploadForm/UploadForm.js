import React, { Component } from 'react'
import './UploadForm.scss'

export class UploadForm extends Component {
  render() {
    return (
      <form className="form">
          <label className="form__label" for="videoTitle">TITLE OF YOUR VIDEO</label>
          <input className="form__text" type="text" name="videoTitle" />
          
          <label className="form__label" for="videoDescription">ADD A VIDEO DESCRIPTION</label>
          <textarea className="form__textarea" name="videoDescription" rows="4" />
      </form>
    )
  }
}

export default UploadForm