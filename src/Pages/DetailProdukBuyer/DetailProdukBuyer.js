import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./DetailProdukBuyer.module.css";
import CardPenjual from "../../Components/CardPenjual/CardPenjual";
import SecondaryNavbar from "../../Components/Navbar/SecondaryNavbar";
import ModalTawar from "../../Components/ModalTawar/ModalTawar";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../Responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import requestAPI from "../../requestMethod";
import "./disable.css";

const DetailProdukBuyer = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const [product, setProduct] = useState(null);
  const [wished, setWished] = useState(null);
  const [loading, setLoading] = useState(true);

  const wishlistsHandler = async () => {
    if (!user) {
      navigate("/login");
    } else if (!user?.verified) {
      navigate("/info-akun");
    }

    setLoading(true);
    if (wished === false) {
      await requestAPI().post(`/wishlists/product/${product.id}`);
      setWished(true);
    } else if (wished === true) {
      await requestAPI().delete(`/wishlists/product/${product.id}`);
      setWished(false);
    }
    setLoading(false);
  };
  // const user = useSelector((state) => state.user.data);
  const params = useParams();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.data?.user);

  // const test = () => {
  //   let button = "";
  //   if (product) {
  //     if (product.seller.id === user.user.id) {
  //       button = "edit";
  //     } else if (product.bidded === true) {
  //       button = "menunggu respon penjual";
  //     } else if ((product.bidded = false)) {
  //       button = "tertarik ingin nego";
  //     }
  //   }

  //   return button;
  // };

  useEffect(() => {
    requestAPI()
      .get(`/products/${params.slug}`)
      .then((response) => {
        if (response.data !== null) {
          setProduct({ ...response.data.data });
          setWished(response.data.data.wished);
          setLoading(false);
          // console.log(test);

          // console.log(response.data.data);
        } else {
          return Promise.reject({ errorMessage: "Product not available" });
        }
      })
      .catch((error) => {
        setProduct({ ...error });
      });
  }, [params.slug]);

  // console.log(test());

  return (
    <div>
      <div className={`${style["navbar-prev"]}`}>
        <SecondaryNavbar />
      </div>
      {isMobile && (
        <div className=" sticky-top  ">
          <Link to="/">
            <FontAwesomeIcon
              icon="fa-chevron-left"
              className={` position-absolute`}
              style={{
                fontSize: "20",
                top: 10,
                left: 10,
                color: "#7126B5",
                padding: "5px",
                textDecoration: "none",
              }}
            />
          </Link>
        </div>
      )}
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
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={image}
                        className={` img-fluid w-100 ${
                          isMobile ? "" : "rounded-4"
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
                      <i className="fa-solid fa-circle-chevron-left fa-2x"></i>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <i className="fa-solid fa-circle-chevron-right fa-2x"></i>
                    </button>
                  </>
                ) : (
                  <div
                    className="carousel-indicators"
                    style={{ position: "relative", top: "-75px" }}
                  >
                    {product.images?.map((image, index) => (
                      <button
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide-to={index}
                        className={`${index === 0 ? "active" : ""}`}
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
                    {product.categories.map((el) => el).join(", ")}
                  </p>
                  <p className="harga fw-semibold mb-0 mb-md-2">
                    Rp. {(+product.price).toLocaleString("id-ID")}
                  </p>
                  {user?.verified && product?.seller.id === user?.id ? (
                    <>
                      <Link to={`/form-produk/${params.slug}`}>
                        <button
                          type="submit"
                          className={`${style["btn_edit"]} mt-1`}
                        >
                          Edit{" "}
                        </button>{" "}
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className={`${
                          product?.bidded
                            ? "btn_primary_disabled"
                            : "btn_primary"
                        }`}
                        data-bs-target="#modalTawar"
                        data-bs-toggle={user && user?.verified ? "modal" : ""}
                        onClick={() => {
                          if (!user) {
                            navigate("/login");
                          } else if (!user?.verified) {
                            navigate("/info-akun");
                          }
                        }}
                        // disabled={product?.bidded ? true : false}
                      >
                        {product?.bidded
                          ? "Menunggu Respon Penjual"
                          : "Saya Tertarik dan Ingin Nego"}
                      </button>
                      <button
                        type="submit"
                        onClick={wishlistsHandler}
                        className={`${
                          loading ? "btn_edit_disabled" : "btn_edit"
                        } mb-3 mt-3`}
                      >
                        {wished
                          ? "Hapus dari Wishlist"
                          : "Tambahkan ke Wishlist"}
                      </button>
                    </>
                  )}

                  <ModalTawar
                    images={product.images}
                    name={product.name}
                    price={product.price}
                    id={product.id}
                  />
                </div>
              </div>
              <CardPenjual user={product?.seller} />
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

      {isMobile ? (
        user?.verified && product?.seller.id === user?.id ? (
          <>
            <Link to={`/form-produk/${params.slug}`}>
              <button type="submit" className={`${style["btn_edit_static"]}`}>
                Edit{" "}
              </button>{" "}
            </Link>
          </>
        ) : (
          <>
            <button
              type="submit"
              className={`${
                product?.bidded
                  ? "btn_primary_static_disabled"
                  : "btn_primary_static"
              } `}
              data-bs-toggle={user && user?.verified ? "modal" : ""}
              data-bs-target="#modalTawar"
              onClick={() => {
                if (!user) {
                  navigate("/login");
                } else if (!user?.verified) {
                  navigate("/info-akun");
                }
              }}
            >
              {product?.bidded
                ? "Menunggu Respon Penjual"
                : "Saya Tertarik dan Ingin Nego"}
            </button>
          </>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailProdukBuyer;
