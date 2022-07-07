
import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  Fragment,
} from "react";
import Axios from "axios";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./FormProduk.module.css";
import axios from "axios";
import Select from "react-select";
import { ToastContainer, toast, Zoom , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InfoProduk = (props) => {
  const [categories, setCategories] = useState([]);
  const [files, setFiles] = useState([]);
  const successToast = () =>{
    toast.success('Produk berhasil di terbitkan!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:'colored',
      icon: false,
      });
  }

  const options = [
    { value: "Hobi", label: "Hobi" },
    { value: "Kendaraan", label: "Kendaraan" },
    { value: "Baju", label: "Baju" },
    { value: "Elektronik", label: "Elektronik" },
    { value: "Kesehaan", label: "Kesehaan" },
  ];

  const { getRootProps, getInputProps } = useDropzone({
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
                      required
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
                    required
                  />
                  <label>Kategori</label>
                  <div className=" position-relative">
                    <Select
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
                      options={options}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      ref={inputCategories}
                      onChange={setCategories}
                      placeholder="Kategori Produk"
                      required
                    />
                    <input
                      tabIndex={-1}
                      className=" position-absolute top-50 start-50"
                      style={{ opacity: 0, height: "2px" }}
                      name=""
                      required
                      defaultValue={categories}
                    />
                  </div>

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
                    required
                  ></textarea>
                  <label>Foto Produk</label>
                  <section>
                    <div className="row justify-content-md-start ">
                      <input {...getInputProps()} />
                      {files.length < 4 && (
                        <div className="col-4 mt-2 col-md-2 position-relative">
                          <img
                            {...getRootProps({ className: "dropzone" })}
                            src="./img/upload_photo.png"
                            alt=""
                            className=""
                            style={{
                              height: "100px",
                              width: "100px",
                              paddingRight: "0",
                              pointerEvents:
                                files.length <= 4 ? "auto" : "none",
                            }}
                          />
                          <input
                            tabIndex={-1}
                            className=" position-absolute top-50 start-50"
                            style={{ opacity: 0, height: "2px" }}
                            name=""
                            defaultValue={files}
                            required
                          />
                        </div>
                      )}
                      {files.length > 0 &&
                        files.map((a, index) => (
                          <div
                            className="col-4 mt-2 col-md-2"
                            style={{ paddingRight: "0" }}
                            key={index}
                          >
                            <div className=" position-relative">
                              <FontAwesomeIcon
                                icon="fa-times"
                                className={`${style["icon_cross"]} position-absolute`}
                                onClick={() => {
                                  let arr = [...files];
                                  let index = arr.indexOf(a);
                                  if (index !== -1) {
                                    arr.splice(index, 1);
                                    setFiles(arr);
                                  }
                                }}
                              />
                            </div>
                            <img
                              src={a.url}
                              alt=""
                              style={{
                                height: "100px",
                                width: "100px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
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
                      onClick={successToast}
                    >
                      Terbitkan
                    </button>

                    {/* <Link to='/detail-produk'><button type='submit' className={`${style['btn_preview']}`}>Preview</button></Link>
                    <button type='submit' onClick={successToast} className={`${style['btn_terbitkan']}`}>Terbitkan</button> */}

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


export default InfoProduk;
