import React from "react";
import moment from "moment";
import "./notif.css";
const NotifPenawaranSuccess = ({ props }) => {
  let dateString = props.bid.createdAt;
  let dateObj = new Date(dateString);
  return (
    <div className="notif-card d-flex justify-content-start align-items-start ">
      <div className="notif-card-img">
        <img
          // src="./img/jam_1.png"
          src={props.product.images[0]}
          alt="img"
          className="img-notif"
        ></img>
      </div>
      <div className="col-lg notif-card-desc text-start mx-2 w-100">
        <div className="d-flex justify-content-between align-items-start header">
          <div className="text-muted small-notifdrop">Penawaran produk</div>
          <div>
            <p className="text-muted small-notifdrop text-end ms-2 mb-0">
              {moment(dateObj).format("Do MMM, h:mm")}
              {!props.isRead && (
                <span class="position-absolute ms-2 translate-middle bg-danger border border-light rounded-circle notif-badge">
                  <span class="visually-hidden">New alerts</span>
                </span>
              )}
            </p>
          </div>
        </div>
        <div
          className="desc-notifdrop text-capitalize text-wrap"
          style={{ fontWeight: "bold" }}
        >
          {props.product.name}
        </div>
        <div className="desc-notifdrop text-decoration-line-through">
          Rp {(+props.product.price).toLocaleString("id-ID")}
        </div>
        <div className="desc-notifdrop">
          Berhasil Ditawar Rp {(+props.bid.bidPrice).toLocaleString("id-ID")}
        </div>
        <div className="text-muted small-notifdrop">
          Kamu akan segera dihubungi penjual via whatsapp
        </div>
      </div>
    </div>
  );
};
export default NotifPenawaranSuccess;
