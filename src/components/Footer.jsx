import React from 'react'
import { FaFacebook, FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { GiEvilBook } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-wide">
            <GiEvilBook></GiEvilBook> KinKeeper Library
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your ultimate companion for tracking, borrowing, and exploring a vast world of books. Manage your reading status seamlessly!
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <p className="text-sm text-gray-400">Connect with us on our official handles:</p>
          <div className="flex space-x-4">
            {/* */}
            <a href="https://web.facebook.com/home.php" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300">
              <FaFacebook size={20} />
            </a>
            {/* */}
            <a href="https://github.com/mdtanjidkhan" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 hover:text-white rounded-xl transition-all duration-300">
              <FaGithub size={20} />
            </a>
            {/* */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-blue-500 hover:text-white rounded-xl transition-all duration-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* (Contact Us) */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {/*  */}
            <li className="flex items-center space-x-3">
              <FaEnvelope size={16} className="text-indigo-400" />
              <span>tanjidkhan.dev@gmail.com</span>
            </li>
            {/* */}
            <li className="flex items-center space-x-3">
              <FaPhoneAlt size={14} className="text-indigo-400" />
              <span>+880 1831562894</span>
            </li>
            {/* */}
            <li className="flex items-center space-x-3">
              <MdLocationOn size={18} className="text-indigo-400" />
              <span>Sirajganj, Bangladesh</span>
            </li>
          </ul>
        </div>

      </div>

    {/*  */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} KinKeeper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;