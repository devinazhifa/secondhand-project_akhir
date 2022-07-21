import React from "react";
import { deviceSize } from "../../Responsive";
import style from "./ModalTerima.module.css";
import { useMediaQuery } from "react-responsive";

function ModalTerima({ bid, buyer }) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  console.log(buyer.phone);
  return (
    <div>
      <div
        className="modal fade"
        id={`modalTerima-${bid.id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered h-100 m-0 mx-md-auto overflow-hidden">
          <div
            className="modal-content px-2 rounded-4 pb-1 position-absolute"
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
            <div
              className="modal-header p-0 pt-3 p-md-2"
              style={{ borderBottom: "none" }}
            >
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
            <div className="body mx-4 my-4">
              <p className="fw-semibold">
                Yeay kamu berhasil mendapat harga yang sesuai
              </p>
              <p className="text=muted" style={{ color: "#8A8A8A" }}>
                Segera hubungi pembeli melalui whatsapp untuk transaksi
                selanjutnya
              </p>
              <div className="card rounded-4 bg-light border-0">
                <div
                  className="card-body rounded-4"
                  style={{ backgroundColor: "#EEEEEE" }}
                >
                  <p className="fw-semibold text-center">Product Match</p>
                  <div className={`${style["card_profile"]} card-body`}>
                    <img
                      src={buyer.profilePicture}
                      alt="profile"
                      className="rounded-3"
                      style={{ height: "60px", width: "60px" }}
                    />
                    <div className="col-lg-10 ms-3">
                      <div className="fw-semibold">{buyer.name}</div>
                      <div className={`${style.description}`}>{buyer.city}</div>
                    </div>
                  </div>
                  <div className={`${style["card_profile"]} card-body`}>
                    <img
                      src={bid.product.images[0]}
                      alt="product"
                      className="rounded-3"
                      style={{ height: "60px", width: "60px" }}
                    />
                    <div className="col-lg-10 ms-3">
                      <div>{bid.product.name}</div>
                      <div className="text-decoration-line-through">
                        Rp {(+bid.product.price).toLocaleString("id-ID")}
                      </div>
                      <div>
                        Ditawar Rp {(+bid.bidPrice).toLocaleString("id-ID")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              href={`https://wa.me/62${buyer.phone}`}
              className={`${style["btn_kontak"]} mx-4 mb-4 d-flex align-items-center justify-content-center`}
            >
              Hubungi via Whatsapp
              <span className="ms-2 fs-5">
                <i class="fab fa-whatsapp"></i>{" "}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTerima;
