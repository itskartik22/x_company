import Image from 'next/image';
import React from 'react';
import logo from '../../public/images/logo-bg-3 2.svg';

const Footer = () => {
  return (
    <footer id='contact-section' className="bg-white xl:py-8">
      <div className="bg-black flex flex-col gap-8  max-w-7xl mx-auto p-8 rounded-lg shadow-md">
          <div className="md:w-auto w-4/5 self-center mb-6 md:mb-0 text-center md:text-left">
            <Image
                src={logo}
                alt="Logo"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full md:w-auto md:space-x-16 text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">Contact nums</p>
              <p className="text-white font-semibold">+91 0000000000</p>
            </div>
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">Gmail</p>
              <p className="text-white font-semibold">demo@gmail.com</p>
            </div>
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">Adress</p>
              <p className="text-white font-semibold">Mumbai, India</p>
            </div>
            <div>
              <p className="text-gray-400">Leave a request</p>
              <p className="text-white font-semibold">Leave a request</p>
            </div>
          </div>
        <div className="text-center mt-8">
          <p className="text-gray-500">We work throughout the world</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;