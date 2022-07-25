import moment from "moment";
import React from "react";
import "./notif.css";
const NotifProduk = ({ props }) => {
  //   console.log(props.product.createdAt);
  let dateString = props.product.createdAt;
  let dateObj = new Date(dateString);

  return (
    <div className="col-lg-12 notif-card d-flex rounded-4  justify-content-start align-items-start">
      <div className="notif-card-img">
        <img
          src={props.product.images[0]}
          alt="img"
          className="img-notif "
        ></img>
      </div>
      <div className="col-lg notif-card-desc text-start mx-2 w-100">
        <div className="d-flex justify-content-between align-items-start header">
          <div className="text-muted small-notifdrop">Berhasil Diterbitkan</div>
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
        <div className="desc-notifdrop">
          Rp {(+props.product.price).toLocaleString("id-ID")}
        </div>
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
