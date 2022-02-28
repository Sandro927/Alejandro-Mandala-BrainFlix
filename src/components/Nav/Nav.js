import React from 'react'
import './Nav.scss'
import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/images/Mohan-muruge.jpg'
import UploadIcon from '@mui/icons-material/Upload';

function Nav() {
  return (
    <section className="nav">
        <div className="nav__content">
            <a className="nav__link" href='/'>
              <img className="nav__logo" src={logo} alt='BrainFlix Logo' />
            </a>

            <div className="nav__container">
              <form className="nav__form">
                <span className="material-icons">search</span>
                <input className="nav__input" type='text' placeholder='Search' />
              </form>
              <img className="nav__avatar" src={avatar} alt='Avatar'/>
              <button className="nav__button">
                <UploadIcon className="nav__icon"/>UPLOAD
              </button>
            </div>
          
        </div>
    </section>
  )
}

export default Nav