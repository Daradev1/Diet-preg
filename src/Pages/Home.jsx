import React from 'react'
import Hero from '../Components/Hero'
import AboutIntro from '../Components/AboutIntro'
import Carousel from '../Components/Caraousel/Caraousel'
import FeedbackForm from '../Components/Feedback'
import DietRecommendationForm from '../Components/DietRecommendationForm'
import ImageCaraousel from '../Components/ImageCaraousel'


const Home = () => {
  return (
    <div className='w-full h-full mx-auto'>
    <Hero/>
    <AboutIntro/>
    <Carousel/>
    <DietRecommendationForm/>
    <ImageCaraousel/>
    <FeedbackForm/>
    </div>
  )
}

export default Home