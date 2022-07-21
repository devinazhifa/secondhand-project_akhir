import moment from "moment";
import React from "react";
import requestAPI from "../../requestMethod";
import ModalStatus from "../ModalStatus/ModalStatus";
import ModalTerima from "../ModalTerima/ModalTerima";
import style from "./CardPenawar.module.css";

function CardPenawar({ bid, buyer, getBids }) {
  let dateString = bid.createdAt;
  let dateObj = new Date(dateString);

  const handleReject = async () => {
    const res = await requestAPI().put(`/bids/${bid.id}`, {
      status: "declined",
    });

    window.location.reload();
  };

  const handleAccept = async () => {
    const res = await requestAPI().put(`/bids/${bid.id}`, {
      status: "accepted",
    });

    getBids();
    // window.location.reload();
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-start">
        <img
          src={bid.product.images[0]}
          alt="product"
          className="rounded-3"
          style={{ height: "60px", width: "60px", objectFit: "cover" }}
        />
        <div className="col ms-3">
          <div className="row">
            <div className={`${style.description} col mb-2`}>
              Penawaran Produk
            </div>
            <div className={`${style.description} col text-end`}>
              {moment(dateObj).format("Do MMM, h:mm")}
            </div>
          </div>
          <div style={{ fontSize: "14px", fontWeight: "bold" }}>
            {bid.product.name}
          </div>
          <div style={{ fontSize: "14px" }}>
            Rp {(+bid.product.price).toLocaleString("id-ID")}
          </div>
          <div style={{ fontSize: "14px" }}>
            Ditawar Rp {(+bid.bidPrice).toLocaleString("id-ID")}
          </div>
        </div>
      </div>
      <div className="justify-content-md-end justify-content-center d-flex mt-4 gap-3">
        {bid.status === "pending" ? (
          <>
            <button
              type="submit"
              className={`${style["btn_tolak"]}`}
              onClick={handleReject}
            >
              Tolak
            </button>
            <button
              type="submit"
              className={`${style["btn_terima"]}`}
              data-bs-toggle="modal"
              data-bs-target={`#modalTerima-${bid.id}`}
              onClick={handleAccept}
            >
              Terima
            </button>
          </>
        ) : (
          <>
            <button
              type="submit"
              className={`${style["btn_tolak"]}`}
              data-bs-toggle="modal"
              data-bs-target={`#modalStatus-${bid.id}`}
            >
              Status
            </button>
            <a
              target="_blank"
              href={`https://wa.me/62${buyer.phone}`}
              className={`${style["btn_terima"]} d-flex align-items-center justify-content-center`}
            >
              Hubungi via Whatsapp
              <span className="ms-2 fs-5">
                <i class="fab fa-whatsapp"></i>{" "}
              </span>
            </a>
          </>
        )}
        {/* <button
          type="submit"
          className={`${style["btn_terima"]}`}
          data-bs-toggle="modal"
          data-bs-target={`#modalTerima-${bid.id}`}
          onClick={handleAccept}
        >
          Terima
        </button> */}
      </div>
      <hr className="mt-4"></hr>
      <ModalStatus bid={bid} />
      <ModalTerima bid={bid} buyer={buyer} />
    </div>
  );
}

export default CardPenawar;
