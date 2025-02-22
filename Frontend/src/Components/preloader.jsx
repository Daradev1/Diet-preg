import React from 'react';

const PinkPreloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-ping duration-200"></div>
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-ping delay-300 duration-200"></div>
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-ping delay-500 duration-200"></div>
      </div>
    </div>
  );
};

export default PinkPreloader;