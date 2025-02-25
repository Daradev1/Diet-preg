import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center">
            <FaMapMarker className="mr-2" />
            <span>123 Street, City</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;