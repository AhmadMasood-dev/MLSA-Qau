import Button from "./generics/Button";
import AboutImg from "../assets/images/asset 2.jpeg";
export default function About() {
  return (
    <section className="text-gray-500  body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={AboutImg}
          />
     
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:ypl-24 md:pl-16  md:items-start md:text-left items-center text-center  ">
          <div className="">
            <h1 className="title-font sm:text-4xl  text-3xl mb-5 font-medium text-black font-left">
              About Us
            </h1>
            <p className="mb-5 leading-relaxed">
              We are a dynamic, hyper focused community supported by Microsoft
              mainly operating in the Qau University. Our mission is to empower
              the masses through advanced technological education and encourage
              innovation.
            </p>
            <p className="mb-8 leading-relaxed">
              We are a dynamic, hyper focused community supported by Microsoft
              mainly operating in the Qau University. Our mission is to empower
              the masses through advanced technological education and encourage
              innovation.
            </p>
          </div>
          <Button name="Learn More" styles="secondary-button " />
        </div>
      </div>
    </section>
  );
}
