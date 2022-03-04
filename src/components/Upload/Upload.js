import React from 'react'
import UploadForm from '../UploadForm/UploadForm'
import './Upload.scss'

function Upload() {
  return (
    <section className="upload">
      <div className="upload__content">
        <h1>Upload Video</h1>
        <div className="upload__body">
          <figure>IMAGE GOES HERE</figure>
          <UploadForm />
        </div>
      </div>
    </section>
  )
}

export default Upload