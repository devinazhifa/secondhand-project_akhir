import React from 'react';

function Navbar_plain(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-white shadow-sm d-block mb-4">
         <div className="container">
         <img src="/img/logo.png" alt="logo-img" className="logo-img" width="160" />
            <span href='/' className='navbar-text mx-auto'>{props.title}</span>
         </div>
      </nav>
    </div>
  )
}

export default Navbar_plain
