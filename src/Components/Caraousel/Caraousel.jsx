import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
import "./Carousel.css"
import pregWoman from '../../assets/pregWoman.jpg'

const Carousel = () => {
  const cards = [
    {
      title: 'Know Your Pregnancy Stage',
      subtitle: '1st Trimester / 2nd Trimester / 3rd Trimester',
      description: 'Pregnancy is divided into three trimesters. In the first trimester, the embryo develops major organs...',
      buttonText: 'Learn More',
      imgSrc: pregWoman // Replace with actual image paths
    },
    {
      title: 'Know Your Pregnancy Stage',
      subtitle: '1st Trimester / 2nd Trimester / 3rd Trimester',
      description: 'Pregnancy is divided into three trimesters. In the first trimester, the embryo develops major organs...',
      buttonText: 'Learn More',
      imgSrc: pregWoman // Replace with actual image paths
    },
    {
      title: 'Know Your Pregnancy Stage',
      subtitle: '1st Trimester / 2nd Trimester / 3rd Trimester',
      description: 'Pregnancy is divided into three trimesters. In the first trimester, the embryo develops major organs...',
      buttonText: 'Learn More',
      imgSrc: pregWoman // Replace with actual image paths
    },
    // Add more cards as needed
  ];

  return (
    <div className="container flex flex-col justify-center mx-auto h-full w-full py-8 md:px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
        modules={[Pagination]}
        className="mySwiper"
      >
      {
       cards.map((item, index)=>(
        <SwiperSlide key={index} className='border rounded-md shadow-inner' >
        <div className='w-full h-full py-3 px-2'>
      <h2 className='text-button font-semibold'>{item.title}</h2>
      <h2 className='text-gray-700 my-2 font-semibold'>{item.subtitle}</h2>
        <div className='flex items-center justify-between'>
       <div className='w-[43%] h-full'>
        <img src={item.imgSrc} className='w-full h-[100%]' alt=""/>
       </div>
       <div className='w-[55%] text-left flex felx flex-col gap-3'>
        <p className='text-base text-gray-600'>{item.description}</p>
        <button className="bg-button text-white font-bold py-1 mb-3 w-36 rounded-sm">
        {item.buttonText}
          </button>
       </div>
        </div>
        </div>
        </SwiperSlide>
       )) 
      }  
      
      </Swiper>
    </div>
  );
};

export default Carousel;
