import React, { useState } from "react";
import Button from "./generics/Button";
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
    // if (name === "") alert("Please enter a name");
    // else
    setName("");
    if (!email.includes("@")) {
      alert("@ is missing in the email");
    } else setEmail("");
    setMessage("");
  }
  return (
    <section className="text-white body-font bg-primary px-16">
      <div
        className="container flex flex-col md:flex-row lg:max-w-5xl  w-full px-5 py-12 md:py-24 mx-auto section"
        id="contact-form"
      >
        <div className="md:w-1/3 w-full">
          <h1 className="text-4xl  sm:text-4xl font-bold title-font mb-4">
            Contact Us
          </h1>
          <p className="leading-relaxed text-xl mb-5  ">
            We're here to assist you! If you have any questions or need
            assistance, please feel free to reach out to us.
          </p>

          <label for="CEmail" className="leading-7 text-lg ">
            Email
          </label>
          <input
            type="text"
            id="CEmail"
            placeholder="ahmadmasood.dev@gmail.com"
            disabled
            className="w-full rounded  text-base outline-none  py-5 px-5  hover:bg-primary hover:border-2 hover:border-secondary my-5 transition duration-300 ease-in-out "
          />
          <label for="PhoneNumber" className="leading-7 text-lg ">
            Phone Number
          </label>
          <input
            type="text"
            id="PhoneNumber"
            placeholder="+92 3160707856"
            disabled
            className="w-full   rounded  text-base outline-none  py-5 px-5 hover:bg-primary hover:border-2 hover:border-secondary my-5 transition duration-300 ease-in-out"
          />
        </div>
        <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
          <h1 className="text-4xl  sm:text-4xl font-bold title-font mb-4">
            Contact Form
          </h1>
          <form
            action="send-contact.php"
            method="post"
            id="submit-contact-form"
          >
            <div className="p-2 w-full">
              <div className="relative">
                <label for="name" className="leading-7 py-4 text-lg ">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required=""
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
                  required=""
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
                  "flex text-white  border-2 border-secondary py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-semibold shadow-lg mx-0 flex-col text-center g-recaptcha transition duration-900 ease-in-out"
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
