import React, { useEffect, useState } from "react";
import axios from "axios";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";
import CardProduk from "../CardProduk/CardProduk";
import { Link } from "react-router-dom";
import style from "./SearchResult.module.css";

const SearchResult = (props) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("https://ancient-everglades-98776.herokuapp.com/api/products")
      .then((response) => {
        setProducts(response.data.data);
      });
  }, []);

  return (
    <>
      <SecondaryNavbar title="Hasil Pencarian" />
      <main id="main">
        <div className="container">
          <div className={`${style["search-result"]}`}>
            <h4 className={`${style["title"]}`}>Hasil Pencarian : </h4>
            <div className="container mt-4">
              <div className="row row-cols-2 row-cols-lg-6 px-2">
                {products?.map((product, index) => {
                  return (
                    <div>
                      <CardProduk key={`product-${index}`} product={product} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`${style["pagination"]}`}>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <Link
                    to=""
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="" className="page-link" href="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="" className="page-link" href="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="" className="page-link" href="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="" className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
};

export default SearchResult;
