import React from 'react'
import style from './CardProduk.module.css'

const CardProduct = () => {
  return (
    <div className={`${style['card-container']} mb-4`}>
        <div className={`${style['card-img']}`}>
            <img src="https://i.ibb.co/W2zzNzN/Rectangle-24.png" alt="product" border="0"/>
        </div>
        <div className='card-desc'>
            <h6 className='card-title m-0 p-0 mt-2'>Jam Tangan Casio</h6>
            <p className='card-text m-0 p-0 mt-2 text-muted'>Aksesoris</p>
            <p  className='card-text m-0 p-0 mt-2'>Rp 250.000</p>
        </div>
    </div>
  )
}

export default CardProduct