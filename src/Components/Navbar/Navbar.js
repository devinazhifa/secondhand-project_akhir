import React from 'react'
import { Link } from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from '@fortawesome/fontawesome-free-solid'
import style from './Navbar.module.css'

fontawesome.library.add(faSignOutAlt);

const Navbar = () => {
  return (
    <header className={style.header}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto ml-3">
              <img src="/img/logo.png" alt="logo-img" className="logo-img" width="160" />
            </div>
            <div className="col">
              <form className="d-flex" role="search">
                <input className={`${style['search-bar']} form-control me-2`}type="search" placeholder="Search " aria-label="Search" />
              </form>
            </div>
            <div className="col-auto d-lg-none">Menu</div>
            <div className="col-auto d-none d-lg-block">
              <ul className="nav-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="/login" type="submit" className={`${style['btn_primary']} btn d-flex align-items-center`}><FontAwesomeIcon icon="fa-sign-out-alt"  className={`${style['fa-sign-in-alt']}`}/>Sign In</Link>
                </li>
              </ul>                    
            </div>
          </div>
        </div>
    </header>
  )
}

export default Navbar