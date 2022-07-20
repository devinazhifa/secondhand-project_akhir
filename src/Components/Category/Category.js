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

export const Category = (props) => {

  // const [products, setProducts] = useState(null);
  // const ref = useRef(null)

  // const filterCategory = (event) => {
  //   axios.get(`https://ancient-everglades-98776.herokuapp.com/api/products/?categories=${event.currentTarget.id}`)
  //   .then((response) => {
  //     setProducts(response.data.data);
  //   });
  // }

  return (
    <div className="btn-wrapper px-2">
      <button type="submit" ref={props.ref} onClick={props.filterCategory} id="" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Semua</button>
      <button type="submit" ref={props.ref} onClick={props.filterCategory} id="Hobi" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Hobi</button>
      <button type="submit" ref={props.ref} onClick={props.filterCategory} id="Kendaraan" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Kendaraan</button>
      <button type="submit" ref={props.ref} onClick={props.filterCategory} id="Baju" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Baju</button>
      <button type="submit" ref={props.ref} onClick={props.filterCategory} id="Elektronik" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Elektronik</button>
      <button type="submit" ref={props.ref} onClick={props.filterCategory} id="Kesehatan" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Kesehatan</button>
    </div>    
  )
}

export default Category;
