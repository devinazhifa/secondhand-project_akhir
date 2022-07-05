import React from "react";
import { useSelector } from "react-redux";
import style from "./CardPenjual.module.css";

function CardPenjual() {
  const user = useSelector((state) => state.user.data.user);
  return (
    <div>
      <div className="card rounded-4 mt-4">
        <div className="card-body">
          <div className={`${style["card_profile"]} card-body`}>
            <img src="./img/profile.png" />
            <div className="col-lg-10 ms-3">
              <div className="fw-semibold text-capitalize">{user.name}</div>
              <div className=" text-capitalize">{user.city}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPenjual;
