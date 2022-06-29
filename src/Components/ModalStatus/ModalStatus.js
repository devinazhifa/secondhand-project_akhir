import React from 'react'
import style from './ModalStatus.module.css'

function ModalStatus() {
  return (
    <div>
      <div className="modal fade" id="modalStatus" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='body mx-4 my-4'>
              <p className='fw-semibold'>Perbarui status penjualan produkmu</p>     
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" for="terima">
                    <h6>Berhasil Terjual</h6>
                    <p className={`${style.description}`}>Kamu telah sepakat menjual produk kepada pembeli</p>
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" for="tolak">
                    <h6>Batalkan Transaksi</h6>
                    <p className={`${style.description}`}>Kamu membatalkan transaksi produk ini dengan pembeli</p>
                  </label>
              </div>         
            </div>
            <button type="button" className={`${style['btn_kirim']} mx-4 mb-4`}>Kirim</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalStatus
