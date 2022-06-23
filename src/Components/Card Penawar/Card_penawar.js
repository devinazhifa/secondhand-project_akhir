import React from 'react'
import style from './Card_penawar.module.css'

function Card_penawar() {
  return (
    <div>
      <div className='card-body'>
        <div className={`${style['card_profile']} card-body`}>
          <img src='./img/produk_tawar.png'/>
          <div className='col ms-3'>
            <div className='row'>
              <div className={`${style.description} col`}>
                Penawaran Produk
              </div>
              <div className={`${style.description} col text-end`}>
                11 Juni 2022
              </div>
            </div>
              <h6>Jam Tangan Casio</h6>
              <h6>Rp 250.000</h6>
              <h6>Ditawar Rp 200.000</h6>
            <div className='justify-content-end d-flex mt-4 gap-3'>
              <button type='submit' className={`${style['btn_tolak']}`}>Tolak</button>
              <button type='submit' className={`${style['btn_terima']}`} data-bs-toggle="modal" data-bs-target="#exampleModal">Terima</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_penawar
