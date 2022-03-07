import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import './ActiveVideoInfo.scss'
import Views from '../../assets/images/icons/views.svg';
import Likes from '../../assets/images/icons/likes.svg';

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
                <div className="details__container details__container--marginX">
                    <p className="details__counter">
                        <span className="details__icon">
                            <img src={Views} alt='Eyeball icon' />
                        </span>{activeVideoData.views}
                    </p>
                    <p className="details__counter details__counter--space-top">
                        <span className="details__icon">
                        <img src={Likes} alt='Heart icon' />
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