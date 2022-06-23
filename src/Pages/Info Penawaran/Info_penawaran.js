import React from 'react'
import Card_penawar from '../../Components/Card Penawar/Card_penawar'
import Card_penjual from '../../Components/Card Penjual/Card_penjual'
import ModalTerima from '../../Components/Modal Terima/ModalTerima'
import Navbar_plain from '../../Components/Navbar/Navbar_plain'

function Info_penawaran(props) {
  return (
    <div>
      <Navbar_plain />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='row justify-content-center'>
              <div className='col-lg-1 mt-4'>
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className='col-lg-9'>
                <Card_penjual />
                <p className='fw-semibold my-3'>Daftar Produk yang Ditawar</p>
                <div className='card rounded-4'>
                  <Card_penawar />
                </div>
                <ModalTerima />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info_penawaran
