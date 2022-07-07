import React from 'react'
import { Link } from 'react-router-dom'
import style from './DetailProduk.module.css'
import CardPenjual from '../../Components/CardPenjual/CardPenjual'
import SecondaryNavbar from '../../Components/Navbar/SecondaryNavbar'

function DetailProduk() {
  return (
    <div>
      <SecondaryNavbar />
      <div className={`${style['detail_produk']} mx-auto mb-4`}>
          <div className='container p-0'>
          <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div id='carouselExampleControls' className='carousel slide' data-bs-ride='carousel'>
              <div className={`${style['carosel']} carousel-inner`}>
                <div className='carousel-item active'>
                  <img src='./img/jam_1.png' className='img-fluid w-100 rounded-4' />
                </div>
                <div className='carousel-item'>
                  <img src='./img/jam_1.png' className='img-fluid w-100 rounded-4' />
                </div>
                <div className='carousel-item'>
                  <img src='./img/jam_1.png' className='img-fluid w-100 rounded-4' />
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
            <div className={`${style['card_info']} card rounded-4`}> 
              <div className='card-body'>
                <p className='judul fw-semibold'>Jam Tangan Casio</p>
                <p className='kategori'>Aksesoris</p>
                <p className='harga fw-semibold'>Rp. 250.000</p>
                <Link to='/daftar-jual'><button type='submit' className={`${style['btn_terbitkan']} mb-3`}>Terbitkan</button></Link>
                <Link to='/info-produk'><button type='submit' className={`${style['btn_edit']}`}>Edit  </button> </Link>
              </div>
            </div>
            <div className={style.card_info}><CardPenjual/></div>
          </div>
        </div>
        <div className='row justify-content-start '>
          <div className='col-lg-6 offset-lg-1'>
            <div className={`${style['card_info']} ${'card mt-4 rounded-4 mb-2'}`}>
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
        <button type='submit' className={`${style['btn_terbitkan_static']} mb-3`} data-bs-toggle="modal" data-bs-target="#exampleModal">Terbitkan</button>
      </div>
    </div>
  )
}

export default DetailProduk
