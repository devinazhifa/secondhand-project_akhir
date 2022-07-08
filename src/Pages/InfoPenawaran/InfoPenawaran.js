import React from "react";
import CardPenawar from "../../Components/CardPenawar/CardPenawar";
import CardPenjual from "../../Components/CardPenjual/CardPenjual";
import ModalStatus from "../../Components/ModalStatus/ModalStatus";
import ModalTerima from "../../Components/ModalTerima/ModalTerima";
import NavbarPlain from "../../Components/Navbar/NavbarPlain";

function InfoPenawaran(props) {
  return (
    <div>
      <NavbarPlain />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row justify-content-center">
              <div className="col-lg-1 mt-4">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="col-lg-9">
                <CardPenjual />
                <p className="fw-semibold my-4">Daftar Produk yang Ditawar</p>
                {/* <div className='card rounded-4'> */}
                <CardPenawar />
                {/* </div> */}
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

export default InfoPenawaran;
