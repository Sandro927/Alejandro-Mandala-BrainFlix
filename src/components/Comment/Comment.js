import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import DeleteIcon from '@mui/icons-material/Delete'
import './Comment.scss'
import axios from 'axios'

function Comment({comment, lastComment, activeVideoData, fetchVideoData}) {

  const handleDelete = (e) => {
    axios.delete(`http://localhost:8080/videos/${activeVideoData.id}/comments/${comment.id}`)
    .then(response => {
      fetchVideoData(activeVideoData.id);
    })
    .catch(error => {
      console.log(error);
    })
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
            <p className="comment__body">{comment.comment}</p>
            <DeleteIcon className="comment__icon" onClick={handleDelete}/>
        </div>
    </div>
  )
}

export default Comment