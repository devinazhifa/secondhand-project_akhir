import React from 'react'
import Navbar_plain from '../Navbar/Navbar_plain'
import style from './Info_penawaran.module.css'

function Info_penawaran(props) {
  return (
    <div>
    <Navbar_plain/>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='row justify-content-center'>
              <div className='col-lg-1 mt-4'>
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className='col-lg-9'>
                <div className='card rounded-4 mt-4'>
                  <div className='card-body'>
                    <div className={`${style['card_profile']} card-body`}>                  
                      <img src='./profile.png'/>
                      <div className='col-lg-10 ms-3'>
                        <div className='fw-semibold'>Nama Penjual</div>
                        <div>Kota</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='fw-semibold my-3'>Daftar Produk yang Ditawar</p>
                <div className='card rounded-4'>
                  <div className='card-body'>
                    <div className={`${style['card_profile']} card-body`}>                  
                      <img src='./produk_tawar.png'/>
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

                {/* MODAL */}
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
                                <img src='./profile.png'/>
                                <div className='col-lg-10 ms-3'>
                                  <div className='fw-semibold'>Nama Pembeli</div>
                                  <div className={`${style.description}`}>Kota</div>
                                </div>
                              </div>
                              <div className={`${style['card_profile']} card-body`}>                  
                                <img src='./produk_tawar.png'/>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info_penawaran
