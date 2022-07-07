import React from 'react'
import './notif.css'
const NotifPenawaran= () => {
    return (
        <div className='notif-card d-flex '>
            <div className='notif-card-img'>
                <img src='./img/jam_1.png' className='img-notif mt-3'></img>
            </div>
            <div className='col-lg notif-card-desc text-start me-5'>
                <div className="text-muted small-notifdrop">Penawaran produk</div>
				<div className="desc-notifdrop">Jam Tangan Casio</div>
				<div className="desc-notifdrop">Rp 250.000</div>
				<div className="desc-notifdrop">Ditawar Rp 200.000</div>
            </div>
            <div>
            <p className="text-muted small-notifdrop text-end ms-2">20 Apr, 14:04
            <span class="position-absolute ms-2 mt-2 translate-middle bg-danger border border-light rounded-circle notif-badge">
                <span class="visually-hidden">New alerts</span>
            </span>
            </p>
            </div>
        </div>
      )
}
export default NotifPenawaran