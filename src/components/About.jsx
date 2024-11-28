import Button from "./generics/Button";
import { aboutImg } from "../assets/images/Image.js";
export default function About() {
  return (
    <section className="text-white bg-primary " id="About">
      <div
        className="container flex flex-col items-center justify-center px-5 py-24 mx-auto md:flex-row"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={aboutImg}
          />
        </div>
        <div className="items-center text-center md:w-1/2 lg:ypl-24 md:pl-16 md:items-start md:text-left">
          <div className="">
            <h1 className="mb-5 text-3xl font-bold title-font sm:text-4xl font-left">
              About Us
            </h1>
            <p className="mb-5 text-lg font-medium leading-7">
              The Microsoft Learn Student Ambassadors (MLSA) at Quaid-i-Azam
              University (QAU) is a dynamic community dedicated to empowering
              students through technology and collaborative learning. Our
              mission is to bridge the gap between academia and the tech
              industry by providing opportunities for students to enhance their
              skills, engage in hands-on projects, and connect with industry
              professionals. Through workshops, hackathons, and networking
              events, we foster an environment where creativity and innovation
              thrive, encouraging students to explore new technologies and apply
              their knowledge in real-world scenarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
