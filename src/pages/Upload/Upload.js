import React from 'react'
import UploadForm from '../../components/UploadForm/UploadForm'
import './Upload.scss'

function Upload() {
  return (
    <section className="upload">
      <div className="upload__content">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__body">
          
          <UploadForm />
        </div>
      </div>
    </section>
  )
}

export default Upload