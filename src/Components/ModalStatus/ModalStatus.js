import React, { useState } from "react";
import { deviceSize } from "../../Responsive";
import style from "./ModalStatus.module.css";
import { useMediaQuery } from "react-responsive";

function ModalStatus() {
  const [radio, setRadio] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  console.log(radio);
  const handleRadio = (e) => {
    setRadio(e.target.value);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="modalStatus"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className={`modal-dialog modal-dialog-centered h-100 m-0 mx-md-auto overflow-hidden `}
        >
          <div
            className="modal-content rounded-4 pb-1 position-absolute"
            style={{
              maxWidth: "425px",
              position: "absolute",
              bottom: isMobile ? "-10px" : "auto",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div className="modal-header" style={{ borderBottom: "none" }}>
              {isMobile ? (
                <hr
                  class="mx-auto rounded-pill"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{
                    height: "6px",
                    width: "4rem",
                    backgroundColor: "black",
                  }}
                ></hr>
              ) : (
                <button
                  type="button"
                  class="btn-close me-2 mt-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              )}
            </div>
            <div className="body mx-4 my-2">
              <p className="fw-semibold mb-4">
                Perbarui status penjualan produkmu
              </p>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="terima"
                  value={"terjual"}
                  onClick={handleRadio}
                />
                <label className="form-check-label ms-3" for="terima">
                  <h6>Berhasil Terjual</h6>
                  <p className={`${style.description}`}>
                    Kamu telah sepakat menjual produk kepada pembeli
                  </p>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value={"tolak"}
                  id="tolak"
                  onClick={handleRadio}
                />
                <label className="form-check-label ms-3" for="tolak">
                  <h6>Batalkan Transaksi</h6>
                  <p className={`${style.description}`}>
                    Kamu membatalkan transaksi produk ini dengan pembeli
                  </p>
                </label>
              </div>
            </div>
            <button
              type="button"
              className={`${style["btn_kirim"]} mx-4 mb-4`}
              disabled={!radio ? true : false}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalStatus;
