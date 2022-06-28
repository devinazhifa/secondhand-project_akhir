import React, { useState, useRef } from 'react'
import Axios from 'axios'
import { useDropzone } from 'react-dropzone'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from './FormProduk.module.css'
import axios from 'axios'

const InfoProduk = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const inputName = useRef()
  const inputPrice = useRef()
  const inputCategories = useRef()
  const inputDescription = useRef()
  const inputImages = useRef()

  // post to API
  const formSubmitHandler = async (event) => {
    event.preventDefault()
    const submittedData = {
      name: inputName.current.value,
      price: inputPrice.current.value,
      categories: inputCategories.current.value,
      description: inputDescription.current.value
    }

    // object formData (jika terdapat file yg diupload)
    const formData = new FormData();

    // mengisi formData : tergantung dari requirement API > strapi
    formData.append('data', JSON.stringify(submittedData))
    // acceptedFiles.forEach(file => {
    //   formData.append('files.photo', file, file.path)
    // })

    const res = await axios.post('https://ancient-everglades-98776.herokuapp.com/products', formData)
    console.log(res.data)
  }



  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='row justify-content-center'>
              <div className='col-lg-1'>
                <Link to='/homepage'><FontAwesomeIcon icon="fa-arrow-left" className={`${style["fa-arrow-left"]}`} /></Link>
              </div>
              <div className='col-lg-9'>
                <h5 className={`title ${style.title} mb-4`}>Lengkapi Detail Produk</h5>
                <form className={style.form_produk} onSubmit={formSubmitHandler}>
                  <div className='mb-2'>
                    <label>Nama Produk</label>
                    <input type='text' name='name' id='name' ref={inputName} placeholder='Nama Produk' className={`${style['field_produk']} form-control`} autoComplete='true' data-testid='input-nama' />
                  </div>
                  <label>Harga Produk</label>
                  <input type='text' name='price' id='price' ref={inputPrice} placeholder='Harga Produk' className={`${style['field_produk']} form-control`} autoComplete='true' data-testid='input-harga' />
                  <label>Kategori</label>
                  <select name='categories' ref={inputCategories} className={`${style['field_produk']} form-select`} label='Pilih kategori'>
                    <option value='' disabled selected>Pilih Kategori</option>
                    <option value='0'>Hobi</option>
                    <option value='1'>Kendaraan</option>
                    <option value='2'>Baju</option>
                    <option value='3'>Elektronik</option>
                    <option value='4'>Kesehatan</option>
                  </select>
                  <label htmlFor='exampleFormControlTextarea1' className='form-label'>Deskripsi</label>
                  <textarea name='description' ref={inputDescription} className={`${style['field_deskripsi']} form-control`} id='exampleFormControlTextarea1' rows='3' placeholder='Contoh: Jalan Ikan Hiu 33'></textarea>
                  <label>Foto Produk</label>
                  <section>
                    <div {...getRootProps({ className: 'dropzone' })} className='d-flex mb-4'>
                      <input {...getInputProps()} />
                      <img src='./img/upload_photo.png' alt='' className='img-fluid' />
                    </div>
                    <aside>
                      <ul>{files}</ul>
                    </aside>
                  </section>
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

export default InfoProduk
