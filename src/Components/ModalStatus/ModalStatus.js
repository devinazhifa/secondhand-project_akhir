import React, { useState } from "react";
import { deviceSize } from "../../Responsive";
import style from "./ModalStatus.module.css";
import { useMediaQuery } from "react-responsive";
import requestAPI from "../../requestMethod";

function ModalStatus({ bid }) {
  const [radio, setRadio] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const [fetch, setFetch] = useState(false);

  const handleRadio = (e) => {
    setRadio(e.target.value);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setFetch(true);
    try {
      if (radio === "sold") {
        await requestAPI().put(`/products/${bid.product.id}`, {
          status: radio,
        });
      } else if (radio === "declined") {
        await requestAPI().put(`/bids/${bid.id}`, { status: radio });
      }

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id={`modalStatus-${bid.id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        // style={{ fontSize: }}
      >
        <div
          className={`modal-dialog modal-dialog-centered h-100 m-0 mx-md-auto overflow-hidden `}
        >
          <form
            onSubmit={formHandler}
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
                  id={`terima-${bid.id}`}
                  value={"sold"}
                  onClick={handleRadio}
                />
                <label
                  className="form-check-label ms-3"
                  for={`terima-${bid.id}`}
                >
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
                  value={"declined"}
                  id={`tolak-${bid.id}`}
                  onClick={handleRadio}
                />
                <label
                  className="form-check-label ms-3"
                  for={`tolak-${bid.id}`}
                >
                  <h6>Batalkan Transaksi</h6>
                  <p className={`${style.description}`}>
                    Kamu membatalkan transaksi produk ini dengan pembeli
                  </p>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className={`${style["btn_kirim"]} mx-4 mb-4`}
              disabled={!radio || fetch ? true : false}
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalStatus;
