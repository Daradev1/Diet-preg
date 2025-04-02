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
      subtitle: '1st Trimester',
      description: '	Your body is experiencing a surge in hormones right now, which can lead to nausea...',
      buttonText: 'Learn More',
      imgSrc: pregWoman // Replace with actual image paths
    },
    {
      title: 'Know Your Pregnancy Stage',
      subtitle: '1st Trimester',
      description: 'The hormone progesterone in particular can trigger digestive discomfort. Including constipation and reflux....',
      buttonText: 'Learn More',
      imgSrc: pregWoman // Replace with actual image paths
    },
    {
      title: 'Know Your Pregnancy Stage',
      subtitle: '1st Trimester',
      description: 'Many Moms-to-be find that they have no desire to eat some of the healthy foods they used to love...',
      buttonText: 'Learn More',
      imgSrc: pregWoman // Replace with actual image paths
    },
    {
      title: 'Know Your Pregnancy Stage',
      subtitle: '2nd Trimester',
      description: '	A turning point for the mother and fetus. You will usually begin to feel better and start showing the pregnancy more...',
      buttonText: 'Learn More',
      imgSrc: pregWoman // Replace with actual image paths
    },
    {
      title: 'Know Your Pregnancy Stage',
      subtitle: '2nd Trimester',
      description: 'Your fetus has now developed all its organs and systems and will now begin growing in length and weight...',
      buttonText: 'Learn More',
      imgSrc: pregWoman // Replace with actual image paths
    },
    {
      title: 'Know Your Pregnancy Stage',
      subtitle: '2nd Trimester',
      description: 'A few new symptoms are an increased appetite, achy body, some swelling in hands, feet and ankles...',
      buttonText: 'Learn More',
      imgSrc: pregWoman // Replace with actual image paths
    },
    {
      title: 'Know Your Pregnancy Stage',
      subtitle: '3rd Trimester',
      description: 'Your body gain weight quickly during the third trimester, and part of their body continue to form, eyes open, nail form, hair grows just to name a few of things that go on...',
      buttonText: 'Learn More',
      imgSrc: pregWoman // Replace with actual image paths
    },
    {
      title: 'Know Your Pregnancy Stage',
      subtitle: '3rd Trimester',
      description: 'With all this body gain weight happening, the food choices are very important for the health of the baby and the mom, most important to eat healthy...',
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
        <img src={item.imgSrc} className='w-full swiperrImg ' alt=""/>
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
