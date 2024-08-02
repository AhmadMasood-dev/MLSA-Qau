import "../App.css";
import About from "../components/About";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/shared/NavBar";
import TopBanner from "../components/TopBanner";
import event from "../assets/img/__next_static_media_event7.7051231d.jpg";
import Team from "../components/Team";
export default function Home() {
  return (
    <>
      <TopBanner />
      <NavBar />
      <HeroSection />
      <About />
      <Events />
      <Team />
    </>
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
                src={event}
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
