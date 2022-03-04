import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import DeleteIcon from '@mui/icons-material/Delete'
import './Comment.scss'
import axios from 'axios'
const API_KEY = "a10e75f8-75fb-4de7-857f-8aa90025dc69";

function Comment({comment, lastComment, activeVideoData, fetchVideoData}) {

  const handleDelete = (e) => {
    axios.delete(`https://project-2-api.herokuapp.com/videos/${activeVideoData.id}/comments/${comment.id}?api_key=${API_KEY}`)
    .then(response => {
      fetchVideoData(activeVideoData.id)
    })
    .catch(error => {
      console.log(error)
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
            <DeleteIcon onClick={handleDelete}/>
        </div>
    </div>
  )
}

export default Comment