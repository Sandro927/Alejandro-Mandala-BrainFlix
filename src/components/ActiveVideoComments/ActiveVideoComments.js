import React from 'react'
import avatar from '../../assets/images/images/Mohan-muruge.jpg'
import Comment from '../Comment/Comment'
import './ActiveVideoComments.scss'
import AddCommentIcon from '@mui/icons-material/AddComment';

function ActiveVideoComments({activeVideoData}) {
  return (
    <section className="comments">
      <p className="comments__counter">{`${activeVideoData.comments.length} Comments`}</p>

      <div className="comments__new">
        <img className="comments__avatar" src={avatar} />
        <form className="comments__form">
          <label className='comments__label' htmlFor='newComment'>JOIN THE CONVERSATION</label>
          <textarea className="comments__textarea" id="newComment" name="newComment" rows="4" placeholder="Add a new comment"/>
          <button className="comments__button" type="submit"><AddCommentIcon className="comments__icon"/>COMMENT</button>
        </form>
      </div>
      {activeVideoData.comments.map((comment, index) => <Comment comment={comment} key={`${activeVideoData.id}-${index}`}/>)}
    </section>
  )
}

export default ActiveVideoComments