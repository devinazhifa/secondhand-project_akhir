import React from 'react'
import style from './DaftarJual.module.css'
import SecondaryNavbar from '../../Components/Navbar/SecondaryNavbar'
import CardProduk from '../../Components/CardProduk/CardProduk'
import { Link } from 'react-router-dom'

function DaftarJual() {
  return (
    <div>
      <SecondaryNavbar title="Daftar Jual"/>
      <div className={`${style['daftar-jual']} container`}>
        <div className='row offset-lg-1 justify-content-center'>
          <div className='col-lg-10'>
            <div className={`${style['title']} fw-bold mb-4`}>Daftar Jual Saya</div>
            <div className={`${style['profile_wrapper']} card mb-3`}>
              <div className={`${style['card_profile']} card-body`}>
                <img src="/img/profile.png" alt="profile-img" className="profile-img" /> 
                <div className="d-flex align-center justify-content-between">
                  <div className='col-lg-10'>
                    <div className={`${style.text_penjual} fw-bold`}>Nama Penjual</div>
                    <div className={`${style.text_penjual} text-muted`}>Kota</div>
                  </div>
                  <Link to='/info-akun'> <button type='submit' className={`${style['btn_edit']}`}>Edit</button></Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className={`${style['category_wrapper']} mb-3`}>
                  <div className='card'>
                    <div className='card-body'>
                      <p className='fw-semibold'>Kategori</p>
                      <div className='row'>
                        <div className='col-1'>
                          <i className="fa-solid fa-box mt-1"></i>
                        </div>
                        <div className='col-8'>
                          <p>Semua Produk</p>
                        </div>
                        <div className='col-1'>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-1'>
                          <i className="fa-regular fa-heart mt-1"></i>
                        </div>
                        <div className='col-8'>
                          <p>Diminati</p>
                        </div>
                        <div className='col-1'>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-1'>
                          <i className="fa-solid fa-dollar-sign mt-1"></i>
                        </div>
                        <div className='col-8'>
                          <p>Terjual</p>
                        </div>
                        <div className='col-1'>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-1'>
                          <i className="fa-regular fa-star"></i>
                        </div>
                        <div className='col-8'>
                          <p>Wishlist</p>
                        </div>
                        <div className='col-1'>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${style['category_button']}`}>
                  <div className="btn-wrapper ">
                    <button type="submit" className={`${style['btn_categories']} btn mb-2`}><i className="fa-solid fa-box"></i> Produk</button>
                    <button type="submit" className={`${style['btn_categories']} btn mb-2`}><i className="fa-regular fa-heart"></i> Diminati</button>
                    <button type="submit" className={`${style['btn_categories']} btn mb-2`}><i className="fa-solid fa-dollar-sign"></i> Terjual</button>
                    <button type="submit" className={`${style['btn_categories']} btn mb-2`}><i className="fa-regular fa-star"></i> Wishlist</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row mt-1">
                  <div className="col-lg-4 col-6">
                    {/* <img src="/img/add-product.png" alt="add-img" className="add-img" /> */}
                    <CardProduk />
                  </div>
                  <div className="col-lg-4 col-6">
                    <CardProduk />
                  </div>
                  <div className="col-lg-4 col-6">
                    <CardProduk />
                  </div>
                  <div className="col-lg-4 col-6">
                    <CardProduk />
                  </div>
                  <div className="col-lg-4 col-6">
                    <CardProduk />
                  </div>
                  <div className="col-lg-4 col-6">
                    <CardProduk />
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

export default DaftarJual
