import React from 'react'
import './Nav.scss'
import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/images/Mohan-muruge.jpg'

function Nav() {
  return (
    <section className="nav">
        <div className="nav__content">
            <a className="nav__link" href='/'>
              <img className="nav__logo" src={logo} alt='BrainFlix Logo' />
            </a>

            <div>
              <form>
                <input  type='text' placeholder='Search' />
              </form>
              <img className="nav__avatar" src={avatar} alt='Avatar'/>
              <button>UPLOAD</button>
            </div>
          
        </div>
    </section>
  )
}

export default Nav