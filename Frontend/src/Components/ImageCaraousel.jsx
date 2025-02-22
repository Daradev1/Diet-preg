// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import ladyImgBg from '../assets/ladyImgBg.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'


const ImageCaraousel = () => {

const images = [{src: ladyImgBg}, {src: img1}, {src: img3},]

  return (
    <div className='md:mt-16 mt-28 mb-20 '>
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
        slidesPerView: 1.5,
        spaceBetween: 2,
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

      <div className='w-full h-full '>
     {
      images.map((image, index)=>(
       
        <SwiperSlide  key={index}>
     <img src={image.src} className='rounded swiperImg' width={300} alt="" />
        </SwiperSlide>     
        
      ))  
     }   
     </div>   
    
    </Swiper>
    </div>      
  )
}

export default ImageCaraousel