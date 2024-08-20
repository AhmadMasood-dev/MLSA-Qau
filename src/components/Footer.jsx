import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { logo } from "../assets/images/Image";
const Footer = () => {
  return (
    <footer className="bg-[#0A1F44] text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 space-y-10 lg:space-y-0">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14 " />
        </div>

        <nav className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 text-center">
          <a href="/" className="text-gray-300 hover:text-secondary">
            HOME
          </a>
          <a href="/" className="text-gray-300 hover:text-secondary">
            EVENTS
          </a>
          <a href="/" className="text-gray-300 hover:text-secondary">
            ABOUT US
          </a>
          <a href="/" className="text-gray-300 hover:text-secondary">
            CONTACT
          </a>
        </nav>

        <div className="flex gap-10 ">
          <a href="/" target="_blank">
            <FaFacebook className=" h-6 w-6 text-[#5E708C] hover:text-secondary hover:h-7 hover:w-7 transition-all ease-out duration-700" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className=" h-6 w-6 text-[#5E708C] hover:text-secondary hover:h-7 hover:w-7 transition-all ease-out duration-700" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className=" h-6 w-6 text-[#5E708C] hover:text-secondary hover:h-7 hover:w-7 transition-all ease-out duration-700" />
          </a>
        </div>
      </div>

      <hr className="my-4 border-gray-600" />

      <div className="container mx-auto py-4 px-5 flex  flex-col sm:flex-row justify-between  ">
        <div>
          <p className="text-gray-400 text-sm sm:text-left text-center   mb-10">
            © 2024 TechOps Team —
            <span className="text-secondary cursor-pointer">@mlsaqau</span>
          </p>
        </div>

        <div className="text-center flex flex-col  md:flex-row space-y-10 md:space-y-0  ">
          <a href="/" className="text-gray-300 hover:text-secondary mx-2">
            Privacy Policy
          </a>
          <a href="/" className="text-gray-300 hover:text-secondary mx-2">
            Terms of Services
          </a>
          <a href="/" className="text-gray-300 hover:text-secondary mx-2">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
