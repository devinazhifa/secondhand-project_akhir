import React from 'react'
import { Link } from 'react-router-dom'
import style from './SecondaryNavbar.module.css'

const SecondaryNavbar = () => {
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
                <li className="d-flex list-inline-item">
                  <Link to="/" type="submit" className={`${style['icons-menu']} btn d-flex align-items-center`}>
                    <i class="fa-solid fa-bars"></i>
                  </Link>
                  <Link to="/" type="submit" className={`${style['icons-menu']} btn d-flex align-items-center`}>
                    <i class="fa-regular fa-bell"></i>
                  </Link>
                  <Link to="/" type="submit" className={`${style['icons-menu']} btn d-flex align-items-center`}>
                    <i class="fa-regular fa-user"></i>
                  </Link>
                </li>
              </ul>                    
            </div>
          </div>
        </div>
    </header>
  )
}

export default SecondaryNavbar