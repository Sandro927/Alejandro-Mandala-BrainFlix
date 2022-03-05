import React from 'react'
import UploadForm from '../UploadForm/UploadForm'
import './Upload.scss'
import thumbnail from '../../assets/images/images/Upload-video-preview.jpg'

function Upload() {
  return (
    <section className="upload">
      <div className="upload__content">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__body">
          <figure className="upload__figure">
            <figcaption className="upload__caption">VIDEO THUMBNAIL</figcaption>
            <img className="upload__image" src={thumbnail}></img>
          </figure>
          <UploadForm />
        </div>
      </div>
    </section>
  )
}

export default Upload