import React from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Carousel.css'

const Carousel = () => {
  return (
    <>
      <Swiper
      height={500}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={-70}
        grabCursor={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: -30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/C6pcvzJ/imgbanner1.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/C6pcvzJ/imgbanner1.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/C6pcvzJ/imgbanner1.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel