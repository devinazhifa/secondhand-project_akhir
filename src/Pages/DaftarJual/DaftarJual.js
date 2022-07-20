import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import style from './DaftarJual.module.css'
import SecondaryNavbar from '../../Components/Navbar/SecondaryNavbar'
import CardProduk from '../../Components/CardProduk/CardProduk'
import { Link } from 'react-router-dom'

function DaftarJual() {

  const [products, setProducts] = useState(null)

  useEffect(() => {
      axios.get('https://ancient-everglades-98776.herokuapp.com/api/products/seller',
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTY1NjkzNzU2NH0.GOBpSRPdMdfJO534Y6n37tES5bxlimEH4obcnsPbVaE",
        },
      }
      )
      
      .then( response => {
        setProducts(response.data.data)
        console.log(response.data.data)

      })
      
  },[])

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
                <div className="row">
                <div className="col-lg-4 col-6">
                    <Link to='/form-produk'><img src='/img/add-produk.png' /></Link>
                </div>
                  {/* <div className="col-lg-4 col-6"> */}
                    {products?.map( (product, index) => {
                      return(
                        <div className="col-lg-4 col-6"><CardProduk key={`product-${index}`} product = {product} /></div>
                      )
                    })}
                  {/* </div> */}
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
