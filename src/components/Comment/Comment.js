import React from 'react'

function Comment({comment}) {
  return (
    <div className="comment">
        <img className="comment__avatar" />
        <div className="comment__details">
            <div className="comment__header">
                <p className="comment__author">{comment.name}</p>
                <p className="comment__timestamp">{comment.timestamp}</p>
            </div>
            <p className="comment__body">{comment.comment}</p>
        </div>
    </div>
  )
}

export default Comment