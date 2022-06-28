import React from 'react';
import style from './NavbarPlain.module.css'

function NavbarPlain(props) {
  return (
    <header className={style.header}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto ml-3">
            <img src="/img/logo.png" alt="logo-img" className="logo-img" width="160" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavbarPlain
