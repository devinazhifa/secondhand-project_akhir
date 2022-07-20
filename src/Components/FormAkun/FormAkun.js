import React, {useState, useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import style from './FormAkun.module.css'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux";
import kotas from '../../data/kota.js'
import './disable.css'
import requestAPI from '../../requestMethod'

const FormAkun = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user.data.user)
  const token = useSelector(state => state.user.data.token)
  const name= useRef();
  const city= useRef();
  const address=useRef();
  const phone=useRef();
  var imageSize ={
    width:"96px", height:"96px" , borderRadius:"10px"
  }

  // useState(()=>{
  //   name.current.value = user.name;
  //   setCity(user.city)
  //   setAddress(user.address)
  //   setPhone(user.phone)
  // },[])

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  
  const formSubmitHandler = async (event)=>{
    event.preventDefault();
    const formData = new FormData();
    const file =acceptedFiles[0].file;
    formData.append('name', name.current.value)
    formData.append('city', city.current.value)
    formData.append('address', address.current.value)
    formData.append('phone', phone.current.value)
    formData.append('profilePicture',acceptedFiles[0],acceptedFiles[0].name);
    

    for(const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    
    await requestAPI().put("/users/", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

  }
  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='row justify-content-center'>
              <div className={`${style["back-button"]} col-lg-1`}>
              <Link to='/homepage'><FontAwesomeIcon icon="fa-arrow-left" className={`${style["fa-arrow-left"]}`}/></Link>
              </div>
              <div className='col-lg-9'>
                <div className='profile_picture'>
                  <div {...getRootProps({ className: 'dropzone' })} className='text-center'>
                      <input {...getInputProps()}  />
                  <img src={user.profilePicture} alt='' style={imageSize} />
                  </div>
                  <aside>
                      <ul>{files}</ul>
                    </aside>
                </div>
                <form className={style.form_akun} onSubmit={formSubmitHandler}>
                  <label>Nama*</label>
                  <input 
                      type='text' 
                      id='nama' 
                      placeholder='Nama'
                      defaultValue={user.name} 
                      ref={name} 
                      className={`${style['field_akun']} form-control`} 
                      autoComplete='true' 
                      data-testid='input-nama'/>
                  <label>Kota*</label>
                  <select 
                  className={`${style['field_akun']} form-control form-select`} 
                  label='Pilih kota' 
                  defaultValue={user.city}
                  ref={city}
                  >
                    {/* <option value={city} disabled selected>{city}</option> */}
                      {kotas.map((kota,index) =><option key={index} value={kota}>{kota}</option>)}
                  </select>
                  <label for='exampleFormControlTextarea1' className='form-label'>Alamat*</label>
                  <textarea 
                  className={`${style['field_address']} form-control`} 
                  id='exampleFormControlTextarea1' 
                  rows='3'  
                  placeholder='Contoh: Jalan Ikan Hiu 33' 
                  defaultValue={user.address}
                  ref={address}></textarea>
                  <label>No Handphone*</label>
                  <input 
                  type='number' 
                  id='no_hp' 
                  placeholder='Contoh: +628123456789' 
                  className={`${style['field_akun']} form-control`} 
                  autoComplete='true' 
                  data-testid='input-no_hp' 
                  defaultValue={user.phone}
                  ref={phone} />
                  <button type='submit' className={`${files.length === 0 ? "btn_primary_disabled" : "btn_primary" } `}>Simpan</button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAkun
