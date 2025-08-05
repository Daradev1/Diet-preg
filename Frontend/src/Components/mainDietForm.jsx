import React, { useState,useRef } from 'react';
import PinkPreloader from './preloader';
import html2pdf from "html2pdf.js";

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
  
    const { age, height, weight, pregnancyStage, dailyActivity } = formData;
  
    // Build the query string
    const queryParams = new URLSearchParams({
      age,
      height,
      weight,
      preg_stage: pregnancyStage,
      active: dailyActivity
    });
  
    const url = `https://diet-recommender-server-12o9.onrender.com/api/top_10_diets?${queryParams.toString()}`;
  
    try {
      const response = await fetch(url);
      const result = await response.json();
  
      if (result) {
        console.log('Received data:', result);
        setDietResult(result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  



  const reportRef = useRef();

  const handleDownload = () => {

    const element = reportRef.current;

    html2pdf()
      .set({
        margin: 2,
        filename: "Diet_Results.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  return (
    <div className='w-full pb-10'>
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-pink-400">Weight in (kg)</label>
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
          <label className="block text-sm font-medium text-pink-400">Height in (meters)</label>
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
            <option value="FirstTrimester">First Trimester</option>
            <option value="SecondTrimester">Second Trimester</option>
            <option value="ThirdTrimester">Third Trimester</option>
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
            <option value="Sedentary">Sedentary</option>
            <option value="Light Active">Light Activity</option>
            <option value="Moderately Active">Moderate Activity</option>
            <option value="Very Active">Very Active</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-28 bg-pink-600 text-white h-10 mt-4 rounded-md hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  ) : <div className="mx-auto max-w-4xl mt-10 px-4">
  <div ref={reportRef} className="space-y-8">

    {/* 🧮 Caloric Summary */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Caloric Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <p><span className="font-semibold">Classification:</span> <span className="capitalize">{dietResult.caloric_classification}</span></p>
        <p><span className="font-semibold">Recommended Daily Calories:</span> {dietResult.recommended_daily_calories} kcal</p>
      </div>
    </div>

    {/* 🍽 Recommended Diets */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Recommended Diets</h2>
      <ul className="space-y-2 list-disc pl-5 text-gray-800">
        {dietResult.recommended_diets?.map((item, index) => (
          <li key={index}>
            <span className="font-medium">{item.Shrt_Desc}</span> – {item.Energ_Kcal} kcal
          </li>
        ))}
      </ul>
    </div>

    {/* 🥗 Top 10 Diets Table */}
    <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Top 10 Recommended Diets</h2>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-pink-100 text-pink-700">
          <tr>
            <th className="text-left px-4 py-2 border">#</th>
            <th className="text-left px-4 py-2 border">Description</th>
            <th className="text-left px-4 py-2 border">Calories</th>
          </tr>
        </thead>
        <tbody>
          {dietResult.top_10_diets?.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border text-gray-700">{index + 1}</td>
              <td className="px-4 py-2 border text-gray-700">{item.Shrt_Desc || item.description}</td>
              <td className="px-4 py-2 border text-gray-700">{item.Energ_Kcal || item.calories} kcal</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* 📥 Download Button */}
    <div className="flex justify-center">
      <button
        onClick={handleDownload}
        className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-lg shadow transition-all"
      >
        Download Report
      </button>
    </div>
  </div>
</div>
}
</div>

    )
};

export default DietRecommendationForm;