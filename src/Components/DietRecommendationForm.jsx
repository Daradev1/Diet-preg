import React from 'react';
import whatDiet from '../assets/whatDiet.jpg'

const DietRecommendationForm = () => {
  return (
    <div className="flex items-center justify-center h-full w-[400px] mx-auto mb-16">
      <div className="bg-card rounded-lg shadow-lg py-2 px-4 w-full max-w-md">
        <h2 className="text-pink-500 text-center text-xl font-bold capitalize ">Know Your Diet</h2>
        <p className="text-center text-gray-800 mb-2 text-xl capitalize font-semibold">Get Started With Your Diet Plans</p>
        <img
          src={whatDiet}
          alt="Diet"
          className="w-full h-40 object-cover rounded mb-2"
        />
        <p className="text-gray-700 mb-4">Fill in your information below</p>
        <form>
          <div className="mb-2">
            <input
              type="number"
              placeholder="Enter your age"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-2 flex">
            <input
              type="number"
              placeholder="Input your weight"
              className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-r bg-white focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option>Kg</option>
              <option>Lbs</option>
            </select>
          </div>
          <div className='w-full flex flex-col items-center justify-center my-1'>
          <button className="bg-button mx-auto text-white font-bold py-2 w-40 rounded-lg">
            Recommend Diet
          </button>
          </div>
        </form>
     
      </div>
    </div>
  );
};

export default DietRecommendationForm;
