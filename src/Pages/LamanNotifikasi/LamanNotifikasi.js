import React from "react";
import CardPenawar from "../../Components/CardPenawar/CardPenawar";
import CardPenjual from "../../Components/CardPenjual/CardPenjual";
import ModalStatus from "../../Components/ModalStatus/ModalStatus";
import ModalTerima from "../../Components/ModalTerima/ModalTerima";
import NavbarPlain from "../../Components/Navbar/NavbarPlain";
import NotifPenawaran from "../../Components/Notifikasi/NotifPenawaran";
import NotifProduk from "../../Components/Notifikasi/NotifProduk";

function LamanNotifikasi(props) {
  return (
    <div>
      <NavbarPlain />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row justify-content-center">
              <div className="col-lg-1">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="col-lg-9 mt-2">
                <NotifPenawaran />
                <hr />
                <NotifProduk />
                <hr />
                <NotifPenawaran />
                <hr />
                <NotifProduk />
                <hr />
                <ModalStatus />
                <ModalTerima />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LamanNotifikasi;
