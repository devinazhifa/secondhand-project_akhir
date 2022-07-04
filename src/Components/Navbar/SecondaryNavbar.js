import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./SecondaryNavbar.module.css";
import { io } from "socket.io-client";

const SecondaryNavbar = () => {
  const [notifs, setNotifs] = useState(null);

  useEffect(() => {
    const getNotif = async () => {
      const res = await axios.get("http://localhost:3000/api/notifications", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTY1Njg0MDUyNn0.YY44QA_YZ2gmpYZjBZEyVHzAhkgqSntP1lP6SyXulEE",
        },
      });

      setNotifs(res.data.data);
    };

    getNotif();

    const socket = io("http://localhost:3000");

    socket.on("connect", () => console.log(socket.id));

    socket.on("notif", (data) => {
      console.log("ada notif", data);
      getNotif();
    });
  }, []);

  console.log(notifs?.map((a) => a.id));

  return (
    <header className={style.header}>
      <div className={container}>
        <div className="row justify-content-between align-items-center">
          <div className="col-auto ml-3">
            <img
              src="/img/logo.png"
              alt="logo-img"
              className="logo-img"
              width="160"
            />
          </div>
          <div className="col">
            <form className="d-flex" role="search">
              <input
                className={`${style["search-bar"]} form-control me-2`}
                type="search"
                placeholder="Search "
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-auto d-lg-none">Menu</div>
          <div className="col-auto d-none d-lg-block">
            <ul className="nav-menu list-inline mb-0">
              <li className="d-flex list-inline-item">
                <Link
                  to="/"
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
                  <i
                    className="fa-regular fa-bell"
                    style={{
                      color: notifs?.some((a) => a.isRead === false)
                        ? "red"
                        : "black",
                    }}
                    data-count="12"
                  ></i>
                </Link>
                <Link
                  to="/info-akun"
                  type="submit"
                  className={`${style["icons-menu"]} btn d-flex align-items-center`}
                >
                  <i className="fa-regular fa-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SecondaryNavbar;
