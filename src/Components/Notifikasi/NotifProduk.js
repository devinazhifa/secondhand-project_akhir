import React from 'react'
import './notif.css'
const NotifProduk = () => {
    return (
        <div className='col-lg-12 notif-card d-flex rounded-4 '>
            <div className='notif-card-img'>
                <img src='./img/jam_1.png' className='img-notif mt-2'></img>
            </div>
            <div className='col-lg notif-card-desc text-start me-4'>
                <div className="text-muted small-notifdrop">Produk Berhasil Ditambahkan</div>
				<div className="desc-notifdrop">Jam Tangan Casio</div>
				<div className="desc-notifdrop">Rp 250.000</div>
            </div>
            <div>
            <p className="text-muted small-notifdrop text-end ms-2">20 Apr, 14:04
            <span class="position-absolute ms-2 mt-2 me-4 translate-middle p-1 bg-danger border border-light rounded-circle visually-hidden notif-badge">
                <span class="visually-hidden">New alerts</span>
            </span>
            </p>
            </div>
        </div>
      )
}


export default NotifProduk