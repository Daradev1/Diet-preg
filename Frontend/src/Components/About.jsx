import React from 'react'
import img1 from '../assets/img1.jpg'
const About = () => {
  return (
    <div>
    
<div className="text-2xl text-center pt-8 border-t">
<h2 className='font-bold text-button underline'>ABOUT US</h2>
</div>
<div className='my-10 flex flex-col px-3 md:flex-row gap-16'>
<img src={img1}  alt="" className='w-full md:max-w-[450px]' />
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>Welcome to DietPreg, where we're here to support your journey to a healthier you.
Whether you're an expectant mom, a fitness enthusiast, or simply seeking better health, DietPreg offers expert advice and practical tools to help you make informed choices about your diet and lifestyle. 

</p>
<p>Our team of nutritionists and health professionals is committed to guiding you with personalized, evidence-based recommendations.</p>

<p>Unlock your journey to a healthier YOU with our personalized diet plan tailored to fit your lifestyle and goals. Our recommendations make nutrition simple and enjoyable. Start nourishing your body the right way today </p>
<div className='flex justify-center gap-3'>
<b className='text-white p-2 bg-button text-center rounded-lg'>Enter your age</b>
<b className='text-white  p-2 bg-button text-center rounded-lg'>Input your weight</b>
</div>
</div>
</div>
<div className='flex-col w-full mb-20 flex justify-center items-center'>
<b className='text-button text-center'> Know Your Diet</b>
<b className='text-button text-center'> Breakfast/Lunch/Dinner</b>
<p className='text-center px-3 mt-3'>Embark on a transforming journey by delving into the depth of understanding your diets. Unlock the secrets to optimal well-being as you gain insights into the intricate relationship between nutrition and your body. Embrace the transformative potential of mindful eating, and witness the positive impact it can have on your overall health and vitality. Your journey to a more conscious and nourished lifestyle starts with the wisdom of knowing your diet.</p>
</div>
</div>
  )
}

export default About