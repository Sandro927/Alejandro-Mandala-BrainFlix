import React from 'react'
import './Upload.scss'

function Upload() {
  return (
    <section className="upload">
      <div className="upload__content">
        <h1>Upload Video</h1>
        <div className="upload__body">
          <figure>IMAGE GOES HERE</figure>
          <form>
            <input type="text" placeholder="Add a title to your video"/>
            <input type="text" placeholder="Add a description to your video"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Upload