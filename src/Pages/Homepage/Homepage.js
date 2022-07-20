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
import CardProduk from "../../Components/CardProduk/CardProduk";
import { Link } from "react-router-dom";

fontawesome.library.add(faPlus);

const Homepage = () => {
  const [products, setProducts] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [sorting, setSorting] = useState(null);
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(null);

  const handlePagination = (e) => {
    setPagination(e.currentTarget.id)
  }

  const renderPagination = () => {

    return (
      <>
      <div className={`${style["pagination"]}`}>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
              {[...Array(totalPage)].map((x, i) =>
                <li className={`${i+1 === pagination ? 'active' : ''} page-item`} onClick={handlePagination} id={i+1}>
                  <div className={`${style["page"]} page-link`} >
                    {i+1}
                  </div>
                </li>
              )}
              </ul>
            </nav>
          </div>
      </>
    )
  }

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let url = `/products/?page=${pagination}&`
      if ( categoryFilter !== null ) {
        url = url + "categories=" + categoryFilter + "&"
      }
      if ( sorting !== null ) {
        url = url + "sort=" + sorting + "&"
      }

      const response = await requestAPI().get(url)
      setProducts(response.data.data.products);
      setTotalPage( Math.ceil(response.data.data.count / 24));
      setLoading(false);
    }
    fetchPosts();
    console.log(categoryFilter)
  }, [categoryFilter, sorting, pagination]);

  const filter = useRef(null)

  const filterCategory = (event) => {
    // axios.get(`https://ancient-everglades-98776.herokuapp.com/api/products/?categories=${event.currentTarget.id}`)
    // .then((response) => {
    //   setProducts(response.data.data);
    // });
    setCategoryFilter(event.currentTarget.id)
  }

  // const sorting = useRef(null)

  const sortProducts = (event) => {
    // axios.get(`https://ancient-everglades-98776.herokuapp.com/api/products/?sort=${event.currentTarget.id}`)
    // .then((response) => {
    //   setProducts(response.data.data);
    // });
    setSorting(event.currentTarget.id)
  }

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
                    <button ref={filter} onClick={filterCategory} id="" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Semua</button>
                    <button ref={filter} onClick={filterCategory} id="Hobi" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Hobi</button>
                    <button ref={filter} onClick={filterCategory} id="Kendaraan" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Kendaraan</button>
                    <button ref={filter} onClick={filterCategory} id="Baju" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Baju</button>
                    <button ref={filter} onClick={filterCategory} id="Elektronik" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Elektronik</button>
                    <button ref={filter} onClick={filterCategory} id="Kesehatan" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Kesehatan</button>
                  </div>
                  <div className="sort-wrapper me-2">
                    <div className="dropdown">
                      <button className={`${style["btn_dropdown"]} btn btn-secondary dropdown-toggle`} type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort by
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className={`${style["btn_item"]} dropdown-item`} onClick={sortProducts} id="latest" >Latest</button></li>
                        <li><button className={`${style["btn_item"]} dropdown-item`} onClick={sortProducts} id="oldest" >Oldest</button></li>
                        <li><button className={`${style["btn_item"]} dropdown-item`} onClick={sortProducts} id="cheapest" >Cheapest</button></li>
                        <li><button className={`${style["btn_item"]} dropdown-item`} onClick={sortProducts} id="expensive" >Expensive</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row row-cols-2 row-cols-lg-6 px-3">
                  { loading ? (
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
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          { totalPage !== null &&
          renderPagination()
          }
          {/* <div className={`${style["pagination"]}`}>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <Link
                    to=""
                    className={`${style["page"]} page-link`}
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="" className={`${style["page"]} page-link`} href="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="" className={`${style["page"]} page-link`} href="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="" className={`${style["page"]} page-link`} href="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="" className={`${style["page"]} page-link`} href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div> */}
        </section>
        <section id="add-button">
          <div className="row">
            <div className="col d-flex justify-content-center">
                <Link  to='form-produk'>
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
