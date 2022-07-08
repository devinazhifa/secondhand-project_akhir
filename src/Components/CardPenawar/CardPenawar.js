import React from "react";
import style from "./CardPenawar.module.css";

function CardPenawar() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-start">
        <img src="./img/produk_tawar.png" />
        <div className="col ms-3">
          <div className="row">
            <div className={`${style.description} col mb-2`}>
              Penawaran Produk
            </div>
            <div className={`${style.description} col text-end`}>
              20 Apr, 14:04
            </div>
          </div>
          <h6>Jam Tangan Casio</h6>
          <h6>Rp 250.000</h6>
          <h6>Ditawar Rp 200.000</h6>
        </div>
      </div>
      <div className="justify-content-md-end justify-content-center d-flex mt-4 gap-3">
        <button
          type="submit"
          className={`${style["btn_tolak"]}`}
          data-bs-toggle="modal"
          data-bs-target="#modalStatus"
        >
          Tolak
        </button>
        <button
          type="submit"
          className={`${style["btn_terima"]}`}
          data-bs-toggle="modal"
          data-bs-target="#modalTerima"
        >
          Terima
        </button>
      </div>
      <hr className="mt-4"></hr>
    </div>
  );
}

export default CardPenawar;
