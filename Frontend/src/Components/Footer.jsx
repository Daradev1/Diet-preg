import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-4">
      <div className=" mx-auto px-4 text-center">
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} DietPreg. All rights reserved.</p>
        <div className="flex md:flex-row flex-col justify-center items-center space-x-4">
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>jeolinks2003@gmail.com </span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span>+234-8065123660</span>
          </div>
          <div className="flex items-center">
            <FaMapMarker className="mr-2" />
            <span>EKSU, Ado Ekiti.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;