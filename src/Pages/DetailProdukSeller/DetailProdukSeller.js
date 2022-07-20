import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./DetailProdukSeller.module.css";
import CardPenjual from "../../Components/CardPenjual/CardPenjual";
import SecondaryNavbar from "../../Components/Navbar/SecondaryNavbar";
import ModalTawar from "../../Components/ModalTawar/ModalTawar";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../Responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DetailProdukBuyer = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

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
      <div className={`${style["navbar-prev"]}`}>
        <SecondaryNavbar />
      </div>
      {isMobile && (
        <div className=" sticky-top  ">
          <Link to="/">
            <FontAwesomeIcon
              icon="fa-arrow-left"
              className={` position-absolute`}
              style={{
                fontSize: "20",
                top: 10,
                left: 10,
                color: "blake",
                backgroundColor: "white",
                padding: "5px",
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: "2px",
                borderRadius: "50%",
                textDecoration: "none",
              }}
            />
          </Link>
        </div>
      )}

      <button
        type="submit"
        className={`${style["btn_terbitkan_static"]} mb-3`}
        data-bs-toggle="modal"
        data-bs-target="#modalTawar"
      >
        Saya Tertarik dan Ingin Nego
      </button>
      {product && (
        <div className={`${style["detail-produk"]} container mb-4`}>
          <div className="row justify-content-center pt-md-4">
            <div className="col-lg-6 p-0">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {product.images?.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <img
                        src={image}
                        className={` img-fluid w-100 ${isMobile ? "" : "rounded-4"
                          }`}
                        style={{
                          height: isMobile ? "300px" : "436px",
                          objectFit: "cover",
                        }}
                        alt="swiper-img"
                      />
                    </div>
                  ))}
                </div>
                {!isMobile ? (
                  <>
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
                  </>
                ) : (
                  <div
                    class="carousel-indicators"
                    style={{ position: "relative", top: "-75px" }}
                  >
                    {product.images.map((img, idx) => (
                      <button
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide-to={idx}
                        class={`${idx === 0 ? "active" : ""}`}
                      // aria-current={true}
                      // aria-label="Slide 1"
                      ></button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={`${style["product-info"]} col-lg-4`}>
              <div className={` card mt-4 mt-md-0 rounded-4`}>
                <div className="card-body px-4 py-3">
                  <p className="fw-semibold text-capitalize mb-1 mb-md-2  fs-5">
                    {product.name}
                  </p>
                  <p
                    className="kategori text-capitalize mb-1 mb-md-3"
                    style={{ fontSize: "12px" }}
                  >
                    {product.categories.map((el) => el.value).join(", ")}
                  </p>
                  <p className="harga fw-semibold mb-0 mb-md-4">
                    Rp. {(+product.price).toLocaleString("id-ID")}
                  </p>
                  <Link to="/form-produk">
                    <button type="submit" className={`${style["btn_edit"]}`}>
                      Edit{" "}
                    </button>{" "}
                  </Link>
                </div>
              </div>
              <CardPenjual />
              {isMobile && (
                <div className="card mt-4 rounded-4 mb-2">
                  <div className="card-body">
                    <p className="fw-semibold">Deskripsi</p>
                    <p className={style.text_detail}>{product.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          {!isMobile && (
            <div className="row justify-content-start">
              <div className="col-lg-6 offset-lg-1 px-0">
                <div className="card mt-4 rounded-4 mb-2">
                  <div className="card-body">
                    <p className="fw-semibold">Deskripsi</p>
                    <p className={style.text_detail}>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DetailProdukBuyer;
