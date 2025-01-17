import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import ladyImgBg from '../assets/ladyImgBg.png'


const ImageCaraousel = () => {

const images = [{src: ladyImgBg}, {src: ladyImgBg}, {src: ladyImgBg},{src: ladyImgBg}, {src: ladyImgBg},]

  return (
    <div>
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    cssMode={true}
    navigation={true}
    pagination={{
        clickable: true,
    }}
    breakpoints={{
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        },
    }}
    modules={[Pagination, Navigation, Mousewheel, Keyboard]}
    className="mySwiper">

      <div className='w-full h-full'>
     {
      images.map((image, index)=>(
       
        <SwiperSlide  key={index}>
     <img src={image.src} alt="" />
        </SwiperSlide>     
        
      ))  
     }   
     </div>   
    
    </Swiper>
    </div>      
  )
}

export default ImageCaraousel