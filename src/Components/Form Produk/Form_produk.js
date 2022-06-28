import React, { useState, useRef, useCallback } from "react";
import Axios from "axios";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Form_produk.module.css";
import axios from "axios";
import Select from "react-select";

const Info_produk = (props) => {
  const [categories, setCategories] = useState(null);
  const [files, setFiles] = useState([]);

  const options = [
    { value: "Hobi", label: "Hobi" },
    { value: "Kendaraan", label: "Kendaraan" },
    { value: "Baju", label: "Baju" },
    { value: "Elektronik", label: "Elektronik" },
    { value: "Kesehaan", label: "Kesehaan" },
  ];

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    // multiple: true,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles([...files, window.URL.createObjectURL(acceptedFiles[0])]);
      setFiles([
        ...files,
        {
          file: acceptedFiles[0],
          url: window.URL.createObjectURL(acceptedFiles[0]),
        },
      ]);
    },
  });

  // console.log(files);

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  const inputName = useRef();
  const inputPrice = useRef();
  const inputCategories = useRef();
  const inputDescription = useRef();

  // post to API
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    console.log(categories);
    const formData = new FormData();

    const submittedData = {
      name: inputName.current.value,
      price: inputPrice.current.value,
      description: inputDescription.current.value,
    };

    // set data
    for (let key in submittedData) {
      formData.append(key, submittedData[key]);
    }

    // set image
    files.forEach((file) => {
      formData.append("images", file.file, file.file.name);
    });

    // set categories
    categories.forEach((el) => {
      formData.append("categories[]", el.value);
    });

    const res = await axios.post(
      "https://ancient-everglades-98776.herokuapp.com/api/products",
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTY1NTkxODI1NX0.34sbx39M_ds7zgZlfu4kFe9ZBSXM5GO-C8A2SmomnME",
        },
      }
    );
    console.log(res.data);
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row justify-content-center">
              <div className="col-lg-1">
                <Link to="/homepage">
                  <FontAwesomeIcon
                    icon="fa-arrow-left"
                    className={`${style["fa-arrow-left"]}`}
                  />
                </Link>
              </div>
              <div className="col-lg-9">
                <h5 className={`title ${style.title} mb-4`}>
                  Lengkapi Detail Produk
                </h5>
                <form
                  className={style.form_produk}
                  onSubmit={formSubmitHandler}
                >
                  <div className="mb-2">
                    <label>Nama Produk</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      ref={inputName}
                      placeholder="Nama Produk"
                      className={`${style["field_produk"]} form-control`}
                      autoComplete="true"
                      data-testid="input-nama"
                    />
                  </div>
                  <label>Harga Produk</label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    ref={inputPrice}
                    placeholder="Harga Produk"
                    className={`${style["field_produk"]} form-control`}
                    autoComplete="true"
                    data-testid="input-harga"
                  />
                  <label>Kategori</label>
                  <Select
                    // defaultValue={[colourOptions[2], colourOptions[3]]}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        borderRadius: "14px",
                        border: "1px solid #D0D0D0",
                        height: "48px",
                        fontSize: "14px",
                        marginBottom: "12px",
                      }),
                    }}
                    isMulti
                    name="colors"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    ref={inputCategories}
                    onChange={setCategories}
                  />
                  {/* <select
                    defaultValue={""}
                    name="categories"
                    ref={inputCategories}
                    className={`${style["field_produk"]} form-select`}
                    label="Pilih kategori"
                  >
                    <option value="" disabled>
                      Pilih Kategori
                    </option>
                    <option value="0">Hobi</option>
                    <option value="1">Kendaraan</option>
                    <option value="2">Baju</option>
                    <option value="3">Elektronik</option>
                    <option value="4">Kesehatan</option>
                  </select> */}
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Deskripsi
                  </label>
                  <textarea
                    name="description"
                    ref={inputDescription}
                    className={`${style["field_deskripsi"]} form-control`}
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Contoh: Jalan Ikan Hiu 33"
                  ></textarea>
                  <label>Foto Produk</label>
                  <section>
                    <div
                      {...getRootProps({ className: "dropzone" })}
                      multiple={true}
                      className="d-flex mb-4"
                    >
                      <input {...getInputProps()} />
                      {files.length < 4 && (
                        <img
                          src="./img/upload_photo.png"
                          alt=""
                          className="img-fluid"
                          style={{
                            height: "100px",
                            width: "100px",
                          }}
                        />
                      )}
                      {files.length > 0 &&
                        files.map((a) => (
                          <img
                            src={a.url}
                            alt=""
                            className=""
                            style={{
                              pointerEvents: "none",
                              height: "100px",
                              width: "100px",
                              marginLeft: "10px",
                              objectFit: "cover",
                            }}
                          />
                        ))}
                    </div>
                    <aside></aside>
                  </section>

                  <div className={style.button}>
                    <Link to="/detail-produk">
                      <button
                        type="submit"
                        className={`${style["btn_preview"]}`}
                      >
                        Preview
                      </button>
                    </Link>
                    <button
                      type="submit"
                      className={`${style["btn_terbitkan"]}`}
                    >
                      Terbitkan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info_produk;
