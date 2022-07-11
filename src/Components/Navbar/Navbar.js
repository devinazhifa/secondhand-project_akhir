import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/fontawesome-free-solid";
import style from "./Navbar.module.css";

fontawesome.library.add(faSignOutAlt);

const Navbar = () => {

  const user = useSelector( store => store.user.data )

  return (
    <>
      <nav className={`${style["nav-header"]} navbar fixed-top`}>
        <div className="container-fluid">
          <div className="col-auto ml-3">
            <img
              src="/img/logo.png"
              alt="logo-img"
              className={`${style["logo-img"]} mx-5`}
              width="150"
            />
          </div>
          <div className="col mx-5">
            <form className="d-flex" role="search">
              <input
                className={`${style["search-bar"]} form-control me-5`}
                type="search"
                placeholder="Search "
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-auto d-none d-lg-block">
          { user !== null &&
            <ul className="nav-menu list-inline mb-0 me-5">
              <li className="d-flex list-inline-item">
                {/* PROTECTED */}
                <Link
                  to="/daftar-jual"
                  type="submit"
                  className={`${style["icons-menu"]} btn d-flex align-items-center`}
                >
                  <i className="fa-solid fa-bars"></i>
                </Link>
                <Link
                  to="/"
                  type="submit"
                  className={`${style["icons-menu"]} btn d-flex align-items-center`}
                >
                  <i className="fa-regular fa-bell"></i>
                </Link>
                <Link
                  to="/"
                  type="submit"
                  className={`${style["icons-menu"]} btn d-flex align-items-center`}
                >
                  <i className="fa-regular fa-user"></i>
                </Link>
                <Link
                  to="/logout"
                  type="submit"
                  className={`${style["logout-btn"]} btn d-flex align-items-center`}
                >
                  Logout
                </Link>
              </li>
            </ul>
            }
            { user === null &&
            <ul className="nav-menu list-inline mb-0 me-5">
              <li className="list-inline-item">
                {/* PUBLIC ONLY */}
                <Link
                  to="/login"
                  type="submit"
                  className={`${style["btn_primary"]} btn d-flex align-items-center`}
                >
                  <FontAwesomeIcon
                    icon="fa-sign-out-alt"
                    className={`${style["fa-sign-in-alt"]}`}
                  />
                  Sign In
                </Link>
              </li>
            </ul>
          }
          </div>
          <button
            className="navbar-toggler d-block d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
                SecondHand
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                { user === null &&
                <li className="nav-item">
                  <Link
                    to="/login"
                    type="submit"
                    className={`${style["signin-offcanvas"]} btn d-flex align-items-center`}
                  >
                    <FontAwesomeIcon
                      icon="fa-sign-out-alt"
                      className={`${style["fa-sign-in-alt"]}`}
                    />
                    Sign In
                  </Link>
                </li>
                }
                { user !== null &&
                <>
                <li className="nav-item">
                  <Link
                    to="/"
                    type="submit"
                    className={`${style["icons-menu"]} btn d-flex align-items-center`}
                  >
                    <i className="fa-regular fa-bell pe-3"></i> Notifikasi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/daftar-jual"
                    type="submit"
                    className={`${style["icons-menu"]} btn d-flex align-items-center`}
                  >
                    <i className="fa-solid fa-bars pe-3"></i> Daftar Jual
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    type="submit"
                    className={`${style["icons-menu"]} btn d-flex align-items-center`}
                  >
                    <i className="fa-regular fa-user pe-3"></i> Akun Saya
                  </Link>
                </li>
              </>
              }
              { user !== null &&
                <li className="nav-item">
                <Link
                  to="/logout"
                  type="submit"
                  className={`${style["logout-btn-offcanvas"]} btn d-flex align-items-center`}
                >
                  Logout
                </Link>
                </li>
            }
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
