import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import SubmitButton from "./generics/SubmitButton";

function ContactForm() {
  const [state, handleSubmit] = useForm("mgvwjkyn");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const handleResetForm = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Call Formspree's handleSubmit
    await handleSubmit({ name, email, message }); // Pass the form data as an object
    if (!state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
      // Handle submission error (optional)
      Swal.fire({
        title: "Great Gob!",
        text: "Thanks! We have received your message.",
        icon: "success",
      });
    } else {
      setName("");
      setEmail("");
      setMessage("");
      Swal.fire({
        title: "Oops!",
        text: "There was a problem submitting your message.",
        icon: "error",
      });
    }
  };
  return (
    <div
      className="lg:w-2/3 w-full mt-10 md:mt-0 lg:pl-20"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <h1 className="text-4xl text-center mb-16 font-bold">Contact Form</h1>
      <form onSubmit={handleResetForm} id="submit-contact-form">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 py-4 text-lg">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={handleName}
              className="w-full bg-primary rounded border border-secondary focus:border-blue-500 focus:bg-slate-300 mt-3 mb-5 focus:text-black focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-2 px-2 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="emailField" className="leading-7 py-4 text-lg">
              Your Email
            </label>
            <input
              type="email"
              name="emailField"
              id="emailField"
              required
              value={email}
              onChange={handleEmail}
              className="w-full bg-primary rounded border border-secondary focus:border-blue-500 focus:bg-slate-300 mt-3 mb-5 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-2 px-2 leading-8 transition-colors duration-200 ease-in-out"
            />
            <ValidationError
              prefix="Email"
              field="emailField"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 py-4 text-lg">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={handleMessage}
              className="w-full bg-primary rounded border border-secondary focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition duration-200 ease-in-out"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <SubmitButton type="submit" disabled={state.submitting}>
            Send Message ✉
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
