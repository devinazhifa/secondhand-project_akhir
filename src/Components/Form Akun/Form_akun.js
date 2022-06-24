import React from 'react'
import { Link } from 'react-router-dom'
import style from './Form_akun.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Form_akun = () => {
  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='row justify-content-center'>
              <div className='col-lg-1'>
              <Link to='/homepage'><FontAwesomeIcon icon="fa-arrow-left" className={`${style["fa-arrow-left"]}`}/></Link>
              </div>
              <div className='col-lg-9'>
                <div className='profile_picture text-center'>
                  <h5 className={`title ${style.title} mb-4`}>Lengkapi Info Akun</h5>
                  <img src='./img/profile_picture.png' alt='' className='img-fluid' />
                </div>
                <form className={style.form_akun}>
                  <label>Nama*</label>
                  <input type='nama' id='nama' placeholder='Nama' className={`${style['field_akun']} form-control`} autoComplete='true' data-testid='input-nama' />
                  <label>Kota*</label>
                  <select className={`${style['field_akun']} form-control form-select`} label='Pilih kota' >
                    <option value='' disabled selected>Pilih Kota</option>
                    <option value='1'>Bandung</option>
                    <option value='2'>Bekasi</option>
                    <option value='3'>Bogor</option>
                  </select>
                  <label for='exampleFormControlTextarea1' class='form-label'>Alamat*</label>
                  <textarea className={`${style['field_address']} form-control`} id='exampleFormControlTextarea1' rows='3'  placeholder='Contoh: Jalan Ikan Hiu 33'></textarea>
                  <label>No Handphone*</label>
                  <input type='no_hp' id='no_hp' placeholder='Contoh: +628123456789' className={`${style['field_akun']} form-control`} autoComplete='true' data-testid='input-no_hp' />
                  <Link to='/homepage'><button type='submit' className={`${style['btn_primary']}`}>Simpan</button></Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form_akun
