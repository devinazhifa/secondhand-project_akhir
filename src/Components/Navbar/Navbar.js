import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/fontawesome-free-solid";
import style from "./Navbar.module.css";
import searchSlice from "../../store/search";
import qs from "query-string";
import NotifPenawaran from "../Notifikasi/NotifPenawaran";
import NotifProduk from "../Notifikasi/NotifProduk";
import NotifPenawaranSuccess from "../Notifikasi/NotifPenawaranSuccess";
import { io } from "socket.io-client";
import axios from "axios";
import requestAPI, { baseURL } from "../../requestMethod";
import notificationSlice from "../../store/notification";

fontawesome.library.add(faSignOutAlt);

const Navbar = () => {
  const user = useSelector((store) => store.user.data);
  const search = useSelector((store) => store.search.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef();
  const socket = io(baseURL);
  const [notifs, setNotifs] = useState(null);

  const getNotif = async () => {
    const res = await requestAPI().get("/notifications");
    // console.log(res.data.data.map((a) => a.id));
    setNotifs(res.data.data);
  };

  const updateNotif = async (id) => {
    await requestAPI().put("/notifications", { id: [id] });
  };

  useEffect(() => {
    if (user) {
      getNotif();
      socket.emit("setUser", user.user.id);

      socket.on("notif", (data) => {
        getNotif();
      });
    }
  }, []);

  // console.log(notifs?.map((a) => a.id));

  const renderNotifElement = (notif) => {
    let component;
    let href;
    switch (notif.status) {
      case "bidding":
        component = <NotifPenawaran props={notif} />;
        href = `/detail-produk/${notif.product.slug}`;
        break;

      case "bidIn":
        // console.log(notif);
        component = <NotifPenawaran props={notif} />;
        href = `/info-penawaran/${notif.bid.buyer.id}`;
        break;

      case "published":
        component = <NotifProduk props={notif} />;
        href = `/detail-produk/${notif.product.slug}`;
        break;

      case "bidAccepted":
        component = <NotifPenawaranSuccess props={notif} />;
        href = `/detail-produk/${notif.product.slug}`;

        break;

      default:
        component = "";
        break;
    }

    const element = (
      <>
        <li key={notif.id} className="my-3">
          <Link
            className={`${style["notif-card"]} dropdown-item`}
            onClick={() => updateNotif(notif.id)}
            to={href}
          >
            {component}
          </Link>
        </li>
      </>
    );

    return element;
  };

  const searchHandler = (e) => {
    e.preventDefault();

    if (searchRef.current.value.trim().length === 0) {
      dispatch(searchSlice.actions.removeSeacrh());
    } else {
      dispatch(searchSlice.actions.addSearch(searchRef.current.value.trim()));
    }

    navigate("/");
  };
  return (
    <>
      <nav className={`${style["nav-header"]} navbar fixed-top`}>
        <div className="container-fluid">
          <div className="col-auto ml-3">
            <Link to="/">
              <img
                src="/img/logo.png"
                alt="logo-img"
                className={`${style["logo-img"]} mx-5`}
                width="150"
              />
            </Link>
          </div>
          <div className="col mx-5">
            <form className="d-flex" role="search" onSubmit={searchHandler}>
              <input
                ref={searchRef}
                defaultValue={
                  search
                    ? search
                    : qs.parse(location.search).search
                    ? qs.parse(location.search).search
                    : ""
                }
                className={`${style["search-bar"]} form-control me-5`}
                type="search"
                placeholder="Search "
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-auto d-none d-lg-block">
            {user !== null && (
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
                  <div className="dropdown mt-1">
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
                      style={{
                        marginInline: notifs?.length > 0 ? "-300px" : "-150px",
                      }}
                      aria-labelledby="dropdownMenuButton"
                    >
                      {notifs?.length > 0 ? (
                        <>
                          {notifs?.map((notif, index) => {
                            return (
                              <div key={index}>
                                {renderNotifElement(notif)}
                                {index !== notifs.length - 1 && (
                                  <hr className="m-0"></hr>
                                )}
                              </div>
                            );
                          })}
                          <hr className="m-0"></hr>
                          <p className=" my-2 text-center">
                            <Link to={"/notifikasi"}>
                              lihat semua notifikasi
                            </Link>
                          </p>
                        </>
                      ) : (
                        <p className=" my-2 px-3 text-center">
                          <Link to={"/notifikasi"}>lihat semua notifikasi</Link>
                        </p>
                      )}
                    </ul>
                  </div>
                  <Link
                    to="/info-akun"
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
                    className={`${style["btn_primary"]} text-white btn d-flex align-items-center`}
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
                      className={`${style["signin-offcanvas"]} btn text-white d-flex align-items-center`}
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
                    <li className="nav-item">
                      <Link
                        to="/notifikasi"
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
                        to="/info-akun"
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

export default Navbar;
