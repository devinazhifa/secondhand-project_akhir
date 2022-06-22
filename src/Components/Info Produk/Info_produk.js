import React from 'react'
import { Link } from 'react-router-dom'
import style from './Info_produk.module.css'
import Navbar_plain from '../Navbar/Navbar_plain'

const Info_produk = (props) => {
  return (
    <div>
     <Navbar_plain/>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='row justify-content-center'>
              <div className='col-lg-1'>
                <i class="fa-solid fa-arrow-left"></i>
              </div>
              <div className='col-lg-9'>
                <h5 className={`title ${style.title} mb-4`}>Lengkapi Detail Produk</h5>
                <form className={style.form_produk}>
                  <div className='mb-2'>
                    <label>Nama Produk</label>
                    <input type='nama' id='nama' placeholder='Nama Produk' className={`${style['field_produk']} form-control`} autoComplete='true' data-testid='input-nama' />
                  </div>
                    <label>Harga Produk</label>
                    <input type='harga' id='harga' placeholder='Harga Produk' className={`${style['field_produk']} form-control`} autoComplete='true' data-testid='input-harga' />
                  <label>Kategori</label>
                  <select className={`${style['field_produk']} form-select`} label='Pilih kategori'>
                    <option value='' disabled selected>Pilih Kategori</option>
                    <option value='0'>Hobi</option>
                    <option value='1'>Kendaraan</option>
                    <option value='2'>Baju</option>
                    <option value='3'>Elektronik</option>
                    <option value='4'>Kesehatan</option>
                  </select>
                  <label for='exampleFormControlTextarea1' class='form-label'>Deskripsi</label>
                    <textarea className={`${style['field_deskripsi']} form-control`} id='exampleFormControlTextarea1' rows='3'  placeholder='Contoh: Jalan Ikan Hiu 33'></textarea>
                  <label>Foto Produk</label>
                    <div className='profile_picture'>
                      <img src='./upload_photo.png' alt='' className='img-fluid' />
                    </div>
                  <div className={style.button}>
                    <Link to='/detail-produk'><button type='submit' className={`${style['btn_preview']}`}>Preview</button></Link>
                    <button type='submit' className={`${style['btn_terbitkan']}`}>Terbitkan</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info_produk
