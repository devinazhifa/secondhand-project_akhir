import React from "react";
import { Link } from "react-router-dom";
import style from "./CardProduk.module.css";

const CardProduk = (props) => {
  return (
    <>
      <Link
        to={`/detail-produk/${props.product.slug}`}
        style={{ textDecoration: "none" }}
      >
        <div className={`${style["card-container"]} mb-4`}>
          <div className={`${style["card-img"]}`}>
            <img
              src={props.product.images[0]}
              alt="product"
              style={{ objectFit: "cover" }}
              border="0"
            />
          </div>
          <div className={`${style["card-desc"]}`}>
            <h6
              className={`${style["card-title"]} m-0 p-0 mt-2`}
              style={{ textDecoration: "none" }}
            >
              {props.product.name.length > 30
                ? props.product.name.substring(0, 27) + "..."
                : props.product.name}
            </h6>
            <p className="card-text m-0 p-0 mt-2 text-muted">
              {props.product.categories.map((a, index) => {
                if (index === props.product.categories.length - 1) {
                  return a;
                } else {
                  return a + ", ";
                }
              })}
            </p>
            <p className={`${style["price-text"]} m-0 p-0 mt-2`}>
              Rp. {(+props.product.price).toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardProduk;
