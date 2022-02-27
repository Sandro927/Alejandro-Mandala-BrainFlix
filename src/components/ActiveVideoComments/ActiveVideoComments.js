import React from 'react'
import avatar from '../../assets/images/images/Mohan-muruge.jpg'
import './ActiveVideoComments.scss'

function ActiveVideoComments({activeVideoData}) {
  return (
    <section className="comments">
      <p className="comments__counter">{`${activeVideoData.comments.length} Comments`}</p>

      <div className="comments__fnew">
        <img className="comments__avatar" src={avatar} />
        <form className="comments__form">
          <label className='comments__label' htmlFor='newComment'>JOIN THE CONVERSATION</label>
          <textarea className="comments__textarea" id="newComment" name="newComment" rows="10" placeholder="Add a new comment"/>
          <button className="comments__button" type="submit">Comment</button>
        </form>
      </div>
      
    </section>
  )
}

export default ActiveVideoComments