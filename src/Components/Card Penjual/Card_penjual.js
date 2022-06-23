import React from 'react'
import style from './Card_penjual.module.css'

function Card_penjual() {
  return (
    <div>
      <div className='card rounded-4 mt-4'>
        <div className='card-body'>
          <div className={`${style['card_profile']} card-body`}>                  
            <img src='./img/profile.png'/>
              <div className='col-lg-10 ms-3'>
                <div className='fw-semibold'>Nama Penjual</div>
                <div>Kota</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_penjual
