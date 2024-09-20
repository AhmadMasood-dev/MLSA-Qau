import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { logo } from "../assets/images/Image";
const Footer = () => {
  return (
    <footer className="bg-[#0A1F44] text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 space-y-10 lg:space-y-0">
        <div className="flex items-center space-x-2">
        
          <a href="#">
            <img src={logo} alt="Logo" className="h-14 " />
          </a>
        </div>

        <nav className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 text-center">
          <a href="#About" className="text-gray-300 hover:text-secondary">
            ABOUT US
          </a>{" "}
          <a href="#Vision" className="text-gray-300 hover:text-secondary">
            VISION
          </a>
          <a href="#Events" className="text-gray-300 hover:text-secondary">
            EVENTS
          </a>
          <a href="#Team" className="text-gray-300 hover:text-secondary">
            TEAM
          </a>
          <a href="#Contact" className="text-gray-300 hover:text-secondary">
            CONTACT
          </a>
        </nav>

        <div className="flex gap-10 ">
          <a href="https://chat.whatsapp.com/BALMaDfWeKu3RZBRUpdPx6" target="_blank">
            <FaWhatsapp className=" h-6 w-6 text-[#5E708C] hover:text-secondary hover:h-7 hover:w-7 transition-all ease-out duration-700" />
          </a>
          <a href="https://www.instagram.com/mlsaqau/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className=" h-6 w-6 text-[#5E708C] hover:text-secondary hover:h-7 hover:w-7 transition-all ease-out duration-700" />
          </a>
          <a href="https://www.linkedin.com/company/microsoft-learn-student-ambassadors-qau/" target="_blank" rel="noopener noreferrer">
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
          <p className="text-gray-300 hover:text-secondary mx-2">
            Privacy Policy
          </p>
          <p className="text-gray-300 hover:text-secondary mx-2">
            Terms of Services
          </p>
          <p className="text-gray-300 hover:text-secondary mx-2">
            Cookie Settings
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
