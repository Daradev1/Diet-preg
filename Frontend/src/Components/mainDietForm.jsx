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
  const [loading, setLoading] = useState(false);
  const [dietResult, setDietResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    
    try {
      const response = await fetch('https://diet-preg-server.vercel.app/api/diet/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result) {
        console.log('Success:', result);
        setDietResult(result);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full'>
    
      {loading && <PinkPreloader />}
      {!dietResult ? (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
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
          </div>
      ) : (
        // Show results if available
        <div className="text-center py-10">
          <h1 className="text-2xl font-bold text-pink-500 mb-5">Diet Results</h1>
          <div className="space-y-4">
            {/* Table */}
            <div className="p-6 bg-pink-50 text-gray-600 min-h-screen">
              <h1 className="text-2xl font-bold mb-4 text-pink-500 text-center">Daily Meal Plan</h1>
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Total Daily Calories */}
                <div className="mb-6">
                  <h2 className="text-lg  font-semibold mb-2">Total Daily Calories</h2>
                  <p className="text-gray-700">{dietResult.totalDailyCalories} kcal</p>
                </div>

                {/* Meal Distribution */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">Meal Distribution</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(dietResult.mealDistribution).map(([meal, calories]) => (
                      <div key={meal} className="bg-pink-500 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-white capitalize">
                          {meal}
                        </h3>
                        <p className="text-white">{calories} kcal</p>
                      </div>
                    ))}
                  </div>
                </div>

                
                {/* Recommended Meals */}
                <div>
                  <h2 className="text-lg text-pink-400 font-semibold mb-4">Recommended Meals</h2>
                  {/* Responsive Table Wrapper */}
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                      <thead>
                        <tr className="bg-pink-500 text-white">
                          <th className="px-4 py-2 text-left">Meal</th>
                          <th className="px-4 py-2 text-left">Dish</th>
                          <th className="px-4 py-2 text-left">Calories</th>
                          <th className="px-4 py-2 text-left">Protein (g)</th>
                          <th className="px-4 py-2 text-left">Carbs (g)</th>
                          <th className="px-4 py-2 text-left">Fats (g)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(dietResult.recommendedMeals).map(([meal, details]) => (
                          <tr key={meal} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3 capitalize">{meal}</td>
                            <td className="px-4 py-3">{details.dish}</td>
                            <td className="px-4 py-3">{details.calories} kcal</td>
                            <td className="px-4 py-3">{details.protein}</td>
                            <td className="px-4 py-3">{details.carbs}</td>
                            <td className="px-4 py-3">{details.fats}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <button
              className="w-42 block mx-auto bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              onClick={() => alert('Download functionality to be implemented')}
            >
              Download Result
            </button>
            <button
              className="w-42 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setDietResult(null)}
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