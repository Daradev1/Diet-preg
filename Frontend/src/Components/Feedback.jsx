import React, { useState } from 'react';
import { FaCalculator, FaEnvelope, FaPhone, FaPhoneSquare, FaUser } from 'react-icons/fa';
import { FaPerson, FaPersonRifle } from 'react-icons/fa6';
import { FiSmartphone } from 'react-icons/fi';

const FeedbackForm = () => {
const [rating, setRating] = useState(0);
const [result, setResult] = useState("");
const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("rating", rating)
    formData.append("access_key", "1b98f85a-b95d-49b5-ad6d-3845bff97409");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

   const data = await response.json();
   
   if (data.success) {
    setResult("Form Submitted Successfully");
    event.target.reset();
   } else {
    console.log("Error", data);
    setResult(data.message);
  }

  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-2 items-center md:items-start p-6 md:p-12 min-h-screen">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className='flex gap-1 items-center'>
          <div className='w-10 h-1 rounded bg-button'></div>
          <div><h2 className="text-button uppercase tracking-widest font-semibold">Submit Your Feedback</h2></div>
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-button mt-2">Fill the form to submit your feedback</h1>
        <p className="text-gray-500 w-[80%] mt-4">
        Thank you so much for taking the time to share your feedback! Your kind words mean the world to us, and we're thrilled to hear about your positive experience. We're committed to continuing to provide exceptional support and expertise to our users. We're grateful for your support and look forward to serving you better in the future!
        </p>
      </div>

      <form className="md:w-1/2 w-full h-full md:h-full bg-white shadow-lg rounded p-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <div className="relative mt-1">
              <input name="name" required type="text" className="w-full border border-gr focus:ring-button ay-300 rounded-full p-2 shadow-md focus:ring-button focus:border-button" placeholder="John Doe" />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FaPerson className='text-gray-500 hover:text-button'></FaPerson>
              </div>
            </div>
          </div>
          <div>
            <label className="block my-2 text-sm font-medium text-gray-700">Email</label>
            <div className="relative mt-1">
              <input name="email" required type="email" className="w-full border border-g focus:ring-button ray-300 rounded-full p-2 shadow-md focus:ring-button focus:border-button" placeholder="Email address" />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FaEnvelope className='text-gray-500'></FaEnvelope>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label className="block my-2 text-sm font-medium text-gray-700">Phone Number</label>
            <div className="relative mt-1">
              <input name="phone" required type="text" className="w-full border  rounded-full p-2 shadow-md focus:ring-pink-500 focus:border-pink-500" placeholder="(123) 456-7890" />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FiSmartphone className='text-gray-500'></FiSmartphone>
              </div>
            </div>
          </div>
          <div>
            <label className="block my-2 text-sm font-medium text-gray-700">Age</label>
            <div className="relative mt-1">
              <input name="age" required type="text" className="w-full border  focus:ring-button rounded-full p-2 shadow-md  focus:border-pink-500" placeholder="Your age" />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FaCalculator className='text-gray-500'></FaCalculator>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block my-2 text-sm font-medium text-gray-700">Your service rating</label>
          <div className="flex space-x-2 mt-2">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-2xl cursor-pointer ${
                  index < rating ? 'text-yellow-400' : 'text-gray-400'
                }`}
                onClick={() => handleRatingClick(index + 1)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block my-2 text-sm font-medium ">Additional feedback</label>
          <textarea
            name="additionalFeedback"
            className="w-full border border-gray-300 rounded p-2 shadow-md focus:ring-button focus:border-pink-500"
            rows="2"
            placeholder="If you have any additional feedback, please type it in here..."
          ></textarea>
        </div>

        <div className="flex items-start my-2">
          <input name="privacyPolicy" required type="checkbox" className="h-4 w-4 text-button focus:ring-button  border-gray-300 rounded" />
          <label className="ml-2 text-sm text-gray-700">I have read and accept the Privacy Policy.</label>
        </div>

        <button className="bg-button mt-3 text-white font-bold py-2 px-4 rounded-full" type='submit'>
          Submit
        </button>
        <p>{result}</p>
      </form>
    </div>
  );
};

export default FeedbackForm;