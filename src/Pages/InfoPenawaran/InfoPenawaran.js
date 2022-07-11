import React from 'react'
import { Link } from 'react-router-dom'
import CardPenawar from '../../Components/CardPenawar/CardPenawar'
import CardPenjual from '../../Components/CardPenjual/CardPenjual'
import ModalStatus from '../../Components/ModalStatus/ModalStatus'
import ModalTerima from '../../Components/ModalTerima/ModalTerima'
import NavbarPlain from '../../Components/Navbar/NavbarPlain'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from './InfoPenawaran.module.css'

function InfoPenawaran(props) {
  return (
    <div>
      <NavbarPlain title='Info Penawar'/>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='row justify-content-center'>
            <div className={`${style["back-button"]} col-lg-1 mt-4`}>
              <Link to='/homepage'><FontAwesomeIcon icon="fa-arrow-left" className={`${style["fa-arrow-left"]}`}/></Link>
              </div>
              <div className='col-lg-9'>
                <CardPenjual />
                <p className='fw-semibold my-3'>Daftar Produk yang Ditawar</p>
                <div className='card rounded-4'>
                  <CardPenawar />
                </div>
                <ModalStatus />
                <ModalTerima />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPenawaran
