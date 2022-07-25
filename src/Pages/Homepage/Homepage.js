import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import requestAPI from "../../requestMethod";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";
import style from "./Homepage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Carousel from "../../Components/Carousel/Carousel";
// import Category from "../../Components/Category/Category";
import qs from "query-string";
import CardProduk from "../../Components/CardProduk/CardProduk";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./button.css";

fontawesome.library.add(faPlus);

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(qs.parse(location.search));
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(null);
  // const search = qs.parse(location.search);
  const search = useSelector((state) => state.search.data);

  const handlePagination = (e) => {
    setQuery({ ...query, page: e.currentTarget.id });
  };

  // if (search) {
  //   setQuery({ ...query, search: search });
  // }

  console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
      let lastQ = query;
      console.log(search);
      if (search) {
        lastQ.search = search;
        // let { page, ...rest } = lastQ;
        // lastQ = rest;
      } else if (qs.parse(location.search).search) {
        lastQ.search = qs.parse(location.search).search;
      } else {
        let { search, ...rest } = query;
        lastQ = rest;
      }

      // if (search && ) {
      // }

      navigate({ pathname: location.pathname, search: qs.stringify(lastQ) });

      setLoading(true);
      let url = `/products/?${qs.stringify(lastQ)}`;

      const response = await requestAPI().get(url);
      setProducts(response.data.data.products);
      setTotalPage(Math.ceil(response.data.data.count / 24));

      // page
      const pageItems = document.getElementsByClassName("page-item");
      for (const element of pageItems) {
        element.classList.remove("active");
      }
      if (query.page) {
        document.getElementById(query.page)?.classList.add("active");
      } else {
        document.getElementById(1)?.classList.add("active");
      }

      // categories
      const ctgBtns = document.getElementsByClassName("btn_ctg");
      for (const element of ctgBtns) {
        element.classList.remove("btn_active");
      }
      if (query.categories) {
        document.getElementById(query.categories)?.classList.add("btn_active");
      } else {
        document.getElementById("semua")?.classList.add("btn_active");
      }

      setLoading(false);
    };

    fetchPosts();
  }, [query, search]);

  const filter = useRef(null);

  const filterCategory = (event) => {
    const cat = event.currentTarget.id;
    let newQry;
    if (cat === "semua") {
      const { categories, ...rest } = query;
      newQry = rest;
    } else {
      newQry = { ...query, categories: cat };
    }

    setQuery(() => {
      const { page, ...rest } = newQry;
      return rest;
    });
  };

  const handleSort = (event) => {
    setQuery({ ...query, sort: event.currentTarget.value });
  };

  return (
    <>
      <Navbar />
      <main id="main">
        <div className="container-carousel">
          <Carousel />
        </div>
        <section id="category">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <p className={`${style["title-category"]} px-2`}>
                  Telusuri Kategori
                </p>
                <div className="btn-container d-flex justify-content-between align-items-center">
                  <div className="btn-wrapper px-2">
                    <button
                      ref={filter}
                      onClick={filterCategory}
                      id="semua"
                      className={`${style["btn_categories"]}  btn_ctg btn mt-1 mb-2`}
                    >
                      <FontAwesomeIcon
                        icon="fa-search"
                        className={`${style["fa-search"]}`}
                      />{" "}
                      Semua
                    </button>
                    <button
                      ref={filter}
                      onClick={filterCategory}
                      id="Hobi"
                      className={`${style["btn_categories"]}   btn_ctg btn mt-1 mb-2`}
                    >
                      <FontAwesomeIcon
                        icon="fa-search"
                        className={`${style["fa-search"]}`}
                      />{" "}
                      Hobi
                    </button>
                    <button
                      ref={filter}
                      onClick={filterCategory}
                      id="Kendaraan"
                      className={`${style["btn_categories"]} btn_ctg btn mt-1 mb-2`}
                    >
                      <FontAwesomeIcon
                        icon="fa-search"
                        className={`${style["fa-search"]} `}
                      />{" "}
                      Kendaraan
                    </button>
                    <button
                      ref={filter}
                      onClick={filterCategory}
                      id="Baju"
                      className={`${style["btn_categories"]} btn_ctg btn mt-1 mb-2`}
                    >
                      <FontAwesomeIcon
                        icon="fa-search"
                        className={`${style["fa-search"]}`}
                      />{" "}
                      Baju
                    </button>
                    <button
                      ref={filter}
                      onClick={filterCategory}
                      id="Elektronik"
                      className={`${style["btn_categories"]} btn_ctg btn mt-1 mb-2`}
                    >
                      <FontAwesomeIcon
                        icon="fa-search"
                        className={`${style["fa-search"]}`}
                      />{" "}
                      Elektronik
                    </button>
                    <button
                      ref={filter}
                      onClick={filterCategory}
                      id="Kesehatan"
                      className={`${style["btn_categories"]} btn_ctg btn mt-1 mb-2`}
                    >
                      <FontAwesomeIcon
                        icon="fa-search"
                        className={`${style["fa-search"]}`}
                      />{" "}
                      Kesehatan
                    </button>
                  </div>
                  <div className="sort-wrapper me-2">
                    <select
                      name=""
                      id=""
                      onChange={handleSort}
                      defaultValue={query.sort ? query.sort : ""}
                      className={`${style["sort-select"]} form-select px-4`}
                    >
                      <option
                        className={`${style["sort-option"]}`}
                        value=""
                        disabled
                      >
                        sort
                      </option>
                      <option
                        className={`${style["sort-option"]}`}
                        value="latest"
                      >
                        Latest
                      </option>
                      <option
                        className={`${style["sort-option"]}`}
                        value="oldest"
                      >
                        Oldest
                      </option>
                      <option
                        className={`${style["sort-option"]}`}
                        value="cheapest"
                      >
                        Cheapest
                      </option>
                      <option
                        className={`${style["sort-option"]}`}
                        value="expensive"
                      >
                        Expensive
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row row-cols-2 row-cols-lg-6 px-3">
                  {loading ? (
                    <h5 className="mb-5 fw-bold">Loading...</h5>
                  ) : (
                    products?.map((product, index) => {
                      return (
                        <div>
                          <CardProduk
                            key={`product-${index}`}
                            product={product}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
            <div className={`${style["pagination"]} `}>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {query &&
                    [...Array(totalPage)].map((x, i) => (
                      <li
                        className={`${style["number"]} page-item`}
                        onClick={handlePagination}
                        id={i + 1}
                      >
                        <div className={`${style["page"]} page-link`}>
                          {i + 1}
                        </div>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </div>
          {/* {totalPage !== null && renderPagination()} */}
        </section>
        <section id="add-button">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Link to="form-produk">
                <button
                  type="submit"
                  className={`${style["btn_small"]} text-white btn mt-2 mb-2`}
                >
                  <FontAwesomeIcon
                    icon="fa-plus"
                    className={`${style["fa-plus"]}`}
                  />{" "}
                  Add
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;
