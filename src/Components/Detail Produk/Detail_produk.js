import React from 'react'
import { Link } from 'react-router-dom'
import style from './Detail_produk.module.css'
import Navbar_plain from '../Navbar/Navbar_plain'

function Detail_produk() {
  return (
    <div>
      <Navbar_plain />
      <button type='submit' className={`${style['btn_terbitkan_static']} mb-3`} data-bs-toggle="modal" data-bs-target="#exampleModal">Terbitkan</button>
      <div className='container mb-4'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div id='carouselExampleControls' className='carousel slide' data-bs-ride='carousel'>
              <div className='carousel-inner mt-4'>
                <div className='carousel-item active'>
                  <img src='./jam_1.png' className='img-fluid w-100 rounded-4'/>
                </div>
                <div className='carousel-item'>
                  <img src='./jam_1.png' className='img-fluid w-100 rounded-4'/>
                </div>
                <div className='carousel-item'>
                  <img src='./jam_1.png' className='img-fluid w-100 rounded-4'/>
                </div>
              </div>
              <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                <i class="fa-solid fa-circle-chevron-left fa-2x"></i>
              </button>
              <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                <i class="fa-solid fa-circle-chevron-right fa-2x"></i>
              </button>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card mt-4 rounded-4'>
              <div className='card-body'>
                <p className='judul fw-semibold'>Jam Tangan Casio</p>
                <p className='kategori'>Aksesoris</p>
                <p className='harga fw-semibold'>Rp. 250.000</p>
                <button type='submit' className={`${style['btn_terbitkan']} mb-3`} data-bs-toggle="modal" data-bs-target="#exampleModal">Terbitkan</button>
                <Link to='/info-produk'><button type='submit' className={`${style['btn_edit']}`}>Edit  </button> </Link>
              </div>
            </div>
            <div className='card mt-4 rounded-4'>
              <div className={`${style['card_profile']} card-body`}>                  
                <img src='./profile.png'/>
                <div className='col-lg-8'>
                  <div className={`${style.text_penjual} fw-semibold`}>Nama Penjual</div>
                  <div className={style.text_penjual}>Kota</div>
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
                    <p className='fw-semibold'>Masukkan Harga Tawaranmu</p>
                    <p>Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
                    <div className='card mt-2 rounded-4'>
                      <div className={`${style['card_tawar']} card-body`}>                  
                        <img src='./produk_tawar.png'/>
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
        </div>
        <div className='row justify-content-start'>
        <div className='col-lg-6 offset-lg-1'>
          <div className='card mt-4 rounded-4 mb-2'>
              <div className='card-body'>
                <p className='fw-semibold'>Deskripsi</p>
                <p className={style.text_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className={style.text_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Detail_produk
