import React from "react";
import { Link, useNavigate } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import style from "./NavbarPlain.module.css";

fontawesome.library.add(faArrowLeft);

function NavbarPlain(props) {

  const navigate = useNavigate();

  return (
    <>
      <header className={style.header}>
        <div>
          <nav className="navbar navbar-light bg-white shadow-sm d-block mb-2 ">
            <div className="container d-flex">
              <Link to="/">
                <img
                  src="/img/logo.png"
                  alt="logo-img"
                  className={`${style["logo-img"]}`}
                  width="120"
                />
              </Link>
              <div className="d-lg-none" onClick={ () => {
                navigate(-1)
              }}>
                <FontAwesomeIcon
                  icon="fa-arrow-left"
                  className={`${style["fa-arrow-left"]}`}
                />
              </div>  
              <span href="/" className={`${style["navbar-text"]} mx-auto`}>
                {props.title}
              </span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavbarPlain;
