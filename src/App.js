import "./App.css";
export default function App() {
  return (
    <>
      <TopBanner />
      <NavBar />
      <HeroSection />
      <About />
    </>
  );
}

function TopBanner() {
  return (
    // <!-- top banner -->
    <div class="top-banner">
      <div class="container">
        <div class="small-bold-text banner-text">
          📣 Interviews is now in beta! Read more →
        </div>
      </div>
    </div>
  );
}
function NavBar() {
  return (
    <div>
      <div class="container main-nav flex  ">
        <div className="flex gap-1">
          <a href="/" class="company-logo">
            <img src="img/newLogo.png" alt="" />
          </a>
          <p className="text-sm text-gray-800">
            Microsoft Learn Student Ambassadors
            <span className="text-lg  text-blue-500 custom-width">
              Qauid-e-Azam University
            </span>
          </p>
        </div>
        <div class="nav-links" id="nav-links">
          <ul class="flex">
            <Links name="Home" />
            <Links name="About" />
            <Links name="Events" />
            <Links name="Team" />
            <Links name="Contact" />
            <Button name="Join Us" />
          </ul>
        </div>
        <a href="/" class="nav-toggle hover-links" id="nav-toggle">
          <i class="fa-solid fa-bars"></i>
        </a>
      </div>
    </div>
  );
}
function Links({ name }) {
  return (
    <li>
      <a href="/" class="hover-links">
        {name}
      </a>
    </li>
  );
}
function Button(props) {
  return (
    <li>
      <a href="/" class="hover-links primary-button">
        {props.name}
      </a>
    </li>
  );
}
function HeroSection() {
  return (
    <div className="h-[35rem] w-full p-10  ">
      <div className="justify-center p-10 text-blue-500 text-center  items-center flex w-full h-full ">
        <div className="font-serif">
          <h2 className="mb-5 font-bold ">
            Microsoft Learn Student Ambassadors
            <span className="custom-width">Qauid-e-Azam University</span>
          </h2>
          <h4>Be a force for good-locally and globally</h4>
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <section className="text-gray-400  body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/img/asset 2.jpeg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16  md:items-start md:text-left items-center text-center ">
          <div className="">
            <h1 className="title-font sm:text-4xl  text-3xl mb-5 font-medium text-black font-left">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed">
              We are a dynamic, hyper focused community supported by Microsoft
              mainly operating in the Qau University. Our mission is to empower
              the masses through advanced technological education and encourage
              innovation.
            </p>
          </div>
          <Button name="Learn More" />
        </div>
      </div>
    </section>
  );
}
