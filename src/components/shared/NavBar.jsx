import Button from "../generics/Button";
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
    <nav className="flex flex-wrap items-center justify-between px-5 py-3 mx-auto overflow-hidden bg-primary ">
      <a href="#">
        <img src={logo} className="w-auto md:w-[250px] h-[55px] " alt="logo" />
      </a>
      <div className="flex md:hidden">
        <button id="hamburger" onClick={handleHamburger}>
          <img
            className="block toggle"
            src={bars}
            width="30"
            height="30"
            alt="open"
          />
          <img
            className="hidden toggle"
            src={cross}
            width="30"
            height="30"
            alt="close"
          />
        </button>
      </div>
      <div className="items-center hidden w-full mt-5 text-center border-t-2 toggle md:w-auto md:flex md:mt-0 border-secondary md:border-none ">
        {navLinksContent.map((item) => (
          <a
            href={`#${item}`}
            className="block py-3 mr-5 text-lg font-medium text-white md:inline-block hover:text-secondary md:border-none"
            key={item}
            mr-3
          >
            {item}
          </a>
        ))}
        <a href="https://linktr.ee/mlsaqau" target="_blank" rel="noreferrer">
          <Button
            name="Join Now"
            styles={
              "text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md font-semibold px-5 py-2.5 text-center me-2  transition ease-out duration-300 dark:focus:ring-blue-800 border-2 hover:border-secondary invisible md:visible"
            }
          />
        </a>
      </div>
    </nav>
  );
}
