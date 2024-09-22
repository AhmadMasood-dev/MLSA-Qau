import React from "react";

import ConstactForm from "./ContactForm";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section className="text-white bg-primary sm:px-16">
      <div
        className="container flex flex-col lg:flex-row lg:max-w-6xl w-full px-5 py-24 mx-auto section"
        id="Contact"
      >
        <ContactNow />
        <ConstactForm />
      </div>
    </section>
  );
};

function ContactNow() {
  return (
    <div
      className="lg:w-1/2 w-full mb-16"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <h1 className="text-4xl text-center font-bold mb-5">Contact Us</h1>
      <p className="leading-relaxed text-center sm:text-lg mb-10">
        We're here to assist you! If you have any questions or need assistance,
        please feel free to reach out to us.
      </p>
      <div className="text-sky-300 ml-5">
        <div className="w-full rounded text-base outline-none py-7 text-center justify-center md:justify-start md:px-3 hover:bg-primary border-2 border-secondary my-5 transition duration-300 ease-in-out flex items-center flex-wrap">
          <IoIosMail className="sm:inline-block mr-3 sm:h-6 sm:w-6" />
          <span>mlsaqau@gmail.com</span>
        </div>
        <div className="w-full rounded text-base outline-none text-center py-8 px-5 hover:bg-primary border-2 md:px-3 md:text-left border-secondary my-5 transition duration-300 ease-in-out">
          <FaPhoneVolume className="inline-block mr-3 h-6 w-5" />
          <span>+92 3007050192</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
