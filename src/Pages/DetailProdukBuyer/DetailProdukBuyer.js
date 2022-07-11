import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./DetailProdukBuyer.module.css";
import CardPenjual from "../../Components/CardPenjual/CardPenjual";
import SecondaryNavbar from "../../Components/Navbar/SecondaryNavbar";
import ModalTawar from "../../Components/ModalTawar/ModalTawar";

const DetailProdukBuyer = () => {
  const [product, setProduct] = useState(null);
  const user = useSelector((state) => state.user.data);
  const params = useParams();

  const test = () => {
    let button = "";
    if (product) {
      if (product.seller.id === user.user.id) {
        button = "edit";
      } else if (product.bidded === true) {
        button = "menunggu respon penjual";
      } else if ((product.bidded = false)) {
        button = "tertarik ingin nego";
      }
    }

    return button;
  };

  useEffect(() => {
    axios
      .get(
        `https://ancient-everglades-98776.herokuapp.com/api/products/${params.slug}`
      )
      .then((response) => {
        if (response.data !== null) {
          setProduct({ ...response.data.data });
          console.log(test);

          console.log(response.data.data);
        } else {
          return Promise.reject({ errorMessage: "Product not available" });
        }
      })
      .catch((error) => {
        setProduct({ ...error });
      });
  }, []);

  console.log(test());

  return (
    <div>
      <SecondaryNavbar />
      <button
        type="submit"
        className={`${style["btn_terbitkan_static"]} mb-3`}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Terbitkan
      </button>
      {product && (
        <div className="container mb-4">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner mt-4">
                  {product.images?.map((image, index) => {
                    return (
                      <div
                        className={
                          index == 0 ? "carousel-item active" : "carousel-item"
                        }
                        key={index}
                      >
                        <div>
                          <img
                            src={image}
                            className="img-fluid w-100 rounded-4"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <i class="fa-solid fa-circle-chevron-left fa-2x"></i>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <i class="fa-solid fa-circle-chevron-right fa-2x"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mt-4 rounded-4">
                <div className="card-body">
                  <p className="judul fw-semibold">{product.name}</p>
                  <p className="kategori">{product.categories}</p>
                  <p className="harga fw-semibold">{product.price}</p>
                  <button
                    type="submit"
                    className={`${style["btn_terbitkan"]} mb-3`}
                    data-bs-toggle="modal"
                    data-bs-target="#modalTawar"
                  >
                    Saya tertarik dan ingin nego
                  </button>
                  <ModalTawar />
                </div>
              </div>
              <CardPenjual />
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-lg-6 offset-lg-1">
              <div className="card mt-4 rounded-4 mb-2">
                <div className="card-body">
                  <p className="fw-semibold">Deskripsi</p>
                  <p className={style.text_detail}>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProdukBuyer;
