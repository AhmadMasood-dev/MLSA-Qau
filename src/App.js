import "./App.css";
export default function App() {
  return (
    <>
      <TopBanner />
      <NavBar />
      <HeroSection />
      <About />
      <Events />
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
  const navLinks = ["Home", "About", "Events", "Team", "Contact"];
  return (
    <div>
      <div class="container main-nav flex items-center  ">
        <div className="flex gap-1  ">
          <a href="/" class="company-logo">
            <img src="/img/horizontal 1.1.png" alt="" />
          </a>
        </div>
        <div className="nav-links  justify-center" id="nav-links">
          <ul className="flex ">
            {navLinks.map((nav) => (
              <Links name={nav} />
            ))}
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
      <a href="/" class="hover-links ml-2">
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
      <div className="justify-center p-10 text-[#227cc1] text-center  items-center flex w-full h-full ">
        <div className="font-serif">
          <h1 className="mb-5 font-bold ">
            <p className="text-5xl mb-2">Microsoft Learn Student Ambassadors</p>
            <span className="text-4xl">Qauid-e-Azam University</span>
          </h1>
          <h3 className="text-xl">Be a force for good-locally and globally</h3>
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <section className="text-gray-500  body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/img/asset 2.jpeg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16  md:items-start md:text-left items-center text-center  ">
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
          <Button name="Learn More" />
        </div>
      </div>
    </section>
  );
}
function Events() {
  return (
    <section class="text-gray-600 body-font ">
      <div class="container px-5 py-24 mx-auto">
        <div className="text-center  px-5 py-24 mx-auto">
          <h1 className="text-4xl font-bold mb-5">Events</h1>
          <p className="px-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. . Sit
            deserunt sint, fuga, iste, adipisci id est architecto dolor rerum
            esse minima? Dolores exercitationem quisquam quidem a odio dicta.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-3/5 md:h-36 w-full  bg-cover bg-center"
                src="/img/__next_static_media_event7.7051231d.jpg"
                alt="blog"
              />
              <div class="p-6">
                <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                  The Azure Fundamentals
                </h1>
                <p class="leading-relaxed mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nobis delectus accusantium obcaecati nisi corporis? Corporis
                  asperiores, magnam voluptatibus nesciunt dolorum quit.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    class="text-[#2294ed] inline-flex items-center md:mb-2 lg:mb-0"
                    href="/"
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2 "
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-3/5 md:h-36 w-full  bg-cover bg-center"
                src="/img/__next_static_media_event7.7051231d.jpg"
                alt="blog"
              />
              <div class="p-6">
                <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                  The Azure Fundamentals
                </h1>
                <p class="leading-relaxed mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nobis delectus accusantium obcaecati nisi corporis? Corporis
                  asperiores, magnam voluptatibus nesciunt dolorum quit.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    class="text-[#2294ed] inline-flex items-center md:mb-2 lg:mb-0"
                    href="/"
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2 "
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-3/5 md:h-36 w-full  bg-cover bg-center"
                src="/img/__next_static_media_event7.7051231d.jpg"
                alt="blog"
              />
              <div class="p-6">
                <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                  The Azure Fundamentals
                </h1>
                <p class="leading-relaxed mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nobis delectus accusantium obcaecati nisi corporis? Corporis
                  asperiores, magnam voluptatibus nesciunt dolorum quit.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a
                    class="text-[#2294ed] inline-flex items-center md:mb-2 lg:mb-0"
                    href="/"
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2 "
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
