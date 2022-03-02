import React from 'react'
import './Nav.scss'
import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/images/Mohan-muruge.jpg'
import UploadIcon from '@mui/icons-material/Upload';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <section className="nav">
        <div className="nav__content">
            <Link to='/' className="nav__link">
              <img className="nav__logo" src={logo} alt='BrainFlix Logo' />
            </Link>
            <div className="nav__body">
              <form className="nav__form">
                <SearchIcon className="nav__searchIcon"/>
                <input className="nav__input" type='text' placeholder='Search' />
              </form>
              <img className="nav__avatar" src={avatar} alt='Avatar'/>
              <button className="nav__button">
                <UploadIcon className="nav__uploadIcon"/>UPLOAD
              </button>
            </div>
          
        </div>
    </section>
  )
}

export default Nav