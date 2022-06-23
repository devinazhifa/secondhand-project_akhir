import React from 'react'
import style from './ModalTerima.module.css'

function ModalTolak() {
  return (
    <div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='body mx-4 my-4'>
              <p className='fw-semibold'>Yeay kamu berhasil mendapat harga yang sesuai</p>
              <p>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
              <div className='card rounded-4 bg-light'>
                <div className='card-body'>
                  <p className='fw-semibold text-center'>Product Match</p>
                  <div className={`${style['card_profile']} card-body`}>
                    <img src='./img/profile.png' />
                    <div className='col-lg-10 ms-3'>
                      <div className='fw-semibold'>Nama Pembeli</div>
                      <div className={`${style.description}`}>Kota</div>
                    </div>
                  </div>
                  <div className={`${style['card_profile']} card-body`}>
                    <img src='./img/produk_tawar.png' />
                    <div className='col-lg-10 ms-3'>
                      <div>Jam Tangan Casio</div>
                      <div className='text-decoration-line-through'>Rp 250.000</div>
                      <div>Ditawar Rp 200.000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className={`${style['btn_kontak']} mx-4 mb-4`}>Hubungi via Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalTolak
