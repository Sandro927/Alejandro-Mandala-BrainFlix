import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import './ActiveVideoInfo.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ActiveVideoInfo({activeVideoData}) {

  return (
    <div className="details"> 
            <div className="details__header">
                <h1 className="details__title">{activeVideoData.title}</h1>
            </div>
            
            <div className="details__stats">
                <div className="details__container">
                    <p className="details__info">By {activeVideoData.channel}</p>
                    <p className="details__info"><ReactTimeAgo date={activeVideoData.timestamp} locale="en-US"/></p>
                </div>
                <div className="details__container">
                    <p className="details__counter"><VisibilityIcon />{activeVideoData.views}</p>
                    <p className="details__counter"><FavoriteIcon />{activeVideoData.likes}</p>
                </div>
            </div>

            <div className="details__body">
                <p className="details__text">{activeVideoData.description}</p>
            </div>

        </div>
  )
}

export default ActiveVideoInfo