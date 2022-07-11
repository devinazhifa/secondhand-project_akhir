import React from 'react'
import style from './Category.module.css'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faSearch);

export const Category = () => {

  return (
    <div className="btn-wrapper px-2">
        <button type="submit" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Semua</button>
        <button type="submit" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Hobi</button>
        <button type="submit" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Kendaraan</button>
        <button type="submit" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Baju</button>
        <button type="submit" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Elektronik</button>
        <button type="submit" className={`${style['btn_categories']} btn mt-1 mb-2`}><FontAwesomeIcon icon="fa-search"  className={`${style['fa-search']}`}/> Kesehatan</button>
    </div>    
  )
}

export default Category
        