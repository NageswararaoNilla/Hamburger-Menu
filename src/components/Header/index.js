import {Popup} from 'reactjs-popup'
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav>
    <div className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="trigger-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu />
          </button>
        }
        position="middle center"
      >
        {close => (
          <>
            <ul>
              <Link to="/">
                <li>
                  <AiFillHome />
                  <p>Home</p>
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <BsInfoCircleFill />
                  <p>About</p>
                </li>
              </Link>
            </ul>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
          </>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
