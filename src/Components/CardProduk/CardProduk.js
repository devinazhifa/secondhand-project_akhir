import React from 'react'
import { Link } from 'react-router-dom'
import style from './CardProduk.module.css'

const CardProduk = (props) => {
  return (
    <>
    <Link to={`/detail-produk-buyer/${props.product.slug}`}>
      <div className={`${style['card-container']} mb-4`}>
        <div className={`${style['card-img']}`}>
          <img src={props.product.images[0]} alt="product" border="0" />
        </div>
        <div className={`${style['card-desc']}`}>
          <h6 className='card-title m-0 p-0 mt-2'>{props.product.name}</h6>
          <p className='card-text m-0 p-0 mt-2 text-muted'>{props.product.categories}</p>
          <p className='card-text m-0 p-0 mt-2'>{props.product.price}</p>
        </div>
      </div>
    </Link>
    </>
  )
}

export default CardProduk