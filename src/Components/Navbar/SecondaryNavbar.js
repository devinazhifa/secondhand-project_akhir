import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/fontawesome-free-solid";
import NotifPenawaran from "../Notifikasi/NotifPenawaran";
import NotifProduk from "../Notifikasi/NotifProduk";
import style from "./SecondaryNavbar.module.css";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import NotifPenawaranSuccess from "../Notifikasi/NotifPenawaranSuccess";

fontawesome.library.add(faSignOutAlt);

const SecondaryNavbar = (props) => {
  const [notifs, setNotifs] = useState(null);
  const user = useSelector((state) => state.user.data);
  const socket = io("https://ancient-everglades-98776.herokuapp.com");

  socket.on("reconnect", function () {
    console.log("Reconnected to the server");
    socket.emit("setUser", user.user.id);
  });

  useEffect(() => {
    const getNotif = async () => {
      const res = await axios.get(
        "https://ancient-everglades-98776.herokuapp.com/api/notifications",
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      // console.log(res.data.data.map((a) => a.id));
      setNotifs(res.data.data);
    };

    getNotif();
    socket.emit("setUser", user.user.id);

    socket.on("notif", (data) => {
      getNotif();
    });
  }, []);

  // console.log(notifs?.map((a) => a.id));

  const renderNotifElement = (notif) => {
    let component;
    switch (notif.status) {
      case "bidding":
        component = <NotifPenawaran props={notif} />;
        break;

      case "bidIn":
        component = <NotifPenawaran props={notif} />;
        break;

      case "published":
        component = <NotifProduk props={notif} />;
        break;

      case "bidAccepted":
        component = <NotifPenawaranSuccess props={notif} />;
        break;

      default:
        component = "";
        break;
    }

    const element = (
      <>
        <li key={notif.id} className="my-3">
          <a
            className={`${style["notif-card"]} dropdown-item`}
            href="/notifikasi"
          >
            {component}
          </a>
        </li>
      </>
    );

    return element;
  };

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
          <div className="col">
            <form className={`${style["search-form"]} mx-5`} role="search">
              <input
                className={`${style["search-bar"]} form-control me-5`}
                type="search"
                placeholder="Search "
                aria-label="Search"
              />
            </form>
            <h5 className={`${style["nav-title"]}`}>{props.title}</h5>
          </div>
          <div className="col-auto d-none d-lg-block">
            {user !== null && (
              <ul className="nav-menu list-inline mb-0 me-5">
                <li className="d-flex list-inline-item">
                  {/* PROTECTED */}
                  <Link
                    to="/"
                    type="submit"
                    className={`${style["icons-menu"]} btn d-flex align-items-center`}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </Link>
                  <div className="dropdown">
                    <button
                      className={`${style["icons-menu"]} btn d-flex align-items-center`}
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-bell">
                        {notifs?.length > 0 && (
                          <span
                            className={`${style["notif-badge"]} position-absolute translate-middle p-0 bg-danger border border-light rounded-circle`}
                          ></span>
                        )}
                      </i>
                    </button>
                    <ul
                      className={`dropdown-menu rounded-4 px-3 py-1  ${style["dropdown-container"]}`}
                      aria-labelledby="dropdownMenuButton"
                    >
                      {notifs?.length > 0 &&
                        notifs.map((notif, index) => {
                          return (
                            <div key={index}>
                              {renderNotifElement(notif)}
                              {index !== notifs.length - 1 && (
                                <hr className="m-0"></hr>
                              )}
                            </div>
                          );
                        })}
                    </ul>
                  </div>
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
            )}
            {user === null && (
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
            )}
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
                {user === null && (
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
                )}
                {user !== null && (
                  <>
                    <form
                      className={`${style["search-offcanvas"]}`}
                      role="search"
                    >
                      <input
                        className={`${style["search-bar"]} form-control me-2`}
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className={`${style["btn_search"]} btn `}
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
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
                        to="/"
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
                )}
                {user !== null && (
                  <li className="nav-item">
                    <Link
                      to="/logout"
                      type="submit"
                      className={`${style["logout-btn-offcanvas"]} btn d-flex align-items-center`}
                    >
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SecondaryNavbar;
