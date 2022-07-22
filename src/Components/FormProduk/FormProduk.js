import React, { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./FormProduk.module.css";
import Select from "react-select";
import requestAPI from "../../requestMethod";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../store/product";
import { useEffect } from "react";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import plus from "../../upload_photo.png";
const InfoProduk = (props) => {
  const [categories, setCategories] = useState([]);
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(
    useSelector((state) => state.product.data)
  );
  const token = useSelector((state) => state.user.data.token);
  const params = useParams();

  const getProduct = async () => {
    const res = await requestAPI().get(`/products/${params.slug}`);

    res.data.data.categories = res.data.data.categories.map((item) => {
      return {
        value: item,
        label: item,
      };
    });

    // dispatch(productSlice.actions.addProduct(res.data.data));
    setProduct(res.data.data);
  };

  useEffect(() => {
    console.log(location);
    if (
      (product && params.slug && params.slug !== product.slug) ||
      (!product && location.state != "editing-product")
    ) {
      // console.log("need hapus");
      setProduct(null);
      dispatch(productSlice.actions.removeProduct(product));
    }

    if (!product && params.slug) {
      getProduct();
    }

    console.log(product?.images);

    if (product) {
      inputName.current.value = product.name;
      inputPrice.current.value = product.price;
      inputDescription.current.value = product.description;
      setCategories(product.categories);
      if (product.images[0].type) {
        setFiles(product.images);
      } else {
        setFiles(() =>
          product.images.map((img) => {
            return {
              type: "imageOld",
              // file: img,
              url: img,
            };
          })
        );
      }
    }

    if (!product) {
      inputName.current.value = null;
      inputPrice.current.value = null;
      inputDescription.current.value = null;
      setCategories([]);
      setFiles([]);
    }
  }, [product]);

  const successToast = () => {
    toast.success("Produk berhasil di terbitkan!", {
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
  };

  const options = [
    { value: "Hobi", label: "Hobi" },
    { value: "Kendaraan", label: "Kendaraan" },
    { value: "Baju", label: "Baju" },
    { value: "Elektronik", label: "Elektronik" },
    { value: "Kesehatan", label: "Kesehatan" },
  ];

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      // setFiles([...files, window.URL.createObjectURL(acceptedFiles[0])]);
      setFiles([
        ...files,
        {
          type: "imageNew",
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
    const action = event.nativeEvent.submitter.name;
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
      if (file.type === "imageNew") {
        formData.append("images", file.file, file.file.name);
      } else {
        formData.append("imagesBefore[]", file.url);
      }
    });

    // set categories
    categories.forEach((el) => {
      formData.append("categories[]", el.value);
    });

    if (action === "publish") {
      try {
        await requestAPI()
          .post("/products/", formData, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((response) => {
            toast.success("Produk berhasil diterbitkan!", {
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
        navigate("/daftar-jual");
      } catch (error) {
        toast.error("Produk gagal diterbitkan!", {
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
      }
    } else if (action === "update") {
      try {
        const res = await requestAPI()
          .put(`/products/${product.id}`, formData, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((response) => {
            dispatch(productSlice.actions.addProduct(response.data.data));
            toast.success("Produk berhasil diperbarui!", {
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

        navigate("/daftar-jual");
      } catch (error) {
        console.log(error);
        toast.error("Produk gagal diperbarui!", {
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
      }
    } else {
      var data = {
        name: formData.get("name"),
        price: formData.get("price"),
        description: formData.get("description"),
        categories: categories,
        images: files,
        slug: params.slug ? params.slug : null,
        id: params.slug ? product.id : null,
      };

      dispatch(productSlice.actions.addProduct(data));
      navigate("/preview-produk");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row justify-content-center">
              <div
                className={`${style["back-button"]} col-lg-1`}
                onClick={() => navigate(-1)}
              >
                <FontAwesomeIcon
                  icon="fa-arrow-left"
                  className={`${style["fa-arrow-left"]}`}
                />
              </div>
              <div className="col-lg-9">
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
                      value={
                        categories
                          ? options.filter((option) => {
                              return categories
                                .map((el) => el.value)
                                .includes(option.value);
                            })
                          : ""
                      }
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
                      value={categories}
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
                            src={plus}
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
                    <button
                      type="submit"
                      className={`${style["btn_preview"]}`}
                      formAction={"preview"}
                      name="preview"
                    >
                      Preview
                    </button>
                    {!params.slug ? (
                      <input
                        type="submit"
                        className={`${style["btn_terbitkan"]}`}
                        formAction={"publish"}
                        name="publish"
                        value="Terbitkan"
                      />
                    ) : (
                      <input
                        type="submit"
                        className={`${style["btn_terbitkan"]}`}
                        formAction={"update"}
                        name="update"
                        value="Update"
                      />
                    )}

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
