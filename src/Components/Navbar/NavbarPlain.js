import React from "react";
import { Link } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import style from "./NavbarPlain.module.css";

fontawesome.library.add(faArrowLeft);

function NavbarPlain(props) {
  return (
    <>
      <header className={style.header}>
        <div>
          <nav className="navbar navbar-light bg-white shadow-sm d-block mb-2 ">
            <div className="container d-flex">
              <img
                src="/img/logo.png"
                alt="logo-img"
                className={`${style["logo-img"]}`}
                width="120"
              />
              <Link to="/">
                <div className="d-lg-none">
                  <FontAwesomeIcon
                    icon="fa-arrow-left"
                    className={`${style["fa-arrow-left"]}`}
                  />
                </div>
              </Link>
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
