import React from "react";
import moment from "moment";
import "./notif.css";
const NotifPenawaranSuccess = ({ props }) => {
  return (
    <div className="notif-card d-flex justify-content-start align-items-start ">
      <div className="notif-card-img">
        <img src="./img/jam_1.png" alt="img" className="img-notif"></img>
      </div>
      <div className="col-lg notif-card-desc text-start mx-2">
        <div className="d-flex justify-content-between align-items-start header">
          <div className="text-muted small-notifdrop">Penawaran produk</div>
          <div>
            <p className="text-muted small-notifdrop text-end ms-2 mb-0">
              8 Jul, 02:02
              <span class="position-absolute ms-2 translate-middle bg-danger border border-light rounded-circle notif-badge">
                <span class="visually-hidden">New alerts</span>
              </span>
            </p>
          </div>
        </div>
        <div className="desc-notifdrop text-capitalize">Jam Tangan Casio </div>
        <div className="desc-notifdrop text-decoration-line-through">
          Rp 250.000{" "}
        </div>
        <div className="desc-notifdrop">Berhasil Ditawar Rp 200.000</div>
        <div className="text-muted small-notifdrop">
          Kamu akan segera dihubungi penjual via whatsapp
        </div>
      </div>
    </div>
  );
};
export default NotifPenawaranSuccess;
