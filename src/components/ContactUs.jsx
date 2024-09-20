import React, { useState } from "react";
import Swal from "sweetalert2";
import Button from "./generics/Button";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }
  function hanldeResetForm(e) {
    e.preventDefault();
    setName("");
    if (!email.includes("@")) {
      alert("@ is missing in the email");
      return;
    } else setEmail("");
    setMessage("");

    Swal.fire({
      title: "Good job!",
      text: "Thanks! We have received your message.",
      icon: "success",
    });
  }
  return (
    <section className="text-white  bg-primary sm:px-16">
      <div
        className="container flex flex-col lg:flex-row lg:max-w-6xl  w-full px-5 py-24 mx-auto section"
        id="Contact"
      >
        <div
          className=" lg:w-1/2 w-full mb-16"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl text-center  font-bold  mb-5">Contact Us</h1>
          <p className="leading-relaxed  text-center sm:text-lg mb-10   ">
            We're here to assist you! If you have any questions or need
            assistance, please feel free to reach out to us.
          </p>
          <div className=" text-sky-300 ml-5 ">
            <div className="w-full  rounded  text-base outline-none  py-7 text-center justify-center md:justify-start md:px-3  hover:bg-primary border-2    border-secondary my-5 transition duration-300 ease-in-out flex items-center flex-wrap  ">
              <IoIosMail className="sm:inline-block mr-3 sm:h-6 sm:w-6 " />
              <span>mlsaqau@gmail.com</span>
            </div>
            <div className="w-full  rounded  text-base outline-none text-center   py-8 px-5  hover:bg-primary border-2   md:px-3 md:text-left border-secondary my-5 transition duration-300 ease-in-out ">
              <FaPhoneVolume className="inline-block mr-3 h-6 w-5 " />
              <span>+92 3007050192</span>
            </div>
          </div>
        </div>
        <div
          className=" lg:w-2/3 w-full mt-10 md:mt-0 lg:pl-20"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl  text-center mb-16 font-bold ">
            Contact Form
          </h1>
          <form action="" id="submit-contact-form">
            <div className="p-2 w-full ">
              <div className="relative">
                <label for="name" className="leading-7 py-4 text-lg ">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={handleName}
                  className="w-full bg-primary rounded border border-secondary  focus:border-blue-500 focus:bg-slate-300 mt-3 mb-5 focus:text-black focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-2 px-2 leading-8 transition-colors duration-200 ease-in-out "
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="emailField" className="leading-7 py-4 text-lg ">
                  Your Email
                </label>
                <input
                  type="email"
                  name="emailField"
                  id="emailField"
                  required
                  value={email}
                  onChange={handleEmail}
                  className="w-full bg-primary rounded border border-secondary  focus:border-blue-500 focus:bg-slate-300 mt-3 mb-5 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-2 px-2 leading-8 transition-colors duration-200 ease-in-out "
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="message" className="leading-7 py-4 text-lg ">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={handleMessage}
                  className="w-full bg-primary rounded border border-secondary focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition duration-200 ease-in-out "
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <Button
                name="send Message ✉"
                styles={
                  "text-white  border-2 border-secondary py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg font-medium shadow-lg text-center duration-900 ease-in-out transition "
                }
                onClick={hanldeResetForm}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
