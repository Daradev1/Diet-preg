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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500"
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
        <label className="block text-sm font-medium text-pink-400">Height in (meters) </label>
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
          <option value="ThirdTrimester ">Third Trimester</option>
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
        className="w-28 bg-pink-600 text-white h-10 mt-4  rounded-md hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        Submit
      </button>
          </form>
          </div>
      ) : 
      <div className='mx-auto flex flex-col justify-center'>
 
      <table ref={reportRef} style={{ width: "100%", borderCollapse: "collapse" }}>
      <div className='w-full items-center justify-center flex'>
      <span className='text-center my-6 text-2xl text-pink-500 font-semibold capitalize'>Top 10 recommended Diets</span>
    <div className='w-9 h-1 mt-2 bg-pink-600'>

    </div>
      </div>
  <thead>
    <tr>
      <th className='text-pink-500' style={{ border: "1px solid #ccc", padding: "0.5rem" }}>#</th>
      <th className='text-pink-500'  style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Description</th>
      <th className='text-pink-500' style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Calories</th>
    </tr>
  </thead>
  <tbody>
    {dietResult.top_10_diets.map((item, index) => (
      <tr key={index}>
        <td className='text-gray-500'  style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{index + 1}</td>
        <td className='text-gray-500'  style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{item.description}</td>
        <td className='text-gray-500'  style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{item.calories}</td>
      </tr>
    ))}
  </tbody>
</table>
      <button onClick={()=>handleDownload()} className='capitalize bg-pink-600 text-white mt-3 drop-shadow-2xl rounded-sm py-1.5 px-2.5 mx-auto text-center '>
        downaload
      </button>
      </div>}
    
    </div>
    )
};

export default DietRecommendationForm;