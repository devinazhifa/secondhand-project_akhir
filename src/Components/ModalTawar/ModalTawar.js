import React, { useRef, useState } from "react";
import { deviceSize } from "../../Responsive";
import style from "./ModalTawar.module.css";
import { useMediaQuery } from "react-responsive";
import requestAPI from "../../requestMethod";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalTawar = (props) => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const bidPrice = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const body = {
      bidPrice: bidPrice.current.value,
    };

    await requestAPI()
      .post(`/bids/product/${props.id}`, body)
      .then((response) => {
        toast.success("Produk berhasil dinego!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          icon: false,
        });

        console.log(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Produk gagal dinego!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          icon: false,
        });
      });

    console.log(bidPrice);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div
          className="modal fade"
          id="modalTawar"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered h-100 m-0 mx-md-auto overflow-hidden">
            <div
              className="modal-content px-2 rounded-4 pb-1 position-absolute"
              style={{
                maxWidth: "425px",
                position: "absolute",
                bottom: isMobile ? "-10px" : "auto",
                left: 0,
                right: 0,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                className="modal-header p-0 pt-3 p-md-2"
                style={{ borderBottom: "none" }}
              >
                {isMobile ? (
                  <hr
                    class="mx-auto rounded-pill"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    style={{
                      height: "6px",
                      width: "4rem",
                      backgroundColor: "black",
                    }}
                  ></hr>
                ) : (
                  <button
                    type="button"
                    class="btn-close me-2 mt-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                )}
              </div>
              <div className="body mx-4 my-4">
                <p className="fw-semibold">Masukkan Harga Tawarmu</p>
                <p className="text=muted" style={{ color: "#8A8A8A" }}>
                  Harga tawaranmu akan diketahui penjual, jika penjual cocok
                  kamu akan segera dihubungi penjual.
                </p>
                <div className="card rounded-4">
                  <div className={`${style["card_profile"]} card-body`}>
                    <img
                      src={props.images[0]}
                      className="rounded-3"
                      style={{
                        height: isMobile ? "48px" : "48px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="col-lg-10 ms-3">
                      <div>{props.name}</div>
                      <div className="text">
                        Rp. {(+props.price).toLocaleString("id-ID")}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="t-3">Harga Tawar</p>
                <input
                  type="number"
                  id="bid"
                  name="bidPrice"
                  ref={bidPrice}
                  placeholder="20000"
                  max={+props.price}
                  min={1}
                  className={`${style["field_produk"]} form-control`}
                  autoComplete="true"
                  data-testid="input-harga_tawar"
                />
              </div>
              <input
                type="submit"
                id="submit"
                className={`${style["btn_kontak"]} mx-4 mb-4 d-flex align-items-center justify-content-center`}
                value="Kirim"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalTawar;
