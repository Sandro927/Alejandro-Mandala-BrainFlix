import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import DeleteIcon from '@mui/icons-material/Delete'
import './Comment.scss'

function Comment({comment, lastComment}) {

  const handleDelete = (e) => {
    console.log(comment.id);
  }

  return (
    <div className={!lastComment ?  "comment" : "comment comment--borderBottom"}>
        <div className="comment__avatar"></div>
        <div className="comment__details">
            <div className="comment__header">
                <p className="comment__author">{comment.name}</p>
                <p className="comment__timestamp">
                  <ReactTimeAgo date={comment.timestamp} locale="en-US"/>
                </p>
            </div>
            <DeleteIcon onClick={handleDelete}/>
            <p className="comment__body">{comment.comment}</p>
        </div>
    </div>
  )
}

export default Comment