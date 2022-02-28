import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import './ActiveVideoInfo.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ActiveVideoInfo({ activeVideoData }) {
    return (
        <div className="details">
            <div className="details__header">
                <h1 className="details__title">{activeVideoData.title}</h1>
            </div>
            <div className="details__stats">
                <div className="details__container">
                    <p className="details__author">By {activeVideoData.channel}</p>
                    <p className="details__timestamp"><ReactTimeAgo date={activeVideoData.timestamp} locale="en-US" /></p>
                </div>
                <div className="details__container details__container--marginLeft">
                    <p className="details__counter">
                        <span className="details__icon">
                            <VisibilityIcon />
                        </span>{activeVideoData.views}
                    </p>
                    <p className="details__counter">
                        <span className="details__icon">
                            <FavoriteIcon />
                        </span>{activeVideoData.likes}
                    </p>
                </div>
            </div>
            <div className="details__body">
                <p className="details__text">{activeVideoData.description}</p>
            </div>

        </div>
    )
}

export default ActiveVideoInfo