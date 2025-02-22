import React, { useState } from 'react';
import PinkPreloader from './preloader';

const DietRecommendationForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    pregnancyStage: '',
    dailyActivity: ''
  });
  const [loading, setLoading] = useState(false)
  const [dietResult, setDietResult] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch('YOUR_BACKEND_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.data) {
        console.log('Success:', result);
        setDietResult(result)
      }
    } catch (error) {
      console.error('Error:', error);
    } finally{
        setLoading(false)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    {loading && <PinkPreloader/> } 
    {
      !dietResult? (
        <>
        <h1 className="text-2xl font-bold mb-5 text-pink-500">Diet Recommendation</h1>
    <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-5'>
      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-400">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-400">Weight</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-400">Height</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-400">Pregnancy Stage</label>
        <select
          name="pregnancyStage"
          value={formData.pregnancyStage}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          required
        >
          <option value="">Choose your stage</option>
          <option value="first">First Trimester</option>
          <option value="second">Second Trimester</option>
          <option value="third">Third Trimester</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-400">Daily Activity</label>
        <select
          name="dailyActivity"
          value={formData.dailyActivity}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          required
        >
          <option value="">Choose your activity level</option>
          <option value="sedentary">Sedentary</option>
          <option value="light">Light Activity</option>
          <option value="moderate">Moderate Activity</option>
          <option value="active">Active</option>
          <option value="veryActive">Very Active</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-28 bg-pink-600 text-white h-10 mt-4  rounded-md hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
    </>
      ) :(

    // Show results if available
    <div className="text-center">
    <h1 className="text-2xl font-bold mb-5">Diet Results</h1>
    <div className="space-y-4">
    <div>
        <h2 className="text-lg font-semibold">Duration:</h2>
        <p>{results.duration}</p>
    </div>
    <div>
        <h2 className="text-lg font-semibold">Diet:</h2>
        <p>{results.diet}</p>
    </div>
    <div>
        <h2 className="text-lg font-semibold">Results:</h2>
        <p>{results.results}</p>
    </div>
    <div>
        <h2 className="text-lg font-semibold">Food Type:</h2>
        <p>{results.foodType}</p>
    </div>
    <button
        className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        onClick={() => alert('Download functionality to be implemented')}
    >
        Download Result
    </button>
    <button
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleNewDiet}
    >
        Recommend New Diet
    </button>
    </div>
</div>   
           
           )}
         
  </div> 

  
   
  );
};

export default DietRecommendationForm;