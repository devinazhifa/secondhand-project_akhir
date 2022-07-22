import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./FormAkun.module.css";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import kotas from "../../data/kota.js";
import "./disable.css";
import requestAPI from "../../requestMethod";
import userSlice from "../../store/user";
import { toast } from "react-toastify";

const FormAkun = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data.user);
  const [loading, setLoading] = useState(false);
  const name = useRef();
  const city = useRef();
  const address = useRef();
  const phone = useRef();
  var imageSize = {
    width: "96px",
    height: "96px",
    borderRadius: "10px",
    objectFit: "cover",
  };

  // useState(()=>{
  //   name.current.value = user.name;
  //   setCity(user.city)
  //   setAddress(user.address)
  //   setPhone(user.phone)
  // },[])

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

  // console.log(!phone.current.value);
  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  const formSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const formData = new FormData();

      // const file = acceptedFiles[0].file;

      formData.append("name", name.current.value);
      formData.append("city", city.current.value);
      formData.append("address", address.current.value.toString());
      formData.append("phone", phone.current.value);
      if (file) {
        formData.append("profilePicture", file.file, file.file.name);
      }

      const res = await requestAPI().put("/users/", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      dispatch(userSlice.actions.updateUser(res.data.data));
      toast.success("Akun berhasil diperbarui", {
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
      setLoading(false);
    } catch (error) {
      toast.error("Akun gagal diperbarui", {
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
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form
              className="row justify-content-center"
              onSubmit={formSubmitHandler}
            >
              <div className={`${style["back-button"]} col-lg-1`}>
                <div onClick={() => navigate("/")}>
                  <FontAwesomeIcon
                    icon="fa-arrow-left"
                    className={`${style["fa-arrow-left"]}`}
                  />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="profile_picture">
                  <div
                    {...getRootProps({ className: "dropzone" })}
                    className="text-center position-relative"
                  >
                    <input {...getInputProps()} />
                    <img
                      // style={{
                      //   height: "96px",
                      //   width: "96px",
                      //   objectFit: "cover",
                      // }}
                      src={
                        file
                          ? file.url
                          : user?.profilePicture
                          ? user.profilePicture
                          : "./img/profile_picture.png"
                      }
                      alt=""
                      style={imageSize}
                    />
                    <input
                      tabIndex={-1}
                      className=" position-absolute top-50 start-50"
                      style={{ opacity: 0, height: "2px" }}
                      name=""
                      defaultValue={file}
                      required={!user?.verified}
                    />
                  </div>
                  {/* <aside>
                    <ul>{files}</ul>
                  </aside> */}
                </div>
                <div className={style.form_akun}>
                  <label>Nama*</label>
                  <input
                    type="text"
                    id="nama"
                    required={true}
                    placeholder="Nama"
                    defaultValue={user.name}
                    ref={name}
                    className={`${style["field_akun"]} form-control`}
                    autoComplete="true"
                    data-testid="input-nama"
                  />
                  <label>Kota*</label>
                  <select
                    className={`${style["field_akun"]} form-control form-select`}
                    label="Pilih kota"
                    required={true}
                    defaultValue={user.city}
                    ref={city}
                  >
                    <option value={""} disabled selected={!user.city}>
                      --pilih kota--
                    </option>
                    {kotas.map((kota, index) => (
                      <option key={index} value={kota}>
                        {kota}
                      </option>
                    ))}
                  </select>
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Alamat*
                  </label>
                  <textarea
                    required={true}
                    className={`${style["field_address"]} form-control`}
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Contoh: Jalan Ikan Hiu 33"
                    defaultValue={user.address}
                    ref={address}
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
                      type="number"
                      id="no_hp"
                      required={true}
                      placeholder="Contoh: 8123456789"
                      className={`${style["field_akun"]} form-control`}
                      autoComplete="true"
                      data-testid="input-no_hp"
                      defaultValue={user.phone}
                      ref={phone}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`${
                      style[loading ? "btn_primary_disabled" : "btn_primary"]
                    }  "`}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAkun;
