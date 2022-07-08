import moment from "moment";
import React from "react";
import "./notif.css";
const NotifProduk = ({ props }) => {
  return (
    <div className="col-lg-12 notif-card d-flex rounded-4  justify-content-start align-items-start">
      <div className="notif-card-img">
        <img src="./img/jam_1.png" alt="img" className="img-notif "></img>
      </div>
      <div className="col-lg notif-card-desc text-start mx-2">
        <div className="d-flex justify-content-between align-items-start header">
          <div className="text-muted small-notifdrop">Berhasil Diterbitkan</div>
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
        <div className="desc-notifdrop">Rp 250.000 </div>
      </div>
      {/* <div>
        <p className="text-muted small-notifdrop text-end ms-2">
          {moment(dateObj).format("Do MMM, h:mm")}
          <span class="position-absolute ms-2 mt-2 translate-middle bg-danger border border-light rounded-circle notif-badge">
            <span class="visually-hidden">New alerts</span>
          </span>
        </p>
      </div> */}
    </div>
  );
};

export default NotifProduk;
