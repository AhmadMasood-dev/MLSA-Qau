import Button from "../generics/Button";
import logo from "../../assets/images/horizontal 1.1 w.png";

export default function NavBar({ mobile, setMobile }) {
  const navLinksContent = ["Home", "About", "Events", "Team", "Contact"];
  function handleHamburger() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
    setMobile((mobile)=>!mobile );
  }
  return (
    <nav className="flex flex-wrap items-center justify-between p-3  bg-primary overflow-hidden">
      <img src={logo} className="w-[250px] h-[55px] " alt="" />
      <div className="flex md:hidden">
        <button id="hamburger" onClick={handleHamburger}>
          <img
            className="toggle block"
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="48"
            height="48"
            alt="open"
          />
          <img
            className="toggle hidden"
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="48"
            height="48"
            alt="close"
          />
        </button>
      </div>
      <div className="toggle hidden w-full md:w-auto md:flex text-center text-bold mt-5 md:mt-0 border-t-2 border-secondary md:border-none items-center ">
        {navLinksContent.map((item) => (
          <a
            href="/"
            className="block md:inline-block text-white hover:text-secondary px-4 py-3   md:border-none"
            key={item}
            mr-3
          >
            {item}
          </a>
        ))}
        <Button
          name="Join Now"
          styles={
            "text-white py-2 px-3 bg-secondary rounded hover:bg-primary transition ease-out duration-300 border-2 hover:border-secondary invisible md:visible"
          }
        />
      </div>
    </nav>
  );
}
