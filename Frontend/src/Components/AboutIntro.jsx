import React from 'react'
import ladyImgBg from "../assets/ladyImgBg.png"
import {useNavigate} from 'react-router-dom'
const AboutIntro = () => {
  const navigate = useNavigate()
  return (
   
    <div className="h-full mt-28 mb-10">
        <div className="flex flex-col-reverse md:flex-row gap-4 justify-center">
            <div className="w-full mx-auto">
          <img src={ladyImgBg} alt="" className="w-[350px] rounded-br-3xl md:w-[400px] mx-auto" />
            </div>
            <div className="flex flex-col w-[85%] md:w-full mx-auto">
               <h1 className="text-4xl md:text-3xl mb-4 uppercase text-button text-center "> about DietPreg</h1> 

             <p className="text-sm text-gray-600 text-left">Welcome to DietPreg, where we're here to support your journey to a healthier you.</p>  
               
             <p className="text-sm text-gray-600 text-left">Whether you're an expectant mom, a fitness enthusiast, or simply seeking better health, DietPreg offers expert advice and practical tools to help you make informed choices about your diet and lifestyle. </p>
                
              <p className="text-sm text-gray-600 text-left"> Our team of nutritionists and health professionals is committed to guiding you with personalized, evidence-based recommendations.</p> 

              <button onClick={()=>navigate('/about')} className="bg-button mt-5  text-white font-bold py-1 w-40 rounded-sm">
            Learn More
          </button>
            </div>
        </div>
    </div>
  )
}

export default AboutIntro