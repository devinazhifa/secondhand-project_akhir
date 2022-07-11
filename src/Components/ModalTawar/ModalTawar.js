import React from 'react'
import style from './ModalTawar.module.css'

function ModalTawar() {
  return (
    <div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='body mx-4 my-4'>
              <p className='fw-semibold'>Masukkan Harga Tawaranmu</p>
              <p>Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
              <div className='card mt-2 rounded-4'>
                <div className={`${style['card_tawar']} card-body`}>
                  <img src='./img/produk_tawar.png' />
                  <div className='col-lg-8 mx-3'>
                    <p className={`${style.text_modal} fw-semibold mt-1`}>Jam Tangan Casio</p>
                    <div className={style.text_modal}>Rp 250.000</div>
                  </div>
                </div>
              </div>
              <p className='mt-3'>Harga Tawar</p>
              <input type='harga_tawar' id='harga_tawar' placeholder='Rp 0,00' className={`${style['field_produk']} form-control`} autoComplete='true' data-testid='input-harga_tawar' />
            </div>
            <button type="button" className={`${style['btn_kirim']} mx-4 my-4`}>Kirim</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalTawar
