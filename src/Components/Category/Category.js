import React from "react";
import style from "./Category.module.css";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";
import { useEffect } from "react";

fontawesome.library.add(faSearch);

export const Category = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(qs.parse(path.search));

  const testChange = (e) => {
    const cat = e.currentTarget.id;
    if (cat == "semua") {
      setQuery(() => {
        const { categories, ...rest } = query;
        return rest;
      });
    } else {
      setQuery({ ...query, categories: cat });
    }
    console.log(query);
  };

  useEffect(() => {
    navigate({ pathname: path.pathname, search: qs.stringify(query) });
  }, [query]);

  return (
    <div className="btn-wrapper px-2">
      <button
        className={`${style["btn_categories"]} btn mt-1 mb-2`}
        onClick={testChange}
        id="semua"
      >
        <FontAwesomeIcon icon="fa-search" className={`${style["fa-search"]}`} />{" "}
        Semua
      </button>
      <button
        className={`${style["btn_categories"]} btn mt-1 mb-2`}
        onClick={testChange}
        id="Hobi"
      >
        <FontAwesomeIcon icon="fa-search" className={`${style["fa-search"]}`} />{" "}
        Hobi
      </button>
      <button
        className={`${style["btn_categories"]} btn mt-1 mb-2`}
        onClick={testChange}
        id="Kendaraan"
      >
        <FontAwesomeIcon icon="fa-search" className={`${style["fa-search"]}`} />{" "}
        Kendaraan
      </button>
      <button
        className={`${style["btn_categories"]} btn mt-1 mb-2`}
        onClick={testChange}
        id="Baju"
      >
        <FontAwesomeIcon icon="fa-search" className={`${style["fa-search"]}`} />{" "}
        Baju
      </button>
      <button
        className={`${style["btn_categories"]} btn mt-1 mb-2`}
        onClick={testChange}
        id="Elektronik"
      >
        <FontAwesomeIcon icon="fa-search" className={`${style["fa-search"]}`} />{" "}
        Elektronik
      </button>
      <button
        className={`${style["btn_categories"]} btn mt-1 mb-2`}
        onClick={testChange}
        id="Kesehatan"
      >
        <FontAwesomeIcon icon="fa-search" className={`${style["fa-search"]}`} />{" "}
        Kesehatan
      </button>
    </div>
  );
};

export default Category;
