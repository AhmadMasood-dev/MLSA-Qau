import Button from "./generics/Button";
import {aboutImg} from "../assets/images/Image.js";
export default function About() {
  return (
    <section className="text-white bg-primary " id="About" >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center" data-aos="zoom-in-up"   data-aos-duration="1000">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={aboutImg}
          />
        </div>
        <div className=" md:w-1/2 lg:ypl-24 md:pl-16  md:items-start md:text-left items-center text-center  ">
          <div className="">
            <h1 className="title-font sm:text-4xl  text-3xl mb-5 font-medium  font-left">
              About Us
            </h1>
            <p className="mb-5 leading-relaxed">
            The Microsoft Learn Student Ambassadors (MLSA) at Quaid-i-Azam University (QAU) is a dynamic community dedicated to empowering students through technology and collaborative learning. Our mission is to bridge the gap between academia and the tech industry by providing opportunities for students to enhance their skills, engage in hands-on projects, and connect with industry professionals. Through workshops, hackathons, and networking events, we foster an environment where creativity and innovation thrive, encouraging students to explore new technologies and apply their knowledge in real-world scenarios.
            </p>
            <p className="mb-8 leading-relaxed">
As part of a global initiative, we strive to create an inclusive platform that welcomes students of all backgrounds and experience levels. By participating in MLSA QAU, members gain valuable insights, develop essential technical skills, and build a strong network within the tech community. Together, we are committed to promoting a culture of learning, collaboration, and growth, ensuring that every student can thrive in today’s rapidly evolving technological landscape. Join us in our journey to inspire, educate, and make a positive impact!
            </p>
          </div>
          <Button name="Learn More" styles="secondary-button " />
        </div>
      </div>
    </section>
  );
}
