import React from "react";
import { Link } from "react-router-dom";
import style from "./FormAkun.module.css";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FormAkun = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFile({
        file: acceptedFiles[0],
        url: window.URL.createObjectURL(acceptedFiles[0]),
      });
    },
  });
  const [file, setFile] = useState(null);
  // const files = acceptedFiles.map((file) =>
  //   window.URL.createObjectURL(acceptedFiles[0])
  // );

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row justify-content-center">
              <div className={`${style["back-button"]} col-lg-1`}>
                <Link to="/homepage">
                  <FontAwesomeIcon
                    icon="fa-arrow-left"
                    className={`${style["fa-arrow-left"]}`}
                  />
                </Link>
              </div>
              <div className="col-lg-9">
                <div className="profile_picture">
                  <div
                    {...getRootProps({ className: "dropzone" })}
                    className="text-center"
                  >
                    <input {...getInputProps()} />
                    <img
                      style={{
                        height: "96px",
                        width: "96px",
                        objectFit: "cover",
                      }}
                      src={!file ? "./img/profile_picture.png" : file.url}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  {/* <aside>
                    <ul>{files}</ul>
                  </aside> */}
                </div>
                <form className={style.form_akun}>
                  <label>Nama*</label>
                  <input
                    type="nama"
                    id="nama"
                    placeholder="Nama"
                    className={`${style["field_akun"]} form-control`}
                    autoComplete="true"
                    data-testid="input-nama"
                  />
                  <label>Kota*</label>
                  <select
                    className={`${style["field_akun"]} form-control form-select`}
                    label="Pilih kota"
                  >
                    <option value="" disabled selected>
                      Pilih Kota
                    </option>
                    <option value="1">Bandung</option>
                    <option value="2">Bekasi</option>
                    <option value="3">Bogor</option>
                  </select>
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Alamat*
                  </label>
                  <textarea
                    className={`${style["field_address"]} form-control`}
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Contoh: Jalan Ikan Hiu 33"
                  ></textarea>
                  <label>No Handphone*</label>
                  <div className="input-group pt-2">
                    <span
                      class="input-group-text"
                      style={{ height: "48px" }}
                      id="basic-addon1"
                    >
                      +62
                    </span>

                    <input
                      type="no_hp"
                      id="no_hp"
                      placeholder="Contoh: 8123456789"
                      className={`${style["field_akun"]} form-control`}
                      autoComplete="true"
                      data-testid="input-no_hp"
                    />
                  </div>
                  <Link to="/homepage">
                    <button type="submit" className={`${style["btn_primary"]}`}>
                      Simpan
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAkun;
