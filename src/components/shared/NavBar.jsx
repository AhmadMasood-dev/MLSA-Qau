import JoinLink from "../generics/JoinLink";
import { logo, bars, cross } from "../../assets/images/Image.js";
export default function NavBar({ isMobile, setIsMobile }) {
  const navLinksContent = ["About", "Vision", "Events", "Team", "Contact"];
  function handleHamburger() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
    setIsMobile(!isMobile);
  }

  return (
    <nav className="flex flex-wrap items-center justify-between py-3 px-5  bg-primary overflow-hidden mx-auto ">
      <a href="#">
        <img src={logo} className="w-auto md:w-[250px] h-[55px] " alt="logo" />
      </a>
      <div className="flex md:hidden">
        <button id="hamburger" onClick={handleHamburger}>
          <img
            className="toggle block"
            src={bars}
            width="30"
            height="30"
            alt="open"
          />
          <img
            className="toggle hidden"
            src={cross}
            width="30"
            height="30"
            alt="close"
          />
        </button>
      </div>
      <div className="toggle hidden w-full md:w-auto md:flex text-center  mt-5 md:mt-0 border-t-2 border-secondary md:border-none items-center ">
        {navLinksContent.map((item) => (
          <a
            href={`#${item}`}
            className="block md:inline-block text-white hover:text-secondary mr-5 py-3 font-medium  md:border-none"
            key={item}
            mr-3
          >
            {item}
          </a>
        ))}
        <JoinLink
          name="Join Now"
          styles={
            "text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  transition ease-out duration-300 dark:focus:ring-blue-800 border-2 hover:border-secondary invisible md:visible"
          }
        />
      </div>
    </nav>
  );
}
