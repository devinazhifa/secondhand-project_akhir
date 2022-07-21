import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardPenawar from "../../Components/CardPenawar/CardPenawar";
import CardPenjual from "../../Components/CardPenjual/CardPenjual";
import ModalStatus from "../../Components/ModalStatus/ModalStatus";
import ModalTerima from "../../Components/ModalTerima/ModalTerima";
import NavbarPlain from "../../Components/Navbar/NavbarPlain";
import NotifPenawaran from "../../Components/Notifikasi/NotifPenawaran";
import NotifPenawaranSuccess from "../../Components/Notifikasi/NotifPenawaranSuccess";
import NotifProduk from "../../Components/Notifikasi/NotifProduk";
import requestAPI from "../../requestMethod";
import style from './LamanNotifikasi.module.css'

function LamanNotifikasi(props) {
  const [notifs, setNotifs] = useState(null);

  const getNotif = async () => {
    const res = await requestAPI().get("/notifications/all");
    setNotifs(res.data.data);
  };

  const updateNotif = async (notif) => {
    if (!notif.isRead) {
      await requestAPI().put("/notifications", { id: [notif.id] });
    }
  };

  useEffect(() => {
    getNotif();
  }, []);

  console.log(notifs);

  const renderNotifElement = (notif) => {
    let component;
    let href;
    switch (notif.status) {
      case "bidding":
        component = <NotifPenawaran props={notif} />;
        href = `/detail-produk/${notif.product.slug}`;
        break;

      case "bidIn":
        // console.log(notif.buyer);
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
        <Link
          style={{ color: "black" }}
          onClick={() => updateNotif(notif)}
          to={href}
        >
          {component}
        </Link>
      </>
    );

    return element;
  };

  return (
    <>
    <NavbarPlain title='Notifikasi'/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row justify-content-center">
              <Link to="/">
                <div className={`${style["back-button"]} col-lg-1`}>
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
              </Link>
              <div className="col-lg-9">
                {notifs?.length > 0 ? (
                  notifs.map((a) => (
                    <>
                      {renderNotifElement(a)}
                      <hr />
                    </>
                  ))
                ) : (
                  <div className="text-center">belum ada notifikasi</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LamanNotifikasi;
