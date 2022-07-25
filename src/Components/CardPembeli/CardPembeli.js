import React from "react";
import { useSelector } from "react-redux";
import style from "./CardPembeli.module.css";

function CardPembeli({ props }) {
  // const user = useSelector((state) => state.user.data.user);
  // console.log(props.props);
  return (
    <div>
      <div className="card rounded-4 mt-4">
        <div className="card-body p-3">
          <div className={`${style["card_profile"]} p-1 card-body `}>
            <img
              src={props.profilePicture}
              alt="profile"
              className="rounded-3"
              style={{ objectFit: "cover", height: "55px", width: "55px" }}
            />
            <div className="col-lg-10 ms-3">
              <div className="fw-semibold text-capitalize">{props.name}</div>
              <div
                className=" text-capitalize text-muted mt-1"
                style={{ fontSize: "12px" }}
              >
                {props.city}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPembeli;
