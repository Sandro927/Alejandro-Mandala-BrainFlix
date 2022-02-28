import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import avatar from '../../assets/images/images/Mohan-muruge.jpg'
import './Comment.scss'

function Comment({comment, lastComment}) {
  return (
    <div className={!lastComment ?  "comment" : "comment comment--borderBottom"}>
        <img className="comment__avatar" src={avatar}/>
        <div className="comment__details">
            <div className="comment__header">
                <p className="comment__author">{comment.name}</p>
                <p className="comment__timestamp">
                  <ReactTimeAgo date={comment.timestamp} locale="en-US"/>
                </p>
            </div>
            <p className="comment__body">{comment.comment}</p>
        </div>
    </div>
  )
}

export default Comment