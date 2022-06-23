import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/fontawesome-free-solid'
import style from './Homepage.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Carousel from '../../Components/Carousel/Carousel'
import CardProduk from '../../Components/Card Produk/CardProduk'
import Category from '../../Components/Category/Category'
import { Link } from 'react-router-dom'

fontawesome.library.add(faPlus);

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main id="main">
        <div className="container-carousel">
          <Carousel />
        </div>
        <section id="category">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <p className={`${style['title-category']} px-3`}>Telusuri Kategori</p>
                <Category />
              </div>
              <div className='container mt-3'>
                <div className="row row-cols-2 row-cols-lg-6 px-3">
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                  <div className="col">
                    <CardProduk />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="add-button">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Link to='/info-produk'><button type="submit" className={`${style['btn_small']} btn mt-2 mb-2`}><FontAwesomeIcon icon="fa-plus"  className={`${style['fa-plus']}`}/> Add</button></Link>
            </div>
          </div>   
        </section>
      </main>
    </>
  )
}

export default Homepage