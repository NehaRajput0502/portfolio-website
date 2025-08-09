import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#ffeef1] text-center py-10 mt-20 text-sm text-gray-800 font-medium tracking-wide">
      
      {/* ✨ Quote section */}
      <p className="mb-6">
       "Always learning, Always improving. ✨."
      </p>

      <div className="flex justify-center space-x-6 text-2xl mb-6 text-pink-600">
        <a
          href="mailto:neharajput0502@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://github.com/NehaRajput0502"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/neha-rajput-0502neha/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/neha_rajput0502/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaInstagram />
        </a>
      </div>

      <p className="text-xs text-gray-500">
        © 2025 Neha Rajput. All rights reserved.
      </p>

      <div className="mt-2 text-blue-300 text-sm tracking-widest select-none">
        <center>*:･ﾟ✧*:･ﾟ✧</center>
      </div>
    </footer>
  );
};

export default Footer;